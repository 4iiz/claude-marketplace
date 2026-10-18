// manager-tools SessionStart hook: the before-and-after record of which plugin version a PC runs
// (manager-package design, sections 6.1 and 7.3, test T5; bead claude-y70.37.3).
//
// Appends one line, "<UTC time> manager-tools <version> <computer name>", to
// %LOCALAPPDATA%\4iiz\manager-tools\versions.log. It writes nothing to standard output (hook
// output would reach the conversation) and it fails open: any error ends the script with exit
// code 0 and no message, so a PC where the log cannot be written never sees a hook error.
//
// It runs under wscript.exe (Windows Script Host, GUI subsystem), which gets no console window.
// A .cmd or PowerShell hook started from the Code tab's console-less parent flashes a terminal
// window and takes focus (measured 2026-10-14 in postgres-agent, pa-bsd8); wscript does not.
// It is JScript, not JavaScript: no let, const, arrow functions or template strings.
// No binary ships in a plugin (Guardrails G12); this is text, read by the host already on the PC.

try {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var shell = new ActiveXObject("WScript.Shell");
    var env = shell.Environment("PROCESS");

    var localAppData = env("LOCALAPPDATA");
    if (!localAppData) { WScript.Quit(0); }
    var computer = env("COMPUTERNAME") || "unknown";

    // The plugin's own manifest sits next to this script's folder.
    var hooksDir = fso.GetParentFolderName(WScript.ScriptFullName);
    var pluginRoot = fso.GetParentFolderName(hooksDir);
    var manifestPath = fso.BuildPath(fso.BuildPath(pluginRoot, ".claude-plugin"), "plugin.json");
    var version = "unknown";
    if (fso.FileExists(manifestPath)) {
        var manifest = fso.OpenTextFile(manifestPath, 1, false, 0);
        var text = manifest.AtEndOfStream ? "" : manifest.ReadAll();
        manifest.Close();
        var match = /"version"\s*:\s*"([^"]+)"/.exec(text);
        if (match) { version = match[1]; }
    }

    var dir = fso.BuildPath(localAppData, "4iiz");
    if (!fso.FolderExists(dir)) { fso.CreateFolder(dir); }
    dir = fso.BuildPath(dir, "manager-tools");
    if (!fso.FolderExists(dir)) { fso.CreateFolder(dir); }

    var now = new Date();
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    var stamp = now.getUTCFullYear() + "-" + pad(now.getUTCMonth() + 1) + "-" + pad(now.getUTCDate()) +
        "T" + pad(now.getUTCHours()) + ":" + pad(now.getUTCMinutes()) + ":" + pad(now.getUTCSeconds()) + "Z";

    var log = fso.OpenTextFile(fso.BuildPath(dir, "versions.log"), 8, true, 0);
    log.WriteLine(stamp + " manager-tools " + version + " " + computer);
    log.Close();
} catch (e) {
    // Fail open: a hook must never break a session.
}
WScript.Quit(0);

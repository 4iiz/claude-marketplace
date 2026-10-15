# 4IIZ MCP servers for Claude Code

One plugin, `manager-tools`, connects Claude Code (the Code tab in the Claude desktop app) to the
firm's reporting databases (postgres-agent), Jira and Confluence (Atlassian) and Zoho CRM.
Microsoft 365 and Teams come from Anthropic's own connector. Every server signs in as you, and
nothing in this repository is a credential.

You need Windows 11 with Windows Hello, and the Claude desktop app signed in to your Claude
account (personal or Team). Allow about 15 minutes.

## 1. Get postgres-agent.exe

An administrator emails you a one-time enrolment code from **no-reply@4iiz.io** ("Your
postgres-agent enrolment code"). Open the **download link in that email** and click **Download
postgres-agent.exe**. The link stops working once you use the code or when the code expires (72
hours after it was sent), and it works at most 5 times. Nothing can be downloaded without it. If
your link no longer works, ask an administrator for a new code. Check Junk Email and Microsoft 365
Quarantine if the email has not arrived.

## 2. Install and link this PC

Open PowerShell as yourself (not "Run as administrator") and run:

    & "$env:USERPROFILE\Downloads\postgres-agent.exe" install

If your browser saved the file under another name, such as `postgres-agent (1).exe`, use that name.
Type **y** when it offers Windows Hello sign-in, then enter your work email and the code from the
email. When it finishes, quit Claude Desktop from its icon by the clock (closing the window is not
enough), and start it again.

**Updates.** postgres-agent keeps itself up to date through this PC's signed sign-in to
postgres-agent.4iiz.io. There is nothing to download again. A new version is fetched in the
background after Claude first uses it on a given day, and runs from the next time Claude Desktop
starts.

**Set up before 12 October 2026?** Do step 1 once more with a new code email, run `install`, and
answer **N** to the Windows Hello question. Your PC is already linked.

## 3. Add the plugin (one of the two)

- **Upload:** download `manager-tools-<version>.zip` from
  https://github.com/4iiz/claude-marketplace/releases/latest, then in claude.ai choose
  Customize > Add > Upload plugin.
- **Marketplace:** in the Code tab, run

      /plugin marketplace add https://github.com/4iiz/claude-marketplace.git
      /plugin install manager-tools@4iiz-public

  then open `/plugin`, find the `4iiz-public` marketplace, and turn on automatic updates.

## 4. Sign in to Atlassian and Zoho CRM

In the Code tab, run `/mcp` and sign in to `atlassian` and `zoho-crm` with your own accounts.

## 5. Connect Microsoft 365

At claude.ai, open Settings > Connectors > Microsoft 365, choose Connect and sign in with your work
account.

## 6. Check

Run `/manager-tools:setup-check`. It should report four servers connected, and the plugin's
version.

**On a Team account:** if the upload in step 3 is refused, your Team Owner has turned member uploads
off and can upload the plugin for everyone instead. If step 5 shows no Microsoft 365, your Owner has
not added it yet.

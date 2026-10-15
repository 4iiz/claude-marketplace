@echo off
rem manager-tools: start the postgres-agent bridge (spec 2026-10-11-interim-mcp-kit-design.md, 4.1).
rem Standard output belongs to MCP: nothing but the bridge writes to it.
setlocal
set "PGA=%LOCALAPPDATA%\postgres-agent\current\postgres-agent.exe"
if not exist "%PGA%" (
  >&2 echo postgres-agent is not installed on this PC. Use the download link in your enrolment-code email, then in PowerShell, not as administrator, run it with the word install and enter your work email and the code.
  exit /b 1
)
"%PGA%" bridge
exit /b %ERRORLEVEL%

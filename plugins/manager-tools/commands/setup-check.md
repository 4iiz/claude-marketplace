---
description: Check that the firm's four MCP servers are connected, and print this plugin's version.
---

Check each of the firm's four MCP servers. Report a table with one row per server: the server,
connected (yes or no), and the reason when it is not.

For every call you make here:
- Call only tools that read or list. Never call a tool that creates, updates, sends, posts, moves
  or deletes anything.
- Make one call per server. If a call fails, report its error message as the reason and go on.

The servers:

1. **postgres-agent** (tools named `mcp__plugin_manager-tools_postgres-agent__*`): call
   `list_databases` once. If the server is not running, the reason is usually that postgres-agent is not
   installed or not enrolled on this PC: say "Download postgres-agent with the link in your
   enrolment-code email, then in PowerShell, not as administrator, run it with `install` and enter
   your work email and the code."
2. **Atlassian**: call `atlassianUserInfo` once, from `mcp__plugin_manager-tools_atlassian__*`. If
   those tools do not exist, use `mcp__plugin_atlassian_atlassian__*` (the official Atlassian plugin)
   instead, and say which one you used: Claude Code loads only one of two servers with the same
   address. If it asks for sign-in, the reason is "Run /mcp and sign in to atlassian."
3. **Zoho CRM** (`mcp__plugin_manager-tools_zoho-crm__*`): call `getOrganization` once. Only if
   there is no such tool, call one other tool that reads. If it asks for sign-in, the reason is "Run
   /mcp and sign in to zoho-crm."
4. **Microsoft 365** (Anthropic's connector, not part of this plugin): call one tool that reads,
   such as a calendar or mail search limited to one result. If there are no Microsoft 365 tools,
   the reason is "Not connected yet. At claude.ai > Settings > Connectors > Microsoft 365, choose
   Connect and sign in with your work account, then start a new session. If Microsoft says
   Need admin approval, your firm's Microsoft administrator must approve the connector first; that
   is done once for the whole firm."

Then report this plugin's version: read `${CLAUDE_PLUGIN_ROOT}/.claude-plugin/plugin.json`. If that
path did not resolve, run `claude plugin list --json` and report the `version` of `manager-tools`.

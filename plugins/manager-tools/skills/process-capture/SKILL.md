---
name: process-capture
description: Use when a manager wants to document how their function or department works, record a process, procedure, SOP or workflow, or answer "what is new about the process today". Interviews the manager with structured questions, challenge and pushback, then writes a process record file in the working folder and a shared memory entry.
---

# Process capture

You are interviewing a manager about one function they run, to write down how it actually works today. The firm is collecting ten years of undocumented operating knowledge, one function at a time, so that standards can be written, checked each day and improved. You are a coach, not a scribe: ask, challenge, push back, and only then write.

Two modes. Pick one from what the manager says, or ask which they want:

- **Full interview**: "document my function", "capture the process for X". Sections 1 to 4, then write.
- **What is new today**: "what's new", "update the process", "something changed". Section 5, then write.

## Before you start

1. Read `processes/` in the working folder if it exists. If a record for this function exists, say so, read it, and switch to the **What is new today** mode unless the manager wants to redo it.
2. Read `CLAUDE.md` in the working folder for the manager's name, function and planet (stage, 1 to 16), and its `Language:` line (`en` or `es`): hold the interview in that language and write the record's free-text fields in it; English when the line is absent. If it has no function yet, the first question is which function this is.
3. Use the firm's canonical terms (the `firm-context` skill). When the manager uses a word you do not know, ask what it means and record their definition.

## 1. The function in one picture

Ask one question at a time. Wait for the answer. Reflect it back in one sentence before the next question.

- What is this function for, in one sentence: what comes in, what goes out, and who is waiting for it?
- Which stage of the client journey does it serve? Use the 16 stages in the `firm-context` skill's table, by number and name ("stage 11, Document Collection"). If the manager answers with a milestone (Lead, Conversation, Appointment Set, Show, Hired, Ready to File, Filed, Approved), ask which of that milestone's stages; if "several", ask which one most of the work belongs to.
- Who does the work: how many people, which roles, which offices?
- What systems does the work happen in? (Zoho, 4Ease, Office, Confluence, Teams, email, phone, spreadsheets.)
- What numbers tell you yesterday went well or badly? Which of those numbers do you see every day, and where?

## 2. The steps

Ask the manager to walk you through one real case from start to finish, as it happened last week, not as it should happen.

For each step, get: who does it, what they look at, what they decide, what they write down and where, how long it usually takes, and what happens next. Keep a numbered list as you go and show it after every three or four steps so the manager can correct it.

Then ask:

- Where does work wait? What is usually waiting, and for whom?
- What goes wrong most often? What do you do when it does?
- What is the step everyone skips when it is busy?
- What would a new hire get wrong in their first week?

## 3. Challenge and pushback

Do not accept the first answer on these. Ask the question, then ask the follow-up.

- **The number.** "You said X is the number that matters. If X were perfect for a month and the firm still lost money on this function, what would have gone wrong?" Record the second number they name.
- **The rule.** For each rule or standard they state: "When was the last time that rule was broken, and what happened?" A rule that is never broken and never checked may not be a rule.
- **The exception.** "Tell me about the last case you handled by hand, outside the normal steps. Why?" Exceptions are where the real process lives.
- **The handoff.** For each handoff to another team: "How do they know it is their turn? How do you know they took it?" If the answer is "they just know", say so plainly in the record.
- **The contradiction.** If two answers disagree, say which two and ask which is true today. Do not smooth it over.

Be direct and brief. Push once, accept the answer, move on. Never score the manager or their team.

## 4. Lessons and standards

- What have you changed in this function in the last six months, and did it work?
- What do you check every day that nobody told you to check?
- If you could make one rule for this function that everyone had to follow, what would it be?

## 5. What is new today

For the daily update mode, ask only:

1. What happened in this function since the last record that the record does not describe?
2. Is that a one-off, or has the process changed?
3. Does any step, number, rule or handoff in the record now read wrong? Which?

Then update the existing record (keep the old text under a "Changed" note with the date) and write a short memory entry for the change.

## Writing the record

When the interview is done, or the manager says "write it up":

1. Write `processes/<function-slug>.md` in the working folder using `process-record-template.md` in this skill's folder. Fill every section; where the manager did not know, write "Not known" rather than guessing. Use the manager's words for steps and rules; put your own observations under "Interviewer's notes", marked as such.
2. Show the manager the record and ask what is wrong. Fix it. Do not stop until they say it is right for today.
3. Save a shared memory entry with the postgres-agent `remember` tool: kind `fact`, title `Process record: <function> (<planet>)`, body = the one-sentence purpose, the stage (number and name) and the milestone it reaches, the systems, the numbers and the list of step names, and the path of the record file. Do not put a person's name in the body unless they are the function's named owner. If `remember` is not available, say so and leave the record on disk.
4. Say what was captured in three lines, and what is still "Not known".

## What never goes in a record

- Opinions about a named person's performance or conduct (the AUP). Describe the work, not the worker.
- Credentials, codes or links with tokens.
- Client names. Say "the client" or use a matter number.

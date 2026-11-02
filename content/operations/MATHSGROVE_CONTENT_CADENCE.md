# MathsGrove · Current Two-Hour Publishing + Signature QA

**Effective 2 November 2026 · Asia/Kuwait.** This is the current schedule, superseding the previous three-hour and older two-hour/seven-hour programmes. Earlier details are retained below for historical traceability only.

| Live automation | Kuwait schedule | Actions |
| --- | --- | --- |
| MathsGrove · Content + Signature | 15:00, 17:00, 19:00, 21:00, etc., every 2 hours | Source-aligned research, original maths questions for Weekly/Daily/Exam, all supported board/levels/units, original multi-mark Signature/Signature Advanced/Specialist papers and schemes, secure vetted release |
| MathsGrove · Independent Maths QA | 16:00, 18:00, 20:00, 22:00, etc., every 2 hours | Independently check calculations, mark schemes, syllabus year/version, exam-board unit, unique questions per student, adaptive tier deliveries, marking, private evidence/RLS and website CI |
| MathsGrove · Evening Email | Around 20:00 each evening | Send factual updates and website/student/admin links via connected Gmail, including separate Signature editorial vs human-moderated/live status |

**The cadence is start-to-start scheduling, NOT uninterrupted two-hour execution.** Tasks must report verified work only. Neither the automated content agent nor QA may pretend to be the human examiner who signs off Signature papers or releases individual grade reports. Signature original draft papers and full marking schemes live in private Supabase; only metadata and workflow docs belong on public GitHub. Human moderation must precede editorial approval, and a separate delivery workflow is required before student assignment.

Updated detailed implementation: [Signature and two-hour content QA handoff](./2026-11-02-signature-and-two-hour-content-qa.md).

## Active authoring requirements

- Fill real four-week **unseen approved** supply for each route (board, paper/unit, level and programme): Weekly 32; Daily 112 plus Weekly 32; Exam 188 plus Weekly 32.
- Distinguish Signature premium written assessment content from the 20-item monthly Exam MCQ practice mock. Each Signature paper requires coherent total marks, subpart marks, examiner model solutions, moderation notes and recovery/report standards.
- Check active official 2026–2027 and subsequent syllabus variants and first-assessment dates, calculator policies, permissible units and command words; create original rather than copied questions.
- Keep student evidence, examiner feedback, grade reports, identity and answer keys private, and forbid repeated bank IDs or normalised stems.
- Treat a passing mathematical static check as separate from authenticated browser testing and human moderation; log each boundary precisely.

## Archived former schedules (inactive)

## Archived original cadence specification

# MathsGrove Mathematics — Recurring Quality Programme

**Timezone:** Asia/Kuwait (UTC+03:00). **Started:** 31 October 2026.
This is an operational handoff, not a promise that a scheduled task will run for a guaranteed duration.

## Independently named scheduled tasks
| Task | First run, Kuwait | Repeat | Deliverable |
| --- | --- | --- | --- |
| MathsGrove Syllabus Research | 1 Nov, 00:30 | Every 2 hours | Source-linked research and gap analysis in `content/research/` |
| MathsGrove Question Development | 1 Nov, 01:00 | Every 2 hours | Original bank items, exact solutions, verified publication log |
| MathsGrove Quality Audit | 1 Nov, 05:30 | Every 7 hours | Dated severity-graded mathematical, deployment and safety audit |

The intended research-to-writing offset is 30 minutes. Actual execution time depends on task runtime and tool availability. Never claim elapsed working time that cannot be verified.

## Release gates
1. Check the official specification and mapped qualification / academic tier / board.
2. Write an original stem rather than copying third-party examination material.
3. Check all algebra, arithmetic, domains, units, exact values, plausible distractors and unique MCQ key.
4. Render TeX notation and verify examiner working, timings and feedback.
5. Reject duplicate exact or normalised stems and prevent reuse from a student's prior question history.
6. Stage unverified content privately. The owner authorises publication only after the tests pass.
7. Re-read published Supabase counts and CI deployment status, then record commit IDs and failed checks.

## Initial verified publication
The first 12 items were approved and activated in the private Supabase question bank on 31 Oct 2026: four academic routes (AQA GCSE Foundation/Higher, Cambridge IGCSE Extended, Cambridge AS Level) × three programme scopes (Daily, Weekly, Exam). The original research is in `content/research/latest-handoff.json`, and metadata without answer keys in `content/programmes/published-original-20261031.json`.

Answer keys and full worked rationales must stay in private Supabase, not GitHub Pages. Published live questions may be automatically selected only for the assigned exam board and academic level. Prior question reuse is blocked, even if a bank item was duplicated under another ID.

**Coverage limitation:** This was the first small batch, not comprehensive exam-board coverage and not a completed Grove Exam full mock. Future cycles must expand the bank across IGCSE Core, Pearson GCSE/IGCSE, A Level A2, Further Mathematics, IB AA/AI SL/HL and TMUA before relying on automatic daily scheduling at scale. If unseen approved questions are exhausted, do not silently recycle them.

## What to log in each cycle
- Source URLs, syllabus version and copyright compliance; topics and routes covered.
- Exact count of new drafts, approved/published items, rejection reasons and mathematical check evidence.
- Live bank count by qualification, tier and board; remaining unseen items for sample routes.
- Evidence and examiner feedback integrity; student-submission safety; build/deployment outcomes.
- Known issues, next action and GitHub commit or Supabase migration references.

## Runbook
Never edit or delete real student submissions during question-bank operations. Avoid automatic release of human-marked practice reports. Keep diagnostic baseline marking separate from manually reviewed daily/weekly/exam practice. Use a read-only check for live student data unless explicitly authorised to edit it. Do not describe a failing deployment as verified.

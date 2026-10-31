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

# MathsGrove independent QA — 2026-11-03 08:00 Kuwait

## Live sources and limits
Read Supabase project `nwakgkxytovprrrwyahs` and GitHub `Mathora-mathematics/Mathora` default-branch commits. Latest observed commit `46476bf2b516d5707a7465e4acefdbb0500fb65a` (06:57 Kuwait content journal). No new approved batch after 00:12 UTC (03:12 Kuwait). This was a read-only production audit; no student data, questions, editorial states or human moderation changed. GitHub combined commit statuses returned an empty list, **not** a confirmed Actions or Pages pass; workflow outcome and browser runtime were not established.

## Inventory and publication
Live `private.grove_practice_bank`: approved/active 1,941; pilot/active 240; draft/inactive 49; total 2,230. The change from 48 to 49 drafts is the original Pearson Edexcel IAL P3 WMA13 weekly trig question `a953c0c3-0416-42ee-bc31-29e1c15821b8`, confirmed inactive and staged. No new approved questions since the previous QA report. Independently checked its equation: with t=tan(theta), 2(1+t²)-5t=5 gives (2t+1)(t-3)=0, roots -1/2 and 3, uniquely represented by -atan(1/2), atan(3) on (-pi/2,pi/2). All four displayed options are distinct; only the first matches the full solution set. Explanation and interval conditions correct on source inspection. Official current syllabus revision and browser KaTeX render were **not independently fetched/tested this run**; therefore left inactive. This is not an owner approval gate.

Re-read the most recent nine approved prompts, choices, keys, and explanations (last reviewed 2026-11-03 00:12 UTC): polar area 9pi/4; 6-vertex graph missing edges 7; invariant line y=-x; area 32/3; complex modulus 5sqrt(2); composite radical domain x>=2/3; sine-solution sum 5pi/2; Euler two-step 2.92; MST weight 14. Independently recomputed all nine from their supplied mathematical data; all nine answers consistent. No browser KaTeX or live official component-version verification this run; this is not a certification of those checks.

## Assignment, editorial, Signature
35 scheduled/completed/expired tasks across one distinct student; 10 materialised task items, zero repeated (student_id,bank_id) pairs, zero null bank IDs. This **does not** establish unseen stem/family uniqueness for future assignments. 516 approved-bank duplicate normalised-prompt groups remain (normalisation lowercases and strips whitespace); do not equate inventory duplicates with repeated student assignment. Family-level matching, adaptation, all tier routing, and client Ready status were not exercised end-to-end. Programme/mode distribution: Exam 27 scheduled exam_daily, 4 scheduled weekly, 1 scheduled mock and 1 expired exam_daily; Daily 1 scheduled and 1 completed.

Editorial deficits: 1,941/1,941 approved without reviewed_by, 36 without reviewed_at, 228 explanations shorter than 100 characters. No attribution fabricated.

Signature: 10 staged papers, 243 total marks, zero human-moderated. SQL independently sums paper-question marks, paper part marks, mark-scheme question marks and criteria awards: all 10/10 papers reconcile to 243. This is **structural only**, not independent mathematical rederivation of every Signature part, and no reports/grades released.

## Evidence, RLS, marking
Both `student-work` and `grove-student-exports` buckets have public=false. Five work-evidence rows all have matching student-work objects. Six checked private tables (practice bank, marks, Signature, tasks, task items, evidence) have RLS enabled; policy exploit tests and authenticated uploads were not performed. Ten practice marks have marked_by, two task feedback rows have updated_by. Server timer expiry, photo upload, cross-tenant isolation and performance profiling not verified.

## Actionable remaining priorities
1. Add a distinct-family gate to question selection and mock Ready status; 516 identical-prompt inventory groups demand contextual editorial review, not blanket deletion.
2. Reconcile tier and component stock against each student's unseen assigned stems; do not infer availability from raw approved counts.
3. Complete server-authoritative timed mock endpoints and test expiration and submission.
4. Improve editorial provenance and review 228 short explanations.
5. Verify official syllabus version, browser KaTeX and current GitHub Pages Actions before activating staged P3 question. Owner already preauthorised verified original practice publication; no manual approval request is required.
6. Independently recompute every Signature part before claiming mathematical certification; authorised human moderation remains mandatory.

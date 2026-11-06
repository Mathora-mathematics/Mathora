# MathsGrove independent QA — 2026-11-06 22:00 Asia/Kuwait

## Sources and method
Live read-only SQL in Supabase project `nwakgkxytovprrrwyahs` against private.grove_practice_bank, grove_tasks, grove_task_items, grove_signature_editorial; GitHub recent-commit inspection (latest prior commit `c75ea87d144446ab929d2939b3aab6ecc19f631e`). This is a sampled mathematical QA, NOT full certification of every new question, browser, RLS or current syllabus.

## Live inventory
2,236 total: approved/active 1,942 (weekly 339, daily 639, exam 964); pilot/active 240 (scope all, NOT editorial approved); draft/inactive 54 (weekly 16, daily 19, exam 19). No evidence of new activations from this snapshot versus prior journal; database lacks reliable created/updated timestamps for bank rows, so cannot certify publication deltas.

## Reproducible mathematical sample (all five inactive)
- `04eda30d-73f2-4b77-9000-34575004a348`: g(2)=2²−1=3; f(3)=3·3+3=12. Choices 12,9,15,6: only 12 correct; explanation consistent. Current official 0580 mapping not independently sourced.
- `08231b79-1369-4acb-a967-ebf6572d7097`: (3+4i)²=−7+24i and Re>0. (−3−4i)² same but Re<0; (3−4i)²=−7−24i; (4+3i)²=7+24i. Only 3+4i correct. Explanation consistent. Literal database strings contain doubled backslash escapes; browser KaTeX not tested.
- `0cdfe39f-5249-4cba-9d10-555680b48869`: (4+8+12)/3=8; 7,9,24 incorrect. Explanation consistent. Broad syllabus objective and low Higher-tier difficulty; HOLD.
- `10ecade3-6797-4820-87ad-896e19337775`: 66×5/6=55; 66,44,60 incorrect. Explanation consistent; basic skill not representative Higher challenge; HOLD.
- `168e5cc5-77aa-43da-b4b7-4211d65102eb`: linear scale 5 implies area scale 25; 5,10,125 incorrect. Explanation consistent; official 0580 objective not independently cross-checked. HOLD.

## Critical assignment/editorial finding
35 tasks (33 scheduled, 1 completed, 1 expired), 10 materialised bank IDs across 2 tasks. Completed Daily task has **4 items that are NOT approved-and-active** (SQL condition `b.active=false OR b.review_state<>'approved'`); expired Exam Daily task has six approved-and-active items. The four are not automatically mathematical defects, but the assignment pipeline permits non-approved items in completed work; investigate whether pilot eligibility is intentional and whether learner-facing Ready claims count pilots. Scheduled tasks have no materialised items, which may be on-open allocation. Do not change historical student submissions without evidence.

## Duplication and audit metadata
516 identical whitespace-normalised prompt groups involving 1,659 approved-active records; these are global family risks, not proven student repeats. All 1,942 approved-active records have null reviewer UUID; 36 null review timestamp; 228 explanations <100 chars. Per-student unseen-family checks and adaptation not authenticated/certified.

## Signature
13 editorial assessments, 279 declared marks; 0 have both human_moderated_by and human_moderated_at. Complete part-by-part recalculation not performed. Do not issue Signature grades/reports or assert moderation.

## Security, specification, CI and release
No effective RLS/storage-isolation, copyright provenance, official 2026–2027 board/component documents, browser KaTeX, mock timer, examiner workflow, or latest GitHub Pages CI end-to-end verification this run. These are UNVERIFIED, not passed. No database mutations; no practice activations; no Signature release. Preauthorisation for fully certified originals remains intact; do not impose an owner approval gate. Prioritise audit of four non-approved assigned items and route eligibility.

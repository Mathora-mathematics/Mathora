# MathsGrove independent QA — 2026-11-05 20:04 KWT

## Scope and evidence
Live read-only SQL against Supabase project `nwakgkxytovprrrwyahs`, schema `private`, and GitHub recent commit search for `Mathora-mathematics/Mathora`. This is a scoped audit, **not** a complete mathematical certification of all records. Latest repository commit seen before this journal: `be444b9b23adb345d9df4165c9c7514acc261c17` (19:02 KWT editorial inventory journal).

## PASS — reproducible database observations
- `SELECT review_state,active,count(*) ... GROUP BY 1,2`: approved/active 1,942; pilot/active 240; draft/inactive 54; total 2,236.
- Approved provenance metadata: 1,942/1,942 have null `reviewed_by`; 36/1,942 have null `reviewed_at`. Missing reviewer IDs are an audit-trail issue, not proof of wrong answers.
- Exact normalized-stem duplicate groups: 516, using `lower(regexp_replace(prompt,'[^a-zA-Z0-9]+','','g'))`. Does not establish student-level repetition.
- Ten materialized task items across two tasks: completed `daily` task `9f8671dd-e793-4576-8ccd-c3320edbfd17` contains four active pilot records; expired `exam_daily` task `f701b4a2-8a55-4e6a-a1e6-00a626d363f1` contains six approved active records. **Important refinement:** pilot references are on a *completed historical task*, not evidence that currently scheduled assignments contain pilot records. Eligibility policy and creation-time state still need verification.
- Signature editorial: 13 assessments; SUM(total_marks)=279; zero have both `human_moderated_by` and `human_moderated_at`.

## Mathematics spot checks (staged, not released)
Read five inactive question records:
1. `04eda30d-73f2-4b77-9000-34575004a348`: f(x)=3x+3, g(x)=x²−1; g(2)=3, f(3)=12. Choices 12,9,15,6: only 12 correct. Explanation sound; objective merely 'Algebra', not enough for official objective signoff.
2. `08231b79-1369-4acb-a967-ebf6572d7097`: (3+4i)²=−7+24i and Re(z)>0; other root −3−4i. Choices −3−4i, 3−4i, 4+3i fail square and/or sign condition. Mathematical pass; official IB AA level/version mapping and rendering not certified.
3. `0cdfe39f-5249-4cba-9d10-555680b48869`: (4+8+12)/3=8; 7,9,24 wrong. Explanation pass; objective too broad.
4. `10ecade3-6797-4820-87ad-896e19337775`: (5/6)×66=55; 66,44,60 wrong. Explanation pass; objective too broad.
5. `168e5cc5-77aa-43da-b4b7-4211d65102eb`: similar triangles length ratio 1:5 => area ratio 1:25; k=25. Choices 5,10,125 wrong. Explanation includes independent example and E4.4 mapping. Official external syllabus source, duplicate family, actual KaTeX and assignment exposure not rechecked.

## OPEN / NOT CERTIFIED
No database record update timestamp in practice bank, so inventory equality alone cannot establish no changed existing question; no exhaustive newly published record diff available. No complete qualification/component specification or copyright verification; no per-student unseen/near-duplicate/adaptation/Ready authentication check; no authenticated RLS cross-role test; no signed evidence-storage access test; no mock timer or CI deployment certification; no full mark-by-mark independent recomputation of all 279 Signature marks. These are NOT passes. No human examiner impersonation.

## Decision
No activation, quarantine, grading, or data mutation. All sampled drafts remain inactive. Verified originals require no owner approval, but these samples lack complete release evidence. Follow up with per-student assignment history and objective/rendering checks. Include findings in established evening owner report.

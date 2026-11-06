# Independent Maths QA — 2026-11-06 12:00 Asia/Kuwait

## Live evidence and scope
Read-only queries of Supabase project `nwakgkxytovprrrwyahs` and GitHub repository `Mathora-mathematics/Mathora` performed at approximately 09:00 UTC. This is a bounded verification, not certification of all 2,236 questions, all student journeys or all 279 Signature marks.

## Reproducible checks
- `select review_state,active,count(*) from private.grove_practice_bank group by 1,2`: 1,942 approved active, 240 pilot active, 54 draft inactive (2,236 total); unchanged from prior audit.
- `select count(*),count(distinct task_id) from private.grove_task_items`: 10 items across two tasks; not a student-specific Ready test.
- `select count(*) from private.grove_signature_editorial`: 13.
- GitHub Actions latest inspected deployment: run 42184749418, commit `861b4adede7b3f260735ac5c418b9a167178428a`, completed successfully 2026-11-06 08:02:13 UTC. This proves CI success, not authenticated browser functionality.
- Supabase security advisor at 2026-11-06 08:59 UTC: 24 RLS-enabled tables without policies, 51 authenticated-executable SECURITY DEFINER functions. These require per-function authorisation review; no breach proven. Reference: https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable .

## Independent mathematical recomputation, staged records
- `04eda30d-73f2-4b77-9000-34575004a348`: f(x)=3x+3, g(x)=x²−1; g(2)=3, f(3)=12. Alternative 9, 15, 6 all wrong. Explanation's direct composition f(g(x))=3x² verifies 12. Mathematical PASS; no full duplicate, official E2.13 syllabus, browser or copyright certification.
- `08231b79-1369-4acb-a967-ebf6572d7097`: (3+4i)²=−7+24i and Re=3>0; (−3−4i)² same but negative real part; (3−4i)²=−7−24i; (4+3i)²=7+24i. Unique correct option. Explanation consistent. Mathematical PASS; actual KaTeX browser and official IB AHL 1.14 mapping not independently certified.
- `0cdfe39f-5249-4cba-9d10-555680b48869`: mean=(4+8+12)/3=8, not 7, 9 or 24. Mathematical PASS; syllabus objective only 'Statistics', insufficient for release.
- `10ecade3-6797-4820-87ad-896e19337775`: (5/6)×66=55, not 66, 44 or 60. Mathematical PASS; syllabus objective only 'Number', insufficient for release.

## Decisions and holds
No drafts activated, no questions quarantined beyond their existing inactive state, no student or examiner records changed. Sampled questions remain staged pending official board/component version, copyright/provenance, duplicate-family and student-specific unseen checks, exact browser rendering, and authenticated Ready/tier/adaptation verification. Security-advisor notices are unresolved. Signature per-part marks and human moderation not fully checked; no Signature grades or reports issued. Owner's prior approval of fully verified original practice remains valid without further approval gate.

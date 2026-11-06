# Independent MathsGrove QA — 2026-11-06 06:02 Asia/Kuwait

## Live evidence
- GitHub default-branch latest observed commit: `83b08acf9913acea853eae4b05b6b3d03e161b93` (2026-11-06 01:57:42 UTC), an operations route-inventory/draft-QA documentation commit, following the 04:04 QA commit `fcf8df044d304dd4f9eac976d7be9d58a6f4d397`.
- Supabase `nwakgkxytovprrrwyahs`, direct read-only SQL on `private.grove_practice_bank`: approved active 1942, pilot active 240, inactive drafts 54 (total 2236).
- `private.grove_tasks`: 33 scheduled, 1 completed, 1 expired; **all 33 scheduled tasks have zero materialised `grove_task_items`**. This does not rule out on-demand generation, and Ready must not be certified.
- `private.grove_signature_editorial`: 13 assessments, declared 279 marks; zero records have both `human_moderated_by` and `human_moderated_at`.

## Recomputed staged samples (database record IDs)
1. `3abf13fb-ec6e-4523-8d60-52428cdc1844`: dy/dx=2xy, y(0)=3 -> y=3exp(x²), y(1)=3e. Distinct distractors 3e², 3+e, 3/e wrong; explanation derivative check valid. Hold: full official P4 syllabus and rendering/duplicate checks not completed.
2. `10ecade3-6797-4820-87ad-896e19337775`: 5/6 of 66 = 55; 66,44,60 wrong. Explanation sound. Hold: broad objective 'Number', level/difficulty calibration.
3. `4faa7797-5922-490e-9d63-ae9964ae1d40`: 4x+7=31 -> x=6; 5,7,24 wrong. Explanation sound. Hold: broad objective 'Algebra', level/difficulty calibration.
4. `0cdfe39f-5249-4cba-9d10-555680b48869`: mean (4+8+12)/3=8; 7,9,24 wrong. Explanation sound. Hold: broad objective 'Statistics', difficulty calibration.
5. `dc872434-96b8-4420-a3c6-3f034733eea9`: (5x+7)/((x+1)(x+3)) = 1/(x+1)+4/(x+3); integral 0..1 = ln2+4ln(4/3). Other options differ; positive denominators on interval. Explanation sound. Hold: syllabus objective explicitly says '2026 review pending'.

## Release decision / incomplete checks
No draft was published. No student, examiner, marking, or permission data were changed. Official qualification specification verification, full bank and per-student duplicate-family screening, KaTeX browser rendering, student-specific Ready/tiers/baseline feedback, RLS policy behavior, evidence storage isolation, server timers, copyright clearance, Pages CI, and Signature mark-by-mark validation **were not completed in this run**. These are NOT passes. In particular do not issue Signature grades without authorised human moderation. Owner's prior authorisation for fully verified original practice is acknowledged; no owner approval gate was introduced.

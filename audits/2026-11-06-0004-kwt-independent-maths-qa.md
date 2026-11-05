# MathsGrove independent QA — 2026-11-06 00:04 Asia/Kuwait

## Live sources and scope
Read-only SQL against Supabase project `nwakgkxytovprrrwyahs`, schema `private`; GitHub repository `Mathora-mathematics/Mathora` recent commits. Prior journal HEAD before this audit: `8fe60819b6150aa4757c8e384d1a450a68cf8511` (2026-11-05 19:02:35 UTC). There is no `updated_at` on `grove_practice_bank`, so changed records cannot be enumerated from that column; no claim of exhaustive new-publication audit.

## Reproducible findings
- `select review_state,active,count(*) from private.grove_practice_bank group by 1,2`: approved/true 1942, pilot/true 240, draft/false 54; total 2236.
- **Confirmed explanation defect, inactive draft** `b22f0602-6c95-401c-a59b-0f440e307b99`: prompt "Simplify √450"; key `15√2` correct because 450=225×2 and √450=15√2. Current explanation instead says "Factor 50n² as 25n²×2, then simplify the square root." This is a different expression and omits the actual working. Choices `30√2`, `15√5`, `3√2` are wrong. **HOLD: do not publish until explanation is corrected and official objective, duplicates, provenance and rendering are checked.** Existing `review_state=draft,active=false` is an effective staging quarantine; no production mutation.
- Inactive draft `8c1efaf2-23f8-4e25-b794-fdecaa41d5ab`: quarter-circle area (90/360)π12² = 36π cm²; requested coefficient 36; distractors 72,108,144 incorrect. Explanation "Area is one quarter of π times the radius squared" is mathematically true but insufficiently worked; HOLD.
- Inactive draft `360dc169-1f6a-4c88-875f-d523e4bab37f`: adjacent=14 cos60°=7 cm; distractors 6,14,8 incorrect; explanation omits numerical substitution and units; HOLD.
- Inactive draft `6f1414c8-bd04-49b6-9a13-cb0274d1b85c`: 4/10×3/9=2/15; distractors 4/25,2/5,1/3 incorrect. Complete explanation; objective merely "Probability", not official component objective. HOLD.
- Approved editorial metadata: 1942 missing reviewer UUID, 36 missing review timestamp, 228 explanations under 100 characters (risk indicators, not mathematical failures).
- Task counts: 33 scheduled, 1 completed, 1 expired. **All 33 scheduled tasks have zero materialised items in `private.grove_task_items`**; this alone cannot establish whether lazy generation occurs at open time. Ten existing item links: 4 pilot on completed task, 6 approved on expired task. Student unseen/Ready status cannot be certified.
- Signature: 13 records, sum declared marks 279, zero with both `human_moderated_by` and `human_moderated_at`. Full part-by-part recomputation of 279 marks NOT done; no release.
- `pg_tables.rowsecurity` true for practice, tasks, task_items, Signature. This is only RLS enabled, **not** proof of effective role isolation. Storage buckets `student-work` and `grove-student-exports` are private; former 5 MiB jpeg/png/webp, latter 50 MiB zip. Authenticated cross-user storage access not tested.
- GitHub Pages CI, browser KaTeX, mock server timers, copyright clearance, exact 2026–2027 official syllabus, tier inheritance, adaptation, examiner workflows: **not certified**.

## Decisions
No new question published; no live status or student/examiner records changed. Confirmed wrong worked explanation remains inactive. No automatic Signature grade/report release. No owner approval gate added; original questions may publish only after all substantive checks pass. Recheck this defect and scheduled-task supply at next cycle; include in established evening owner report.

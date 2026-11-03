# MathsGrove independent QA — 2026-11-03 18:00 Asia/Kuwait

Project: Supabase `nwakgkxytovprrrwyahs`; repository `Mathora-mathematics/Mathora`. Read-only audit; no content published or modified.

## Evidence and reproducible checks

- Current GitHub head before this journal: `7840fd6db75273555b7ed65ccaea748d20891d33` (17:00 Kuwait editorial repair). Its operations record explicitly reports zero activations. No later approval event was evidenced in the inspected commit history.
- SQL: `select review_state,active,count(*) from private.grove_practice_bank group by 1,2;` -> approved/active 1,942; pilot/active 240; draft/inactive 48; total 2,230. Unchanged from previous audit.
- Two live inactive drafts inspected by exact UUID: `4725d8d9-c238-4d72-a94c-88e9dc2a3f7d` (Edexcel 1MA1, £200 compounded at 10% twice), `1c08a8b5-baf6-40cb-b6f9-560ff94a4eb3` (Cambridge 0580, £300 at 10% twice). Independently calculated £200(1.1)^2=£242 and £300(1.1)^2=£363. Both have one correct option; £200 distractors 240/220/260 and £300 distractors 360/330/390 are incorrect. Same numerical family across boards. The Cambridge explanation merely says apply multiplier 1.1 twice; editorial expansion needed. **Both remain inactive** pending official syllabus issue/year, family-history and rendered-maths checks.
- SQL: `select count(*) filter(where reviewed_by is null), count(*) filter(where reviewed_at is null), count(*) filter(where length(explanation)<100) from private.grove_practice_bank where active and review_state='approved';` -> 1,942 missing reviewer identity; 36 missing timestamps; 228 short explanations. Short length is a screening flag, not proof of error.
- SQL: `select count(*),count(distinct bank_id) from private.grove_task_items;` -> 10 rows and 10 distinct bank IDs. `select count(*),count(distinct student_id) from private.grove_tasks;` -> 35 tasks, one student. Distinct IDs do **not** prove absence of stem/family repetition or adequate student-specific unseen supply.
- SQL JSON ordinal alignment of `private.grove_signature_editorial.question_paper` and `mark_scheme`: 10 assessments, 92 matched parts, zero part-ID mismatches, zero part-mark mismatches, zero criteria-award-sum mismatches. `sum(total_marks)` = 243; zero records with `human_moderated_by` set. **Structural checks only**: all 92 mathematical parts were NOT independently rederived. No release.
- `public` table metadata indicates RLS enabled on inspected public tables. This does not prove policies prevent cross-student access.

## Unverified gates / required follow-up

No new approved question since previous review was evidenced, so no fresh publication batch to recompute. Did not test browser KaTeX, authenticated storage/photo upload, per-student exact mode/tier adaptation and Ready state, full official 2026–27 component mapping, copyright provenance, GitHub Actions/Pages CI, server-authoritative mock expiry, or end-to-end RLS. Do not call these passes. No authenticated human moderation performed or implied. Prioritize duplicate-family enforcement and genuine distinct unseen question supply, full Signature mathematical derivations, and mock readiness. Verified original practice is preauthorised; questionable drafts stay staged. Evening notification is handled by the separate established report.

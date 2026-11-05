# MathsGrove live schema reconciliation — 2026-11-05 05:04 Asia/Kuwait

Batch: 2026-11-05-0504-kwt-schema-reconciliation

## Live, independently queried evidence
Supabase project: `nwakgkxytovprrrwyahs`. The accessible `public.question_bank` table currently returns **10 rows, all active** via `SELECT count(*), count(*) FILTER (WHERE active)`. The table columns are `id, qualification, topic, prompt, marks, difficulty, active, created_at`. The related `public.mark_schemes` table has `question_id, scheme`. There is **no `review_state`, `tier`, `exam_board`, `component`, `syllabus_year`, `provenance`, or `student_seen` column** in the inspected question-bank schema. The 10 visible rows span IGCSE, GCSE, A_LEVEL, IB_AA, IB_AI and TMUA but have no board/component distinctions.

This **contradicts earlier journal claims** that the same project had 2,236 practice questions, 1,942 approved-and-active and 54 drafts. Those claims cannot be reproduced against the currently accessible public table. They may refer to a different schema/storage system or historical state; do not treat them as current live inventory without locating the actual underlying tables. This audit does not delete or invalidate prior records.

## QA and release decision
Accepted newly published questions: **0**. Rejected activation attempts: **0** (no activation attempted). Draft repairs: **0**. Signature papers created/released: **0**. Website code changes: **0**. GitHub Actions deployment: **not claimed**.

The currently inspected schema cannot represent the required board/component, tier, syllabus provenance, editorial review state or authenticated moderation; bulk insertion or activation would risk misrouting content and bypassing required checks. The existing 10 active questions cannot be declared verified for any specific board/year/tier. The `attempts` table currently shows zero rows in the table listing, but this does not establish a complete no-repeat guarantee across all task history and future assignment. Weekly 32, Daily 112 + Weekly, Exam 188 + Weekly shortfalls **cannot be computed per route** from this schema; global 10 active is not an eligible inventory measure.

## Required next engineering actions
Locate the actual editorial and Signature storage schema/project, confirm migrations and role permissions, map board/component/tier/year to verified source metadata, then implement individual atomic approval and student-history exclusion with readback and rendering tests. Do not modify student data or forge human examiner moderation. Signature must remain private and awaiting authenticated human sign-off. Never place student data or private papers in this public GitHub journal.

This is a **schema integrity finding**, not a successful content-publication claim.

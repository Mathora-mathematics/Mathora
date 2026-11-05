# MathsGrove independent QA — 2026-11-05 04:00 Asia/Kuwait

## Scope and reproducible live checks
Live sources: Supabase project `nwakgkxytovprrrwyahs`, private.grove_practice_bank, private.grove_tasks, private.grove_task_items, private.grove_signature_editorial; GitHub repository `Mathora-mathematics/Mathora`, latest pre-audit commit `8a0f4d5d6f6a014c3c34cbcdaef8a4ba32434ecc`.

SQL:
```sql
SELECT review_state, active, count(*) FROM private.grove_practice_bank GROUP BY 1,2;
SELECT b.review_state,count(*) FROM private.grove_task_items i LEFT JOIN private.grove_practice_bank b ON b.id=i.bank_id GROUP BY 1;
SELECT status,count(*) FROM private.grove_tasks GROUP BY 1;
SELECT count(*) AS total,count(*) FILTER (WHERE human_moderated_by IS NOT NULL AND human_moderated_at IS NOT NULL) AS moderated,sum(total_marks) AS marks FROM private.grove_signature_editorial;
SELECT id,prompt,choices,correct_text,explanation,review_state,active FROM private.grove_practice_bank WHERE id IN ('bae2dafa-d096-4627-82b4-f4f7d7b7cfc1','b84b674a-5969-4969-ac42-79964b018d1c');
```

## Verified passes
- Inventory: 1,942 approved active; 240 pilot active; 54 inactive drafts; 2,236 total. No newly approved question identified by aggregate counts (historical modifications cannot be excluded).
- Latest editorial repair 1: `bae2dafa-d096-4627-82b4-f4f7d7b7cfc1`. Side ratio 1:4 implies area ratio 1:16, so k=16. Direct check: areas 1/2 and 8. Distractors 4,8,64 all wrong; explanation explains misconceptions. Remains draft/inactive.
- Latest editorial repair 2: `b84b674a-5969-4969-ac42-79964b018d1c`. For (x-3)(x-6)<0, sign at x=0 is +18, x=4 is -2, x=7 is +4, and endpoints give zero. Solution 3<x<6. Other choices incorrect; explanation complete. Remains draft/inactive.
- 35 tasks: 33 scheduled, 1 completed, 1 expired. 10 materialised assignments: 6 approved and 4 pilot (historical exception persists).
- Signature: 13 assessments, 279 declared marks; 0 with both human moderator and moderation timestamp. No grade/report issued by this audit.

## Failures, uncertainties, and release decisions
- Four pilot assignments remain an unresolved historical publication-control exception. Code-path, per-student eligibility and authenticated Ready tests not established here.
- Two repaired questions are mathematically sound but have generic syllabus objective strings ('Geometry' and 'Algebra'), not verified 2026–27 official board/component mappings; full near-duplicate family, copyright provenance, browser KaTeX and route-specific supply checks are outstanding. **Retain staged**. No additional owner approval gate is needed after substantive verification.
- No new Signature assessment since the previous 02:00 audit; independently recomputing all 279 historical mark criteria was not completed this run. Human moderation is mandatory.
- RLS, student image/whiteboard storage, server mock timing, marking workflow, GitHub Pages CI, and actual student-facing Ready statuses were not end-to-end verified. **Not passes.**
- No production modifications, releases, grades or examiner actions were made during this QA pass.

## Follow-up
Prioritise authenticated assignment tests and the four pilot task items; calculate per-student unseen supply by qualification/board/programme and near-duplicate families; validate official current specification objectives and UI rendering before any staged publication; verify security, timer and Pages deployment independently. Include these findings in the established evening report.

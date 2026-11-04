# Independent MathsGrove QA — 2026-11-04 08:00 Asia/Kuwait

## Live evidence and scope
Queried Supabase project `nwakgkxytovprrrwyahs` in the **private** schema, inspected live PostgreSQL definition of `public.grove_task_start(uuid)`, and checked recent GitHub commits in `Mathora-mathematics/Mathora`. This is a targeted control audit, **not** full mathematical or security certification.

## Confirmed PASS (limited)
- Inventory: 1,942 approved/active, 240 pilot/active, 48 draft/inactive; 2,230 total.
- **Current** `public.grove_task_start` candidate and supply-count queries BOTH require `b.active AND b.review_state='approved'`. They also exclude exact whitespace-normalised baseline and previously assigned stems, compare student qualification/level, check board compatibility, and apply tier scope. Difficulty target responds to baseline score and released marks. Future task starts through this function should not select pilots; this is code inspection, not an authenticated end-to-end execution.
- Function checks authenticated ownership, active route, due date, baseline completion and sets server-side end times (mock 90 minutes; exam programme 35 minutes). Full mock enforcement is not established.
- All listed private/public tables have RLS enabled; **policy isolation is not proven**.

## Confirmed historical exception
Four pilot questions were materialised in a completed 2026-10-31 daily task. IDs:
`79980d6c-d858-4c45-a6d7-899075272f22`,
`97b06f8c-aa01-43da-9251-48dee7ab525d`,
`6ce5d829-2147-469a-84c0-25b52d2cb9c1`,
`8d71bc07-e03f-4509-a947-9b944b1cb62c`.
This is a historical release-control breach, but the current function's approved-only filter means **do not assert the current selection function still leaks pilots**. Another path or prior implementation may explain the older task. Historical submission left unchanged.

## Open / not certified
- 1,942 approved items have NULL `reviewed_by`; absence of metadata is not evidence of wrong mathematics.
- Three scheduled tasks have `due_date <= current_date`; student-facing Ready status not authenticated.
- All ten Signature editorial records have NULL `human_moderated_by`. No grade/report release authorised.
- No new question-level publication delta established from row timestamps (practice bank has no created_at/updated_at); unchanged counts cannot prove unchanged rows. No newly published question certified this run.
- Full independent recomputation of every Signature part and every new practice item, distractors, explanation, LaTeX/KaTeX, exact 2026–27 official syllabus clauses, copyright, storage/photo isolation, RLS adversarial tests, GitHub Pages CI, and cross-assignment near-duplicate families **not completed**.
- 240 pilot rows are active, but the inspected current student-start function filters them out; investigate other access paths before any global state change.

## Reproducible read-only checks
```sql
SELECT review_state,active,count(*) FROM private.grove_practice_bank GROUP BY 1,2;
SELECT count(*) FROM private.grove_practice_bank WHERE review_state='approved' AND reviewed_by IS NULL;
SELECT i.bank_id,b.review_state,t.status,t.due_date,t.mode
FROM private.grove_task_items i JOIN private.grove_practice_bank b ON b.id=i.bank_id
JOIN private.grove_tasks t ON t.id=i.task_id WHERE b.review_state<>'approved';
SELECT pg_get_functiondef('public.grove_task_start(uuid)'::regprocedure);
SELECT count(*) FROM private.grove_signature_editorial WHERE human_moderated_by IS NULL;
```

## Action
No production content or grades changed; no unverified questions published. Prioritise tracing the October pilot-assignment path and checking other serving functions, then authenticated Ready/RLS/storage tests. Verified original practice is preauthorised for release without owner approval, subject to substantive mathematical and specification verification. Signature requires authorised human moderation. Carry forward in evening report.

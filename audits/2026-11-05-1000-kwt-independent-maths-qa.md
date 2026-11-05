# MathsGrove independent QA — 2026-11-05 10:00 Kuwait

## Sources and scope
Live Supabase project `nwakgkxytovprrrwyahs`, `private.grove_practice_bank`, `private.grove_task_items`, `private.grove_signature_editorial`; GitHub latest editorial commit `3c4dc6a4029e301c734fbf625125172cbc271388` (09:01 Kuwait editorial cycle). All queries were read-only. The separate `public.question_bank` is NOT the editorial inventory.

## Reproducible queries
```sql
select review_state,active,programme_scope,count(*) from private.grove_practice_bank group by 1,2,3 order by 1,3;
select id,prompt,choices,correct_text,explanation,syllabus_objective,exam_board,review_state,active from private.grove_practice_bank where id in ('34f56264-d323-4400-8c27-387dc41141d9','49037cff-8bb4-4f43-bede-9c1f3bfd84e5');
select b.review_state,b.active,count(*) from private.grove_task_items i join private.grove_practice_bank b on b.id=i.bank_id group by 1,2;
select count(*) assessments,sum(total_marks) marks,count(*) filter (where human_moderated_by is not null and human_moderated_at is not null) moderated from private.grove_signature_editorial;
```

## Confirmed results
2,236 practice rows: approved active 1,942 (weekly 339, daily 639, exam 964); pilot active 240; inactive draft 54 (weekly 16, daily 19, exam 19). Counts match previous cycle; no proof of unchanged existing records because no row-level change log was examined.
Two recently repaired Edexcel GCSE 1MA1 Higher drafts were read back and recomputed:
- `34f56264-d323-4400-8c27-387dc41141d9`: x²−9x+20=(x−4)(x−5); larger root 5. Distractors 4 (other root), −5 (LHS 90), 6 (LHS 2) do not satisfy the requested answer. Key and detailed explanation PASS.
- `49037cff-8bb4-4f43-bede-9c1f3bfd84e5`: x^7*x^(-2)/x=x^4 for x≠0. At x=2 result 16; distractors x^3, x^5, x^6 give 8,32,64. Domain and explanation PASS.
Both are still draft/inactive. Their syllabus_objective is generic `Algebra`, insufficient to certify precise current official component mapping. No publication.

Ten task-item links: six approved active, four pilot active; historical pilot-assignment exception OPEN. Individual student histories, unseen stems, adaptation and Ready UI not certified.
Signature: 13 assessments, 279 declared marks, zero with both moderator ID and timestamp. Individual part schemes NOT independently recomputed in this run; no moderation or release performed.

## Unverified / not passes
Official 2026–27 board-objective mapping for these two drafts; family-level duplicate screening; authenticated KaTeX/browser; effective cross-user RLS; photo/whiteboard storage access tests; server-side mock timers; examiner marking permissions; current GitHub Pages CI; official copyright provenance; route-specific supply and baseline feedback adaptation; all Signature part marks. These are outstanding, not passing findings.

## Decision
No new mathematical error in the two inspected drafts. No questionable draft activated. No student records, marking decisions or release statuses modified. Continue scheduled independent QA and include pilot assignments plus syllabus/route gaps in evening report.

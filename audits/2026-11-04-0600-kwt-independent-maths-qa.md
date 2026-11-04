# Independent Maths QA — 2026-11-04 06:00 Asia/Kuwait

## Scope and evidence
Read-only live Supabase project `nwakgkxytovprrrwyahs`, private.grove_practice_bank, private.grove_task_items, private.grove_tasks, private.grove_signature_editorial; GitHub repository Mathora-mathematics/Mathora commits and Actions. No production data mutated.

## Confirmed findings
- Bank: 1,942 active approved; 240 active pilot; 48 inactive draft. Latest approved question review timestamp 2026-11-03 05:56:54 UTC. No later approved question appears among four latest reviewed approved records; absence of a full mutation log means replacements cannot be ruled out.
- **Release-control exception (action required):** Four `pilot`, `active=true` bank IDs are materialised in a **completed** daily task due 2026-10-31, submitted 2026-10-31 18:59:06 UTC. Task `9f8671dd-e793-4576-8ccd-c3320edbfd17`, positions 1–4, bank IDs `79980d6c-d858-4c45-a6d7-899075272f22`, `97b06f8c-aa01-43da-9251-48dee7ab525d`, `6ce5d829-2147-469a-84c0-25b52d2cb9c1`, `8d71bc07-e03f-4509-a947-9b944b1cb62c`. This is actual assignment, not merely a hypothetical pilot leak. The historical task is preserved for audit and student evidence; investigate serving filters and pilot question mathematics before any remediation.
- 35 tasks; 10 materialised question items; four of ten reference pilot records.
- Signature: 10 editorial assessments, 243 declared marks, zero human-moderated, all awaiting human moderation. No Signature report release performed.
- Latest GitHub commit at inspection: `b37fd8c43af6cdd90efcf5f343ed6a3196fd3274` (2026-11-04 01:58:51 UTC). GitHub Pages deployment run 41757684866 completed successfully at 01:59:16 UTC for this SHA.

## Reproducible checks
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2;
select i.task_id,i.position,b.id,b.review_state,b.active,t.status,t.mode,t.due_date,t.submitted_at
from private.grove_task_items i join private.grove_practice_bank b on b.id=i.bank_id
join private.grove_tasks t on t.id=i.task_id where b.review_state <> 'approved';
select review_state,count(*),sum(total_marks),count(human_moderated_by)
from private.grove_signature_editorial group by 1;
```

## Mathematics spot checks (not full certification)
- Pearson IAL P3 `2sec²θ−5tanθ=5` on (−π/2,π/2): t=tanθ gives (2t+1)(t−3)=0, hence {−arctan(1/2), arctan 3}; the three listed alternative sets are wrong.
- Matrix [[2,1],[0,1]]: non-x-axis invariant eigendirection satisfies x+y=0, hence y=−x. Alternatives y=x,2x,−2x are not invariant.
- Cambridge P1 `2sin²θ+sinθ−1=0` on [0,2π): θ=π/6,5π/6,3π/2, sum=5π/2; three listed alternatives wrong.
- IB Euler y'=x+y, y(0)=2, h=.2: y1=2.4, y2=2.92; alternatives 2.88,2.84,3.04 wrong.

## Unverified / fail-closed
No new question published. Full official syllabus subclause, browser KaTeX, copyright provenance, authenticated cross-student RLS and storage tests, server mock timer, baseline adaptation, unseen stem families, individual Ready status and every Signature part's mathematics are NOT certified. No Signature moderation impersonated or reports issued. Verify the four pilot records and student-serving query before modifying historical records. Keep questionable drafts staged. Include this exception in the established evening owner report.

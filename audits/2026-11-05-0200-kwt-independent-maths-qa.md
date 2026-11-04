# Independent Maths QA — 2026-11-05 02:00 Kuwait

## Live evidence
- Queried private.grove_practice_bank: approved active 1942; pilot active 240; draft inactive 54; total 2236. No new approved count, but no complete row-change audit performed.
- Queried private.grove_tasks: 33 scheduled, 1 completed, 1 expired (35 total).
- Queried private.grove_task_items joined to practice bank: 6 approved and 4 pilot question assignments. Historical pilot assignment issue remains open; do not assert current generation vulnerability without authenticated reproduction.
- Queried private.grove_signature_editorial: 13 assessments, 279 declared marks, zero records with both human_moderated_by and human_moderated_at.
- Latest editorial ID 3ef59933-e2ae-4168-bf71-7240e3fc6cfe, 12 marks (7+5), awaiting_human_moderation; null human moderation fields.

## Independent recomputation of new Signature paper
Q1: dy/dx=2x(y+2), y(0)=1. Separate and integrate ln|y+2|=x²+C. By uniqueness and y+2=3 at x=0, y+2=3exp(x²) for all real x; y=3exp(x²)-2, y(1)=3e-2. Derivative 6x exp(x²)=2x(y+2), so solution verified. Marks Q1a M1+A1+M1+M1+A1=5, Q1b M1+A1=2, Q1 total 7. Note: the scheme's exponentiation step needs explicit treatment of sign from |y+2|; existing 'correct sign handling' wording addresses this but should be considered in human moderation.
Q2: u=3x²+2x, du=(6x+2)dx, bounds 0 to 5. Integral = [exp(u)]_0^5=e^5-1. Marks M1+A1+M1+M1+A1=5. Total 7+5=12. Part marks, solution and scheme consistent.

## Gates and limitations
- New Signature item passed independently recomputed mathematics and mark arithmetic; remains private and unmoderated. Do not release any student/parent Signature grades or reports.
- No practice publication authorised by this review: no new practice candidate was fully syllabus-mapped, deduplicated and browser-tested.
- Not independently verified this run: official 2026/27 syllabus issue and objective mapping, copyright provenance, full-bank keys/distractors, student unseen and near-duplicate families, baseline adaptation, tier/mode/Ready, authenticated RLS/storage, mock timers, live browser KaTeX, latest GitHub Pages Actions. Do not treat as passes.
- No student records, grades, question statuses, or moderation fields changed.

## Reproduction queries
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2;
select status,count(*) from private.grove_tasks group by 1;
select b.review_state,count(*) from private.grove_task_items i join private.grove_practice_bank b on b.id=i.bank_id group by 1;
select count(*),sum(total_marks),count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) from private.grove_signature_editorial;
select id,question_paper,mark_scheme,review_state,human_moderated_by,human_moderated_at from private.grove_signature_editorial where id='3ef59933-e2ae-4168-bf71-7240e3fc6cfe';
```

Evening report should include 13/279 Signature totals and continuing 4 pilot assignments.
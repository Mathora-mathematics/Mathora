# MathsGrove independent QA — 2026-11-04 14:04 KWT

## Evidence and outcome
Live Supabase project `nwakgkxytovprrrwyahs`, schema `private`, queried during this run; GitHub `Mathora-mathematics/Mathora` recent commits inspected. Previous audit: 12:00 KWT, commit `7b3c48fbde9e5dd123a5a72eee717a1eb9b170fa`. Newest inspected commit before this journal: `6e746333a78a3d0e04f73ce4a780a8e9785d5ec6` (13:00 editorial authoring and KaTeX repairs).

Inventory: 1,942 approved/active; 240 pilot/active; 51 draft/inactive; **2,233 total**, up one draft from 12:00. This count alone cannot establish unchanged approved content. Student tasks: 35; materialised task items: 10, all ten bank IDs distinct; four items reference pilot records (historical exception persists). Signature: 11 assessments, 255 declared marks, zero with both human moderator ID and timestamp. No Signature grades/reports released by this audit.

## Newly observed draft: independent mathematical recalculation
ID `eff82b8b-aa63-459c-b19e-a4152455e084`, Pearson Edexcel IAL WMA14 P4, parametric differentiation.
Prompt: x=t²+1, y=t³−3t; find dy/dx at t=2.
dx/dt=2t=4; dy/dt=3t²−3=9. Since dx/dt != 0, dy/dx=(dy/dt)/(dx/dt)=9/4. Key 9/4 is correct. Distractors 9, 4/9, 3/4 are distinct and incorrect; explanatory misconceptions are reasonable. Expression is plain text and requires browser KaTeX/rendering test if transformed. Official syllabus version and exact component mapping remain explicitly pending in stored objective. Mathematical-family similarity and source provenance not exhaustively verified. **Decision: retain draft/inactive.** No owner approval is required after substantive release verification, but this draft is not yet certified.

## Unresolved risks / not passes
Historical four pilot task items; full newly-approved item-by-item change detection; per-student unseen near-duplicate family checks and actual Ready UI; tier inheritance/adaptation; authenticated RLS and student evidence storage; server mock timing; current Pages CI success; browser KaTeX; 2026–27 official board objective mapping and copyright provenance; independent recomputation of every part of all 11 Signature assessments. No production statuses, student answers, human moderation or reports changed.

## Reproducible SQL
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2;
select count(*) from private.grove_tasks;
select count(*),count(distinct bank_id) from private.grove_task_items;
select count(*) from private.grove_task_items i join private.grove_practice_bank b on i.bank_id=b.id where b.review_state='pilot';
select count(*),sum(total_marks),count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) from private.grove_signature_editorial;
select id,prompt,choices,correct_text,explanation,syllabus_objective from private.grove_practice_bank where id='eff82b8b-aa63-459c-b19e-a4152455e084';
```

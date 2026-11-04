# MathsGrove independent QA — 2026-11-04 12:00 Asia/Kuwait

## Live sources and scope
Read-only Supabase SQL on project `nwakgkxytovprrrwyahs` and GitHub repository `Mathora-mathematics/Mathora`, inspected 2026-11-04 08:56–09:00 UTC. This is a **partial** audit, not full mathematical, security, syllabus or release certification.

## Reproducible inventory
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2 order by 1,2;
select count(*) total,count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) moderated,sum(total_marks) marks from private.grove_signature_editorial;
select count(*) from private.grove_tasks;
select count(*) items,count(distinct bank_id) distinct_ids from private.grove_task_items;
select count(*) filter(where b.review_state <> 'approved') pilot_items,count(*) filter(where b.id is null) missing from private.grove_task_items t left join private.grove_practice_bank b on b.id=t.bank_id;
```
Results: 1,942 approved active; 240 pilot active; 50 inactive drafts; total **2,232** (one more draft than prior 10:00 journal). 35 tasks; 10 materialised items with distinct IDs, 4 pilot items, 0 missing references. 11 Signature editorial assessments, 255 marks, **zero** with both human moderator and timestamp (up from 10 assessments / 243 marks).

## Independent mathematics
Newest Signature editorial `e67db01a-59cc-49e4-93f7-954dcbbf64d4` (12 marks) inspected in full:
- Q1a: integration by parts gives ∫x exp(2x) dx = exp(2x)(x/2 - 1/4)+C. Three criterion marks add to 3, correct.
- Q1b: evaluate from 0 to ln 2: [2 ln 2 -1]-[-1/4] = 2 ln 2 -3/4. Three marks, correct.
- Q2a: (3x+7)/((x+1)(x+2))=4/(x+1)-1/(x+2). Three marks, correct.
- Q2b: integral 0 to 1 is [4 ln(x+1)-ln(x+2)]_0^1 = 5 ln 2 - ln 3 = ln(32/3). Three marks, correct.
- Both paper questions allocate 6 marks each, all four parts allocate 3 each, criteria each sum to 3; aggregate 12. No student grades/reports released. Human moderation still required. **Only this newly added Signature assessment** was mathematically recomputed; previous ten remain unverified at part level.

Sampled staged practice `eabfdeba-703e-434e-acb9-994092cb8a4b` (IB AI piecewise shuttle): 4+8(1.50)+5(1.10)=£21.50; alternatives £23.50, £17.50, £18.30 are incorrect. Piecewise branch at 8 km is £16 on both sides. Mathematical arithmetic passes; official component alignment, provenance, duplicate families and KaTeX not fully established; **remain staged**. Other sampled staged prompts (quadratic roots 5,6; 5/6 of 72 = 60) are arithmetically correct but explanations lack full working and remain staged.

## Open risks / not passed
- Historical four pilot assignments remain in materialised tasks; current approved-only function code was reported in prior journal, but authenticated end-to-end prevention is untested.
- Exact unseen-family coverage, per-student adaptation, tier inheritance, Ready UI, official 2026–2027 board/component mapping, copyright, live KaTeX browser rendering, RLS isolation, evidence upload privacy, server mock timing, latest Pages CI and all other Signature mathematical parts were **not verified** in this run.
- No practice approvals, quarantines, student data, marks or Signature decisions were changed. No newly approved practice questions were established by a full historical diff.
- Release gate remains substantive mathematics + syllabus + rendering + provenance; owner approval is not required for verified originals.

# MathsGrove independent QA — 2026-11-04 10:00 Asia/Kuwait

## Scope and evidence
Live Supabase project `nwakgkxytovprrrwyahs`, authoritative `private.grove_practice_bank`; GitHub `Mathora-mathematics/Mathora` recent commits, especially `049c737a8c4e8fffaaee6f10bf0813356081aecf` (09:00 Kuwait editorial draft). This is a partial, evidence-limited audit, not full certification.

## Inventory (live SQL)
Approved/active 1,942; pilot/active 240; draft/inactive **49**; total **2,231**. The prior audit reported 48 drafts / 2,230 total; the extra draft is the WMA14 P4 item below. Approved count unchanged, but count equality alone cannot rule out replacement.

## Independent mathematical check — new draft
ID `dc872434-96b8-4420-a3c6-3f034733eea9`, Pearson Edexcel IAL WMA14 P4, Daily, difficulty 4, inactive draft.
Integrand (5x+7)/((x+1)(x+3)), interval [0,1].
A+B=5, 3A+B=7 => A=1, B=4. Integral = [ln(x+1)+4ln(x+3)]_0^1 = ln 2+4ln(4/3) = ln(512/81) (~1.84387547). Denominators positive throughout [0,1].
Distractors: 4ln2+ln(4/3) (~3.06027); ln2+4ln3 (~5.08760); ln2-4ln(4/3) (~-0.45758); all unequal to the correct value and each other. The stored explanation accurately gives decomposition, endpoint evaluation, and the three misconception mechanisms. Stored `choices` includes the correct answer; `correct_text` matches it.
Exact whitespace-normalised prompt duplicate scan returned only this draft. Mathematical-family near duplicates, browser KaTeX rendering, and current official specification subclause remain unverified. **Keep inactive draft; do not approve yet.**

## Assignment and editorial controls
Live `private.grove_tasks`: 35 tasks / 1 distinct student / 0 literal `ready` status. Live `private.grove_task_items`: 10 items, 0 missing bank references, **4 assigned non-approved items** (historical pilot exception; not evidence of a new assignment). Authenticated Ready indicator, tier inheritance, student-specific unseen-family supply, adaptive pathways, and all assignment generation routes not tested.
Among 1,942 approved items: 1,942 missing reviewer IDs, 36 missing review timestamps, 228 explanations <100 characters. These are quality flags, not proof of incorrect mathematics.

## Signature
Live aggregate: 10 assessments, declared total 243 marks, **0 with both human moderator ID and timestamp**. Full independent mathematical recomputation of every part and mark-scheme consistency was NOT completed. No Signature reports or grades issued.

## Security, copyright, deployment
No authenticated RLS cross-user/storage photo tests, server-authoritative mock-timer tests, official syllabus-version validation, copyright source tracing, browser KaTeX test, or fresh Pages CI result obtained in this run. Do not describe these as passes. No live student data or publication state changed.

## Reproducibility
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2;
select id,prompt,choices,correct_text,explanation,review_state,active from private.grove_practice_bank where id='dc872434-96b8-4420-a3c6-3f034733eea9';
select count(*) tasks,count(distinct student_id) students,count(*) filter(where status='ready') ready from private.grove_tasks;
select count(*) items,count(*) filter(where b.review_state<>'approved') unapproved,count(*) filter(where b.id is null) missing from private.grove_task_items i left join private.grove_practice_bank b on b.id=i.bank_id;
select count(*) assessments,sum(total_marks) marks,count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) moderated from private.grove_signature_editorial;
```

## Decision
No questionable drafts published, no grades issued. Preauthorisation for mathematically and specification-verified original practice remains in force; no owner approval gate. Include the 49-draft inventory and historical pilot assignment in evening report.

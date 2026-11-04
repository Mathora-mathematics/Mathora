# MathsGrove independent QA — 2026-11-04 16:01 Asia/Kuwait

## Scope and evidence
Connected LIVE Supabase project `nwakgkxytovprrrwyahs` and GitHub `Mathora-mathematics/Mathora`. Read-only database SQL and recent repository commits inspected. This is a bounded audit, not a full-bank or full-application certification.

## Live inventory
`private.grove_practice_bank`: approved/active 1,942; pilot/active 240; draft/inactive 52; total **2,234**. Compared with the preceding 14:04 journal: one more draft, no net approved-count change. Counts alone cannot exclude updates to existing rows.

`private.grove_tasks`: 35 tasks. `private.grove_task_items`: 10 assignments to 10 distinct IDs; 6 approved and 4 pilot. The four pilot references are the previously reported historical exception; no new incident established here.

`private.grove_signature_editorial`: 11 assessments, 255 declared marks; **zero** with both non-null human moderator and timestamp. No examiner authorisation inferred, no reports or grades released. Every-part independent mathematical recomputation of all 11 papers was NOT completed.

## New 15:00 original draft: independent mathematics check
ID `b386e7a2-3e43-49bd-8404-bba1ce8c2c6b`, Pearson Edexcel IAL P4 WMA14/01, Daily, A2, difficulty 3. DB readback: `review_state=draft`, `active=false`.
Prompt: evaluate `integral_0^1 (2x+3)/(x^2+3x+4) dx`.
Let `u=x^2+3x+4`, `du=(2x+3)dx`, bounds 4 and 8. Integral `[ln u]_4^8=ln(8)-ln(4)=ln 2`. Independent differentiation `d ln(x^2+3x+4)/dx=(2x+3)/(x^2+3x+4)`. Quadratic denominator has discriminant `9-16=-7<0` and positive leading coefficient, so positive for all real x. Correct answer `ln 2`; distractors `2 ln 2`, `(ln 2)/2`, `1/2` are distinct from correct answer and each other. Explanation covers substitution, bounds, result, derivative verification and distractor misconceptions. Text contains Unicode math; actual browser KaTeX rendering not tested.

**Release decision: remain staged**. Exact official applicable specification-objective mapping, family-level similarity against all bank and per-student unseen items, and browser rendering not independently certified. No owner approval gate is imposed; evidence gates remain.

## Outstanding checks (NOT PASSES)
- Per-student eligible/unseen question families, baseline/feedback adaptation, mode/tier inheritance and authenticated Ready state.
- Full newly published/edited question-by-question diff; all keys, explanations and applicable official 2026–27 board components.
- Effective authenticated RLS cross-student isolation, evidence storage permissions, examiner workflow, server-side mock timing.
- Current GitHub Pages workflow success and rendered production UI.
- Originality/copyright provenance and full Signature part-by-part mark-scheme recomputation.
- 240 active pilot records require assurance that every serving pathway filters for approved; historical 4 pilot assignments persist.

## Reproducible SQL
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2 order by 1,2;
select id,prompt,choices,correct_text,explanation,review_state,active from private.grove_practice_bank where id='b386e7a2-3e43-49bd-8404-bba1ce8c2c6b';
select b.review_state,count(*) from private.grove_task_items i join private.grove_practice_bank b on b.id=i.bank_id group by 1;
select count(*),sum(total_marks),count(*) filter (where human_moderated_by is not null and human_moderated_at is not null) from private.grove_signature_editorial;
```
No database rows, student records, marks or publication statuses modified. No unsupported draft published.

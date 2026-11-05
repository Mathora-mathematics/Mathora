# MathsGrove independent QA — 2026-11-05 12:02 Asia/Kuwait

## Scope and reproducibility
LIVE Supabase project `nwakgkxytovprrrwyahs`, private.grove_practice_bank; GitHub Mathora-mathematics/Mathora latest commits queried. Read-only database inspection; no publishing, student modification or examiner actions.

SQL inventory: `select review_state,active,count(*) from private.grove_practice_bank group by 1,2 order by 1,2;`
Result: approved/true 1942; pilot/true 240; draft/false 54; total 2236. Counts unchanged versus 10:00 journal; row-level edit history not established.
SQL editorial: `select count(*) filter(where reviewed_by is null) no_reviewer,count(*) filter(where reviewed_at is null) no_timestamp,count(*) filter(where length(explanation)<100) short_explanation from private.grove_practice_bank where review_state='approved';`
Result: 1942 no reviewer UUID, 36 no timestamp, 228 short explanations. These are audit signals, not proof of incorrect mathematics.
Latest repository commit returned by GitHub search: 56818c2769430d4cc2632f5daf85d1be6919b8b5 (10:00 QA journal); no subsequent commit found in top five at inspection time.

## Independently recomputed staged mathematics
1. `3abf13fb-ec6e-4523-8d60-52428cdc1844` Pearson Edexcel IAL WMA14 P4. dy/dx=2xy, y(0)=3. Separation gives ln(y)=x²+C (positive branch), y=3e^(x²), y(1)=3e. Differentiation yields 6xe^(x²)=2xy and initial value 3. Three distinct distractors 3e², 3+e, 3/e incorrect. Explanation consistent. **Mathematics PASS; publication HOLD** (official component mapping, near-duplicate families and KaTeX rendering not independently certified).
2. `10ecade3-6797-4820-87ad-896e19337775` Pearson GCSE 1MA1. (5/6)*66=55. Alternatives 66,44,60 incorrect; worked explanation correct. **Mathematics PASS; HOLD** (difficulty/tier placement and full release evidence outstanding).
3. `dc872434-96b8-4420-a3c6-3f034733eea9` Pearson IAL WMA14 P4. (5x+7)/((x+1)(x+3)) = 1/(x+1)+4/(x+3), integral 0 to 1 = ln2+4ln(4/3). Denominators positive on [0,1]. All other choices differ. **Mathematics PASS; HOLD** (syllabus, family and rendering evidence outstanding).

## Outstanding controls / not passes
No row-level changeset proving every newly published/modified approved question checked; no full per-student assignment/unseen/adaptation/Ready certification; no authenticated RLS penetration tests, storage access tests, server timer tests, GitHub Pages workflow verification, copyright provenance review or official 2026–27 syllabus objective checks completed in this run. No full Signature part-by-part verification or authorised human moderation was performed; no Signature release. Historic pilot assignments require follow-up. No speculative 'all clear' or automatic promotion. Verified original content remains preauthorised to publish only after complete substantive checks, without owner approval.

## Disposition
No newly confirmed mathematical errors among three staged questions. All remain inactive. No production data changed. Carry findings to established evening report.

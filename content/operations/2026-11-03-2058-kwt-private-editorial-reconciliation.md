# MathsGrove live storage reconciliation — 2026-11-03 20:58 Asia/Kuwait

## Verified finding
The earlier 18:58 report incorrectly treated public.question_bank (10 rows) as the entire Grove editorial inventory. Direct SQL inspection of information_schema found the authoritative editorial tables in the **private** schema: private.grove_practice_bank and private.grove_signature_editorial.

Live SQL counts in Supabase project nwakgkxytovprrrwyahs:
- private.grove_practice_bank: **2,230 total**, **1,942 active AND review_state='approved'**, **48 inactive**. The remaining 240 are active but not counted as approved.
- private.grove_signature_editorial: **10 total**, **0 review_state='approved'**, **10 awaiting_human_moderation**.
- public.question_bank: 10 rows, a separate public table, not the Grove editorial source of truth.

## Release outcome
New questions authored: 0. Individually verified and approved: 0. Activated: 0. Signature papers created: 0. Existing student data and human moderation untouched. No CI or deployment success claimed.

## Editorial safeguards and gaps
The presence of a private editorial bank resolves the false storage-missing blocker. Publication still requires exact component and exam-year verification against official board specifications, independently checked mathematics, distractor and KaTeX checks, mathematical-family duplicate and per-student seen-history exclusions, and verified database readback. Inventory totals are not per-student eligible stock. Required minimums remain 32 Weekly, 112 Daily plus Weekly, and 188 Exam plus Weekly; per-route shortfalls must be computed with exact board/component and student exclusions.

## Next actions
Audit inactive drafts individually; prioritise understocked Pearson IAL P3/P4/M2/S2, Cambridge 9709, Further, IB and TMUA. Keep all Signature papers awaiting authenticated human moderation. This journal corrects the misleading 18:58 schema reconciliation.

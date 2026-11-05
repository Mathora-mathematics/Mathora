# MathsGrove editorial QA — 2026-11-05 03:03 Asia/Kuwait

Batch: 2026-11-05-0303-kwt-explanation-repair

## Live work
Connected to Supabase project nwakgkxytovprrrwyahs. Individually repaired two existing inactive GCSE Pearson Edexcel 1MA1 Higher drafts:
- bae2dafa-d096-4627-82b4-f4f7d7b7cfc1 — Exam, similarity area scale factor. Correct 1:16, independently checked with triangle areas 0.5 and 8. Added explanations of all distractors.
- b84b674a-5969-4969-ac42-79964b018d1c — Daily, strict quadratic inequality. Correct 3<x<6; checked sign at 0,4,7 and endpoints. Added explanations of all distractors.

SQL UPDATE RETURNING verified both remain review_state=draft, active=false. Accepted explanation repairs: 2; rejected/new questions: 0; activations: 0.

## Inventory and release gates
Live count 2,236 total, 1,942 approved-and-active, 54 drafts. These aggregate figures are NOT student-specific eligible/unseen counts. No complete per-route availability calculation was performed; minimum required inventory targets are Weekly 32, Daily 112 plus Weekly, Exam 188 plus Weekly. Student-history/family-repeat screening, exact current syllabus version and calculator requirements, KaTeX browser verification and release QA were not completed, therefore no draft was activated. Official board specification reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html (not freshly revalidated in this cycle).

## Signature / deployment
No Signature assessment changed; human moderation untouched. No application code deployment or passing GitHub Actions verification claimed. Journal-only GitHub commit. Outstanding: verified syllabus/year and route-specific checks, family-level deduplication, student eligibility, full rendering QA, content authoring for underserved units.

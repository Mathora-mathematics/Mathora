# MathsGrove editorial cycle — 2026-11-04 03:00 Asia/Kuwait

## Live source and verification
Supabase project `nwakgkxytovprrrwyahs`, `private.grove_practice_bank`, inspected using live table metadata and SQL. This is the authoritative private practice inventory, distinct from `public.question_bank`. Batch identifier: `20261104-0300-KWT-inventory-audit`.

## Observed counts
Live SQL by programme_scope: Weekly 339 approved/active; Daily 639 approved/active; Exam 964 approved/active; 'all' 240 active but **not** approved. Total 1,942 approved/active, plus 240 active unapproved; 48 inactive by difference from 2,230 total. Active is not equivalent to approved or unseen/eligible.

## Specific understocked exact routes
Pearson Edexcel IAL WMA14 P4 (A2): 1 approved/active in each of Weekly, Daily, Exam; shortages 31, 111, 187 respectively.
Pearson Edexcel IAL WME02 M2 (A2): 1 each; shortages 31, 111, 187.
Pearson Edexcel IAL WST02 S2 (A2): 1 each; shortages 31, 111, 187.
Pearson Edexcel IAL WMA13 P3 (A2): Daily 1, Exam 1; Weekly 2 reported in prior cycle, not re-queried here. Daily shortage 111, Exam shortage 187.
Cambridge 9709 P6 Statistics 2 (A2): 1 each; shortages 31, 111, 187.
Pearson Edexcel IAL WST01 S1 (AS): 1 each; shortages 31, 111, 187.
These are raw per-route deficits against Weekly 32, Daily 112, Exam 188. Daily and Exam also need separate Weekly inventory, and learner-specific seen/unseen filtering may increase shortages.

## Editorial actions and release gates
Candidates accepted: 0. Rejected: 0 (no new candidates underwent full individual QA). Repaired: 0. Activated: 0. Signature papers authored: 0. No student-specific examiner sign-off or release.
Read-only sampling of inactive drafts identified a Cambridge IGCSE composite-functions question, an IB AA HL complex-root question and an elementary GCSE Higher arithmetic-mean question. No status flips were performed. Individual official syllabus/version, exact-component, originality-family, student-history, KaTeX browser, and deployment gates remain unverified in this cycle; therefore no release was justified.
No site application code changed and no GitHub Actions pass or deployment is asserted.

## Next work
Prioritise original WMA14/WME02/WST02 and Cambridge 9709 P6 questions, independently validate every answer and distractor, check current official syllabus documents and calculator conditions, then stage and activate only verified originals. Separately audit assignment SQL for no-repeat across historic and future task items. Keep Signature items in private editorial staging awaiting authenticated human moderation.

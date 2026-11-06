# MathsGrove content + Signature — 2026-11-06 08:56 Kuwait

Batch ID: 2026-11-06-0856-KWT. Target Supabase project: nwakgkxytovprrrwyahs. Repository: Mathora-mathematics/Mathora.

## Verified live SQL findings
- Correct content table is **private.grove_practice_bank**, not public.practice_questions. The latter does not exist. This corrects the failed first retrieval of this batch.
- Exact SELECT count: **2,236** practice records; **1,942** are simultaneously review_state='approved' and active=true. The table-list row number is metadata, but these counts were confirmed by SQL.
- Exact-label route fragments: Cambridge IGCSE 0580 / extended / weekly, daily and exam each have **0 approved-active and 8 drafts**. Separately labelled Cambridge IGCSE 0580 Extended has 1 approved-active Weekly and 1 Daily; Cambridge 0580 Extended has 1 each Weekly, Daily and Exam. These are aliases, not a consolidated canonical route.
- Pearson Edexcel IAL WMA14 P4 appears under both qualification='A_LEVEL', academic_level='a2' and qualification='International A Level', academic_level='A2 Pure Mathematics 4'. The latter has 0 approved-active and 1 draft in Daily and Exam. Exact-label inventory must not be mistaken for canonical route eligibility.
- No per-student seen/eligible count was established; do not claim fulfilment of Weekly 32, Daily 112 plus weekly, or Exam 188 plus weekly.

## Individual candidate checked
- Question 4faa7797-5922-490e-9d63-ae9964ae1d40: Pearson Edexcel GCSE 1MA1 Higher, Weekly. Prompt: Solve 4x+7=31; options 6,5,7,24; correct 6. Independently: 4x=24, x=6; substitution 4(6)+7=31. Wrong answers: 5 gives 27, 7 gives 35, 24 confuses x with 4x. **Rejected for activation**: low-demand prior-knowledge item for Higher; existing editorial note flags near-duplicate family; exact official version and browser/history checks absent. Remains inactive draft; no mutation.
- Official reference for GCSE 1MA1 must be independently confirmed against Pearson's current specification before release. Cambridge IGCSE 0580 2025–2027 official syllabus reference for later route work: https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf .

## Editorial / Signature decision
- New questions authored: 0; individually accepted for activation: 0; rejected/held: 1; modified: 0; activated: 0. No code deployment or successful Actions run claimed.
- Private Signature editorial table exists (13 rows per table metadata); no human moderation approval was impersonated, no student work or reports released.
- Next engineering priorities: canonical board+component+year mapping without changing historical records; secure anti-repeat exclusion across grove_task_items; student-specific eligible counts; rendering tests and atomic publication transaction; actual authenticated examiner moderation for Signature.
- Confidential student information and secrets excluded from this journal.

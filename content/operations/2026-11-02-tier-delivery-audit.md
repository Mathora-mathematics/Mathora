# MathsGrove — Tier Delivery and Question Supply Repair

**Audit date:** 2026-11-02 (Asia/Kuwait)  
**Projects:** GitHub `Mathora-mathematics/Mathora`; Supabase `nwakgkxytovprrrwyahs`.

## Root causes verified on live database
- The recurring task scheduler was generating eligible due dates while each academic route had too few genuinely approved, board-compatible, non-baseline, unseen questions to start the assignment (e.g. GCSE Higher AQA Grove Exam needed six but only three approved matching items were available).
- The old student calendar initially displayed due assignments as **Ready** without testing bank supply, and cut off the list after 20 dates.
- The selector did not guarantee a range of topics, and its historical repeat protection already appropriately excluded repeated question IDs and identical normalised stems.
- Monthly Grove Exam was only a zero-question `mock_pending` placeholder.
- Pearson International GCSE Foundation and Higher could be left unrecognised when the route parser expected only Core or Extended.

## Fixes installed live
1. Calendar RPC returns the actual count of unseen, approved, matched, non-baseline questions, filters stale scheduled assignments from previous subscriptions, and client disables misleading Ready buttons when content is insufficient. Visible upcoming assignments expanded to 42 rows.
2. Approved tier pools expanded with **516 original mathematically checked stems**: 408 differentiated templates for GCSE Higher-style work across 12 topics, plus 108 independently authored Foundation/Core-level stems across six topics. They were safely reused as appropriate in compatible separate academic routes; the database contains 1,659 new route-specific approved entries. This count is **not** 1,659 distinct question ideas. Secure keys and worked explanations remain in private Supabase.
3. Shared UK GCSE material is tagged cross-board for curricula common to AQA 8300 and Pearson Edexcel 1MA1. Cambridge/Pearson IGCSE material is shared only where the checked mathematical syllabus overlaps. Higher-only surds and conditional two-stage probability were excluded from Foundation/Core adaptations. Pearson 4MA1 Foundation/Higher aliases route to Core/Extended respectively.
4. Past question bank IDs and normalised wording remain excluded from every new assignment, and an active-bank stem uniqueness index is present.
5. Selection now makes a first pass across separate mathematical topics, takes baseline scores into account for starting difficulty, and adjusts according to recent released examiner marks and observed topic errors.
6. Existing scheduled Grove Exam monthly placeholders were converted to a **20-item / 90-minute timed MCQ practice mock** (including original whiteboard/photograph evidence and examiner marking). This is not yet a full official-format 80/100-mark written exam paper. The existing live date is 2026-11-30. Timers lock at expiry.
7. Generated exam question time metadata reduced to approximately 4 minutes per item; weekly 5 minutes; Daily typically 2.5–3 minutes. Front-end and database changes committed as migrations and tested.

## Live availability audit (after changes)
Numbers are eligible approved questions for **a new student** before prior-question exclusions, for the indicated qualification / academic level / board.

| Route | Daily | Weekly | Grove Exam |
| --- | ---: | ---: | ---: |
| AQA GCSE Foundation | 149 | 79 | 210 |
| Edexcel GCSE Foundation | 148 | 78 | 209 |
| AQA GCSE Higher | 135 | 51 | 231 |
| Edexcel GCSE Higher | 133 | 49 | 229 |
| Cambridge IGCSE Core | 140 | 77 | 212 |
| Edexcel IGCSE Foundation (mapped Core) | 137 | 74 | 209 |
| Cambridge IGCSE Extended | 137 | 53 | 233 |
| Edexcel IGCSE Higher (mapped Extended) | 135 | 51 | 231 |

**Consumption targets for a rolling four-week window:** Daily 112 (4/day ×28); Weekly 32 (8/weekly ×4); Exam 188 (6/day ×28 + monthly 20-item timed mock). The above core GCSE/IGCSE routes meet the targets for an entirely new student; prior completed assignments reduce the available count. The existing GCSE Higher trial student's Exam route had 231 unseen verified questions after 408 higher-style additions, and the November 2 scheduled six-item session is now active with six different bank IDs.

**Important ongoing gap:** Advanced academic routes (A Level AS/A2, Further Maths, IB AA/AI SL/HL, TMUA) currently do not meet a full 28-day unseen-question target. Recurrent research and authoring tasks were explicitly redirected to prioritise these gaps. A full, board-authentic, multi-mark written mock engine remains a separate deliverable; the current 90-minute paper is a 20-item timed MCQ practice mock with examiner marking of workings.

## QA requirements
- All 1,659 new route entries have exactly four choices, one matching answer key, approved/active state and TeX notation. No live student answers, evidence, report comments or graded records were removed.
- Check future maths variants for near-duplicate structure, not just equal prompt strings.
- Check official syllabuses before sharing or activating material across national qualifications.
- Recheck latest GitHub Actions deployment success after each code change; never treat a successful database update alone as a successful site rollout.
- Preserve staff review of practice and mocks, and keep secure answer keys out of the public GitHub Pages build.

## Official syllabus research
- [AQA GCSE Mathematics 8300](https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/subject-content)
- [Cambridge IGCSE Mathematics 0580](https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/)

## Ongoing recurring jobs
- Every two hours: official syllabus research / source-linked editorial brief.
- Thirty minutes later: verify and publish original maths batches to private tier bank.
- Every seven hours: sample student-calendar supply, real no-repeat integrity, marking/evidence and deployment status. These are scheduled starts, not guarantees of thirty minutes of wall-clock execution.


## Tier inheritance follow-up (verified 2 November 2026)

The initial scheduler only created a single assignment mode per subscription, even though Grove Daily and Grove Exam include Grove Weekly. Deployed migration `supabase/migrations/20261102_subscription_weekly_inheritance.sql` fixes both administrator-driven assignment and student-calendar self-healing:

- **Weekly:** four 8-item weekly papers in a 28-day subscription block.
- **Daily:** 28 four-item daily sessions, plus four separate eight-item weekly papers.
- **Exam:** 28 six-item daily sessions, plus four separate eight-item weekly papers, plus the 20-item 90-minute timed monthly MCQ practice mock.
- The weekly sets for Daily and Exam are due on the 7th, 14th, 21st and 28th days relative to entitlement start; each mode checks its own unseen/approved bank separately. Historic item and matching-normalised-stem reuse are still excluded.
- The existing trial student's four inherited weekly tasks were backfilled safely on November 6, 13, 20 and 27. The active exam-daily assessment and graded prior work were not touched.
- The student UI now displays `weekly_unseen_questions` for weekly assignments and `unseen_questions` for Daily/Exam, avoiding misleading Ready buttons. The public service tier metadata was brought in line with the actual implemented MCQ practice format.
- Regression assertions were added to `scripts/check-tier-delivery.mjs` and included in the deployment workflow.

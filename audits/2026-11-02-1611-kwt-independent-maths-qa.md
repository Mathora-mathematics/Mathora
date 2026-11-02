# MathsGrove — Independent Mathematics and Production QA

**Checked:** 2 November 2026, approximately 16:01–16:11 Asia/Kuwait (13:01–13:11 UTC).  
**Sources:** LIVE Supabase project `nwakgkxytovprrrwyahs`, GitHub `Mathora-mathematics/Mathora`, current GitHub Actions and Supabase logs/advisors, and official Cambridge/Pearson syllabuses.  
**Privacy:** Aggregates only; no student identifiers, answer keys, unreleased full question text, student work, or personal grades are published here.

## Executive result

Two **narrow verified fixes** were completed:

1. Repaired two stale curated GitHub Pages asset tests. The tests incorrectly required an asset pair to appear immediately before `site/` in a long `cp` command; additional legitimate assets had been inserted between. Both tests now check that the required assets appear **on the same copy command**, still requiring a `site/` destination. The curated manifest itself already contained the assets. Commits: `76caa781f98b3f736c267706691d252ff8425048` and `e3d99e76d84528f6010270fcba575931d778e763`. **Both custom Deploy MathsGrove and native GitHub Pages workflows completed successfully** on commit `e3d99e76` (runs `41450045202` and `41450044566`). Previous custom deployment failure was a false-negative integrity test, not evidence that the actual asset was missing.
2. Corrected the worked explanation of an arithmetic-sequence item in **four existing approved private bank variants** (GCSE Foundation/Higher, IGCSE Core/Extended). The question asked for the tenth term, but its explanation calculated the ninth term and jumped to the tenth answer without showing the requested substitution. Updated to the explicit formula `u_n=19+3(n-1)` and `u_10=19+3(9)=46`, with ninth-term cross-check. Live SQL read-back confirmed 4/4 correct explanations and 4/4 correct keys. No instances of these four records were assigned to students before the correction. No student records were touched.

No new questions were published by this **independent QA** run; the content authoring process separately publishes vetted originals.

## Latest private publication cycle: nine new 15:00 items

The most recent private ledger `content/operations/verified-original-batch-20261102-1500.json` lists nine newly published original questions, covering Pearson Edexcel IAL WME02 Mechanics 2, WST01 Statistics 1 and Cambridge Further Mathematics 9231 Paper 2, with one each for Weekly/Daily/Exam per route.

All **9/9** live database records were independently re-evaluated using separate JavaScript arithmetic/analytic calculations, not merely checked against stored explanations: hyperbolic cosine, matrix cube/trace, first-order ODE with initial condition, acceleration/velocity/displacement integration, work-energy speed, projectile trajectory, transformed discrete variance, normal conditional probability (independently numerically integrated), and least-squares regression. Results **9 passed, 0 failed**. For each, four choices were distinct with exactly one matching correct key, question/solution mathematical delimiters were present, expected time and route metadata were populated, and approved/active status matched the private ledger.

Official syllabus checks:
- Cambridge Further Mathematics 9231 **2026–2027 version 3**, Paper 2 sections 2.1 hyperbolic functions, 2.2 matrices, 2.6 differential equations: https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf
- Pearson International A Level Mathematics (2018 specification), WME02 and WST01: https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics-2018.html
- Cambridge Mathematics 9709 **2026–2027** distinguishes P3 Pure, P4 Mechanics, P5 Statistics 1 and P6 Statistics 2: https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf

No official copyrighted exam questions were copied in this run.

## Bank-wide structural and duplication checks

**Live private bank:** 2,175 rows; **1,887 approved/active**, **240 active pilot** (not eligible for ordinary approved-only assignments), **48 inactive draft**. All 1,887 approved items have JSON arrays of exactly four choices and exactly one exact key match. No exact duplicate approved normalized stems within the same qualification/academic level were found. No repeated student-assigned bank IDs and no repeated exact normalized student-assigned stems were found. **Four historical baseline/practice prompt overlaps** remain in old assignments and were preserved.

**Important unresolved family-level repetition:** A conservative parameter-stripped stem heuristic (replace numeric tokens with placeholders, group by qualification and level) found **148 recurring structural families spanning 1,659 of 1,887 approved rows**; this does *not* mean 1,659 incorrect questions, and the heuristic may group legitimate variants. One real already-assigned Grove Exam daily paper contained **two percentage-change questions with the same parameter-only template**. No assigned record was altered. The live selector excludes exact stems and IDs but does **not** enforce distinct near-duplicate families within a paper or across a student's history.

For the current trial route, read-only eligible counts (already excluding baseline/exact previously assigned questions) were: **Daily 135 for 4 needed; Weekly 51 for 8 needed; Exam daily 225 for 6 needed; timed mock 225 for 20 needed**. Yet there are only **15 distinct numeric-parameter stem families** in each respective pool under this conservative heuristic. A 20-question mock cannot avoid at least one repeated family unless additional genuinely distinct content is added. The current UI's 'Ready' checks use eligible item counts, not unique families. Prioritise family-aware selection and fresh varied original questions; add isolated tests before changing production assignment SQL.

**Editorial quality debt:** 1,887/1,887 approved items have no `reviewed_by` identity, 36 lack `reviewed_at`, 228 have explanations shorter than 100 characters, and 6 lack a sufficiently populated syllabus objective. These are metadata/quality warning counts, not a proof of wrong answers. Seven plain-text correct options intentionally lack math delimiters (e.g. explanatory statements or currency amounts), not automatically rendering failures. Do not forge a human review identity to fill missing fields.

## Route and assessment integrity

- Explicit board-component gates correctly rejected tested cross-route pairs: 0580→0607, IAL P1→P2, Cambridge 9709 P4→P5, P5→P4 and Cambridge 9231 P2→unspecified 9231.
- **Unresolved routing risk:** `private.grove_board_compatible('Cambridge 9709','Cambridge 9709 P4 Mechanics')` returns **true**. The generic 9709 approved pool includes Pure Mathematics topics (e.g. calculus, trigonometry and series), so an explicitly Mechanics-only student can be offered non-P4 content. The official 2026–2027 syllabus separates Pure and Mechanics papers. No change was made to the production compatibility function without regression tests covering all existing generic 9709 students.
- Baseline: 240 active questions over 12 qualification/level routes, 20 questions per route; target-grade checks returned the expected allowed/rejected outcomes for Cambridge IGCSE Core/Extended, Pearson IGCSE and AQA GCSE. Board-specific baseline targeting and predicted-grade calibration remain incomplete.
- Scheduling: both `private.grove_assign_student` and `public.grove_my_calendar` still generate a rolling **28-day** window. Live `cron.job` contains baseline/practice expiry jobs, but no automatic schedule-extension job. Continuing subscriptions can require calendar access/admin rescheduling; implement an idempotent, tested renewal mechanism.
- Timed mocks: a 20-item generic `mock` task exists, with a 90-minute server-side expiry and a 2-minute recurring close job. It is **not** an official-format multi-mark exam paper. No separate `grove_mock_sessions` tables or legacy mock finalisation RPC were found. Do not claim the old dedicated mock backend is operational.

## Evidence, staff marking and Signature

- `student-work` and `grove-student-exports` buckets are **private**. All **5 whiteboard evidence rows** matched storage objects; no orphan files. No real photograph upload records existed, so real photo delivery was **not** verified. The upload function checks signed-in student, task/session ownership, permitted extensions, valid question position and active time.
- **10 practice mark rows** have non-null staff markers; **2 task feedback rows** have non-null updater identities. This was a read-only consistency check, **not** a new authenticated end-to-end marking test.
- Four private Signature editorial papers exist (GCSE 30 marks, Cambridge 9709 P1 25 marks, TMUA-inspired specialist reasoning 20 marks, Pearson IAL WME02 24 marks). All paper totals, question totals, part totals, scheme totals and granular criterion totals reconcile. **22 independent mathematics checkpoints** across the four papers were checked; floating-point equality for the Mechanics projectile speed was rechecked with a numerical tolerance (difference ~3.6e-15) and passed. All four remain `awaiting_human_moderation` with **no** human moderator recorded and **no** student release. Never auto-sign human moderation.

## Security, logs, performance and deployments

- Supabase project status: **ACTIVE_HEALTHY**, region `eu-west-1`. Private tables have RLS enabled; anonymous and authenticated roles do not have direct SELECT on the tested private question, Signature or evidence tables. Storage object SELECT and INSERT policies restrict role/ownership. This is a configuration inspection, not a penetration test.
- Security advisor: **51** authenticated-executable SECURITY DEFINER function warnings, **1** leaked-password protection warning, **24** informational RLS-without-policy findings (mostly intentional deny-by-default private tables). Each privileged function requires a targeted role/ownership audit, not a blanket grant/revoke.
- Performance advisor: **35** unindexed foreign keys and **2** unused indexes; prioritise high-traffic assignment/evidence paths after query-plan measurement.
- Logs sampled **2026-11-01 13:00–2026-11-02 13:00 UTC**: edge/function-edge response statuses: 562 HTTP 200, 18 HTTP 204, 14 HTTP 404, 13 HTTP 400, **no 5xx in this sample**. The 404s were 12 calls to absent legacy `finalize_expired_mock_sessions` and 2 to absent `mock_packs`; 11 HTTP 400s were at `grove_task_start`, requiring correlation with user-facing errors/insufficient supply. Some database ERROR logs can include administrative/QA queries; do not equate every SQL error with a student runtime defect.
- Prior custom GitHub Pages deployment run `41445257475` failed at `scripts/check-experience-v6.mjs` due to an overly strict asset-copy substring assertion. The test fix was deployed; **both** subsequent workflows for commit `e3d99e76` succeeded: https://github.com/Mathora-mathematics/Mathora/actions/runs/41450045202 and https://github.com/Mathora-mathematics/Mathora/actions/runs/41450044566 . These are CI/deployment results, **not** an authenticated real-student browser test.

## Prioritised next actions

1. **High:** Stop near-duplicate family reuse within an individual assignment and across student history. Simulate on historical assignments and prove adequate genuinely distinct topic families before changing the selector. Correct the 'Ready' UI to distinguish item supply from family diversity.
2. **High:** Tighten generic Cambridge 9709/P4/P5/P6 component compatibility; preserve valid P1/P3 cross-year learning paths through explicit route metadata rather than guessing from generic board strings.
3. **High:** Retire legacy mock endpoints/calls or build the real dedicated service; ensure full timed mock release, expiry, work capture and staff marking are tested with non-production trial accounts.
4. **Medium:** Expand advanced/IB/TMUA approved *genuinely distinct* questions, and independently review the 228 short explanations and 6 missing objectives; do not fabricate `reviewed_by`.
5. **Medium:** Implement tested idempotent rolling schedule renewal, validate actual photo uploads and staff feedback under authorised test accounts.
6. **Security/performance:** Audit SECURITY DEFINER grants, enable leaked-password protection if compatible with the login plan, and index proven slow foreign-key paths only after `EXPLAIN` checks.

**Change safety:** Only two GitHub test assertions and four unassigned bank explanations were modified. No student account, subscription, task, submission, evidence, mark, Signature approval or historical assignment was changed. No unverified mathematics was published.

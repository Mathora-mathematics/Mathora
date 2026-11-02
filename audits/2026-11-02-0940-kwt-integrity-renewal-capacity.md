# MathsGrove integrity audit — 2026-11-02, 09:32–09:40 Asia/Kuwait (06:32–06:40 UTC)

**Scope:** Connected Supabase production project `nwakgkxytovprrrwyahs` and `Mathora-mathematics/Mathora` default-branch deployment. All production database inspections in this run were **read-only**. This report records only checks actually executed; it is not a full authenticated end-to-end test or performance benchmark.

## Outcome

- **New actionable P1 finding:** enrolment schedules only 28 days of tasks; no recurring task-renewal job exists. Opened [issue #40](https://github.com/Mathora-mathematics/Mathora/issues/40). **No production scheduling fix applied**, because enabling a job would create/change live student task records and requires isolated tests.
- Updated [content inventory issue #20](https://github.com/Mathora-mathematics/Mathora/issues/20) and [editorial provenance issue #25](https://github.com/Mathora-mathematics/Mathora/issues/25) with current measurements. No mathematical approvals were changed.
- Production project reported `ACTIVE_HEALTHY`. Latest observed pre-audit website deployment, GitHub Pages deployment and original-maths verification workflows were successful on commit `ab1d7ed404223369800c09673a02b13af4cacf1c` (2026-11-02 06:11 UTC): [website run 41398351351](https://github.com/Mathora-mathematics/Mathora/actions/runs/41398351351), [Pages run 41398350636](https://github.com/Mathora-mathematics/Mathora/actions/runs/41398350636), [maths verification run 41398351329](https://github.com/Mathora-mathematics/Mathora/actions/runs/41398351329). Successful workflows are not proof of authenticated browser functionality. Direct live-site HTTP verification could not be completed from this environment.

## 1. Mathematics, options, provenance and editorial controls

- Practice bank **459** total: **165 approved**, **240 pilot**, **54 inactive drafts**. All 165 approved entries have provenance labels beginning `mg-original-`; labels are not independent copyright clearance.
- Approved entries: zero malformed four-choice arrays, zero missing correct options, zero repeated option texts, zero missing board, zero invalid scope/difficulty/time, zero missing syllabus objective, zero missing/short review notes.
- Baseline: 240 active questions, **20 per each of 12 qualification/level routes**. Zero malformed baseline option sets, zero missing answer options, zero repeated options; 20 instantiated baseline items matched their bank prompt and explanation.
- Independently recalculated **nine** newest questions (review timestamp 2026-11-02 06:10:57 UTC): Cambridge IGCSE Venn probability (3/13), Pearson IAL P2 arithmetic series (12 terms), P2 linear-divisor remainder (57/8), Cambridge IGCSE updated frequency mean (23/10), relative-frequency estimate (38), Edexcel GCSE composite area cost (£1,242), Pearson IAL P2 circle tangent triangle area (169/6), Edexcel GCSE ingredient-constrained recipe (48 rolls), and Edexcel GCSE ticket revenue (£1,260). Each checked prompt, answer and explanation was mathematically consistent. **The remaining 156 approved questions were not independently recalculated in this run.**
- **Editorial traceability still incomplete:** all **165/165 approved** rows have NULL `reviewed_by`; **36/165** lack `reviewed_at`. Interactive `grove_admin_approve_question` correctly records `auth.uid()`, but bulk-published rows do not carry a reviewer identity. Do not invent historical reviewers or treat an automated workflow as human mathematical approval.

## 2. Duplicate prevention and actual tier capacity

- Zero repeated `bank_id` per student across assignment history; zero exact-normalised duplicate approved prompts; zero approved prompts exactly matching baseline bank prompts.
- **Four historical assignments** still share a prompt with a baseline question. These predate the safeguards and were preserved; no student evidence or marks changed. Exact text matching cannot prove semantic uniqueness of reworded questions.
- Recomputed eligible approved, non-baseline question inventory using the **live** `private.grove_board_compatible` function, qualification, academic level and `programme_scope` across **23 observed board/level routes × 3 tier scopes = 69 first-task route cases**:
  - Grove Weekly: **0/23** routes have the required **8** questions.
  - Grove Daily: **7/23** routes have at least the required **4** questions; **16/23** do not.
  - Grove Exam daily practice: **0/23** routes have the required **6** questions.
  - Maximum eligible items per observed board/level/scope was **5**. These are *first-task* counts for an unseen student; sustainable no-repeat inventory across subsequent days is much worse.
  - The GCSE Higher AQA 8300 route has **3** eligible Daily questions against the required **4**, so a fresh assignment on that route is expected to raise the intended shortage error.
- The `grove_task_start` SQL inspects approved status, active flag, baseline-bank exclusion, board compatibility and previous `grove_task_items` for the same student, and fails closed when the bank is too small. Four negative compatibility probes passed: Pearson Further Statistics 2→Core Pure, Cambridge 9709 P4→generic 9709, Pearson IAL P2→P1, and Cambridge 0580→0607 all returned false.

## 3. Newly identified scheduling gap — issue #40

- `private.grove_assign_student` schedules from `v_start` to `v_start+27` only, with 8 Weekly / 4 Daily / 6 Exam-daily questions per task; Exam also inserts a `mock_pending` placeholder.
- Only two active `pg_cron` jobs exist: `mathsgrove-baseline-auto-close` and `mathsgrove-close-timed-practice`. Neither refreshes task schedules.
- The scheduler is invoked by membership, entitlement and preference enrolment triggers. The staff `grove_admin_schedule` RPC lists assignments, but does not replenish them.
- An observed enrolment had a finite four-week task horizon with no later tasks present. **Without another triggering update, an ongoing entitlement can run out of scheduled tasks after four weeks.** This is a conditional continuity risk; a new entitlement update can trigger another window.
- A safe fix needs an idempotent rolling scheduler, entitlement-bound checks, local-date review, isolated synthetic-user regression tests, and assurance that no active/completed/marked work is changed. **Deferred intentionally** to avoid touching real student records.

## 4. Baseline, target grade and predicted grade

- One completed baseline session was checked for item count, answer count and consistency of the stored score with answer keys. Individual student scores are intentionally omitted from this public audit. No overdue active baseline sessions or closed sessions without score.
- **11/11 read-only target-grade tests passed**: Cambridge IGCSE 0580 Core/Extended letter scales, Pearson IGCSE and GCSE numeric scales, IB 1–7, and TMUA decimal bounds. The trial student's target grade is unset; no real target was changed.
- Baseline routing remains qualification/level-specific rather than exam-board-specific ([issue #30](https://github.com/Mathora-mathematics/Mathora/issues/30)).
- `grove_student_insights` explicitly labels the staff-set target grade and historical marks as evidence, **not an official predicted grade**. A calibrated predicted-grade engine was not found/verified.

## 5. Evidence, marking, staff permissions and timed mocks

- Five private student-work objects, five evidence records, **zero missing** storage objects, **zero orphan** storage objects; all five are `whiteboard` type. No real photo upload was exercised.
- `student-work` and `grove-student-exports` buckets both `public=false`. Student-work MIME allowlist: JPEG, PNG, WebP. Storage INSERT and SELECT policies inspect authenticated student ownership or staff membership. No unauthorised-user live session test was performed.
- One released practice task has four matching marks, non-null score and feedback. Four mark rows, one feedback row and one feedback-history row exist. Staff marking RPC requires staff membership, a submitted task, full marking and feedback before release. No live examiner action was performed.
- No production `public/private` tables or functions with `mock` in the name were found; `mock_pending` is explicitly blocked by `grove_task_start`. Grove Exam monthly timed-mock backend remains incomplete ([issue #24](https://github.com/Mathora-mathematics/Mathora/issues/24)).

## 6. Security, logs, performance and deployments

- Supabase security advisor: **48** warnings about authenticated EXECUTE on SECURITY DEFINER functions (each requires per-function authorization review), **1** compromised-password-protection warning, **23** RLS-enabled/no-policy informational notices (mostly intentionally private). All inspected private Grove tables had RLS enabled. This audit did not demonstrate an exploit or prove every RPC safe.
- Performance advisor: **35** unindexed foreign-key notices; current table sizes are small and no production benchmark or EXPLAIN ANALYZE was run. Index only after reviewing query patterns and write costs.
- Unified logs (last 24h default) showed **17** PostgreSQL messages containing `does not exist`, including missing `content_meta` column and `private.grove_practice_questions` relation around 06:04 UTC; these resemble investigative schema queries, not proven user-facing failures. No `permission denied` messages matched the aggregate. There was no authenticated browser/runtime network trace in this audit.
- Latest observed pre-audit GitHub Actions runs at 06:11 UTC all succeeded. A new audit commit may initiate additional workflows; check their result separately after this file is committed.

## Safeguards and next actions

**No live student rows, scores, questions, review states, evidence files or storage objects were created, edited or deleted. No mathematics was published in this run.** GitHub-only writes were issue #40, updated issue comments #20/#25, and this audit file.

Priorities: **P0** increase independently verified approved route-specific inventory and capture reviewer provenance; **P1** restore complete timed-mock infrastructure and add safe rolling scheduling; **P2** validate real photo and full Weekly/Daily/Exam authenticated journeys, baseline board specificity, security-definer permissions, and performance indexes. Recheck workflow results after the audit commit.

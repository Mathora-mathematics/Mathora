# MathsGrove independent mathematical and production QA — 2 November 2026, 20:03 Kuwait

**Connected production:** Supabase `nwakgkxytovprrrwyahs` (`ACTIVE_HEALTHY` at inspection) and GitHub `Mathora-mathematics/Mathora`. This audit is based on **live connected reads**, mathematical recomputation and recorded GitHub Actions outcomes. It is not a synthetic end-to-end student test, a browser-rendered KaTeX test, a real photo-upload test or a guarantee of continuous work for any specified duration. **No student, parent, submitted work, examiner mark, answer or evidence record was changed.** No unverified questions were published by this QA cycle.

## 1. Newest verified publication (19:03 Kuwait content batch)

Nine live records with provenance prefix `mg-original-20261102-1903-` were independently inspected in `private.grove_practice_bank`. All nine are `active=true`, `review_state='approved'`, and have review timestamps. The batch comprises:

| Exact component | Grove Daily | Grove Weekly | Grove Exam | Main skills independently checked |
| --- | ---: | ---: | ---: | --- |
| Cambridge IGCSE Mathematics 0580 Extended | 1 | 1 | 1 | Speed–time graph distance; 3D line/plane angle; cubic stationary points |
| Pearson Edexcel IAL WMA11/01 Pure Mathematics 1 | 1 | 1 | 1 | Surd rationalisation; radians and sector area; repeated-root discriminant |
| Cambridge 9709 Paper 5 Probability & Statistics 1 | 1 | 1 | 1 | Restricted permutations; summary standard deviation; conditional normal probability |
| **Total** | **3** | **3** | **3** | **Nine** |

**Independent mathematics:** 9 full independent derivation/recalculation checkpoints and 9 independent four-option/distractor-comparison checkpoints passed (18/18); for the normal and angle questions, the specified rounding tolerance was independently verified. All nine have exactly four distinct choices with one matching key; 63 individual prompt/answer/choice/explanation TeX strings passed balanced math-delimiter and brace checks. No arithmetic, sign, domain, unit or answer-key contradiction was identified in this batch; **zero items quarantined**. A rendered browser KaTeX check was **not** performed. No exact baseline matches or already assigned IDs were found for the nine. Automated editorial provenance is not a named human review: their `reviewed_by` fields are null and must not be backfilled with fictitious identities.

**Official curriculum sources checked on 2 November 2026:**
- [Cambridge 0580 syllabus 2025–2027, version 3](https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf), E2.9, E2.12 and E6.6.
- [Cambridge 9709 syllabus 2026–2027, version 3](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), P5 §§5.1, 5.2, 5.3 and 5.5.
- [Pearson IAL Mathematics, Issue 3](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf), WMA11/01 Pure 1. These are original supplemental practice MCQs, not copied examination papers.

## 2. Verified production fix — exact Cambridge 9709 Pure Mathematics routing

**Pre-fix confirmed defect:** `private.grove_board_compatible('Cambridge 9709','Cambridge 9709 P4 Mechanics')` and the same comparison for P5 both returned `true`, allowing generic Pure Mathematics content into a different component. The approved bank contained **24** generic-labelled Cambridge 9709 items: **15 AS Pure P1** and **9 A2 Pure P3**, with **zero assigned** among those 24.

**Change applied to live Supabase and recorded in GitHub:**
- Migration: [20261102_zz_2005_cambridge_9709_pure_component_guard.sql](../supabase/migrations/20261102_zz_2005_cambridge_9709_pure_component_guard.sql).
- Added exact Cambridge 9709 P1, P2 and P3 component matching and **fail-closed** behaviour for ambiguous generic 9709 labels. Preserved P4, P5, P6, IAL, 0580, 9231 and other existing branches.
- Reclassified the **24 already-approved, previously unassigned** generic Pure items by verified academic component to **P1 (15)** and **P3 (9)**. No stems, answers, mathematical solutions, review states, student records or marks were changed.
- **Production migration succeeded**; 16 read-back component-routing assertions passed. No active approved generic 9709 bank labels remain. All 24 are now correctly classified; no student assignment history was rewritten.
- Added a static future-regression assertion to [check-approved-practice-gate.mjs](../scripts/check-approved-practice-gate.mjs) so subsequent migrations cannot silently re-enable broad P1/P3/generic 9709 routing.

## 3. Entire bank, assignment history and route capacity

Live bank counts: **2,193** practice records: **1,905 active approved** (Weekly **326**, Daily **627**, Exam **952**), **240 active pilot** (not approved for assignment) and **48 inactive drafts**. All **1,905 approved** records have `reviewed_by IS NULL`; **36** lack `reviewed_at`, and **228** have explanations shorter than 100 characters. Do not fabricate reviewer identities or flip the draft/pilot flags to fill supply.

Historical materialised practice: **10 question items**, **0 repeated bank IDs**, **0 identical whitespace-normalised stems**, **1 repeated numeric-template family** (percentage-change question type) and **4 historical baseline/practice overlaps**. Existing work and marks were preserved. The family heuristic strips digits and whitespace; it can both over- and under-group genuinely different mathematical structures. It is a warning, not a definitive mathematical equivalence classifier.

The single currently entitled trial route is GCSE Higher AQA Grove Exam. After existing assignments and baseline exclusions it has **226 unseen Exam-scope items** and **52 unseen Weekly-scope items**, but only **16 distinct numerical-template families** among Exam items. Therefore a **20-question mock cannot achieve 20 distinct families under this heuristic**. Current `grove_my_calendar` / `assigned-practice.js` marks a mock **Ready** from raw unseen counts, not family diversity, so the label can overstate content variety. A proper family key, future-selection guard, distinct-family minimum and honest UI eligibility must be designed and tested without changing existing submissions.

Across **37 observed qualification/level/board-label combinations** in the approved bank (not 37 distinct live student routes), **14** meet raw four-week volume targets of Weekly ≥32, Daily ≥112 plus Weekly ≥32, and Exam ≥188 plus Weekly ≥32. Only **1 of 37** has ≥20 distinct numeric-template Exam families. These are **upper-bound inventory heuristics**, not guarantees of a student's unseen, correctly adapted, paper-specific availability; cross-board labels and prior assignments can reduce supply.

The scheduler shows Exam inheritance correctly in current trial records: **27 scheduled Exam-daily tasks**, **4 scheduled Weekly tasks** and **1 scheduled monthly mock**. One Exam-daily task is expired and released; separate historical Daily records remain. The 28-day rolling schedule depends on calendar refresh, not a verified recurring server job. The baseline is still qualification/level-specific rather than exact exam-board-specific.

## 4. Baseline, targets, marking, Signature

Baseline: **240 active questions**, exactly **20 in each of 12 qualification/academic-level routes**. In a 14-case target-grade test matrix, **13 cases** matched qualification-award expectations. The exceptional case is **A* permitted for an AS academic-level target**. Cambridge 9709 and Pearson IAS do not award A* at AS certification; if MathsGrove intends the field as a *long-term full A Level goal*, A* could be intentional. Do not alter existing target grades until this semantic distinction is specified. The 0580 Core/Extended and Pearson 4MA1 Foundation/Higher cases passed.

Marking: both **2 released practice tasks** have all question marks, a feedback record, and scores equal to their mark totals. No new staff marking transaction was performed. The live functions require staff authorisation and explicit release; do not infer end-to-end marking reliability from two records.

Signature: **6** confidential staged assessments (Signature / Signature Advanced / Specialist), **147 total allocated marks** and **54 question parts**. All six paper totals, scheme totals and criterion allocations reconcile with **zero discrepancies**. **54 independent mathematical/proof checkpoints** were recalculated or logically reviewed (including hyperbolic, Maclaurin, complex roots, mechanics, functions, geometry, probability and reasoning), all passing. All six remain `awaiting_human_moderation`, with `human_moderated_by IS NULL` and no student-specific Signature report released. The staff RPC checks membership before returning editorial content; the catalogue is currently globally scoped after staff authorisation, so multi-organisation deployment would need an explicit tenant-ownership decision. Do not fabricate human sign-off.

## 5. Evidence, security, runtime and performance

**Storage:** `student-work` and `grove-student-exports` buckets are **private**. Five existing evidence records are all **whiteboards**, all matched to existing `student-work` objects (four practice, one baseline). The upload RPC restricts path, ownership, active session and file type; **real photograph upload and full cross-role retrieval were not executed**.

**Security advisors:** 51 warnings for authenticated-accessible `SECURITY DEFINER` functions, 1 leaked-password-protection warning, 24 informational private RLS-enabled/no-policy tables. This is **not proof of an exploitable access bypass**; each function must be reviewed with ownership and authorization context. **Performance advisors:** 35 unindexed foreign keys, 2 unused indexes. A read-only `EXPLAIN` for a representative GCSE Higher board-specific approved-item count used `grove_bank_path_idx` (index scan); no live load test was run.

**Last-24-hour runtime logs**, 1 Nov 17:00–2 Nov 17:00 UTC: 12 HTTP 404 responses at `/rest/v1/rpc/finalize_expired_mock_sessions`, 2 at `/rest/v1/mock_packs`, 11 HTTP 400 `grove_task_start`, one staff-marking 400 and one auth-token 400. The 400s were **not** conclusively diagnosed. Live DB lacks `public.mock_packs` and `finalize_expired_mock_sessions()`. A Grove `mock` task exists with a server-set 90-minute timer on start, but the legacy mock-finalisation route and a complete authenticated mock workflow remain unverified. Do not call the full Grove Exam mock feature production-ready.

## 6. Deployment, actions and next safe priorities

The pre-audit latest verified content batch commit `ee97a77e8b` had successful **website deployment**, **GitHub Pages** and **19:03 original-content verification** workflows. The routing-migration commit `cbef98772c` subsequently passed **website deployment**, **GitHub Pages** and original-content regression workflows. A further static-regression commit `25361ae86c` was pushed; verify its latest workflow result separately rather than claiming success before completion.

Priorities: (1) make distinct mathematical-family and baseline history exclusions part of both selection and UI eligibility; (2) finish and test secure timed mocks and eliminate stale 404 callers; (3) implement exact exam-board-specific baseline and distinguish AS certification grades from long-term A Level targets; (4) record genuine automated-vs-human editorial provenance, improve 228 thin approved explanations and investigate 51 privileged-function warnings; (5) expand independently verified varied content for underserved components. Continue automatic publication of original practice questions **only after** substantive independent mathematical/specification QA; keep Signature human examiner moderation separate.

**Privacy:** This public audit deliberately contains no student identities, private questions/keys, answers, photographs, personal grades or Signature assessment paper text.

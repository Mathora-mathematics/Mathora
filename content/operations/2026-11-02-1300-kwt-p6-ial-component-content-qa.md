# MathsGrove content / QA journal — 2026-11-02 13:00 Kuwait
**Release state at initial review:** 9 private drafts, **0 newly activated**. This journal will be amended after live routing, CI and database verification. No student assignments, answers, evidence or examiner marks were changed.

## Official syllabus review (2 November 2026)
- Cambridge International AS & A Level Mathematics 9709, 2026–27 syllabus (P6 §§6.2, 6.4, 6.5): https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf . P6 is A Level only and requires P5; the P6 item cannot match a generic 9709/P4/P5 route.
- Pearson Edexcel International Advanced Level Mathematics, 2018 specification Issue 3 (April 2019), WMA14 P4 §§4.1, 5.1, 6.1 and WST02 S2 §§2.2–2.5, 3.1, 3.2: https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf . P4 and S2 are different A2 units, not interchangeable with WMA11/12/13 or each other.
- Cambridge exam-year syllabus selection: https://help.cambridgeinternational.org/hc/en-gb/articles/37189948709522-General-FAQ-Which-syllabus-year-should-I-use . Recheck for learners sitting from 2028; do not silently mix curriculum versions.
- Official examiner conventions: Cambridge structured papers require clear working and appropriate context; Pearson unit papers have 75 marks/90 minutes. This batch contains **original four-option MCQ practice only**, not copyrighted questions, copied mark schemes or a genuine multi-mark board mock.

## Live inventory before this release
At audit: **2,145** private practice records, **1,851** active approved, **240** active pilot and **54** inactive. Baseline bank **240**; materialised task-item snapshots **10**. Approved exact-component availability for Cambridge 9709 P6, Pearson WMA14 P4 and Pearson WST02 S2 was **0 Daily / 0 Weekly / 0 Exam** per route. This is not the same as broad generic A Level inventory. Cross-board GCSE/IGCSE totals cannot establish board-specific eligibility or genuine question-family diversity.

Required unseen per route for a four-week new learner: Weekly **32**; Daily **112 Daily + 32 Weekly**; Exam **188 Exam (including 20 reserved mock-only) + 32 Weekly**. These are distinct question requirements. After one new approved item per mode, each route still needs **111 Daily, 31 Weekly, 187 Exam** further unseen approved items; student-specific exposures can increase those gaps.

## Original private draft batch
Batch `20261102-1300`; nine IDs, modes and syllabus objectives in [privacy-safe ledger](verified-original-batch-20261102-1300.json). Three independent mathematical families per unit: P6 linear combinations / confidence interval / Poisson hypothesis test; WMA14 rational-index binomial / implicit tangent / parametric volume; WST02 uniform variance / CDF quartiles / continuity-corrected normal approximation. Four distinct choices and one exact keyed answer each; substantial working and misconception/tutor-marking notes are private.

## Verification before release
- SymPy independent derivations **9/9**; separate JavaScript arithmetic **9/9**; SQL mathematical checkpoints **9/9**.
- Live SQL: nine draft rows, four choices **9/9**, distinct options **9/9**, exactly one matching key **9/9**, completeness **9/9**.
- Duplicate rejection: **2,395 prior records per item** (2,145 practice + 240 baseline + 10 assigned snapshots), **21,555 comparisons**; 0 exact and 0 near matches at token Jaccard ≥ 0.76; max prior 0.600. Within batch 36 pairs, max 0.333, 0 rejected. This is a heuristic and does not prove full semantic originality.
- Routing defect discovered **before** activation: live `private.grove_board_compatible` incorrectly allowed P6→generic 9709, WMA14→WMA12 and WST02→WMA11. The proposed migration adds exact component gates. Do not activate before it is deployed and tested.
- No full written multi-mark exam engine claimed; preserve human marking and evidence workflow.

## Release checklist
1. PR CI and independent regression pass; merge to main; verify deployment.
2. Apply exact-component migration to Supabase; test positive and negative route matches, including pre-existing boards.
3. Approve/activate only the nine vetted drafts; read back counts and selector eligibility.
4. Confirm unchanged student task/item/answer/evidence/mark counts; journal final status.

**Next priority:** develop genuinely varied component-specific questions for these zero-stock routes, and address historical baseline-to-practice family repetition; avoid mass parameter-swapped templates. Also keep IB 2029 cohort safeguards before activating held drafts.

# MathsGrove content and Signature QA — 2026-11-02 15:00 Kuwait
**Batch:** `20261102-1500`. **Initial state:** 9 original private drafts, 0 newly approved/activated. No student task, submission, evidence or examiner mark changes by this batch. Publication remains conditional on CI, exact-component migration and live selection tests.

## Official sources reviewed (2 November 2026)
- [Cambridge Further Mathematics 9231 2026–2027](https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf), P2 §§2.1, 2.2, 2.6: hyperbolic functions, matrix eigenvalues, first-order differential equations. P2 is **A Level only**. It must not be assigned to a generic 9231/P1-only preference.
- [Pearson Edexcel International A Level Mathematics specification, 2018 Issue 3](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf): WME02 Mechanics 2 §§1.2,1.3,3.1 and WST01 Statistics 1 §§4–6. M2 is IA2 and S1 is IAS; calculators are permitted. Do not mix WME01, WME02, WST01 and WST02.
- [IB Mathematics AA curriculum update (3 April 2026)](https://www.ibo.org/university-admission/latest-curriculum-updates/dp-mathematics-analysis-and-approaches-updates/): new course first assessed May 2029. Unresolved cohort routing prevents indiscriminate activation of older IB drafts.

Original four-option supplemental practice, not copied past papers, official examiner mark schemes or full written mocks.

## Live exact-component inventory at start
For each of **Pearson IAL WME02 Mechanics 2**, **Cambridge 9231 P2 Further Pure 2**, and **Pearson IAL WST01 Statistics 1**: 0 exact-component approved Daily / 0 Weekly / 0 Exam. Broad generic qualifications are excluded from these exact-component counts. Before this draft insertion the bank had 2,166 rows: 1,878 approved active, 240 pilot active and 48 inactive. Nine new inactive drafts bring it to 2,175 (57 inactive), before any concurrent releases.

**Four-week unseen thresholds per route:** Weekly 32 unique; Daily 112 Daily + 32 Weekly; Exam 188 Exam (including reserved 20-item timed MCQ practice mock) + 32 Weekly. A question eligible for multiple modes is still only one distinct item. After a verified 1/1/1 release, the per-route deficits remain at least 111 Daily, 31 Weekly, 187 Exam; inherited Weekly requirements remain separate. Student-specific seen history can make deficits worse.

## Original question batch and checks
Private identifiers, exact unit, mode, objective and timer are in [the privacy-safe ledger](verified-original-batch-20261102-1500.json). Three independent mathematical families per route:
- WME02: integrate acceleration, projectile at a vertical wall, work-energy up an incline with resistance.
- 9231 P2: hyperbolic inverse via exponentials, matrix-cube trace via eigenvalues, integrating factor initial-value problem.
- WST01: discrete transformed variance, least-squares regression, conditional normal upper-tail probability.

Each item includes four distinct distractors with one keyed answer, a worked derivation, misconception feedback, marking guidance, time estimate, exact board/unit and syllabus source. Symbolic **SymPy 9/9** and separate JavaScript arithmetic **9/9** checks. Live SQL: four options **9/9**, unique options **9/9**, exactly one matching key **9/9**, required fields **9/9**. Original candidate insert attempts rejected by DB NOT NULL difficulty constraint and preflight explanation-length validation; neither wrote any rows. All nine final drafts passed.

Duplicate screening against **2,166** existing practice records and **270** baseline/assigned snapshots per candidate: **21,924** prior comparisons. Max prior token Jaccard **0.500**; **0** at or above 0.76. Within-batch **36** pairs, max **0.269**. This is a heuristic, not proof of absence of all semantic similarity. Previously reported baseline-to-practice repetitions remain unresolved.

## Release gates
1. Repository PR and independent CI must pass, including Signature and learner-evidence regressions.
2. Apply new exact 9231/P2 route migration, preserving existing WME02 and WST01 gates; verify positive and negative board cases.
3. Approve/activate only the nine individually verified draft IDs; read back exact counts and route selection.
4. Confirm student records and human marking unchanged; record final status here.
5. Signature Advanced WME02 structured assessment development remains in the **private** editorial library, awaiting actual authenticated human examiner moderation. No student-specific report release or forged sign-off.

**Current status:** Draft awaiting CI and routing. Final publication status will be appended after live verification.

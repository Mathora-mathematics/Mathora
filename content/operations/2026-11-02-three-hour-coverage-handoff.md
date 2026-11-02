# MathsGrove — 3-hour development and independent audit handoff

**Date:** 2 November 2026  
**Timezone:** Asia/Kuwait (UTC+03)  
**Private live backend:** Supabase project `nwakgkxytovprrrwyahs`  
**Website:** https://mathora-mathematics.github.io/Mathora/  
**Student:** https://mathora-mathematics.github.io/Mathora/portal.html  
**Examiner/admin:** https://mathora-mathematics.github.io/Mathora/studio.html

## Scheduled operational plan

| Automation | Cadence and target start (Kuwait) | Objective |
|---|---|---|
| MathsGrove · Author & Publish | Every 3 hours, beginning 2 Nov 13:00 | Target two hours of syllabus research, original question authoring, mathematical validation and release |
| MathsGrove · Independent QA | Every 3 hours, offset +2 hours, beginning 2 Nov 15:00 | Target one hour of independent mathematics, assignment, storage/security and deployment audit |
| MathsGrove · Evening Email | Every evening around 20:00 | Send Gmail summary with verified updates and direct website, student and admin links |

*Operational limitation:* The schedule guarantees start attempts, **not two/one hours of continuous execution**. Each run must disclose actual checks, elapsed effort only if measured, batch IDs, errors and remaining content deficits.

Existing overlapping 2-hour research and old 7-hour / daily health tasks were paused to avoid duplicated automation work. Do not use ChatGPT thread creation as an implementation prerequisite; keep dated reports in this project/repository.

## Live content shortfalls and targets

Minimum for a **new student with no prior assigned questions** in a four-week block:
- Grove Weekly: four 8-item weekly sets = **32 unseen approved weekly-scope questions**.
- Grove Daily: 28 days × 4 items = **112 unseen Daily-scope items**, plus **32 unseen Weekly items**.
- Grove Exam: 28 days × 6 daily reasoning items + 20-item, 90-minute monthly MCQ mock = **188 unseen Exam-scope items**, plus **32 unseen Weekly items**.

When a route carries approved generic bank entries, inspect its actual selector and per-student unseen filters before declaring it eligible. Do not treat drafts or pilot records as published. Content marked "cross-board" must be genuinely aligned with both boards, and must not bypass required paper or unit restrictions.

Live audit before this cycle identified seriously insufficient advanced-bank question counts. Examples for Exam tier: Cambridge 9709 AS = 4, Cambridge 9709 A2 = 2, Cambridge 9231 Further = 3, IB AA HL = 1, IB AI SL = 1, TMUA = 5. Each needs substantial future original material; the website is not yet complete across all study routes.

## First advanced original batch implemented now

**18 independent, original, mathematically checked MCQs published to private Supabase bank**, on 2 Nov 2026, each with a full mathematical rationale, topic, study level, board, tier, expected seconds, and four distinct choices with exactly one keyed correct option. The questions do not reproduce third-party exam papers.

| Route | Daily | Weekly | Exam |
| --- | ---: | ---: | ---: |
| Cambridge 9709 AS (Pure syllabus) | 1 | 1 | 1 |
| Cambridge 9709 A2 (Pure syllabus) | 1 | 1 | 1 |
| Cambridge 9231 Further Maths | 1 | 1 | 1 |
| IB Mathematics AA SL | 1 | 1 | 1 |
| IB Mathematics AI HL | 1 | 1 | 1 |
| TMUA (original reasoning practice) | 1 | 1 | 1 |

Batch provenance prefix: `mg-original-20261102-gapfill-` (18 unique items). Private answer keys and full explanations are **not** published to this GitHub repo or the public website. Live SQL verified all 18 have `active=true`, `review_state='approved'`, four options and exactly one keyed match, and the currently recorded student task history has zero repeated bank IDs. A code-level independent numerical check and manual derivation was also performed for each of the 18 items. This does not constitute full live browser testing of these newly added advanced questions.

Topics covered: polynomial differentiation, circle tangents, circular segment area, logarithmic differentiation and equations, complex modulus, Viète's theorem, finite sums, matrix determinant area scaling, quadratic extrema, definite integrals and stationary points, Poisson events, Markov chains, normal transformations, divisibility, power sums and modular reasoning.

## Examination authenticity guardrails

- Cambridge 9709 uses distinct Pure / Mechanics / Probability & Statistics component syllabuses; do not freely combine these when board/unit is prescribed.
- Cambridge 9231 requires genuine Further Maths demand and prior 9709 knowledge.
- Current IB AA and AI courses split by SL and HL. Distinguish current assessment (up to November 2028) from the new 2029-first-assessment curriculum.
- UAT-UK TMUA consists of two 20-MCQ, 75-minute papers with NO calculator. Current MathsGrove monthly **20-item, 90-minute MCQ practice mock is not a complete official TMUA-style examination**; label honestly and prioritise a separate two-paper TMUA simulator before claiming full format fidelity.
- Current practice-bank interface uses four response choices, 1-mark entries and human-reviewed working; it is **not yet a full structured 80/100-mark examiner-style paper**. An authentic multi-mark written paper engine needs distinct paper/mark-scheme authoring.

## Official research references
- Cambridge 9709 2026–2027: https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf
- Cambridge 9231 2026–2027: https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf
- IB DP mathematics and curriculum dates: https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics
- TMUA official test format: https://esat-tmua.ac.uk/about-the-tests/tmua-test/

## Required QA and reporting for subsequent cycles
1. Inspect candidate underfilled board + academic level + paper unit, real eligibility, past student seen-question data and syllabus scope before authoring.
2. Create original multi-step mathematical reasoning with TeX notation, correct restrictions and units, substantive examiner rationale, credible distractors; use computational checks and an independent derivation.
3. Reject exact, normalised or structural near duplicates. Prevent repeated questions within and across assignments. Do not over-generate low-difficulty parametric variants masquerading as different exam questions.
4. Publish only approved items with verified correct answer choice, preserve private keys and the student's existing submissions.
5. Read back exact live inserted counts and routes; rerun CI and check Pages deployment success if website/repo code changed. Open actionable issues and fix regressions safely.
6. QA the student experience, tier inheritance, timers, baseline, marked feedback, secured photos/whiteboard, parent and tutor role scopes. Do not impersonate a learner.
7. Send one factual daily email by connected Gmail, including website link, release counts, critical failures, and the next priority. If Gmail access fails, log the failure openly rather than claiming delivery.

**Current unresolved priorities:** Further Maths (both Cambridge and Pearson routes), Pearson IAL individual papers, Cambridge 9709 Mechanics/Statistics routes, IB AA/AI all SL/HL, authentic TMUA Paper 1/2 timing/choices, substantial mathematically varied question volume, full written multi-mark mock exam capability.

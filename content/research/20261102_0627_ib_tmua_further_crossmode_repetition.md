# MathsGrove research rotation 18 — IB AA/AI 2029, TMUA 2026–27, Cambridge/Pearson Further Maths and cross-mode repetition
**Research date:** 2026-11-02, Asia/Kuwait. **Status:** editorial research and 30 original blueprint seeds only; NO student content or timed mocks approved/published by this research action. **Method:** current official syllabus/subject-brief review; previous GitHub research v17 and 20261102_0025 IB/TMUA/Further review; read-only private Supabase question/task/baseline audit; symbolic/arithmetic checks on selected new seeds. No protected exam-question text copied. Public seeds/solutions must never be reused verbatim as confidential student assessments.

## 1. Source ledger — official and publicly accessible
- [S1] IB mathematics curriculum hub (updated **17 September 2026**): https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics — AA/AI SL/HL; current course last assessed November 2028, first revised assessment May 2029.
- [S2] IB AA first-assessment-2029 subject brief (©2026), pp.2–3: https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/sb_maths_analysis_en.pdf — B4 trig functions, E6 Maclaurin HL; AA Paper 1 no technology, Paper 2 technology, HL Paper 3 60min/50 marks; new IA rubric A/B/C/D 4+6+4+6.
- [S3] IB AI first-assessment-2029 subject brief (©2026), pp.2–3: https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/sb_maths_application_en.pdf — B1 approximation/error, C5 graph theory HL; all papers require technology; IA rubric 4+6+4+6.
- [S4] IB AA curriculum changes (updated **3 April 2026**): https://www.ibo.org/university-admission/latest-curriculum-updates/dp-mathematics-analysis-and-approaches-updates/ — SL financial applications and bivariate data removed; HL also proof by counterexample and Euler's method removed; 2029 SL P1/P2 75 marks, HL P1/P2 100, HL P3 50.
- [S5] IB AI curriculum changes (updated **3 April 2026**): https://www.ibo.org/university-admission/latest-curriculum-updates/dp-mathematics-applications-and-interpretation-updates/ — SL logarithms and trapezoidal area removed; HL Poisson, complex, vector product and listed tests removed; new paper mark totals.
- [S6] UAT-UK TMUA official 2026/27 test overview: https://esat-tmua.ac.uk/about-the-tests/tmua-test/ — 2×75min, 20 MCQ each, no calculator, no negative marking, score scaled not percentage.
- [S7] UAT-UK TMUA official detailed content specification: https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165619/TMUA_Content_Specification.pdf — MM4.1 ambiguous sine-rule case; Paper 2 Arg1–4, Prf1–5, Err1–2; no formal truth tables.
- [S8] UAT-UK official preparation page: https://esat-tmua.ac.uk/prepare/ — specimen/practice test links and Pearson test player; current scoring reference median 4.5 and 90th percentile 7.0. The specimen opens in a separate Pearson player not inspectable in this run, so authentic MCQ option count and UI are NOT verified.
- [S9] Cambridge Further Mathematics 9231 **2028–2030 Version 1**, September 2025: https://www.cambridgeinternational.org/Images/744603-2028-2030-syllabus.pdf — P2 §2.1 hyperbolic functions, P3 §3.3 circular motion, P4 §4.4 sign/Wilcoxon tests; P2 A Level only; P3/P4 AS options, full A requires all four papers; MF19 and calculator.
- [S10] Cambridge Further Mathematics 9231 **2026–2027** current cohort: https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf — do not silently apply 2028–30 version to earlier cohorts.
- [S11] Pearson Edexcel UK Further Mathematics **9FM0 Issue 4 June 2023**: https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-further-mathematics-specification.pdf — Paper 4B Further Statistics 2 §§2.1–2.4 PDF/CDF/continuous moments; 90min/75 marks, valid optional route required.
- [S12] Pearson UK official Further Mathematics option entries: https://qualifications.pearson.com/en/support/support-for-you/exam-officers-administrators/entries-information-manual.html?CourseCode=International&QualFamily=A+Level+and+AS+Level&subject=Further+Mathematics — distinguish 3B Further Statistics 1 from 4B Further Statistics 2, and 3D Decision 1 from 4D Decision 2; check the current domestic route entry codes separately before publication.
- [S13] Pearson public 9FM0/4D 2020 paper (assessment format **only**, no question copying): https://qualifications.pearson.com/content/dam/pdf/A-Level/Mathematics/2017/Exam-materials/9FM0_4D_que_20201024.pdf — authentic calculator/formula/answer-book presentation example.

**Qualification comparison:** IB 2029 AA P1 prohibits technology while IB AI requires it on every paper; IB 2029 HL Paper 3 is 60min/50 marks rather than the old 75min/55. Cambridge 9231 P4 is Further Probability & Statistics with sign tests; Pearson 9FM0 4B is Further Statistics 2 with continuous PDF/CDF and regression, NOT the same paper. Cambridge 9231 AS P1+P3 or P1+P4; full A P1+P2+P3+P4. Pearson 9FM0 two compulsory Core Pure plus a permitted optional pair. TMUA is two no-calculator 20-MCQ papers and a scaled score, not an IB-style extended-response assessment.

**IB 2029 IA reporting improvement:** both AA and AI revised briefs explicitly describe four exploration criteria: A problem specification (4), B abstraction (6), C computation (4), D interpretation (6), total 20. A future MathsGrove IA-feedback view can use this **for 2029 cohorts only**, with detailed descriptor/guide confirmation before claiming official grading. Do not apply to November 2028 or earlier.

## 2. Fresh private-bank and student-assignment audit (read-only)
Supabase project `nwakgkxytovprrrwyahs`, private `grove_practice_bank`, `grove_tasks`, `grove_task_items`, `baseline_bank`, `baseline_sessions`, `baseline_items`. **No student IDs, prompts or private answers are published here.**
- **441** private practice rows: **147 approved**, **387 active** (includes **240 pilot** and 147 approved), **54 inactive drafts**. **82 exact-normalised duplicate groups**, **zero containing approved**. Prior rotation 17 had 432 total/138 approved; net +9 approved.
- **28 tasks**, **4 bank-backed task items**, **4 distinct assigned practice IDs**, no repeated assigned practice ID or exact-normalised practice stem within those four.
- **240 baseline-bank rows** comprising **160 distinct normalised stems**; all 160 distinct baseline stems also occur in the private practice bank, but **zero overlap with approved practice stems**. Cross-bank raw join has 400 matching row-pairs, inflated by duplicate pilot/baseline copies; **do not report 400 as distinct duplicates**.
- **1 submitted baseline session** containing **20 distinct baseline item IDs**. **Critical newly verified cross-mode repeat:** **4 exact-normalised stems** in a **completed Daily task** match **4 stems in the submitted baseline of the SAME learner**. This is a real learner-level baseline→daily repetition, despite the four practice item IDs being unique. No student-identifying details disclosed.
- Approved-route totals: IB AA 9, IB AI 9, TMUA 12, Further Mathematics 12 (Cambridge 9231 nine, Pearson 9FM0 Core Pure three). No approved 9FM0 4B or 9231 P2/P3/P4 specifically tagged in the inspected approved set. Board/version/component/year are not first-class columns of the practice bank.
- Prior editorial review compared: `content/research/20261102_0025_ib_tmua_further_assessment_qa.md` and `20261101_1630_ib_tmua_further_objective_routing.md`; the latest v17 handoff and approved topic/skill summaries. New seeds intentionally avoid previous AA combinatorics/complex-root families, AI Bayes/MST, TMUA geometric-series/zero-product examples, Cambridge spring/plane/PDF examples, and Pearson FS2 regression data. A keyword/fingerprint SQL spot-check found no exact matches for distinctive new numeric checkpoints. **No exhaustive semantic similarity scan has been completed.**
- **Immediate P0:** unify lifetime learner exposure across baseline items, Daily/Weekly/Exam task items, any legacy `paper_questions`, and variants with same mathematical template. Exclude used baseline stems when generating Daily/Weekly/Exam for the same student; add a regression test reproducing the observed 4-stem collision. Do not rewrite historic submitted work. For review-only repeated exposure, mark as intentional and do not count as independent evidence of mastery.

## 3. Original tier question blueprints — 10 lanes × 3 tiers = 30
**Every seed below is new public editorial material, not a private/approved exam item.** Daily: 2–5 min diagnostic (typically 1–3 marks). Weekly: 6–10 min linked multi-step reasoning (typically 4–6 marks). Exam: 8–15 min multi-mark reasoning practice (typically 7–10 marks), **NOT a complete timed mock**. Exam adaptations need mark-by-mark rubrics, one correct MCQ key if applicable, KaTeX, solution verification and private variant authoring. All 2029 IB microobjectives below are **subject-brief-level** until the detailed authorised 2029 guide is checked.

### L01 — IB AA SL, 2029, B4 trigonometric functions [S2]
**Learning objective:** identify amplitude/period/phase, solve modelled trig thresholds; AA P1 no technology, P2 technology. **Misconceptions:** period of sin(kx) is 2π/k, interpreting phase as vertical shift, endpoint double-count.
- **D / AA-SL-B4-D:** For `g(x)=2 sin(3x)`, find the period. **Checkpoint:** `2π/3`.
- **W / AA-SL-B4-W:** `h(x)=1+2sin(2x)`, `0≤x≤2π\). Find max/min values and all maximum locations. **Checkpoint:** max 3, min −1, maxima `x=π/4,5π/4`; derivative or unit-circle reasoning.
- **E / AA-SL-B4-E:** A tide-height model is `h(t)=4+1.5cos(πt/6)` metres, `0≤t≤24` hours. Find maximum/minimum, times of minima, and total time `h(t)≥4.75`. **Checkpoint:** 5.5m/2.5m; minima t=6,18; intervals [0,2],[10,14],[22,24], total **8h**. **Rubric:** model range, threshold, periodic intervals, units.

### L02 — IB AA HL, 2029, E6 Maclaurin series [S2]
**Learning objective:** obtain low-order Taylor/Maclaurin expansions and justify approximation/limits; AA HL P1 no technology, P2/P3 technology. **Misconceptions:** omit factorial, truncate products too early, confuse equality with approximation. **Detailed 2029 E6 depth pending guide.**
- **D / AA-HL-E6-D:** Use the quadratic Maclaurin polynomial for `e^x` to approximate `e^{0.1}`. **Checkpoint:** `1+0.1+0.1²/2=1.105`.
- **W / AA-HL-E6-W:** Derive `e^{2x}` through `x³\); estimate `e^{0.2}` using `x=0.1`. **Checkpoint:** `1+2x+2x²+(4/3)x³`; estimate `1.221333...`.
- **E / AA-HL-E6-E:** Expand `sin x/(1+x)` through `x³\) and hence evaluate `lim_{x→0}[(sin x/(1+x))-x+x²]/x³`. **Checkpoint:** `x-x²+(5/6)x³+O(x⁴)`; limit **5/6**. **Rubric:** both expansions, multiply, collect terms, limit.

### L03 — IB AI SL, 2029, B1 approximation and error [S3]
**Learning objective:** rounding intervals and propagated upper/lower bounds in contextual measurement; AI technology required. **Misconceptions:** treating rounded figures as exact, dividing lower by lower rather than upper, overconfident classification.
- **D / AI-SL-B1-D:** A length rounds to 4.7cm to nearest 0.1cm. Give the possible interval. **Checkpoint:** `4.65≤L<4.75` cm.
- **W / AI-SL-B1-W:** Rectangle sides round to 8.2cm and 5.6cm to nearest 0.1cm. Find lower/upper area bounds. **Checkpoint:** `8.15×5.55=45.2325` cm²; `8.25×5.65=46.6125` cm² (upper strict).
- **E / AI-SL-B1-E:** Mass 18.4g and volume 7.2cm³ each rounded to nearest 0.1. Bound density and decide if the true density must exceed 2.55g/cm³. **Checkpoint:** `18.35/7.25≈2.5310`, `18.45/7.15≈2.5804`; cannot decide. **Rubric:** correct error intervals, monotonic quotient, interpretation and units.

### L04 — IB AI HL, 2029, C5 graph theory [S3]
**Learning objective:** degree-sum parity and Euler trails in finite undirected graphs. **Important:** graph theory C5 is confirmed in the subject brief, but *specific Euler-trail algorithm-level inclusion is NOT verified* against the 2029 full guide; editorial hold. **Misconceptions:** double-count edges, assume connected graph always has an Euler circuit, confuse Euler path with Hamilton path.
- **D / AI-HL-C5-D:** Connected simple graph degrees are 1,2,2,3. How many edges? **Checkpoint:** `(1+2+2+3)/2=4`.
- **W / AI-HL-C5-W:** Graph edges AB,BC,CD,DA,AC,BD (undirected). Determine whether an Euler trail exists. Then delete AC and reconsider. **Checkpoint:** originally four odd-degree vertices → no Euler trail; after deleting AC, B and D are odd, A and C even → Euler trail B–A–D–C–B–D.
- **E / AI-HL-C5-E:** Graph edges AB,BC,CD,DE,EA,AC,CE. Find an Euler trail, its endpoints, then explain the effect of adding BD. **Checkpoint:** A–B–C–D–E–A–C–E uses all seven edges, odd vertices A/E; adding BD creates four odd vertices A/B/D/E, so no Euler trail. **Rubric:** degree audit, constructive trail, proof of impossibility.

### L05 — TMUA Paper 1, 2026–27, MM4.1 ambiguous sine-rule case [S6,S7]
**Learning objective:** identify both possible triangle solutions and filter angle feasibility; 20 MCQ/75min, no calculator. **Misconceptions:** arcsin only principal value, assuming SSA unique, accepting invalid angle sum.
- **D / TMUA-P1-MM4-D:** In a triangle A=30°, opposite side a=5 and side b=8. How many triangles are possible? **Checkpoint:** `sin B=4/5`; both B and 180°−B leave positive C, so **two**.
- **W / TMUA-P1-MM4-W:** Given A=30°, a=6, b=10, find both possible lengths c. **Checkpoint:** cosine rule `c²−10√3c+64=0`; `c=5√3±√11`, both positive.
- **E / TMUA-P1-MM4-E:** Given A=30°, a=7, b=12, determine the **product** of the two possible lengths c and justify why both are valid. **Checkpoint:** `c²−12√3c+95=0`; `c=6√3±√13`, product **95**. **MCQ adaptation:** original one-key options only after authentic specimen option count is verified; distractors for discriminant/product errors.

### L06 — TMUA Paper 2, 2026–27, Arg1/Arg3/Arg4/Prf2 [S6,S7]
**Learning objective:** negate quantified statements, infer contrapositives and distinguish order of quantifiers; no symbolic truth tables. **Misconceptions:** “for every” negated to “for every”, swapping quantifiers, assuming converse.
- **D / TMUA-P2-ARG-D:** Negate “For every real x, x²≥0.” **Checkpoint:** “There exists a real x such that x²<0.” Negation is false, but logically correct.
- **W / TMUA-P2-ARG-W:** Given “multiple of 4 ⇒ even” and “even ⇒ square even”, deduce what `n²` odd implies about n, and explain the logical direction. **Checkpoint:** `n²` odd ⇒ n odd ⇒ n not multiple of 4, via contrapositives.
- **E / TMUA-P2-ARG-E:** Compare statements (i) “For every real x, there exists a real y with y²=x” and (ii) “There exists a real y such that for every real x, y²=x.” Determine truth values and write the precise negation of (i). **Checkpoint:** both false; (i) fails x=−1; negation “There exists real x such that for every real y, y²≠x.” **Rubric:** quantifier order, counterexample, correct negation.

### L07 — Cambridge Further 9231 Paper 2, 2028–30, §2.1 hyperbolic functions [S9]
**Learning objective:** derive identities and inverse-log forms; **Paper 2 is A Level only** and assumes P1 knowledge; calculator/MF19. **Misconceptions:** confuse sinh with sin, accept negative `e^x`, omit `|tanh x|<1`.
- **D / C9231-P2-HYP-D:** Given `sinh t=3/4` with t>0, find `cosh t`. **Checkpoint:** **5/4** by `cosh²t−sinh²t=1`.
- **W / C9231-P2-HYP-W:** Solve `sinh x=3/4` exactly by setting u=e^x. **Checkpoint:** `2u²−3u−2=0`; only u=2>0, `x=ln 2`.
- **E / C9231-P2-HYP-E:** Derive `tanh(2x)=2tanh x/(1+tanh²x)` and solve `tanh(2x)=12/13`, x>0. **Checkpoint:** t=tanh x solves `6t²−13t+6=0`; reject t=3/2; t=2/3; **x=(1/2)ln5**. **Rubric:** identity, quadratic, domain rejection, logarithm.

### L08 — Cambridge Further 9231 Paper 3, 2028–30, §3.3 circular motion [S9]
**Learning objective:** centripetal acceleration/force and vertical-circle energy; AS P1+P3 or full A, calculator/MF19, specify g=10. **Misconceptions:** centrifugal “outward” force in inertial frame, tension direction at top, omit vertical height difference 2r.
- **D / C9231-P3-CIRC-D:** A 2kg particle moves at 3m/s in a horizontal circle radius 1.5m. Find net inward force. **Checkpoint:** `mv²/r=12N`.
- **W / C9231-P3-CIRC-W:** A car of mass 800kg rounds a level bend radius 50m; maximum available lateral friction 4000N. Find maximum speed. **Checkpoint:** `v=√(Fr/m)=√250=5√10≈15.81m/s`.
- **E / C9231-P3-CIRC-E:** A 0.5kg bead on a taut string follows a vertical circle of radius 2m. Speed at the top is 5m/s; g=10. Find top tension, bottom speed and bottom tension; check the string can remain taut. **Checkpoint:** top `T+5=0.5×25/2` ⇒ **1.25N**; `v_bottom²=25+4gr=105` ⇒ `√105m/s`; bottom `T−5=0.5×105/2` ⇒ **31.25N**; top speed exceeds `√(gr)=√20`. **Rubric:** radial F=ma, energy, contact condition.

### L09 — Cambridge Further 9231 Paper 4, 2028–30, §4.4 non-parametric sign test [S9]
**Learning objective:** choose a paired sign test and calculate exact binomial tail p-values; AS P1+P4 or full A, calculator/MF19. **Misconceptions:** two-sided vs one-sided, zero differences counted as trials, p-value interpreted as P(H0 true).
- **D / C9231-P4-SIGN-D:** Under H0 of no median change, 7 of 8 nonzero paired differences are positive. Find one-sided p-value for improvement. **Checkpoint:** `P(Bin(8,1/2)≥7)=9/256≈0.03516`.
- **W / C9231-P4-SIGN-W:** 9 of 10 nonzero paired differences are positive. Find two-sided exact sign-test p-value and decide at 5%. **Checkpoint:** `2[C(10,9)+C(10,10)]/2^{10}=11/512≈0.02148`; reject H0 at 5%.
- **E / C9231-P4-SIGN-E:** 12 nonzero paired changes contain 10 positive and 2 negative. Test for a change in median at 5% and 1%, state assumptions/limitations. **Checkpoint:** `p=2[C(12,10)+C(12,11)+C(12,12)]/2^{12}=79/2048≈0.03857`; reject at 5%, not at 1%. **Rubric:** hypotheses, tail direction, exact probability, contextual conclusion, independent pairs and no zero differences.

### L10 — Pearson Edexcel UK Further 9FM0/4B FS2, §§2.1–2.4 continuous PDF/CDF [S11]
**Learning objective:** differentiate CDF, normalise PDF, transform a nonnegative random variable and find expectation; only valid **4B** optional route, calculator/formula allowed. **Misconceptions:** CDF vs density, support bounds after transformation, omit Jacobian, wrong derivative.
- **D / P9FM0-4B-CDF-D:** For `F(x)=x²/9` on 0≤x≤3 (0 below, 1 above), find density on (0,3). **Checkpoint:** `f(x)=2x/9`.
- **W / P9FM0-4B-CDF-W:** A density is `f(x)=kx(2−x)` for 0≤x≤2, zero elsewhere. Find k and median. **Checkpoint:** `∫₀² x(2−x)dx=4/3`, so `k=3/4`; `F(x)=3x²/4−x³/4`, median **1**.
- **E / P9FM0-4B-CDF-E:** Let `f_X(x)=4x³/81` for 0≤x≤3. Define `Y=X²`. Derive `F_Y` and `f_Y` with supports; find `E(Y)` and `P(Y>4)`. **Checkpoint:** `F_Y(y)=y²/81` for 0≤y≤9, `f_Y(y)=2y/81`; `E(Y)=6`; `P(Y>4)=65/81`. **Rubric:** support, CDF transform, derivative, moments, probability.

## 4. Proposed full-length Grove Exam mock ASSEMBLY plans (not approved)
| Route | Official target | Assembly and release gates |
|---|---|---|
| IB AA SL 2029 | P1 90min, 75 marks | No technology, 2029 guide A–E distribution, full method marks and independent solution. |
| IB AA HL 2029 | P3 60min, 50 marks | Technology, **two** extended-response investigations, 2029 guide/IA distinctions. |
| IB AI SL 2029 | P2 90min, 75 marks | Technology, modelling and interpretation; no removed SL log/trapezoidal objectives. |
| IB AI HL 2029 | P3 60min, 50 marks | Technology, two investigations, no 2029 Poisson; confirm C5 microcontent. |
| TMUA P1 2026–27 | 75min, 20 original MCQ | No calculator, no negative marking; specimen player option count/UI and difficulty calibration first. |
| TMUA P2 2026–27 | 75min, 20 original MCQ | Argument/logic/proof distribution, non-symbolic options, specimen UI check. |
| Cambridge 9231 P2 2028–30 | 120min, 75 marks | A Level only; P2 hyperbolic/matrices/calculus/complex/ODE coverage, MF19. |
| Cambridge 9231 P3 2028–30 | 90min, 50 marks | AS/full A valid route; Mechanics topic spread, g stated, energy and diagrams. |
| Cambridge 9231 P4 2028–30 | 90min, 50 marks | AS/full A valid route; 9709 P5/P6 prerequisites, PDF/t/nonparametric/PGF coverage. |
| Pearson 9FM0 4B | 90min, 75 marks | Valid 4B optional entry, FS2 regression/CDF/correlation/hypothesis content, full mark scheme. |

**Approval gate for EVERY mock:** original private questions (not these public seeds), verified current exam-year specification and optional route, complete paper of exact duration/marks, calculator/formula settings, original diagrams, mathematical independent solving, semantic/template similarity check against practice+baseline+all student exposures, examiner sign-off, per-part M/A/B marking and follow-through, timed lockout and uploads/whiteboard/admin evidence tested. **Zero mocks approved by this research action.**

## 5. Implementation handoff — ranked
1. **P0 learner-exposure regression:** the **four confirmed repeated baseline→completed Daily stems for one learner** must be prevented for future tasks. Build cross-mode exclusion by learner ID plus canonical question family and normalised stem; baseline is NOT exempt. Historical submitted records stay unchanged. Add a repeat regression and a report distinguishing intentional revision from independent diagnostic evidence.
2. **P0 question metadata:** first-class `qualification`, `board`, `component`, `exam_year`, `syllabus_version`, `valid_route`, `calculator_policy`, `formula_policy`, `question_family_id`; do not infer component from academic_level alone. IB 2029 must be separate from current through Nov 2028.
3. **P0 editorial QA:** use 30 seeds to author distinct PRIVATE items, validate maths independently, scan all 441 practice rows, all 240 baseline rows, all 20 submitted baseline exposures, all 4 assigned task items, plus prior GitHub drafts. Never publish these public stems or answer keys as confidential exams.
4. **P1 2029 IB IA:** use four 4/6/4/6 inquiry categories only for 2029 cohorts after detailed guide validation. Do not present internal automated predictions as official IB grades.
5. **P1 mocks:** implement 10 full-length assembly plans only after genuine multi-mark rubrics, complete item bank, human approval and timed UI tests. Do not label a 10-minute practice task as a mock.
6. **P1 TMUA:** official Pearson specimen is linked but interactive player not inspectable here. Verify answer-option count and navigation before authenticity claims; no negative marking and no direct raw-%→1–9 score conversion.
7. **P2 rotation:** next deep dive GCSE/IGCSE (AQA 8300, Cambridge 0580, Pearson 1MA1/4MA1/4WM), especially cross-mode baseline duplication and tier/unit/formula restrictions; then Cambridge 9709/Pearson 9MA0/IAL.

**Blockers:** 82 draft/pilot exact-normalised duplicate groups; **newly confirmed four baseline→Daily same-learner repeated stems**; no exhaustive semantic/parameter-family dedup; no first-class exam-year/component routing; detailed 2029 IB guides not publicly verified; Pearson TMUA interactive specimen option count not accessible; no approved full-length mocks. **This research cycle changed only GitHub research/handoff files, not private student records or live assessments.**

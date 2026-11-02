# MathsGrove research rotation 21 — scheduler shortages, unseen capacity and six original component-specific question families
**Research date:** 2026-11-02 (Asia/Kuwait). **Status:** public EDITORIAL research only. **Publication:** zero student questions, zero approved timed mocks, zero changes to student assignments. This brief is a handoff to the separate vetted-content implementation routine, not a claim of human examiner approval.

## Executive decision
The live scheduler now has a much larger GCSE/IGCSE cross-board pool, but the named AS/A Level, Further, IB and TMUA component routes remain acutely short of the required **unseen, approved, board-valid** items. Prioritise these shortages over indiscriminate GCSE quantity expansion. A numerical count of parameter-swapped questions is not sufficient evidence of authentic breadth or fresh assessment.

**Target per active academic route + board + component + examination year:** Grove Daily 112 distinct unseen short questions (4×28); Grove Weekly 32 distinct unseen reasoning questions (8×4); Grove Exam 188 distinct unseen questions (168 daily plus 20 reserved for one 90-minute Grove practice MCQ mock). **The Grove 20-question/90-minute mock is a proprietary practice format, NOT an official full-format board paper.** Mock-only 20 must not be recycled from Exam daily, Weekly, Daily or baseline.

## 1. Official source/version ledger (verified 2026-11-02)
- [S1] Cambridge 9709, exams **2026–2027 Version 4** (published December 2025), syllabus §§6.1, 6.5: https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf . 2028–2030 **Version 1**: https://www.cambridgeinternational.org/Images/744634-2028-2030-syllabus.pdf . P6 includes Poisson models, single-observation binomial/Poisson hypothesis tests, contextual interpretation and Type I/II. P6 requires the P5 foundation; do not route it to a P1-only AS learner.
- [S2] Pearson International Advanced Level Mathematics/Further Mathematics/Pure Mathematics, **2018 specification Issue 3 (April 2019)**, S2 §§2.1–2.5 (continuous PDF/CDF/mean/median) and P4 §§3,5,6 (parametric curves, derivatives and areas): https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf . S2 WST02/01 and P4 WMA14/01 are each 90 minutes, 75 marks, calculators permitted. S2 assumes S1 and polynomial calculus; P4 assumes P1–P3.
- [S3] Cambridge 9231, exams **2026–2027 Version 3** (July 2025), and **2028–2030 Version 1**, Paper 1 §1.4 matrices and invariant lines: https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf and https://www.cambridgeinternational.org/Images/744603-2028-2030-syllabus.pdf . P1 requires prior 9709 P1/P3. Cambridge 9231 P4 is Further Probability & Statistics, NOT Pearson 9FM0 4B Further Statistics 2.
- [S4] IB Mathematics 2029 AA subject brief: https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/sb_maths_analysis_en.pdf . AI subject brief: https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/sb_maths_application_en.pdf . Official hub, last updated 17 September 2026: https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/ . First revised assessment May 2029; current course final assessment November 2028. AI HL B5 explicitly lists matrices; the precise permitted matrix-model applications require the full authorised guide before automatic release. AI requires technology on all 2029 papers; AA Paper 1 prohibits it.
- [S5] UAT-UK TMUA 2026/27 test page: https://esat-tmua.ac.uk/about-the-tests/tmua-test/ ; official content specification: https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165619/TMUA_Content_Specification.pdf . Paper 1 and Paper 2 each 20 MCQ/75 minutes, no calculator, no negative marking. Paper 2 evaluates logical implications, arguments, proof and errors. Do NOT call the 90-minute Grove mock an official TMUA paper or convert raw correct answers directly to a TMUA scaled score.
- [S6] Pearson UK 9MA0 Issue 4: https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf ; Pearson 9FM0 Issue 4: https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-further-mathematics-specification.pdf . UK 9MA0 is synoptic, unlike unitised IAL; UK Further requires valid optional component combinations.
- [S7] GCSE/IGCSE routing references for the next breadth rotation: AQA 8300 https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/scheme-of-assessment ; Cambridge 0580 2028–30 Version 2 https://www.cambridgeinternational.org/Images/745681-2028-2030-syllabus.pdf ; Pearson UK 1MA1 https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf ; Pearson linear 4MA1 https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf ; Pearson modular 4WM https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2024/specification-and-sample-assessments/int-gcse-mathematics-spec-a-modular.pdf .
- [S8] Public examiner-format references, for presentation and assessment conventions ONLY: Cambridge qualification public past-paper/specimen index https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/past-papers/ ; Pearson UK 9MA0 publicly accessible mark scheme https://qualifications.pearson.com/content/dam/pdf/A-Level/Mathematics/2017/Exam-materials/9MA0_01_msc_20201217.pdf ; UAT preparation https://esat-tmua.ac.uk/prepare/ . Do not reproduce any protected stem, mark scheme, diagram or distractor.

**Examiner-design consequences:** distinguish method, accuracy and independent reasoning checkpoints in multi-mark working; avoid awarding full method marks for an unexplained MCQ guess; require interpretation of context and units. For a 20-item MCQ mock, use an internal one-key automated score and preserve separate evidence/working for examiner review. No assertion of official examiner endorsement.

## 2. Live read-only Supabase audit — project nwakgkxytovprrrwyahs
Inspected private.grove_practice_bank, private.grove_tasks, private.grove_task_items, private.baseline_bank, private.baseline_sessions, private.baseline_items and public.student_entitlements. Snapshot is dynamic; no student identifiers, answers or private bank stems are copied to this public research file.

- Private practice bank: **2,127 rows**, including **1,833 active approved**, **240 active pilot** and **54 inactive**. Baseline bank: **240** rows; one baseline session with **20** selected items. Scheduler: **35 tasks**, only **10 task-item snapshots** currently materialised. One current entitled learner is Grove Exam, GCSE Higher; the task board is not directly encoded in the observed task schema.
- The **four same-learner exact-normalised baseline-to-Daily repetitions remain present** (4 distinct repeated stems among 10 materialised practice items). Existing submitted work must remain immutable. Exposure exclusions need both question-ID and mathematical-family checks.
- Board/component-specific approved bank is thin. Each of these named routes has **Daily / Weekly / Exam** counts respectively: Cambridge 9709 AS generic 4/4/4; Cambridge 9709 A2 generic 2/2/2; Cambridge P4 Mechanics 1/1/1; Cambridge P5 Statistics 1 1/1/1; Pearson UK 9MA0 A2 5/5/5; Pearson IAL P1 2/2/2, P2 2/2/2, P3 1/1/1; Pearson IAL P4 **0/0/0**, S2 **0/0/0**; Cambridge 9709 P6 **0/0/0**. Cambridge Further 9231 generic 3/3/3 (not component-specific), Pearson 9FM0 Core Pure 1/1/1 and 4B Further Statistics 2 1/1/1. IB AA SL 2/2/2, AA HL 1/1/1, AI SL 1/1/1, AI HL 2/2/2; TMUA 5/5/5. No generic 9709 or 9231 count may be automatically reclassified to an untagged component.
- **Exact minimum gaps for zero-stock components**: Cambridge P6, Pearson IAL P4, Pearson IAL S2 each need **112 Daily + 32 Weekly + 188 Exam** unseen approved items. A route with one item per scope needs 111/31/187; with two 110/30/186; with three 109/29/185; with four 108/28/184; with five 107/27/183. These are *optimistic count-only lower bounds*, not true independent-family or student-specific eligibility.
- GCSE/IGCSE newly expanded cross-board pools: GCSE Higher **132 Daily / 48 Weekly / 228 Exam**, all approved. For the currently entitled learner, exact-normalised exposure subtraction leaves **132 / 48 / 222** unseen within those cross-board pools. This superficially exceeds the 112/32/188 targets, **but does not establish AQA or Pearson route eligibility**, and the 222 Exam pool does not guarantee 20 unique reserved mock items. Cross-board items may only be used after board/tier/objective mapping.
- **Important new quality finding:** replace all numeric substrings in approved cross-board GCSE Higher prompts with a placeholder: the 132 Daily stems collapse to only **12 rough structural templates**, 48 Weekly to **12**, and 228 Exam to **12**. GCSE Foundation: 146/76/207 items collapse to 16/16/15 templates. IGCSE Core: 135/72/207 collapse to 15/15/15; IGCSE Extended: 132/48/228 collapse to 12/12/12. This is a *heuristic*, not a semantic proof, but strongly indicates parameter-swapped repetition and limited authentic multi-mark breadth. Exact prompt uniqueness is not enough.
- Existing live approved cross-board examples are frequently simple one-method tasks repeated with altered numbers. This is not an adequate substitute for examiner-style linked reasoning, contextual interpretation, method-mark evidence or varied cognitive demand. Treat these counts as **capacity provisional** pending family-level QA.
- Read-only keyword probes of the live bank for distinctive proposed parametric-area, Poisson-three-hour, matrix-invariant and divisibility-12 motifs returned zero matches; reviewed rotation 18 and rotation 20 briefs to avoid their AA trig/Maclaurin, AI graph, TMUA quantifier, Cambridge GP/DE and Pearson S1/M1 families. This is **not** a full embedding-based semantic duplicate scan.

## 3. Six original blueprint lanes — 18 worked editorial questions
All stems, working, answers and distractors below were authored for this research. They are **PUBLIC** and must NOT be copied verbatim into private assessments. Every item requires independent mathematical verification, a separate examiner sign-off and private variation before being marked approved. KaTeX below uses single-backslash math commands, \(\cdots\) delimiters and no unsupported package macros. Proposed marks/times are internal planning only.

### L1 — Cambridge 9709 P6, §6.1 Poisson and §6.5 hypothesis tests (A Level P6; P5 prerequisite)
**Objective:** calculate Poisson probabilities, rescale rate to an interval, construct a one-tailed critical region and interpret significance. **Misconceptions:** confusing \(\Pr(X=0)\) with \(\Pr(X\ge1)\), not scaling \(\lambda\), using the wrong tail, claiming failure to reject proves \(H_0\).

**L1-D · Daily · 3 min · proposed 2 marks.** Events follow a Poisson distribution with mean \(2\) per hour. Find the probability of zero events in one hour.
**Working:** \(\Pr(X=0)=e^{-2}2^0/0!=e^{-2}\approx0.1353\).
**Key:** \(e^{-2}\). **Distractors:** \(1-e^{-2}\) (complement), \(2e^{-2}\) (exactly one), \(e^{-4}\) (incorrect interval).

**L1-W · Weekly · 8 min · proposed 6 marks.** Events occur independently in disjoint metre-long sections of cable at mean \(1.5\) faults per metre. Find (i) the probability of no faults in two metres, and (ii) the probability of no faults in the first metre and at least one in the second.
**Working:** (i) \(X_2\sim\mathrm{Po}(3)\), so \(\Pr(X_2=0)=e^{-3}\). (ii) Independent sections: \(e^{-1.5}(1-e^{-1.5})\). The order of the sections matters for (ii).
**Key:** \((e^{-3},\,e^{-1.5}(1-e^{-1.5}))\). **Distractors:** \((e^{-1.5},1-e^{-1.5})\) (no rate scaling), \((e^{-3},(1-e^{-1.5})^2)\) (both positive), \((1-e^{-3},e^{-3})\) (complements).

**L1-E · Exam reasoning · 12 min · proposed 8 marks.** A process normally generates \(2\) incidents per hour. Over a three-hour observation window only \(2\) incidents occur. Test \(H_0:\lambda=2\) per hour against \(H_1:\lambda<2\) per hour at the 10% level. Determine the exact lower-tail critical region.
**Working:** Total \(X\sim\mathrm{Po}(6)\). \(\Pr_{H_0}(X\le2)=e^{-6}(1+6+18)=25e^{-6}\approx0.06197<0.10\). \(\Pr(X\le3)=61e^{-6}\approx0.1512>0.10\). Critical region is \(X\le2\); reject \(H_0\). There is evidence of a reduced rate, not proof of a new true rate.
**Key:** reject at 10%, critical region \(X\le2\). **Distractors:** do not reject at 10% (wrong tail), reject at 5% (wrong significance), \(X\ge2\) (wrong direction). **Marks:** hypotheses/rate 2, tail 2, critical comparison 2, contextual conclusion 2.

### L2 — Pearson IAL S2 WST02, §§2.2–2.5 continuous PDFs and CDFs
**Objective:** normalise a density, integrate to probabilities, form \(F(x)\), calculate mean/median. **Misconceptions:** taking density as a point probability; integrating outside support; confusing \(F(x)\) and \(f(x)\); missing support conditions. **Pearson-only distinction:** Cambridge 9709 P6 §6.3 explicitly does not include knowledge of the CDF.

**L2-D · Daily · 3 min · proposed 2 marks.** \(f(x)=kx\) for \(0<x<2\), and zero otherwise. Find \(k\).
**Working:** \(1=\int_0^2kx\,dx=k[x^2/2]_0^2=2k\), hence \(k=\tfrac12\).
**Key:** \(\tfrac12\). **Distractors:** \(2,\tfrac14,1\) (inverse, wrong interval factor, no normalisation).

**L2-W · Weekly · 8 min · proposed 6 marks.** \(f(x)=kx(2-x)\) for \(0<x<2\), zero otherwise. Find \(k\), derive \(F(x)\) on its support and calculate \(\Pr(X>1)\).
**Working:** \(\int_0^2x(2-x)\,dx=[x^2-x^3/3]_0^2=4/3\), so \(k=3/4\). For \(0\le x\le2\), \(F(x)=\int_0^x(3/4)(2t-t^2)\,dt=\tfrac34x^2-\tfrac14x^3\), with \(F=0\) for \(x\le0\) and \(F=1\) for \(x\ge2\). \(F(1)=1/2\), hence \(\Pr(X>1)=1/2\).
**Key:** \((\tfrac34,\tfrac34x^2-\tfrac14x^3,\tfrac12)\). **Distractors for probability:** \(\tfrac14,\tfrac34,\tfrac13\). **Marks:** normalisation 2, CDF 2, support/probability 2.

**L2-E · Exam reasoning · 12 min · proposed 9 marks.** \(f(x)=kx^2\) for \(0<x<3\), zero otherwise. Determine \(k\), the CDF, \(\Pr(X>2)\), the median and \(\mathrm E(X)\).
**Working:** \(1=k[x^3/3]_0^3=9k\), so \(k=1/9\). \(F(x)=x^3/27\) on \(0\le x\le3\), zero below and one above. \(\Pr(X>2)=1-8/27=19/27\). Median solves \(m^3/27=1/2\): \(m=3\sqrt[3]{1/2}\). \(\mathrm E(X)=\int_0^3x^3/9\,dx=[x^4/36]_0^3=9/4\).
**Key:** \((\tfrac19,\tfrac{19}{27},3\sqrt[3]{1/2},\tfrac94)\). **Distractors for \(\Pr(X>2)\):** \(8/27,\,1/3,\,2/3\). **Marks:** \(k\) 2, piecewise CDF 2, tail 1, median 2, mean 2.

### L3 — Pearson IAL P4 WMA14, §§3.1, 5.1 and 6.5 parametric curves
**Objective:** parametric differentiation, integrate \(y\,dx\) via \(dx/dt\), use the given parameter interval and analyse turning points. **Misconceptions:** integrating \(y\,dt\) instead of \(y\,dx\), losing the Jacobian, confusing stationary \(y\) with stationary \(x\). **Board difference:** this is P4 with P1–P3 prerequisites, not an AS P1 exercise.

**L3-D · Daily · 3 min · proposed 2 marks.** \(x=t^2+1,\ y=t^3,\ t>0\). Find \(dy/dx\).
**Working:** \(dy/dt=3t^2,\ dx/dt=2t\); \(dy/dx=(3t^2)/(2t)=3t/2\).
**Key:** \(3t/2\). **Distractors:** \(2/(3t),\,3t^2,\,2t/3\).

**L3-W · Weekly · 8 min · proposed 6 marks.** The curve is \(x=t^2,\ y=4t-t^2\), \(0\le t\le2\). Find the area between the curve and the \(x\)-axis over this parameter interval.
**Working:** \(dx/dt=2t\). Area \(=\int_0^2(4t-t^2)2t\,dt=\int_0^2(8t^2-2t^3)\,dt=[8t^3/3-t^4/2]_0^2=64/3-8=40/3\). \(y\ge0\) over the interval, so no absolute-value correction.
**Key:** \(40/3\) square units. **Distractors:** \(8,20/3,64/3\). **Marks:** correct integrand 3, integration 2, final area 1.

**L3-E · Exam reasoning · 12 min · proposed 8 marks.** \(x=t^2,\ y=6t-t^2,\ 0\le t\le4\). Find the maximum \(y\)-coordinate and its \(x\)-coordinate, and the area under the curve over the given interval.
**Working:** \(dy/dt=6-2t=0\) at \(t=3\), with \(d^2y/dt^2=-2<0\); point \((x,y)=(9,9)\). \(dx/dt=2t\), and \(y\ge0\) for \(0\le t\le4\). Area \(=\int_0^4(6t-t^2)2t\,dt=[4t^3-\tfrac12t^4]_0^4=256-128=128\).
**Key:** maximum \((9,9)\); area \(128\). **Distractors for area:** \(64,96,256\). **Marks:** derivative/stationarity 2, maximum check/point 2, area setup 2, integration/result 2.

### L4 — Cambridge Further Mathematics 9231 P1, §1.4 matrices and invariant lines
**Objective:** apply a 2D matrix, identify invariant lines and calculate a simple matrix power with proof. **Misconceptions:** matrix order, invariant line vs fixed point, confusing determinant and trace, assuming each vector on invariant line is fixed.

**L4-D · Daily · 3 min · proposed 2 marks.** \(A=\begin{pmatrix}2&1\\0&3\end{pmatrix}\). Find \(A\begin{pmatrix}1\\2\end{pmatrix}\).
**Working:** \(\begin{pmatrix}2(1)+1(2)\\0(1)+3(2)\end{pmatrix}=\begin{pmatrix}4\\6\end{pmatrix}\).
**Key:** \((4,6)^T\). **Distractors:** \((2,7)^T,(3,6)^T,(4,3)^T\).

**L4-W · Weekly · 8 min · proposed 6 marks.** For the same \(A\), find all invariant straight lines through the origin.
**Working:** A direction vector \((x,y)^T\) on an invariant line must satisfy \(A(x,y)^T=\lambda(x,y)^T\). Characteristic equation \((2-\lambda)(3-\lambda)=0\). For \(\lambda=2\), \(y=0\), so \(y=0\). For \(\lambda=3\), \(y=x\). These are the two invariant lines through the origin; not all points on them are fixed.
**Key:** \(y=0\) and \(y=x\). **Distractors:** \(y=0,y=-x\); \(x=0,y=x\); all lines through origin. **Marks:** eigenvalue logic 2, each eigenline 2.

**L4-E · Exam reasoning · 12 min · proposed 9 marks.** Let \(B=\begin{pmatrix}3&2\\0&1\end{pmatrix}\). Prove for all integers \(n\ge1\) that \(B^n=\begin{pmatrix}3^n&3^n-1\\0&1\end{pmatrix}\), evaluate \(B^4\), and identify a nonzero direction fixed by \(B\).
**Working:** Base \(n=1\) holds. Assuming the formula for \(n\), \(B^{n+1}=B^nB=\begin{pmatrix}3^{n+1}&2\cdot3^n+3^n-1\\0&1\end{pmatrix}=\begin{pmatrix}3^{n+1}&3^{n+1}-1\\0&1\end{pmatrix}\). Thus by induction the formula holds. \(B^4=\begin{pmatrix}81&80\\0&1\end{pmatrix}\). Fixed vectors solve \((B-I)(x,y)^T=0\): \(2x+2y=0\), so direction \((1,-1)^T\), line \(y=-x\).
**Key:** matrix above, fixed direction \((1,-1)^T\). **Distractors for upper-right \(B^4\) entry:** \(78,81,82\). **Marks:** base 1, induction 3, evaluation 1, fixed-vector equation 2, interpretation 2.

### L5 — IB AI HL first-assessment-2029, B5 matrices (editorial hold until full guide)
**Objective:** perform matrix operations and interpret linear systems in a contextual model. **Misconceptions:** determinant as sum of diagonal, incorrect inverse sign/order, treating a matrix as commutative. **Cohort gate:** AI HL only, first assessment 2029; do not apply to AI SL or pre-2029 without current-guide verification. Technology required in 2029 AI papers. Full 2029 guide microobjective depth is not publicly verified: **HOLD FROM PUBLICATION**.

**L5-D · Daily · 3 min · proposed 2 marks.** For \(M=\begin{pmatrix}2&1\\1&1\end{pmatrix}\), find \(\det M\) and \(M^{-1}\).
**Working:** \(\det M=2(1)-1(1)=1\); \(M^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}\).
**Key:** determinant \(1\), inverse above. **Distractors:** \(\begin{pmatrix}2&-1\\-1&1\end{pmatrix}\), \(M\), \(-M\).

**L5-W · Weekly · 8 min · proposed 5 marks.** Two types of resource packs use \(2x+y\) units of resource A and \(x+y\) units of resource B, where \(x,y\) are nonnegative integer numbers of packs. An order consumes \(7\) units of A and \(5\) of B. Write and solve the matrix model.
**Working:** \(M(x,y)^T=(7,5)^T\). Since \(M^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}\), \((x,y)^T=M^{-1}(7,5)^T=(2,3)^T\). Check \(2(2)+3=7,\ 2+3=5\).
**Key:** \(x=2,y=3\). **Distractors:** \((3,2),(5,2),(2,5)\). **Marks:** model 2, inverse/solve 2, check 1.

**L5-E · Exam reasoning · 11 min · proposed 8 marks.** A production plan \((x,y)^T\) gives measured resource totals \(M(x,y)^T\), where \(M=\begin{pmatrix}2&1\\1&1\end{pmatrix}\). Observed totals are \((11,7)^T\). Determine \(x,y\). If production of type \(x\) rises by \(10\%\) while \(y\) stays constant, determine the new resource totals and the increases.
**Working:** \(M^{-1}(11,7)^T=(11-7,-11+14)^T=(4,3)^T\). New plan \((4.4,3)^T\); totals \(M(4.4,3)^T=(11.8,7.4)^T\). Increases are \((0.8,0.4)^T\). Fractional production is allowed because this question models continuous output; if packs must be indivisible, the model needs a revised constraint.
**Key:** \((4,3)\), new totals \((11.8,7.4)\), increases \((0.8,0.4)\). **Distractors for new totals:** \((12.1,7.7),(11.4,7.4),(11.8,7.0)\). **Marks:** inverse/model 3, adjustment 2, multiplication 2, interpretation 1.

### L6 — TMUA Paper 2, implication and proof by divisibility (2026–27)
**Objective:** prove an implication, find a valid counterexample to its converse, distinguish necessary from sufficient conditions. **Misconceptions:** assuming the converse, confusing \(a\mid b\) with \(b\mid a\), using one numerical example as proof of a universal statement. **Format gate:** authentic TMUA option count remains unverified from the interactive specimen; the four choices below are *internal distractor candidates*, not a claim of official option count.

**L6-D · Daily · 3 min · proposed 2 marks.** Explain why an integer \(n\) with \(n^2\) even must itself be even.
**Working:** If \(n\) were odd, \(n=2k+1\) and \(n^2=4k(k+1)+1\), odd. Contradiction; therefore \(n\) is even.
**Key:** parity contrapositive. **Distractors (argument labels):** converse assumed, single example, cancellation of square without justification.

**L6-W · Weekly · 7 min · proposed 5 marks.** A student claims: “For every integer \(n\), if \(12\mid n^2\), then \(12\mid n\).” Decide whether this is true and justify your conclusion.
**Working:** False: \(n=6\) gives \(n^2=36=12\cdot3\), but \(12\nmid6\). A counterexample disproves a universal implication.
**Key:** false; \(n=6\). **Distractor examples:** \(n=4\) (premise false), \(n=8\) (premise false), \(n=12\) (both true). **Marks:** status 1, counterexample 2, verification of premise/conclusion 2.

**L6-E · Exam reasoning · 10 min · proposed 7 marks.** For integers \(n\), determine which statement is equivalent to \(12\mid n^2\): (A) \(12\mid n\), (B) \(6\mid n\), (C) \(4\mid n\), (D) \(3\mid n\). Prove your selection.
**Working:** If \(12\mid n^2\), then \(3\mid n^2\) and \(4\mid n^2\). As 3 is prime, \(3\mid n\); \(4\mid n^2\) forces \(2\mid n\). Since 2 and 3 are coprime, \(6\mid n\). Conversely \(n=6k\) gives \(n^2=36k^2=12(3k^2)\). Thus equivalence holds exactly for **(B)**. (A) is too strong, (C) is neither sufficient nor necessary, (D) is necessary but insufficient.
**Key:** B. **Marks:** forward 3, converse 2, equivalent condition 1, eliminate distractors 1.

## 4. Mock assembly handoff — practice only, not an official exam
For **each** eligible Grove Exam route, reserve 20 independently authored, approved, unseen MCQs for a **90-minute Grove monthly practice mock**. Suggested internal composition: 4 short diagnostic items (2–3 min), 8 medium two-stage items (3–4 min), 6 reasoning-rich items (4–6 min), 2 longer integrated items (6–8 min), with 90-minute overall cap including review time. This is a *planning allocation* and must be timed with pilot data; individual item times are not hard official timings. Every item must have a unique answer key, plausible distractors, full worked solution and an optional evidence/whiteboard route for human review. Keep the 20 mock IDs **disjoint** from the 168 Grove Exam daily IDs and from baseline/Weekly/Daily exposures for that learner. The real TMUA official format is **two separate 75-minute, 20-MCQ papers**, not this Grove practice mock. IB and Cambridge/Pearson full-format written exams are not 20-MCQ papers either.

**QA release gate:** (1) exact board/component/year/tier objective match; (2) no baseline-to-practice or cross-tier reuse by ID, normalised stem or mathematical family; (3) verified single key and non-equivalent distractors; (4) mathematical independent second solution and symbolic/numerical check; (5) valid KaTeX escaping and screen-reader readable notation; (6) authentic multi-mark working and examiner-written rubric; (7) calculator/formula restrictions and unit/precision checks; (8) named human examiner approval, versioned evidence and private answer keys; (9) scheduled task generation regression tests; (10) never publish the public seed verbatim.

## 5. Prioritised implementation handoff
1. **P0 exposure defect:** four exact baseline-to-Daily repeats persist. Before next assignment, enforce lifetime per-student exposure across baseline_items, grove_task_items, any paper_questions and parameter families. Do not alter submitted history. Report exposure counts and regression test result.
2. **P0 route-specific content:** independently author and approve **112/32/188** per zero-stock route (Cambridge 9709 P6, Pearson IAL P4, Pearson IAL S2; also other untagged components). The 18 public questions above are only research blueprints and must not count toward these targets.
3. **P1 curriculum schema:** add separate exam_board, component_code, qualification_code, syllabus_version, exam_year, calculator_policy, formula_sheet_policy, question_family_id, assessment_mode and human_review_version; enforce valid AS/A2/IAL/Further combinations and IB 2029 transition. Existing practice bank has no first-class exam_year/component/family columns.
4. **P1 GCSE quality:** audit 12–16-template cross-board families before declaring monthly readiness; replace parameter-only variants with genuinely varied, original multi-mark reasoning; keep cross-board scope explicit and never silently substitute for a board-specific item.
5. **P1 timed practice mocks:** build 20 unique approved items per route, lock at 90 minutes, explicitly label as Grove practice, validate expiry and report generation. Never label them official full-format papers.
6. **P2 complete coverage:** continue 9MA0 statistics/mechanics, Pearson 9FM0 optional combinations, Cambridge 9231 P2/P3/P4, IB AA/AI SL/HL, TMUA P1/P2 and GCSE/IGCSE board/tier breadth. Do not extrapolate syllabus microcodes from brief-level headings without the full authorised guide.

**Blockers:** live bank has severe component-level shortages; family-level semantic novelty not proven; four same-learner cross-mode repetitions; no first-class component/year/family metadata; IB 2029 detailed guides not publicly verified; TMUA interactive specimen answer-option count unverified; no human-approved full-length Grove 20-MCQ practice mocks. No writes to private question bank, student assignments or scheduler were made in this research run.

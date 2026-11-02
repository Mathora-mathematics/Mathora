# MathsGrove content + Signature editorial QA — 2 November 2026, ~21:00 Kuwait

**Batch** `20261102-2100`. This is a factual record of the current run, **not** a claim of two hours elapsed. Private practice content is held in Supabase project `nwakgkxytovprrrwyahs`; this public journal contains only IDs, topics, qualification routing, sources and verification summaries. Student information and confidential answers/mark schemes are excluded.

## Authoritative specifications (checked 2026-11-02)

- **AQA GCSE Mathematics 8300**, Foundation, 2026/27: [official subject content](https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/subject-content-and-assessments), [R4–R9 ratios/percentages](https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/subject-content/3.3-ratio-proportion-and-rates-of-change), N2, R3, A21. Paper 1 non-calculator; Papers 2/3 calculator. This batch uses compatible arithmetic.
- **Pearson Edexcel International GCSE Mathematics A, linear 4MA1 Higher**, 2026/27: [official specification, Issue 2](https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf), §§2.3(A), 2.8(A), 4.6(A). Both 1H and 2H allow calculators; **not** the separate 4XMA modular route.
- **UAT-UK TMUA**, 2026/27: [official specification](https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165619/TMUA_Content_Specification.pdf), Paper 2 Section 2 Arg1, Prf1, Prf3, Err1; [official assessment format](https://esat-tmua.ac.uk/about-the-tests/tmua-test/). Paper 2 is 20 MCQs/75 minutes and no calculator. This platform currently stores the board as `TMUA`, with **Paper 2 encoded in syllabus metadata**, not a separately enforced paper selector.

No protected exam questions or official mark-scheme wording were reproduced. Every candidate is original.

## Practice drafts — all nine initially `draft` / `active=false`

| Private UUID | Exact qualification / level | Mode | Original topic | Time |
|---|---|---|---|---:|
| `b0ad3300-23fb-4c55-bc00-9af4e74f299b` | AQA GCSE 8300 Foundation | Daily | Fractional sharing | 180 s |
| `4fbab8b3-8e09-4386-a5a2-993887aaa887` | AQA GCSE 8300 Foundation | Weekly | Changing ratio | 240 s |
| `087a200e-e97d-4b87-a514-b4795ee88510` | AQA GCSE 8300 Foundation | Exam | Reverse percentage capacity | 240 s |
| `b425ecdf-2e0b-462f-a0b3-ffde0ca8347c` | Pearson IGCSE 4MA1 Higher (extended) | Daily | Rearranging a rational formula | 290 s |
| `ca1b85a1-3ae7-4194-a0e5-8962fe24631b` | Pearson IGCSE 4MA1 Higher (extended) | Weekly | External secant geometry | 280 s |
| `c447227b-7fe9-490d-8854-f84ed61b143f` | Pearson IGCSE 4MA1 Higher (extended) | Exam | Intersecting inequalities | 370 s |
| `285edd99-998d-43a7-b604-63ae13dff798` | TMUA Paper 2 / board TMUA | Daily | Contrapositive | 210 s |
| `1e51260b-93d9-471e-8ec3-cb61473ad191` | TMUA Paper 2 / board TMUA | Weekly | Divisibility counterexample | 250 s |
| `ab0792a3-2910-4ace-affe-9b9d942d0958` | TMUA Paper 2 / board TMUA | Exam | Prime-generating conjecture | 270 s |

All nine contain **four distinct answer options, one answer key, full derivation, misconception feedback, tutor marking guidance, academic-level/board/component/year metadata, estimated time and balanced TeX delimiters**. The source code of this journal does not contain the confidential items.

## Independent checks and duplicate rejection

- Independent **SymPy/Python 9/9** numerical, symbolic, logical and prime checks, including endpoint logic for inequalities; **independent JavaScript 9/9**; **live SQL arithmetic 9/9**.
- Four distinct choices and one key **9/9**; explanations, misconceptions and timing **9/9**; TeX delimiter/brace syntax **9/9**. A syntactic delimiter check does **not** guarantee pixel-perfect KaTeX rendering in a browser.
- Prior screening: **2,193 private practice + 240 baseline + 10 materialised task items = 2,443** prior records per question; **21,987 comparisons**, zero exact-normalised or numeric-masked-template duplicates, zero token Jaccard ≥0.76; maximum prior Jaccard **0.4500** (TMUA counterexample topic, mathematically distinct). **36 within-batch pairs**, zero exact duplicates, maximum token Jaccard **0.2174**. One previous proof/counterexample family was manually inspected and judged different in mathematical statement and counterexample construction.
- **Nine intended-board matches / zero wrong-board matches** against tested alternate boards; zero previously assigned staged IDs or matching stems. Exact ID and normalised-stem per-learner exclusion exists in `grove_task_start`, but **mathematical-family no-repeat remains unproven**. Four historical baseline-to-practice repetitions remain unresolved.
- Existing legacy drafts were inspected individually; thin and examination-year-uncertain drafts were **not** bulk-approved. **New candidates rejected: 0**; historical rejected drafts remain untouched.
- **Student aggregate before publication:** 35 tasks, 10 materialised task items, 5 answers, 5 evidence records, 10 human marks. No learner data or human marks were edited.

## Private Signature Advanced (not a public practice item)

Created `bd8ffee0-56d3-4f41-bc6b-006cc51e50fd`, Pearson 4MA1 Higher, original **24-mark, 45-minute, calculator-allowed structured diagnostic**: three questions, **11 parts**, on changing the subject/domain, external secants and conditional supplier probabilities. All **24/24 criterion marks** reconciled with the paper and mark scheme; independent symbolic and numerical checks passed. Confidential paper, part-level scheme and report template are private. State **`awaiting_human_moderation`**, human moderator and time NULL. No student-specific report released.

## Four-week route inventory before approval

Counts are **approved+active distinct exact-board and level items** in each mode (not pilot, drafts, generic cross-board or previously seen questions). A learner's unseen stock can only be lower. Daily requires 112 **plus 32 separate Weekly**, and Exam requires 188 **plus 32 separate Weekly**. An item eligible for multiple modes is not two distinct items.

| Exact route | Approved Daily / Weekly / Exam | Shortfall Daily / Weekly / Exam |
|---|---|---|
| AQA 8300 Foundation | 3 / 3 / 3 | 109 / 29 / 185 |
| Pearson 4MA1 Higher | 3 / 3 / 3 | 109 / 29 / 185 |
| TMUA board (Paper 2 not independently routed) | 6 / 6 / 6 | 106 / 26 / 182 |

**Pre-release live bank:** 2,202 total, 1,905 approved active, 240 active pilot, 57 inactive (nine new drafts + 48 earlier drafts). **No full multi-mark mock paper has been released** through the four-option practice schema.

## Publication gate and unresolved work

Do not activate until the repository PR CI and deployment workflows pass. Then atomically approve only the exact nine staged UUIDs after rechecking all metadata, keys, prior exposure, board matching, and absence of duplicates. Read back the live bank and exact route counts, and record the deployment result here. No bulk approval, no alteration of students or human marking, no fabricated human moderation.

**Known limitations:** four historical baseline/practice repetitions; mathematical-family no-repeat not proven; generic Cambridge 9709 component matching; TMUA Paper 2 stored as syllabus metadata rather than separate routing; no genuine written 20-item timed mock represented by four-option practice; IB revised-cohort safeguards pending. Prioritise these safeguards and then underserved Cambridge 9709, Pearson IAL, Further Maths, IB AA/AI, TMUA and GCSE/IGCSE exact-board routes.

## Final publication status

**Pending GitHub CI/deployment and Supabase atomic approval.** This section will be updated only with measured results.

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

**Known limitations:** four historical baseline/practice repetitions; mathematical-family no-repeat not proven; generic Cambridge 9709 component matching (historical concern; current live compatibility test now false); TMUA Paper 2 stored as syllabus metadata rather than separate routing; no genuine written 20-item timed mock represented by four-option practice; IB revised-cohort safeguards pending. Prioritise these safeguards and then underserved Cambridge 9709, Pearson IAL, Further Maths, IB AA/AI, TMUA and GCSE/IGCSE exact-board routes.

## Final publication status

**PUBLISHED — 9/9 approved and active in private Supabase at 2026-11-02 18:11:09 UTC.** Nine inactive, individually checked drafts passed a single atomic conditional activation; nine intended qualification/board matches, zero tested wrong-board matches and zero prior assignments. No student records, submissions, evidence or examiner marks changed.

**Passing GitHub workflows:** [PR CI](https://github.com/Mathora-mathematics/Mathora/actions/runs/41497684878), [main CI](https://github.com/Mathora-mathematics/Mathora/actions/runs/41497775579), [custom website deployment](https://github.com/Mathora-mathematics/Mathora/actions/runs/41497775769), [native GitHub Pages deployment](https://github.com/Mathora-mathematics/Mathora/actions/runs/41497773675). [Merged PR #51](https://github.com/Mathora-mathematics/Mathora/pull/51), merge commit `10035c1d850b80183451f42bda63a3e9b3183529`. All workflows **success**. Automated editorial approval is not authenticated human examiner moderation.

**Post-publication live bank:** **2,202 total / 1,914 approved active / 240 active pilot / 48 inactive drafts.** Exact targeted routes: AQA 8300 Foundation **4/4/4** (shortfall **108/28/184**); Pearson 4MA1 Higher **4/4/4** (**108/28/184**); TMUA pooled board **7/7/7** (**105/25/181**). These are distinct items within each mode, not a guarantee of 112+32 or 188+32 unseen learner allocations. Four-week 20-item timed practice mocks are not equivalent to multi-mark written examinations.

**Post-publication student aggregates:** 35 tasks / 10 materialised items / 5 answers / 5 evidence / 10 human marks, unchanged. Private Signature Advanced `bd8ffee0-56d3-4f41-bc6b-006cc51e50fd` remains `awaiting_human_moderation` with 24/24 criteria reconciled, moderator ID and timestamp NULL, no student report released.

**Corrected routing finding:** a fresh live SQL check returned `private.grove_board_compatible('Cambridge 9709','Cambridge 9709 P5 Statistics 1') = false` and P5-to-P6 = false. The earlier generic-9709-to-P5 concern is **not reproducible under the current compatibility function**; no new migration was needed. Pearson 4MA1 Higher-to-Foundation board-only comparison returns true, but `academic_level` is separately required to match; level separation must remain enforced.

## Complete exact-board approved inventory after publication

Counts exclude 240 active pilot items, 48 drafts and broad `cross-board` items; Cambridge 0580 Extended board-name aliases are combined. These are **bank-wide upper bounds**, not student-specific unseen counts. The TMUA board and Cambridge 9231 generic rows are not exact-paper/component inventories; do not interpret them as such. Daily also needs 32 **separate** Weekly unseen items; Exam also needs 32 **separate** Weekly unseen items.

| Qualification / level | Exact board or component | Active D/W/E | Shortfall D/W/E |\n|---|---|---:|---:|\n| A_LEVEL / a2 | Cambridge 9709 P3 Pure Mathematics 3 | 3/3/3 | 109/29/185 |\n| A_LEVEL / a2 | Cambridge 9709 P6 Statistics 2 | 1/1/1 | 111/31/187 |\n| A_LEVEL / a2 | Pearson Edexcel 9MA0 UK GCE | 5/5/5 | 107/27/183 |\n| A_LEVEL / a2 | Pearson Edexcel IAL WMA13 P3 | 1/1/1 | 111/31/187 |\n| A_LEVEL / a2 | Pearson Edexcel IAL WMA14 P4 | 1/1/1 | 111/31/187 |\n| A_LEVEL / a2 | Pearson Edexcel IAL WME02 Mechanics M2 | 1/1/1 | 111/31/187 |\n| A_LEVEL / a2 | Pearson Edexcel IAL WST02 S2 | 1/1/1 | 111/31/187 |\n| A_LEVEL / as | Cambridge 9709 P1 Pure Mathematics 1 | 5/5/5 | 107/27/183 |\n| A_LEVEL / as | Cambridge 9709 P4 Mechanics | 1/1/1 | 111/31/187 |\n| A_LEVEL / as | Cambridge 9709 P5 Statistics 1 | 2/2/2 | 110/30/186 |\n| A_LEVEL / as | Pearson Edexcel IAL WMA11 P1 | 3/3/3 | 109/29/185 |\n| A_LEVEL / as | Pearson Edexcel IAL WMA12 P2 | 2/2/2 | 110/30/186 |\n| A_LEVEL / as | Pearson Edexcel IAL WME01 Mechanics M1 | 1/1/1 | 111/31/187 |\n| A_LEVEL / as | Pearson Edexcel IAL WST01 S1 | 1/1/1 | 111/31/187 |\n| FURTHER_MATHS / further | Cambridge 9231 (component-unspecified) | 5/5/5 | 107/27/183 |\n| FURTHER_MATHS / further | Cambridge 9231 P2 Further Pure 2 | 2/2/2 | 110/30/186 |\n| FURTHER_MATHS / further | Pearson Edexcel 9FM0 4B Further Statistics 2 | 1/1/1 | 111/31/187 |\n| FURTHER_MATHS / further | Pearson Edexcel 9FM0 Core Pure | 1/1/1 | 111/31/187 |\n| GCSE / foundation | AQA 8300 | 4/4/4 | 108/28/184 |\n| GCSE / foundation | Pearson Edexcel 1MA1 | 2/2/2 | 110/30/186 |\n| GCSE / higher | AQA 8300 | 4/4/4 | 108/28/184 |\n| GCSE / higher | Pearson Edexcel 1MA1 | 3/3/3 | 109/29/185 |\n| IB_AA / hl | IB Diploma Programme | 2/2/2 | 110/30/186 |\n| IB_AA / sl | IB Diploma Programme | 3/3/3 | 109/29/185 |\n| IB_AI / hl | IB Diploma Programme | 3/3/3 | 109/29/185 |\n| IB_AI / sl | IB Diploma Programme | 2/2/2 | 110/30/186 |\n| IGCSE / core | Cambridge IGCSE 0580 Core | 5/5/5 | 107/27/183 |\n| IGCSE / core | Pearson Edexcel 4MA1 Foundation | 3/3/3 | 109/29/185 |\n| IGCSE / extended | Cambridge IGCSE 0580 Extended (aliases combined) | 6/6/6 | 106/26/182 |\n| IGCSE / extended | Pearson Edexcel 4MA1 Higher | 4/4/4 | 108/28/184 |\n| TMUA / tmua | TMUA (Paper 1/2 pooled; no paper-specific selector) | 7/7/7 | 105/25/181 |\n
**Still unresolved:** four historical baseline-to-practice repetitions and unproven semantic-family no-repeat; IB cohort-year safeguards; incomplete four-week unseen inventory for every exact-board route; lack of a true multi-mark written exam mock through the MCQ practice schema. No historical student records were modified.

# MathsGrove mathematics content + Signature editorial QA — 3 November 2026, ~00:56 Kuwait

**Batch:** `20261103-0056`. This record reports actual execution only, not two elapsed hours. Confidential mathematics prompts, answers, options, solutions and Signature mark schemes remain exclusively in private Supabase `nwakgkxytovprrrwyahs`.

## Official syllabus research (checked 3 November 2026)

- Cambridge IGCSE 0580 Core: [2025–27 official syllabus](https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf), Core number/decimals, scale and composite area. Paper 1 non-calculator; Paper 3 calculator. The platform currently records this distinction in reviewer metadata, not an enforced paper selector.
- IB Mathematics: Analysis and Approaches SL: [official IB current course guide](https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-analysis-and-approaches-guide-en.pdf), Topic 1 geometric sequences, Topic 2 functions/composition, Topic 4 normal distribution. [Official IB current-versus-new course information](https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/) confirms current syllabus has final assessment November 2028; the replacement first assesses in 2029. The new items are explicitly scoped to the **current 2021–Nov 2028 syllabus**. Paper 1 non-technology for the first two items, Paper 2 technology for inverse normal.
- Pearson 9FM0 Further Mathematics Paper 4B Further Statistics 2: [official Issue 4 specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-further-mathematics-specification.pdf), §1.2 regression RSS, §3.2 Spearman correlation, §2.1 continuous probability. Calculator permitted. Not to be confused with Paper 3B Further Statistics 1.

No copyrighted question or mark scheme wording copied. These are original four-option practice MCQs, not official written papers.

## Private editorial drafts staged

| Private UUID | Exact route | Mode | Topic | Seconds |
|---|---|---|---|---:|
| `05478d72-cfc9-40bc-b2cf-e9c337577fa5` | Cambridge 0580 / core | daily | Decimals and measures | 190 |
| `5ffe071b-ee4e-4a5e-b0f1-a9f4eca0bbf4` | Cambridge 0580 / core | weekly | Scale drawings | 240 |
| `6f35a9d7-7fbf-425b-bd34-8e6d4df8b184` | Cambridge 0580 / core | exam | Composite area | 250 |
| `37142202-7310-4f4a-a7da-493c6e17148e` | IB Diploma Programme / sl | daily | Composite function domain | 240 |
| `18792be4-9fd2-4940-b75e-9ea96e46e624` | IB Diploma Programme / sl | weekly | Geometric sequences | 290 |
| `0125ce8e-1eb9-4abe-acbf-8e0237d4ccaf` | IB Diploma Programme / sl | exam | Normal percentile | 330 |
| `ab67aa9d-246f-40bc-ab0b-a3feb6ba9ac3` | Pearson Edexcel 9FM0 4B Further Statistics 2 / further | daily | Residual sum of squares | 270 |
| `e69f2600-3518-4069-bc8b-68f44f6b9331` | Pearson Edexcel 9FM0 4B Further Statistics 2 / further | weekly | Spearman ranks | 310 |
| `614f4486-7b0e-48a4-9373-df87228e296d` | Pearson Edexcel 9FM0 4B Further Statistics 2 / further | exam | Quadratic probability density | 420 |

All nine were inserted with `active=false`, `review_state=draft`. Each has four unique answer choices, exactly one correct key, worked derivation, misconceptions, timing, source/year metadata and tutor guidance.

## Independent mathematical and editorial QA

- SymPy **9/9** independently evaluated exact fractions, sequences, scale/area, regression, rank correlation and quadratic-density integral; SciPy inverse normal evaluated `70.29146711595`.
- Independent JavaScript arithmetic **9/9**; independent live SQL arithmetic **9/9**. Exact key and four distinct options **9/9**.
- Live database field checks **9/9**: explanation 308–407 characters, substantial misconception and marking notes, timers 190–420 seconds, draft and inactive.
- Duplicate screening against **2,481 prior practice, baseline, baseline-session and materialised assignment records per candidate**: **22,329 comparisons**, **0 exact**, **0 digit-masked**, **0 token Jaccard >=0.76**. Largest prior similarity **0.5263**. Within batch **36 pairs**, zero collisions. Structural similarity heuristics cannot prove absence of all mathematical-family repetitions.
- Exact route compatibility: 3 intended-board positive and 3 incompatible-board negative assertions passed; all 9 have intended-board compatibility. No staged IDs previously assigned.
- Existing **48 inactive legacy drafts** inspected by qualification and explanation length: 42 thin GCSE/IGCSE drafts and six IB year-sensitive drafts remain inactive; **zero wholesale approvals**. Initial preflight stopped because one 272-character explanation missed a conservative 280-character threshold; that item was improved to 336 characters before staging. **9 final accepted, 0 final rejected**.
- Before staging: **2,211 total / 1,923 approved active / 240 active pilot / 48 inactive**. After staging: **2,220 total / 1,923 approved active / 240 active pilot / 57 inactive**.

## Four-week unseen availability before publication

Exact board/level approved active stock only, no pilot, draft, generic cross-board or previously assigned material. Upper bound only: per-student unseen may be lower.

| Exact route | Daily / Weekly / Exam | Deficits D / W / E |
|---|---:|---:|
| Cambridge 0580 Core | 5 / 5 / 5 | 107 / 27 / 183 |
| IB AA SL current 2021–Nov 2028 | 3 / 3 / 3 | 109 / 29 / 185 |
| Pearson 9FM0/4B FS2 | 1 / 1 / 1 | 111 / 31 / 187 |

Weekly requires 32 unseen questions; Daily requires 112 Daily **plus a distinct 32 Weekly**; Exam requires 188 Exam **plus distinct 32 Weekly**. Do not double-count cross-eligible entries.

## Signature Advanced — private and not student-released

Original IB AA SL Signature Advanced diagnostic `77bc4543-3792-4348-99fe-195916b863d2`: three structured questions, nine parts, **24 marks**, 45 minutes. Quadratic modelling, alternating geometric series and normal model. Full private mark scheme and examiner-report template. Independent SymPy/SciPy/JS checks passed; all **24/24** criterion awards reconcile with 24 part marks. `awaiting_human_moderation`, `human_moderated_by=NULL`, `human_moderated_at=NULL`. No student-specific report released.

## Publication gate and unresolved work

**At initial journal creation: draft only; no live publication claimed.** Publication requires this PR's passing GitHub Actions, deployment checks, conditional approval of exactly the nine UUIDs and read-back from Supabase. If any gate fails, leave inactive drafts and record failure.

Student records before: **35 tasks, 10 task items, 5 answers, 5 evidence files, 10 human marks**. No modifications to those tables. Existing historical **four baseline-to-practice repeats** remain unresolved. Mathematical-family no-repeat and per-learner year/paper gating remain unproven; do not claim a complete four-week unique inventory. Current MCQ schema cannot publish a genuine multi-mark written mock.

## Final verified release — 3 November 2026, 01:06 Kuwait

**PUBLISHED 9/9**: conditional atomic Supabase update approved and activated exactly the nine staged UUIDs at `2026-11-02T22:05:32.735278Z`. Post-release read-back confirmed **9 active approved**, four distinct choices and one key **9/9**, exact intended board matches **9/9**, previously assigned new IDs **0**. Independent SQL maths **9/9** and balanced TeX delimiters/braces **9/9**. Duplicate preflight covered **22,329 prior comparisons**, zero exact, digit-masked or token-Jaccard ≥0.76 collisions; within-batch **36 pairs**, zero collisions.

**Merged GitHub PR #53:** https://github.com/Mathora-mathematics/Mathora/pull/53 ; merge commit `4993c8898523459e6c682895f32b36826444bc85`. Final PR CI: https://github.com/Mathora-mathematics/Mathora/actions/runs/41533921936 ; main mathematics/regression CI: https://github.com/Mathora-mathematics/Mathora/actions/runs/41534066350 ; custom website deployment: https://github.com/Mathora-mathematics/Mathora/actions/runs/41534066445 ; GitHub Pages: https://github.com/Mathora-mathematics/Mathora/actions/runs/41534066351 . **All four passed** on the merged release; audit-only journal/ledger commit may trigger a further run, which must be checked separately.

**Post-publication bank:** **2,220 total / 1,932 approved active / 240 active pilot / 48 inactive**. Exact approved active D/W/E stock and individual-mode deficits:
- Cambridge 0580 Core: **6/6/6**, shortfalls **106/26/182**.
- IB AA SL current 2021–Nov 2028: **4/4/4**, shortfalls **108/28/184**.
- Pearson 9FM0/4B Further Statistics 2: **2/2/2**, shortfalls **110/30/186**.

Daily additionally needs 32 distinct Weekly questions and Exam 32 distinct Weekly; do not count shared eligible items twice. Learner-specific unseen inventory may be lower. There are still four historical baseline-to-practice repetitions; a new no-repeat mathematical-family guarantee is **not** proven.

**Student records unchanged:** 35 tasks, 10 materialised items, 5 answers, 5 evidence records, 10 human marks. Private Signature Advanced `77bc4543-3792-4348-99fe-195916b863d2` remains `awaiting_human_moderation`, 24/24 criterion marks reconciled, no authenticated human signoff, zero student reports released.

**Next cycle priority:** repair historical baseline-to-practice repetition without changing historical marks; enforce learner exam-year/paper-specific routing; expand IB AI/AA, Pearson 4MA1, AQA/Pearson GCSE and exact A Level/Further/TMUA units; continue Signature Specialist editorial papers under human moderation.

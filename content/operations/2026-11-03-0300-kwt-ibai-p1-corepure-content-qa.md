# MathsGrove mathematics content and Signature editorial QA — 3 November 2026, Kuwait

**Batch:** `20261103-0300`. Records work actually performed; no claim of two elapsed hours. Private question stems, choices, solutions, and Signature mark schemes are stored only in Supabase project `nwakgkxytovprrrwyahs`. This public journal contains identifiers, metadata, checks and sources only.

## Official specifications checked (3 November 2026)

- **IB Mathematics: Applications and Interpretation HL**, first assessment 2021, final assessment November 2028: [official IB course guide](https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf) — AHL 3.15 graph degree/completeness; AHL 5.16 Euler's method; AHL 3.16 minimum spanning tree algorithms. Technology permitted for AI HL. [IB transition notice](https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/) distinguishes replacement first assessed in 2029. The platform currently stores course year in item metadata; learner-year enforcement is **not** proven.
- **Cambridge 9709 Paper 1 Pure Mathematics 1 (AS)**, examinations 2026–27: [official syllabus](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), §1.2 composite functions and domains, §1.8 area by definite integration, §1.5 trigonometric equations. Paper 1 is a structured written exam; our items are original four-choice practice, not an official mock.
- **Pearson Edexcel 9FM0 Core Pure Papers 01/02**, specification Issue 4 June 2023: [official specification](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-further-mathematics-specification.pdf), §2 complex numbers, §3.4 invariant lines, §7 polar coordinates. Either Core Pure paper may test common content; calculator allowed.

No copyrighted question or mark-scheme wording was reproduced.

## Nine private draft candidates

| UUID | Exact route | Grove mode | Original topic | Seconds |
|---|---|---|---|---:|
| `1adf5be6-49d6-4970-9f97-01d61b6ebfa1` | IB AI HL, current syllabus | Daily | Graph degree sum and completion | 230 |
| `1203b6df-bb12-4fdb-a9d2-f6e011863f97` | IB AI HL, current syllabus | Weekly | Euler numerical integration | 300 |
| `d20d1ccb-5ee6-4359-a36e-d4c666544bfa` | IB AI HL, current syllabus | Exam | Kruskal minimum spanning tree | 360 |
| `5f97c6f9-e372-447c-99ab-c35130c62827` | Cambridge 9709 P1 AS | Daily | Domain of composite radical | 230 |
| `271678d9-a5ae-4de3-8a9f-fc6a6cee7648` | Cambridge 9709 P1 AS | Weekly | Area between curve and line | 330 |
| `5676a2a9-beda-405a-a500-8ac21750269c` | Cambridge 9709 P1 AS | Exam | Trigonometric solution set | 330 |
| `934fbf92-02a4-4a27-86f0-d18dd341fce9` | Pearson 9FM0 Core Pure | Daily | Complex modulus | 230 |
| `546fbdb9-520b-4cfa-97a0-373c5283e1fe` | Pearson 9FM0 Core Pure | Weekly | Invariant matrix line | 320 |
| `72f97597-ca84-4022-bf5a-47311b10305e` | Pearson 9FM0 Core Pure | Exam | Exact polar area | 400 |

All nine inserted as `active=false`, `review_state=draft`; full independent worked explanations, four mathematically distinct options with exactly one key, misconception analysis, estimated time, official source/year/unit, and tutor marking guidance are private. **No bulk activation of legacy drafts.**

## Editorial and independent mathematical QA

- Independent SymPy: **9/9**; independent JavaScript: **9/9**; SQL: **9/9** after correcting a *test-only* exact-decimal comparison to use tolerance (`3*(2/3)-2` had a 1e-20 rounding residue). This was not a mathematical content defect.
- **9/9** four distinct answers, one correct key, explanations 313–414 characters, marking notes and times 230–400 seconds.
- KaTeX/TeX: **54/54** prompt, explanation and answer-option fields balanced for `\\(`/`\\)` and braces.
- **2,490** previous practice, baseline, baseline-session and materialised task prompts compared with each candidate = **22,410 prior comparisons**. Exact duplicates **0**; digit-masked duplicates **0**; token Jaccard ≥0.74 **0**; maximum prior similarity **0.600**. Within batch **36 pairs**, no threshold collisions. Structural heuristics cannot prove absence of all mathematical-family repeats.
- Live draft checks: **9/9** inactive drafts, four options, one key, substantial explanation, timing, board self-match. Negative board checks: **0/9** matched AQA GCSE Foundation or Pearson IAL WMA14 P4. Previously assigned new UUIDs: **0**.
- Existing inactive drafts before this batch: **48** (42 thin GCSE/IGCSE and six IB year-sensitive). None mass-approved. **Accepted: 9; rejected final: 0.** One Signature insert attempt was rejected by product enum `signature_specialist`; corrected to supported `specialist_review`, with no invalid record created.

## Four-week unseen inventory before this release

Exact board/level approved active, **not** pilot, generic cross-board, drafts, or already assigned. These are upper bounds, not guaranteed per-learner unseen supply.

| Exact route | Daily / Weekly / Exam approved | Deficit Daily / Weekly / Exam |
|---|---|---|
| IB AI HL current | 3 / 3 / 3 | 109 / 29 / 185 |
| Cambridge 9709 P1 AS | 5 / 5 / 5 | 107 / 27 / 183 |
| Pearson 9FM0 Core Pure | 1 / 1 / 1 | 111 / 31 / 187 |

Weekly requires **32** unseen; Daily **112 Daily + 32 distinct Weekly**; Exam **188 Exam + 32 distinct Weekly**. Never double-count a question eligible for more than one mode. Learner-specific unseen counts may be smaller.

## Signature Specialist — private, awaiting authenticated human examiner moderation

**ID:** `87884e73-5700-415f-b788-97dd6a5f6084`. Product `specialist_review`, Pearson 9FM0 Core Pure, original 45-minute structured diagnostic: three questions, nine parts, **24 marks**. Complex roots, matrix transformations, and hyperbolic functions; private part-level mark scheme and examiner report template. Independent symbolic checks passed, and **24/24** criterion awards reconcile. `awaiting_human_moderation`, `human_moderated_by=NULL`, `human_moderated_at=NULL`; no student-specific release.

## Publication gate and safeguards

**At journal creation: DRAFT ONLY.** Live publication is permitted only after passing GitHub Actions and deployment, conditional atomic approval of exactly these nine UUIDs, and live Supabase read-back. If CI or deployment fails, leave drafts inactive and document exact failure.

Pre-stage bank: **2,220 total / 1,932 approved active / 240 active pilot / 48 inactive**. Post-stage: **2,229 total / 1,932 approved active / 240 active pilot / 57 inactive**.

Student aggregates before: **35 tasks, 10 materialised items, 5 answers, 5 evidence files, 10 human marks**. No student-table mutations authorised. Existing four historical baseline-to-practice repeats unresolved; learner-level mathematical-family no-repeat is not proven. Exact-ID and exact-stem exclusion in `public.grove_task_start` remains in place. Current four-option practice schema does not deliver genuine multi-mark written mock exams.

**Next:** complete CI and deployment, conditionally publish, verify post-release route eligibility and counts, then expand exact-board inventory and strengthen baseline/practice mathematical-family repetition and examination-year routing without changing historical student work.

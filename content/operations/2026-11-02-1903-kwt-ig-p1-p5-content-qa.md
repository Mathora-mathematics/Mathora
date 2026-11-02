# MathsGrove content + Signature QA — 2 November 2026, 19:03 Kuwait

**Batch:** `20261102-1903`. **Pre-release status:** nine private Supabase practice questions staged as `draft`, `active=false`; **zero newly published pending CI**. No student assignments, submissions, uploaded evidence or examiner marks were edited. Confidential question content remains in private Supabase, not in the public repository.

## Official 2026/27 syllabus and examination requirements

- [Cambridge IGCSE 0580 2025–2027, v3](https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf): Extended objectives **E2.9(3–4)** (speed–time graph areas), **E6.6** (3D trigonometry) and **E2.12(2–4)** (stationary points). 2025–27 has dedicated non-calculator and calculator papers: this batch's 3D angle is calculator-style; speed–time area is also accessible without a calculator.
- [Pearson Edexcel IAL Mathematics specification (2018, Issue 3)](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf): **WMA11/01 Pure Mathematics 1**, §§1.2, 3.2 and 1.4–1.5. Calculator permitted; these are supplemental MCQs, not Pearson structured exam paper reproductions.
- [Cambridge 9709 2026–2027, v3](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf): **Paper 5 Probability & Statistics 1**, §§5.2, 5.1 and 5.3/5.5. Scientific calculator permitted; normal tables/standardisation expected.
- No official questions, mark schemes or copyrighted wording copied. Original contexts and original distractors. No IB cohort-year draft was mass-approved.

## New private practice drafts

| Exact route | Daily | Weekly | Exam |
| --- | --- | --- | --- |
| Cambridge IGCSE **0580 Extended** | `IG-D` piecewise speed–time distance | `IG-W` 3D line–plane angle | `IG-E` cubic local minimum |
| Pearson Edexcel IAL **WMA11/01 P1**, AS | `P1-D` rationalise surds | `P1-W` sector perimeter and area | `P1-E` parameter discriminant |
| Cambridge **9709 Paper 5 Statistics 1**, AS | `P5-D` restricted permutations | `P5-W` standard deviation from totals | `P5-E` conditional normal tail |

Full UUIDs, syllabus codes, provenance, timer estimates and modes are in [privacy-safe ledger](verified-original-batch-20261102-1903.json). Each item has four distinct choices, one correct key, original substantial worked solution, misconceptions and tutor marking guidance. **Drafts remain inactive until GitHub checks and deployment succeed.**

## Independent mathematical and editorial QA

- **SymPy 9/9** (exact area, cubic stationary classification, rationalised surd, sector, quadratic discriminant, restricted arrangements, standard deviation, conditional normal probability). Independent Python enumeration for restricted permutations; error-function evaluation for the normal tail.
- **Independent JavaScript 9/9**, plus explicit numerical interpretation of all 36 answer options: one correct per item, 36 unique within each item. **SQL 9/9** independent arithmetic checks. Four options/one key 9/9, substantial explanations and tutor guidance 9/9, KaTeX delimiter and brace balance 9/9. These syntactic checks do not replace screenshot-level browser KaTeX rendering.
- **Duplicate screening:** 2,184 existing private practice + 240 baseline + 10 materialised task snapshots = **2,434 previous records per item; 21,906 comparisons**. Zero exact-normalised duplicates, zero numeric-masked identical templates, zero token-Jaccard ≥0.76; maximum prior Jaccard **0.400**. **36** within-batch pairs, maximum Jaccard **0.2143**, zero rejects at threshold. No new item has been previously assigned.
- **Rejected/replaced candidate (1):** an initial P5 Weekly same-colour counters problem had structural similarity to existing same-colour draw problems (top Jaccard **0.556**, even though below automated 0.76 threshold). It was **rewritten before approval** into a different §5.1 standard-deviation problem, independently recomputed, and re-screened.
- **Board routing:** positive/negative tests 6/6 for Cambridge 0580 vs Pearson, Pearson WMA11 vs WMA12 and Cambridge 9709 P5 vs P6. `academic_level` separately enforces Extended/AS. **Known limitation:** generic `Cambridge 9709` approved content may still match P5 preferences; the exact-unit inventory below conservatively excludes it.

## Exact-board approved and active stock (before releasing these drafts)

The following **distinct exact-board/level/mode** counts exclude pilot and cross-board generic questions, unapproved drafts and ambiguous generic Cambridge 9709 unit content. `d/w/e` = Daily/Weekly/Exam, and shortfalls compare **112/32/188**. Daily and Exam additionally require **a separate 32-item Weekly unseen allocation**. A question eligible in more than one mode is not counted as multiple distinct items.

| Qualification / academic level | Exact board / unit | Approved d/w/e | Four-week shortfall d/w/e |
| --- | --- | --- | --- |
| A_LEVEL / a2 | Cambridge 9709 P6 Statistics 2 | 1/1/1 | 111/31/187 |
| A_LEVEL / a2 | Pearson Edexcel 9MA0 UK GCE | 5/5/5 | 107/27/183 |
| A_LEVEL / a2 | Pearson Edexcel IAL WMA13 P3 | 1/1/1 | 111/31/187 |
| A_LEVEL / a2 | Pearson Edexcel IAL WMA14 P4 | 1/1/1 | 111/31/187 |
| A_LEVEL / a2 | Pearson Edexcel IAL WME02 Mechanics M2 | 1/1/1 | 111/31/187 |
| A_LEVEL / a2 | Pearson Edexcel IAL WST02 S2 | 1/1/1 | 111/31/187 |
| A_LEVEL / as | Cambridge 9709 P4 Mechanics | 1/1/1 | 111/31/187 |
| A_LEVEL / as | Cambridge 9709 P5 Statistics 1 | 1/1/1 | 111/31/187 |
| A_LEVEL / as | Pearson Edexcel IAL WMA11 P1 | 2/2/2 | 110/30/186 |
| A_LEVEL / as | Pearson Edexcel IAL WMA12 P2 | 2/2/2 | 110/30/186 |
| A_LEVEL / as | Pearson Edexcel IAL WME01 Mechanics M1 | 1/1/1 | 111/31/187 |
| A_LEVEL / as | Pearson Edexcel IAL WST01 S1 | 1/1/1 | 111/31/187 |
| FURTHER_MATHS / further | Cambridge 9231 | 5/5/5 | 107/27/183 |
| FURTHER_MATHS / further | Cambridge 9231 P2 Further Pure 2 | 2/2/2 | 110/30/186 |
| FURTHER_MATHS / further | Pearson Edexcel 9FM0 4B Further Statistics 2 | 1/1/1 | 111/31/187 |
| FURTHER_MATHS / further | Pearson Edexcel 9FM0 Core Pure | 1/1/1 | 111/31/187 |
| GCSE / foundation | AQA 8300 | 3/3/3 | 109/29/185 |
| GCSE / foundation | Pearson Edexcel 1MA1 | 2/2/2 | 110/30/186 |
| GCSE / higher | AQA 8300 | 4/4/4 | 108/28/184 |
| GCSE / higher | Pearson Edexcel 1MA1 | 3/3/3 | 109/29/185 |
| IB_AA / hl | IB Diploma Programme | 2/2/2 | 110/30/186 |
| IB_AA / sl | IB Diploma Programme | 3/3/3 | 109/29/185 |
| IB_AI / hl | IB Diploma Programme | 3/3/3 | 109/29/185 |
| IB_AI / sl | IB Diploma Programme | 2/2/2 | 110/30/186 |
| IGCSE / core | Cambridge 0580 Core | 5/5/5 | 107/27/183 |
| IGCSE / core | Pearson Edexcel 4MA1 Foundation | 3/3/3 | 109/29/185 |
| IGCSE / extended | Cambridge 0580 Extended | 5/5/5 | 107/27/183 |
| IGCSE / extended | Pearson Edexcel 4MA1 Higher | 3/3/3 | 109/29/185 |
| TMUA / tmua | TMUA | 6/6/6 | 106/26/182 |

New drafts will increase the three targeted routes by **one in each mode** only after release. Counts are bank-wide and **upper bounds** for any individual learner; prior exposure, baseline equivalence and routing can only reduce their unseen availability.

## Signature private editorial

Created private **Signature Cambridge IGCSE 0580 Extended** original structured diagnostic `8b77c85c-eb08-4804-86d5-7aa1452a3a08`: three structured questions, nine parts, **24 marks**, 45 minutes, calculator permitted. Objectives E2.13 functions, E6.5 triangle geometry and E8.3–E8.4 probability. Full part-by-part method/accuracy/statement scheme, confidential question paper and human examiner report template. Independent SymPy and JS checked inverse/composite functions, cosine/sine rule and conditional probability; live SQL reconciled **9/9 part awards and 24/24 marks**. Status **`awaiting_human_moderation`**, moderator identity and timestamp NULL; no student-specific report released.

## Operational gates, security and unresolved defects

1. CI, routing, no-repeat, student evidence and examiner marking regressions, and website deployment must succeed **before** atomically approving the exact nine staged IDs.
2. No bulk flips of historical drafts; legacy 48 inactive drafts remain individually reviewable. No student records or human marks to be mutated.
3. Historical **four same-learner baseline-to-practice repetitions** remain unresolved. Exact-stem/ID no-repeat exists; future mathematical-family no-repeat is not guaranteed. Do not claim otherwise.
4. **Exact-component caveat:** generic Cambridge 9709 content can currently be selected for P5; this requires a carefully tested component-gating migration, not an unreviewed production hotfix.
5. These four-choice items are supplemental practice, **not** full multi-mark written mocks. Signature is a separate private multi-mark library, pending genuine human moderation.

**Pre-release live bank:** 2,193 total / 1,896 approved active / 240 active pilot / 57 inactive (including nine new drafts). Student aggregates: 35 tasks, 10 materialised items, 5 answers, 5 evidence rows, 10 human marks. All must remain unchanged.

## Final publication

**PENDING GitHub CI/deployment and conditional database activation.** Append verified URLs and counts only after live checks; never infer success from a draft or from a GitHub merge alone.

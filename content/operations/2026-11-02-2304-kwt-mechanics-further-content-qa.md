# MathsGrove mathematics content + Signature editorial QA — 2 November 2026, ~23:04 Kuwait

**Batch:** `20261102-2304`. This journal records work actually completed in this execution; it does **not** claim two hours of elapsed work. Private question stems, choices, answer keys, solutions, confidential Signature paper and student records remain in Supabase `nwakgkxytovprrrwyahs`, not in this public repository.

## Official qualification research (checked 2 November 2026)

- **Cambridge International AS & A Level Mathematics 9709, 2026–27, Paper 4 Mechanics:** [official 2026–27 syllabus](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), §§4.1 forces and friction, 4.3 momentum, 4.4 Newton's laws, 4.5 work/energy/power. AS mechanics component, calculator allowed subject to Cambridge rules. This is **not** Paper 5 Statistics.
- **Pearson Edexcel International AS/A Level Mathematics, WME01/01 Mechanics M1, 2018 specification Issue 3 used for 2026–27:** [official specification](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf), unit M1 §§3–6, and [official Pearson assessment format](https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics-2018.html). WME01 is not WME02. Calculator allowed, and use the question's stated `g` exactly.
- **Cambridge International Further Mathematics 9231, 2026–27, Paper 2 Further Pure Mathematics 2:** [official 2026–27 syllabus](https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf), §§2.1 hyperbolic functions, 2.2 matrices, 2.3 Maclaurin series. This is **not** Further Pure Paper 1. Calculator allowed subject to Cambridge rules.

Official sources were used for syllabus alignment only. No protected exam-question text or official mark-scheme wording was copied. Questions are original four-option MCQ practice; they are not multi-mark written board papers.

## Private practice draft staging

All nine items were first inserted with `review_state=draft`, `active=false`, exactly one key and four distinct answer options.

| Private ID | Exact qualification | Tier | Topic | Time |
|---|---|---|---|---:|
| `f1cc2fe0-cf83-4071-8be3-f2a7fdd1ce82` | Cambridge 9709 P4 Mechanics, AS | Daily | Signed collision momentum | 250 s |
| `060af1bd-4e16-450e-b20a-19ae03218e16` | Cambridge 9709 P4 Mechanics, AS | Weekly | Rough incline dynamics | 320 s |
| `bd44031c-6b90-435e-ac10-5b658517e0dc` | Cambridge 9709 P4 Mechanics, AS | Exam | Uphill power with resistance | 365 s |
| `e0ae02a3-c0dc-4233-9fa3-8ff34cbc662a` | Pearson IAL WME01/01 M1, AS | Daily | Uniform beam moments | 280 s |
| `3881a17c-f434-46af-a4ce-b87206832ed6` | Pearson IAL WME01/01 M1, AS | Weekly | Catch-up kinematics | 270 s |
| `44c20237-675f-4e96-a8f6-1337c09ef3c1` | Pearson IAL WME01/01 M1, AS | Exam | Connected particles on slope | 395 s |
| `67b61528-1b8a-497e-826f-2fd48f7d0e34` | Cambridge 9231 P2 Further Pure 2 | Daily | Hyperbolic cosine | 215 s |
| `f406647d-5dd0-40d1-8365-8730b309135f` | Cambridge 9231 P2 Further Pure 2 | Weekly | Trace of matrix power | 380 s |
| `3c883179-407e-4752-8ec4-f086e84d4b96` | Cambridge 9231 P2 Further Pure 2 | Exam | Maclaurin coefficient | 430 s |

Each item has a substantial full derivation, plausible misconception-linked distractors, syllabus objective and source, timer, units/domain/rounding as relevant, balanced TeX delimiters and tutor marking guidance. The independent mathematical outcomes are checked in [batch CI script](../../scripts/check-verified-batch-20261102-2304.mjs) without disclosing private answers.

## Mathematical, duplicate and routing QA

- Independent **SymPy 9/9**: exact rational arithmetic, dynamics, eigenvalue trace, hyperbolic identity and fifth-order series; additional independent Signature checks.
- Independent **JavaScript 9/9** arithmetic, physical units and alternative calculation; **SQL 9/9** after using a numerical tolerance for a recurring-decimal numeric comparison (strict SQL equality gave a false negative due finite numeric division; the exact rational identity is correct).
- Four unique options / exactly one correct key / complete explanations / board and timer metadata / TeX delimiter-and-brace syntax: **9/9 each**. Syntactic TeX checking does not prove visual KaTeX rendering in a browser.
- Prior private corpus: **2,202 practice + 240 baseline + 10 materialised assigned = 2,452 prior records per question**. **22,068 comparisons**; zero exact normalized-stem duplicates, zero numeric-masked stem duplicates, zero token Jaccard ≥0.76. Maximum prior Jaccard **0.5556**. Within-batch **36 pairs**, zero exact or numeric-masked duplicates.
- All **9** staged items match their exact qualification and unit; **0** incorrect-component matches against tested alternatives; **0** staged items previously assigned.
- Existing **48 inactive legacy drafts** were inspected by topic, length, metadata and status. Many have thin explanations (40–100 characters); six IB drafts have examination-year concerns. **No wholesale draft status flips**. New candidates rejected: **0**; nine passed preflight.
- Student aggregate before: **35 tasks / 10 materialised items / 5 answers / 5 evidence records / 10 human marks**. These records were not edited.

## Signature — private, not student-released

Private original Cambridge 9709 P4 **Signature** diagnostic `c4e5bbde-606c-4f8f-bf84-fa8b00729f3b`: three structured questions, nine parts, **24 marks**, 45 minutes. Covers signed inelastic momentum and impulse, rough inclined-plane acceleration, and motor power/efficiency. Full part-level mark scheme and report template stored **only in private editorial database**. All **24/24 criterion awards** reconcile with parts; independent SymPy/JS checks verify exact and rounded outcomes.

Status is **`awaiting_human_moderation`**, `human_moderated_by=NULL`, `human_moderated_at=NULL`. No human sign-off or student-specific marking/report release was fabricated.

## Four-week unseen inventory before this release

Counts below are exact board + academic level + mode, **approved and active only**, not drafts/pilot/generic cross-board or previously seen items. They are upper bounds on learner-unseen inventory. Daily needs 112 **plus 32 distinct Weekly**; Exam needs 188 **plus 32 distinct Weekly**. Cross-eligible entries cannot count as distinct twice.

| Exact route | Active D / W / E before | Deficit D / W / E before |
|---|---:|---:|
| Cambridge 9709 P4 AS | 1 / 1 / 1 | 111 / 31 / 187 |
| Pearson IAL WME01 M1 AS | 1 / 1 / 1 | 111 / 31 / 187 |
| Cambridge 9231 P2 Further Pure | 2 / 2 / 2 | 110 / 30 / 186 |

Pre-release **2,202 total / 1,914 approved active / 240 pilot active / 48 inactive**. After staging nine new drafts: **2,211 total / 1,914 approved active / 240 pilot active / 57 inactive**.

## Publication gate and follow-up

**COMPLETED:** GitHub PR CI, main-branch CI, learner no-repeat/evidence/human-marking regression, custom website and GitHub Pages deployment passed. The nine exact staged UUIDs were atomically approved and activated, then read back from live Supabase. No student assignment, answer, evidence, mark or report was modified. No new student assignment, answer, evidence, mark or report may be modified.

Known unresolved: **four historical baseline-to-practice repetitions**, mathematical-family learner no-repeat not proven, all routes below the four-week unseen target, six IB examination-year-uncertain drafts held, and no true full multi-mark written mock published through the four-option practice schema. The existing human examiner marking gate is preserved. Priority next cycle: strengthen no-repeat and continue understocked exact-component GCSE/IGCSE, IB AA/AI, A Level, Further and TMUA rotation.

## Final verified release — 2 November 2026, 23:15 Kuwait

**PUBLISHED: 9/9 approved and active in live Supabase**, activation timestamp `2026-11-02T20:15:36.863082+00:00`. A single conditional update activated exactly the nine previously staged IDs after all preflight checks. **9/9** intended board/component matches, **0** incorrect-board matches, **0** previously assigned new IDs. Final repeat screening again found **0 exact / 0 numeric-masked / 0 Jaccard ≥0.76 collisions** in 22,068 comparisons; maximum final prior Jaccard **0.4500**, within-batch maximum **0.2462** over 36 pairs. The initial pre-stage screening used slightly different candidate wording and reported maximum **0.5556**; both passes were below the rejection threshold. Strict SQL equality on repeating fractions was replaced with a justified tolerance of `10^-12`, not a mathematical answer change.

**Passed GitHub workflows for merged PR #52:** [PR mathematics/regression CI](https://github.com/Mathora-mathematics/Mathora/actions/runs/41516906258), [main mathematics/regression CI](https://github.com/Mathora-mathematics/Mathora/actions/runs/41516973037), [custom website deployment](https://github.com/Mathora-mathematics/Mathora/actions/runs/41516972938), [native Pages deployment](https://github.com/Mathora-mathematics/Mathora/actions/runs/41516973481). [Merged PR #52](https://github.com/Mathora-mathematics/Mathora/pull/52), merge commit `8d535e6b1a00237f62106be824afa6b65630acc3`. Subsequent ledger/journal audit-only commits may trigger additional CI/deploy runs, which must be checked independently.

**Post-publication bank:** 2,211 total; **1,923 approved active**, 240 active pilot, 48 inactive legacy drafts. Exact active Daily/Weekly/Exam stock and individual-mode deficits:
- Cambridge 9709 P4 Mechanics AS: **2/2/2**, shortfalls **110/30/186**.
- Pearson IAL WME01 Mechanics M1 AS: **2/2/2**, shortfalls **110/30/186**.
- Cambridge 9231 P2 Further Pure: **3/3/3**, shortfalls **109/29/185**.

These counts **do not** double-count generic eligibility as unique questions. Daily also needs 32 separate unseen Weekly questions; Exam also needs 32 separate unseen Weekly questions. Learner-specific unseen stock may be lower.

**Unchanged student aggregates:** 35 tasks, 10 materialised items, 5 answers, 5 evidence records and 10 human marks. Signature `c4e5bbde-606c-4f8f-bf84-fa8b00729f3b` remains private **`awaiting_human_moderation`**, with no authenticated examiner sign-off or released student report.

**Unresolved:** four historical baseline-to-practice repetitions, mathematical-family no-repeat not proven, six IB year-sensitive drafts held, every route understocked, and MCQ practice cannot be represented as a genuine full multi-mark written mock. No broad legacy-draft approval was attempted.

# MathsGrove · Signature + two-hour content programme

**Date:** 2026-11-02 · Asia/Kuwait  
**Live site:** https://mathora-mathematics.github.io/Mathora/  
**Private academic data:** Supabase project `nwakgkxytovprrrwyahs`  
**Repository:** `Mathora-mathematics/Mathora`.

## New operating cadence (confirmed by Automations)

- **Research / author / mathematically validate / publish** every two hours from 2026-11-02 **15:00** Kuwait time, then 17:00, 19:00, etc.
- **Independent maths and service QA** every two hours offset one hour from **16:00** Kuwait time, then 18:00, 20:00, etc.
- **Evening email** stays around **20:00** each day with truthful release and QA details, Signature progress, and website/portal/studio URLs.

A scheduled two-hour cadence is **not** guaranteed two hours of uninterrupted computation; each job must report actual completed changes, tests and blockers.

## Published live practice questions (this implementation)

**12 original mathematically checked MCQs** were added to the private approved question bank, with one distinct question each for Grove Daily, Weekly and Exam across:
- IB Mathematics **AA HL** — complex modulus, substitution integration, and cubic optimisation;
- IB Mathematics **AI SL** — compound growth, regression residuals, and conditional probability;
- Cambridge **9231 Further Maths** — complex conjugate roots, polar Cartesian conversion and matrix-equation reasoning;
- Pearson Edexcel IAL **WME01 Mechanics 1** — constant-acceleration displacement, applied friction, and connected particles.

Content provenance begins `mg-original-20261102-2h-`. Every question has an exact answer, four distinct plausible choices, nontrivial worked explanation, unique stem, subject/tier metadata, and a component-specific syllabus link, with programmatic independent arithmetic validation. Private answer keys/explanations are not copied to the public repo. These 12 are **not** enough for full board/tier coverage; especially advanced and entrance qualifications remain underfilled. We preserve the historical per-student unseen-bank exclusion.

### Unit routing gate

Migration `20261102_pearson_ial_mechanics_statistics_strict_units.sql` updates the existing private exam-board matching logic to ensure Pearson IAL **WME01 (M1)**, **WME02 (M2)** and **WST01 (S1)** questions only match compatible explicitly selected units rather than all IAL students. Existing WMA and WST02 guards remain in place. Future content cycles must check exact board+unit and that the student's preference is granular enough.

## Secure premium Signature editorial register

A new private table `private.grove_signature_editorial` stores structured **multi-part, multi-mark** original papers, separate confidential marking criteria and a six-section Signature report template. All data are private, RLS-enabled, inaccessible through direct public/anonymous access, and viewable via staff-only RPC authorisation.

**Three new ORIGINAL papers are staged, not yet human-approved and not student-assignable:**

| Signature offering | Study route | Original parts/paper | Total marks | Approx duration | Moderation |
|---|---|---:|---:|---:|---|
| Signature | AQA GCSE Higher 8300, non-calculator | 4 multi-part questions | 30 | 45 min | Awaiting human |
| Signature Advanced | Cambridge 9709 AS Pure Mathematics 1 | 3 multi-part questions | 25 | 45 min | Awaiting human |
| Specialist Reasoning | TMUA mathematical reasoning diagnostic (**not** a full official two-paper mock) | 3 multi-part questions | 20 | 40 min | Awaiting human |

The paper and scheme total marks were independently reconciled. Sampled original computations covered exact surds, rationalised denominators, quadratics, conditional without-replacement probability, binomial coefficients, circle tangent/intercepts and area, stationary points, integration, modular classes, discriminants, and proof-by-counterexample.

The administrator/examiner Studio's **Marking** panel now includes a **Signature assessment library** with an authorised review-only paper/mark-scheme viewer, full part-by-part scoring and syllabus references. The new `grove_staff_approve_signature` RPC requires a real authenticated examiner/admin, an independently checked 100+ character moderation note and server-side per-part mark checks. A human may explicitly moderate, but **editorial approval does not auto-create a student paper or release grades/reports**. Student assignment and examiner marking/release remain separate. No automated cycle is allowed to impersonate a human moderator or produce human-signed grades.

Files:
- `supabase/migrations/20261102_signature_editorial_private_library.sql`
- `supabase/migrations/20261102_signature_explicit_human_moderation.sql`
- `signature-editorial.js` / `signature-editorial.css`
- `scripts/check-signature-editorial.mjs` (included in GitHub Actions)
- `supabase/migrations/20261102_pearson_ial_mechanics_statistics_strict_units.sql`

## Required next research/QA work

- Expand every qualification and exam-component bank toward an actually **unseen** four-week question supply for all three tiers, not just generic total counts.
- Expand Signature paper and marking-scheme breadth across Pearson GCSE/IGCSE, Cambridge 0580 Core/Extended, AS/A2 Mechanics/Stats/Pure components, Cambridge and Pearson Further, IB AA/AI SL/HL and TMUA Specialist.
- Derive, independently re-solve and cross-mark full Signature structured assessment questions, including diagrams, mark conventions, method/accuracy/reasoning marks and domain restrictions.
- Build a **separate secure, assigned Signature student delivery and examiner grading workflow** before calling Signature end-to-end live. An editorial-only paper is not yet a Signature student sitting.
- Preserve non-repetition, student evidence, submitted answers, private answer keys and reviewer audit trails. Never add copyrighted official paper questions.

## Official spec sources checked 2 Nov 2026

- [AQA GCSE 8300](https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance): 80 marks, 90 minutes each, three GCSE papers; Paper 1 non-calculator.
- [Cambridge 9709 2026–2027](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf): distinct P1, P3, P4 Mechanics, P5/P6 Statistics components and scientific calculator conditions.
- [Pearson Edexcel International Advanced Level mathematics](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf): unit-specific P1–P4, S1/S2 and M1/M2 specifications.
- [International Baccalaureate DP mathematics](https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics): AA/AI SL/HL, current 2028-final assessment and separate curriculum for first assessment 2029.
- [TMUA official examination format](https://esat-tmua.ac.uk/about-the-tests/tmua-test/): TWO 75-minute no-calculator MCQ papers of 20 questions, not equivalent to the new supplemental written Specialist diagnostic.

**Verification boundary:** Database schema, content insertion, selected mathematics and staff API grants/RLS were tested. Running authenticated browser flows and human examiner moderation were **not** performed by an impersonated student/examiner. GitHub CI status must be checked after the latest commit.

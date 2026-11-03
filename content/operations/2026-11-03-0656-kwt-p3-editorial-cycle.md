# MathsGrove content editorial cycle — 2026-11-03 06:56 Kuwait

## Scope and live status
Supabase project `nwakgkxytovprrrwyahs`; repository `Mathora-mathematics/Mathora`. One original Pearson Edexcel International A Level P3 (WMA13/01), A2, Grove Weekly MCQ staged as **inactive draft** `a953c0c3-0416-42ee-bc31-29e1c15821b8`. Provenance `mg-original-20261103-0656-P3-trig-01`. No student tasks, marks, answers or human Signature moderation records modified.

## Source and year
Pearson Edexcel IAL Mathematics/Further Mathematics/Pure Mathematics Specification Issue 3 (2019), P3 unit, Trigonometry section 2.2 (sec²θ=1+tan²θ); WMA13/01, IA2, calculator permitted: https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf . Official document retrieved 2026-11-03; this document is not proof no newer issue exists. Entire question original.

## Original item and QA
Solve 2 sec²θ - 5 tanθ = 5 for -π/2 < θ < π/2. Let t=tanθ. Then 2t²-5t-3=(t-3)(2t+1)=0, hence solutions {-atan(1/2), atan(3)}. Independently computed in Python/SymPy: roots -1/2,3, angles approximately -0.4636476090 and 1.2490457724. JavaScript evaluated residuals for each option: correct pair [0,0], incorrect pairs [-5,0], [0,30], [0,-6] (floating point rounded). Four distinct option sets; one correct set. SQL checked four unique choices, exactly one matching key, 565-character worked solution, 716-character reviewer note, zero normalised exact duplicates in bank and zero exact matches in assigned task item stems. Mathematical-family near-duplicate exclusion is NOT established; do not infer learner-level unseen guarantee.

Tutor indicative five-mark breakdown: identity, quadratic substitution, factorisation, both roots, interval. Distractors test sign loss, negative tangent branch and incorrect quadratic root. Estimated 210 seconds. KaTeX delimiters and braces visually reviewed; browser rendering not exercised.

## Inventory deficits
Live exact WMA13 P3 board route before this draft: Daily 1, Weekly 1, Exam 1 approved active. Required standalone unseen: Daily 112, Weekly 32, Exam 188, plus a distinct Weekly stock of 32 for Daily and Exam. Hence before activation deficits Daily 111, Weekly 31, Exam 187, with additional Weekly requirements; cannot add counts as if one question were distinct across multiple modes. Cambridge 0580 has inconsistent board labels, so exact tier availability needs board-string normalisation before claiming sufficiency.

## Release gate and limitations
This journal records mathematical preflight and database draft insertion. Activation is conditional on CI and independent editorial routing/duplicate checks. No genuine multi-mark written mock published. Signature editorial library unchanged; human sign-off remains mandatory. The prior four historical baseline-to-practice repeats remain unresolved. Do not claim complete no-repeat protection or full two-hour execution.

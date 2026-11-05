# MathsGrove independent mathematics QA — 2026-11-05 18:04 Kuwait (UTC+03:00)

## Scope and live evidence
Read-only SQL against Supabase project `nwakgkxytovprrrwyahs`, specifically `private.grove_practice_bank`, `private.grove_tasks`, `private.grove_task_items`, and `private.grove_signature_editorial`. Queried latest GitHub commits in `Mathora-mathematics/Mathora`: latest visible commit at inspection was `cfb979d8b8b79fb01a542c3f9ab7c8704d850de4` (16:02 Kuwait QA). No complete question-level modification timestamps are available in the inspected bank schema, so counts alone cannot establish whether records were modified.

## Live counts
- Editorial bank: 2,236; approved active 1,942; pilot active 240; inactive 54.
- Approved records missing reviewer UUID: 1,942; approved explanations under 100 characters: 228 (heuristic only).
- Tasks: 35, of which 33 scheduled.
- Materialised assignments: 10, of which six approved and four pilot. Historical pilot routing exception persists.
- Signature editorial: 13 assessments, declared total 279 marks, zero with both human moderator UUID and timestamp.
- Across approved active bank, normalise prompt by lowercasing and removing non-alphanumeric characters: 516 duplicated-stem groups covering 1,659 question records; largest group has four records. This is a *risk signal*, not proof that 1,659 assignments are duplicates for a given student.

## Independent mathematical spot checks — five inactive drafts
1. `934a937c-477d-41b4-a5fa-c0508166b9e5` (IGCSE Pythagoras): 15²+36²=225+1296=1521=39²; 39 cm correct. Alternatives 36,42,51 incorrect. Explanation and units pass; objective 'Geometry' too broad to certify exact 2026–27 component.
2. `ad16b8a8-aa6e-4817-91c9-0d37139257ae` (GCSE consecutive integers): n²+(n+1)²=61 => n²+n−30=(n+6)(n−5)=0; n=5 under positive-integer condition. Choices 4,6,7 fail (41,85,113). Explanation passes.
3. `d2c453f5-9298-4c25-8304-f1aae0115929` (IB AA complex roots): arguments π/6,5π/6,3π/2 sum 5π/2. Other options π/2,3π/2,7π/2 incorrect. Sum should not be reduced modulo 2π. Exact syllabus and KaTeX browser rendering not independently certified.
4. `1c08a8b5-baf6-40cb-b6f9-560ff94a4eb3` (IGCSE compound percentage): 300×1.1²=363 pounds; distractors 360,330,390 wrong. Explanation passes; 'Number' too broad as syllabus reference.
5. `1919dd2f-b1b5-4cb5-bb61-6ce3ea412c14` (IGCSE discriminant): Δ=(-10)²−4(1)(26)=−4<0, so zero real roots; 1,2,3 incorrect. Explanation 'Completing the square gives a square plus one equal to zero, impossible for real x' is mathematically true but omits explicit (x−5)²+1=0, worked steps, and distractor rationale. **Explanation-quality hold**.

All five are inactive; no publication or status change. Mathematical spot-check passes do not constitute full certification. Official syllabus version, provenance, cross-bank mathematical-family duplication, actual browser KaTeX and authenticated student delivery remain unchecked.

## Signature sample independent recomputation
Latest visible assessment `3ef59933-e2ae-4168-bf71-7240e3fc6cfe`, 12 marks, awaiting human moderation:
- Differential equation y'=2x(y+2), y(0)=1: ln|y+2|=x²+C, y+2=3e^(x²), y=3e^(x²)−2; y(1)=3e−2. Five criteria in 1(a) and two in 1(b) reconcile to 7.
- Integral ∫₀¹(6x+2)e^(3x²+2x)dx: u=3x²+2x, du=(6x+2)dx, bounds 0→5, result e⁵−1. Five criteria reconcile to 5. Total 7+5=12.
- Correct mathematical steps and mark arithmetic for this assessment only. **Not** a complete independent re-mark of all 279 historical Signature criteria; no human examiner identity asserted, no grade/report issued.

## Uncertified controls and decisions
Student-by-student unseen question IDs, family-level repeat filtering, baseline/feedback adaptation, difficulty/tier/mode inheritance, Ready status, RLS effective isolation, photo/whiteboard access controls, examiner authorisation, server-authoritative timers, official 2026–27 syllabus mapping, copyright provenance, GitHub Pages CI, and full rendered KaTeX remain unverified in this run. No live changes were made. In particular, no questionable draft was promoted. Owner preauthorisation of fully verified original practice is acknowledged; there is no owner approval gate.

## Action priority
1. Resolve four pilot assignments and prove eligibility rules before certifying Ready.
2. Investigate duplicated normalised stems per student and exam-board context (516 groups).
3. Expand short/underspecified explanations and add precise syllabus references; certify in rendered browser before activation.
4. Independently verify every Signature part and preserve mandatory human moderation.
5. Run authenticated security and delivery tests; check GitHub Pages deployment before asserting a pass.

For established evening owner report; no separate email sent by this QA cycle.

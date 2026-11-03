# Independent Maths QA — 2026-11-03 10:03 Asia/Kuwait

## Scope and reproducibility
Read-only LIVE Supabase project `nwakgkxytovprrrwyahs` and GitHub repository `Mathora-mathematics/Mathora`. Prior journal baseline: 2026-11-03 08:00 Kuwait. No production mutations. All counts below obtained by SQL, not inferred from earlier reports.

## Publication delta
`select review_state,active,count(*) from private.grove_practice_bank group by 1,2`: approved active **1942**, pilot active **240**, draft inactive **48**, total **2230**. Compared with prior 1941/240/49, exactly one staged question transitioned to approved. Latest approved UUID `a953c0c3-0416-42ee-bc31-29e1c15821b8`; Pearson IAL WMA13 P3, trigonometric identities and equations, reviewed_at 2026-11-03 05:56:54 UTC.

### Independent mathematical recomputation (new publication)
Original equation `2 sec² θ − 5 tan θ = 5`, `−π/2 < θ < π/2`. Since cos θ ≠ 0 throughout interval, set t=tan θ, use sec² θ=1+t²: `2t²−5t−3=0=(2t+1)(t−3)`. Thus t=−1/2 or 3, yielding exactly `{−arctan(1/2), arctan(3)}`. Substitution: t=−1/2 gives 2(1+1/4)+5/2=5; t=3 gives 2(10)−15=5. Tangent is injective on stated interval. All four options inspected: A correct; B has wrong sign of first root; C has wrong sign of second root; D replaces 3 with 3/2. Distinct options; correct_text equals A. Explanation correctly accounts for domain and exhaustiveness. Source-level math delimiters and braces inspected, but browser KaTeX rendering **not** run. Official Pearson IAL mathematics 2018 qualification specification lists WMA13/P3 trigonometry; official current specification landing page: https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics-2018.html . Exact numbered subclause `P3.3 Trigonometry 2.2` not independently confirmed from primary PDF this run. Original-looking question; no formal copyright provenance determination.

### Duplicate and assignment checks
Normalised prompt (lowercase, strip nonalphanumeric) has **one** approved match including itself, hence zero other exact normalised matches. Student assignment SQL grouped by (student_id,bank_id) found **zero** repeated ID pairs. Ten materialised task items across 35 tasks / one student; zero missing bank references. Family-level digit-masked and semantic near-duplicate detection across all content, individual unseen supply and full Ready state not exhaustively verified. Do not interpret zero ID repeats as no conceptual repetition.

## Signature, evidence and editorial
10 Signature assessments, 243 declared total marks, all `awaiting_human_moderation`; zero approved/published without human_moderated_by. Part-level mathematical recomputation of every existing Signature part **not completed**; no claims of mathematical certification or human sign-off. Both storage buckets (`student-work`, `grove-student-exports`) have public=false; 5 evidence records; cross-user authenticated access and actual image upload not exercised. Approved practice records missing reviewer identity: **1942**; missing reviewed_at: **36**; explanations under 100 characters: **228**. Mark attribution null check returned zero in `grove_practice_marks`. Mock timer, RLS cross-user negative tests, runtime browser errors, current GitHub Actions workflow results and performance profiling not independently completed.

## Priority / disposition
**PASS (narrow):** latest published question mathematical answer, distractors, key, domain, explanation, source notation inspection, official component-level match. No quarantine justified for that item.
**OPEN:** editorial reviewer attribution; short explanations; mathematical-family diversity/Ready accuracy; real timed-mock completion; authenticated evidence/RLS tests; browser KaTeX and CI checks; Signature full per-part recomputation. Do not issue Signature reports or falsely label mocks Ready. No unverified drafts published and no student data altered. Findings available to existing evening owner report.

# MathsGrove content QA — 2026-11-03 08:56 Asia/Kuwait

## Release
Batch: 20261103-0856-WMA13-editorial-recovery. Supabase project: nwakgkxytovprrrwyahs. One pre-existing inactive draft individually checked and released: a953c0c3-0416-42ee-bc31-29e1c15821b8 (Pearson Edexcel IAL WMA13/01 P3, A2, Grove Weekly). Accepted: 1. Rejected: 0 new candidates (no new candidates authored). Approved/active read-back confirmed; 2026-11-03 05:56:54 UTC. No website code changes in this batch, so no new website deployment or CI claim.

## Official specification
Pearson IAL Mathematics Issue 3, unit P3 WMA13/01 (calculator permitted), https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf ; retrieved 2026-11-03. The PDF is labelled Issue 3, April 2019; a newer issue was not independently excluded.

## Independent QA
Solve 2 sec²θ − 5 tanθ = 5 on (−π/2, π/2). With t=tanθ and sec²θ=1+t²: 2t²−5t−3=(2t+1)(t−3)=0. Thus θ=−arctan(1/2), arctan(3), each unique on the interval. SQL recomputation residuals t=−0.5 and t=3 both zero; alternate t=0.5,−3,1.5 residuals −5,30,−6. Four distinct MCQ option strings and exactly one stored correct-text match. Explanation 565 characters; editorial provenance retained. Exact normalized match count 0 in baseline and assigned items; no other closely related secant/tangent prompt found in a targeted bank search. This is not a proof of general mathematical-family nonrepetition. No browser KaTeX screenshot test was performed; TeX delimiters inspected in stored content.

## Inventory after release
Exact exam_board Pearson Edexcel IAL WMA13 P3: approved active Daily 1, Weekly 2, Exam 1. Standalone four-week shortages Daily 111 of 112; Weekly 30 of 32; Exam 187 of 188. Daily and Exam also need their distinct 32-question weekly inventories; eligible student-specific unseen stock may be lower. Database-wide: 2,230 practice records; previously 1,941 approved active and 49 inactive, now expected 1,942 approved active and 48 inactive; these latter totals require aggregate read-back. This release does not fix prior historical repetitions or no-repeat family enforcement.

## Signature and safety
No Signature/Advanced/Specialist paper created or approved in this run. No human examiner moderation or student-specific report release. Student records untouched.

## Next
Prioritise WMA13/WMA14 and other thin exact-unit routes; review inactive drafts individually; implement robust family-level student no-repeat with regression tests. Do not represent MCQs as multi-mark written mocks.

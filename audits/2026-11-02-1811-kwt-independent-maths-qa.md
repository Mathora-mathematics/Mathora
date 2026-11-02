# MathsGrove — independent mathematics and platform QA
**Audit window:** 2 November 2026, run started 18:11 Asia/Kuwait (15:11 UTC)  
**Production:** Supabase project `nwakgkxytovprrrwyahs`; GitHub `Mathora-mathematics/Mathora`.  
**Method:** Live read-only SQL, latest GitHub Actions API, official board specifications, independent JavaScript calculations, and one narrowly scoped live SQL migration with read-back tests. No student records, marks, feedback, evidence or assignments were changed. No new mathematics questions were published in this QA run.

## Verified production fix — Pearson 4MA1 target-grade tiers

**Bug before fix:** `private.grove_target_grade_allowed('IGCSE','Pearson Edexcel 4MA1 Foundation','core','9')` returned **true**; `('IGCSE','Pearson Edexcel 4MA1 Higher','extended','1')` also returned **true**. The generic numeric 1–9 branch incorrectly ignored the examination tier. Official Pearson Edexcel International GCSE Mathematics A (linear 4MA1) permits Foundation **1–5**, Higher **4–9 with 3 allowed**. Official source: https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf

**Fix:** Changed only the grade-validation SQL function, preserving its Cambridge 0580, other GCSE/IGCSE, A-level, IB and TMUA branches. The new 4MA1 branch respects an explicit Foundation/Higher board label before generic level, and falls back to core/extended only for a 4MA1 label without an explicit tier. Unknown 4MA1 tier now fails closed. Empty optional grade retains prior behaviour. No Pearson 4MA1 students or target grades existed in the active preferences at the time of the change.

**Migration:** `supabase/migrations/20261102_1811_pearson_4ma1_target_grade_tiers.sql` (GitHub commit `8cf5a7d946517f9cc0a066041f9e79987e889f04`). Initial SQL deployment attempt failed with syntax error due to a text-generation `$'` substitution artifact; the migration file was corrected and the second deployment **succeeded**. Failed SQL attempt did not change the database. Live regression after successful deployment: **19/19 pass**, including both formerly accepted invalid targets, valid Foundation 1/5, Higher 3/9, explicit board precedence, unknown tier, and unchanged Cambridge 0580/A Level/IB/GCSE cases. No student table UPDATE or DELETE was performed.

## Newly published practice content — independent recomputation

Live `private.grove_practice_bank` contained **2,184** rows: **1,896 approved and active**, **240 pilot**, **48 inactive drafts**. Newest publication at `2026-11-02 14:21:06.742162+00`; exactly **9** items since 13:00 UTC, batch provenance prefix `mg-original-20261102-1709-`.

All **9/9** newly published items passed:
- independently recalculated answer using deterministic arithmetic/complex-number or recurrence reasoning;
- exactly four distinct MCQ choices, with one exact key match and no other mathematically equivalent choice;
- worked explanation agrees with the original prompt, units and domains;
- valid KaTeX-style inline mathematics where expressions occur; ordinary natural-language prompts do not need unnecessary math delimiters;
- appropriate qualification/board/topic, including AQA GCSE Higher 8300, Pearson IGCSE 4MA1 Foundation, and Cambridge Further 9231 Paper 2;
- no exact or digit-normalised family collision with other approved items in the same qualification/level for this batch.

**Reproducible independent arithmetic checkpoints:**
1. AQA recurrence (u_1=2,u_2=7,u_{n+2}=2u_{n+1}-u_n+6): (u_3=18,u_4=35,u_5=58).
2. Two dice, sum >8: 10 ordered outcomes, 7 with a six; conditional probability (7/10).
3. Independent 12-sector spinner, 7 non-red: ((7/12)^2=49/144).
4. Fourth roots of (-16): upper-half-plane roots (sqrt2(1+i)) and (sqrt2(-1+i)); sum (2sqrt2,i).
5. Reverse two 12% decreases: (19360/(0.88)^2=25000).
6. 48 notebooks at 1.25: cost 60, profit 12, retained (5/6) profit = 10.
7. (int_0^{ln3}cosh(2x),dx=rac12sinh(ln9)=20/9).
8. Scale 1:25,000, triangular 6cm by 4cm: base 1500m, height 1000m, area 75ha.
9. Upper triangular (3\times3) matrix with diagonal 2,3,4: (det(2A^{-1})=8/24=1/3).

A first strict JavaScript equality check falsely flagged spinner arithmetic due to IEEE floating-point precision ((5.55\times10^{-17}) difference); recomputation with (10^{-12}) tolerance passed. It also initially required KaTeX in a valid plain-language prompt; this check was corrected. **No student-facing content was changed or quarantined** because neither was a content defect.

Official 2026–2027 Cambridge Further 9231: https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf  
Official AQA 8300: https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance

**Bank structural checks:** 0 approved items with wrong choice count, 0 wrong/missing answer-key matches, 0 exact duplicate approved stems within qualification/level, 0 missing syllabus objective. **Editorial debt:** all 1,896 approved items have NULL `reviewed_by`; 36 have NULL `reviewed_at`; 228 explanations are shorter than 100 characters. These are NOT grounds to fabricate human reviewer identity; require truthful provenance and additional substantive checking.

## Student non-repetition and supply

Existing data: 35 tasks, 10 assigned question items. **Zero** repeated bank IDs and **zero** repeated exact normalised assigned stems per student. One **possible** digit-normalised family collision among assigned questions (heuristic, not proof of equivalence). Four distinct historical assigned question stems overlap baseline items (8 raw joins because baseline copies exist across routes); they were preserved, and current task-start code excludes new baseline duplicates.

For the currently active GCSE Higher AQA Grove Exam route (board label `AQA_8300`), after filtering previously assigned and baseline-matching items: **226 Exam**, **136 Daily**, **52 Weekly** eligible unseen items; only **16 digit-normalised heuristic families** in each tier. Raw supply does not guarantee diverse 20-question mocks. No simulated assignment was made, so a complete live journey and exact student-facing Ready status are not certified. The entitlement route function reported one enrolled active route `ready=true`; this indicates academic route and entitlement, **not** that the whole year's diverse question supply is guaranteed.

Of 36 grouped board/qualification/level routes in the approved bank, only 4 have the nominal raw thresholds of Weekly >=32, Daily >=112, Exam >=188 in the respective board-label groups (the four are cross-board banks). This is a raw descriptive grouping, not an exhaustive assignment eligibility test: cross-board inheritance, historical exposure, exact board compatibility and family variety change actual readiness.

**Known routing defect (not changed):** `private.grove_board_compatible('Cambridge 9709','Cambridge 9709 P4 Mechanics')` returns true, as does generic Cambridge 9231 into Paper 2. Component-specific 9709 P5/P4 and 9231 P2->generic tests reject incompatible direction. This generic-source loophole requires a versioned component-aware policy and compatibility regression suite before changing production routing; no rushed fix applied.

**Scheduling limitation:** `private.grove_assign_student` generates at most 28 days of practice, and recurring renewal remains unverified. A scheduled `mock` is treated by `public.grove_task_start` as a 90-minute practice MCQ task, not as a complete board-specific moderated mock with all its component rules. Do not advertise full official timed-mock parity.

## Baseline, target grades and feedback

Baseline bank: 240 active items, exactly 20 for each of 12 qualification/level routes; baseline is not further partitioned by exam board. `private.baseline_route` validates entitlement, route and accommodation; it permits calculator for all qualifications except TMUA (does not implement every board's individual non-calculator paper). `public.grove_task_start` enforces baseline completion, approved-only board/level selection, unseen ID/stem and non-baseline exclusion, target difficulty based on baseline score and recent released marks, and weekly inheritance for Daily/Exam. These are **code and data inspections**, not an authenticated end-to-end test.

`public.grove_student_insights` labels target grades as staff-set and baseline/practice marks as evidence, not official predicted grades. No official grade-boundary calibration was observed. Pearson 4MA1 target-grade range bug was fixed and retested above.

## Evidence, staff marking and Signature

Both `student-work` and `grove-student-exports` buckets are private. All **5/5** evidence records match storage objects; all five are whiteboards, no actual photo upload exists to validate. Storage INSERT policy delegates to `grove_evidence_upload_allowed`, which checks authenticated student ID, org, task/session, position, accepted image extension, active status and expiry. A live signed URL, cross-tenant penetration test or photo-upload transaction was not performed.

Ten existing practice marks have non-null marker identities, marks restricted to 0/1, and no released task has incomplete marks. Two task feedback records exist. No new staff marking was performed.

**Signature:** Five private staff-editorial papers, all `awaiting_human_moderation`, no human sign-offs. Independent SQL reconciled each paper's stated total, question marks, question-part marks, scheme marks, scheme-part marks and individual criterion awards: **30/30, 24/24, 25/25, 20/20, 24/24**. Independent JavaScript mathematics verified **31/31** numerical/symbolic checkpoints spanning surds, quadratics, conditional probability, calculus, geometry, projectile motion, centres of mass, collisions, Maclaurin series, hyperbolic functions, complex roots and divisibility. These checks are not a substitute for a human examiner's moderation. Staff-only RPCs check authenticated role, and `grove_staff_approve_signature` requires a substantial human moderation note and exact mark totals; it cannot be called by this automated audit to impersonate an examiner.

## Security, performance and runtime

All 43 listed public/private tables have RLS enabled. Security advisor: **51 WARN** authenticated-executable SECURITY DEFINER functions, **1 WARN** leaked-password protection configuration, and **24 INFO** private RLS-enabled tables with no direct policies (the latter can be intentional for private RPC-mediated tables). Review each privileged function rather than globally revoking necessary access. Performance advisor: **35 INFO** unindexed foreign keys and **2 INFO** unused indexes; assess real query plans before changes.

Unified Supabase logs, default trailing 24-hour window: 27 API edge responses at 4xx — **14 HTTP 404** and **13 HTTP 400**. Endpoint breakdown: **12** 404 for missing `finalize_expired_mock_sessions`, **2** 404 for `mock_packs`, **11** 400 for `grove_task_start`, **1** 400 for `grove_staff_mark_task`, **1** 400 for `auth/v1/token`. The 400 responses may include expected validation rejections; causes were not established. No 5xx appeared in this filtered 4xx/5xx group. These results reinforce that the old mock API is not deployed; they do not establish a security breach.

## GitHub Pages and limits

After the grade-function migration correction, **GitHub Actions completed successfully** at commit `8cf5a7d9`: Deploy MathsGrove website (run 41469612506), Pages build and deployment (41469610912), Verify original maths batch (41469612484). Earlier transient cancelled runs came from superseded commits. Direct external HTTP fetching of the live `portal.html` and `studio.html` was unavailable to the web fetch tool; CI success is **not** proof of authenticated browser, real photograph upload, complete mock, or cross-role permissions.

## Remaining actions (prioritised)

1. Implement actual board-specific Grove Exam mock backend and server timer/finalisation; eliminate stale 404 RPC/table calls, test expiry, no-answer leakage and multiple paper formats.
2. Fix component-level Cambridge 9709/9231 generic routing only with an explicit cross-component content policy and full regression suite.
3. Expand genuinely distinct original maths families across boards and tiers; avoid 20-question mocks with only 16 families, audit 228 thin explanations, record truthful automated QA provenance instead of fake human reviewer IDs.
4. Implement safe recurring scheduling beyond 28 days and accurate capacity-aware Ready messaging, preserving existing work.
5. Review privileged RPC execute grants, password protection, missing foreign-key indexes and test real photo uploads and cross-role RLS.
6. Human examiner to moderate Signature papers before any release; continue mathematical checking and private editorial preparation.

**No claim of a 30-minute continuous audit, full-browser test, manual human approval, complete mock flow or unverified mathematical publication is made.**

# MathsGrove independent QA — 2026-11-04 22:03 Asia/Kuwait

## Scope and live evidence
Read-only production SQL on Supabase project `nwakgkxytovprrrwyahs` and GitHub repository `Mathora-mathematics/Mathora`. Compared with the 20:01 QA journal and the 21:00 editorial commit `c0995ce52859aad68b0c54feb621d21216c7dcda`.

SQL inventory:
```sql
SELECT review_state, active, count(*) FROM private.grove_practice_bank GROUP BY 1,2;
SELECT count(*) FROM private.grove_tasks;
SELECT count(*) FROM private.grove_task_items;
SELECT count(*) FROM private.grove_task_items i JOIN private.grove_practice_bank b ON b.id=i.bank_id WHERE b.review_state <> 'approved';
SELECT review_state,count(*),sum(total_marks) FROM private.grove_signature_editorial GROUP BY 1;
SELECT count(*) FROM private.grove_signature_editorial WHERE human_moderated_by IS NOT NULL AND human_moderated_at IS NOT NULL;
```
Results: approved/active 1942; pilot/active 240; draft/inactive 54; total 2236 (unchanged from 20:01). Tasks 35; materialised items 10; four items reference unapproved pilot questions (historical exception still present). Signature editorial 12 entries, 267 declared marks, all awaiting human moderation; zero entries with both moderator identity and timestamp. The 21:00 cycle added one 12-mark specialist editorial paper, not a practice-bank approval.

## Independent mathematical and mark-scheme recomputation: specialist WME02 editorial ID 13a06ad3-6d1e-4ae6-8a23-0dc6b13e9f4d
Retrieved full live question_paper and mark_scheme JSON; checked all four parts, all seven mark criteria for Q1 and seven for Q2, and totals.

Q1(a), 2 marks: integrate a(t)=8t-6 => v(t)=4t²-6t+C; v(0)=7 => C=7. Differentiate to recover acceleration. Both criteria correct.
Q1(b), 3 marks: displacement integral from 0 to 2 of (4t²-6t+7) dt = [(4/3)t³-3t²+7t]_0² = 32/3-12+14=38/3 m. All three criteria correct.
Q2(a), 4 marks: momentum 2u_A+3u_B=12; restitution u_B-u_A=(1/2)(6-0)=3. Substituting u_B=u_A+3 gives 5u_A=3 => u_A=3/5, u_B=18/5 m/s. Check 2(3/5)+3(18/5)=12 and difference 3. Four criteria correct.
Q2(b), 3 marks: initial KE=(1/2)(2)(6²)=36 J; final KE=(1/2)(2)(3/5)²+(1/2)(3)(18/5)²=9/25+486/25=495/25=99/5 J. Loss=36-99/5=81/5 J. Three criteria correct.
Part and question marks reconcile: 2+3=5; 4+3=7; 5+7=12. No discrepancy found in the four mathematical solutions or 12 criteria marks. The paper remains private and awaiting authorised human moderation; this QA does not constitute human moderation or authorise student release.

## Limitations and controls
No new approved practice-bank questions identified by aggregate count, but modifications/replacements of approved rows cannot be excluded without row-level version/change history. The four historical pilot assignments remain. No authenticated end-to-end test of Ready status, baseline/feedback adaptation, unseen family supply, tier inheritance, RLS cross-student isolation, evidence storage, server mock timers, or browser KaTeX was completed. No independent official 2026–27 component-level syllabus or copyright provenance certification was completed in this run. GitHub Pages CI success was not checked. These are **not passes**.
No practice question activated, quarantined or changed. No student records, marks, moderation identities or reports modified. Verified originals remain preauthorised for publication after substantive checks, without an owner gate. Include this journal in the established evening report.

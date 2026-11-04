# MathsGrove independent QA — 2026-11-04 04:00 Asia/Kuwait

## Sources and baseline
Live Supabase project `nwakgkxytovprrrwyahs`, authoritative `private.grove_practice_bank`, `private.grove_tasks`, `private.grove_task_items`, `private.grove_signature_editorial`. GitHub default-branch latest operations commit `c36d210c10f8927c85bca5585aeec0e9175582a4` (03:00 KWT inventory audit). Previous QA commit `80df7bc28bc0e1e708a8fba7b0a2ea6ac18c4396`.

## Verified PASS
- Live bank grouped by review_state and active: approved/true 1,942; pilot/true 240; draft/false 48; total 2,230. No growth in approved count versus previous QA. IMPORTANT: 240 pilot rows are active; whether the serving query excludes pilot is NOT verified.
- Editorial counts: approved without reviewed_by 1,942; approved without reviewed_at 36; approved explanations under 100 characters 228. These are metadata/triage warnings, not proven answer defects.
- Tasks 35; materialised task items 10; distinct bank IDs 10; missing referenced bank IDs 0.
- Signature: 10 records, 243 declared marks, all awaiting_human_moderation, zero human_moderated_by.
- Independently recalculated three recently approved mathematical samples: P3 equation 2sec²θ−5tanθ=5 on (−π/2,π/2) yields tanθ=−1/2,3, hence −arctan(1/2), arctan(3); each of other three answer sets is wrong. Euler y'=x+y, y(0)=2, h=.2: y1=2.4, y2=2.92; 2.88,2.84,3.04 incorrect. 2sin²θ+sinθ−1=0 on [0,2π): θ=π/6,5π/6,3π/2; sum 5π/2, not 3π/2,2π,π. Explanation logic consistent with these calculations.

## FAIL / RISK / NOT VERIFIED
- **Critical release-control question:** 240 active pilot items are not approved. Verify serving query checks `review_state='approved'` as well as active before claiming only approved content can reach students.
- Latest operations journal independently identifies exact-component supply shortages for Pearson WMA14/WME02/WST02 and Cambridge 9709 P6; not independently recalculated in this QA.
- Full newly-published question diff not available from schema (no updated_at/created_at on bank). Count unchanged does not prove no approved swaps; this QA certifies only the three sampled questions, not every published question.
- Not checked: official 2026–27 specification subclauses, copyright originality, live KaTeX browser, per-student near-duplicate families and unseen availability, Ready rendering, tier/mode inheritance, feedback adaptation, authenticated cross-user RLS and storage uploads, mock timer enforcement, GitHub Pages CI.
- Signature per-part mathematical recomputation not completed. No moderation identity was assumed; no reports issued.
- No questionable draft activated; no publication or student-data changes.

## Reproducible SQL
```sql
select review_state, active, count(*) from private.grove_practice_bank group by 1,2;
select count(*) filter (where review_state='approved' and reviewed_by is null) unowned,
 count(*) filter (where review_state='approved' and reviewed_at is null) undated,
 count(*) filter (where review_state='approved' and length(explanation)<100) short
 from private.grove_practice_bank;
select (select count(*) from private.grove_tasks) tasks,
 (select count(*) from private.grove_task_items) items,
 (select count(distinct bank_id) from private.grove_task_items) distinct_ids,
 (select count(*) from private.grove_task_items i left join private.grove_practice_bank b on b.id=i.bank_id where b.id is null) missing;
select review_state,count(*),sum(total_marks),
 count(*) filter(where human_moderated_by is not null)
 from private.grove_signature_editorial group by 1;
```
## Decision
No verified new original batch to publish. Owner preauthorisation remains effective for originals that pass all gates; no owner signoff required. Prioritise investigating active pilot serving eligibility, exact-route shortages, and Signature mathematical verification. Include findings in established evening report.

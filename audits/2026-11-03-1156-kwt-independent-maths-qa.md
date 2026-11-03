# MathsGrove independent QA — 2026-11-03 11:56 Asia/Kuwait

## Scope and reproducibility
Live connected Supabase project `nwakgkxytovprrrwyahs`; GitHub `Mathora-mathematics/Mathora`. Read-only SQL and recent commit inspection. This is not a claim of full end-to-end certification.

SQL:
```sql
select (select count(*) from private.grove_practice_bank) total,
(select count(*) from private.grove_practice_bank where review_state='approved') approved,
(select count(*) from private.grove_practice_bank where review_state='approved' and reviewed_by is null) missing_reviewer,
(select count(*) from private.grove_practice_bank where review_state='approved' and length(explanation)<100) short_explanations,
(select count(*) from private.grove_signature_editorial) signature_total,
(select count(*) from private.grove_signature_editorial where human_moderated_by is not null) signature_moderated,
(select count(*) from private.grove_tasks) tasks,
(select count(*) from private.grove_task_items) assigned_items,
(select count(*) from (select task_id,bank_id from private.grove_task_items group by 1,2 having count(*)>1) x) repeated_ids;
```

## Live results
- Total 2,230 practice questions; 1,942 approved. 1,942 approved questions lack reviewer identity; 228 approved explanations under 100 characters (editorial review flags, not automatic proof of incorrectness).
- 10 Signature editorial records; zero human-moderated. No Signature release or grades authorised.
- 35 tasks, 10 materialised task items; zero repeated (task_id, bank_id) pairs. This does NOT establish no cross-task, family, baseline, or normalised-stem repetition.
- GitHub latest inspected commit `22b431d0ce5dbd6d53ea49b64acda8bd9f9c071a` at 11:01 KWT is a read-only inventory journal. It reports no new publication batch and exact-component shortages in WMA13/WMA14/WME02/WST02. Compared with 10:03 QA, approved count remains 1,942.
- No new published question was established since previous audit, so no newly published mathematical items were certified this run.
- No student content, question status, or marks changed.

## NOT verified this run
Full independent derivations for all historical questions and every Signature part; complete distractor checks; official current-year board subclauses; rendered KaTeX; cross-task mathematical-family deduplication; student-specific unseen supply and Ready status; baseline/feedback adaptation; authenticated cross-student RLS and photo uploads; server mock timing; copyright provenance; GitHub Pages workflow conclusions. Do not treat these as passes.

## Gate and priority
No auto-publication without reproducible maths, official component matching, original provenance, distractor/notation checks and family-level exclusions. Owner approval is not required for verified original practice; human Signature moderation is mandatory. Prioritise actual learner route supply and family-level no-repeat, plus short explanations and missing editorial attribution. Preserve staged drafts until evidence is sufficient.

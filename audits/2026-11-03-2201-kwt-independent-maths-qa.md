# MathsGrove independent QA — 2026-11-03 22:01 Asia/Kuwait

## Live sources
- Supabase project `nwakgkxytovprrrwyahs`, authoritative `private` schema; read-only SQL.
- GitHub `Mathora-mathematics/Mathora` recent commits queried. Latest observed `12207ee3de189dad1ca35f3cd31846e66c4dda21` (2026-11-03 17:58:40 UTC), documentation reconciliation.
- Comparison point: 20:04 Kuwait QA journal.

## Verified passes
- Bank: 2,230 records = 1,942 active approved + 240 active pilot + 48 inactive drafts. No newly reviewed questions after 2026-11-03 17:00 UTC; **no new approval batch requiring recomputation**.
- 35 tasks: 27 scheduled exam_daily, 4 scheduled exam weekly, 1 scheduled exam mock, 1 scheduled daily, 1 completed daily, 1 expired exam_daily.
- Ten materialised task items, zero missing bank references, zero repeated bank IDs, zero identical whitespace-normalised assigned prompts.
- Ten Signature editorial papers, 243 declared marks, all `awaiting_human_moderation`, zero recorded moderators. No student/parent reports released by this audit.
- All inspected tables in both `private` and `public` returned RLS enabled in the schema listing; policy effectiveness was NOT tested.

## Open risks and failures to certify
- **516 groups** of identical whitespace-normalised prompts across approved inventory; not proof of assignment duplicates; family-level near-duplicates not verified.
- **1,942** approved questions have null `reviewed_by`; **228** approved explanations have <100 characters.
- **One** scheduled task has `due_date < current_date`; not automatically proof of incorrect Ready UI; needs authenticated end-to-end verification.
- Did NOT independently test full individual unseen supply, baseline/feedback adaptation, tier inheritance, mock server timer, copyright provenance, 2026–27 official syllabus alignment, browser KaTeX, cross-student RLS/storage uploads, live Pages CI, or all Signature part-level mathematics and marks. Do not count these as passes.
- No question was newly published, quarantined or changed; no safe narrow correction independently established.

## Reproduction SQL
```sql
select review_state,active,count(*) from private.grove_practice_bank group by 1,2;
select id,review_state from private.grove_practice_bank where reviewed_at >= '2026-11-03 17:00:00+00';
select mode,programme,status,count(*) from private.grove_tasks group by 1,2,3;
select review_state,count(*),sum(total_marks),count(human_moderated_by) from private.grove_signature_editorial group by 1;
select count(*) from (select lower(regexp_replace(prompt,'[[:space:]]+','','g')) p from private.grove_practice_bank where review_state='approved' group by 1 having count(*)>1) z;
```

## Release policy
Original practice publication is preauthorised **only after** independent mathematical, answer-option, official component syllabus, duplicate-family, explanation and rendering checks. No owner approval gate. Signature reports/grades require an authorised human examiner and remain unreleased.

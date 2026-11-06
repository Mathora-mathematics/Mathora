# Independent MathsGrove QA — 2026-11-06 07:56 Asia/Kuwait

## Live evidence and reproducible SQL
GitHub most recent observed commit `7adfbc2bd7a0e49118f2019aa2c9ae41f8fa68b4` (operations documentation, 06:56 Kuwait); no new code or publication demonstrated by that commit.

Supabase project `nwakgkxytovprrrwyahs` read-only SQL:
```sql
select review_state,active,count(*) as n from private.grove_practice_bank group by 1,2 order by 1,2;
-- approved,true,1942; pilot,true,240; draft,false,54
select (select count(*) from private.grove_tasks) tasks,(select count(*) from private.grove_task_items) items,(select count(*) from private.grove_signature_editorial) signature,(select count(*) from private.grove_practice_bank) bank;
-- 35; 10; 13; 2236
select count(*) filter(where reviewed_at > now()-interval '2 hours') recently_reviewed,count(*) filter(where review_state='approved' and reviewed_at is null) approved_missing_review_time,count(*) filter(where review_state='approved' and reviewed_by is null) approved_missing_reviewer from private.grove_practice_bank;
-- 0; 36; 1942
select count(*) duplicate_groups,coalesce(sum(n),0) records_in_groups from (select lower(regexp_replace(trim(prompt),'\\s+',' ','g')) stem,count(*) n from private.grove_practice_bank where review_state='approved' group by 1 having count(*)>1) s;
-- 516; 1659
```
The 0 recently reviewed records is **not** proof of no new publications because the table has no created_at/updated_at fields; approved records can be modified without changing reviewed_at.

## Independently recomputed staged records (live current values)
- `3abf13fb-ec6e-4523-8d60-52428cdc1844`: dy/dx=2xy, y(0)=3 gives y=3e^(x²), y(1)=3e. Other choices 3e², 3+e, 3/e incorrect; derivative verifies. Holds: official specification/component mapping, full rendering and duplicates.
- `10ecade3-6797-4820-87ad-896e19337775`: 5/6 of 66=55, others 66/44/60 incorrect; explanation checks. Hold: objective only 'Number', calibration.
- `4faa7797-5922-490e-9d63-ae9964ae1d40`: 4x+7=31 -> x=6, alternatives 5,7,24 invalid; explanation checks. Hold: objective only 'Algebra', calibration.
- `dc872434-96b8-4420-a3c6-3f034733eea9`: 5x+7 over (x+1)(x+3) = 1/(x+1)+4/(x+3); integral 0..1 = ln2+4ln(4/3); alternative expressions invalid, denominators positive on interval. Hold: objective explicitly '2026 review pending'.

These are spot checks of existing drafts, **not** certification of every newly published question. The stored escaped LaTeX has not been rendered in an authenticated browser.

## Findings and disposition
- Confirmed unchanged aggregate inventory and duplicate-stem counts; duplicate stems are not necessarily duplicate mathematics or student exposures.
- No complete per-student assignment/history/normalised-family, difficulty, adaptation, tier, mode or Ready verification. No claim of supply sufficiency.
- No complete official 2026–27 board/component verification or copyright provenance clearance.
- No effective RLS/storage authorization tests, CI/Pages runtime, server timer or full Signature mark-by-mark checks. Signature human moderation remains mandatory; no examiner impersonation or grade/report issuance.
- Publication: zero; repairs: zero; no database writes. All four sampled questions remain staged. No owner approval gate imposed; only evidence-based QA release gates.
- Owner's existing evening report should include the persistent 516/1659 duplication exposure, 1942 missing reviewer IDs, 36 missing timestamps, and remaining release/assignment/security checks.

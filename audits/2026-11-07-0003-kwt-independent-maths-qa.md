# Independent MathsGrove QA — 2026-11-07 00:03 KWT

## Live sources and scope
Read-only SQL on Supabase project `nwakgkxytovprrrwyahs` and GitHub latest commit `bffad9d23e159c51123ba37cf39e9958eacdb248` (2026-11-06 22:57 KWT). This is a bounded inspection, NOT a certification of all production questions, every student route, or every Signature mark.

## Reproducible inventory SQL
```sql
select count(*) total,
 count(*) filter(where active and review_state='approved') approved_active,
 count(*) filter(where active and review_state='pilot') pilot_active,
 count(*) filter(where not active) inactive,
 count(*) filter(where review_state='approved' and reviewed_by is null) missing_reviewer
from private.grove_practice_bank;
select count(*) total, count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) fully_moderated from private.grove_signature_editorial;
select count(*) from private.grove_task_items;
select count(*) from private.grove_task_items i join private.grove_practice_bank b on b.id=i.bank_id where not (b.active and b.review_state='approved');
```
Results: 2236 total; 1942 approved active; 240 pilot active; 54 inactive; 1942 approved missing reviewer UUID. 14 Signature assessments; zero fully human-moderated. 10 materialised task items; four associated with records not both active and approved. Task status: 33 scheduled, one completed, one expired.

## Newly authored Signature draft — mathematical audit
Read back `4db43ea5-7378-4e03-a5aa-fd8bef3efd1e`, 10 marks, state `awaiting_human_moderation`. Q1a: (x²−9)/(x²+5x+6) = (x−3)(x+3)/((x+2)(x+3)) = (x−3)/(x+2) for x ≠ −3,−2. Q1b: (x−3)/(x+2)=2/5 ⇒ 5x−15=2x+4 ⇒ x=19/3, which respects both exclusions. Q2a: similar linear ratio 2:3 implies volume ratio 8:27, so 160×27/8=540 cm³. Q2b: 75%×540=405 cm³. Scheme: Q1 parts 2+3=5; Q2 parts 2+3=5; total 10. Each individual criterion mathematically consistent; units explicit for volume. These checks PASS. This is not authorised human moderation or complete official component certification.

## Failures / open risks
- Four historical assigned items are not both editorial-approved and active. They may be permitted pilots; route policy and student-level history must be inspected before declaring an assignment defect.
- All approved practice records lack reviewer UUIDs; do not infer absent human review solely from null metadata.
- No reliable created/updated timestamp in practice bank, so cannot exhaustively enumerate newly published items for the interval from this table alone.
- Official board/component syllabus page-level verification, full candidate key/distractor/KaTeX browser verification, near-duplicate families, personalised unseen supply, adaptive tier and Ready status remain UNVERIFIED.
- Effective RLS/SECURITY DEFINER permissions, student photo storage access, server mock timers, live Pages browser tests and copyright provenance remain UNVERIFIED.
- Signature: 14 records, zero fully human-moderated. The 13 older assessments were not rechecked mark-by-mark in this run. No grades/reports issued.

## Decisions
No questionable practice activated; no status, permissions, student records or marks changed. New Signature diagnostic remains in human-moderation queue. Owner preauthorisation of verified original practice is retained without approval gate. Escalate assignment eligibility and reviewer metadata in evening report.

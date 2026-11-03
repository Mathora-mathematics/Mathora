# MathsGrove independent QA — 2026-11-04 02:00 Asia/Kuwait

## Scope and evidence
Read live Supabase project `nwakgkxytovprrrwyahs` private schema and GitHub repository `Mathora-mathematics/Mathora`. Most recent observed repository commit before this journal: `87d2242139ab3f08f7580089f98aa4aa9199aecd` (editorial repairs/release holds). No question publication changes were inferred solely from repository commits; the live database counts below are authoritative for this snapshot.

## SQL results
```sql
select review_state,active,count(*) n from private.grove_practice_bank group by 1,2;
-- approved,true,1942; pilot,true,240; draft,false,48
select count(*) total,count(*) filter(where reviewed_by is null) no_reviewer,
 count(*) filter(where reviewed_at is null) no_timestamp,
 count(*) filter(where length(coalesce(explanation,''))<100) short_explanation
 from private.grove_practice_bank where active and review_state='approved';
-- 1942,1942,36,228
select review_state,count(*) n,sum(total_marks) marks,
 count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) moderated
 from private.grove_signature_editorial group by 1;
-- awaiting_human_moderation,10,243,0
select count(*) n,count(distinct bank_id) distinct_ids,
 count(*) filter(where b.id is null) missing
 from private.grove_task_items i left join private.grove_practice_bank b on b.id=i.bank_id;
-- 10,10,0
```

## Mathematics independently recomputed (recent approved sample; not full-bank certification)
1. Trigonometry: 2 sec²(t)-5 tan(t)=5 on (-pi/2,pi/2). Substitution u=tan(t) gives 2u²-5u-3=(2u+1)(u-3)=0, hence {-atan(1/2),atan(3)}. Both lie in domain, no other roots; three other listed answer sets differ from correct set.
2. Euler: y'=x+y, y(0)=2, h=0.2. y(0.2)≈2+0.2*2=2.4, y(0.4)≈2.4+0.2*(0.2+2.4)=2.92. Listed distractors 2.88,2.84,3.04 are distinct and incorrect.
3. 2sin²(t)+sin(t)-1=0 on [0,2pi): sin(t)=1/2 or -1. Solutions pi/6,5pi/6,3pi/2 sum 5pi/2; alternatives 3pi/2,2pi,pi incorrect.
These are independent algebraic checks, not browser-rendered KaTeX or independently documented official 2026-27 syllabus clause checks.

## Open gates and actions
No new approved batch observed relative to the preceding reported count of 1942; no approval, quarantine or production changes. No Signature release: ten records remain awaiting human moderation. The 1942 missing reviewer identities, 36 missing timestamps, and 228 short explanations are editorial risks, not automatic proof of incorrectness. Ten task-item bank IDs are distinct and valid; this does NOT prove family-level uniqueness, per-student unseen supply, tier/mode adaptation, or Ready status. Current GitHub Pages CI, official syllabus/copyright provenance, storage cross-user access, RLS effectiveness, server mock timers, photo/whiteboard handling, and full 92-part Signature mathematical recomputation remain unverified in this cycle. Do not label them passes. Keep questionable drafts staged; original fully verified practice can be published without owner approval. Include open findings in established evening reporting.

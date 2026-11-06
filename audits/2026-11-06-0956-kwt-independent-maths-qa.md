# Independent Maths QA — 2026-11-06 09:56 Asia/Kuwait

## Scope and provenance
Live read-only SQL on Supabase project `nwakgkxytovprrrwyahs` at 2026-11-06 06:57 UTC; GitHub repository `Mathora-mathematics/Mathora` recent commits inspected (latest observed `2e7e9b85e87aed3110aa04c6d271a56fa9090fa9`). This is a bounded audit, **not** full certification of every question or student route.

## Reproducible database findings
- `select review_state,active,count(*) from private.grove_practice_bank group by 1,2`: 1,942 approved active; 240 pilot active; 54 draft inactive; 2,236 total.
- Approved missing reviewer UUID: 1,942; approved missing review timestamp: 36.
- `select status,count(*) from private.grove_tasks group by 1`: 33 scheduled, one completed, one expired.
- `select count(*),count(distinct task_id) from private.grove_task_items`: 10 materialised items across two tasks. Scheduled tasks have no materialised items by count, but lazy materialisation is possible; authenticated Ready not tested.
- Signature: 13 editorial assessments, 279 declared marks, zero with both human moderation fields set.

## Independently checked sampled draft maths (not release certification)
- `3abf13fb-ec6e-4523-8d60-52428cdc1844`: dy/dx=2xy, y(0)=3. Separation gives ln(y)=x²+ln3; y(1)=3e. Distractors 3e², 3+e, 3/e differ; derivative verifies equation and condition. Mathematical pass. Official WMA14 component mapping and browser rendering not verified.
- `10ecade3-6797-4820-87ad-896e19337775`: (5/6)66=55; distractors 66,44,60 invalid. Mathematical pass; objective recorded only as 'Number', so hold.
- `4faa7797-5922-490e-9d63-ae9964ae1d40`: 4x+7=31 => x=6; alternatives 5,7,24 invalid. Mathematical pass; objective 'Algebra' too broad, hold.
- `0cdfe39f-5249-4cba-9d10-555680b48869`: (4+8+12)/3=8; alternatives 7,9,24 invalid. Mathematical pass; objective 'Statistics' too broad, hold.
- `b96c09bf-da0f-480b-b1b3-ecae14c8a7d8`: £70 ratio 2:3 => £28 smaller share; 14,42,70 invalid. Mathematical pass; objective 'Ratio' too broad, hold.
- `dc872434-96b8-4420-a3c6-3f034733eea9`: partial fractions 1/(x+1)+4/(x+3); integral from 0 to 1 is ln2+4ln(4/3). Three alternatives differ. Mathematical pass; syllabus objective explicitly says '2026 review pending', hold.

## Release and safety decisions
No activation or alteration of practice, student assignments, permissions or Signature marks. Six checked drafts remain inactive. No evidence sufficient to certify official current board syllabus, provenance, deduplication per student, actual authenticated Ready, adaptation, KaTeX in browser, RLS effective isolation, image storage, server mock timing or deployed UI. No Signature report issued. Do not equate sampled maths passes with complete release certification.

## Next checks
Capture precise official syllabus clauses and version, browser rendering screenshots, bank-family and student-specific unseen joins, authenticated tier/Ready pathways, effective RLS policy tests, complete Signature mark-by-mark independent recalculation plus authorised human moderation. Existing preauthorisation for fully verified original practice does not require owner sign-off.

# MathsGrove independent QA — 2026-11-05 16:02 Asia/Kuwait

## Live sources and scope
Read live Supabase project `nwakgkxytovprrrwyahs`, private schema metadata and practice, task-item and Signature aggregates; read prior 14:00 GitHub journal in `Mathora-mathematics/Mathora`. The first attempted SQL referenced a nonexistent `status` column; corrected to `review_state` and reran successfully. This is a partial audit, not certification of every newly modified record: practice table has no inspected modification timestamps.

## Reproducible SQL and results
`select review_state,active,count(*) n from private.grove_practice_bank group by 1,2 order by 1,2;`
Result: approved/true 1942, pilot/true 240, draft/false 54 (2236 total).
`select b.review_state,b.active,count(*) from private.grove_task_items i join private.grove_practice_bank b on b.id=i.bank_id group by 1,2;`
Result: approved/true 6, pilot/true 4. **FAIL/OPEN:** pilot items materialised in assignments.
`select count(*) n,sum(total_marks) marks,count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) moderated from private.grove_signature_editorial;`
Result: 13 editorial items, 279 declared marks, 0 with complete human moderation metadata.

## Five inactive draft mathematical spot-checks (not full release certification)
- `04eda30d-73f2-4b77-9000-34575004a348`: f(x)=3x+3, g(x)=x²−1. g(2)=3, f(3)=12. Key 12; distractors 9,15,6 all false. Explanation correct. **Math PASS; HOLD** generic Algebra syllabus mapping and no duplication/rendering certification.
- `08231b79-1369-4acb-a967-ebf6572d7097`: (3+4i)²=9−16+24i=−7+24i, real part positive. Key 3+4i; other three choices fail root or sign. Explanation correct. **Math PASS; HOLD** syllabus version, browser escaping and duplication not independently certified.
- `0cdfe39f-5249-4cba-9d10-555680b48869`: mean (4+8+12)/3=8. Distractors 7,9,24 incorrect. Explanation correct. **Math PASS; HOLD** broad Statistics syllabus label.
- `10ecade3-6797-4820-87ad-896e19337775`: (5/6)*66=55; 66,44,60 false. Explanation correct. **Math PASS; HOLD** broad Number label and low challenge level.
- `168e5cc5-77aa-43da-b4b7-4211d65102eb`: similar side ratio 1:5 implies area ratio 1:25, so k=25. Distractors 5,10,125 incorrect; independent example 3:75=1:25. Explanation sound. **Math PASS; HOLD** specific syllabus mapping present but official document, family duplication and browser rendering not verified.

## Uncertified and safety decisions
No evidence of newly approved records from unchanged counts; existing-record edits cannot be excluded. No full new-publication change feed. Per-student unseen IDs, normalized-family overlap, adaptation, tier/mode, Ready, copyright, authenticated RLS isolation, private evidence access, mock timers, staff-only Signature enforcement, CI deployment and every Signature part mark were **NOT certified**. RLS-enabled metadata is not proof of isolation. No human moderator impersonated; no student/parent Signature report or grade issued. No practice publication or quarantine action taken because full release evidence is absent; all five checked drafts remain staged. Owner preauthorisation remains valid for fully verified original practice, with no approval gate. Escalate four pilot assignments in established evening report.

# MathsGrove independent QA — 2026-11-05 14:00 Asia/Kuwait

## Scope and reproducibility
Live Supabase project `nwakgkxytovprrrwyahs`, schemas `private` and `public`, and GitHub `Mathora-mathematics/Mathora` queried in this run. Latest visible GitHub commit before this journal: `4f5bf0b94deed0fdd85b711be0df0e643036580b` (2026-11-05 09:03 UTC). No claim of exhaustive row-level change detection: the practice table does not expose created/updated timestamps in its inspected schema.

## Live inventory — PASS (counts only)
`select review_state,active,count(*) n from private.grove_practice_bank group by 1,2;`
- approved/active 1942; pilot/active 240; draft/inactive 54; total 2236.
- 35 tasks: 33 scheduled, one completed, one expired.
- Materialised task items: 6 approved/active and 4 pilot/active. **FAIL/OPEN**: pilot assignments remain.
- 516 groups of identical normalized approved prompts using `regexp_replace(lower(prompt),'[^a-z0-9]+','','g')`. This is a screening signal, not proof of 516 harmful duplicate families.
- Among approved: 1942 without reviewer UUID, 36 without reviewed_at, 228 explanations <100 characters. Metadata and editorial quality risk.

## Independently recalculated current inactive draft samples
1. `4faa7797-5922-490e-9d63-ae9964ae1d40`: Solve 4x+7=31. Subtract 7 -> 4x=24 -> x=6. Substitution 4(6)+7=31. Distractors 5,7,24 all incorrect. Explanation accurately addresses the intermediate value 24. **Mathematics PASS; RELEASE HOLD**: generic syllabus objective "Algebra", Higher label for a basic skill, duplicate-family/rendering checks not completed.
2. `10ecade3-6797-4820-87ad-896e19337775`: (5/6)*66=55; 66/6=11, 11*5=55. Distractors 66,44,60 incorrect. Explanation consistent. **Mathematics PASS; RELEASE HOLD**: generic "Number" objective, elementary skill under Higher, duplicate-family/rendering checks not completed.
3. `96d4ccf5-ede1-44aa-ae46-2349e5fcdb51`: 20% discount on £800: 800*(1-0.20)=£640; distractors 160,720,960 incorrect. **Answer and distractors PASS; explanation FAIL editorial depth**: current explanation only says multiply by 0.8, omits calculation, units and explanation of distractors. Remains inactive draft. Do not publish until repaired and fully checked.

No newly approved practice questions could be positively identified from aggregate counts or absence of row-level history; existing approved edits cannot be ruled out. Do not interpret these sampled checks as a full verification of all published questions.

## Signature
`select count(*),sum(total_marks),count(*) filter(where human_moderated_by is not null and human_moderated_at is not null) from private.grove_signature_editorial;`
13 editorial assessments, 279 declared marks, **zero with both human moderator and timestamp**. Complete independent part-mark recomputation of all 279 marks was NOT completed in this run. **HOLD**: no examiner impersonation, student/parent grade or report issuance.

## Uncertified (not passes)
Official current board/component specification mapping, exact LaTeX/KaTeX browser rendering, provenance/copyright, per-student unseen and near-duplicate families, baseline/feedback adaptation, tier and mode inheritance, Ready state, authenticated cross-student RLS isolation, evidence object access, server mock timers, staff-only Signature authorisation and latest Pages CI deployment. Table-level RLS enabled is not evidence of effective isolation.

## Actions
No production status, student record, Signature mark, or examiner decision changed. No questionable draft published. Practice publication is preauthorised after substantive checks; no owner approval gate. Escalate unresolved pilot assignments, duplicate families, weak explanation and missing review metadata via existing evening report. This journal is the run's audit record.

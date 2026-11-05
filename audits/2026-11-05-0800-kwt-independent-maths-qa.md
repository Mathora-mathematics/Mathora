# MathsGrove independent QA — 2026-11-05 08:00 Asia/Kuwait

## Live sources and scope
Read-only Supabase project `nwakgkxytovprrrwyahs`; GitHub repository `Mathora-mathematics/Mathora`, most recent inspected commit `aaa59911290e99d0173339230a77264dfc9b3b04`. No student identities or evidence downloaded.

## Corrected inventory: PASS
`SELECT review_state,active,count(*) FROM private.grove_practice_bank GROUP BY 1,2` returned 1,942 approved active, 240 pilot active, 54 draft inactive (total 2,236). `public.question_bank` is a **different** 10-row table and must not be mistaken for the editorial inventory. Previous 06:01 report was incomplete; reconciliation commit `aaa5991` correctly identifies private schema. No inventory change from preceding private-bank audit; this does not prove no item edits.

## Sampled draft arithmetic: PASS mathematics; HOLD release
- IGCSE fractions `eb3679d9-9de7-49ff-91ba-ec8398cc6729`: 5/6 × 72 = 60; distractors 72,48,65 incorrect. Explanation omits explicit 72/6=12 and 12×5=60.
- IGCSE right triangle `934a937c-477d-41b4-a5fa-c0508166b9e5`: sqrt(15²+36²)=sqrt(1521)=39 cm; distractors 36,42,51 incorrect. Explanation lacks worked substitution and units.
- IGCSE probability `6f1414c8-bd04-49b6-9a13-cb0274d1b85c`: (4/10)(3/9)=12/90=2/15; distractors 4/25,2/5,1/3 incorrect. Explanation adequate as a hint but not a full derivation.
All three remain inactive drafts. Syllabus-objective metadata is generic ('Number','Geometry','Probability'), not official objective-code and version evidence; family duplication, copyright provenance and KaTeX browser rendering not certified. Do not publish.

## Signature: HOLD
`SELECT COUNT(*) FILTER (WHERE human_moderated_by IS NOT NULL AND human_moderated_at IS NOT NULL),SUM(total_marks),COUNT(*) FROM private.grove_signature_editorial` returned 0 fully human-moderated, 279 declared marks, 13 assessments. **Declared marks are not independently recalculated in this cycle**. No authorised human examiner decision, grades or parent reports generated.

## Outstanding
Actual per-student assignments, unseen IDs, duplicate families, difficulty and baseline adaptation, tier/mode inheritance, Ready flags, authenticated RLS isolation, private photo/whiteboard access, server-authoritative mock timers, official 2026–27 component mappings, copyright provenance, GitHub Pages CI and staff-only Signature UI remain uncertified. Previous historical pilot-assignment exception is not closed by these queries.

## Change log
Accepted/published: 0. Quarantined: 0 (sampled drafts already inactive). Student data changes: 0. Signature releases: 0. Repository journal: this file. No false passes assigned to untested controls. Owner preauthorisation for fully verified original practice remains effective; no approval gate introduced.

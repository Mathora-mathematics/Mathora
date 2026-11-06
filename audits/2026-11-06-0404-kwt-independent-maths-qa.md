# MathsGrove independent QA — 2026-11-06 04:04 KWT

Scope: live read-only Supabase project `nwakgkxytovprrrwyahs` and GitHub `Mathora-mathematics/Mathora`. Previous QA commit `48c45c48147b1274babb53d6308da1c5eec1de0e`; most recent observed repository commit before this journal `f43f6df429f628036d17d13a4cc2a27add9bc725`.

## Reproducible SQL results
- `SELECT review_state,active,count(*) FROM private.grove_practice_bank GROUP BY 1,2`: approved/true 1942; pilot/true 240; draft/false 54.
- `SELECT status,count(*) FROM private.grove_tasks GROUP BY 1`: scheduled 33, completed 1, expired 1.
- `SELECT t.status,count(i.task_id) FROM private.grove_tasks t LEFT JOIN private.grove_task_items i ON i.task_id=t.id GROUP BY t.status`: scheduled 0; completed 4; expired 6. **Scheduled Ready is not certified**: assignment generation may be lazy, so do not infer zero available questions from zero materialised items.
- `SELECT count(*),sum(total_marks),count(*) FILTER (WHERE human_moderated_by IS NOT NULL AND human_moderated_at IS NOT NULL) FROM private.grove_signature_editorial`: 13, 279, 0.
- Approved questions: 1942 missing `reviewed_by`, 36 missing `reviewed_at`, 228 with explanations under 100 characters.
- Exact stem groups include four identical copies each of multiple arithmetic mean, percentage and simultaneous-equation prompts. Family-level and student-level de-duplication still open.

## Independent mathematics checks
- Staged surd `b22f0602-6c95-401c-a59b-0f440e307b99` repair persists: 450=225*2, so sqrt(450)=15sqrt(2); square verifies 450. Explanation now matches prompt; inactive remains false.
- Staged IAL P4 `3abf13fb-ec6e-4523-8d60-52428cdc1844`: dy/dx=2xy, y(0)=3 => y=3exp(x²), y(1)=3e; alternatives 3e², 3+e, 3/e are incorrect; explanation and positive initial condition valid.
- Staged GCSE `10ecade3-6797-4820-87ad-896e19337775`: 5/6 of 66=55; alternatives 66,44,60 wrong.
- Staged GCSE `4faa7797-5922-490e-9d63-ae9964ae1d40`: 4x+7=31 => x=6, alternatives 5,7,24 wrong.
- Staged GCSE `0cdfe39f-5249-4cba-9d10-555680b48869`: (4+8+12)/3=8, alternatives 7,9,24 wrong.
- Staged GCSE `b96c09bf-da0f-480b-b1b3-ecae14c8a7d8`: 70*(2/5)=28 pounds; alternatives 14,42,70 wrong.
- Staged GCSE `e223ae3c-31a9-4534-81f9-158995a8ae71`: 700*0.8=560 pounds; alternatives 140,630,840 wrong.
- Staged GCSE `45562148-3f16-4ac8-9c7d-d8eb6c1c28be`: sqrt(10²+24²)=26 cm; alternatives 24,28,34 wrong.
- Staged IAL P4 `dc872434-96b8-4420-a3c6-3f034733eea9`: (5x+7)/((x+1)(x+3)) =1/(x+1)+4/(x+3), integral 0 to 1 = ln2+4ln(4/3), correct and alternatives distinct.
- Signature latest `3ef59933-e2ae-4168-bf71-7240e3fc6cfe`: mark-scheme structure 5+2+5=12; differential equation y=3exp(x²)-2, y(1)=3e-2; substitution u=3x²+2x gives e^5-1. These criteria are mathematically consistent; this does **not** certify every historical Signature part, nor replace authorised human moderation.

## Release decisions and open controls
Zero questions activated: official current syllabus-objective mapping for broad GCSE objectives, full near-duplicate family screening, provenance/copyright, authenticated KaTeX rendering and student eligibility have not been fully evidenced. All sampled questions remain staged. No Signature report/grade issued. RLS effective policy isolation, storage access, mock timer authority, browser CI, per-student unseen supply, tier/mode and adaptation remain uncertified in this cycle. Previous security-advisor concerns (24 policyless RLS tables, 51 authenticated-callable SECURITY DEFINER functions) were not re-tested and must not be described as cleared.

No database writes, grade changes, or student-record modifications. Owner's prior authorisation to publish fully verified original practice remains valid; no owner approval gate imposed. Findings to be included in established evening report.

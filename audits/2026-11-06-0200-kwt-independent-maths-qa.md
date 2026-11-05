# MathsGrove independent QA — 2026-11-06 02:00 Kuwait

Source: live Supabase project `nwakgkxytovprrrwyahs`, live GitHub repository `Mathora-mathematics/Mathora`. This is a scoped audit, not complete certification of all published questions.

## Verified production facts
- `private.grove_practice_bank`: 1,942 approved/active; 240 pilot/active; 54 draft/inactive; 2,236 total (SQL grouped by review_state, active).
- `private.grove_tasks`: 33 scheduled, 1 completed, 1 expired. `private.grove_task_items`: 10 records. No authenticated per-student unseen/Ready verification this cycle.
- Approved questions: 1,942/1,942 have null reviewed_by; 36 have null reviewed_at. These are metadata risks, not proof of wrong answers.
- GitHub commit `4445012c34c276c68f78e7e4b0ad410a9df1d74b` added IB AA HL editorial log. Pages workflow run 42117238609 completed successfully; browser smoke test not performed.
- Supabase security advisor reports 24 RLS-enabled tables without policies and 51 authenticated-callable SECURITY DEFINER functions. RLS enabled without policies is not itself proof of exposure; definer functions require per-function authorisation review. No blanket revocation made.

## Reproducible mathematics and safe fix
- Draft `b22f0602-6c95-401c-a59b-0f440e307b99`: prompt 'Simplify √450', keyed 15√2. Previous explanation incorrectly discussed 50n². Correct calculation: 450=225×2=15²×2, so √450=15√2; (15√2)²=450. Updated explanation by conditional SQL WHERE id, active=false, review_state=draft, old explanation exact match. RETURNING confirmed change, retained draft/inactive. No publication.
- Draft `08231b79-1369-4acb-a967-ebf6572d7097` IB AA HL: z²=-7+24i with Re(z)>0. Let z=a+bi: a²-b²=-7, 2ab=24, a²+b²=25, hence a²=9, a=3, b=4. (3+4i)²=-7+24i; (-3-4i) has Re<0; (3-4i)²=-7-24i; (4+3i)²=7+24i. Key and all distractors pass. Draft/inactive; live KaTeX and global duplicates not tested.
- Five additional inactive records inspected: IAL P4 separation of variables y'=2xy, y(0)=3 -> y(1)=3e; GCSE fraction 5/6×66=55; GCSE 4x+7=31 -> x=6; mean (4+8+12)/3=8; £70 split 2:3 -> £28. All arithmetic passes. Broad GCSE syllabus_objective labels 'Number', 'Algebra', 'Statistics', 'Ratio' prevent exact specification certification. No publication.

## Outstanding, explicitly not certified
All newly published questions exhaustively, complete per-student unseen/family deduplication and adaptation, mode/tier inheritance, authenticated Ready status, official board/component syllabus across entire bank, KaTeX browser rendering, source copyright provenance, effective RPC/RLS cross-user isolation, photos/whiteboard access controls, server mock timing, and every Signature part-mark/human moderation record. No Signature grades or reports issued. No human examiner identity asserted. No questionable draft activated. The preauthorisation for fully verified original practice is acknowledged; it is not an exemption from substantive checks.

## Decisions
One narrowly scoped database explanation repair completed and confirmed. Zero activations, zero quarantines of active records, zero student/Signature writes. This journal is an audit record; GitHub Pages CI success does not certify application correctness. Findings to be included in the established evening owner report.

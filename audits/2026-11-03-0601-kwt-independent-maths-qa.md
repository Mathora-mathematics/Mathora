# MathsGrove independent QA — 2026-11-03 06:01 Kuwait (03:01 UTC)

## Scope and provenance
Live read-only SQL via connected Supabase project `nwakgkxytovprrrwyahs`, and latest commits via connected GitHub `Mathora-mathematics/Mathora`. Latest repository commit at inspection: `ce86d77ba306733958d842ac699b8d32e43a122b` (2026-11-03 01:57:37 UTC). No production mutation, quarantine, approval, or student record change performed.

## Reproducible observations
- `SELECT review_state,active,count(*) FROM private.grove_practice_bank GROUP BY 1,2`: approved active 1,941; pilot active 240; inactive draft 48; total 2,229. Unchanged from preceding QA, so no newly published batch identified after preceding audit.
- Most recent nine approved rows (ordered by `reviewed_at DESC NULLS LAST`) inspected: area between parabola and line (32/3); composite radical domain (x>=2/3); matrix invariant line (y=-x); Kruskal MST (14); polar area (9pi/4); complex modulus (5sqrt2); trigonometric solution sum (5pi/2); Euler iteration (2.92); graph edge deficit (7). All nine independently recalculated and correct. Choices have four distinct alternatives and a matching key in these rows; explanations contain the necessary calculations. This is a recheck of latest rows, NOT a new batch.
- `SELECT count(*) FROM (SELECT student_id,bank_id FROM private.grove_tasks JOIN private.grove_task_items ... GROUP BY 1,2 HAVING count(*)>1)`: zero repeated assigned question IDs (10 task-item records, 35 task records). This does NOT establish near-duplicate-family safety or full unseen inventory.
- `SELECT count(*) FROM (SELECT lower(regexp_replace(prompt,'\\s+',' ','g')) ... GROUP BY 1 HAVING count(*)>1)`: **516 distinct duplicated exact-normalized-prompt groups among approved bank entries**. This is a substantial inventory-level repetition risk. Groups may represent different tiers/boards and require detailed comparison before quarantining; do not interpret as 516 repeated student assignments.
- Approved reviewer attribution missing 1,941/1,941; 36 missing review timestamps; 228 explanations shorter than 100 characters. Length is a screening signal, not proof of incorrectness.
- 10 Signature assessments all `awaiting_human_moderation`; no authorised moderation inferred. Full per-part mathematical rederivation NOT performed in this run; must remain staged.
- Both storage buckets (`student-work`, `grove-student-exports`) have `public=false`. Private bucket flags alone do NOT prove policies, signed URL behaviour, or authenticated upload privacy.
- Tasks by route: Daily daily completed 1/scheduled 1; Exam exam_daily expired 1/scheduled 27; Exam mock scheduled 1; Exam weekly scheduled 4. Weekly tier has no live tasks in this sample; absence of tasks does not prove route broken.
- Latest GitHub commits fetched, but no full workflow-run status or browser/KaTeX render check obtained in this run. Server mock timer, RLS policy execution, grade adaptation, copyright provenance, staff marking transactions, storage photo upload and end-to-end Ready checks not independently verified.

## Actions and priority
No safe production correction identified from the evidence above. No unverified questions published or drafts approved. **Priority 1**: investigate the 516 duplicate-prompt groups by exam board/component/tier and family, and prevent equivalent questions entering the same student assignment; confirm correct Ready inventory after deduplication. **Priority 2**: reviewer attribution and short explanations. **Priority 3**: server mock finalisation and real authenticated evidence upload/RLS checks. **Priority 4**: independently rederive all Signature part schemes before human examiner moderation. Do not issue Signature grades automatically.

## Verification limitations
This run directly checked nine latest approved mathematical items, inventory aggregates, assigned-ID repeats, storage bucket privacy flags and Signature moderation states. It did not verify all syllabus source documents, render KaTeX in a browser, run authenticated student flows, or mathematically recompute all Signature parts. No unsupported pass is claimed.

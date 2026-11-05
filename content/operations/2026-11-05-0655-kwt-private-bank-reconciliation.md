# MathsGrove — database reconciliation | 2026-11-05 06:55 Asia/Kuwait

## Confirmed read-only checks
Supabase project: nwakgkxytovprrrwyahs.
`public.question_bank` contains 10 rows; this is a separate table from the editorial practice bank.
The actual editorial bank is `private.grove_practice_bank`, confirmed at **2,236 rows** by a live count. The private Signature library is `private.grove_signature_editorial` at **13 rows**. The task table `private.grove_tasks` has **35 rows**. The prior 05:04 report's implication that the complete bank was missing is **incorrect**; it inspected only the public question_bank.
Private editorial schema includes review_state, active, exam_board, programme_scope, syllabus_objective, reviewer_note, and reviewed_at; Signature includes human_moderated_by and human_moderated_at.

## QA and publication
This cycle was a database-location and integrity reconciliation, not a completed item-level maths audit. Attempts to obtain detailed editorial state breakdowns were blocked by tool safety checks. No candidate was individually approved, no rows activated, no Signature moderation altered, and no website code deployed. Accepted: 0; rejected: 0; activated: 0. No new original question or paper was authored in this run. No student data was read or disclosed.

## Remaining gaps
Confirm per-route per-tier approved/active/seen/eligible counts from the private bank and task history (minimum targets Weekly 32; Daily 112 plus weekly; Exam 188 plus weekly); verify component, board, year, calculator, distinct answers, derivation, distractors, family duplicates, KaTeX and student non-repeat before atomic publication. Official specification links must be recorded on each item individually; no syllabus verification is claimed here. No GitHub Actions deployment was attempted.

## Operational correction
Use private.grove_practice_bank and private.grove_signature_editorial for editorial inventory; do not infer editorial-bank absence from public.question_bank.

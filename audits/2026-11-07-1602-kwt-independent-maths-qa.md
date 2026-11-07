# MathsGrove independent QA — 2026-11-07 16:02 Asia/Kuwait

## Live sources and correction
Queried Supabase project `nwakgkxytovprrrwyahs`, specifically the **private** schema (the public.question_bank is a separate legacy ten-question bank, not Grove practice). The GitHub account has been renamed: connected canonical repository is `MathsGrove/Mathora`, not the historical `Mathora-mathematics/Mathora`. Read the previous 14:00 journal and inspected recent repository commits. No new practice activation is claimed.

## Live database counts
- Grove practice 2,236: 1,942 active approved; 240 active pilot; 54 inactive drafts (unchanged).
- 1,942 approved records have no reviewer UUID; 36 lack review timestamps; 228 approved explanations shorter than 100 characters (a screening flag, not proof of mathematical error).
- 41 tasks (38 scheduled), 16 materialised items; all 16 distinct exact normalised prompts and IDs. Four completed Daily items are active pilots; six completed and six expired Exam Daily items are active approved.
- Signature increased **19 → 20**; total declared marks **349 → 361**; zero assessments have both human-moderation fields populated.

## New Signature assessment — independent six-part check
ID `4dfa0b5d-0cc9-4ea1-8531-a067d9f83e23`, title *Original Specialist Review: Intersections and Probability*, 12 marks, `awaiting_human_moderation`, created 2026-11-07 12:05:29 UTC.
1(a) Equate `2x+1=x²−3x+5` → `x²−5x+4=0` (M1 A1, 2 marks). PASS.
1(b) `(x−1)(x−4)=0` → `x=1,4` (M1 A1, 2 marks). PASS.
1(c) `y=2x+1` → `(1,3),(4,9)`; independently substitute into curve: `1−3+5=3`, `16−12+5=9` (M1 A1, 2 marks). PASS.
2(a) Without replacement `(4/7)(3/6)=2/7` (M1 A1, 2 marks). PASS.
2(b) Different colours `(4/7)(3/6)+(3/7)(4/6)=24/42=4/7`; complement check: `1−2/7−1/7=4/7` (M1 A1, 2 marks). PASS.
2(c) `P(G_2 | Y_1)=4/6=2/3` (M1 A1, 2 marks). PASS.
Part marks 6×2=12; question marks 6+6=12; declared total 12. PASS. No units required. Official qualification/component/year specification alignment **not independently certified**. No authorised human moderation or student/parent Signature release.

## Repository and security status
Recent GitHub commits include `047845a` (live site smoke checks), `82284b4` (Supabase origin preflight), `c7945f4` (renamed Pages origin), `cf7aa8d` (Chromium layout smoke), `1d095f9` (autosave recovery). Commit combined-status API returned an empty status list; **do not interpret this as a passing deployment**. Authenticated browser checks, GitHub Actions job conclusion, effective RLS role isolation, photo/whiteboard access, mock server timers, copyright provenance, official board syllabus, and rendered KaTeX remain uncertified.

## Open issues and publication decision
No created_at/updated_at in private.grove_practice_bank, so exhaustive newly published practice deltas cannot be reconstructed from timestamps. Student-specific unseen supply, semantic near-duplicate families, feedback/baseline adaptation, mode/tier inheritance and actual Ready status remain uncertified. No new practice questions were independently exhaustively verified this run; zero activated or quarantined. No student data or grading changes. Original fully verified practice remains preauthorised without owner approval; questionable drafts must remain staged. Evening report should include the new Signature assessment and unchanged risk flags.

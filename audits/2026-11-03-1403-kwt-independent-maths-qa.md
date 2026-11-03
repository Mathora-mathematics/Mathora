# Independent MathsGrove QA — 2026-11-03 14:03 Asia/Kuwait

## Live evidence
- Supabase project `nwakgkxytovprrrwyahs`, read-only SQL at approximately 11:04 UTC.
- Practice bank: 1,942 approved, 240 pilot, 48 draft (2,230 total). No newly approved question observed relative to the 11:56 Kuwait audit.
- 1,942 approved rows have NULL reviewed_by; 228 approved explanations are shorter than 100 characters. These are flags, not proof of mathematical error.
- 35 tasks and 10 materialised items; 0 orphan bank references, 0 duplicate (task_id, bank_id) pairs, 0 repeated (student_id, bank_id) pairs. These tests do NOT prove no equivalent numerical families or that every task is Ready.
- Ten Signature editorial records; all `awaiting_human_moderation`, 0 human_moderated_by. Declared marks: 30+25+20+24+24+24+24+24+24+24 = 243. JSON question-paper shape is not `questions` at root, so this run did NOT recompute every part. No reports released.
- Recent draft `04eda30d-73f2-4b77-9000-34575004a348`: f(x)=3x+3, g(x)=x²−1; g(2)=3, f(3)=12. Options 12,9,15,6 distinct; only 12 correct. Exact whitespace-normalised match against approved prompts: zero. Still draft, because current official Cambridge 0580 component/year, near-duplicate families, browser rendering and routing were not fully verified.
- All 19 listed public tables have RLS enabled (metadata check only). Security advisor: 24 RLS-enabled/no-policy findings (mostly private schema, which can be intentional), 51 authenticated-executable SECURITY DEFINER warnings; no claim of exploitation. Authenticated cross-student access not exercised.
- GitHub main head `99a258a387859e52e5f7da82ade8e417f986bb5d` (2026-11-03 09:58:31 UTC). Website deployment run 41615358038 completed successfully at 09:59:01 UTC. Other workflows and end-to-end GitHub Pages content were not independently checked.

## Gates and action
No newly approved mathematics required certification in this interval. The draft was **not** published. No production question, student, examiner, security or storage records were modified. Browser KaTeX, photo upload, copyright provenance, timed mocks, per-student unseen mathematical-family supply, baseline adaptation, and complete Signature mathematical mark-scheme derivation remain unverified, not passed.

## Priorities
1. Resolve exact qualification/year and family/routing checks for draft before any publication.
2. Add mathematical-family-level duplicate and Ready checks across tasks and baseline.
3. Independently verify each Signature part against its full mark scheme before editorial certification; preserve authorised human moderation.
4. Review SECURITY DEFINER execute grants individually and perform authenticated role-isolation tests.

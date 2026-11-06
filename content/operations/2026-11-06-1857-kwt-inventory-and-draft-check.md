# MathsGrove editorial run — 2026-11-06 18:57 Asia/Kuwait

Batch: 20261106-1857-kwt-inventory-and-draft-check

## Live Supabase evidence
Project: nwakgkxytovprrrwyahs. Query grouped private.grove_practice_bank by programme_scope, review_state and active:
- Weekly: 339 approved active; 16 inactive drafts.
- Daily: 639 approved active; 19 inactive drafts.
- Exam: 964 approved active; 19 inactive drafts.
- All scopes: 240 active pilots, **not editorial-approved**.
Total 2236; approved-active 1942; inactive drafts 54. These are NOT per-board or student-eligible counts. A student-eligible question must additionally match qualification, examination board, component, level, curriculum year, subscription tier, and exclude task-history and future allocations. No per-route shortfall asserted.

## Individual draft QA (read-only)
- dc872434-96b8-4420-a3c6-3f034733eea9, Pearson Edexcel IAL WMA14 P4 A2, Daily: partial fractions  (5x+7)/((x+1)(x+3)) = 1/(x+1)+4/(x+3); integral from 0 to 1 = ln 2 + 4 ln(4/3). Differentiation check passes. Three other options represent swapped coefficients, missed lower bound, or sign error. **Withheld** pending official specification-year confirmation, near-duplicate/history screening and browser rendering.
- 3abf13fb-ec6e-4523-8d60-52428cdc1844, Pearson Edexcel IAL WMA14 P4 A2, Exam: y'=2xy, y(0)=3 gives y=3 exp(x²), y(1)=3e; derivative and initial value checked. **Withheld** for same checks.
- 10ecade3-6797-4820-87ad-896e19337775, Pearson Edexcel GCSE 1MA1 Higher, Weekly: 5/6 of 66 = 55; arithmetic correct, but poor representative Higher difficulty. **Rejected for activation**.
- 4faa7797-5922-490e-9d63-ae9964ae1d40, Pearson Edexcel GCSE 1MA1 Higher, Weekly: 4x+7=31 gives x=6, but too elementary and flagged as near-duplicate. **Rejected for activation**.
- 0cdfe39f-5249-4cba-9d10-555680b48869, Pearson Edexcel GCSE 1MA1 Higher, Weekly: mean(4,8,12)=8; correct but too elementary. **Rejected for activation**.

## Release and safety
Accepted for live publication: 0; rejected/withheld: 5. Supabase writes: 0. GitHub website code changes: 0; deployment not attempted. Signature paper releases: 0; human examiner approval never inferred. No fabricated student eligibility or browser QA. Official specification links not independently reverified this run. Follow-up: validate board-year component and normalize labels; query per-student task exclusions; test KaTeX in browser; then atomically publish individually cleared originals and verify readback.

# MathsGrove editorial sampling — 2026-11-06 03:01 Asia/Kuwait

Project: `nwakgkxytovprrrwyahs`; batch: `20261106-0301-KWT-sample`.

## Actual live checks
Queried `information_schema.columns` for `private.grove_practice_bank` and fetched three inactive draft records. Verified presence of `review_state`, `active`, `exam_board`, `syllabus_objective`, `programme_scope`, `reviewer_note`, and answer/explanation fields. This is a **three-record sample**, not an inventory audit.

- `dc872434-96b8-4420-a3c6-3f034733eea9`: Pearson Edexcel IAL WMA14/01 P4, Daily, partial fractions. Recomputed coefficients A=1, B=4 and integral ln(2)+4ln(4/3); arithmetic correct. Existing note explicitly lacks full syllabus-year, duplicate, task-history and browser checks. **Not activated.**
- `3abf13fb-ec6e-4523-8d60-52428cdc1844`: Pearson Edexcel IAL WMA14/01 P4, Exam, dy/dx=2xy with y(0)=3. Recomputed y=3exp(x²), y(1)=3e; other options distinct. **Not activated**, pending independent specification, duplicate, task-history and browser checks.
- `10ecade3-6797-4820-87ad-896e19337775`: Pearson Edexcel GCSE 1MA1 Higher, Weekly, 5/6 of 66. Answer 55 correct, but weak Higher-tier difficulty; should not be promoted as a representative Higher question. **Rejected for activation**, retained as draft.

## Safeguards and status
Accepted for activation: 0. Rejected/deferred: 3 (two incomplete eligibility/rendering/spec checks, one insufficient tier difficulty). Database mutations: 0. Website code changes: 0. GitHub Actions verification: not run. Signature papers released: 0; authenticated human examiner moderation remains mandatory. Official current syllabus URLs were not independently verified in this sample; do not infer compliance. Global approved/active/seen/eligible and per-student route shortfalls were **not computed**. No new original questions were authored or published. No student data or credentials accessed or included.

## Next actions
Perform current official syllabus and component checks, deduplicate against full bank and student assignment history, browser-test KaTeX, and compute eligible inventory by exact board/component/tier before any activation. Do not bulk-flip statuses. Signature assessments must remain awaiting authenticated human moderation.

# MathsGrove operational audit — 2026-11-05 19:02 Asia/Kuwait

Batch: 2026-11-05-1902-KWT-inventory-audit.

## Live evidence
Supabase project nwakgkxytovprrrwyahs; SQL read-only group by review_state, programme_scope, active:
- approved / active / weekly: 339
- approved / active / daily: 639
- approved / active / exam: 964
- draft / inactive / weekly: 16
- draft / inactive / daily: 19
- draft / inactive / exam: 19
- pilot / active / all: 240
Total: 2236; approved-active 1942; inactive drafts 54.

Table metadata: private.grove_signature_editorial has 13 records. This is not an approval or moderation count.

## QA and release
Individual draft retrieval was blocked by tool safety checks, so no candidate's complete mathematics, options, exact syllabus component, examination year, duplication, student history or KaTeX could be verified. No practice questions approved, activated or published; no Signature assessments or student reports released; no application code changed. Accepted: 0. Rejected: 0. Unreviewed: 54 drafts. No new question batch IDs. No GitHub Actions deployment claimed.

## Eligibility and deficits
The global counts are NOT per-board, per-component, per-student or unseen eligible stock. Targets are Weekly 32, Daily 112 plus weekly, Exam 188 plus weekly; exact shortfalls are unknown until route-level filtering and task-history exclusion. In particular, pilot-active items are not counted as editorial-approved.

## Follow-up
Obtain safe read access to individual editorial draft records, verify against current official specification and exact board/component, recompute each solution and distractor, check similarity/seen history and browser rendering, then publish only verified records with provenance and readback. Prioritise A Level/IAL, Further, IB AA/AI, TMUA, GCSE/IGCSE board-specific gaps. Signature remains human-moderated.

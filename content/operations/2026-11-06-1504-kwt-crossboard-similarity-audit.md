# MathsGrove editorial audit — 2026-11-06 15:04 KWT

Batch: 2026-11-06-1504-KWT-crossboard-similarity. Source: live private Supabase project nwakgkxytovprrrwyahs. No student PII or credentials exported.

## Live inventory
SQL count from private.grove_practice_bank: total 2,236; approved AND active 1,942; active but not approved 240; inactive 54. These are editorial counts, **not** per-route eligible or unseen inventory. Per-route shortfalls against Weekly 32, Daily 112 plus weekly, Exam 188 plus weekly are not verified.

## Candidate mathematical QA and duplicate-family screening
Candidate 168e5cc5-77aa-43da-b4b7-4211d65102eb: Cambridge IGCSE Mathematics 0580, Extended, Exam, similarity/area ratios. Prompt: corresponding side ratio 1:5, area ratio 1:k. Answer k=25. Independently recomputed 5²=25; triangle example with bases/heights (2,3) and (10,15) yields areas 3 and 75, ratio 1:25. Distractors 5 (linear), 10 (double), 125 (cube) are distinct and wrong. Candidate is draft/inactive.

**Cross-board near-duplicate detected:** bae2dafa-d096-4627-82b4-f4f7d7b7cfc1, Pearson Edexcel GCSE 1MA1 Higher Exam, has exactly the same sentence structure and asks for 1:k with side ratio 1:4. Both are draft/inactive. This is a shared item template with a numeric substitution; do not approve either as independently original without reauthoring and family-level screening. This finding does not imply a student has seen either item.

Cambridge 0580 2025–2027 official specification: https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf . E4.4 similarity is the recorded objective. External specification webpage was not re-fetched this run; year/component verification remains open.

## Signature moderation inventory
Live grouped query on private.grove_signature_editorial: Signature 4, Signature Advanced 5, Specialist Review 4. All 13 have review_state awaiting_human_moderation; zero have both authenticated human_moderated_by and human_moderated_at populated. No release.

## Publication and unresolved controls
Accepted for mathematical correctness: 1 existing Cambridge draft. Rejected for activation: 1 Cambridge draft (near-duplicate family) and 1 cross-board comparator (same family). New originals: 0. Database mutations: 0. Website deployments: 0. GitHub Actions success not asserted. Student-history no-repeat, full-bank semantic duplicate screening, route normalization, actual browser KaTeX check, current official component verification and per-student eligible counts remain unresolved. No approval or release claimed.

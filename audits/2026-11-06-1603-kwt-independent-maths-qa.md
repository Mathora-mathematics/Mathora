# Independent Maths QA — 2026-11-06 16:03 KWT

## Live sources and scope
Read-only SQL against Supabase project `nwakgkxytovprrrwyahs` private editorial tables; GitHub repository `Mathora-mathematics/Mathora`, latest pre-audit commit `ccac9643ee1f866da5e3e720759c2da7266fd77c` (15:04 KWT). This audit is **not** a comprehensive per-student, per-question, specification or security certification.

## Reproducible inventory
`SELECT review_state,active,count(*) FROM private.grove_practice_bank GROUP BY 1,2`: approved/active 1,942; pilot/active 240; draft/inactive 54; total 2,236.
`SELECT status,count(*) FROM private.grove_tasks GROUP BY 1`: scheduled 33, completed 1, expired 1.
`SELECT count(*),count(distinct task_id) FROM private.grove_task_items`: 10 assignments on two tasks.
`SELECT count(*) FROM private.grove_signature_editorial`: 13, declared total 279 marks, zero with both human_moderated_by and human_moderated_at.
For approved active bank: 1,942 reviewer UUIDs absent; 36 review timestamps absent; 228 explanations under 100 characters.
Whitespace-normalised, lowercased exact prompt duplicate query over approved active questions: 516 groups, 1,659 records (not evidence of per-student duplication).

## Independent mathematical checks (staged, not published)
- `3abf13fb-ec6e-4523-8d60-52428cdc1844`: dy/dx=2xy, y(0)=3. Separation gives ln(y/3)=x², y(1)=3e; distractors 3e², 3+e, 3/e all incorrect. Initial value ensures y>0. **Mathematics PASS**.
- `10ecade3-6797-4820-87ad-896e19337775`: (5/6)66=55; alternatives 66,44,60 incorrect. **PASS; weak Higher-tier fit**.
- `4faa7797-5922-490e-9d63-ae9964ae1d40`: 4x+7=31 => x=6; alternatives 5,7,24 incorrect. **PASS; weak Higher-tier fit**.
- `0cdfe39f-5249-4cba-9d10-555680b48869`: (4+8+12)/3=8; alternatives 7,9,24 incorrect. **PASS; weak Higher-tier fit**.
- `b96c09bf-da0f-480b-b1b3-ecae14c8a7d8`: £70/(2+3)=£14 per part; smaller 2 parts = £28; 14,42,70 incorrect. **PASS; weak Higher-tier fit**.
- `e223ae3c-31a9-4534-81f9-158995a8ae71`: 700(0.8)=560; 140,630,840 incorrect. **PASS**.
- `dc872434-96b8-4420-a3c6-3f034733eea9`: (5x+7)/((x+1)(x+3)) =1/(x+1)+4/(x+3); integral 0..1 = ln2+4ln(4/3); other options wrong. **PASS, official 2026 component verification pending**.

## Signature sample: independent mark consistency
Latest 12-mark P4 diagnostic `3ef59933-e2ae-4168-bf71-7240e3fc6cfe`: Q1 5+2=7 marks, Q2 5 marks, total 12. dy/dx=2x(y+2), y(0)=1 => y=3exp(x²)-2; y(1)=3e-2. Integral 0..1 (6x+2)exp(3x²+2x)dx = exp(5)-1. Each mark-scheme step and subtotal checked; **sample PASS**. The other 12 assessments / full 279-mark library were **not** individually recomputed. No human moderation metadata; do not release Signature reports.

## Holds and unresolved
No question activated. All seven inspected practice drafts remain inactive: official board/version/component source validation, student-specific unseen-family comparison, browser KaTeX, provenance/copyright and deployment checks not completed. The P4 draft explicitly says 2026 review pending. No student-level Ready/adaptation/tier certification, authenticated RLS/evidence-isolation test, server timer or current Pages CI certification. Scheduled tasks have no materialised items; lazy generation remains possible. No production database or permissions altered. No examiner grades or reports issued.

## Outcome
7 staged practice questions mathematically verified, 1 Signature 12-mark assessment sample recomputed; 0 releases; 0 production changes. Existing exceptions persist. Owner approval is **not** required for originals that actually pass every substantive release gate.

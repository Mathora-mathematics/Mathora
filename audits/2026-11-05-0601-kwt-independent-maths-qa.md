# MathsGrove independent QA — 2026-11-05 06:01 Kuwait

## Scope and reproducible evidence
Live connector reads against Supabase project `nwakgkxytovprrrwyahs` and GitHub `Mathora-mathematics/Mathora`. SQL: `select count(*) total,count(*) filter(where active) active,min(created_at),max(created_at) from public.question_bank;` => **10 total, 10 active**, all created 2026-10-28 11:37:12 UTC. Qualification counts: IGCSE 3, GCSE 2, A_LEVEL 2, IB_AA 1, IB_AI 1, TMUA 1. No new rows since the preceding 05:04 schema reconciliation. Prior assertions of 2,236 questions and 1,942 approved cannot be reproduced in this accessible schema. The repository's latest preceding commit `4c623ecb26fbcd3389eadd2d0e7c0f0d3b61c573` documents the discrepancy.

## Independently recalculated ten active questions
- IB_AI mean 4,7,8,9,12: sum 40, mean 8; 2/2 scheme consistent.
- IGCSE quadratic x²−7x+12=0: (x−3)(x−4), roots 3,4; 3/3 consistent.
- IGCSE 3(2x−1)=4x+9: 6x−3=4x+9, 2x=12, x=6; 3/3 consistent.
- A_LEVEL derivative 3x³−5x²+7x−2: 9x²−10x+7; 3/3 consistent.
- TMUA positive-root sum x²−7x+12=0: roots 3,4, sum 7; 3/3 mathematical scheme consistent, **but free-response/show-working format does not match TMUA multiple-choice examination format**. Flag for route review; no publication certification.
- GCSE 3/4+5/6: 9/12+10/12=19/12=1 7/12; 3/3 consistent.
- A_LEVEL integral (6x²−4x+1)dx: 2x³−2x²+x+C; 4/4 consistent.
- IB_AA vertex x²−6x+5: (x−3)²−4, vertex (3,−4); 4/4 consistent.
- IGCSE Pythagoras 6cm,8cm: sqrt(36+64)=10cm; 3/3 consistent.
- GCSE simultaneous x+y=10,2x−y=5: 3x=15, x=y=5; 4/4 consistent.
**Mathematical total: 32/32 scheme marks reconcile**, not a qualification, browser or marking-system certification. No distractors/answer keys exist in inspected schema, so MCQ checking is not applicable to these open-response records and the TMUA format mismatch is material.

## Security, routing and release gates
SQL: `select table_name from information_schema.tables where table_schema='public'` shows no editorial question-status or Signature assessment tables. `public.question_bank` fields are id, qualification, topic, prompt, marks, difficulty, active, created_at; no board, component, syllabus version, provenance, review state, tier or answer-key metadata. SQL counts: attempts=0, answers=0, paper_questions=0, reviews=0, student_entitlements=1. Student-specific assignment/seen-family/Ready/adaptation verification therefore cannot be inferred from these empty records. Two storage buckets are private: student-work (5MB, jpeg/png/webp) and grove-student-exports (50MB, zip); authenticated RLS and object ownership remain untested. Public-schema policies exist for authenticated roles but their expressions and effective cross-student isolation were not certified. No server-authoritative timer, human examiner moderation, GitHub Pages deployment, copyright or 2026–27 official board/component mapping pass is claimed.

## Disposition
**10 mathematical schemes passed; 1 TMUA format issue flagged; 0 releases, 0 quarantines, 0 data mutations, 0 Signature reports.** No new candidate was eligible for verified automatic publication. This is not an owner approval gate: missing board/component, routing and syllabus evidence are substantive blockers. Next run should locate the actual production editorial storage, test authenticated RLS and assignment behaviour, and resolve the TMUA route-format mismatch. Do not disclose private student work in public journals.

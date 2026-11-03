# MathsGrove independent QA — 2026-11-03 16:04 Asia/Kuwait

Scope: live Supabase project `nwakgkxytovprrrwyahs`, GitHub `Mathora-mathematics/Mathora`. Read-only inspection; no student personal data exported.

## Live checks (PASS / OPEN)
- PASS inventory: 2,230 private practice-bank records; 1,942 active approved, 240 other active, 48 inactive. Latest approved reviewed_at 2026-11-03 05:56:54 UTC. No newer approval identified relative to preceding 14:03 QA.
- PASS latest approved mathematical spot-check: Pearson IAL P3 secant/tangent equation. With t=tan(theta), 2t²-5t-3=(2t+1)(t-3)=0, giving theta=-arctan(1/2), arctan(3) uniquely on (-pi/2,pi/2). Three listed alternatives differ from this exact solution set. Explanation and domain agree. This is a RECHECK, not certification of every approved question.
- PASS current assignment referential checks: 35 tasks for one student; 10 materialised task items; no repeated (task_id,bank_id) pair and no dangling bank reference.
- OPEN readiness: zero tasks have literal status 'ready'; 33 scheduled, 1 expired, 1 completed. Two scheduled tasks have due_date <= database current_date. This does not establish UI Ready correctness; server/client date and eligibility need end-to-end testing.
- OPEN bank editorial provenance: 1,942 approved rows without reviewer UUID, 36 without review timestamp; 228 approved explanations shorter than 100 characters (length is only a triage heuristic).
- PASS Signature release safeguard: 10 editorial papers, declared total 243 marks; zero with human_moderated_by and zero approved/published. OPEN independent full mathematical derivation of every Signature part, and per-part mark scheme consistency, not completed in this run. No reports released.
- PASS evidence inventory: 5 private.grove_work_evidence rows; OPEN authenticated photo/whiteboard upload and storage-policy cross-user tests. Storage bucket-name filter '%grove%' yielded no rows and cannot prove bucket privacy.
- OPEN official syllabus year/component primary-source recheck, copyright provenance, full KaTeX browser rendering, mathematical-family near duplicates, unseen supply by student, baseline/feedback adaptation, RLS adversarial tests, mock timers, and current GitHub Pages workflow conclusion. No unsupported pass claims.
- GitHub latest observed commit before this audit: f70450dd830384cfdff92e4a4ce2a994a29bb7a7 (15:02 Kuwait editorial repair). The mean-question draft remained inactive according to that operation log. No new published question observed.

## Decisions
No verified new publication batch; no activation, quarantine, grading, or student-record changes. Preauthorised original practice publication remains permissible ONLY after mathematical, official component/year, duplicate-family, explanation, notation and routing gates pass. Signature requires a real human moderator.

## Reproducibility
SQL aggregate examples: `select count(*),count(*) filter(where active and review_state='approved') from private.grove_practice_bank;` `select count(*),count(distinct student_id) from private.grove_tasks;` `select count(*) from private.grove_task_items;` `select count(*),sum(total_marks),count(*) filter(where human_moderated_by is not null) from private.grove_signature_editorial;`

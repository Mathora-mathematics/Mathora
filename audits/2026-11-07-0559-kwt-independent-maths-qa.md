# MathsGrove independent QA — 2026-11-07 05:59 Kuwait

## Live readbacks
Supabase project `nwakgkxytovprrrwyahs` read at 2026-11-07 02:59 UTC. Repository prior QA journal `audits/2026-11-07-0357-kwt-independent-maths-qa.md` read successfully.

Practice bank: 2,236 total; 1,942 approved active; 240 pilot active; 54 inactive. Signature: 16 editorial assessments, zero with both human-moderation fields. Tasks: 35, materialised items: 10. No inventory change from prior journal.

## New clarification: completed Daily eligibility
Joined `private.grove_task_items`, `private.grove_tasks`, and `private.grove_practice_bank`: the four completed Daily items are **all active pilot questions** (0 approved), not missing or inactive records. The six expired Exam Daily items are approved and active. This resolves the classification ambiguity, NOT the policy question of whether pilot items are allowed in completed Daily tasks. Do not mark eligibility or Ready status certified without inspecting delivery policy and authenticated user context.

## Signature recheck
Latest editorial assessment remains `ded9a5d7-1a12-4638-883d-9e433420d656`, created 2026-11-07 00:04 UTC. Recomputed Q1: x(x+5)=84 -> (x+12)(x-7)=0, admissible width 7m, length 12m, perimeter 38m. Q2: P(blue-blue)=3/10*2/9=1/15; P(exactly one green)=2*(2*8)/(10*9)=16/45; P(red-red | neither green)=5/8*4/7=5/14. Stored mark criteria 2+3+1+2+2+2=12, each criterion consistent. No new Signature assessment since previous journal. All 16 still lack complete human moderation. No grade/report release.

## Security
Supabase security advisor still flags 24 RLS-enabled private tables with no policies (INFO). This alone does not prove exposure; effective schema privileges, SECURITY DEFINER boundaries, storage policies and authenticated isolation need dedicated tests. See https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy.

## Not certified
No new practice publication evidenced by inventory counts, but absence of practice creation/update timestamps and immutable publication log prevents proving no replacements or changed keys. No exhaustive per-student unseen/duplicate-family/adaptation/Ready check; no official 2026-27 syllabus/copyright, KaTeX/browser, CI, server timers or evidence storage end-to-end verification; no exhaustive recomputation of other 15 Signature assessments. These are open, not passes.

## Decision
No activation, quarantine or changes to student data, marks, permissions or moderation. No new mathematical error confirmed in rechecked Signature assessment. Fully verified original practice remains preauthorised for publishing without owner approval; insufficiently certified drafts remain staged. Findings available for established evening report.

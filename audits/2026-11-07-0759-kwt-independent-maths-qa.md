# Independent Maths QA — 2026-11-07 07:59 Asia/Kuwait

## Live evidence
- Connected Supabase project `nwakgkxytovprrrwyahs`, read-only SQL on `private.grove_practice_bank`, `private.grove_signature_editorial`, `private.grove_task_items`; GitHub latest commit `cd087ab1a77528d13f8dc5bb544982f6947bab3a` (07:01 Kuwait).
- Practice: 1,942 approved active; 240 pilot active; 54 draft inactive; total 2,236. Task items: 10.
- Signature: 17 assessments, 325 declared marks; zero with both human moderation fields completed.

## Newest Signature diagnostic 84db9774-a327-48f3-a82b-317c55746795
Title: Extended non-calculator diagnostic: linear sequences and surd manipulation. Created 07:01 Kuwait; 12 marks. Independently recomputed all five parts and every criterion:
- Q1(a) 3,8,13,18,... common difference 5; nth term 5n-2; two 1-mark criteria correct.
- Q1(b) 5(30)-2=148; one mark correct.
- Q1(c) 5n-2=203 => n=41 positive integer, yes 41st term; three marks correct.
- Q2(a) sqrt(72)-sqrt(18)+sqrt(8)=(6-3+2)sqrt(2)=5sqrt(2); three marks correct.
- Q2(b) 6/(sqrt(5)+sqrt(2))=6(sqrt(5)-sqrt(2))/(5-2)=2(sqrt(5)-sqrt(2)); three marks correct.
- Part marks 2+1+3+3+3=12; question totals 6+6=12. Mathematical and internal mark-allocation PASS.
- Human moderation NOT DONE; remains `awaiting_human_moderation`. Official board/component/version cross-check and rendering NOT CERTIFIED. No grade/report issued.

## Other checks / limitations
- Database has no created_at/updated_at on practice bank, so exhaustive identification of newly published practice cannot be demonstrated from these reads. No practice items activated or quarantined in this cycle.
- Student-specific unseen history, normalized-stem near-duplicate exclusion, tier/mode adaptation, authenticated Ready state, browser KaTeX, GitHub Pages deployment, server timers, photo/whiteboard storage authorization, effective RLS and copyright provenance were NOT tested to completion and are NOT passes.
- Public schema has explicit authenticated RLS policies on several tables; private schema policy absence alone does not establish access exposure. Effective role tests remain necessary.
- No database writes or examiner impersonation; verified original practice remains preauthorised once *all* publication gates pass.

## Outcome
PASS: five Signature parts, twelve marking points and totals. HOLD: Signature human moderation and specification/rendering certification. OPEN: practice publication provenance, per-student eligibility, deployment and security checks. No unsafe changes made. Include in established evening owner report.

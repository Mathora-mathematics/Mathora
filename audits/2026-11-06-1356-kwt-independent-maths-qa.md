# Independent Maths QA — 2026-11-06 13:56 Asia/Kuwait

## Live evidence
Read-only Supabase SQL against project `nwakgkxytovprrrwyahs` and GitHub commit search on `Mathora-mathematics/Mathora`. Prior most recent GitHub journal commit: `de1a3c54dcfb652462fd3ab0a6d88d0b747e8049` (12:58 KWT). No question state, permissions, grades, or student data changed.

## Database results
Practice inventory: 1,942 approved active, 240 pilot active, 54 inactive drafts (2,236 total). All 1,942 approved rows have null `reviewed_by`. 1,659 approved rows share a whitespace-normalised prompt with at least one other approved row (not proof of student repetition). 35 tasks: 33 scheduled with zero materialised items, one completed daily with four, one expired exam_daily with six. Signature: 13 editorial assessments; zero with both `human_moderated_by` and `human_moderated_at`.

## Independent mathematical spot-checks (all five inactive drafts)
- `3abf13fb-ec6e-4523-8d60-52428cdc1844`: dy/dx=2xy, y(0)=3 => y=3exp(x²), y(1)=3e; derivative 6x exp(x²)=2xy; distractors 3e²,3+e,3/e are unequal. Pass algebra; release HOLD pending complete verification.
- `10ecade3-6797-4820-87ad-896e19337775`: (5/6)*66=55; 66,44,60 are false. Pass arithmetic; HOLD, Higher difficulty mismatch and broad syllabus reference.
- `4faa7797-5922-490e-9d63-ae9964ae1d40`: 4x+7=31 => x=6; 5,7,24 false. Pass; HOLD for low challenge and family overlap.
- `0cdfe39f-5249-4cba-9d10-555680b48869`: (4+8+12)/3=8; 7,9,24 false. Pass; HOLD for Higher-level mismatch.
- `dc872434-96b8-4420-a3c6-3f034733eea9`: (5x+7)/((x+1)(x+3))=1/(x+1)+4/(x+3); integral 0..1 = ln2+4ln(4/3); remaining options differ. Pass algebra and interval positivity; HOLD for syllabus version and rendering checks.

These checks do NOT certify all recently published questions, the browser KaTeX output, official 2026–27 specification, student-specific unseen history, copyright, effective RLS, evidence storage, timers, or every Signature mark. Do not infer release eligibility from arithmetic spot-checks. No Signature reports issued.

## Release decision
Zero activations. No incorrect staged questions were promoted. The owner preauthorises publishing *fully verified* original practice without additional approval; none of these five cleared the full gate. Future checks should inspect actual student-level assignments and browser rendering and reconcile all Signature part marks against authoritative human moderation.

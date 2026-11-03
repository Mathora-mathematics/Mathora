# MathsGrove independent QA — 2026-11-03 20:04 Asia/Kuwait

## Critical correction to 18:58 operations note
The preceding operations note at `content/operations/2026-11-03-1858-kwt-live-schema-reconciliation.md` incorrectly inferred that the editorial bank was absent from the connected Supabase project by inspecting only the `public` schema. **The authoritative editorial tables are in the `private` schema of the SAME project** `nwakgkxytovprrrwyahs`. Its claim that 2,230 questions could not be substantiated is FALSE. Do not use that note to justify an unconditional publishing hold or schema migration. This correction is based on direct live SQL, not historical reporting.

## Reproducible live evidence
- `select review_state,active,count(*) as n from private.grove_practice_bank group by 1,2 order by 1,2;` => approved/true **1,942**, pilot/true **240**, draft/false **48**, total **2,230**.
- `select count(*) as signature_count,sum(total_marks) as marks,count(*) filter(where human_moderated_by is not null) as moderated from private.grove_signature_editorial;` => **10 assessments, 243 marks, zero human moderated**.
- `select count(*) from private.grove_tasks;` => **35 tasks**.
- `private.grove_practice_bank` has `exam_board,programme_scope,syllabus_objective,choices,correct_text,explanation,review_state,reviewed_at` columns, contrary to the 18:58 note's assertion about the available data model. The public question_bank is a separate 10-row legacy/broad qualification bank and must not be confused with the private Grove bank.

## Mathematical spot checks
Latest reviewed Pearson Edexcel IAL WMA13 P3 equation `2 sec²θ - 5 tanθ = 5`, `-π/2 < θ < π/2`: substitution `t=tanθ` gives `2t²-5t-3=(2t+1)(t-3)=0`, so exactly `{-atan(1/2),atan(3)}`; the four stored options are distinct and only the keyed option matches. Latest reviewed IB AI Euler example `y'=x+y,y(0)=2,h=0.2`: `y(0.2)≈2.4`, `y(0.4)≈2.92`, agreeing with stored key; distractors 2.88, 2.84, 3.04 differ. Cambridge 9709 P1 `2sin²θ+sinθ-1=0`, `0≤θ<2π`: solutions π/6,5π/6,3π/2 sum 5π/2; stored key matches.

## Release decision and limits
No new approved publication detected compared with the 18:00 audit. **No publication, quarantine or student/Signature changes performed.** There is NO blanket schema-related publication block; original questions remain preauthorised for publishing once individual mathematical, current official specification, duplicate-family, provenance and rendering checks pass. These gates were NOT completed for any new draft in this run. Full student-specific unseen supply and Ready status, all Signature part derivations, authenticated RLS/photo tests, live Pages CI and browser KaTeX remain unverified. Do not call them passes. No human Signature moderation recorded; no reports released.

## Follow-up
Correct the misleading operations note by pointing to this journal, inspect private-schema data in all subsequent cycles, and continue targeted release QA without owner approval bottlenecks. Evening report should prominently communicate this correction.

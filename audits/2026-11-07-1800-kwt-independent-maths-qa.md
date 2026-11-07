# MathsGrove independent QA — 2026-11-07 18:00 Asia/Kuwait

## Source verification
Read LIVE Supabase project `nwakgkxytovprrrwyahs` private schema and the prior 16:02 QA journal in connected canonical GitHub `MathsGrove/Mathora` (historical `Mathora-mathematics/Mathora` path does not resolve through connector). This report distinguishes independent mathematical verification from untested production behaviours.

## Inventory delta
Practice unchanged: 2,236 total, 1,942 active approved, 240 active pilot, 54 inactive. Tasks unchanged 41 (38 scheduled), 16 materialised assignments: four completed Daily pilot items; six completed Exam Daily approved and six expired Exam Daily approved. Signature 20 -> **21**, total declared marks 361 -> **373**; 0 of 21 have both human moderation fields populated.

## New Signature diagnostic, independently verified
ID `60fae077-a5e9-499f-a58e-47c7210f77a2`, *P4 Integration and Differential Equations — Original Diagnostic B*, created 2026-11-07 14:05:42 UTC; 12 marks; state `awaiting_human_moderation`.

Question 1 (6 marks):
- 1(a), 4 marks: choose u=x, dv=e^(2x)dx; du=dx, v=e^(2x)/2; integration by parts yields F(x)=xe^(2x)/2-e^(2x)/4+C. Differentiate F: e^(2x)/2+xe^(2x)-e^(2x)/2=xe^(2x). PASS, each of M1 A1 M1 A1 coherent.
- 1(b), 2 marks: F(1)=e²/4, F(0)=-1/4, hence I=(e²+1)/4. PASS, M1 A1 coherent.
Question 2 (6 marks):
- 2(a), 4 marks: dy/(y+2)=3x²dx, ln|y+2|=x³+C. Initial y(0)=1 implies y+2>0 on the real solution; y=3e^(x³)-2. Differentiate: y'=9x²e^(x³)=3x²(y+2); y(0)=1. PASS, M1 A1 M1 A1 coherent. Note logarithm absolute-value condition correctly accounted for by positive initial data.
- 2(b), 2 marks: y(1)=3e-2. PASS, M1 A1 coherent.
- Part allocations 4+2+4+2=12, question totals 6+6=12, declared 12. PASS. No physical units involved. Mark scheme and worked explanation internally consistent. The plain-text notation was checked mathematically, but rendered KaTeX not tested.

## Certification and safety boundaries
No authoritative official 2026–27 board/component specification comparison was completed for the new P4 item, so its precise qualification mapping remains **uncertified**. This is Signature editorial, not auto-release practice. It remains staged awaiting an authorised human moderator; no Signature marks or student/parent grades released. Other 20 Signature assessments not individually recalculated this cycle.

No practice-bank publication timestamps exist to exhaustively identify newly changed practice records. No practice record was certified for activation this cycle. Student-specific unseen IDs, semantic families, adaptation, tiers, Ready status, copyright provenance, evidence storage, effective authenticated RLS isolation, server timers, GitHub Pages Actions success and browser rendering remain unverified. Security advisor reports 24 RLS-enabled/no-policy findings (not proof of exposure) and 51 authenticated-executable SECURITY DEFINER warnings (require role-by-role authorisation review). Do not bulk revoke grants without tracing legitimate RPC dependencies.

## Actions
No practice activated or quarantined, no student data or marks modified, no examiner impersonation. No new owner approval gate introduced. Include new Signature delta and security warnings in established evening report.
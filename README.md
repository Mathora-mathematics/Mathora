# MathsGrove

**MathsGrove** is a premium mathematics practice and examiner-assessment platform for tutoring companies. Its identity is midnight navy, champagne gold and warm ivory.

## Safety and status

- The main branch contains the MathsGrove website preview. Original Mathora lesson code remains in Git history and is not loaded on the new homepage.
- The public site currently provides a navy-and-champagne MathsGrove development preview.
- The student, examiner, partner and report demos run **only in browser memory**. No real storage, login or automatic marking is connected yet.
- **Do not upload real student data.** Demo photography is only previewed locally.
- Existing Year 10 lesson sources remain in this repository for archival reference; preserve historical commits for rollback.

## Files

- index.html — new MathsGrove homepage and example workspace
- mathsgrove.css — responsive premium styling
- mathsgrove.js — public interactive demonstration; browser-only, with no student data storage
- portal.html, portal.css, portal.js — invitation-only individual dashboards, qualification selection, private submissions and partner review when Supabase is configured
- mathsgrove-config.js — public configuration placeholder; never put any secret keys here
- supabase/migrations/20261028_private_student_portal.sql — protected database tables and RLS policies
- supabase/functions/invitations/index.ts — one-time email-bound invitation service
- docs/STUDENT_PORTAL_SETUP.md — full Supabase installation steps
- .github/workflows/pages.yml — deploy this static development preview to GitHub Pages

## Visual identity

Midnight navy #0D1B32, champagne gold #D8C29A, warm ivory #F7F4ED. Fonts: Manrope and DM Sans.

## Local preview

Run `python3 -m http.server 8000` at the repository root, then visit `http://localhost:8000/`.

## Supabase and production roadmap

See `docs/STUDENT_PORTAL_SETUP.md` for precise setup instructions. Until configured, portal.html displays a setup notice instead of accepting student credentials or work.

The MathsGrove React + TypeScript starter produced for this project includes a SQL schema for student accounts and examiner marking. The next development step is to migrate that code into this same repository and set up a new Supabase project.

1. Use invitation-only Supabase Auth; provision students, tutors, examiners and partners through trusted administration.
2. Establish RLS, private storage, organisation boundaries and examiner assignment checks. Test isolation using multiple organisations.
3. Use only public publishable keys in the browser; never commit secret/service-role keys or student records.
4. Build production workflows: adaptive question bank, actual autosave, mark moderation, parent views, subscriptions as entitlements, and immutable reports.
5. Deploy the commercial application to Cloudflare from this repository. GitHub Pages is only a temporary design preview and not an appropriate production host for commercial SaaS.

## Partner access

MathsGrove is invitation-only. Commercial terms, partner licences and invoice arrangements are managed privately and are not displayed on the public website.

## Compliance

Do not collect real student information until security, privacy, safeguarding, retention, backup and data-processing checks are completed. This is not an official exam board service.
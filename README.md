# MathsGrove — Repository Redesign

This is the proposed redesign of the Mathora Year 10 GitHub Pages repository as **MathsGrove**, a premium mathematics assessment platform for tutoring companies.

## Safety and status

- Main remains the current Mathora teaching website until this branch is merged.
- This branch updates the homepage to a navy-and-champagne MathsGrove preview.
- The student, examiner, partner and report demos run **only in browser memory**. No real storage, login or automatic marking is connected yet.
- **Do not upload real student data.** Demo photography is only previewed locally.
- The existing Year 10 lesson sources are preserved on the branch for rollback and in Git history.

## Files

- index.html — new MathsGrove homepage and example workspace
- mathsgrove.css — responsive premium styling
- mathsgrove.js — interactive demonstration: sample IGCSE paper, drawing, local photo previews, question reflections, sample examiner marks and PDF print preview
- .github/workflows/pages.yml — deploy this static preview to GitHub Pages after merge

## Visual identity

Midnight navy #0D1B32, champagne gold #D8C29A, warm ivory #F7F4ED. Fonts: Manrope and DM Sans.

## Local preview

Run `python3 -m http.server 8000` at the repository root, then visit `http://localhost:8000/`.

## Supabase and production roadmap

The MathsGrove React + TypeScript starter produced for this project includes a SQL schema for student accounts and examiner marking. The next development step is to migrate that code into this same repository and set up a new Supabase project.

1. Use invitation-only Supabase Auth; provision students, tutors, examiners and partners through trusted administration.
2. Establish RLS, private storage, organisation boundaries and examiner assignment checks. Test isolation using multiple organisations.
3. Use only public publishable keys in the browser; never commit secret/service-role keys or student records.
4. Build production workflows: adaptive question bank, actual autosave, mark moderation, parent views, subscriptions as entitlements, and immutable reports.
5. Deploy the commercial application to Cloudflare from this repository. GitHub Pages is only a temporary design preview and not an appropriate production host for commercial SaaS.

## Business

Partners manage payments directly. Indicative wholesale: Weekly £10/student/month, Daily £18, Exam £29, Signature Report £49/standard GCSE or IGCSE assessment. No Stripe checkout.

## Compliance

Do not collect real student information until security, privacy, safeguarding, retention, backup and data-processing checks are completed. This is not an official exam board service.
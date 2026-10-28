# MathsGrove

**MathsGrove** is a premium mathematics practice and examiner-assessment platform for tutoring companies. Its identity is deep navy, soft champagne-beige and warm ivory — deliberately minimal rather than metallic or ornamental.

## Safety and status

- The main branch contains the MathsGrove website preview. Original Mathora lesson code remains in Git history and is not loaded on the new homepage.
- The public site provides a minimal navy, champagne-beige and ivory MathsGrove development preview.
- The homepage **interactive example** runs only in browser memory. Separately, the private student and examiner applications contain Supabase integrations, but the full invitation/email and permissions flow is not yet production verified.
- **Do not upload real student data.** Demo photography is only previewed locally.
- Existing Year 10 lesson sources remain in this repository for archival reference; preserve historical commits for rollback.

## Files

- index.html — new MathsGrove homepage and example workspace
- brand-refresh.css — new responsive editorial homepage design; mathsgrove.css retains demo-workspace styles
- mathsgrove-icon.svg — redesigned flat geometric logo
- mathsgrove.js — public interactive demonstration; browser-only, with no student data storage
- portal.html, portal.css, portal.js — invitation-only individual dashboards, qualification selection, private submissions and partner review when Supabase is configured
- studio.html, studio.css, studio.js — private partner administration, key-generation and examiner marking studio
- private-refresh.css — shared minimal brand theme for student and staff portals
- scripts/check-site.mjs — no-dependency static integrity and accidental-secret checks
- docs/BRAND_GUIDE.md — full palette, typography, logo and trust rules
- docs/ADMIN_STUDIO_SETUP.md — free-tier activation, required migrations and secure onboarding instructions
- mathsgrove-config.js — public configuration placeholder; never put any secret keys here
- supabase/migrations/20261028_private_student_portal.sql — protected database tables and RLS policies
- supabase/functions/invitations/index.ts — one-time email-bound invitation service
- docs/STUDENT_PORTAL_SETUP.md — full Supabase installation steps
- .github/workflows/pages.yml — deploy this static development preview to GitHub Pages

## Visual identity

Deep navy **#0D1B32**, soft beige **#CDBBA0**, ivory **#F7F4EF**. Typography: Instrument Serif + DM Sans. See `docs/BRAND_GUIDE.md`.

## Local preview

Run `python3 -m http.server 8000` at the repository root, then visit `http://localhost:8000/`.

## Supabase and production roadmap

See `docs/STUDENT_PORTAL_SETUP.md` for precise setup instructions. The Supabase project URL and browser publishable key are configured. Real sign-in is currently limited by the Supabase default email service, while invitation Edge Functions and all cross-account policies still need end-to-end verification.

The Supabase SQL schema has been installed in a new MathsGrove project and its structural checks passed. The next development step is to deploy and verify the invitation Edge Function, configure email delivery and test student/examiner roles before accepting real pupil work.

1. Use invitation-only Supabase Auth; provision students, tutors, examiners and partners through trusted administration.
2. Establish RLS, private storage, organisation boundaries and examiner assignment checks. Test isolation using multiple organisations.
3. Use only public publishable keys in the browser; never commit secret/service-role keys or student records.
4. Build production workflows: adaptive question bank, actual autosave, mark moderation, parent views, subscriptions as entitlements, and immutable reports.
5. Deploy the commercial application to Cloudflare from this repository. GitHub Pages is only a temporary design preview and not an appropriate production host for commercial SaaS.

## Partner access

MathsGrove is invitation-only. Commercial terms, partner licences and invoice arrangements are managed privately and are not displayed on the public website.

## Compliance

Do not collect real student information until security, privacy, safeguarding, retention, backup and data-processing checks are completed. This is not an official exam board service.
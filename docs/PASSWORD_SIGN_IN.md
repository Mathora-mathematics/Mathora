# MathsGrove — optional password sign-in

## The member experience

**The administrator still controls enrolment and permissions.** A student or family viewer cannot create a MathsGrove role simply by knowing an email address or setting a password. They must first have an administrator-nominated verified-email account. Role and tier are checked after **every** sign-in.

1. Open https://mathora-mathematics.github.io/Mathora/portal.html.
2. **First time:** choose **Secure email link**, enter the exact address enrolled by your administrator and open the emailed secure link. Follow it to your assigned student, administrator, parent or tutor dashboard. Existing recovery invitation codes remain optional.
3. Open **Account security** from the dashboard navigation. This returns to `portal.html?security=1` while keeping your authenticated session.
4. Create a **unique password of at least 12 characters**. Confirm it. Supabase Auth securely processes this password and stores only a salted hash; the website does not put it in MathsGrove student tables, local storage, analytics or administrator reports.
5. Future visits: choose **Email and password** on the same sign-in page. You can still select the secure email-link option at any time.
6. **Forgot password:** choose Email and password → Forgot password → enter your registered address. If an account exists, Supabase sends a recovery email. That link returns to the existing `portal.html` callback. Choose and confirm a new password and then return to your authorised dashboard.

## Security architecture

- **No public self-registration.** The frontend calls `signInWithPassword`, `resetPasswordForEmail` and `updateUser` but **never** `auth.signUp`. Email link is the initial verification route.
- The user has to have an **email-confirmed** Supabase Auth session, and the portal must resolve a current authorised membership or active linked learner view, before displaying the account settings page. Password updates also re-check an authorised membership or learner link server-side.
- Password use does **not** bypass student baseline, academic level, tier entitlement, account linking, expiry checks or RLS.
- Password input is not persisted in logs, search parameters, database application tables, browser storage, response analytics or message bodies.
- Frontend checks minimum length and equality; Supabase enforces its own configured Auth password-strength rules. Password policy, breached password protection, bot/rate limits, MFA (especially for administrators) and custom SMTP should be configured in **Supabase Dashboard → Authentication**.
- The recovery request response is generic if the account does not exist to avoid email enumeration. Password recovery messages use the same existing portal redirect rather than a newly whitelisted callback.
- Email delivery, reset-template configuration and live browser/phone testing remain to be verified in an adult test account. Do **not** send credentials or recovery tokens to a third party or paste them into chat.

## Engineering files

- `auth-password.js` — password sign-in, recovery and verified-account password settings
- `auth-password.css` — responsive navy/champagne login and settings screens
- `portal.html`, `portal.js` — shared portal, with identical role routing for email or password login
- `studio.html`, `family.html`, `baseline.html` — account-security navigation
- `scripts/check-password-auth.mjs` — security and UI invariants
- `scripts/test-password-auth.mjs` — six simulated success and failure flows
- `.github/workflows/pages.yml` — deploys password assets and runs both tests

**Release condition:** confirm the latest GitHub Pages run is green, test an existing adult invited account with email link → password creation → sign-out → password login → password recovery → dashboard, and verify no account without MathsGrove permissions receives a dashboard.

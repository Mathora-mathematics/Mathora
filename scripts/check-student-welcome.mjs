import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const file=path=>readFileSync(path,'utf8');
const portal=file('portal.js'),html=file('portal.html'),onboarding=file('student-welcome.js'),css=file('student-welcome.css');
const studio=file('studio.html'),studioJS=file('studio.js'),studioCSS=file('studio-refine.css');
const sql=file('supabase/migrations/20261031_student_welcome.sql');
const workflow=file('.github/workflows/pages.yml');
const checks=[
 ['Student role checked before onboarding',portal.includes("choice.kind==='student'")&&portal.includes('studentWelcome.maybeShow(state.user)')],
 ['First welcome is one-time and tied to verified auth identity',sql.includes('grove_student_welcome_status')&&sql.includes('auth.uid()')&&onboarding.includes("sb.rpc('grove_student_welcome_status')")],
 ['Student password is optional',html.includes('mg-welcome-skip')&&onboarding.includes("sb.auth.updateUser({password})")],
 ['Password is never written to a MathsGrove data table',!onboarding.includes("from('student_")&&!sql.includes('password text')],
 ['Password requires 12 or more characters',onboarding.includes('password.length<12')&&html.includes('minlength="12"')],
 ['Branded personal welcome stage exists',html.includes('mg-welcome-intro')&&html.includes('mg-welcome-name')&&html.includes('mathsgrove-icon.svg')],
 ['Welcome completion checked server-side',onboarding.includes("sb.rpc('grove_student_welcome_complete')")&&sql.includes("member_role='student'")],
 ['No pre-emptive timer starts on welcome page',!onboarding.includes("sb.rpc('baseline_start')")&&onboarding.includes('continueToDashboard()')],
 ['Existing baseline route still automatic',portal.includes("sb.rpc('baseline_status')")&&portal.includes("location.replace('./baseline.html')")],
 ['Reduced-motion animation supported',css.includes('prefers-reduced-motion:reduce')],
 ['New learner gets academic qualification and level',studio.includes('invite-qualification')&&studio.includes('invite-level')],
 ['Admin overview accessible via sections and quick actions',studio.includes('mg-admin-action-grid')&&studio.includes('mg-admin-priority')],
 ['Admin dashboard renders real counts',studioJS.includes("$('s-students').textContent=students.length")&&studioJS.includes('mg-admin-priority')],
 ['Advanced admin settings kept accessible',studio.includes('mg-advanced-options')&&studio.includes('invite-viewers')&&studio.includes('invite-notes')],
 ['Responsive admin style',studioCSS.includes('@media(max-width:760px)')],
 ['All assets deployed',workflow.includes('cp student-welcome.js student-welcome.css site/')&&workflow.includes('cp studio-refine.css site/')]
];
for(const [name,okay] of checks)assert.ok(okay,'First-login UX regression: '+name);
console.log('MathsGrove welcome and administration: '+checks.length+' checks passed.');
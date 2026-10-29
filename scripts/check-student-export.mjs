import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const server=read('supabase/functions/grove-student-export/index.ts');
const page=read('export.html'),download=read('student-export-download.js');
const studio=read('studio.html'),ui=read('student-offboarding.js');
const foundation=read('supabase/STUDENT_EXPORT_AND_REMOVAL.sql');
const removal=read('supabase/STUDENT_REMOVAL_AFTER_ARCHIVE.sql');
const source=read('studio.js'),workflow=read('.github/workflows/pages.yml');
const checks=[
 ['Administrator student roster',studio.includes('id="mg-student-offboarding"')&&source.includes('initStudentOffboarding(db,state)')],
 ['Only admins see the export register',ui.includes("state.membership?.member_role!=='admin'")],
 ['No direct deletion in frontend',!ui.includes(".from('profiles').delete")&&!ui.includes('.auth.admin.deleteUser')],
 ['Protected email preparation',server.includes('grove_offboarding_prepare')&&server.includes("eq('member_role','admin')")],
 ['Sender secrets required before sending',server.includes('RESEND_API_KEY')&&server.includes('MATHSGROVE_EXPORT_FROM')],
 ['No service credentials in browser',!ui.includes('SERVICE_ROLE')&&!download.includes('SERVICE_ROLE')],
 ['Private complete-data export',foundation.includes("public.grove_offboarding_export(")&&foundation.includes("uploaded_files")&&foundation.includes("practice_responses")&&foundation.includes("baseline_responses")],
 ['ZIP includes original files',server.includes("zip['evidence/'")&&server.includes("storage.from('student-work').download(path)")],
 ['Private storage only',foundation.includes("'grove-student-exports',false")],
 ['Download token sha256',server.includes("crypto.subtle.digest('SHA-256'")],
 ['Token stays in URL fragment',server.includes('/export.html#token=')&&download.includes('location.hash.slice(1)')],
 ['Saved archive confirmation separate',download.includes("call('confirm')")&&download.includes("call('download')")],
 ['Deletion waits for download',removal.includes("j.status NOT IN('downloaded','purging')")&&server.includes("entry.status!=='downloaded'")],
 ['Typed exact email confirmation',ui.includes("prompt('PERMANENT REMOVAL")&&server.includes('confirmEmail.trim().toLowerCase()')],
 ['Cannot remove staff',removal.includes("member_role='student'")],
 ['Auth account removal isolated server side',server.includes('admin.auth.admin.deleteUser(student,false)')],
 ['Completes only after safe cleanup',server.includes('grove_offboarding_remove_records')&&server.includes('grove_offboarding_record_completion')],
 ['Orphan uploaded work cleaned',server.includes('await gather(org+\'/\'+student)')],
 ['No public direct export',foundation.includes("REVOKE ALL ON FUNCTION public.grove_offboarding_export(uuid,uuid) FROM PUBLIC,anon,authenticated")],
 ['Email page no-index',page.includes('noindex,nofollow,noarchive')],
 ['Deployment contains archive page and controls',workflow.includes('cp export.html export.css student-export-download.js site/')&&workflow.includes('cp student-offboarding.js student-offboarding.css site/')]
];
for(const [name,passed] of checks)assert.ok(passed,'Student export invariant FAILED: '+name);
console.log('MathsGrove private student export and removal: '+checks.length+' source-level checks passed. Live email and removal still require independent testing.');

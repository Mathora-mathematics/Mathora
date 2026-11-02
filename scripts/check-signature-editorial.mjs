import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const migration=read('supabase/migrations/20261102_signature_editorial_private_library.sql');
const ui=read('signature-editorial.js');
const markup=read('studio.html');
const studio=read('studio.js');
const workflow=read('.github/workflows/pages.yml');
assert.match(migration,/CREATE TABLE IF NOT EXISTS private\.grove_signature_editorial/);
assert.match(migration,/ALTER TABLE private\.grove_signature_editorial ENABLE ROW LEVEL SECURITY/);
assert.match(migration,/REVOKE ALL ON private\.grove_signature_editorial FROM PUBLIC,anon,authenticated/);
assert.match(migration,/review_state <> 'approved' OR \(human_moderated_by IS NOT NULL AND human_moderated_at IS NOT NULL\)/);
for(const fn of ['grove_staff_signature_catalog','grove_staff_signature_editorial']){
 assert.ok(migration.includes('public.'+fn+'('),'Staff-only RPC missing: '+fn);
}
assert.ok([...migration.matchAll(/NOT private\.is_staff\(p_org\)/g)].length>=2,'Read-only RPCs must check staff authorisation');
assert.match(migration,/GRANT EXECUTE ON FUNCTION public\.grove_staff_signature_editorial\(uuid,uuid\) TO authenticated/);
assert.match(markup,/id="mg-signature-library-list"/);
assert.match(markup,/signature-editorial\.css/);
assert.match(studio,/initSignatureEditorial/);
assert.match(studio,/signatureManager\.refresh\(\)/);
assert.match(ui,/grove_staff_signature_catalog/);
assert.match(ui,/grove_staff_signature_editorial/);
assert.match(ui,/awaiting human moderation/i);
assert.ok(!/autoApprove|autoRelease|release_signature|approve_signature/.test(ui),'Human approval must not be faked by frontend');
assert.ok(!/innerHTML\s*=/.test(ui),'Never HTML-inject user-owned problem or solution text');
assert.match(workflow,/cp signature-editorial\.js signature-editorial\.css site\//);
assert.match(workflow,/node scripts\/check-signature-editorial\.mjs/);
console.log('Signature editorial secure library and human-moderation gate: PASS');

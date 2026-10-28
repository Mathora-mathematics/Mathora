import {readFileSync} from 'node:fs';
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const tiers=read('content/programmes/service-tiers.json').plans;
assert(Object.keys(tiers).sort().join(',')==='daily,exam,weekly','Exactly three product service tiers are required');
const boards=read('content/boards.json').boards;
const blueprints=read('content/paper-blueprints.json').blueprints;
const drafts=[
 ...read('content/GCSE/draft-exemplars.json').items.map(q=>({...q,qualification:'GCSE'})),
 ...read('content/IGCSE/draft-exemplars.json').items.map(q=>({...q,qualification:'IGCSE'})),
 ...read('content/programmes/draft-questions.json').items
];
const ids=new Set();
for(const q of drafts){
 assert(!ids.has(q.id),'Duplicate specimen question: '+q.id);ids.add(q.id);
 assert(['GCSE','IGCSE'].includes(q.qualification),'Unexpected specimen qualification');
 assert(Number.isInteger(q.marks)&&q.marks>=1&&q.marks<=15,'Invalid marks '+q.id);
 assert(Number.isInteger(q.suggested_minutes)&&q.suggested_minutes>=1,'Invalid estimated time '+q.id);
 assert(q.prompt.length>=55,'Too-short question stem '+q.id);
 assert(!q.available_to_students,'Public specimens must never be marked released: '+q.id);
}
assert(drafts.length===48,'Expected 48 public original draft stems, not published student mocks');
for(const m of blueprints){
 const board=boards.find(b=>b.key===m.board_key);
 assert(board&&board.verified,'Blueprint has unverified board: '+m.id);
 assert(!m.published&&m.status==='blueprint_only'&&m.questions.length===0,'Blueprint must remain unpublished: '+m.id);
 const paper=board.papers.find(p=>p.code===m.paper_code);
 assert(paper&&paper.minutes===m.minutes&&paper.marks===m.target_marks&&paper.calculator===m.calculator,'Mock format differs from board record: '+m.id);
}
const mockSql=readFileSync('supabase/UPGRADE_TIER_MOCKS.sql','utf8');
for(const test of ['start_mock_session','finish_mock_session','mock_session_clock',
 'REVOKE INSERT ON public.attempts','timed_attachment_guard','private.is_editable_attempt',
 'mock_pack_questions','student_entitlements','finalize_expired_mock_sessions']){
 assert(mockSql.includes(test),'Missing server timing or entitlement requirement: '+test);
}
const fnCount=[...mockSql.matchAll(/CREATE OR REPLACE FUNCTION\\s+[^\\(\\s]+/gi)].length;
const delimiterCount=(mockSql.match(/\\$\\$/g)||[]).length;
assert(delimiterCount===fnCount*2,'SQL function delimiters must pair exactly for every function');
assert((mockSql.match(/^BEGIN;$/gm)||[]).length===1 && (mockSql.match(/^COMMIT;$/gm)||[]).length===1,
 'One atomic migration transaction is required');
const portal=readFileSync('portal.html','utf8');
const studio=readFileSync('studio.html','utf8');
for(const id of ['mocks-panel','mock-clock-bar','mock-time-remaining','work-question-elapsed','work-photos','student-canvas'])
 assert(portal.includes('id="'+id+'"'),'Missing student workspace control: '+id);
for(const id of ['mock-build-form','mock-question-pool','mock-admin-packs','tier-library-cards'])
 assert(studio.includes('id="'+id+'"'),'Missing admin content control: '+id);
console.log('MathsGrove content checks passed: 3 service tiers, '+drafts.length+' draft question stems, '+blueprints.length+' unpublished mock outlines, and server deadline safeguards present.');

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
const newGCSE=read('content/programmes/practice-gcse-v2.json').items;
const newIGCSE=read('content/programmes/practice-igcse-v2.json').items;
const practice=[...newGCSE,...newIGCSE];
const practiceIds=new Set();
assert(newGCSE.length===60&&newIGCSE.length===60,'Need 60 original practice items per qualification');
for(const q of practice){
 assert(!practiceIds.has(q.id),'Duplicate practice id: '+q.id);practiceIds.add(q.id);
 assert(['daily','weekly','exam'].includes(q.programme),'Invalid Grove service tier '+q.id);
 assert(['Foundation','Higher','Core','Extended'].includes(q.exam_tier),'Missing academic level '+q.id);
 assert(Number.isInteger(q.marks)&&q.marks>=2&&q.marks<=9,'Bad mark allocation '+q.id);
 assert(q.mark_scheme.length===q.marks,'Mark count and guidance must match '+q.id);
 assert(q.mark_scheme.every(s=>/^[MAB]1$/.test(s.code)&&s.text.length>=10),'Incomplete mark scheme '+q.id);
 assert(q.prompt.length>=50&&q.answer.length>=3,'Incomplete mathematical question '+q.id);
 assert(q.student_ready===false&&q.unseen_mock_eligible===false,'Open candidates may not be unseen timed mocks '+q.id);
 assert(q.answer.includes('\\('),'Missing accessible TeX notation '+q.id);
}
for(const qual of ['GCSE','IGCSE']){
 for(const tier of ['daily','weekly','exam']){
  assert(practice.filter(q=>q.qualification===qual&&q.programme===tier).length===20,'Incorrect practice coverage '+qual+' '+tier);
 }
}
const seed=readFileSync('supabase/SEED_GROVE_OPEN_PRACTICE.sql','utf8');
for(const q of practice)assert(seed.includes(q.id),'Missing SQL seed item '+q.id);
assert(seed.includes('exam_practice')&&seed.includes('practice_content_index'),'Server practice-tier restrictions missing');
const upgraded=readFileSync('supabase/UPGRADE_MATHSGROVE_MATHS_V2.sql','utf8');
assert((upgraded.match(/^BEGIN;$/gm)||[]).length===1&&(upgraded.match(/^COMMIT;$/gm)||[]).length===1,'Combined upgrade must be transactional');
assert(upgraded.includes('start_mock_session')&&upgraded.includes('practice_content_index'),'Combined upgrade missing timed mocks or practice questions');

const mockSql=readFileSync('supabase/UPGRADE_TIER_MOCKS.sql','utf8');
for(const test of ['start_mock_session','finish_mock_session','mock_session_clock',
 'REVOKE INSERT ON public.attempts','timed_attachment_guard','private.is_editable_attempt',
 'mock_pack_questions','student_entitlements','finalize_expired_mock_sessions']){
 assert(mockSql.includes(test),'Missing server timing or entitlement requirement: '+test);
}
const fnCount=[...mockSql.matchAll(/CREATE OR REPLACE FUNCTION\s+[^\(\s]+/gi)].length;
const delimiterCount=(mockSql.match(/\$\$/g)||[]).length;
assert(delimiterCount===fnCount*2,'SQL function delimiters must pair exactly for every function');
assert((mockSql.match(/^BEGIN;$/gm)||[]).length===1 && (mockSql.match(/^COMMIT;$/gm)||[]).length===1,
 'One atomic migration transaction is required');
const portal=readFileSync('portal.html','utf8');
const studio=readFileSync('studio.html','utf8');
for(const id of ['mocks-panel','mock-clock-bar','mock-time-remaining','work-question-elapsed','work-photos','student-canvas'])
 assert(portal.includes('id="'+id+'"'),'Missing student workspace control: '+id);
for(const id of ['mock-build-form','mock-question-pool','mock-admin-packs','tier-library-cards'])
 assert(studio.includes('id="'+id+'"'),'Missing admin content control: '+id);
console.log('MathsGrove content checks passed: 3 service tiers, '+drafts.length+' early draft stems, '+practice.length+' original worked practice candidates, '+blueprints.length+' unpublished mock blueprints, and server deadline safeguards present.');

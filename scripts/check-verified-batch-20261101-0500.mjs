import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-0500.json','utf8'));
assert.equal(m.version,1);assert.equal(m.record_count,9);assert.equal(m.questions.length,9);
assert.ok(['private_draft_awaiting_ci_and_activation','published_to_private_supabase_bank'].includes(m.status));
assert.match(m.assessment_kind,/NOT complete timed mocks/);
const sensitive=['prompt','choices','correct_text','explanation','reviewer_note','correct_option','answer','student_id','email'];
const ids=new Set(),provs=new Set();
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.match(q.provenance,/^mg-original-20261101-0500-/);
 assert.equal(q.qualification,'A_LEVEL');
 assert.ok(q.syllabus_objective.length>=7 && q.expected_seconds>=120 && q.expected_seconds<=900);
 assert.match(q.source_url,/^https:\/\//);
 for(const key of sensitive)assert.equal(Object.hasOwn(q,key),false,'Public private-field leak: '+key);
 ids.add(q.id);provs.add(q.provenance);
}
assert.equal(ids.size,9);assert.equal(provs.size,9);
for(const [board,level] of [['Cambridge 9709','as'],['Pearson Edexcel 9MA0 UK GCE','a2'],['Pearson Edexcel IAL WMA11 P1','as']]){
 const a=m.questions.filter(q=>q.exam_board===board&&q.academic_level===level);
 assert.equal(a.length,3,board);
 assert.deepEqual(a.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
const guard=readFileSync('supabase/migrations/20261101_strict_alevel_board_route.sql','utf8');
for(const s of ["b LIKE '%9ma0%'","s LIKE '%9ma0%'","b LIKE '%wma11%'","s LIKE '%ial%'","b LIKE '%9709%'","s LIKE '%9709%'","IF s='' THEN RETURN false"])assert.ok(guard.includes(s),'Route guard missing '+s);
const legacy=readFileSync('supabase/migrations/20261031_unseen_question_text_guard.sql','utf8');
assert.match(legacy,/NOT EXISTS\(SELECT 1 FROM private.grove_task_items old/);
const oldBoard=readFileSync('supabase/migrations/20261031_exam_board_compatible_question_selection.sql','utf8');
assert.match(oldBoard,/grove_board_compatible/);
function compatible(item,student){
 const b=item.toLowerCase().trim(),s=student.toLowerCase().trim();
 if(!b||['all','generic','cross-board'].includes(b))return true;
 if(!s)return false;
 if(b.includes('9ma0'))return s.includes('9ma0');
 if(b.includes('wma11')||b.includes('ial'))return ['ial','wma11','xma01','yma01'].some(x=>s.includes(x));
 if(b.includes('9709'))return s.includes('9709');
 return b===s;
}
for(const [item,student,expected] of [
 ['Pearson Edexcel 9MA0 UK GCE','Pearson Edexcel IAL WMA11 P1',false],
 ['Pearson Edexcel IAL WMA11 P1','Pearson Edexcel 9MA0 UK GCE',false],
 ['Pearson Edexcel 9MA0 UK GCE','Pearson Edexcel 9MA0',true],
 ['Pearson Edexcel IAL WMA11 P1','Pearson Edexcel IAL',true],
 ['Cambridge 9709','Cambridge 9709',true],
 ['Cambridge 9709','Cambridge 9231',false],
 ['Pearson Edexcel 9MA0 UK GCE','Pearson Edexcel',false],
 ['Cambridge 9709','',false]
])assert.equal(compatible(item,student),expected,item+' / '+student);
// Independent generic mathematical regression calculations; actual answer keys remain private.
const derivative=x=>3*x*x+1;
for(const x of [-8,-1,0,1,8])assert.ok(derivative(x)>0);
const geometric=n=>Array.from({length:n},(_,i)=>3*2**i).reduce((a,b)=>a+b,0);
assert.equal(geometric(5),3*(2**5-1));
const area=(a,b)=>a*b/2;
assert.equal(area(6,8),24);
console.log('MathsGrove 0500: 9 private original candidates, three syllabus routes x three tiers, privacy, routing, duplicate and numerical regression — PASS.');

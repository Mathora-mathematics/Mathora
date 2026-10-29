import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const sources=[
  'supabase/SEED_BASELINE_PILOT_KS4.sql',
  'supabase/SEED_BASELINE_PILOT_ALEVEL_IBAA.sql',
  'supabase/SEED_BASELINE_PILOT_SPECIALIST.sql'
];
function splitTopLevel(text){
 const out=[];let quote=false,depth=0,start=0;
 for(let i=0;i<text.length;i++){
  const ch=text[i];
  if(ch==="'"){
   if(quote&&text[i+1]==="'"){i++;continue}
   quote=!quote;continue
  }
  if(quote)continue;
  if(ch==='(')depth++;
  else if(ch===')')depth--;
  else if(ch===','&&depth===0){out.push(text.slice(start,i).trim());start=i+1}
  if(depth<0)throw Error('Unexpected closing parenthesis in SQL values');
 }
 if(quote||depth!==0)throw Error('Unbalanced SQL quote or function in seed values');
 if(text.slice(start).trim())out.push(text.slice(start).trim());
 return out;
}
function parseQuoted(x){
 assert.ok(x.startsWith("'")&&x.endsWith("'"),'Expected SQL string: '+x.slice(0,30));
 return x.slice(1,-1).replaceAll("''","'");
}
const routes=new Map();let total=0;
for(const path of sources){
 const source=readFileSync(path,'utf8');let count=0;
 const blocks=[...source.matchAll(/INSERT INTO private\.baseline_bank\([\s\S]*?\) VALUES\s*([\s\S]*?)\s*ON CONFLICT\(/g)];
 assert.equal(blocks.length,4,'Four qualification routes expected per seed: '+path);
 for(const block of blocks){
  const rows=splitTopLevel(block[1]);
  assert.equal(rows.length,20,'Exactly 20 original MCQs in a route: '+path);
  for(const [i,row] of rows.entries()){
   assert.ok(row.startsWith('(')&&row.endsWith(')'),'Expected tuple at row '+i);
   const fields=splitTopLevel(row.slice(1,-1));
   assert.equal(fields.length,10,'Unexpected number of item fields in '+path+': '+i);
   const [qualification,level,position,topic,skill,difficulty,prompt,choicesExpr,correct,explain]=fields;
   const q=parseQuoted(qualification),l=parseQuoted(level),key=q+':'+l,n=Number(position),d=Number(difficulty);
   assert.ok(Number.isInteger(n)&&n===i+1,'Incorrect question position in '+key);
   assert.ok(Number.isInteger(d)&&d>=1&&d<=5,'Invalid difficulty in '+key);
   assert.ok(parseQuoted(topic).length>=2&&parseQuoted(skill).length>=2,'Topic/skill missing in '+key);
   assert.ok(parseQuoted(prompt).length>=8,'Prompt too short in '+key+': '+i);
   assert.ok(choicesExpr.startsWith('jsonb_build_array(')&&choicesExpr.endsWith(')'),'Expected 4 MCQ choices');
   const choices=splitTopLevel(choicesExpr.slice('jsonb_build_array('.length,-1)).map(parseQuoted);
   assert.equal(choices.length,4,'Not four choices in '+key+': '+i);
   assert.equal(new Set(choices).size,4,'Duplicated distractor in '+key+': '+i);
   assert.equal(choices.filter(x=>x===parseQuoted(correct)).length,1,'Missing/duplicate correct answer in '+key+': '+i);
   assert.ok(parseQuoted(explain).length>=10,'Missing explanation in '+key+': '+i);
   if(!routes.has(key))routes.set(key,[]);
   routes.get(key).push({position:n,topic:parseQuoted(topic),skill:parseQuoted(skill),prompt:parseQuoted(prompt)});
   count++;total++;
  }
 }
 assert.equal(count,80,'Seed must contain 80 item entries: '+path);
}
assert.equal(routes.size,12,'Expected 12 academic routes');
assert.equal(total,240,'Expected 240 item records');
for(const [key,rows] of routes)assert.equal(rows.length,20,'Incomplete route '+key);
console.log('MathsGrove question-bank integrity: PASS | 12 routes, 240 records, 4 distinct options and one configured key per item.');
console.log('Note: these checks validate structure, not independent mathematical correctness or confidential security.');

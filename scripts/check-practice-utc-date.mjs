import fs from 'node:fs';
import assert from 'node:assert/strict';

// The server's grove_task_start() uses PostgreSQL current_date in UTC.
// A browser in Kuwait must not show a new day's assignment as Ready
// while the server still considers it the previous UTC date.
const source=fs.readFileSync('assigned-practice.js','utf8');
assert.match(source,/const date=\(\)=>new Date\(\)\.toISOString\(\)\.slice\(0,10\)/);
const dayIn=(date,timeZone)=>{
  const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{
    timeZone,year:'numeric',month:'2-digit',day:'2-digit'
  }).formatToParts(date).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));
  return p.year+'-'+p.month+'-'+p.day;
};
for(const [stamp,utc,kwt] of [
  ['2026-11-02T20:59:59Z','2026-11-02','2026-11-02'],
  ['2026-11-02T21:00:00Z','2026-11-02','2026-11-03'],
  ['2026-11-02T23:59:59Z','2026-11-02','2026-11-03'],
  ['2026-11-03T00:00:00Z','2026-11-03','2026-11-03']
]){
  const instant=new Date(stamp);
  assert.equal(instant.toISOString().slice(0,10),utc);
  assert.equal(dayIn(instant,'Asia/Kuwait'),kwt);
}
console.log('PASS: browser assignment readiness follows server UTC calendar at Kuwait midnight boundary.');

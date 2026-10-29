export function initAssignedPractice(db){
 const $=id=>document.getElementById(id),list=$('mg-auto-list'),cal=$('student-calendar');
 let schedule=null,task=null,pos=1,busy=false,clock=null,lastFocus=Date.now(),clockOffset=0,drawing=null,lines=new Map();
 const set=(id,val)=>{if($(id))$(id).textContent=String(val??'')};
 const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e};
 const date=()=>{let d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
 const titles={weekly:'Weekly paper · mixed skills',daily:'Daily Focus · essential skills',exam_daily:'Grove Exam · daily reasoning',mock_pending:'Monthly moderated mock'};
 async function rpc(name,args={}){const {data,error}=await db.rpc(name,args);if(error)throw error;return data}
 async function refresh(){try{schedule=await rpc('grove_my_calendar');render()}catch(e){list.replaceChildren(el('p','Assignments unavailable: '+e.message))}}
 function render(){
  list.replaceChildren();cal.replaceChildren();
  if(!schedule?.ready){list.append(el('p',schedule?.reason||'Your academic programme is awaiting activation.'));return}
  set('mg-auto-programme','GROVE '+schedule.programme.toUpperCase());
  const overdue=new Date();overdue.setDate(overdue.getDate()-7);
  const floor=[overdue.getFullYear(),String(overdue.getMonth()+1).padStart(2,'0'),String(overdue.getDate()).padStart(2,'0')].join('-');
  const rows=(schedule.assignments||[]).filter(r=>r.due_date>=floor).slice(0,20);
  for(const r of rows){
   const eligible=r.due_date<=date()&&r.mode!=='mock_pending'&&['submitted','expired'].includes(schedule.baseline_status);
   const b=el('button',undefined,'mg-auto-day'+(eligible?' available':'')+(r.status==='completed'?' completed':''));b.type='button';b.disabled=!eligible;
   b.append(el('small',new Date(r.due_date+'T12:00:00').toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})),el('strong',titles[r.mode]||'Assigned practice'),
   el('span',r.mode==='mock_pending'?'Requires a tutor-approved full mock':r.status==='completed'||r.status==='expired'?'Completed · '+r.score+'/'+r.questions:r.status==='active'?'Continue saved session':eligible?'Ready · '+r.questions+' questions':r.due_date>date()?'Opens on this date':'Complete baseline first'));
   b.addEventListener('click',()=>void open(r));list.append(b);
   if(r.due_date<=new Date(Date.now()+7*86400000).toISOString().slice(0,10)){
     const day=el('button',new Date(r.due_date+'T12:00:00').getDate()+' · '+(titles[r.mode]||'Assigned work'),'practice-day'+(eligible?' scheduled':''));
     day.type='button';day.disabled=!eligible;
     day.addEventListener('click',()=>void open(r));cal.append(day);
   }
  }
  if(!rows.length)list.append(el('p','The next assignments appear after programme activation.'));
 }
 async function focus(visible){
  if(task?.status!=='active')return;
  try{await rpc('grove_task_focus',{p_task:task.task_id,p_position:pos,p_visible:visible})}catch{}
  if(visible)lastFocus=Date.now()
 }
 async function open(row){
  if(busy)return;busy=true;set('mg-auto-caption','Loading your assigned mathematics…');
  try{
   task=await rpc(row.status==='scheduled'?'grove_task_start':'grove_task_view',{p_task:row.id});clockOffset=task.server_time?new Date(task.server_time).getTime()-Date.now():0;pos=1;
   const done=['completed','expired'].includes(task.status);
   $('mg-practice-workspace').hidden=done;$('mg-practice-report').hidden=!done;
   if(done)report();else{showQuestion();await focus(true);startClock()}
   (done?$('mg-practice-report'):$('mg-practice-workspace')).scrollIntoView({behavior:'smooth'})
  }catch(e){set('mg-auto-caption',e.message||'Unable to open the assignment.')}
  finally{busy=false}
 }
 async function save(c){
  if(busy||task?.status!=='active')return;busy=true;set('mg-practice-save','Saving answer…');
  try{const data=await rpc('grove_task_answer',{p_task:task.task_id,p_position:pos,p_choice:c});
   if(!data?.ok)throw Error('This sitting is closed.');
   task.questions.find(q=>q.position===pos).selected=c;showQuestion();
  }catch(e){set('mg-practice-save','Not saved: '+e.message)}finally{busy=false}
 }
 function showQuestion(){
  let q=task.questions?.find(x=>x.position===pos);if(!q)return;
  set('mg-practice-path',task.qualification+' · '+task.level+' · '+task.programme);
  set('mg-practice-title','Administrator-assigned mathematics');set('mg-practice-progress','Question '+pos+' / '+task.question_count+' · '+q.topic);
  if(window.MathsGroveMath?.write)window.MathsGroveMath.write($('mg-practice-question'),q.prompt);else set('mg-practice-question',q.prompt);
  const root=$('mg-practice-options');root.replaceChildren();
  (q.choices||[]).forEach(c=>{let label=el('label',undefined,'mg-practice-option'+(q.selected===c.id?' selected':''));let input=el('input');input.type='radio';input.name='mg-answer';input.checked=q.selected===c.id;input.value=c.id;
   input.addEventListener('change',()=>void save(c.id));
   const answer=el('span');if(window.MathsGroveMath?.write)window.MathsGroveMath.write(answer,c.text);else answer.textContent=c.text;
   label.append(input,el('strong',c.id+' ·'),answer);root.append(label)});
  $('mg-practice-back').disabled=pos===1;$('mg-practice-next').disabled=pos>=task.question_count;
  set('mg-practice-save',q.selected?'Answer securely saved; you can revise it.':'Choose one answer; it will be saved securely.');boardDraw()
 }
 async function move(next){if(busy||next<1||next>task.question_count)return;await focus(false);pos=next;showQuestion();await focus(true)}
 async function finish(expired){
  if(busy||task?.status!=='active')return;
  if(!expired&&!confirm('Submit this session for automatic marking?'))return;
  busy=true;
  try{await focus(false);task=await rpc('grove_task_finish',{p_task:task.task_id});
  clearInterval(clock);$('mg-practice-workspace').hidden=true;$('mg-practice-report').hidden=false;report();await refresh();$('mg-practice-report').scrollIntoView({behavior:'smooth'})}
  catch(e){set('mg-practice-save','Could not finish: '+e.message)}finally{busy=false}
 }
 function startClock(){
  if(clock)clearInterval(clock);
  clock=setInterval(()=>{
   if(task?.status!=='active')return;
   let seconds=Math.max(0,Math.floor((Date.now()-lastFocus)/1000));
   set('mg-practice-time','Current question visible: '+Math.floor(seconds/60)+'m '+seconds%60+'s');
   if(task.ends_at){const left=Math.max(0,Math.ceil((new Date(task.ends_at).getTime()-(Date.now()+clockOffset))/1000));
    set('mg-practice-deadline','Timed session: '+Math.floor(left/60)+'m '+left%60+'s left');if(left===0)void finish(true)}
  },1000)
 }
 function report(){
  let root=$('mg-practice-report-body');root.replaceChildren();
  root.append(el('p',task.score+' / '+task.question_count+' correct','mg-report-metric'));
  root.append(el('p',task.report_note||'This is indicative practice evidence, not an official grade.','mg-auto-disclaimer'));
  const topics=(task.topics||[]).slice().sort((a,b)=>a.correct/a.total-b.correct/b.total);
  const weaker=topics.filter(t=>t.correct<t.total).slice(0,3);
  if(weaker.length)root.append(el('p','Suggested next topics: '+weaker.map(t=>t.topic).join('; ')+'. Review each method using fresh questions.','mg-report-priority'));
  for(const r of task.review||[]){const line=el('div',undefined,'mg-practice-report-row');
   line.append(el('strong','Q'+r.position+' · '+r.topic),el('span',(r.correct?'Correct':'Review')+' · '+r.seconds+'s visible'));root.append(line)}
 }
 const canvas=$('mg-practice-board'),ctx=canvas.getContext('2d');
 function pts(){if(!lines.has(pos))lines.set(pos,[]);return lines.get(pos)}
 function boardDraw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle='#e4edf4';ctx.lineWidth=1;
  for(let x=0;x<canvas.width;x+=25){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,canvas.height);ctx.stroke()}
  for(let y=0;y<canvas.height;y+=25){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke()}
  ctx.strokeStyle='#17354f';ctx.lineWidth=3;
  for(const line of pts()){if(line.length<2)continue;ctx.beginPath();ctx.moveTo(...line[0]);for(const p of line.slice(1))ctx.lineTo(...p);ctx.stroke()}
 }
 function xy(e){const r=canvas.getBoundingClientRect();return[(e.clientX-r.left)*canvas.width/r.width,(e.clientY-r.top)*canvas.height/r.height]}
 canvas.addEventListener('pointerdown',e=>{drawing=[xy(e)];canvas.setPointerCapture(e.pointerId);pts().push(drawing)});
 canvas.addEventListener('pointermove',e=>{if(drawing){drawing.push(xy(e));boardDraw()}});
 ['pointerup','pointercancel'].forEach(ev=>canvas.addEventListener(ev,()=>drawing=null));
 $('mg-practice-clear').addEventListener('click',()=>{lines.set(pos,[]);boardDraw()});
 $('mg-practice-back').addEventListener('click',()=>void move(pos-1));
 $('mg-practice-next').addEventListener('click',()=>void move(pos+1));
 $('mg-practice-finish').addEventListener('click',()=>void finish(false));
 $('mg-report-back').addEventListener('click',()=>{$('mg-practice-report').hidden=true;void refresh()});
 document.addEventListener('visibilitychange',()=>{if(task?.status==='active')void focus(!document.hidden)});
 window.addEventListener('blur',()=>{if(task?.status==='active')void focus(false)});
 window.addEventListener('focus',()=>{if(task?.status==='active'&&!document.hidden)void focus(true)});
 window.addEventListener('pagehide',()=>{if(task?.status==='active')void focus(false)});
 setInterval(()=>{if(task?.status==='active'&&!document.hidden)void focus(true)},15000);
 return {refresh}
}
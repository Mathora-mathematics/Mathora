export function initAssignedAdmin(db,state){
 const $=id=>document.getElementById(id),list=$('mg-assigned-admin-rows'),summary=$('mg-assigned-admin-summary');
 const el=(tag,t,cls)=>{const x=document.createElement(tag);if(t!==undefined)x.textContent=t;if(cls)x.className=cls;return x};
 const modes={daily:'Daily',weekly:'Weekly',exam_daily:'Exam Daily',mock_pending:'Mock awaiting approval'};
 async function refresh(){
  if(!state.membership?.org_id)return;
  const {data,error}=await db.rpc('grove_admin_schedule',{p_org:state.membership.org_id});
  if(error){summary.textContent='Cannot fetch the assigned practice register: '+error.message;return}
  const rows=data?.assignments||[];
  const completed=rows.filter(x=>['completed','expired'].includes(x.status)),active=rows.filter(x=>x.status==='active');
  const upcoming=rows.filter(x=>x.status==='scheduled');
  summary.replaceChildren();
  for(const [n,label] of [[completed.length,'COMPLETED'],[active.length,'IN PROGRESS'],[upcoming.length,'SCHEDULED']]){
   let b=el('div'),strong=el('strong',String(n)),span=el('span',label);b.append(strong,span);summary.append(b)
  }
  list.replaceChildren();
  if(!rows.length){list.append(el('p','When enrolled students sign in, their tier-specific calendar will be prepared automatically. No manually created paper is required.'));return}
  for(const r of rows.slice(0,45)){
   const wrap=el('div',undefined,'mg-assigned-row'),name=el('div');
   name.append(el('strong',r.student_name||'Student'),
    el('small',(modes[r.mode]||r.mode)+' · '+r.qualification+' '+r.level+' · '+r.due_date+' · '+r.status));
   if(['completed','expired'].includes(r.status)&&r.question_insights?.length){
    const detail=el('details',undefined,'mg-assigned-detail');
    detail.append(el('summary',(r.score||0)+'/'+r.question_count+' correct · '+(r.minutes_visible||0)+' minutes visible · View question insights'));
    const arr=r.question_insights.slice().sort((a,b)=>(a.correct===b.correct?b.seconds_visible-a.seconds_visible:a.correct?1:-1));
    for(const q of arr){
     const line=el('div',undefined,'mg-assigned-skill');
     line.append(el('strong','Q'+q.position+' · '+q.topic+' · '+q.skill),el('span',(q.correct?'Correct':'Incorrect')+' · '+q.seconds_visible+'s visible'));
     detail.append(line);
    }
    wrap.append(name,detail)
   }else{wrap.append(name,el('small',r.status==='scheduled'?'Will open automatically on its date.':(r.status==='active'?'Timed and saved in progress.':'Requires an approved mock.')))}
   list.append(wrap);
  }
 }
 $('mg-assigned-admin-refresh').addEventListener('click',()=>void refresh());
 setInterval(()=>{if(!document.hidden&&!$('mg-assigned-admin').closest('[data-panel]')?.hidden)void refresh()},60000);
 return {refresh}
}
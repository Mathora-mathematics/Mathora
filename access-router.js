// Pure routing rules for the MathsGrove unified login.
// The browser never grants permissions: these entries are derived exclusively
// from Supabase-authenticated memberships and role-filtered server RPC results.
const staffRoles=new Set(['admin','partner','examiner']);
const staffRank={admin:0,partner:1,examiner:2};
export function getAccessChoices(memberships=[],linkedLearners=[],awaitingLearner=0){
 const membershipsSafe=Array.isArray(memberships)?memberships:[];
 const linkedSafe=Array.isArray(linkedLearners)?linkedLearners:[];
 const result=[];
 const staff=membershipsSafe.filter(m=>staffRoles.has(m?.member_role))
   .sort((a,b)=>staffRank[a.member_role]-staffRank[b.member_role])[0];
 if(staff)result.push({kind:'studio',label:staff.member_role==='examiner'?'Examiner Studio':'Administrator Studio',
   description:staff.member_role==='examiner'?'Mark and review assigned student papers.':'Manage learners, programmes and academic reporting.',
   member:staff});
 const student=membershipsSafe.find(m=>m?.member_role==='student');
 if(student)result.push({kind:'student',label:'Student dashboard',
   description:'Your own questions, papers, practice calendar and reports.',member:student});
 const parent=linkedSafe.some(x=>x?.view_role==='parent'),tutor=linkedSafe.some(x=>x?.view_role==='tutor');
 if(parent||tutor||Number(awaitingLearner)>0){
   result.push({kind:'family',label:parent&&tutor?'Parent and tutor views':tutor?'Tutor dashboard':parent?'Parent dashboard':'Connected learner access',
     description:parent&&tutor?'Select a learner to see your authorised parent or tutor view.':tutor?'Review released mathematics evidence for your assigned learner.':parent?'See released progress and guidance for your child.':'An authorised learner connection is awaiting activation.'});
 }
 return result;
}
export function preferredSingleChoice(choices){
 return Array.isArray(choices)&&choices.length===1?choices[0]:null;
}

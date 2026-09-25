/* Diagrams are attached to the question data, never selected by slide position. */
(function(){
'use strict';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const svg=(body,label,w=640,h=360)=>`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg"><style>text{font:16px Arial,sans-serif;fill:#163b49}.axis{stroke:#163b49;stroke-width:2}.grid{stroke:#d8e9ef;stroke-width:1}.data{stroke:#087fa5;stroke-width:3;fill:none}</style>${body}</svg>`;
const line=(x,y,X,Y,cls='axis',extra='')=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" class="${cls}" ${extra}/>`;
const text=(x,y,s,extra='')=>`<text x="${x}" y="${y}" ${extra}>${esc(s)}</text>`;
function table(d){const rows=[d.headers,...d.rows],w=620,h=45*rows.length+30,cw=600/d.headers.length;let b='';rows.forEach((r,i)=>r.forEach((v,j)=>{b+=`<rect x="${10+j*cw}" y="${10+i*45}" width="${cw}" height="45" fill="${i?'white':'#e4f3f9'}" stroke="#adcbd8"/>`+text(10+(j+.5)*cw,39+i*45,v,'text-anchor="middle"')}));return svg(b,d.label||'Data table',w,h)}
function chart(d){const W=640,H=370,L=74,R=600,T=26,B=300,xmax=d.xmax||Math.max(...d.points.map(p=>p[0]))+1,ymax=d.ymax||Math.max(...d.points.map(p=>p[1]))+1;
const X=x=>L+x/xmax*(R-L),Y=y=>B-y/ymax*(B-T);let b='';const xt=d.xstep||xmax/5,yt=d.ystep||ymax/5;
for(let x=0;x<=xmax+1e-8;x+=xt)b+=line(X(x),T,X(x),B,'grid')+text(X(x),B+25,+x.toFixed(2),'text-anchor="middle"');
for(let y=0;y<=ymax+1e-8;y+=yt)b+=line(L,Y(y),R,Y(y),'grid')+text(L-10,Y(y)+5,+y.toFixed(2),'text-anchor="end"');
b+=line(L,T,L,B)+line(L,B,R,B)+text((L+R)/2,H-12,d.xlabel||'x','text-anchor="middle"')+text(18,165,d.ylabel||'y','transform="rotate(-90 18 165)" text-anchor="middle"');
if(d.kind==='histogram')d.bars.forEach(([a,z,f])=>{const density=f/(z-a);b+=`<rect x="${X(a)}" y="${Y(density)}" width="${X(z)-X(a)}" height="${B-Y(density)}" fill="#d9f1f8" stroke="#087fa5" stroke-width="2"/>`});
if(d.kind==='scatter')d.points.forEach(([x,y])=>{b+=`<circle cx="${X(x)}" cy="${Y(y)}" r="4.5" fill="#087fa5"/>`});
if(d.kind==='cumulative')b+=`<polyline points="${d.points.map(([x,y])=>`${X(x)},${Y(y)}`).join(' ')}" class="data"/>`;
if(d.fit)b+=line(X(d.fit[0][0]),Y(d.fit[0][1]),X(d.fit[1][0]),Y(d.fit[1][1]),'data');
return svg(b,d.label||`${d.kind}: ${d.xlabel||'x'} against ${d.ylabel||'y'}`,W,H)}
function bars(d){let b='',max=Math.max(...d.values),top=Math.ceil(max/10)*10,base=270,left=65;for(let v=0;v<=top;v+=top/5){const y=base-v/top*220;b+=line(left,y,590,y,'grid')+text(55,y+5,+v.toFixed(1),'text-anchor="end"')};b+=line(left,35,left,base)+line(left,base,590,base);d.values.forEach((v,i)=>{const x=left+35+i*500/d.values.length,w=300/d.values.length;b+=`<rect x="${x}" y="${base-v/top*220}" width="${w}" height="${v/top*220}" fill="#84cbe0"/>`+text(x+w/2,300,d.labels[i],'text-anchor="middle"')});b+=text(20,150,d.ylabel||'Frequency','transform="rotate(-90 20 150)" text-anchor="middle"');return svg(b,'Bar chart of '+d.labels.join(', '))}
function render(d){if(!d)return'';if(d.kind==='table')return table(d);if(['scatter','cumulative','histogram'].includes(d.kind))return chart(d);if(d.kind==='bars')return bars(d);return''}
const T=(headers,rows)=>({kind:'table',headers,rows});
const grouped=(classes,freq)=>T(['Class interval','Frequency'],classes.map((c,i)=>[c,freq[i]]));
const maps={
'18.1':{1:T(['','Football','Not football','Total'],[['Boys',11,'?',18],['Girls',14,'?',22],['Total','?','?',40]]),3:T(['','Football','Not football','Total'],[['Boys',11,'?',18],['Girls',14,'?',22],['Total','?','?',40]])},
'18.2':{4:T(['Dataset','Median','IQR'],[['A',42,6],['B',39,14]])},
'18.3':{0:grouped(['0 ≤ x < 10','10 ≤ x < 20','20 ≤ x < 30'],[3,7,5]),3:grouped(['0 ≤ x < 10','10 ≤ x < 20','20 ≤ x < 30','30 ≤ x < 40'],[2,5,7,6]),4:grouped(['1–3','4–6','7–9'],[4,8,3])},
'18.4':{0:grouped(['0 ≤ x < 10','10 ≤ x < 20','20 ≤ x < 30'],[4,11,7]),1:grouped(['First','Second','Third','Fourth'],[3,8,12,5]),3:grouped(['First','Second','Third','Fourth'],[8,14,19,9])},
'18.5':{0:T(['Class','Passes','Students'],[['A',18,30],['B',20,40]]),1:T(['','Choose art','Total'],[['Boys',20,42],['Girls',24,38]]),4:T(['Club','Wins','Games'],[['A',18,30],['B',26,50]])},
'18.6':{0:T(['Group','Median','IQR'],[['A',62,8],['B',58,15]]),1:T(['Team','Mean','Range'],[['X',12.4,6],['Y',13.1,20]]),3:T(['Group','Median','IQR'],[['A',64,8],['B',59,5]]),4:T(['Machine','Mean (g)','Range (g)'],[['A',250,18],['B',252,6]])},
'19.1':{0:T(['Category','Frequency'],[['A',9],['B',6],['C',11],['D',10]]),3:T(['Category','Frequency'],[['A',12],['B',18],['C',6],['D',4]])},
'19.2':{0:{kind:'scatter',points:[[1,7],[2,5],[3,6],[4,3],[5,2],[6,1]],xmax:7,ymax:8,xstep:1,ystep:2},3:{kind:'scatter',points:[[1,2],[2,3],[3,5],[4,6],[5,8],[6,9],[7,4]],xmax:8,ymax:10,xstep:1,ystep:2}},
'19.4':{3:{kind:'scatter',points:[[2,5],[8,17]],fit:[[0,1],[9,19]],xmax:10,ymax:20,xstep:2,ystep:5}},
'19.5':{0:grouped(['0 < x ≤ 10','10 < x ≤ 20','20 < x ≤ 30','30 < x ≤ 40'],[5,8,11,6]),3:grouped(['First','Second','Third','Fourth'],[4,7,9,5]),4:grouped(['0 < x ≤ 10','10 < x ≤ 20','20 < x ≤ 30'],[6,10,4])},
'19.7':{0:grouped(['140 < h ≤ 150'],[15]),1:{kind:'histogram',bars:[[150,160,35]],points:[],xmax:180,ymax:4,xstep:30,ystep:1,xlabel:'Class boundary',ylabel:'Frequency density'},3:grouped(['0 < x ≤ 5','5 < x ≤ 15','15 < x ≤ 20'],[10,30,20]),4:{kind:'histogram',bars:[[20,28,20]],points:[],xmax:32,ymax:3,xstep:8,ystep:.5,xlabel:'Class boundary',ylabel:'Frequency density'}},
'19.9':{0:{kind:'bars',labels:['A','B'],values:[42,31]},3:{kind:'bars',labels:['A','B'],values:[42,31]}},
'19.10':{0:T(['Group','Q₁','Median','Q₃'],[['A',38,45,51],['B',30,42,54]]),3:T(['Group','Median','IQR'],[['A',52,9],['B',48,15]])}
};
for(const [id,map] of Object.entries(maps)){const all=[...(window.LESSON_CONTENT[id]?.examples||[]),...(window.EXTRA_EXAMPLES[id]||[])];for(const [i,d] of Object.entries(map))if(all[i])all[i].verifiedDiagram=d}
window.VerifiedDiagrams={render};
})();

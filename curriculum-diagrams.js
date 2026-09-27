/* Lightweight question-specific vector diagrams. All dimensions come from question data. */
(function(){
'use strict';
const previous=window.VerifiedDiagrams?.render;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const line=(x,y,a,b,extra='')=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" ${extra}/>`;
const text=(x,y,t,extra='')=>`<text x="${x}" y="${y}" ${extra}>${esc(t)}</text>`;
const svg=(b,label,w=600,h=320)=>`<svg class="curriculum-diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg"><style>.curriculum-diagram{background:#fff;color:#163b49}.curriculum-diagram line,.curriculum-diagram path,.curriculum-diagram polygon,.curriculum-diagram circle{stroke:#167596;stroke-width:2.5;fill:none}.curriculum-diagram text{fill:#163b49;stroke:none;font:19px Arial,sans-serif;text-anchor:middle}.curriculum-diagram .grid{stroke:#dcebf0;stroke-width:1}</style>${b}</svg>`;
function render(d){
 if(!d)return '';
 let b='';
 if(d.kind==='table'){
  const rows=[d.headers,...d.rows],cw=560/d.headers.length;
  rows.forEach((r,i)=>r.forEach((v,j)=>{b+=`<rect x="${20+j*cw}" y="${10+i*42}" width="${cw}" height="42" fill="${i?'#fff':'#dff3fa'}" stroke="#afced9"/>`+text(20+(j+.5)*cw,38+i*42,v);}));
  return svg(b,'Data table',600,rows.length*42+20);
 }
 if(d.kind==='rightTriangle'){
  b='<path d="M100 50 L100 250 L500 250 Z"/><path d="M100 227 L123 227 L123 250"/>';
  b+=text(300,285,d.labels[0])+text(65,156,d.labels[1])+text(325,135,d.labels[2]);
  return svg(b,'Right-angled triangle; '+d.labels.join(', ')+'; not to scale');
 }
 if(d.kind==='rectangle')return svg('<path d="M100 70 H500 V240 H100 Z"/>'+text(300,275,d.labels[0])+text(62,160,d.labels[1]),'Rectangle; '+d.labels.join(' by '));
 if(d.kind==='cuboid'){
  b='<path d="M140 110 H380 V255 H140 Z M140 110 L230 45 H470 V190 L380 255 M380 110 L470 45"/><path d="M140 255 L230 190 H470 M230 45 V190" stroke-dasharray="7 6"/>';
  return svg(b+text(260,288,d.labels[0])+text(442,243,d.labels[1])+text(110,183,d.labels[2]),'Cuboid, not to scale; '+d.labels.join(', '));
 }
 if(d.kind==='compound'){
  const scale=Math.min(400/d.a,220/d.b),x=100,y=35,W=d.a*scale,H=d.b*scale,C=d.c*scale,D=d.d*scale;
  b=`<path d="M${x} ${y} H${x+W-C} V${y+D} H${x+W} V${y+H} H${x} Z"/>`;
  b+=text(x+W/2,y+H+32,d.a+' cm')+text(x-46,y+H/2,d.b+' cm')+text(x+W-C/2,y+D+25,d.c+' cm')+text(x+W-C-28,y+D/2,d.d+' cm');
  return svg(b,'Rectangle with upper-right corner removed');
 }
 if(d.kind==='circle'||d.kind==='semicircle'){
  b=d.kind==='circle'?'<circle cx="290" cy="155" r="110"/>':'<path d="M180 190 A110 110 0 0 1 400 190 Z"/>';
  const y=d.kind==='circle'?155:190;
  b+=line(290,y,400,y)+text(345,y-12,d.r+' cm')+text(280,y+25,'O');
  return svg(b,d.kind+' with radius '+d.r+' cm');
 }
 if(d.kind==='lineAngle'){
  const a=d.angle*Math.PI/180,tx=300+155*Math.cos(a),ty=240-155*Math.sin(a);
  b=line(60,240,540,240)+line(300,240,tx,ty)+text(365,220,d.angle+'°')+text(240,220,'x');
  return svg(b,'Adjacent angles on a straight line, not to scale');
 }
 if(d.kind==='coordinate'||d.kind==='journey'){
  const pts=d.points,L=65,R=545,T=35,B=255;
  const xmin=d.kind==='journey'?0:Math.min(0,...pts.map(p=>p[0]))-2,xmax=Math.max(1,...pts.map(p=>p[0]))+2;
  const ymin=d.kind==='journey'?0:Math.min(0,...pts.map(p=>p[1]))-2,ymax=Math.max(1,...pts.map(p=>p[1]))+2;
  const X=x=>L+(x-xmin)/(xmax-xmin)*(R-L),Y=y=>B-(y-ymin)/(ymax-ymin)*(B-T);
  const step=Math.max(1,Math.ceil(Math.max(xmax-xmin,ymax-ymin)/10));
  for(let x=Math.ceil(xmin/step)*step;x<=xmax;x+=step)b+=line(X(x),T,X(x),B,'class="grid"')+text(X(x),B+23,x);
  for(let y=Math.ceil(ymin/step)*step;y<=ymax;y+=step)b+=line(L,Y(y),R,Y(y),'class="grid"')+text(L-24,Y(y)+6,y);
  b+=line(X(0),T,X(0),B)+line(L,Y(0),R,Y(0));
  if(d.kind==='journey')b+=`<polyline points="${pts.map(p=>[X(p[0]),Y(p[1])].join(',')).join(' ')}" fill="none" stroke="#167596" stroke-width="3"/>`;
  if(d.lines?.length===2){const a=pts[d.lines[0]],c=pts[d.lines[1]];b+=line(X(a[0]),Y(a[1]),X(c[0]),Y(c[1]));}
  pts.forEach(p=>{b+=`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4"/>`+(p[2]?text(X(p[0])+15,Y(p[1])-9,p[2]):'');});
  b+=text(300,310,d.xlabel||'x')+text(18,155,d.ylabel||'y','transform="rotate(-90 18 155)"');
  return svg(b,d.kind==='journey'?'Distance–time graph':'Coordinate grid');
 }
 if(d.kind==='bars'){
  const top=Math.max(...d.values),step=Math.max(1,Math.ceil(top/5)),max=Math.ceil(top/step)*step;
  for(let n=0;n<=max;n+=step){let y=250-210*n/max;b+=line(70,y,550,y,'class="grid"')+text(45,y+6,n);}
  d.values.forEach((v,i)=>{const x=95+i*450/d.values.length;b+=`<rect x="${x}" y="${250-210*v/max}" width="${300/d.values.length}" height="${210*v/max}" fill="#80cde5"/>`+text(x+150/d.values.length,285,d.labels[i]);});
  return svg(b,'Bar chart: '+d.labels.map((l,i)=>l+' '+d.values[i]).join(', '));
 }
 return previous?previous(d):'';
}
window.VerifiedDiagrams={render};
})();

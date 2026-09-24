(function(){
"use strict";
const Q=(p,s,d=null)=>({prompt:p,steps:s,diagram:d});
const t=n=>Number.isInteger(n)?String(n):String(+n.toFixed(3));
const frac=(a,b)=>{const g=(x,y)=>y?g(y,x%y):Math.abs(x),h=g(a,b);a/=h;b/=h;if(b<0){a=-a;b=-b}return b===1?String(a):"\\frac{"+a+"}{"+b+"}"};
const cycle=(arr,n=32)=>Array.from({length:n},(_,i)=>arr[i%arr.length](i));

function surds(){const vals=[[72,36,2],[98,49,2],[108,36,3],[200,100,2],[300,100,3],[75,25,3],[147,49,3],[180,36,5]];
return cycle(vals.map(([n,s,r])=>()=>Q("Simplify [[\\sqrt{"+n+"}]].",["Write [["+n+"="+s+"\\times"+r+"]].","[[\\sqrt{"+n+"}=\\sqrt{"+s+"}\\sqrt{"+r+"}="+Math.sqrt(s)+"\\sqrt{"+r+"}]]."])));}
function rationalise(){const a=[[5,2],[7,3],[6,5],[9,7],[4,3],[11,6],[8,5],[3,2]],b=[[4,3,5],[3,2,3],[5,4,7],[6,5,6],[2,3,2],[7,4,3],[8,5,11],[9,4,7]];
return Array.from({length:32},(_,i)=>{if(i<16){const [m,r]=a[i%8];return Q("Rationalise [[\\frac{"+m+"}{\\sqrt{"+r+"}}]].",["Multiply top and bottom by [[\\sqrt{"+r+"}]].","[[\\frac{"+m+"}{\\sqrt{"+r+"}}\\times\\frac{\\sqrt{"+r+"}}{\\sqrt{"+r+"}}=\\frac{"+m+"\\sqrt{"+r+"}}{"+r+"}]]."])}
const [m,p,r]=b[i%8],den=p*p-r;return Q("Rationalise [[\\frac{"+m+"}{"+p+"-\\sqrt{"+r+"}}]].",["Multiply by the conjugate [["+p+"+\\sqrt{"+r+"}]].","Denominator: [["+p+"^2-"+r+"="+den+"]].","Final answer: [[\\frac{"+m+"("+p+"+\\sqrt{"+r+"})}{"+den+"}]]."])});}
function algfrac(simple=true){return Array.from({length:32},(_,i)=>{const k=i%8,a=2+k,b=3+(k%4),c=1+(k%3);if(simple){
if(i<8){const A=6+2*k,B=9+3*k,m=3+k%3,n=5+k%2,g=(x,y)=>y?g(y,x%y):Math.abs(x),h=g(A,B),aa=A/h,bb=B/h,e=m-n,term=e===0?"1":(e>0?"x^"+e:"\\frac{1}{x^"+(-e)+"}"),ans=bb===1?aa+term:"\\frac{"+aa+(e>0?"x^"+e:"")+"}{"+bb+(e<0?"x^"+(-e):"")+"}";return Q("Simplify [[\\frac{"+A+"x^"+m+"}{"+B+"x^"+n+"}]].",["Reduce the coefficient: [[\\frac{"+A+"}{"+B+"}=\\frac{"+aa+"}{"+bb+"}]].","Subtract indices: [["+m+"-"+n+"="+e+"]].","Final answer: [["+ans+"]], with [[x\\ne0]]."])};
const u=2+k,v=3+(k%5),w=4+(k%4);return Q("Simplify [[\\frac{(x+"+u+")(x-"+v+")}{(x-"+v+")(x+"+w+")}]].",["Factorisation is already visible.","Cancel the complete common factor [[x-"+v+"]].","Result: [[\\frac{x+"+u+"}{x+"+w+"}]], with excluded values from the original denominator."])}
if(i%4===0)return Q("Write [[\\frac{"+a+"}{x}+\\frac{"+b+"}{x+"+c+"}]] as one fraction.",["LCD [[=x(x+"+c+")]].","[[\\frac{"+a+"(x+"+c+")+"+b+"x}{x(x+"+c+")}]].","Final answer: [[\\frac{"+(a+b)+"x+"+(a*c)+"}{x(x+"+c+")}]], with [[x\\ne0,-"+c+"]]."]);
if(i%4===1)return Q("Simplify [[\\frac{"+a+"x}{"+b+"}\\times\\frac{"+c+"}{"+a+"x}]].",["Cancel common factors.","Result: [[\\frac{"+c+"}{"+b+"}]], with [[x\\ne0]]."]);
if(i%4===2)return Q("Simplify [[\\frac{x^2-"+(a*a)+"}{"+b+"x}\\div\\frac{x+"+a+"}{"+c+"x^2}]].",["[[x^2-"+(a*a)+"=(x-"+a+")(x+"+a+")]].","Change division to multiplication by the reciprocal.","Cancel [[x+"+a+"]] and one factor x.","Final answer: [[\\frac{"+c+"x(x-"+a+")}{"+b+"}]]."]);
return Q("Simplify [[\\frac1{x-"+c+"}-\\frac1{x+"+b+"}]].",["Use LCD [[(x-"+c+")(x+"+b+")]].","Numerator [[=(x+"+b+")-(x-"+c+")="+(b+c)+"]].","Final answer: [[\\frac{"+(b+c)+"}{(x-"+c+")(x+"+b+")}]], with [[x\\ne"+c+",-"+b+"]]."])});}
function forming(){const arr=[
()=>Q("Two consecutive integers have a sum of 47. Form an equation.",["Let the first be [[n]].","The next is [[n+1]].","Equation: [[n+(n+1)=47]]."]),
()=>Q("Two consecutive even integers have product 224. Form an equation.",["Let them be [[2n]] and [[2n+2]].","Equation: [[2n(2n+2)=224]]."]),
()=>Q("A rectangle is 4 cm longer than it is wide and has perimeter 52 cm. Form an equation.",["Let width be [[x]].","Length [[=x+4]].","[[2x+2(x+4)=52]]."]),
()=>Q("A taxi charges KD 2.5 plus KD 0.8 per kilometre. A journey costs KD 10.5. Form an equation.",["Let distance be [[d]].","[[2.5+0.8d=10.5]]."]),
()=>Q("Adult tickets cost [[a]] KD and student tickets cost [[s]] KD. Write the cost of 3 adults and 5 students.",["Multiply each price by its quantity.","[[3a+5s]]."]),
()=>Q("A square has side [[x+3]]. Write a formula for its area.",["Area = side².","[[A=(x+3)^2]]."]),
()=>Q("A circle has diameter [[d]]. Write its area in terms of d.",["Radius [[=d/2]].","[[A=\\pi(d/2)^2=\\frac{\\pi d^2}{4}]]."]),
()=>Q("Three adult tickets and two child tickets cost KD 64; two adults and five children cost KD 71. Form simultaneous equations.",["Let prices be [[a]] and [[c]].","[[3a+2c=64]], [[2a+5c=71]]."])
];return cycle(arr);}
function linear(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<8){const a=3+k,b=(k%2?-(2+k):4+k),x=4+k,c=a*x+b;return Q("Solve [["+a+"x"+(b>=0?"+":"")+b+"="+c+"]].",["Move the constant term.","Divide by "+a+".","[[x="+x+"]]."])}
if(i<16){const a=3+k,c=2+(k%3),r=2+k,b=1+(k%4),d=(a*(r+b)/c)-r;return Q("Solve [["+a+"(x+"+b+")="+c+"(x+"+t(d)+")]].",["Expand both brackets.","Collect the x-terms on one side.","Solve and check."])}
if(i<24){const a=3+k,b=2+(k%3),x=2+k,c=(a*x-b);const den=2+(k%4);return Q("Solve [[\\frac{"+den+"x-"+b+"}{"+a+"}="+t((den*x-b)/a)+"]].",["Multiply by the denominator.","Isolate the x-term.","Divide to find x."])}
const rate=[1.2,.75,1.5,.9,2.2,1.1,.8,1.6][k],fixed=[3.5,2,4,5,1.5,2.7,4.2,3][k],units=5+k,total=+(fixed+rate*units).toFixed(2);return Q("A service costs KD "+fixed+" plus KD "+rate+" per unit. The total is KD "+total+". Find the number of units.",["Let the number of units be [[x]].","Form and solve the linear equation.","[[x="+units+"]]."])});}
function quadratic(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<8){const r1=1+k%4,r2=4+k%5,b=-(r1+r2),c=r1*r2;return Q("Solve [[x^2"+(b>=0?"+":"")+b+"x+"+c+"=0]].",["Factorise into two brackets.","Set each factor equal to zero.","Solutions: [[x="+r1+"]] or [[x="+r2+"]]."])}
if(i<16){const b=2*(2+k%4),c=-7+k;const h=b/2,constant=c-h*h;return Q("Write [[x^2+"+b+"x"+(c>=0?"+":"")+c+"]] in completed-square form.",["Half the coefficient of x: [["+h+"]].","[[x^2+"+b+"x=(x+"+h+")^2-"+(h*h)+"]].","Final form: [[(x+"+h+")^2"+(constant>=0?"+":"")+constant+"]]."])}
if(i<24){const a=2+k%3,b=1+k,c=-(2+k%5),D=b*b-4*a*c;return Q("Solve [["+a+"x^2+"+b+"x"+c+"=0]] using the quadratic formula.",["Identify [[a="+a+",b="+b+",c="+c+"]].","Discriminant [[="+D+"]].","[[x=\\frac{-"+b+"\\pm\\sqrt{"+D+"}}{"+(2*a)+"}]]."])}
const w=2+k%4,add=3+k%3,area=w*(w+add);return Q("A rectangle has width [[x]] and length [[x+"+add+"]]. Its area is "+area+". Find x.",["[[x(x+"+add+")="+area+"]].","[[x^2+"+add+"x-"+area+"=0]].","Factorise: [[(x-"+w+")(x+"+(w+add)+")=0]].","The positive root is [[x="+w+"]]."])});}
function fractionalEq(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<8){const a=3+k,b=1+k%4,x=4+k,c=x/a+b;return Q("Solve [[\\frac{x}{"+a+"}+"+b+"="+t(c)+"]].",["Subtract "+b+".","Multiply by "+a+".","[[x="+x+"]]."])}
if(i<16){const b=1+k%4,c=2+k%3,x=b+2;const a=c*(x-b);return Q("Solve [[\\frac{"+a+"}{x-"+b+"}="+c+"]].",["State [[x\\ne"+b+"]].","[[ "+a+"="+c+"(x-"+b+") ]].","[[x-"+b+"="+(x-b)+"]].","[[x="+x+"]]."])}
if(i<24){const b=1+k%3,d=2+k%4,a=2+k,c=3+k%4,num=-(a*d+c*b),den=a-c;return Q("Solve [[\\frac{"+a+"}{x-"+b+"}=\\frac{"+c+"}{x+"+d+"}]].",["Restrictions: [[x\\ne"+b+",-"+d+"]].","[["+a+"(x+"+d+")="+c+"(x-"+b+")]].","[["+(a-c)+"x="+num+"]].","[[x="+frac(num,den)+"]]."])}
const a=3+k,b=4+(k%3),d=5+k,L=a*b,num=d*L+a,den=a+b;return Q("Solve [[\\frac{x}{"+a+"}+\\frac{x-1}{"+b+"}="+d+"]].",["Multiply by [["+L+"]]: [["+b+"x+"+a+"(x-1)="+(d*L)+"]].","[["+(a+b)+"x-"+a+"="+(d*L)+"]].","[["+(a+b)+"x="+num+"]].","[[x="+frac(num,den)+"]]."])});}
function simultaneous(linearOnly=true){return Array.from({length:32},(_,i)=>{const k=i%8;if(!linearOnly){const circle=[
 [1,1,25,[[3,4],[-4,-3]]],
 [1,-1,13,[[3,2],[-2,-3]]],
 [-1,2,13,[[-1,3],[3,-1]]],
 [0,3,25,[[4,3],[-4,3]]]
],para=[
 [1,2,-4,[[3,5],[-2,0]]],
 [2,3,3,[[0,3],[2,7]]],
 [-1,2,-4,[[2,0],[-3,5]]],
 [1,-1,-7,[[3,2],[-2,-3]]]
];if(i%2===0){const z=circle[Math.floor(i/2)%circle.length],m=z[0],n=z[1],R=z[2],pts=z[3];return Q("Solve simultaneously [[y="+m+"x"+(n>=0?"+":"")+n+"]] and [[x^2+y^2="+R+"]].",["Substitute y: [[x^2+("+m+"x"+(n>=0?"+":"")+n+")^2="+R+"]].","Expand and factorise the resulting quadratic.","Solutions: [[("+pts[0][0]+","+pts[0][1]+")]] and [[("+pts[1][0]+","+pts[1][1]+")]]."],{kind:"line-circle",m,n,R})}
const z=para[Math.floor(i/2)%para.length],m=z[0],n=z[1],cc=z[2],pts=z[3];return Q("Solve simultaneously [[y="+m+"x"+(n>=0?"+":"")+n+"]] and [[y=x^2"+(cc>=0?"+":"")+cc+"]].",["Set equal: [["+m+"x"+(n>=0?"+":"")+n+"=x^2"+(cc>=0?"+":"")+cc+"]].","Rearrange and factorise the quadratic.","Solutions: [[("+pts[0][0]+","+pts[0][1]+")]] and [[("+pts[1][0]+","+pts[1][1]+")]]."],{kind:"line-parabola",m,n,c:cc})}
if(i<16){const x=2+k%4,y=3+k%5,a=2+k%3,b=1+k%2,d=1+k%2,e=-(1+k%3),c=a*x+b*y,f=d*x+e*y;return Q("Solve [["+a+"x"+(b>=0?"+":"")+b+"y="+c+"]] and [["+d+"x"+(e>=0?"+":"")+e+"y="+f+"]].",["Use elimination or substitution.","Eliminate one variable.","[[x="+x+", y="+y+"]]."])}
if(i<24){const x=1+k%4,m=2+k%3,n=1+k%2,y=m*x+n,a=2+k%3,c=a*x+y;return Q("Solve [[y="+m+"x+"+n+"]] and [["+a+"x+y="+c+"]].",["Substitute the first equation into the second.","Solve for x.","Substitute back to find y."])}
const cPrice=1.5+.5*(k%4),tPrice=1+.25*(k%3),c1=2+k%3,t1=2+(k+1)%3,c2=c1+2,t2=t1,total1=+(c1*cPrice+t1*tPrice).toFixed(2),total2=+(c2*cPrice+t2*tPrice).toFixed(2);return Q(c1+" coffees and "+t1+" teas cost KD "+total1+"; "+c2+" coffees and "+t2+" teas cost KD "+total2+". Find both prices.",["Form two simultaneous equations.","Subtract to eliminate tea.","Coffee = KD "+cPrice+", tea = KD "+tPrice+"."])});}
function rearrange(){const arr=[
()=>Q("Make [[x]] the subject of [[y=3x-5]].",["[[y+5=3x]].","[[x=\\frac{y+5}{3}]]."]),
()=>Q("Make [[r]] the subject of [[A=\\pi r^2]].",["[[r^2=\\frac A\\pi]].","[[r=\\sqrt{\\frac A\\pi}]]."]),
()=>Q("Make [[t]] the subject of [[v=u+at]].",["[[v-u=at]].","[[t=\\frac{v-u}{a}]]."]),
()=>Q("Make [[x]] the subject of [[a=\\frac{bx+c}{d}]].",["[[ad=bx+c]].","[[x=\\frac{ad-c}{b}]]."]),
()=>Q("Make [[x]] the subject of [[y=ax+bx+c]].",["[[y-c=x(a+b)]].","[[x=\\frac{y-c}{a+b}]]."]),
()=>Q("Make [[x]] the subject of [[y=\\frac{ax+b}{cx+d}]].",["[[y(cx+d)=ax+b]].","Collect x-terms.","[[x=\\frac{b-yd}{yc-a}]]."]),
()=>Q("Make [[h]] the subject of [[V=\\frac13\\pi r^2h]].",["[[3V=\\pi r^2h]].","[[h=\\frac{3V}{\\pi r^2}]]."]),
()=>Q("Make [[x]] the subject of [[p=\\sqrt{x+q}]].",["Square both sides.","[[x=p^2-q]]."])
];return cycle(arr);}
function numberline(){const specs=[[-2,4,false,true],[-1,5,true,false],[1,6,true,true],[-4,2,false,false],[0,3,false,true],[2,7,true,false],[-5,-1,true,true],[-3,3,false,false]];
return cycle(specs.map(([a,b,cl,cr])=>()=>Q("Represent [["+a+(cl?"\\le":"<")+"x"+(cr?"\\le":"<")+b+"]] on a number line.",["Use a "+(cl?"closed":"open")+" circle at "+a+".","Use a "+(cr?"closed":"open")+" circle at "+b+".","Shade between the endpoints."],{kind:"numberline",a,b,cl,cr})));}
function linearIneq(){return Array.from({length:32},(_,i)=>{const k=i%8;if(i<16){const a=[3,5,-2,4,-3,6,-5,7][k],b=[4,-7,5,-3,7,8,2,-4][k],x=2+k,c=a*x+b,sg=["<",">","\\ge","\\le"][k%4],flip=a<0;return Q("Solve [["+a+"x"+(b>=0?"+":"")+b+sg+c+"]].",["Isolate the x-term.",flip?"Divide by a negative, so reverse the sign.":"Divide by the coefficient of x.","State the solution clearly."])}
const a=2+k%3,b=-2+k%5,lo=-3+k,hi=9+k;return Q("Solve [["+lo+"\\le"+a+"x"+(b>=0?"+":"")+b+"<"+hi+"]].",["Subtract the constant throughout.","Divide all three parts by "+a+".","Write the compound solution."])});}
function graphIneq(region=false){const base=region?[
()=>Q("A region is above [[y=x]], below [[y=5]], and right of [[x=1]]. List the inequalities.",["[[y\\ge x]], [[y\\le5]], [[x\\ge1]]."],{kind:"region",v:0}),
()=>Q("A triangular region is bounded by the axes and [[x+y=6]]. List the inequalities.",["[[x\\ge0]], [[y\\ge0]], [[x+y\\le6]]."],{kind:"region",v:1}),
()=>Q("A region is left of [[x=4]], above [[y=-1]], and below [[y=2x+3]].",["[[x\\le4]], [[y\\ge-1]], [[y\\le2x+3]]."],{kind:"region",v:2}),
()=>Q("A region is between [[y=x-2]] and [[y=x+3]], with [[0\\le x\\le5]].",["[[y\\ge x-2]], [[y\\le x+3]], [[0\\le x\\le5]]."],{kind:"region",v:3})
]:[
()=>Q("Graph [[y>2x-1]].",["Draw [[y=2x-1]] dashed.","Test [[(0,0)]].","Shade the side that satisfies the inequality."],{kind:"ineq-line",m:2,c:-1,solid:false}),
()=>Q("Graph [[y\\le-x+4]].",["Draw [[y=-x+4]] solid.","Test [[(0,0)]].","Shade the correct side."],{kind:"ineq-line",m:-1,c:4,solid:true}),
()=>Q("Graph [[x+y<6]].",["Boundary [[x+y=6]] is dashed.","Test [[(0,0)]].","Shade the satisfying side."],{kind:"ineq-line2",a:1,b:1,c:6,solid:false}),
()=>Q("Graph [[x\\ge3]].",["Draw solid vertical line [[x=3]].","Shade to the right."],{kind:"ineq-vertical",x:3,solid:true}),
()=>Q("Graph [[y<-2]].",["Draw dashed horizontal line [[y=-2]].","Shade below."],{kind:"ineq-horizontal",y:-2,solid:false}),
()=>Q("Graph [[2x+y\\ge4]].",["Boundary [[y=4-2x]] is solid.","Test a point.","Shade the correct half-plane."],{kind:"ineq-line2",a:2,b:1,c:4,solid:true})
];return cycle(base);}
function angles(kind){const sets={
angles:[
()=>Q("Find x on a straight line if the adjacent angle is [[128^\\circ]].",["Straight line total 180°.","[[x=52^\\circ]]."],{kind:"straight-angle",a:128}),
()=>Q("Two lines cross. One angle is [[115^\\circ]]. Find the opposite and an adjacent angle.",["Opposite = 115°.","Adjacent [[=65^\\circ]]."],{kind:"vertical-angles",a:115}),
()=>Q("Around a point the angles are [[x,2x,4x,150^\\circ]]. Find x.",["Total 360°.","[[7x+150=360]].","[[x=30^\\circ]]."],{kind:"around-point",fixed:150}),
()=>Q("The angles of a quadrilateral are [[2x,3x,4x,5x]]. Find x.",["Total 360°.","[[14x=360]].","[[x=180/7^\\circ]]."],{kind:"quadrilateral"}),
()=>Q("An exterior angle is 128° and one opposite interior angle is 53°. Find the other.",["Exterior angle = sum of opposite interior angles.","[[x=128-53=75^\\circ]]."],{kind:"exterior-triangle",ext:128,a:53}),
()=>Q("An isosceles triangle has vertex angle 44°. Find each base angle.",["Remaining total 136°.","Divide by 2.","Each base angle = 68°."],{kind:"isosceles",vertex:44}),
()=>Q("A triangle has angles [[3x,4x,5x]]. Find x.",["[[12x=180]].","[[x=15^\\circ]]."],{kind:"triangle-multiple"}),
()=>Q("A reflex angle is 250°. Find the smaller angle around the point.",["[[360-250=110^\\circ]]."],{kind:"reflex",a:250})
],
parallel:[
()=>Q("Corresponding angles are [[3x+10]] and [[5x-30]]. Find x.",["Corresponding angles are equal.","[[3x+10=5x-30]].","[[x=20]]."],{kind:"parallel-corresponding",a:70}),
()=>Q("A co-interior angle is 117°. Find the other.",["Co-interior angles sum to 180°.","[[63^\\circ]]."],{kind:"parallel-cointerior",a:117}),
()=>Q("An alternate angle is 68°. Find the matching alternate angle.",["Alternate angles are equal.","[[68^\\circ]]."],{kind:"parallel-alternate",a:68}),
()=>Q("One corresponding angle is 124°. Find the adjacent acute angle.",["Corresponding angle = 124°.","Adjacent [[=56^\\circ]]."],{kind:"parallel-mixed",a:124}),
()=>Q("Co-interior angles are [[4x+8]] and [[6x+12]]. Find x.",["Their sum is 180°.","[[10x+20=180]].","[[x=16]]."],{kind:"parallel-cointerior-algebra"}),
()=>Q("Corresponding angles are [[2x+17]] and [[5x-34]]. Find x.",["Set equal.","[[3x=51]].","[[x=17]]."],{kind:"parallel-corresponding-algebra"}),
()=>Q("An obtuse angle on a transversal is 132°. Find an adjacent acute angle.",["Straight line total 180°.","[[48^\\circ]]."],{kind:"parallel-adjacent",a:132}),
()=>Q("Explain why two lines are parallel if a pair of alternate angles are equal.",["Converse of the alternate-angle theorem."],{kind:"parallel-proof",a:64})
],
polygons:[
()=>Q("Find the interior angle sum of a hexagon.",["[[(6-2)180=720^\\circ]]."],{kind:"polygon-triangulate",n:6}),
()=>Q("Find each exterior angle of a regular octagon.",["[[360/8=45^\\circ]]."],{kind:"regular-polygon",n:8}),
()=>Q("A regular polygon has exterior angle 24°. Find its number of sides.",["[[n=360/24=15]]."],{kind:"exterior-angle",a:24}),
()=>Q("Four interior angles of a pentagon are 104°,118°,95°,132°. Find the fifth.",["Pentagon total 540°.","Known total 449°.","Missing 91°."],{kind:"irregular-pentagon"}),
()=>Q("Find each interior angle of a regular decagon.",["Interior total 1440°.","[[1440/10=144^\\circ]]."],{kind:"regular-polygon",n:10}),
()=>Q("A regular polygon has interior angle 150°. Find the number of sides.",["Exterior angle 30°.","[[360/30=12]]."],{kind:"regular-polygon",n:12}),
()=>Q("Why do exterior angles of any polygon total 360°?",["Walking once around makes one full turn = 360°."],{kind:"exterior-walk",n:5}),
()=>Q("A regular 18-gon: find each interior angle.",["Exterior [[=360/18=20^\\circ]].","Interior [[=160^\\circ]]."],{kind:"regular-polygon",n:18})
]};return cycle(sets[kind]);}
function symmetry(solid=false){const a=solid?[
()=>Q("Describe the symmetry of a right circular cylinder.",["Infinitely many vertical planes through its axis.","One horizontal mid-plane.","Continuous rotational symmetry about its axis."],{kind:"solid-cylinder"}),
()=>Q("How many planes of symmetry does a cube have?",["9 planes."],{kind:"solid-cube"}),
()=>Q("A regular triangular prism: state rotational order about its long axis.",["Equilateral end repeats every 120°.","Order 3."],{kind:"solid-tri-prism"}),
()=>Q("Describe one plane of symmetry of a cone.",["Any plane through the central axis."],{kind:"solid-cone"}),
()=>Q("Describe the symmetry of a sphere.",["Every plane through the centre is a symmetry plane.","Continuous rotational symmetry about any diameter."],{kind:"solid-sphere"}),
()=>Q("A regular square-based pyramid: state rotational order about the vertical axis.",["Repeats every 90°.","Order 4."],{kind:"solid-pyramid"}),
()=>Q("Which has more symmetry planes: cube or unequal cuboid?",["Cube: 9.","General cuboid: 3."],{kind:"solid-cuboid"}),
()=>Q("Describe the key symmetry feature of a regular tetrahedron.",["Its identical equilateral faces create multiple planes and rotational symmetries."],{kind:"solid-tetra"})
]:[
()=>Q("State the symmetry of a rectangle.",["2 lines of symmetry.","Rotational order 2."],{kind:"sym-rectangle"}),
()=>Q("State the symmetry of a regular hexagon.",["6 lines.","Rotational order 6."],{kind:"sym-hexagon"}),
()=>Q("A shape has rotational order 5. Find the smallest rotation.",["[[360/5=72^\\circ]]."],{kind:"sym-order",n:5}),
()=>Q("State the symmetry of a rhombus.",["2 diagonal lines.","Rotational order 2."],{kind:"sym-rhombus"}),
()=>Q("State the symmetry of a kite.",["Usually 1 line.","Rotational order 1."],{kind:"sym-kite"}),
()=>Q("State the symmetry of an equilateral triangle.",["3 lines.","Rotational order 3."],{kind:"sym-triangle"}),
()=>Q("Will a regular octagon map onto itself after 135°?",["Smallest angle 45°.","135° = 3×45°, so yes."],{kind:"sym-octagon"}),
()=>Q("State the symmetry of a general parallelogram.",["No line symmetry.","Rotational order 2."],{kind:"sym-parallelogram"})
];return cycle(a);}
function units(){const a=[
()=>Q("Convert [[3.4\\text{ m}]] to cm.",["Multiply by 100.","[[340\\text{ cm}]]."]),
()=>Q("Convert [[2.5\\text{ m}^2]] to cm².",["Square the scale factor: [[100^2]].","[[25000\\text{ cm}^2]]."]),
()=>Q("Convert [[0.018\\text{ m}^3]] to litres.",["[[1\\text{ m}^3=1000\\text{ L}]].","[[18\\text{ L}]]."]),
()=>Q("Convert 4500 g to kg.",["Divide by 1000.","4.5 kg."]),
()=>Q("Convert 2.7 km to m.",["Multiply by 1000.","2700 m."]),
()=>Q("Convert 850 ml to litres.",["Divide by 1000.","0.85 L."]),
()=>Q("Convert 75000 cm² to m².",["Divide by 10000.","7.5 m²."]),
()=>Q("Convert 2.4 m³ to cm³.",["Multiply by 1,000,000.","2,400,000 cm³."])
];return cycle(a);}
function mensuration(type){const sets={
area:[
()=>Q("Find the area of a parallelogram with base 8 cm and height 3.5 cm.",["[[A=bh]].","[[28\\text{ cm}^2]]."],{kind:"parallelogram",b:8,h:3.5}),
()=>Q("A trapezium has parallel sides 8 cm and 14 cm, height 6 cm. Find area.",["[[A=\\frac12(a+b)h]].","[[66\\text{ cm}^2]]."],{kind:"trapezium",a:8,b:14,h:6}),
()=>Q("A triangle has base 12 cm and height 7 cm. Find area.",["[[A=\\frac12bh=42\\text{ cm}^2]]."],{kind:"triangle-area",b:12,h:7}),
()=>Q("An L-shape is a 12×9 rectangle with a 5×4 rectangle removed. Find area.",["Outer 108.","Removed 20.","Area 88 cm²."],{kind:"l-shape",W:12,H:9,w:5,h:4}),
()=>Q("A trapezium has area 63 cm², height 6 cm and one side 8 cm. Find the other parallel side.",["[[63=\\frac12(8+b)6]].","[[b=13]]."],{kind:"trapezium",a:8,b:13,h:6}),
()=>Q("Find the perimeter of the compound rectilinear shape.",["Find any missing aligned lengths.","Add each exposed edge once."],{kind:"compound-rect"}),
()=>Q("A kite has perpendicular diagonals 10 cm and 16 cm. Find area.",["[[A=\\frac12d_1d_2]].","80 cm²."],{kind:"kite-area",d1:10,d2:16}),
()=>Q("A rhombus has diagonals 12 cm and 9 cm. Find area.",["[[A=54\\text{ cm}^2]]."],{kind:"rhombus-area",d1:12,d2:9})
],
circle:[
()=>Q("Find circumference of a circle of radius 7 cm.",["[[C=2\\pi r=14\\pi\\text{ cm}]]."],{kind:"circle-radius",r:7}),
()=>Q("Find area of a circle of diameter 12 cm.",["Radius 6.","[[A=36\\pi\\text{ cm}^2]]."],{kind:"circle-diameter",d:12}),
()=>Q("A circle has area [[81\\pi]]. Find radius.",["[[r^2=81]].","[[r=9]]."],{kind:"circle-area",r:9}),
()=>Q("A semicircle has diameter 10 cm. Find area.",["Radius 5.","[[A=25\\pi/2]]."],{kind:"semicircle",d:10}),
()=>Q("Find area of annulus with radii 5 cm and 3 cm.",["[[25\\pi-9\\pi=16\\pi]]."],{kind:"annulus",R:5,r:3}),
()=>Q("A circle fits inside a square side 14 cm. Find area outside the circle.",["Square 196.","Circle 49π.","[[196-49\\pi]]."],{kind:"circle-square",s:14}),
()=>Q("Circumference is [[20\\pi]]. Find radius.",["[[2\\pi r=20\\pi]].","[[r=10]]."],{kind:"circle-radius",r:10}),
()=>Q("A circular track has radius 35 m. Find one lap distance.",["[[C=70\\pi\\text{ m}]]."],{kind:"circle-track",r:35})
],
sector:[
()=>Q("Sector radius 6 cm, angle 40°. Find area.",["[[A=40/360\\times36\\pi=4\\pi]]."],{kind:"sector",r:6,a:40}),
()=>Q("Sector radius 8 cm, angle 120°. Find arc length.",["[[L=120/360\\times16\\pi=16\\pi/3]]."],{kind:"sector",r:8,a:120}),
()=>Q("Sector radius 8 cm, angle 120°. Find perimeter.",["Arc [[=16\\pi/3]].","Add 16.","[[P=16+16\\pi/3]]."],{kind:"sector-perimeter",r:8,a:120}),
()=>Q("Radius 12 cm, arc length [[5\\pi]]. Find angle.",["Solve [[5\\pi=\\theta/360\\times24\\pi]].","[[\\theta=75^\\circ]]."],{kind:"sector",r:12,a:75}),
()=>Q("Major sector radius 6 cm, minor angle 120°. Find area.",["Major angle 240°.","[[A=24\\pi]]."],{kind:"major-sector",r:6,a:240}),
()=>Q("Sector area [[18\\pi]], radius 9 cm. Find angle.",["Solve [[18\\pi=\\theta/360\\times81\\pi]].","[[\\theta=80^\\circ]]."],{kind:"sector",r:9,a:80}),
()=>Q("A 90° sector has radius 10 cm. Find arc length and area.",["Arc [[=5\\pi]].","Area [[=25\\pi]]."],{kind:"sector",r:10,a:90}),
()=>Q("A semicircular sector has radius 7 cm. Find perimeter.",["Arc [[=7\\pi]].","Add diameter 14.","[[14+7\\pi]]."],{kind:"sector-perimeter",r:7,a:180})
]};return cycle(sets[type]);}
function stats(type){const sets={
tables:[
()=>Q("Classify eye colour, number of siblings and height.",["Eye colour: categorical.","Siblings: discrete.","Height: continuous."],{kind:"data-types"}),
()=>Q("18 boys, 22 girls; 11 boys and 14 girls choose football. Complete the two-way table.",["Boys other 7.","Girls other 8.","Totals: 25,15,40."],{kind:"two-way",vals:[11,7,14,8]}),
()=>Q("Group 2.4, 4.9, 5.0, 8.7, 9.9, 10.0, 13.2 into 0≤x<5, 5≤x<10, 10≤x<15.",["Frequencies 2,3,2."],{kind:"group-classes"}),
()=>Q("Why write [[0\\le x<10]] instead of '0-10'?",["It makes boundaries unambiguous and avoids overlap."],{kind:"class-boundaries"}),
()=>Q("Construct tally/frequency table for A,A,B,C,A,B,B,C,C,C.",["A=3, B=3, C=4."],{kind:"tally"}),
()=>Q("Write a stem-and-leaf diagram for 12,14,17,21,21,25,29,33.",["1 | 2 4 7; 2 | 1 1 5 9; 3 | 3.","Include a key."],{kind:"stem-leaf"}),
()=>Q("State whether shoe size is discrete or continuous.",["Discrete in this context."],{kind:"data-types"}),
()=>Q("Which table layout is best for two categorical variables?",["A two-way table."],{kind:"two-way",vals:[8,5,6,7]})
],
averages:[
()=>Q("Find mean, median, mode and range of 4,6,6,9,10.",["Mean 7.","Median 6, mode 6.","Range 6."],{kind:"raw-dot",vals:[4,6,6,9,10]}),
()=>Q("For 2,3,5,6,7,9,12,18 find Q1,Q3,IQR.",["Q1=4.","Q3=10.5.","IQR=6.5."],{kind:"boxplot"}),
()=>Q("Why might median be preferred for salaries?",["Extreme salaries can distort the mean.","Median is more resistant."],{kind:"outlier"}),
()=>Q("A: median 42, IQR 6. B: median 39, IQR 14. Compare.",["A higher centre.","A more consistent."],{kind:"compare-box"}),
()=>Q("Mean of five numbers is 12. Four sum to 43. Find fifth.",["Total 60.","Fifth =17."],{kind:"mean-balance"}),
()=>Q("Range 18, minimum 7. Find maximum.",["Maximum =25."],{kind:"range-line"}),
()=>Q("Best average for eye colour?",["Mode only."],{kind:"averages-choice"}),
()=>Q("Data 4,4,4,5,6,100: explain mean vs median.",["Outlier makes mean much larger.","Median better represents main cluster."],{kind:"outlier"})
],
"grouped-mean":[
()=>Q("Classes 0-10,10-20,20-30; frequencies 3,7,5. Estimate mean.",["Midpoints 5,15,25.","Σfx=245.","Mean ≈16.33."],{kind:"grouped-mean"}),
()=>Q("Classes 20-30,30-40,40-50; frequencies 4,9,7. Estimate mean.",["Midpoints 25,35,45.","Σfx=730.","Mean 36.5."],{kind:"grouped-mean"}),
()=>Q("Why is grouped mean an estimate?",["Exact values are unknown; midpoints stand in for them."],{kind:"midpoint"}),
()=>Q("Class midpoint 35, width 10. Give a class interval.",["One example: 30≤x<40."],{kind:"class-midpoint"}),
()=>Q("Σfx=960, total frequency 32. Estimate mean.",["[[960/32=30]]."],{kind:"fx-table"}),
()=>Q("Class 50-60 has frequency 8. Find contribution to Σfx.",["Midpoint 55.","[[8\\times55=440]]."],{kind:"midpoint"}),
()=>Q("Groups 1-3,4-6,7-9 with frequencies 4,8,3. Estimate mean.",["Midpoints 2,5,8.","Σfx=72.","Mean=4.8."],{kind:"grouped-mean"}),
()=>Q("Why multiply midpoint by frequency?",["It estimates the class total represented by that midpoint."],{kind:"midpoint"})
],
modalclass:[
()=>Q("Frequencies 4,11,7. State modal class.",["The class with frequency 11."],{kind:"modal-class"}),
()=>Q("Frequencies 3,8,12,5. Identify median class.",["Total 28, median around 14th/15th.","CF 3,11,23,28 → third class."],{kind:"median-class"}),
()=>Q("Frequencies 8,14,19,9. Identify modal and median class.",["Both are the third class."],{kind:"modal-median"}),
()=>Q("Why is exact median usually unavailable from grouped data?",["Raw values are unknown; only the class is exact."],{kind:"grouped-warning"}),
()=>Q("What does 'modal class 30≤x<40' mean?",["That interval has the greatest frequency."],{kind:"modal-class"}),
()=>Q("CF 6,17,31,40. Which class contains Q1?",["Q1 near 10th value → second class."],{kind:"cf-table"}),
()=>Q("Total frequency 60. Median CF position?",["30."],{kind:"cf-table"}),
()=>Q("Why can modal and median classes differ?",["Mode uses largest class frequency; median uses cumulative halfway position."],{kind:"modal-median"})
],
"data-interpret":[
()=>Q("18/30 pass in A; 20/40 in B. Which rate is higher?",["A=60%, B=50%.","A higher."],{kind:"comparison-table"}),
()=>Q("42 boys,38 girls; 20 boys and24 girls choose art. Compare percentages.",["Boys≈47.6%.","Girls≈63.2%.","Girls higher."],{kind:"two-way-percent"}),
()=>Q("72 French,54 Spanish,30 both out of 120. How many study at least one?",["[[72+54-30=96]]."],{kind:"two-way-overlap"}),
()=>Q("Why compare percentages when group sizes differ?",["Percentages give a like-for-like comparison."],{kind:"comparison-table"}),
()=>Q("A two-way table totals 80. A total=35, X total=28, A∩X=12. Complete other cells.",["A not X=23.","B in X=16.","B not X=29."],{kind:"two-way",vals:[12,23,16,29]}),
()=>Q("Frequency rises 24 to 30. Find percentage increase.",["Increase 6.","[[6/24\\times100=25%]]."],{kind:"table-change"}),
()=>Q("63% of 240 prefer A. Estimate number.",["[[0.63\\times240=151.2]].","About 151."],{kind:"percent-table"}),
()=>Q("Which category is least common if frequencies are 15,22,18,5?",["Fourth category."],{kind:"freq-table"})
],
"data-compare":[
()=>Q("A: median62,IQR8. B: median58,IQR15. Compare.",["A higher typical value.","A more consistent."],{kind:"two-box"}),
()=>Q("X mean12.4,range6. Y mean13.1,range20. Compare.",["Y higher mean.","X much more consistent."],{kind:"summary-cards"}),
()=>Q("Why pair median with IQR?",["Both are resistant to outliers and describe centre/spread consistently."],{kind:"boxplot"}),
()=>Q("Machines: means250,252; ranges18,6. Compare.",["B slightly higher mean.","B much more consistent."],{kind:"summary-cards"}),
()=>Q("A median64,IQR8; B median59,IQR5. Compare.",["A higher centre.","B more consistent."],{kind:"two-box"}),
()=>Q("Same mean20; ranges4 and11. Compare.",["Same centre by mean.","First is more consistent."],{kind:"summary-cards"}),
()=>Q("Same medians but one box plot has shorter box.",["Same central value.","Shorter box = smaller IQR = more consistent."],{kind:"two-box"}),
()=>Q("Higher median but larger IQR: give balanced comparison.",["Higher typical value but less consistency."],{kind:"two-box"})
],
"data-limits":[
()=>Q("Survey of 40 gym members finds 80% exercise weekly. Generalise to all adults?",["No; gym members are not representative."],{kind:"sample-pop"}),
()=>Q("Ice-cream sales and sunburn correlate. Causation?",["No; sunny weather is a confounding variable."],{kind:"causation"}),
()=>Q("Website poll has 20,000 responses. Automatically representative?",["No; self-selection can bias it."],{kind:"voluntary"}),
()=>Q("Only top maths set surveyed about homework. Limitation?",["Not representative of whole year."],{kind:"sample-bias"}),
()=>Q("Axis starts at96 comparing98 and100. Risk?",["Visual difference is exaggerated."],{kind:"truncated-axis"}),
()=>Q("Best-fit line used far outside data range. Issue?",["Extrapolation; trend may not continue."],{kind:"extrapolation"}),
()=>Q("Only 12 volunteers sampled. Give cautions.",["Small sample.","Volunteer bias."],{kind:"voluntary"}),
()=>Q("Measurement error affects a correlation study. How?",["It can distort the observed relationship and weaken conclusions."],{kind:"causation"})
],
charts:[
()=>Q("Frequencies A12,B18,C6,D4. Find pie angles.",["Total40, so each unit =9°.","108°,162°,54°,36°."],{kind:"pie-data"}),
()=>Q("Construct stem-and-leaf for 12,14,17,21,21,25,29,33.",["Order leaves.","Include a key."],{kind:"stem-leaf"}),
()=>Q("Pictogram key 1 symbol=8 people. What is 2.5 symbols?",["20 people."],{kind:"pictogram"}),
()=>Q("Best chart for comparing categories A-D?",["Bar chart."],{kind:"bar"}),
()=>Q("Pie sector72° from total150. Find frequency.",["[[72/360=1/5]].","30."],{kind:"pie"}),
()=>Q("Why join points on a time-series line graph?",["Time order makes continuous change meaningful."],{kind:"line-graph"}),
()=>Q("Should categorical bar-chart bars touch?",["Usually no; touching bars are typical for histograms."],{kind:"bar"}),
()=>Q("What must a comparative-bar key identify?",["Which colour/pattern represents each group."],{kind:"comparative-bar"})
],
scatter:[
()=>Q("Describe the correlation shown.",["Positive correlation."],{kind:"scatter",v:0}),
()=>Q("Identify the outlier.",["Choose the point furthest from the main pattern."],{kind:"scatter-outlier",v:1}),
()=>Q("Why should scatter points not be joined?",["They are separate paired observations."],{kind:"scatter",v:2}),
()=>Q("Points lie closely around a downward trend. Describe.",["Strong negative correlation."],{kind:"scatter",v:3}),
()=>Q("Points show no clear trend. Describe.",["Zero/no correlation."],{kind:"scatter",v:4}),
()=>Q("Height vs arm span: what kind of data?",["Bivariate numerical data."],{kind:"scatter",v:5}),
()=>Q("Before deleting an outlier, what should be checked?",["Whether it is an error or a genuine unusual observation."],{kind:"scatter-outlier",v:6}),
()=>Q("Dense cluster around a straight trend suggests what?",["A stronger linear relationship."],{kind:"scatter",v:7})
],
correlation:[
()=>Q("Temperature rises while heating use falls. Correlation?",["Negative."],{kind:"corr-negative"}),
()=>Q("Revision time rises while test score tends to rise. Correlation?",["Positive."],{kind:"corr-positive"}),
()=>Q("Shoe size and favourite colour show no pattern.",["Zero/no correlation."],{kind:"corr-zero"}),
()=>Q("Why does correlation not prove causation?",["A third variable may influence both."],{kind:"corr-causation"}),
()=>Q("Umbrella sales and traffic delays both rise on rainy days. Confounder?",["Rainfall/weather."],{kind:"corr-confound"}),
()=>Q("Correlation coefficient close to -1 means?",["Strong negative linear relationship."],{kind:"corr-negative"}),
()=>Q("A curved pattern has weak linear correlation. Is there necessarily no relationship?",["No; there may be a strong non-linear relationship."],{kind:"corr-curved"}),
()=>Q("What does very weak positive correlation look like?",["Slight upward tendency with large scatter."],{kind:"corr-weak"})
],
bestfit:[
()=>Q("Best-fit line through about (2,5),(8,17). Estimate y at x=5.",["Gradient≈2.","Line≈[[y=2x+1]].","y≈11."],{kind:"best-fit",v:0}),
()=>Q("Observed x 10-50; predict at x=35. Interpolation or extrapolation?",["Interpolation."],{kind:"best-fit-range",inside:true}),
()=>Q("Observed x 10-50; predict at x=90.",["Extrapolation; less reliable."],{kind:"best-fit-range",inside:false}),
()=>Q("Should a best-fit line pass through every point?",["No; it should reflect the overall trend."],{kind:"best-fit",v:1}),
()=>Q("Why is extrapolation less reliable?",["Trend may change beyond the observed range."],{kind:"best-fit-range",inside:false}),
()=>Q("Should a best-fit line be forced through an outlier?",["No; fit the main pattern and note the outlier."],{kind:"best-fit",v:2}),
()=>Q("A best-fit line predicts 42. How should this be phrased?",["As an estimate: about 42."],{kind:"best-fit",v:3}),
()=>Q("Can two reasonable best-fit lines give slightly different estimates?",["Yes; it is a visual/model estimate."],{kind:"best-fit",v:4})
],
cumfreq:[
()=>Q("Frequencies 5,8,11,6. Find cumulative frequencies.",["5,13,24,30."],{kind:"cf-table"}),
()=>Q("Why plot cumulative frequency at upper class boundaries?",["It counts all observations up to each class end."],{kind:"cf-points"}),
()=>Q("What must the final cumulative frequency equal?",["Total frequency."],{kind:"cf-curve",v:0}),
()=>Q("Class ends 10,20,30,40 with frequencies4,7,9,5. State plotted points.",["CF 4,11,20,25.","Plot at upper boundaries plus starting point."],{kind:"cf-points"}),
()=>Q("Can a cumulative-frequency curve decrease?",["No."],{kind:"cf-curve",v:1}),
()=>Q("CF values 6,16,20. Find class frequencies.",["6,10,4."],{kind:"cf-table"}),
()=>Q("At x=30, CF=42. Interpret.",["42 observations are at or below that upper boundary."],{kind:"cf-curve",v:2}),
()=>Q("Why use a smooth increasing curve rather than bars?",["Cumulative totals against a continuous variable are being modelled."],{kind:"cf-curve",v:3})
],
"cumfreq-read":[
()=>Q("80 values: CF positions for Q1, median, Q3?",["20,40,60."],{kind:"cf-quartiles",n:80}),
()=>Q("200 values: CF position for 90th percentile?",["180."],{kind:"cf-percentile",p:90}),
()=>Q("Q1≈18,Q3≈31. Find IQR.",["13."],{kind:"cf-read",q1:18,q3:31}),
()=>Q("Why are graph quartiles estimates?",["They are read/interpolated from a smooth curve."],{kind:"cf-curve",v:4}),
()=>Q("120 values: median CF position?",["60."],{kind:"cf-quartiles",n:120}),
()=>Q("Median42,Q1=35. What extra value is needed for IQR?",["Q3."],{kind:"cf-read",q1:35,q3:55}),
()=>Q("Which percentile is Q3?",["75th."],{kind:"cf-percentile",p:75}),
()=>Q("Equal medians; one group has smaller IQR. Which is more consistent?",["The group with the smaller IQR."],{kind:"cf-compare"})
],
histogram:[
()=>Q("Frequency15, class width10. Find density.",["[[15/10=1.5]]."],{kind:"hist",v:0}),
()=>Q("Density3.5, width10. Find frequency.",["35."],{kind:"hist",v:1}),
()=>Q("Equal frequencies20; widths5 and10. Compare heights.",["Densities4 and2.","Narrower class twice as tall."],{kind:"hist",v:2}),
()=>Q("Why do histogram bars touch?",["Classes are continuous intervals."],{kind:"hist",v:3}),
()=>Q("What does histogram bar area represent?",["Frequency."],{kind:"hist",v:4}),
()=>Q("Classes0-5,5-15,15-20 with frequencies10,30,20. Find densities.",["2,3,4."],{kind:"hist",v:5}),
()=>Q("Equal bar heights but unequal widths: equal frequencies?",["No; frequency = density×width."],{kind:"hist",v:6}),
()=>Q("Width8,density2.5. Find frequency.",["20."],{kind:"hist",v:7})
],
freqdensity:[
()=>Q("Frequency32,width8. Find density.",["4."],{kind:"hist-calc"}),
()=>Q("Density2.4,width15. Find frequency.",["36."],{kind:"hist-calc"}),
()=>Q("Frequency45,density3. Find width.",["15."],{kind:"hist-calc"}),
()=>Q("Frequency36,density4.5. Find width.",["8."],{kind:"hist-calc"}),
()=>Q("Width12,density1.75. Find frequency.",["21."],{kind:"hist-calc"}),
()=>Q("Frequency27,width6. Find density.",["4.5."],{kind:"hist-calc"}),
()=>Q("Density5,frequency30. Find width.",["6."],{kind:"hist-calc"}),
()=>Q("Width4,density7.5. Find frequency.",["30."],{kind:"hist-calc"})
],
"chart-infer":[
()=>Q("Bar chart A=42,B=31. Write one supported comparison.",["A exceeds B by 11 in this sample."],{kind:"bar-infer"}),
()=>Q("Two pie charts have different totals. Can sector size alone compare counts?",["No."],{kind:"pie-compare"}),
()=>Q("CF graph gives median about27. How phrase it?",["Median ≈27."],{kind:"cf-curve",v:5}),
()=>Q("Pie sector90° in sample240. Find frequency.",["[[90/360=1/4]].","60."],{kind:"pie"}),
()=>Q("Line graph rises sharply. What can be inferred?",["The plotted variable increased quickly over that interval."],{kind:"line-graph"}),
()=>Q("Truncated bar-chart axis: what should be checked?",["Read the numerical scale."],{kind:"truncated-axis"}),
()=>Q("Chart has no title or units. Limitation?",["Context/variable cannot be interpreted reliably."],{kind:"chart-missing-labels"}),
()=>Q("Pictogram uses half-symbols. What must the key allow?",["Convert partial symbols to exact frequencies."],{kind:"pictogram"})
],
"graph-compare":[
()=>Q("A: median45,Q1=38,Q3=51; B: median42,Q1=30,Q3=54. Compare.",["A higher median.","IQR A=13, B=24, so A more consistent."],{kind:"cf-compare"}),
()=>Q("Two histograms have different totals. What should be compared cautiously?",["Bar heights alone, especially with unequal widths."],{kind:"hist-compare"}),
()=>Q("Why pair median with IQR on CF graphs?",["Both are robust and read naturally from the graph."],{kind:"cf-compare"}),
()=>Q("Two box plots same IQR but different medians.",["Same spread of middle 50%, different typical values."],{kind:"two-box"}),
()=>Q("Curve A shifted right of B with similar shape.",["A generally has larger values with similar spread."],{kind:"cf-compare"}),
()=>Q("Histogram A has narrower central cluster than B.",["A may be more consistent, assuming same scale."],{kind:"hist-compare"}),
()=>Q("Two CF curves cross. Can one group be called always larger?",["No; compare specific quartiles/medians."],{kind:"cf-cross"}),
()=>Q("Equal medians; IQR6 vs11.",["Same centre, first group more consistent."],{kind:"two-box"})
],
"graph-limits":[
()=>Q("Bars98 and100 drawn from axis starting97. Effect?",["Exaggerates the visual difference."],{kind:"truncated-axis"}),
()=>Q("Best-fit line extended far beyond data.",["Extrapolation; unreliable."],{kind:"extrapolation"}),
()=>Q("Histogram uses equal heights for unequal widths and equal frequencies.",["Wrong: height must be frequency density."],{kind:"hist-error"}),
()=>Q("Unequal scale intervals shown with equal spacing.",["Misleading axis distortion."],{kind:"bad-scale"}),
()=>Q("Y-axis omits zero. Always wrong?",["No, but it must be clear and not misleading."],{kind:"truncated-axis"}),
()=>Q("Scatter graph has only 6 points. Caution?",["Very small sample; pattern may be unstable."],{kind:"small-scatter"}),
()=>Q("Graph shows association. What must not be claimed automatically?",["Causation."],{kind:"corr-causation"}),
()=>Q("Sample from one school only. Limitation?",["May not generalise to other populations."],{kind:"sample-pop"})
]};return cycle(sets[type]);}
function functions(type){const sets={
functions:[
()=>Q("If [[f(x)=3x-1]], find [[f(5)]].",["[[15-1=14]]."]),
()=>Q("If [[g(x)=x^2+2]], find [[g(-3)]].",["Use brackets.","[[9+2=11]]."]),
()=>Q("For [[h(x)=1/(x-4)]], state excluded domain value.",["Denominator cannot be zero.","[[x\\ne4]]."]),
()=>Q("For [[g(x)=\\sqrt{x-1}]], state the real domain.",["[[x-1\\ge0]].","[[x\\ge1]]."]),
()=>Q("If [[f(x)=2x^2-3x+1]], find [[f(-2)]].",["[[8+6+1=15]]."]),
()=>Q("A function maps x to x+7. Write function notation.",["[[f(x)=x+7]]."]),
()=>Q("If [[f(3)=10]] for [[f(x)=ax+1]], find a.",["[[3a+1=10]].","[[a=3]]."]),
()=>Q("For [[f(x)=x^2]], domain x≥0. State range.",["[[f(x)\\ge0]]."])
],
inverse:[
()=>Q("Find inverse of [[f(x)=3x-5]].",["[[y=3x-5]].","Swap x,y.","[[f^{-1}(x)=\\frac{x+5}{3}]]."]),
()=>Q("Find inverse of [[f(x)=2x+7]].",["Swap x,y and solve.","[[f^{-1}(x)=\\frac{x-7}{2}]]."]),
()=>Q("Why does [[x^2]] not have inverse on all reals?",["It is not one-to-one.","Restrict the domain."]),
()=>Q("Check [[f(x)=x+4]] and inverse [[x-4]].",["Compose either way.","Result [[x]]."]),
()=>Q("Find inverse of [[f(x)=\\frac{2x+1}{x-3}]].",["[[y(x-3)=2x+1]].","Collect x-terms.","[[f^{-1}(x)=\\frac{3x+1}{x-2}]]."]),
()=>Q("How are function and inverse graphs related?",["Reflection in [[y=x]]."]),
()=>Q("Find inverse of [[f(x)=5-2x]].",["Swap x,y.","[[f^{-1}(x)=\\frac{5-x}{2}]]."]),
()=>Q("If [[f^{-1}(9)=4]], find [[f(4)]].",["Inverse reverses mapping.","[[f(4)=9]]."])
],
composite:[
()=>Q("[[f(x)=x+6]], [[g(x)=x-3]]. Find [[fg(x)]].",["Apply g first.","[[x-3+6=x+3]]."]),
()=>Q("[[f(x)=2x]], [[g(x)=-x]]. Find [[gf(4)]].",["[[f(4)=8]].","[[g(8)=-8]]."]),
()=>Q("[[f(x)=3x+1]]. Find [[ff(x)]].",["[[3(3x+1)+1=9x+4]]."]),
()=>Q("[[f(x)=x+2]], [[g(x)=3x^2]]. Find [[gf(2)]].",["[[f(2)=4]].","[[g(4)=48]]."]),
()=>Q("[[f(x)=2x-1]], [[g(x)=\\frac{x+4}{3}]]. Find [[fg(x)]].",["Substitute g into f.","[[\\frac{2x+5}{3}]]."]),
()=>Q("Why can [[fg(x)]] differ from [[gf(x)]]?",["Composition order matters."]),
()=>Q("[[f(x)=x^2]], [[g(x)=x+1]]. Find [[fg(3)]].",["[[g(3)=4]].","[[f(4)=16]]."]),
()=>Q("[[f(x)=x-5]], [[g(x)=2x]]. Find [[gf(x)]].",["Apply f first.","[[2(x-5)=2x-10]]."])
]};return cycle(sets[type]);}
function sets(){const a=[
()=>Q("[[n(A)=23]], [[n(B)=19]], [[n(A\\cap B)=8]]. Find [[n(A\\cup B)]].",["[[23+19-8=34]]."],{kind:"venn-two"}),
()=>Q("Universal set 50; [[n(A\\cup B)=34]]. Find neither.",["[[50-34=16]]."],{kind:"venn-outside"}),
()=>Q("Explain [[(A\\cup B)']].",["Elements in neither A nor B."],{kind:"venn-complement"}),
()=>Q("40 students: 23 French,18 Spanish,9 both. Find neither.",["Union 32.","Neither 8."],{kind:"venn-two"}),
()=>Q("State De Morgan law for complement of a union.",["[[(A\\cup B)'=A'\\cap B']]."],{kind:"venn-demorgan"}),
()=>Q("If [[A\\subset B]], find [[A\\cap B]].",["[[A]]."],{kind:"venn-subset"}),
()=>Q("What does centre of a 3-set Venn represent?",["[[A\\cap B\\cap C]]."],{kind:"venn-three"}),
()=>Q("What does [[A\\setminus B]] mean?",["Elements in A but not B."],{kind:"venn-difference"})
];return cycle(a);}
function proportion(){const a=[
()=>Q("[[y\\propto x^2]], y=18 when x=3. Find y when x=5.",["[[y=kx^2]].","[[k=2]].","[[y=50]]."],{kind:"prop-square"}),
()=>Q("[[t\\propto1/v^2]], t=20 when v=3. Find t when v=6.",["[[k=180]].","[[t=5]]."],{kind:"prop-inverse"}),
()=>Q("[[y\\propto\\sqrt{x}]], y=12 when x=16. Find formula.",["[[12=4k]].","[[y=3\\sqrt{x}]]."],{kind:"prop-root"}),
()=>Q("[[y\\propto x]], y=35 when x=7. Find y when x=12.",["[[k=5]].","[[y=60]]."],{kind:"prop-direct"}),
()=>Q("[[p\\propto1/q]], p=8 when q=5. Find p when q=20.",["[[k=40]].","[[p=2]]."],{kind:"prop-inverse"}),
()=>Q("[[A\\propto r^2]], A=50 when r=5. Find A when r=8.",["[[k=2]].","[[A=128]]."],{kind:"prop-square"}),
()=>Q("[[T\\propto\\sqrt L]], T=4 when L=9. Find T when L=36.",["[[k=4/3]].","[[T=8]]."],{kind:"prop-root"}),
()=>Q("How does a graph show direct proportion?",["Straight line through the origin."],{kind:"prop-direct"})
];return cycle(a);}

function build(type){
 if(type==="surds")return surds();
 if(type==="rationalise")return rationalise();
 if(type==="algfrac-simplify")return algfrac(true);
 if(type==="algfrac-four")return algfrac(false);
 if(type==="forming")return forming();
 if(type==="linear")return linear();
 if(type==="quadratic")return quadratic();
 if(type==="fractional-eq")return fractionalEq();
 if(type==="simultaneous-linear")return simultaneous(true);
 if(type==="simultaneous-nonlinear")return simultaneous(false);
 if(type==="rearrange")return rearrange();
 if(type==="ineq-numberline")return numberline();
 if(type==="ineq-linear")return linearIneq();
 if(type==="ineq-graph")return graphIneq(false);
 if(type==="ineq-region")return graphIneq(true);
 if(type==="angles")return angles("angles");
 if(type==="parallel")return angles("parallel");
 if(type==="polygons")return angles("polygons");
 if(type==="symmetry2d")return symmetry(false);
 if(type==="symmetry3d")return symmetry(true);
 if(type==="units")return units();
 if(type==="area")return mensuration("area");
 if(type==="circle")return mensuration("circle");
 if(type==="sector")return mensuration("sector");
 if(["tables","averages","grouped-mean","modalclass","data-interpret","data-compare","data-limits","charts","scatter","correlation","bestfit","cumfreq","cumfreq-read","histogram","freqdensity","chart-infer","graph-compare","graph-limits"].includes(type))return stats(type);
 if(["functions","inverse","composite"].includes(type))return functions(type);
 if(type==="sets")return sets();
 if(type==="proportion")return proportion();
 return [];
}
window.MathoraQuestionEngine={build(type){const all=build(type);return{practice:all.slice(0,16),homework:all.slice(16,32)}}};
})();
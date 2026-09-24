const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let current=0, tab="learn";

const esc=s=>String(s);
const ex=(q,steps)=>({q,steps});
const hw=(tier,q,sol)=>({tier,q,sol});

function bank(t){
 const B={};
 if(t==="surds") return {
  examples:[
   ex("\\(\\sqrt{72}\\)",["Find the largest square factor: \\(72=36\\times2\\).","\\(\\sqrt{72}=\\sqrt{36}\\sqrt2=6\\sqrt2\\).","The answer is exact; do not convert to a decimal."]),
   ex("\\(3\\sqrt{12}+2\\sqrt{27}\\)",["Simplify each surd: \\(\\sqrt{12}=2\\sqrt3\\), \\(\\sqrt{27}=3\\sqrt3\\).","So \\(3(2\\sqrt3)+2(3\\sqrt3)=6\\sqrt3+6\\sqrt3\\).","Combine like surds: \\(12\\sqrt3\\)."]),
   ex("\\(\\dfrac{\\sqrt{48}}{\\sqrt3}\\)",["Use \\(\\sqrt a/\\sqrt b=\\sqrt{a/b}\\).","\\(\\sqrt{48/3}=\\sqrt{16}=4\\).","Check that both roots were positive."])
  ],
  practice:{foundation:["Simplify \\(\\sqrt{20}\\).","Simplify \\(\\sqrt{45}\\).","Simplify \\(2\\sqrt8+\\sqrt{18}\\)."],core:["Simplify \\(\\sqrt{108}\\).","Simplify \\(5\\sqrt{12}-\\sqrt{75}\\).","Simplify \\(\\sqrt{24}\\times\\sqrt6\\)."],extension:["Simplify \\(3\\sqrt{50}-2\\sqrt8+\\sqrt{98}\\).","Show that \\(\\sqrt{12}\\sqrt{27}=18\\).","Given \\(a\\sqrt3=\\sqrt{192}\\), find \\(a\\)."]},
  homework:[hw("Foundation","Simplify \\(\\sqrt{63}\\).",["\\(63=9\\times7\\).","\\(\\sqrt{63}=3\\sqrt7\\)."]),hw("Core","Simplify \\(4\\sqrt{18}-\\sqrt8\\).",["\\(18=9\\times2\\), so \\(\\sqrt{18}=3\\sqrt2\\).","\\(\\sqrt8=2\\sqrt2\\).","\\(4(3\\sqrt2)-2\\sqrt2=10\\sqrt2\\)."]),hw("Extension","Simplify \\(\\sqrt{54}\\times\\sqrt{24}\\).",["Combine first: \\(\\sqrt{1296}\\).","\\(1296=36^2\\), so the value is \\(36\\)."])]
 };
 if(t==="rationalise") return {
  examples:[
   ex("\\(\\dfrac{5}{\\sqrt3}\\)",["Multiply top and bottom by \\(\\sqrt3\\).","\\(\\dfrac{5}{\\sqrt3}\\times\\dfrac{\\sqrt3}{\\sqrt3}=\\dfrac{5\\sqrt3}{3}\\)."]),
   ex("\\(\\dfrac{4}{2+\\sqrt5}\\)",["Use the conjugate \\(2-\\sqrt5\\).","Denominator: \\((2+\\sqrt5)(2-\\sqrt5)=4-5=-1\\).","Numerator: \\(4(2-\\sqrt5)=8-4\\sqrt5\\).","So the result is \\(4\\sqrt5-8\\)."]),
   ex("\\(\\dfrac{3}{\\sqrt7-\\sqrt2}\\)",["Multiply by \\((\\sqrt7+\\sqrt2)/(\\sqrt7+\\sqrt2)\\).","Denominator becomes \\(7-2=5\\).","Answer: \\(\\dfrac{3\\sqrt7+3\\sqrt2}{5}\\)."])
  ],
  practice:{foundation:["Rationalise \\(3/\\sqrt2\\).","Rationalise \\(7/\\sqrt5\\).","Rationalise \\(2/(1+\\sqrt3)\\)."],core:["Rationalise \\(5/(3+\\sqrt2)\\).","Rationalise \\(4/(\\sqrt6-1)\\).","Rationalise and simplify \\(\\sqrt3/(2+\\sqrt3)\\)."],extension:["Rationalise \\(6/(\\sqrt7+\\sqrt5)\\).","Show \\(1/(\\sqrt3-1)=(\\sqrt3+1)/2\\).","Simplify \\((2+\\sqrt3)/(2-\\sqrt3)\\)."]},
  homework:[hw("Foundation","Rationalise \\(6/\\sqrt5\\).",["Multiply by \\(\\sqrt5/\\sqrt5\\).","Result \\(6\\sqrt5/5\\)."]),hw("Core","Rationalise \\(3/(4-\\sqrt7)\\).",["Use conjugate \\(4+\\sqrt7\\).","Denominator \\(16-7=9\\).","Numerator \\(12+3\\sqrt7\\).","Simplify to \\((4+\\sqrt7)/3\\)."]),hw("Extension","Rationalise \\(2/(\\sqrt5-\\sqrt3)\\).",["Use conjugate \\(\\sqrt5+\\sqrt3\\).","Denominator \\(5-3=2\\).","Cancel the 2 to get \\(\\sqrt5+\\sqrt3\\)."])]
 };
 if(t==="algfrac-simplify") return {
  examples:[
   ex("\\(\\dfrac{6x^2}{9x}\\)",["Factor common parts: \\(6/9=2/3\\) and \\(x^2/x=x\\).","Result \\(\\dfrac{2x}{3}\\), with \\(x\\ne0\\)."]),
   ex("\\(\\dfrac{x^2-9}{x^2+5x+6}\\)",["Factor: \\(x^2-9=(x-3)(x+3)\\).","Factor denominator: \\((x+2)(x+3)\\).","Cancel \\((x+3)\\): \\(\\dfrac{x-3}{x+2}\\)."]),
   ex("\\(\\dfrac{2x^2-8}{x^2-x-6}\\)",["Factor numerator: \\(2(x-2)(x+2)\\).","Factor denominator: \\((x-3)(x+2)\\).","Cancel \\((x+2)\\): \\(\\dfrac{2(x-2)}{x-3}\\)."])
  ],
  practice:{foundation:["Simplify \\(8x/12\\).","Simplify \\((x^2-16)/(x+4)\\).","Simplify \\((x^2+5x)/(x)\\)."],core:["Simplify \\((x^2-25)/(x^2+3x-10)\\).","Simplify \\((2x^2+8x)/(x^2+6x+8)\\).","Simplify \\((x^2-x-12)/(x^2-16)\\)."],extension:["Simplify \\((3x^2-27)/(x^2-x-6)\\).","Find excluded values before simplifying \\((x^2-4)/(x^2+x-6)\\).","Explain why cancellation across addition is invalid."]},
  homework:[hw("Foundation","Simplify \\((x^2-4)/(x+2)\\).",["Factor \\(x^2-4=(x-2)(x+2)\\).","Cancel \\((x+2)\\).","Answer \\(x-2\\), where \\(x\\ne-2\\)."]),hw("Core","Simplify \\((x^2+7x+12)/(x^2+5x+4)\\).",["Factor top \\((x+3)(x+4)\\).","Factor bottom \\((x+1)(x+4)\\).","Cancel \\((x+4)\\): \\((x+3)/(x+1)\\)."]),hw("Extension","Simplify \\((2x^2-18)/(x^2+2x-3)\\).",["Top \\(=2(x-3)(x+3)\\).","Bottom \\(=(x+3)(x-1)\\).","Cancel to get \\(2(x-3)/(x-1)\\)."])]
 };
 if(t==="algfrac-four") return {
  examples:[
   ex("\\(\\dfrac2x+\\dfrac3x\\)",["Same denominator, so add numerators.","\\(\\dfrac{2+3}{x}=\\dfrac5x\\)."]),
   ex("\\(\\dfrac1x+\\dfrac2{x+1}\\)",["Common denominator \\(x(x+1)\\).","Rewrite: \\(\\dfrac{x+1}{x(x+1)}+\\dfrac{2x}{x(x+1)}\\).","Answer \\(\\dfrac{3x+1}{x(x+1)}\\)."]),
   ex("\\(\\dfrac{x}{x-2}\\div\\dfrac{2x}{x+3}\\)",["Change division to multiplication by the reciprocal.","\\(\\dfrac{x}{x-2}\\times\\dfrac{x+3}{2x}\\).","Cancel \\(x\\): \\(\\dfrac{x+3}{2(x-2)}\\)."])
  ],
  practice:{foundation:["\\(3/x+4/x\\)","\\(5/a-2/a\\)","\\((2x/3)\\times(9/x)\\)"],core:["\\(1/x+1/(x+2)\\)","\\(3/(x-1)-1/(x+1)\\)","\\((x/4)\\div(2x/3)\\)"],extension:["\\(2/x+3/(x-2)\\)","\\((x+1)/(x-1))\\times((x^2-1)/(x+2))\\)","Simplify \\(1/(x+1)-1/(x-1)\\)."]},
  homework:[hw("Foundation","Simplify \\(4/x+7/x\\).",["Same denominator.","Add numerators: \\(11/x\\)."]),hw("Core","Simplify \\(1/x+3/(x+2)\\).",["LCD \\(x(x+2)\\).","Numerator \\(x+2+3x=4x+2\\).","Answer \\((4x+2)/(x(x+2))\\)."]),hw("Extension","Simplify \\(2/(x-1)-1/(x+1)\\).",["LCD \\((x-1)(x+1)\\).","Numerator \\(2(x+1)-(x-1)=x+3\\).","Answer \\((x+3)/(x^2-1)\\)."])]
 };
 if(t==="forming") return {
  examples:[
   ex("A number \\(n\\) is increased by 7 and then doubled. Form an expression.",["Increase first: \\(n+7\\).","Double the whole result: \\(2(n+7)\\)."]),
   ex("Two consecutive even numbers have product 168. Form an equation.",["Let the first even number be \\(2n\\).","The next consecutive even number is \\(2n+2\\).","Equation: \\(2n(2n+2)=168\\)."]),
   ex("A rectangle has length \\(x+4\\) and width \\(x-1\\). Its area is 66. Form a quadratic equation in standard form.",["Area gives \\((x+4)(x-1)=66\\).","Expand: \\(x^2+3x-4=66\\).","Standard form: \\(x^2+3x-70=0\\)."])
  ],
  practice:{foundation:["Write an expression for 5 more than \\(x\\).","Write an expression for three times \\(y-2\\).","Form an equation: a number plus 9 is 23."],core:["Form an equation for two consecutive integers with sum 41.","A rectangle has sides \\(x\\) and \\(x+3\\), area 70. Form an equation.","Write a formula for total cost \\(C\\) of \\(n\\) tickets at KD 2.5 plus KD 1 booking fee."],extension:["Form a quadratic equation for consecutive odd numbers with product 143.","A right triangle has legs \\(x\\) and \\(x+2\\), hypotenuse 10. Form an equation.","Create a formula connecting distance \\(d\\), speed \\(v\\), and time \\(t\\), then make \\(v\\) the subject."]},
  homework:[hw("Foundation","A number \\(x\\) is multiplied by 4 then decreased by 3. Write an expression.",["Multiply first: \\(4x\\).","Decrease by 3: \\(4x-3\\)."]),hw("Core","The sum of consecutive integers is 55. Form an equation.",["Let first integer be \\(n\\), next \\(n+1\\).","Equation \\(n+(n+1)=55\\)."]),hw("Extension","A rectangle has perimeter 34, length \\(x+5\\), width \\(x-2\\). Form and simplify an equation.",["Perimeter \\(2L+2W=34\\).","\\(2(x+5)+2(x-2)=34\\).","Simplify: \\(4x+6=34\\)."])]
 };
 if(t==="linear") return {
  examples:[ex("\\(3x+4=19\\)",["Subtract 4: \\(3x=15\\).","Divide by 3: \\(x=5\\)."]),ex("\\(5-2x=3x+20\\)",["Subtract \\(3x\\): \\(5-5x=20\\).","Subtract 5: \\(-5x=15\\).","Divide by \\(-5\\): \\(x=-3\\)."]),ex("\\(4(x-2)=2(x+5)+6\\)",["Expand: \\(4x-8=2x+16\\).","Subtract \\(2x\\): \\(2x-8=16\\).","Add 8, then divide by 2: \\(x=12\\)."])],
  practice:{foundation:["\\(x+7=15\\)","\\(4x=28\\)","\\(3x-5=16\\)"],core:["\\(5x+2=2x+20\\)","\\(3(x+4)=24\\)","\\(7-2x=x+16\\)"],extension:["\\(4(2x-1)=3(x+6)+x\\)","Form and solve: three consecutive integers sum to 72.","A taxi charges KD 1.5 plus KD 0.4 per km; total KD 8.7. Find the distance."]},
  homework:[hw("Foundation","Solve \\(6x-7=29\\).",["Add 7: \\(6x=36\\).","Divide by 6: \\(x=6\\)."]),hw("Core","Solve \\(4x+5=7x-10\\).",["Subtract \\(4x\\): \\(5=3x-10\\).","Add 10: \\(15=3x\\).","\\(x=5\\)."]),hw("Extension","Solve \\(3(2x+1)-5=2(x+8)\\).",["Expand: \\(6x+3-5=2x+16\\).","\\(6x-2=2x+16\\).","\\(4x=18\\), so \\(x=9/2\\)."])]
 };
 if(t==="quadratic") return {
  examples:[ex("\\(x^2+5x+6=0\\)",["Factor: \\((x+2)(x+3)=0\\).","So \\(x=-2\\) or \\(x=-3\\)."]),ex("\\(x^2+6x+2=0\\) by completing the square",["\\(x^2+6x+2=(x+3)^2-9+2\\).","So \\((x+3)^2=7\\).","\\(x=-3\\pm\\sqrt7\\)."]),ex("\\(2x^2-3x-4=0\\) using the formula",["Here \\(a=2,b=-3,c=-4\\).","\\(x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}=\\dfrac{3\\pm\\sqrt{9+32}}4\\).","\\(x=\\dfrac{3\\pm\\sqrt{41}}4\\)."])],
  practice:{foundation:["Solve \\(x^2+7x+12=0\\).","Solve \\(x^2-9=0\\).","Solve \\(x^2-2x-15=0\\)."],core:["Solve \\(x^2+4x-1=0\\) by completing the square.","Solve \\(3x^2+x-2=0\\).","Solve \\(2x^2+5x-1=0\\) using the formula."],extension:["Solve \\(x^2-8x+3=0\\) exactly.","A rectangle has area 60 and sides \\(x+2\\), \\(x+5\\). Find \\(x\\).","Show that \\(x^2+2x+5=0\\) has no real roots."]},
  homework:[hw("Foundation","Solve \\(x^2+x-12=0\\).",["Factor to \\((x+4)(x-3)=0\\).","So \\(x=-4\\) or \\(3\\)."]),hw("Core","Solve \\(x^2+8x+7=0\\) by completing the square.",["\\((x+4)^2-16+7=0\\).","\\((x+4)^2=9\\).","\\(x=-1\\) or \\(x=-7\\)."]),hw("Extension","Solve \\(2x^2+x-5=0\\) exactly.",["Use formula with \\(a=2,b=1,c=-5\\).","Discriminant \\(1+40=41\\).","\\(x=(-1\\pm\\sqrt{41})/4\\)."])]
 };
 if(t==="fractional-eq") return {
  examples:[ex("\\(x/3+2=7\\)",["Multiply by 3 or isolate first.","\\(x/3=5\\).","\\(x=15\\)."]),ex("\\(2/(x+1)=3/5\\)",["Cross-multiply: \\(10=3(x+1)\\).","\\(10=3x+3\\), so \\(x=7/3\\)."]),ex("\\(1/x+1/(x+2)=3/4\\)",["LCD is \\(4x(x+2)\\).","Multiply through: \\(4(x+2)+4x=3x(x+2)\\).","Rearrange: \\(3x^2-2x-8=0\\).","Factor: \\((3x+4)(x-2)=0\\), giving \\(x=2\\) or \\(-4/3\\)."])],
  practice:{foundation:["Solve \\(x/5=4\\).","Solve \\(3/(x+2)=1\\).","Solve \\(x/4+1=6\\)."],core:["Solve \\(2/(x-1)=5/3\\).","Solve \\(1/x+1/2=1\\).","Solve \\(3/(x+1)-1/(x-1)=0\\)."],extension:["Solve \\(1/x+2/(x+1)=2\\).","Solve \\(4/(x-2)=x\\).","State restrictions before solving \\(2/(x+3)=1/(x-1)\\)."]},
  homework:[hw("Foundation","Solve \\(x/6+2=5\\).",["\\(x/6=3\\).","\\(x=18\\)."]),hw("Core","Solve \\(3/(x+2)=2/5\\).",["Cross multiply \\(15=2(x+2)\\).","\\(15=2x+4\\).","\\(x=11/2\\)."]),hw("Extension","Solve \\(1/x+1/(x+1)=1\\).",["Multiply by \\(x(x+1)\\): \\(x+1+x=x(x+1)\\).","\\(x^2-x-1=0\\).","\\(x=(1\\pm\\sqrt5)/2\\)."])]
 };
 if(t==="simultaneous-linear") return {
  examples:[ex("\\(x+y=9,\\ x-y=3\\)",["Add the equations: \\(2x=12\\).","So \\(x=6\\).","Substitute: \\(y=3\\)."]),ex("\\(2x+3y=13,\\ 4x-y=5\\)",["Multiply second equation by 3: \\(12x-3y=15\\).","Add: \\(14x=28\\), so \\(x=2\\).","Then \\(8-y=5\\), so \\(y=3\\)."]),ex("2 adult + 3 child tickets cost 21; 1 adult + 2 child tickets cost 13.",["Let adult \\(=a\\), child \\(=c\\).","Equations: \\(2a+3c=21\\), \\(a+2c=13\\).","Double second: \\(2a+4c=26\\). Subtract first: \\(c=5\\).","Then \\(a+10=13\\), so \\(a=3\\)."])],
  practice:{foundation:["Solve \\(x+y=7, x-y=1\\).","Solve \\(x+y=12, 2x+y=17\\).","Solve \\(2x+y=8, x-y=1\\)."],core:["Solve \\(3x+2y=16, x-y=2\\).","Solve \\(2x+5y=1, 3x-y=11\\).","Form and solve a two-price ticket problem."],extension:["Solve \\(4x-3y=19, 5x+2y=4\\).","Find the intersection of \\(y=2x+1\\) and \\(y=10-x\\).","Create a system whose solution is \\((3,-2)\\)."]},
  homework:[hw("Foundation","Solve \\(x+y=10, x-y=4\\).",["Add: \\(2x=14\\), so \\(x=7\\).","Then \\(y=3\\)."]),hw("Core","Solve \\(2x+3y=12, x+y=5\\).",["Double second: \\(2x+2y=10\\).","Subtract: \\(y=2\\).","Then \\(x=3\\)."]),hw("Extension","Solve \\(3x-2y=7, 4x+3y=1\\).",["Multiply first by 3 and second by 2: \\(9x-6y=21\\), \\(8x+6y=2\\).","Add: \\(17x=23\\), so \\(x=23/17\\).","Substitute to get \\(y=-25/17\\)."])]
 };
 if(t==="simultaneous-nonlinear") return {
  examples:[ex("\\(y=x+1,\\ y=x^2-5\\)",["Set expressions equal: \\(x+1=x^2-5\\).","\\(x^2-x-6=0=(x-3)(x+2)\\).","So \\(x=3,-2\\).","Then \\(y=4,-1\\)."]),ex("\\(y=6-x,\\ x^2+y^2=20\\)",["Substitute \\(y=6-x\\).","\\(x^2+(6-x)^2=20\\).","\\(2x^2-12x+16=0\\Rightarrow x^2-6x+8=0\\).","\\(x=2,4\\), hence \\(y=4,2\\)."]),ex("\\(y=2x-1,\\ xy=6\\)",["Substitute: \\(x(2x-1)=6\\).","\\(2x^2-x-6=0=(2x+3)(x-2)\\).","Pairs: \\((2,3)\\) and \\((-3/2,-4)\\)."])],
  practice:{foundation:["Solve \\(y=x, y=x^2-2\\).","Solve \\(y=x+2, xy=3\\).","Solve \\(y=4-x, x^2+y^2=10\\)."],core:["Solve \\(y=2x+3, y=x^2+1\\).","Solve \\(y=5-x, xy=4\\).","Solve \\(y=x-1, x^2+y^2=13\\)."],extension:["Find intersections of \\(y=x^2-4x+1\\) and \\(y=x-5\\).","Solve \\(x+y=7, xy=10\\).","Explain why a line and circle can have 0, 1 or 2 intersections."]},
  homework:[hw("Foundation","Solve \\(y=x+1, y=x^2-1\\).",["\\(x+1=x^2-1\\).","\\(x^2-x-2=0=(x-2)(x+1)\\).","Pairs \\((2,3)\\), \\((-1,0)\\)."]),hw("Core","Solve \\(y=5-x, xy=6\\).",["\\(x(5-x)=6\\).","\\(x^2-5x+6=0\\).","\\(x=2,3\\), giving pairs \\((2,3)\\), \\((3,2)\\)."]),hw("Extension","Solve \\(y=2x, x^2+y^2=45\\).",["Substitute \\(y=2x\\): \\(x^2+4x^2=45\\).","\\(5x^2=45\\), so \\(x=\\pm3\\).","Pairs \\((3,6),(-3,-6)\\)."])]
 };
 if(t==="rearrange") return {
  examples:[ex("\\(y=3x+7\\), make \\(x\\) the subject",["Subtract 7: \\(y-7=3x\\).","Divide by 3: \\(x=(y-7)/3\\)."]),ex("\\(A=\\pi r^2\\), make \\(r\\) the subject",["Divide by \\(\\pi\\): \\(r^2=A/\\pi\\).","Take the positive square root for a radius: \\(r=\\sqrt{A/\\pi}\\)."]),ex("\\(P=ax+bx\\), make \\(x\\) the subject",["Factor \\(x\\): \\(P=x(a+b)\\).","Divide: \\(x=P/(a+b)\\)."])],
  practice:{foundation:["Make \\(x\\) subject: \\(y=x+4\\).","Make \\(t\\) subject: \\(d=vt\\).","Make \\(r\\) subject: \\(C=2\\pi r\\)."],core:["Make \\(x\\) subject: \\(y=(x+3)/5\\).","Make \\(h\\) subject: \\(A=bh/2\\).","Make \\(x\\) subject: \\(p=qx+rx\\)."],extension:["Make \\(x\\) subject: \\(y=(ax+b)/(cx+d)\\).","Make \\(r\\) subject: \\(V=4\\pi r^3/3\\).","Make \\(x\\) subject: \\(a=\\sqrt{(x-b)/c}\\)."]},
  homework:[hw("Foundation","Make \\(x\\) subject: \\(y=5x-2\\).",["Add 2: \\(y+2=5x\\).","\\(x=(y+2)/5\\)."]),hw("Core","Make \\(h\\) subject: \\(V=\\pi r^2h\\).",["Divide by \\(\\pi r^2\\).","\\(h=V/(\\pi r^2)\\)."]),hw("Extension","Make \\(x\\) subject: \\(y=(x-1)/(x+2)\\).",["\\(y(x+2)=x-1\\).","\\(yx+2y=x-1\\).","\\(x(y-1)=-(1+2y)\\).","\\(x=(1+2y)/(1-y)\\)."])]
 };
 if(["ineq-numberline","ineq-linear","ineq-graph","ineq-region"].includes(t)){
  const base={
   examples:[
    ex("\\(x>3\\)",["Use an open circle at 3 because 3 is not included.","Shade to the right because values are greater than 3."]),
    ex("\\(5-2x\\le 11\\)",["Subtract 5: \\(-2x\\le6\\).","Divide by \\(-2\\) and reverse the sign: \\(x\\ge-3\\)."]),
    ex("Shade the region \\(y<2x+1\\)",["Draw the boundary \\(y=2x+1\\).","Use a dashed line because equality is not included.","Test \\((0,0)\\): \\(0<1\\) is true, so shade the side containing the origin."])
   ],
   practice:{foundation:["Draw \\(x\\le4\\) on a number line.","Solve \\(x+3>8\\).","Solve \\(3x\\le15\\)."],core:["Solve \\(7-2x<1\\).","Solve \\(-4\\le2x+2<10\\).","Graph \\(y\\ge x-2\\)."],extension:["Solve \\(3x+1>5x-7\\).","Describe the region above \\(y=x+1\\) and below \\(y=5\\).","List inequalities for a triangular region bounded by \\(x=0,y=0,x+y=6\\)."]},
   homework:[hw("Foundation","Solve \\(2x-5\\ge9\\).",["Add 5: \\(2x\\ge14\\).","Divide by 2: \\(x\\ge7\\)."]),hw("Core","Solve \\(-3x<12\\).",["Divide by \\(-3\\).","Reverse the inequality: \\(x>-4\\)."]),hw("Extension","Graph \\(y< -x+4\\) and state whether \\((1,1)\\) lies in the region.",["Boundary is dashed: \\(y=-x+4\\).","Test \\((1,1)\\): \\(1<3\\), true.","So \\((1,1)\\) lies in the shaded region."])]
  }; return base;
 }
 if(["angles","parallel","polygons","symmetry2d","symmetry3d"].includes(t)){
  return {
   examples:[
    ex("Angles on a straight line are \\(3x+10\\)° and \\(5x+2\\)°. Find \\(x\\).",["Angles on a straight line sum to \\(180°\\).","\\(3x+10+5x+2=180\\).","\\(8x=168\\), so \\(x=21\\)."]),
    ex("Two parallel lines are cut by a transversal. An alternate angle is \\(68°\\). Find the matching alternate angle.",["Alternate angles between parallel lines are equal.","Therefore the required angle is \\(68°\\)."]),
    ex("Find each interior angle of a regular decagon.",["Interior angle sum \\(=(10-2)180=1440°\\).","Divide by 10: \\(144°\\)."])
   ],
   practice:{foundation:["Find the missing angle in a triangle with angles 48° and 67°.","Find the vertically opposite angle to 123°.","How many lines of symmetry does a square have?"],core:["Find an exterior angle of a regular nonagon.","A regular polygon has exterior angle 24°. Find its number of sides.","State the rotational symmetry order of a regular hexagon."],extension:["Two regular polygons meet at a point. Their interior angles are 120° and 135°. Find the remaining angle.","A regular polygon has interior angle 156°. Find its number of sides.","Explain the planes of symmetry of a regular triangular prism."]},
   homework:[hw("Foundation","Find the third angle of a triangle with 35° and 79°.",["Triangle sum is 180°.","\\(180-35-79=66°\\)."]),hw("Core","Find each exterior angle of a regular 15-gon.",["Exterior angles total 360°.","\\(360/15=24°\\)."]),hw("Extension","A regular polygon has interior angle 165°. Find the number of sides.",["Exterior angle \\(=180-165=15°\\).","Number of sides \\(=360/15=24\\)."])]
  };
 }
 if(["units","area","circle","sector"].includes(t)){
  return {
   examples:[
    ex("Convert \\(3.6\\text{ m}^2\\) to \\(\\text{cm}^2\\).",["\\(1\\text{ m}=100\\text{ cm}\\).","For area, square the scale factor: \\(1\\text{ m}^2=10,000\\text{ cm}^2\\).","\\(3.6\\times10,000=36,000\\text{ cm}^2\\)."]),
    ex("A trapezium has parallel sides 8 cm and 13 cm, height 6 cm. Find its area.",["Use \\(A=\\tfrac12(a+b)h\\).","\\(A=\\tfrac12(8+13)6=63\\text{ cm}^2\\)."]),
    ex("A sector has radius 9 cm and angle 80°. Find its area.",["Full circle area is \\(\\pi r^2=81\\pi\\).","Sector fraction \\(80/360=2/9\\).","Area \\(=18\\pi\\text{ cm}^2\\approx56.5\\text{ cm}^2\\)."])
   ],
   practice:{foundation:["Convert 2.4 m to cm.","Find area of a triangle, base 12 cm, height 7 cm.","Find circumference of radius 5 cm."],core:["Convert 0.45 m² to cm².","Find area of a trapezium with parallel sides 7 and 11, height 5.","Find arc length for radius 8, angle 135°."],extension:["Convert 2.3 m³ to litres.","A sector area is 30π cm² with radius 10 cm. Find the angle.","A compound shape consists of a rectangle and semicircle; create an expression for total area."]},
   homework:[hw("Foundation","Convert \\(4.2\\text{ km}\\) to metres.",["Multiply by 1000.","\\(4.2\\times1000=4200\\text{ m}\\)."]),hw("Core","Find the area of a circle of diameter 14 cm.",["Radius is 7 cm.","Area \\(=\\pi(7)^2=49\\pi\\approx153.9\\text{ cm}^2\\)."]),hw("Extension","Find the arc length of radius 12 cm, angle 150°.",["Fraction \\(150/360=5/12\\).","Circumference \\(=24\\pi\\).","Arc \\(=(5/12)(24\\pi)=10\\pi\\text{ cm}\\)."])]
  };
 }
 if(["tables","averages","grouped-mean","modalclass","data-interpret","data-compare","data-limits"].includes(t)){
  return {
   examples:[
    ex("Data: 4, 6, 6, 7, 9, 12. Find mean, median, mode and range.",["Mean \\(=(4+6+6+7+9+12)/6=44/6\\approx7.33\\).","Median is halfway between 6 and 7: \\(6.5\\).","Mode is 6; range \\(=12-4=8\\)."]),
    ex("Grouped data: 0–10: 3, 10–20: 7, 20–30: 5. Estimate the mean.",["Use midpoints 5, 15, 25.","\\(\\sum fx=3(5)+7(15)+5(25)=245\\).","Total frequency 15.","Estimated mean \\(=245/15\\approx16.3\\)."]),
    ex("Class A: median 68, IQR 12. Class B: median 72, IQR 20. Compare.",["Class B has the higher typical value because its median is larger.","Class A is more consistent because its IQR is smaller.","Both statements must mention the actual statistics."])
   ],
   practice:{foundation:["Find the mode of 2,3,3,4,5.","Find the range of 8,11,15,19.","Complete a frequency total: 4,7,?,6 with total 25."],core:["Find Q1, median, Q3 for 2,4,5,6,8,9,11,14.","Estimate mean for classes 0–5,5–10,10–15 with frequencies 2,6,4.","Compare two groups with medians 14,16 and IQRs 3,7."],extension:["Explain when median is preferable to mean.","Design two different data sets with same mean but different ranges.","Explain one limitation of drawing a population conclusion from a small convenience sample."]},
   homework:[hw("Foundation","Find mean of 5,7,7,8,13.",["Total \\(=40\\).","There are 5 values.","Mean \\(=8\\)."]),hw("Core","Classes 0–10,10–20,20–30 have frequencies 4,8,3. Estimate mean.",["Midpoints 5,15,25.","\\(\\sum fx=20+120+75=215\\).","Total 15, so estimate \\(215/15=14.3\\)."]),hw("Extension","Group X has median 24, IQR 5; Group Y median 22, IQR 3. Compare.",["X has higher typical values (median 24 vs 22).","Y is more consistent (IQR 3 vs 5).","No stronger claim is justified without more information."])]
  };
 }
 if(["charts","scatter","correlation","bestfit","cumfreq","cumfreq-read","histogram","freqdensity","chart-infer","graph-compare","graph-limits"].includes(t)){
  return {
   examples:[
    ex("A class interval 20–30 has frequency 18. Find frequency density.",["Class width \\(=10\\).","Frequency density \\(=18/10=1.8\\)."]),
    ex("A cumulative frequency curve represents 80 values. Where do you read the median?",["Median position is \\(80/2=40\\).","From cumulative frequency 40, move horizontally to the curve, then vertically to the x-axis.","That x-value estimates the median."]),
    ex("A scatter graph trends downward from left to right.",["This indicates negative correlation.","As one variable increases, the other tends to decrease.","This is an association; it does not by itself prove causation."])
   ],
   practice:{foundation:["State the correlation of an upward scatter pattern.","Find density when frequency 12 and width 4.","For 60 values, state the median cumulative frequency position."],core:["Find frequency from density 2.4 and width 5.","For 100 values, state positions of Q1 and Q3.","Explain how to draw a line of best fit."],extension:["A histogram bar has area 36 and width 8. Find density and frequency.","Explain why extrapolating far beyond a scatter data range is risky.","Compare two cumulative frequency curves using median and IQR."]},
   homework:[hw("Foundation","Frequency 15, class width 5. Find density.",["\\(15/5=3\\)."]),hw("Core","Density 1.6, width 10. Find frequency.",["Frequency = density × width.","\\(1.6\\times10=16\\)."]),hw("Extension","A data set has 120 values. State cumulative-frequency positions of Q1, median and Q3.",["Q1: \\(120/4=30\\).","Median: \\(120/2=60\\).","Q3: \\(3(120)/4=90\\)."])]
  };
 }
 if(["functions","inverse","composite"].includes(t)){
  return {
   examples:[
    ex("Given \\(f(x)=3x-2\\), find \\(f(5)\\).",["Substitute \\(x=5\\).","\\(f(5)=15-2=13\\)."]),
    ex("Find the inverse of \\(f(x)=2x+7\\).",["Write \\(y=2x+7\\).","Swap x and y: \\(x=2y+7\\).","Rearrange: \\(y=(x-7)/2\\).","So \\(f^{-1}(x)=(x-7)/2\\)."]),
    ex("Given \\(f(x)=2x+1\\), \\(g(x)=x^2\\), find \\(gf(x)\\).",["\\(gf(x)=g(f(x))\\).","Substitute \\(2x+1\\) into \\(g\\): \\(gf(x)=(2x+1)^2\\)."])
   ],
   practice:{foundation:["If \\(f(x)=x+4\\), find \\(f(7)\\).","If \\(g(x)=2x\\), find \\(g(-3)\\).","Find range of \\(f(x)=x^2\\) for domain {-2,-1,0,1,2}."],core:["Find inverse of \\(f(x)=3x-5\\).","Given \\(f(x)=x+1,g(x)=2x\\), find \\(gf(4)\\).","Form \\(fg(x)\\) for \\(f(x)=x^2,g(x)=x-3\\)."],extension:["Show that \\(f(f^{-1}(x))=x\\) for \\(f(x)=4x+1\\).","Compare \\(fg(x)\\) and \\(gf(x)\\) for \\(f(x)=x+2,g(x)=x^2\\).","State why \\(f(x)=x^2\\) has no inverse on all real numbers."]},
   homework:[hw("Foundation","If \\(f(x)=5x-1\\), find \\(f(3)\\).",["\\(f(3)=15-1=14\\)."]),hw("Core","Find inverse of \\(f(x)=4x+3\\).",["\\(y=4x+3\\).","Swap: \\(x=4y+3\\).","\\(y=(x-3)/4\\)."]),hw("Extension","Given \\(f(x)=x-1,g(x)=3x+2\\), find \\(fg(x)\\).",["\\(fg(x)=f(g(x))\\).","\\(f(3x+2)=3x+2-1=3x+1\\)."])]
  };
 }
 if(t==="sets") return {
  examples:[ex("Let \\(A={1,2,3,4}\\), \\(B={3,4,5}\\). Find \\(A\\cap B\\).",["Intersection means elements in both sets.","So \\(A\\cap B={3,4}\\)."]),ex("In a class, 18 study French, 15 Spanish, 7 both. How many study at least one?",["Use union total: \\(18+15-7\\).","Subtract the overlap once because it was counted twice.","Answer \\(26\\)."]),ex("Simplify \\((A\\cup B)'\\).",["By De Morgan's law, the complement of a union is the intersection of complements.","\\((A\\cup B)'=A'\\cap B'\\)."])],
  practice:{foundation:["Find union of {1,2,3} and {3,4}.","Find intersection of multiples of 2 and 3 below 20.","Shade \\(A\\cap B\\)."],core:["30 students: 19 football, 16 basketball, 8 both. Find at least one.","Given universal set 1–10 and A={2,4,6,8,10}, find A'.","Describe \\(A'\\cap B\\) in words."],extension:["Use a three-set Venn diagram for 40 students.","Verify a De Morgan law with a small universal set.","Solve a Venn problem with an unknown overlap."]},
  homework:[hw("Foundation","A={1,2,5}, B={2,3,5}. Find \\(A\\cap B\\).",["Common elements are 2 and 5.","Answer {2,5}."]),hw("Core","20 like tea, 14 coffee, 6 both. Find number liking tea or coffee.",["\\(20+14-6=28\\)."]),hw("Extension","Universal set has 50 elements, \\(n(A)=28,n(B)=25,n(A\\cap B)=10\\). Find neither.",["\\(n(A\\cup B)=28+25-10=43\\).","Neither \\(=50-43=7\\)."])]
 };
 if(t==="proportion") return {
  examples:[ex("\\(y\\propto x\\), and \\(y=18\\) when \\(x=6\\).",["Write \\(y=kx\\).","\\(18=6k\\), so \\(k=3\\).","Model: \\(y=3x\\)."]),ex("\\(y\\propto1/x^2\\), and \\(y=5\\) when \\(x=2\\).",["Write \\(y=k/x^2\\).","\\(5=k/4\\), so \\(k=20\\).","Thus \\(y=20/x^2\\)."]),ex("\\(p\\propto\\sqrt q\\), \\(p=12\\) when \\(q=9\\). Find \\(p\\) when \\(q=25\\).",["\\(p=k\\sqrt q\\).","\\(12=3k\\), so \\(k=4\\).","When \\(q=25\\), \\(p=4(5)=20\\)."])],
  practice:{foundation:["\\(y\\propto x\\), y=10 when x=2. Find k.","\\(y\\propto x^2\\), write equation with constant k.","\\(y\\propto1/x\\), describe what happens if x doubles."],core:["\\(y\\propto x^2\\), y=45 when x=3. Find y when x=5.","\\(t\\propto1/v\\), t=6 when v=20. Find t when v=30.","\\(p\\propto\\sqrt q\\), p=15 when q=25. Find q when p=21."],extension:["\\(y\\propto x^3\\), y=16 when x=2. Find x when y=54.","\\(a\\propto1/\\sqrt b\\), a=8 when b=9. Find b when a=6.","Explain the log-log graph shape for \\(y=kx^n\\)."]},
  homework:[hw("Foundation","\\(y\\propto x\\), y=21 when x=7. Find equation.",["\\(y=kx\\).","\\(21=7k\\Rightarrow k=3\\).","\\(y=3x\\)."]),hw("Core","\\(y\\propto x^2\\), y=32 when x=4. Find y when x=7.",["\\(32=16k\\Rightarrow k=2\\).","\\(y=2x^2\\).","At 7: \\(y=98\\)."]),hw("Extension","\\(t\\propto1/v^2\\), t=12 when v=5. Find t when v=10.",["\\(12=k/25\\Rightarrow k=300\\).","\\(t=300/v^2\\).","At 10: \\(t=3\\)."])]
 };
 return {examples:[ex("Core concept",["Read the learning points.","Model the method clearly.","Check the result in context."])],practice:{foundation:["Recall the key definition."],core:["Apply the method to a standard problem."],extension:["Solve a multi-step reasoning problem."]},homework:[hw("Core","Complete one exam-style problem.",["State the method.","Show each step.","Check the final answer."])]};
}

function diagramFor(t){
 if(["angles","parallel","polygons"].includes(t)) return `<svg class="diagram" viewBox="0 0 700 240" role="img" aria-label="Accurate geometry reference diagram"><line x1="60" y1="190" x2="640" y2="190" stroke="#18323d" stroke-width="4"/><line x1="130" y1="190" x2="350" y2="45" stroke="#18323d" stroke-width="4"/><line x1="350" y1="45" x2="560" y2="190" stroke="#18323d" stroke-width="4"/><path d="M175 190 A45 45 0 0 0 167 165" fill="none" stroke="#3e93b5" stroke-width="4"/><text x="190" y="160" font-size="22">48°</text><path d="M510 190 A50 50 0 0 1 520 160" fill="none" stroke="#3e93b5" stroke-width="4"/><text x="470" y="155" font-size="22">67°</text><text x="330" y="100" font-size="22">x°</text></svg>`;
 if(["ineq-numberline","ineq-linear"].includes(t)) return `<svg class="diagram" viewBox="0 0 700 160"><line x1="70" y1="80" x2="630" y2="80" stroke="#18323d" stroke-width="4"/>${[-3,-2,-1,0,1,2,3].map((n,i)=>`<g><line x1="${140+i*70}" y1="68" x2="${140+i*70}" y2="92" stroke="#18323d" stroke-width="3"/><text x="${134+i*70}" y="122" font-size="18">${n}</text></g>`).join("")}<circle cx="350" cy="80" r="10" fill="white" stroke="#2563eb" stroke-width="4"/><line x1="360" y1="80" x2="610" y2="80" stroke="#2563eb" stroke-width="8"/><path d="M610 80 l-20 -12 v24 z" fill="#2563eb"/></svg>`;
 if(["circle","sector"].includes(t)) return `<svg class="diagram" viewBox="0 0 500 300"><circle cx="250" cy="150" r="110" fill="#f7fbfd" stroke="#18323d" stroke-width="4"/><line x1="250" y1="150" x2="360" y2="150" stroke="#2563eb" stroke-width="4"/><line x1="250" y1="150" x2="305" y2="55" stroke="#2563eb" stroke-width="4"/><path d="M305 55 A110 110 0 0 1 360 150" fill="#dff3fb" stroke="#2563eb" stroke-width="3"/><text x="298" y="135" font-size="20">r</text><text x="280" y="110" font-size="20">60°</text></svg>`;
 if(["scatter","correlation","bestfit"].includes(t)) return `<svg class="diagram" viewBox="0 0 600 330"><line x1="70" y1="270" x2="560" y2="270" stroke="#18323d" stroke-width="3"/><line x1="70" y1="270" x2="70" y2="35" stroke="#18323d" stroke-width="3"/>${[[120,235],[170,210],[210,205],[260,165],[300,180],[350,125],[400,115],[450,80],[500,70]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#3e93b5"/>`).join("")}<line x1="105" y1="240" x2="520" y2="55" stroke="#dc6f55" stroke-width="3"/></svg>`;
 if(["histogram","freqdensity"].includes(t)) return `<svg class="diagram" viewBox="0 0 600 330"><line x1="70" y1="270" x2="560" y2="270" stroke="#18323d" stroke-width="3"/><line x1="70" y1="270" x2="70" y2="35" stroke="#18323d" stroke-width="3"/><rect x="90" y="190" width="90" height="80" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="180" y="110" width="140" height="160" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="320" y="150" width="200" height="120" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><text x="10" y="40" font-size="16">Frequency density</text></svg>`;
 if(t==="sets") return `<svg class="diagram" viewBox="0 0 620 300"><rect x="35" y="25" width="550" height="245" rx="12" fill="#fff" stroke="#18323d" stroke-width="3"/><circle cx="255" cy="150" r="90" fill="#dff3fb" fill-opacity=".8" stroke="#3e93b5" stroke-width="3"/><circle cx="365" cy="150" r="90" fill="#efe6d5" fill-opacity=".8" stroke="#b58d4b" stroke-width="3"/><text x="170" y="80" font-size="26">A</text><text x="430" y="80" font-size="26">B</text><text x="55" y="55" font-size="20">ξ</text></svg>`;
 if(["functions","inverse","composite"].includes(t)) return `<svg class="diagram" viewBox="0 0 620 260"><ellipse cx="170" cy="130" rx="100" ry="105" fill="#f7fbfd" stroke="#18323d" stroke-width="3"/><ellipse cx="450" cy="130" rx="100" ry="105" fill="#f7fbfd" stroke="#18323d" stroke-width="3"/><text x="135" y="85" font-size="22">1</text><text x="135" y="135" font-size="22">2</text><text x="135" y="185" font-size="22">3</text><text x="470" y="85" font-size="22">3</text><text x="470" y="135" font-size="22">5</text><text x="470" y="185" font-size="22">7</text><path d="M160 80 C260 65,350 65,445 80" fill="none" stroke="#3e93b5" stroke-width="3"/><path d="M160 130 C260 130,350 130,445 130" fill="none" stroke="#3e93b5" stroke-width="3"/><path d="M160 180 C260 195,350 195,445 180" fill="none" stroke="#3e93b5" stroke-width="3"/></svg>`;
 return "";
}

function renderNav(filter=""){
 const groups={}; LESSONS.forEach((l,i)=>{ if((l.id+" "+l.title+" "+l.unit).toLowerCase().includes(filter.toLowerCase())) (groups[l.u]??=[]).push([l,i]);});
 $("#lessonNav").innerHTML=Object.entries(groups).map(([u,ls])=>`<div class="unit-nav"><h3>Unit ${u} • ${ls[0][0].unit}</h3>${ls.map(([l,i])=>`<button class="lesson-link ${i===current?"active":""}" data-i="${i}"><strong>${l.id}</strong> ${l.title}</button>`).join("")}</div>`).join("");
 $$(".lesson-link").forEach(b=>b.onclick=()=>{current=+b.dataset.i;tab="learn";render();$("#sidebar").classList.remove("open");});
}

function render(){
 const l=LESSONS[current], b=bank(l.type);
 $("#unitPill").textContent=`Unit ${l.u} • ${l.unit}`;
 $("#lessonTitle").textContent=`${l.id}  ${l.title}`;
 $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • lesson-by-lesson teaching sequence";
 $("#prevBtn").disabled=current===0; $("#nextBtn").disabled=current===LESSONS.length-1;
 $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
 renderNav($("#search").value);
 if(tab==="learn") $("#content").innerHTML=`
  <div class="learn-grid">
   <article class="card"><h3>Prior knowledge check</h3><p class="lead">Students should be ready to recall:</p><ul class="clean-list">${l.prior.map(x=>`<li>${x}</li>`).join("")}</ul></article>
   <article class="card"><h3>Learning points</h3><p class="lead">By the end of the lesson, students should be able to:</p><ul class="clean-list">${l.obj.map(x=>`<li>${x}</li>`).join("")}</ul></article>
  </div>
  <article class="card"><h3>Visual / mathematical focus</h3>${diagramFor(l.type)?`<div class="diagram-wrap">${diagramFor(l.type)}</div>`:""}<p class="hint">Teacher focus: model one clean method at a time, keep exact values exact where appropriate, and insist on mathematical reasons/units/notation.</p><p class="source-note">Difficulty and sequencing calibrated to the Year 10 SoW reference: ${l.src}. Questions on this site are original rather than copied from the textbook.</p></article>`;
 if(tab==="examples") $("#content").innerHTML=`<article class="card"><h3>Teacher examples</h3><p class="lead">Worked from accessible entry point to exam-style reasoning.</p>${b.examples.map((e,i)=>`<div class="example"><div class="example-head"><span class="example-num">Example ${i+1}</span><strong>${e.q}</strong></div><div class="steps">${e.steps.map((s,j)=>`<div class="step"><span class="step-badge">${j+1}</span><div>${s}</div></div>`).join("")}</div></div>`).join("")}</article>`;
 if(tab==="practice") $("#content").innerHTML=`<article class="card"><h3>Independent practice</h3><p class="lead">Students can start at the tier that matches their confidence, then move upward.</p><div class="tiers">${[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(([name,k])=>`<section class="tier ${k}"><h4>${name}</h4><ol class="q-list">${b.practice[k].map(q=>`<li>${q}</li>`).join("")}</ol>${k==="foundation"?'<div class="hint">Scaffold: identify the rule/formula first, then substitute or rearrange one step at a time.</div>':k==="extension"?'<div class="hint">Stretch: justify the method, not only the final answer.</div>':""}</section>`).join("")}</div></article>`;
 if(tab==="homework") $("#content").innerHTML=`<article class="card"><h3>Homework</h3><p class="lead">Each solution reveals a full method so students can self-correct after attempting the question.</p>${b.homework.map((h,i)=>`<div class="hw-item"><div class="hw-q">${i+1}. <span class="pill">${h.tier}</span> &nbsp; ${h.q}</div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">${h.sol.map((s,j)=>`<div class="step"><span class="step-badge">${j+1}</span><div>${s}</div></div>`).join("")}</div></div></details></div>`).join("")}</article>`;
 if(tab==="whiteboard") $("#content").innerHTML=`<article class="card board-card"><div class="board-tools"><strong>Whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>`;
 if(window.MathJax?.typesetPromise) MathJax.typesetPromise([$("#content")]);
 if(tab==="whiteboard") initBoard();
 location.hash=l.id+"-"+tab;
}

function initBoard(){
 const canvas=$("#board"), shell=canvas.parentElement, ctx=canvas.getContext("2d"); let drawing=false,last=null,colour="#132d36",erase=false;
 function resize(){const dpr=devicePixelRatio||1, rect=shell.getBoundingClientRect(); const old=document.createElement("canvas");old.width=canvas.width;old.height=canvas.height;old.getContext("2d").drawImage(canvas,0,0);canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;canvas.style.width=rect.width+"px";canvas.style.height=rect.height+"px";ctx.setTransform(dpr,0,0,dpr,0,0); if(old.width) ctx.drawImage(old,0,0,old.width,old.height,0,0,rect.width,rect.height);}
 resize(); window.addEventListener("resize",resize,{once:true});
 const point=e=>{const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
 canvas.onpointerdown=e=>{drawing=true;last=point(e);canvas.setPointerCapture(e.pointerId)};
 canvas.onpointermove=e=>{if(!drawing)return;const p=point(e);ctx.lineCap="round";ctx.lineJoin="round";ctx.lineWidth=erase?22:3.5;ctx.strokeStyle=erase?"rgba(0,0,0,1)":colour;ctx.globalCompositeOperation=erase?"destination-out":"source-over";ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p};
 canvas.onpointerup=canvas.onpointercancel=()=>drawing=false;
 $$(".colour-dot").forEach(b=>b.onclick=()=>{colour=b.dataset.colour;erase=false;$$(".colour-dot").forEach(x=>x.classList.toggle("active",x===b));$("#eraser").classList.remove("active")});
 $("#eraser").onclick=()=>{erase=true;$$(".colour-dot").forEach(x=>x.classList.remove("active"))};
 $("#clearBoard").onclick=()=>ctx.clearRect(0,0,canvas.width,canvas.height);
}
$$(".tab").forEach(b=>b.onclick=()=>{tab=b.dataset.tab;render()});
$("#prevBtn").onclick=()=>{if(current>0){current--;tab="learn";render()}};
$("#nextBtn").onclick=()=>{if(current<LESSONS.length-1){current++;tab="learn";render()}};
$("#search").oninput=e=>renderNav(e.target.value);
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
$("#presentBtn").onclick=()=>{document.body.classList.toggle("present");$("#presentBtn").textContent=document.body.classList.contains("present")?"Exit presentation":"Presentation mode"};
const hash=decodeURIComponent(location.hash.slice(1)); if(hash){const id=hash.split("-")[0]; const i=LESSONS.findIndex(l=>l.id===id); if(i>=0)current=i; const maybe=hash.split("-").slice(1).join("-"); if(["learn","examples","practice","homework","whiteboard"].includes(maybe))tab=maybe}
render();


/* ===== Teaching Hub v2: slide examples, embedded modelling boards, deeper practice ===== */
var exampleSlide;
var lastExampleLesson;

function upgradedBank(l){
  var s = specialisedBank(l.type);
  var b = s || bank(l.type);
  if(!s && b.examples.length < 4){
    var e = extraExample(l.type);
    if(e) b = Object.assign({}, b, {examples:b.examples.concat([e])});
  }
  return b;
}

function extraExample(t){
  var fam = topicFamily(t);
  if(fam==="surds") return ex("Problem solving: A square has area \\(72\\text{ cm}^2\\). Find its side length in simplest surd form.",[
    "For a square, \\(s^2=72\\).",
    "So \\(s=\\sqrt{72}\\).",
    "Simplify: \\(\\sqrt{72}=\\sqrt{36\\times2}=6\\sqrt2\\).",
    "The side length is \\(6\\sqrt2\\text{ cm}\\)."
  ]);
  if(fam==="algebra") return ex("Problem solving: Form an equation from a context, solve it, then check the answer is sensible.",[
    "Define the unknown clearly.",
    "Translate the information into an equation.",
    "Solve using the most efficient algebraic method.",
    "Substitute back into the original context to check."
  ]);
  if(fam==="inequalities") return ex("Problem solving: A lift can carry at most 630 kg. Six people weigh 78 kg each. Write and solve an inequality for the maximum extra load \\(x\\).",[
    "Six people weigh \\(6\\times78=468\\) kg.",
    "At most 630 kg gives \\(468+x\\le630\\).",
    "Subtract 468: \\(x\\le162\\).",
    "The extra load must be no more than 162 kg."
  ]);
  if(fam==="geometry") return ex("Reasoning: Explain each line of a multi-step angle solution rather than writing only the final value.",[
    "Mark known equal angles first.",
    "Write the geometric reason beside every new angle.",
    "Only then form any algebraic equation.",
    "Finish with units in degrees and a final reason check."
  ]);
  if(fam==="mensuration") return ex("Problem solving: A running track contains two semicircles of radius 18 m joined by two straight sections of 55 m. Find the perimeter.",[
    "Two semicircles make one full circle.",
    "Curved length \\(=2\\pi r=36\\pi\\).",
    "Straight length \\(=2(55)=110\\).",
    "Total \\(=110+36\\pi\\approx223.1\\text{ m}\\)."
  ]);
  if(fam==="functions") return ex("Reasoning: Given \\(f(x)=2x-3\\) and \\(g(x)=x^2+1\\), compare \\(fg(2)\\) and \\(gf(2)\\).",[
    "\\(g(2)=5\\), so \\(fg(2)=f(5)=7\\).",
    "\\(f(2)=1\\), so \\(gf(2)=g(1)=2\\).",
    "Therefore \\(fg(2)\\ne gf(2)\\).",
    "Function composition depends on order."
  ]);
  if(fam==="sets") return ex("Problem solving: In 40 students, 23 study French, 19 study Spanish and 8 study both. Find how many study neither.",[
    "\\(n(F\\cup S)=23+19-8=34\\).",
    "The overlap is subtracted once because it was counted twice.",
    "Neither \\(=40-34=6\\)."
  ]);
  if(fam==="proportion") return ex("Problem solving: The time \\(t\\) is inversely proportional to the square of speed \\(v\\). If \\(t=20\\) when \\(v=3\\), find \\(t\\) when \\(v=5\\).",[
    "\\(t=k/v^2\\).",
    "\\(20=k/9\\), so \\(k=180\\).",
    "At \\(v=5\\), \\(t=180/25=7.2\\)."
  ]);
  return null;
}

function specialisedBank(t){
  if(t==="tables") return {
    examples:[
      ex("A survey records transport to school: Bus 14, Car 9, Walk 7, Cycle 5. Construct a frequency table.",[
        "Use one row for each category.",
        "Record the frequency exactly once.",
        "Check the total: \\(14+9+7+5=35\\).",
        "A frequency table should have clear headings and a total."
      ]),
      ex("Complete the two-way table if 18 students are boys, 22 are girls, 12 boys study French and 17 girls study French.",[
        "Boys not French: \\(18-12=6\\).",
        "Girls not French: \\(22-17=5\\).",
        "French total: \\(12+17=29\\).",
        "Not French total: \\(6+5=11\\); grand total \\(40\\)."
      ]),
      ex("A grouped table has intervals 0–10, 10–20, 20–30 with frequencies 4, 9, 7. How many observations are there?",[
        "Add all frequencies.",
        "\\(4+9+7=20\\).",
        "There are 20 observations."
      ]),
      ex("Reasoning: Explain why a category table should not use overlapping classes.",[
        "Each observation must belong to exactly one class.",
        "Overlapping classes can count one value twice.",
        "Use unambiguous boundaries such as \\(0\\le x<10\\), \\(10\\le x<20\\)."
      ])
    ],
    practice:{foundation:["Complete a frequency table from: red, blue, red, green, blue, red.","Find the total frequency 6, 8, 5, 11.","Which variable is categorical: height, eye colour, mass?"],core:["Complete a two-way table with row/column totals.","Write suitable non-overlapping groups for ages 10 to 19.","A table totals 60; one missing frequency is represented by \\(x\\). Form an equation."],extension:["Design a two-way table for year group and transport method.","Explain why unequal class widths are acceptable in a grouped table.","Identify two possible sources of classification error in survey data."]},
    homework:[
      hw("Foundation","Frequencies are 5, 8, 6 and 1. Find the total.",["Add the frequencies: \\(5+8+6+1=20\\)."]),
      hw("Core","A two-way table has 16 boys and 24 girls. 9 boys and 15 girls chose option A. Find all missing totals.",["Boys not A: \\(16-9=7\\).","Girls not A: \\(24-15=9\\).","Option A total \\(=24\\); not A total \\(=16\\); grand total \\(=40\\)."]),
      hw("Extension","Explain why intervals \\(0<x\\le10\\) and \\(10<x\\le20\\) do not overlap.",["The first class includes 10 because \\(x\\le10\\).","The second class excludes 10 because \\(10<x\\).","So every boundary value belongs to exactly one class."])
    ]
  };
  if(t==="averages") return {
    examples:[
      ex("Data: 4, 6, 6, 7, 9, 12. Find mean, median, mode and range.",["Mean \\(=44/6\\approx7.33\\).","Median \\(=(6+7)/2=6.5\\).","Mode \\(=6\\).","Range \\(=12-4=8\\)."]),
      ex("Data: 3, 5, 7, 8, 10, 13, 18, 21. Find \\(Q_1,Q_2,Q_3\\) and IQR.",["Median \\(Q_2=(8+10)/2=9\\).","Lower half 3,5,7,8 gives \\(Q_1=(5+7)/2=6\\).","Upper half 10,13,18,21 gives \\(Q_3=(13+18)/2=15.5\\).","IQR \\(=15.5-6=9.5\\)."]),
      ex("A company has salaries 500, 520, 540, 560, 4000. Which average is more representative?",["The mean is pulled upward by the extreme salary.","The median is the middle value 540.","The median is more representative of a typical salary here."]),
      ex("Class A: median 68, IQR 12. Class B: median 72, IQR 20. Compare.",["Class B has the higher typical result because 72 > 68.","Class A is more consistent because 12 < 20.","Use both centre and spread in a complete comparison."])
    ],
    practice:{foundation:["Find the mean of 4,6,8,10.","Find the median of 3,5,8,9,12.","Find mode and range of 2,2,3,6,9."],core:["Find quartiles and IQR of 2,4,5,6,8,9,11,14.","A mean of 12 is calculated from 6 values. Find their total.","The mean of five numbers is 14; four are 8,11,15,19. Find the fifth."],extension:["Explain when median is preferable to mean.","Two data sets have equal means but different IQRs. Explain what this tells you.","Create a set of 6 integers with mean 10, median 9 and range 12."]},
    homework:[
      hw("Foundation","Find the mean of 5,7,7,8,13.",["Total \\(=40\\).","There are 5 values.","Mean \\(=8\\)."]),
      hw("Core","Find the IQR of 2,4,5,8,9,11,13,18.",["Lower half 2,4,5,8 gives \\(Q_1=4.5\\).","Upper half 9,11,13,18 gives \\(Q_3=12\\).","IQR \\(=12-4.5=7.5\\)."]),
      hw("Extension","The mean of 7 values is 18. Six values total 111. Find the seventh.",["Total for 7 values \\(=7\\times18=126\\).","Seventh value \\(=126-111=15\\)."])
    ]
  };
  if(t==="grouped-mean" || t==="modalclass") return {
    examples:[
      ex("Estimate the mean for intervals 0–10, 10–20, 20–30 with frequencies 3, 7, 5.",["Midpoints are 5, 15, 25.","\\(\\sum fx=3(5)+7(15)+5(25)=245\\).","\\(\\sum f=15\\).","Estimated mean \\(=245/15\\approx16.3\\)."]),
      ex("For intervals 20–30, 30–40, 40–50 with frequencies 6, 12, 9, identify the modal class.",["The greatest frequency is 12.","It occurs in \\(30\\le x<40\\).","So the modal class is 30–40."]),
      ex("A grouped table has 40 values. Which class contains the median if cumulative frequencies are 7, 18, 31, 40?",["Median position is the 20th value.","The cumulative frequency first reaches/exceeds 20 at 31.","Therefore the median lies in the third class."]),
      ex("Why is a grouped-data mean only an estimate?",["We do not know each exact data value.","We assume every value in a class is represented by the class midpoint.","That assumption creates an estimate rather than an exact mean."])
    ],
    practice:{foundation:["Find the midpoint of 10–20.","Identify the modal class from frequencies 3,8,5,2.","For 30 values, state the median position."],core:["Estimate a mean for classes 0–5,5–10,10–15 with frequencies 2,6,4.","Identify the median class from cumulative frequencies 5,13,21,30.","Explain why midpoint 17.5 represents class 15–20."],extension:["Compare an exact mean with a grouped estimate and explain the difference.","Design two different raw data sets that give the same grouped table.","Explain how wider classes can reduce accuracy of the estimated mean."]},
    homework:[
      hw("Foundation","Find the midpoint of 30–50.",["Midpoint \\(=(30+50)/2=40\\)."]),
      hw("Core","Classes 0–10,10–20,20–30 have frequencies 4,8,3. Estimate the mean.",["Midpoints 5,15,25.","\\(\\sum fx=20+120+75=215\\).","Total 15.","Estimate \\(=215/15\\approx14.3\\)."]),
      hw("Extension","Cumulative frequencies are 4, 15, 28, 40. Which class contains the median?",["There are 40 values, so the median position is about the 20th value.","15 < 20 ≤ 28.","The median is in the third class."])
    ]
  };
  if(t==="scatter" || t==="correlation" || t==="bestfit") return {
    examples:[
      ex("Plot the pairs \\((1,8),(2,7),(3,6),(4,5),(5,4)\\) and describe the correlation.",["Plot each pair as a small cross.","The points fall approximately along a downward trend.","This is strong negative correlation."]),
      ex("A scatter plot of height against arm span shows an upward trend with one isolated point. Describe it.",["The overall relationship is positive correlation.","The isolated point is an outlier.","The outlier should be noted, not automatically removed."]),
      ex("Draw a line of best fit for an upward scatter plot.",["Use one straight ruled line by inspection.","Extend it across the full data cloud.","Aim for roughly balanced points above and below.","Do not force the line through the origin unless justified."]),
      ex("A line of best fit predicts 92 when the observed x-range is 10 to 50 and x=85 is used. Comment.",["This is extrapolation far outside the observed data range.","The relationship may not continue in the same way.","The estimate should be treated as unreliable."])
    ],
    practice:{foundation:["Classify an upward trend.","Classify a downward trend.","State what an outlier is."],core:["Explain the difference between strong and weak positive correlation.","Estimate y from a line of best fit for a value inside the data range.","Explain why a line of best fit should have points on both sides."],extension:["Explain why correlation does not prove causation.","Give a plausible lurking variable for ice-cream sales and sunburn cases.","Explain why extrapolation is usually less reliable than interpolation."]},
    homework:[
      hw("Foundation","A scatter plot slopes down from left to right. State the correlation.",["The relationship is negative correlation."]),
      hw("Core","Why should a line of best fit usually extend across the whole data set?",["It should represent the overall trend rather than a small local section.","Extending across the data cloud makes interpolation consistent."]),
      hw("Extension","A strong positive correlation is found between shoe size and reading age in children. Explain why this does not prove larger shoes cause better reading.",["Correlation is association, not proof of cause.","Age is a likely third variable: older children tend to have larger feet and higher reading ages."])
    ]
  };
  if(t==="cumfreq" || t==="cumfreq-read") return {
    examples:[
      ex("Frequencies for \\(0<x\\le10,10<x\\le20,20<x\\le30\\) are 5, 8, 7. Form cumulative frequencies.",["First cumulative frequency: 5.","Second: \\(5+8=13\\).","Third: \\(13+7=20\\).","Plot at upper class boundaries: \\((10,5),(20,13),(30,20)\\)."]),
      ex("A cumulative frequency graph represents 80 values. Locate the median.",["Median position \\(=80/2=40\\).","From 40 on the cumulative-frequency axis, move horizontally to the curve.","Then move vertically down to the x-axis.","The x-coordinate is the estimated median."]),
      ex("For 120 values, locate \\(Q_1\\) and \\(Q_3\\).",["\\(Q_1\\) position \\(=120/4=30\\).","\\(Q_3\\) position \\(=3(120)/4=90\\).","Read both x-values from the curve.","IQR \\(=Q_3-Q_1\\)."]),
      ex("Why should cumulative-frequency points be joined by a smooth curve?",["Grouped continuous data represents values spread within intervals.","A smooth curve reflects a continuous accumulation rather than sudden jumps at every point.","The plotted points should still be clearly marked."])
    ],
    practice:{foundation:["Find cumulative frequencies from 3,7,5,5.","For 60 values, state the median position.","For 100 values, state the Q1 position."],core:["Plot cumulative frequencies at upper class boundaries.","Read a median and IQR from a given curve.","Estimate the 90th percentile from a curve."],extension:["Use a cumulative-frequency curve to estimate a probability.","Compare two distributions using median and IQR.","Explain why values read from a smooth curve are estimates."]},
    homework:[
      hw("Foundation","Frequencies are 4,6,9,1. Find cumulative frequencies.",["Running totals are 4, 10, 19, 20."]),
      hw("Core","A distribution has 80 values. State the cumulative-frequency positions for Q1, median and Q3.",["Q1: \\(20\\).","Median: \\(40\\).","Q3: \\(60\\)."]),
      hw("Extension","A cumulative-frequency graph gives Q1=18 and Q3=31. Find and interpret IQR.",["IQR \\(=31-18=13\\).","The middle 50% of the data spans 13 units."])
    ]
  };
  if(t==="histogram" || t==="freqdensity") return {
    examples:[
      ex("Class \\(10\\le x<20\\) has frequency 24. Find frequency density.",["Class width \\(=20-10=10\\).","Frequency density \\(=24/10=2.4\\).","The bar height is 2.4."]),
      ex("A histogram bar has width 5 and frequency density 3.2. Find its frequency.",["Histogram area represents frequency.","Frequency \\(=\\text{density}\\times\\text{class width}\\).","\\(3.2\\times5=16\\)."]),
      ex("A class has frequency 18 and density 1.5. Find its class width.",["Use \\(\\text{density}=f/w\\).","So \\(w=f/\\text{density}=18/1.5=12\\)."]),
      ex("Why is ordinary frequency not suitable as bar height when class widths differ?",["In a histogram, bar area must represent frequency.","If widths differ, using frequency as height makes area misleading.","Frequency density adjusts the height so area stays proportional to frequency."])
    ],
    practice:{foundation:["Find density for frequency 12, width 4.","Find frequency for density 2, width 6.","Find class width 20–35."],core:["Find density for frequency 18 over 5–11.","Recover frequency from density 1.8 and width 10.","Find width when frequency 30 and density 2.5."],extension:["Complete a histogram with one missing density.","Compare two unequal-width bars by area.","Explain why the vertical axis must be labelled frequency density."]},
    homework:[
      hw("Foundation","Frequency 15, class width 5. Find density.",["\\(15/5=3\\)."]),
      hw("Core","Density 1.6, width 10. Find frequency.",["Frequency \\(=1.6\\times10=16\\)."]),
      hw("Extension","Frequency 21, density 1.4. Find class width.",["Width \\(=21/1.4=15\\)."])
    ]
  };
  if(t==="charts") return {
    examples:[
      ex("A category has frequency 18 out of 60. Find its pie-chart angle.",["Fraction \\(=18/60\\).","Angle \\(=(18/60)\\times360=108^\\circ\\)."]),
      ex("Construct a stem-and-leaf diagram for 12, 15, 18, 21, 21, 24, 29.",["Use tens as stems 1 and 2.","Order leaves within each row.","Write \\(1|2\\ 5\\ 8\\) and \\(2|1\\ 1\\ 4\\ 9\\).","Include a key, e.g. \\(1|2=12\\)."]),
      ex("A dual bar chart compares two classes. What must stay consistent?",["Use one common vertical scale.","Keep category widths and spacing consistent.","Use a clear key for the two data sets."]),
      ex("A pictogram key says one symbol represents 8 students. What does half a symbol represent?",["Half of 8 is 4.","So half a symbol represents 4 students."])
    ],
    practice:{foundation:["Convert frequency 10 out of 40 to a pie angle.","Write a key for a stem-and-leaf plot.","A pictogram symbol represents 6 people; what does 2.5 symbols mean?"],core:["Construct a stem-and-leaf from 11,14,17,22,22,26,31.","Find three pie-chart angles from frequencies 12,18,30.","Compare two bars using a common scale."],extension:["Explain one advantage and one limitation of a pie chart.","Design a dual bar chart for two groups.","Spot how a truncated axis can make a difference look larger."]},
    homework:[
      hw("Foundation","Frequency 15 out of 50. Find the pie-chart angle.",["Angle \\(=(15/50)\\times360=108^\\circ\\)."]),
      hw("Core","Write 13,16,18,21,24 as a stem-and-leaf diagram.",["Stem 1: leaves 3,6,8.","Stem 2: leaves 1,4.","Include key \\(1|3=13\\)."]),
      hw("Extension","Explain why a pie chart is unsuitable when categories overlap.",["Pie-chart sectors represent mutually exclusive parts of one whole.","If categories overlap, one item can belong to more than one sector and totals can exceed 100%."])
    ]
  };
  if(t==="data-interpret" || t==="data-compare" || t==="data-limits" || t==="chart-infer" || t==="graph-compare" || t==="graph-limits") return {
    examples:[
      ex("Group A has median 42 and IQR 8; Group B has median 39 and IQR 5. Compare.",["Group A has the higher typical value because its median is larger.","Group B is more consistent because its IQR is smaller.","State both comparisons with numerical evidence."]),
      ex("A graph shows sales rising at the same time as advertising spend. Can we conclude advertising caused the rise?",["The graph shows an association.","Other factors may also have changed.","The data alone does not establish causation."]),
      ex("A bar chart starts its vertical axis at 92 instead of 0. What effect can this have?",["Small differences can look visually exaggerated.","The scale is not automatically wrong, but it can be misleading if not noticed.","Always read the axis values, not just bar heights."]),
      ex("A survey of 25 volunteers is used to describe all teenagers in Kuwait. State two limitations.",["The sample is small.","Volunteers may be systematically different from the wider population.","Therefore generalisation should be cautious."])
    ],
    practice:{foundation:["Compare medians 18 and 22.","Compare IQRs 4 and 9.","Identify one misleading graph feature."],core:["Write a two-sentence comparison using centre and spread.","Explain why a convenience sample may be biased.","State why correlation does not prove causation."],extension:["Critique a conclusion based on a small sample.","Explain the effect of a truncated axis.","Suggest a better sampling method for a school-wide survey."]},
    homework:[
      hw("Foundation","Set X has IQR 3; set Y has IQR 8. Which is more consistent?",["Set X is more consistent because it has the smaller IQR."]),
      hw("Core","Group P median 51, IQR 10; Group Q median 48, IQR 6. Compare.",["P has the higher typical value.","Q is more consistent because its IQR is smaller."]),
      hw("Extension","A graph from 2019–2021 is used to claim a trend will continue until 2035. Give one limitation.",["This is long-range extrapolation beyond the observed period.","The relationship may change, so the conclusion is uncertain."])
    ]
  };
  return null;
}

function topicFamily(t){
  if(t==="surds"||t==="rationalise") return "surds";
  if(["algfrac-simplify","algfrac-four","forming","linear","quadratic","fractional-eq","simultaneous-linear","simultaneous-nonlinear","rearrange"].includes(t)) return "algebra";
  if(t.startsWith("ineq-")) return "inequalities";
  if(["angles","parallel","polygons","symmetry2d","symmetry3d"].includes(t)) return "geometry";
  if(["units","area","circle","sector"].includes(t)) return "mensuration";
  if(["tables","averages","grouped-mean","modalclass","data-interpret","data-compare","data-limits"].includes(t)) return "statistics";
  if(["charts","scatter","correlation","bestfit","cumfreq","cumfreq-read","histogram","freqdensity","chart-infer","graph-compare","graph-limits"].includes(t)) return "charts";
  if(["functions","inverse","composite"].includes(t)) return "functions";
  if(t==="sets") return "sets";
  if(t==="proportion") return "proportion";
  return "general";
}

function extraPractice(t){
  var f=topicFamily(t);
  var packs={
    surds:{
      foundation:["Simplify \\(\\sqrt{32}\\).","Simplify \\(\\sqrt{80}\\).","Simplify \\(3\\sqrt2+5\\sqrt2\\)."],
      core:["Simplify \\(2\\sqrt{45}-\\sqrt{20}\\).","Evaluate \\(\\sqrt{12}\\times\\sqrt{27}\\).","Rationalise \\(4/\\sqrt7\\)."],
      extension:["Simplify \\((\\sqrt5+2)(\\sqrt5-2)\\).","Rationalise \\(5/(\\sqrt3+1)\\).","Find \\(a\\) if \\(a\\sqrt2=\\sqrt{98}\\)."],
      problems:["A square has area \\(98\\text{ cm}^2\\). Find its exact side length.","A right triangle has legs \\(\\sqrt{18}\\) and \\(\\sqrt{32}\\). Simplify their sum.","Show that \\(1/(\\sqrt2-1)=\\sqrt2+1\\).","Explain why \\(\\sqrt{50}+\\sqrt8\\) can be combined but \\(\\sqrt5+\\sqrt8\\) cannot immediately."]
    },
    algebra:{
      foundation:["Solve \\(5x-8=17\\).","Factorise \\(x^2+8x+15\\).","Simplify \\(12x^2/(3x)\\)."],
      core:["Solve \\(4(x-3)=2x+10\\).","Solve \\(x^2-7x+12=0\\).","Simplify \\((x^2-9)/(x+3)\\)."],
      extension:["Form and solve an equation for two consecutive integers with product 156.","Solve \\(1/x+1/(x+1)=1\\).","Find the intersection of \\(y=2x+3\\) and \\(y=x^2-1\\)."],
      problems:["A rectangle has area 96 cm² and sides \\(x+4\\) and \\(x+8\\). Form and solve an equation.","Two adult tickets and three child tickets cost KD 19; three adult and one child cost KD 17. Find each price.","A formula is \\(P=2a+2b\\). Make \\(b\\) the subject and use it when \\(P=30,a=6\\).","Explain one common algebraic-fraction cancellation error and correct it."]
    },
    inequalities:{
      foundation:["Solve \\(x-4<7\\).","Solve \\(3x\\ge12\\).","Represent \\(x<2\\) on a number line."],
      core:["Solve \\(5-2x\\le11\\).","Solve \\(-3<2x+1\\le9\\).","Graph \\(y>2x-3\\)."],
      extension:["List inequalities for the region \\(x\\ge0,y\\ge0,x+y\\le8\\).","Test whether \\((2,5)\\) satisfies \\(y\\le3x-1\\).","Solve \\(4x+1>7x-8\\)."],
      problems:["A concert hall holds at most 720 people; 486 seats are sold. Write an inequality for extra tickets.","A student needs at least 70% across five tests; four scores are 68,74,81,63. Form an inequality for the fifth score.","Describe a feasible region bounded by three inequalities.","Explain why dividing an inequality by a negative reverses the sign."]
    },
    geometry:{
      foundation:["Find a missing angle on a straight line.","Find the third angle in a triangle.","State the rotational symmetry order of a rectangle."],
      core:["Find an alternate angle in parallel lines.","Find the exterior angle of a regular 12-gon.","Find the interior angle of a regular octagon."],
      extension:["A regular polygon has exterior angle 15°. Find the number of sides.","Solve a multi-step angle problem involving parallel lines and a triangle.","Explain the planes of symmetry of a regular hexagonal prism."],
      problems:["Two regular polygons meet at a point with one angle 120° and another 135°. Find the third angle.","An isosceles triangle has vertex angle 38°. Find each base angle and justify.","A polygon has interior angle sum 1980°. Find its number of sides.","Construct an angle proof using at least three named reasons."]
    },
    mensuration:{
      foundation:["Convert 3.4 m to cm.","Find area of a triangle with base 9 and height 8.","Find circumference of radius 6."],
      core:["Convert 0.62 m² to cm².","Find area of a trapezium with sides 9,14 and height 7.","Find sector area for radius 12, angle 75°."],
      extension:["Convert 1.8 m³ to litres.","A sector has area \\(24\\pi\\) and radius 8. Find its angle.","Find the radius of a circle with area 200 cm²."],
      problems:["A garden consists of a rectangle and two semicircles. Form an exact perimeter.","A metal sheet loses a circular hole; find remaining area.","A water tank has volume 2.4 m³. Convert to litres and explain the factor used.","Compare two shapes with equal perimeter and determine which has greater area."]
    },
    statistics:{
      foundation:["Find the mean of 4,5,7,8.","Find the range of 3,9,11,14.","Identify the modal class from a grouped table."],
      core:["Calculate Q1, median, Q3 and IQR.","Estimate a grouped mean using midpoints.","Complete a two-way table from totals."],
      extension:["Compare two data sets using median and IQR.","Explain when median is preferable to mean.","Critique a conclusion from a small biased sample."],
      problems:["A sports coach compares two teams using centre and spread. Write a balanced conclusion.","A survey result changes greatly when one outlier is removed. Explain why.","Design a grouped table that could estimate the mean height of a class.","Explain how class width affects the accuracy of grouped estimates."]
    },
    charts:{
      foundation:["State the correlation shown by an upward scatter trend.","Find frequency density for frequency 18 and width 6.","For 80 values, state the median cumulative-frequency position."],
      core:["Find a pie-chart angle for frequency 24 out of 80.","Recover frequency from density 2.4 and width 5.","Find Q1 and Q3 positions for 120 values."],
      extension:["Explain why histogram area represents frequency.","Explain why extrapolation is risky.","Compare two cumulative-frequency curves using median and IQR."],
      problems:["A newspaper uses a truncated axis to compare two values. Explain the visual effect.","A scatter plot has strong correlation but no causal mechanism. Write a cautious conclusion.","A histogram uses unequal class widths. Explain why frequency density is required.","Use cumulative frequency to estimate the proportion above a threshold."]
    },
    functions:{
      foundation:["Evaluate \\(f(4)\\) for \\(f(x)=3x-1\\).","Find \\(g(-2)\\) for \\(g(x)=x^2+2\\).","State a domain and corresponding range."],
      core:["Find the inverse of \\(f(x)=5x+2\\).","Find \\(gf(x)\\) for simple linear functions.","Evaluate \\(fg(3)\\)."],
      extension:["Show \\(f(f^{-1}(x))=x\\).","Compare \\(fg\\) and \\(gf\\).","Explain why \\(x^2\\) needs a restricted domain to have an inverse."],
      problems:["A temperature conversion formula is treated as a function. Find and interpret its inverse.","A pricing function is composed with a discount function. Explain the order.","Create two functions where \\(fg\\ne gf\\).","Give a real-life example where domain restrictions matter."]
    },
    sets:{
      foundation:["Find a union.","Find an intersection.","Find a complement in a given universal set."],
      core:["Complete a two-set Venn diagram from totals.","Find the number in neither set.","Use set notation to describe a shaded region."],
      extension:["Solve a three-set Venn problem.","Apply De Morgan's law.","Find an unknown overlap from totals."],
      problems:["A survey of three sports has overlapping memberships. Build the Venn diagram from the centre outward.","Explain why pairwise overlaps must not double-count the triple overlap.","Translate a verbal condition into set notation.","Check a De Morgan identity using a small universal set."]
    },
    proportion:{
      foundation:["Find \\(k\\) if \\(y\\propto x\\), \\(y=12,x=3\\).","Write a direct-square proportion equation.","Describe inverse proportion verbally."],
      core:["Solve a direct-square proportion problem.","Solve an inverse proportion problem.","Use square-root proportion to find an unknown."],
      extension:["Solve inverse-square proportion.","Solve cube-root proportion.","Determine the proportional model from paired data."],
      problems:["Travel time varies inversely with speed for fixed distance. Model and solve.","Intensity varies inversely with square of distance. Compare two distances.","Area varies as the square of scale factor. Explain why.","Construct a context for \\(y\\propto x^3\\)."]
    }
  };
  return packs[f] || {foundation:[],core:[],extension:[],problems:[]};
}

function extraHomework(t){
  var f=topicFamily(t);
  if(f==="surds") return [
    hw("Foundation","Simplify \\(\\sqrt{48}\\).",["\\(48=16\\times3\\).","\\(\\sqrt{48}=4\\sqrt3\\)."]),
    hw("Foundation","Simplify \\(2\\sqrt{27}\\).",["\\(\\sqrt{27}=3\\sqrt3\\).","So \\(2\\sqrt{27}=6\\sqrt3\\)."]),
    hw("Core","Simplify \\(3\\sqrt{20}+\\sqrt{45}\\).",["\\(\\sqrt{20}=2\\sqrt5\\), \\(\\sqrt{45}=3\\sqrt5\\).","\\(6\\sqrt5+3\\sqrt5=9\\sqrt5\\)."]),
    hw("Core","Rationalise \\(5/\\sqrt6\\).",["Multiply top and bottom by \\(\\sqrt6\\).","Answer \\(5\\sqrt6/6\\)."]),
    hw("Extension","Rationalise \\(3/(\\sqrt5-1)\\).",["Multiply by conjugate \\(\\sqrt5+1\\).","Denominator \\(=5-1=4\\).","Answer \\(3(\\sqrt5+1)/4\\)."]),
    hw("Extension","A square has area 200 cm². Find exact side length.",["Side \\(=\\sqrt{200}\\).","\\(200=100\\times2\\).","Side \\(=10\\sqrt2\\text{ cm}\\)."])
  ];
  if(f==="algebra") return [
    hw("Foundation","Solve \\(7x-5=30\\).",["Add 5: \\(7x=35\\).","So \\(x=5\\)."]),
    hw("Foundation","Factorise \\(x^2+9x+20\\).",["Numbers multiplying to 20 and adding to 9 are 4 and 5.","Answer \\((x+4)(x+5)\\)."]),
    hw("Core","Solve \\(3(x+2)=2x+11\\).",["Expand: \\(3x+6=2x+11\\).","So \\(x=5\\)."]),
    hw("Core","Solve \\(x^2-5x-14=0\\).",["Factor: \\((x-7)(x+2)=0\\).","So \\(x=7\\) or \\(x=-2\\)."]),
    hw("Extension","Solve \\(1/x+1/(x+2)=1\\).",["Multiply by \\(x(x+2)\\): \\(x+2+x=x(x+2)\\).","\\(x^2-2=0\\).","\\(x=\\pm\\sqrt2\\), neither excluded."]),
    hw("Extension","Rectangle sides are \\(x+3\\) and \\(x+7\\), area 60. Find x.",["\\((x+3)(x+7)=60\\).","\\(x^2+10x-39=0\\).","\\((x+13)(x-3)=0\\).","Length constraints give \\(x=3\\)."])
  ];
  if(f==="inequalities") return [
    hw("Foundation","Solve \\(x+6<14\\).",["Subtract 6: \\(x<8\\)."]),
    hw("Foundation","Solve \\(4x\\ge20\\).",["Divide by 4: \\(x\\ge5\\)."]),
    hw("Core","Solve \\(7-3x<16\\).",["Subtract 7: \\(-3x<9\\).","Divide by -3 and reverse sign: \\(x>-3\\)."]),
    hw("Core","Solve \\(-5\\le2x+1<9\\).",["Subtract 1: \\(-6\\le2x<8\\).","Divide by 2: \\(-3\\le x<4\\)."]),
    hw("Extension","Does \\((2,4)\\) satisfy \\(y>2x-1\\)?",["Substitute: \\(4>2(2)-1=3\\).","True, so the point lies in the region."]),
    hw("Extension","A venue holds at most 500 people; 438 tickets are sold. Find the maximum additional tickets.",["Let extra tickets be \\(x\\).","\\(438+x\\le500\\).","So \\(x\\le62\\).","Maximum 62 tickets."])
  ];
  if(f==="geometry") return [
    hw("Foundation","Find the third angle of a triangle with 52° and 63°.",["Triangle sum is 180°.","\\(180-52-63=65^\\circ\\)."]),
    hw("Foundation","Find the angle vertically opposite 117°.",["Vertically opposite angles are equal.","Answer \\(117^\\circ\\)."]),
    hw("Core","Find each exterior angle of a regular 18-gon.",["Exterior angles total 360°.","\\(360/18=20^\\circ\\)."]),
    hw("Core","Find each interior angle of a regular 15-gon.",["Exterior angle \\(=360/15=24^\\circ\\).","Interior angle \\(=180-24=156^\\circ\\)."]),
    hw("Extension","A regular polygon has exterior angle 12°. Find sides.",["Number of sides \\(=360/12=30\\)."]),
    hw("Extension","An isosceles triangle has vertex angle 34°. Find each base angle.",["Remaining total \\(=180-34=146^\\circ\\).","Base angles equal, so each \\(=73^\\circ\\)."])
  ];
  if(f==="mensuration") return [
    hw("Foundation","Convert 3.7 m to cm.",["Multiply by 100: \\(370\\text{ cm}\\)."]),
    hw("Foundation","Find area of triangle base 11 cm, height 8 cm.",["\\(A=\\tfrac12 bh=44\\text{ cm}^2\\)."]),
    hw("Core","Find circumference of radius 7 cm.",["\\(C=2\\pi r=14\\pi\\text{ cm}\\approx44.0\\text{ cm}\\)."]),
    hw("Core","Find sector area radius 10 cm, angle 72°.",["Fraction \\(72/360=1/5\\).","Area \\(=(1/5)(100\\pi)=20\\pi\\text{ cm}^2\\)."]),
    hw("Extension","Convert 0.85 m³ to litres.",["\\(1\\text{ m}^3=1000\\text{ L}\\).","\\(0.85\\times1000=850\\text{ L}\\)."]),
    hw("Extension","A circle has area 154 cm². Estimate radius using \\(\\pi=22/7\\).",["\\(r^2=154\\div(22/7)=49\\).","So \\(r=7\\text{ cm}\\)."])
  ];
  if(f==="statistics") return [
    hw("Foundation","Find the range of 4,9,12,17.",["Range \\(=17-4=13\\)."]),
    hw("Foundation","Find the mode of 2,3,3,3,5,6.",["3 occurs most often.","Mode \\(=3\\)."]),
    hw("Core","The mean of 8 values is 12. Find their total.",["Total \\(=8\\times12=96\\)."]),
    hw("Core","Estimate a mean for midpoints 5,15,25 with frequencies 4,6,2.",["\\(\\sum fx=20+90+50=160\\).","\\(\\sum f=12\\).","Estimated mean \\(=13.3\\) to 1 d.p."]),
    hw("Extension","Group A median 35, IQR 4; B median 33, IQR 9. Compare.",["A has higher typical values.","A is also more consistent because its IQR is smaller."]),
    hw("Extension","Explain why a sample of only top-set students cannot represent the whole year group.",["The sampling frame is biased toward one attainment group.","The sample is not representative of the whole year."])
  ];
  if(f==="charts") return [
    hw("Foundation","Frequency 16 out of 64. Find pie-chart angle.",["\\((16/64)\\times360=90^\\circ\\)."]),
    hw("Foundation","For 40 values, state median CF position.",["Median position \\(=40/2=20\\)."]),
    hw("Core","Frequency 24, class width 8. Find density.",["Density \\(=24/8=3\\)."]),
    hw("Core","Density 2.5, width 6. Find frequency.",["Frequency \\(=2.5\\times6=15\\)."]),
    hw("Extension","For 200 values, state Q1, median, Q3 CF positions.",["Q1 \\(=50\\), median \\(=100\\), Q3 \\(=150\\)."]),
    hw("Extension","Explain why extrapolation beyond a scatter plot may be unreliable.",["The observed relationship is only supported within the measured x-range.","Outside that range the pattern may change."])
  ];
  if(f==="functions") return [
    hw("Foundation","If \\(f(x)=2x+5\\), find \\(f(6)\\).",["\\(f(6)=12+5=17\\)."]),
    hw("Foundation","If \\(g(x)=x^2\\), find \\(g(-4)\\).",["\\((-4)^2=16\\)."]),
    hw("Core","Find inverse of \\(f(x)=3x+1\\).",["\\(y=3x+1\\).","Swap: \\(x=3y+1\\).","\\(f^{-1}(x)=(x-1)/3\\)."]),
    hw("Core","Given \\(f(x)=x+2,g(x)=2x\\), find \\(gf(5)\\).",["\\(f(5)=7\\).","\\(g(7)=14\\)."]),
    hw("Extension","Form \\(fg(x)\\) for \\(f(x)=x^2,g(x)=x-1\\).",["\\(fg(x)=f(x-1)=(x-1)^2\\)."]),
    hw("Extension","Why does \\(f(x)=x^2\\) not have an inverse over all real x?",["Both \\(x\\) and \\(-x\\) give the same output.","The function is not one-to-one unless its domain is restricted."])
  ];
  if(f==="sets") return [
    hw("Foundation","A={1,2,3}, B={3,4,5}. Find \\(A\\cup B\\).",["Combine all distinct elements: {1,2,3,4,5}."]),
    hw("Foundation","Find \\(A\\cap B\\) for the same sets.",["Common element is {3}."]),
    hw("Core","25 like football, 18 basketball, 7 both. Find at least one.",["\\(25+18-7=36\\)."]),
    hw("Core","Universal set 1–12, A={2,4,6,8,10,12}. Find A'.",["Elements not in A are {1,3,5,7,9,11}."]),
    hw("Extension","In 50 people, 28 are in A, 24 in B, 9 in both. Find neither.",["Union \\(=28+24-9=43\\).","Neither \\(=50-43=7\\)."]),
    hw("Extension","Write De Morgan's law for complement of a union.",["\\((A\\cup B)'=A'\\cap B'\\)."])
  ];
  if(f==="proportion") return [
    hw("Foundation","\\(y\\propto x\\), y=16 when x=4. Find equation.",["\\(y=kx\\).","\\(16=4k\\Rightarrow k=4\\).","\\(y=4x\\)."]),
    hw("Foundation","\\(y\\propto x^2\\). Write the algebraic model.",["\\(y=kx^2\\)."]),
    hw("Core","\\(y\\propto x^2\\), y=18 when x=3. Find y when x=5.",["\\(18=9k\\Rightarrow k=2\\).","\\(y=2(25)=50\\)."]),
    hw("Core","\\(t\\propto1/v\\), t=8 when v=15. Find t when v=20.",["\\(8=k/15\\Rightarrow k=120\\).","\\(t=120/20=6\\)."]),
    hw("Extension","\\(p\\propto\\sqrt q\\), p=18 when q=36. Find q when p=30.",["\\(18=6k\\Rightarrow k=3\\).","\\(30=3\\sqrt q\\Rightarrow\\sqrt q=10\\).","\\(q=100\\)."]),
    hw("Extension","\\(t\\propto1/v^2\\), t=10 when v=4. Find t when v=8.",["\\(10=k/16\\Rightarrow k=160\\).","\\(t=160/64=2.5\\)."])
  ];
  return [];
}

function diagramForExample(t,i){
  if(t==="tables"){
    return '<table class="math-table"><thead><tr><th></th><th>French</th><th>Not French</th><th>Total</th></tr></thead><tbody><tr><th>Boys</th><td>12</td><td>6</td><td>18</td></tr><tr><th>Girls</th><td>17</td><td>5</td><td>22</td></tr><tr><th>Total</th><td>29</td><td>11</td><td>40</td></tr></tbody></table>';
  }
  if(t==="grouped-mean"||t==="modalclass"){
    return '<table class="math-table"><thead><tr><th>Class</th><th>Frequency</th><th>Midpoint</th><th>f × midpoint</th></tr></thead><tbody><tr><td>0–10</td><td>3</td><td>5</td><td>15</td></tr><tr><td>10–20</td><td>7</td><td>15</td><td>105</td></tr><tr><td>20–30</td><td>5</td><td>25</td><td>125</td></tr></tbody></table>';
  }
  if(t==="charts"){
    if(i===0) return '<svg class="diagram" viewBox="0 0 520 320" aria-label="Pie chart showing a 108 degree sector"><circle cx="250" cy="160" r="120" fill="#f9fcfd" stroke="#18323d" stroke-width="3"/><path d="M250 160 L250 40 A120 120 0 0 1 364.1 122.9 Z" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><path d="M250 110 A50 50 0 0 1 297.6 144.5" fill="none" stroke="#18323d" stroke-width="2"/><text x="285" y="116" font-size="20">108°</text></svg>';
    if(i===1) return '<div class="stemleaf"><div><strong>Stem</strong><span>|</span><strong>Leaf</strong></div><div><b>1</b><span>|</span><span>2&nbsp;5&nbsp;8</span></div><div><b>2</b><span>|</span><span>1&nbsp;1&nbsp;4&nbsp;9</span></div><p>Key: 1 | 2 = 12</p></div>';
  }
  if(t==="scatter"||t==="correlation"||t==="bestfit"){
    return '<svg class="diagram" viewBox="0 0 680 360" aria-label="Scatter diagram"><line x1="70" y1="300" x2="620" y2="300" stroke="#18323d" stroke-width="3"/><line x1="70" y1="300" x2="70" y2="40" stroke="#18323d" stroke-width="3"/><text x="310" y="345" font-size="18">x variable</text><text x="16" y="40" font-size="18">y</text>'+[[130,260],[190,230],[250,215],[310,175],[370,160],[430,125],[490,110],[550,80]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]+6)+'" y2="'+(p[1]+6)+'"/><line x1="'+(p[0]+6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]-6)+'" y2="'+(p[1]+6)+'"/></g>').join("")+(i>=2?'<line x1="115" y1="265" x2="570" y2="70" stroke="#d2694c" stroke-width="3"/>':'')+'</svg>';
  }
  if(t==="cumfreq"||t==="cumfreq-read"){
    return '<svg class="diagram" viewBox="0 0 700 400" aria-label="Cumulative frequency curve"><line x1="80" y1="330" x2="650" y2="330" stroke="#18323d" stroke-width="3"/><line x1="80" y1="330" x2="80" y2="40" stroke="#18323d" stroke-width="3"/><text x="290" y="382" font-size="18">Upper class boundary</text><text x="12" y="35" font-size="18">Cumulative frequency</text><path d="M80 330 C150 318,190 300,230 278 C300 240,360 185,430 145 C500 105,560 75,630 60" fill="none" stroke="#3e93b5" stroke-width="4"/>'+[[160,312],[240,270],[330,212],[430,145],[540,90],[630,60]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]+5)+'" y2="'+(p[1]+5)+'"/><line x1="'+(p[0]+5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]-5)+'" y2="'+(p[1]+5)+'"/></g>').join("")+'</svg>';
  }
  if(t==="histogram"||t==="freqdensity"){
    return '<svg class="diagram" viewBox="0 0 700 400" aria-label="Histogram with unequal class widths"><line x1="80" y1="330" x2="650" y2="330" stroke="#18323d" stroke-width="3"/><line x1="80" y1="330" x2="80" y2="40" stroke="#18323d" stroke-width="3"/><text x="300" y="380" font-size="18">Value</text><text x="8" y="35" font-size="18">Frequency density</text><rect x="100" y="230" width="90" height="100" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="190" y="130" width="140" height="200" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="330" y="180" width="210" height="150" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="540" y="90" width="80" height="240" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/></svg>';
  }
  if(t==="averages" && i===1){
    return '<svg class="diagram" viewBox="0 0 700 220" aria-label="Number line showing quartiles"><line x1="80" y1="110" x2="620" y2="110" stroke="#18323d" stroke-width="3"/><circle cx="190" cy="110" r="7" fill="#2563eb"/><circle cx="350" cy="110" r="7" fill="#2563eb"/><circle cx="510" cy="110" r="7" fill="#2563eb"/><text x="175" y="85" font-size="18">Q1</text><text x="325" y="85" font-size="18">Median</text><text x="495" y="85" font-size="18">Q3</text></svg>';
  }
  if(["angles","parallel","polygons"].includes(t)) return diagramFor(t);
  if(["circle","sector"].includes(t)) return diagramFor(t);
  if(t==="sets") return diagramFor(t);
  if(["functions","inverse","composite"].includes(t)) return diagramFor(t);
  if(["ineq-numberline","ineq-linear"].includes(t)) return diagramFor(t);
  return "";
}

function renderModelBoard(id){
  return '<div class="model-area"><div class="model-label"><span>Model here</span><small>Write on the squared grid with mouse, finger or Apple Pencil</small></div><div class="board-tools compact" data-tools-for="'+id+'"><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button class="tool-btn eraser-btn">Eraser</button><button class="tool-btn clear-btn">Clear</button></div><div class="model-canvas-shell"><canvas class="model-board" id="'+id+'"></canvas></div></div>';
}

function initModelBoards(){
  $$(".model-board").forEach(function(canvas){
    var shell=canvas.parentElement, tools=shell.previousElementSibling, ctx=canvas.getContext("2d");
    var drawing=false,last=null,colour="#132d36",erase=false;
    function resize(){
      var dpr=window.devicePixelRatio||1, r=shell.getBoundingClientRect();
      canvas.width=Math.max(1,Math.floor(r.width*dpr));
      canvas.height=Math.max(1,Math.floor(r.height*dpr));
      canvas.style.width=r.width+"px"; canvas.style.height=r.height+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    resize();
    function p(e){var r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,pressure:e.pressure||0.5};}
    canvas.addEventListener("pointerdown",function(e){drawing=true;last=p(e);canvas.setPointerCapture(e.pointerId);});
    canvas.addEventListener("pointermove",function(e){
      if(!drawing)return; var q=p(e);
      ctx.lineCap="round";ctx.lineJoin="round";
      ctx.globalCompositeOperation=erase?"destination-out":"source-over";
      ctx.strokeStyle=colour;
      ctx.lineWidth=erase?24:Math.max(2.2,2.5+q.pressure*3.5);
      ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(q.x,q.y);ctx.stroke();last=q;
    });
    canvas.addEventListener("pointerup",function(){drawing=false;});
    canvas.addEventListener("pointercancel",function(){drawing=false;});
    tools.querySelectorAll(".colour-dot").forEach(function(b){
      b.onclick=function(){erase=false;colour=b.dataset.colour;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.toggle("active",x===b));};
    });
    tools.querySelector(".eraser-btn").onclick=function(){erase=true;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.remove("active"));};
    tools.querySelector(".clear-btn").onclick=function(){ctx.clearRect(0,0,canvas.width,canvas.height);};
  });
}

function setupExampleDeck(){
  var slides=$$(".example-slide");
  function show(n){
    exampleSlide=Math.max(0,Math.min(slides.length-1,n));
    slides.forEach((s,i)=>s.classList.toggle("active",i===exampleSlide));
    var count=$("#exampleCount"); if(count)count.textContent=(exampleSlide+1)+" / "+slides.length;
    var p=$("#examplePrev"), nx=$("#exampleNext"); if(p)p.disabled=exampleSlide===0;if(nx)nx.disabled=exampleSlide===slides.length-1;
  }
  var p=$("#examplePrev"), n=$("#exampleNext");
  if(p)p.onclick=function(){show(exampleSlide-1);};
  if(n)n.onclick=function(){show(exampleSlide+1);};
  $$(".example-dot").forEach(function(d){d.onclick=function(){show(+d.dataset.slide);};});
  show(Number.isInteger(exampleSlide)?exampleSlide:0);
}

function render(){
  var l=LESSONS[current], b=upgradedBank(l);
  if(current!==lastExampleLesson){exampleSlide=0;lastExampleLesson=current;}
  $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
  $("#lessonTitle").textContent=l.id+"  "+l.title;
  $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • lesson-by-lesson teaching sequence";
  $("#prevBtn").disabled=current===0; $("#nextBtn").disabled=current===LESSONS.length-1;
  $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
  renderNav($("#search").value);

  if(tab==="learn"){
    $("#content").innerHTML=
      '<section class="teaching-slide intro-teaching-slide"><div class="slide-kicker">START HERE</div><div class="learn-grid">'+
      '<article class="card flat"><h3>Prior knowledge check</h3><p class="lead">Students should be ready to recall:</p><ul class="clean-list">'+l.prior.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '<article class="card flat"><h3>Learning points</h3><p class="lead">By the end of the lesson, students should be able to:</p><ul class="clean-list">'+l.obj.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '</div><div class="source-strip"><strong>Textbook calibration:</strong> '+l.src+'. Questions are original but matched to the SoW/textbook progression.</div></section>';
  }

  if(tab==="examples"){
    $("#content").innerHTML=
      '<div class="deck-toolbar"><div><strong>Teacher examples</strong><span id="exampleCount"></span></div><div class="deck-buttons"><button id="examplePrev" class="ghost-btn">← Previous example</button><button id="exampleNext" class="primary-btn">Next example →</button></div></div>'+
      '<div class="example-deck">'+b.examples.map(function(e,i){
        var diag=diagramForExample(l.type,i);
        return '<section class="example-slide teaching-slide" data-slide="'+i+'"><div class="slide-kicker">EXAMPLE '+(i+1)+' OF '+b.examples.length+'</div><div class="example-question">'+e.q+'</div>'+
          (diag?'<div class="example-diagram">'+diag+'</div>':'')+
          renderModelBoard('model-board-'+current+'-'+i)+
          '<details class="worked-solution"><summary>Show model solution</summary><div class="solution-paper"><div class="solution-title">Worked solution</div><div class="steps">'+e.steps.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details>'+
          '</section>';
      }).join("")+'</div>'+
      '<div class="example-dots">'+b.examples.map((_,i)=>'<button class="example-dot" data-slide="'+i+'" aria-label="Go to example '+(i+1)+'">'+(i+1)+'</button>').join("")+'</div>';
  }

  if(tab==="practice"){
    var ep=extraPractice(l.type);
    var merged={};
    ["foundation","core","extension"].forEach(function(k){merged[k]=(b.practice[k]||[]).concat(ep[k]||[]);});
    $("#content").innerHTML='<article class="card practice-sheet"><div class="sheet-head"><div><div class="slide-kicker">INDEPENDENT PRACTICE</div><h3>Progressive practice</h3></div><span class="question-count">'+(merged.foundation.length+merged.core.length+merged.extension.length+ep.problems.length)+' questions</span></div>'+
      '<div class="tiers">'+[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(function(pair){var name=pair[0],k=pair[1];return '<section class="tier '+k+'"><h4>'+name+'</h4><ol class="q-list">'+merged[k].map(q=>'<li>'+q+'</li>').join("")+'</ol></section>';}).join("")+'</div>'+
      '<section class="problem-solving"><div class="slide-kicker">REASONING & PROBLEM SOLVING</div><h4>Exam-style thinking</h4><ol class="q-list">'+ep.problems.map(q=>'<li>'+q+'</li>').join("")+'</ol></section></article>';
  }

  if(tab==="homework"){
    var allHw=(b.homework||[]).concat(extraHomework(l.type));
    $("#content").innerHTML='<article class="card homework-sheet"><div class="sheet-head"><div><div class="slide-kicker">HOMEWORK</div><h3>Mixed retrieval, fluency and problem solving</h3></div><span class="question-count">'+allHw.length+' questions</span></div><p class="lead">Attempt every question before opening its worked solution.</p>'+
      allHw.map(function(h,i){return '<div class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="pill">'+h.tier+'</span><span>'+h.q+'</span></div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">'+h.sol.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details></div>';}).join("")+'</article>';
  }

  if(tab==="whiteboard"){
    $("#content").innerHTML='<article class="card board-card"><div class="board-tools"><strong>Whole-class whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
  }

  if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([$("#content")]);
  if(tab==="examples"){initModelBoards();setupExampleDeck();}
  if(tab==="whiteboard") initBoard();
  location.hash=l.id+"-"+tab;
}


/* v2.1 canvas lifecycle: initialise boards only when their slide is visible */
function initModelBoards(){
  $$(".model-board").forEach(function(canvas){
    var shell=canvas.parentElement;
    var rect=shell.getBoundingClientRect();
    if(rect.width<20 || rect.height<20) return;
    var dpr=window.devicePixelRatio||1;
    function sizeCanvas(){
      var r=shell.getBoundingClientRect();
      if(r.width<20||r.height<20)return;
      var targetW=Math.max(1,Math.floor(r.width*dpr));
      var targetH=Math.max(1,Math.floor(r.height*dpr));
      canvas.style.width=r.width+"px";canvas.style.height=r.height+"px";
      if(canvas.width===targetW && canvas.height===targetH) return;
      canvas.width=targetW;
      canvas.height=targetH;
      var cx=canvas.getContext("2d");cx.setTransform(dpr,0,0,dpr,0,0);
    }
    if(canvas.dataset.bound==="1"){sizeCanvas();return;}
    canvas.dataset.bound="1";sizeCanvas();
    var tools=shell.previousElementSibling,ctx=canvas.getContext("2d");
    var drawing=false,last=null,colour="#132d36",erase=false;
    function p(e){var r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,pressure:e.pressure||0.5};}
    canvas.addEventListener("pointerdown",function(e){drawing=true;last=p(e);canvas.setPointerCapture(e.pointerId);});
    canvas.addEventListener("pointermove",function(e){
      if(!drawing)return;var q=p(e);
      ctx.lineCap="round";ctx.lineJoin="round";
      ctx.globalCompositeOperation=erase?"destination-out":"source-over";
      ctx.strokeStyle=colour;ctx.lineWidth=erase?24:Math.max(2.2,2.5+q.pressure*3.5);
      ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(q.x,q.y);ctx.stroke();last=q;
    });
    canvas.addEventListener("pointerup",function(){drawing=false;});
    canvas.addEventListener("pointercancel",function(){drawing=false;});
    tools.querySelectorAll(".colour-dot").forEach(function(b){
      b.onclick=function(){erase=false;colour=b.dataset.colour;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.toggle("active",x===b));};
    });
    tools.querySelector(".eraser-btn").onclick=function(){erase=true;tools.querySelectorAll(".colour-dot").forEach(x=>x.classList.remove("active"));};
    tools.querySelector(".clear-btn").onclick=function(){ctx.clearRect(0,0,canvas.width,canvas.height);};
  });
}
function setupExampleDeck(){
  var slides=$$(".example-slide");
  function show(n){
    exampleSlide=Math.max(0,Math.min(slides.length-1,n));
    slides.forEach((s,i)=>s.classList.toggle("active",i===exampleSlide));
    $$(".example-dot").forEach((d,i)=>d.classList.toggle("active",i===exampleSlide));
    var count=$("#exampleCount");if(count)count.textContent=(exampleSlide+1)+" / "+slides.length;
    var p=$("#examplePrev"),nx=$("#exampleNext");if(p)p.disabled=exampleSlide===0;if(nx)nx.disabled=exampleSlide===slides.length-1;
    requestAnimationFrame(initModelBoards);
  }
  var p=$("#examplePrev"),n=$("#exampleNext");
  if(p)p.onclick=function(){show(exampleSlide-1);};
  if(n)n.onclick=function(){show(exampleSlide+1);};
  $$(".example-dot").forEach(function(d){d.onclick=function(){show(+d.dataset.slide);};});
  show(Number.isInteger(exampleSlide)?exampleSlide:0);
}


/* ===== Teaching Hub v3: textbook-pattern lesson banks ===== */
function textbookLens(l,i){
  var map={
    "12.1":["simplify surds","write a surd as one square root","spot and correct an error","exact-value geometry"],
    "12.2":["single-surd denominator","simplify then rationalise","conjugate denominator","multi-step exact expression"],
    "13.1":["HCF cancellation","indices in algebraic fractions","factorise then cancel","reason about excluded values"],
    "13.2":["multiply/divide algebraic fractions","common denominator","factor denominators first","simplify a complex result"],
    "16.1":["angles on a line","angles around a point","vertically opposite angles","multi-step angle reasoning"],
    "16.2":["corresponding angles","alternate angles","co-interior angles","parallel-line algebra"],
    "16.3":["interior-angle sum","regular-polygon exterior angle","reverse polygon problem","mixed polygon reasoning"],
    "17.2":["perimeter from a diagram","area of a trapezium/parallelogram","compound area","reverse mensuration problem"],
    "17.4":["minor sector","major sector","sector perimeter","reverse arc/sector problem"],
    "19.1":["frequency table to bar chart","pie chart","stem-and-leaf","compare representations"],
    "19.2":["identify correlation","plot bivariate data","line of best fit","interpolation vs extrapolation"],
    "19.5":["cumulative totals","plot upper class boundaries","read median/quartiles","percentile problem"],
    "19.7":["frequency density","complete a histogram","recover missing frequency","interpret unequal-width classes"],
    "20.3":["form fg and gf","evaluate a composite","repeat a function","domain/restriction reasoning"]
  };
  var a=map[l.id]||[];
  return a[i]||"textbook-style progression";
}

function deepTextbookBank(l){
  if(l.id==="12.1") return {
    examples:[
      ex("Simplify \\\\(\\\\sqrt{108}\\\\).",[
        "Look for the largest square factor: \\\\(108=36\\\\times3\\\\).",
        "\\\\(\\\\sqrt{108}=\\\\sqrt{36}\\\\sqrt3\\\\).",
        "Therefore \\\\(\\\\sqrt{108}=6\\\\sqrt3\\\\)."
      ]),
      ex("Write \\\\(5\\\\sqrt6\\\\) in the form \\\\(\\\\sqrt n\\\\).",[
        "Write 5 as \\\\(\\\\sqrt{25}\\\\).",
        "\\\\(5\\\\sqrt6=\\\\sqrt{25}\\\\sqrt6\\\\).",
        "\\\\(=\\\\sqrt{150}\\\\), so \\\\(n=150\\\\)."
      ]),
      ex("A student writes \\\\(\\\\sqrt8+\\\\sqrt{18}=\\\\sqrt{26}\\\\). Explain the error and find the correct answer.",[
        "Square roots do not distribute over addition.",
        "Simplify each surd separately: \\\\(\\\\sqrt8=2\\\\sqrt2\\\\), \\\\(\\\\sqrt{18}=3\\\\sqrt2\\\\).",
        "Collect like surds: \\\\(2\\\\sqrt2+3\\\\sqrt2=5\\\\sqrt2\\\\)."
      ]),
      ex("A rectangle has side lengths \\\\(3+\\\\sqrt{12}\\\\) cm and \\\\(2\\\\sqrt3\\\\) cm. Find its exact perimeter in simplest form.",[
        "Simplify first: \\\\(\\\\sqrt{12}=2\\\\sqrt3\\\\), so the first side is \\\\(3+2\\\\sqrt3\\\\).",
        "Perimeter \\\\(=2[(3+2\\\\sqrt3)+2\\\\sqrt3]\\\\).",
        "\\\\(=2(3+4\\\\sqrt3)=6+8\\\\sqrt3\\\\text{ cm}\\\\)."
      ])
    ],
    practice:{
      foundation:[
        "Simplify \\\\(\\\\sqrt{28}\\\\).",
        "Simplify \\\\(\\\\sqrt{72}\\\\).",
        "Simplify \\\\(3\\\\sqrt{50}\\\\).",
        "Simplify \\\\(\\\\sqrt{12}+\\\\sqrt{27}\\\\).",
        "Simplify \\\\(5\\\\sqrt8-\\\\sqrt{32}\\\\).",
        "Write \\\\(3\\\\sqrt5\\\\) in the form \\\\(\\\\sqrt n\\\\)."
      ],
      core:[
        "Write \\\\(4\\\\sqrt7\\\\) in the form \\\\(\\\\sqrt n\\\\).",
        "Arrange \\\\(2\\\\sqrt5,3\\\\sqrt2,\\\\sqrt{19}\\\\) in ascending order without a calculator.",
        "Simplify \\\\(2\\\\sqrt3+3\\\\sqrt{12}-\\\\sqrt{75}\\\\).",
        "Expand and simplify \\\\(\\\\sqrt3(4+\\\\sqrt{12})\\\\).",
        "Expand and simplify \\\\((2+\\\\sqrt5)(3-\\\\sqrt5)\\\\).",
        "Give a counterexample to show \\\\(\\\\sqrt a+\\\\sqrt b=\\\\sqrt{a+b}\\\\) is not generally true."
      ],
      extension:[
        "A rectangle has sides \\\\(2+\\\\sqrt{10}\\\\) cm and \\\\(\\\\sqrt5\\\\) cm. Find its exact perimeter.",
        "Show that \\\\(\\\\sqrt{48}-\\\\sqrt{27}=\\\\sqrt3\\\\).",
        "Find \\\\(x\\\\) if \\\\(x\\\\sqrt7=\\\\sqrt{343}\\\\).",
        "A right triangle has legs \\\\(4\\\\sqrt7\\\\) and \\\\(x\\\\), and hypotenuse \\\\(2\\\\sqrt{35}\\\\). Find \\\\(x\\\\) exactly.",
        "A student claims \\\\(\\\\sqrt{50}-\\\\sqrt8=\\\\sqrt{42}\\\\). Diagnose and correct the method.",
        "Prove that the product of \\\\(\\\\sqrt{12}\\\\) and \\\\(\\\\sqrt{27}\\\\) is rational."
      ]
    },
    homework:[
      hw("Foundation","Simplify \\\\(\\\\sqrt{75}\\\\).",["\\\\(75=25\\\\times3\\\\).","\\\\(\\\\sqrt{75}=5\\\\sqrt3\\\\)."]),
      hw("Foundation","Write \\\\(2\\\\sqrt{11}\\\\) as \\\\(\\\\sqrt n\\\\).",["\\\\(2=\\\\sqrt4\\\\).","\\\\(2\\\\sqrt{11}=\\\\sqrt{44}\\\\), so \\\\(n=44\\\\)."]),
      hw("Core","Simplify \\\\(4\\\\sqrt{18}-3\\\\sqrt8\\\\).",["\\\\(\\\\sqrt{18}=3\\\\sqrt2\\\\), \\\\(\\\\sqrt8=2\\\\sqrt2\\\\).","\\\\(12\\\\sqrt2-6\\\\sqrt2=6\\\\sqrt2\\\\)."]),
      hw("Core","Expand and simplify \\\\((3+\\\\sqrt2)(2-\\\\sqrt2)\\\\).",["Expand: \\\\(6-3\\\\sqrt2+2\\\\sqrt2-2\\\\).","Collect terms: \\\\(4-\\\\sqrt2\\\\)."]),
      hw("Extension","Show that \\\\(3\\\\sqrt8+2\\\\sqrt{18}=12\\\\sqrt2\\\\).",["\\\\(3\\\\sqrt8=6\\\\sqrt2\\\\).","\\\\(2\\\\sqrt{18}=6\\\\sqrt2\\\\).","Total \\\\(=12\\\\sqrt2\\\\)."]),
      hw("Extension","A square has exact perimeter \\\\(20\\\\sqrt3\\\\) cm. Find its exact area.",["Side \\\\(=5\\\\sqrt3\\\\) cm.","Area \\\\(=(5\\\\sqrt3)^2=75\\\\text{ cm}^2\\\\)."])
    ]
  };

  if(l.id==="12.2") return {
    examples:[
      ex("Rationalise \\\\(\\\\dfrac{7}{\\\\sqrt5}\\\\).",[
        "Multiply numerator and denominator by \\\\(\\\\sqrt5\\\\).",
        "\\\\(\\\\dfrac{7}{\\\\sqrt5}\\\\times\\\\dfrac{\\\\sqrt5}{\\\\sqrt5}=\\\\dfrac{7\\\\sqrt5}{5}\\\\)."
      ]),
      ex("Rationalise \\\\(\\\\dfrac{\\\\sqrt{18}}{\\\\sqrt8}\\\\).",[
        "Simplify first: \\\\(\\\\sqrt{18}=3\\\\sqrt2\\\\), \\\\(\\\\sqrt8=2\\\\sqrt2\\\\).",
        "\\\\(\\\\dfrac{3\\\\sqrt2}{2\\\\sqrt2}=\\\\dfrac32\\\\).",
        "The denominator is already rational after cancellation."
      ]),
      ex("Rationalise \\\\(\\\\dfrac{4}{3-\\\\sqrt5}\\\\).",[
        "Use the conjugate \\\\(3+\\\\sqrt5\\\\).",
        "Denominator: \\\\((3-\\\\sqrt5)(3+\\\\sqrt5)=9-5=4\\\\).",
        "Numerator: \\\\(4(3+\\\\sqrt5)\\\\).",
        "Cancel 4 to obtain \\\\(3+\\\\sqrt5\\\\)."
      ]),
      ex("Write \\\\(\\\\dfrac{2+\\\\sqrt3}{2-\\\\sqrt3}\\\\) in the form \\\\(a+b\\\\sqrt3\\\\).",[
        "Multiply by the conjugate \\\\((2+\\\\sqrt3)/(2+\\\\sqrt3)\\\\).",
        "Denominator \\\\(=4-3=1\\\\).",
        "Numerator \\\\((2+\\\\sqrt3)^2=4+4\\\\sqrt3+3\\\\).",
        "Answer \\\\(7+4\\\\sqrt3\\\\)."
      ])
    ],
    practice:{
      foundation:["Rationalise \\\\(3/\\\\sqrt2\\\\).","Rationalise \\\\(5/\\\\sqrt7\\\\).","Rationalise \\\\(2\\\\sqrt3/\\\\sqrt5\\\\).","Simplify \\\\(\\\\sqrt{45}/\\\\sqrt5\\\\).","Simplify \\\\(\\\\sqrt{72}/\\\\sqrt8\\\\).","Rationalise \\\\(1/(2+\\\\sqrt3)\\\\)."],
      core:["Rationalise \\\\(6/(3+\\\\sqrt2)\\\\).","Rationalise \\\\(5/(\\\\sqrt7-1)\\\\).","Rationalise \\\\(3/(2-\\\\sqrt5)\\\\).","Simplify \\\\((2\\\\sqrt2+\\\\sqrt6)/\\\\sqrt2\\\\).","Rationalise and simplify \\\\(\\\\sqrt3/(4-\\\\sqrt3)\\\\).","Write \\\\((3+\\\\sqrt2)/(3-\\\\sqrt2)\\\\) in the form \\\\(a+b\\\\sqrt2\\\\)."],
      extension:["Rationalise \\\\(2/(\\\\sqrt7-\\\\sqrt5)\\\\).","Simplify fully \\\\((\\\\sqrt{18}-\\\\sqrt8)/(2+\\\\sqrt2)\\\\).","Show that \\\\(1/(\\\\sqrt5-2)=\\\\sqrt5+2\\\\).","Rationalise \\\\((2\\\\sqrt3+1)/(\\\\sqrt3-1)\\\\).","Find exact value of \\\\(1/(2+\\\\sqrt3)+1/(2-\\\\sqrt3)\\\\).","Explain why the conjugate removes the surd from a binomial denominator."]
    },
    homework:[
      hw("Foundation","Rationalise \\\\(4/\\\\sqrt3\\\\).",["Multiply by \\\\(\\\\sqrt3/\\\\sqrt3\\\\).","Answer \\\\(4\\\\sqrt3/3\\\\)."]),
      hw("Foundation","Simplify \\\\(\\\\sqrt{50}/\\\\sqrt2\\\\).",["\\\\(\\\\sqrt{50/2}=\\\\sqrt{25}=5\\\\)."]),
      hw("Core","Rationalise \\\\(3/(2+\\\\sqrt3)\\\\).",["Use conjugate \\\\(2-\\\\sqrt3\\\\).","Denominator \\\\(=1\\\\).","Answer \\\\(6-3\\\\sqrt3\\\\)."]),
      hw("Core","Rationalise \\\\(5/(4-\\\\sqrt7)\\\\).",["Use \\\\(4+\\\\sqrt7\\\\).","Denominator \\\\(=16-7=9\\\\).","Answer \\\\(5(4+\\\\sqrt7)/9\\\\)."]),
      hw("Extension","Simplify \\\\((1+\\\\sqrt2)/(1-\\\\sqrt2)\\\\).",["Multiply by \\\\(1+\\\\sqrt2\\\\).","Denominator \\\\(=1-2=-1\\\\).","Numerator \\\\(=3+2\\\\sqrt2\\\\).","Answer \\\\(-3-2\\\\sqrt2\\\\)."]),
      hw("Extension","Evaluate exactly \\\\(1/(\\\\sqrt3-1)-1/(\\\\sqrt3+1)\\\\).",["Rationalise each term or combine first.","The difference simplifies to \\\\(1\\\\)."])
    ]
  };

  if(l.id==="13.1") return {
    examples:[
      ex("Simplify \\\\(\\\\dfrac{18x^3}{24x^5}\\\\).",[
        "HCF of 18 and 24 is 6, so \\\\(18/24=3/4\\\\).",
        "\\\\(x^3/x^5=1/x^2\\\\).",
        "Answer \\\\(\\\\dfrac{3}{4x^2}\\\\), with \\\\(x\\\\ne0\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{x^2-5x+6}{x^2-x-6}\\\\).",[
        "Factor numerator: \\\\((x-2)(x-3)\\\\).",
        "Factor denominator: \\\\((x-3)(x+2)\\\\).",
        "Cancel the common factor \\\\((x-3)\\\\).",
        "Answer \\\\(\\\\dfrac{x-2}{x+2}\\\\), with original restrictions \\\\(x\\\\ne3,-2\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{4x^2-16}{2x^2+10x+12}\\\\).",[
        "Factor numerator: \\\\(4(x-2)(x+2)\\\\).",
        "Factor denominator: \\\\(2(x+2)(x+3)\\\\).",
        "Cancel \\\\(2(x+2)\\\\).",
        "Answer \\\\(\\\\dfrac{2(x-2)}{x+3}\\\\)."
      ]),
      ex("A student cancels the x in \\\\(\\\\dfrac{x+5}{x}\\\\) and writes 5. Explain why this is invalid.",[
        "Cancellation works only with common factors, not individual terms joined by addition.",
        "The numerator \\\\(x+5\\\\) is not a product containing x as a factor.",
        "The fraction may be rewritten as \\\\(1+5/x\\\\), not 5."
      ])
    ],
    practice:{
      foundation:["Simplify \\\\(12x/18\\\\).","Simplify \\\\(15a^2/(5a)\\\\).","Simplify \\\\(18p^3/(24p^5)\\\\).","Simplify \\\\((x^2-9)/(x-3)\\\\).","Simplify \\\\((x^2+6x)/(x)\\\\).","State the excluded value for \\\\((x+1)/(x-4)\\\\)."],
      core:["Simplify \\\\((x^2-16)/(x^2+x-20)\\\\).","Simplify \\\\((2x^2-8)/(x^2+5x+6)\\\\).","Simplify \\\\((3x^2+12x)/(x^2+6x+8)\\\\).","Simplify \\\\((x^2-2x-15)/(x^2-25)\\\\).","State all excluded values before simplifying \\\\((x^2-1)/(x^2-3x+2)\\\\).","Explain why \\\\((2x+6)/(2x)\\\\) cannot simplify to 3."],
      extension:["Simplify \\\\((2x^2-18)/(x^2+x-12)\\\\).","Simplify \\\\((x^3-4x)/(x^2-x-6)\\\\).","Simplify and state restrictions: \\\\((x^2-4x+4)/(x^2-4)\\\\).","Find x if \\\\((x^2-9)/(x-3)=10\\\\), respecting restrictions.","Create a rational expression that simplifies to \\\\((x-1)/(x+4)\\\\) but has two excluded values.","Explain why cancelled factors still create excluded values in the original expression."]
    },
    homework:[
      hw("Foundation","Simplify \\\\(20x^2/(30x)\\\\).",["\\\\(20/30=2/3\\\\) and \\\\(x^2/x=x\\\\).","Answer \\\\(2x/3\\\\)."]),
      hw("Foundation","Simplify \\\\((x^2-25)/(x-5)\\\\).",["Factor \\\\(x^2-25=(x-5)(x+5)\\\\).","Cancel to get \\\\(x+5\\\\), with \\\\(x\\\\ne5\\\\)."]),
      hw("Core","Simplify \\\\((x^2+7x+12)/(x^2+5x+4)\\\\).",["Factor to \\\\((x+3)(x+4)/(x+1)(x+4)\\\\).","Cancel \\\\(x+4\\\\).","Answer \\\\((x+3)/(x+1)\\\\)."]),
      hw("Core","Simplify \\\\((2x^2-8x)/(x^2-16)\\\\).",["Factor top \\\\(2x(x-4)\\\\), bottom \\\\((x-4)(x+4)\\\\).","Answer \\\\(2x/(x+4)\\\\)."]),
      hw("Extension","Simplify and state restrictions: \\\\((x^2-6x+9)/(x^2-9)\\\\).",["Factor \\\\((x-3)^2/[(x-3)(x+3)]\\\\).","Answer \\\\((x-3)/(x+3)\\\\).","Restrictions \\\\(x\\\\ne3,-3\\\\)."]),
      hw("Extension","Explain why \\\\((x+2)/(x)\\\\ne2\\\\) in general.",["The numerator is a sum, not a product with x as a common factor.","For example x=2 gives 2, but x=1 gives 3."])
    ]
  };

  if(l.id==="13.2") return {
    examples:[
      ex("Simplify \\\\(\\\\dfrac{3x}{4}\\\\times\\\\dfrac{8}{9x}\\\\).",[
        "Multiply numerators and denominators.",
        "Cancel common factors: \\\\(8/4=2\\\\), \\\\(3/9=1/3\\\\), x cancels.",
        "Answer \\\\(2/3\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{5a}{6}\\\\div\\\\dfrac{10a^2}{9}\\\\).",[
        "Multiply by the reciprocal: \\\\(\\\\dfrac{5a}{6}\\\\times\\\\dfrac{9}{10a^2}\\\\).",
        "Cancel common factors.",
        "Answer \\\\(\\\\dfrac{3}{4a}\\\\)."
      ]),
      ex("Write \\\\(\\\\dfrac{2}{x} + \\\\dfrac{3}{x+1}\\\\) as a single fraction.",[
        "LCD is \\\\(x(x+1)\\\\).",
        "\\\\(\\\\dfrac{2(x+1)+3x}{x(x+1)}\\\\).",
        "Numerator simplifies to \\\\(5x+2\\\\).",
        "Answer \\\\(\\\\dfrac{5x+2}{x(x+1)}\\\\)."
      ]),
      ex("Simplify \\\\(\\\\dfrac{3x+4}{x^2+x-6}-\\\\dfrac1{x+3}\\\\).",[
        "Factor \\\\(x^2+x-6=(x+3)(x-2)\\\\).",
        "LCD is \\\\((x+3)(x-2)\\\\).",
        "Numerator becomes \\\\(3x+4-(x-2)=2x+6=2(x+3)\\\\).",
        "Cancel \\\\(x+3\\\\) to get \\\\(\\\\dfrac2{x-2}\\\\)."
      ])
    ],
    practice:{
      foundation:["\\\\((2x/3)\\\\times(9/(4x)))\\\\)","\\\\((5a/8)\\\\div(15a/16)\\\\)","\\\\(2/x+5/x\\\\)","\\\\(7/y-3/y\\\\)","\\\\(1/x+1/2\\\\)","\\\\(3/(x+1)+2/(x+1)\\\\)"],
      core:["\\\\(1/x+2/(x+3)\\\\)","\\\\(4/(x-2)-1/(x+1)\\\\)","\\\\((x+2)/3)\\\\times(6/(x^2-4))\\\\)","\\\\((x^2-9)/(2x))\\\\div((x+3)/4)\\\\)","\\\\(2/(x+1)+3/(x-1)\\\\)","\\\\((3x+1)/(x^2-4))-1/(x-2)\\\\)"],
      extension:["Simplify \\\\(1/(x-1)-1/(x+1)\\\\).","Simplify \\\\((x/(x-2))\\\\div(2x/(x+5))\\\\).","Simplify fully \\\\((x+1)/(x-1)+(x-1)/(x+1)\\\\).","Find x if \\\\(1/x+1/(x+2)=3/4\\\\).","Show that \\\\((3x+4)/(x^2+x-6)-1/(x+3)=2/(x-2)\\\\).","Explain why factorising denominators first can reduce algebraic work."]
    },
    homework:[
      hw("Foundation","Simplify \\\\(3/x+4/x\\\\).",["Same denominator, so add numerators.","Answer \\\\(7/x\\\\)."]),
      hw("Foundation","Simplify \\\\((4x/5)\\\\times(15/(8x))\\\\).",["Cancel x, reduce 15/5 and 4/8.","Answer \\\\(3/2\\\\)."]),
      hw("Core","Simplify \\\\(1/x+2/(x+2)\\\\).",["LCD \\\\(x(x+2)\\\\).","Numerator \\\\(x+2+2x=3x+2\\\\).","Answer \\\\((3x+2)/(x(x+2))\\\\)."]),
      hw("Core","Simplify \\\\(3/(x-1)-1/(x+1)\\\\).",["LCD \\\\((x-1)(x+1)\\\\).","Numerator \\\\(3(x+1)-(x-1)=2x+4\\\\).","Answer \\\\(2(x+2)/(x^2-1)\\\\)."]),
      hw("Extension","Simplify \\\\((x^2-4)/(3x)\\\\div((x+2)/(6x))\\\\).",["Multiply by reciprocal.","\\\\((x-2)(x+2)/(3x))\\\\times(6x/(x+2))\\\\).","Answer \\\\(2(x-2)\\\\)."]),
      hw("Extension","Write \\\\(2/(x+3)+1/(x-3)\\\\) as one fraction.",["LCD \\\\((x+3)(x-3)\\\\).","Numerator \\\\(2(x-3)+(x+3)=3x-3\\\\).","Answer \\\\(3(x-1)/(x^2-9)\\\\)."])
    ]
  };

  if(l.id==="16.1") return {
    examples:[
      ex("In the diagram, \\\\(112^\\\\circ\\\\) and \\\\(x\\\\) lie on a straight line. Find x and give a reason.",[
        "Angles on a straight line sum to \\\\(180^\\\\circ\\\\).",
        "\\\\(112+x=180\\\\).",
        "\\\\(x=68^\\\\circ\\\\)."
      ]),
      ex("Angles around a point are \\\\(82^\\\\circ,82^\\\\circ,x,y,z\\\\). Two adjacent right angles are shown. Find the unknown angles.",[
        "Use right-angle information first where marked.",
        "Use vertically opposite angles where appropriate.",
        "Finally use angles around a point sum to \\\\(360^\\\\circ\\\\)."
      ]),
      ex("Two lines cross. One angle is \\\\(115^\\\\circ\\\\). Find the vertically opposite angle and each adjacent angle.",[
        "Vertically opposite angle \\\\(=115^\\\\circ\\\\).",
        "Adjacent angles are supplementary.",
        "\\\\(180-115=65^\\\\circ\\\\)."
      ]),
      ex("Around a point, the angles are \\\\(x,2x,4x,150^\\\\circ\\\\). Find x.",[
        "Angles around a point sum to \\\\(360^\\\\circ\\\\).",
        "\\\\(x+2x+4x+150=360\\\\).",
        "\\\\(7x=210\\\\).",
        "\\\\(x=30^\\\\circ\\\\)."
      ])
    ],
    practice:{
      foundation:["Find x if \\\\(x+73=180\\\\).","Find the vertically opposite angle to \\\\(128^\\\\circ\\\\).","Three angles around a point are 90°, 110° and x. Find x.","A triangle has angles 48°, 67° and x. Find x.","A quadrilateral has angles 90°, 85°, 112° and x. Find x.","State the reason used in each answer."],
      core:["At a point, angles are x, x, 70°, 110°. Find x.","Two intersecting lines form angles \\\\(3x+5\\\\) and \\\\(5x-35\\\\) vertically opposite. Find x.","A straight line is split into \\\\(2x+10\\\\) and \\\\(5x-5\\\\). Find x.","A triangle has angles \\\\(x,2x,3x\\\\). Find all angles.","A quadrilateral has angles \\\\(x, x+20, 2x, 100\\\\). Find x.","Write a full reason beside every step."],
      extension:["A diagram contains a right angle split into \\\\(x\\\\) and \\\\(2x+9\\\\). Find x.","At an intersection one angle is \\\\(4x-7\\\\), adjacent angle \\\\(2x+31\\\\). Find x.","Construct your own angle problem with answer 36°.","Explain why vertically opposite angles are equal using straight-line sums.","A compound angle diagram requires three reasons. Write the solution in proof style.","Find all unknowns in a diagram combining a triangle and an intersecting line."]
    },
    homework:[
      hw("Foundation","Find x if \\\\(x+124=180\\\\).",["Straight line: \\\\(x=56^\\\\circ\\\\)."]),
      hw("Foundation","Find the angle vertically opposite \\\\(74^\\\\circ\\\\).",["Vertically opposite angles are equal.","Answer \\\\(74^\\\\circ\\\\)."]),
      hw("Core","Angles around a point are 95°, 80°, 75° and x. Find x.",["Total 360°.","\\\\(x=360-250=110^\\\\circ\\\\)."]),
      hw("Core","A triangle has angles \\\\(x,2x,75^\\\\circ\\\\). Find x.",["\\\\(3x+75=180\\\\).","\\\\(x=35^\\\\circ\\\\)."]),
      hw("Extension","Vertically opposite angles are \\\\(5x-8\\\\) and \\\\(3x+28\\\\). Find x.",["Set equal: \\\\(5x-8=3x+28\\\\).","\\\\(2x=36\\\\).","\\\\(x=18\\\\)."]),
      hw("Extension","A quadrilateral has angles \\\\(x,2x,3x,60^\\\\circ\\\\). Find x.",["Quadrilateral sum 360°.","\\\\(6x+60=360\\\\).","\\\\(x=50^\\\\circ\\\\)."])
    ]
  };

  if(l.id==="17.2") return {
    examples:[
      ex("A trapezium has parallel sides 7 cm and 10 cm, and the other sides are 4 cm each. Find its perimeter.",[
        "Perimeter is the sum of all outside edges.",
        "\\\\(P=7+10+4+4=25\\\\text{ cm}\\\\)."
      ]),
      ex("Find the area of a parallelogram with base 8 m and perpendicular height 3.5 m.",[
        "Use \\\\(A=bh\\\\).",
        "\\\\(A=8\\\\times3.5=28\\\\text{ m}^2\\\\)."
      ]),
      ex("A house-shaped compound figure is a rectangle 5 m by 8 m topped by a triangle of base 5 m and height 4 m. Find its total area.",[
        "Rectangle area \\\\(=5\\\\times8=40\\\\).",
        "Triangle area \\\\(=\\\\tfrac12\\\\times5\\\\times4=10\\\\).",
        "Total area \\\\(=50\\\\text{ m}^2\\\\)."
      ]),
      ex("A trapezium has area 63 cm², height 6 cm and one parallel side 8 cm. Find the other parallel side.",[
        "\\\\(63=\\\\tfrac12(8+x)6\\\\).",
        "\\\\(63=3(8+x)\\\\).",
        "\\\\(21=8+x\\\\), so \\\\(x=13\\\\text{ cm}\\\\)."
      ])
    ],
    practice:{
      foundation:["Find perimeter of a rectangle 8 cm by 5 cm.","Find area of triangle base 12 cm, height 7 cm.","Find area of parallelogram base 9 cm, height 4 cm.","Find area of trapezium with parallel sides 6 cm and 10 cm, height 5 cm.","Find perimeter of a trapezium with sides 7,4,10,4 cm.","State correct units for each answer."],
      core:["A compound L-shape can be split into two rectangles. Find its area from given dimensions.","A triangle has area 45 cm² and base 10 cm. Find height.","A parallelogram has area 72 cm² and height 8 cm. Find base.","A trapezium has area 54 cm², height 6 cm and one parallel side 7 cm. Find the other.","A rectangular frame has outside dimensions 12 by 9 and border width 1. Find frame area.","Compare areas of two quadrilaterals with same perimeter."],
      extension:["A compound shape combines a trapezium and a triangle. Form an expression for its area.","A stained-glass triangle has base 45 cm and area 0.54 m². Find height in cm.","Find the missing dimension in a compound area problem.","Two shapes have equal area but different perimeters. Construct an example.","A trapezium and parallelogram have equal area. Find an unknown height.","Explain why sloping side length is irrelevant to parallelogram area."]
    },
    homework:[
      hw("Foundation","Find area of a triangle with base 15 cm and height 8 cm.",["\\\\(A=\\\\tfrac12\\\\times15\\\\times8=60\\\\text{ cm}^2\\\\)."]),
      hw("Foundation","Find perimeter of sides 4,6,7,9 cm.",["Add all sides: \\\\(26\\\\text{ cm}\\\\)."]),
      hw("Core","Find area of trapezium with parallel sides 9 cm and 14 cm, height 6 cm.",["\\\\(A=\\\\tfrac12(9+14)6=69\\\\text{ cm}^2\\\\)."]),
      hw("Core","A parallelogram has area 84 cm² and base 12 cm. Find height.",["\\\\(h=84/12=7\\\\text{ cm}\\\\)."]),
      hw("Extension","A rectangle 10 by 6 has a 4 by 2 rectangle removed. Find remaining area.",["Outer area 60.","Removed area 8.","Remaining area \\\\(52\\\\text{ units}^2\\\\)."]),
      hw("Extension","A trapezium has area 96 cm², height 8 cm, one parallel side 9 cm. Find the other.",["\\\\(96=4(9+x)\\\\).","\\\\(24=9+x\\\\).","\\\\(x=15\\\\text{ cm}\\\\)."])
    ]
  };

  if(l.id==="17.4") return {
    examples:[
      ex("Find the area and arc length of a sector of radius 6 cm and angle \\\\(40^\\\\circ\\\\).",[
        "Area \\\\(=(40/360)\\\\pi(6^2)=4\\\\pi\\\\text{ cm}^2\\\\).",
        "Arc length \\\\(=(40/360)2\\\\pi(6)=4\\\\pi/3\\\\text{ cm}\\\\)."
      ]),
      ex("A major sector has radius 4 cm and missing minor angle \\\\(65^\\\\circ\\\\). Find the major-sector angle and area.",[
        "Major angle \\\\(=360-65=295^\\\\circ\\\\).",
        "Area \\\\(=(295/360)\\\\pi(4^2)\\\\).",
        "Simplify or round as requested."
      ]),
      ex("A sector has radius 8 cm and angle \\\\(120^\\\\circ\\\\). Find its perimeter.",[
        "Arc length \\\\(=(120/360)2\\\\pi(8)=16\\\\pi/3\\\\).",
        "Perimeter includes two radii.",
        "\\\\(P=16+16\\\\pi/3\\\\text{ cm}\\\\)."
      ]),
      ex("A sector has arc length \\\\(5\\\\pi\\\\) cm and radius 12 cm. Find the angle.",[
        "\\\\(5\\\\pi=(\\\\theta/360)2\\\\pi(12)\\\\).",
        "Cancel \\\\(\\\\pi\\\\): \\\\(5=\\\\theta/15\\\\).",
        "\\\\(\\\\theta=75^\\\\circ\\\\)."
      ])
    ],
    practice:{
      foundation:["Find arc length: r=9 cm, angle 80°.","Find sector area: r=7 cm, angle 90°.","Find semicircle area for diameter 12 cm.","Find quadrant perimeter for radius 5 cm.","Find major angle if minor angle is 110°.","Give answers in terms of π where appropriate."],
      core:["Find area and perimeter of a 135° sector of radius 8 cm.","A major sector has minor angle 50° and radius 6 cm. Find area.","Find angle if sector area is \\\\(18\\\\pi\\\\) and radius 9 cm.","Find radius if arc length is \\\\(6\\\\pi\\\\) and angle 120°.","A sector forms part of a compound shape; find total perimeter.","Compare exact and 3 s.f. answers."],
      extension:["A 'Pac-Man' shape is a major sector formed by removing a 70° sector from a circle of radius 5 cm. Find area and perimeter.","A sector has equal numerical area and arc length. Find a relationship between r and angle.","A circular badge has a sector removed. Find remaining area from diameter and angle.","Two sectors have equal arc length. Compare their angles and radii.","Find the angle of a sector if its perimeter and radius are known.","Form an equation for a sector radius from given area."]
    },
    homework:[
      hw("Foundation","Find arc length for r=10 cm, angle 72°.",["\\\\((72/360)2\\\\pi10=4\\\\pi\\\\text{ cm}\\\\)."]),
      hw("Foundation","Find sector area for r=6 cm, angle 120°.",["\\\\((120/360)\\\\pi36=12\\\\pi\\\\text{ cm}^2\\\\)."]),
      hw("Core","Find perimeter of a 90° sector, r=8 cm.",["Arc \\\\(=(1/4)16\\\\pi=4\\\\pi\\\\).","Perimeter \\\\(=16+4\\\\pi\\\\text{ cm}\\\\)."]),
      hw("Core","A major sector has minor angle 80° and r=5 cm. Find major angle.",["\\\\(360-80=280^\\\\circ\\\\)."]),
      hw("Extension","Arc length is \\\\(7\\\\pi\\\\) cm, r=14 cm. Find angle.",["\\\\(7\\\\pi=(\\\\theta/360)28\\\\pi\\\\).","\\\\(7=7\\\\theta/90\\\\).","\\\\(\\\\theta=90^\\\\circ\\\\)."]),
      hw("Extension","Sector area is \\\\(25\\\\pi\\\\) cm², angle 144°. Find r.",["\\\\(25\\\\pi=(144/360)\\\\pi r^2=(2/5)\\\\pi r^2\\\\).","\\\\(r^2=62.5\\\\).","\\\\(r=5\\\\sqrt{2.5}\\\\) cm (exact equivalent accepted)."])
    ]
  };

  if(l.id==="19.1") return {
    examples:[
      ex("The scores 15,16,17,18,19,20 occur with frequencies 2,1,2,6,2,7. Represent them in a bar chart.",[
        "Put score on the horizontal axis and frequency on the vertical axis.",
        "Use equal-width separated bars because the data is discrete.",
        "Choose a vertical scale reaching at least 7.",
        "Label both axes and give the chart a title."
      ]),
      ex("In a survey of 36 students, choices A, B, C, D have frequencies 9, 6, 11, 10. Find the pie-chart angles.",[
        "One student corresponds to \\\\(360/36=10^\\\\circ\\\\).",
        "Angles are \\\\(90^\\\\circ,60^\\\\circ,110^\\\\circ,100^\\\\circ\\\\).",
        "Check the total is \\\\(360^\\\\circ\\\\)."
      ]),
      ex("Construct a stem-and-leaf diagram for 12, 15, 18, 21, 21, 24, 29, 31, 34.",[
        "Use tens as stems.",
        "Order leaves within each stem.",
        "Write a key, for example \\\\(2|4=24\\\\)."
      ]),
      ex("A newspaper displays the same data using a pictogram and a bar chart. Which representation is easier to compare precisely, and why?",[
        "A bar chart usually supports more precise comparisons because values are read from a numerical axis.",
        "A pictogram can be visually engaging but partial symbols may reduce precision.",
        "The best choice depends on audience and purpose."
      ])
    ],
    practice:{
      foundation:["Make a frequency table from 2,3,3,4,4,4,5.","Draw a bar chart for frequencies 3,5,7,4.","Find pie angle for 12 out of 48.","Find pie angle for 9 out of 36.","Write a key for a stem-and-leaf diagram.","Interpret 2.5 symbols if one symbol represents 8 people."],
      core:["Construct a stem-and-leaf diagram for 11,14,17,18,22,24,24,29,31.","Find all pie angles for frequencies 5,7,8,10.","Design a dual bar chart comparing two classes.","Explain why bar-chart bars are separated for discrete categories.","A pictogram uses half-symbols. Calculate exact frequencies.","Compare the information shown by a bar chart and pie chart."],
      extension:["A pie chart sector is 126°. What fraction and percentage of the total is this?","One category is missing from a pie chart. Use the other angles to find it.","Create a back-to-back stem-and-leaf diagram for two data sets.","Explain one misleading feature that can occur in a bar chart.","Choose the best representation for two different scenarios and justify.","Turn a frequency table into two different valid displays and compare them."]
    },
    homework:[
      hw("Foundation","Frequency 14 out of 56. Find pie angle.",["Fraction \\\\(=1/4\\\\).","Angle \\\\(=90^\\\\circ\\\\)."]),
      hw("Foundation","A pictogram symbol represents 6 students. What does 3.5 symbols represent?",["\\\\(3.5\\\\times6=21\\\\) students."]),
      hw("Core","Construct a stem-and-leaf for 13,14,18,21,21,25,29.",["Stem 1: 3,4,8.","Stem 2: 1,1,5,9.","Include a key."]),
      hw("Core","Frequencies 8,12,10 total 30. Find pie angles.",["Multiply each by 12°.","Angles: 96°, 144°, 120°."]),
      hw("Extension","A pie sector is 54°. What percentage is it?",["\\\\(54/360=0.15\\\\).","Percentage \\\\(=15%\\\\)."]),
      hw("Extension","Explain why a truncated vertical axis may mislead in a bar chart.",["It can visually exaggerate small differences in bar heights.","Readers should inspect the numerical scale."])
    ]
  };

  if(l.id==="19.2") return {
    examples:[
      ex("A scatter diagram rises from left to right and points lie close to a straight line. Describe the correlation.",[
        "The direction is upward, so correlation is positive.",
        "Points are close to a line, so it is strong.",
        "Answer: strong positive correlation."
      ]),
      ex("Plot the pairs \\\\((1,7),(2,5),(3,6),(4,3),(5,2),(6,1)\\\\) and describe the relationship.",[
        "Plot each point accurately as a small cross.",
        "The overall trend decreases as x increases.",
        "The relationship is negative correlation."
      ]),
      ex("Draw a line of best fit for a scatter plot and estimate y when x=7.",[
        "Draw one straight line across the full data cloud.",
        "Aim for roughly balanced points above and below.",
        "From x=7, move vertically to the line then horizontally to read y.",
        "The answer is an estimate."
      ]),
      ex("The observed x-values lie between 10 and 50. A model is used at x=90. Comment on reliability.",[
        "This is extrapolation outside the observed range.",
        "The pattern may not continue.",
        "The prediction is less reliable and should be stated cautiously."
      ])
    ],
    practice:{
      foundation:["State the correlation for an upward trend.","State the correlation for a downward trend.","State the correlation for a random cloud.","Identify an outlier.","Explain what bivariate data means.","Plot three given coordinate pairs as crosses."],
      core:["Describe strength and direction of four scatter plots.","Draw a line of best fit by eye.","Use a line of best fit to interpolate.","Explain why the line need not pass through any data point.","State why a point far from the pattern matters.","Distinguish interpolation from extrapolation."],
      extension:["A strong positive correlation exists between screen size and price. Give one cautious conclusion.","Give a plausible third variable for ice-cream sales and sunburn cases.","Explain why correlation does not prove causation.","Estimate the equation of a line of best fit from two convenient points.","Discuss the effect of one extreme outlier on a fitted line.","Design paired data likely to show zero correlation."]
    },
    homework:[
      hw("Foundation","A scatter plot falls left to right. State correlation.",["Negative correlation."]),
      hw("Foundation","What is an outlier?",["A point that lies noticeably away from the main pattern of the data."]),
      hw("Core","Why should a line of best fit extend across the data cloud?",["It should represent the overall trend, not a small local section."]),
      hw("Core","Why is interpolation usually safer than extrapolation?",["Interpolation stays within the range supported by observed data.","Extrapolation assumes the trend continues beyond the evidence."]),
      hw("Extension","A strong correlation is found between height and vocabulary in children. Explain a likely third variable.",["Age is a plausible confounding variable: older children tend to be taller and have larger vocabularies."]),
      hw("Extension","Explain why a strong correlation can still give uncertain individual predictions.",["Points still vary around the trend line.","Correlation describes an overall pattern, not exact outcomes."])
    ]
  };

  if(l.id==="19.5") return {
    examples:[
      ex("Grouped frequencies are 5, 8, 11, 6 for classes ending at 10,20,30,40. Form cumulative frequencies.",[
        "Running totals: \\\\(5,13,24,30\\\\).",
        "These totals are paired with upper class boundaries 10,20,30,40."
      ]),
      ex("Plot cumulative-frequency points \\\\((10,5),(20,13),(30,24),(40,30)\\\\).",[
        "Label axes clearly.",
        "Plot each point as a small cross.",
        "Join with a smooth increasing curve, not straight zig-zag segments."
      ]),
      ex("A cumulative-frequency curve represents 80 values. Estimate the median and quartiles.",[
        "Use CF positions 20, 40 and 60 for Q1, median and Q3.",
        "Move horizontally from each CF value to the curve, then vertically to the x-axis.",
        "Read approximate x-values."
      ]),
      ex("Only the top 20% of 200 candidates progress. Find the cutoff using a cumulative-frequency curve.",[
        "Top 20% means 80% lie at or below the cutoff.",
        "\\\\(0.80\\\\times200=160\\\\).",
        "Read the x-value corresponding to cumulative frequency 160.",
        "Scores above that value progress."
      ])
    ],
    practice:{
      foundation:["Find cumulative frequencies for 4,7,5,9.","For 60 values, state median CF position.","For 80 values, state Q1 and Q3 positions.","State which class boundary is plotted.","Explain why cumulative frequency never decreases.","Plot four cumulative points."],
      core:["Complete a cumulative-frequency table.","Draw a smooth CF curve from upper class boundaries.","Read median from a curve.","Read Q1 and Q3 and calculate IQR.","Estimate the 90th percentile.","Estimate number above a given threshold."],
      extension:["Use a CF curve to estimate a probability.","Compare two CF curves using median and IQR.","Find a cutoff for the top 15% of a population.","Explain why values read from the curve are estimates.","Explain why lower class boundaries are not paired with cumulative totals in the usual construction.","Assess reliability when a curve is steep around the percentile being read."]
    },
    homework:[
      hw("Foundation","Frequencies are 3,5,8,4. Find cumulative frequencies.",["Running totals: 3,8,16,20."]),
      hw("Foundation","There are 100 values. State CF position of median.",["\\\\(100/2=50\\\\)."]),
      hw("Core","There are 120 values. State CF positions of Q1 and Q3.",["Q1 \\\\(=30\\\\), Q3 \\\\(=90\\\\)."]),
      hw("Core","A curve gives Q1=18, Q3=31. Find IQR.",["\\\\(31-18=13\\\\)."]),
      hw("Extension","Top 10% of 250 students receive an award. Which CF value gives the cutoff?",["90% lie at or below cutoff.","\\\\(0.9\\\\times250=225\\\\).","Read x at CF=225."]),
      hw("Extension","Why are CF graph answers approximate?",["The original grouped data does not give exact individual values.","The smooth curve also interpolates between plotted cumulative totals."])
    ]
  };

  if(l.id==="19.7") return {
    examples:[
      ex("Class \\\\(140<h\\\\le150\\\\) has frequency 15. Find its frequency density.",[
        "Class width \\\\(=10\\\\).",
        "Frequency density \\\\(=15/10=1.5\\\\).",
        "The histogram bar height is 1.5."
      ]),
      ex("A histogram bar from 150 to 160 has density 3.5. Find frequency.",[
        "Class width \\\\(=10\\\\).",
        "Frequency \\\\(=\\\\text{density}\\\\times\\\\text{width}\\\\).",
        "\\\\(3.5\\\\times10=35\\\\)."
      ]),
      ex("A class from 160 to 165 has frequency 20. Compare its bar height with a 10-wide class of frequency 20.",[
        "For 160–165, density \\\\(=20/5=4\\\\).",
        "For a 10-wide class, density \\\\(=20/10=2\\\\).",
        "Equal frequencies can have different heights because class widths differ."
      ]),
      ex("An unfinished histogram and table each contain missing information. Explain how to complete both.",[
        "Use table frequency and class width to calculate missing density.",
        "Use histogram height and class width to recover missing frequency.",
        "Remember bar area, not height alone, represents frequency."
      ])
    ],
    practice:{
      foundation:["Find density: f=12, width=4.","Find density: f=18, width=6.","Find frequency: density=2.5, width=8.","Find class width 30–45.","State the vertical-axis label.","Explain what bar area represents."],
      core:["Find frequency for density 1.8 and width 15.","Find width for frequency 24 and density 3.","Complete a histogram table with one missing density.","Complete a histogram from a frequency table.","Recover two missing frequencies from a histogram.","Identify the modal class from histogram heights and widths."],
      extension:["Two bars have equal area but different widths. Compare frequencies.","A histogram has one missing bar; calculate its height from total frequency.","Estimate percentage above a threshold that cuts through a class.","Explain why equal-frequency classes can have different heights.","Design a grouped table that would produce a specified histogram.","Critique a 'histogram' incorrectly drawn with gaps between continuous classes."]
    },
    homework:[
      hw("Foundation","Frequency 21, width 7. Find density.",["\\\\(21/7=3\\\\)."]),
      hw("Foundation","Density 1.5, width 12. Find frequency.",["\\\\(1.5\\\\times12=18\\\\)."]),
      hw("Core","Frequency 30, density 2.5. Find width.",["\\\\(30/2.5=12\\\\)."]),
      hw("Core","Class 50–65 has frequency 24. Find density.",["Width 15.","Density \\\\(=24/15=1.6\\\\)."]),
      hw("Extension","A class width is 8 and its histogram bar area is 20. Find frequency.",["Histogram area represents frequency.","Frequency \\\\(=20\\\\)."]),
      hw("Extension","Why must a histogram use frequency density for unequal class widths?",["So that each bar's area, rather than height alone, is proportional to frequency."])
    ]
  };

  if(l.id==="20.3") return {
    examples:[
      ex("Given \\\\(f(x)=x+6\\\\) and \\\\(g(x)=x-3\\\\), find \\\\(fg(x)\\\\) and \\\\(gf(x)\\\\).",[
        "\\\\(fg(x)=f(g(x))=f(x-3)=x+3\\\\).",
        "\\\\(gf(x)=g(f(x))=g(x+6)=x+3\\\\).",
        "For this pair, the two composites happen to be equal."
      ]),
      ex("Given \\\\(f(x)=2x\\\\) and \\\\(g(x)=-x\\\\), find \\\\(gf(4)\\\\).",[
        "Apply f first: \\\\(f(4)=8\\\\).",
        "Then g: \\\\(g(8)=-8\\\\).",
        "So \\\\(gf(4)=-8\\\\)."
      ]),
      ex("Given \\\\(f(x)=3x+1\\\\), find \\\\(ff(x)\\\\).",[
        "\\\\(ff(x)=f(f(x))\\\\).",
        "Substitute \\\\(3x+1\\\\) into f.",
        "\\\\(f(3x+1)=3(3x+1)+1=9x+4\\\\)."
      ]),
      ex("Given \\\\(f(x)=-x\\\\), \\\\(g(x)=x-1\\\\), \\\\(h(x)=1/(x+2)\\\\), explain why \\\\(hgf(1)\\\\) is not defined.",[
        "\\\\(f(1)=-1\\\\).",
        "\\\\(g(-1)=-2\\\\).",
        "\\\\(h(-2)=1/0\\\\), which is undefined.",
        "Therefore the composite is not defined at x=1."
      ])
    ],
    practice:{
      foundation:["Given f(x)=x+4, g(x)=2x, find fg(x).","Find gf(x) for the same functions.","Find gf(3).","Find ff(2) if f(x)=3x-1.","State which function is applied first in fg(x).","Evaluate g(f(-1))."],
      core:["Form fg and gf for f(x)=x+2, g(x)=x².","Given f(x)=2x-5, g(x)=1/x, find gf(4).","Find ff(x) for f(x)=x-3.","Find gg(-2) for g(x)=x²+1.","Evaluate hgf(2) for three given functions.","Explain why fg and gf are usually different."],
      extension:["Find a value of x where a composite involving 1/(x-3) is undefined.","Show fg=gf for a chosen pair of translations.","Construct two functions for which fg≠gf.","Solve fg(x)=17 for given linear f and g.","Form fff(x) for f(x)=2x+1.","Explain how domain restrictions propagate through a composite."]
    },
    homework:[
      hw("Foundation","f(x)=x+5, g(x)=2x. Find gf(3).",["f(3)=8.","g(8)=16."]),
      hw("Foundation","f(x)=3x-1. Find ff(2).",["f(2)=5.","f(5)=14."]),
      hw("Core","f(x)=x², g(x)=x-4. Find fg(x).",["\\\\(fg(x)=f(x-4)=(x-4)^2\\\\)."]),
      hw("Core","f(x)=2x+1, g(x)=x². Find gf(x).",["\\\\(gf(x)=g(2x+1)=(2x+1)^2\\\\)."]),
      hw("Extension","f(x)=1/x, g(x)=x-2. State x-values for which fg(x) is undefined.",["\\\\(fg(x)=1/(x-2)\\\\).","Undefined when \\\\(x=2\\\\)."]),
      hw("Extension","f(x)=x+1, g(x)=2x. Solve fg(x)=11.",["\\\\(fg(x)=f(2x)=2x+1\\\\).","\\\\(2x+1=11\\\\Rightarrow x=5\\\\)."])
    ]
  };
  return null;
}

function upgradedBank(l){
  var deep=deepTextbookBank(l);
  var s=deep || specialisedBank(l.type);
  var b=s || bank(l.type);
  if(!deep && b.examples.length<4){
    var e=extraExample(l.type);
    if(e) b=Object.assign({},b,{examples:b.examples.concat([e])});
  }
  return b;
}

function svgAngleLine(){
  return '<svg class="diagram" viewBox="0 0 700 280"><line x1="80" y1="190" x2="620" y2="190" stroke="#18323d" stroke-width="5"/><line x1="340" y1="190" x2="420" y2="70" stroke="#18323d" stroke-width="5"/><path d="M340 190 A90 90 0 0 0 290 116" fill="none" stroke="#3e93b5" stroke-width="4"/><text x="235" y="128" font-size="28">112°</text><path d="M340 190 A80 80 0 0 1 386 124" fill="none" stroke="#d2694c" stroke-width="4"/><text x="390" y="145" font-size="28">x</text></svg>';
}
function svgVertical(){
  return '<svg class="diagram" viewBox="0 0 700 300"><line x1="120" y1="250" x2="570" y2="60" stroke="#18323d" stroke-width="5"/><line x1="150" y1="60" x2="550" y2="255" stroke="#18323d" stroke-width="5"/><text x="280" y="115" font-size="28">115°</text><text x="350" y="235" font-size="28">x</text></svg>';
}
function svgAnglePoint(){
  return '<svg class="diagram" viewBox="0 0 700 320"><g stroke="#18323d" stroke-width="5"><line x1="350" y1="160" x2="350" y2="35"/><line x1="350" y1="160" x2="605" y2="160"/><line x1="350" y1="160" x2="505" y2="280"/><line x1="350" y1="160" x2="185" y2="275"/><line x1="350" y1="160" x2="95" y2="160"/></g><text x="390" y="115" font-size="24">x</text><text x="455" y="205" font-size="24">2x</text><text x="220" y="215" font-size="24">4x</text><text x="190" y="120" font-size="24">150°</text></svg>';
}
function svgTrapezium(){
  return '<svg class="diagram" viewBox="0 0 700 330"><polygon points="180,240 520,240 455,90 245,90" fill="#f5fbfd" stroke="#18323d" stroke-width="5"/><text x="330" y="80" font-size="24">7 cm</text><text x="330" y="275" font-size="24">10 cm</text><text x="178" y="165" font-size="24">4 cm</text><text x="505" y="165" font-size="24">4 cm</text></svg>';
}
function svgHouse(){
  return '<svg class="diagram" viewBox="0 0 700 380"><polygon points="210,310 210,155 350,55 490,155 490,310" fill="#eef8fb" stroke="#18323d" stroke-width="5"/><line x1="210" y1="155" x2="490" y2="155" stroke="#7aa6b7" stroke-width="3" stroke-dasharray="8 8"/><text x="330" y="340" font-size="24">5 m</text><text x="170" y="240" font-size="24">8 m</text><text x="360" y="110" font-size="24">h = 4 m</text></svg>';
}
function svgSector(angle,major){
  var a=angle||90;
  if(major) return '<svg class="diagram" viewBox="0 0 500 360"><circle cx="250" cy="180" r="125" fill="#eef8fb" stroke="#18323d" stroke-width="4"/><path d="M250 180 L250 55 A125 125 0 0 1 363 233 Z" fill="white" stroke="#d2694c" stroke-width="4"/><text x="285" y="150" font-size="24">65°</text><text x="185" y="280" font-size="22">major sector</text></svg>';
  return '<svg class="diagram" viewBox="0 0 500 340"><path d="M250 180 L250 55 A125 125 0 0 1 372 154 Z" fill="#dff3fb" stroke="#18323d" stroke-width="4"/><line x1="250" y1="180" x2="250" y2="55" stroke="#18323d" stroke-width="4"/><line x1="250" y1="180" x2="372" y2="154" stroke="#18323d" stroke-width="4"/><text x="295" y="135" font-size="24">'+a+'°</text><text x="260" y="100" font-size="22">r</text></svg>';
}
function svgBarChart(){
  return '<svg class="diagram" viewBox="0 0 700 380"><line x1="80" y1="320" x2="640" y2="320" stroke="#18323d" stroke-width="3"/><line x1="80" y1="320" x2="80" y2="45" stroke="#18323d" stroke-width="3"/><text x="20" y="48" font-size="18">Frequency</text>'+[2,1,2,6,2,7].map((h,i)=>'<rect x="'+(120+i*80)+'" y="'+(320-h*34)+'" width="48" height="'+(h*34)+'" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><text x="'+(134+i*80)+'" y="345" font-size="18">'+(15+i)+'</text>').join("")+'</svg>';
}
function svgPie(){
  return '<svg class="diagram" viewBox="0 0 520 360"><circle cx="250" cy="175" r="125" fill="#fff" stroke="#18323d" stroke-width="4"/><path d="M250 175 L250 50 A125 125 0 0 1 375 175 Z" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><path d="M250 175 L375 175 A125 125 0 0 1 187.5 283.25 Z" fill="#efe6d5" stroke="#b58d4b" stroke-width="3"/><text x="300" y="105" font-size="22">A</text><text x="305" y="245" font-size="22">B</text><text x="160" y="230" font-size="22">C / D</text></svg>';
}
function svgStem(){
  return '<div class="stemleaf"><div><strong>Stem</strong><span>|</span><strong>Leaf</strong></div><div><b>1</b><span>|</span><span>2&nbsp;5&nbsp;8</span></div><div><b>2</b><span>|</span><span>1&nbsp;1&nbsp;4&nbsp;9</span></div><div><b>3</b><span>|</span><span>1&nbsp;4</span></div><p>Key: 2 | 4 = 24</p></div>';
}
function svgScatter(kind){
  var pts=kind==="neg"?[[120,80],[180,110],[240,130],[300,170],[360,185],[420,225],[500,250],[560,280]]:[[120,280],[180,245],[240,230],[300,185],[360,170],[420,125],[500,105],[560,75]];
  return '<svg class="diagram" viewBox="0 0 700 380"><line x1="75" y1="320" x2="640" y2="320" stroke="#18323d" stroke-width="3"/><line x1="75" y1="320" x2="75" y2="40" stroke="#18323d" stroke-width="3"/>'+pts.map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]+6)+'" y2="'+(p[1]+6)+'"/><line x1="'+(p[0]+6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]-6)+'" y2="'+(p[1]+6)+'"/></g>').join("")+'</svg>';
}
function svgCF(){
  return '<svg class="diagram" viewBox="0 0 720 420"><line x1="85" y1="345" x2="660" y2="345" stroke="#18323d" stroke-width="3"/><line x1="85" y1="345" x2="85" y2="45" stroke="#18323d" stroke-width="3"/><text x="300" y="400" font-size="18">Upper class boundary</text><text x="12" y="40" font-size="18">Cumulative frequency</text><path d="M95 338 C170 328,220 300,270 260 C330 210,390 145,455 105 C520 70,590 55,650 50" fill="none" stroke="#3e93b5" stroke-width="4"/>'+[[170,315],[250,275],[340,195],[455,105],[560,68],[650,50]].map(p=>'<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]+5)+'" y2="'+(p[1]+5)+'"/><line x1="'+(p[0]+5)+'" y1="'+(p[1]-5)+'" x2="'+(p[0]-5)+'" y2="'+(p[1]+5)+'"/></g>').join("")+'</svg>';
}
function svgHistogram(){
  return '<svg class="diagram" viewBox="0 0 720 420"><line x1="85" y1="345" x2="660" y2="345" stroke="#18323d" stroke-width="3"/><line x1="85" y1="345" x2="85" y2="45" stroke="#18323d" stroke-width="3"/><text x="10" y="40" font-size="18">Frequency density</text><rect x="105" y="240" width="90" height="105" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="195" y="100" width="90" height="245" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="285" y="65" width="45" height="280" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="330" y="185" width="90" height="160" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="510" y="300" width="120" height="45" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/></svg>';
}
function svgCompositeFlow(){
  return '<svg class="diagram" viewBox="0 0 760 260"><rect x="55" y="85" width="130" height="80" rx="18" fill="#fff" stroke="#18323d" stroke-width="3"/><rect x="310" y="85" width="130" height="80" rx="18" fill="#dff3fb" stroke="#3e93b5" stroke-width="3"/><rect x="575" y="85" width="130" height="80" rx="18" fill="#efe6d5" stroke="#b58d4b" stroke-width="3"/><text x="105" y="135" font-size="26">x</text><text x="345" y="135" font-size="26">f(x)</text><text x="610" y="135" font-size="26">g(f(x))</text><path d="M185 125 H300" stroke="#18323d" stroke-width="3"/><path d="M440 125 H565" stroke="#18323d" stroke-width="3"/><text x="230" y="110" font-size="20">f</text><text x="495" y="110" font-size="20">g</text></svg>';
}

function diagramForExample(t,i){
  var l=LESSONS[current],id=l&&l.id;
  if(id==="16.1"){
    if(i===0)return svgAngleLine();
    if(i===1)return svgAnglePoint();
    if(i===2)return svgVertical();
    return svgAnglePoint();
  }
  if(id==="17.2"){
    if(i===0)return svgTrapezium();
    if(i===1)return '<svg class="diagram" viewBox="0 0 700 330"><polygon points="170,250 520,250 430,90 80,90" fill="#eef8fb" stroke="#18323d" stroke-width="5"/><line x1="170" y1="250" x2="170" y2="90" stroke="#d2694c" stroke-width="3" stroke-dasharray="8 8"/><text x="300" y="285" font-size="24">8 m</text><text x="180" y="165" font-size="24">3.5 m</text></svg>';
    if(i===2)return svgHouse();
    return svgTrapezium();
  }
  if(id==="17.4"){
    if(i===0)return svgSector(40,false);
    if(i===1)return svgSector(65,true);
    if(i===2)return svgSector(120,false);
    return svgSector(75,false);
  }
  if(id==="19.1"){
    if(i===0)return svgBarChart();
    if(i===1)return svgPie();
    if(i===2)return svgStem();
    return '<svg class="diagram" viewBox="0 0 700 260"><rect x="80" y="80" width="85" height="85" rx="10" fill="#dff3fb"/><rect x="190" y="80" width="85" height="85" rx="10" fill="#dff3fb"/><rect x="300" y="80" width="42" height="85" rx="10" fill="#dff3fb"/><text x="90" y="205" font-size="22">1 symbol = 8</text><text x="420" y="125" font-size="24">How many?</text></svg>';
  }
  if(id==="19.2"){
    if(i===0)return svgScatter("pos");
    if(i===1)return svgScatter("neg");
    if(i===2)return svgScatter("pos").replace('</svg>','<line x1="110" y1="285" x2="585" y2="65" stroke="#d2694c" stroke-width="3"/></svg>');
    return svgScatter("pos");
  }
  if(id==="19.5") return svgCF();
  if(id==="19.7") return svgHistogram();
  if(id==="20.3") return svgCompositeFlow();
  if(id==="12.1" && i===3){
    return '<svg class="diagram" viewBox="0 0 640 300"><rect x="150" y="65" width="340" height="165" fill="#fff" stroke="#18323d" stroke-width="4"/><text x="270" y="260" font-size="24">3 + √12 cm</text><text x="500" y="155" font-size="24">2√3 cm</text></svg>';
  }
  return (function(){
    if(["angles","parallel","polygons"].includes(t)) return diagramFor(t);
    if(["circle","sector"].includes(t)) return diagramFor(t);
    if(t==="sets") return diagramFor(t);
    if(["functions","inverse","composite"].includes(t)) return diagramFor(t);
    if(["ineq-numberline","ineq-linear"].includes(t)) return diagramFor(t);
    if(["scatter","correlation","bestfit"].includes(t)) return svgScatter("pos");
    if(["cumfreq","cumfreq-read"].includes(t)) return svgCF();
    if(["histogram","freqdensity"].includes(t)) return svgHistogram();
    return "";
  })();
}

/* v3 render: show source-pattern cue on each teaching slide */
function render(){
  var l=LESSONS[current], b=upgradedBank(l);
  if(current!==lastExampleLesson){exampleSlide=0;lastExampleLesson=current;}
  $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
  $("#lessonTitle").textContent=l.id+"  "+l.title;
  $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • lesson-by-lesson teaching sequence";
  $("#prevBtn").disabled=current===0; $("#nextBtn").disabled=current===LESSONS.length-1;
  $$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
  renderNav($("#search").value);

  if(tab==="learn"){
    $("#content").innerHTML=
      '<section class="teaching-slide intro-teaching-slide"><div class="slide-kicker">START HERE</div><div class="learn-grid">'+
      '<article class="card flat"><h3>Prior knowledge check</h3><p class="lead">Students should be ready to recall:</p><ul class="clean-list">'+l.prior.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '<article class="card flat"><h3>Learning points</h3><p class="lead">By the end of the lesson, students should be able to:</p><ul class="clean-list">'+l.obj.map(x=>'<li>'+x+'</li>').join("")+'</ul></article>'+
      '</div><div class="source-strip"><strong>Textbook source map:</strong> '+l.src+'. <br><strong>Build approach:</strong> worked examples and exercises are rewritten from the same question patterns and progression found in the supplied Cambridge coursebook and Exam Success book.</div></section>';
  }

  if(tab==="examples"){
    $("#content").innerHTML=
      '<div class="deck-toolbar"><div><strong>Teacher examples</strong><span id="exampleCount"></span></div><div class="deck-buttons"><button id="examplePrev" class="ghost-btn">← Previous example</button><button id="exampleNext" class="primary-btn">Next example →</button></div></div>'+
      '<div class="example-deck">'+b.examples.map(function(e,i){
        var diag=diagramForExample(l.type,i);
        return '<section class="example-slide teaching-slide" data-slide="'+i+'"><div class="slide-kicker">EXAMPLE '+(i+1)+' OF '+b.examples.length+'</div>'+
          '<div class="textbook-pattern"><span>Textbook pattern</span><strong>'+textbookLens(l,i)+'</strong><small>'+l.src+'</small></div>'+
          '<div class="example-question">'+e.q+'</div>'+
          (diag?'<div class="example-diagram">'+diag+'</div>':'')+
          renderModelBoard('model-board-'+current+'-'+i)+
          '<details class="worked-solution"><summary>Show model solution</summary><div class="solution-paper"><div class="solution-title">Worked solution</div><div class="steps">'+e.steps.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details>'+
          '</section>';
      }).join("")+'</div>'+
      '<div class="example-dots">'+b.examples.map((_,i)=>'<button class="example-dot" data-slide="'+i+'" aria-label="Go to example '+(i+1)+'">'+(i+1)+'</button>').join("")+'</div>';
  }

  if(tab==="practice"){
    var ep=extraPractice(l.type), merged={};
    ["foundation","core","extension"].forEach(function(k){merged[k]=(b.practice[k]||[]).concat(ep[k]||[]);});
    $("#content").innerHTML='<article class="card practice-sheet"><div class="sheet-head"><div><div class="slide-kicker">INDEPENDENT PRACTICE</div><h3>Textbook-style progressive practice</h3><p class="practice-source">Built from the progression and question forms in '+l.src+'.</p></div><span class="question-count">'+(merged.foundation.length+merged.core.length+merged.extension.length+ep.problems.length)+' questions</span></div>'+
      '<div class="tiers">'+[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(function(pair){var name=pair[0],k=pair[1];return '<section class="tier '+k+'"><h4>'+name+'</h4><ol class="q-list">'+merged[k].map(q=>'<li>'+q+'</li>').join("")+'</ol></section>';}).join("")+'</div>'+
      '<section class="problem-solving"><div class="slide-kicker">REASONING & PROBLEM SOLVING</div><h4>Exam-style thinking</h4><ol class="q-list">'+ep.problems.map(q=>'<li>'+q+'</li>').join("")+'</ol></section></article>';
  }

  if(tab==="homework"){
    var allHw=(b.homework||[]).concat(extraHomework(l.type));
    $("#content").innerHTML='<article class="card homework-sheet"><div class="sheet-head"><div><div class="slide-kicker">HOMEWORK</div><h3>Mixed textbook-style homework</h3><p class="practice-source">Fluency → application → reasoning, with full self-check solutions.</p></div><span class="question-count">'+allHw.length+' questions</span></div><p class="lead">Attempt every question before opening its worked solution.</p>'+
      allHw.map(function(h,i){return '<div class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="pill">'+h.tier+'</span><span>'+h.q+'</span></div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">'+h.sol.map((s,j)=>'<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>').join("")+'</div></div></details></div>';}).join("")+'</article>';
  }

  if(tab==="whiteboard"){
    $("#content").innerHTML='<article class="card board-card"><div class="board-tools"><strong>Whole-class whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
  }

  if(window.MathJax&&MathJax.typesetPromise)MathJax.typesetPromise([$("#content")]);
  if(tab==="examples"){initModelBoards();setupExampleDeck();}
  if(tab==="whiteboard")initBoard();
  location.hash=l.id+"-"+tab;
}


/* =====================================================================
   V4 — textbook-first teaching layer
   Source order: NES SoW -> Cambridge Coursebook -> Exam Success
   Maths renderer: KaTeX with graceful failure; no MathJax dependency.
   ===================================================================== */

var COURSEBOOK_URL="https://drive.google.com/file/d/1A_hJ2SAZEXpG2U1HRmTxMt1fxb-VYSGL/view";
var EXAM_SUCCESS_URL="https://drive.google.com/file/d/1FRNikzxut4HDIhkOf20QSmaeK-bwB5AH/view";
var SOW_URL="https://docs.google.com/spreadsheets/d/1YnmCS9DqRTNO4v5UrAC9WzQUleavA1br/edit";

var EXAM_SUCCESS_MAP={
 "12":"Exam Success — Chapter 1: Number",
 "13":"Exam Success — Chapter 2: Algebra and graphs",
 "14":"Exam Success — Chapter 2: Algebra and graphs",
 "15":"Exam Success — Chapter 2: Algebra and graphs",
 "16":"Exam Success — Chapter 4: Geometry",
 "17":"Exam Success — Chapter 5: Mensuration",
 "18":"Exam Success — Chapter 9: Statistics",
 "19":"Exam Success — Chapter 9: Statistics",
 "20":"Exam Success — Chapter 2: Algebra and graphs",
 "21":"Exam Success — Chapter 1: Number / sets",
 "22":"Exam Success — Chapter 1: Number / proportion"
};

var LEARNING_GUIDE={
"12.1":{
 concept:"A surd is an irrational root that is deliberately left in exact form. The aim is not to turn it into a decimal, but to rewrite it in a simpler exact form.",
 rules:[
  ["\\sqrt{a}\\,\\sqrt{b}=\\sqrt{ab}","Roots can be multiplied by multiplying the values inside the roots."],
  ["\\frac{\\sqrt a}{\\sqrt b}=\\sqrt{\\frac ab}","For positive values, roots can be divided in the same way."],
  ["\\sqrt{k^2a}=k\\sqrt a","To simplify a surd, extract perfect-square factors."],
  ["p\\sqrt a+q\\sqrt a=(p+q)\\sqrt a","Only like surds can be collected."]
 ],
 method:["Look for the largest perfect-square factor first.","Simplify each surd before trying to add or subtract.","When brackets are present, expand as you would with algebra, then simplify roots and collect like terms.","Keep the final answer exact unless the question explicitly asks for a decimal."],
 pitfalls:["Do not use \\(\\sqrt a+\\sqrt b=\\sqrt{a+b}\\); this is not a valid rule.","The coefficient of \\(\\sqrt a\\) is 1 when no number is written.","Check signs carefully when expanding brackets containing surds."]
},
"12.2":{
 concept:"Rationalising the denominator means rewriting an equivalent fraction so that no surd remains in the denominator. The Cambridge coursebook treats this as a mathematical convention for exact answers.",
 rules:[
  ["\\frac{k}{\\sqrt a}\\times\\frac{\\sqrt a}{\\sqrt a}","For a single surd denominator, multiply top and bottom by that surd."],
  ["(a+\\sqrt b)(a-\\sqrt b)=a^2-b","For a two-term denominator, use the conjugate so the denominator becomes rational."],
  ["\\frac{m}{n}\\times\\frac{k}{k}=\\frac{mk}{nk}","You are multiplying by a strategic form of 1, so the value is unchanged."]
 ],
 method:["Simplify any surds first; sometimes the denominator becomes rational without further work.","For \\(a+\\sqrt b\\), multiply by \\(a-\\sqrt b\\); for \\(a-\\sqrt b\\), multiply by \\(a+\\sqrt b\\).","Expand the numerator fully and simplify the denominator using difference of two squares.","Simplify the final exact expression."],
 pitfalls:["Do not multiply only the denominator.","Use the whole conjugate, including its sign.","A rationalised answer can still contain surds in the numerator."]
},
"13.1":{
 concept:"An algebraic fraction is simplified in the same way as a numerical fraction: factor first, then cancel common factors.",
 rules:[
  ["\\frac{ab}{ac}=\\frac bc","Cancellation is cancellation of factors."],
  ["\\frac{x^m}{x^n}=x^{m-n}","Index laws apply to algebraic factors."],
  ["\\frac{(x-a)(x-b)}{(x-a)(x-c)}=\\frac{x-b}{x-c}","Factorise polynomial numerators and denominators before cancelling."]
 ],
 method:["Find numerical HCFs and common powers first.","Factorise every polynomial expression that can be factorised.","Cancel common factors only after factorisation.","Keep the original denominator restrictions in mind even if a factor cancels."],
 pitfalls:["You cannot cancel individual terms across addition or subtraction.","Do not lose excluded values from the original denominator.","Always check whether the final numerator or denominator can factorise further."]
},
"13.2":{
 concept:"The four operations with algebraic fractions use the same fraction rules as arithmetic, but factorising early usually makes the work much shorter.",
 rules:[
  ["\\frac ab\\times\\frac cd=\\frac{ac}{bd}","Multiply numerators and denominators; cancel factors before or after multiplying."],
  ["\\frac ab\\div\\frac cd=\\frac ab\\times\\frac dc","Division means multiply by the reciprocal."],
  ["\\frac ab+\\frac cd=\\frac{ad+bc}{bd}","Addition/subtraction requires a common denominator."]
 ],
 method:["For multiplication/division, factorise and cancel before expanding.","For addition/subtraction, factor denominators first and identify the lowest common denominator.","Multiply every numerator by the missing factor.","Combine numerators, then factorise the final numerator to see whether more cancellation is possible."],
 pitfalls:["Do not add denominators.","When subtracting, use brackets around an entire numerator before removing them.","The coursebook explicitly advises checking whether the final numerator can be factorised further."]
},
"14.1":{
 concept:"Constructing algebra means translating words, diagrams and relationships into expressions, equations or formulae using the shortest standard notation.",
 rules:[
  ["3x","Write the number before the variable and omit the multiplication sign."],
  ["x^2,\\;x^3","Use indices for repeated multiplication."],
  ["x+5","'The sum of x and five' means addition."],
  ["6x-2","'Six times x minus two' means multiply first, then subtract."]
 ],
 method:["Choose and define the unknown first.","Translate one phrase at a time in the order stated.","Use brackets when an operation applies to a whole expression.","For consecutive integers use \\(n,n+1\\); consecutive even integers can be \\(2n,2n+2\\).","An expression has no equals sign; an equation states equality; a formula links variables."],
 pitfalls:["Order matters in subtraction and division.","Do not write unnecessary multiplication signs.","Use brackets to protect a sum or difference being multiplied."]
},
"14.2":{
 concept:"A linear equation is solved by preserving equality: whatever operation is performed on one side must be performed on the other.",
 rules:[
  ["ax+b=c","Undo addition/subtraction before division when convenient."],
  ["a(x+b)=c","Expand brackets or divide first, depending on which is cleaner."],
  ["ax+b=cx+d","Collect variable terms on one side and constants on the other."]
 ],
 method:["Simplify both sides first: expand brackets and collect like terms.","Use inverse operations while keeping the equation balanced.","For fractional coefficients, multiply through by a common denominator.","Substitute the final value back into the original equation to check."],
 pitfalls:["A negative coefficient is part of the term.","Do not change signs merely because a term moves sides; the sign changes because an inverse operation is applied.","When forming an equation from a context, define the unknown before solving."]
},
"14.3":{
 concept:"Quadratic equations can have two, one or no real solutions. The SoW requires factorisation, completing the square and the quadratic formula.",
 rules:[
  ["ax^2+bx+c=0","Put the equation into standard form before choosing a method."],
  ["(x-p)(x-q)=0","If a product is zero, at least one factor is zero."],
  ["x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}","The quadratic formula works for any quadratic with \\(a\\ne0\\)."],
  ["x^2+2px=(x+p)^2-p^2","This is the key pattern for completing the square."]
 ],
 method:["Factorise when integer factors are visible.","Complete the square when the leading coefficient is 1 or when exact turning-point form is useful.","Use the quadratic formula when factorisation is not convenient.","Keep exact surd answers when required by the question."],
 pitfalls:["The equation must equal zero before using the zero-product rule.","Substitute signs carefully into the quadratic formula, especially when \\(b<0\\).","The \\(\\pm\\) creates two candidate solutions."]
},
"14.4":{
 concept:"A fractional equation contains one or more denominators. Clear the denominators using an LCM before solving, while respecting values that make a denominator zero.",
 rules:[
  ["x\\ne a","If a denominator contains \\(x-a\\), then \\(x=a\\) is excluded."],
  ["\\text{LCM}\\times\\text{every term}","Multiply every term on both sides by the lowest common denominator."]
 ],
 method:["Write down restrictions first.","Factor denominators if necessary and choose the LCM.","Multiply every term by the LCM so the fractions cancel.","Solve the resulting linear or quadratic equation.","Reject any solution that violates an original denominator restriction."],
 pitfalls:["Do not multiply only some terms by the LCM.","A quadratic may appear after clearing denominators.","Always check candidate solutions in the original equation."]
},
"14.5":{
 concept:"Two simultaneous equations describe two conditions that must be true at the same time. A solution is an ordered pair satisfying both.",
 rules:[
  ["\\text{intersection of two lines}","Graphically, the simultaneous solution is the point where the two lines meet."],
  ["\\text{eliminate one variable}","Make coefficients equal/opposite, then add or subtract the equations."],
  ["y=\\cdots","For substitution, express one variable in terms of the other and substitute."]
 ],
 method:["Choose elimination when coefficients line up easily.","Choose substitution when one variable is already isolated or has coefficient 1.","Graphical solutions are approximate unless the intersection lies exactly on grid values.","For word problems, define both unknowns and form two independent equations."],
 pitfalls:["Two unknowns require two independent equations.","When multiplying an equation, multiply every term.","Check the final pair in both original equations."]
},
"14.6":{
 concept:"When one simultaneous equation is linear and the other is non-linear, substitution usually produces a quadratic. This can produce two intersection points.",
 rules:[
  ["y=mx+c","Use the linear equation to replace \\(y\\) (or \\(x\\)) in the non-linear equation."],
  ["\\text{quadratic}=0","Solve the resulting quadratic, then substitute back for the second coordinate."]
 ],
 method:["Rearrange the linear equation if necessary.","Substitute it into the non-linear equation.","Solve the resulting quadratic completely.","Find the matching second coordinate for each root.","Check both ordered pairs."],
 pitfalls:["There may be two valid pairs; do not stop after the first root.","Keep pairs matched correctly.","Powers in this SoW sub-unit are no higher than two."]
},
"14.7":{
 concept:"Changing the subject means rearranging a formula so the required variable is alone on one side.",
 rules:[
  ["y=ax+b\\Rightarrow x=\\frac{y-b}{a}","Reverse the order of operations."],
  ["P=ax+bx=x(a+b)","If the subject appears twice, factor it out first."],
  ["A=\\pi r^2\\Rightarrow r=\\sqrt{A/\\pi}","Undo powers using roots."]
 ],
 method:["Identify what operations are acting on the required subject.","Undo outer operations one at a time.","If the subject occurs in several terms, collect those terms and factorise.","Clear fractions early when that simplifies the structure.","Check by substituting your rearranged expression back into the original relationship."],
 pitfalls:["Do not 'move' terms without a valid inverse operation.","When taking square roots in geometric formulae, context may require the positive root.","Keep brackets around multi-term numerators and denominators."]
},
"15.1":{
 concept:"An inequality describes a range of values rather than one exact value. The four symbols distinguish strict and inclusive boundaries.",
 rules:[
  ["x<a","Strict boundary: \\(a\\) is not included; use an open circle."],
  ["x\\le a","Inclusive boundary: \\(a\\) is included; use a filled circle."],
  ["x>a","Shade/arrow to the right on a number line."],
  ["x<a","Shade/arrow to the left on a number line."]
 ],
 method:["Read the symbol from the variable outward.","Decide whether the endpoint is included.","Place the endpoint accurately on the number line.","Shade the side containing values that satisfy the statement."],
 pitfalls:["< and > are strict; ≤ and ≥ include equality.","A compound inequality describes values between two boundaries.","Check a sample value if you are unsure which direction to shade."]
},
"15.2":{
 concept:"Solve a linear inequality like a linear equation, except that multiplying or dividing by a negative reverses the inequality sign.",
 rules:[
  ["-2x<6\\Rightarrow x>-3","Dividing by a negative reverses the sign."],
  ["a<x\\le b","For a compound inequality, apply the same operation to all three parts."]
 ],
 method:["Expand brackets and collect like terms.","Use inverse operations to isolate the variable.","Reverse the sign only when multiplying/dividing by a negative quantity.","Represent the final answer on a number line when asked.","Interpret integer/context restrictions after solving."],
 pitfalls:["Do not reverse the sign for addition or subtraction.","Keep all parts of a compound inequality balanced.","In context, the greatest/least integer solution may be what is actually required."]
},
"15.3":{
 concept:"A linear inequality in two variables represents a half-plane. The boundary line and whether that boundary is included are both important.",
 rules:[
  ["y<mx+c","Use a broken/dashed boundary because equality is not included."],
  ["y\\le mx+c","Use a solid boundary because equality is included."],
  ["\\text{test point}","Substitute a point not on the boundary to decide which side satisfies the inequality."]
 ],
 method:["Replace the inequality sign with '=' and draw the boundary line accurately.","Choose solid or dashed according to inclusion.","Test a convenient point such as \\((0,0)\\) if it is not on the boundary.","Shade the required region (or, if following the coursebook convention in a question, shade the unwanted region)."],
 pitfalls:["Do not infer the correct side from visual appearance alone; test a point.","Vertical boundaries such as \\(x=3\\) require left/right shading.","Horizontal boundaries such as \\(y=2\\) require above/below shading."]
},
"15.4":{
 concept:"A shaded feasible region can be described by listing one inequality for each boundary.",
 rules:[
  ["\\text{solid line}\\Rightarrow \\le\\text{ or }\\ge","The boundary is part of the region."],
  ["\\text{dashed line}\\Rightarrow <\\text{ or }>","The boundary is excluded."]
 ],
 method:["Find the equation of each boundary line.","Use a test point inside the required region.","Choose the inequality sign that makes the test point true.","Repeat for every boundary and list the inequalities together."],
 pitfalls:["This SoW does not include linear-programming optimisation.","The same region can require three or more simultaneous inequalities.","Check axes boundaries such as \\(x\\ge0\\) and \\(y\\ge0\\)."]
},
"16.1":{
 concept:"Unknown-angle problems are solved by identifying a geometric relationship, writing an equation, and giving the correct reason.",
 rules:[
  ["\\text{angles at a point}=360^\\circ","All angles around one point make a full turn."],
  ["\\text{angles on a straight line}=180^\\circ","Adjacent angles on a straight line are supplementary."],
  ["\\text{vertically opposite angles are equal}","Opposite angles formed by intersecting lines are equal."],
  ["\\text{triangle}=180^\\circ,\\quad \\text{quadrilateral}=360^\\circ","Use angle sums for polygons."]
 ],
 method:["Mark known equal/right angles on the diagram.","State the relationship being used before calculating.","Form an equation if the angle is algebraic.","Give the reason beside the numerical step, using proper geometric terminology."],
 pitfalls:["Use three-letter notation correctly when an angle name is required.","Do not say merely 'because it looks equal'.","Right-angle markers represent exactly \\(90^\\circ\\)."]
},
"16.2":{
 concept:"When a transversal cuts parallel lines, corresponding and alternate angles are equal while co-interior angles are supplementary.",
 rules:[
  ["\\text{corresponding angles are equal}","Often recognised by an F-type position."],
  ["\\text{alternate angles are equal}","Often recognised by a Z-type position."],
  ["\\text{co-interior angles sum to }180^\\circ","These lie on the same side of the transversal."]
 ],
 method:["Confirm that the lines are marked parallel.","Identify the relationship using its correct name.","Transfer the known angle, then use straight-line or triangle sums if needed.","In multi-step questions, write a reason for each new angle."],
 pitfalls:["F/Z/C shapes are memory aids, not accepted geometric reasons; use the words corresponding, alternate and co-interior.","Co-interior angles are not generally equal.","Parallel-arrow markings matter."]
},
"16.3":{
 concept:"Polygon angle facts come from splitting an n-sided polygon into triangles and from the full-turn total of exterior angles.",
 rules:[
  ["\\text{interior sum}=(n-2)180^\\circ","An n-gon can be divided into \\(n-2\\) triangles."],
  ["\\text{exterior sum}=360^\\circ","One exterior angle at each vertex makes a full turn."],
  ["\\text{regular exterior}=360^\\circ/n","All exterior angles are equal in a regular polygon."],
  ["\\text{regular interior}=180^\\circ-360^\\circ/n","Interior and adjacent exterior angles are supplementary."]
 ],
 method:["Decide whether the polygon is regular.","Use the appropriate sum formula.","For reverse problems, form an equation in \\(n\\).","For irregular polygons, add known interior/exterior angles rather than assuming equality."],
 pitfalls:["Interior-angle sum is not \\(360^\\circ\\) except for a quadrilateral.","'Regular' means equal sides and equal angles.","Concave polygons use the same interior-angle-sum formula."]
},
"16.4":{
 concept:"Line symmetry describes reflection onto itself; rotational symmetry describes a shape matching itself after rotation about a centre.",
 rules:[
  ["\\text{order of rotational symmetry}=\\frac{360^\\circ}{\\text{smallest matching angle}}","Count the starting position as one match."],
  ["\\text{circle}","A circle has infinitely many lines of symmetry and infinite rotational symmetry."]
 ],
 method:["For line symmetry, imagine folding along the candidate line.","For rotational symmetry, rotate about the centre through one full turn.","Use shape properties rather than appearance alone."],
 pitfalls:["A rectangle has two lines of symmetry but rotational order 2.","A general parallelogram has rotational order 2 but no line symmetry.","Orientation matters for irregular shapes."]
},
"16.5":{
 concept:"Three-dimensional symmetry is described using planes of symmetry and axes of rotational symmetry.",
 rules:[
  ["\\text{plane of symmetry}","A plane divides a solid into mirror-image halves."],
  ["\\text{axis of rotational symmetry}","A line about which the solid can rotate and match itself."]
 ],
 method:["Identify the solid and its cross-section/base symmetry.","Imagine slicing the solid with a plane.","For rotational symmetry, consider rotations about a line through the solid.","Use correct language: prism, cylinder, pyramid, cone, plane, axis."],
 pitfalls:["A line drawn on a 2D sketch is not automatically a plane in 3D.","Prisms inherit many symmetries from their cross-section.","A cone has infinitely many vertical planes of symmetry but one main rotational axis."]
},
"17.1":{
 concept:"Metric conversions depend on dimension. A length scale factor is squared for area and cubed for volume.",
 rules:[
  ["1\\text{ m}=100\\text{ cm}","Length conversion."],
  ["1\\text{ m}^2=10\\,000\\text{ cm}^2","Square the length scale factor."],
  ["1\\text{ m}^3=1\\,000\\,000\\text{ cm}^3","Cube the length scale factor."],
  ["1\\text{ litre}=1000\\text{ cm}^3,\\quad1\\text{ m}^3=1000\\text{ litres}","Volume/capacity links."]
 ],
 method:["Write the unit relationship first.","Decide whether it is length, area or volume.","Apply the scale factor the correct number of times.","Attach the converted unit to the final value."],
 pitfalls:["Do not use ×100 for m² to cm².","Square/cube units must remain squared/cubed.","Mass and capacity use different conversion facts from geometric volume."]
},
"17.2":{
 concept:"Perimeter measures the outside boundary; area measures the surface enclosed. Perpendicular height is essential in triangle, parallelogram and trapezium formulae.",
 rules:[
  ["A_{\\triangle}=\\frac12bh","Use the perpendicular height."],
  ["A_{\\parallel}=bh","Base × perpendicular height."],
  ["A_{\\text{trap}}=\\frac12(a+b)h","\\(a,b\\) are the parallel sides."]
 ],
 method:["Mark or calculate missing lengths first.","For compound shapes, split into simple shapes or subtract cut-outs.","Keep perimeter and area calculations separate.","Use consistent units before calculating."],
 pitfalls:["A sloping side is not the height unless it is perpendicular to the base.","Area units are squared.","Internal edges are not part of an external perimeter unless the shape has a cut-out boundary."]
},
"17.3":{
 concept:"Circle problems use radius, diameter, circumference and area. Exact answers may be left in terms of \\(\\pi\\).",
 rules:[
  ["d=2r","Diameter is twice the radius."],
  ["C=2\\pi r=\\pi d","Circumference."],
  ["A=\\pi r^2","Area."]
 ],
 method:["Identify whether the given length is a radius or diameter.","Substitute into the correct formula.","Keep \\(\\pi\\) exact until the final step unless a decimal is requested.","For reverse problems, rearrange the formula before taking a square root where needed."],
 pitfalls:["Do not use diameter in \\(\\pi r^2\\).","Area units are squared; circumference units are linear.","Round only once at the end."]
},
"17.4":{
 concept:"A sector is a fraction of a circle. Use the fraction \\(\\theta/360\\) for both arc length and sector area.",
 rules:[
  ["L=\\frac{\\theta}{360}\\,2\\pi r","Arc length."],
  ["A=\\frac{\\theta}{360}\\,\\pi r^2","Sector area."],
  ["P_{\\text{sector}}=L+2r","Sector perimeter includes both radii."],
  ["\\theta_{\\text{major}}=360^\\circ-\\theta_{\\text{minor}}","Major sectors use the remaining angle."]
 ],
 method:["Identify minor or major sector.","Find the relevant central angle.","Take the same fraction of circumference or circle area.","For perimeter, add straight radial edges separately."],
 pitfalls:["Sector perimeter is not just arc length.","For a major sector, calculate the major angle first.","Keep exact \\(\\pi\\) values if required."]
},
"18.1":{
 concept:"Statistical data should be classified and organised before it is analysed. Tables make frequencies, categories and relationships visible.",
 rules:[
  ["\\text{categorical / numerical}","Decide whether values are labels or numbers."],
  ["\\text{discrete / continuous}","Discrete values are countable; continuous values are measured."],
  ["\\text{frequency}","Number of observations in a category/class."],
  ["\\text{two-way table}","Shows two categorical variables simultaneously."]
 ],
 method:["Choose clear non-overlapping categories or class intervals.","Use tallies to reduce counting errors.","Complete row/column totals in a two-way table.","Check the grand total against the number of observations."],
 pitfalls:["Grouped intervals must not overlap.","A boundary value must belong to exactly one class.","Totals provide an important error check."]
},
"18.2":{
 concept:"Measures of centre describe a typical value; measures of spread describe variability. Different measures suit different data.",
 rules:[
  ["\\bar x=\\frac{\\sum x}{n}","Mean."],
  ["\\text{range}=\\max-\\min","Overall spread."],
  ["\\text{IQR}=Q_3-Q_1","Spread of the middle 50%."]
 ],
 method:["Order data before finding median or quartiles.","Use the median/IQR when extreme values would distort the mean/range.","Use mean when every value should contribute to the summary.","When comparing groups, comment on both centre and spread."],
 pitfalls:["The mode may not exist or may not be unique.","Quartile conventions must be applied consistently.","A larger average does not imply greater consistency."]
},
"18.3":{
 concept:"For grouped data, the exact individual values are unknown, so the mean is estimated using class midpoints.",
 rules:[
  ["m=\\frac{L+U}{2}","Class midpoint."],
  ["\\bar x\\approx\\frac{\\sum fm}{\\sum f}","Estimated grouped mean."]
 ],
 method:["Find the midpoint of each class.","Multiply each midpoint by its class frequency.","Add the \\(fm\\) products and divide by total frequency.","State or understand that the answer is an estimate."],
 pitfalls:["Do not use class boundaries themselves instead of midpoints.","The wider the classes, the more information about individual values is lost.","Check \\(\\sum f\\) carefully."]
},
"18.4":{
 concept:"The modal class is the class with greatest frequency. The median class is the class containing the middle observation.",
 rules:[
  ["\\text{modal class}=\\text{class with highest frequency}","Use frequency, not the numerical size of the class."],
  ["\\text{median position}\\approx n/2","Locate this position using cumulative frequency."]
 ],
 method:["For modal class, compare frequencies.","For median class, form cumulative frequencies and find where the middle position falls.","For continuous grouped data, more advanced linear interpolation can refine an estimate."],
 pitfalls:["The syllabus names modal class explicitly; median-class questions can still appear in examinations.","Class width does not change the modal class when working from a frequency table (histograms require density)."]
},
"18.5":{
 concept:"Interpreting a table means extracting information, making valid comparisons and drawing conclusions that the data actually supports.",
 rules:[
  ["\\text{proportion}=\\frac{\\text{part}}{\\text{whole}}","Convert to percentages when comparison of differently sized groups is needed."]
 ],
 method:["Read headings and units before using values.","Use totals, proportions and differences rather than impressions.","Quote numerical evidence in an inference.","Check whether the table shows frequencies, percentages or rates."],
 pitfalls:["Do not compare raw totals when group sizes differ substantially.","An inference should not claim more than the table shows."]
},
"18.6":{
 concept:"A complete comparison between data sets normally discusses both a measure of centre and a measure of spread.",
 rules:[
  ["\\text{higher median/mean}\\Rightarrow\\text{higher typical value}","State the actual values."],
  ["\\text{smaller IQR/range}\\Rightarrow\\text{more consistent}","State the actual values."]
 ],
 method:["Choose comparable measures for both groups.","Compare typical value first.","Compare spread/consistency second.","Write the conclusion in the context of the data."],
 pitfalls:["Do not say one set is 'better' unless the context defines what better means.","Two means alone do not tell you about consistency."]
},
"18.7":{
 concept:"Statistical conclusions are limited by how the data was collected and what variables were measured.",
 rules:[
  ["\\text{sample}\\ne\\text{population}","A sample may not represent the whole population."],
  ["\\text{association}\\ne\\text{causation}","Observed differences or patterns do not automatically identify a cause."]
 ],
 method:["Check sample size and sampling method.","Look for missing groups, non-response, self-selection or measurement bias.","Separate what is observed from what is inferred.","Use cautious language such as 'suggests' when evidence is limited."],
 pitfalls:["A large sample can still be biased.","A graph or table can be accurate but used to support an over-strong conclusion."]
},
"19.1":{
 concept:"Different statistical diagrams serve different purposes. Construction conventions matter because poor scales, missing keys or incorrect angles can mislead.",
 rules:[
  ["\\text{pie angle}=\\frac{f}{\\sum f}\\times360^\\circ","Each sector represents a fraction of the total."],
  ["\\text{bar chart}","Frequency is shown by bar height; bars for categories/discrete values are separated."],
  ["\\text{stem-and-leaf}","Leaves are ordered and a key is required."],
  ["\\text{pictogram}","A key states the value of one whole symbol."]
 ],
 method:["Choose a sensible scale and label axes.","Check a pie chart totals \\(360^\\circ\\).","Order stems/leaves and include a key.","For dual/stacked bar charts, keep a common scale and clear legend."],
 pitfalls:["Do not join discrete bar-chart bars.","Partial pictogram symbols must be interpreted proportionally.","A pie chart is unsuitable for overlapping categories."]
},
"19.2":{
 concept:"A scatter diagram displays paired (bivariate) data to reveal a possible relationship between two variables.",
 rules:[
  ["(x,y)","Each observation contributes one paired point."],
  ["\\times","The SoW specifically expects plotted points to be clearly marked, for example as small crosses."]
 ],
 method:["Put the explanatory variable on the horizontal axis when appropriate.","Choose scales covering the full data range.","Plot every pair accurately.","Look for direction, strength and outliers after plotting."],
 pitfalls:["Do not join scatter points in order.","An isolated point should be identified as an outlier, not silently ignored."]
},
"19.3":{
 concept:"Correlation describes the direction and strength of an association between two variables.",
 rules:[
  ["\\text{positive}","As one variable increases, the other tends to increase."],
  ["\\text{negative}","As one variable increases, the other tends to decrease."],
  ["\\text{zero correlation}","No clear linear trend."]
 ],
 method:["State direction first, then strength where appropriate.","Comment on outliers.","Remember that correlation is evidence of association, not proof of cause and effect."],
 pitfalls:["A curved relationship can have weak linear correlation while still showing a pattern.","A third variable may explain an apparent relationship."]
},
"19.4":{
 concept:"A straight line of best fit summarises the linear trend of a scatter plot and can be used for estimates.",
 rules:[
  ["\\text{single ruled line}","The SoW says it should be drawn by inspection."],
  ["\\text{full data set}","Extend the line across the data cloud."],
  ["\\text{balanced points}","Aim for roughly even numbers above and below over the line's length."]
 ],
 method:["Ignore individual-point chasing; fit the overall pattern.","Use the line for interpolation inside the observed range.","If extrapolating, state that reliability is lower.","More able students can form an approximate equation of the line."],
 pitfalls:["Do not force the line through the origin unless the context/data supports this.","A strong correlation gives better predictions than a weak one, but predictions remain estimates."]
},
"19.5":{
 concept:"Cumulative frequency records a running total. A cumulative-frequency curve shows how many observations are at or below each upper class boundary.",
 rules:[
  ["CF_k=f_1+f_2+\\cdots+f_k","Cumulative total."],
  ["\\text{plot at upper class boundaries}","Pair each cumulative total with the upper boundary of its class."],
  ["\\text{small crosses + smooth curve}","The SoW explicitly specifies clearly marked points joined by a smooth curve."]
 ],
 method:["Calculate running totals.","Plot cumulative frequency on the vertical axis.","Plot upper class boundaries on the horizontal axis.","Join with a smooth increasing curve.","Use the curve to estimate counts/probabilities."],
 pitfalls:["Cumulative frequency cannot decrease.","Do not plot ordinary class midpoints for the cumulative graph."]
},
"19.6":{
 concept:"Median, quartiles and percentiles are read from positions on the cumulative-frequency scale, then projected across to the curve and down to the data axis.",
 rules:[
  ["Q_1:\\;0.25N","25th percentile."],
  ["\\text{median}:\\;0.50N","50th percentile."],
  ["Q_3:\\;0.75N","75th percentile."],
  ["IQR=Q_3-Q_1","Middle-50% spread."]
 ],
 method:["Find the required cumulative-frequency position.","Move horizontally to the curve.","Move vertically to the horizontal axis.","Read the approximate data value.","For a cutoff such as top 20%, read the 80th percentile."],
 pitfalls:["Graph readings are estimates.","Use total frequency N, not the highest data value, to find percentile positions."]
},
"19.7":{
 concept:"A histogram represents continuous grouped data. When class widths differ, height must be frequency density so bar area represents frequency.",
 rules:[
  ["\\text{frequency density}=\\frac{\\text{frequency}}{\\text{class width}}","Vertical-axis quantity."],
  ["\\text{frequency}=\\text{density}\\times\\text{class width}","Histogram bar area corresponds to frequency."]
 ],
 method:["Calculate every class width.","Calculate density for each class.","Draw adjacent bars over the exact class intervals.","Label the vertical axis 'Frequency density'.","Use bar area to recover frequencies."],
 pitfalls:["Do not use raw frequency as height when widths are unequal.","Histogram bars touch because the variable is continuous.","A taller bar is not necessarily a more frequent class if widths differ."]
},
"19.8":{
 concept:"Frequency-density calculations connect the frequency table and histogram in both directions.",
 rules:[
  ["d=f/w","Density."],
  ["f=dw","Frequency."],
  ["w=f/d","Class width."]
 ],
 method:["Identify which two quantities are known.","Use the appropriate rearrangement.","For partial intervals, use proportional bar area only when a uniform distribution within the class is being estimated."],
 pitfalls:["Keep class width in the same data units as the horizontal axis.","The modal class in a histogram corresponds to greatest density, not necessarily greatest frequency."]
},
"19.9":{
 concept:"Inference from a statistical diagram must be supported by what the diagram actually displays.",
 rules:[
  ["\\text{read}\\rightarrow\\text{compare}\\rightarrow\\text{infer}","Extract values first, then make the statement."]
 ],
 method:["Read scale and units carefully.","Quote numerical/visual evidence.","Distinguish observations from explanations.","Use cautious language for claims beyond the display."],
 pitfalls:["Truncated axes can exaggerate differences.","Different diagram types emphasise different aspects of data."]
},
"19.10":{
 concept:"Graphs can compare centre, spread, shape and unusual features between data sets.",
 rules:[
  ["\\text{median + IQR}","A common comparison pair for cumulative-frequency/box-style summaries."],
  ["\\text{centre + spread + shape}","Use more than one feature when the graph allows it."]
 ],
 method:["Compare typical values.","Compare consistency/spread.","Comment on skew/outliers/clusters if visible.","Support every comparison with values read from the graph."],
 pitfalls:["Do not infer individual values from a grouped graph unless justified.","A higher median does not imply lower variability."]
},
"19.11":{
 concept:"A graph can be correctly drawn yet still support only limited conclusions. Sampling, scale, extrapolation and causation all matter.",
 rules:[
  ["\\text{extrapolation}=\\text{outside observed range}","Treat with caution."],
  ["\\text{correlation}\\ne\\text{causation}","A graph alone does not prove cause."]
 ],
 method:["Inspect the sample and axes.","Ask whether the chosen graph hides information.","Check whether a prediction lies inside or outside the data range.","State limitations explicitly."],
 pitfalls:["Visual impact is not evidence by itself.","A small or biased sample limits generalisation."]
},
"20.1":{
 concept:"A function maps each allowed input to exactly one output. Function notation names the rule and lets you evaluate, describe domains and identify ranges.",
 rules:[
  ["y=f(x)","The output of function f for input x."],
  ["\\text{domain}","The set of permitted inputs."],
  ["\\text{range}","The set of outputs produced."]
 ],
 method:["Substitute the input everywhere x appears.","Respect domain restrictions such as division by zero.","For a finite domain, evaluate every allowed input to find the range.","Use mapping diagrams or graphs to visualise input-output relationships."],
 pitfalls:["\\(f(x)\\) does not mean \\(f\\times x\\).","A single input cannot map to two different outputs in a function."]
},
"20.2":{
 concept:"An inverse function undoes the effect of the original function, returning outputs to their original inputs.",
 rules:[
  ["f^{-1}(f(x))=x","Where both functions are defined."],
  ["y=f(x)\\Rightarrow x=f(y)\\text{ after swapping }x,y","A standard algebraic method for finding the inverse."]
 ],
 method:["Write \\(y=f(x)\\).","Swap x and y.","Rearrange for y.","Rename y as \\(f^{-1}(x)\\).","Check by composition if needed."],
 pitfalls:["\\(f^{-1}(x)\\) is not \\(1/f(x)\\).","A function must be one-to-one on its domain to have a single-valued inverse.","For \\(x^2\\), restrict the domain before defining an inverse."]
},
"20.3":{
 concept:"A composite function performs one function and then another. In \\(gf(x)=g(f(x))\\), f is applied first.",
 rules:[
  ["gf(x)=g(f(x))","Work from the inside outward."],
  ["fg(x)=f(g(x))","Order matters; usually \\(fg\\ne gf\\)."],
  ["ff(x)=f(f(x))","The same function can be applied repeatedly."]
 ],
 method:["Start with the input.","Apply the right-most/inner function.","Use that output as the input to the next function.","Check domain restrictions at every stage."],
 pitfalls:["Do not read \\(gf\\) left-to-right as 'g then f'.","A composite may be undefined even when the starting input is allowed for the first function."]
},
"21.1":{
 concept:"Set notation describes collections and relationships precisely. Venn diagrams give a visual model of unions, intersections, complements and subsets.",
 rules:[
  ["A\\cup B","Union: in A or B or both."],
  ["A\\cap B","Intersection: in both A and B."],
  ["A'","Complement: in the universal set but not A."],
  ["A\\subseteq B","Every element of A is also in B."]
 ],
 method:["Draw the universal set as a rectangle.","Use circles for sets.","When filling a counting Venn diagram, start with the deepest overlap, then work outward.","Use shading to represent set operations.","For two sets, remember De Morgan relationships between complements, unions and intersections."],
 pitfalls:["'Or' in set union is inclusive.","Elements outside all circles may still belong to the universal set.","Do not double-count an intersection when finding a union total."]
},
"22.1":{
 concept:"Proportion models how one quantity changes with another. The proportionality symbol is converted into an equation by introducing a constant \\(k\\).",
 rules:[
  ["y\\propto x\\Rightarrow y=kx","Direct linear proportion."],
  ["y\\propto x^2\\Rightarrow y=kx^2","Direct square proportion."],
  ["y\\propto \\sqrt x\\Rightarrow y=k\\sqrt x","Direct square-root proportion."],
  ["y\\propto \\frac1x\\Rightarrow y=\\frac{k}{x}","Inverse proportion."],
  ["y\\propto \\frac1{x^2}\\Rightarrow y=\\frac{k}{x^2}","Inverse-square proportion."]
 ],
 method:["Translate the verbal statement into proportional notation.","Replace ∝ with = and constant k.","Use a known pair of values to find k.","Write the full model before substituting the new value.","Rearrange if the unknown is x rather than y."],
 pitfalls:["Do not assume direct proportion means 'add the same amount'.","Inverse-square relationships change much faster than inverse-linear ones.","The SoW also includes cube and cube-root proportion."]
}
};

function guideFor(l){
 return LEARNING_GUIDE[l.id] || {
  concept:l.title,
  rules:[],
  method:l.obj||[],
  pitfalls:["Use the exact Cambridge IGCSE notation and check the final answer in context."]
 };
}

function sourceBadge(l){
 return '<div class="source-library">'+
   '<div><span class="source-label">Scheme of work</span><strong>'+l.id+' • '+l.title+'</strong></div>'+
   '<div><span class="source-label">Cambridge coursebook</span><strong>'+l.src+'</strong></div>'+
   '<div><span class="source-label">Exam Success companion</span><strong>'+(EXAM_SUCCESS_MAP[l.u]||"Exam Success")+'</strong></div>'+
   '<div class="source-links"><a href="'+SOW_URL+'" target="_blank" rel="noopener">Open SoW</a><a href="'+COURSEBOOK_URL+'" target="_blank" rel="noopener">Open Coursebook</a><a href="'+EXAM_SUCCESS_URL+'" target="_blank" rel="noopener">Open Exam Success</a></div>'+
  '</div>';
}

function texFormula(tex,note){
 return '<div class="rule-row"><div class="math-tex" data-tex="'+escapeAttrV4(tex)+'"></div><div>'+note+'</div></div>';
}
function escapeAttrV4(s){
 return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function typesetMathV4(root){
 root=root||document;
 if(window.katex){
  root.querySelectorAll(".math-tex[data-tex]").forEach(function(el){
   try{katex.render(el.getAttribute("data-tex"),el,{throwOnError:false,strict:"ignore",trust:false,displayMode:false});}
   catch(e){el.textContent=el.getAttribute("data-tex");}
  });
 }
 if(window.renderMathInElement){
  try{
   renderMathInElement(root,{
    delimiters:[
     {left:"\\[",right:"\\]",display:true},
     {left:"\\(",right:"\\)",display:false}
    ],
    throwOnError:false,
    strict:"ignore",
    trust:false,
    errorColor:"#8b1e1e",
    ignoredTags:["script","noscript","style","textarea","pre","code"]
   });
  }catch(e){console.warn("Math rendering skipped:",e);}
 }
}

var BOOK_BANK={
"12.1":{
 examples:[
  ex("Write \\(3\\sqrt7\\) in the form \\(\\sqrt n\\).",["Write 3 as \\(\\sqrt9\\).","\\(3\\sqrt7=\\sqrt9\\times\\sqrt7=\\sqrt{63}\\)."]),
  ex("Simplify \\(7\\sqrt5-\\sqrt{20}\\).",["\\(\\sqrt{20}=\\sqrt4\\sqrt5=2\\sqrt5\\).","\\(7\\sqrt5-2\\sqrt5=5\\sqrt5\\)."]),
  ex("Simplify \\(4\\sqrt5-2\\sqrt2+6\\sqrt5-3\\sqrt2\\).",["Group like surds.","\\((4+6)\\sqrt5+(-2-3)\\sqrt2\\).","Answer \\(10\\sqrt5-5\\sqrt2\\)."]),
  ex("The rectangle has base \\(4\\sqrt7\\), diagonal \\(2\\sqrt{35}\\) and height \\(x\\). Show that \\(x=2\\sqrt7\\).",["Use Pythagoras: \\(x^2+(4\\sqrt7)^2=(2\\sqrt{35})^2\\).","\\(x^2+112=140\\).","\\(x^2=28\\).","\\(x=\\sqrt{28}=2\\sqrt7\\) (positive length)."])
 ],
 practice:{foundation:["Simplify \\(\\sqrt{28}\\).","Simplify \\(\\sqrt{99}\\).","Simplify \\(\\sqrt{24}\\).","Simplify \\(5\\sqrt{12}\\).","Write \\(3\\sqrt6\\) in the form \\(\\sqrt n\\).","Write \\(2\\sqrt{10}\\) in the form \\(\\sqrt n\\)."],core:["Arrange \\(2\\sqrt5,3\\sqrt3,3\\sqrt5\\) in descending order without a calculator.","Use positive integers to show that \\(\\sqrt m+\\sqrt n=\\sqrt{m+n}\\) is not a valid rule.","Simplify \\(2\\sqrt3+3\\sqrt7+3\\sqrt3\\).","Simplify \\(\\sqrt{20}+\\sqrt5\\).","Simplify \\(4\\sqrt3-2\\sqrt{27}\\).","Simplify \\(3\\sqrt8+2\\sqrt{18}\\)."],extension:["Simplify \\(3+2\\sqrt3-2+3\\sqrt3\\).","Simplify \\(2\\sqrt6+3-2(1+\\sqrt6)\\).","Calculate the exact perimeter of a rectangle with sides \\(2+\\sqrt{10}\\) cm and \\(\\sqrt5\\) cm.","Prove \\(\\sqrt{12}\\sqrt{27}\\) is rational.","Find \\(a\\) if \\(a\\sqrt3=\\sqrt{192}\\).","Create an incorrect surd rule and give a counterexample."]},
 homework:[
  hw("Foundation","Simplify \\(\\sqrt{54}\\).",["\\(54=9\\times6\\).","\\(\\sqrt{54}=3\\sqrt6\\)."]),
  hw("Foundation","Write \\(6\\sqrt3\\) in the form \\(\\sqrt n\\).",["\\(6=\\sqrt{36}\\).","\\(6\\sqrt3=\\sqrt{108}\\)."]),
  hw("Core","Simplify \\(\\sqrt{75}-2\\sqrt3\\).",["\\(\\sqrt{75}=5\\sqrt3\\).","Answer \\(3\\sqrt3\\)."]),
  hw("Core","Simplify \\(3\\sqrt{27}+2\\sqrt{12}\\).",["\\(3\\sqrt{27}=9\\sqrt3\\).","\\(2\\sqrt{12}=4\\sqrt3\\).","Answer \\(13\\sqrt3\\)."]),
  hw("Extension","A square has perimeter \\(20\\sqrt3\\) cm. Find its area.",["Side \\(=5\\sqrt3\\).","Area \\(=(5\\sqrt3)^2=75\\text{ cm}^2\\)."]),
  hw("Extension","Show that \\(\\sqrt{48}-\\sqrt{27}=\\sqrt3\\).",["\\(\\sqrt{48}=4\\sqrt3\\), \\(\\sqrt{27}=3\\sqrt3\\).","Difference \\(=\\sqrt3\\)."])
 ]
},
"12.2":{
 examples:[
  ex("Write \\(\\frac1{\\sqrt{10}}\\) with a rational denominator.",["Multiply numerator and denominator by \\(\\sqrt{10}\\).","\\(\\frac1{\\sqrt{10}}=\\frac{\\sqrt{10}}{10}\\)."]),
  ex("Write \\(\\frac{3\\sqrt2}{\\sqrt6}\\) with a rational denominator.",["Multiply by \\(\\sqrt6/\\sqrt6\\).","\\(\\frac{3\\sqrt{12}}6=\\frac{3(2\\sqrt3)}6=\\sqrt3\\)."]),
  ex("Write \\(\\frac4{3\\sqrt3}\\) with a rational denominator.",["Multiply by \\(\\sqrt3/\\sqrt3\\).","\\(\\frac{4\\sqrt3}{9}\\)."]),
  ex("Rationalise \\(\\frac3{2+\\sqrt5}\\).",["Multiply by the conjugate \\(2-\\sqrt5\\).","Denominator \\((2+\\sqrt5)(2-\\sqrt5)=4-5=-1\\).","Numerator \\(=3(2-\\sqrt5)\\).","Answer \\(3\\sqrt5-6\\)."])
 ],
 practice:{foundation:["Rationalise \\(5/\\sqrt3\\).","Rationalise \\(-2/\\sqrt{11}\\).","Rationalise \\(3/\\sqrt5\\).","Simplify \\(\\sqrt5/\\sqrt{10}\\).","Simplify \\(\\sqrt{45}/\\sqrt3\\).","Simplify \\(\\sqrt2/\\sqrt{18}\\)."],core:["Rationalise \\((\\sqrt2-1)/\\sqrt2\\).","Rationalise \\(-3/(2\\sqrt5)\\).","Rationalise \\((2\\sqrt2+\\sqrt3)/\\sqrt2\\).","Rationalise \\(3/(4+\\sqrt3)\\).","Rationalise \\(\\sqrt3/(6-\\sqrt3)\\).","Rationalise \\((3+\\sqrt7)/(3-\\sqrt7)\\)."],extension:["Write \\((3+2\\sqrt7)/(\\sqrt7-2)+(2-\\sqrt7)/(\\sqrt{12}+3)\\) as a single fraction with rational denominator.","Rationalise \\((\\sqrt{18}-\\sqrt8)/(2+3\\sqrt{98})\\).","Show that \\(1/(\\sqrt5-2)=\\sqrt5+2\\).","Explain why conjugates remove a surd denominator.","Create a fraction whose conjugate method produces denominator 11.","Compare exact and decimal forms of one rationalised result."]},
 homework:[
  hw("Foundation","Rationalise \\(7/\\sqrt2\\).",["Multiply by \\(\\sqrt2/\\sqrt2\\).","Answer \\(7\\sqrt2/2\\)."]),
  hw("Foundation","Rationalise \\(1/\\sqrt6\\).",["Answer \\(\\sqrt6/6\\)."]),
  hw("Core","Rationalise \\(2/(3+\\sqrt5)\\).",["Use conjugate \\(3-\\sqrt5\\).","Denominator \\(=4\\).","Answer \\((3-\\sqrt5)/2\\)."]),
  hw("Core","Rationalise \\(5/(4-\\sqrt7)\\).",["Use \\(4+\\sqrt7\\).","Denominator \\(=9\\).","Answer \\(5(4+\\sqrt7)/9\\)."]),
  hw("Extension","Rationalise \\(2/(\\sqrt7-\\sqrt5)\\).",["Use conjugate \\(\\sqrt7+\\sqrt5\\).","Denominator \\(=2\\).","Answer \\(\\sqrt7+\\sqrt5\\)."]),
  hw("Extension","Evaluate \\(1/(2+\\sqrt3)+1/(2-\\sqrt3)\\).",["Each denominator rationalises because \\((2+\\sqrt3)(2-\\sqrt3)=1\\).","Sum \\((2-\\sqrt3)+(2+\\sqrt3)=4\\)."])
 ]
},
"13.1":{
 examples:[
  ex("Simplify \\(\\frac{3x}{6}\\).",["HCF of 3 and 6 is 3.","Divide numerator and denominator by 3: \\(x/2\\)."]),
  ex("Simplify \\(\\frac{y^2}{y^5}\\).",["The common factor is \\(y^2\\).","\\(y^2/y^5=1/y^3\\)."]),
  ex("Simplify \\(\\frac{12p^3}{16p^7}\\).",["Numerical HCF is 4; variable HCF is \\(p^3\\).","Answer \\(\\frac3{4p^4}\\)."]),
  ex("Simplify \\(\\frac{x^2-4x+3}{x^2-7x+12}\\).",["Factor numerator: \\((x-3)(x-1)\\).","Factor denominator: \\((x-3)(x-4)\\).","Cancel \\((x-3)\\).","Answer \\((x-1)/(x-4)\\), keeping original restrictions."])
 ],
 practice:{foundation:["Simplify \\(2x/4\\).","Simplify \\(3y/12\\).","Simplify \\(5x/x\\).","Simplify \\(10y/y\\).","Simplify \\(6t/36\\).","Simplify \\(9u/27\\)."],core:["Simplify \\(y^2/y^5\\).","Simplify \\(18g^4/(16k^2)\\) where possible.","Simplify \\((x^2-9)/(x-3)\\).","Simplify \\((x^2+5x)/(x)\\).","Simplify \\((x^2-16)/(x^2+x-20)\\).","State restrictions before simplifying \\((x^2-1)/(x^2-3x+2)\\)."],extension:["Simplify \\((2x^2-18)/(x^2+x-12)\\).","Simplify \\((x^3-4x)/(x^2-x-6)\\).","Explain why \\((x+5)/x\\) cannot be simplified by 'cancelling x'.","Find an expression with two excluded values that simplifies to \\((x-1)/(x+4)\\).","Solve \\((x^2-9)/(x-3)=10\\) respecting restrictions.","Explain why cancelled factors still create excluded values."]},
 homework:[
  hw("Foundation","Simplify \\(15a^2/(5a)\\).",["Cancel 5a.","Answer \\(3a\\)."]),
  hw("Foundation","Simplify \\(18p^3/(24p^5)\\).",["Reduce \\(18/24=3/4\\).","\\(p^3/p^5=1/p^2\\).","Answer \\(3/(4p^2)\\)."]),
  hw("Core","Simplify \\((x^2-25)/(x^2+3x-10)\\).",["Factor: \\((x-5)(x+5)/[(x+5)(x-2)]\\).","Answer \\((x-5)/(x-2)\\)."]),
  hw("Core","Simplify \\((2x^2+8x)/(x^2+6x+8)\\).",["Factor top \\(2x(x+4)\\), bottom \\((x+2)(x+4)\\).","Answer \\(2x/(x+2)\\)."]),
  hw("Extension","Simplify \\((x^2-6x+9)/(x^2-9)\\) and state restrictions.",["Factor \\((x-3)^2/[(x-3)(x+3)]\\).","Answer \\((x-3)/(x+3)\\).","Restrictions \\(x\\ne3,-3\\)."]),
  hw("Extension","Why is \\((x+2)/x\\ne2\\) in general?",["Because x is not a factor of the whole numerator.","For x=1 the expression equals 3, not 2."])
 ]
},
"13.2":{
 examples:[
  ex("Simplify \\(\\frac4{3x^2}\\times\\frac{14x^3}{16y^2}\\).",["Multiply numerators and denominators.","Cancel numerical and algebraic common factors.","Answer \\(\\frac{7x}{6y^2}\\)."]),
  ex("Simplify \\(\\frac{14x^4y^3}{9}\\div\\frac{7x^2y}{18}\\).",["Change division to multiplication by the reciprocal.","\\(\\frac{14x^4y^3}{9}\\times\\frac{18}{7x^2y}\\).","Cancel factors.","Answer \\(4x^2y^2\\)."]),
  ex("Write \\(\\frac{2x}{3}+\\frac{5x}{6}\\) as a single fraction.",["LCM of 3 and 6 is 6.","\\(4x/6+5x/6=9x/6=3x/2\\)."]),
  ex("Write \\(\\frac{3x+4}{x^2+x-6}-\\frac1{x+3}\\) as one fraction in lowest terms.",["Factor \\(x^2+x-6=(x+3)(x-2)\\).","Use common denominator \\((x+3)(x-2)\\).","Numerator becomes \\(3x+4-(x-2)=2x+6=2(x+3)\\).","Cancel \\(x+3\\): answer \\(2/(x-2)\\)."])
 ],
 practice:{foundation:["\\((2x/3)\\times(3x/8)\\)","\\((3y/4)\\times(2y/7)\\)","\\((2z/7)\\div(3z/4)\\)","\\(y/2+y/4\\)","\\(t/3+t/5\\)","\\(2a/7-3a/14\\)"],core:["\\((x+1)/3+(x+1)/8\\)","\\((10pqr/17)-(3pqr/8)\\)","\\(2x/3+3x/7-x/4\\)","\\((x^2-4)/(3x)\\div((x+2)/(6x))\\)","\\(1/x+2/(x+3)\\)","\\(4/(x-2)-1/(x+1)\\)"],extension:["Simplify \\((x+1)/(x-1)+(x-1)/(x+1)\\).","Find x if \\(1/x+1/(x+2)=3/4\\).","Simplify a complex fraction containing a factorised quadratic denominator.","Explain why factorising denominators before finding the LCD can reduce work.","Create two algebraic fractions whose sum simplifies by cancellation.","Check restrictions for a fully simplified result."]},
 homework:[
  hw("Foundation","Simplify \\((3x/4)\\times(8/(9x))\\).",["Cancel factors.","Answer \\(2/3\\)."]),
  hw("Foundation","Simplify \\((5a/6)\\div(10a^2/9)\\).",["Multiply by reciprocal.","Answer \\(3/(4a)\\)."]),
  hw("Core","Write \\(1/x+2/(x+1)\\) as one fraction.",["LCD \\(x(x+1)\\).","Numerator \\(x+1+2x=3x+1\\).","Answer \\((3x+1)/(x(x+1))\\)."]),
  hw("Core","Simplify \\(2/(x-1)-1/(x+1)\\).",["LCD \\((x-1)(x+1)\\).","Numerator \\(2(x+1)-(x-1)=x+3\\).","Answer \\((x+3)/(x^2-1)\\)."]),
  hw("Extension","Simplify \\((x^2-4)/(3x)\\div((x+2)/(6x))\\).",["Multiply by reciprocal.","Factor \\(x^2-4=(x-2)(x+2)\\).","Cancel to get \\(2(x-2)\\)."]),
  hw("Extension","Write \\(2/(x+3)+1/(x-3)\\) as one fraction.",["LCD \\((x+3)(x-3)\\).","Numerator \\(2(x-3)+(x+3)=3x-3\\).","Answer \\(3(x-1)/(x^2-9)\\)."])
 ]
},
"14.1":{
 examples:[
  ex("Using \\(h\\) for average height, write an expression for a height 12 cm shorter than average.",["'Shorter than' means subtract.","Answer \\(h-12\\)."]),
  ex("Using \\(h\\), write an expression for a height twice the average height.",["Twice means multiply by 2.","Standard notation: \\(2h\\)."]),
  ex("Let the unknown number be \\(x\\). Write an expression for six times \\(x\\) minus two.",["Six times x is \\(6x\\).","Then subtract 2: \\(6x-2\\)."]),
  ex("Write an equation for the product of two consecutive even numbers being 168.",["Let the first be \\(2n\\).","The next is \\(2n+2\\).","Equation: \\(2n(2n+2)=168\\)."])
 ],
 practice:{foundation:["Rewrite \\(6\\times x\\times y\\) in simplest form.","Rewrite \\(7\\times a\\times b\\).","Write the sum of x and 13.","Write a number multiplied by five.","Write the difference between 25 and x.","Write x cubed."],core:["Write a third of x plus three.","Write four times x plus twice x.","Write three more than x.","Write six less than x.","Write ten times x.","Write the sum of -8 and x."],extension:["Write the sum of x and its square.","Write a number six times its square more than x.","Write the fraction obtained when double x is divided by x+4.","Form a quadratic equation from a rectangle context.","Form simultaneous equations from a two-price context.","Create a 'think of a number' trick and prove its result algebraically."]},
 homework:[
  hw("Foundation","Write an expression for 'five more than x'.",["Answer \\(x+5\\)."]),
  hw("Foundation","Write 'three times y minus 4'.",["Answer \\(3y-4\\)."]),
  hw("Core","Two consecutive integers sum to 41. Form an equation.",["Let integers be \\(n,n+1\\).","Equation \\(n+n+1=41\\)."]),
  hw("Core","A rectangle has sides \\(x\\) and \\(x+3\\), area 70. Form an equation.",["Area \\(=x(x+3)\\).","Equation \\(x(x+3)=70\\)."]),
  hw("Extension","Two consecutive odd integers have product 143. Form an equation.",["Let first be \\(2n+1\\), next \\(2n+3\\).","Equation \\((2n+1)(2n+3)=143\\)."]),
  hw("Extension","A right triangle has legs x and x+2, hypotenuse 10. Form an equation.",["Pythagoras: \\(x^2+(x+2)^2=100\\)."])
 ]
},
"14.5":{
 examples:[
  ex("Solve graphically: \\(x-3y=6\\) and \\(2x+y=5\\).",["For \\(x-3y=6\\): intercepts are \\((6,0)\\) and \\((0,-2)\\).","For \\(2x+y=5\\): intercepts are \\((5/2,0)\\) and \\((0,5)\\).","Draw both lines on the same axes.","They intersect at \\((3,-1)\\), so \\(x=3,y=-1\\)."]),
  ex("Solve \\(x+y=9\\), \\(x-y=3\\) by elimination.",["Add the equations: \\(2x=12\\).","\\(x=6\\).","Substitute to obtain \\(y=3\\)."]),
  ex("Solve \\(2x+3y=13\\), \\(4x-y=5\\).",["Multiply the second equation by 3: \\(12x-3y=15\\).","Add: \\(14x=28\\), so \\(x=2\\).","Substitute: \\(8-y=5\\), so \\(y=3\\)."]),
  ex("Three coffees and two teas cost 6.50; five coffees and two teas cost 9.50. Find each price.",["Let coffee cost c and tea cost t.","\\(3c+2t=6.50\\), \\(5c+2t=9.50\\).","Subtract: \\(2c=3\\), so \\(c=1.50\\).","Then \\(4.50+2t=6.50\\), so \\(t=1.00\\)."])
 ],
 practice:{foundation:["Solve \\(x+y=7,\\ x-y=1\\).","Solve \\(x+y=12,\\ 2x+y=17\\).","Solve \\(2x+y=8,\\ x-y=1\\).","Find the intersection of \\(y=x+1\\) and \\(y=7-x\\).","Check \\((3,2)\\) in two given equations.","State why one equation is not enough for two unknowns."],core:["Solve \\(3x+2y=16,\\ x-y=2\\).","Solve \\(2x+5y=1,\\ 3x-y=11\\).","Solve a pair by substitution.","Solve a pair by graphing and report an approximate intersection.","Form equations from two ticket prices.","Form equations from a mixture/context problem."],extension:["Solve a pair requiring both equations to be multiplied.","Solve a three-variable extension problem.","Explain when elimination is more efficient than substitution.","Create a system with solution \\((3,-2)\\).","Show the graphical and algebraic methods agree for a chosen pair.","Analyse a pair of parallel lines and explain why there is no solution."]},
 homework:[
  hw("Foundation","Solve \\(x+y=10,\\ x-y=4\\).",["Add: \\(2x=14\\), so \\(x=7\\).","Then \\(y=3\\)."]),
  hw("Foundation","Solve \\(x+y=12,\\ 2x+y=17\\).",["Subtract first from second: \\(x=5\\).","Then \\(y=7\\)."]),
  hw("Core","Solve \\(2x+3y=12,\\ x+y=5\\).",["Double second: \\(2x+2y=10\\).","Subtract: \\(y=2\\).","Then \\(x=3\\)."]),
  hw("Core","Solve \\(3x-2y=7,\\ 4x+3y=1\\).",["Multiply first by 3 and second by 2.","\\(9x-6y=21\\), \\(8x+6y=2\\).","\\(17x=23\\), so \\(x=23/17\\).","Substitute to find \\(y=-25/17\\)."]),
  hw("Extension","Adult and child tickets satisfy \\(2a+3c=21\\), \\(a+2c=13\\). Find a,c.",["Double second: \\(2a+4c=26\\).","Subtract first: \\(c=5\\).","Then \\(a=3\\)."]),
  hw("Extension","Explain graphically why two distinct parallel linear equations have no simultaneous solution.",["Their graphs never intersect.","A simultaneous solution would have to be a point lying on both lines, so none exists."])
 ]
},
"15.3":{
 examples:[
  ex("Find the inequality represented by the unshaded region bounded by the broken line through \\((0,4)\\) and \\((2,0)\\).",["Gradient \\(=(0-4)/(2-0)=-2\\), so boundary is \\(y=-2x+4\\).","Rewrite as \\(y+2x=4\\).","Test point \\(P(3,2)\\) in the unshaded region: \\(2+6=8>4\\).","Boundary is broken, so equality is excluded.","Inequality: \\(y+2x>4\\)."]),
  ex("Represent \\(2y-3x\\le6\\) on axes.",["Boundary: \\(2y-3x=6\\), or \\(y=1.5x+3\\).","Use a solid line because equality is included.","Test \\((0,0)\\): \\(0\\le6\\) is true.","Shade the side containing the origin."]),
  ex("Represent \\(x+2y<4\\).",["Boundary \\(x+2y=4\\) has intercepts \\((4,0)\\), \\((0,2)\\).","Use a dashed line.","Test \\((0,0)\\): true, so shade that side."]),
  ex("Represent \\(x-y\\ge0\\).",["Boundary \\(x-y=0\\Rightarrow y=x\\).","Use a solid line.","Test \\((1,0)\\): \\(1\\ge0\\), so shade the side containing \\((1,0)\\)."])
 ],
 practice:{foundation:["Graph \\(y>3-3x\\).","Graph \\(3x-2y\\ge6\\).","Graph \\(x\\le5\\).","Graph \\(y>3\\).","Graph \\(0\\le x\\le2\\).","State solid/dashed boundary for each."],core:["Graph \\(x+3y\\le10\\).","Graph \\(-3<x<5\\).","Graph two inequalities and identify their overlap.","Find the inequality represented by a dashed line \\(y=2x-1\\) with the region below selected.","Find the inequality represented by a solid vertical boundary.","Use a check point to justify the chosen side."],extension:["List the inequalities defining a triangle bounded by \\(x=0,y=0,x+y=6\\).","Describe a region between two non-parallel lines.","Create a graph for a compound inequality system.","Explain why a boundary is excluded in a strict inequality.","Reverse-engineer an inequality from a graph with gradient -2.","Analyse how changing the intercept changes the region."]},
 homework:[
  hw("Foundation","Graph \\(y\\ge x-2\\): state boundary type.",["Boundary \\(y=x-2\\) is solid because equality is included."]),
  hw("Foundation","For \\(y<2x+1\\), does \\((0,0)\\) satisfy it?",["\\(0<1\\) is true.","So the origin lies in the required region."]),
  hw("Core","Find the boundary of \\(2y-3x\\le6\\).",["Replace ≤ with =: \\(2y-3x=6\\).","Rearrange \\(y=1.5x+3\\)."]),
  hw("Core","Graph \\(x+2y<4\\): give intercepts.",["Set y=0: x=4.","Set x=0: y=2.","Use a dashed line through \\((4,0),(0,2)\\)."]),
  hw("Extension","Find the inequality for the side of dashed line \\(y=-2x+4\\) containing \\((3,2)\\).",["At \\((3,2)\\), \\(2>-2(3)+4=-2\\).","So \\(y>-2x+4\\)."]),
  hw("Extension","Explain why testing a point on the boundary is useless.",["Every boundary point makes the boundary equation equal.","It cannot distinguish which half-plane satisfies >/<."])
 ]
},
"16.1":{
 examples:[
  ex("In a right-angled square-like figure, a \\(72^\\circ\\) angle and \\(x\\) together make the right angle at B. Find x.",["\\(72+x=90\\).","\\(x=18^\\circ\\).","Reason: complementary angles in a right angle."]),
  ex("A straight line is split into \\(48^\\circ\\), a right angle, and \\(x\\). Find x.",["\\(48+90+x=180\\).","\\(x=42^\\circ\\).","Reason: angles on a straight line sum to \\(180^\\circ\\)."]),
  ex("Two lines intersect. The angle vertically opposite x is \\(30^\\circ\\). Find x.",["Vertically opposite angles are equal.","\\(x=30^\\circ\\)."]),
  ex("Angles around a point are \\(x,2x,4x,150^\\circ\\). Find x.",["\\(x+2x+4x+150=360\\).","\\(7x=210\\).","\\(x=30^\\circ\\)."])
 ],
 practice:{foundation:["Find x on a straight line with 112°.","Find the vertically opposite angle to 127°.","A right angle is split into 35° and x.","A triangle has angles 48°,67°,x.","A quadrilateral has 90°,85°,112°,x.","Give the geometric reason for every answer."],core:["Angles around a point are x,x,70°,110°. Find x.","Vertically opposite angles are \\(3x+5\\) and \\(5x-35\\). Find x.","A straight line is split into \\(2x+10\\) and \\(5x-5\\). Find x.","Triangle angles are \\(x,2x,3x\\).","Quadrilateral angles are \\(x,x+20,2x,100\\).","Write a proof-style angle solution."],extension:["A right angle is split into x and \\(2x+9\\).","Adjacent angles at an intersection are \\(4x-7\\), \\(2x+31\\).","Construct an angle problem with answer 36°.","Explain vertically opposite equality using straight-line sums.","Solve a compound diagram using at least three reasons.","Use three-letter notation to identify each angle used."]},
 homework:[
  hw("Foundation","Find x if \\(x+124=180\\).",["\\(x=56^\\circ\\)."]),
  hw("Foundation","Find the vertically opposite angle to 74°.",["Answer \\(74^\\circ\\)."]),
  hw("Core","Angles around a point are 95°,80°,75°,x.",["Known total 250°.","\\(x=110^\\circ\\)."]),
  hw("Core","Triangle angles are \\(x,2x,75^\\circ\\).",["\\(3x+75=180\\).","\\(x=35^\\circ\\)."]),
  hw("Extension","Vertically opposite angles are \\(5x-8\\) and \\(3x+28\\).",["Set equal.","\\(2x=36\\).","\\(x=18\\)."]),
  hw("Extension","Quadrilateral angles are \\(x,2x,3x,60^\\circ\\).",["\\(6x+60=360\\).","\\(x=50^\\circ\\)."])
 ]
},
"16.2":{
 examples:[
  ex("In the coursebook parallel-line figure, \\(47^\\circ\\) is alternate to angle a. Find a.",["Alternate angles between parallel lines are equal.","\\(a=47^\\circ\\)."]),
  ex("In the same figure, \\(62^\\circ\\) is alternate to angle c. Find c.",["Alternate angles are equal.","\\(c=62^\\circ\\)."]),
  ex("Angles a, b and c lie on a straight line. Using \\(a=47^\\circ,c=62^\\circ\\), find b.",["\\(a+b+c=180^\\circ\\).","\\(47+b+62=180\\).","\\(b=71^\\circ\\)."]),
  ex("Two co-interior angles are \\(3x+10\\) and \\(5x+2\\). Find x.",["Co-interior angles sum to 180°.","\\(3x+10+5x+2=180\\).","\\(8x=168\\).","\\(x=21\\)."])
 ],
 practice:{foundation:["Find a corresponding angle equal to 112°.","Find an alternate angle equal to 39°.","Find a co-interior partner of 68°.","State the reason for each.","Identify corresponding/alternate/co-interior from three diagrams.","Find x if corresponding angles are x+18 and 70."],core:["Solve a multi-step parallel-line triangle problem.","Find x if alternate angles are \\(3x+5\\), \\(5x-35\\).","Find x if co-interior angles are \\(2x+20\\), \\(4x+10\\).","Combine corresponding angles with a straight line.","Combine alternate angles with triangle sum.","Use correct geometric reason wording."],extension:["Prove two lines are parallel using equal alternate angles.","Create a diagram in which corresponding, alternate and co-interior facts are all used.","Find three unknowns in a multi-transversal diagram.","Explain why F/Z/C are memory aids rather than reasons.","Solve an algebraic parallel-line proof.","Connect parallel-line angle work to an interior-angle polygon problem."]},
 homework:[
  hw("Foundation","A corresponding angle is 58°. Find its match.",["Corresponding angles are equal.","Answer 58°."]),
  hw("Foundation","One co-interior angle is 117°. Find the other.",["\\(180-117=63^\\circ\\)."]),
  hw("Core","Alternate angles are \\(3x+7\\) and \\(5x-21\\). Find x.",["Set equal: \\(3x+7=5x-21\\).","\\(28=2x\\).","\\(x=14\\)."]),
  hw("Core","Co-interior angles are \\(4x+10\\), \\(2x+20\\).",["Sum to 180: \\(6x+30=180\\).","\\(x=25\\)."]),
  hw("Extension","Explain why equal alternate angles can establish parallel lines.",["The converse of the alternate-angle property applies: if a transversal creates equal alternate angles, the two lines are parallel."]),
  hw("Extension","A straight-line angle b lies between alternate angles 47° and 62°. Find b.",["\\(47+b+62=180\\).","\\(b=71^\\circ\\)."])
 ]
},
"17.4":{
 examples:[
  ex("For a sector with radius 4 cm and major angle \\(360^\\circ-65^\\circ\\), find its area.",["Major angle \\(=295^\\circ\\).","Area \\(=\\frac{295}{360}\\pi(4)^2\\).","\\(\\approx41.2\\text{ cm}^2\\)."]),
  ex("For the same major sector, find its perimeter.",["Arc length \\(=\\frac{295}{360}\\times2\\pi\\times4\\).","Add two radii: \\(+8\\).","Perimeter \\(\\approx28.6\\text{ cm}\\)."]),
  ex("Find area and arc length for radius 6 cm, angle 40°.",["Area \\(=(40/360)\\pi36=4\\pi\\text{ cm}^2\\).","Arc \\(=(40/360)12\\pi=4\\pi/3\\text{ cm}\\)."]),
  ex("An arc has length \\(5\\pi\\) cm in a circle of radius 12 cm. Find the central angle.",["\\(5\\pi=(\\theta/360)24\\pi\\).","Cancel \\(\\pi\\): \\(5=\\theta/15\\).","\\(\\theta=75^\\circ\\)."])
 ],
 practice:{foundation:["Find area and perimeter of a 40° sector, r=6 cm.","Find a 45° sector area with radius 8 cm.","Find arc length for r=3.2 cm, angle 15°.","Find a semicircle area for diameter 17.2 cm.","Find a quadrant perimeter for radius 15.4 m.","Find major angle when minor angle is 65°."],core:["Find area and perimeter of the coursebook 'pac-man' style major sector.","Find coloured sector area and arc length for 70°, r=18 cm.","Find a 120° sector with radius 8.2 cm.","Find a major sector with missing angle 95°, r=6.4 cm.","Find angle given sector area.","Find radius given arc length."],extension:["A sector has equal numerical area and arc length; form a relationship.","Find sector angle from perimeter and radius.","Compare exact and rounded sector answers.","Create a compound shape from a sector and rectangle.","Find the area remaining after a sector is removed from a circle.","Solve a reverse major-sector problem."]},
 homework:[
  hw("Foundation","Find arc length for r=10 cm, angle 72°.",["\\((72/360)2\\pi10=4\\pi\\text{ cm}\\)."]),
  hw("Foundation","Find area for r=6 cm, angle 120°.",["\\((120/360)36\\pi=12\\pi\\text{ cm}^2\\)."]),
  hw("Core","Find perimeter of a 90° sector, r=8 cm.",["Arc \\(=4\\pi\\).","Perimeter \\(=16+4\\pi\\text{ cm}\\)."]),
  hw("Core","A major sector has minor angle 80°. Find major angle.",["\\(360-80=280^\\circ\\)."]),
  hw("Extension","Arc length is \\(7\\pi\\), r=14. Find angle.",["\\(7\\pi=(\\theta/360)28\\pi\\).","\\(\\theta=90^\\circ\\)."]),
  hw("Extension","Sector area is \\(25\\pi\\), angle 144°. Find r.",["\\(25=(144/360)r^2=(2/5)r^2\\).","\\(r^2=62.5\\).","\\(r=5\\sqrt{2.5}\\) cm."])
 ]
},
"19.1":{
 examples:[
  ex("The homework scores of 20 students are 20,20,15,20,17,16,18,18,20,15,20,18,19,17,18,20,19,18,20,18. Represent the information using a bar chart.",["First tabulate frequencies: 15→2, 16→1, 17→2, 18→6, 19→2, 20→7.","Place score on the horizontal axis.","Place frequency on the vertical axis.","Draw separated bars of heights 2,1,2,6,2,7."]),
  ex("A pie-chart sector is a right angle and the total is 120 students. How many chose that sector?",["Right angle \\(=90^\\circ\\).","\\(90/360=1/4\\).","\\(1/4\\times120=30\\).","30 students."]),
  ex("36 students choose UK 9, France 6, Spain 11, Other 10. Find pie-chart angles.",["There are 36 students, so each student represents \\(10^\\circ\\).","UK 90°, France 60°, Spain 110°, Other 100°.","Check: total 360°."]),
  ex("Construct a stem-and-leaf diagram for 12,15,18,21,21,24,29,31,34.",["Use tens as stems.","Order leaves.","Include a key such as \\(2|4=24\\)."])
 ],
 practice:{foundation:["Make a frequency table from 2,3,3,4,4,4,5.","Draw a bar chart for frequencies 3,5,7,4.","Find pie angle for 12 out of 48.","Find pie angle for 9 out of 36.","Write a key for a stem-and-leaf diagram.","A pictogram symbol represents 8 people; interpret 2.5 symbols."],core:["Construct a stem-and-leaf for 11,14,17,18,22,24,24,29,31.","Find all pie angles for frequencies 5,7,8,10.","Design a dual bar chart.","Explain why discrete bars are separated.","Calculate frequencies from partial pictogram symbols.","Compare what a bar chart and pie chart emphasise."],extension:["A pie sector is 126°. Find fraction and percentage.","Find a missing pie sector from the other angles.","Create a back-to-back stem-and-leaf.","Explain how a truncated bar-chart axis can mislead.","Choose the best diagram for two contexts and justify.","Represent the same data in two valid ways and compare."]},
 homework:[
  hw("Foundation","14 of 56 responses are in one category. Find pie angle.",["\\(14/56=1/4\\).","Angle \\(=90^\\circ\\)."]),
  hw("Foundation","One pictogram symbol represents 6 students. What do 3.5 symbols represent?",["\\(3.5\\times6=21\\)."]),
  hw("Core","Write 13,14,18,21,21,25,29 as a stem-and-leaf.",["Stem 1: 3,4,8.","Stem 2: 1,1,5,9.","Add a key."]),
  hw("Core","Frequencies 8,12,10 total 30. Find pie angles.",["Each item represents 12°.","Angles 96°,144°,120°."]),
  hw("Extension","A pie sector is 54°. Find percentage.",["\\(54/360=0.15\\).","15%."]),
  hw("Extension","Explain why a truncated bar-chart axis may be misleading.",["It can visually exaggerate small differences.","Always read the numerical scale."])
 ]
},
"19.2":{
 examples:[
  ex("A scatter diagram shows foot length generally increasing with height. Describe the correlation.",["The relationship is positive because both variables tend to increase together.","The points are reasonably close to a trend, so the correlation is fairly strong."]),
  ex("What should a line of best fit look like?",["Use one straight ruled line by inspection.","Extend it across the entire data set.","Aim for approximately equal numbers of points on either side over its length."]),
  ex("A height of 164 cm corresponds to a foot length of about 26 cm on the fitted line. What kind of estimate is this?",["164 cm lies inside the collected data range.","This is interpolation.","The estimate is more defensible than a far-out extrapolation, though still approximate."]),
  ex("Why is predicting a foot length for height 195 cm unreliable when no heights above 183.4 cm were collected?",["195 cm lies outside the observed range.","Extending the line beyond collected data is extrapolation.","The trend may not continue in the same way, so reliability is lower."])
 ],
 practice:{foundation:["Classify an upward scatter trend.","Classify a downward trend.","Classify a random cloud.","Identify an outlier.","State what bivariate data means.","Plot given pairs as small crosses."],core:["Describe strength and direction of four scatter plots.","Draw a line of best fit by eye.","Use the line for interpolation.","Explain why it need not pass through any point.","Comment on an outlier.","Distinguish interpolation from extrapolation."],extension:["Explain why correlation does not prove causation.","Give a third variable for ice-cream sales and sunburn cases.","Estimate an equation for a line of best fit.","Discuss effect of an extreme outlier.","Design data likely to show zero correlation.","Critique a prediction beyond the observed range."]},
 homework:[
  hw("Foundation","A scatter plot falls from left to right. State correlation.",["Negative correlation."]),
  hw("Foundation","What is an outlier?",["A point noticeably away from the main pattern."]),
  hw("Core","Why extend a best-fit line across the whole data cloud?",["To represent the overall trend rather than a small local section."]),
  hw("Core","Why is interpolation usually safer than extrapolation?",["It stays within the range supported by observed data."]),
  hw("Extension","Height and vocabulary correlate in children. Give a plausible third variable.",["Age: older children tend to be taller and have larger vocabularies."]),
  hw("Extension","Why can strong correlation still give uncertain individual predictions?",["Individual points vary around the trend line; correlation summarises an overall pattern."])
 ]
},
"19.5":{
 examples:[
  ex("A cumulative frequency curve represents 200 candidates. Only scores above the 80th percentile get an interview. Find the cumulative-frequency position to read.",["\\(80\\%\\) of 200 is \\(0.8\\times200=160\\).","Read the test score where the curve has cumulative frequency 160."]),
  ex("The curve gives a score of about 35 at cumulative frequency 160. Interpret this.",["The 80th percentile is approximately 35.","Candidates must score above 35 to be invited."]),
  ex("For 80 observations, state the positions of \\(Q_1\\), median and \\(Q_3\\).",["\\(Q_1=20\\)th value.","Median = 40th value.","\\(Q_3=60\\)th value."]),
  ex("Why are cumulative-frequency graph readings estimates?",["The original data is grouped.","The smooth curve interpolates between plotted cumulative totals.","Exact individual values are not known."])
 ],
 practice:{foundation:["Find cumulative totals for 4,7,5,9.","For 60 values, state median position.","For 80 values, state Q1 and Q3 positions.","State which class boundary is plotted.","Explain why CF never decreases.","Plot four cumulative points."],core:["Complete a CF table.","Draw a smooth curve from upper boundaries.","Read a median.","Read Q1,Q3 and IQR.","Estimate the 90th percentile.","Estimate number above a threshold."],extension:["Use CF to estimate a probability.","Compare two CF curves using median and IQR.","Find a top-15% cutoff.","Explain why curve readings are estimates.","Explain why upper boundaries are used.","Assess reliability when the curve is steep around a percentile."]},
 homework:[
  hw("Foundation","Frequencies 3,5,8,4. Find cumulative frequencies.",["3,8,16,20."]),
  hw("Foundation","100 values: median CF position?",["50."]),
  hw("Core","120 values: Q1 and Q3 positions?",["30 and 90."]),
  hw("Core","A curve gives Q1=18,Q3=31. Find IQR.",["13."]),
  hw("Extension","Top 10% of 250 receive an award. Which CF gives the cutoff?",["90% are at/below cutoff.","\\(0.9\\times250=225\\)."]),
  hw("Extension","Why are graph answers approximate?",["Grouped data loses exact individual values and the curve interpolates between cumulative points."])
 ]
},
"19.7":{
 examples:[
  ex("The class \\(140\\le h\\le150\\) has frequency 15. Find frequency density.",["Class width = 10.","Density \\(=15/10=1.5\\)."]),
  ex("The class \\(160<h\\le165\\) has frequency 20. Find density.",["Class width = 5.","Density \\(=20/5=4\\)."]),
  ex("A histogram bar from 150 to 160 has density 3.5. Find frequency.",["Width = 10.","Frequency \\(=3.5\\times10=35\\)."]),
  ex("Why can two classes with equal frequency have different histogram heights?",["Histogram height is frequency density, not frequency.","A narrower class needs greater height so its bar area still represents the same frequency."])
 ],
 practice:{foundation:["Find density for f=12,width=4.","Find density for f=18,width=6.","Find frequency for density 2.5,width=8.","Find class width 30–45.","State vertical-axis label.","Explain what bar area represents."],core:["Find frequency for density 1.8,width=15.","Find width for frequency24,density3.","Complete a table with missing density.","Complete a histogram from a table.","Recover missing frequencies.","Identify modal class from density."],extension:["Two bars have equal area but different widths. Compare frequencies.","Find missing bar height from total frequency.","Estimate percentage above a threshold cutting through a class.","Explain unequal heights for equal frequencies.","Design data for a specified histogram.","Critique a histogram drawn with gaps."]},
 homework:[
  hw("Foundation","Frequency 21,width7. Find density.",["3."]),
  hw("Foundation","Density1.5,width12. Find frequency.",["18."]),
  hw("Core","Frequency30,density2.5. Find width.",["12."]),
  hw("Core","Class 50–65 has frequency24. Find density.",["Width15.","Density1.6."]),
  hw("Extension","A histogram bar area is20. Find its frequency.",["Histogram area represents frequency, so 20."]),
  hw("Extension","Why use frequency density for unequal widths?",["So bar area is proportional to frequency."])
 ]
},
"20.3":{
 examples:[
  ex("Given \\(f(x)=x+6\\) and \\(g(x)=x-3\\), find \\(fg(x)\\) and \\(gf(x)\\).",["\\(fg(x)=f(x-3)=x+3\\).","\\(gf(x)=g(x+6)=x+3\\)."]),
  ex("Given \\(f(x)=2x\\), \\(g(x)=-x\\), find \\(gf(1)\\).",["Apply f first: \\(f(1)=2\\).","Then g: \\(g(2)=-2\\)."]),
  ex("Given \\(f(x)=3x+1\\), find \\(ff(x)\\).",["\\(ff(x)=f(3x+1)\\).","\\(=3(3x+1)+1=9x+4\\)."]),
  ex("Given \\(f(x)=-x\\), \\(g(x)=x-1\\), \\(h(x)=1/(x+2)\\), show why \\(hgf(1)\\) cannot be evaluated.",["\\(f(1)=-1\\).","\\(g(-1)=-2\\).","\\(h(-2)=1/0\\), undefined.","So the composite is undefined at 1."])
 ],
 practice:{foundation:["For f=x+6,g=x-3, find fg(x).","Find gf(x).","For f=2x,g=-x, find gf(x).","Find fg(2).","Find ff(4).","State which function is applied first in gf(x)."],core:["Given f=3x+1,h=6x², find hf(x).","Find fh(x).","Given g=x²+1,h=2x+3, find gh(1).","Find hg(1).","Given f=8-x²,g=x²-8, find ff(x).","Find gg(x)."],extension:["Given f=2x-5,g=1/x evaluate gf(5/7).","Evaluate gf(4).","For f=x⁴,g=√(x²+36), find fg(x).","Show a composite is undefined at a specified input.","Construct functions where fg≠gf.","Solve fg(x)=a for a given value."]},
 homework:[
  hw("Foundation","f=x+5,g=2x. Find gf(3).",["f(3)=8.","g(8)=16."]),
  hw("Foundation","f=3x-1. Find ff(2).",["f(2)=5.","f(5)=14."]),
  hw("Core","f=x²,g=x-4. Find fg(x).",["\\(fg(x)=(x-4)^2\\)."]),
  hw("Core","f=2x+1,g=x². Find gf(x).",["\\(gf(x)=(2x+1)^2\\)."]),
  hw("Extension","f=1/x,g=x-2. Where is fg undefined?",["\\(fg(x)=1/(x-2)\\).","Undefined at x=2."]),
  hw("Extension","f=x+1,g=2x. Solve fg(x)=11.",["\\(fg(x)=2x+1\\).","\\(x=5\\)."])
 ]
},
"21.1":{
 examples:[
  ex("Let \\(\\xi=\\{1,2,3,4,5,6,7,8,9,10\\}\\), \\(A=\\{1,2,3,4,5,6,7\\}\\), \\(B=\\{4,5,8\\}\\). Place the elements in a Venn diagram.",["Intersection first: \\(A\\cap B=\\{4,5\\}\\).","A only: \\(1,2,3,6,7\\).","B only: 8.","Outside both: 9,10."]),
  ex("Shade \\(A\\cap B\\).",["Intersection means elements in both sets.","Shade only the overlapping lens."]),
  ex("Shade \\(A\\cup B\\).",["Union means in A or B or both.","Shade both circles including the overlap."]),
  ex("In a class, 18 study French,15 Spanish,7 both. Find the number studying at least one.",["\\(n(F\\cup S)=18+15-7\\).","Subtract the overlap once because it was counted twice.","Answer 26."])
 ],
 practice:{foundation:["List the union of {1,2,3} and {3,4}.","List the intersection.","Find a complement in universal set 1–10.","Shade A∩B.","Shade A∪B.","Describe A' in words."],core:["30 students:19 football,16 basketball,8 both. Find at least one.","Find neither given a universal total.","Complete a two-set Venn diagram from region counts.","Use notation for 'in B but not A'.","Interpret a shaded complement.","Apply a simple subset relation."],extension:["Complete a three-set Venn diagram from totals.","Use De Morgan's law.","Solve for an unknown overlap.","Explain why the deepest overlap is filled first.","Translate a verbal condition into notation.","Check a set identity with a small universal set."]},
 homework:[
  hw("Foundation","A={1,2,5},B={2,3,5}. Find A∩B.",["{2,5}."]),
  hw("Foundation","Find A∪B for the same sets.",["{1,2,3,5}."]),
  hw("Core","20 like tea,14 coffee,6 both. Find tea or coffee.",["\\(20+14-6=28\\)."]),
  hw("Core","Universal set 1–12; A=even numbers. Find A'.",["{1,3,5,7,9,11}."]),
  hw("Extension","Universal total50,n(A)=28,n(B)=25,n(A∩B)=10. Find neither.",["Union \\(=28+25-10=43\\).","Neither \\(=7\\)."]),
  hw("Extension","State De Morgan's law for the complement of a union.",["\\((A\\cup B)'=A'\\cap B'\\)."])
 ]
}
};

function upgradedBank(l){
 return BOOK_BANK[l.id] || deepTextbookBank(l) || specialisedBank(l.type) || bank(l.type);
}

function bookDiagramV4(l,i){
 var id=l.id;
 if(id==="12.1" && i===3){
  return '<svg class="diagram book-redraw" viewBox="0 0 650 300" aria-label="Coursebook surd rectangle"><rect x="145" y="55" width="360" height="180" fill="#fff" stroke="#172f39" stroke-width="4"/><line x1="145" y1="55" x2="505" y2="235" stroke="#c84d3a" stroke-width="4"/><path d="M145 215 h20 v20" fill="none" stroke="#172f39" stroke-width="3"/><path d="M485 55 v20 h20" fill="none" stroke="#172f39" stroke-width="3"/><text x="285" y="270" font-size="25">4√7</text><text x="515" y="150" font-size="25">x</text><text x="285" y="135" font-size="25">2√35</text></svg>';
 }
 if(id==="14.5" && i===0){
  return '<svg class="diagram book-redraw" viewBox="0 0 650 430" aria-label="Coursebook simultaneous equations graph"><g stroke="#d9e7ec" stroke-width="1">'+Array.from({length:13},function(_,k){return '<line x1="'+(70+k*40)+'" y1="45" x2="'+(70+k*40)+'" y2="365"/>';}).join("")+Array.from({length:9},function(_,k){return '<line x1="70" y1="'+(45+k*40)+'" x2="550" y2="'+(45+k*40)+'"/>';}).join("")+'</g><line x1="70" y1="285" x2="570" y2="285" stroke="#172f39" stroke-width="3"/><line x1="150" y1="385" x2="150" y2="35" stroke="#172f39" stroke-width="3"/><line x1="150" y1="365" x2="390" y2="45" stroke="#c84d3a" stroke-width="4"/><line x1="70" y1="365" x2="550" y2="205" stroke="#c84d3a" stroke-width="4"/><circle cx="270" cy="325" r="7" fill="#18323d"/><text x="282" y="346" font-size="20">(3, −1)</text><text x="385" y="92" font-size="18">2x + y = 5</text><text x="415" y="250" font-size="18">x − 3y = 6</text></svg>';
 }
 if(id==="15.3" && i===0){
  return '<svg class="diagram book-redraw" viewBox="0 0 620 420" aria-label="Coursebook inequality boundary"><g stroke="#e0edf1" stroke-width="1">'+Array.from({length:11},function(_,k){return '<line x1="'+(80+k*45)+'" y1="40" x2="'+(80+k*45)+'" y2="355"/>';}).join("")+Array.from({length:8},function(_,k){return '<line x1="80" y1="'+(40+k*45)+'" x2="560" y2="'+(40+k*45)+'"/>';}).join("")+'</g><line x1="80" y1="265" x2="570" y2="265" stroke="#172f39" stroke-width="3"/><line x1="260" y1="365" x2="260" y2="35" stroke="#172f39" stroke-width="3"/><line x1="170" y1="40" x2="395" y2="355" stroke="#c84d3a" stroke-width="4" stroke-dasharray="8 8"/><circle cx="395" cy="175" r="6" fill="#18323d"/><text x="410" y="170" font-size="22">P(3,2)</text><text x="205" y="72" font-size="20">y = −2x + 4</text></svg>';
 }
 if(id==="16.1"){
  if(i===0)return '<svg class="diagram book-redraw" viewBox="0 0 600 330"><rect x="150" y="70" width="290" height="190" fill="#fff" stroke="#172f39" stroke-width="4"/><line x1="150" y1="260" x2="440" y2="180" stroke="#172f39" stroke-width="4"/><path d="M150 230 h30 v30" fill="none" stroke="#172f39" stroke-width="3"/><text x="180" y="230" font-size="25">72°</text><text x="145" y="205" font-size="25">x</text></svg>';
  if(i===1)return '<svg class="diagram book-redraw" viewBox="0 0 600 330"><line x1="250" y1="40" x2="250" y2="290" stroke="#172f39" stroke-width="5"/><line x1="250" y1="160" x2="410" y2="65" stroke="#172f39" stroke-width="5"/><line x1="250" y1="160" x2="420" y2="265" stroke="#172f39" stroke-width="5"/><path d="M250 125 h35 v35" fill="none" stroke="#172f39" stroke-width="3"/><text x="295" y="122" font-size="25">x</text><text x="292" y="230" font-size="25">48°</text></svg>';
  return '<svg class="diagram book-redraw" viewBox="0 0 600 330"><line x1="150" y1="60" x2="450" y2="275" stroke="#172f39" stroke-width="5"/><line x1="365" y1="40" x2="240" y2="300" stroke="#172f39" stroke-width="5"/><text x="310" y="165" font-size="25">x</text><text x="345" y="215" font-size="25">30°</text></svg>';
 }
 if(id==="16.2"){
  return '<svg class="diagram book-redraw" viewBox="0 0 680 330"><line x1="80" y1="80" x2="590" y2="80" stroke="#172f39" stroke-width="4"/><line x1="80" y1="240" x2="590" y2="240" stroke="#172f39" stroke-width="4"/><line x1="235" y1="25" x2="340" y2="295" stroke="#c84d3a" stroke-width="5"/><path d="M150 76 l18 -8 v16 z" fill="#172f39"/><path d="M450 76 l18 -8 v16 z" fill="#172f39"/><path d="M150 236 l18 -8 v16 z" fill="#172f39"/><path d="M450 236 l18 -8 v16 z" fill="#172f39"/><text x="245" y="125" font-size="24">47°</text><text x="300" y="215" font-size="24">a</text><text x="300" y="120" font-size="24">b</text><text x="325" y="215" font-size="24">c</text></svg>';
 }
 if(id==="17.4"){
  var major=i<2;
  if(major)return '<svg class="diagram book-redraw" viewBox="0 0 520 360"><circle cx="250" cy="180" r="125" fill="#f6d92f" stroke="#172f39" stroke-width="4"/><path d="M250 180 L250 305 A125 125 0 0 1 363 233 Z" fill="#fff" stroke="#172f39" stroke-width="4"/><text x="280" y="245" font-size="24">65°</text><text x="255" y="270" font-size="22">4 cm</text><text x="130" y="95" font-size="20">major sector</text></svg>';
  return diagramFor("sector");
 }
 if(id==="19.1" && i===0){
  var hs=[2,1,2,6,2,7];
  return '<svg class="diagram book-redraw" viewBox="0 0 660 420"><line x1="85" y1="345" x2="600" y2="345" stroke="#172f39" stroke-width="3"/><line x1="85" y1="345" x2="85" y2="45" stroke="#172f39" stroke-width="3"/><text x="18" y="55" font-size="18">Frequency</text><text x="315" y="395" font-size="18">Score</text>'+hs.map(function(h,j){return '<rect x="'+(120+j*75)+'" y="'+(345-h*38)+'" width="46" height="'+(h*38)+'" fill="#777" stroke="#172f39" stroke-width="2"/><text x="'+(132+j*75)+'" y="370" font-size="17">'+(15+j)+'</text>';}).join("")+'</svg>';
 }
 if(id==="19.1" && i===1){
  return '<svg class="diagram book-redraw" viewBox="0 0 520 360"><circle cx="250" cy="180" r="125" fill="#fff" stroke="#172f39" stroke-width="4"/><path d="M250 180 L250 55 A125 125 0 0 1 375 180 Z" fill="#eef8fb" stroke="#172f39" stroke-width="3"/><path d="M250 180 h30 v-30" fill="none" stroke="#172f39" stroke-width="3"/><text x="305" y="120" font-size="24">A</text><text x="195" y="285" font-size="20">120 students total</text></svg>';
 }
 if(id==="19.2"){
  var pos=[[130,285],[190,245],[235,235],[300,185],[350,165],[430,120],[520,90]];
  var neg=[[135,80],[190,115],[250,135],[305,185],[370,190],[440,245],[520,270]];
  var pts=i===1?neg:pos;
  return '<svg class="diagram book-redraw" viewBox="0 0 680 390"><line x1="80" y1="325" x2="620" y2="325" stroke="#172f39" stroke-width="3"/><line x1="80" y1="325" x2="80" y2="45" stroke="#172f39" stroke-width="3"/>'+pts.map(function(p){return '<g stroke="#2563eb" stroke-width="3"><line x1="'+(p[0]-6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]+6)+'" y2="'+(p[1]+6)+'"/><line x1="'+(p[0]+6)+'" y1="'+(p[1]-6)+'" x2="'+(p[0]-6)+'" y2="'+(p[1]+6)+'"/></g>';}).join("")+(i===2?'<line x1="115" y1="290" x2="565" y2="70" stroke="#c84d3a" stroke-width="3"/>':'')+'</svg>';
 }
 if(id==="19.5"){
  return '<svg class="diagram book-redraw" viewBox="0 0 700 430"><line x1="85" y1="350" x2="640" y2="350" stroke="#172f39" stroke-width="3"/><line x1="85" y1="350" x2="85" y2="45" stroke="#172f39" stroke-width="3"/><text x="12" y="40" font-size="18">Cumulative frequency</text><text x="300" y="405" font-size="18">Test score</text><path d="M90 345 C175 340,240 315,300 270 C360 220,405 130,470 85 C520 55,575 48,625 45" fill="none" stroke="#c84d3a" stroke-width="4"/><line x1="85" y1="105" x2="455" y2="105" stroke="#172f39" stroke-width="2" stroke-dasharray="7 7"/><line x1="455" y1="105" x2="455" y2="350" stroke="#172f39" stroke-width="2" stroke-dasharray="7 7"/><text x="45" y="112" font-size="18">160</text><text x="445" y="374" font-size="18">35</text></svg>';
 }
 if(id==="19.7"){
  return '<svg class="diagram book-redraw" viewBox="0 0 720 430"><line x1="85" y1="350" x2="660" y2="350" stroke="#172f39" stroke-width="3"/><line x1="85" y1="350" x2="85" y2="45" stroke="#172f39" stroke-width="3"/><text x="8" y="42" font-size="18">Frequency density</text><text x="300" y="405" font-size="18">Height (cm)</text><rect x="100" y="245" width="90" height="105" fill="#91c83e" stroke="#172f39" stroke-width="2"/><rect x="190" y="105" width="90" height="245" fill="#91c83e" stroke="#172f39" stroke-width="2"/><rect x="325" y="90" width="45" height="260" fill="#91c83e" stroke="#172f39" stroke-width="2"/><rect x="370" y="195" width="90" height="155" fill="#91c83e" stroke="#172f39" stroke-width="2"/><rect x="550" y="308" width="90" height="42" fill="#91c83e" stroke="#172f39" stroke-width="2"/></svg>';
 }
 if(id==="21.1"){
  return '<svg class="diagram book-redraw" viewBox="0 0 700 400"><rect x="55" y="45" width="590" height="300" fill="#fff" stroke="#172f39" stroke-width="3"/><circle cx="290" cy="190" r="105" fill="none" stroke="#172f39" stroke-width="3"/><circle cx="420" cy="190" r="105" fill="none" stroke="#172f39" stroke-width="3"/><text x="205" y="95" font-size="22">A</text><text x="485" y="95" font-size="22">B</text><text x="220" y="155" font-size="22">1</text><text x="255" y="205" font-size="22">2</text><text x="250" y="260" font-size="22">3</text><text x="345" y="165" font-size="22">4</text><text x="345" y="220" font-size="22">5</text><text x="195" y="235" font-size="22">6</text><text x="280" y="135" font-size="22">7</text><text x="475" y="200" font-size="22">8</text><text x="575" y="140" font-size="22">9</text><text x="565" y="270" font-size="22">10</text><text x="65" y="70" font-size="20">ξ</text></svg>';
 }
 return diagramForExample(l.type,i);
}

function renderLearningV4(l){
 var g=guideFor(l);
 var rules=(g.rules||[]).map(function(r){return texFormula(r[0],r[1]);}).join("");
 var method=(g.method||[]).map(function(x){return '<li>'+x+'</li>';}).join("");
 var pitfalls=(g.pitfalls||[]).map(function(x){return '<li>'+x+'</li>';}).join("");
 var visual=bookDiagramV4(l,0);
 return '<section class="teaching-slide notes-slide">'+
   '<div class="slide-kicker">TEACH / KEY NOTES</div>'+
   '<div class="explain-block"><h3>What students need to understand</h3><p>'+g.concept+'</p></div>'+
   (rules?'<div class="rules-block"><h3>Rules & mathematical facts</h3>'+rules+'</div>':'')+
   '<div class="notes-grid"><div><h3>Method / how to teach it</h3><ol class="method-list">'+method+'</ol></div><div><h3>Key checks & common errors</h3><ul class="clean-list">'+pitfalls+'</ul></div></div>'+
   (visual?'<div class="book-visual"><div class="book-visual-label">Coursebook-style visual / redrawn from the supplied source</div>'+visual+'</div>':'')+
   sourceBadge(l)+
  '</section>';
}

function renderV4(){
 var l=LESSONS[current],b=upgradedBank(l);
 if(current!==lastExampleLesson){exampleSlide=0;lastExampleLesson=current;}
 $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
 $("#lessonTitle").textContent=l.id+"  "+l.title;
 $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • NES SoW + Cambridge Coursebook + Exam Success";
 $("#prevBtn").disabled=current===0;
 $("#nextBtn").disabled=current===LESSONS.length-1;
 $$(".tab").forEach(function(x){x.classList.toggle("active",x.dataset.tab===tab);});
 renderNav($("#search").value);

 if(tab==="learn"){
  $("#content").innerHTML=renderLearningV4(l);
 }

 if(tab==="examples"){
  $("#content").innerHTML=
   '<div class="deck-toolbar"><div><strong>Teacher examples</strong><span id="exampleCount"></span></div><div class="deck-buttons"><button id="examplePrev" class="ghost-btn">← Previous example</button><button id="exampleNext" class="primary-btn">Next example →</button></div></div>'+
   '<div class="example-deck">'+b.examples.map(function(e,i){
     var diag=bookDiagramV4(l,i);
     return '<section class="example-slide teaching-slide" data-slide="'+i+'">'+
      '<div class="slide-kicker">TEACHER EXAMPLE '+(i+1)+' OF '+b.examples.length+'</div>'+
      '<div class="textbook-pattern"><span>Source sequence</span><strong>'+textbookLens(l,i)+'</strong><small>Cambridge: '+l.src+' • '+(EXAM_SUCCESS_MAP[l.u]||"Exam Success")+'</small></div>'+
      '<div class="example-question">'+e.q+'</div>'+
      (diag?'<div class="example-diagram">'+diag+'</div>':'')+
      renderModelBoard("model-board-"+current+"-"+i)+
      '<details class="worked-solution"><summary>Show textbook-style solution</summary><div class="solution-paper"><div class="solution-title">Worked solution</div><div class="steps">'+e.steps.map(function(s,j){return '<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>';}).join("")+'</div></div></details>'+
     '</section>';
   }).join("")+'</div>'+
   '<div class="example-dots">'+b.examples.map(function(_,i){return '<button class="example-dot" data-slide="'+i+'" aria-label="Go to example '+(i+1)+'">'+(i+1)+'</button>';}).join("")+'</div>';
 }

 if(tab==="practice"){
  var ep=extraPractice(l.type),merged={};
  ["foundation","core","extension"].forEach(function(k){merged[k]=(b.practice[k]||[]).concat(ep[k]||[]);});
  $("#content").innerHTML='<article class="card practice-sheet"><div class="sheet-head"><div><div class="slide-kicker">INDEPENDENT PRACTICE</div><h3>Coursebook progression + exam-style application</h3><p class="practice-source">Main source: '+l.src+'. Questions from the supplied books are used directly where transposed, then extended with matching exam-style problems.</p></div><span class="question-count">'+(merged.foundation.length+merged.core.length+merged.extension.length+(ep.problems||[]).length)+' questions</span></div>'+
   '<div class="tiers">'+[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(function(pair){var name=pair[0],k=pair[1];return '<section class="tier '+k+'"><h4>'+name+'</h4><ol class="q-list">'+merged[k].map(function(q){return '<li>'+q+'</li>';}).join("")+'</ol></section>';}).join("")+'</div>'+
   ((ep.problems||[]).length?'<section class="problem-solving"><div class="slide-kicker">REASONING & PROBLEM SOLVING</div><h4>Cambridge-style thinking</h4><ol class="q-list">'+ep.problems.map(function(q){return '<li>'+q+'</li>';}).join("")+'</ol></section>':'')+
   sourceBadge(l)+'</article>';
 }

 if(tab==="homework"){
  var allHw=(b.homework||[]).concat(extraHomework(l.type));
  $("#content").innerHTML='<article class="card homework-sheet"><div class="sheet-head"><div><div class="slide-kicker">HOMEWORK</div><h3>Fluency → application → reasoning</h3><p class="practice-source">Attempt every item before revealing the solution. Solutions show method, not just the answer.</p></div><span class="question-count">'+allHw.length+' questions</span></div>'+
   allHw.map(function(h,i){return '<div class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="pill">'+h.tier+'</span><span>'+h.q+'</span></div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">'+h.sol.map(function(s,j){return '<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>';}).join("")+'</div></div></details></div>';}).join("")+
   sourceBadge(l)+'</article>';
 }

 if(tab==="whiteboard"){
  $("#content").innerHTML='<article class="card board-card"><div class="board-tools"><strong>Whole-class whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
 }

 typesetMathV4($("#content"));
 if(tab==="examples"){initModelBoards();setupExampleDeck();}
 if(tab==="whiteboard")initBoard();
 location.hash=l.id+"-"+tab;
}

render=renderV4;
render();


/* V4.2 — book-specific overlays for every remaining SoW lesson */
var BOOK_OVERLAY={
"14.2":{
 examples:[
  ex("Solve \\(3x+4=10\\).",["Subtract 4 from both sides: \\(3x=6\\).","Divide by 3: \\(x=2\\).","Check: \\(3(2)+4=10\\)."]),
  ex("Solve \\(5-2x=3(x+7)\\).",["Expand the bracket: \\(5-2x=3x+21\\).","Collect x-terms: \\(-5x=16\\).","\\(x=-16/5\\).","Substitute back to check both sides agree."]),
  ex("Solve \\(5(x+4)=3(x+10)\\).",["Expand: \\(5x+20=3x+30\\).","Subtract \\(3x\\): \\(2x+20=30\\).","\\(2x=10\\), so \\(x=5\\)."]),
  ex("A number is doubled, then 7 is added. The result is 25. Form and solve an equation.",["Let the number be x.","Equation: \\(2x+7=25\\).","\\(2x=18\\).","\\(x=9\\)."])
 ],
 practice:{foundation:["Solve \\(4x+3=31\\).","Solve \\(6x-1=53\\)."],core:["Solve \\(7x-4=-65\\).","Solve \\(5(x+4)=3(x+10)\\)."],extension:["Form and solve a linear equation from a perimeter problem.","Form and solve an equation containing brackets from a word problem."]},
 homework:[hw("Foundation","Solve \\(8x+42=2\\).",["\\(8x=-40\\).","\\(x=-5\\)."]),hw("Core","Solve \\(4x+7=9x-18\\).",["\\(25=5x\\).","\\(x=5\\)."]),hw("Extension","Solve \\(3(2x-1)=5(x+2)-7\\).",["\\(6x-3=5x+3\\).","\\(x=6\\)."])]
},
"14.3":{
 examples:[
  ex("Solve \\(x^2+7x+12=0\\) by factorisation.",["Find two numbers with product 12 and sum 7: 3 and 4.","\\((x+3)(x+4)=0\\).","\\(x=-3\\) or \\(x=-4\\)."]),
  ex("Write \\(x^2+6x+2\\) in completed-square form and solve \\(x^2+6x+2=0\\).",["\\(x^2+6x+2=(x+3)^2-7\\).","So \\((x+3)^2=7\\).","\\(x=-3\\pm\\sqrt7\\)."]),
  ex("Solve \\(2x^2-3x-4=0\\) using the quadratic formula.",["\\(a=2,b=-3,c=-4\\).","\\(x=\\frac{3\\pm\\sqrt{9+32}}4\\).","\\(x=\\frac{3\\pm\\sqrt{41}}4\\)."]),
  ex("A rectangle has sides \\(x+2\\) and \\(x+5\\), and area 60. Find x.",["\\((x+2)(x+5)=60\\).","\\(x^2+7x-50=0\\).","Use factorisation/formula; retain only a value giving positive side lengths."])
 ],
 practice:{foundation:["Solve \\(x^2+5x+6=0\\).","Solve \\(x^2-9=0\\)."],core:["Solve \\(x^2+4x-1=0\\) by completing the square.","Solve \\(3x^2+x-2=0\\)."],extension:["Solve \\(2x^2+5x-1=0\\) exactly.","Construct a quadratic equation from two consecutive-number information."]},
 homework:[hw("Foundation","Solve \\(x^2+x-12=0\\).",["\\((x+4)(x-3)=0\\).","\\(x=-4,3\\)."]),hw("Core","Solve \\(x^2+8x+7=0\\) by completing square.",["\\((x+4)^2=9\\).","\\(x=-1,-7\\)."]),hw("Extension","Solve \\(2x^2+x-5=0\\) exactly.",["\\(x=(-1\\pm\\sqrt{41})/4\\)."])]
},
"14.4":{
 examples:[
  ex("Solve \\(\\frac{x}{3}+\\frac{x}{4}=7\\).",["LCM of 3 and 4 is 12.","Multiply every term by 12: \\(4x+3x=84\\).","\\(7x=84\\), so \\(x=12\\)."]),
  ex("Solve \\(\\frac{2}{x+1}=\\frac35\\).",["Restriction: \\(x\\ne-1\\).","Cross multiply: \\(10=3(x+1)\\).","\\(3x=7\\), so \\(x=7/3\\)."]),
  ex("Solve \\(\\frac1x+\\frac1{x+2}=\\frac34\\).",["Restrictions: \\(x\\ne0,-2\\).","Multiply by \\(4x(x+2)\\): \\(4(x+2)+4x=3x(x+2)\\).","Rearrange: \\(3x^2-2x-8=0\\).","Factor: \\((3x+4)(x-2)=0\\), so \\(x=2,-4/3\\)."]),
  ex("Why must solutions be checked in the original fractional equation?",["Clearing denominators can produce candidate values.","Any value making an original denominator zero is invalid.","Substitution also catches algebraic errors."])
 ],
 practice:{foundation:["Solve \\(x/5=4\\).","Solve \\(x/4+1=6\\)."],core:["Solve \\(2/(x-1)=5/3\\).","Solve \\(1/x+1/2=1\\)."],extension:["Solve \\(4/(x-2)=x\\).","Solve a fractional equation with two linear denominators and reject excluded values."]},
 homework:[hw("Foundation","Solve \\(x/6+2=5\\).",["\\(x=18\\)."]),hw("Core","Solve \\(3/(x+2)=2/5\\).",["\\(15=2x+4\\).","\\(x=11/2\\)."]),hw("Extension","Solve \\(1/x+1/(x+1)=1\\).",["\\(x^2-x-1=0\\).","\\(x=(1\\pm\\sqrt5)/2\\)."])]
},
"14.6":{
 examples:[
  ex("Solve \\(y=x+1\\) and \\(y=x^2-5\\).",["Set equal: \\(x+1=x^2-5\\).","\\(x^2-x-6=0\\).","\\((x-3)(x+2)=0\\).","Pairs: \\((3,4)\\), \\((-2,-1)\\)."]),
  ex("Solve \\(y=6-x\\) and \\(x^2+y^2=20\\).",["Substitute \\(y=6-x\\).","\\(x^2+(6-x)^2=20\\).","\\(x^2-6x+8=0\\).","\\(x=2,4\\), giving \\((2,4),(4,2)\\)."]),
  ex("Solve \\(y=2x-1\\) and \\(xy=6\\).",["Substitute: \\(x(2x-1)=6\\).","\\(2x^2-x-6=0\\).","\\((2x+3)(x-2)=0\\).","Pairs \\((2,3)\\), \\((-3/2,-4)\\)."]),
  ex("Explain graphically why one linear and one quadratic relation may have 0, 1 or 2 real solutions.",["Solutions are intersection points.","A line can miss, touch, or cross a parabola/circle at two points."])
 ],
 practice:{foundation:["Solve \\(y=x,\\ y=x^2-2\\).","Solve \\(y=x+2,\\ xy=3\\)."],core:["Solve \\(y=2x+3,\\ y=x^2+1\\).","Solve \\(y=5-x,\\ xy=4\\)."],extension:["Solve \\(x+y=7,\\ xy=10\\).","Find intersections of a line and a circle exactly."]},
 homework:[hw("Foundation","Solve \\(y=x+1,\\ y=x^2-1\\).",["Pairs \\((2,3),(-1,0)\\)."]),hw("Core","Solve \\(y=5-x,\\ xy=6\\).",["\\(x=2,3\\).","Pairs \\((2,3),(3,2)\\)."]),hw("Extension","Solve \\(y=2x,\\ x^2+y^2=45\\).",["\\(5x^2=45\\).","Pairs \\((3,6),(-3,-6)\\)."])]
},
"14.7":{
 examples:[
  ex("Make x the subject of \\(y=3x+7\\).",["\\(y-7=3x\\).","\\(x=(y-7)/3\\)."]),
  ex("Make r the subject of \\(A=\\pi r^2\\).",["\\(r^2=A/\\pi\\).","For a radius, \\(r=\\sqrt{A/\\pi}\\)."]),
  ex("Make x the subject of \\(P=ax+bx\\).",["Factor x: \\(P=x(a+b)\\).","\\(x=P/(a+b)\\)."]),
  ex("Make x the subject of \\(y=(ax+b)/(cx+d)\\).",["\\(y(cx+d)=ax+b\\).","\\(ycx+yd=ax+b\\).","\\(x(yc-a)=b-yd\\).","\\(x=(b-yd)/(yc-a)\\)."])
 ],
 practice:{foundation:["Make t subject: \\(d=vt\\).","Make r subject: \\(C=2\\pi r\\)."],core:["Make h subject: \\(A=bh/2\\).","Make x subject: \\(p=qx+rx\\)."],extension:["Make r subject: \\(V=4\\pi r^3/3\\).","Make x subject where it appears in numerator and denominator."]},
 homework:[hw("Foundation","Make x subject: \\(y=5x-2\\).",["\\(x=(y+2)/5\\)."]),hw("Core","Make h subject: \\(V=\\pi r^2h\\).",["\\(h=V/(\\pi r^2)\\)."]),hw("Extension","Make x subject: \\(y=(x-1)/(x+2)\\).",["\\(x=(1+2y)/(1-y)\\)."])]
},
"15.1":{
 examples:[
  ex("Represent \\(x>3\\) on a number line.",["Open circle at 3 because equality is not included.","Shade/arrow to the right."]),
  ex("Represent \\(x\\le-2\\).",["Filled circle at -2 because equality is included.","Shade/arrow left."]),
  ex("Write the inequality shown by an open circle at 5 shaded left.",["Open circle means strict.","Left means less than.","\\(x<5\\)."]),
  ex("Represent \\(-3<x\\le4\\).",["Open circle at -3, filled circle at 4.","Shade only between the two endpoints."])
 ],
 practice:{foundation:["Draw \\(x<4\\).","Draw \\(x\\ge-1\\)."],core:["Write an inequality from a number-line diagram.","Represent \\(-5\\le x<2\\)."],extension:["List the integer values satisfying \\(-3<x\\le5\\).","Interpret an inequality in a contextual limit."]},
 homework:[hw("Foundation","Draw \\(x\\le6\\).",["Filled circle at 6, shade left."]),hw("Core","Write the inequality: open at -2, shaded right.",["\\(x>-2\\)."]),hw("Extension","List integers satisfying \\(-2<x<4\\).",["-1,0,1,2,3."])]
},
"15.2":{
 examples:[
  ex("Solve \\(3x<2x+4\\).",["Subtract \\(2x\\): \\(x<4\\)."]),
  ex("Solve \\(-3\\le3x-2<7\\).",["Add 2 to all three parts: \\(-1\\le3x<9\\).","Divide all parts by 3: \\(-1/3\\le x<3\\)."]),
  ex("Solve \\(5-2x\\le11\\).",["Subtract 5: \\(-2x\\le6\\).","Divide by -2 and reverse sign: \\(x\\ge-3\\)."]),
  ex("A lift carries at most 630 kg. Six people weigh 78 kg each. Find the greatest extra load x.",["\\(6(78)+x\\le630\\).","\\(468+x\\le630\\).","\\(x\\le162\\)."])
 ],
 practice:{foundation:["Solve \\(x+3>8\\).","Solve \\(3x\\le15\\)."],core:["Solve \\(7-2x<1\\).","Solve \\(-4\\le2x+2<10\\)."],extension:["Solve a contextual integer inequality.","Explain why the sign reverses on division by a negative."]},
 homework:[hw("Foundation","Solve \\(2x-5\\ge9\\).",["\\(x\\ge7\\)."]),hw("Core","Solve \\(-3x<12\\).",["\\(x>-4\\)."]),hw("Extension","Solve \\(-5<3x+1\\le13\\).",["\\(-6<3x\\le12\\).","\\(-2<x\\le4\\)."])]
},
"15.4":{
 examples:[
  ex("A triangular region is bounded by \\(x=0\\), \\(y=0\\) and \\(x+y=6\\), including all boundaries. List its inequalities.",["Inside the first quadrant: \\(x\\ge0\\), \\(y\\ge0\\).","Below/on \\(x+y=6\\): \\(x+y\\le6\\)."]),
  ex("A region lies above the solid line \\(y=x+1\\) and below the dashed line \\(y=5\\).",["Above solid: \\(y\\ge x+1\\).","Below dashed: \\(y<5\\)."]),
  ex("How do you decide the inequality sign for a sloping boundary?",["Find the line equation.","Choose a point inside the region.","Substitute it; select the sign that makes the statement true."]),
  ex("Why can the same graph require inequalities involving x only and y only?",["Vertical boundaries are equations \\(x=a\\).","Horizontal boundaries are \\(y=b\\).","The region may combine these with sloping boundaries."])
 ],
 practice:{foundation:["List inequalities for first quadrant below \\(x+y=4\\).","Describe region \\(x\\ge1,y<3\\)."],core:["Find inequalities from a quadrilateral region.","Use a test point for a sloping boundary."],extension:["Construct a region from four inequalities.","Explain solid/dashed boundaries in a listed system."]},
 homework:[hw("Foundation","List first-quadrant inequalities.",["\\(x\\ge0,y\\ge0\\)."]),hw("Core","Region is below solid \\(y=2x+3\\).",["\\(y\\le2x+3\\)."]),hw("Extension","Region is right of x=1, above y=-2, below dashed y=-x+5.",["\\(x\\ge1, y\\ge-2, y<-x+5\\)."])]
},
"16.3":{
 examples:[
  ex("Find the interior-angle sum of a decagon.",["\\((10-2)180=1440^\\circ\\)."]),
  ex("Find each exterior angle of a regular nonagon.",["Exterior angles total 360°.","\\(360/9=40^\\circ\\)."]),
  ex("A regular polygon has exterior angle 24°. Find its number of sides.",["\\(n=360/24=15\\)."]),
  ex("A regular polygon has interior angle 156°. Find its number of sides.",["Exterior angle \\(=180-156=24^\\circ\\).","\\(n=360/24=15\\)."])
 ],
 practice:{foundation:["Find sum for pentagon.","Find exterior angle of regular hexagon."],core:["Find interior angle of regular 12-gon.","Find n given exterior 15°."],extension:["Solve a two-polygon angle-at-a-point problem.","Investigate which regular polygons tessellate and explain using interior angles."]},
 homework:[hw("Foundation","Find sum of angles in octagon.",["\\(6\\times180=1080^\\circ\\)."]),hw("Core","Regular 18-gon exterior angle?",["20°."]),hw("Extension","Interior angle 165°. Find sides.",["Exterior15°, so n=24."])]
},
"16.4":{
 examples:[
  ex("State the lines of symmetry and rotational order of a square.",["4 lines of symmetry.","Smallest matching rotation 90°, so order 4."]),
  ex("State the symmetries of a rectangle that is not a square.",["2 lines of symmetry.","Rotational order 2."]),
  ex("State the symmetries of a general parallelogram.",["No line symmetry.","Rotational order 2."]),
  ex("Describe the symmetry of a circle.",["Infinitely many lines of symmetry.","It maps onto itself through any rotation about its centre."])
 ],
 practice:{foundation:["Symmetry of equilateral triangle.","Symmetry of regular pentagon."],core:["Compare rhombus and kite symmetries.","Classify quadrilaterals using symmetry."],extension:["Find a shape with rotational order 2 and no line symmetry.","Explain infinite symmetry of a circle."]},
 homework:[hw("Foundation","Rotational order of regular hexagon?",["6."]),hw("Core","Lines of symmetry of rhombus?",["2, along its diagonals."]),hw("Extension","Give a quadrilateral with rotational order2 and no line symmetry.",["A general parallelogram."])]
},
"16.5":{
 examples:[
  ex("Describe planes of symmetry of a cube.",["A cube has several mirror planes through opposite faces/edges.","Use a 3D slice mentally: each plane must divide it into congruent mirror halves."]),
  ex("Describe symmetry of a cylinder.",["Infinitely many vertical planes through its axis.","A horizontal mid-plane is also a plane of symmetry.","It has rotational symmetry about its central axis."]),
  ex("Describe a right circular cone.",["Every plane through the axis is a plane of symmetry.","The central axis is an axis of rotational symmetry."]),
  ex("How does a prism inherit symmetry from its cross-section?",["A line of symmetry of the cross-section can extend along the prism to form a plane of symmetry.","Rotational properties can also extend along the prism axis."])
 ],
 practice:{foundation:["Planes of symmetry of cuboid.","Main rotational axis of cylinder."],core:["Symmetry of triangular prism.","Symmetry of square-based pyramid."],extension:["Compare cone and cylinder symmetry.","Explain how cross-section symmetry creates prism symmetry."]},
 homework:[hw("Foundation","Does a cone have a plane of symmetry through its axis?",["Yes."]),hw("Core","Why does a cylinder have many vertical symmetry planes?",["Any plane through its central axis divides it into mirror halves."]),hw("Extension","Describe symmetry inherited by a regular triangular prism.",["Planes/rotational axes follow the equilateral-triangle cross-section plus the prism geometry."])]
},
"17.1":{
 examples:[
  ex("Convert 3.6 m² to cm².",["\\(1m=100cm\\).","Square factor: \\(1m^2=10000cm^2\\).","\\(3.6m^2=36000cm^2\\)."]),
  ex("Convert 0.45 m³ to cm³.",["Cube the factor 100: \\(1m^3=1,000,000cm^3\\).","\\(0.45m^3=450000cm^3\\)."]),
  ex("Convert 2.3 m³ to litres.",["\\(1m^3=1000L\\).","\\(2.3m^3=2300L\\)."]),
  ex("Explain why converting m² to cm² uses ×10,000 rather than ×100.",["Area has two dimensions.","Each dimension scales by 100.","Total scale \\(100^2=10000\\)."])
 ],
 practice:{foundation:["Convert 2.4m to cm.","Convert 3.5kg to g."],core:["Convert 0.62m² to cm².","Convert 750000cm³ to m³."],extension:["Convert between m³ and litres.","Explain area/volume scale factors."]},
 homework:[hw("Foundation","4.2km to m.",["4200m."]),hw("Core","0.85m³ to litres.",["850L."]),hw("Extension","250000cm² to m².",["Divide by10000.","25m²."])]
},
"17.2":{
 examples:[
  ex("A trapezium has sides 7,4,10,4 cm. Find perimeter.",["Add all boundary lengths: 25 cm."]),
  ex("Find area of a parallelogram with base 8m and perpendicular height 3.5m.",["\\(A=bh=28m^2\\)."]),
  ex("Find area of a trapezium with parallel sides 8cm,13cm and height6cm.",["\\(A=\\frac12(8+13)6=63cm^2\\)."]),
  ex("A compound 'house' is a 5×8 rectangle plus triangle base5,height4. Find area.",["Rectangle40.","Triangle10.","Total50m²."])
 ],
 practice:{foundation:["Triangle base12,height7.","Parallelogram base9,height4."],core:["Trapezium sides7,11,height5.","Compound L-shape."],extension:["Reverse trapezium area to find a side.","Compare shapes with same perimeter."]},
 homework:[hw("Foundation","Triangle base15,height8.",["60cm²."]),hw("Core","Trapezium 9,14,height6.",["69cm²."]),hw("Extension","Trapezium area96,height8,one parallel side9. Find other.",["\\(96=4(9+x)\\).","x=15."])]
},
"17.3":{
 examples:[
  ex("Find circumference of a circle radius 5cm.",["\\(C=2\\pi r=10\\pi\\) cm."]),
  ex("Find area of a circle diameter14cm.",["Radius7.","\\(A=49\\pi\\) cm²."]),
  ex("A circle has circumference 30π cm. Find radius.",["\\(2\\pi r=30\\pi\\).","r=15cm."]),
  ex("A circle has area 200cm². Find radius.",["\\(r=\\sqrt{200/\\pi}\\).","Round only at the end."])
 ],
 practice:{foundation:["Circumference r=6.","Area r=8."],core:["Area diameter18.","Find diameter from circumference."],extension:["Find radius from area.","Compound shape involving a semicircle."]},
 homework:[hw("Foundation","Circumference r=7.",["14π cm."]),hw("Core","Area diameter14.",["49π cm²."]),hw("Extension","Area154 using π=22/7. Find radius.",["r=7cm."])]
},
"18.1":{
 examples:[
  ex("Classify 'eye colour' and 'height'.",["Eye colour is categorical.","Height is numerical and continuous."]),
  ex("Construct a tally/frequency table from categorical responses.",["List categories once.","Use tally groups of five.","Count tallies into frequency column.","Check total frequency."]),
  ex("Complete a two-way table from row and column totals.",["Use subtraction within each row/column.","Check all totals reach the same grand total."]),
  ex("Choose non-overlapping intervals for ages 10–19.",["For continuous data use boundaries such as \\(10\\le a<12\\), \\(12\\le a<14\\), etc.","Every observation must enter exactly one class."])
 ],
 practice:{foundation:["Categorical or numerical?","Discrete or continuous?"],core:["Complete a two-way table.","Create a grouped frequency table."],extension:["Design class intervals for a given data range.","Explain classification bias/error."]},
 homework:[hw("Foundation","Frequencies 5,8,6,1. Total?",["20."]),hw("Core","Complete a two-way table from totals.",["Subtract known cells from row/column totals, then cross-check."]),hw("Extension","Why must classes not overlap?",["So one observation cannot be counted twice."])]
},
"18.2":{
 examples:[
  ex("For 4,6,6,7,9,12 find mean, median, mode, range.",["Mean \\(44/6\\approx7.33\\).","Median6.5.","Mode6.","Range8."]),
  ex("For 3,5,7,8,10,13,18,21 find Q1,Q2,Q3 and IQR.",["Q2=9.","Q1=6.","Q3=15.5.","IQR=9.5."]),
  ex("Salaries are 500,520,540,560,4000. Which average better represents a typical salary?",["The outlier pulls the mean upward.","Median540 is more representative."]),
  ex("ClassA median68,IQR12; ClassB median72,IQR20. Compare.",["B higher typical value.","A more consistent."])
 ],
 practice:{foundation:["Mean of4,6,8,10.","Median of3,5,8,9,12."],core:["Quartiles/IQR of ordered data.","Find missing value from mean."],extension:["Explain when median is preferred.","Construct data with same mean, different spread."]},
 homework:[hw("Foundation","Mean of5,7,7,8,13.",["8."]),hw("Core","IQR of2,4,5,8,9,11,13,18.",["Q1=4.5,Q3=12,IQR7.5."]),hw("Extension","Mean of7 values18; six total111. Seventh?",["126-111=15."])]
},
"18.3":{
 examples:[
  ex("Estimate mean for 0–10:3,10–20:7,20–30:5.",["Midpoints5,15,25.","\\(\\sum fm=245\\), \\(\\sum f=15\\).","Estimate16.3."]),
  ex("Why use class midpoint?",["Exact values within the class are unknown.","The midpoint represents the class for estimation."]),
  ex("A grouped table has unequal class widths. Can the midpoint method still estimate a mean?",["Yes: calculate the midpoint of each interval and weight by its frequency.","Class width affects the amount of information lost, not the formula."]),
  ex("Compare an exact mean with a grouped estimate.",["The grouped estimate may differ because all class values are replaced by midpoints.","Finer grouping generally preserves more information."])
 ],
 practice:{foundation:["Midpoint10–20.","Calculate fm for midpoint15,f=7."],core:["Estimate a grouped mean.","Complete missing fm column."],extension:["Compare two groupings of same raw data.","Explain effect of wider classes."]},
 homework:[hw("Foundation","Midpoint30–50.",["40."]),hw("Core","0–10,10–20,20–30 frequencies4,8,3 estimate mean.",["215/15=14.3."]),hw("Extension","Why is result an estimate?",["Exact individual values are not known."])]
},
"18.4":{
 examples:[
  ex("Frequencies 6,12,9 for classes20–30,30–40,40–50. Identify modal class.",["Highest frequency12.","Modal class30–40."]),
  ex("40 values have cumulative frequencies7,18,31,40. Identify median class.",["Median is around20th value.","First cumulative total reaching20 is31.","Median is in third class."]),
  ex("Why may a histogram's modal class depend on density rather than raw frequency?",["With unequal widths, histogram height is frequency density.","The tallest bar corresponds to highest density."]),
  ex("What is linear interpolation used for in grouped data?",["It estimates a value within a class by assuming data is spread evenly through that interval.","It is an extension beyond merely naming the median/modal class."])
 ],
 practice:{foundation:["Identify modal class from frequency table.","State median position for30 values."],core:["Use cumulative frequencies to find median class.","Compare modal class in table and histogram."],extension:["Use simple interpolation to estimate median.","Explain limits of interpolation."]},
 homework:[hw("Foundation","Frequencies3,8,5,2: modal class?",["The class with frequency8."]),hw("Core","CF4,15,28,40: median class?",["20th value lies in third class."]),hw("Extension","Why can median class differ from modal class?",["They measure different features: middle position vs highest concentration/frequency."])]
},
"18.5":{
 examples:[
  ex("A table shows 42 of60 students chose option A. Find proportion and percentage.",["Proportion \\(42/60=0.7\\).","Percentage70%."]),
  ex("Group P:30 of50 succeed; Group Q:42 of80 succeed. Which has higher success rate?",["P=60%.","Q=52.5%.","P has the higher rate despite lower raw total."]),
  ex("A two-way table shows year group and transport. What must be checked before comparing raw counts?",["Check group totals.","If totals differ, percentages/proportions may be fairer."]),
  ex("Write an inference supported by a table.",["State the numerical evidence first.","Then make a limited conclusion that directly follows."])
 ],
 practice:{foundation:["Read a row total.","Convert table count to percentage."],core:["Compare proportions across different group sizes.","Complete missing table values."],extension:["Write two justified inferences.","Identify an inference not supported by the table."]},
 homework:[hw("Foundation","18 of30 choose B. Percentage?",["60%."]),hw("Core","Compare 24/40 with30/60.",["60% vs50%; first higher."]),hw("Extension","Why can raw totals mislead when groups differ in size?",["Larger groups naturally tend to have larger counts; rates allow fair comparison."])]
},
"18.6":{
 examples:[
  ex("GroupA median42,IQR8; GroupB median39,IQR5. Compare.",["A higher typical value.","B more consistent."]),
  ex("Two groups have same median but different IQR.",["Typical middle value is the same.","Smaller IQR indicates less spread through the middle half."]),
  ex("Two groups have equal mean but different range.",["Their average can match while variability differs.","Range is sensitive to extreme values."]),
  ex("Write a complete comparison sentence.",["Name the measure, quote the value for both groups, and interpret in context."])
 ],
 practice:{foundation:["Compare medians18,22.","Compare IQRs4,9."],core:["Write centre+spread comparison.","Choose mean/range or median/IQR."],extension:["Discuss effect of outliers.","Explain why one summary measure is insufficient."]},
 homework:[hw("Foundation","Which is more consistent: IQR3 or IQR8?",["IQR3."]),hw("Core","P median51,IQR10;Q median48,IQR6.",["P higher typical; Q more consistent."]),hw("Extension","Why quote values in a comparison?",["They provide evidence rather than unsupported description."])]
},
"18.7":{
 examples:[
  ex("A survey asks only volunteers. State a limitation.",["Self-selection can make the sample unrepresentative."]),
  ex("25 students are used to represent all teenagers in Kuwait. State two limitations.",["Small sample.","Sampling frame may not represent the wider population."]),
  ex("A table shows two variables changing together. Can it prove cause?",["No.","Association does not isolate other variables or prove a causal mechanism."]),
  ex("A company advertises only the mean salary from a strongly skewed distribution. Why may this be misleading?",["A few high salaries can lift the mean.","Median/spread would provide more context."])
 ],
 practice:{foundation:["Name one source of sampling bias.","Explain non-response."],core:["Critique a convenience sample.","Explain misleading average choice."],extension:["Rewrite an over-strong conclusion cautiously.","Design a better sampling method."]},
 homework:[hw("Foundation","Why is a sample not automatically representative?",["Its selection may systematically exclude parts of the population."]),hw("Core","Why doesn't association prove cause?",["Other variables/selection effects may explain the pattern."]),hw("Extension","Improve a biased school survey.",["Use a random/stratified sample spanning relevant year groups instead of volunteers from one class."])]
},
"19.3":{
 examples:[
  ex("Points rise from left to right. State correlation.",["Positive correlation."]),
  ex("Points fall from left to right.",["Negative correlation."]),
  ex("Points form no clear linear trend.",["Zero/no linear correlation."]),
  ex("Why doesn't strong correlation prove cause and effect?",["A third variable may affect both.","The scatter diagram shows association, not an experiment controlling variables."])
 ],
 practice:{foundation:["Classify three patterns.","State positive correlation in words."],core:["Describe strength and direction.","Identify an outlier effect."],extension:["Give a lurking variable example.","Explain non-linear pattern vs zero linear correlation."]},
 homework:[hw("Foundation","Upward trend?",["Positive."]),hw("Core","Strong downward trend?",["Strong negative."]),hw("Extension","Shoe size vs reading age in children: likely third variable?",["Age."])]
},
"19.4":{
 examples:[
  ex("How should a line of best fit be drawn?",["Single straight ruled line by inspection.","Across full data set.","Roughly balanced points above and below."]),
  ex("Use a fitted line to estimate y for an x-value inside the data range.",["This is interpolation.","Read from x to line, then across to y."]),
  ex("Why should the line not be forced through the origin?",["Only do so if data/context justify it.","Otherwise it distorts the observed trend."]),
  ex("Why is a prediction far beyond the data less reliable?",["It is extrapolation.","The relationship may change outside the observed range."])
 ],
 practice:{foundation:["Draw a reasonable line through a scatter.","State interpolation/extrapolation."],core:["Read two estimates from a line.","Comment on reliability."],extension:["Estimate line equation.","Compare two plausible best-fit lines."]},
 homework:[hw("Foundation","Inside data range prediction is called?",["Interpolation."]),hw("Core","Outside data range?",["Extrapolation."]),hw("Extension","Why balanced points both sides?",["It makes the line represent the centre of the overall trend rather than one side."])]
},
"19.6":{
 examples:[
  ex("80 values: find Q1,median,Q3 CF positions.",["20,40,60."]),
  ex("120 values: find 90th-percentile position.",["\\(0.9\\times120=108\\)."]),
  ex("Read Q1=18,Q3=31. Find IQR.",["\\(31-18=13\\)."]),
  ex("Top20% cutoff in200 candidates.",["Read 80th percentile.","CF position160."])
 ],
 practice:{foundation:["Median position for60.","Q1,Q3 for100."],core:["Read quartiles from a curve.","Calculate IQR."],extension:["Read a percentile cutoff.","Compare two distributions from CF curves."]},
 homework:[hw("Foundation","N=40 median position.",["20."]),hw("Core","N=80 Q1,Q3 positions.",["20,60."]),hw("Extension","P75 for200 occurs at CF?",["150."])]
},
"19.8":{
 examples:[
  ex("Frequency18,width10. Find density.",["\\(18/10=1.8\\)."]),
  ex("Density2.4,width5. Find frequency.",["\\(2.4\\times5=12\\)."]),
  ex("Frequency30,density2.5. Find width.",["\\(30/2.5=12\\)."]),
  ex("Why is modal class from a histogram linked to density?",["Bar height is density.","Tallest bar shows greatest frequency per unit class width."])
 ],
 practice:{foundation:["d for f12,w4.","f for d2,w6."],core:["w for f24,d3.","Complete missing table entries."],extension:["Estimate partial-class count from bar area.","Explain units of density."]},
 homework:[hw("Foundation","f15,w5: d?",["3."]),hw("Core","d1.6,w10: f?",["16."]),hw("Extension","f21,d1.4: w?",["15."])]
},
"19.9":{
 examples:[
  ex("A bar chart shows category A twice as tall as B. What should you check before saying A is twice B?",["Check the axis starts at zero and uses a linear scale.","Read actual values, not visual height alone."]),
  ex("A pie chart sector is largest. What can you infer?",["That category has the largest share of the represented total.","You cannot infer why."]),
  ex("A histogram has a tall narrow bar. Does it necessarily contain most observations?",["No.","Frequency depends on bar area, not height alone."]),
  ex("A scatter plot has one outlier. How should it be handled?",["Mention it.","Do not discard it without a reason."])
 ],
 practice:{foundation:["Read value from a bar.","State largest sector."],core:["Draw two justified inferences.","Interpret a histogram bar."],extension:["Critique a misleading graph.","Separate observation from explanation."]},
 homework:[hw("Foundation","Why read axis labels first?",["They define the quantity and scale."]),hw("Core","Tall histogram bar means highest frequency?",["Not necessarily when widths differ; compare area."]),hw("Extension","Why can a chart support only limited inference?",["It displays selected variables/data and may not reveal causes or sampling limitations."])]
},
"19.10":{
 examples:[
  ex("Curve A median52,IQR8; Curve B median47,IQR14. Compare.",["A higher typical value.","A more consistent because smaller IQR."]),
  ex("Two histograms have different centres and spreads. How should comparison be structured?",["Compare typical location.","Compare spread/shape.","Quote graph-derived evidence."]),
  ex("Two scatter plots have different correlation strengths.",["Describe both direction and strength.","Avoid claiming causation."]),
  ex("Why is a numerical comparison stronger than saying one graph 'looks higher'?",["It gives reproducible evidence from scale values."])
 ],
 practice:{foundation:["Compare two medians.","Compare two IQRs."],core:["Write full CF comparison.","Compare histogram shape."],extension:["Discuss outliers/skew.","Choose appropriate graph/statistics to compare groups."]},
 homework:[hw("Foundation","A median60 vs55: which higher typical?",["First."]),hw("Core","IQR7 vs12: which more consistent?",["IQR7."]),hw("Extension","Write one centre and one spread sentence.",["Quote both group values and interpret."])]
},
"19.11":{
 examples:[
  ex("A vertical axis begins at92 rather than0. Why can this mislead?",["Small differences appear visually much larger."]),
  ex("A line of best fit is used far outside observed range.",["This is extrapolation and may be unreliable."]),
  ex("A scatter correlation is used to claim causation.",["The graph establishes association only.","Other variables may explain the trend."]),
  ex("A national conclusion comes from a small convenience sample.",["The sample may not represent the target population.","Generalisation should be cautious."])
 ],
 practice:{foundation:["Identify a truncated axis.","Define extrapolation."],core:["Critique a sample/graph.","Rewrite an overclaim."],extension:["Explain how visual design can bias interpretation.","Propose stronger evidence."]},
 homework:[hw("Foundation","Why can a truncated axis exaggerate?",["It removes much of the scale range, magnifying visible differences."]),hw("Core","Why is extrapolation risky?",["No observed data directly supports the relationship there."]),hw("Extension","Correlation vs causation?",["Association alone cannot establish cause."])]
},
"20.1":{
 examples:[
  ex("Given \\(f(x)=3x-2\\), find \\(f(5)\\).",["Substitute x=5.","\\(15-2=13\\)."]),
  ex("If \\(f(x)=x^2+1\\), find \\(f(-3)\\).",["\\((-3)^2+1=10\\)."]),
  ex("For domain \\(\\{-2,-1,0,1,2\\}\\), find range of \\(f(x)=x^2\\).",["Outputs4,1,0,1,4.","Range \\(\\{0,1,4\\}\\)."]),
  ex("Why is \\(f(x)=1/(x-3)\\) not defined for x=3?",["Denominator becomes zero.","So 3 is excluded from the domain."])
 ],
 practice:{foundation:["Evaluate f(7) for f=x+4.","Evaluate g(-3) for g=2x."],core:["Find a finite-domain range.","State domain restriction for a rational function."],extension:["Determine whether a mapping is a function.","Explain range/domain from a graph."]},
 homework:[hw("Foundation","f=5x-1, f(3)?",["14."]),hw("Core","f=x²+2, f(-4)?",["18."]),hw("Extension","Domain all real except? f=1/(x+5).",["x≠-5."])]
},
"20.2":{
 examples:[
  ex("Find inverse of \\(f(x)=2x+7\\).",["\\(y=2x+7\\).","Swap: \\(x=2y+7\\).","\\(y=(x-7)/2\\).","\\(f^{-1}(x)=(x-7)/2\\)."]),
  ex("Check the inverse by composition.",["\\(f(f^{-1}(x))=2((x-7)/2)+7=x\\)."]),
  ex("Find inverse of \\(f(x)=(x+3)/5\\).",["\\(y=(x+3)/5\\).","\\(5y=x+3\\).","Swap/rearrange gives \\(f^{-1}(x)=5x-3\\)."]),
  ex("Why does \\(f(x)=x^2\\) need a restricted domain to have an inverse?",["x and -x give same output.","Without restriction it is not one-to-one."])
 ],
 practice:{foundation:["Inverse of3x-5.","Inverse ofx+8."],core:["Inverse of(x-2)/4.","Check by composition."],extension:["Restrict x² then find inverse.","Explain inverse as reflection in y=x."]},
 homework:[hw("Foundation","Inverse of4x+3.",["\\((x-3)/4\\)."]),hw("Core","Inverse of(x+2)/5.",["\\(5x-2\\)."]),hw("Extension","f=x², domain x≥0: inverse?",["\\(\\sqrt x\\)."])]
},
"22.1":{
 examples:[
  ex("\\(y\\propto x\\), and y=18 when x=6. Find model.",["\\(y=kx\\).","18=6k, so k=3.","\\(y=3x\\)."]),
  ex("\\(y\\propto x^2\\), y=45 when x=3. Find y when x=5.",["\\(y=kx^2\\).","45=9k, so k=5.","y=125."]),
  ex("\\(p\\propto\\sqrt q\\), p=12 when q=9. Find p when q=25.",["\\(p=k\\sqrt q\\).","12=3k, so k=4.","p=20."]),
  ex("\\(t\\propto1/v^2\\), t=5 when v=2. Find t when v=4.",["\\(t=k/v^2\\).","5=k/4, so k=20.","t=20/16=1.25."])
 ],
 practice:{foundation:["Find k in direct proportion.","Write square proportion model."],core:["Solve inverse proportion.","Solve square-root proportion."],extension:["Solve cube/cube-root proportion.","Model inverse-square context."]},
 homework:[hw("Foundation","y∝x,y=21 whenx=7. Model?",["y=3x."]),hw("Core","y∝x²,y=32 whenx=4; y whenx=7?",["k=2,y=98."]),hw("Extension","t∝1/v²,t=12 whenv=5; t whenv=10?",["k=300,t=3."])]
}
};

function mergeOverlayV4(l,base,ov){
 var pr={};
 ["foundation","core","extension"].forEach(function(k){
  pr[k]=(ov.practice&&ov.practice[k]?ov.practice[k]:[]).concat(base.practice&&base.practice[k]?base.practice[k]:[]);
 });
 return {examples:ov.examples||base.examples,practice:pr,homework:(ov.homework||[]).concat(base.homework||[])};
}
function upgradedBank(l){
 if(BOOK_BANK[l.id])return BOOK_BANK[l.id];
 var base=deepTextbookBank(l)||specialisedBank(l.type)||bank(l.type);
 if(BOOK_OVERLAY[l.id])return mergeOverlayV4(l,base,BOOK_OVERLAY[l.id]);
 return base;
}
render=renderV4;
render();


/* ===== V5 — source-extract teaching pages + isolated KaTeX rendering ===== */

var SOURCE_EXTRACTS_V5={
 "12.1":{learn:"assets/book/surds-rectangle.webp",examples:{3:"assets/book/surds-rectangle.webp"},label:"Cambridge Coursebook • Surds • source figure"},
 "16.1":{learn:"assets/book/angles-worked3.webp",examples:{0:"assets/book/angles-worked3.webp"},label:"Cambridge Coursebook • Angle reasoning • worked source diagram"},
 "19.1":{learn:"assets/book/bar-chart-worked.webp",examples:{0:"assets/book/bar-chart-worked.webp"},label:"Cambridge Coursebook • Bar charts • worked source diagram"},
 "19.2":{learn:"assets/book/scatter-exercise.webp",examples:{0:"assets/book/scatter-exercise.webp"},label:"Cambridge Coursebook • Scatter diagrams • exercise source"},
 "19.7":{learn:"assets/book/histogram-students.webp",examples:{0:"assets/book/histogram-students.webp"},label:"Cambridge Coursebook • Histograms • exercise source"}
};

function sourceExtractV5(l,i,mode){
 var m=SOURCE_EXTRACTS_V5[l.id];
 if(!m)return "";
 var src=mode==="learn"?m.learn:(m.examples||{})[i];
 if(!src)return "";
 return '<figure class="textbook-extract">'+
   '<div class="extract-ribbon">SOURCE EXTRACT</div>'+
   '<img src="'+src+'" alt="'+escapeAttrV4(m.label)+'" loading="lazy">'+
   '<figcaption><strong>'+m.label+'</strong><span>Used from the supplied teaching copy and placed beside the transposed lesson content.</span></figcaption>'+
 '</figure>';
}

function typesetMathV5(root){
 root=root||document;
 if(!window.katex)return;

 root.querySelectorAll(".math-tex[data-tex]").forEach(function(el){
   if(el.dataset.renderedV5==="1")return;
   try{
     katex.render(el.getAttribute("data-tex")||"",el,{
       throwOnError:false,strict:"ignore",trust:false,displayMode:false,output:"htmlAndMathml"
     });
     el.dataset.renderedV5="1";
   }catch(err){
     el.textContent=el.getAttribute("data-tex")||"";
     el.classList.add("math-fallback");
   }
 });

 if(!window.renderMathInElement)return;
 var selectors=[
   ".explain-block p",
   ".key-point-copy",
   ".rule-row > div:last-child",
   ".method-list li",
   ".clean-list li",
   ".mini-example-question",
   ".mini-example-step",
   ".example-question",
   ".step > div",
   ".q-list li",
   ".hw-q > span:last-child",
   ".practice-source",
   ".textbook-pattern strong",
   ".source-library strong"
 ];
 var seen=new Set();
 selectors.forEach(function(sel){
   root.querySelectorAll(sel).forEach(function(el){
     if(seen.has(el)||el.dataset.mathDoneV5==="1")return;
     seen.add(el);
     try{
       renderMathInElement(el,{
         delimiters:[
           {left:"\\[",right:"\\]",display:true},
           {left:"\\(",right:"\\)",display:false}
         ],
         throwOnError:false,
         strict:"ignore",
         trust:false,
         errorColor:"#9f1239",
         ignoredTags:["script","noscript","style","textarea","pre","code",".katex"]
       });
       el.dataset.mathDoneV5="1";
     }catch(err){
       el.dataset.mathErrorV5="1";
       console.warn("Math block isolated:",err);
     }
   });
 });
}

function keyWordsForV5(l){
 var map={
  "12":["surd","exact value","simplify","conjugate"],
  "13":["factor","common denominator","restriction","rational expression"],
  "14":["unknown","solution","equation","formula"],
  "15":["boundary","solution set","inclusive","strict"],
  "16":["angle notation","geometric reason","symmetry","regular polygon"],
  "17":["perimeter","area","radius","sector"],
  "18":["frequency","average","quartile","spread"],
  "19":["frequency density","correlation","cumulative frequency","inference"],
  "20":["function","domain","range","composition"],
  "21":["union","intersection","complement","universal set"],
  "22":["constant of proportionality","direct","inverse","power"]
 };
 return map[l.u]||[];
}

function renderLearningV5(l){
 var g=guideFor(l),b=upgradedBank(l),first=(b.examples||[])[0];
 var rules=(g.rules||[]).map(function(r){return texFormula(r[0],r[1]);}).join("");
 var method=(g.method||[]).map(function(x){return '<li>'+x+'</li>';}).join("");
 var pitfalls=(g.pitfalls||[]).map(function(x){return '<li>'+x+'</li>';}).join("");
 var vocab=keyWordsForV5(l).map(function(x){return '<span class="vocab-chip">'+x+'</span>';}).join("");
 var mini=first?'<section class="mini-example-card">'+
   '<div class="mini-kicker">BOOK-LED MINI EXAMPLE</div>'+
   '<div class="mini-example-question">'+first.q+'</div>'+
   '<div class="mini-steps">'+(first.steps||[]).slice(0,4).map(function(s,j){
      return '<div class="mini-example-step"><span>'+(j+1)+'</span><div>'+s+'</div></div>';
   }).join("")+'</div>'+
 '</section>':"";
 var src=sourceExtractV5(l,0,"learn");
 var fallback=!src?bookDiagramV4(l,0):"";

 return '<section class="teaching-slide notes-slide learning-v5">'+
   '<div class="slide-kicker">TEACH • EXPLAIN • MODEL</div>'+
   '<div class="learning-title-row"><div><h3>Core explanation</h3><p class="learning-intro">This section is the teaching content: definitions, rules, why the method works, and the checks students need before practice.</p></div><div class="vocab-wrap">'+vocab+'</div></div>'+
   '<div class="explain-block prominent"><h3>What this means</h3><p>'+g.concept+'</p></div>'+
   (rules?'<section class="rules-block"><div class="section-heading"><span>01</span><div><h3>Rules & key mathematical facts</h3><p>These are the facts to explicitly teach and keep visible while modelling.</p></div></div>'+rules+'</section>':'')+
   '<section class="learning-v5-grid">'+
     '<div class="method-panel"><div class="section-heading"><span>02</span><div><h3>How to do it</h3><p>Teacher explanation in a reliable order.</p></div></div><ol class="method-list">'+method+'</ol></div>'+
     '<div class="checks-panel"><div class="section-heading"><span>03</span><div><h3>Key checks & common mistakes</h3><p>Misconceptions to address before students work independently.</p></div></div><ul class="clean-list">'+pitfalls+'</ul></div>'+
   '</section>'+
   mini+
   (src?'<section class="book-source-panel"><div class="section-heading"><span>04</span><div><h3>Use the book visual</h3><p>This is an actual extract from the supplied source copy, not a recreated sketch.</p></div></div>'+src+'</section>':
        (fallback?'<section class="book-source-panel"><div class="section-heading"><span>04</span><div><h3>Mathematical visual</h3><p>Coded diagram used where no book crop has yet been attached.</p></div></div><div class="book-visual">'+fallback+'</div></section>':''))+
   '<details class="prior-knowledge"><summary>Before students begin • prior knowledge</summary><ul class="clean-list">'+(l.prior||[]).map(function(x){return '<li>'+x+'</li>';}).join("")+'</ul></details>'+
   sourceBadge(l)+
 '</section>';
}

function exampleVisualV5(l,i){
 return sourceExtractV5(l,i,"example") || bookDiagramV4(l,i);
}

function renderV5(){
 var l=LESSONS[current],b=upgradedBank(l);
 if(current!==lastExampleLesson){exampleSlide=0;lastExampleLesson=current;}
 $("#unitPill").textContent="Unit "+l.u+" • "+l.unit;
 $("#lessonTitle").textContent=l.id+"  "+l.title;
 $("#lessonSubtitle").textContent="Cambridge IGCSE Mathematics • NES SoW • Cambridge Coursebook • Exam Success";
 $("#prevBtn").disabled=current===0;
 $("#nextBtn").disabled=current===LESSONS.length-1;
 $$(".tab").forEach(function(x){x.classList.toggle("active",x.dataset.tab===tab);});
 renderNav($("#search").value);

 if(tab==="learn"){
   $("#content").innerHTML=renderLearningV5(l);
 }

 if(tab==="examples"){
   $("#content").innerHTML=
    '<div class="deck-toolbar"><div><strong>Teacher examples</strong><span id="exampleCount"></span></div><div class="deck-buttons"><button id="examplePrev" class="ghost-btn">← Previous example</button><button id="exampleNext" class="primary-btn">Next example →</button></div></div>'+
    '<div class="example-deck">'+b.examples.map(function(e,i){
      var visual=exampleVisualV5(l,i);
      return '<section class="example-slide teaching-slide" data-slide="'+i+'">'+
       '<div class="slide-kicker">TEACHER EXAMPLE '+(i+1)+' OF '+b.examples.length+'</div>'+
       '<div class="textbook-pattern"><span>Source sequence</span><strong>'+textbookLens(l,i)+'</strong><small>Cambridge: '+l.src+' • paired with '+(EXAM_SUCCESS_MAP[l.u]||"Exam Success")+'</small></div>'+
       '<div class="example-question">'+e.q+'</div>'+
       (visual?'<div class="example-diagram source-aware">'+visual+'</div>':'')+
       renderModelBoard("model-board-"+current+"-"+i)+
       '<details class="worked-solution"><summary>Show full worked solution</summary><div class="solution-paper"><div class="solution-title">Worked solution</div><div class="steps">'+e.steps.map(function(s,j){return '<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>';}).join("")+'</div></div></details>'+
      '</section>';
    }).join("")+'</div>'+
    '<div class="example-dots">'+b.examples.map(function(_,i){return '<button class="example-dot" data-slide="'+i+'" aria-label="Go to example '+(i+1)+'">'+(i+1)+'</button>';}).join("")+'</div>';
 }

 if(tab==="practice"){
   var ep=extraPractice(l.type),merged={};
   ["foundation","core","extension"].forEach(function(k){merged[k]=(b.practice[k]||[]).concat(ep[k]||[]);});
   $("#content").innerHTML='<article class="card practice-sheet"><div class="sheet-head"><div><div class="slide-kicker">INDEPENDENT PRACTICE</div><h3>Coursebook exercises + exam-style progression</h3><p class="practice-source">Lesson order follows the SoW. The supplied Cambridge and Exam Success material is transposed into the sequence before additional matching reasoning problems are added.</p></div><span class="question-count">'+(merged.foundation.length+merged.core.length+merged.extension.length+(ep.problems||[]).length)+' questions</span></div>'+
    '<div class="tiers">'+[["Foundation","foundation"],["Core","core"],["Extension","extension"]].map(function(pair){var name=pair[0],k=pair[1];return '<section class="tier '+k+'"><h4>'+name+'</h4><ol class="q-list">'+merged[k].map(function(q){return '<li>'+q+'</li>';}).join("")+'</ol></section>';}).join("")+'</div>'+
    ((ep.problems||[]).length?'<section class="problem-solving"><div class="slide-kicker">REASONING & PROBLEM SOLVING</div><h4>Cambridge-style thinking</h4><ol class="q-list">'+ep.problems.map(function(q){return '<li>'+q+'</li>';}).join("")+'</ol></section>':'')+
    sourceBadge(l)+'</article>';
 }

 if(tab==="homework"){
   var allHw=(b.homework||[]).concat(extraHomework(l.type));
   $("#content").innerHTML='<article class="card homework-sheet"><div class="sheet-head"><div><div class="slide-kicker">HOMEWORK</div><h3>Fluency → application → reasoning</h3><p class="practice-source">Attempt before revealing. Every reveal shows the method rather than only an answer.</p></div><span class="question-count">'+allHw.length+' questions</span></div>'+
    allHw.map(function(h,i){return '<div class="hw-item"><div class="hw-q"><span class="q-number">'+(i+1)+'</span><span class="pill">'+h.tier+'</span><span>'+h.q+'</span></div><details class="solution"><summary>Show solution</summary><div class="solution-body"><div class="steps">'+h.sol.map(function(s,j){return '<div class="step"><span class="step-badge">'+(j+1)+'</span><div>'+s+'</div></div>';}).join("")+'</div></div></details></div>';}).join("")+
    sourceBadge(l)+'</article>';
 }

 if(tab==="whiteboard"){
   $("#content").innerHTML='<article class="card board-card"><div class="board-tools"><strong>Whole-class whiteboard</strong><button class="colour-dot active" data-colour="#132d36" aria-label="Black pen"></button><button class="colour-dot" data-colour="#2563eb" aria-label="Blue pen"></button><button class="colour-dot" data-colour="#dc2626" aria-label="Red pen"></button><button class="colour-dot" data-colour="#15803d" aria-label="Green pen"></button><button id="eraser" class="tool-btn">Eraser</button><button id="clearBoard" class="tool-btn">Clear</button></div><div class="canvas-shell"><canvas id="board"></canvas></div></article>';
 }

 typesetMathV5($("#content"));
 if(tab==="examples"){initModelBoards();setupExampleDeck();}
 if(tab==="whiteboard")initBoard();
 location.hash=l.id+"-"+tab;
}

render=renderV5;
render();


/* V5.1 — second-book extract labels */
if(SOURCE_EXTRACTS_V5["19.1"]){
  SOURCE_EXTRACTS_V5["19.1"].examples[1]="assets/book/exam-pie-worked.webp";
}
function sourceExtractV5(l,i,mode){
 var m=SOURCE_EXTRACTS_V5[l.id];
 if(!m)return "";
 var src=mode==="learn"?m.learn:(m.examples||{})[i];
 if(!src)return "";
 var isExam=src.indexOf("exam-")>=0;
 var label=isExam
   ?"Exam Success • statistical diagrams • worked source extract"
   :(m.label||"Cambridge Coursebook • source extract");
 var origin=isExam
   ?"Oxford Exam Success — supplied teaching copy"
   :"Cambridge Coursebook — supplied teaching copy";
 return '<figure class="textbook-extract">'+
   '<div class="extract-ribbon">'+(isExam?"EXAM SUCCESS EXTRACT":"COURSEBOOK EXTRACT")+'</div>'+
   '<img src="'+src+'" alt="'+escapeAttrV4(label)+'" loading="lazy">'+
   '<figcaption><strong>'+label+'</strong><span>'+origin+' • used directly inside this private teaching build.</span></figcaption>'+
 '</figure>';
}
render();

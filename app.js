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

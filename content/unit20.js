(function(C){
C["20.1"]={
 heading:"Functions, domain, range and notation",
 summary:"A function maps each allowed input to exactly one output. Function notation names the rule; domain describes allowed inputs and range describes resulting outputs.",
 keywords:["function","input","output","domain","range","mapping"],
 explain:[
  "Writing \\(f(x)\\) means 'the output of function f when the input is x'. It is not f multiplied by x.",
  "To evaluate a function, substitute the input everywhere x occurs in the rule.",
  "The domain is the set of permitted input values. The range is the set of outputs produced by those inputs.",
  "Restrictions can arise from denominators, square roots or an explicitly stated domain."
 ],
 rules:["One input has exactly one output in a function.","Substitute the entire input using brackets.","Denominator cannot be zero.","For real-valued square roots, the expression under the root must be non-negative."],
 formulas:[],
 method:["Read the function rule carefully.","For evaluation, replace every x by the given input.","Simplify using correct order of operations.","For domain restrictions, identify forbidden operations.","For range, consider outputs actually produced."],
 mistakes:["\\(f(3)\\) is not \\(3f\\).","When input is negative, use brackets before squaring.","Domain and range are not interchangeable.","Do not include a value making a denominator zero."],
 diagram:"function",
 examSuccess:{pages:[78,79,80],note:"Exam Success section 2.9 develops functions, inverse functions and composite functions. Cambridge pp.772–773 Ex22.6 is the direct SoW source."},
 examples:[
  {source:"Cambridge Ex 22.6 pattern",q:"Given \\(f(x)=3x-1\\), find \\(f(5)\\).",steps:["Substitute x=5.","\\(f(5)=3(5)-1\\).","\\(f(5)=14\\)."],diagram:"function"},
  {source:"Negative input",q:"Given \\(g(x)=x^2+2x\\), find \\(g(-3)\\).",steps:["Use brackets: \\((-3)^2+2(-3)\\).","\\(9-6=3\\).","\\(g(-3)=3\\)."],diagram:"function"},
  {source:"Domain restriction",q:"State the domain restriction of \\(h(x)=\\frac5{x-4}\\).",steps:["Denominator cannot equal zero.","\\(x-4\\ne0\\).","So \\(x\\ne4\\)."]},
  {source:"Range from finite domain",q:"\\(f(x)=x^2\\) for domain \\(\\{-2,-1,0,1,2\\}\\). State range.",steps:["Outputs are 4,1,0,1,4.","Unique output set is \\(\\{0,1,4\\}\\)."]}
 ],
 practice:{
  foundation:["For \\(f(x)=2x+3\\), find f(4).","For \\(g(x)=x^2\\), find g(-5).","For \\(h(x)=10-x\\), find h(7).","State domain restriction of \\(1/(x+2)\\)."],
  core:["Find \\(f(a+1)\\) for \\(f(x)=3x-2\\).","Find \\(g(2t)\\) for \\(g(x)=x^2+1\\).","Find range of \\(f(x)=2x+1\\) on domain {0,1,2,3}.","State domain of \\(\\sqrt{x-5}\\) over real numbers.","Solve \\(f(x)=17\\) for \\(f(x)=3x+2\\)."],
  extension:["Find x if \\(f(x)=g(x)\\), where \\(f(x)=2x+7,g(x)=x^2\\).","State domain restrictions of \\(\\frac{x+1}{x^2-9}\\).","Find range of \\(x^2-4\\) for \\(-2\\le x\\le3\\).","Explain why \\(y^2=x\\) does not define y as a single-valued function of x without a restriction."],
  reasoning:["Explain why every input must have exactly one output, but two inputs may share an output.","A student evaluates \\(g(-2)\\) for \\(g(x)=x^2\\) as -4. Diagnose the error.","Create a function with domain restriction x≠3."]
 },
 homework:[
  {tier:"Foundation",q:"\\(f(x)=4x-3\\). Find f(6).",steps:["\\(4(6)-3=24-3=21\\)."]},
  {tier:"Foundation",q:"\\(g(x)=x^2+1\\). Find g(-4).",steps:["\\((-4)^2+1=16+1=17\\)."]},
  {tier:"Core",q:"\\(h(x)=\\frac2{x+5}\\). State restriction.",steps:["\\(x+5\\ne0\\).","\\(x\\ne-5\\)."]},
  {tier:"Core",q:"Find f(a−2) for \\(f(x)=5x+1\\).",steps:["\\(f(a-2)=5(a-2)+1\\).","\\(=5a-10+1=5a-9\\)."]},
  {tier:"Extension",q:"For \\(f(x)=x^2-1\\), domain {-3,-1,0,2}, find range.",steps:["Outputs 8,0,-1,3.","Range \\(\\{-1,0,3,8\\}\\)."]}
 ]
};

C["20.2"]={
 heading:"Inverse functions",
 summary:"An inverse function reverses a one-to-one function. Algebraically, write y=f(x), swap x and y, then rearrange for y. The graphs of a function and its inverse reflect in \\(y=x\\).",
 keywords:["inverse","one-to-one","reverse mapping","reflection","domain"],
 explain:[
  "If \\(f(a)=b\\), then \\(f^{-1}(b)=a\\).",
  "An inverse function exists over a domain where the original function is one-to-one.",
  "The algebraic method mirrors the mapping reversal: replace f(x) by y, swap x/y, then solve for y.",
  "The graph of \\(f^{-1}\\) is the reflection of the graph of f in \\(y=x\\)."
 ],
 rules:["\\(f^{-1}(f(x))=x\\) where defined.","Swap x and y, then rearrange.","Domain of f becomes range of inverse, and vice versa.","A non-one-to-one rule may require a restricted domain."],
 formulas:["f^{-1}(f(x))=x","f(f^{-1}(x))=x"],
 method:["Write \\(y=f(x)\\).","Swap x and y.","Rearrange to make y the subject.","Rename y as \\(f^{-1}(x)\\).","Check by composition or a sample input/output pair."],
 mistakes:["\\(f^{-1}(x)\\) does not mean \\(1/f(x)\\).","Quadratic functions are not one-to-one over all real numbers.","Remember to swap both x and y before rearranging."],
 diagram:"function",
 examSuccess:{pages:[78,79],note:"Exam Success 2.9 includes a worked inverse example for a linear function and emphasises reversing the mapping. Cambridge pp.777–778 Ex22.8 is primary."},
 examples:[
  {source:"Exam Success 2.9 pattern",q:"Find the inverse of \\(f(x)=\\frac{3x-5}{2}\\).",steps:["Write \\(y=\\frac{3x-5}{2}\\).","Swap: \\(x=\\frac{3y-5}{2}\\).","\\(2x=3y-5\\Rightarrow3y=2x+5\\).","\\(y=\\frac{2x+5}{3}\\).","So \\(f^{-1}(x)=\\frac{2x+5}{3}\\)."],diagram:"function"},
  {source:"Cambridge Ex22.8 pattern",q:"Find inverse of \\(f(x)=4x+7\\).",steps:["\\(y=4x+7\\).","Swap: \\(x=4y+7\\).","\\(y=\\frac{x-7}{4}\\).","\\(f^{-1}(x)=\\frac{x-7}{4}\\)."]},
  {source:"Check by composition",q:"Check that \\(f(x)=3x-2\\) and \\(g(x)=\\frac{x+2}{3}\\) are inverses.",steps:["\\(g(f(x))=\\frac{(3x-2)+2}{3}=x\\).","\\(f(g(x))=3\\frac{x+2}{3}-2=x\\).","Both compositions return x."]},
  {source:"Restricted quadratic",q:"Why does \\(f(x)=x^2\\) need a restricted domain for an inverse function?",steps:["Over all reals, f(2)=4 and f(-2)=4.","One output comes from two inputs, so reversal would give two outputs for input 4.","Restricting to \\(x\\ge0\\) gives inverse \\(\\sqrt x\\)."]}
 ],
 practice:{
  foundation:["Find inverse of \\(f(x)=x+5\\).","Find inverse of \\(g(x)=2x\\).","Find inverse of \\(h(x)=3x-4\\).","If f(7)=20, what is \\(f^{-1}(20)\\)?"],
  core:["Find inverse of \\(f(x)=\\frac{x-3}{5}\\).","Find inverse of \\(g(x)=\\frac{2x+1}{3}\\).","Check a pair of functions by composition.","State relationship between domain/range of function and inverse.","Sketch reflection idea across y=x."],
  extension:["Find inverse of \\(f(x)=\\frac{3x+2}{x-1}\\).","Restrict domain of \\(x^2+1\\) so inverse is a function.","Find inverse of \\(f(x)=\\sqrt{x-2}\\), stating domain/range.","Explain why \\(1/f(x)\\) is generally not inverse."],
  reasoning:["Why must a function be one-to-one to have an inverse function on its full domain?","A student swaps coefficients instead of x and y. Correct the method.","Prove graph reflection in y=x swaps coordinates."]
 },
 homework:[
  {tier:"Foundation",q:"Find inverse of \\(f(x)=2x+3\\).",steps:["\\(y=2x+3\\).","Swap: \\(x=2y+3\\).","\\(y=\\frac{x-3}{2}\\)."]},
  {tier:"Core",q:"Find inverse of \\(g(x)=\\frac{x+4}{3}\\).",steps:["\\(y=(x+4)/3\\).","Swap: \\(x=(y+4)/3\\).","\\(3x=y+4\\).","\\(g^{-1}(x)=3x-4\\)."]},
  {tier:"Core",q:"If f(-2)=9, state \\(f^{-1}(9)\\).",steps:["Inverse reverses mapping.","\\(f^{-1}(9)=-2\\)."]},
  {tier:"Extension",q:"Find inverse of \\(f(x)=\\frac{x}{x+1}\\).",steps:["\\(y=x/(x+1)\\).","\\(y(x+1)=x\\).","\\(xy+y=x\\).","\\(y=x(1-y)\\Rightarrow x=\\frac{y}{1-y}\\).","Thus \\(f^{-1}(x)=\\frac{x}{1-x}\\)."]}
 ]
};

C["20.3"]={
 heading:"Composite functions",
 summary:"A composite function applies one function and then another. In \\(gf(x)=g(f(x))\\), f acts first because it is the inside function. Order matters.",
 keywords:["composite","inside function","mapping","order","domain"],
 explain:[
  "Think of functions as machines connected in sequence.",
  "For \\(gf(x)\\), calculate f(x) first, then feed that result into g.",
  "In general \\(fg(x)\\ne gf(x)\\).",
  "A composite may create new domain restrictions even if each individual formula looks simple."
 ],
 rules:["\\(gf(x)=g(f(x))\\).","Inside/rightmost function acts first.","Composition is generally not commutative.","Check intermediate output is allowed input for the next function."],
 formulas:["gf(x)=g(f(x))","fg(x)=f(g(x))"],
 method:["Identify order from notation.","Evaluate or form the inside function first.","Substitute that entire expression into the outside function using brackets.","Simplify.","Check domain restrictions if fractions/roots occur."],
 mistakes:["Do not read gf as g×f.","Do not reverse order.","Use brackets when substituting an expression.","fg and gf can coincidentally be equal for some functions, but not generally."],
 diagram:"function",
 examSuccess:{pages:[78,79,80],note:"Exam Success 2.9 includes composite-function recap and worked examples with f(x)=x+3 and g(x)=x². Cambridge p.775 Ex22.7 is primary."},
 examples:[
  {source:"Exam Success 2.9 pattern",q:"Let \\(f(x)=x+3\\), \\(g(x)=x^2\\). Find \\(fg(4)\\).",steps:["g acts first: \\(g(4)=16\\).","Then \\(f(16)=19\\).","So \\(fg(4)=19\\)."],diagram:"function"},
  {source:"Compare order",q:"For the same f and g, find \\(gf(4)\\).",steps:["f first: \\(f(4)=7\\).","g(7)=49.","So \\(gf(4)=49\\), not 19."],diagram:"function"},
  {source:"Form composite",q:"\\(f(x)=2x+1\\), \\(g(x)=x^2\\). Find \\(gf(x)\\).",steps:["\\(gf(x)=g(2x+1)\\).","Square the whole input: \\((2x+1)^2\\).","\\(=4x^2+4x+1\\)."]},
  {source:"Domain reasoning",q:"\\(f(x)=-x\\), \\(g(x)=x-1\\), \\(h(x)=1/(x+2)\\). Explain why \\(hgf(1)\\) is undefined.",steps:["\\(f(1)=-1\\).","\\(g(-1)=-2\\).","\\(h(-2)=1/0\\), undefined.","Therefore composite undefined at x=1."]}
 ],
 practice:{
  foundation:["For f=x+4,g=2x find fg(x).","Find gf(x) for same functions.","Find gf(3).","Find ff(2) if f=3x−1.","State which function acts first in fg."],
  core:["Form fg and gf for f=x+2,g=x².","f=2x−5,g=1/x: find gf(4).","Find ff(x) for f=x−3.","Find gg(-2) for g=x²+1.","Evaluate hgf(2) for three supplied functions."],
  extension:["Find x where a composite containing 1/(x−3) is undefined.","Construct functions for which fg≠gf.","Solve fg(x)=17 for two given linear functions.","Form fff(x) for f=2x+1.","Explain domain propagation through composition."],
  reasoning:["Why does function order matter?","Find two non-identical functions that commute under composition.","A student calculates fg by multiplying formulas. Give a counterexample."]
 },
 homework:[
  {tier:"Foundation",q:"f=x+5,g=2x. Find gf(3).",steps:["f(3)=8.","g(8)=16."]},
  {tier:"Foundation",q:"f=3x−1. Find ff(2).",steps:["f(2)=5.","f(5)=14."]},
  {tier:"Core",q:"f=x²,g=x−4. Find fg(x).",steps:["g first: x−4.","f(x−4)=(x−4)²."]},
  {tier:"Core",q:"f=2x+1,g=x². Find gf(x).",steps:["f first: 2x+1.","g gives \\((2x+1)^2\\)."]},
  {tier:"Extension",q:"f=1/x,g=x−2. State x where fg(x) undefined.",steps:["\\(fg(x)=f(x-2)=1/(x-2)\\).","Undefined at x=2."]},
  {tier:"Extension",q:"f=x+1,g=2x. Solve fg(x)=11.",steps:["\\(fg(x)=f(2x)=2x+1\\).","\\(2x+1=11\\).","x=5."]}
 ]
};
})(window.LESSON_CONTENT);
(()=>{
const {C,E,H}=window.MathoraContent, M=window.LESSON_CONTENT;

M["12.1"]=C({
 explain:"A surd is an irrational root left in exact form. The Coursebook develops the topic by moving from recognising square factors to simplifying, multiplying and collecting surds. Students should see surds as exact numbers, not as unfinished calculator answers.",
 keyPoints:["Use the largest square factor you can spot.","Only like surds can be added or subtracted.","Multiplication of square roots is different from addition of square roots.","Keep answers exact unless a decimal approximation is explicitly requested."],
 rules:[["[[\\sqrt{ab}=\\sqrt a\\,\\sqrt b]]","for non-negative a and b"],["[[\\sqrt{a/b}=\\frac{\\sqrt a}{\\sqrt b}]]","for b>0"],["[[a\\sqrt m+b\\sqrt m=(a+b)\\sqrt m]]","collect like surds"],["[[\\sqrt a+\\sqrt b\\ne\\sqrt{a+b}]]","common misconception"]],
 method:["Factor the number under the root into a square factor × the remaining factor.","Take the square root of the square factor outside the radical.","Simplify all surds before deciding whether terms are like.","For products, multiply coefficients and radicands separately, then simplify again."],
 mistakes:["Adding unlike surds as if they were like terms.","Using √a+√b=√(a+b).","Stopping before extracting all square factors."],
 vocab:["surd","exact form","radicand","square factor","like surds"],
 examples:[
  E("Simplify [[\\sqrt{72}]].",["[[72=36\\times2]]","[[\\sqrt{72}=\\sqrt{36}\\sqrt2]]","[[=6\\sqrt2]]"],{source:"Coursebook Ex 9.7 style"}),
  E("Simplify [[3\\sqrt{12}+2\\sqrt{27}]].",["[[\\sqrt{12}=2\\sqrt3]] and [[\\sqrt{27}=3\\sqrt3]]","[[3(2\\sqrt3)+2(3\\sqrt3)]]","[[=12\\sqrt3]]"]),
  E("A square has area [[98\\text{ cm}^2]]. Find its exact side length.",["Side [[=\\sqrt{98}]]","[[\\sqrt{98}=\\sqrt{49\\times2}=7\\sqrt2]]","Exact side length [[=7\\sqrt2\\text{ cm}]]"],{source:"textbook-style exact-value geometry"})
 ],
 practice:{
  foundation:["Simplify [[\\sqrt{12}]].","Simplify [[\\sqrt{45}]].","Simplify [[\\sqrt{80}]].","Simplify [[2\\sqrt{27}]].","Write [[3\\sqrt5]] in the form [[\\sqrt n]]."],
  core:["Simplify [[\\sqrt8+\\sqrt{18}]].","Simplify [[5\\sqrt{12}-2\\sqrt{27}]].","Simplify [[\\sqrt6\\times\\sqrt{24}]].","Expand [[\\sqrt3(4+\\sqrt{12})]].","Arrange [[2\\sqrt5,3\\sqrt2,\\sqrt{19}]] in ascending order without a calculator."],
  extension:["Simplify [[(2+\\sqrt5)(3-\\sqrt5)]].","Show that [[\\sqrt{48}-\\sqrt{27}=\\sqrt3]].","Find x if [[x\\sqrt7=\\sqrt{343}]].","A rectangle has sides [[3+\\sqrt{12}]] and [[2\\sqrt3]]. Find its exact perimeter.","Prove that [[\\sqrt{12}\\times\\sqrt{27}]] is rational."],
  reasoning:["A student writes [[\\sqrt8+\\sqrt{18}=\\sqrt{26}]]. Diagnose the error.","Create two unlike surds whose product is an integer.","Explain why [[4\\sqrt3]] is exact but 6.928... is approximate."]
 },
 homework:[
  H("Foundation","Simplify [[\\sqrt{75}]].",["[[75=25\\times3]]","[[\\sqrt{75}=5\\sqrt3]]"]),
  H("Foundation","Write [[2\\sqrt{11}]] as a single square root.",["[[2=\\sqrt4]]","[[2\\sqrt{11}=\\sqrt{44}]]"]),
  H("Core","Simplify [[4\\sqrt{18}-3\\sqrt8]].",["[[4\\sqrt{18}=12\\sqrt2]]","[[3\\sqrt8=6\\sqrt2]]","Answer [[6\\sqrt2]]"]),
  H("Core","Expand [[(3+\\sqrt2)(2-\\sqrt2)]].",["Expand: [[6-3\\sqrt2+2\\sqrt2-2]]","Collect: [[4-\\sqrt2]]"]),
  H("Extension","A square has perimeter [[20\\sqrt3]] cm. Find its exact area.",["Side [[=5\\sqrt3]]","Area [[=(5\\sqrt3)^2=75]]","[[75\\text{ cm}^2]]"]),
  H("Extension","Show [[3\\sqrt8+2\\sqrt{18}=12\\sqrt2]].",["[[3\\sqrt8=6\\sqrt2]]","[[2\\sqrt{18}=6\\sqrt2]]","Total [[12\\sqrt2]]"])
 ],
 cambridge:"Extended candidates should be comfortable with exact values and show clear algebraic working, including on the non-calculator paper.",
 examSuccess:"Use the Number chapter for exam-style exact-value questions and the Raise your grade prompts for reasoning."
});

M["12.2"]=C({
 explain:"Rationalising a denominator rewrites an equivalent fraction so that no surd remains in the denominator. The SoW specifically recommends linking this to the difference of two squares and explaining that the chosen multiplier is a strategic form of 1.",
 keyPoints:["For a single surd denominator, multiply by that surd.","For a two-term denominator, multiply by the conjugate.","The value of the expression is unchanged because numerator and denominator are multiplied by the same quantity.","Simplify the surd expression before and after rationalising."],
 rules:[["[[\\frac a{\\sqrt b}=\\frac{a\\sqrt b}{b}]]","single surd"],["[[(p+\\sqrt q)(p-\\sqrt q)=p^2-q]]","conjugates remove the surd"]],
 method:["Simplify any surds first.","Identify whether the denominator has one term or two.","Choose the matching rationalising factor.","Multiply numerator and denominator fully.","Simplify and cancel common factors."],
 mistakes:["Using the wrong conjugate sign.","Multiplying only the denominator.","Forgetting to simplify after rationalising."],
 vocab:["rational denominator","conjugate","difference of two squares","equivalent fraction"],
 examples:[
  E("Rationalise [[\\frac7{\\sqrt5}]].",["Multiply by [[\\frac{\\sqrt5}{\\sqrt5}]]","[[\\frac{7\\sqrt5}{5}]]"]),
  E("Rationalise [[\\frac4{3-\\sqrt5}]].",["Use conjugate [[3+\\sqrt5]]","Denominator [[(3-\\sqrt5)(3+\\sqrt5)=9-5=4]]","Numerator [[4(3+\\sqrt5)]]","Cancel 4: [[3+\\sqrt5]]"]),
  E("Write [[\\frac{2+\\sqrt3}{2-\\sqrt3}]] in the form [[a+b\\sqrt3]].",["Multiply by [[2+\\sqrt3]] over itself","Denominator [[4-3=1]]","Numerator [[(2+\\sqrt3)^2=7+4\\sqrt3]]"])
 ],
 practice:{
  foundation:["Rationalise [[3/\\sqrt2]].","Rationalise [[5/\\sqrt7]].","Rationalise [[2\\sqrt3/\\sqrt5]].","Simplify [[\\sqrt{45}/\\sqrt5]].","Rationalise [[1/(2+\\sqrt3)]]."],
  core:["Rationalise [[6/(3+\\sqrt2)]].","Rationalise [[5/(\\sqrt7-1)]].","Rationalise [[3/(2-\\sqrt5)]].","Simplify [[(2\\sqrt2+\\sqrt6)/\\sqrt2]].","Write [[(3+\\sqrt2)/(3-\\sqrt2)]] as [[a+b\\sqrt2]]."],
  extension:["Rationalise [[2/(\\sqrt7-\\sqrt5)]].","Show [[1/(\\sqrt5-2)=\\sqrt5+2]].","Evaluate exactly [[1/(2+\\sqrt3)+1/(2-\\sqrt3)]].","Rationalise [[(2\\sqrt3+1)/(\\sqrt3-1)]].","Explain why the conjugate always produces a rational denominator in these examples."],
  reasoning:["A student uses [[3-\\sqrt5]] to rationalise [[1/(3-\\sqrt5)]]. Explain why this is inefficient.","Find a fraction with denominator [[a+\\sqrt b]] whose rationalised form is an integer plus a surd."]
 },
 homework:[
  H("Foundation","Rationalise [[4/\\sqrt3]].",["Multiply by [[\\sqrt3/\\sqrt3]]","Answer [[4\\sqrt3/3]]"]),
  H("Foundation","Simplify [[\\sqrt{50}/\\sqrt2]].",["[[\\sqrt{50/2}=\\sqrt{25}=5]]"]),
  H("Core","Rationalise [[3/(2+\\sqrt3)]].",["Use [[2-\\sqrt3]]","Denominator [[=1]]","Answer [[6-3\\sqrt3]]"]),
  H("Core","Rationalise [[5/(4-\\sqrt7)]].",["Use [[4+\\sqrt7]]","Denominator [[16-7=9]]","Answer [[5(4+\\sqrt7)/9]]"]),
  H("Extension","Simplify [[(1+\\sqrt2)/(1-\\sqrt2)]].",["Multiply by [[1+\\sqrt2]]","Denominator [[-1]]","Numerator [[3+2\\sqrt2]]","Answer [[-3-2\\sqrt2]]"]),
  H("Extension","Evaluate [[1/(\\sqrt3-1)-1/(\\sqrt3+1)]].",["Combine over common denominator [[(3-1)=2]]","Numerator [[(\\sqrt3+1)-(\\sqrt3-1)=2]]","Answer [[1]]"])
 ],
 cambridge:"Use exact values and clear algebraic transformations. This topic is particularly suited to non-calculator reasoning.",
 examSuccess:"Pair with algebraic manipulation examples in Exam Success for concise exam-method presentation."
});

M["13.1"]=C({
 explain:"A rational expression is simplified by factorising numerator and denominator into products, then cancelling common factors. Cancellation is valid for factors, not for individual terms joined by addition or subtraction.",
 keyPoints:["Factorise before cancelling.","Keep restrictions from the original denominator.","A cancelled factor can still create an excluded value.","The final answer should be fully factorised or simplified as appropriate."],
 rules:[["[[\\frac{ab}{ac}=\\frac bc]]","when a≠0"],["[[x^2-a^2=(x-a)(x+a)]]","difference of two squares"]],
 method:["State excluded values from the original denominator if required.","Factor numerator and denominator completely.","Cancel identical factors.","Check whether any further numerical or algebraic simplification is possible."],
 mistakes:["Cancelling the x in [[(x+5)/x]].","Forgetting domain restrictions.","Cancelling factors that are not identical."],
 vocab:["rational expression","factor","restriction","excluded value","common factor"],
 examples:[
  E("Simplify [[18x^3/(24x^5)]].",["[[18/24=3/4]]","[[x^3/x^5=1/x^2]]","Answer [[3/(4x^2)]], [[x\\ne0]]"]),
  E("Simplify [[(x^2-5x+6)/(x^2-x-6)]].",["Factor top: [[(x-2)(x-3)]]","Factor bottom: [[(x-3)(x+2)]]","Cancel [[x-3]]","[[ (x-2)/(x+2) ]], with original restrictions [[x\\ne3,-2]]"]),
  E("Explain why [[(x+5)/x]] cannot be simplified by cancelling x.",["The numerator is a sum, not a product.","x is not a factor of the whole numerator.","Equivalent form is [[1+5/x]], not 5."])
 ],
 practice:{
  foundation:["Simplify [[12x/18]].","Simplify [[15a^2/(5a)]].","Simplify [[(x^2-9)/(x-3)]].","Simplify [[(x^2+6x)/x]].","State the excluded value for [[(x+1)/(x-4)]]."],
  core:["Simplify [[(x^2-16)/(x^2+x-20)]].","Simplify [[(2x^2-8)/(x^2+5x+6)]].","Simplify [[(3x^2+12x)/(x^2+6x+8)]].","Simplify [[(x^2-2x-15)/(x^2-25)]].","State all restrictions for [[(x^2-1)/(x^2-3x+2)]]."],
  extension:["Simplify [[(2x^2-18)/(x^2+x-12)]].","Simplify [[(x^3-4x)/(x^2-x-6)]].","Solve [[(x^2-9)/(x-3)=10]] while respecting restrictions.","Create a rational expression that simplifies to [[(x-1)/(x+4)]] but has two excluded values.","Explain why cancelled factors still matter for the original domain."],
  reasoning:["Spot the error: [[(2x+6)/(2x)=3]].","Give two different unsimplified rational expressions equivalent to [[(x+1)/(x-2)]]."]
 },
 homework:[
  H("Foundation","Simplify [[20x^2/(30x)]].",["[[20/30=2/3]]","[[x^2/x=x]]","Answer [[2x/3]]"]),
  H("Foundation","Simplify [[(x^2-25)/(x-5)]].",["[[x^2-25=(x-5)(x+5)]]","Cancel [[x-5]]","[[x+5]], [[x\\ne5]]"]),
  H("Core","Simplify [[(x^2+7x+12)/(x^2+5x+4)]].",["Top [[(x+3)(x+4)]]","Bottom [[(x+1)(x+4)]]","Answer [[(x+3)/(x+1)]]"]),
  H("Core","Simplify [[(2x^2-8x)/(x^2-16)]].",["Top [[2x(x-4)]]","Bottom [[(x-4)(x+4)]]","Answer [[2x/(x+4)]]"]),
  H("Extension","Simplify and state restrictions: [[(x^2-6x+9)/(x^2-9)]].",["[[ (x-3)^2/((x-3)(x+3)) ]]","Answer [[(x-3)/(x+3)]]","Restrictions [[x\\ne3,-3]]"]),
  H("Extension","Explain why [[(x+2)/x]] is not equal to 2 for all x.",["No common factor x in the full numerator.","Counterexample: x=1 gives 3, not 2."])
 ],
 cambridge:"Factorisation and algebraic fluency should be shown line by line so that invalid cancellation is easy to detect.",
 examSuccess:"Use Algebra and graphs worked examples to reinforce short, exam-efficient simplification."
});

M["13.2"]=C({
 explain:"The four operations with algebraic fractions follow the same structure as numerical fractions. The main difference is that algebraic denominators often need to be factorised before the lowest common denominator becomes clear.",
 keyPoints:["Factor before multiplying or dividing when cancellation is possible.","Division means multiply by the reciprocal.","For addition/subtraction, use a common denominator.","Simplify the final fraction fully."],
 rules:[["[[a/b\\times c/d=ac/bd]]","multiply"],["[[a/b\\div c/d=ad/bc]]","divide"],["[[a/b+c/d=(ad+bc)/(bd)]]","generic common denominator"]],
 method:["Factor expressions where useful.","For × or ÷, cancel common factors before multiplying large expressions.","For + or −, identify the lowest common denominator.","Rewrite each fraction, combine the numerators and factor the result if possible."],
 mistakes:["Adding denominators.","Forgetting to invert the second fraction when dividing.","Stopping before simplifying the final numerator."],
 vocab:["lowest common denominator","reciprocal","equivalent fraction","common factor"],
 examples:[
  E("Simplify [[3x/4\\times8/(9x)]].",["Cancel x","[[8/4=2]] and [[3/9=1/3]]","Answer [[2/3]]"]),
  E("Write [[2/x+3/(x+1)]] as one fraction.",["LCD [[x(x+1)]]","Numerator [[2(x+1)+3x]]","[[=(5x+2)/(x(x+1))]]"]),
  E("Simplify [[(3x+4)/(x^2+x-6)-1/(x+3)]].",["Factor [[x^2+x-6=(x+3)(x-2)]]","Use LCD [[(x+3)(x-2)]]","Numerator [[3x+4-(x-2)=2x+6=2(x+3)]]","Cancel: [[2/(x-2)]]"])
 ],
 practice:{
  foundation:["Simplify [[(2x/3)(9/(4x))]].","Simplify [[(5a/8)\\div(15a/16)]].","Simplify [[2/x+5/x]].","Simplify [[7/y-3/y]].","Write [[1/x+1/2]] as one fraction."],
  core:["Simplify [[1/x+2/(x+3)]].","Simplify [[4/(x-2)-1/(x+1)]].","Simplify [[(x+2)/3\\times6/(x^2-4)]].","Simplify [[(x^2-9)/(2x)\\div((x+3)/4)]].","Simplify [[2/(x+1)+3/(x-1)]]."],
  extension:["Simplify [[1/(x-1)-1/(x+1)]].","Simplify [[(x+1)/(x-1)+(x-1)/(x+1)]].","Find x if [[1/x+1/(x+2)=3/4]].","Show [[(3x+4)/(x^2+x-6)-1/(x+3)=2/(x-2)]].","Explain why factorising denominators first often reduces work."],
  reasoning:["Which is more efficient: expanding first or factorising first in a multiplication question? Justify.","Create two algebraic fractions whose sum simplifies to 1."]
 },
 homework:[
  H("Foundation","Simplify [[3/x+4/x]].",["Same denominator","Add numerators","[[7/x]]"]),
  H("Foundation","Simplify [[(4x/5)(15/(8x))]].",["Cancel x","[[15/5=3]], [[4/8=1/2]]","[[3/2]]"]),
  H("Core","Simplify [[1/x+2/(x+2)]].",["LCD [[x(x+2)]]","Numerator [[x+2+2x=3x+2]]","[[ (3x+2)/(x(x+2)) ]]"]),
  H("Core","Simplify [[3/(x-1)-1/(x+1)]].",["LCD [[(x-1)(x+1)]]","Numerator [[3(x+1)-(x-1)=2x+4]]","[[2(x+2)/(x^2-1)]]"]),
  H("Extension","Simplify [[(x^2-4)/(3x)\\div((x+2)/(6x))]].",["Multiply by reciprocal","Factor [[x^2-4]]","Cancel common factors","Answer [[2(x-2)]]"]),
  H("Extension","Write [[2/(x+3)+1/(x-3)]] as one fraction.",["LCD [[(x+3)(x-3)]]","Numerator [[2(x-3)+(x+3)=3x-3]]","[[3(x-1)/(x^2-9)]]"])
 ],
 cambridge:"Questions frequently combine factorisation with the four rules, so students should simplify strategically rather than mechanically.",
 examSuccess:"Use Algebra and graphs exam-style fraction questions for concise presentation and checking."
});

M["14.1"]=C({
 explain:"Constructing algebra is the translation stage of problem solving. The SoW expects students to form expressions, linear equations, simultaneous equations, quadratic equations and formulae from words or diagrams.",
 keyPoints:["Define the variable before forming an equation.","Translate relationships, not isolated words.","Consecutive integers differ by 1; consecutive even numbers differ by 2.","An equation is only needed when two quantities are stated to be equal."],
 rules:[["[[n,n+1]]","consecutive integers"],["[[2n,2n+2]]","consecutive even integers"],["[[L=W+3]]","example relationship"],["[[A=lw]]","example formula"]],
 method:["Choose a variable and state what it represents.","Translate each phrase into algebra.","Build the expression/formula/equation in the same order as the relationship.","Check the algebra against a simple numerical example."],
 mistakes:["Using x and y without defining them.","Confusing an expression with an equation.","Writing consecutive even numbers as n and n+1."],
 vocab:["variable","coefficient","expression","equation","identity","formula","subject"],
 examples:[
  E("Write an expression for the product of two consecutive even numbers.",["Let the first even number be [[2n]].","The next is [[2n+2]].","Product [[=2n(2n+2)]]"]),
  E("A rectangle is 5 cm longer than it is wide. Its perimeter is 46 cm. Form an equation.",["Let width be [[x]].","Length [[=x+5]].","Perimeter equation [[2x+2(x+5)=46]]"]),
  E("Three adult tickets and two child tickets cost 64 KD. Two adult tickets and five child tickets cost 71 KD. Form simultaneous equations.",["Let adult price [[=a]], child price [[=c]].","[[3a+2c=64]]","[[2a+5c=71]]"])
 ],
 practice:{
  foundation:["Write an expression for 7 more than x.","Write an expression for three times y decreased by 5.","Write two consecutive odd integers using n.","A number is doubled and then 9 is added. Write the expression.","A rectangle has width w and length w+4. Write its perimeter."],
  core:["Form an equation: three times a number plus 4 is 31.","Form an equation for two consecutive integers whose sum is 57.","The area of a rectangle is 60 and its sides are x and x+7. Form an equation.","Form simultaneous equations from: 2 coffees + 3 teas cost 7.40; 4 coffees + 1 tea cost 8.20.","Write a formula for the total cost C of n items at p dinars each plus delivery d."],
  extension:["Two consecutive even integers have product 624. Form a quadratic equation.","A right triangle has legs x and x+3 and hypotenuse 15. Form an equation using Pythagoras.","Create a 'think of a number' puzzle that always ends at 12 and prove it algebraically.","A taxi charges a fixed fee plus a rate per km. Use two journeys to form simultaneous equations.","Construct a formula where the subject appears twice."],
  reasoning:["Explain why translating '5 less than x' as 5−x is incorrect.","Give two different contexts that lead to the equation [[3x+4=25]]."]
 },
 homework:[
  H("Foundation","Write an expression for 4 less than 3x.",["Start with [[3x]]","Subtract 4","[[3x-4]]"]),
  H("Foundation","Write two consecutive even numbers in terms of n.",["First [[2n]]","Next even number [[2n+2]]"]),
  H("Core","A number increased by 8 is then tripled to give 45. Form the equation.",["Let number be x","Increase: [[x+8]]","Triple: [[3(x+8)=45]]"]),
  H("Core","A rectangle has width x and length x+6. Its area is 91. Form an equation.",["Area [[=x(x+6)]]","Equation [[x(x+6)=91]]"]),
  H("Extension","Two consecutive integers have product 156. Form the quadratic equation.",["Numbers [[n,n+1]]","[[n(n+1)=156]]","[[n^2+n-156=0]]"]),
  H("Extension","3 pens and 2 notebooks cost 5.80; 5 pens and 1 notebook cost 6.90. Form simultaneous equations.",["Let pen p, notebook n","[[3p+2n=5.80]]","[[5p+n=6.90]]"])
 ],
 cambridge:"Current 0580 places strong emphasis on problem solving and translating real contexts into mathematics.",
 examSuccess:"The Algebra and graphs chapter models concise 'write down / form an equation' responses before full solving."
});

M["14.2"]=C({
 explain:"Solving a linear equation means finding the value that makes both sides equal. Every transformation must preserve equality, so whatever operation is applied to one side must effectively be applied to the other.",
 keyPoints:["Simplify each side before moving terms.","Eliminate brackets and fractions carefully.","Keep variable terms together and constants together.","Check by substitution into the original equation."],
 rules:[["[[ax+b=c]]","isolate x with inverse operations"],["[[a(b+c)=ab+ac]]","expand brackets"]],
 method:["Expand brackets if present.","Collect like terms on each side.","Move all x-terms to one side.","Move constants to the other side.","Divide by the coefficient of x and check."],
 mistakes:["Changing a sign without performing an operation.","Expanding only part of a bracket.","Dividing only one term by the final coefficient."],
 vocab:["solution","inverse operation","equivalent equation","coefficient"],
 examples:[
  E("Solve [[3x+4=19]].",["[[3x=15]]","[[x=5]]","Check: [[3(5)+4=19]]"]),
  E("Solve [[5-2x=3x+20]].",["Subtract [[3x]]: [[5-5x=20]]","Subtract 5: [[-5x=15]]","[[x=-3]]"]),
  E("Solve [[5(x+4)=3(x+10)]].",["Expand: [[5x+20=3x+30]]","[[2x=10]]","[[x=5]]"])
 ],
 practice:{
  foundation:["Solve [[x+7=19]].","Solve [[4x=36]].","Solve [[3x-5=16]].","Solve [[2x+9=31]].","Solve [[18-3x=6]]."],
  core:["Solve [[5x+2=2x+20]].","Solve [[4(x+3)=28]].","Solve [[7-2x=x+16]].","Solve [[3(2x-5)=4x+7]].","Solve [[5(x+4)=3(x+10)]]."],
  extension:["Form and solve: three consecutive integers total 72.","A rectangle has perimeter 54 and length 3 more than width. Find dimensions.","Solve [[2(3x-4)-5=3(x+7)]].","Find x if [[(3x-2)/5=4]].","Create an equation with solution x=−4 and x on both sides."],
  reasoning:["A student moves +7 across the equals sign and writes +7. Explain the error.","Explain why adding 4 to both sides preserves equality."]
 },
 homework:[
  H("Foundation","Solve [[4x-7=21]].",["[[4x=28]]","[[x=7]]"]),
  H("Foundation","Solve [[9-2x=1]].",["[[-2x=-8]]","[[x=4]]"]),
  H("Core","Solve [[5x+3=2x+18]].",["[[3x=15]]","[[x=5]]"]),
  H("Core","Solve [[4(x-2)=2x+10]].",["[[4x-8=2x+10]]","[[2x=18]]","[[x=9]]"]),
  H("Extension","A number is tripled, 5 is subtracted, and the result equals twice the number plus 13. Find it.",["[[3x-5=2x+13]]","[[x=18]]"]),
  H("Extension","Solve [[2(4x+1)-3=5x+14]].",["[[8x+2-3=5x+14]]","[[3x=15]]","[[x=5]]"])
 ],
 cambridge:"Show necessary working clearly. Linear-equation questions may be embedded inside contexts rather than presented as isolated algebra.",
 examSuccess:"Algebra and graphs worked examples use short, labelled steps suitable for exam scripts."
});

M["14.3"]=C({
 explain:"Quadratic equations can be solved by several methods. Students should choose a method based on structure: factorisation when factors are accessible, completing the square for structural understanding, and the quadratic formula as a general method.",
 keyPoints:["Always rearrange to [[ax^2+bx+c=0]] first.","Factorisation can give two roots.","The completed-square form reveals the turning-point structure.","The quadratic formula can produce exact surd roots."],
 rules:[["[[x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}]]","quadratic formula"],["[[b^2-4ac]]","discriminant"]],
 method:["Write in standard form equal to zero.","Look for easy factors first.","If completing the square, isolate the x²+x terms and compensate for the square added.","For the formula, identify a, b and c with their signs before substituting.","Check both solutions."],
 mistakes:["Forgetting the ± in the quadratic formula.","Using c with the wrong sign.","Finding only one root after factorising."],
 vocab:["quadratic","root","factorisation","completed square","discriminant"],
 examples:[
  E("Solve [[x^2-7x+12=0]].",["Factor: [[(x-3)(x-4)=0]]","[[x=3]] or [[x=4]]"]),
  E("Write [[x^2+6x+1]] in completed-square form.",["[[x^2+6x+1=(x+3)^2-9+1]]","[[=(x+3)^2-8]]"]),
  E("Solve [[2x^2+3x-1=0]] using the quadratic formula.",["[[a=2,b=3,c=-1]]","[[x=(-3\\pm\\sqrt{9+8})/4]]","[[x=(-3\\pm\\sqrt{17})/4]]"])
 ],
 practice:{
  foundation:["Solve [[x^2-5x+6=0]].","Solve [[x^2+x-12=0]].","Solve [[x^2=49]].","Write [[x^2+8x+3]] in completed-square form.","Identify a,b,c for [[3x^2-5x+2=0]]."],
  core:["Solve [[2x^2-7x+3=0]] by factorisation.","Complete the square for [[x^2-10x+7]].","Solve [[x^2+4x-1=0]] using the formula.","Solve [[3x^2+2x-5=0]].","Form and solve a quadratic for a rectangle of area 84 with sides x and x+5."],
  extension:["Solve [[2x^2+3x-1=0]] exactly.","A right triangle has shorter legs x and x+2, hypotenuse 10. Find x.","Show that [[x^2+6x+11]] is always positive.","Find k so [[x^2+4x+k]] is a perfect square.","Compare two methods for [[x^2-6x+5=0]] and state which is most efficient."],
  reasoning:["Explain why a quadratic can have 0,1 or 2 real roots.","A student writes [[x=(-b±√(b²−4ac))/2 × a]]. Explain the notation error."]
 },
 homework:[
  H("Foundation","Solve [[x^2-9x+20=0]].",["[[ (x-4)(x-5)=0 ]]","[[x=4]] or [[x=5]]"]),
  H("Foundation","Solve [[x^2=81]].",["Take square roots","[[x=±9]]"]),
  H("Core","Write [[x^2+4x-3]] in completed-square form.",["[[x^2+4x-3=(x+2)^2-4-3]]","[[=(x+2)^2-7]]"]),
  H("Core","Solve [[x^2+2x-7=0]] with the formula.",["[[a=1,b=2,c=-7]]","[[x=(-2±√32)/2]]","[[x=-1±2√2]]"]),
  H("Extension","A rectangle has sides x and x+4 and area 96. Find x.",["[[x(x+4)=96]]","[[x^2+4x-96=0]]","[[ (x+12)(x-8)=0 ]]","Length requires [[x=8]]"]),
  H("Extension","Find k if [[x^2+10x+k=(x+5)^2]].",["Expand right: [[x^2+10x+25]]","Therefore [[k=25]]"])
 ],
 cambridge:"The 2025–2027 syllabus explicitly includes factorisation, completing the square and the quadratic formula; exact surd solutions may be required.",
 examSuccess:"Use Algebra and graphs for compact formula substitution and exam-checking habits."
});

M["14.4"]=C({
 explain:"Fractional equations are solved by clearing denominators with a common multiple. When denominators contain x, restrictions must be recorded because multiplying through can hide values for which the original equation is undefined.",
 keyPoints:["Find the lowest common denominator first.","Multiply every term by the LCD.","State values that make an original denominator zero.","Check candidate solutions in the original equation."],
 rules:[["[[x-a\\ne0\\Rightarrow x\\ne a]]","domain restriction"],["[[\\frac ab=\\frac cd\\Rightarrow ad=bc]]","when denominators non-zero"]],
 method:["State restrictions.","Find the LCD.","Multiply every term by the LCD and simplify.","Solve the resulting linear or quadratic equation.","Reject any root that violates a restriction."],
 mistakes:["Multiplying only fractional terms and forgetting whole-number terms.","Cancelling across addition.","Accepting a root that makes a denominator zero."],
 vocab:["fractional equation","denominator","restriction","extraneous root","LCD"],
 examples:[
  E("Solve [[x/3+2=5]].",["Multiply by 3: [[x+6=15]]","[[x=9]]"]),
  E("Solve [[2/(x-1)=3]].",["Restriction [[x\\ne1]]","[[2=3(x-1)]]","[[3x=5]]","[[x=5/3]]"]),
  E("Solve [[1/x+1/(x+2)=3/4]].",["Restrictions [[x\\ne0,-2]]","Multiply by [[4x(x+2)]]","[[4(x+2)+4x=3x(x+2)]]","Rearrange to a quadratic, solve, then check restrictions."])
 ],
 practice:{
  foundation:["Solve [[x/5=7]].","Solve [[x/4+3=8]].","Solve [[(x+2)/3=5]].","Solve [[2/x=4]].","State the restriction for [[5/(x-6)]]."],
  core:["Solve [[3/(x+1)=2]].","Solve [[1/x+2=5]].","Solve [[2/(x-3)+1=4]].","Solve [[3/x=5/(x+2)]].","Solve [[1/(x-1)+1/(x+1)=1]]."],
  extension:["Solve [[2/(x+1)=x/(x+1)]] and explain the rejected value.","Solve [[1/x+1/(x+2)=3/4]].","Solve [[4/(x-2)=x+1]].","Create a fractional equation whose solution x=3 is invalid in the original equation.","Explain why multiplying by the LCD is equivalent to multiplying both sides by the same expression."],
  reasoning:["A student cancels x in [[1/x+2/x]]. Explain what can and cannot be cancelled.","Why must restrictions be taken from the original equation, not the simplified one?"]
 },
 homework:[
  H("Foundation","Solve [[x/6+1=4]].",["[[x/6=3]]","[[x=18]]"]),
  H("Foundation","Solve [[5/x=2]].",["Restriction [[x\\ne0]]","[[5=2x]]","[[x=5/2]]"]),
  H("Core","Solve [[2/(x-1)=5]].",["[[x\\ne1]]","[[2=5x-5]]","[[5x=7]]","[[x=7/5]]"]),
  H("Core","Solve [[3/x=2/(x+4)]].",["Restrictions [[x\\ne0,-4]]","[[3(x+4)=2x]]","[[x=-12]]"]),
  H("Extension","Solve [[1/(x-2)+1/x=1]].",["Restrictions [[x\\ne0,2]]","Multiply by [[x(x-2)]]","[[x+(x-2)=x(x-2)]]","[[x^2-4x+2=0]]","[[x=2±√2]]"]),
  H("Extension","Solve [[4/(x+1)=x]].",["[[x\\ne-1]]","[[4=x(x+1)]]","[[x^2+x-4=0]]","Use quadratic formula and check restriction."])
 ],
 cambridge:"Fractional equations may lead to linear or quadratic equations; working must preserve restrictions.",
 examSuccess:"Use exam-style algebra pages for short LCD setup and clear checking."
});

M["14.5"]=C({
 explain:"A simultaneous solution satisfies both equations at the same time. Elimination combines equations to remove one variable; substitution replaces one variable with an equivalent expression; graphically, the solution is the intersection.",
 keyPoints:["Two independent equations are needed for two unknowns.","Choose elimination when coefficients align easily.","Choose substitution when one variable is already isolated.","Always back-substitute and check."],
 rules:[["[[ax+by=c]] and [[dx+ey=f]]","two linear equations"],["intersection","graphical meaning of solution"]],
 method:["Label the equations.","Choose elimination or substitution.","Remove one variable and solve the resulting one-variable equation.","Back-substitute to find the second variable.","Check the pair in both originals."],
 mistakes:["Adding equations when subtraction is needed.","Changing signs inconsistently when multiplying an equation.","Giving x and y separately without pairing them."],
 vocab:["simultaneous","elimination","substitution","intersection","solution pair"],
 examples:[
  E("Solve [[x+y=11]] and [[x-y=3]].",["Add equations: [[2x=14]]","[[x=7]]","[[y=4]]"]),
  E("Solve [[y=2x+1]] and [[3x+y=16]].",["Substitute: [[3x+(2x+1)=16]]","[[5x=15]] so [[x=3]]","[[y=7]]"]),
  E("3 coffees and 2 teas cost 6.50; 5 coffees and 2 teas cost 9.50. Find each price.",["[[3c+2t=6.50]]","[[5c+2t=9.50]]","Subtract: [[2c=3]] so [[c=1.50]]","Then [[4.50+2t=6.50]] so [[t=1.00]]"])
 ],
 practice:{
  foundation:["Solve [[x+y=9, x-y=1]].","Solve [[2x+y=10, x+y=7]].","Solve [[3x+y=14, x-y=2]].","Use substitution: [[y=x+4, 2x+y=13]].","Check whether (3,2) solves [[x+y=5]] and [[2x-y=4]]."],
  core:["Solve [[2x+3y=19, x+y=7]].","Solve [[4x-y=9, 2x+3y=1]].","Solve [[y=3x-5, 2x+y=15]].","Form and solve a ticket-price problem from two purchases.","Find the intersection of [[y=2x+1]] and [[y=-x+7]]."],
  extension:["Solve [[3x+4y=2, 5x-2y=18]].","Create two equations with solution (4,-1).","Three pens and two rulers cost 5.40; two pens and five rulers cost 7.20. Find prices.","Explain how elimination corresponds to combining equal quantities.","Use three equations to solve a simple three-variable extension."],
  reasoning:["Which method is most efficient for [[y=5x-2]] and [[3x+y=14]]? Justify.","Explain why parallel straight-line graphs have no simultaneous solution."]
 },
 homework:[
  H("Foundation","Solve [[x+y=13, x-y=5]].",["Add: [[2x=18]]","[[x=9]]","[[y=4]]"]),
  H("Foundation","Solve [[2x+y=11, x+y=7]].",["Subtract second from first: [[x=4]]","[[y=3]]"]),
  H("Core","Solve [[y=2x+3, 3x+y=18]].",["Substitute","[[3x+2x+3=18]]","[[x=3]]","[[y=9]]"]),
  H("Core","Solve [[3x+2y=16, 2x-y=1]].",["Double second: [[4x-2y=2]]","Add: [[7x=18]]","[[x=18/7]] then back-substitute."]),
  H("Extension","Adult ticket a and child ticket c: [[2a+3c=31]], [[3a+c=32]]. Find a,c.",["From second [[c=32-3a]]","Substitute into first","[[2a+96-9a=31]]","[[a=65/7]], then find c."]),
  H("Extension","Find the intersection of [[y=4x-7]] and [[y=-2x+11]].",["Set equal: [[4x-7=-2x+11]]","[[6x=18]]","[[x=3,y=5]]"])
 ],
 cambridge:"Graphical and algebraic solutions are both within syllabus scope; contextual formation of the two equations is important.",
 examSuccess:"Exam Success provides worked methods with concise marking-point structure useful for elimination and substitution."
});

M["14.6"]=C({
 explain:"For one linear and one non-linear simultaneous equation, substitution reduces the system to a single quadratic equation. Each valid x-value can lead to a corresponding y-value, so solutions must be presented as pairs.",
 keyPoints:["Substitute the linear relation into the nonlinear equation.","Expect a quadratic and therefore potentially two solution pairs.","Back-substitute every root.","Check all pairs in both equations."],
 rules:[["[[y=mx+c]] into [[x^2+y^2=r^2]]","typical line-circle system"]],
 method:["Rearrange the linear equation if needed.","Substitute into the nonlinear equation.","Expand and collect to form a quadratic.","Solve for the first variable.","Find the matching second coordinate for each root."],
 mistakes:["Finding two x-values but only one y-value.","Pairing each x with the wrong y.","Discarding a negative root without contextual reason."],
 vocab:["non-linear","solution pair","substitution","intersection"],
 examples:[
  E("Solve [[y=x+1]] and [[x^2+y^2=25]].",["Substitute: [[x^2+(x+1)^2=25]]","[[2x^2+2x-24=0]]","[[x^2+x-12=0]]","[[x=3]] or [[x=-4]]","Pairs: [[(3,4)]] and [[(-4,-3)]]"]),
  E("Solve [[y=6-x]] and [[xy=8]].",["Substitute: [[x(6-x)=8]]","[[x^2-6x+8=0]]","[[x=2]] or [[4]]","Pairs [[(2,4),(4,2)]]"]),
  E("Explain geometrically why a line and a circle can have 0, 1 or 2 solutions.",["Solutions are intersection points.","A line can miss, touch (tangent) or cross the circle."])
 ],
 practice:{
  foundation:["Substitute [[y=x+2]] into [[x^2+y=8]].","Solve [[y=x]] and [[xy=16]].","Solve [[y=5-x]] and [[xy=6]].","Check whether (3,4) satisfies [[x^2+y^2=25]] and [[y=x+1]]."],
  core:["Solve [[y=x+1, x^2+y^2=13]].","Solve [[y=7-x, xy=12]].","Solve [[y=2x, x^2+y^2=45]].","Find intersections of [[y=x^2]] and [[y=2x+3]].","Solve [[y=x+3]] and [[y=x^2-1]]."],
  extension:["Find k so the line [[y=x+k]] is tangent to [[x^2+y^2=8]].","Explain why a tangent gives a repeated quadratic root.","Create a line-circle system with exactly two integer intersections.","Use the discriminant to decide how many intersections occur.","Interpret negative roots in a geometry context."],
  reasoning:["A student gets two x-values and assumes two solutions without finding y. Explain.","Why can substitution produce an extraneous-looking root only if algebra has been changed incorrectly?"]
 },
 homework:[
  H("Foundation","Solve [[y=x]] and [[xy=9]].",["[[x^2=9]]","[[x=±3]]","Pairs [[(3,3),(-3,-3)]]"]),
  H("Core","Solve [[y=5-x]] and [[xy=6]].",["[[x(5-x)=6]]","[[x^2-5x+6=0]]","[[x=2,3]]","Pairs [[(2,3),(3,2)]]"]),
  H("Core","Solve [[y=2x]] and [[x^2+y^2=20]].",["[[x^2+4x^2=20]]","[[5x^2=20]]","[[x=±2]]","Pairs [[(2,4),(-2,-4)]]"]),
  H("Extension","Solve [[y=x+1]] and [[x^2+y^2=5]].",["[[x^2+(x+1)^2=5]]","[[2x^2+2x-4=0]]","[[x^2+x-2=0]]","[[x=1,-2]]","Pairs [[(1,2),(-2,-1)]]"]),
  H("Extension","Solve [[y=x^2]] and [[y=3x+4]].",["[[x^2=3x+4]]","[[x^2-3x-4=0]]","[[x=4,-1]]","y-values [[16,1]]"]),
  H("Extension","State the graphical meaning of the two roots in the previous question.",["They are x-coordinates of the intersections.","The matching y-values complete the coordinate pairs."])
 ],
 cambridge:"Powers no higher than two are expected in this SoW subunit; all valid solution pairs should be reported.",
 examSuccess:"Algebra and graphs provides useful exam-style intersection and substitution practice."
});

M["14.7"]=C({
 explain:"Changing the subject means rearranging a formula so the chosen variable is isolated. The SoW includes harder cases where the subject appears twice or is under a power/root.",
 keyPoints:["Treat the formula like an equation and perform reversible operations.","If the subject appears twice, collect and factor it.","If the subject is squared, square-root at the end and consider context.","Clear fractions early when that simplifies the structure."],
 rules:[["[[A=\\pi r^2\\Rightarrow r=\\sqrt{A/\\pi}]]","power/root"],["[[P=ax+bx=x(a+b)]]","subject appears twice"]],
 method:["Identify the target subject.","Undo outer operations in reverse order.","Collect all terms containing the subject.","Factor out the subject if it appears more than once.","Divide by the remaining factor and check by substitution."],
 mistakes:["Dividing only one term in a numerator.","Taking a square root before isolating the square.","Moving a term without changing the algebraic operation."],
 vocab:["subject","rearrange","factorise","inverse operation"],
 examples:[
  E("Make x the subject of [[y=3x-5]].",["[[y+5=3x]]","[[x=(y+5)/3]]"]),
  E("Make r the subject of [[A=\\pi r^2]].",["[[r^2=A/\\pi]]","[[r=\\sqrt{A/\\pi}]] for a positive radius"]),
  E("Make x the subject of [[y=ax+bx+c]].",["[[y-c=ax+bx]]","[[y-c=x(a+b)]]","[[x=(y-c)/(a+b)]]"])
 ],
 practice:{
  foundation:["Make x the subject of [[y=x+7]].","Make a the subject of [[v=u+at]].","Make h the subject of [[A=bh]].","Make r the subject of [[C=2\\pi r]].","Make x the subject of [[y=(x+3)/4]]."],
  core:["Make x the subject of [[y=5x-2]].","Make b the subject of [[A=(a+b)h/2]].","Make v the subject of [[E=mv^2/2]].","Make x the subject of [[p=3x/(x+2)]].","Make r the subject of [[V=\\pi r^2h]]."],
  extension:["Make x the subject of [[y=ax+bx]].","Make x the subject of [[p=(x-a)/(x+b)]].","Make h the subject of a cone-volume formula.","Make x the subject when it occurs in two fractions.","Explain why ± may appear algebraically but be rejected by context."],
  reasoning:["Compare two rearrangement routes for a fractional formula.","Give an example where factorising the subject is essential."]
 },
 homework:[
  H("Foundation","Make x the subject: [[y=4x+9]].",["[[y-9=4x]]","[[x=(y-9)/4]]"]),
  H("Foundation","Make t the subject: [[v=u+at]].",["[[v-u=at]]","[[t=(v-u)/a]]"]),
  H("Core","Make r the subject: [[A=\\pi r^2]].",["[[r^2=A/\\pi]]","[[r=\\sqrt{A/\\pi}]]"]),
  H("Core","Make b the subject: [[P=2a+2b]].",["[[P-2a=2b]]","[[b=(P-2a)/2]]"]),
  H("Extension","Make x the subject: [[y=ax+bx+c]].",["[[y-c=x(a+b)]]","[[x=(y-c)/(a+b)]]"]),
  H("Extension","Make x the subject: [[p=(x+1)/(x-2)]].",["[[p(x-2)=x+1]]","[[px-2p=x+1]]","[[x(p-1)=2p+1]]","[[x=(2p+1)/(p-1)]]"])
 ],
 cambridge:"Harder rearrangement includes the subject twice and powers/roots, exactly as noted in the SoW.",
 examSuccess:"Use Algebra and graphs examples for concise notation and substitutions into rearranged formulae."
});

M["15.1"]=C({
 explain:"An inequality describes a set of values rather than a single value. A number-line diagram must communicate both the boundary and whether that boundary is included.",
 keyPoints:["< and > are strict: open circle.","≤ and ≥ include the endpoint: filled circle.","The arrow/shading direction shows all allowed values.","Compound inequalities describe an interval between two boundaries."],
 rules:[["[[x<3]]","open at 3, shade left"],["[[x\\ge-2]]","closed at −2, shade right"],["[[-1<x\\le4]]","open at −1, closed at 4"]],
 method:["Identify the boundary value.","Decide whether the boundary is included.","Use open/closed endpoint accordingly.","Shade in the direction that satisfies the statement.","Translate back from a diagram by reading endpoint and direction."],
 mistakes:["Reversing left/right shading.","Using a filled dot for < or >.","Forgetting that a compound inequality has two conditions."],
 vocab:["inequality","strict","inclusive","endpoint","solution set","compound inequality"],
 examples:[
  E("Represent [[x<4]] on a number line.",["Open circle at 4.","Shade/arrow to the left."]),
  E("Write the inequality shown by a filled circle at −2 with shading right.",["Filled means inclusive.","Right means greater.","[[x\\ge-2]]"]),
  E("Represent [[-3<x\\le2]].",["Open at −3.","Closed at 2.","Shade only the segment between them."])
 ],
 practice:{
  foundation:["Sketch [[x>5]].","Sketch [[x\\le1]].","Write the inequality: open at 3, shade left.","Write the inequality: closed at −4, shade right.","List integer solutions of [[-2<x<3]]."],
  core:["Represent [[-1\\le x<5]].","Write a compound inequality for values between −4 and 2 inclusive.","List integers satisfying [[2<x\\le7]].","Compare the diagrams for [[x<2]] and [[x\\le2]].","Translate 'at least 6' into an inequality."],
  extension:["Write an inequality whose integer solutions are −2,−1,0,1,2.","Describe the intersection of [[x>1]] and [[x\\le5]].","Describe the union of [[x<-2]] or [[x>3]].","Explain why no real x satisfies [[x<1]] and [[x>4]] simultaneously.","Construct a real context for [[20\\le n<30]]."],
  reasoning:["Why does 'no more than 8' translate to [[x\\le8]]?","A student uses an open circle for [[x\\ge3]]. Correct and explain."]
 },
 homework:[
  H("Foundation","Represent [[x>-1]].",["Open circle at −1.","Shade right."]),
  H("Foundation","Write the inequality: filled circle at 6, shade left.",["Filled = inclusive.","Left = less.","[[x\\le6]]"]),
  H("Core","List integer solutions of [[-3<x\\le2]].",["Integers greater than −3 and up to 2:","−2, −1, 0, 1, 2"]),
  H("Core","Write a compound inequality for values greater than 1 and at most 7.",["[[x>1]] and [[x\\le7]]","[[1<x\\le7]]"]),
  H("Extension","Find the intersection of [[x\\ge-4]] and [[x<3]].",["Both conditions together","[[-4\\le x<3]]"]),
  H("Extension","Explain the difference between [[x<5]] and [[x\\le5]].",["Both contain values below 5.","Only [[x\\le5]] includes 5 itself."])
 ],
 cambridge:"Number-line interpretation is part of the current extended algebra content and supports later region inequalities.",
 examSuccess:"Algebra and graphs can be used for quick exam-style inequality reading."
});

M["15.2"]=C({
 explain:"Linear inequalities are solved using the same balancing principles as equations, except that multiplying or dividing by a negative reverses the inequality sign because order on the number line reverses.",
 keyPoints:["Simplify both sides first.","When multiplying/dividing by a negative, flip <↔> and ≤↔≥.","For compound inequalities, keep all three parts balanced.","Interpret the final solution in context."],
 rules:[["[[x<y\\Rightarrow -x>-y]]","multiplying by −1 reverses order"],["[[-3\\le3x-2<7]]","operate on all three parts"]],
 method:["Expand and simplify.","Collect x terms.","Move constants.","If the final coefficient of x is negative, divide and reverse the sign.","Represent on a number line if required."],
 mistakes:["Forgetting to reverse the sign after dividing by a negative.","Reversing the sign when only adding/subtracting.","Applying an operation to only two parts of a compound inequality."],
 vocab:["solution set","compound inequality","reverse sign","boundary"],
 examples:[
  E("Solve [[3x<2x+4]].",["Subtract [[2x]]","[[x<4]]"]),
  E("Solve [[5-2x\\ge11]].",["[[-2x\\ge6]]","Divide by −2 and reverse sign","[[x\\le-3]]"]),
  E("Solve [[-3\\le3x-2<7]].",["Add 2 to all parts: [[-1\\le3x<9]]","Divide by 3: [[-1/3\\le x<3]]"])
 ],
 practice:{
  foundation:["Solve [[x+4>9]].","Solve [[3x\\le18]].","Solve [[2x-5<7]].","Solve [[9-x>4]].","Solve [[-2x<8]]."],
  core:["Solve [[4x+1>2x+9]].","Solve [[7-3x\\le1]].","Solve [[2(x+3)>10]].","Solve [[-5<2x+1\\le9]].","Solve [[3\\le(2x-1)/5<7]]."],
  extension:["Form and solve an inequality for a budget problem.","Find integer x satisfying [[-2<3x+4\\le10]].","Solve [[4-2(3x-1)>5x+7]].","Explain why dividing by a negative reverses order using two example numbers.","Create a compound inequality with exactly six integer solutions."],
  reasoning:["A student solves [[-2x<6]] as [[x<-3]]. Diagnose the error.","Why is no sign change needed when subtracting a negative number?"]
 },
 homework:[
  H("Foundation","Solve [[4x-3\\le13]].",["[[4x\\le16]]","[[x\\le4]]"]),
  H("Foundation","Solve [[-3x>12]].",["Divide by −3 and reverse","[[x<-4]]"]),
  H("Core","Solve [[5x+2>3x+10]].",["[[2x>8]]","[[x>4]]"]),
  H("Core","Solve [[-2\\le x+3<6]].",["Subtract 3 throughout","[[-5\\le x<3]]"]),
  H("Extension","Solve [[7-2x\\ge3x-8]].",["[[15\\ge5x]]","[[x\\le3]]"]),
  H("Extension","Solve [[-7<3x+2\\le11]].",["Subtract 2: [[-9<3x\\le9]]","Divide 3: [[-3<x\\le3]]"])
 ],
 cambridge:"Extended questions can include compound inequalities and contextual interpretation.",
 examSuccess:"Use Algebra and graphs worked examples for compact inequality transformations."
});

M["15.3"]=C({
 explain:"A linear inequality in two variables represents a half-plane. The equality gives the boundary line; the inequality tells you which side of the line is included.",
 keyPoints:["Draw the boundary from the corresponding equality.","Use a solid boundary for ≤ or ≥.","Use a dashed boundary for < or >.","Test a point not on the boundary, usually (0,0), to decide which side to shade."],
 rules:[["[[y>mx+c]]","shade above dashed boundary"],["[[y\\le mx+c]]","shade below solid boundary"]],
 method:["Replace the inequality sign by = and draw the line accurately.","Choose solid or dashed boundary.","Pick a test point.","Substitute the point into the original inequality.","Shade the half-plane that makes the inequality true."],
 mistakes:["Shading before testing a point.","Using a solid line for a strict inequality.","Plotting an incorrect line because intercepts were not checked."],
 vocab:["half-plane","boundary line","feasible region","test point","solid line","dashed line"],
 examples:[
  E("Graph [[y>2x-1]].",["Draw dashed line [[y=2x-1]].","Test (0,0): [[0>-1]] true.","Shade the side containing (0,0), i.e. above the line."]),
  E("Graph [[x+y\\le6]].",["Boundary [[x+y=6]] through (6,0),(0,6).","Solid line because ≤.","Test (0,0): [[0\\le6]] true, so shade the origin side."]),
  E("Describe why the boundary of [[x>3]] is vertical.",["All points with x=3 lie on a vertical line.","The inequality selects points to the right of that line."])
 ],
 practice:{
  foundation:["Graph [[y>x]].","Graph [[y\\le3]].","Graph [[x>2]].","State whether boundary for [[y<2x+5]] is solid or dashed.","Test (0,0) in [[y\\ge x-4]]."],
  core:["Graph [[y\\ge2x+1]].","Graph [[x+y<5]].","Graph [[2x-y\\le4]].","Graph [[x\\ge-1]] and [[y<3]] on the same axes.","Write the inequality for a region above [[y=3x-2]]."],
  extension:["Graph three inequalities and identify the common region.","Find a point satisfying [[y>x+1]] and [[y<5]].","Explain why testing a point on the boundary is useless.","Create an inequality whose boundary passes through (0,4) and (2,0).","Determine whether (3,2) lies in [[2x+y\\le8]]."],
  reasoning:["A student shades below [[y>2x+1]]. Use a test point to demonstrate the error.","Explain the visual meaning of strict versus inclusive boundaries."]
 },
 homework:[
  H("Foundation","For [[y<3x+2]], state the boundary and its style.",["Boundary [[y=3x+2]]","Strict inequality → dashed."]),
  H("Foundation","For [[x\\ge-2]], state which side is shaded.",["Boundary [[x=-2]] solid.","x-values greater than −2 are to the right."]),
  H("Core","Graph [[x+y\\le4]]. Which side contains (0,0)?",["[[0+0\\le4]] is true.","Shade the side containing the origin."]),
  H("Core","Does (2,5) satisfy [[y>2x]]?",["[[5>4]] is true.","Yes."]),
  H("Extension","Write an inequality with boundary [[y=-x+6]] shaded below including the line.",["Below means ≤.","[[y\\le-x+6]]"]),
  H("Extension","Explain why [[2x-y<4]] may be rewritten before shading.",["Rearrange: [[-y<4-2x]]","Multiply by −1 and reverse: [[y>2x-4]]","Now 'above' is easy to see."])
 ],
 cambridge:"The SoW links graphical inequalities directly to Ex 14.5–14.6; accurate boundaries and shading conventions matter.",
 examSuccess:"Algebra and graphs gives exam-style coordinate diagrams suitable for checking line accuracy."
});

M["15.4"]=C({
 explain:"To describe a shaded region, identify each boundary line and then choose the inequality direction that keeps points inside the region. This reverses the previous skill: the graph is given and the algebra must be recovered.",
 keyPoints:["Write the equation of each boundary first.","Use solid/dashed style to decide inclusive/strict.","Use a point clearly inside the region to decide the sign.","The final answer is a list of inequalities that must all hold."],
 rules:[["intersection of half-planes","region satisfying all inequalities"],["solid boundary","≤ or ≥"],["dashed boundary","< or >"]],
 method:["Identify every boundary.","Find each line equation.","Choose strict or inclusive sign from line style.","Test an interior point against each possible direction.","List all inequalities together."],
 mistakes:["Writing only one inequality for a multi-boundary region.","Ignoring a vertical/horizontal boundary.","Choosing the sign from visual intuition without testing."],
 vocab:["feasible region","boundary","intersection","constraint"],
 examples:[
  E("A region is above [[y=x]], below [[y=5]], and to the right of [[x=1]], all solid. List inequalities.",["[[y\\ge x]]","[[y\\le5]]","[[x\\ge1]]"]),
  E("A triangular region is bounded by [[x=0]], [[y=0]], [[x+y=6]] and lies in the first quadrant.",["[[x\\ge0]]","[[y\\ge0]]","[[x+y\\le6]]"]),
  E("Explain how a dashed boundary changes the statement.",["Boundary points are excluded.","Use < or > rather than ≤ or ≥."])
 ],
 practice:{
  foundation:["Write inequalities for first quadrant.","Region left of [[x=4]] and above [[y=1]].","Region below [[y=2x+3]].","State sign type for a dashed boundary.","State sign type for a solid boundary."],
  core:["List inequalities for 0≤x≤5 and y≥x.","Describe a triangle bounded by axes and [[x+y=8]].","Use test point (2,2) to choose side of [[x+2y=10]].","List inequalities for a rectangle from x=−1 to 4, y=0 to 6.","Convert a shaded graph into three constraints."],
  extension:["Design a region with exactly four integer lattice points.","Find whether (3,4) lies in all constraints [[x\\ge0,y\\ge0,x+y\\le6]].","Explain why linear programming optimisation is outside this SoW even though regions are drawn.","Create two different lists of inequalities whose regions do not overlap.","Use one dashed and two solid boundaries in a region description."],
  reasoning:["Why can any interior point be used to test a boundary direction?","A region is empty. What does that tell you about its constraints?"]
 },
 homework:[
  H("Foundation","First quadrant: write the two inequalities.",["[[x\\ge0]]","[[y\\ge0]]"]),
  H("Foundation","Region below solid [[y=4]].",["Below → [[y\\le4]]"]),
  H("Core","Region bounded by axes and [[x+y=5]].",["[[x\\ge0]]","[[y\\ge0]]","[[x+y\\le5]]"]),
  H("Core","Region right of dashed [[x=2]] and below solid [[y=7]].",["[[x>2]]","[[y\\le7]]"]),
  H("Extension","Point (2,3) lies inside a region with boundary [[2x+y=10]]. Which side inequality contains it?",["Substitute: [[2(2)+3=7]]","Since 7<10, the side containing the point is [[2x+y<10]] or ≤ if solid."]),
  H("Extension","List inequalities for [[-1\\le x\\le4]] and [[0<y<5]].",["[[x\\ge-1]]","[[x\\le4]]","[[y>0]]","[[y<5]]"])
 ],
 cambridge:"The SoW explicitly excludes linear programming optimisation; focus on reading and writing the defining inequalities.",
 examSuccess:"Use coordinate-graph questions to practise boundary equations and checking points."
});

M["16.1"]=C({
 explain:"Angle reasoning is not only about obtaining a number; Cambridge expects correct geometrical terminology and reasons. The SoW lists the core angle facts and requires three-letter notation such as angle ABC.",
 keyPoints:["Angles at a point total 360°.","Angles on a straight line total 180°.","Vertically opposite angles are equal.","Triangle angles total 180°; quadrilateral angles total 360°.","State a reason at each logical step."],
 rules:[["angles at a point","360°"],["straight line","180°"],["triangle","180°"],["quadrilateral","360°"]],
 method:["Mark known angles clearly.","Choose the angle fact that directly connects known and unknown values.","Write an equation if x is involved.","Solve and attach a geometrical reason.","Check the angle size is plausible."],
 mistakes:["Giving only a numerical answer with no reason.","Confusing vertically opposite with adjacent angles.","Misreading the middle letter in angle notation."],
 vocab:["acute","obtuse","reflex","vertically opposite","perpendicular","equilateral","isosceles","scalene"],
 examples:[
  E("Find x if [[x+112^\\circ=180^\\circ]]. Give a reason.",["Angles on a straight line sum to 180°.","[[x=68^\\circ]]"],{image:"angles-worked3.webp"}),
  E("Two lines cross. One angle is 115°. Find the opposite and adjacent angles.",["Vertically opposite angle =115°.","Adjacent angles sum to 180°.","[[180-115=65^\\circ]]"]),
  E("Around a point the angles are [[x,2x,4x,150^\\circ]]. Find x.",["[[x+2x+4x+150=360]]","[[7x=210]]","[[x=30^\\circ]]"])
 ],
 practice:{
  foundation:["Find x on a straight line with 73°.","Find angle vertically opposite 128°.","Angles around a point: 90°,110°,x.","Triangle angles 48°,67°,x.","Quadrilateral angles 90°,85°,112°,x."],
  core:["At a point: x,x,70°,110°. Find x.","Vertically opposite: [[3x+5]] and [[5x-35]].","Straight line: [[2x+10]] and [[5x-5]].","Triangle angles x,2x,3x.","Quadrilateral angles x,x+20,2x,100°."],
  extension:["A right angle is split into x and 2x+9. Find x.","Adjacent intersection angles are [[4x-7]] and [[2x+31]].","Construct a problem with answer 36°.","Explain why vertically opposite angles are equal using straight-line sums.","Solve a multi-step diagram requiring three different angle facts."],
  reasoning:["Write a proof-style solution where every line has a reason.","Explain why a reflex angle may be found by subtracting the smaller angle from 360°."]
 },
 homework:[
  H("Foundation","Find x if [[x+124=180]].",["Straight line","[[x=56^\\circ]]"]),
  H("Foundation","Find the vertically opposite angle to 74°.",["Vertically opposite angles are equal.","74°"]),
  H("Core","Angles around a point are 95°,80°,75°,x.",["Total known [[=250]]","[[x=360-250=110^\\circ]]"]),
  H("Core","Triangle angles are x,2x,75°.",["[[3x+75=180]]","[[x=35^\\circ]]"]),
  H("Extension","Vertically opposite angles [[5x-8]] and [[3x+28]].",["Set equal","[[5x-8=3x+28]]","[[x=18]]"]),
  H("Extension","Quadrilateral angles x,2x,3x,60°.",["[[6x+60=360]]","[[x=50^\\circ]]"])
 ],
 cambridge:"Correct geometric terminology and reasons are explicitly required by the SoW and syllabus.",
 examSuccess:"Geometry chapter uses labelled diagrams and short reasoned angle calculations.",
 sourceImages:["angles-worked3.webp"]
});

M["16.2"]=C({
 explain:"When a transversal crosses parallel lines, corresponding and alternate angles are equal while co-interior angles are supplementary. The key is identifying the relationship before calculating.",
 keyPoints:["Corresponding angles: equal.","Alternate angles: equal.","Co-interior angles: total 180°.","Vertically opposite and straight-line facts may be needed before using the parallel-line fact."],
 rules:[["corresponding","equal"],["alternate","equal"],["co-interior","sum 180°"]],
 method:["Confirm the lines are parallel.","Identify the relationship between the relevant angles.","Transfer/equate or supplement the angle.","Continue with straight-line or triangle facts if needed.","State the geometric reason."],
 mistakes:["Using parallel-line facts when parallel lines are not marked.","Calling all equal-looking angles alternate.","Forgetting co-interior angles sum rather than match."],
 vocab:["transversal","corresponding","alternate","co-interior","supplementary"],
 examples:[
  E("Two corresponding angles are [[3x+10]] and [[5x-30]]. Find x.",["Corresponding angles are equal.","[[3x+10=5x-30]]","[[2x=40]]","[[x=20]]"]),
  E("A co-interior angle is 117°. Find the other.",["Co-interior angles total 180°.","[[180-117=63^\\circ]]"]),
  E("An alternate angle is 68°. The adjacent angle on a straight line is y. Find y.",["Alternate angle transfers as 68°.","Straight line: [[y=180-68=112^\\circ]]"])
 ],
 practice:{
  foundation:["Corresponding to 72°.","Alternate to 116°.","Co-interior with 105°.","State reason for equal Z-angles.","State reason for F-angles."],
  core:["Corresponding: [[4x+3=6x-21]].","Co-interior: [[3x+10]] and [[5x-6]].","Use alternate then triangle sum.","Find three unknown angles around two parallel lines.","Write a reason for each stage."],
  extension:["A multi-step diagram combines parallel lines and an isosceles triangle.","Prove two angles equal using parallel-line facts.","Find x in a diagram with algebraic corresponding angles and a straight line.","Construct a diagram where x=30° using co-interior angles.","Explain why alternate angles are equal for parallel lines."],
  reasoning:["A student says co-interior angles are equal. Give a counterexample.","Why must the parallel arrow markings be checked before using these rules?"]
 },
 homework:[
  H("Foundation","Corresponding angle to 83°.",["Corresponding angles are equal.","83°"]),
  H("Foundation","Co-interior partner of 124°.",["[[180-124=56^\\circ]]"]),
  H("Core","Corresponding angles [[2x+15]] and [[5x-30]].",["Set equal","[[2x+15=5x-30]]","[[45=3x]]","[[x=15]]"]),
  H("Core","Co-interior angles [[4x]] and [[2x+30]].",["[[4x+2x+30=180]]","[[6x=150]]","[[x=25]]"]),
  H("Extension","An alternate angle is [[3x+5]], its straight-line neighbour [[5x-1]]. Find x.",["They are supplementary after transfer.","[[3x+5+5x-1=180]]","[[8x=176]]","[[x=22]]"]),
  H("Extension","Explain how to distinguish corresponding and alternate angles.",["Corresponding occupy matching corners at intersections.","Alternate lie between parallels on opposite sides of transversal."])
 ],
 cambridge:"Angle facts should be named in explanations, not merely used silently.",
 examSuccess:"Geometry worked examples reinforce diagram reading and precise reasons."
});

M["16.3"]=C({
 explain:"Polygon angle problems use the fact that an n-sided polygon can be split into n−2 triangles. Exterior angles of any convex polygon total 360°, and for a regular polygon every exterior angle is equal.",
 keyPoints:["Interior angle sum [[=(n-2)180^\\circ]].","Exterior angles total 360°.","Regular exterior angle [[=360^\\circ/n]].","Interior + exterior at a vertex =180°."],
 rules:[["[[(n-2)180^\\circ]]","interior sum"],["[[360^\\circ/n]]","regular exterior angle"],["[[180^\\circ-360^\\circ/n]]","regular interior angle"]],
 method:["Identify whether polygon is regular or irregular.","Choose total-sum or per-angle formula.","For reverse questions, form an equation in n.","Check n is a whole number ≥3."],
 mistakes:["Dividing the interior sum by n for an irregular polygon.","Assuming exterior angles differ in a regular polygon.","Forgetting n must be an integer."],
 vocab:["regular","irregular","convex","concave","interior angle","exterior angle"],
 examples:[
  E("Find the interior angle sum of a hexagon.",["[[n=6]]","[[(6-2)180=720^\\circ]]"]),
  E("Find each exterior and interior angle of a regular octagon.",["Exterior [[=360/8=45^\\circ]]","Interior [[=180-45=135^\\circ]]"]),
  E("A regular polygon has exterior angle 24°. Find the number of sides.",["[[n=360/24]]","[[n=15]]"])
 ],
 practice:{
  foundation:["Interior sum of pentagon.","Interior sum of decagon.","Exterior angle of regular nonagon.","Interior angle of regular hexagon.","Number of sides if exterior angle 60°."],
  core:["Find n if interior sum 1260°.","Regular polygon interior angle 150°: find n.","One irregular pentagon has four given angles; find fifth.","Exterior angles include x,2x,3x,90°,70°; find x.","Compare regular octagon and decagon interior angles."],
  extension:["Two regular polygons meet around a point; determine whether they tessellate.","Find n if interior angle is three times exterior angle.","A concave polygon has one reflex interior angle; use angle sum to find it.","Prove exterior angles total 360° by considering turning.","Create a polygon problem with n=12 as the reverse solution."],
  reasoning:["Why does splitting from one vertex give n−2 triangles?","Explain why regular polygon angles approach 180° as n increases."]
 },
 homework:[
  H("Foundation","Interior sum of octagon.",["[[(8-2)180=1080^\\circ]]"]),
  H("Foundation","Regular pentagon exterior angle.",["[[360/5=72^\\circ]]"]),
  H("Core","Regular decagon interior angle.",["Exterior [[=36^\\circ]]","Interior [[=144^\\circ]]"]),
  H("Core","Find n if interior sum is 1620°.",["[[(n-2)180=1620]]","[[n-2=9]]","[[n=11]]"]),
  H("Extension","Regular polygon interior angle 165°. Find n.",["Exterior [[=15^\\circ]]","[[n=360/15=24]]"]),
  H("Extension","Irregular hexagon angles 120,135,140,100,155,x. Find x.",["Hexagon sum [[=720]]","Known sum [[=650]]","[[x=70^\\circ]]"])
 ],
 cambridge:"Both regular and irregular polygon angle properties are explicitly listed in the SoW.",
 examSuccess:"Geometry chapter combines recall with reverse and reasoning questions.",
 sourceImages:["polygons.webp"]
});

M["16.4"]=C({
 explain:"Line symmetry means reflection in a line maps a shape onto itself. Rotational symmetry means a rotation less than or equal to 360° maps a shape onto itself; the order counts how many matches occur in a full turn.",
 keyPoints:["Order includes the 360° position.","A circle has infinitely many lines of symmetry and rotational symmetry of infinite order.","Regular n-gons have n lines of symmetry and rotational order n.","Some shapes have one type of symmetry but not the other."],
 rules:[["[[\\text{smallest rotation}=360^\\circ/\\text{order}]]","rotational symmetry"]],
 method:["Imagine or trace a reflection to test a candidate line.","Rotate around the centre and count matches in 360°.","Use shape properties rather than visual guesswork.","State line count and rotational order separately."],
 mistakes:["Saying a rectangle has rotational order 4.","Forgetting the 360° match counts.","Assuming any diagonal is a line of symmetry."],
 vocab:["line symmetry","rotational symmetry","order","centre of rotation","mirror line"],
 examples:[
  E("State symmetries of a non-square rectangle.",["2 lines of symmetry.","Rotational order 2."]),
  E("State symmetries of a regular hexagon.",["6 lines of symmetry.","Rotational order 6.","Smallest rotation [[=60^\\circ]]."]),
  E("A shape has rotational order 5. Find the smallest angle.",["[[360/5=72^\\circ]]"])
 ],
 practice:{
  foundation:["Square: lines and order.","Equilateral triangle: lines and order.","Non-square rectangle.","Rhombus.","Regular pentagon."],
  core:["Kite: line symmetry and rotational order.","Parallelogram.","Isosceles triangle.","Regular octagon.","Find smallest angle for order 8."],
  extension:["Classify quadrilaterals by their symmetry properties.","Construct a shape with rotational order 2 and no line symmetry.","Explain why a circle has infinite symmetry.","Find all regular polygons with smallest rotation at least 45°.","Design an odd-one-out symmetry task."],
  reasoning:["Can a shape have exactly 3 lines of symmetry but rotational order 1? Discuss.","Explain why every regular polygon's rotational order equals its number of sides."]
 },
 homework:[
  H("Foundation","Symmetry of a square.",["4 lines.","Rotational order 4."]),
  H("Foundation","Smallest rotation for order 6.",["[[360/6=60^\\circ]]"]),
  H("Core","Symmetry of a parallelogram.",["No line symmetry in general.","Rotational order 2."]),
  H("Core","Symmetry of a regular octagon.",["8 lines.","Order 8."]),
  H("Extension","A shape matches after 120°. State its rotational order.",["[[360/120=3]]"]),
  H("Extension","Explain why a non-square rectangle has order 2 not 4.",["180° maps it onto itself.","90° swaps unequal length and width, so it does not match."])
 ],
 cambridge:"Symmetry is tied to properties of common polygons, not just visual recognition.",
 examSuccess:"Geometry revision checklists provide useful shape-property retrieval."
});

M["16.5"]=C({
 explain:"Three-dimensional symmetry extends the same ideas into space. A plane of symmetry divides a solid into mirror-image halves; an axis of rotational symmetry is a line about which the solid can be rotated onto itself.",
 keyPoints:["Planes are 2D mirror surfaces through a solid.","Axes are lines, not planes.","Prisms inherit symmetry from their cross-section and their length direction.","Cones and cylinders have continuous rotational symmetry about their main axis."],
 rules:[["plane of symmetry","mirror halves"],["axis of symmetry","rotation in 3D"]],
 method:["Identify the solid and its cross-section.","Visualise slicing it with a mirror plane.","Visualise rotating about likely central axes.","Count distinct planes/axes only if the question asks for number."],
 mistakes:["Calling a plane an axis.","Forgetting orientation of a prism.","Assuming all pyramids have the same symmetry."],
 vocab:["plane","axis","prism","cylinder","pyramid","cone","rotational symmetry"],
 examples:[
  E("Describe symmetry of a right circular cylinder.",["Infinitely many vertical planes through its axis plus one horizontal mid-plane.","Rotational symmetry of infinite order about its central axis."]),
  E("How many planes of symmetry does a cube have?",["9 planes in total: 3 through opposite face centres and 6 diagonal planes."]),
  E("A triangular prism has an equilateral cross-section. Describe a symmetry plane.",["Any symmetry line of the equilateral triangle extends along the prism to form a plane."])
 ],
 practice:{
  foundation:["Name a plane of symmetry of a cuboid.","State the main rotational axis of a cone.","Describe a symmetry plane of a cylinder.","Does a square-based regular pyramid have vertical symmetry planes?","Does a scalene triangular prism have side symmetry planes?"],
  core:["Count symmetry planes of a cube.","Compare cube and cuboid symmetry.","Describe rotational symmetry of a regular triangular prism.","Find symmetry of a square-based prism.","Explain how cross-section symmetry creates prism symmetry."],
  extension:["Investigate a regular tetrahedron's planes of symmetry.","Construct a prism with exactly one longitudinal symmetry plane.","Compare a cone and pyramid with same base symmetry.","Explain why an oblique prism may lose some planes.","Classify solids by infinite versus finite rotational order."],
  reasoning:["Why does a sphere have more symmetry than a cylinder?","How does changing a regular base to an irregular base affect pyramid symmetry?"]
 },
 homework:[
  H("Foundation","State one plane of symmetry of a cuboid.",["A plane halfway through opposite pairs of faces, parallel to a face."]),
  H("Foundation","State the main rotational axis of a cylinder.",["The line joining the centres of the circular faces."]),
  H("Core","How many face-centre planes of symmetry does a cube have?",["3: each passes through the centres of two opposite faces and bisects the cube."]),
  H("Core","Describe one vertical plane of symmetry of a cone.",["Any plane through the cone's central axis divides it into mirror halves."]),
  H("Extension","Why can a cylinder be said to have infinite rotational order about its main axis?",["Every rotation angle maps the circular cross-section onto itself."]),
  H("Extension","Explain how an equilateral triangular prism gains three longitudinal symmetry planes.",["The triangle has three symmetry lines.","Each line extends along the prism length to form a plane."])
 ],
 cambridge:"The SoW specifically names prisms, cylinders, pyramids and cones and asks for planes and axes of symmetry.",
 examSuccess:"Geometry chapter diagrams are useful for visualising solid properties."
});

M["17.1"]=C({
 explain:"Metric conversion depends on dimension. Length conversions use the linear scale factor, area conversions use its square and volume conversions use its cube. Capacity links directly to volume: 1 cm³ = 1 ml and 1000 cm³ = 1 litre.",
 keyPoints:["Always write the unit conversion before calculating.","Square the length factor for area.","Cube the length factor for volume.","Convert all quantities to consistent units before combining them."],
 rules:[["[[1\\text{ m}=100\\text{ cm}]]","length"],["[[1\\text{ m}^2=10,000\\text{ cm}^2]]","area"],["[[1\\text{ m}^3=1,000,000\\text{ cm}^3]]","volume"],["[[1\\text{ cm}^3=1\\text{ ml}]]","capacity"]],
 method:["Identify the dimension: length, area or volume.","Write the base linear conversion.","Raise the scale factor to the correct power.","Multiply/divide in the correct direction.","Attach the correct unit."],
 mistakes:["Using ×100 for m² to cm².","Mixing litres and cm³ without conversion.","Dropping squared/cubed units."],
 vocab:["metric unit","scale factor","capacity","area unit","volume unit"],
 examples:[
  E("Convert 3.4 m to cm.",["[[3.4\\times100=340]]","340 cm"]),
  E("Convert [[2.5\\text{ m}^2]] to cm².",["[[1\\text{ m}^2=100^2=10,000\\text{ cm}^2]]","[[2.5\\times10,000=25,000\\text{ cm}^2]]"]),
  E("Convert [[0.018\\text{ m}^3]] to litres.",["[[0.018\\text{ m}^3=18,000\\text{ cm}^3]]","[[18,000\\text{ cm}^3=18\\text{ L}]]"])
 ],
 practice:{
  foundation:["4.7 m to cm.","8500 g to kg.","3.2 L to ml.","5600 mm to m.","0.8 km to m."],
  core:["1.7 m² to cm².","450000 cm² to m².","0.004 m³ to cm³.","2500 cm³ to litres.","3.6 litres to cm³."],
  extension:["Convert 0.75 km² to m².","Convert 2.3 m³ to litres.","A tank measures 1.2 m × 50 cm × 40 cm. Find volume in litres.","Explain why area scale factors square.","A map tile area changes under a scale factor of 3. Find area factor."],
  reasoning:["A student converts 2 m² to 200 cm². Explain the error.","Why is 1 litre equal to 1000 cm³?"]
 },
 homework:[
  H("Foundation","Convert 6.2 m to cm.",["[[6.2\\times100=620]] cm"]),
  H("Foundation","Convert 3750 g to kg.",["[[3750/1000=3.75]] kg"]),
  H("Core","Convert [[1.4\\text{ m}^2]] to cm².",["[[1.4\\times10,000=14,000\\text{ cm}^2]]"]),
  H("Core","Convert [[0.006\\text{ m}^3]] to litres.",["[[0.006\\times1,000,000=6000\\text{ cm}^3]]","[[=6\\text{ L}]]"]),
  H("Extension","A box 40 cm × 25 cm × 30 cm is full of water. Find capacity in litres.",["Volume [[=40\\times25\\times30=30,000\\text{ cm}^3]]","[[=30\\text{ L}]]"]),
  H("Extension","Convert [[2.5\\text{ km}^2]] to m².",["[[1\\text{ km}^2=1,000,000\\text{ m}^2]]","[[2.5\\times1,000,000=2,500,000\\text{ m}^2]]"])
 ],
 cambridge:"Unit conversion includes square/cubic units and volume-capacity links according to the SoW.",
 examSuccess:"Mensuration chapter starts with units and conversion before formula work."
});

M["17.2"]=C({
 explain:"Perimeter measures boundary length; area measures surface covered. The SoW requires rectangle, triangle, parallelogram and trapezium calculations, including reverse problems and compound shapes.",
 keyPoints:["Perimeter uses all outside edges only.","Triangle area uses perpendicular height.","Parallelogram area is base × perpendicular height.","Trapezium area is half the sum of parallel sides × height.","Compound shapes can be split or subtracted."],
 rules:[["[[A_{triangle}=\\frac12 bh]]","triangle"],["[[A_{parallelogram}=bh]]","parallelogram"],["[[A_{trapezium}=\\frac12(a+b)h]]","trapezium"]],
 method:["Sketch/mark dimensions.","Choose the correct formula for each component.","Keep perimeter and area calculations separate.","For compound shapes, split into non-overlapping pieces.","Check units: cm for perimeter, cm² for area."],
 mistakes:["Using sloping side as height.","Including internal edges in perimeter.","Forgetting the 1/2 in triangle/trapezium."],
 vocab:["perimeter","area","perpendicular height","parallel sides","compound shape"],
 examples:[
  E("Find area of a parallelogram with base 8 m and height 3.5 m.",["[[A=bh]]","[[A=8\\times3.5=28\\text{ m}^2]]"]),
  E("A trapezium has parallel sides 8 cm and 13 cm, height 6 cm.",["[[A=\\frac12(8+13)6]]","[[=63\\text{ cm}^2]]"]),
  E("A trapezium area is 63 cm², height 6 cm, one parallel side 8 cm. Find the other.",["[[63=\\frac12(8+x)6]]","[[63=3(8+x)]]","[[21=8+x]]","[[x=13\\text{ cm}]]"])
 ],
 practice:{
  foundation:["Area rectangle 8×5.","Area triangle base12 height7.","Area parallelogram base9 height4.","Area trapezium sides6,10 height5.","Perimeter of sides 7,4,10,4."],
  core:["Triangle area45 base10: find height.","Parallelogram area72 height8: find base.","Trapezium area54 height6 one side7: find other.","Rectangular frame 12×9 with 1-unit border: find border area.","Find area of an L-shape by splitting."],
  extension:["Compound trapezium + triangle.","A triangular panel has base45 cm and area0.54 m²; find height in cm.","Equal-area trapezium and parallelogram: find unknown height.","Construct two rectangles with same area but different perimeters.","Explain why sloping side length does not affect parallelogram area."],
  reasoning:["Which quadrilateral gives maximum area for a fixed perimeter? Explore.","A student uses all four trapezium sides in the area formula. Correct the misconception."]
 },
 homework:[
  H("Foundation","Triangle base15 cm, height8 cm.",["[[A=1/2\\times15\\times8=60\\text{ cm}^2]]"]),
  H("Foundation","Perimeter of sides 4,6,7,9 cm.",["Add outside edges","[[26\\text{ cm}]]"]),
  H("Core","Trapezium parallel sides9,14 cm, height6 cm.",["[[A=1/2(23)6=69\\text{ cm}^2]]"]),
  H("Core","Parallelogram area84 cm², base12 cm. Find height.",["[[h=84/12=7\\text{ cm}]]"]),
  H("Extension","Rectangle 10×6 with 4×2 rectangle removed.",["Outer area 60","Removed 8","Remaining [[52\\text{ units}^2]]"]),
  H("Extension","Trapezium area96 cm², height8, one parallel side9. Find other.",["[[96=4(9+x)]]","[[24=9+x]]","[[x=15\\text{ cm}]]"])
 ],
 cambridge:"Except for triangle area, the SoW notes that formulae may not be supplied, so recall is important.",
 examSuccess:"Mensuration chapter gives worked diagrams and compound-shape problems."
});

M["17.3"]=C({
 explain:"Circle questions require careful distinction between radius, diameter, circumference and area. Exact answers may be left in terms of π; decimal answers should be rounded only at the end.",
 keyPoints:["Diameter is twice radius.","Circumference is a length; area uses square units.","Use π symbolically for exact answers.","Do not round intermediate values."],
 rules:[["[[C=2\\pi r=\\pi d]]","circumference"],["[[A=\\pi r^2]]","area"]],
 method:["Identify whether the given measure is radius or diameter.","Choose circumference or area formula.","Substitute using radius consistently.","Leave in terms of π if requested or evaluate at the end.","Attach correct units."],
 mistakes:["Using diameter as r.","Using 2πr for area.","Writing cm instead of cm² for area."],
 vocab:["centre","radius","diameter","circumference","π"],
 examples:[
  E("Find circumference of radius 7 cm.",["[[C=2\\pi(7)=14\\pi\\text{ cm}]]"]),
  E("Find area of diameter 12 cm.",["Radius [[=6]]","[[A=\\pi(6)^2=36\\pi\\text{ cm}^2]]"]),
  E("A circle has area [[81\\pi]]. Find its radius.",["[[\\pi r^2=81\\pi]]","[[r^2=81]]","Radius [[r=9]]"])
 ],
 practice:{
  foundation:["Circumference r=5.","Circumference d=18.","Area r=4.","Area d=10.","Find diameter if radius=7.2."],
  core:["Radius from circumference [[20\\pi]].","Radius from area [[49\\pi]].","Find area when circumference is [[12\\pi]].","Compare two circles radii 3 and 6: area scale.","Semicircle perimeter including diameter."],
  extension:["A circular path surrounds a garden; find path area.","Find radius if circumference 37.7 cm to 3sf.","A wheel rolls 25 revolutions; find distance.","Prove doubling radius quadruples area.","Find exact area in terms of circumference C."],
  reasoning:["Why can circumference and area not be compared numerically without units?","A student squares diameter instead of radius. Quantify the error factor."]
 },
 homework:[
  H("Foundation","Circle radius 8 cm: circumference.",["[[C=16\\pi\\text{ cm}]]"]),
  H("Foundation","Circle diameter 14 cm: area.",["Radius 7","[[A=49\\pi\\text{ cm}^2]]"]),
  H("Core","Circumference [[18\\pi]] cm. Find radius.",["[[2\\pi r=18\\pi]]","[[r=9\\text{ cm}]]"]),
  H("Core","Area [[64\\pi]] cm². Find diameter.",["[[r^2=64]]","[[r=8]]","Diameter 16 cm"]),
  H("Extension","Semicircle radius 6 cm: perimeter including diameter.",["Half circumference [[=6\\pi]]","Diameter=12","Perimeter [[=12+6\\pi]]"]),
  H("Extension","A circle's radius increases by factor 3. State area factor.",["Area depends on r².","Factor [[3^2=9]]."])
 ],
 cambridge:"Answers may be exact in terms of π or rounded as instructed.",
 examSuccess:"Mensuration chapter models clear use of units and formula selection."
});

M["17.4"]=C({
 explain:"Arc length and sector area are proportional parts of a whole circle. The fraction of the circle is the central angle divided by 360°. Major sectors use the remaining angle after subtracting the minor angle from 360°.",
 keyPoints:["Use the central angle, not an angle at the circumference.","Major angle = 360° − minor angle.","Sector perimeter includes two radii plus arc length.","Reverse problems can ask for radius or angle."],
 rules:[["[[L=\\frac{\\theta}{360}(2\\pi r)]]","arc length"],["[[A=\\frac{\\theta}{360}\\pi r^2]]","sector area"]],
 method:["Identify radius and central angle.","Decide minor or major sector.","Use θ/360 as the fraction of a full circle.","For perimeter, add straight radial edges.","For reverse problems, form an equation and solve."],
 mistakes:["Using diameter in place of radius.","Forgetting the two radii in sector perimeter.","Using the minor angle for a major sector."],
 vocab:["arc","minor sector","major sector","central angle","sector perimeter"],
 examples:[
  E("Find sector area for r=6 cm, angle 40°.",["[[A=(40/360)\\pi(36)]]","[[A=4\\pi\\text{ cm}^2]]"]),
  E("Find perimeter of a 120° sector of radius 8 cm.",["Arc [[=(120/360)16\\pi=16\\pi/3]]","Add two radii 16","[[P=16+16\\pi/3]]"]),
  E("Arc length [[5\\pi]] cm, radius 12 cm. Find angle.",["[[5\\pi=(\\theta/360)24\\pi]]","[[5=\\theta/15]]","[[\\theta=75^\\circ]]"])
 ],
 practice:{
  foundation:["Arc length r=9,80°.","Sector area r=7,90°.","Semicircle area d=12.","Quadrant perimeter r=5.","Major angle if minor=110°."],
  core:["Area and perimeter of 135° sector r=8.","Major sector area r=6, minor angle50°.","Find angle if area [[18\\pi]], r=9.","Find radius if arc [[6\\pi]], angle120°.","Compound shape using sector and rectangle."],
  extension:["Pac-Man major sector after removing 70° from r=5.","Find angle given sector perimeter and r.","Find r from sector area and angle.","Two sectors have equal arc length: compare θ and r.","Explain why sector formulas are examples of direct proportion."],
  reasoning:["A student uses θ/180 for sector area. Explain the factor error.","Why does a major sector sometimes have larger perimeter than the full circumference? Discuss straight edges."]
 },
 homework:[
  H("Foundation","Arc length r=10,72°.",["[[L=(72/360)20\\pi=4\\pi]]"]),
  H("Foundation","Sector area r=6,120°.",["[[A=(120/360)36\\pi=12\\pi]]"]),
  H("Core","Perimeter of 90° sector r=8.",["Arc [[=4\\pi]]","Two radii =16","[[16+4\\pi]]"]),
  H("Core","Major sector minor angle80°.",["[[360-80=280^\\circ]]"]),
  H("Extension","Arc length [[7\\pi]], r=14. Find angle.",["[[7\\pi=(\\theta/360)28\\pi]]","[[\\theta=90^\\circ]]"]),
  H("Extension","Sector area [[25\\pi]], angle144°. Find r.",["[[25=(144/360)r^2=(2/5)r^2]]","[[r^2=62.5]]","[[r=5\\sqrt{2.5}]]"])
 ],
 cambridge:"The SoW explicitly includes minor and major sectors and reverse calculations.",
 examSuccess:"Mensuration worked examples use diagrams and perimeter/area distinctions.",
 sourceImages:["sector-area.webp"]
});

})();
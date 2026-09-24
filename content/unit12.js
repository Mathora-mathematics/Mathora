(function(C){
C["12.1"]={
  heading:"Surds: exact roots and simplification",
  summary:"A surd is an irrational root left in exact form. The aim is not to turn it into a decimal; the aim is to rewrite it in the simplest exact form so that equivalent surds can be recognised, combined and used in later algebra.",
  keywords:["surd","exact value","square factor","like surds","irrational"],
  explain:[
    "A root such as \\(\\sqrt{2}\\) cannot be written as a terminating or recurring decimal, so it is useful to keep it exactly as a surd. In contrast, \\(\\sqrt{49}=7\\) is rational and is not normally left as a surd.",
    "The key structural idea from the scheme of work is that products and quotients of roots can be split and recombined: \\(\\sqrt{a}\\sqrt{b}=\\sqrt{ab}\\) and \\(\\frac{\\sqrt a}{\\sqrt b}=\\sqrt{\\frac ab}\\) when the expressions are defined.",
    "To simplify a surd, look for the largest square factor. For example, \\(\\sqrt{72}=\\sqrt{36\\times2}=6\\sqrt2\\). This makes later collecting and comparison much easier.",
    "Like surds behave like like terms in algebra. \\(3\\sqrt5+7\\sqrt5=10\\sqrt5\\), but \\(3\\sqrt5+7\\sqrt2\\) cannot be collected."
  ],
  rules:[
    "\\(\\sqrt{ab}=\\sqrt a\\,\\sqrt b\\)",
    "\\(\\sqrt{\\frac ab}=\\frac{\\sqrt a}{\\sqrt b}\\) for valid positive values",
    "Extract square factors: \\(\\sqrt{m^2n}=m\\sqrt n\\)",
    "Only like surds can be added or subtracted",
    "Keep exact answers exact unless the question explicitly asks for a decimal"
  ],
  formulas:["\\sqrt{ab}=\\sqrt a\\sqrt b","\\sqrt{m^2n}=m\\sqrt n","a\\sqrt n+b\\sqrt n=(a+b)\\sqrt n"],
  method:[
    "Factor the number under the root and identify the largest square factor.",
    "Split the root into the square factor and the remaining factor.",
    "Evaluate the square root of the square factor.",
    "Repeat until no square factor greater than 1 remains.",
    "If the expression contains several surds, simplify every surd before trying to collect terms."
  ],
  mistakes:[
    "Do not use \\(\\sqrt a+\\sqrt b=\\sqrt{a+b}\\). This is false in general.",
    "Do not collect unlike surds. \\(\\sqrt2+\\sqrt3\\) is already simplified.",
    "When multiplying surds, multiply coefficients as well as the roots.",
    "For exact geometry questions, do not round halfway through the calculation."
  ],
  diagram:"trapezium",
  examSuccess:{pages:[],note:"Use the Number/Algebra chapters for exact-number and index-law recap. The Cambridge Coursebook is the primary supplied source for this surds sub-unit."},
  examples:[
    {source:"Cambridge Ex 9.7 pattern",q:"Simplify \\(\\sqrt{72}\\).",steps:["Use the largest square factor: \\(72=36\\times2\\).","\\(\\sqrt{72}=\\sqrt{36}\\sqrt2\\).","\\(\\sqrt{72}=6\\sqrt2\\).","Check: the number 2 has no square factor greater than 1."]},
    {source:"Cambridge Ex 9.7 / 9.8 pattern",q:"Simplify \\(3\\sqrt{12}+2\\sqrt{27}-\\sqrt{75}\\).",steps:["Simplify each surd first: \\(\\sqrt{12}=2\\sqrt3\\), \\(\\sqrt{27}=3\\sqrt3\\), \\(\\sqrt{75}=5\\sqrt3\\).","Substitute: \\(3(2\\sqrt3)+2(3\\sqrt3)-5\\sqrt3\\).","Collect like surds: \\(6\\sqrt3+6\\sqrt3-5\\sqrt3\\).","Answer: \\(7\\sqrt3\\)."]},
    {source:"Textbook-style exact calculation",q:"Expand and simplify \\((2+\\sqrt3)(4-\\sqrt3)\\).",steps:["Expand every term: \\(8-2\\sqrt3+4\\sqrt3-3\\).","Combine rational terms: \\(8-3=5\\).","Combine surd terms: \\(-2\\sqrt3+4\\sqrt3=2\\sqrt3\\).","Answer: \\(5+2\\sqrt3\\)."]},
    {source:"Direct source figure • Cambridge surds",q:"A rectangle has side lengths \\(3+\\sqrt{12}\\) cm and \\(2\\sqrt3\\) cm. Find its exact perimeter.",context:"Use the supplied textbook source figure as the visual model.",steps:["Simplify \\(\\sqrt{12}=2\\sqrt3\\).","The first side is \\(3+2\\sqrt3\\).","Perimeter \\(=2[(3+2\\sqrt3)+2\\sqrt3]\\).","\\(=2(3+4\\sqrt3)=6+8\\sqrt3\\) cm."],diagram:""}
  ],
  practice:{
    foundation:[
      "Simplify \\(\\sqrt{20}\\).","Simplify \\(\\sqrt{45}\\).","Simplify \\(\\sqrt{98}\\).","Simplify \\(3\\sqrt{32}\\).","Simplify \\(2\\sqrt{75}\\)."
    ],
    core:[
      "Simplify \\(\\sqrt{12}+\\sqrt{27}\\).","Simplify \\(5\\sqrt8-2\\sqrt{18}\\).","Simplify \\(2\\sqrt3+\\sqrt{48}-\\sqrt{75}\\).","Write \\(4\\sqrt5\\) in the form \\(\\sqrt n\\).","Simplify \\(\\sqrt{18}\\times\\sqrt8\\)."
    ],
    extension:[
      "Expand and simplify \\((3+\\sqrt2)(5-\\sqrt2)\\).","Show that \\(\\sqrt{48}-\\sqrt{27}=\\sqrt3\\).","Find \\(x\\) if \\(x\\sqrt7=\\sqrt{343}\\).","A square has area \\(150\\text{ cm}^2\\). Find its exact perimeter."
    ],
    reasoning:[
      "A student writes \\(\\sqrt8+\\sqrt{18}=\\sqrt{26}\\). Explain precisely why the method is invalid and give the correct result.",
      "Without a calculator, arrange \\(2\\sqrt5\\), \\(3\\sqrt2\\) and \\(\\sqrt{19}\\) in ascending order. Justify your order.",
      "Prove that \\(\\sqrt{12}\\times\\sqrt{27}\\) is rational."
    ]
  },
  homework:[
    {tier:"Foundation",q:"Simplify \\(\\sqrt{108}\\).",steps:["\\(108=36\\times3\\).","\\(\\sqrt{108}=\\sqrt{36}\\sqrt3\\).","Answer: \\(6\\sqrt3\\)."]},
    {tier:"Foundation",q:"Simplify \\(4\\sqrt{18}-3\\sqrt8\\).",steps:["\\(\\sqrt{18}=3\\sqrt2\\) and \\(\\sqrt8=2\\sqrt2\\).","\\(4(3\\sqrt2)-3(2\\sqrt2)=12\\sqrt2-6\\sqrt2\\).","Answer: \\(6\\sqrt2\\)."]},
    {tier:"Core",q:"Write \\(5\\sqrt6\\) in the form \\(\\sqrt n\\).",steps:["\\(5=\\sqrt{25}\\).","\\(5\\sqrt6=\\sqrt{25}\\sqrt6=\\sqrt{150}\\).","So \\(n=150\\)."]},
    {tier:"Core",q:"Expand and simplify \\((2+\\sqrt5)(3-\\sqrt5)\\).",steps:["Expand: \\(6-2\\sqrt5+3\\sqrt5-5\\).","Combine rational terms and surd terms.","Answer: \\(1+\\sqrt5\\)."]},
    {tier:"Extension",q:"A square has exact perimeter \\(20\\sqrt3\\) cm. Find its exact area.",steps:["Side length \\(=20\\sqrt3/4=5\\sqrt3\\) cm.","Area \\(=(5\\sqrt3)^2\\).","Answer: \\(75\\text{ cm}^2\\)."]},
    {tier:"Extension",q:"Show that \\(3\\sqrt8+2\\sqrt{18}=12\\sqrt2\\).",steps:["\\(3\\sqrt8=3(2\\sqrt2)=6\\sqrt2\\).","\\(2\\sqrt{18}=2(3\\sqrt2)=6\\sqrt2\\).","Total \\(=12\\sqrt2\\)."]}
  ]
};

C["12.2"]={
  heading:"Rationalising denominators",
  summary:"Rationalising a denominator rewrites an equivalent exact fraction so the denominator is rational. For a single surd, multiply by that surd; for a two-term denominator containing a surd, multiply by the conjugate so the denominator becomes a difference of two squares.",
  keywords:["rationalise","denominator","conjugate","difference of two squares","equivalent fraction"],
  explain:[
    "Rationalising does not change the value of the expression. We multiply numerator and denominator by the same expression, so we are multiplying by a strategic form of 1.",
    "For \\(\\frac{a}{\\sqrt b}\\), multiplying by \\(\\frac{\\sqrt b}{\\sqrt b}\\) gives a denominator of \\(b\\).",
    "For a denominator such as \\(p-\\sqrt q\\), use the conjugate \\(p+\\sqrt q\\). Their product is \\(p^2-q\\), which has no surd.",
    "The scheme of work explicitly links this skill to difference of two squares. Students should see the identity, not memorise a disconnected trick."
  ],
  rules:[
    "\\(\\frac{a}{\\sqrt b}=\\frac{a\\sqrt b}{b}\\)",
    "Conjugates differ only in the sign between the two terms",
    "\\((p+\\sqrt q)(p-\\sqrt q)=p^2-q\\)",
    "Simplify the numerator and denominator fully after rationalising"
  ],
  formulas:["\\frac{a}{\\sqrt b}=\\frac{a\\sqrt b}{b}","(a+b)(a-b)=a^2-b^2"],
  method:[
    "Simplify any surds first if that makes the expression easier.",
    "Decide whether the denominator is a single surd or a two-term expression.",
    "Multiply numerator and denominator by the required surd or conjugate.",
    "Use difference of two squares in the denominator where appropriate.",
    "Expand, simplify and cancel any common numerical factor."
  ],
  mistakes:[
    "Do not multiply only the denominator; numerator and denominator must both be multiplied.",
    "For \\(a+\\sqrt b\\), the conjugate is \\(a-\\sqrt b\\), not \\(-a+\\sqrt b\\).",
    "Do not stop with an unsimplified denominator such as \\(\\sqrt{25}\\).",
    "Check the final denominator is rational."
  ],
  examSuccess:{pages:[],note:"The Cambridge Coursebook pp. 282–284 is the primary supplied source. Link the method back to the algebra chapter's difference-of-squares work in Exam Success."},
  examples:[
    {source:"Cambridge Ex 9.8 Q5–7 pattern",q:"Rationalise \\(\\frac{7}{\\sqrt5}\\).",steps:["Multiply by \\(\\frac{\\sqrt5}{\\sqrt5}\\).","\\(\\frac{7}{\\sqrt5}\\times\\frac{\\sqrt5}{\\sqrt5}=\\frac{7\\sqrt5}{5}\\).","The denominator is now rational."]},
    {source:"Cambridge Ex 9.8 pattern",q:"Simplify and rationalise \\(\\frac{\\sqrt{18}}{\\sqrt8}\\).",steps:["Simplify first: \\(\\sqrt{18}=3\\sqrt2\\), \\(\\sqrt8=2\\sqrt2\\).","\\(\\frac{3\\sqrt2}{2\\sqrt2}=\\frac32\\).","No further rationalisation is required because the surd cancels."]},
    {source:"Cambridge Ex 9.9 conjugate pattern",q:"Rationalise \\(\\frac{4}{3-\\sqrt5}\\).",steps:["Use the conjugate \\(3+\\sqrt5\\).","\\(\\frac{4}{3-\\sqrt5}\\times\\frac{3+\\sqrt5}{3+\\sqrt5}\\).","Denominator \\(=9-5=4\\).","Numerator \\(=4(3+\\sqrt5)\\).","Cancel 4: answer \\(3+\\sqrt5\\)."]},
    {source:"Extension conjugate example",q:"Write \\(\\frac{2+\\sqrt3}{2-\\sqrt3}\\) in the form \\(a+b\\sqrt3\\).",steps:["Multiply by the conjugate \\(\\frac{2+\\sqrt3}{2+\\sqrt3}\\).","Denominator \\(=(2-\\sqrt3)(2+\\sqrt3)=4-3=1\\).","Numerator \\(=(2+\\sqrt3)^2=4+4\\sqrt3+3\\).","Answer: \\(7+4\\sqrt3\\)."]}
  ],
  practice:{
    foundation:["Rationalise \\(\\frac3{\\sqrt2}\\).","Rationalise \\(\\frac5{\\sqrt7}\\).","Rationalise \\(\\frac{2\\sqrt3}{\\sqrt5}\\).","Simplify \\(\\frac{\\sqrt{45}}{\\sqrt5}\\).","Simplify \\(\\frac{\\sqrt{72}}{\\sqrt8}\\)."],
    core:["Rationalise \\(\\frac1{2+\\sqrt3}\\).","Rationalise \\(\\frac6{3+\\sqrt2}\\).","Rationalise \\(\\frac5{\\sqrt7-1}\\).","Rationalise \\(\\frac3{2-\\sqrt5}\\).","Simplify \\(\\frac{2\\sqrt2+\\sqrt6}{\\sqrt2}\\)."],
    extension:["Rationalise \\(\\frac2{\\sqrt7-\\sqrt5}\\).","Write \\(\\frac{3+\\sqrt2}{3-\\sqrt2}\\) in the form \\(a+b\\sqrt2\\).","Find the exact value of \\(\\frac1{2+\\sqrt3}+\\frac1{2-\\sqrt3}\\).","Show that \\(\\frac1{\\sqrt5-2}=\\sqrt5+2\\)."],
    reasoning:["Explain why multiplying by a conjugate removes a surd from a two-term denominator.","A student rationalises \\(\\frac4{3-\\sqrt5}\\) by multiplying only the denominator by \\(3+\\sqrt5\\). Explain the mathematical error.","Create a fraction with denominator \\(4+\\sqrt7\\) whose rationalised form is an integer plus a surd."]
  },
  homework:[
    {tier:"Foundation",q:"Rationalise \\(\\frac4{\\sqrt3}\\).",steps:["Multiply by \\(\\sqrt3/\\sqrt3\\).","Answer \\(\\frac{4\\sqrt3}{3}\\)."]},
    {tier:"Foundation",q:"Simplify \\(\\frac{\\sqrt{50}}{\\sqrt2}\\).",steps:["Combine the roots: \\(\\sqrt{50/2}=\\sqrt{25}\\).","Answer: \\(5\\)."]},
    {tier:"Core",q:"Rationalise \\(\\frac3{2+\\sqrt3}\\).",steps:["Use conjugate \\(2-\\sqrt3\\).","Denominator \\(=4-3=1\\).","Numerator \\(=3(2-\\sqrt3)\\).","Answer: \\(6-3\\sqrt3\\)."]},
    {tier:"Core",q:"Rationalise \\(\\frac5{4-\\sqrt7}\\).",steps:["Use conjugate \\(4+\\sqrt7\\).","Denominator \\(=16-7=9\\).","Answer \\(\\frac{5(4+\\sqrt7)}9\\)."]},
    {tier:"Extension",q:"Simplify \\(\\frac{1+\\sqrt2}{1-\\sqrt2}\\).",steps:["Multiply by \\(1+\\sqrt2\\).","Denominator \\(=1-2=-1\\).","Numerator \\(=(1+\\sqrt2)^2=3+2\\sqrt2\\).","Answer: \\(-3-2\\sqrt2\\)."]},
    {tier:"Extension",q:"Evaluate exactly \\(\\frac1{\\sqrt3-1}-\\frac1{\\sqrt3+1}\\).",steps:["Rationalise each fraction or combine over a common denominator.","The combined numerator is \\((\\sqrt3+1)-(\\sqrt3-1)=2\\).","The denominator is \\(3-1=2\\).","Answer: \\(1\\)."]}
  ]
};
})(window.LESSON_CONTENT);
(function(C){
C["13.1"]={
  heading:"Factorise and simplify rational expressions",
  summary:"An algebraic fraction is simplified by treating the numerator and denominator as algebraic expressions: factorise first, identify common factors, then cancel factors—not terms. Restrictions come from the original denominator.",
  keywords:["rational expression","factor","common factor","restriction","cancel"],
  explain:[
    "A fraction such as \\(\\frac{x^2-9}{x^2+x-6}\\) cannot be simplified safely until both numerator and denominator are factorised.",
    "Cancellation means dividing numerator and denominator by the same non-zero factor. That is why \\(\\frac{x(x+3)}{x(x-2)}=\\frac{x+3}{x-2}\\) for \\(x\\ne0\\).",
    "A value that makes the original denominator zero is excluded even if the factor later cancels. The restriction belongs to the original expression.",
    "This lesson connects factorising quadratics, difference of two squares and numerical fraction simplification."
  ],
  rules:[
    "Factorise numerator and denominator completely before cancelling.",
    "Cancel common factors only: \\(\\frac{(x-3)(x+4)}{(x-3)(x+1)}=\\frac{x+4}{x+1}\\).",
    "Do not cancel across addition or subtraction.",
    "State values excluded by the original denominator when required."
  ],
  formulas:["a^2-b^2=(a-b)(a+b)","x^2+bx+c=(x+p)(x+q)"],
  method:[
    "Factorise the numerator fully.",
    "Factorise the denominator fully.",
    "Record any values that make the original denominator zero.",
    "Cancel factors common to the whole numerator and denominator.",
    "Check that no further factorisation or numerical simplification is possible."
  ],
  mistakes:[
    "From \\(\\frac{x+5}{x}\\), the x cannot be cancelled because x is not a factor of the entire numerator.",
    "Do not lose excluded values when a factor cancels.",
    "Check signs carefully when factorising a difference of squares.",
    "A simplified expression is equivalent only on the original domain."
  ],
  examSuccess:{pages:[59,60,61],note:"Exam Success section 2.3: manipulate algebraic fractions; factorise and simplify rational expressions. Use its factor-first layout and worked algebraic-fraction structure."},
  examples:[
    {source:"Cambridge Ex 14.13 pattern",q:"Simplify \\(\\frac{18x^3}{24x^5}\\).",steps:["Simplify the numerical part: \\(18/24=3/4\\).","Use index laws: \\(x^3/x^5=x^{-2}=1/x^2\\).","Answer: \\(\\frac{3}{4x^2}\\), with \\(x\\ne0\\)."]},
    {source:"Cambridge Ex 14.13 pattern",q:"Simplify \\(\\frac{x^2-5x+6}{x^2-x-6}\\).",steps:["Factorise: \\(x^2-5x+6=(x-2)(x-3)\\).","Factorise: \\(x^2-x-6=(x-3)(x+2)\\).","Cancel the common factor \\(x-3\\).","Answer: \\(\\frac{x-2}{x+2}\\), with original restrictions \\(x\\ne3,-2\\)."]},
    {source:"Cambridge Ex 14.14 pattern",q:"Simplify \\(\\frac{4x^2-16}{2x^2+10x+12}\\).",steps:["Factor numerator: \\(4(x^2-4)=4(x-2)(x+2)\\).","Factor denominator: \\(2(x^2+5x+6)=2(x+2)(x+3)\\).","Cancel \\(2(x+2)\\).","Answer: \\(\\frac{2(x-2)}{x+3}\\)."]},
    {source:"Misconception check",q:"A student writes \\(\\frac{x+5}{x}=5\\) after 'cancelling x'. Explain the error.",steps:["Cancellation applies to factors, not terms separated by + or −.","The numerator \\(x+5\\) is not a product containing x as a factor.","You may split the fraction as \\(1+\\frac5x\\), but it does not simplify to 5."]}
  ],
  practice:{
    foundation:["Simplify \\(\\frac{12x}{18}\\).","Simplify \\(\\frac{15a^2}{5a}\\).","Simplify \\(\\frac{18p^3}{24p^5}\\).","Simplify \\(\\frac{x^2-9}{x-3}\\).","Simplify \\(\\frac{x^2+6x}{x}\\)."],
    core:["Simplify \\(\\frac{x^2-16}{x^2+x-20}\\).","Simplify \\(\\frac{2x^2-8}{x^2+5x+6}\\).","Simplify \\(\\frac{3x^2+12x}{x^2+6x+8}\\).","Simplify \\(\\frac{x^2-2x-15}{x^2-25}\\).","State all excluded values for \\(\\frac{x^2-1}{x^2-3x+2}\\)."],
    extension:["Simplify \\(\\frac{2x^2-18}{x^2+x-12}\\).","Simplify \\(\\frac{x^3-4x}{x^2-x-6}\\).","Simplify and state restrictions: \\(\\frac{x^2-4x+4}{x^2-4}\\).","Find x if \\(\\frac{x^2-9}{x-3}=10\\), respecting the original restriction."],
    reasoning:["Explain why a cancelled factor still creates a restriction in the original expression.","Construct a rational expression that simplifies to \\(\\frac{x-1}{x+4}\\) but has two excluded values.","Diagnose the error in simplifying \\(\\frac{2x+6}{2x}\\) to 3."]
  },
  homework:[
    {tier:"Foundation",q:"Simplify \\(\\frac{20x^2}{30x}\\).",steps:["\\(20/30=2/3\\).","\\(x^2/x=x\\).","Answer: \\(\\frac{2x}{3}\\)."]},
    {tier:"Foundation",q:"Simplify \\(\\frac{x^2-25}{x-5}\\).",steps:["\\(x^2-25=(x-5)(x+5)\\).","Cancel \\(x-5\\).","Answer: \\(x+5\\), with \\(x\\ne5\\)."]},
    {tier:"Core",q:"Simplify \\(\\frac{x^2+7x+12}{x^2+5x+4}\\).",steps:["Factorise: \\(\\frac{(x+3)(x+4)}{(x+1)(x+4)}\\).","Cancel \\(x+4\\).","Answer: \\(\\frac{x+3}{x+1}\\)."]},
    {tier:"Core",q:"Simplify \\(\\frac{2x^2-8x}{x^2-16}\\).",steps:["Factor top: \\(2x(x-4)\\).","Factor bottom: \\((x-4)(x+4)\\).","Answer: \\(\\frac{2x}{x+4}\\)."]},
    {tier:"Extension",q:"Simplify and state restrictions: \\(\\frac{x^2-6x+9}{x^2-9}\\).",steps:["Factorise: \\(\\frac{(x-3)^2}{(x-3)(x+3)}\\).","Cancel one \\(x-3\\).","Answer: \\(\\frac{x-3}{x+3}\\).","Restrictions: \\(x\\ne3,-3\\)."]},
    {tier:"Extension",q:"Explain why \\(\\frac{x+2}{x}\\ne2\\) in general.",steps:["The numerator is a sum, not a product containing x as a common factor.","For x=1, the expression equals 3, so it cannot be identically 2."]}
  ]
};

C["13.2"]={
  heading:"Manipulating algebraic fractions",
  summary:"The four operations with algebraic fractions follow the same principles as numerical fractions. Factor first where useful, use reciprocals for division, and use a common denominator for addition/subtraction.",
  keywords:["lowest common denominator","reciprocal","factorise","single fraction","simplify"],
  explain:[
    "Multiplication and division are usually easiest after factorising, because common factors can be cancelled before multiplying.",
    "Division by a fraction is multiplication by its reciprocal.",
    "Addition and subtraction require a common denominator. With algebraic denominators, factorisation often reveals the lowest common denominator.",
    "After combining, always factor the new numerator if possible because a factor may cancel with the denominator."
  ],
  rules:[
    "\\(\\frac ab\\times\\frac cd=\\frac{ac}{bd}\\)",
    "\\(\\frac ab\\div\\frac cd=\\frac ab\\times\\frac dc\\)",
    "\\(\\frac ab+\\frac cd=\\frac{ad+bc}{bd}\\) when no simpler common denominator is available",
    "Factor before and after combining."
  ],
  formulas:["\\frac ab\\div\\frac cd=\\frac{ad}{bc}","\\frac ab+\\frac cd=\\frac{ad+bc}{bd}"],
  method:[
    "Factor all factorable numerators and denominators.",
    "For × or ÷, turn division into multiplication by the reciprocal and cancel common factors.",
    "For + or −, identify the lowest common denominator.",
    "Rewrite each fraction with that denominator.",
    "Combine numerators, then factor and simplify the result."
  ],
  mistakes:[
    "Do not add denominators when adding fractions.",
    "When dividing, only the second fraction is inverted.",
    "Use brackets around a numerator being subtracted.",
    "A common denominator should contain each required factor at the necessary power."
  ],
  examSuccess:{pages:[59,60,61],note:"Exam Success 2.3 includes worked algebraic-fraction manipulation, including addition and subtraction with unlike denominators."},
  examples:[
    {source:"Fluency",q:"Simplify \\(\\frac{3x}{4}\\times\\frac{8}{9x}\\).",steps:["Cancel x.","Reduce \\(8/4=2\\) and \\(3/9=1/3\\).","Answer: \\(\\frac23\\)."]},
    {source:"Division",q:"Simplify \\(\\frac{5a}{6}\\div\\frac{10a^2}{9}\\).",steps:["Multiply by reciprocal: \\(\\frac{5a}{6}\\times\\frac9{10a^2}\\).","Cancel numerical factors and one a.","Answer: \\(\\frac3{4a}\\)."]},
    {source:"Exam Success-style addition",q:"Write \\(\\frac2x+\\frac3{x+1}\\) as a single fraction.",steps:["LCD: \\(x(x+1)\\).","Rewrite: \\(\\frac{2(x+1)}{x(x+1)}+\\frac{3x}{x(x+1)}\\).","Combine numerators: \\(2x+2+3x=5x+2\\).","Answer: \\(\\frac{5x+2}{x(x+1)}\\)."]},
    {source:"Cambridge Ex 14.12 pattern",q:"Simplify \\(\\frac{3x+4}{x^2+x-6}-\\frac1{x+3}\\).",steps:["Factor \\(x^2+x-6=(x+3)(x-2)\\).","LCD: \\((x+3)(x-2)\\).","Numerator: \\(3x+4-(x-2)=2x+6=2(x+3)\\).","Cancel \\(x+3\\).","Answer: \\(\\frac2{x-2}\\)."]}
  ],
  practice:{
    foundation:["Simplify \\(\\frac{2x}{3}\\times\\frac9{4x}\\).","Simplify \\(\\frac{5a}{8}\\div\\frac{15a}{16}\\).","Simplify \\(\\frac2x+\\frac5x\\).","Simplify \\(\\frac7y-\\frac3y\\).","Simplify \\(\\frac1x+\\frac12\\)."],
    core:["Simplify \\(\\frac1x+\\frac2{x+3}\\).","Simplify \\(\\frac4{x-2}-\\frac1{x+1}\\).","Simplify \\(\\frac{x+2}{3}\\times\\frac6{x^2-4}\\).","Simplify \\(\\frac{x^2-9}{2x}\\div\\frac{x+3}{4}\\).","Simplify \\(\\frac2{x+1}+\\frac3{x-1}\\)."],
    extension:["Simplify \\(\\frac1{x-1}-\\frac1{x+1}\\).","Simplify \\(\\frac{x}{x-2}\\div\\frac{2x}{x+5}\\).","Simplify fully \\(\\frac{x+1}{x-1}+\\frac{x-1}{x+1}\\).","Find x if \\(\\frac1x+\\frac1{x+2}=\\frac34\\)."],
    reasoning:["Explain why factorising denominators first can reduce the amount of algebra.","Show that \\(\\frac{3x+4}{x^2+x-6}-\\frac1{x+3}=\\frac2{x-2}\\).","Create two algebraic fractions whose sum simplifies to \\(\\frac3{x+2}\\)."]
  },
  homework:[
    {tier:"Foundation",q:"Simplify \\(\\frac3x+\\frac4x\\).",steps:["Same denominator, so add numerators.","Answer: \\(\\frac7x\\)."]},
    {tier:"Foundation",q:"Simplify \\(\\frac{4x}{5}\\times\\frac{15}{8x}\\).",steps:["Cancel x.","Reduce 15/5 and 4/8.","Answer: \\(\\frac32\\)."]},
    {tier:"Core",q:"Simplify \\(\\frac1x+\\frac2{x+2}\\).",steps:["LCD \\(=x(x+2)\\).","Numerator \\(=x+2+2x=3x+2\\).","Answer: \\(\\frac{3x+2}{x(x+2)}\\)."]},
    {tier:"Core",q:"Simplify \\(\\frac3{x-1}-\\frac1{x+1}\\).",steps:["LCD \\((x-1)(x+1)\\).","Numerator \\(=3(x+1)-(x-1)=2x+4\\).","Answer: \\(\\frac{2(x+2)}{x^2-1}\\)."]},
    {tier:"Extension",q:"Simplify \\(\\frac{x^2-4}{3x}\\div\\frac{x+2}{6x}\\).",steps:["Multiply by reciprocal.","\\(\\frac{(x-2)(x+2)}{3x}\\times\\frac{6x}{x+2}\\).","Cancel common factors.","Answer: \\(2(x-2)\\)."]},
    {tier:"Extension",q:"Write \\(\\frac2{x+3}+\\frac1{x-3}\\) as one fraction.",steps:["LCD \\((x+3)(x-3)\\).","Numerator \\(=2(x-3)+(x+3)=3x-3\\).","Answer: \\(\\frac{3(x-1)}{x^2-9}\\)."]}
  ]
};
})(window.LESSON_CONTENT);
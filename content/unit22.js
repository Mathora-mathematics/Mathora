(function(C){
C["22.1"]={
 heading:"Direct and inverse proportion",
 summary:"Proportion models how one quantity changes with another through a constant of proportionality. Translate \\(\\propto\\) into an equation with constant k, find k from known values, then use the model.",
 keywords:["direct proportion","inverse proportion","constant of proportionality","power","model"],
 explain:[
  "If \\(y\\propto x\\), then \\(y=kx\\). The ratio \\(y/x\\) is constant.",
  "If \\(y\\propto1/x\\), then \\(y=k/x\\). The product xy is constant.",
  "The SoW includes relationships with squares, cubes, square roots and cube roots: e.g. \\(y\\propto x^2\\), \\(t\\propto1/v^2\\), \\(p\\propto\\sqrt q\\).",
  "The symbol \\(\\propto\\) states a relationship, not equality. Introduce k before calculating."
 ],
 rules:["\\(y\\propto x^n\\Rightarrow y=kx^n\\).","\\(y\\propto1/x^n\\Rightarrow y=k/x^n\\).","Find k using a known pair of values.","Use the same k for all values in the stated model."],
 formulas:["y=kx","y=\\frac{k}{x}","y=kx^2","y=\\frac{k}{x^2}","y=k\\sqrt{x}"],
 method:["Translate the proportionality statement into an equation with k.","Substitute known values to find k.","Write the complete model with k.","Substitute the new value to find the unknown.","Check how the answer should scale: direct increases together; inverse moves oppositely."],
 mistakes:["Do not replace \\(\\propto\\) with = without k.","Inverse-square means \\(1/x^2\\), not \\((1/x)^?\\) forgotten or \\(1/(2x)\\).","If x doubles in \\(y\\propto x^2\\), y quadruples—not doubles.","Keep roots/powers attached to the correct variable."],
 examSuccess:{pages:[50,51,52,53,54],note:"Exam Success Algebra/graphs provides proportional reasoning context; Cambridge pp.747–749 Ex21.12 is the direct SoW source. SoW explicitly includes linear, square, root, cube and cube-root relationships."},
 examples:[
  {source:"Cambridge Ex21.12 direct",q:"\\(y\\propto x\\). When x=6, y=15. Find y when x=10.",steps:["Write \\(y=kx\\).","\\(15=6k\\Rightarrow k=2.5\\).","Model: \\(y=2.5x\\).","At x=10, \\(y=25\\)."]},
  {source:"Square proportion",q:"\\(y\\propto x^2\\). y=18 when x=3. Find y when x=5.",steps:["\\(y=kx^2\\).","\\(18=9k\\Rightarrow k=2\\).","\\(y=2x^2\\).","At x=5, y=50."]},
  {source:"Inverse square • SoW notation",q:"\\(t\\propto\\frac1{v^2}\\). t=12 when v=2. Find t when v=4.",steps:["\\(t=\\frac{k}{v^2}\\).","\\(12=k/4\\Rightarrow k=48\\).","\\(t=48/v^2\\).","At v=4, \\(t=48/16=3\\)."]},
  {source:"Root proportion",q:"\\(p\\propto\\sqrt q\\). p=10 when q=25. Find p when q=81.",steps:["\\(p=k\\sqrt q\\).","\\(10=5k\\Rightarrow k=2\\).","\\(p=2\\sqrt q\\).","At q=81, p=18."]}
 ],
 practice:{
  foundation:["y∝x, y=12 when x=3. Find k.","Use previous model to find y when x=7.","y∝1/x, y=5 when x=4. Find k.","y∝x², y=20 when x=2. Find k."],
  core:["y∝x², y=45 when x=3. Find y at x=7.","t∝1/v, t=8 when v=6. Find t at v=4.","p∝√q, p=12 when q=16. Find p at q=49.","A∝r², A=50 when r=5. Find A when r=8.","z∝x³, z=54 when x=3. Find z when x=5."],
  extension:["t∝1/v² and t=20 at v=3. Find v when t=5.","y∝∛x and y=6 when x=27. Find y when x=216.","If y∝x^n and doubling x multiplies y by 8, find n.","A model y=k/x² gives y=7.5 at x=4. Find x when y=1.2."],
  reasoning:["Explain scaling effect when x doubles for y∝x, x², x³ and 1/x².","A student writes y=x² from y∝x². Explain missing information.","How can you test from a table whether y is directly proportional to x?"]
 },
 homework:[
  {tier:"Foundation",q:"y∝x and y=14 when x=7. Find y when x=11.",steps:["\\(y=kx\\).","\\(14=7k\\Rightarrow k=2\\).","y=22."]},
  {tier:"Core",q:"y∝1/x. y=9 when x=4. Find y when x=6.",steps:["\\(y=k/x\\).","\\(9=k/4\\Rightarrow k=36\\).","\\(y=36/6=6\\)."]},
  {tier:"Core",q:"y∝x². y=32 when x=4. Find y when x=10.",steps:["\\(32=16k\\Rightarrow k=2\\).","\\(y=2x^2\\).","At x=10, y=200."]},
  {tier:"Extension",q:"t∝1/v². t=18 when v=2. Find v when t=2.",steps:["\\(18=k/4\\Rightarrow k=72\\).","\\(2=72/v^2\\Rightarrow v^2=36\\).","For positive speed, v=6."]},
  {tier:"Extension",q:"p∝√q. p=15 when q=9. Find q when p=35.",steps:["\\(15=3k\\Rightarrow k=5\\).","\\(35=5\\sqrt q\\Rightarrow\\sqrt q=7\\).","q=49."]},
  {tier:"Extension",q:"Explain why doubling x in y∝1/x² divides y by 4.",steps:["Original \\(y=k/x^2\\).","After doubling: \\(k/(2x)^2=k/(4x^2)=y/4\\)."]}
 ]
};
})(window.LESSON_CONTENT);
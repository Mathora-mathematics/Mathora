(function(C){
C["21.1"]={
 heading:"Set language, notation and Venn diagrams",
 summary:"Sets describe collections of objects. Venn diagrams show membership and overlap visually; set notation gives a concise language for union, intersection, complement and subset relationships.",
 keywords:["set","element","union","intersection","complement","universal set","subset"],
 explain:[
  "The universal set \\(\\xi\\) contains all objects under discussion.",
  "\\(A\\cup B\\) means in A or B or both. \\(A\\cap B\\) means in both A and B.",
  "\\(A'\\) is the complement: elements in the universal set that are not in A.",
  "For two- or three-set Venn problems, fill the deepest overlaps first so shared elements are not double-counted."
 ],
 rules:["\\(A\\cup B\\): union.","\\(A\\cap B\\): intersection.","\\(A'\\): complement within universal set.","\\(A\\subseteq B\\): every element of A is in B.","Start with intersections when filling Venn diagrams."],
 formulas:["n(A\\cup B)=n(A)+n(B)-n(A\\cap B)","(A\\cup B)'=A'\\cap B'","(A\\cap B)'=A'\\cup B'"],
 method:["Identify universal set and named sets.","Translate words into set notation.","For Venn counts, fill deepest intersections first.","Subtract intersection counts from set totals to obtain 'only' regions.","Use the grand total to find the outside region and check all regions sum correctly."],
 mistakes:["'A or B' in set notation normally includes the overlap unless 'but not both' is stated.","Do not place the full set totals directly into circles without subtracting overlap.","Complement depends on the universal set.","In three-set diagrams, start with the triple intersection."],
 diagram:"venn",
 examSuccess:{pages:[15,16,17,18],note:"Exam Success Number chapter contains set notation and Venn-diagram recap. Cambridge pp.286–295 Ex9.10–9.13 is the direct SoW source; the SoW also suggests De Morgan relationships and three-set extension."},
 examples:[
  {source:"Cambridge Ex 9.10 pattern",q:"Let \\(A=\\{1,2,3,5\\}\\), \\(B=\\{2,4,5,6\\}\\). Find \\(A\\cup B\\) and \\(A\\cap B\\).",steps:["Union contains every distinct element in either set: \\(\\{1,2,3,4,5,6\\}\\).","Intersection contains common elements only: \\(\\{2,5\\}\\)."],diagram:"venn"},
  {source:"Two-set Venn",q:"In 40 students, 23 study French, 19 study Spanish and 8 study both. Find French only, Spanish only and neither.",steps:["French only \\(=23-8=15\\).","Spanish only \\(=19-8=11\\).","At least one \\(=15+8+11=34\\).","Neither \\(=40-34=6\\)."],diagram:"venn"},
  {source:"Complement",q:"If \\(\\xi=\\{1,2,3,4,5,6,7,8\\}\\) and \\(A=\\{2,4,6,8\\}\\), find \\(A'\\).",steps:["List elements of universal set not in A.","\\(A'=\\{1,3,5,7\\}\\)."],diagram:"venn"},
  {source:"Three-set strategy",q:"In a three-set Venn diagram, why should the triple intersection be filled before pair-only regions?",steps:["The triple-intersection count belongs to every pair intersection.","If pair totals are filled first, the triple region would be counted repeatedly.","Place deepest overlap first, then subtract it from pair totals."]}
 ],
 practice:{
  foundation:["Write \\(A\\cup B\\) in words.","Write \\(A\\cap B\\) in words.","If \\(A=\\{1,3,5\\}\\), \\(B=\\{3,4,5\\}\\), find union/intersection.","Find complement of even numbers in \\(\\{1,2,3,4,5,6\\}\\).","State whether \\(\\{1,2\\}\\subseteq\\{1,2,3\\}\\)."],
  core:["In 50 people, 28 like tea, 31 coffee, 14 both. Fill Venn regions.","Find neither in the previous problem.","Translate 'in A but not B' into set notation.","Verify \\(n(A\\cup B)=n(A)+n(B)-n(A\\cap B)\\).","Shade \\((A\\cup B)'\\)."],
  extension:["Fill a three-set Venn from totals and pair/triple intersections.","Use De Morgan's law to rewrite \\((A\\cap B)'\\).","Find an unknown intersection given union total.","Construct sets where \\(A\\subset B\\) and \\(B\\cap C=\\varnothing\\)."],
  reasoning:["Why is the overlap subtracted once in the union-count formula?","Explain 'or' in set language versus exclusive-or.","Prove one De Morgan law by describing regions in words."]
 },
 homework:[
  {tier:"Foundation",q:"A={1,2,4}, B={2,3,4,5}. Find union/intersection.",steps:["Union \\(=\\{1,2,3,4,5\\}\\).","Intersection \\(=\\{2,4\\}\\)."]},
  {tier:"Foundation",q:"\\(\\xi=\\{1,2,3,4,5\\}\\), A={2,5}. Find A'.",steps:["Remove 2 and 5 from universal set.","\\(A'=\\{1,3,4\\}\\)."]},
  {tier:"Core",q:"In 60 students, 35 play football, 26 basketball, 12 both. Find neither.",steps:["Union \\(=35+26-12=49\\).","Neither \\(=60-49=11\\)."]},
  {tier:"Core",q:"Write 'not in A or B' using complement notation.",steps:["Not in the union is \\((A\\cup B)'\\).","By De Morgan, this is also \\(A'\\cap B'\\)."]},
  {tier:"Extension",q:"In 80 people, n(A)=45,n(B)=38,n(A∪B)=65. Find n(A∩B).",steps:["\\(65=45+38-n(A\\cap B)\\).","\\(n(A\\cap B)=18\\)."]},
  {tier:"Extension",q:"Explain why a three-set problem should start with the centre.",steps:["The centre contributes to all three sets and all pair intersections.","Accounting for it first prevents double counting."]}
 ]
};
})(window.LESSON_CONTENT);
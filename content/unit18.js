(function(C){
C["18.1"]={
 heading:"Classify and tabulate statistical data",
 summary:"Statistical data must be organised so every observation belongs to a clear category or class. Frequency tables summarise counts; two-way tables show how two classifications interact.",
 keywords:["data","frequency","category","class interval","two-way table"],
 explain:[
  "A frequency table pairs each value/category with the number of observations in it.",
  "For grouped continuous data, class intervals should cover the required range without overlaps or gaps.",
  "A two-way table classifies observations by two variables. Row and column totals give powerful consistency checks.",
  "Labels, units and totals are part of the mathematics, not decoration."
 ],
 rules:["Each observation should be counted once.","Categories/classes must be clear and non-overlapping.","Two-way row and column totals must agree with the grand total.","Continuous class notation should make boundaries unambiguous."],
 formulas:[],
 method:["Identify the type of data and suitable categories/classes.","Tally each observation systematically.","Convert tallies to frequencies.","Calculate row/column totals where relevant.","Check frequencies sum to the number of observations."],
 mistakes:["Do not use overlapping intervals such as 0–10 and 10–20 without defining where 10 belongs.","Do not forget missing row/column totals in two-way tables.","A table without labels or units can be ambiguous."],
 examSuccess:{pages:[197,198,199],note:"Exam Success Statistics begins with organising/displaying data. Cambridge Ex 4.1, 4.2, 4.3 and 4.5 provide the direct table/frequency source."},
 examples:[
  {source:"Cambridge Ex 4.1 pattern",q:"The scores are 2,3,3,4,5,5,5,6. Construct a frequency table.",steps:["List distinct scores 2,3,4,5,6.","Count each: 1,2,1,3,1.","Check total frequency \\(=8\\), matching the number of scores."]},
  {source:"Grouped table",q:"Group 18 heights from 140 cm to under 180 cm into 10 cm classes.",steps:["Use classes \\(140\\le h<150\\), \\(150\\le h<160\\), \\(160\\le h<170\\), \\(170\\le h<180\\).","Tally each value once.","Convert tallies to frequencies and check the total is 18."]},
  {source:"Two-way table",q:"A class has 14 boys and 16 girls. 9 boys and 10 girls study French. Complete the two-way table for French / not French.",steps:["Boys not French \\(=14-9=5\\).","Girls not French \\(=16-10=6\\).","French total \\(=19\\), not French total \\(=11\\).","Grand total \\(=30\\)."]},
  {source:"Reverse table reasoning",q:"A two-way table has a row total of 28. Two cells in the row are 7 and 12. Find the missing cell.",steps:["Cell frequencies in a row sum to the row total.","Missing \\(=28-7-12=9\\)."]}
 ],
 practice:{
  foundation:["Make a frequency table for 1,2,2,3,3,3,4,5.","Find total frequency from 4,7,9,5.","Complete a row with total 25 and entries 8,6,?.","Write four non-overlapping classes of width 5 starting at 20.","State why totals are useful."],
  core:["Construct grouped frequencies for 12 values using classes 0≤x<10,10≤x<20,20≤x<30.","Complete a two-way table from row/column totals.","Find a missing frequency if grand total is 80.","Design suitable groups for journey times from 4 to 58 minutes.","Explain why 10≤x<20 avoids boundary ambiguity."],
  extension:["A table has one missing interior cell and both row/column totals. Find it in two ways.","Compare advantages of raw data and frequency tables.","Choose suitable class widths for 250 values over a large range.","Construct a two-way table from a written survey description."],
  reasoning:["Why should grouped classes normally cover the full data range?","A student uses 0–10 and 10–20. Explain the ambiguity and repair it.","Create a two-way table with grand total 60 and at least one missing cell that can be deduced."]
 },
 homework:[
  {tier:"Foundation",q:"Construct a frequency table for 4,4,5,6,6,6,7,8,8.",steps:["Frequencies: 4→2, 5→1, 6→3, 7→1, 8→2.","Check total 9."]},
  {tier:"Core",q:"A row total is 36 with entries 9,14 and x. Find x.",steps:["\\(9+14+x=36\\).","\\(x=13\\)."]},
  {tier:"Core",q:"Write four classes of width 10 for values from 30 to under 70.",steps:["\\(30\\le x<40\\), \\(40\\le x<50\\), \\(50\\le x<60\\), \\(60\\le x<70\\)."]},
  {tier:"Extension",q:"In 50 students, 28 play football, 19 play basketball and 12 play both. How many play football only and basketball only?",steps:["Football only \\(=28-12=16\\).","Basketball only \\(=19-12=7\\)."]}
 ]
};

C["18.2"]={
 heading:"Mean, median, mode, quartiles and spread",
 summary:"Measures of central tendency describe a typical value; measures of spread describe variability. The most useful measure depends on the data and context.",
 keywords:["mean","median","mode","quartile","range","IQR"],
 explain:[
  "Mean uses every value and is calculated by total divided by number of values.",
  "Median is the middle value after ordering and is resistant to extreme outliers compared with the mean.",
  "Mode is the most frequent value/category.",
  "Range is max−min; interquartile range is \\(Q_3-Q_1\\), describing the middle 50%."
 ],
 rules:["Mean \\(=\\frac{\\sum x}{n}\\).","Range \\(=\\max-\\min\\).","IQR \\(=Q_3-Q_1\\).","Order data before locating median/quartiles."],
 formulas:["\\bar x=\\frac{\\sum x}{n}","\\text{range}=\\max-\\min","IQR=Q_3-Q_1"],
 method:["Order the data for median/quartile work.","Calculate the requested measure carefully.","For comparisons, use one measure of centre and one of spread.","Comment in context, not just with numbers."],
 mistakes:["Do not find the median from unordered data.","Mode can be non-unique or absent.","A higher mean does not imply more consistency.","Range is highly affected by extreme values."],
 examSuccess:{pages:[204,205],note:"Exam Success Statistics reviews averages and measures of spread; Cambridge pp.370–371 Ex12.1 is primary."},
 examples:[
  {source:"Cambridge Ex 12.1 pattern",q:"Find mean, median, mode and range of 4,6,6,9,10.",steps:["Mean \\(=(4+6+6+9+10)/5=35/5=7\\).","Median = 6.","Mode = 6.","Range \\(=10-4=6\\)."]},
  {source:"Even number of values",q:"Find the median of 3,5,7,8,12,20.",steps:["There are 6 values, so middle positions are 3rd and 4th.","Median \\(=(7+8)/2=7.5\\)."]},
  {source:"Quartiles",q:"For ordered data 2,4,5,7,8,9,11,13,15, find Q1, median, Q3 and IQR.",steps:["Median is 8.","Lower half 2,4,5,7 gives \\(Q_1=(4+5)/2=4.5\\).","Upper half 9,11,13,15 gives \\(Q_3=(11+13)/2=12\\).","IQR \\(=12-4.5=7.5\\)."]},
  {source:"Comparison",q:"Class A median 68, IQR 12; Class B median 72, IQR 20. Compare.",steps:["Class B has higher typical score because median 72>68.","Class A is more consistent because IQR 12<20.","State both comparisons in context."]}
 ],
 practice:{
  foundation:["Find mean of 5,7,8,10.","Find median of 2,4,6,9,12.","Find mode of 3,3,4,5,5,5,6.","Find range of 8,12,14,21.","Order 9,2,7,4,6 and find median."],
  core:["Find all four measures for 4,5,5,7,9,10,12.","Find Q1,Q3,IQR of 1,3,5,7,9,11,13,15.","The mean of 6 values is 12. Find total.","Five values have mean 8; four total 29. Find fifth.","Compare two data sets using given median/IQR."],
  extension:["A value 100 is added to 5,6,6,7,8. Discuss effect on mean/median/range.","Find x if mean of 4,7,x,12 is 8.","Construct 7 values with mean 10, median 9 and mode 8.","Two sets have same mean but different IQR. Explain what this shows."],
  reasoning:["When is median preferable to mean?","Why is IQR more resistant to outliers than range?","Can a data set have two modes? Give an example."]
 },
 homework:[
  {tier:"Foundation",q:"Find mean and range of 6,8,9,12,15.",steps:["Mean \\(=50/5=10\\).","Range \\(=15-6=9\\)."]},
  {tier:"Core",q:"Find median and IQR of 2,4,5,6,8,11,13,14.",steps:["Median \\(=(6+8)/2=7\\).","\\(Q_1=(4+5)/2=4.5\\).","\\(Q_3=(11+13)/2=12\\).","IQR=7.5."]},
  {tier:"Core",q:"Mean of 8 values is 13. Find total.",steps:["Total \\(=8\\times13=104\\)."]},
  {tier:"Extension",q:"Mean of 5 numbers is 12. Four numbers are 8,10,13,15. Find fifth.",steps:["Required total \\(=60\\).","Known total \\(=46\\).","Fifth \\(=14\\)."]},
  {tier:"Extension",q:"Explain why adding 1000 to every data value changes mean/median but not range/IQR.",steps:["Every location measure shifts by 1000.","Differences between values stay the same.","So spread measures based on differences remain unchanged."]}
 ]
};

C["18.3"]={
 heading:"Estimate the mean from grouped data",
 summary:"When data are grouped into intervals, exact individual values are unknown. Use each class midpoint as a representative value, multiply by frequency, and divide total estimated value by total frequency.",
 keywords:["grouped data","midpoint","frequency","estimated mean","fx"],
 explain:[
  "For a class \\(20\\le x<30\\), midpoint is 25. We assume the class values are represented by 25 for an estimate.",
  "Create an fx column: midpoint × frequency.",
  "Estimated mean is \\(\\frac{\\sum fx}{\\sum f}\\).",
  "It is an estimate because the true values within each interval are not known."
 ],
 rules:["Midpoint \\(=\\frac{\\text{lower}+\\text{upper}}2\\).","Estimated mean \\(=\\frac{\\sum fx}{\\sum f}\\).","Use class boundaries/endpoints consistently."],
 formulas:["m=\\frac{L+U}{2}","\\bar x\\approx\\frac{\\sum fm}{\\sum f}"],
 method:["Find each class midpoint.","Multiply each midpoint by its frequency.","Add the products to get \\(\\sum fx\\).","Add frequencies to get \\(\\sum f\\).","Divide and state that the mean is estimated."],
 mistakes:["Do not use the lower endpoint as representative value.","Do not divide \\(\\sum fx\\) by number of classes.","The answer is an estimate, not exact."],
 examSuccess:{pages:[206,207],note:"Exam Success Statistics covers grouped data and estimated averages; Cambridge Ex12.3–12.5 is primary."},
 examples:[
  {source:"Cambridge Ex 12.3 pattern",q:"Classes 0–10,10–20,20–30 have frequencies 3,7,5. Estimate the mean.",steps:["Midpoints: 5,15,25.","fx: 15,105,125.","\\(\\sum fx=245\\), \\(\\sum f=15\\).","Estimated mean \\(=245/15=16.3\\) (3 s.f.)."]},
  {source:"Unequal frequencies",q:"Times 20–30,30–40,40–50,50–60 have frequencies 4,9,11,6. Estimate mean.",steps:["Midpoints: 25,35,45,55.","fx: 100,315,495,330.","\\(\\sum fx=1240\\), \\(\\sum f=30\\).","Mean \\(\\approx41.3\\)."]},
  {source:"Reverse frequency",q:"A grouped table has estimated total \\(\\sum fx=840\\) and total frequency 24. Find estimated mean.",steps:["Use \\(840/24\\).","Estimated mean = 35."]},
  {source:"Why estimate?",q:"Explain why a grouped-data mean cannot usually be exact.",steps:["The table tells only how many values lie in each interval.","It does not give their exact locations.","Midpoints replace unknown values, so the result is estimated."]}
 ],
 practice:{
  foundation:["Find midpoint of 10–20.","Find midpoint of 35–45.","Calculate fx for midpoint 25, frequency 8.","Find estimated mean if \\(\\sum fx=450,\\sum f=15\\)."],
  core:["Estimate mean for classes 0–5,5–10,10–15 with f=2,6,4.","Estimate mean for 10–20,20–40,40–50 with f=5,8,7.","Complete a midpoint/f/fx table.","Find missing fx value.","Compare estimated means of two grouped sets."],
  extension:["Find missing frequency if estimated mean and other table entries are given.","Explain effect of wider classes on precision of an estimate.","Construct two different raw data sets consistent with the same grouped table but different exact means.","Estimate total from a grouped frequency table."],
  reasoning:["Why is midpoint the conventional representative value?","Can estimated mean lie outside the data range? Explain.","A student divides by the number of classes. Diagnose the error."]
 },
 homework:[
  {tier:"Foundation",q:"Find midpoint of 40≤x<60.",steps:["\\((40+60)/2=50\\)."]},
  {tier:"Core",q:"Classes 0–10,10–20,20–30 have f=4,5,1. Estimate mean.",steps:["Midpoints 5,15,25.","fx 20,75,25; total 120.","Frequency total 10.","Estimated mean 12."]},
  {tier:"Core",q:"\\(\\sum fx=1260\\), \\(\\sum f=35\\). Estimate mean.",steps:["\\(1260/35=36\\)."]},
  {tier:"Extension",q:"Class midpoints 10,20,30 have frequencies 2,x,4. Estimated mean is 22. Find x.",steps:["\\(\\frac{20+20x+120}{6+x}=22\\).","\\(140+20x=132+22x\\).","\\(8=2x\\).","\\(x=4\\)."]}
 ]
};

C["18.4"]={
 heading:"Modal class and median class",
 summary:"For grouped data, the modal class is the class with greatest frequency. The median class is the interval containing the middle observation(s), found using cumulative frequency.",
 keywords:["modal class","median class","grouped data","cumulative frequency","interval"],
 explain:[
  "Because individual values are unknown, grouped data usually identify a modal class rather than an exact mode.",
  "The modal class has the highest frequency.",
  "To locate the median class, find the middle position and use cumulative frequency to identify which interval contains it.",
  "This distinction is important: highest-frequency class and middle-position class answer different questions."
 ],
 rules:["Modal class = interval with greatest frequency.","Median position is around \\(n/2\\).","Median class is where cumulative frequency first reaches/passes the median position."],
 formulas:[],
 method:["For mode, scan frequencies and find the maximum.","For median class, total the frequencies.","Find the middle position.","Build running cumulative totals until the middle position is reached.","Quote the full class interval."],
 mistakes:["Do not quote a class midpoint as the mode unless asked for an estimate.","The median class is not necessarily the class with the middle midpoint.","Always quote interval boundaries clearly."],
 examSuccess:{pages:[206,207],note:"Exam Success grouped-data section supports modal/median class language; SoW notes these can be assessed in exams."},
 examples:[
  {source:"Modal class",q:"Frequencies for 0–10,10–20,20–30,30–40 are 4,9,13,6. State modal class.",steps:["Largest frequency is 13.","It belongs to 20–30.","Modal class: \\(20\\le x<30\\)."]},
  {source:"Median class",q:"The same table has total 32 values. State median class.",steps:["Median lies around 16th/17th observations.","Cumulative frequencies: 4,13,26,32.","The 16th and 17th observations lie in 20–30.","Median class: 20–30."]},
  {source:"Different classes",q:"Frequencies 10,18,12,10 have cumulative totals 10,28,40,50. Identify modal and median classes.",steps:["Modal class is second class because 18 is largest.","Median position about 25th/26th.","Cumulative frequency reaches 28 in second class.","Median class is also second class."]},
  {source:"Reasoning",q:"Can modal class and median class be different?",steps:["Yes.","Mode depends on largest class frequency.","Median depends on where the halfway position lies.","These conditions need not occur in the same interval."]}
 ],
 practice:{
  foundation:["Identify modal class from f=3,7,11,5.","Find total from f=4,9,6,1.","Locate median class using cumulative totals 5,12,23,30 for n=30.","State why exact mode cannot be found from grouped intervals."],
  core:["Find modal/median class for f=6,8,15,9,2.","Complete cumulative frequencies then find median class.","A table has n=80; which cumulative position locates median?","Compare modal classes of two groups."],
  extension:["Create grouped frequencies where modal and median classes differ.","Find missing frequency if modal class is specified and totals given.","Explain ambiguity if two classes share the highest frequency.","Discuss whether class widths affect interpreting modal class in a histogram."],
  reasoning:["Why does a histogram with unequal class widths use frequency density rather than raw frequency to judge tallest bar?","A student claims tallest histogram bar always gives modal class based on frequency. Explain nuance.","Construct an example with no unique modal class."]
 },
 homework:[
  {tier:"Foundation",q:"Frequencies 2,5,9,4. State modal class position.",steps:["Highest frequency 9.","Third class is modal."]},
  {tier:"Core",q:"Frequencies 5,8,12,5 total 30. Cumulative totals are 5,13,25,30. Which class contains the median?",steps:["Median around 15th/16th.","Both lie after 13 and before/equal 25.","Third class."]},
  {tier:"Extension",q:"Explain why a grouped table cannot usually give an exact median value.",steps:["Only the interval containing the middle observation is known.","Exact positions within that interval are unknown."]}
 ]
};

C["18.5"]={
 heading:"Read and interpret tables",
 summary:"Interpreting a table means extracting relevant values, combining them correctly, comparing categories and making statements supported by the data.",
 keywords:["interpret","frequency","proportion","percentage","comparison"],
 explain:[
  "Read headings, units and totals before calculating.",
  "A table may support counts, fractions, percentages or conditional comparisons.",
  "When comparing groups of different sizes, proportions/percentages are often fairer than raw counts.",
  "Conclusions should quote evidence from the table."
 ],
 rules:["Use the correct row/column denominator for proportions.","Check totals before drawing conclusions.","Compare like with like.","State evidence numerically."],
 formulas:["\\text{percentage}=\\frac{\\text{part}}{\\text{whole}}\\times100\\%"],
 method:["Identify exactly which group the question refers to.","Read or calculate the relevant count.","Choose the appropriate denominator.","Calculate fraction/percentage if needed.","Write a contextual conclusion."],
 mistakes:["Do not use grand total when the question is conditional on a subgroup.","Do not compare raw counts if group sizes differ greatly.","Avoid causal language from descriptive table data alone."],
 examSuccess:{pages:[197,198,199,204],note:"Exam Success Statistics gives table/chart interpretation and averages context; Cambridge pp.373–374 Ex12.2 is primary."},
 examples:[
  {source:"Cambridge Ex 12.2 pattern",q:"In 40 students, 18 boys and 22 girls. 12 boys and 11 girls passed. What percentage of boys passed?",steps:["Use boys as denominator: 18.","\\(12/18\\times100=66.7\\%\\)."]},
  {source:"Comparison",q:"Group A: 24/30 pass. Group B: 32/50 pass. Which has higher pass rate?",steps:["A: \\(24/30=80\\%\\).","B: \\(32/50=64\\%\\).","Group A has higher pass rate despite fewer passes."]},
  {source:"Missing table entry",q:"A category total is 47; known subgroups are 19 and 13. Find missing.",steps:["Missing \\(=47-19-13=15\\)."]},
  {source:"Interpretation",q:"A table shows 70% of cyclists wear helmets compared with 45% of non-cyclists. Write a supported comparison.",steps:["State the numerical difference: 25 percentage points.","Do not claim cycling causes helmet use; the table shows association only."]}
 ],
 practice:{
  foundation:["Read a row total from a table.","Find missing cell from row total.","Convert 18 out of 30 to a percentage.","Find fraction of a category."],
  core:["Compare 15/20 with 28/40 using percentages.","Calculate conditional percentage from a two-way table.","Complete missing row and column totals.","Write two valid statements from a table.","Identify an unsupported statement."],
  extension:["Compare two groups with different sizes using relative frequency.","Find an unknown cell given a percentage and total.","Explain why raw-count comparison can mislead.","Write a cautious conclusion from an observational table."],
  reasoning:["What denominator should be used for 'percentage of girls who...' and why?","A headline compares 40 passes with 35 passes but ignores group sizes. Critique it.","Create a table that makes raw counts and percentages suggest different comparisons."]
 },
 homework:[
  {tier:"Foundation",q:"18 of 24 students completed homework. Find percentage.",steps:["\\(18/24=0.75\\).","75%."]},
  {tier:"Core",q:"Class A: 21/28 pass; Class B: 30/45 pass. Compare.",steps:["A=75%.","B=66.7%.","A has higher pass rate."]},
  {tier:"Core",q:"A row total is 60, cells 18,27,x. Find x.",steps:["\\(x=60-18-27=15\\)."]},
  {tier:"Extension",q:"Explain why 40 successes in a group of 100 can be worse than 30 in a group of 50.",steps:["Rates: 40% vs 60%.","Relative frequency accounts for group size."]}
 ]
};

C["18.6"]={
 heading:"Compare sets of data using measures",
 summary:"A strong statistical comparison normally discusses both centre and spread. Centre describes typical performance; spread describes consistency.",
 keywords:["compare","centre","spread","median","mean","IQR","consistency"],
 explain:[
  "A higher mean/median indicates a higher typical value, but it does not describe variability.",
  "A smaller range/IQR indicates greater consistency or less spread.",
  "Comparisons should use the same measure across both groups and include numbers.",
  "Median + IQR are especially useful when data may be skewed or contain outliers."
 ],
 rules:["Compare centre with centre.","Compare spread with spread.","Quote values and units.","Use context-specific language such as 'typically higher' and 'more consistent'."],
 formulas:["IQR=Q_3-Q_1"],
 method:["Identify suitable centre measures for both sets.","Identify suitable spread measures for both sets.","State which set has higher/lower typical value.","State which is more/less consistent.","Support each claim with numerical evidence."],
 mistakes:["Do not say 'better' without defining what measure supports it.","Higher mean does not imply smaller spread.","Avoid comparing median from one set to mean from another."],
 examSuccess:{pages:[204,205,208,209],note:"Exam Success Statistics supports comparing averages/spread and later box/cumulative displays."},
 examples:[
  {source:"Comparison",q:"A: median 68, IQR 12. B: median 72, IQR 20. Compare.",steps:["B has higher typical value: median 72 vs 68.","A is more consistent: IQR 12 vs 20.","Give both statements in context."]},
  {source:"Mean/range",q:"Team P mean 14.2, range 6; Team Q mean 13.8, range 3. Compare.",steps:["P has slightly higher typical value by mean.","Q has smaller spread, so results are more consistent.","The choice depends on whether level or consistency matters more."]},
  {source:"Outlier-aware",q:"Two salary groups have same median 25k but IQRs 4k and 12k. What can be concluded?",steps:["Typical salaries by median are equal.","First group has much less spread.","No claim about means can be made without more data."]}
 ],
 practice:{
  foundation:["Compare medians 10 and 13.","Compare ranges 8 and 5.","State which set is more consistent if IQRs 4 and 9.","Write a complete comparison from median/IQR values."],
  core:["Compare A mean 45 range 12 with B mean 48 range 20.","Compare box-summary values for two groups.","Explain why median/IQR may be preferable with outliers.","Write two supported comparison sentences."],
  extension:["Two sets have equal means but different medians. What might this suggest?","Compare skewed distributions from five-number summaries.","Decide which team is preferable under a stated criterion.","Construct two small sets with same median but different IQR."],
  reasoning:["Why are both centre and spread needed for a balanced comparison?","Can a group have higher mean but lower median? Explain possible shape.","Critique 'Class B is better because its range is smaller.'"]
 },
 homework:[
  {tier:"Foundation",q:"A median 18, IQR 5; B median 21, IQR 9. Compare.",steps:["B has higher typical value.","A is more consistent due to smaller IQR."]},
  {tier:"Core",q:"P mean 50 range 30; Q mean 48 range 10. Compare.",steps:["P has slightly higher mean.","Q has much smaller range and is more consistent.","No single overall 'winner' follows without a criterion."]},
  {tier:"Extension",q:"Explain why equal medians do not imply identical distributions.",steps:["Median gives only the centre.","Spread, shape and individual values may differ."]}
 ]
};

C["18.7"]={
 heading:"Restrictions on drawing conclusions",
 summary:"Statistical conclusions are only as strong as the data and method behind them. Sample selection, size, missing variables, outliers and observational design limit what can be claimed.",
 keywords:["bias","sample","representative","association","causation","limitation"],
 explain:[
  "A sample should represent the population about which a conclusion is made.",
  "Large samples reduce random variation but do not automatically remove bias.",
  "Association/correlation does not prove causation; a third variable may influence both.",
  "Grouped/rounded data and graphical estimates introduce uncertainty."
 ],
 rules:["Match conclusion population to sampled population.","Distinguish association from causation.","Identify likely bias/confounding variables.","Treat graph-read values as estimates where appropriate."],
 formulas:[],
 method:["Identify the population and sample.","Check how the sample was selected.","Identify missing/contextual variables.","Decide whether evidence is descriptive, associational or experimental.","Phrase the conclusion with appropriate caution."],
 mistakes:["Do not generalise from a convenience sample to everyone.","Do not claim cause from correlation alone.","A large biased sample remains biased.","Do not present estimates as exact measurements."],
 examSuccess:{pages:[211,212,213],note:"Exam Success scatter/correlation pages reinforce cautious interpretation; SoW explicitly requires restrictions on conclusions."},
 examples:[
  {source:"Sampling",q:"A gym surveys only people leaving a spin class about favourite exercise. Can results represent all members?",steps:["The sample is a convenience sample from one class.","Spin participants may prefer cardio activities.","It is not representative of all gym members.","A wider random sample is needed."]},
  {source:"Correlation",q:"Ice-cream sales and sunburn cases both rise in summer. Can we conclude ice cream causes sunburn?",steps:["No.","Warm/sunny weather is a plausible third variable affecting both.","Correlation alone does not establish causation."]},
  {source:"Graph estimate",q:"A cumulative-frequency curve gives median approximately 42.3. Why is this not exact?",steps:["Original data were grouped.","The smooth curve interpolates within intervals.","The reading depends on drawing/scale precision."]},
  {source:"Sample size",q:"Study A has 20 randomly chosen students; Study B has 500 volunteers from one website. Which issue matters?",steps:["A is small but randomly selected.","B is larger but may have volunteer/site bias.","Larger n does not automatically make B representative."]}
 ],
 practice:{
  foundation:["Identify population and sample in a school survey.","State one bias in an online voluntary poll.","Explain correlation vs causation.","Give one reason graph readings may be estimates."],
  core:["Critique a survey of only top-set students about maths homework.","Explain why a larger convenience sample can still be biased.","Identify a confounder in height vs vocabulary for children.","Rewrite an overconfident causal conclusion cautiously."],
  extension:["Design a better sampling method for a school-wide opinion.","Explain limitations of grouped-data mean estimates.","Compare strengths/limitations of two sampling strategies.","Suggest data needed to support a causal claim."],
  reasoning:["Can a perfectly representative observational study prove causation? Explain.","Why does random selection help generalisation?","A newspaper graph starts y-axis at 98 instead of 0. Explain possible visual effect."]
 },
 homework:[
  {tier:"Foundation",q:"A survey about school meals asks only students in the canteen. State a possible bias.",steps:["Students using the canteen may have different views from those who avoid it.","Sample may not represent all students."]},
  {tier:"Core",q:"A strong correlation is found between shoe size and reading age in children. Explain why causation is doubtful.",steps:["Age affects both shoe size and reading development.","Age is a confounding variable.","Correlation does not show shoe size causes reading age."]},
  {tier:"Extension",q:"Why can a sample of 10,000 still be unreliable?",steps:["If selection is systematically biased, size does not remove that bias.","Representativeness matters as well as size."]}
 ]
};
})(window.LESSON_CONTENT);
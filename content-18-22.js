(()=>{
const {C,E,H}=window.MathoraContent, M=window.LESSON_CONTENT;

M["18.1"]=C({
 explain:"Statistical data can be categorical or numerical, discrete or continuous, and primary or secondary. Classification matters because it determines how the data should be tabulated and which diagrams are appropriate. The Coursebook sequence builds from tally/frequency tables into two-way tables.",
 keyPoints:["Categories should be clear and non-overlapping.","Every observation should be counted exactly once.","Two-way tables classify by two variables at the same time.","Totals are an important built-in accuracy check."],
 rules:[["row total = sum of row cells","two-way table check"],["column total = sum of column cells","two-way table check"]],
 method:["Identify the variables and the data type.","Choose suitable categories or class intervals.","Record frequencies systematically, using tallies where useful.","Complete marginal totals.","Check grand total against number of observations."],
 mistakes:["Using overlapping classes such as 0–10 and 10–20.","Forgetting totals in a two-way table.","Treating continuous measurements as isolated categories when grouping is intended."],
 vocab:["categorical","numerical","discrete","continuous","frequency","tally","two-way table"],
 examples:[
  E("Classify: shoe size, eye colour, height and number of siblings.",["Shoe size: discrete numerical.","Eye colour: categorical.","Height: continuous numerical.","Number of siblings: discrete numerical."]),
  E("A two-way table has 18 boys and 22 girls. 11 boys and 14 girls choose football. Complete the non-football totals.",["Boys not football [[=18-11=7]].","Girls not football [[=22-14=8]].","Football total [[=25]], non-football total [[=15]], grand total [[=40]]."]),
  E("Explain why classes 0≤x<10, 10≤x<20 are better than '0–10, 10–20'.",["The inequality notation removes ambiguity at the shared boundary 10."])
 ],
 practice:{
  foundation:["Classify age in whole years.","Classify favourite colour.","Make a tally table for 2,3,3,4,2,5,3.","Complete a frequency table total.","State whether mass is discrete or continuous."],
  core:["Complete a two-way table with one missing cell and totals.","Design non-overlapping classes for 0 to 50.","Explain why postcode is categorical even though it contains digits.","Convert raw responses into a frequency table.","Use row/column totals to find two missing values."],
  extension:["Design a table to compare transport method by year group.","Critique a badly designed grouped table with overlapping classes.","Explain when grouping loses information.","Create a two-way table where one cell is determined from three different totals.","Decide whether a variable should be treated as discrete or continuous in context."],
  reasoning:["Why does a two-way table support comparison better than two separate lists?","A class total is inconsistent with row totals. What should you check first?"]
 },
 homework:[
  H("Foundation","Classify height.",["Height can take any value in an interval.","Continuous numerical data."]),
  H("Foundation","A tally row shows ||||/ ||. Find frequency.",["Five plus two","Frequency 7."]),
  H("Core","20 students: 12 choose A. How many choose not-A?",["[[20-12=8]]"]),
  H("Core","Boys total 15, 9 pass. Girls total 17, 12 pass. Find total passes.",["[[9+12=21]]"]),
  H("Extension","Design class intervals of width 5 for values from 0 to below 30.",["For example [[0\\le x<5]], [[5\\le x<10]], …, [[25\\le x<30]]."]),
  H("Extension","Explain why a grouped table cannot recover exact original values.",["All values inside a class are combined into one frequency, so individual measurements are lost."])
 ],
 cambridge:"The syllabus expects candidates to classify and tabulate data and interpret tables accurately.",
 examSuccess:"Statistics starts with table construction, frequency displays and careful reading of totals."
});

M["18.2"]=C({
 explain:"Measures of centre describe a typical value; measures of spread describe variability. Mean uses every value and is sensitive to extremes, median is resistant to extremes, mode identifies the most frequent value, while range and IQR measure spread.",
 keyPoints:["Mean uses all data but can be distorted by outliers.","Median depends on order and is robust to extremes.","IQR describes the middle 50% and is robust to extremes.","Choice of statistic should match the context and distribution."],
 rules:[["[[\\bar x=\\frac{\\sum x}{n}]]","mean"],["[[\\text{range}=\\max-\\min]]","range"],["[[\\text{IQR}=Q_3-Q_1]]","interquartile range"]],
 method:["Order data when finding median/quartiles.","Calculate mean from total ÷ count.","Identify repeated values for mode.","Find Q1 and Q3 using the agreed positional method.","Use centre and spread together when comparing."],
 mistakes:["Finding median without ordering.","Using range as a measure of centre.","Comparing means only when one data set is much more variable."],
 vocab:["mean","median","mode","quartile","range","interquartile range","outlier"],
 examples:[
  E("Find mean, median and range of 4,6,6,9,10.",["Mean [[=(4+6+6+9+10)/5=7]].","Median =6.","Range [[=10-4=6]]."]),
  E("Data: 2,3,5,6,7,9,12,18. Find Q1,Q3,IQR.",["Lower half 2,3,5,6 → [[Q_1=(3+5)/2=4]].","Upper half 7,9,12,18 → [[Q_3=(9+12)/2=10.5]].","[[IQR=6.5]]."]),
  E("Why might median be preferred for salaries?",["A few very high salaries can pull the mean upward.","Median better represents a typical worker when distribution is skewed."])
 ],
 practice:{
  foundation:["Mean of 3,5,7,9.","Median of 4,2,9,1,7.","Mode of 2,3,3,5,5,5,8.","Range of 12,4,17,9.","Find median of six ordered values."],
  core:["Find Q1,Q3,IQR for 10 ordered values.","Compare two data sets using mean and range.","Choose mean or median for house prices and justify.","Find a missing value given mean.","Find a missing frequency from a stated mode."],
  extension:["Construct two data sets with same mean but different IQR.","Show how one outlier changes mean and range but not median much.","Find x if mean of 5 values is 12.","Compare two athletes using median and IQR.","Explain why mode may be unhelpful for continuous data."],
  reasoning:["Company owner quotes mean salary; union quotes median. Explain why both might choose differently.","Can a data set have no mode, one mode or several modes? Give examples."]
 },
 homework:[
  H("Foundation","Mean of 5,7,8,10.",["Total [[=30]]","Mean [[=30/4=7.5]]"]),
  H("Foundation","Median of 9,3,5,1,7.",["Order: 1,3,5,7,9.","Median =5."]),
  H("Core","Values 2,4,6,8,10,12,14,16. Find IQR.",["[[Q_1=(4+6)/2=5]]","[[Q_3=(12+14)/2=13]]","[[IQR=8]]"]),
  H("Core","Mean of five numbers is 14. Four total 51. Find fifth.",["Total required [[=5\\times14=70]]","Missing [[=70-51=19]]"]),
  H("Extension","Data 3,4,4,5,6 plus outlier 30. Compare mean and median with data without 30.",["Without 30: mean 4.4, median 4.","With 30: mean [[52/6\\approx8.67]], median [[(4+5)/2=4.5]].","Mean changes far more."]),
  H("Extension","Explain why IQR is often paired with median.",["Both are resistant to extreme values and describe the central part of a distribution."])
 ],
 cambridge:"Candidates must distinguish purposes of measures, not only calculate them.",
 examSuccess:"Statistics worked examples emphasise choosing the right average and interpreting spread."
});

M["18.3"]=C({
 explain:"When data is grouped, exact individual values are unknown. To estimate the mean, each class is represented by its midpoint, then a weighted mean is calculated using frequency × midpoint.",
 keyPoints:["The answer is an estimate because midpoint values are assumed.","Use the midpoint of each class interval.","Create an fx column.","Divide total fx by total frequency."],
 rules:[["[[m=\\frac{L+U}{2}]]","class midpoint"],["[[\\bar x\\approx\\frac{\\sum fm}{\\sum f}]]","estimated mean"]],
 method:["Find every class midpoint.","Multiply midpoint by its class frequency.","Add frequencies and add fx products.","Divide [[\\sum fx]] by [[\\sum f]].","State that the result is an estimate."],
 mistakes:["Using class width instead of midpoint.","Dividing by number of classes.","Calling the result exact."],
 vocab:["grouped data","class interval","midpoint","frequency","estimated mean","weighted mean"],
 examples:[
  E("Classes 0–10,10–20,20–30 have frequencies 3,7,5. Estimate mean.",["Midpoints 5,15,25.","fx: 15,105,125.","[[\\sum fx=245]], [[\\sum f=15]].","Estimated mean [[=245/15=16.3]] (3 s.f.)."]),
  E("Why is midpoint 15 used for 10≤x<20?",["The exact values are unknown; 15 is the centre of the class and is used as a representative value."]),
  E("A grouped table has mean estimate 24 from 40 values. Find total fx.",["[[\\sum fx\\approx24\\times40=960]]."])
 ],
 practice:{
  foundation:["Midpoint of 20–30.","Midpoint of 5≤x<15.","Calculate fx for midpoint 12, frequency 7.","Find total frequency from 4,6,9,3.","Estimate mean from two classes."],
  core:["Complete a midpoint and fx table.","Estimate mean for four unequal class intervals.","Find a missing fx value.","Compare exact mean of raw data with grouped estimate.","Explain effect of wider classes on reliability."],
  extension:["Find missing frequency given estimated mean.","Regroup same data in two ways and compare estimates.","Construct grouped data with estimate 20.","Explain why midpoint assumption can bias an estimate.","Use coding or efficient arithmetic to calculate a mean estimate."],
  reasoning:["Can an estimated mean lie outside all class midpoints? Explain using weighted averages.","Why can two different raw data sets give exactly the same grouped table and estimated mean?"]
 },
 homework:[
  H("Foundation","Midpoint of 30≤x<50.",["[[(30+50)/2=40]]"]),
  H("Foundation","Frequency 8, midpoint 15. Find fx.",["[[8\\times15=120]]"]),
  H("Core","Midpoints 5,15,25; frequencies 2,4,4. Estimate mean.",["fx 10,60,100.","[[\\sum fx=170]], [[\\sum f=10]].","Estimate 17."]),
  H("Core","Estimated mean 18 for 25 values. Find total fx.",["[[18\\times25=450]]"]),
  H("Extension","Classes 0–10,10–30 have frequencies 6,4. Estimate mean.",["Midpoints 5,20.","fx 30,80.","[[110/10=11]]"]),
  H("Extension","Explain why using lower boundaries instead of midpoints would systematically underestimate many grouped means.",["Representative values would sit at the bottom of each class rather than near its centre."])
 ],
 cambridge:"The syllabus uses the term estimate; candidates should show midpoints and weighted products.",
 examSuccess:"Statistics exam-style tables reinforce efficient fx layouts and estimation language."
});

M["18.4"]=C({
 explain:"The modal class is the class with the greatest frequency. The median class is the class containing the median position in cumulative frequency. Because values are grouped, the exact mode or median is generally unknown without further assumptions.",
 keyPoints:["Modal class uses the largest frequency, not largest density unless reading a histogram.","Median class contains the middle observation.","Use cumulative frequencies to locate the median class.","Quote the whole interval."],
 rules:[["median position","around [[n/2]] in ordered/grouped data"],["modal class","highest frequency class"]],
 method:["Find total frequency.","For modal class, identify maximum frequency.","For median class, find middle position and running totals.","State the class interval containing that position."],
 mistakes:["Giving the midpoint as the mode.","Choosing the tallest histogram bar as modal class when widths differ without considering density/area context.","Forgetting cumulative frequency for median class."],
 vocab:["modal class","median class","cumulative frequency","class interval"],
 examples:[
  E("Frequencies for 0–10,10–20,20–30 are 4,11,7. State modal class.",["Largest frequency is 11.","Modal class is [[10\\le x<20]]."]),
  E("Frequencies 3,8,12,5 total 28. Identify median class.",["Middle positions are 14th and 15th.","Cumulative frequencies 3,11,23,28.","Both lie in third class, so third class is median class."]),
  E("Explain why exact median cannot be read from the grouped table alone.",["We know only which interval contains central values, not their exact positions within it."])
 ],
 practice:{
  foundation:["Identify modal class from 5,9,3 frequencies.","Total 20: state middle positions.","Build cumulative frequencies 4,7,6,3.","Find median class from cumulative totals.","State why midpoint is not necessarily the mode."],
  core:["Modal class from unequal intervals in a frequency table.","Find median class for total 35.","Compare modal and median classes.","Find missing frequency so second class becomes modal.","Use cumulative frequency to find class containing upper quartile."],
  extension:["Construct a grouped table with different modal and median classes.","Explain how linear interpolation could estimate median inside a class.","Determine possible exact medians consistent with grouped data.","Compare modal class from table and histogram.","Find a missing frequency from a stated median class condition."],
  reasoning:["Can two classes tie as modal classes?","Why does a histogram's tallest bar represent highest density rather than automatically highest frequency?"]
 },
 homework:[
  H("Foundation","Frequencies 2,7,5,4. State modal class if intervals are A,B,C,D.",["Largest frequency 7.","Class B."]),
  H("Foundation","Total frequency 30. State central position.",["Around 15th/16th observations; locate with cumulative frequency."]),
  H("Core","Frequencies 5,6,10,3. Cumulative frequencies?",["5,11,21,24."]),
  H("Core","Using previous table, median class?",["Total 24, middle around 12th/13th.","Cumulative reaches 11 after class 2 and 21 after class 3.","Class 3."]),
  H("Extension","Explain why median class is more precise than guessing median midpoint.",["The class is guaranteed from cumulative position; midpoint assumes location within class."]),
  H("Extension","Create frequencies for four classes where class 2 is modal but class 3 is median.",["Example 4,10,9,7: total30, class2 modal10; cumulative14 then23, so 15th/16th lie in class3."])
 ],
 cambridge:"The SoW notes that class-containing-median questions occur in examinations even if not highlighted separately in syllabus wording.",
 examSuccess:"Grouped-data exam questions often combine modal class with estimated averages."
});

M["18.5"]=C({
 explain:"Reading a statistical table requires exact extraction before interpretation. Strong conclusions quote relevant frequencies, percentages or measures rather than making vague statements.",
 keyPoints:["Check headings, units and totals first.","Use proportions when group sizes differ.","Distinguish absolute frequency from percentage.","Every inference should be supported by a number from the table."],
 rules:[["[[\\text{percentage}=\\frac{\\text{part}}{\\text{whole}}\\times100]]","comparison across unequal totals"]],
 method:["Read title and variable definitions.","Locate the correct row/column intersection.","Check whether figures are counts, percentages or rates.","Calculate derived values if needed.","Write a complete comparison sentence using evidence."],
 mistakes:["Comparing raw counts when group sizes differ.","Reading the wrong marginal total.","Claiming causation from a table showing association only."],
 vocab:["inference","proportion","percentage","relative frequency","evidence"],
 examples:[
  E("Class A: 18/30 pass; Class B: 20/40 pass. Which has higher pass rate?",["A: [[18/30=60%]].","B: [[20/40=50%]].","Class A has higher pass rate despite fewer passes."]),
  E("A table shows 42 boys and 38 girls, 20 boys and 24 girls choose art. Compare.",["Boys art [[20/42\\approx47.6%]].","Girls art [[24/38\\approx63.2%]].","A larger proportion of girls choose art."]),
  E("Why is '24 girls choose art, so girls prefer art more' incomplete?",["Without the total number of girls and comparable boy proportion, the claim lacks context."])
 ],
 practice:{
  foundation:["Read a specified cell from a table.","Find row total.","Find column total.","Calculate a percentage from count/total.","State one fact supported by a table."],
  core:["Compare two groups of unequal size using percentages.","Find a missing cell from totals.","Identify the largest category proportionally.","Convert a frequency table into percentages.","Write two supported inferences."],
  extension:["Spot a misleading comparison based on raw counts.","Explain why percentages can still mislead with small samples.","Reconstruct a two-way table from marginal totals and percentages.","Compare conditional proportions.","State one conclusion and one limitation."],
  reasoning:["When is a raw frequency comparison fair?","Why should units and bases be stated in a statistical claim?"]
 },
 homework:[
  H("Foundation","12 of 20 students choose A. Percentage?",["[[12/20\\times100=60%]]"]),
  H("Foundation","Row values 7,9,4. Find total.",["[[7+9+4=20]]"]),
  H("Core","Group X: 15/25; Group Y: 24/50. Compare rates.",["X 60%.","Y 48%.","X has higher proportion."]),
  H("Core","Total 40, category A 17, B 11. Find C.",["[[40-17-11=12]]"]),
  H("Extension","Explain why 6/8 can be less reliable than 60/80 despite same 75%.",["Same proportion, but smaller sample gives more sampling variability."]),
  H("Extension","Write a cautious inference from 70% vs 55% in two groups.",["State the observed difference and avoid causal language without further evidence."])
 ],
 cambridge:"Interpretation questions reward accurate reading and evidence-based statements rather than generic comments.",
 examSuccess:"Statistics examples use tables before diagrams, reinforcing careful extraction."
});

M["18.6"]=C({
 explain:"Comparing data sets requires both centre and spread. A higher median/mean describes a higher typical value; a smaller range/IQR describes greater consistency. Conclusions should be contextual and numerical.",
 keyPoints:["Compare like with like: mean with mean, median with median.","Use spread as well as centre.","Prefer median/IQR for skewed or outlier-prone data.","Write two-part comparison sentences."],
 rules:[["smaller spread","more consistent"],["larger median/mean","larger typical value"]],
 method:["Choose suitable centre measure.","Compare numerical centres.","Choose suitable spread measure.","Compare spread.","Translate both comparisons into context."],
 mistakes:["Saying 'better' without context.","Using only centre.","Mixing median of one set with mean of another."],
 vocab:["compare","typical","consistent","spread","centre","distribution"],
 examples:[
  E("A: median 62, IQR 8. B: median 58, IQR 15. Compare.",["A has higher typical value (62 vs 58).","A is more consistent because IQR is smaller (8 vs 15)."]),
  E("Team X mean 12.4, range 6; Team Y mean 13.1, range 20.",["Y has slightly higher average.","X has much smaller spread, so is more consistent."]),
  E("Why might median/IQR be preferable if one data set has an extreme outlier?",["Both are resistant to extreme values."])
 ],
 practice:{
  foundation:["Compare two means.","Compare two medians.","State which data set is more consistent from ranges.","State which is more consistent from IQRs.","Complete a two-sentence comparison."],
  core:["Compare median/IQR pairs.","Compare mean/range pairs and mention limitation.","Choose suitable statistics for skewed data.","Explain conflict when mean is higher but median lower.","Use context in a comparison."],
  extension:["Construct two sets with same median but different IQR.","Explain why range may be unstable.","Compare three groups and rank consistency.","Critique a one-statistic comparison.","Decide which group is preferable under a stated goal."],
  reasoning:["Can a group have higher mean but lower median? Explain.","Why does 'more consistent' not mean 'better' automatically?"]
 },
 homework:[
  H("Foundation","A range 9, B range 14. Which more consistent?",["A, because smaller range."]),
  H("Foundation","A median 21, B median 25. Which higher typical value?",["B, based on median."]),
  H("Core","A median 70 IQR12; B median66 IQR7.",["A higher typical value.","B more consistent."]),
  H("Core","A mean 15 range4; B mean16 range11.",["B slightly higher average.","A much more consistent."]),
  H("Extension","Explain why same mean does not imply similar distributions.",["Values can be arranged with very different spread or shape while preserving total/count."]),
  H("Extension","Write a balanced conclusion for two classes where one has higher median but larger IQR.",["One class typically scores higher, but the other is more consistent. State both with values."])
 ],
 cambridge:"Comparison questions require numerical evidence and contextual interpretation.",
 examSuccess:"Exam Success models paired centre-and-spread comments."
});

M["18.7"]=C({
 explain:"Statistics supports evidence, not certainty. Conclusions depend on how data was collected, sample size, representativeness, measurement quality and whether an observed association could have alternative explanations.",
 keyPoints:["A biased sample can invalidate a conclusion.","Small samples give unstable estimates.","Association does not prove causation.","Data may be outdated, incomplete or measured inconsistently."],
 rules:[["correlation ≠ causation","association alone is insufficient"],["sample → population","requires representative sampling"]],
 method:["Identify the claimed conclusion.","Ask what population it refers to.","Check sample method and size.","Look for confounding variables or measurement issues.","Rewrite the conclusion using cautious language."],
 mistakes:["Generalising beyond the sampled population.","Using 'proves' when data only suggests.","Ignoring non-response or selection bias."],
 vocab:["sample","population","bias","representative","confounding variable","causation","association"],
 examples:[
  E("A survey of 40 gym members finds 80% exercise weekly. Can we say 80% of all adults do?",["No.","Gym members are a biased sample for adult exercise habits."]),
  E("Ice-cream sales and sunburn cases are positively correlated. Does ice cream cause sunburn?",["No.","Hot sunny weather is a plausible third variable affecting both."]),
  E("A website poll has 20,000 responses. Is it automatically representative?",["No.","Large size does not remove voluntary-response bias."])
 ],
 practice:{
  foundation:["Identify population and sample.","Name one possible bias.","State whether claim is causal or associative.","Explain why sample size matters.","Rewrite 'proves' more cautiously."],
  core:["Critique an online poll.","Critique a school survey conducted only in one class.","Suggest a better sampling method.","Identify a confounding variable.","Explain why outdated data limits conclusions."],
  extension:["Compare random, stratified and convenience sampling impacts.","Design a survey to reduce bias.","Evaluate a claim from observational data.","Explain why a huge biased sample can be worse than a smaller representative one.","List three limitations of a hypothetical study."],
  reasoning:["What evidence would strengthen a causal claim?","Why is representativeness usually more important than sheer sample size?"]
 },
 homework:[
  H("Foundation","Survey only top-set students about homework time. State limitation.",["Sample is not representative of all students."]),
  H("Foundation","Replace 'proves' in a correlation claim.",["Use 'suggests an association' or similar cautious wording."]),
  H("Core","Why may a voluntary online poll be biased?",["People who choose to respond may differ systematically from non-responders."]),
  H("Core","Name a confounder between age and vocabulary in children.",["Age itself relates to both growth and learning; when comparing height and vocabulary, age is a likely third variable."]),
  H("Extension","Why can 1000 biased responses be less useful than 200 random responses?",["Bias creates systematic error that larger sample size does not fix."]),
  H("Extension","Give two improvements to a school canteen survey.",["Use random/stratified sampling across year groups.","Survey at varied times or include non-users as well."])
 ],
 cambridge:"Candidates are expected to appreciate restrictions when drawing conclusions from data.",
 examSuccess:"Raise your grade sections frequently challenge overconfident statistical claims."
});

M["19.1"]=C({
 explain:"Different statistical displays suit different data. The Coursebook covers stem-and-leaf, pictograms, bar charts, pie charts and line graphs; the SoW also expects composite and dual bar charts. Accuracy of scale, labels, keys and ordering matters.",
 keyPoints:["Bar charts: separated bars for discrete/categorical data.","Pie charts: sector angle = frequency/total ×360°.","Pictograms require a clear key and correct fractions of symbols.","Stem-and-leaf leaves must be ordered and include a key.","Dual/composite bar charts need a legend."],
 rules:[["[[\\theta=\\frac fN\\times360^\\circ]]","pie sector angle"],["stem | leaf","include a key"]],
 method:["Choose a display appropriate to the variable.","Select a sensible scale.","Label axes/categories and title.","Plot/draw accurately.","Check totals: pie angles 360°, frequencies preserved."],
 mistakes:["Bars touching on a bar chart.","Missing stem-and-leaf key.","Using inconsistent symbol sizes in a pictogram.","Pie angles not totalling 360°."],
 vocab:["bar chart","dual bar chart","composite bar chart","pie chart","pictogram","stem-and-leaf"],
 examples:[
  E("36 students choose A,B,C,D with frequencies 9,6,11,10. Find pie angles.",["One student [[=360/36=10^\\circ]].","Angles 90°,60°,110°,100°.","Check total 360°."],{image:"exam-pie-worked.webp"}),
  E("Construct stem-and-leaf for 12,15,18,21,21,24,29,31,34.",["Stems 1,2,3.","Leaves ordered.","Key e.g. [[2|4=24]]."]),
  E("A pictogram key is 1 symbol =8 people. What is 2.5 symbols?",["[[2.5\\times8=20]] people."])
 ],
 practice:{
  foundation:["Draw bar chart for frequencies 3,5,7,4.","Find pie angle for 12/48.","Find pie angle for 9/36.","Interpret 3.5 symbols if key=6.","Write a key for stem-and-leaf."],
  core:["Construct stem-and-leaf for 11,14,17,18,22,24,24,29,31.","Find all pie angles for 5,7,8,10.","Design a dual bar chart for two classes.","Explain why discrete bar-chart bars are separated.","Construct a composite bar chart from two categories per group."],
  extension:["Sector 126°: find fraction and percentage.","Find missing pie sector from others.","Create back-to-back stem-and-leaf.","Critique a bar chart with truncated axis.","Choose best display for two scenarios and justify."],
  reasoning:["Why is a bar chart easier for precise comparison than some pictograms?","When is a pie chart a poor choice?"]
 },
 homework:[
  H("Foundation","14 out of 56: pie angle.",["[[14/56=1/4]]","[[90^\\circ]]"]),
  H("Foundation","3.5 symbols, key 6.",["[[3.5\\times6=21]]"]),
  H("Core","Stem-and-leaf for 13,14,18,21,21,25,29.",["Stem 1: 3,4,8.","Stem 2: 1,1,5,9.","Add key."]),
  H("Core","Frequencies 8,12,10 total30: angles.",["Each item 12°.","96°,144°,120°."]),
  H("Extension","Sector 54°: percentage.",["[[54/360=0.15]]","15%."]),
  H("Extension","Explain why a truncated vertical axis can mislead.",["It visually exaggerates relative height differences unless the numeric scale is read carefully."])
 ],
 cambridge:"The syllabus includes drawing and interpreting several displays; accuracy and communication are assessed.",
 examSuccess:"Statistics chapter includes worked bar, pie and stem-and-leaf examples with exam tips.",
 sourceImages:["bar-chart-worked.webp","exam-pie-worked.webp","exam-statistics.webp"]
});

M["19.2"]=C({
 explain:"A scatter diagram plots paired measurements for two variables. Each pair becomes one point, clearly marked as a small cross. Interpretation focuses on overall pattern, unusual points and context.",
 keyPoints:["Use one coordinate pair per observation.","Choose scales that use the graph area effectively.","Mark points accurately with small crosses.","Describe direction and strength rather than joining points.","Identify possible outliers."],
 rules:[["bivariate data","paired values on the same individual/item"],["outlier","point far from overall pattern"]],
 method:["Label axes with variables and units.","Choose sensible scales.","Plot each ordered pair as a cross.","Scan for overall trend.","Identify points substantially away from the pattern."],
 mistakes:["Joining points in order.","Swapping x and y.","Using oversized blobs rather than precise crosses."],
 vocab:["scatter diagram","bivariate","outlier","trend","correlation"],
 examples:[
  E("Plot (1,7),(2,5),(3,6),(4,3),(5,2),(6,1). Describe.",["Plot each point.","Overall pattern falls as x increases.","Negative correlation."]),
  E("A point (9,2) lies far from a strong positive trend. What is it?",["An outlier or anomalous point relative to the main pattern."]),
  E("Why should points not be joined?",["Scatter data are separate paired observations, not a sequential path."])
 ],
 practice:{
  foundation:["Plot five coordinate pairs.","State axes for height vs arm span.","Identify an outlier.","Describe a visible upward trend.","Explain bivariate data."],
  core:["Choose scales for data ranges 140–190 and 40–90.","Plot 8 pairs and describe pattern.","Compare two scatter clouds for strength.","Identify whether one point is influential.","Explain why crosses improve accuracy."],
  extension:["Design data likely to show negative correlation.","Design data likely to show no correlation.","Discuss effect of an outlier on interpretation.","Suggest two variables for a classroom investigation and predict trend.","Explain why scale choice can visually exaggerate or hide a pattern."],
  reasoning:["Can a scatter plot have a trend but no cause-and-effect relationship?","Why is sample size important when judging apparent pattern?"]
 },
 homework:[
  H("Foundation","If x increases and y generally decreases, name correlation.",["Negative correlation."]),
  H("Foundation","What is an outlier?",["A point noticeably away from the main data pattern."]),
  H("Core","Why use small crosses?",["They show exact plotted coordinates more clearly than large dots."]),
  H("Core","Why not join scatter points?",["The observations are not successive points on one continuous curve."]),
  H("Extension","Give two variables likely positively correlated.",["Example: height and arm span; justify that larger bodies tend to have larger measurements."]),
  H("Extension","Explain one effect of an outlier.",["It may weaken apparent correlation or strongly influence a fitted line."])
 ],
 cambridge:"The SoW explicitly says plotted points should be clearly marked, for example as small crosses.",
 examSuccess:"Statistics uses compact paired-data examples and asks for interpretation, not just plotting.",
 sourceImages:["scatter-exercise.webp"]
});

M["19.3"]=C({
 explain:"Correlation describes how two variables move together. Positive correlation means larger values of one tend to accompany larger values of the other; negative means one tends to decrease; zero means no clear linear association. Strength describes how tightly points cluster around a trend.",
 keyPoints:["Direction: positive, negative or zero.","Strength: strong, moderate or weak where justified.","Correlation is about association, not causation.","A third variable may create the observed relationship."],
 rules:[["positive","upward trend"],["negative","downward trend"],["zero","no clear linear trend"]],
 method:["Look left to right.","Decide direction of the overall cloud.","Judge how tightly points cluster.","Note outliers.","State interpretation cautiously in context."],
 mistakes:["Saying 'strong' just because slope is steep.","Assuming correlation proves cause.","Calling a curved relationship zero correlation without qualification."],
 vocab:["positive correlation","negative correlation","zero correlation","strength","association","causation"],
 examples:[
  E("Points rise closely left-to-right.",["Strong positive correlation."]),
  E("Points fall but are widely scattered.",["Weak/moderate negative correlation depending on spread."]),
  E("Shoe size and reading age correlate in children. Explain a third variable.",["Age may affect both shoe size and reading development."])
 ],
 practice:{
  foundation:["Classify an upward trend.","Classify a downward trend.","Classify random cloud.","State whether steepness equals strength.","Define correlation."],
  core:["Describe four hypothetical scatter plots with direction and strength.","Identify a likely confounder in two examples.","Explain why outliers affect strength.","Distinguish zero correlation from no relationship at all.","Write contextual correlation statements."],
  extension:["Give a causal mechanism and a non-causal alternative for one correlation.","Explain curved association with near-zero linear correlation.","Discuss restricted-range data and apparent correlation.","Design a study to test a suspected causal link.","Explain Simpson's-paradox idea qualitatively using grouped data."],
  reasoning:["Why can a very steep trend be weak?","Why does correlation not prove causation even when very strong?"]
 },
 homework:[
  H("Foundation","Upward cloud: direction?",["Positive."]),
  H("Foundation","Random cloud: direction?",["Zero/no clear correlation."]),
  H("Core","Strong negative correlation means?",["As one variable increases, the other tends to decrease, with points close to a downward trend."]),
  H("Core","Does strong correlation prove cause?",["No. Other variables, reverse causality or coincidence may explain it."]),
  H("Extension","Ice cream sales and drowning incidents rise together. Suggest confounder.",["Hot weather/season increases both swimming and ice-cream purchasing."]),
  H("Extension","Explain why slope is not strength.",["Slope measures rate of change of a fitted trend; strength measures scatter around that trend."])
 ],
 cambridge:"The SoW explicitly requires understanding that correlation does not prove cause and effect.",
 examSuccess:"Use short 'describe the correlation' items followed by interpretation prompts."
});

M["19.4"]=C({
 explain:"A line of best fit is a single straight line drawn by eye to represent a scatter plot's overall linear trend. It should extend across the full data set with roughly balanced points above and below. It supports interpolation; extrapolation is less reliable.",
 keyPoints:["One straight ruled line across the data cloud.","Balance points above and below over the whole range.","It need not pass through any data point.","Interpolation stays within observed x-range.","Extrapolation goes beyond evidence and is less reliable."],
 rules:[["interpolation","prediction inside data range"],["extrapolation","prediction outside data range"]],
 method:["Ignore isolated anomalies when judging the main cloud.","Position a single line through the centre of trend.","Check balance above/below along full length.","For prediction, move from x to line then to y.","State estimate and whether it is interpolation/extrapolation."],
 mistakes:["Joining end points.","Forcing line through origin.","Using extrapolation without a reliability warning."],
 vocab:["line of best fit","interpolation","extrapolation","estimate","trend"],
 examples:[
  E("Explain how to place a best-fit line.",["Use one straight line across full cloud.","Aim for roughly equal distribution above and below.","Do not chase individual points."]),
  E("Data x-values are 10–50. Predicting at x=35 is what?",["Interpolation: inside observed range."]),
  E("Predicting at x=90 from same data?",["Extrapolation.","Less reliable because trend may not continue."])
 ],
 practice:{
  foundation:["State whether 20 within 5–30 is interpolation.","State whether 40 is extrapolation.","List two features of a good best-fit line.","Should it pass through every point?","Should it extend only between two central points?"],
  core:["Draw a best-fit line on provided scatter.","Use line to estimate y at x=7.","Explain why one outlier may be ignored.","Compare two plausible lines and choose better.","Estimate equation from two convenient points on the line."],
  extension:["Discuss reliability of extrapolation in a real context.","Use a line to solve inverse prediction x from y.","Explain effect of range restriction.","Compare hand-drawn and regression lines conceptually.","Find equation and use it to interpolate."],
  reasoning:["Can two people draw different acceptable lines? Why?","Why is a line beyond the data range an assumption rather than direct evidence?"]
 },
 homework:[
  H("Foundation","Observed x 2–12. Prediction x=8?",["Interpolation."]),
  H("Foundation","Observed x 2–12. Prediction x=20?",["Extrapolation."]),
  H("Core","Give two criteria for best-fit line.",["Extends across full data.","Roughly balanced points above/below."]),
  H("Core","Why should it not zig-zag through points?",["It represents overall linear trend, not individual observations."]),
  H("Extension","Line estimated [[y=2.5x+4]]. Predict y at x=6.",["[[y=2.5(6)+4=19]]"]),
  H("Extension","Same model, data x 1–10. Comment on prediction at x=50.",["It is far extrapolation and potentially unreliable."])
 ],
 cambridge:"The SoW gives explicit criteria for the line of best fit and emphasises full-range balance.",
 examSuccess:"Statistics exam tasks combine line drawing with interpretation and cautious prediction."
});

M["19.5"]=C({
 explain:"Cumulative frequency is a running total. For grouped continuous data, each cumulative total is plotted against the upper class boundary. Points should be marked clearly and joined by a smooth increasing curve.",
 keyPoints:["Cumulative totals can only stay same or increase.","Plot at upper class boundaries.","Use small crosses.","Join with a smooth curve, not a jagged polygon where the syllabus expects a curve.","Total cumulative frequency equals total number of values."],
 rules:[["[[CF_k=f_1+f_2+\\cdots+f_k]]","running total"],["x-coordinate","upper class boundary"]],
 method:["Create cumulative-frequency column.","Check final total equals total frequency.","Pair each total with its upper class boundary.","Choose axes and plot crosses.","Draw a smooth increasing curve through the trend."],
 mistakes:["Plotting at class midpoints.","Using ordinary frequencies instead of cumulative totals.","Curve decreasing at any point."],
 vocab:["cumulative frequency","upper class boundary","running total","smooth curve"],
 examples:[
  E("Frequencies 5,8,11,6 for classes ending 10,20,30,40. Find CF.",["Running totals 5,13,24,30.","Plot (10,5),(20,13),(30,24),(40,30)."]),
  E("Why use upper boundary 20 for cumulative total 13?",["13 represents all observations up to the end of that class, so x=20 matches that cumulative threshold."]),
  E("What should the final CF equal?",["The total sample size."])
 ],
 practice:{
  foundation:["CF for 4,7,5,9.","Final CF given frequencies 3,6,8.","Pair totals with upper boundaries.","State why curve cannot fall.","Check a wrong CF column."],
  core:["Complete CF table with one missing frequency.","Plot six cumulative points.","Choose sensible axes.","Convert CF back to class frequencies by differences.","Explain why midpoint plotting is wrong."],
  extension:["Construct frequency table from a cumulative table.","Estimate proportion below a threshold after graphing.","Compare two cumulative curves qualitatively.","Explain effect of large class width on curve detail.","Design grouped data producing a steep section."],
  reasoning:["Why can cumulative frequency curve be steep even though class frequencies are not directly plotted as heights?","How does final total help identify an arithmetic error?"]
 },
 homework:[
  H("Foundation","Frequencies 3,5,8,4: cumulative frequencies.",["3,8,16,20."]),
  H("Foundation","If final CF is 75, sample size?",["75."]),
  H("Core","CF 4,11,19,30: recover class frequencies.",["4, [[11-4=7]], [[19-11=8]], [[30-19=11]]."]),
  H("Core","Why plot grouped CF at upper boundaries?",["Each cumulative total counts values up to that upper limit."]),
  H("Extension","Frequencies 6,0,9: CF?",["6,6,15.","A flat segment reflects zero frequency in the middle class."]),
  H("Extension","Explain why a smooth curve gives estimates between class boundaries.",["Exact individual locations are unknown, so interpolation through grouped data is approximate."])
 ],
 cambridge:"The SoW specifies crosses and a smooth curve for cumulative-frequency diagrams.",
 examSuccess:"Statistics chapter helps with running totals and percentile interpretation.",
 sourceImages:["cumfreq.webp"]
});

M["19.6"]=C({
 explain:"Median, quartiles and percentiles are read from cumulative-frequency positions. For n observations, the median is near n/2, Q1 near n/4 and Q3 near 3n/4. Values read from the curve are estimates because the original grouped data is not exact.",
 keyPoints:["Use cumulative-frequency positions first, then read across to curve and down to x-axis.","IQR = Q3−Q1.","A percentile p corresponds to p% of observations at or below that value.","Cutoff questions often reverse the direction."],
 rules:[["[[Q_1:n/4]]","lower quartile position"],["[[Q_2:n/2]]","median position"],["[[Q_3:3n/4]]","upper quartile position"],["[[IQR=Q_3-Q_1]]","spread"]],
 method:["Read total n from final cumulative frequency.","Calculate target CF position.","Move horizontally from CF axis to curve.","Move vertically to data axis.","State estimate and units."],
 mistakes:["Using x-axis percentage instead of CF position.","Reading quartiles at 25,50,75 regardless of n.","For top p%, forgetting cutoff corresponds to 100−p percentile."],
 vocab:["percentile","quartile","median","interquartile range","cutoff"],
 examples:[
  E("Curve has n=80. State CF positions for Q1, median, Q3.",["[[20,40,60]]."]),
  E("Top 20% of 200 progress. Which CF position gives cutoff?",["80% lie at or below cutoff.","[[0.8\\times200=160]].","Read x at CF=160."]),
  E("Q1≈18, Q3≈31. Find IQR.",["[[31-18=13]]."])
 ],
 practice:{
  foundation:["n=60: median position.","n=80: Q1/Q3 positions.","n=120: 90th percentile CF.","Find IQR from Q1=24,Q3=39.","Interpret 75th percentile."],
  core:["Read median from a supplied curve.","Read Q1,Q3 and IQR.","Find 10th and 90th percentiles.","Estimate number above a given threshold.","Find cutoff for top 15%."],
  extension:["Compare two curves using median/IQR.","Estimate probability X≤a from curve.","Explain why percentile readings are approximate.","Assess reliability in a very flat/steep region.","Convert a stated percentile into an estimated count."],
  reasoning:["Why does a top-10% cutoff use the 90th percentile?","What does a smaller IQR imply about the middle half of data?"]
 },
 homework:[
  H("Foundation","n=100: median CF.",["[[100/2=50]]."]),
  H("Foundation","n=120: Q1 and Q3 CF.",["[[30]] and [[90]]."]),
  H("Core","Q1=18,Q3=31. IQR?",["[[31-18=13]]."]),
  H("Core","n=250. 60th percentile CF?",["[[0.60\\times250=150]]."]),
  H("Extension","Top 10% of 250 receive award. Cutoff CF?",["90% at/below cutoff.","[[0.9\\times250=225]]."]),
  H("Extension","Why are graph values estimates?",["Grouped data loses exact individual positions and the smooth curve interpolates between known totals."])
 ],
 cambridge:"The SoW requires median, percentiles, quartiles and IQR from cumulative-frequency diagrams.",
 examSuccess:"Statistics exam questions often pair graph reading with comparison statements."
});

M["19.7"]=C({
 explain:"A histogram represents continuous grouped data. When class widths differ, bar height must be frequency density so that bar area is proportional to frequency. Bars touch because the underlying variable is continuous.",
 keyPoints:["Vertical axis is labelled Frequency density.","Frequency density = frequency ÷ class width.","Bar area represents frequency.","Unequal-width bars cannot use frequency directly as height.","Class boundaries meet with no gaps."],
 rules:[["[[\\text{frequency density}=\\frac{f}{\\text{class width}}]]","bar height"],["[[f=\\text{density}\\times\\text{class width}]]","recover frequency"]],
 method:["Calculate every class width.","Compute density for each class.","Draw touching bars over the correct intervals.","Label axes, especially frequency density.","When reading, multiply height × width to recover frequency."],
 mistakes:["Using frequency as height for unequal classes.","Leaving gaps between continuous classes.","Comparing bar heights as frequencies when widths differ."],
 vocab:["histogram","frequency density","class width","continuous data","bar area"],
 examples:[
  E("Class 140<h≤150 has frequency15. Find density.",["Class width 10.","[[15/10=1.5]]."]),
  E("Bar 150–160 has density3.5. Find frequency.",["Width 10.","[[f=3.5\\times10=35]]."]),
  E("Two classes each frequency20, widths5 and10. Compare heights.",["Densities 4 and2.","Same frequency can produce different heights because widths differ."])
 ],
 practice:{
  foundation:["Density f=12,width4.","Density f=18,width6.","Frequency density2.5,width8.","Class width30–45.","State vertical-axis label."],
  core:["Frequency density1.8,width15.","Width if frequency24,density3.","Complete missing density table.","Draw histogram from grouped table.","Recover missing frequencies from bar heights."],
  extension:["Two bars equal area different widths: compare frequencies.","Missing bar from total frequency.","Estimate part-class frequency assuming uniformity within class.","Explain why equal-frequency bars can have different heights.","Critique a histogram drawn with gaps."],
  reasoning:["Why is area the invariant quantity representing frequency?","Why does frequency density have unusual units?"]
 },
 homework:[
  H("Foundation","f=21,width7: density.",["[[21/7=3]]."]),
  H("Foundation","density1.5,width12: frequency.",["[[1.5\\times12=18]]."]),
  H("Core","f=30,density2.5: width.",["[[30/2.5=12]]."]),
  H("Core","Class50–65 f=24: density.",["Width15.","[[24/15=1.6]]."]),
  H("Extension","Class width8, bar area20: frequency.",["Histogram area represents frequency.","Frequency20."]),
  H("Extension","Explain why density is required for unequal widths.",["It adjusts height so width×height remains proportional to frequency."])
 ],
 cambridge:"The SoW explicitly defines frequency density and requires that label on the vertical axis.",
 examSuccess:"Statistics offers worked grouped-data diagrams and interpretation prompts.",
 sourceImages:["histogram-students.webp"]
});

M["19.8"]=C({
 explain:"Frequency density calculations connect a histogram's geometry to the underlying frequencies. Use the triangle of relationships: density = frequency/width, frequency = density×width, width = frequency/density.",
 keyPoints:["Always compute class width from boundaries.","Use bar height as density, not raw frequency.","Area = width×density = frequency.","Missing values can be recovered in either direction."],
 rules:[["[[d=f/w]]","density"],["[[f=dw]]","frequency"],["[[w=f/d]]","width"]],
 method:["Identify which of f,d,w is missing.","Compute the class width accurately.","Rearrange the relationship.","Use consistent scale if reading from a histogram.","Check bar area against frequency."],
 mistakes:["Using upper boundary as width.","Reading height directly as frequency.","Forgetting scale on density axis."],
 vocab:["frequency density","class width","area","scale"],
 examples:[
  E("Frequency 32, class 10≤x<18. Density?",["Width [[=8]].","[[d=32/8=4]]."]),
  E("Density 2.4, class width15. Frequency?",["[[f=2.4\\times15=36]]."]),
  E("Frequency45, density3. Find class width.",["[[w=45/3=15]]."])
 ],
 practice:{
  foundation:["f=18,w=6.","d=3,w=7.","f=40,d=2.","Width 25–40.","Area of bar width5,height4."],
  core:["Complete table with f,w,d.","Read density from axis and find f.","Find missing class boundary from width.","Use total frequency to find missing bar area.","Compare two bar frequencies."],
  extension:["Scale density axis not starting at 0? Discuss histogram validity.","Estimate part of class frequency using area proportion.","Find total sample size from histogram.","Construct a class with same frequency but half width.","Explain dimensions/units of density."],
  reasoning:["If class width doubles for same frequency, what happens to density?","Why is relative bar area preserved if both axes are rescaled?"]
 },
 homework:[
  H("Foundation","f=28,w=7.",["[[d=4]]."]),
  H("Foundation","d=1.2,w=20.",["[[f=24]]."]),
  H("Core","f=42,d=3.5.",["[[w=12]]."]),
  H("Core","Class 12–20 density2.25.",["Width8.","[[f=18]]."]),
  H("Extension","Same frequency30: widths5 and15. Densities?",["[[30/5=6]], [[30/15=2]]."]),
  H("Extension","Explain why halving width doubles density for fixed frequency.",["Since [[d=f/w]], inverse relationship with width when f is fixed."])
 ],
 cambridge:"Calculation with density is a separate SoW subunit because histogram reading often hides frequency behind area.",
 examSuccess:"Grouped-data calculations support exam-style missing-value questions."
});

M["19.9"]=C({
 explain:"Inference from diagrams means moving beyond reading a value to making a supported statement. The key is to distinguish direct observation, calculation and interpretation, and to avoid claiming more than the diagram can justify.",
 keyPoints:["Quote numerical evidence.","Distinguish estimate from exact reading.","Use percentages for fair comparisons where totals differ.","State what the graph shows, not what you assume caused it."],
 rules:[["evidence + context","strong statistical inference"],["estimate","appropriate for graph interpolation"]],
 method:["Read relevant values carefully.","Calculate difference/percentage if helpful.","Write a comparison or trend statement.","Add context.","Mention uncertainty/limitation if applicable."],
 mistakes:["Vague words like 'much bigger' without numbers.","Causal claims from observational graphs.","Ignoring different scales/totals."],
 vocab:["inference","evidence","estimate","trend","limitation"],
 examples:[
  E("Bar chart: A=42, B=31. Write a supported comparison.",["Category A is 11 higher than B (42 vs31)."]),
  E("Pie charts compare groups of different totals. Can sector size alone compare counts?",["No.","Same sector proportion can represent different absolute counts."]),
  E("CF graph estimate median 27. How should answer be phrased?",["Approximately 27, because value is read from a smooth curve."])
 ],
 practice:{
  foundation:["Write one fact from a bar chart.","Calculate difference between two bars.","State approximate value from graph.","Identify largest category.","Read a percentage sector."],
  core:["Compare two pie charts with different totals.","Infer trend from line graph.","Use median/IQR from CF graph to compare.","Use histogram to identify dense interval.","Write an evidence-backed sentence."],
  extension:["Critique an unsupported claim.","Separate descriptive and causal statements.","Compare two diagrams with different scales.","Explain uncertainty from grouped data.","Identify what extra data would strengthen an inference."],
  reasoning:["When is a graph reading exact and when approximate?","Why can visually large sectors be misleading across different totals?"]
 },
 homework:[
  H("Foundation","A=25,B=18. Difference?",["[[25-18=7]]."]),
  H("Foundation","Graph value appears between 14 and15. How report?",["As an estimate, e.g. about14.5 depending on scale."]),
  H("Core","Two groups have 40% vs55%. Write comparison.",["Second group proportion is 15 percentage points higher."]),
  H("Core","Why not infer total count from pie sector without total sample?",["Sector gives proportion only."]),
  H("Extension","MedianA=32,IQR=6; MedianB=30,IQR=12. Infer.",["A has slightly higher typical value and is more consistent."]),
  H("Extension","Rewrite 'Graph proves exercise causes happiness'.",["Graph suggests an association; causal conclusion needs stronger evidence."])
 ],
 cambridge:"Inference questions should be tied to actual data values and qualified appropriately.",
 examSuccess:"Statistics Raise your grade tasks focus on interpretation rather than mechanical plotting."
});

M["19.10"]=C({
 explain:"Graphs can compare data sets using centre, spread, shape and unusual values. Cumulative-frequency graphs are especially useful for median/IQR; histograms help compare distribution shape and concentration.",
 keyPoints:["Use numerical centre and spread when available.","Compare graph scales consistently.","Mention skew/clustering only when visible.","Contextualise 'higher', 'more variable' or 'more consistent'."],
 rules:[["smaller IQR","middle 50% more consistent"],["higher median","higher typical value"]],
 method:["Identify comparable statistics from each graph.","Read them using same method.","Compute spread if needed.","Describe centre difference.","Describe consistency/shape difference."],
 mistakes:["Comparing heights from histograms with different widths as frequencies.","Using only one statistic.","Ignoring different sample sizes when comparing counts."],
 vocab:["distribution","centre","spread","shape","skew","consistency"],
 examples:[
  E("CF curves: A median45,Q1=38,Q3=51; B median42,Q1=30,Q3=54.",["A median higher (45 vs42).","A IQR13; B IQR24.","A is more consistent."]),
  E("Two histograms have different totals. What should be compared cautiously?",["Shape/density patterns can be compared; raw bar area/counts need sample-size awareness."]),
  E("Why pair median with IQR?",["Both focus on central distribution and resist extremes."])
 ],
 practice:{
  foundation:["Compare two medians.","Compare two IQRs.","State more consistent group.","Calculate IQR from graph readings.","Write one balanced comparison."],
  core:["Compare two CF graphs.","Compare histograms for concentration.","Compare stem-and-leaf using median/range.","Identify skew from histogram qualitatively.","Use percentages with unequal totals."],
  extension:["Discuss conflicting centre/spread evidence.","Explain why same median and IQR do not mean same distribution.","Compare bimodal and unimodal shapes.","Critique a comparison across different axis scales.","Choose which graph best supports a stated comparison."],
  reasoning:["Can a data set be more consistent but have a lower typical value?","Why should comparisons use the same measure across groups?"]
 },
 homework:[
  H("Foundation","A IQR9,B IQR14: more consistent?",["A."]),
  H("Foundation","A median52,B48: higher typical?",["A."]),
  H("Core","A Q1=20,Q3=35; B Q1=18,Q3=40.",["IQR A15, B22.","A more consistent."]),
  H("Core","Write two-part comparison if A median higher but IQR larger.",["A typically higher, but B more consistent."]),
  H("Extension","Explain why a histogram can reveal shape beyond median/IQR.",["It shows how density is distributed across intervals, including skew, peaks and gaps."]),
  H("Extension","Why might percentage histograms be better than frequency histograms for unequal sample sizes?",["They standardise totals, making relative distributions comparable."])
 ],
 cambridge:"Graph comparison should use evidence from displayed distributions and measures.",
 examSuccess:"Exam questions often award separate marks for centre and spread comparisons."
});

M["19.11"]=C({
 explain:"Graphs can mislead through axis choices, class grouping, sample bias and extrapolation. Statistical literacy means checking how the visual was constructed before accepting its apparent message.",
 keyPoints:["Truncated axes can exaggerate differences.","Unequal class widths require histograms, not ordinary frequency bars.","Small or biased samples limit generalisation.","Extrapolation beyond observed range is uncertain.","Correlation graphs do not establish cause."],
 rules:[["visual impression ≠ evidence","check scales and construction"],["outside data range","extrapolation risk"]],
 method:["Read axes and units.","Check whether zero is omitted and whether that matters.","Check class widths and sample source.","Separate description from causal interpretation.","State the limitation and how it affects confidence."],
 mistakes:["Assuming any non-zero baseline is dishonest; sometimes it is useful but must be clear.","Calling every unusual point an error.","Ignoring sample context."],
 vocab:["misleading graph","truncated axis","bias","extrapolation","sampling"],
 examples:[
  E("Bars 98 and100 are drawn from axis starting at97. Effect?",["Visual difference appears much larger than the actual 2-unit difference."]),
  E("A line of best fit is used far beyond observed range.",["This is extrapolation and may be unreliable if relationship changes."]),
  E("Histogram uses equal bar heights for unequal-width equal frequencies.",["Incorrect because density should adjust heights so area represents frequency."])
 ],
 practice:{
  foundation:["Identify truncated axis.","Identify extrapolation.","State one sampling limitation.","State one graph-design issue.","Explain correlation vs causation."],
  core:["Critique a news bar chart.","Critique uneven class intervals in a frequency chart.","Explain effect of small sample.","Suggest improved axis design.","Rewrite a causal caption."],
  extension:["Evaluate two alternative visualisations.","Explain when starting axis above zero is defensible.","Discuss how grouping can hide multimodality.","Assess effect of non-response bias.","Propose data needed before generalising."],
  reasoning:["Can a technically correct graph still be rhetorically misleading?","Why is transparency about scale more important than a blanket 'always start at zero' rule?"]
 },
 homework:[
  H("Foundation","What is extrapolation?",["Prediction beyond observed data range."]),
  H("Foundation","One risk of truncated axis?",["Can visually exaggerate small differences."]),
  H("Core","Why do unequal histogram classes need density?",["Otherwise bar area would not represent frequency fairly."]),
  H("Core","Why is convenience sample weak?",["Selection may not represent target population."]),
  H("Extension","Explain one situation where non-zero axis can be appropriate.",["When focusing on small variation in a continuous measure, provided scale is clearly labelled and interpretation is not deceptive."]),
  H("Extension","How can grouping hide information?",["Different raw distributions can collapse into the same class frequencies, masking clusters/outliers within classes."])
 ],
 cambridge:"The syllabus expects candidates to appreciate restrictions on conclusions from diagrams.",
 examSuccess:"Raise your grade tasks are useful for spotting interpretation traps."
});

M["20.1"]=C({
 explain:"A function is a rule that assigns each allowed input exactly one output. Function notation f(x) names the output from input x. Domain is the set of permitted inputs; range is the set of outputs produced.",
 keyPoints:["Each input has one output in a function.","Different inputs may share an output unless one-to-one is required.","Domain can be restricted by context or algebra.","Range depends on both rule and domain."],
 rules:[["[[f(a)]]","substitute a for x"],["domain","allowed inputs"],["range","resulting outputs"]],
 method:["Read the function rule.","Substitute the input everywhere x occurs.","Apply order of operations.","For domain/range, consider restrictions and mapping.","State outputs clearly."],
 mistakes:["Treating f as multiplication.","Replacing only one x in a formula.","Confusing domain and range."],
 vocab:["function","input","output","domain","range","mapping","function notation"],
 examples:[
  E("If [[f(x)=3x-1]], find [[f(5)]].",["[[f(5)=3(5)-1=14]]."]),
  E("If [[g(x)=x^2+2]], find [[g(-3)]].",["[[(-3)^2+2=11]]."]),
  E("For [[h(x)=1/(x-4)]], state excluded domain value.",["Denominator cannot be zero.","[[x\\ne4]]."])
 ],
 practice:{
  foundation:["f(x)=x+6: f(4).","g(x)=2x−3: g(−2).","h(x)=x²: h(5).","State input/output meaning.","Identify excluded value in 1/(x+2)."],
  core:["f(x)=x²−3x: f(−2).","Given f(3)=11 for f(x)=ax+2, find a.","Find range for f(x)=2x+1 on domain {0,1,2,3}.","Find domain restriction for square root expression.","Interpret a mapping diagram."],
  extension:["Find x if f(x)=17 for f(x)=4x+1.","Determine whether a relation is a function from pairs.","Find range of x² for a restricted finite domain.","Create a function with same output for two inputs.","Explain why vertical-line test relates to 'one output per input'."],
  reasoning:["Can two different x-values have same f(x)?","Why can a function be valid without having an inverse function on its full domain?"]
 },
 homework:[
  H("Foundation","f(x)=2x+5, find f(4).",["[[2(4)+5=13]]."]),
  H("Foundation","g(x)=x²−1, find g(−3).",["[[9-1=8]]."]),
  H("Core","f(x)=3x−2, solve f(x)=19.",["[[3x-2=19]]","[[3x=21]]","[[x=7]]"]),
  H("Core","h(x)=1/(x+5): restriction.",["[[x+5\\ne0]]","[[x\\ne-5]]"]),
  H("Extension","f(x)=x² on domain {−2,−1,0,1,2}. Range?",["Outputs 4,1,0,1,4.","Range {0,1,4}."]),
  H("Extension","Explain why relation {(1,3),(1,5)} is not a function.",["Input 1 is assigned two different outputs."])
 ],
 cambridge:"Current syllabus includes function notation, domain and range explicitly.",
 examSuccess:"Algebra and graphs supports substitution and mapping interpretation.",
 sourceImages:["functions.webp"]
});

M["20.2"]=C({
 explain:"An inverse function reverses a one-to-one function. Algebraically, write y=f(x), swap x and y, then rearrange for y. The inverse undoes the original, so compositions should return x on the appropriate domain.",
 keyPoints:["Inverse notation is [[f^{-1}(x)]], not 1/f(x).","A function must be one-to-one on its domain to have an inverse function.","Graphs of inverse functions reflect in y=x.","Check with [[f(f^{-1}(x))=x]]."],
 rules:[["[[f(f^{-1}(x))=x]]","inverse identity"],["[[f^{-1}(f(x))=x]]","on suitable domain"]],
 method:["Set [[y=f(x)]].","Swap x and y.","Rearrange to make y subject.","Rename y as [[f^{-1}(x)]].","Check by composition."],
 mistakes:["Treating inverse as reciprocal.","Forgetting domain restrictions.","Not swapping x and y before rearranging."],
 vocab:["inverse function","one-to-one","reflection","identity composition"],
 examples:[
  E("Find inverse of [[f(x)=3x+1]].",["[[y=3x+1]]","Swap: [[x=3y+1]]","[[y=(x-1)/3]]","[[f^{-1}(x)=(x-1)/3]]"]),
  E("Check inverse by composition.",["[[f((x-1)/3)=3((x-1)/3)+1=x]]."]),
  E("Why does [[f(x)=x^2]] not have inverse on all reals?",["Inputs x and −x give same output.","Restrict domain, e.g. x≥0, to make it one-to-one."])
 ],
 practice:{
  foundation:["Inverse of x+5.","Inverse of 2x.","Inverse of 4x−3.","Explain f⁻¹ vs 1/f.","Check one inverse pair."],
  core:["Inverse of (x+2)/3.","Inverse of 5−2x.","Find inverse then evaluate f⁻¹(11).","Check by composition.","State restriction needed for x²."],
  extension:["Inverse of fractional linear function.","Find intersection points of f and f⁻¹ conceptually.","Use reflection in y=x.","Explain inverse domain/range swap.","Find parameter so inverse has given value."],
  reasoning:["Why do f and f⁻¹ swap domain and range?","Can a constant function have an inverse? Explain."]
 },
 homework:[
  H("Foundation","Inverse of f(x)=x+7.",["[[y=x+7]]","Swap [[x=y+7]]","[[y=x-7]]"]),
  H("Foundation","Inverse of f(x)=4x.",["[[f^{-1}(x)=x/4]]"]),
  H("Core","Inverse of f(x)=3x−5.",["[[y=3x-5]]","[[x=3y-5]]","[[y=(x+5)/3]]"]),
  H("Core","If f(x)=2x+1, find f⁻¹(9).",["[[f^{-1}(x)=(x-1)/2]]","[[f^{-1}(9)=4]]"]),
  H("Extension","Inverse of f(x)=(x+1)/(x-2).",["[[y=(x+1)/(x-2)]]","[[y(x-2)=x+1]]","[[x(y-1)=2y+1]]","Swap result variable: [[f^{-1}(x)=(2x+1)/(x-1)]]"]),
  H("Extension","Explain why f(x)=x² needs domain x≥0 for inverse sqrt(x).",["Without restriction, x and −x share output.","Restricting x≥0 makes mapping one-to-one."])
 ],
 cambridge:"Inverse functions are explicit Extended content; one-to-one restrictions are useful deeper understanding.",
 examSuccess:"Algebra and graphs provides efficient rearrangement methods that transfer directly to inverses."
});

M["20.3"]=C({
 explain:"A composite function applies one function and then another. In gf(x)=g(f(x)), f acts first because it is inside. Composition is generally not commutative, so fg and gf usually differ.",
 keyPoints:["Inside function first.","Substitute the whole output expression into the next function.","Keep brackets around substituted expressions.","Check domain restrictions after composition."],
 rules:[["[[gf(x)=g(f(x))]]","g after f"],["[[fg(x)=f(g(x))]]","f after g"]],
 method:["Identify order from notation.","Find output of inside function.","Substitute that entire expression into outside function.","Simplify carefully.","For numerical composition, evaluate step by step."],
 mistakes:["Applying left-to-right instead of inside-first.","Dropping brackets around composite input.","Assuming fg=gf."],
 vocab:["composite function","composition","inside function","outside function"],
 examples:[
  E("f(x)=x+6, g(x)=x−3. Find fg(x) and gf(x).",["[[fg=f(x-3)=x+3]]","[[gf=g(x+6)=x+3]]","Here they happen to be equal."]),
  E("f(x)=2x, g(x)=−x. Find gf(4).",["[[f(4)=8]]","[[g(8)=-8]]"]),
  E("f(x)=3x+1. Find ff(x).",["[[f(3x+1)=3(3x+1)+1=9x+4]]."])
 ],
 practice:{
  foundation:["f=x+4,g=2x: fg(x).","Same functions: gf(x).","Find gf(3).","Find ff(2) for f=3x−1.","State which applies first in gf."],
  core:["f=x+2,g=x²: form fg,gf.","f=2x−5,g=1/x: gf(4).","Find ff(x) for f=x−3.","Find gg(−2) for g=x²+1.","Evaluate hgf(2) from three functions."],
  extension:["Find excluded x in a composite involving 1/(x−3).","Construct f,g with fg≠gf.","Solve fg(x)=17.","Form fff(x) for f=2x+1.","Explain domain propagation."],
  reasoning:["Why do translations sometimes commute while other functions do not?","Give an example where gf is defined but fg is not for a certain input."]
 },
 homework:[
  H("Foundation","f=x+5,g=2x. Find gf(3).",["[[f(3)=8]]","[[g(8)=16]]"]),
  H("Foundation","f=3x−1. Find ff(2).",["[[f(2)=5]]","[[f(5)=14]]"]),
  H("Core","f=x²,g=x−4. Find fg(x).",["[[f(g(x))=(x-4)^2]]"]),
  H("Core","f=2x+1,g=x². Find gf(x).",["[[g(f(x))=(2x+1)^2]]"]),
  H("Extension","f=1/x,g=x−2. State where fg undefined.",["[[fg(x)=1/(x-2)]]","Undefined at [[x=2]]."]),
  H("Extension","f=x+1,g=2x. Solve fg(x)=11.",["[[fg(x)=2x+1]]","[[2x+1=11]]","[[x=5]]"])
 ],
 cambridge:"The syllabus defines composition as gf(x)=g(f(x)); notation order must be secure.",
 examSuccess:"Algebra and graphs supports nested substitution and checking.",
 sourceImages:["functions.webp"]
});

M["21.1"]=C({
 explain:"Sets describe collections of objects using precise notation. Venn diagrams represent membership and overlap. The SoW extends to two- and three-set diagrams and De Morgan relationships.",
 keyPoints:["[[A\\cup B]]: in A or B or both.","[[A\\cap B]]: in both.","[[A']] or complement: in universal set but not A.","Start filling Venn diagrams with deepest intersections.","Totals outside circles still belong to universal set."],
 rules:[["[[n(A\\cup B)=n(A)+n(B)-n(A\\cap B)]]","two-set count"],["[[(A\\cup B)'=A'\\cap B']]","De Morgan"],["[[(A\\cap B)'=A'\\cup B']]","De Morgan"]],
 method:["Define universal set and subsets.","Place central overlap first.","Work outward through pairwise-only and single-set regions.","Use totals to find outside region.","Translate shading ↔ notation."],
 mistakes:["Double-counting intersection in union.","Putting pairwise intersection values into triple overlap incorrectly.","Forgetting complement is relative to universal set."],
 vocab:["set","element","universal set","union","intersection","complement","subset","Venn diagram"],
 examples:[
  E("n(A)=23,n(B)=19,n(A∩B)=8. Find n(A∪B).",["[[23+19-8=34]]."]),
  E("Universal set has 50; n(A∪B)=34. Find outside both.",["[[50-34=16]]."]),
  E("Explain [[(A\\cup B)']].",["Elements in neither A nor B.","Equivalent to [[A'\\cap B']]."])
 ],
 practice:{
  foundation:["Translate A∪B.","Translate A∩B.","Translate A'.","Find union count from two sets.","Find outside count from universal total."],
  core:["Complete two-set Venn with totals.","Complete three-set Venn starting at triple intersection.","Shade A∩B'.","Shade (A∪B)'.","Use n(A∪B)=... to find missing intersection."],
  extension:["Prove De Morgan with shaded diagrams.","Solve three-set survey problem.","Find conditional-looking set counts.","Construct sets with given union/intersection sizes.","Explain why inclusion-exclusion subtracts overlap."],
  reasoning:["What is difference between A∈B and A⊂B?","Why must triple overlap be handled before pairwise-only regions?"]
 },
 homework:[
  H("Foundation","n(A)=18,n(B)=15,n(A∩B)=6. Union?",["[[18+15-6=27]]."]),
  H("Foundation","Universal 40, union 27. Outside?",["[[40-27=13]]."]),
  H("Core","n(A)=25, n(A∪B)=38, n(A∩B)=7. Find n(B).",["[[38=25+n(B)-7]]","[[n(B)=20]]"]),
  H("Core","Describe A∩B'.",["In A but not in B."]),
  H("Extension","State De Morgan for complement of union.",["[[(A\\cup B)'=A'\\cap B']]"]),
  H("Extension","Why subtract intersection once in union formula?",["Adding n(A)+n(B) counts shared elements twice; subtracting overlap once leaves one count."])
 ],
 cambridge:"Set language, notation and Venn diagrams are explicit syllabus content; precise notation matters.",
 examSuccess:"Number chapter begins with set notation and worked Venn diagrams.",
 sourceImages:["sets.webp"]
});

M["22.1"]=C({
 explain:"Proportion describes a relationship through a constant of proportionality k. The SoW includes direct and inverse relationships involving first powers, squares, square roots, cubes and cube roots.",
 keyPoints:["Translate words to proportional notation first.","Replace ∝ with =k× relationship.","Use a known pair to find k.","Then substitute new value.","For inverse proportion, the product or transformed product stays constant."],
 rules:[["[[y\\propto x\\Rightarrow y=kx]]","direct"],["[[y\\propto x^2\\Rightarrow y=kx^2]]","square"],["[[y\\propto\\sqrt x\\Rightarrow y=k\\sqrt x]]","square-root"],["[[y\\propto1/x\\Rightarrow y=k/x]]","inverse"],["[[y\\propto1/x^2\\Rightarrow y=k/x^2]]","inverse square"]],
 method:["Write proportional statement.","Introduce k.","Substitute known values to calculate k.","Write complete equation with k.","Substitute target value and solve.","Check direction: direct moves together; inverse moves oppositely."],
 mistakes:["Leaving answer as y∝x without finding k.","Using x² when problem says square root.","For inverse proportion using y=kx instead of k/x."],
 vocab:["direct proportion","inverse proportion","constant of proportionality","proportional symbol"],
 examples:[
  E("y∝x² and y=18 when x=3. Find y when x=5.",["[[y=kx^2]]","[[18=9k\\Rightarrow k=2]]","[[y=2(25)=50]]"]),
  E("t∝1/v² and t=20 when v=3. Find t when v=6.",["[[t=k/v^2]]","[[20=k/9\\Rightarrow k=180]]","[[t=180/36=5]]"]),
  E("y∝√x and y=12 when x=16. Find equation.",["[[12=k\\sqrt{16}=4k]]","[[k=3]]","[[y=3\\sqrt x]]"])
 ],
 practice:{
  foundation:["y∝x, y=10 at x=2: find k.","y∝x, k=4: y at x=7.","y∝x², k=3: y at x=5.","y∝1/x, k=24: y at x=6.","State whether inverse variables move together."],
  core:["y∝x² given one pair, find another.","t∝1/v² given pair.","p∝√q given pair.","m∝q³ given pair.","r∝1/∛s given pair."],
  extension:["Find x from y in direct-square relation.","Compare scale factors without finding k.","Derive ratio method for direct square proportion.","Solve context: intensity inverse square of distance.","Create a relationship where doubling x halves y."],
  reasoning:["Why does doubling x quadruple y when y∝x²?","Why does doubling v quarter t when t∝1/v²?"]
 },
 homework:[
  H("Foundation","y∝x, y=15 when x=3. Find k.",["[[15=3k]]","[[k=5]]"]),
  H("Foundation","y=5x. Find y when x=8.",["[[y=40]]"]),
  H("Core","y∝x², y=20 when x=2. Find y when x=5.",["[[20=4k\\Rightarrow k=5]]","[[y=5(25)=125]]"]),
  H("Core","t∝1/v, t=12 when v=4. Find t when v=6.",["[[12=k/4\\Rightarrow k=48]]","[[t=48/6=8]]"]),
  H("Extension","p∝√q, p=14 when q=49. Find q when p=20.",["[[14=7k\\Rightarrow k=2]]","[[20=2\\sqrt q]]","[[\\sqrt q=10]]","[[q=100]]"]),
  H("Extension","I∝1/d². If I=90 at d=2, find I at d=6.",["[[90=k/4\\Rightarrow k=360]]","[[I=360/36=10]]"])
 ],
 cambridge:"The SoW includes linear, square, square-root, cube and cube-root proportional relationships and requires the ∝ symbol.",
 examSuccess:"Number/Algebra chapters reinforce concise proportional notation and reverse problems.",
 sourceImages:["proportion.webp"]
});

})();
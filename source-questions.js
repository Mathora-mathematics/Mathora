(function(){
'use strict';
const q=(prompt,steps,page,exercise,verifiedDiagram)=>({prompt,steps,source:`Morrison & Hamshaw (2023), p. ${page}, ${exercise}`,verifiedDiagram});
const hist=q('At a school fundraising event, 140 people guessed the number of sweets in a jar. Calculate the frequency density for each class and draw a histogram.',[
'Frequency density = frequency ÷ class width. The class widths are 100, 50, 50, 50, 50 and 100 sweets.',
'The densities, in class order, are [[0.18,\\ 0.36,\\ 0.64,\\ 0.62,\\ 0.42,\\ 0.20]].',
'Draw adjoining bars over the actual class boundaries, using frequency density on the vertical axis. Each bar’s area represents its frequency.',
'Check the frequencies: [[18+18+32+31+21+20=140]].'
],676,'Exercise 20.1, Question 1',{kind:'table',headers:['Guesses n','Frequency'],rows:[['100 < n ≤ 200',18],['200 < n ≤ 250',18],['250 < n ≤ 300',32],['300 < n ≤ 350',31],['350 < n ≤ 400',21],['400 < n ≤ 500',20]]});
hist.solutionDiagram={kind:'histogram',points:[],bars:[[100,200,18],[200,250,18],[250,300,32],[300,350,31],[350,400,21],[400,500,20]],xmax:500,ymax:.8,xstep:100,ystep:.2,xlabel:'Number of sweets guessed',ylabel:'Frequency density'};
const seeds=q('Twenty seeds were planted and measured after three weeks. Estimate the mean height, then draw a cumulative-frequency curve and estimate the median height.',[
'Use class midpoints [[1.5,4.5,7.5,10.5]] cm.',
'[[\\sum fx=2(1.5)+5(4.5)+10(7.5)+3(10.5)=132]].',
'Estimated mean [[=132\\div20=6.6]] cm.',
'Cumulative frequencies are [[2,7,17,20]]. Plot [[(0,0),(3,2),(6,7),(9,17),(12,20)]] and draw a smooth increasing curve.',
'Read the median at cumulative frequency [[20\\div2=10]]. A straight-line interpolation between the surrounding points gives about [[6.9]] cm; a smooth-curve reading may differ slightly.'
],685,'Worked example 5',{kind:'table',headers:['Height h (cm)','Frequency'],rows:[['0 < h ≤ 3',2],['3 < h ≤ 6',5],['6 < h ≤ 9',10],['9 < h ≤ 12',3]]});
seeds.solutionDiagram={kind:'cumulative',points:[[0,0],[3,2],[6,7],[9,17],[12,20]],xmax:12,ymax:20,xstep:3,ystep:5,xlabel:'Height (cm)',ylabel:'Cumulative frequency'};
window.SOURCE_QUESTIONS={
'12.1':[q('Simplify [[\\sqrt{28}]].',['[[28=4\\times7]].','[[\\sqrt{28}=2\\sqrt7]].'],276,'Exercise 9.7, Question 1(a)'),q('Simplify [[5\\sqrt{12}]].',['[[12=4\\times3]].','[[5\\sqrt{12}=5\\times2\\sqrt3=10\\sqrt3]].'],276,'Exercise 9.7, Question 1(c)'),q('Simplify [[\\sqrt{99}]].',['[[99=9\\times11]].','[[\\sqrt{99}=3\\sqrt{11}]].'],276,'Exercise 9.7, Question 1(d)')],
'18.3':[seeds],'19.5':[seeds],'19.7':[hist],'19.8':[hist]
};
})();

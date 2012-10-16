var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen çarpma işleminin sonucunu bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"30px",right:"150px",width:"370px",height:"26px",textAlign:"center"}),Interaction.appendButton({bottom:"30px",right:"30px"}),Interaction.appendInput({position:"absolute",top:"-9px",left:"202px",height:"32px",width:"42px",fontSize:"22px"}),Interaction.appendInput({position:"absolute",top:"35px",left:"202px",height:"32px",width:"42px",fontSize:"22px"}),Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle,html:'<div id="firstFracDiv" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div><span id="intPlus" style="position:absolute;top:17px;left:76px;font-weight:bold;">•</span></div><div id="secondFracDiv" style="position:absolute;top:0px;left:96px;width:65px;height:60px;"></div><span id="intEq" style="position:absolute;top:18px;left:170px;">=</span><div id="answerLine" style="position:absolute;top:29px;left:200px;width:48px;height:1px;border-top:2px solid;padding:0"></div>'}),$(Interaction.inputs[0]).attr("max-length",3),$(Interaction.inputs[1]).attr("max-length",3),$(Interaction.questionDiv).append(Interaction.inputs[0]),$(Interaction.questionDiv).append(Interaction.inputs[1]),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.answerDiv&&$(Interaction.answerDiv).remove(),$("#firstFracDiv").html(""),$("#secondFracDiv").html(""),$(Interaction.inputs[0]).css("color","black"),$(Interaction.inputs[1]).css("color","black");var t=Util.randomInteger(0,5),n=Util.randomInteger(0,5),r,i,s,o,u,a;t==0&&(u=Util.randomInteger(1,4)),n==0&&(a=Util.randomInteger(1,4)),s=Util.randomInteger(2,7);do o=Util.randomInteger(2,7,[s]);while(Util.gcd(s,o)!=1);do r=Util.randomInteger(1,10);while(r==s||r%s==0);do i=Util.randomInteger(1,10);while(i==o||i%o==0);t==0&&n==0?(Interaction.firstFrac=new RationalNumber({factor:1,integer:u,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,integer:a,nominator:i,denominator:o})):t==0&&n!=0?(Interaction.firstFrac=new RationalNumber({factor:1,integer:u,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,nominator:i,denominator:o})):t!=0&&n==0?(Interaction.firstFrac=new RationalNumber({factor:1,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,integer:a,nominator:i,denominator:o})):(Interaction.firstFrac=new RationalNumber({factor:1,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,nominator:i,denominator:o})),Interaction.answer=Interaction.firstFrac.multiplication(Interaction.secondFrac),Interaction.answer.convertToCompoundForm(),Interaction.firstH=Interaction.firstFrac.toHTML(20),$(Interaction.firstH).css("right","0px"),Interaction.secondH=Interaction.secondFrac.toHTML(20),$(Interaction.secondH).css("left","0px"),Interaction.secondFrac.integer?($("#intEq").css("left","170px"),$("#answerLine").css("left","196px"),$(Interaction.inputs[0]).css("left","198px"),$(Interaction.inputs[1]).css("left","198px"),$(Interaction.questionDiv).css("left","140px")):($("#intEq").css("left","140px"),$("#answerLine").css("left","164px"),$(Interaction.inputs[0]).css("left","166px"),$(Interaction.inputs[1]).css("left","166px"),$(Interaction.questionDiv).css("left","150px")),$("#firstFracDiv").append(Interaction.firstH),$("#secondFracDiv").append(Interaction.secondH)},preCheck:function(){},isAnswerCorrect:function(e){return e[0]!=0&&e[1]!=0?e[0]*Interaction.answer.denominator==e[1]*Interaction.answer.nominator?!0:!1:!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1),$(Interaction.inputs[0]).css("color","red"),$(Interaction.inputs[1]).css("color","red"),Interaction.showAnswer()},showAnswer:function(){Interaction.answerDiv=Util.dom({parent:Interaction.container,tag:"div",css:answerDivStyle,html:'<div id="sf1" style="color:black;position:absolute;top:20px;left:20px;width:40px;height:42px;padding:0;margin:0;line-height:20px;"><div id="sint1" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div><div id="snom1" style="text-align:center;width:20px;height:20px;float:left;"></div><div id="sline1" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div><div id="sdenom1" style="text-align:center;width:20px;height:20px;float:left;"></div></div><span id="t1" style="color:black;position:absolute;top:32px;left:66px;">•</span><div id="sf2" style="color:black;position:absolute;top:20px;left:72px;width:40px;height:42px;padding:0;margin:0;line-height:20px;"><div id="sint2" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div><div id="snom2" style="text-align:center;width:20px;height:20px;float:left;"></div><div id="sline2" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div><div id="sdenom2" style="text-align:center;width:20px;height:20px;float:left;"></div></div><span id="ee1" style="position:absolute;top:33px;left:118px;">=</span><div id="sf3" style="position:absolute;top:20px;left:134px;width:60px;height:42px;padding:0;margin:0;line-height:20px;"><div id="snom3" style="text-align:center;width:60px;height:20px;float:left;"></div><div id="sline3" style="height:1px;width:60px;border-top:2px solid;padding:0;float:left;"></div><div id="sdenom3" style="text-align:center;width:60px;height:20px;float:left;"></div></div><span id="ee2" style="position:absolute;top:33px;left:200px;">=</span><div id="ff" style="position:absolute;top:20px;left:216px;width:30px;height:42px;padding:0;margin:0;line-height:20px;"><div id="fnom" style="text-align:center;width:30px;height:20px;float:left;"></div><div id="fline" style="height:1px;width:30px;border-top:2px solid;padding:0;float:left;"></div><div id="fdenom" style="text-align:center;width:30px;height:20px;float:left;"></div></div>'}),Interaction.secondFrac.integer?($("#sf1").css("left","20px"),$("#fact1").css("left","38px"),$("#t1").css("left","66px")):($("#sf1").css("left","30px"),$("#fact1").css("left","48px"),$("#t1").css("left","76px"));var e="";if(Interaction.firstFrac.integer){$("#sint1").html(Interaction.firstFrac.integer);var t=Interaction.firstFrac.integer*Interaction.firstFrac.denominator;t+=Interaction.firstFrac.nominator,e+=t+" • "}else e+=""+Interaction.firstFrac.nominator+" • ";if(Interaction.secondFrac.integer){$("#sint2").html(Interaction.secondFrac.integer);var n=Interaction.secondFrac.integer*Interaction.secondFrac.denominator;n+=Interaction.secondFrac.nominator,e+=n}else e+=""+Interaction.secondFrac.nominator;$("#snom1").html(Interaction.firstFrac.nominator),$("#snom2").html(Interaction.secondFrac.nominator),$("#sdenom1").html(Interaction.firstFrac.denominator),$("#sdenom2").html(Interaction.secondFrac.denominator),$("#snom3").html(e),$("#sdenom3").html(Interaction.answer.denominator),$("#fnom").html(Interaction.answer.nominator),$("#fdenom").html(Interaction.answer.denominator)}};
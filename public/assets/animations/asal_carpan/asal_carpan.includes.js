function __Styles(){questionDivStyle={position:"absolute",top:"20px",left:"80px",width:"440px",height:"100px",fontSize:"32px"},answerDivStyle={position:"absolute",top:"120px",left:"30px",width:"500px",height:"60px",color:"#069",fontSize:"20px",opacity:0},firstDivStyle={position:"absolute",top:"26px",left:"260px",width:"80px",height:"150px",fontSize:"24px"},secondDivStyle={position:"absolute",top:"110px",left:"440px",width:"200px",height:"70px",fontSize:"24px"}}var getFactorsAndNumbersArrays=function(e){var t=[],n=[];Interaction.primeFactors=[],Interaction.numbersOfFactors=[],Interaction.wholePrimeFactors=[],Interaction.wholePrimeFactors=Util.getWholePrimeFactors(e),t=Util.getPrimeFactors(e),n=Util.getWholePrimeFactors(e);for(var r=0;r<t.length;r++)Interaction.primeFactors.push(t[r]);var i,s=[];for(var o=0;o<t.length;o++)s=n.slice(n.indexOf(t[o]),n.lastIndexOf(t[o])+1),i=s.length,Interaction.numbersOfFactors.push(i)},Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=t+1e3,r=n+8e3,i=r+2e3,s=r+13500,o=s+2e3;Animation.firstDiv=Util.dom({parent:Animation.container,tag:"div",css:firstDivStyle,html:'<div id="line" style="opacity:0;position:absolute;top:0px;left:40px;border-left:1px solid;width:1px;height:150px;"></div><span id="num1" style="opacity:0;font-weight:bold;position:absolute;left:8px;top:0px;">24</span><span id="num2" style="opacity:0;position:absolute;top:0px;left:48px">2</span><span id="num3" style="opacity:0;position:absolute;top:32px;left:8px;">12</span><span id="num4" style="opacity:0;position:absolute;top:32px;left:48px">2</span><span id="num5" style="opacity:0;position:absolute;top:64px;left:18px;">6</span><span id="num6" style="opacity:0;position:absolute;top:64px;left:48px">2</span><span id="num7" style="opacity:0;position:absolute;top:96px;left:18px;">3</span><span id="num8" style="opacity:0;position:absolute;top:96px;left:48px">3</span><span id="num9" style="opacity:0;position:absolute;top:128px;left:18px;">1</span>'}),Animation.secondDiv=Util.dom({parent:Animation.container,tag:"div",css:secondDivStyle,html:'<div id="firstLine" style="opacity:0;"><b>24</b> = 2 x 2 x 2 x 3</div><image id="indicator" src="/assets/animations/asal_carpan/asal_sayi_ikonu.png" style="opacity:0;position:absolute;top:-86px;left:46px;"/><div id="secondLine" style="opacity:0;"><span style="position:absolute;top:46px;left:34px;"> = </span><div id="x1" style="position:absolute;top:46px;left:54px;">2</div><div id="y1" style="position:absolute;top:36px;left:66px;font-size:18px;">3</div><span style="position:absolute;top:46px;left:82px;"> x </span><div style="position:absolute;top:46px;left:100px;" id="x1">3</div></div>'}),$("#num1").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#line").delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad");for(var u=2;u<10;u+=2){var a=u+1;$("#num"+u).delay(n+750*u).animate({opacity:1},1e3,"easeInOutQuad"),$("#num"+a).delay(n+750*u).animate({opacity:1},1e3,"easeInOutQuad")}$("#firstLine").delay(r).animate({opacity:1},1e3,"easeInOutQuad"),$("#indicator").delay(i).animate({opacity:1},500,"easeInOutQuad").delay(1e3).animate({opacity:0},1e3,"easeInOutQuad",function(){$("#indicator").css("left","85px")}).delay(500).animate({opacity:1},500,"easeInOutQuad").delay(1e3).animate({opacity:0},1e3,"easeInOutQuad",function(){$("#indicator").css("left","124px")}).delay(500).animate({opacity:1},500,"easeInOutQuad").delay(1e3).animate({opacity:0},1e3,"easeInOutQuad",function(){$("#indicator").css("left","162px")}).delay(500).animate({opacity:1},500,"easeInOutQuad").delay(1e3).animate({opacity:0},1e3,"easeInOutQuad"),$("#secondLine").delay(s).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.secondDiv).delay(o).animate({top:"-=40px"},1e3,"easeInOutQuad",function(){Main.animationFinished()})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki sayının asal çarpanlarını yazınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"20px",right:"160px",width:"340px",height:"26px",textAlign:"center"}),Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.questionDiv&&$(Interaction.questionDiv).remove(),Interaction.answerDiv&&$(Interaction.answerDiv).remove(),Interaction.flushInputs(),Interaction.question=Util.randomInteger(4,101),getFactorsAndNumbersArrays(Interaction.question),Interaction.numOfWholeFactors=Util.getWholePrimeFactors(Interaction.question).length,Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle,html:'<div id="question"></div><span id="eq">=</span><span id="inputs"></span>'}),$("#question").css({position:"absolute",top:"30px",left:"22px",width:"48px",height:"30px",textAlign:"right"}),$("#question").html(Interaction.question),$("#eq").css({position:"absolute",top:"30px",left:"76px"}),$("#inputs").css({position:"absolute",top:"26px",left:"100px",width:"380px",height:"40px"});for(var t=0;t<Interaction.numOfWholeFactors;t++)Interaction.appendInput({position:"static",width:"32px",height:"30px",fontSize:"24px"});for(var t=0;t<Interaction.numOfWholeFactors;t++)$("#inputs").append(Interaction.inputs[t]),t!=Interaction.numOfWholeFactors-1&&$("#inputs").append('<span style="position:relative;top:2px;"> x </span>');var n=(6-Interaction.numOfWholeFactors)*28+26,r=""+n+"px";$(Interaction.questionDiv).css("left",r);for(var i=0;i<Interaction.numOfWholeFactors;i++)$(Interaction.inputs[i]).attr("maxlength","2");Interaction.answerDiv=Util.dom({parent:Interaction.container,tag:"div",css:answerDivStyle,html:'<span id="primeText" style="text-align:center;position:absolute;top:60px;left:-10px;line-height:24px;"></span><span id="q" style="position:absolute;top:10px;left:166px;width:34px;text-align:right;"></span><span style="position:absolute;top:10px;left:206px;"> = </span><span id="b1" style="position:absolute;top:10px;left:224px;"></span><span id="p1" style="position:absolute;top:0px;left:234px;font-size:16px;"></span><span id="c1" style="position:absolute;top:10px;left:248px;"></span><span id="b2" style="position:absolute;top:10px;left:266px;"></span><span id="p2" style="position:absolute;top:0px;left:276px;font-size:16px;"></span><span id="c2" style="position:absolute;top:10px;left:290px;"></span><span id="b3" style="position:absolute;top:10px;left:306px;"></span><span id="p3" style="position:absolute;top:0px;left:316px;font-size:16px;"></span>'}),Interaction.primeFactors[0]<10&&Interaction.numbersOfFactors[0]<=1&&$("#b1").css("left","228px"),$("#q").html(Interaction.question);for(var t=1;t<=Interaction.primeFactors.length;t++)$("#b"+t).html(Interaction.primeFactors[t-1]),Interaction.numbersOfFactors[t-1]>1&&$("#p"+t).html(Interaction.numbersOfFactors[t-1]),t!=Interaction.primeFactors.length&&$("#c"+t).html(" x ");if(Util.isPrimeNumber(Interaction.question)){var s=""+Interaction.question+" kendisi asal sayı olduğu için asal çarpanı da kendisidir.";$("#primeText").html(s)}},preCheck:function(){},isAnswerCorrect:function(e){var t=[],n=0;if(Interaction.numOfWholeFactors==1)t[0]=e;else for(var r=0;r<e.length;r++)t[r]=e[r];t.sort(function(e,t){return e-t});for(var i=0;i<t.length;i++)console.log(t[i]),console.log(Interaction.wholePrimeFactors[i]),t[i]==Interaction.wholePrimeFactors[i]&&(n+=1);return n==Interaction.numOfWholeFactors?!0:!1},onCorrectAnswer:function(){for(var e=0;e<Interaction.numOfWholeFactors;e++)$(Interaction.inputs[e]).css("color","green");$(Interaction.answerDiv).css("opacity",1)},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1);for(var e=0;e<Interaction.numOfWholeFactors;e++)Interaction.inputs[e].value=Interaction.wholePrimeFactors[e],$(Interaction.inputs[e]).css("color","green");$(Interaction.answerDiv).css("opacity",1)}};
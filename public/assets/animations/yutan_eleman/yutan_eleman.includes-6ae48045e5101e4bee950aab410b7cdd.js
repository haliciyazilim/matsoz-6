function __Styles(){animDivStyle={position:"absolute",top:"40px",left:"330px",width:"150px",height:"80px",fontSize:"32px"},questionDivStyle={position:"absolute",top:"60px",left:"160px",width:"200px",height:"60px",fontSize:"32px"},answerDivStyle={position:"absolute",top:"160px",left:"80px",width:"360px",height:"30px",fontSize:"24px",color:"#069",textAlign:"center"}}var Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=t+4500,r=n+4500,i=r+4500,s=i+3e3;Animation.animDiv=Util.dom({parent:Animation.container,tag:"div",css:animDivStyle,html:'<span id="eq1" style="opacity:0;position:absolute;top:0px;left:0px;">7 x 0 = 0</span><span id="eq2" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 7 = 0</span><span id="eq3" style="opacity:0;position:absolute;top:0px;left:0px;">3 x 0 = 0</span><span id="eq4" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 3 = 0</span><span id="eq5" style="opacity:0;position:absolute;top:0px;left:0px;">46 x 0 = 0</span><span id="eq6" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 46 = 0</span><span id="eq7" style="opacity:0;position:absolute;top:0px;left:0px;">a x <span style="color:red;">0</span> = <span style="color:red;">0</span></span><span id="eq8" style="opacity:0;position:absolute;top:40px;left:0px;"><span style="color:red;">0</span> x a = <span style="color:red;">0</span></span><span id="lastText" style="opacity:0;position:absolute;width:220px;top:100px;left:-40px;">yutan eleman <span style="color:red;">0</span></span>'}),$("#eq1").delay(t).animate({opacity:1},1e3,"easeInOutQuad").delay(2500).animate({opacity:0},1e3,"easeInOutQuad"),$("#eq2").delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad").delay(1500).animate({opacity:0},1e3,"easeInOutQuad"),$("#eq3").delay(n).animate({opacity:1},1e3,"easeInOutQuad").delay(2500).animate({opacity:0},1e3,"easeInOutQuad"),$("#eq4").delay(n+1e3).animate({opacity:1},1e3,"easeInOutQuad").delay(1500).animate({opacity:0},1e3,"easeInOutQuad"),$("#eq5").delay(r).animate({opacity:1},1e3,"easeInOutQuad").delay(2500).animate({opacity:0},1e3,"easeInOutQuad"),$("#eq6").delay(r+1e3).animate({opacity:1},1e3,"easeInOutQuad").delay(1500).animate({opacity:0},1e3,"easeInOutQuad"),$("#eq7").delay(i).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq8").delay(i+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#lastText").delay(s).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki işlemlerin sonuçlarını yazınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle,html:'<span id="num1" style="position:static;">0</span><span id="operator" style="position:static;"> x </span><span id="num2" style="position:static;">100</span><span id="eqq" style="position:static;"> = </span>'}),Interaction.answerDiv=Util.dom({parent:Interaction.container,tag:"div",css:answerDivStyle,html:'<span id="ansText"></span>'}),Interaction.appendInput({position:"static",width:"56px",height:"36px",fontSize:"32px"}),$(Interaction.questionDiv).append(Interaction.input),Interaction.appendStatus({bottom:"20px",right:"160px",width:"340px",height:"26px",textAlign:"center"}),Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.myIndex=0,Interaction.myRandom=Util.randomInteger(1,11),Interaction.setRandomGenerator(2),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.randomNumber=e,$("#ansText").html(""),Interaction.myIndex+=1,Interaction.myIndex==Interaction.myRandom?Interaction.randomNumber==0?(Interaction.num1=0,Interaction.num2=100,Interaction.operator="x"):(Interaction.num1=100,Interaction.num2=0,Interaction.operator="x"):(Interaction.feint=Util.randomInteger(0,4),Interaction.feint!=0?Interaction.randomNumber==0?(Interaction.num1=0,Interaction.num2=Util.randomInteger(2,100),Interaction.operator="x"):(Interaction.num1=Util.randomInteger(2,100),Interaction.num2=0,Interaction.operator="x"):(Util.rand01()==0?Interaction.operator="+":Interaction.operator="x",Interaction.operator=="x"?Interaction.randomNumber==0?(Interaction.num1=0,Interaction.num2=1):(Interaction.num1=1,Interaction.num2=0):Interaction.randomNumber==0?(Interaction.num1=0,Interaction.num2=Util.rand01()):(Interaction.num1=Util.rand01(),Interaction.num2=0))),Interaction.operator=="x"?Interaction.answer=Interaction.num1*Interaction.num2:Interaction.answer=Interaction.num1+Interaction.num2,Interaction.operator=="x"?Interaction.answerStr="0 yutan elemandır!":Interaction.answerStr="0 etkisiz elemandır!",$("#num1").html(Interaction.num1),$("#num2").html(Interaction.num2),$("#operator").html(" "+Interaction.operator+" "),$(Interaction.input).css("color","black")},preCheck:function(){},isAnswerCorrect:function(e){return e==Interaction.answer},onCorrectAnswer:function(){Interaction.feint!=0&&$("#ansText").html(Interaction.answerStr),$(Interaction.input).css("color","green")},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1),Interaction.feint!=0&&$("#ansText").html(Interaction.answerStr),Interaction.input.value=Interaction.answer,$(Interaction.input).css("color","green")}};
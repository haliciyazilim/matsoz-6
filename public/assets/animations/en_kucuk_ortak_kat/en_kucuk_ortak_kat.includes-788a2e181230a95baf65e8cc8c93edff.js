function __Styles(){answerDivColor="#069",animColor="#ff0000"}var getQuestion=function(){if(Interaction.randomNumber==0){do Interaction.question[0]=Util.randomInteger(2,16),Interaction.question[1]=Util.randomInteger(2,16,[Interaction.question[0]]),Interaction.answer=Util.lcm(Interaction.question[0],Interaction.question[1]);while(Interaction.answer>200);Interaction.ques="EKOK("+Interaction.question[0]+", "+Interaction.question[1]+")",$("#questionn").html(Interaction.ques)}else{do Interaction.question[0]=Util.randomInteger(2,16),Interaction.question[1]=Util.randomInteger(2,16,[Interaction.question[0]]),Interaction.question[2]=Util.randomInteger(2,16,[Interaction.question[0],Interaction.question[1]]),Interaction.answer=Util.lcm(Interaction.question[0],Interaction.question[1],Interaction.question[2]);while(Interaction.answer>200);Interaction.ques="EKOK("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+")",$("#questionn").html(Interaction.ques)}},getAnswerTitles=function(){Interaction.answerTitles=[];for(var e=0;e<Interaction.question.length;e++){Interaction.answerTitles[e]="",Interaction.answerTitles[e]+=Interaction.question[e];if(Interaction.question[e]==10)Interaction.answerTitles[e]+="'un ";else if(Interaction.question[e]==20)Interaction.answerTitles[e]+="'nin ";else if(Interaction.question[e]==30)Interaction.answerTitles[e]+="'un ";else if(Interaction.question[e]==40)Interaction.answerTitles[e]+="'ın ";else if(Interaction.question[e]==50)Interaction.answerTitles[e]+="'nin ";else if(Interaction.question[e]==60)Interaction.answerTitles[e]+="'ın ";else if(Interaction.question[e]==70)Interaction.answerTitles[e]+="'in ";else if(Interaction.question[e]==80)Interaction.answerTitles[e]+="'nin ";else if(Interaction.question[e]==90)Interaction.answerTitles[e]+="'ın ";else if(Interaction.question[e]==100)Interaction.answerTitles[e]+="'ün ";else{var t=Interaction.question[e]%10;switch(t){case 1:Interaction.answerTitles[e]+="'in";break;case 2:Interaction.answerTitles[e]+="'nin";break;case 3:Interaction.answerTitles[e]+="'ün";break;case 4:Interaction.answerTitles[e]+="'ün";break;case 5:Interaction.answerTitles[e]+="'in";break;case 6:Interaction.answerTitles[e]+="'nın";break;case 7:Interaction.answerTitles[e]+="'nin";break;case 8:Interaction.answerTitles[e]+="'in";break;case 9:Interaction.answerTitles[e]+="'ın"}}Interaction.answerTitles[e]+=" katları : "}},Animation={images:[],init:function(e){Animation.container=e;var t=1e3;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).css({position:"absolute",top:"30px",left:"40px",width:"700px",height:"150px",fontSize:"20px"}),$(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>'),$("#firstDiv").css({position:"absolute",top:"10px",left:"20px",width:"600px",height:"40px"}),$("#firstDiv").html('<div id="title1">3\'ün katları</div><div id="eq1"></div>'),$("#title1").css({position:"absolute",top:"10px",left:"10px",opacity:0}),$("#title1").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq1").css({position:"absolute",top:"10px",left:"130px",width:"460px",height:"24px"}),$("#eq1").html('<span id="s1">3, </span><span id="s2">6, </span><span id="s3">9, </span><span id="s4">12, </span><span id="s5">15, </span><span id="s6">18, </span><span id="s7">21, </span><span id="s8">24, </span><span id="s9">27, </span><span id="s10">30, </span><span id="s11">33, </span><span id="s12">36, </span><span id="s13">39, ...</span>'),$("#secondDiv").css({position:"absolute",top:"100px",left:"20px",width:"600px",height:"40px"}),$("#secondDiv").html('<div id="title2">4\'ün katları</div><div id="eq2"></div>'),$("#title2").css({position:"absolute",top:"10px",left:"10px",opacity:0}),$("#title2").delay(t+12e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq2").css({position:"absolute",top:"10px",left:"130px",width:"460px",height:"24px"}),$("#eq2").html('<span id="d1">4, </span><span id="d2">8, </span><span id="d3">12, </span><span id="d4">16, </span><span id="d5">20, </span><span id="d6">24, </span><span id="d7">28, </span><span id="d8">32, </span><span id="d9">36, </span><span id="d10">40, </span><span id="d11">44, </span><span id="d12">48, </span><span id="d13">52, ...</span>'),$("#thirdDiv").css({position:"absolute",top:"65px",left:"510px",width:"170px",height:"20px",fontWeight:"bold",opacity:0}),$("#thirdDiv").html("EKOK(3, 4) = 12"),$("#thirdDiv").delay(28e3).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1500)});for(var n=1;n<14;n++)$("#s"+n).css("opacity",0).delay(t+1e3+n*750).animate({opacity:1},750,"easeInOutQuad"),$("#d"+n).css("opacity",0).delay(t+13e3+n*750).animate({opacity:1},750,"easeInOutQuad");$("#s4").delay(19e3).animate({color:animColor},1e3,"easeInOutQuad"),$("#s8").delay(16e3).animate({color:animColor},1e3,"easeInOutQuad"),$("#s12").delay(13e3).animate({color:animColor},1e3,"easeInOutQuad"),$("#d3").delay(7750).animate({color:animColor},1e3,"easeInOutQuad"),$("#d6").delay(5500).animate({color:animColor},1e3,"easeInOutQuad"),$("#d9").delay(3250).animate({color:animColor},1e3,"easeInOutQuad"),$("#d12").delay(1e3).animate({color:animColor},1e3,"easeInOutQuad");var r=new Path.Circle(new Point(258,46),18);r.strokeColor="red",r.opacity=0;var i=new Path.Circle(new Point(235,136),18);i.strokeColor="red",i.opacity=0,r.animate({style:{opacity:1},delay:26500,duration:1e3,animationType:"easeInOutQuad"}),i.animate({style:{opacity:1},delay:26500,duration:1e3,animationType:"easeInOutQuad"})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen sayıların en küçük ortak katını bulunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"20px",left:"120px",width:"320px",height:"60px",fontSize:"26px",textAlign:"center"}),$(Interaction.questionDiv).html('<div id="questionn"></div><span id="eq">=</span>'),$("#questionn").css({position:"absolute",top:"20px",left:"0px",width:"200px",height:"30px",textAlign:"right",fontWeight:"bold"}),$("#eq").css({position:"absolute",top:"22px",left:"206px"}),Interaction.answerDiv=document.createElement("div"),Interaction.answerDiv.id="answerDiv",$(Interaction.container).append(Interaction.answerDiv),$(Interaction.answerDiv).css({position:"absolute",top:"100px",left:"90px",width:"440px",height:"90px",fontSize:"16px",color:answerDivColor}),$(Interaction.container).append('<div id="ans"></div>'),$("#ans").css({position:"absolute",top:"200px",left:"150px",width:"220px",height:"20px",fontSize:"18px",color:"green",fontWeight:"bold",textAlign:"center"}),$(Interaction.answerDiv).html('<div id="answer1"><span id="f1" style="font-weight:bold;"></span><span id="n1"></span><span id="n2"></span><span id="n3"></span><span id="n4"></span><span id="n5"></span><span id="n6"></span><span id="n7"></span><span id="n8"></span><span id="n9" ></span><span id="n10"></span><span id="td1"></span></div><div id="answer2"><span id="f2" style="font-weight:bold;"></span><span id="n11"></span><span id="n12"></span><span id="n13"></span><span id="n14"></span><span id="n15"></span><span id="n16"></span><span id="n17"></span><span id="n18"></span><span id="n19"></span><span id="n20"></span><span id="td2"></span></div><div id="answer3"><span id="f3" style="font-weight:bold;"></span><span id="n21"></span><span id="n22"></span><span id="n23"></span><span id="n24"></span><span id="n25"></span><span id="n26"></span><span id="n27"></span><span id="n28"></span><span id="n29" ></span><span id="n30"></span><span id="td3"></span></div>'),$("#answer1").css({position:"absolute",top:"0px",left:"0px",width:"440px",height:"30px"}),$("#answer2").css({position:"absolute",top:"30px",left:"0px",width:"440px",height:"30px"}),$("#answer3").css({position:"absolute",top:"60px",left:"0px",width:"440px",height:"30px"}),Interaction.appendStatus({bottom:"20px",right:"170px",width:"400px",height:"30px",textAlign:"center"}),Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.appendInput({top:"13px",left:"226px",width:"45px",height:"40px",fontSize:"24px"}),$(Interaction.inputs).attr("maxlength","3"),$(Interaction.questionDiv).append(Interaction.input),Interaction.setRandomGenerator(2),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.randomNumber=Util.rand01(),Interaction.answerTitles=[],Interaction.question=[],$("#ans").html(""),$("#f1").html(""),$("#f2").html(""),$("#f3").html(""),$("#td1").html(""),$("#td2").html(""),$("#td3").html("");for(var t=1;t<31;t++)$("#n"+t).html(""),$("#n"+t).css("color","black").css("font-weight","normal");Interaction.input.style.color="black",getQuestion()},preCheck:function(){},isAnswerCorrect:function(e){return e==Interaction.answer},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),Interaction.input.style.color="red",getAnswerTitles();for(var e=1;e<=Interaction.question.length;e++)$("#f"+e).html(Interaction.answerTitles[e-1]),$("#td"+e).html(", ...");for(var e=0;e<Interaction.question.length;e++)if(Interaction.answer>Interaction.question[e]*10){for(var t=1;t<6;t++){var n=10*e+t,r=Interaction.question[e]*t,i=""+r+", ";$("#n"+n).html(i)}var n=10*e+6,r=Interaction.question[e]*6,i="....., ";$("#n"+n).html(i);var n=10*e+7,r=Interaction.answer-2*Interaction.question[e],i=""+r+", ";$("#n"+n).html(i);var n=10*e+8,r=Interaction.answer-Interaction.question[e],i=""+r+", ";$("#n"+n).html(i);var n=10*e+9,r=Interaction.answer,i=""+r+", ";$("#n"+n).html(i),$("#n"+n).css("color","green").css("font-weight","bold");var n=10*e+10,r=Interaction.answer+Interaction.question[e],i=""+r;$("#n"+n).html(i)}else for(var t=1;t<=10;t++){var n=10*e+t,r=Interaction.question[e]*t;if(t==10)var i=""+r;else var i=""+r+", ";$("#n"+n).html(i),r==Interaction.answer&&$("#n"+n).css("color","green").css("font-weight","bold")}var s="";Interaction.question.length==2?s+="EKOK("+Interaction.question[0]+", "+Interaction.question[1]+") = "+Interaction.answer:s+="EKOK("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+") = "+Interaction.answer,$("#ans").html(s)}};
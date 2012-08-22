var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen sayıların en küçük ortak katını bulunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"20px",left:"120px",width:"320px",height:"60px",fontSize:"26px",textAlign:"center"}),$(Interaction.questionDiv).html('<div id="questionn"></div><span id="eq">=</span>'),$("#questionn").css({position:"absolute",top:"20px",left:"0px",width:"200px",height:"30px",textAlign:"right",fontWeight:"bold"}),$("#eq").css({position:"absolute",top:"22px",left:"206px"}),Interaction.answerDiv=document.createElement("div"),Interaction.answerDiv.id="answerDiv",$(Interaction.container).append(Interaction.answerDiv),$(Interaction.answerDiv).css({position:"absolute",top:"100px",left:"90px",width:"440px",height:"90px",fontSize:"16px",color:answerDivColor}),$(Interaction.container).append('<div id="ans"></div>'),$("#ans").css({position:"absolute",top:"200px",left:"150px",width:"220px",height:"20px",fontSize:"18px",color:"green",fontWeight:"bold",textAlign:"center"}),$(Interaction.answerDiv).html('<div id="answer1"><span id="f1" style="font-weight:bold;"></span><span id="n1"></span><span id="n2"></span><span id="n3"></span><span id="n4"></span><span id="n5"></span><span id="n6"></span><span id="n7"></span><span id="n8"></span><span id="n9" ></span><span id="n10"></span><span id="td1"></span></div><div id="answer2"><span id="f2" style="font-weight:bold;"></span><span id="n11"></span><span id="n12"></span><span id="n13"></span><span id="n14"></span><span id="n15"></span><span id="n16"></span><span id="n17"></span><span id="n18"></span><span id="n19"></span><span id="n20"></span><span id="td2"></span></div><div id="answer3"><span id="f3" style="font-weight:bold;"></span><span id="n21"></span><span id="n22"></span><span id="n23"></span><span id="n24"></span><span id="n25"></span><span id="n26"></span><span id="n27"></span><span id="n28"></span><span id="n29" ></span><span id="n30"></span><span id="td3"></span></div>'),$("#answer1").css({position:"absolute",top:"0px",left:"0px",width:"440px",height:"30px"}),$("#answer2").css({position:"absolute",top:"30px",left:"0px",width:"440px",height:"30px"}),$("#answer3").css({position:"absolute",top:"60px",left:"0px",width:"440px",height:"30px"}),Interaction.appendStatus({bottom:"20px",right:"170px",width:"400px",height:"30px",textAlign:"center"}),Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.appendInput({top:"13px",left:"226px",width:"45px",height:"40px",fontSize:"24px"}),$(Interaction.inputs).attr("maxlength","3"),$(Interaction.questionDiv).append(Interaction.input),Interaction.setRandomGenerator(2),Interaction.ansCirc=[],Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.randomNumber=Util.rand01(),Interaction.answerTitles=[],Interaction.question=[],$("#ans").html(""),$("#f1").html(""),$("#f2").html(""),$("#f3").html(""),$("#td1").html(""),$("#td2").html(""),$("#td3").html("");for(var t=1;t<31;t++)$("#n"+t).html(""),$("#n"+t).css("color","black").css("font-weight","normal");for(var t=0;t<3;t++)Interaction.ansCirc[t]&&Interaction.ansCirc[t].remove();Interaction.input.style.color="black",getQuestion()},preCheck:function(){},isAnswerCorrect:function(e){return e==Interaction.answer},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),Interaction.input.style.color="red",getAnswerTitles();for(var e=1;e<=Interaction.question.length;e++)$("#f"+e).html(Interaction.answerTitles[e-1]),$("#td"+e).html(" ...");Interaction.ansCirc=[];for(var e=0;e<Interaction.question.length;e++)if(Interaction.answer>Interaction.question[e]*10){for(var t=1;t<6;t++){var n=10*e+t,r=Interaction.question[e]*t,i=""+r+", ";$("#n"+n).html(i)}var n=10*e+6,r=Interaction.question[e]*6,i="....., ";$("#n"+n).html(i);var n=10*e+7,r=Interaction.answer-2*Interaction.question[e],i=""+r+", ";$("#n"+n).html(i);var n=10*e+8,r=Interaction.answer-Interaction.question[e],i=""+r+", ";$("#n"+n).html(i);var n=10*e+9,r=Interaction.answer,i=""+r+", ";$("#n"+n).html(i),$("#n"+n).css("color","white").css("font-weight","bold");var s=$("#n"+n).position().left;s+=102;var o=$("#n"+n).position().top;console.log(o),o+=110,o+=e*30;if(r>=100){var u=18;s+=2}else if(r>=10)var u=14;else{var u=10;s-=4}Interaction.ansCirc[e]=new Path.Circle(new Point(s,o),u),Interaction.ansCirc[e].strokeColor="green",Interaction.ansCirc[e].fillColor="green";var n=10*e+10,r=Interaction.answer+Interaction.question[e],i=""+r+",";$("#n"+n).html(i)}else for(var t=1;t<=10;t++){var n=10*e+t,r=Interaction.question[e]*t;if(t==10)var i=""+r+",";else var i=""+r+", ";$("#n"+n).html(i);if(r==Interaction.answer){$("#n"+n).css("color","white").css("font-weight","bold");var s=$("#n"+n).position().left;s+=100;var o=$("#n"+n).position().top;o+=110,o+=e*30;if(r>=100){var u=18;s+=4}else if(r>=10)var u=14;else{var u=10;s-=4}Interaction.ansCirc[e]=new Path.Circle(new Point(s,o),u),Interaction.ansCirc[e].strokeColor="green",Interaction.ansCirc[e].fillColor="green"}}var a="";Interaction.question.length==2?a+="EKOK("+Interaction.question[0]+", "+Interaction.question[1]+") = "+Interaction.answer:a+="EKOK("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+") = "+Interaction.answer,$("#ans").html(a)}};
function __Styles(){animationEqsColor="green",wholeFactorsColor="#069"}var checkDatas=function(e){var t=0,n=[];Interaction.missingFactors=[],Interaction.inputsColors=[];for(var r=0;r<Interaction.factorNum;r++)n[r]=Interaction.factorsOfQuestion[r];for(var r=0;r<Interaction.factorNum;r++)for(var i=0;i<Interaction.factorNum;i++)e[i]==n[r]&&(e[i]="axxwt",n[r]="axxwt",Interaction.inputsColors.push(i));for(var r=0;r<Interaction.factorNum;r++)n[r]!="axxwt"&&Interaction.missingFactors.push(n[r]);for(var r=0;r<Interaction.factorNum;r++)e[r]=="axxwt"&&(t+=1);return t==Interaction.factorNum?!0:!1},Animation={images:[],init:function(e){Animation.container=e;var t=0;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).css({position:"absolute",top:"40px",left:"130px",width:"600px",height:"150px",fontSize:"20px"}),$(Animation.animDiv).html('<div id="factorT">çarpanları</div><div id="firstDiv">12 = <span id="eq1">1 x 12</span></div><div id="secondDiv">12 = <span id="eq2">2 x 6</span></div><div id="thirdDiv">12 = <span id="eq3">3 x 4</span></div><div id="fourthDiv">1, 12</div><div id="fifthDiv">2, 6</div><div id="sixthDiv">3, 4</div><div id="seventhDiv"><b>12</b> </br>sayısının çarpanları</div><div id="eighthDiv">1, 2, 3, 4, 6, 12</div>'),$("#factorT").css({position:"absolute",top:"0px",left:"216px",opacity:0,fontWeight:"bold"}),$("#factorT").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#firstDiv").css({position:"absolute",top:"35px",left:"20px",opacity:0}),$("#firstDiv").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq1").css("opacity",0).delay(t+1500).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondDiv").css({position:"absolute",top:"65px",left:"20px",opacity:0}),$("#secondDiv").delay(t+6e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq2").css("opacity",0).delay(t+7500).animate({opacity:1},1e3,"easeInOutQuad"),$("#thirdDiv").css({position:"absolute",top:"95px",left:"20px",opacity:0}),$("#thirdDiv").delay(t+10500).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq3").css("opacity",0).delay(t+12e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#fourthDiv").css({position:"absolute",top:"35px",left:"236px",opacity:0,color:animationEqsColor}),$("#fourthDiv").delay(t+4500).animate({opacity:1},1e3,"easeInOutQuad"),$("#fifthDiv").css({position:"absolute",top:"65px",left:"238px",opacity:0,color:animationEqsColor}),$("#fifthDiv").delay(t+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#sixthDiv").css({position:"absolute",top:"95px",left:"238px",opacity:0,color:animationEqsColor}),$("#sixthDiv").delay(t+13500).animate({opacity:1},1e3,"easeInOutQuad"),$("#seventhDiv").css({position:"absolute",top:"30px",left:"356px",textAlign:"center",width:"180px",opacity:0,color:wholeFactorsColor}),$("#seventhDiv").delay(t+15e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eighthDiv").css({position:"absolute",top:"80px",left:"376px",opacity:0,color:wholeFactorsColor}),$("#eighthDiv").delay(t+16500).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen sayıların çarpanlarını bulunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.questionArray=[];for(var t=0;t<100;t++)Interaction.questionArray[t]=t+1;Interaction.appendStatus({bottom:"20px",right:"170px",width:"400px",height:"30px",textAlign:"center"}),Interaction.appendButton({bottom:"20px",right:"40px"});for(var t=0;t<3;t++)for(var n=0;n<4;n++){var r=40+t*60,i=280+n*65;r=""+r+"px",i=""+i+"px",Interaction.appendInput({top:r,left:i,width:"45px",height:"40px",fontSize:"24px"},!0,!0)}Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"40px",left:"30px",width:"200px",height:"100px"}),$(Interaction.questionDiv).html('<div id="questionNum"></div><div id="text1">sayısının çarpanları</div><div id="prime">ASAL SAYI</div>'),$("#questionNum").css({position:"absolute",top:"10px",left:0,right:0,fontSize:"40px",textAlign:"center",fontWeight:"bold"}),$("#text1").css({position:"absolute",top:"60px",left:0,right:0,fontSize:"20px",textAlign:"center"}),$("#prime").css({position:"absolute",top:"96px",left:0,right:0,textAlign:"center",fontWeight:"bold",color:"#069",fontSize:"18px",opacity:0}),Interaction.answerDiv=document.createElement("div"),Interaction.answerDiv.id="answerDiv",$(Interaction.container).append(Interaction.answerDiv),$(Interaction.answerDiv).css({position:"absolute",top:"145px",left:"20px",width:"230px",height:"80px",color:"#069",fontSize:"18px",textAlign:"center"}),$(Interaction.answerDiv).html('<div id="texttt"></div><div id="missingF"></div>'),$("#texttt").css({position:"absolute",top:"10px",left:0,right:0}),$("#missingF").css({position:"absolute",top:"35px",left:0,right:0,lineHeight:"22px"}),Interaction.setRandomGenerator(100),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial2=0,$("#prime").css("opacity",0),$("#texttt").html(""),$("#missingF").html(""),Interaction.question=Interaction.questionArray[e],Interaction.factorsOfQuestion=[],Interaction.question==1?Interaction.factorsOfQuestion[0]=1:Interaction.factorsOfQuestion=Util.getFactors(Interaction.question),Interaction.factorNum=Interaction.factorsOfQuestion.length;for(var t=0;t<Interaction.inputs.length;t++)Interaction.inputs[t].readOnly=!1,$(Interaction.inputs[t]).css("opacity",1),$(Interaction.inputs[t]).addClass("input"),Interaction.inputs[t].style.color="black";for(var t=0;t<12-Interaction.factorNum;t++)Interaction.inputs[Interaction.inputs.length-1-t].readOnly=!0,$(Interaction.inputs[Interaction.inputs.length-1-t]).css("opacity",.3),$(Interaction.inputs[Interaction.inputs.length-1-t]).removeClass("input");$("#questionNum").html(Interaction.question)},preCheck:function(){if(Interaction.trial==1)return!0;for(var e=0;e<Interaction.factorsOfQuestion.length;e++)if(Interaction.inputs[e].value==""){Interaction.setStatus("Lütfen tüm kutucukları doldurunuz.",!1),Interaction.trial2+=1,Interaction.trial+=1;break}return Interaction.trial2==1?!1:!0},isAnswerCorrect:function(e){Interaction.correctAnswerNum=0;var t=[],n=Interaction.factorNum;for(var r=0;r<n;r++)t[r]=e[r];return checkDatas(t)?!0:!1},onCorrectAnswer:function(){for(var e=0;e<Interaction.factorNum;e++)Interaction.inputs[e].style.color="red";for(var e=0;e<Interaction.inputsColors.length;e++)Interaction.inputs[Interaction.inputsColors[e]].style.color="green";Interaction.factorNum==2&&$("#prime").css("opacity",1)},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1);var e="";for(var t=0;t<Interaction.factorsOfQuestion.length-1;t++)e=e+Interaction.factorsOfQuestion[t]+", ";e=e+"ve "+Interaction.factorsOfQuestion[Interaction.factorsOfQuestion.length-1],$("#texttt").html("Bu sayının tüm çarpanları:"),$("#missingF").html(e);for(var t=0;t<Interaction.factorNum;t++)Interaction.inputs[t].style.color="red";for(var t=0;t<Interaction.inputsColors.length;t++)Interaction.inputs[Interaction.inputsColors[t]].style.color="green";Interaction.factorNum==2&&$("#prime").css("opacity",1)}};
function __Styles(){operatorFillColor="#c00000",operatorTextColor="white",operandBoxesFillColor="#41818a",operandTextColor="white",generalStrokeColor="#101010",disabledInputBackgroundColor="#006e7d",disabledInputOpacity=.3,selectedInputStrokeColor="#006e7d",selectedInputStrokeWidth=2}var getNewQuestion=function(){Interaction.operand1=Util.randomInteger(1,11),Interaction.operand2=Util.randomInteger(1,11,[Interaction.operand1]),Interaction.operator=="+"?(Interaction.answer=Interaction.operand1+Interaction.operand2,Interaction.operatorText.content="+"):(Interaction.answer=Interaction.operand1*Interaction.operand2,Interaction.operatorText.content="x");for(var e=0;e<100;e++)$(Interaction.inputs[e]).css("opacity",.3).css("background-color","white").css("box-sizing","border-box").css("border","none").css("border-right","1px solid #999").css("border-bottom","1px solid #999").css("border-color","#999").css("color","black"),Interaction.inputs[e].isEmpty=!0,Interaction.inputs[e].readOnly=!0;var t=Interaction.operand2-1,n=Interaction.operand1-1;for(var e=0;e<t;e++)$(Interaction.inputs[Interaction.operand1-1+10*e]).css("background-color",operandBoxesFillColor);for(var e=0;e<n;e++)$(Interaction.inputs[(Interaction.operand2-1)*10+e]).css("background-color",operandBoxesFillColor);Interaction.indexOfAnswer=(Interaction.operand2-1)*10+(Interaction.operand1-1),$(Interaction.inputs[Interaction.indexOfAnswer]).css({border:"1px solid",boxSizing:"border-box",borderColor:selectedInputStrokeColor,opacity:1}),Interaction.inputs[Interaction.indexOfAnswer].readOnly=!1,Interaction.inputs[Interaction.indexOfAnswer].isEmpty=!1,setTimeout("Interaction.inputs[Interaction.indexOfAnswer].focus()",100)},getSecondQuestion=function(){Interaction.pause2=1;var e=Interaction.operand2-1,t=Interaction.operand1-1;for(var n=0;n<e;n++)$(Interaction.inputs[Interaction.operand1-1+10*n]).css("background-color","white");for(var n=0;n<t;n++)$(Interaction.inputs[(Interaction.operand2-1)*10+n]).css("background-color","white");Interaction.inputs[Interaction.indexOfAnswer].readOnly=!0,Interaction.indexOfAnswer=(Interaction.operand1-1)*10+(Interaction.operand2-1);for(var n=0;n<e;n++)$(Interaction.inputs[(Interaction.operand1-1)*10+n]).css("background-color",operandBoxesFillColor);for(var n=0;n<t;n++)$(Interaction.inputs[Interaction.operand2-1+10*n]).css("background-color",operandBoxesFillColor);$(Interaction.inputs[Interaction.indexOfAnswer]).css({border:"1px solid",boxSizing:"border-box",borderColor:selectedInputStrokeColor,opacity:1}),Interaction.inputs[Interaction.indexOfAnswer].readOnly=!1,Interaction.inputs[Interaction.indexOfAnswer].isEmpty=!1,setTimeout("Interaction.inputs[Interaction.indexOfAnswer].focus()",100)},Animation={images:[],init:function(e){Animation.container=e;var t=0;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>'),$(Animation.animDiv).css({position:"absolute",top:"30px",left:"90px",width:"600px",height:"140px"}),$("#firstDiv").css({position:"absolute",top:"0px",left:"0px",width:"600px",height:"40px",fontSize:"26px",textAlign:"center"}),$("#secondDiv").css({position:"absolute",top:"50px",left:"0px",width:"600px",height:"40px",fontSize:"26px",textAlign:"center"}),$("#thirdDiv").css({position:"absolute",top:"100px",left:"0px",width:"600px",height:"40px",fontSize:"26px",textAlign:"center"}),$("#firstDiv").html('<div id="ffirst">6 <span id="plus1" style="color:red;">+</span> 2 <span id="a1">= 8</span></div><div id="fsecond">6 <span id="minus1" style="color:red;">-</span> 2 <span id="b1">= 4</span></div><div id="fthird">6 <dfn id="dot1" style="color:red;"> • </dfn> 2 <span id="c1">= 12</span></div><div id="ffourth">6 <span id="divide1" style="color:red;">:</span> 2 <span id="d1">= 3</span></div>'),$("#ffirst").css({position:"absolute",top:"0px",left:"0px",width:"120px",height:"40px",opacity:0}),$("#ffirst").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#plus1").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#a1").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#fsecond").css({position:"absolute",top:"0px",left:"160px",width:"120px",height:"40px",opacity:0}),$("#fsecond").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#minus1").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#b1").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#fthird").css({position:"absolute",top:"0px",left:"320px",width:"120px",height:"40px",opacity:0}),$("#fthird").delay(t+6e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#dot1").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#c1").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#ffourth").css({position:"absolute",top:"0px",left:"480px",width:"120px",height:"40px",opacity:0}),$("#ffourth").delay(t+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#divide1").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#d1").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondDiv").html('<div id="sfirst">2 <span id="plus2" style="color:red;">+</span> 6 <span id="a2">= 8</span></div><div id="ssecond">2 <span id="minus2" style="color:red;">-</span> 6 <span id="b2">= ?</span></div><div id="sthird">2 <dfn id="dot2" style="color:red;"> • </dfn> 6 <span id="c2">= 12</span></div><div id="sfourth">2 <span id="divide2" style="color:red;">:</span> 6 <span id="d2">= ?</span></div>'),$("#sfirst").css({position:"absolute",top:"0px",left:"0px",width:"120px",height:"40px",opacity:0}),$("#sfirst").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#plus2").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#a2").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#ssecond").css({position:"absolute",top:"0px",left:"160px",width:"120px",height:"40px",opacity:0}),$("#ssecond").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#minus2").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#b2").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#sthird").css({position:"absolute",top:"0px",left:"320px",width:"120px",height:"40px",opacity:0}),$("#sthird").delay(t+6e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#dot2").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#c2").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#sfourth").css({position:"absolute",top:"0px",left:"480px",width:"120px",height:"40px",opacity:0}),$("#sfourth").delay(t+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#divide2").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#d2").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#thirdDiv").html('<div id="tfirst">6 + 2 </div><div id="eq1">=</div><div id="tsecond">2 + 6 </div><div id="tthird">6 <dfn id="dot3"> • </dfn> 2</div><div id="eq2">=</div><div id="tfourth">2 <dfn id="dot4"> • </dfn> 6 </div>'),$("#tfirst").css({position:"absolute",top:"-100px",left:"0px",width:"80px",height:"40px",opacity:0}),$("#tfirst").delay(t+12e3).animate({opacity:2,top:"0px",left:"-30px"},2e3,"easeInOutQuad"),$("#tsecond").css({position:"absolute",top:"-50px",left:"0px",width:"80px",height:"40px",opacity:0}),$("#tsecond").delay(t+12e3).animate({opacity:2,top:"0px",left:"70px"},2e3,"easeInOutQuad",function(){$("#eq1").css("opacity",1)}),$("#eq1").css({position:"absolute",top:"0px",left:"50px",width:"20px",height:"40px",color:"red",opacity:0}),$("#tthird").css({position:"absolute",top:"-100px",left:"314px",width:"80px",height:"40px",opacity:0}),$("#tthird").delay(t+14e3).animate({opacity:2,top:"0px",left:"284px"},2e3,"easeInOutQuad"),$("#tfourth").css({position:"absolute",top:"-50px",left:"314px",width:"80px",height:"40px",opacity:0}),$("#tfourth").delay(t+14e3).animate({opacity:2,top:"0px",left:"384px"},2e3,"easeInOutQuad",function(){$("#eq2").css("opacity",1),Main.animationFinished(1e3)}),$("#eq2").css({position:"absolute",top:"0px",left:"364px",width:"20px",height:"40px",color:"red",opacity:0})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen tabloda sol üst köşedeki işarete tıklayarak işlemi değiştirebilirsiniz. Köşedeki işleme göre tabloda belirtilen kutuya uygun sayıyı yazınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.operatorBox=new Path.Rectangle(new Point(10.5,10.5),new Size(25,25)),Interaction.operatorBox.fillColor=operatorFillColor,Interaction.operatorBox.strokeColor=generalStrokeColor,Interaction.operatorBox.class="clickable",Interaction.operatorText=new PointText(new Point(Interaction.operatorBox.position.x,Interaction.operatorBox.position.y+6)),Interaction.operatorText.justification="center",Interaction.operatorText.fillColor=operatorTextColor,Interaction.operatorText.content="+",Interaction.operatorText.strokeWidth="1px",Interaction.operatorText.strokeColor=operatorTextColor,Interaction.operandBox=[];for(var t=0;t<10;t++)Interaction.operandBox[t]=new Path.Rectangle(new Point(35.5+25*t,10.5),new Size(25,25)),Interaction.operandBox[t].fillColor=operandBoxesFillColor,Interaction.operandBox[t].strokeColor=generalStrokeColor;Interaction.operandText=[];for(var t=0;t<10;t++)Interaction.operandText[t]=new PointText(new Point(Interaction.operandBox[t].position.x,Interaction.operandBox[t].position.y+6)),Interaction.operandText[t].justification="center",Interaction.operandText[t].fillColor=operandTextColor,Interaction.operandText[t].content=t+1,Interaction.operandText[t].strokeWidth="1px",Interaction.operandText[t].strokeColor=operandTextColor;Interaction.operandBox2=[];for(var t=0;t<10;t++)Interaction.operandBox2[t]=new Path.Rectangle(new Point(10.5,35.5+25*t),new Size(25,25)),Interaction.operandBox2[t].fillColor=operandBoxesFillColor,Interaction.operandBox2[t].strokeColor=generalStrokeColor;Interaction.operandText2=[];for(var t=0;t<10;t++)Interaction.operandText2[t]=new PointText(new Point(Interaction.operandBox2[t].position.x,Interaction.operandBox2[t].position.y+6)),Interaction.operandText2[t].justification="center",Interaction.operandText2[t].fillColor=operandTextColor,Interaction.operandText2[t].content=t+1,Interaction.operandText2[t].strokeWidth="1px",Interaction.operandText2[t].strokeColor=operandTextColor;var n=new Tool;n.onMouseUp=function(e){e.item&&e.item.class=="clickable"&&(Interaction.pause2==0?Interaction.operatorText.content=="+"?(Interaction.operatorText.content="x",Interaction.operator="x"):(Interaction.operatorText.content="+",Interaction.operator="+"):Interaction.setStatus("Soruyu tamamladıktan sonra işlemi değiştirebilirsiniz. Lütfen önce soruyu tamamlayınız.",!1))},n.activate();for(var t=0;t<10;t++){var r=35.5+25*t,i=""+r+"px";for(var s=0;s<10;s++){var o=35.5+25*s,u=""+o+"px",a=Interaction.appendInput({position:"absolute",top:i,left:u,width:"25px",height:"25px",padding:0,margin:0,boxSizing:"border-box",border:"none",borderRight:"1px solid #999",borderBottom:"1px solid #999"},!0,!0);$(a).focus(function(){$(this).css({zIndex:"100"})}).blur(function(){$(this).css({zIndex:"1"})})}}Interaction.appendStatus({bottom:"160px",right:"60px",width:"160px",height:"60px",textAlign:"center"}),Interaction.appendButton({bottom:"20px",right:"40px"}),Util.rand01()==0?Interaction.operator="+":Interaction.operator="x",Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.quest=0,Interaction.pause2=0,Interaction.trial2=0,getNewQuestion()},preCheck:function(){if(Interaction.inputs[Interaction.indexOfAnswer].value=="")return Interaction.setStatus("Lütfen kutucuğu doldurunuz.",!1),!1;Interaction.operator=="+"?Interaction.answer=Interaction.operand1+Interaction.operand2:Interaction.answer=Interaction.operand1*Interaction.operand2;if(Interaction.quest==0)return Interaction.answer==Interaction.inputs[Interaction.indexOfAnswer].value?($(Interaction.inputs[Interaction.indexOfAnswer]).css("color","green"),Interaction.setStatus(""),Interaction.quest+=1,getSecondQuestion(),!1):(Interaction.trial2==0?(Interaction.setStatus("Yanlış cevap, lütfen tekrar deneyiniz.",!1),Interaction.inputs[Interaction.indexOfAnswer].value="",Interaction.trial2+=1):(Interaction.setStatus("Yanlış cevap, doğrusu yanda gösterilmiştir.",!1),Interaction.inputs[Interaction.indexOfAnswer].value=Interaction.answer,$(Interaction.inputs[Interaction.indexOfAnswer]).css("color","green"),Interaction.quest+=1,getSecondQuestion()),!1);return!0},isAnswerCorrect:function(e){return Interaction.answer==e[Interaction.indexOfAnswer]},onCorrectAnswer:function(){$(Interaction.inputs[Interaction.indexOfAnswer]).css("color","green"),Interaction.pause2=0},onWrongAnswer:function(){Interaction.inputs[Interaction.indexOfAnswer].value=""},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yanda gösterilmiştir.",!1),Interaction.inputs[Interaction.indexOfAnswer].value=Interaction.answer,$(Interaction.inputs[Interaction.indexOfAnswer]).css("color","green"),Interaction.pause2=0}};
function __Styles(){wholeTableFillColor="white",wholeTableStrokeColor="#a8dbe3",wholeTablePrimeFillColor="#9ee9a5",wholeTablePrimeStrokeColor="#4f9c4f",counterColor="#a8dbe3",counterQuestionColor="#41818a",animationRectFillColor="e99e9e",animationRectStrokeColor="9c4f4f",animationRectFillColor2="f2c885",animationRectStrokeColor2="9b763d",textColor="#006e7d",textColor2="#FF0000",textColor3="#000000",textColor4="#006e7d"}var Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=t+2e3,r=n+4e3,i=r+4e3,s=i+4e3,o=s+4e3,u=o+4e3,a=u+4e3,f=1e3,l=1e3,c=document.createElement("div");c.id="animationDiv",$(Animation.container).append(c),$(c).css({position:"absolute",top:"30px",left:"10px",width:"760px",height:"160px"}),$(c).append('<div id="numm"><span id="fD">1</span><span id="sD">3</span><span id="tD">2</span></div>'),$("#numm").css({position:"absolute",top:"-5px",left:0,right:0,fontSize:"40px",fontWeight:"bold",textAlign:"center",opacity:0}),$("#numm").css("text-shadow","2px 2px 3px rgba(0,0,0,.20)"),$("#numm").delay(t).animate({opacity:1},f,"easeInOutQuad"),$("#tD").delay(n).animate({color:textColor4},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(1e3).animate({color:textColor4},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(1e3).animate({color:textColor4},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(5e3).animate({color:textColor2},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(1e3).animate({color:textColor2},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(1e3).animate({color:textColor2},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad"),$("#fD").delay(r).animate({color:textColor4},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(13e3).animate({color:textColor2},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad"),$("#sD").delay(r).animate({color:textColor4},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(1e3).animate({color:textColor4},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad").delay(9e3).animate({color:textColor2},l,"easeInOutQuad").delay(1e3).animate({color:textColor3},l,"easeInOutQuad"),$(c).append('<div id="firstDiv">birler basamağı (2) çift sayı </br> <span style="font-weight:bold;color:'+textColor+";\">2'ye kalansız bölünür</span></div>"),$("#firstDiv").css({position:"absolute",top:"45px",left:"10px",width:"240px",height:"30px",textAlign:"center",lineHeight:"14px",fontSize:"12px",opacity:0}),$("#firstDiv").delay(n).animate({opacity:1},f,"easeInOutQuad"),$(c).append('<div id="secondDiv">rakamlar toplamı (1+3+2=6) 3\'ün katı </br> <span style="font-weight:bold;color:'+textColor+";\">3'e kalansız bölünür</span></div>"),$("#secondDiv").css({position:"absolute",top:"45px",left:"260px",width:"240px",height:"30px",textAlign:"center",lineHeight:"14px",fontSize:"12px",opacity:0}),$("#secondDiv").delay(r).animate({opacity:1},f,"easeInOutQuad"),$(c).append('<div id="thirdDiv">sağdan iki basamak (32) 4\'ün katı </br><span style="font-weight:bold;color:'+textColor+";\"> 4'e kalansız bölünür</span></div>"),$("#thirdDiv").css({position:"absolute",top:"45px",left:"510px",width:"240px",height:"30px",textAlign:"center",lineHeight:"14px",fontSize:"12px",opacity:0}),$("#thirdDiv").delay(i).animate({opacity:1},f,"easeInOutQuad"),$(c).append('<div id="fourthDiv">2 ve 3\'e kalansız bölünür </br><span style="font-weight:bold;color:'+textColor+";\"> 6'ya kalansız bölünür</span></div>"),$("#fourthDiv").css({position:"absolute",top:"85px",left:"260px",width:"240px",height:"30px",textAlign:"center",lineHeight:"14px",fontSize:"12px",opacity:0}),$("#fourthDiv").delay(s).animate({opacity:1},f,"easeInOutQuad"),$(c).append('<div id="fifthDiv">birler basamağı (2) 5 ya da 0 değil </br><span style="font-weight:bold;color:'+textColor2+";\"> 5'e kalansız bölünmez</span></div>"),$("#fifthDiv").css({position:"absolute",top:"125px",left:"10px",width:"240px",height:"30px",textAlign:"center",lineHeight:"14px",fontSize:"12px",opacity:0}),$("#fifthDiv").delay(o).animate({opacity:1},f,"easeInOutQuad"),$(c).append('<div id="sixthDiv">rakamlar toplamı (1+3+2=6) 9\'un katı değil </br><span style="font-weight:bold;color:'+textColor2+";\"> 9'a kalansız bölünmez</span></div>"),$("#sixthDiv").css({position:"absolute",top:"125px",left:"260px",width:"240px",height:"30px",textAlign:"center",lineHeight:"14px",fontSize:"12px",opacity:0}),$("#sixthDiv").delay(u).animate({opacity:1},f,"easeInOutQuad"),$(c).append('<div id="seventhDiv">birler basamağı (2) 0 değil </br><span style="font-weight:bold;color:'+textColor2+";\"> 10'a kalansız bölünmez</span></div>"),$("#seventhDiv").css({position:"absolute",top:"125px",left:"510px",width:"240px",height:"30px",textAlign:"center",lineHeight:"14px",fontSize:"12px",opacity:0}),$("#seventhDiv").delay(a).animate({opacity:1},f,"easeInOutQuad",function(){Main.animationFinished(2e3)})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({left:"410px",top:"120px",width:"140px",height:"50px",textAlign:"center"}),Interaction.wholeTable=[],Interaction.textTable=[];for(var t=0;t<10;t++)for(var n=0;n<10;n++){var r=t*10+n;Interaction.wholeTable[r]=new Path.Rectangle(new Point(20.5+n*35,20.5+t*26),new Size(35,26)),Interaction.wholeTable[r].strokeColor=wholeTableStrokeColor,Interaction.wholeTable[r].fillColor=wholeTableFillColor,Interaction.wholeTable[r].myId=r+1,Interaction.wholeTable[r].class="number",Interaction.textTable[r]=new PointText(new Point(Interaction.wholeTable[t*10+n].position.x,Interaction.wholeTable[t*10+n].position.y+6)),Interaction.textTable[r].justification="center",Interaction.textTable[r].fillColor="black",Interaction.textTable[r].content=r+1,Interaction.textTable[r].myId=r+1}var i=new Tool;i.onMouseDown=function(e){if(Interaction.pause2==1)return;Interaction.setStatus(""),e.item&&e.item.class=="number"&&(Interaction.answerTable.indexOf(e.item.myId)!=-1?(Interaction.wholeTable[e.item.myId-1].fillColor=wholeTablePrimeFillColor,Interaction.wholeTable[e.item.myId-1].strokeColor=wholeTablePrimeStrokeColor,Interaction.userAnswerTable.indexOf(e.item.myId)==-1&&(Interaction.userAnswerTable.push(e.item.myId),Interaction.remainingNumber-=1,$("#count").html(Interaction.remainingNumber),Interaction.userAnswerTable.length==Interaction.answerTable.length&&($("#counterDiv")&&$("#counterDiv").remove(),$(Interaction.button).css("opacity",1),Interaction.setStatus("Tebrikler, "+Interaction.questionString+" kalansız bölünen bütün sayıları buldunuz.",!0),Interaction.button.onclick=Interaction.prepareNextQuestion,Interaction.pause2=1))):Interaction.setStatus("Seçtiğiniz sayı "+Interaction.questionString+" kalansız bölünmüyor.",!1))},i.activate(),Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.questionArray=[],Interaction.questionArray[0]=2,Interaction.questionArray[1]=3,Interaction.questionArray[2]=4,Interaction.questionArray[3]=5,Interaction.questionArray[4]=6,Interaction.questionArray[5]=9,Interaction.questionArray[6]=10,Interaction.setRandomGenerator(7),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.randomNumber=e,Interaction.pause2=0,Interaction.button.className="next_button",$(Interaction.button).css("opacity",0),Interaction.setStatus(""),Interaction.question=Interaction.questionArray[e],Interaction.remainingNumber=Math.floor(100/Interaction.question),Interaction.userAnswerTable=[],Interaction.answerTable=[];for(var t=1;t<101;t++)t%Interaction.question==0&&Interaction.answerTable.push(t);Interaction.questionString=Interaction.question,Interaction.question==2?Interaction.questionString=""+Interaction.questionString+"'ye":Interaction.question==3||Interaction.question==4||Interaction.question==5?Interaction.questionString=""+Interaction.questionString+"'e":Interaction.question==6?Interaction.questionString=""+Interaction.questionString+"'ya":Interaction.questionString=""+Interaction.questionString+"'a",Main.setObjective('Yanda verilen yüzlük tabloda <span id="qt">'+Interaction.questionString+"</span>"+" kalansız bölünen sayıları belirleyiniz."),$("#qt").css("font-weight","bold").css("color","red");for(var t=0;t<100;t++)Interaction.wholeTable[t].strokeColor=wholeTableStrokeColor,Interaction.wholeTable[t].fillColor=wholeTableFillColor;$(Interaction.container).append('<div id="counterDiv"><div id="ct"></div><div id="count"></div><div id="text">tane sayı kaldı</div></div>'),$("#counterDiv").css({position:"absolute",top:"20px",left:"400px",width:"160px",height:"80px"}),$("#ct").css({position:"absolute",top:"10px",left:0,right:0,textAlign:"center",fontSize:"16px",color:counterQuestionColor}),$("#ct").html(""+Interaction.questionString+" kalansız bölünen"),$("#count").css({position:"absolute",top:"30px",left:0,right:0,textAlign:"center",fontSize:"30px",fontWeight:"bold",color:counterColor}),$("#count").html(Interaction.remainingNumber),$("#text").css({position:"absolute",top:"60px",left:0,right:0,textAlign:"center",fontSize:"16px",color:counterColor})},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
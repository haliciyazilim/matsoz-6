var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({left:"410px",top:"120px",width:"140px",height:"50px",textAlign:"center"}),Interaction.wholeTable=[],Interaction.textTable=[];for(var t=0;t<10;t++)for(var n=0;n<10;n++){var r=t*10+n;Interaction.wholeTable[r]=new Path.Rectangle(new Point(20.5+n*35,20.5+t*26),new Size(35,26)),Interaction.wholeTable[r].strokeColor=wholeTableStrokeColor,Interaction.wholeTable[r].fillColor=wholeTableFillColor,Interaction.wholeTable[r].myId=r+1,Interaction.wholeTable[r].class="number",Interaction.textTable[r]=new PointText(new Point(Interaction.wholeTable[t*10+n].position.x,Interaction.wholeTable[t*10+n].position.y+6)),Interaction.textTable[r].justification="center",Interaction.textTable[r].fillColor="black",Interaction.textTable[r].content=r+1,Interaction.textTable[r].myId=r+1}var i=new Tool;i.onMouseDown=function(e){if(Interaction.pause2==1)return;Interaction.setStatus(""),e.item&&e.item.class=="number"&&(Interaction.answerTable.indexOf(e.item.myId)!=-1?(Interaction.wholeTable[e.item.myId-1].fillColor=wholeTablePrimeFillColor,Interaction.wholeTable[e.item.myId-1].strokeColor=wholeTablePrimeStrokeColor,Interaction.userAnswerTable.indexOf(e.item.myId)==-1&&(Interaction.userAnswerTable.push(e.item.myId),Interaction.remainingNumber-=1,$("#count").html(Interaction.remainingNumber),Interaction.userAnswerTable.length==Interaction.answerTable.length&&($("#counterDiv")&&$("#counterDiv").remove(),$(Interaction.button).css("opacity",1),Interaction.setStatus("Tebrikler, "+Interaction.questionString+" kalansız bölünen bütün sayıları buldunuz.",!0),Interaction.button.onclick=Interaction.prepareNextQuestion,Interaction.pause2=1))):Interaction.setStatus("Seçtiğiniz sayı "+Interaction.questionString+" kalansız bölünmüyor.",!1))},i.onMouseUp=function(e){},Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.questionArray=[],Interaction.questionArray[0]=2,Interaction.questionArray[1]=3,Interaction.questionArray[2]=4,Interaction.questionArray[3]=5,Interaction.questionArray[4]=6,Interaction.questionArray[5]=9,Interaction.questionArray[6]=10,Interaction.setRandomGenerator(7),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.randomNumber=e,Interaction.pause2=0,Interaction.button.className="next_button",$(Interaction.button).css("opacity",0),Interaction.setStatus(""),Interaction.question=Interaction.questionArray[e],Interaction.remainingNumber=Math.floor(100/Interaction.question),Interaction.userAnswerTable=[],Interaction.answerTable=[];for(var t=1;t<101;t++)t%Interaction.question==0&&Interaction.answerTable.push(t);Interaction.questionString=Interaction.question,Interaction.question==2?Interaction.questionString=""+Interaction.questionString+"'ye":Interaction.question==3||Interaction.question==4||Interaction.question==5?Interaction.questionString=""+Interaction.questionString+"'e":Interaction.question==6?Interaction.questionString=""+Interaction.questionString+"'ya":Interaction.questionString=""+Interaction.questionString+"'a",Main.setObjective('Yanda verilen yüzlük tabloda <span id="qt">'+Interaction.questionString+"</span>"+" kalansız bölünen sayıları belirleyiniz."),$("#qt").css("font-weight","bold").css("color","red");for(var t=0;t<100;t++)Interaction.wholeTable[t].strokeColor=wholeTableStrokeColor,Interaction.wholeTable[t].fillColor=wholeTableFillColor;$(Interaction.container).append('<div id="counterDiv"><div id="ct"></div><div id="count"></div><div id="text">tane sayı kaldı</div></div>'),$("#counterDiv").css({position:"absolute",top:"20px",left:"400px",width:"160px",height:"80px"}),$("#ct").css({position:"absolute",top:"10px",left:0,right:0,textAlign:"center",fontSize:"16px",color:counterQuestionColor}),$("#ct").html(""+Interaction.questionString+" kalansız bölünen"),$("#count").css({position:"absolute",top:"30px",left:0,right:0,textAlign:"center",fontSize:"30px",fontWeight:"bold",color:counterColor}),$("#count").html(Interaction.remainingNumber),$("#text").css({position:"absolute",top:"60px",left:0,right:0,textAlign:"center",fontSize:"16px",color:counterColor})},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
var Interaction={getFramework:function(){return"paper"},images:[{id:"shadow",src:"/assets/animations/olasilik/top_golge.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki toplar bir torbanın içindedir. İstenen topun torbadan rastgele çekilme olasılığını bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle}),Interaction.questionText=Util.dom({parent:Interaction.questionDiv,tag:"div",css:questionTextStyle}),Interaction.line=Util.dom({parent:Interaction.questionDiv,tag:"div",css:lineStyle}),Interaction.appendStatus({bottom:"10px",right:"170px",width:"400px",height:"26px",textAlign:"center"}),Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.appendInput({position:"absolute",top:"2px",left:"250px",width:"32px",height:"30px",fontSize:"24px"}),Interaction.appendInput({position:"absolute",top:"42px",left:"250px",width:"32px",height:"30px",fontSize:"24px"}),$(Interaction.questionDiv).append(Interaction.inputs[0]),$(Interaction.questionDiv).append(Interaction.inputs[1]),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.ballsGroup&&Interaction.ballsGroup.remove(),Interaction.ansGroup&&Interaction.ansGroup.remove(),$(Interaction.inputs[0]).css("color","black"),$(Interaction.inputs[1]).css("color","black"),generateBalls(),Interaction.qIndex=Util.randomInteger(0,Interaction.questionArr.length),Interaction.question=""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =",$(Interaction.questionText).html(Interaction.question),Interaction.answer=Interaction.ballArr[Interaction.qIndex]/Interaction.totalBall},preCheck:function(){},isAnswerCorrect:function(e){return e[0]/e[1]==Interaction.answer?!0:!1},onCorrectAnswer:function(){$(Interaction.inputs[0]).css("color","green"),$(Interaction.inputs[1]).css("color","green");var e=Interaction.myColors[Interaction.qIndex],t=new Path.Circle(new Point(120,180),18);t.fillColor=e;var n=new Raster("shadow");n.position=new Point(120,180),Interaction.ansGroup=new Group,Interaction.ansGroup.addChild(t),Interaction.ansGroup.addChild(n),Interaction.ansGroup.animate({style:{position:new Point(Interaction.ansGroup.position.x,Interaction.ansGroup.position.y-90)},duration:1e3,delay:1e3,animationType:"easeInOutQuad",callback:function(){Interaction.ansGroup.firstPosition=Interaction.ansGroup.position}}),Interaction.ansGroup.X=0,Interaction.ansGroup.animate({style:{X:80},duration:1e3,delay:2500,animationType:"easeInOutQuad",update:function(){this.position=this.firstPosition.add(1.5*this.X,.015*this.X*this.X)}})},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1),Interaction.inputs[0].value=Interaction.ballArr[Interaction.qIndex],Interaction.inputs[1].value=Interaction.totalBall,$(Interaction.inputs[0]).css("color","green"),$(Interaction.inputs[1]).css("color","green")}};
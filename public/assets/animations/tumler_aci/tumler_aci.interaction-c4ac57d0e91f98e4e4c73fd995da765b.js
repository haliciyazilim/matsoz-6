var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki ilk açının kollarını hareket ettirerek tümleyeni olan açının ölçüsündeki değişimi görebilirsiniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"50px",right:"40px"}),Interaction.appendStatus({bottom:"60px",right:"150px"}),Interaction.alterLevelButton=Util.dom({tag:"button",parent:Interaction.container,css:{position:"absolute",bottom:"10px",right:"40px"},html:"2. seviyeye geç"}),Interaction.setRandomGenerator(2),Interaction.alterLevelButton.onclick=Interaction.enterLevel2,Interaction.level=1,Interaction.firstAnglePosition=new Point(130,150),Interaction.secondAnglePosition=new Point(370,150),Interaction.textPosition=new Point(270,220),Interaction.prepareNextQuestion()},nextQuestion:function(e){$(Interaction.questionDiv).remove(),Main.interactionProject.activeLayer.removeChildren();switch(Interaction.level){case 1:Interaction.button.className="next_button";var t=new Angle({angle:Util.randomInteger(20,70),phase:0,center:Interaction.firstAnglePosition,textPosition:Interaction.textPosition});Interaction.angle=t;var n=new Angle({angle:120,phase:15,center:Interaction.secondAnglePosition});Util.rand01()==1&&(n.isNeighbour=!0,t.centerPoint=new Point(215,150)),t.setComplement(n),t.draw(!0),t.redraw();break;case 2:Interaction.angle=new Angle({angle:Util.randomInteger(10,80),phase:Util.randomInteger(0,60)-30,center:Interaction.firstAnglePosition}),Interaction.angle.draw(!1);var r=Interaction.addInput({isNumber:!0,maxLength:3,reverseText:!1,css:{},correctAnswer:90-Interaction.angle.angle});Interaction.questionDiv=Util.dom({tag:"div",parent:Interaction.container,html:"Tümleyen açı ölçüsü = ",css:{position:"absolute",top:"70px",right:"50px"}}),$(Interaction.questionDiv).append(r).append("°")}},enterLevel1:function(){Interaction.level=1,Interaction.alterLevelButton.innerHTML="2. seviyeye geç",Interaction.alterLevelButton.onclick=Interaction.enterLevel2,$(Interaction.questionDiv).remove(),Interaction.prepareNextQuestion()},enterLevel2:function(){Interaction.level=2,Interaction.alterLevelButton.innerHTML="1. seviyeye geç",Interaction.alterLevelButton.onclick=Interaction.enterLevel1,Interaction.prepareNextQuestion()},preCheck:function(){if(Interaction.level==1)return Interaction.prepareNextQuestion(),!1},isAnswerCorrect:function(e){},onCorrectAnswer:function(){(Interaction.level=2)&&Interaction.showAnswer()},onWrongAnswer:function(){},onFail:function(){Interaction.level==2&&Interaction.showAnswer()},showAnswer:function(){Interaction.pause(),$(Interaction.questionDiv).fadeOut(1e3,function(){$(this).remove(),Interaction.complementAngle=new Angle({angle:10,phase:10,center:Interaction.secondAnglePosition}),Interaction.angle.setComplement(Interaction.complementAngle),Interaction.angle.redraw(),Interaction.resume(1e3)})}};
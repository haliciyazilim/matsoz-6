var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki çokgenin benzerini yandaki kareli bölgede oluşturup kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"00px",right:"40px"}),Interaction.appendStatus({bottom:"10px",right:"150px"}),Interaction.setRandomGenerator(12),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial++,Main.interactionProject.activeLayer.removeChildren(),Interaction.masterGrid=(new InteractiveGrids({position:new Point(10.5,10.5),size:30,style:{strokeColor:"#000"}})).drawShape(InteractiveGrids.CreateShape(e)),Interaction.slaveGrid=(new InteractiveGrids({position:new Point(300.5,10.5),size:18+e%4*4,style:{strokeColor:"#666"}})).drawShape().createTool()},preCheck:function(){if(Interaction.slaveGrid.path.closed!=1)return Interaction.setStatus("Lütfen bir kapalı şekil çiziniz","alert"),!1},isAnswerCorrect:function(e){return InteractiveGrids.AreShapesSimilar(Interaction.masterGrid.points,Interaction.slaveGrid.points)},onCorrectAnswer:function(){Interaction.pause()},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap.",!1)}};
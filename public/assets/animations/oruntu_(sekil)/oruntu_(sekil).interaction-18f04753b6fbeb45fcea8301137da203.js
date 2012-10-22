var Interaction={getFramework:function(){return"paper"},images:[{id:"question_mark",src:"/assets/animations/oruntu_(sekil)/question_mark.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki şekil örüntüsünde bir sonraki adımda oluşacak şekli, verilen çokgenden gerektiği kadar sürükleyerek oluşturunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.appendStatus({bottom:"30px",right:"150px"}),Interaction.setRandomGenerator(4),Interaction.prepareNextQuestion()},nextQuestion:function(e){Main.interactionProject.activeLayer.removeChildren(),Interaction.staticGrids=new InteractiveGrids({rows:9,cols:23,position:new Point(10.5,15.5),size:18,style:{strokeColor:"#bbb"}}),Interaction.inputGrids=new InteractiveGrids({rows:9,cols:8,position:Interaction.staticGrids.position.add(Interaction.staticGrids.size*Interaction.staticGrids.cols+10,0),size:Interaction.staticGrids.size,style:{strokeColor:"#acf"}});var t=(new LinearPattern(1,0,4)).numbers,n=1,r,i=Util.randomInteger(0,t.length);Interaction.pieceType=Util.randomInteger(0,4);var s=Math.random()*.5,o=Math.random()*.5,u=Math.random()*.5;Interaction.pieceStyle={fillColor:new RgbColor(s,o,u),strokeColor:new RgbColor(s*.5,o*.5,u*.5)};var a=0;for(var f=0;f<t.length;f++){var l;switch(e){case 0:r="TriangleShapePattern",l=new TriangleShapePattern({position:new Point(0,2)});break;case 1:r="XShapePattern",l=new XShapePattern({position:new Point(0,4)}),a=-1.8;break;case 2:r="HexagonShapePattern",l=new HexagonShapePattern({position:new Point(0,2)});break;case 3:r="PlusShapePattern",l=new PlusShapePattern({position:new Point(0,4)}),a=-1.8}l.number=t[f],l.pieceType=Interaction.pieceType,l.pieceStyle=Interaction.pieceStyle;if(f==i){var c=new QuestionMarkPattern({});c.position=l.position.add(n,a),Interaction.staticGrids.drawPattern(c),l.position=l.position.add(n,0),Interaction.correctAnswer=l,n+=4}else l.position=l.position.add(n,0),Interaction.staticGrids.drawPattern(l),n+=l.getWidth()+1}Interaction.inputGrids.createTool(r)},preCheck:function(){var e=Interaction.inputGrids.getInputPattern();e.generateShapePoints();if(e.shapePoints.length==0)return Interaction.setStatus("Lutfen bir sekil ciziniz","alert"),!1},isAnswerCorrect:function(){return Interaction.inputGrids.getInputPattern().isEqual(Interaction.correctAnswer)?!0:!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
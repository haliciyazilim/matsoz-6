var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki kareli zeminde verilen şekli sürükleyerek istenen yönde öteleyiniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.appendStatus({bottom:"20px",right:"150px"}),Interaction.appendQuestion('<div id="command"></div>',{position:"absolute",right:"30px",top:"120px",width:"200px",lineHeight:"26px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),Interaction.setRandomGenerator(11),Interaction.prepareNextQuestion()},nextQuestion:function(e){Main.interactionProject.activeLayer.removeChildren(),Interaction.shape=InteractiveGrids.CreateShape(e),Interaction.grids=(new InteractiveGrids({position:new Point(100.5,23.5),size:30,style:{strokeColor:"#999"}})).drawShape(Interaction.shape).createTool(),Interaction.initialPathPosition=Interaction.grids.getPathPosition();do Interaction.generateAndShowCommand();while(function(){var e=Interaction.grids.getPathPosition().add(Interaction.command);Interaction.grids.setPathPosition(e);var t=!1;if(Interaction.grids.isPathVerticalOverflowed()||Interaction.grids.isPathHorizontalOverflowed())t=!0;return Interaction.grids.setPathPosition(Interaction.initialPathPosition),t}())},preCheck:function(){if(Interaction.initialPathPosition.equals(Interaction.grids.getPathPosition()))return Interaction.setStatus("Lütfen şekli farklı bir noktaya sürükleyiniz","alert"),!1},isAnswerCorrect:function(e){return Interaction.command.equals(Interaction.grids.getPathPosition().subtract(Interaction.initialPathPosition))},onCorrectAnswer:function(){Interaction.grids.path.set_style(interactionPathCorrectStyle)},onWrongAnswer:function(){},onFail:function(){Interaction.pause(),Interaction.grids.path.animate({style:interactionPathWrongStyle,duration:1e3,callback:function(){Interaction.grids.drawShape(Interaction.shape,!1),Interaction.grids.path.set_style({opacity:0}),Interaction.grids.path.set_style(interactionPathCorrectStyle),Interaction.grids.path.animate({style:{opacity:1},duration:500}),Interaction.grids.animateToNewPosition({position:Interaction.initialPathPosition.add(Interaction.command.multiply(1,0)),callback:function(){Interaction.grids.animateToNewPosition({position:Interaction.initialPathPosition.add(Interaction.command.multiply(1,1)),callback:Interaction.resume,speed:.8})},speed:.8,delay:1e3})}}),Interaction.setStatus("Yanlış cevap. Şekil olması gerektiği noktaya taşınacaktır.",!1)},generateAndShowCommand:function(){var e=new Point(Util.rand01()?1:-1,Util.rand01()?1:-1);e=e.multiply(Util.randomInteger(1,4),Util.randomInteger(1,4)),Interaction.setQuestionParams({id:"command",html:Interaction.commandToString(e)}),Interaction.command=e},commandToString:function(e){var t=e.x,n=e.y,r="";return t!=0&&(r+=Util.numberToString(Math.abs(t))+" birim ",r+=t>0?"sağa":"sola"),t!=0&&n!=0&&(r+=",<br/> "),n!=0&&(r+=Util.numberToString(Math.abs(n))+" birim ",r+=n>0?"aşağıya":"yukarıya"),r}};
var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen evrensel kümeleri inceleyiniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"30px",right:"10px"}),Interaction.appendStatus({top:"20px",left:"20px",fontSize:"22px",fontWeight:"normal"}),Interaction.referencePoint=new Point(0,30),Interaction.prepareNextQuestion()},nextQuestion:function(e){Main.interactionProject.activeLayer.removeChildren(),Interaction.button.className="next_button",Interaction.pause(),Interaction.set1&&(Interaction.set1.removeVennDiagram(),Interaction.set2.removeVennDiagram(),Interaction.set3.removeVennDiagram(),Interaction.rect.remove(),Interaction.rectText.remove()),Interaction.generateSets(),Interaction.setStatus(Interaction.universalSet.getDefinitionString("E")),Interaction.set1.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(50,40),"A"),Interaction.set2.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(250,40),"B"),Interaction.set3.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(145,120)),Interaction.rect=new Path.Rectangle(Interaction.referencePoint.add(20,30),new Size(450,220)),Interaction.rect.set_style({strokeColor:"#000",strokeWidth:2,opacity:0}),Interaction.rect.animate({style:{opacity:1},duration:1e3,delay:1e3}),Interaction.rectText=new PointText(Interaction.referencePoint.add(28,55)),Interaction.rectText.content="E",Interaction.rectText.set_style({fontSize:15,fillColor:"#000",opacity:0}),Interaction.rectText.animate({style:{opacity:1},duration:1e3,delay:1500});for(var t=1;t<=3;t++){Interaction["set"+t].vennDiagram.set_style({opacity:0}),Interaction["set"+t].vennDiagram.animate({style:{opacity:1},duration:1e3,delay:2e3}),Interaction["set"+t].oval.set_style({opacity:0}),Interaction["set"+t].letter.opacity=0;if(t==3)continue;Interaction["set"+t].oval.animate({style:{opacity:1},duration:1e3,delay:4e3}),Interaction["set"+t].letter.animate({style:{opacity:1},duration:1e3,delay:5e3}),Interaction.resume(5e3)}},generateSets:function(){do Interaction.universalSet=Set.randomGenerator();while(Interaction.universalSet.elements.length<6||Interaction.universalSet.elements.length>10);Interaction.set1lastIndex=Util.randomInteger(2,Interaction.universalSet.elements.length-3),Interaction.set2lastIndex=Util.randomInteger(Interaction.set1lastIndex+1,Interaction.universalSet.elements.length),Interaction.set3lastIndex=Interaction.universalSet.elements.length,Interaction.set1=new Set({type:Set.ELEMENTS,elements:Interaction.universalSet.elements.slice(0,Interaction.set1lastIndex)}),Interaction.set2=new Set({type:Set.ELEMENTS,elements:Interaction.universalSet.elements.slice(Interaction.set1lastIndex,Interaction.set2lastIndex)}),Interaction.set3=new Set({type:Set.ELEMENTS,elements:Interaction.universalSet.elements.slice(Interaction.set2lastIndex,Interaction.set3lastIndex)})},preCheck:function(){return Interaction.prepareNextQuestion(),!1},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümelerin birbirine göre durumunu belirtiniz ve kontrol ediniz. Aynı anda birden fazla özellik olabilir."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.appendStatus({bottom:"20px",right:"150px"}),Interaction.set1Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set1Div).css({top:"10px"}),Interaction.set2Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set2Div).css({top:"50px"}),Interaction.prepareNextQuestion()},nextQuestion:function(){Interaction.flushInputs(),$(Interaction.answerSetDiv).remove(),Interaction.generateSets(),Main.interactionProject.activeLayer.removeChildren(),Interaction.answerSetDiv=Util.dom({tag:"div",parent:Interaction.container,css:answerSetDivCss}),$(Interaction.answerSetDiv).append("A' = { ");var e=Interaction.set1.getDifference(Interaction.set2).elements.length,t=0;do{t++;var n=Interaction.appendInput({position:"relative",width:"2.5 ex",height:"30px"},!1,e==0);n.maxLength=2,$(Interaction.answerSetDiv).append(t>1?", ":"").append(n)}while(t<e);$(Interaction.answerSetDiv).append(" }")},generateSets:function(){var e,t;do Interaction.set1=Set.randomGenerator();while(Interaction.set1.elements.length<4||Interaction.set1.elements.length>10);do Interaction.set2=Set.randomGenerator();while(Interaction.set1.elements.length<=Interaction.set2.elements.length||!Interaction.set2.isSubsetOf(Interaction.set1));var n=Util.rand01()==1,r=Util.rand01()==1;n?e=Interaction.set1.getDefinitionString():e=Interaction.set1.getElementsString(),r?t=Interaction.set2.getDefinitionString():t=Interaction.set2.getElementsString(),Interaction.set1Div.innerHTML="E = "+e,Interaction.set2Div.innerHTML="A = "+t},preCheck:function(){},isAnswerCorrect:function(e){typeof e=="string"&&(e=[e]);var t=new Set({type:Set.ELEMENTS,elements:e});return console.log(t),t.isEqualSet(Interaction.set1.getDifference(Interaction.set2))},onCorrectAnswer:function(){Interaction.showCorrectAnswer()},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış, doğru cevabı venn şemasında görebilirsiniz.",!1),Interaction.showCorrectAnswer()},showCorrectAnswer:function(){Interaction.pause(),Interaction.answer=Set.animateComplementSets({container:Interaction.container,position:new Point(120,140),sets:[Interaction.set1,Interaction.set2],letters:["E","A"],callback:Interaction.resume})}};
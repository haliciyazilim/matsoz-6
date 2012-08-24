var Interaction={getFramework:function(){return"paper"},images:[{id:"radio_buttons",src:"/assets/radio_buttons.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümelerin birbirine göre durumunu belirtiniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()};var t=new Point(100,100);Interaction.createOptions(t.add(250,-50)),Interaction.appendStatus({bottom:"30px",right:"210px"}),Interaction.appendButton({bottom:"20px",right:"100px"}),Interaction.set1Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set1Div).css({top:"100px"}),Interaction.set2Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set2Div).css({top:"150px"}),Interaction.setRandomGenerator(4),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial++,Interaction.cleanOptions(),Interaction.generateSets(e)},cleanOptions:function(){Interaction.clickedOption=null,$(Interaction.options).each(function(){$(this).css(optionsStyle)}),$(".image-container").css({backgroundPosition:"0px 0px"})},createOptions:function(e){var t=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Eşit kümeler"}),n=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Biri diğerinin alt kümesi"}),r=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Ayrık kümeler"}),i=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Kesişen kümeler"});Interaction.options=[t,n,r,i];for(var s=0;s<Interaction.options.length;s++)$(Interaction.options[s]).css({top:e.y+50*s,left:e.x}).click(function(){Interaction.cleanOptions(),Interaction.clickedOption=this,$(".image-container",this).css({backgroundPosition:"-32px 0px"}),$(Interaction.clickedOption).css(selectedOptionStyle)}).prepend('<div class="image-container"></div>'),$(".image-container",Interaction.options[s]).css(optionsImageContainer)},generateSets:function(e){var t,n;Interaction.set1=Set.randomGenerator();switch(e){case 0:Interaction.set2=Interaction.set1,t=Interaction.set1.getDefinitionString(),n=Interaction.set2.getElementsString();break;case 1:Interaction.set2=Interaction.set1.getRandomSubset();break;case 2:Interaction.set2=Interaction.set1.getRandomSubset();break;case 3:Interaction.set2=Interaction.set1.getRandomSubset()}if(e!=0){var r=Util.rand01()==1,i=Util.rand01()==1;Interaction.set1.isEqualSet(Interaction.set2)&&(r=!i),r?t=Interaction.set1.getDefinitionString():t=Interaction.set1.getElementsString(),i?n=Interaction.set2.getDefinitionString():n=Interaction.set2.getElementsString()}Interaction.set1Div.innerHTML="A = "+t,Interaction.set2Div.innerHTML="B = "+n},preCheck:function(){if(Interaction.clickedOption==null)return Interaction.setStatus("Lütfen bir şık seçiniz","alert"),!1},isAnswerCorrect:function(){if(Interaction.clickedOption==Interaction.options[0])return Interaction.set1.isEqualSet(Interaction.set2);if(Interaction.clickedOption==Interaction.options[1])return Interaction.set1.isSubsetOf(Interaction.set2)||Interaction.set2.isSubsetOf(Interaction.set1);if(Interaction.clickedOption==Interaction.options[2])return Interaction.set1.isDisjointWith(Interaction.set2);if(Interaction.clickedOption==Interaction.options[3])return Interaction.set1.isIntersectingWith(Interaction.set2)},onCorrectAnswer:function(){$(Interaction.clickedOption).css(trueOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-64px 0px"})},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap.",!1),$(Interaction.clickedOption).css(falseOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-96px 0px"})}};
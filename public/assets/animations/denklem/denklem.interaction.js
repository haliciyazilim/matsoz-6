var Interaction={getFramework:function(){return"paper"},images:[{id:"scales_knuckle",src:"/assets/animations/denklem/scales_knuckle.png"},{id:"scales_bar",src:"/assets/animations/denklem/scales_bar.png"},{id:"scales_left",src:"/assets/animations/denklem/scales_left.png"},{id:"scales_right",src:"/assets/animations/denklem/scales_right.png"},{id:"weight_1",src:"/assets/animations/denklem/weight_1.png"},{id:"weight_2",src:"/assets/animations/denklem/weight_2.png"},{id:"weight_3",src:"/assets/animations/denklem/weight_3.png"},{id:"weight_4",src:"/assets/animations/denklem/weight_4.png"},{id:"weight_a",src:"/assets/animations/denklem/weight_a.png"},{id:"weight_m",src:"/assets/animations/denklem/weight_m.png"},{id:"weight_x",src:"/assets/animations/denklem/weight_x.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki terazide oluşan denklemi çözerek bilinmeyeni bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"10px",right:"50px"}),Interaction.appendStatus({bottom:"20px",right:"160px"}),Interaction.appendQuestion('<span id="equation"></span><br/><span id="variable"></span>&nbsp;=&nbsp;',{position:"absolute",right:"0px",top:"100px",width:"250px",textAlign:"center",fontSize:"16px",lineHeight:"34px",fontWeight:600}),$(Interaction.questionDiv).append(Interaction.appendInput({position:"static"})),Interaction.scales=new Scales({position:new Point(180,115)}),Interaction.setRandomGenerator(3),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.scales.emptyScales();var t=[],n=[],r="",i="",s;switch(e){case 0:var o=Util.rand01()+1,u=Util.rand01()+1;t=[{type:"x",value:o},{type:u}],n=[{type:o+u}],r="x + "+u+" = "+(o+u),i="x",s=o;break;case 1:var o=Util.randomInteger(1,5);t=[{type:"a",value:4},{type:o}],n=[{type:1},{type:3},{type:o}],r="a + "+o+" = 1 + 3 + "+o,i="a",s=4;break;case 2:var o=Util.randomInteger(1,4),u=Util.randomInteger(1,5);t=[{type:"m",value:5},{type:o},{type:u}],n=[{type:4},{type:o+1},{type:u}],r="m + "+o+" + "+u+" = 4 + "+(o+1)+" + "+u,i="m",s=5;break;case 3:var o=Util.randomInteger(1,4),u=Util.randomInteger(1,4);t=[{type:"x",value:2},{type:o+1},{type:u}],n=[{type:o},{type:u},{type:3}],r="x + "+(o+1)+" + "+u+" = "+o+" + "+u+" + 3",i="x",s=2;break;case 4:t=[{type:"a",value:1},{type:"a",value:1},{type:2}],n=[{type:1},{type:1},{type:1},{type:1}],r="2a + 2 = 1 + 1 + 1 + 1",i="a",s=1;break;case 5:t=[{type:"x",value:8},{type:1},{type:1}],n=[{type:1},{type:2},{type:3},{type:4}],r="x + 1 + 1 = 1 + 2 + 3 + 4",i="x",s=8;break;case 6:t=[{type:"x",value:6},{type:1},{type:4},{type:3}],n=[{type:4},{type:2},{type:4},{type:4}],r="x + 1 + 4 + 3 = 4 + 2 + 4 + 4",i="x",s=6;break;case 7:t=[{type:"x",value:5},{type:2},{type:1},{type:1}],n=[{type:2},{type:3},{type:1},{type:3}],r="x + 2 + 1 + 1 = 2 + 3 + 1 + 3",i="x",s=5}Interaction.correctAnswer=s;for(var a=0;a<t.length;a++)Interaction.scales.addWeightToLeft(new Weight(t[a]));for(var a=0;a<n.length;a++)Interaction.scales.addWeightToRight(new Weight(n[a]));Interaction.setQuestionParams([{id:"equation",html:r},{id:"variable",html:i}]),Interaction.scales.calculateWeights()},preCheck:function(){},isAnswerCorrect:function(e){return e==Interaction.correctAnswer},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış. Doğru cevap "+Interaction.correctAnswer+" olacaktı.",!1)}};
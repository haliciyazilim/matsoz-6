var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki alan miktarlarını istenen ölçü birimine çeviriniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"30px",right:"150px",width:"340px",height:"26px",textAlign:"center"}),Interaction.appendButton({bottom:"30px",right:"30px"}),Interaction.appendInput({position:"absolute",top:"4px",width:"140px",height:"32px",right:"82px",fontSize:"22px"}),$(Interaction.input).attr("maxLength",10),Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle,html:'<span id="question" style="position:absolute;top:10px;right:260px;width:160px;height:30px;text-align:right;"></span><span id="eq" style="position:absolute;top:10px;right:236px;">=</span><span id="answerUnit" style="position:absolute;top:10px;right:22px;width:50px;text-align:left;"></span>'}),$(Interaction.questionDiv).append(Interaction.input),Interaction.prepareNextQuestion()},nextQuestion:function(e){$(Interaction.input).css("color","black"),generateQuestion();var t=""+Interaction.question;t.indexOf(".")!=-1&&(t=t.replace(".",",")),Interaction.questionUnit=="a"||Interaction.questionUnit=="daa"||Interaction.questionUnit=="ha"?$("#question").html(t+" "+Interaction.questionUnit):$("#question").html(t+" "+Interaction.questionUnit+"²"),$("#answerUnit").html(Interaction.answerUnit+"²"),Interaction.answer=convertUnits(Interaction.question,convertInitials(Interaction.questionUnit),convertInitials(Interaction.answerUnit))},preCheck:function(){},isAnswerCorrect:function(e){var t="",n=1,r=Util.numberTurkishFloating(Interaction.answer,10),i=r.split(",");if(i.length!=1){t=i[1];for(var s=t.length-1;s>=0;s--)t[s]=="0"&&n==1?t=t.slice(0,s):n=0}return t.length>0?r=""+i[0]+","+t:r=i[0],Interaction.checkedValue=r,parseFloat(r.replace(",","."))==parseFloat(e.replace(",","."))},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1),Interaction.input.value=Interaction.checkedValue,$(Interaction.input).css("color","green")}};
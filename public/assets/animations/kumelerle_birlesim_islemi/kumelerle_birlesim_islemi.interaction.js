var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümelerin birleşim kümesini yazınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(e).append("<div id='kumeUst' class='soru'>"),$(e).append("<div id='kumeAlt' class='soru'>"),$(e).append("<div id='cevap' class='soru'>"),$(e).append("<div id='dogruCevap' class='soru'>"),$(".soru").css("width","300px").css("height","30px").css("position","absolute").css("margin","auto").css("font-size","16px"),$("#kumeUst").css("left","10px").css("top","10px"),$("#kumeAlt").css("left","300px").css("top","10px"),$("#cevap").css("left","10px").css("top","60px").css("width","100%"),$("#dogruCevap").css("left","10px").css("top","210px").css("width","100%").css("color","green"),Interaction.appendStatus({bottom:"20px",right:"160px",width:"280px",textAlign:"center"}),Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){Main.interactionProject.activeLayer.removeChildren(),Interaction.flushInputs(),Interaction.birinciKume=new sorgular,Interaction.ikinciKume=new sorgular,Interaction.soru1=Interaction.birinciKume.yeniSoru("A"),Interaction.soru2=Interaction.ikinciKume.yeniSoru("B"),Interaction.birlesim=Interaction.birinciKume.getKume().getUnion(Interaction.ikinciKume.getKume()),Interaction.birlesimUzunluk=Interaction.birlesim.elements.length,console.log(Interaction.birlesim.elements),console.log(Interaction.birlesimUzunluk);for(var t=0;t<Interaction.birlesimUzunluk;t++)Interaction.appendInput({width:"26px",height:"24px",textAlign:"center",fontSize:"16px",position:"static"}),Interaction.inputs[t].id="girdi"+t;$("#kumeUst").html(Interaction.soru1),$("#kumeAlt").html(Interaction.soru2),$("#cevap").html(""),$("#cevap").append("<b>A</b> U <b>B = {</b> ");for(var t=0;t<Interaction.birlesimUzunluk;t++)$("#cevap").append(Interaction.inputs[t]),t!=Interaction.birlesimUzunluk-1?$("#cevap").append(" , "):t==Interaction.birlesimUzunluk-1&&$("#cevap").append("<b>}</b>")},preCheck:function(){},isAnswerCorrect:function(e){Interaction.girilenler=new Array;for(var t=0;t<e.length;t++)Interaction.girilenler.push(e[t]);Interaction.girilenler=Interaction.girilenler.sort();var n=0;for(var t=0;t<Interaction.birlesimUzunluk;t++)Interaction.birlesim.elements[t]==Interaction.girilenler[t]&&n++;return n==Interaction.birlesimUzunluk?!0:!1},onCorrectAnswer:function(){semaGoster()},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1);for(var e=0;e<Interaction.birlesimUzunluk;e++)$("#girdi"+e).val(Interaction.birlesim.elements[e]);$("input").css("color","green"),semaGoster()}};
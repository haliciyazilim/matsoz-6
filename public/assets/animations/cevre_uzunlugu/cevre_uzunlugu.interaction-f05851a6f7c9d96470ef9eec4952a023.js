var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki şeklinde çevre uzunluğunu bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.appendStatus({bottom:"20px",right:"200px"}),$(e).append("<div id='soru'>"),$("#soru").css({position:"absolute",width:"235px",height:"50px",right:"0px",top:"35px",textAlign:"center",fontSize:"20px",opacity:1}),$(e).append("<div id='cevap'>"),$("#cevap").css({position:"absolute",width:"420px",height:"25px",right:"0px",left:"0px",bottom:"50px",margin:"auto",opacity:0,fontSize:"20px",textAlign:"center",color:"green"}),Interaction.appendInput({position:"relative",width:"70px",height:"50px",textAlign:"center",fontSize:"20px",opacity:1,"float":"left"},!0,!1),Interaction.input.id="girdi",$("#girdi").attr("maxLength","5"),$(e).append("<div id='girdiKapsayici'>"),$("#girdiKapsayici").css({position:"absolute",width:"135px",height:"50px",right:"11px",top:"60px"}),$("#girdiKapsayici").append("<span id='ccc'>Ç= </span>"),$("#girdiKapsayici").append(Interaction.input),$("#girdiKapsayici").append("<span id='biriM'> m</span>"),$("#ccc").css({"float":"left",marginTop:"20px",marginRight:"10px",fontSize:"20px"}),$("#biriM").css({"float":"left",marginTop:"20px",marginLeft:"10px",fontSize:"20px"}),Interaction.soruArray=Util.getShuffledArray(5),Interaction.soruSirasi=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){$("input").css({color:"black"}),Main.interactionProject.activeLayer.removeChildren(),$("#cevap").animate({opacity:0},1e3);var t=Interaction.soruArray[Interaction.soruSirasi];switch(t){case 0:soru=new Dikdortgen;break;case 1:soru=new SekilL1;break;case 2:soru=new SekilL2;break;case 3:soru=new SekilL3;break;case 4:soru=new SekilL4}Interaction.soruSirasi++,Interaction.soruSirasi==5&&(Interaction.soruSirasi=0)},preCheck:function(){},isAnswerCorrect:function(e){if(soru.cevap==e)return!0},onCorrectAnswer:function(){$("input").css({color:"green"}),soru.cevapGoster(),soru.yazilariGoster()},onWrongAnswer:function(){},onFail:function(){$("input").css({color:"red"}),Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),soru.yazilariGoster(),soru.cevapGoster()}};
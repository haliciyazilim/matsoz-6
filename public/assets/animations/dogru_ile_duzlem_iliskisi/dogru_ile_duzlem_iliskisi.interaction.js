var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){console.log("********* navigator.platform: "+navigator.platform),Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"20px",right:"40px"}),$("input").attr("disabled","disabled"),Interaction.appendStatus({bottom:"30px",right:"150px"});var t=new Image;t.src="/assets/animations/dogru_ile_duzlem_iliskisi/dogru_duzlem_etkilesim.png",t.id="fonResmi",$(e).append(t),$("#fonResmi").css({position:"absolute",left:"0px",right:"0px",top:"0px",margin:"auto",zIndex:"-1"}),$(e).append("<div id='sayacMetinUst'>"),$("#sayacMetinUst").css({position:"absolute",width:"145px",height:"20px",right:"20px",top:"20px",textAlign:"center"}).html("Bulmanız gereken"),$(e).append("<div id='sayac'>"),$("#sayac").css({position:"absolute",width:"145px",height:"20px",right:"20px",top:"40px",fontSize:"20px",textAlign:"center",fontWeight:"bold"}),$(e).append("<div id='sayacMetinAlt'>"),$("#sayacMetinAlt").css({position:"absolute",width:"145px",height:"20px",right:"20px",top:"60px",textAlign:"center"}).html("doğru parçası kaldı."),duzlemArray=["maviDuvar","cati","sariDuvar"],dogruArray=["kesişen","paralel"],dogru="",duzlem="",soruMetin="",soruDuzlemRandomArray=Util.getShuffledArray(3),soruDuzlem=0,Interaction.soru=0,$(e).append("<img src='/assets/animations/dogru_ile_duzlem_iliskisi/btn_gray_cevapgoster.png' id='goster'>"),$("#goster").css({position:"absolute",left:"20px",top:"245px",textAlign:"center",opacity:"1"}),gosterBasilimi=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial++,Main.interactionProject.activeLayer.removeChildren(),$("input").css("opacity","0").attr("disabled","disabled"),soruDuzlem=soruDuzlemRandomArray[Interaction.soru];switch(soruDuzlem){case 0:duzlem="mavi renkli duvarı";break;case 1:duzlem="çatısı";break;case 2:duzlem="sarı renkli duvarı"}Interaction.soru%2==0?dogru=dogruArray[0]:dogru=dogruArray[1],soruMetin="Yandaki resimde evin <b>"+duzlem+"</b> ile <b>"+dogru+"</b> tüm doğru parçalarını bulunuz ve kontrol ediniz.",Main.setObjective(soruMetin),dogrular(),Interaction.soru%2==0?$("#sayac").html(kesisen):$("#sayac").html(paralel),gosterBasilimi=0,$("#goster").click(function(){if(dogru=="paralel"){for(var e=0;e<dogrularArray.length;e++)dogrularArray[e].class=="paralel"&&(dogrularArray[e].strokeColor="red"),dogrularArray[e].strokeWidth=4;console.log("ONFAIL soru paralel");for(var e=0;e<Interaction.seciliId.length;e++)Interaction.seciliId[e].class=="paralel"?Interaction.seciliId[e].strokeColor="green":Interaction.seciliId[e].strokeColor="red",dogrularArray[e].strokeWidth=4}else if(dogru=="kesişen"){for(var e=0;e<dogrularArray.length;e++)dogrularArray[e].class=="kesişen"&&(dogrularArray[e].strokeColor="red"),dogrularArray[e].strokeWidth=4;console.log("ONFAIL soru kesişen");for(var e=0;e<Interaction.seciliId.length;e++)Interaction.seciliId[e].class=="kesişen"?Interaction.seciliId[e].strokeColor="green":Interaction.seciliId[e].strokeColor="red",dogrularArray[e].strokeWidth=4}gosterBasilimi=1,Interaction.__checkAnswer()}),Interaction.soru==2?Interaction.soru=0:Interaction.soru++},preCheck:function(){if(Interaction.seciliId.length==0)return gosterBasilimi==1?!0:(Interaction.setStatus("Lütfen doğruları seçiniz.",!1),!1)},isAnswerCorrect:function(e){return gosterBasilimi==1&&(sayac=0),sayac==0&&gosterBasilimi==0?($("input").css("opacity","1").removeAttr("disabled"),$("#sayac").html("0"),console.log("xxxxxxxxxx onmousedown null"),!0):($("input").css("opacity","1").removeAttr("disabled"),$("#sayac").html("0"),!1)},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Cevaplar yukarıda gösterilmiştir.",!1)}};
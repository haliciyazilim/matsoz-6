var Interaction={getFramework:function(){return"paper"},init:function(e){Interaction.container=e,Main.setObjective("Yandaki ondalık kesirleri sürükleyerek küçükten büyüğe doğru sıralayınız."),Interaction.paper={width:$(e).width(),height:$(e).height()},sayi1=0,sayi2=0,sayi3=0,$(e).append("<div id='soru'>"),$("#soru").css("width","100%").css("height","45px").css("position","absolute").css("left","0").css("top","50px").css("right","0").css("margin","auto"),$(e).append("<div id='cevap'>"),$("#cevap").css("width","100%").css("height","45px").css("position","absolute").css("left","0").css("right","0").css("bottom","100px").css("margin","auto").css("opacity","0"),sayi1=sayiUretim(),sayi2=sayiUretim(),sayi3=sayiUretim(),soru=new liste(sayi1,sayi2,sayi3,"soru"),soru.doldur(),Interaction.appendButton({bottom:"40px",right:"48px"}),Interaction.appendStatus({bottom:"50px",right:"200px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){function t(){$(" #cevap").html("");var e=[sayi1,sayi2,sayi3];e.sort();var t=new liste(e[0],e[1],e[2],"cevap");t.doldur()}$("#cevap").animate({opacity:"0"},1e3),$("#soru").animate({opacity:"1"},1e3),sayi1=sayiUretim(),sayi2=sayiUretim(),sayi3=sayiUretim(),$("li").removeClass("kapali"),$("#soru #siralanacakSayi1").html(sayi1.replace(".",",")),$("#soru #siralanacakSayi2").html(sayi2.replace(".",",")),$("#soru #siralanacakSayi3").html(sayi3.replace(".",",")),setTimeout(t,1e3)},preCheck:function(){},isAnswerCorrect:function(e){siraliListe=[parseFloat(sayi1),parseFloat(sayi2),parseFloat(sayi3)],siraliListe.sort(function(e,t){return t-e}),siraliListe.reverse(),console.log(siraliListe),console.log(typeof siraliListe[0]),$("#cevap #siralanacakSayi1").html(siraliListe[0].toString().replace(".",",")),$("#cevap #siralanacakSayi2").html(siraliListe[1].toString().replace(".",",")),$("#cevap #siralanacakSayi3").html(siraliListe[2].toString().replace(".",","));var t=$("#soru .sayilar:first").html();t=parseFloat(t.replace(",",".")),console.log("ilk: "+t);var n=$("#soru .sayilar:last").html();n=parseFloat(n.replace(",",".")),console.log("sonuncu: "+n);if(t==siraliListe[0]&&n==siraliListe[2])return $("li").addClass("kapali"),!0},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıdadır.",!1),$("#soru").animate({opacity:"0.35"},1e3),$("#cevap").animate({opacity:"1"},1e3),$("li").addClass("kapali")}};
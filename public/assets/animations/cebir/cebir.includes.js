function __Styles(){}var Animation={init:function(e){Animation.container=e,resimler=["/assets/animations/cebir/cebir_zemin.jpg","/assets/animations/cebir/cebir_harezmi.png","/assets/animations/cebir/cebir_eski_yazi.png","/assets/animations/cebir/cebir_yeni_yazi.png"],$(e).append("<img id='zemin'  class='resim' src='"+resimler[0]+"'>"),$(e).append("<img id='harezmi' class='resim' src='"+resimler[1]+"'>"),$(e).append("<img id='eskiYazi' class='resim' src='"+resimler[2]+"'>"),$(e).append("<img id='yeniYazi' class='resim' src='"+resimler[3]+"'>"),$(e).append("<ul id='ifadeler'>"),$("#ifadeler").append("<li id='ifade1'>x</li>"),$("#ifadeler").append("<li id='ifade2'>a+1</li>"),$("#ifadeler").append("<li id='ifade3'>2n-1=3</li>"),$(".resim").css({position:"absolute",top:"20px",left:"0",right:"0",margin:"auto",opacity:"0"}),$("#ifadeler").css({width:"300px","float":"left",listStyle:"none",position:"absolute",top:"20px",left:"133px",margin:"auto",fontSize:"22px",textAlign:"right"}),$("#ifadeler li").css({position:"relative",width:"30%","float":"left",opacity:"0",fontWeight:"bold"}),$("#ifade1").css("color","#44DFFB"),$("#ifade2").css("color","#B1A0C6"),$("#ifade3").css("color","#FFCA00");var t=["zemin","harezmi","eskiYazi","yeniYazi"],n=0;for(var r=0;r<t.length;r++)$("#"+t[r]).delay(r*1e3).animate({opacity:"1"},1e3),n=r*1e3;var i=["ifade1","ifade2","ifade3"];for(var r=0;r<i.length;r++)$("#"+i[r]).delay(r*1e3+n).animate({top:"135px",opacity:"1"},1e3);Main.animationFinished(6e3)}},Interaction={getFramework:function(){return"paper"},init:function(e){Interaction.container=e,Main.setObjective("Yandaki cebirsel ifadelerde kutulara uygun sayıları giriniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(e).append("<div id='soru'>"),$("#soru").append("<div id='sol' class='yanlar'>"),$("#soru").append("<div id='sag' class='yanlar'>"),$("#soru").append("<div id='dogru' class='yanlar'>");for(var t=0;t<5;t++){$("#sol").append("<div id='sol"+t+"' class='madde'>"),$("#sag").append("<div id='sag"+t+"' class='madde'>"),$("#dogru").append("<div id='dogru"+t+"' class='madde cevap'>");if(t>0){$("#sol"+t).html(t);var n=Interaction.appendInput({width:"35px",height:"32px",textAlign:"center",fontSize:"20px"},!1,!1);$("#sag"+t).append(n)}}$("input").css("margin","0 auto").css("margin-top","3px"),$(".madde").css({width:"148px",height:"40px",textAlign:"center",fontSize:"20px",lineHeight:"40px",margin:"0px"}),$(".yanlar").css({width:"148px",height:"200px","float":"left"}),$("#soru").css("width","450px").css("height","200px").css("position","absolute").css("margin","auto").css("font-size","16px").css("left","150px").css("right","0px").css("top","10px"),Interaction.appendStatus({bottom:"20px",right:"160px",width:"280px",textAlign:"center"}),Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.soruSayaci=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){$(".cevap").html(""),$("input").css("color","black"),$("#soru").animate({left:"150px"},1e3),Interaction.random1=Math.floor(Math.random()*9+1),Interaction.random2=Math.floor(Math.random()*9),Interaction.isaret=Interaction.soruSayaci%2==0?" + ":" – ";var t=Math.floor(Math.random()*2),n="";switch(t){case 0:n="x";break;case 1:n="a";break;case 2:n="n"}$("#sol0").html(n),Interaction.parca1=Interaction.random1==1?n:Interaction.random1+n,Interaction.parca2=Interaction.random2==0?"":Interaction.isaret+Interaction.random2,Interaction.soru=Interaction.parca1+Interaction.parca2,$("#sag0").html(Interaction.soru),Interaction.soruSayaci++},preCheck:function(){},isAnswerCorrect:function(e){Interaction.dogrular=[],Interaction.girilenler=[],Interaction.testSayaci=0;if(Interaction.soruSayaci%2!=0)for(var t=1;t<=4;t++){var n=Interaction.random1*t+Interaction.random2;Interaction.dogrular.push(n),Interaction.girilenler.push(e[t-1]),Interaction.dogrular[t-1]==Interaction.girilenler[t-1]&&Interaction.testSayaci++}else for(var t=1;t<=4;t++){var n=Interaction.random1*t-Interaction.random2;Interaction.dogrular.push(n),Interaction.girilenler.push(e[t-1]),Interaction.dogrular[t-1]==Interaction.girilenler[t-1]&&Interaction.testSayaci++}if(Interaction.testSayaci==4)return!0},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){$("#soru").animate({left:"0px"},1e3),$("#dogru0").html("Doğru Cevaplar");for(var e=1;e<=4;e++)$("#dogru"+e).css("color","green").html(Interaction.dogrular[e-1]),Interaction.dogrular[e-1]==Interaction.girilenler[e-1]?$("#sag"+e+" input").css("color","green"):$("#sag"+e+" input").css("color","red");Interaction.setStatus("Yanlış cevap; doğrusu yukarıdadır.",!1)}};
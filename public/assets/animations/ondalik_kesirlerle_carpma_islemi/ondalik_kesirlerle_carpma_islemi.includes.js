function __Styles(){}function carpma(){carpim1OndalikSecim=Math.floor(Math.random()*100),carpan1=Math.floor(Math.random()*1e3),carpan1=carpim1OndalikSecim<50?carpan1/10:carpan1/100,carpan2=(Math.random()*10).toFixed(1),carpan1=36.9,carpan2=4.3,console.log(carpan1),console.log(carpan2),carpan1Array=0,carpan2Array=0,Util.isInteger(carpan1)==0?(carpan1Array=carpan1.toString().split("."),carpan1VirguldenSonra=carpan1Array[1].length):(carpan1Array=[carpan1],carpan1VirguldenSonra=0),Util.isInteger(carpan2)==0?(carpan2Array=carpan2.toString().split("."),carpan2VirguldenSonra=carpan2Array[1].length):(carpan2=parseInt(carpan2,10),carpan2Array=[carpan2],carpan2VirguldenSonra=0);var e=carpan1VirguldenSonra-carpan2VirguldenSonra,t=carpan1VirguldenSonra+carpan2VirguldenSonra;$("#soru",container).append("<div id='carpan1' class='carpan'>"),$("#carpan1").css("top","10px").html(Util.format(carpan1,{point:",",places:carpan1VirguldenSonra})),$("#soru",container).append("<div id='carpan2' class='carpan'>"),$("#carpan2").css("top","50px").html(Util.format(carpan2,{point:",",places:carpan2VirguldenSonra})),$("#soru",container).append("<div id='carpmaIsareti'>"),$("#carpmaIsareti").css("width","100px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top","60px").html("x"),carpan1Str=Util.isInteger(carpan1)==0?carpan1Array[0]+""+carpan1Array[1]:parseInt(carpan1,10),carpan2Str=Util.isInteger(carpan2)==0?carpan2Array[0]+""+carpan2Array[1]:parseInt(carpan2,10),console.log("çarpanlar: "+carpan1Str+","+carpan2Str),carpan1Str=carpan1Str.toString(),carpan2Str=carpan2Str.toString(),icerik=new Array;for(var n=0;n<=carpan2Str.length;n++)icerik[n]=carpan1Str*carpan2Str.charAt(carpan2Str.length-n),icerik[n]==0&&(icerik[n]="000"),console.log("icerik_"+n+": "+icerik[n]);for(var n=0;n<carpan2Str.length;n++){var r=100+35*n,i=n*16,s=n+1;$("#soru",container).append("<div id='sonuc"+s+"'/>"),$("#sonuc"+s).css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right",i).css("font-size","30px").css("top",r+"px").css("z-index","5").html(icerik[n+1]);var o=Interaction.appendInput({position:"absolute",width:"100px",height:"30px",right:i,top:r+"px",margin:"auto",fontSize:"30px",textAlign:"right",zIndex:"5"},!0,!1);o.id="girdi"+s,$("#girdi"+s).attr("maxLength","5"),$("#soru",container).append(o);if(n==carpan2Str.length-1&&carpan2Str.length>1){$("#soru",container).append("<div id='toplamaIsareti'>"),$("#toplamaIsareti").css("width",120+n*20+"px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top",r+5+"px").html("+"),$("#soru",container).append("<div id='sonucToplam'/>"),$("#sonucToplam").css("width",120+(n-1)*16+"px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("top",r+40+"px").css("z-index","5").html((carpan1*carpan2).toFixed(t));var u=Interaction.appendInput({position:"absolute",width:"100px",height:"30px",right:"0px",top:r+40+"px",margin:"auto",fontSize:"30px",textAlign:"right",zIndex:"5"},!0,!1);u.id="girdi3",$("#soru",container).append(u),$("#girdi3").attr("maxLength","7")}}$("input").addClass("input").addClass("number_input_field"),$(".carpan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),Util.isInteger(carpan2)==1?$("#carpan2").css("margin-right",e*20+3):$("#carpan2").css("margin-right",e*20),$("#girdi1, #girdi2, #girdi3, #girdiToplam").keydown(function(e){var t;e.keyCode==8?t=1:t=0;if(this.createTextRange){var n=node.createTextRange();return n.collapse(!0),n.moveEnd(t),n.moveStart(t),n.select(),!0}if(this.setSelectionRange)return this.setSelectionRange(t,t),!0}),$("#girdi1, #girdi2, #girdi3, #girdiToplam").keyup(function(){var e=$(this).val();$(this).val(e),console.log($(this).val())})}var Animation={images:[],init:function(e){Animation.container=e,$(e).append("<div id='ornek'>"),$("#ornek").css("width","120px").css("height","130px").css("position","absolute").css("left","0px").css("top","10px");var t="#9bd1d9",n="#f2fafc",r="#255b63",i="#ecf8fa",s="#d9f1f5",o="#bfe8ef",u="#9bd1d9";$(Animation.container).append("<div id='tablo'>"),$("#tablo").css("width","540px").css("height","130px").css("margin","auto").css("position","absolute").css("right","20px").css("top","20px").css("font-size","20px");var a=["Yüzler b.","Onlar b.","Birler b.","Onda birler b.","Yüzde birler b.","Binde birler b."],f=["baslik","rakam","virgul"],l;for(var c=1;c<=6;c++)for(var h=1;h<=7;h++)c==1&&h!=4?l=f[0]:h==4?l=f[2]:l=f[1],$("#tablo",Animation.container).append("<div id='parca"+c+"x"+h+"' class='"+l+"'>"),$("#parca"+c+"x"+h).html(" "),c==1&&h!=4&&(h<4?$("#parca"+c+"x"+h).html(a[h-1]):$("#parca"+c+"x"+h).html(a[h-2])),c>1&&c%2!=0&&h!=4?$("#parca"+c+"x"+h).css({borderBottom:"1px solid black"}):c>1&&c%2!=0&&h==4&&$("#parca"+c+"x"+h).css({borderBottom:"1px solid "+o}).html(","),c>1&&h==4&&$("#parca"+c+"x"+h).html("<span id='virgulK"+(c-1)+"'>,</span>"),h%2==0?$("#parca"+c+"x"+h).css({backgroundColor:o}):$("#parca"+c+"x"+h).css({backgroundColor:i});$(".baslik").css({height:"26px",width:"85px","float":"left",fontSize:"12px",textAlign:"center",lineHeight:"25px"}),$("#tablo .virgul").css({height:"26px",width:"30px","float":"left",textAlign:"center",lineHeight:"25px"}),$(".rakam").css({height:"26px",width:"85px","float":"left",fontSize:"16px",textAlign:"center",lineHeight:"25px"}),$("#parca2x3").html("<span class='kademe1'>0</span>"),$("#parca2x5").html("<span class='kademe1'>7</span>"),$("#parca3x3").html("<span class='kademe2'>1</span>"),$("#parca3x5").html("<span class='kademe2'>5</span>"),$("#parca3x1").html("<span class='kademe2'>x</span>"),$("#parca4x3").html("<span class='kademe3'>0</span>"),$("#parca4x5").html("<span class='kademe3'>3</span>"),$("#parca4x6").html("<span class='kademe3'>5</span>"),$("#parca5x3").html("<span class='kademe4'>0</span>"),$("#parca5x5").html("<span class='kademe4'>7</span>"),$("#parca5x1").html("<span class='kademe4'>+</span>"),$("#parca6x3").html("<span class='kademe5'>1</span>"),$("#parca6x5").html("<span class='kademe5'>0</span>"),$("#parca6x6").html("<span class='kademe5'>5</span>"),$(".kademe1,.kademe2, .kademe3, .kademe4, .kademe5, #virgulK1, #virgulK2, #virgulK3, #virgulK4, #virgulK5").css({opacity:0});var p=new DecimalMultiplication(.7,1.5,"ornek",30);setTimeout(function(){p.doldur(),p.basla(1e3,1e3)},1e3),$(".kademe1, #virgulK1").delay(1e3).animate({opacity:1},1e3),$(".kademe2, #virgulK2").delay(2e3).animate({opacity:1},1e3),$(".kademe3, #virgulK3").delay(1e4).animate({opacity:1},1e3),$(".kademe4, #virgulK4").delay(14e3).animate({opacity:1},1e3),$(".kademe5").delay(22e3).animate({opacity:1},1e3),$("#virgulK5").delay(22500).animate({opacity:1},1e3),Main.animationFinished(24e3)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki ondalık kesirleri çarpınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(e).append("<div id='soru'>"),$("#soru").css("width","120px").css("height","130px").css("margin","auto").css("position","absolute").css("left","0").css("right","0").css("top","0px").css("font-size","20px"),$(e).append("<div id='cevap'>"),$("#cevap").css("width","120px").css("height","130px").css("margin","auto").css("position","absolute").css("right","120px").css("top","0px").css("font-size","20px").css("opacity","0"),Interaction.appendButton({bottom:"40px",right:"40px"}),Interaction.appendStatus({bottom:"50px",right:"150px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.inputs=[],$("#soru, #cevap").html(""),$("#cevap").animate({opacity:0,right:"0px"},1e3,function(){$("#cevap").html("")}),$("#soru").animate({right:"0px"}),carpma()},preCheck:function(){},isAnswerCorrect:function(e){if(carpan2Str.length>1){girdi1=$("#soru #sonuc1").html(),girdi2=$("#soru #sonuc2").html(),girdiToplam=$("#soru #sonucToplam").html(),cevap1=e[0],cevap2=e[1],cevap3=e[2],cevap3Array=cevap3.split(","),cevap3Array[0]&&(cevap3=cevap3Array[0]+"."+cevap3Array[1]),console.log(cevap1+", "+cevap2+", "+cevap3),console.log(girdi1+", "+girdi2+", "+girdiToplam),yanlislar=[];if(cevap1==girdi1&&cevap2==girdi2&&cevap3==girdiToplam)return!0;cevap1!=girdi1&&yanlislar.push(1),cevap2!=girdi2&&yanlislar.push(2),cevap3!=girdiToplam&&yanlislar.push(3)}else if(carpan2Str.length==1){girdi1=carpan1*carpan2,cevap1=e,cevap1Array=cevap1.split(","),cevap1Array[0]&&(cevap1=cevap1Array[0]+"."+cevap1Array[1]),console.log(cevap1),console.log(girdi1),yanlislar=[];if(cevap1==girdi1)return!0;cevap1!=girdi1&&yanlislar.push(1)}},onCorrectAnswer:function(){Interaction.pause(),$("input[type='button']").css({opacity:.5}),$("#cevap").animate({opacity:1,right:"150px"},1e3),$("#soru").animate({opacity:1,right:"200px"},1e3);var e=new DecimalMultiplication(carpan1,carpan2,"cevap",30);e.doldur(),e.basla(1e3,1e3);var t=carpan2Str.length==1?1e4:35e3;setTimeout(function(){Interaction.resume(),$("input[type='button']").css({opacity:1})},t)},onWrongAnswer:function(){},onFail:function(){Interaction.pause(),$("input[type='button']").css({opacity:.5}),$("#soru input").css("color","green");for(var e=0;e<yanlislar.length;e++){var t=yanlislar[e];$("#soru #girdi"+t).css("color","red")}Interaction.setStatus("Cevabın yanlış; doğrusu sağ taraftadır.",!1),$("#cevap").animate({opacity:1,right:"150px"},1e3),$("#soru").animate({opacity:1,right:"200px"},1e3);var n=new DecimalMultiplication(carpan1,carpan2,"cevap",30);n.doldur(),n.basla(1e3,1e3);var r=carpan2Str.length==1?1e4:35e3;setTimeout(function(){Interaction.resume(),$("input[type='button']").css({opacity:1})},r)}};
// Normal Çarpma
function carpma(){carpim1OndalikSecim=Math.floor(Math.random()*100),carpan1=Math.floor(Math.random()*1e3),carpan1=carpim1OndalikSecim<50?carpan1/10:carpan1/100,carpan2=(Math.random()*10).toFixed(1),carpan1=36.9,carpan2=4.3,console.log(carpan1),console.log(carpan2),carpan1Array=0,carpan2Array=0,Util.isInteger(carpan1)==0?(carpan1Array=carpan1.toString().split("."),carpan1VirguldenSonra=carpan1Array[1].length):(carpan1Array=[carpan1],carpan1VirguldenSonra=0),Util.isInteger(carpan2)==0?(carpan2Array=carpan2.toString().split("."),carpan2VirguldenSonra=carpan2Array[1].length):(carpan2=parseInt(carpan2,10),carpan2Array=[carpan2],carpan2VirguldenSonra=0);var e=carpan1VirguldenSonra-carpan2VirguldenSonra,t=carpan1VirguldenSonra+carpan2VirguldenSonra;$("#soru",container).append("<div id='carpan1' class='carpan'>"),$("#carpan1").css("top","10px").html(Util.format(carpan1,{point:",",places:carpan1VirguldenSonra})),$("#soru",container).append("<div id='carpan2' class='carpan'>"),$("#carpan2").css("top","50px").html(Util.format(carpan2,{point:",",places:carpan2VirguldenSonra})),$("#soru",container).append("<div id='carpmaIsareti'>"),$("#carpmaIsareti").css("width","100px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top","60px").html("x"),carpan1Str=Util.isInteger(carpan1)==0?carpan1Array[0]+""+carpan1Array[1]:parseInt(carpan1,10),carpan2Str=Util.isInteger(carpan2)==0?carpan2Array[0]+""+carpan2Array[1]:parseInt(carpan2,10),console.log("çarpanlar: "+carpan1Str+","+carpan2Str),carpan1Str=carpan1Str.toString(),carpan2Str=carpan2Str.toString(),icerik=new Array;for(var n=0;n<=carpan2Str.length;n++)icerik[n]=carpan1Str*carpan2Str.charAt(carpan2Str.length-n),icerik[n]==0&&(icerik[n]="000"),console.log("icerik_"+n+": "+icerik[n]);for(var n=0;n<carpan2Str.length;n++){var r=100+35*n,i=n*16,s=n+1;$("#soru",container).append("<div id='sonuc"+s+"'/>"),$("#sonuc"+s).css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right",i).css("font-size","30px").css("top",r+"px").css("z-index","5").html(icerik[n+1]);var o=Interaction.appendInput({position:"absolute",width:"100px",height:"30px",right:i,top:r+"px",margin:"auto",fontSize:"30px",textAlign:"right",zIndex:"5"},!0,!1);o.id="girdi"+s,$("#girdi"+s).attr("maxLength","5"),$("#soru",container).append(o);if(n==carpan2Str.length-1&&carpan2Str.length>1){$("#soru",container).append("<div id='toplamaIsareti'>"),$("#toplamaIsareti").css("width",120+n*20+"px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top",r+5+"px").html("+"),$("#soru",container).append("<div id='sonucToplam'/>"),$("#sonucToplam").css("width",120+(n-1)*16+"px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("top",r+40+"px").css("z-index","5").html((carpan1*carpan2).toFixed(t));var u=Interaction.appendInput({position:"absolute",width:"100px",height:"30px",right:"0px",top:r+40+"px",margin:"auto",fontSize:"30px",textAlign:"right",zIndex:"5"},!0,!1);u.id="girdi3",$("#soru",container).append(u),$("#girdi3").attr("maxLength","7")}}$("input").addClass("input").addClass("number_input_field"),$(".carpan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),Util.isInteger(carpan2)==1?$("#carpan2").css("margin-right",e*20+3):$("#carpan2").css("margin-right",e*20),$("#girdi1, #girdi2, #girdi3, #girdiToplam").keydown(function(e){var t;e.keyCode==8?t=1:t=0;if(this.createTextRange){var n=node.createTextRange();return n.collapse(!0),n.moveEnd(t),n.moveStart(t),n.select(),!0}if(this.setSelectionRange)return this.setSelectionRange(t,t),!0}),$("#girdi1, #girdi2, #girdi3, #girdiToplam").keyup(function(){var e=$(this).val();$(this).val(e),console.log($(this).val())})};
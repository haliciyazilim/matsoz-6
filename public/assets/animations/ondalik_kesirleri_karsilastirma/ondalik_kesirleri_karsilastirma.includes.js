function __Styles(){tabloStrokeRenk="#255b63",tabloBirlerFillRenk="#ecf8fa",tabloBinlerFillRenk="#d9f1f5",tabloMilyonlarFillRenk="#bfe8ef",inputStrokeRenk="#9bd1d9",sayilarKutuRenk="#e6c181",sayilarKutuStrokeRenk="#4f360b",sayilarStrokeRenk="#4f360b",yerTutucuRenk="#F2F2F2"}liste=function(e,t,n,r){this.div="#"+r,this.e1=e,this.e2=t,this.e3=n,this.doldur=function(){$(this.div).append("<ul id='siralama'>"),$(this.div+" #siralama").append("<li id='siralanacakSayi1' class='sayilar'>"),$(this.div+" #siralama #siralanacakSayi1").html(this.e1),$(this.div+" #siralama").append("<div id='raf1' class='raf'>"),$(this.div+" #siralama").append("<div id='kucuk1' class='isaretler'>"),$(this.div+" #siralama").append("<li id='siralanacakSayi2' class='sayilar'>"),$(this.div+" #siralama #siralanacakSayi2").html(this.e2),$(this.div+" #siralama").append("<div id='raf2' class='raf'>"),$(this.div+" #siralama").append("<div id='kucuk2' class='isaretler'>"),$(this.div+" #siralama").append("<li id='siralanacakSayi3' class='sayilar'>"),$(this.div+" #siralama #siralanacakSayi3").html(this.e3),$(this.div+" #siralama").append("<div id='raf3' class='raf'>"),$(this.div+" #siralama .sayilar").css("font-size","20px").css("cursor","pointer");if(this.div=="#ornekUst"||this.div=="#ornekAlt")$(this.div+" #siralama").css("list-style-type","none").css("width","414px").css("padding","0").css("margin-top","10px"),$(this.div+" #siralama li").css("float","left").css("height","30px").css("line-height","30px"),$(this.div+" #siralama .sayilar").css("font-size","20px").css("cursor","pointer"),$(this.div+" #siralama li").css("margin","0 70px 0 10px"),$(this.div+" #siralama .sayilar").css("text-align","left").css("width","40px");if(this.div=="#soru"||this.div=="#cevap")$(container).append("<style>"+this.div+" #siralama {width:430px; list-style-type:none; cursor:auto; margin:auto;}</style>"),$(container).append("<style>"+this.div+" #siralama li {float:left; height:20px; width:70px; margin:0px 30px; padding: 8px 5px;background:"+sayilarKutuRenk+"; font-size:12px; color:"+sayilarStrokeRenk+"; font-weight:bold; border:1px solid "+sayilarKutuStrokeRenk+";}</style>"),$(container).append("<style>"+this.div+" #siralama .yerTutucu { width: 70px; background:"+yerTutucuRenk+"; height:20px; border-color:"+yerTutucuRenk+"}</style>"),$(this.div+" #siralama .sayilar").css("text-align","center");this.div=="#soru"||this.div=="#cevap"?($(this.div+" #kucuk1").css("left","210px"),$(this.div+" #kucuk2").css("left","350px"),$(this.div+" #raf1").css("left","103px"),$(this.div+" #raf2").css("left","246px"),$(this.div+" #raf3").css("left","388px"),$(this.div+" #siralama .isaretler").append("<img id='kucuk' src='/assets/animations/ondalik_kesirleri_karsilastirma/oran_kucuk_active.png' />"),$(this.div+" .isaretler").css("position","absolute").css("bottom","10px"),$(this.div+" #siralama .raf").append("<img class='rafResim' src='/assets/animations/ondalik_kesirleri_karsilastirma/okk_etkilesim_raf.png' />"),$(this.div+" .raf").css("position","absolute").css("top","38px").css("margin","auto"),$(this.div+" .rafResim").css("width","95px"),console.log("div: "+this.div+" #siralama li")):this.div=="#ornekAlt"?($(this.div+" #kucuk1").css("left","88px"),$(this.div+" #kucuk2").css("left","206px"),$(this.div+" .isaretler").css("position","absolute").css("bottom","10px").css("margin","auto"),$("#ornekAlt #kucuk1, #ornekAlt #kucuk2").html("<").css("width","10px").css("font-size","20px")):this.div=="#ornekUst"&&$("#ornekUst #kucuk1, #ornekUst #kucuk2").css("width","20px"),this.div=="#soru"&&$(function(){$("#soru #siralama").sortable({items:"li:not(.raf .isaretler)",placeholder:"yerTutucu",tolerance:"pointer"}),$("#soru #siralama").sortable({cancel:".kapali"})})}},sayiUretim=function(){var e=Math.floor(Math.random()*3+1);console.log("deger: "+e);var t=Math.floor(Math.random()*3+1);console.log("deger: "+t);switch(e){case 1:var n=Math.random()*9+1;return format(n,{places:t});case 2:var n=Math.random()*99+1;return format(n,{places:t});case 3:var n=Math.random()*999+1;return format(n,{places:t})}},format=function(e,t){t.point=t.point||".",t.group=t.group||" ",t.places=t.places||0,t.suffix=t.suffix||"",t.prefix=t.prefix||"",regex=/(\d+)(\d{3})/,result=(isNaN(e)?0:Math.abs(e)).toFixed(t.places)+"";for(result=result.replace(".",t.point);regex.test(result)&&t.group;result=result.replace(regex,"$1"+t.group+"$2"));return(e<0?"-":"")+t.prefix+result+t.suffix};var Animation={init:function(e){Animation.container=e,$(e).append("<div id='ornekUst'>"),$("#ornekUst").css("width","414px").css("height","45px").css("position","absolute").css("left","0").css("top","50px").css("margin","auto"),$(e).append("<div id='ornekAlt'>"),$("#ornekAlt").css("width","414px").css("height","45px").css("position","absolute").css("left","0").css("bottom","50px").css("margin","auto"),$(e).append("<div id='ornek'>"),$("#ornek").css("width","757px").css("height","190px").css("position","absolute").css("left","0").css("top","0px").css("right","0").css("bottom","0").css("margin","auto"),$("#ornek",Interaction.container).append("<div id='OSoruCokluInput'>"),$("#OSoruCokluInput").css("width","261px").css("height","190px").css("margin","auto").css("position","absolute").css("right","30px").css("top","0px").css("font-size","20px").css("border","solid 1px "+tabloStrokeRenk),$("#OSoruCokluInput",e).append("<div id='OtamKisim'>"),$("#OtamKisim").css("width","120px"),$("#OtamKisim").css("height","30px"),$("#OtamKisim").css("position","absolute"),$("#OtamKisim").css("top","0px"),$("#OtamKisim").css("left","0px"),$("#OtamKisim").css("margin","auto").css("border-right","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#OtamKisim").css("font-size","small"),$("#OtamKisim").css("font-weight","bold"),$("#OtamKisim",e).append("<div class='OyaziBolukler'>"),$("#OtamKisim .OyaziBolukler").html("Tam Kısmı"),$("#OSoruCokluInput",e).append("<div id='OkesirKisim'>"),$("#OkesirKisim").css("width","120px"),$("#OkesirKisim").css("height","30px"),$("#OkesirKisim").css("position","absolute"),$("#OkesirKisim").css("top","0px"),$("#OkesirKisim").css("left","140px"),$("#OkesirKisim").css("margin","auto").css("border-left","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#OkesirKisim").css("font-size","small"),$("#OkesirKisim").css("font-weight","bold"),$("#OkesirKisim",e).append("<div class='OyaziBolukler'>"),$("#OkesirKisim .OyaziBolukler").html("Kesir Kısmı"),$("#OSoruCokluInput",e).append("<div id='Oyuzler' >"),$("#Oyuzler").css("width","40px"),$("#Oyuzler").css("height","160px"),$("#Oyuzler").css("position","absolute"),$("#Oyuzler").css("top","30px"),$("#Oyuzler").css("left","0px"),$("#Oyuzler").css("margin","auto").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#Oyuzler").css("border-left","none").css("border-bottom","none"),$("#Oyuzler").css("font-size","medium"),$("#Oyuzler",e).append("<div class='Oyatay'>"),$("#Oyuzler .Oyatay").html("Yüzler"),$("#OSoruCokluInput #Oyuzler",e).append("<div id='OgirdiYuzler' >"),$("#OgirdiYuzler").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","53px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","27px").css("text-align","center"),$("#OSoruCokluInput #Oyuzler",e).append("<div id='OgirdiYuzler1' >"),$("#OgirdiYuzler1").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","26px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #Oyuzler",e).append("<div id='OgirdiYuzler2' >"),$("#OgirdiYuzler2").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OinputYuzler").css("position","absolute").css("bottom","0").css("left","0").css("right","0").css("top","0").css("margin","auto").css("height","25px").css("width","30px"),$("#OSoruCokluInput",e).append("<div id='Oonlar' >"),$("#Oonlar").css("width","40px"),$("#Oonlar").css("height","160px"),$("#Oonlar").css("position","absolute"),$("#Oonlar").css("top","30px"),$("#Oonlar").css("left","40px"),$("#Oonlar").css("margin","auto").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#Oonlar").css("border-bottom","none"),$("#Oonlar").css("font-size","medium"),$("#Oonlar",e).append("<div class='Oyatay'>"),$("#Oonlar .Oyatay").html("Onlar"),$("#OSoruCokluInput #Oonlar",e).append("<div id='OgirdiOnlar' >"),$("#OgirdiOnlar").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","53px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #Oonlar",e).append("<div id='OgirdiOnlar1' >"),$("#OgirdiOnlar1").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","26px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #Oonlar",e).append("<div id='OgirdiOnlar2' >"),$("#OgirdiOnlar2").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput",e).append("<div id='Obirler' >"),$("#Obirler").css("width","39px"),$("#Obirler").css("height","160px"),$("#Obirler").css("position","absolute"),$("#Obirler").css("top","30px"),$("#Obirler").css("left","80px"),$("#Obirler").css("margin","auto"),$("#Obirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#Obirler").css("border-bottom","none"),$("#Obirler").css("font-size","medium"),$("#Obirler",e).append("<div class='Oyatay'>"),$("#Obirler .Oyatay").html("Birler"),$("#OSoruCokluInput #Obirler",e).append("<div id='OgirdiBirler' >"),$("#OgirdiBirler").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","53px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #Obirler",e).append("<div id='OgirdiBirler1' >"),$("#OgirdiBirler1").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","26px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #Obirler",e).append("<div id='OgirdiBirler2' >"),$("#OgirdiBirler2").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput",e).append("<div id='Ovirgul' >"),$("#Ovirgul").css("width","19px").css("height","82px").css("position","absolute").css("top","108px").css("left","120px").css("margin","auto").css("border","solid 1px "+tabloStrokeRenk).css("background-color","white").css("border-top","none").css("font-size","medium").css("text-align","center").css("font-size","40px").css("line-height","24px").css("vertical-align","bottom").html(",<br/>,<br/>,<br/>"),$("#OSoruCokluInput",e).append("<div id='OondaBirler' >"),$("#OondaBirler").css("width","40px"),$("#OondaBirler").css("height","160px"),$("#OondaBirler").css("position","absolute"),$("#OondaBirler").css("top","30px"),$("#OondaBirler").css("left","140px"),$("#OondaBirler").css("margin","auto"),$("#OondaBirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#OondaBirler").css("border-bottom","none"),$("#OondaBirler").css("font-size","medium"),$("#OondaBirler",e).append("<div class='Oyatay'>"),$("#OondaBirler .Oyatay").html("Onda Birler"),$("#OSoruCokluInput #OondaBirler",e).append("<div id='OgirdiOndaBirler' >"),$("#OgirdiOndaBirler").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","53px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #OondaBirler",e).append("<div id='OgirdiOndaBirler1' >"),$("#OgirdiOndaBirler1").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","26px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #OondaBirler",e).append("<div id='OgirdiOndaBirler2' >"),$("#OgirdiOndaBirler2").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput",e).append("<div id='OyuzdeBirler' >"),$("#OyuzdeBirler").css("width","40px"),$("#OyuzdeBirler").css("height","160px"),$("#OyuzdeBirler").css("position","absolute"),$("#OyuzdeBirler").css("top","30px"),$("#OyuzdeBirler").css("left","180px"),$("#OyuzdeBirler").css("margin","auto"),$("#OyuzdeBirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#OyuzdeBirler").css("border-bottom","none"),$("#OyuzdeBirler").css("font-size","medium"),$("#OyuzdeBirler",e).append("<div class='Oyatay'>"),$("#OyuzdeBirler .Oyatay").html("Yüzde Birler"),$("#OSoruCokluInput #OyuzdeBirler",e).append("<div id='OgirdiYuzdeBirler' >"),$("#OgirdiYuzdeBirler").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","53px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #OyuzdeBirler",e).append("<div id='OgirdiYuzdeBirler1' >"),$("#OgirdiYuzdeBirler1").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","26px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #OyuzdeBirler",e).append("<div id='OgirdiYuzdeBirler2' >"),$("#OgirdiYuzdeBirler2").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput",e).append("<div id='ObindeBirler' >"),$("#ObindeBirler").css("width","40px"),$("#ObindeBirler").css("height","160px"),$("#ObindeBirler").css("position","absolute"),$("#ObindeBirler").css("top","30px"),$("#ObindeBirler").css("left","220px"),$("#ObindeBirler").css("margin","auto"),$("#ObindeBirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#ObindeBirler").css("border-bottom","none"),$("#ObindeBirler").css("font-size","medium"),$("#ObindeBirler",e).append("<div class='Oyatay'>"),$("#ObindeBirler .Oyatay").html("Binde Birler"),$("#OSoruCokluInput #ObindeBirler",e).append("<div id='OgirdiBindeBirler' >"),$("#OgirdiBindeBirler").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","53px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #ObindeBirler",e).append("<div id='OgirdiBindeBirler1' >"),$("#OgirdiBindeBirler1").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","26px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$("#OSoruCokluInput #ObindeBirler",e).append("<div id='OgirdiBindeBirler2' >"),$("#OgirdiBindeBirler2").css("width","40px").css("height","25px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center"),$(".OyaziBolukler").css("text-align","center"),$(".OyaziBolukler").css("position","absolute"),$(".OyaziBolukler").css("width","120px"),$(".OyaziBolukler").css("height","14px"),$(".OyaziBolukler").css("top","0"),$(".OyaziBolukler").css("bottom","0"),$(".OyaziBolukler").css("left","0"),$(".OyaziBolukler").css("right","0"),$(".OyaziBolukler").css("margin","auto"),$("input").css("text-align","center").css("border-color",inputStrokeRenk).addClass("input"),$(".Oyatay").css("-webkit-transform","rotate(-90deg)"),$(".Oyatay").css("transform","rotate(-90deg)"),$(".Oyatay").css("-ms-transform","rotate(-90deg)"),$(".Oyatay").css("-moz-transform","rotate(-90deg)"),$(".Oyatay").css("-o-transform","rotate(-90deg)"),$(".Oyatay").css("text-align","left"),$(".Oyatay").css("position","absolute"),$(".Oyatay").css("height","25px"),$(".Oyatay").css("width","150px"),$(".Oyatay").css("bottom","145px"),$(".Oyatay").css("left","-50px"),$(".Oyatay").css("font-size","small"),$(e).append("<p id='_11' class='TekTekSayilar'>9</p>"),$("#_11").css("top","122px").css("right","201px").css("opacity","0"),$(e).append("<p id='_12' class='TekTekSayilar'>9</p>"),$("#_12").css("top","148px").css("right","201px").css("opacity","0"),$(e).append("<p id='_13' class='TekTekSayilar'>9</p>"),$("#_13").css("top","174px").css("right","201px").css("opacity","0"),$(e).append("<p id='_21' class='TekTekSayilar'>0</p>"),$("#_21").css("top","122px").css("right","141px").css("opacity","0"),$(e).append("<p id='_22' class='TekTekSayilar'>0</p>"),$("#_22").css("top","148px").css("right","141px").css("opacity","0"),$(e).append("<p id='_23' class='TekTekSayilar'>4</p>"),$("#_23").css("top","174px").css("right","141px").css("opacity","0"),$(e).append("<p id='_31' class='TekTekSayilar'>0</p>"),$("#_31").css("top","122px").css("right","100px").css("opacity","0"),$(e).append("<p id='_32' class='TekTekSayilar'>4</p>"),$("#_32").css("top","148px").css("right","100px").css("opacity","0"),$(e).append("<p id='_33' class='TekTekSayilar'>0</p>"),$("#_33").css("top","174px").css("right","100px").css("color","red").css("opacity","0"),$(e).append("<p id='_41' class='TekTekSayilar'>4</p>"),$("#_41").css("top","122px").css("right","61px").css("opacity","0"),$(e).append("<p id='_42' class='TekTekSayilar'>0</p>"),$("#_42").css("top","148px").css("right","61px").css("color","red").css("opacity","0"),$(e).append("<p id='_43' class='TekTekSayilar'>0</p>"),$("#_43").css("top","174px").css("right","61px").css("color","red").css("opacity","0"),$(e).append("<p id='_51' class='TekTekSayilar'>0</p>"),$("#_51").css("top","65px").css("left","49px").css("color","red").css("opacity","0"),$(e).append("<p id='_52' class='TekTekSayilar'>0</p>"),$("#_52").css("top","65px").css("left","158px").css("color","red").css("opacity","0"),$(e).append("<p id='_53' class='TekTekSayilar'>0</p>"),$("#_53").css("top","65px").css("left","169px").css("color","red").css("opacity","0"),$(".TekTekSayilar").css("position","absolute").css("font-size","20px"),$("#ornekUst").css("opacity","0"),$("#ornekAlt").css("opacity","0"),$("#ornek").css("opacity","0"),ornekUst=new liste("9,04","9,4","9,004","ornekUst"),ornekUst.doldur(),ornekAlt=new liste("9,004","9,04","9,4","ornekAlt"),ornekAlt.doldur(),$("#ornekUst").delay(1e3).animate({opacity:1},1e3),$("#ornek").delay(2e3).animate({opacity:1},1e3),$("#_11").delay(3e3).animate({opacity:"1"},1e3),$("#_21").delay(4e3).animate({opacity:"1"},1e3),$("#_31").delay(5e3).animate({opacity:"1"},1e3),$("#_41").delay(6e3).animate({opacity:"1"},1e3),$("#_12").delay(8e3).animate({opacity:"1"},1e3),$("#_22").delay(9e3).animate({opacity:"1"},1e3),$("#_32").delay(1e4).animate({opacity:"1"},1e3),$("#_42").delay(11e3).animate({opacity:"1"},1e3),$("#_13").delay(13e3).animate({opacity:"1"},1e3),$("#_23").delay(14e3).animate({opacity:"1"},1e3),$("#_33").delay(15e3).animate({opacity:"1"},1e3),$("#_43").delay(16e3).animate({opacity:"1"},1e3),$("#_51").delay(18e3).animate({opacity:"1"},1e3),$("#_52").delay(19e3).animate({opacity:"1"},1e3),$("#_53").delay(2e4).animate({opacity:"1"},1e3),$("#ornekAlt").delay(21e3).animate({opacity:"1"},1e3),Main.animationFinished(22e3)}},Interaction={getFramework:function(){return"paper"},init:function(e){Interaction.container=e,Main.setObjective("Yandaki ondalık kesirleri sürükleyerek küçükten büyüğe doğru sıralayınız."),Interaction.paper={width:$(e).width(),height:$(e).height()},sayi1=0,sayi2=0,sayi3=0,$(e).append("<div id='soru'>"),$("#soru").css("width","100%").css("height","45px").css("position","absolute").css("left","0").css("top","50px").css("right","0").css("margin","auto"),$(e).append("<div id='cevap'>"),$("#cevap").css("width","100%").css("height","45px").css("position","absolute").css("left","0").css("right","0").css("bottom","100px").css("margin","auto").css("opacity","0"),sayi1=sayiUretim(),sayi2=sayiUretim(),sayi3=sayiUretim(),soru=new liste(sayi1,sayi2,sayi3,"soru"),soru.doldur(),Interaction.appendButton({bottom:"40px",right:"48px"}),Interaction.appendStatus({bottom:"50px",right:"200px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){function t(){$(" #cevap").html("");var e=[sayi1,sayi2,sayi3];e.sort();var t=new liste(e[0],e[1],e[2],"cevap");t.doldur()}$("#cevap").animate({opacity:"0"},1e3),$("#soru").animate({opacity:"1"},1e3),sayi1=sayiUretim(),sayi2=sayiUretim(),sayi3=sayiUretim(),$("li").removeClass("kapali"),$("#soru #siralanacakSayi1").html(sayi1.replace(".",",")),$("#soru #siralanacakSayi2").html(sayi2.replace(".",",")),$("#soru #siralanacakSayi3").html(sayi3.replace(".",",")),setTimeout(t,1e3)},preCheck:function(){},isAnswerCorrect:function(e){siraliListe=[parseFloat(sayi1),parseFloat(sayi2),parseFloat(sayi3)],siraliListe.sort(function(e,t){return t-e}),siraliListe.reverse(),console.log(siraliListe),console.log(typeof siraliListe[0]),$("#cevap #siralanacakSayi1").html(siraliListe[0].toString().replace(".",",")),$("#cevap #siralanacakSayi2").html(siraliListe[1].toString().replace(".",",")),$("#cevap #siralanacakSayi3").html(siraliListe[2].toString().replace(".",","));var t=$("#soru .sayilar:first").html();t=parseFloat(t.replace(",",".")),console.log("ilk: "+t);var n=$("#soru .sayilar:last").html();n=parseFloat(n.replace(",",".")),console.log("sonuncu: "+n);if(t==siraliListe[0]&&n==siraliListe[2])return $("li").addClass("kapali"),!0},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıdadır.",!1),$("#soru").animate({opacity:"0.35"},1e3),$("#cevap").animate({opacity:"1"},1e3),$("li").addClass("kapali")}};
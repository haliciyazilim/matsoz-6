var Animation={init:function(e){$(e).append("<div id='ornek'>"),$("#ornek").css("width","757px").css("height","170px").css("position","absolute").css("left","0").css("top","0").css("right","0").css("bottom","0").css("margin","auto"),$("#ornek",e).append("<div id='OsoruTekliInput'>"),$("#OsoruTekliInput").css("width","310px").css("height","66px").css("margin","auto").css("position","absolute").css("left","30px").css("top","60px").css("font-size","30px").css("float","left"),$("#OsoruTekliInput",e).append("<div id='Okesir'>"),$("#Okesir").css("width","155px").css("height","45px").css("float","left").css("position","relative"),$("#Okesir",e).append("<div id='OkesirPay'>"),$("#OkesirPay").css("text-align","center").css("line-height","35px");var t="347 895";console.log(t.length);for(var n=1;n<=t.length;n++)console.log("fora girdim"),$("#OkesirPay").append("<span id='paySayi"+n+"'>"),$("#OkesirPay #paySayi"+n).html(t.charAt(n-1));$("#Okesir",e).append("<div id='OkesirIsareti'>"),$("#OkesirIsareti").css("position","absolute").css("left","px").css("top","30px").css("width","150px").css("height","1px").css("padding",0).css("border-top","2px solid"),$("#Okesir",e).append("<div id='OkesirPayda'>"),$("#OkesirPayda").css("text-align","center");var r="1000";console.log(r.length);for(var n=1;n<=r.length;n++)console.log("fora girdim"),$("#OkesirPayda").append("<span id='paydaSayi"+n+"'>"),$("#OkesirPayda #paydaSayi"+n).html(r.charAt(n-1));$("#OsoruTekliInput",e).append("<div id='Oesittir'>"),$("#Oesittir").css("height","45px").css("width","40px").css("float","left").css("line-height","62px").css("text-align","center").html("="),$("#OsoruTekliInput",e).append("<div id='Oinput'>"),$("#Oinput").css("height","45px").css("width","60px").css("float","left").css("line-height","62px").css("text-align","center");var i="347,895";console.log(i.length);for(var n=1;n<=i.length;n++)console.log("fora girdim"),$("#OsoruTekliInput #Oinput").append("<span id='ondalikSayi"+n+"'>"),$("#OsoruTekliInput #Oinput #ondalikSayi"+n).html(i.charAt(n-1));$("#ornek",Interaction.container).append("<div id='OSoruCokluInput'>"),$("#OSoruCokluInput").css("width","261px").css("height","180px").css("margin","auto").css("position","absolute").css("right","30px").css("top","-5px").css("font-size","20px").css("border","solid 1px "+tabloStrokeRenk),$("#OSoruCokluInput",e).append("<div id='OtamKisim'>"),$("#OtamKisim").css("width","120px"),$("#OtamKisim").css("height","30px"),$("#OtamKisim").css("position","absolute"),$("#OtamKisim").css("top","0px"),$("#OtamKisim").css("left","0px"),$("#OtamKisim").css("margin","auto").css("border-right","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#OtamKisim").css("font-size","small"),$("#OtamKisim").css("font-weight","bold"),$("#OtamKisim",e).append("<div class='OyaziBolukler'>"),$("#OtamKisim .OyaziBolukler").html("Tam Kısmı"),$("#OSoruCokluInput",e).append("<div id='OkesirKisim'>"),$("#OkesirKisim").css("width","120px"),$("#OkesirKisim").css("height","30px"),$("#OkesirKisim").css("position","absolute"),$("#OkesirKisim").css("top","0px"),$("#OkesirKisim").css("left","140px"),$("#OkesirKisim").css("margin","auto").css("border-left","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#OkesirKisim").css("font-size","small"),$("#OkesirKisim").css("font-weight","bold"),$("#OkesirKisim",e).append("<div class='OyaziBolukler'>"),$("#OkesirKisim .OyaziBolukler").html("Kesir Kısmı"),$("#OSoruCokluInput",e).append("<div id='Oyuzler' >"),$("#Oyuzler").css("width","40px"),$("#Oyuzler").css("height","150px"),$("#Oyuzler").css("position","absolute"),$("#Oyuzler").css("top","30px"),$("#Oyuzler").css("left","0px"),$("#Oyuzler").css("margin","auto").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#Oyuzler").css("border-left","none").css("border-bottom","none"),$("#Oyuzler").css("font-size","medium"),$("#Oyuzler",e).append("<div class='Oyatay'>"),$("#Oyuzler .Oyatay").html("Yüzler"),$("#OSoruCokluInput #Oyuzler",e).append("<div id='OgirdiYuzler' >"),$("#OgirdiYuzler").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","30px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiYuzler'>3</span>"),$("#OSoruCokluInput #Oyuzler",e).append("<div id='OgirdiYuzler1' >"),$("#OgirdiYuzler1").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiYuzlerAlt'>300</span>"),$("#OinputYuzler").css("position","absolute").css("bottom","0").css("left","0").css("right","0").css("top","0").css("margin","auto").css("height","30px").css("width","30px"),$("#OSoruCokluInput",e).append("<div id='Oonlar' >"),$("#Oonlar").css("width","40px"),$("#Oonlar").css("height","150px"),$("#Oonlar").css("position","absolute"),$("#Oonlar").css("top","30px"),$("#Oonlar").css("left","40px"),$("#Oonlar").css("margin","auto").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#Oonlar").css("border-bottom","none"),$("#Oonlar").css("font-size","medium"),$("#Oonlar",e).append("<div class='Oyatay'>"),$("#Oonlar .Oyatay").html("Onlar"),$("#OSoruCokluInput #Oonlar",e).append("<div id='OgirdiOnlar' >"),$("#OgirdiOnlar").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","30px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiOnlar'>4</span>"),$("#OSoruCokluInput #Oonlar",e).append("<div id='OgirdiOnlar1' >"),$("#OgirdiOnlar1").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiOnlarAlt'>40</span>"),$("#OSoruCokluInput",e).append("<div id='Obirler' >"),$("#Obirler").css("width","40px"),$("#Obirler").css("height","150px"),$("#Obirler").css("position","absolute"),$("#Obirler").css("top","30px"),$("#Obirler").css("left","80px"),$("#Obirler").css("margin","auto"),$("#Obirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloMilyonlarFillRenk),$("#Obirler").css("border-bottom","none"),$("#Obirler").css("font-size","medium"),$("#Obirler",e).append("<div class='Oyatay'>"),$("#Obirler .Oyatay").html("Birler"),$("#OSoruCokluInput #Obirler",e).append("<div id='OgirdiBirler' >"),$("#OgirdiBirler").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","30px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiBirler'>7</span>"),$("#OSoruCokluInput #Obirler",e).append("<div id='OgirdiBirler1' >"),$("#OgirdiBirler1").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiBirlerAlt'>7</span>"),$("#OSoruCokluInput",e).append("<div id='Ovirgul' >"),$("#Ovirgul").css("width","20px").css("height","150px").css("position","absolute").css("top","30px").css("left","120px").css("margin","auto").css("border","solid 1px "+tabloStrokeRenk).css("background-color","white").css("border-top","none").css("font-size","medium").css("text-align","center").css("font-size","40px").css("line-height","190px").html(","),$("#OSoruCokluInput",e).append("<div id='OondaBirler' >"),$("#OondaBirler").css("width","40px"),$("#OondaBirler").css("height","150px"),$("#OondaBirler").css("position","absolute"),$("#OondaBirler").css("top","30px"),$("#OondaBirler").css("left","140px"),$("#OondaBirler").css("margin","auto"),$("#OondaBirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#OondaBirler").css("border-bottom","none"),$("#OondaBirler").css("font-size","medium"),$("#OondaBirler",e).append("<div class='Oyatay'>"),$("#OondaBirler .Oyatay").html("Onda Birler"),$("#OSoruCokluInput #OondaBirler",e).append("<div id='OgirdiOndaBirler' >"),$("#OgirdiOndaBirler").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","30px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiOndaBirler'>8</span>"),$("#OSoruCokluInput #OondaBirler",e).append("<div id='OgirdiOndaBirler1' >"),$("#OgirdiOndaBirler1").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiOndaBirlerAlt'>0,8</span>"),$("#OSoruCokluInput",e).append("<div id='OyuzdeBirler' >"),$("#OyuzdeBirler").css("width","40px"),$("#OyuzdeBirler").css("height","150px"),$("#OyuzdeBirler").css("position","absolute"),$("#OyuzdeBirler").css("top","30px"),$("#OyuzdeBirler").css("left","180px"),$("#OyuzdeBirler").css("margin","auto"),$("#OyuzdeBirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#OyuzdeBirler").css("border-bottom","none"),$("#OyuzdeBirler").css("font-size","medium"),$("#OyuzdeBirler",e).append("<div class='Oyatay'>"),$("#OyuzdeBirler .Oyatay").html("Yüzde Birler"),$("#OSoruCokluInput #OyuzdeBirler",e).append("<div id='OgirdiYuzdeBirler' >"),$("#OgirdiYuzdeBirler").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","30px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiYuzdeBirler'>9</span>"),$("#OSoruCokluInput #OyuzdeBirler",e).append("<div id='OgirdiYuzdeBirler1' >"),$("#OgirdiYuzdeBirler1").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiYuzdeBirlerAlt'>0,09</span>"),$("#OSoruCokluInput",e).append("<div id='ObindeBirler' >"),$("#ObindeBirler").css("width","40px"),$("#ObindeBirler").css("height","150px"),$("#ObindeBirler").css("position","absolute"),$("#ObindeBirler").css("top","30px"),$("#ObindeBirler").css("left","220px"),$("#ObindeBirler").css("margin","auto"),$("#ObindeBirler").css("border","solid 1px "+tabloStrokeRenk).css("background-color",tabloBinlerFillRenk),$("#ObindeBirler").css("border-bottom","none"),$("#ObindeBirler").css("font-size","medium"),$("#ObindeBirler",e).append("<div class='Oyatay'>"),$("#ObindeBirler .Oyatay").html("Binde Birler"),$("#OSoruCokluInput #ObindeBirler",e).append("<div id='OgirdiBindeBirler' >"),$("#OgirdiBindeBirler").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","30px").css("left","0px").css("margin","auto").css("border-left","none").css("border-bottom","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiBindeBirler'>5</span>"),$("#OSoruCokluInput #ObindeBirler",e).append("<div id='OgirdiBindeBirler1' >"),$("#OgirdiBindeBirler1").css("width","40px").css("height","30px").css("border","solid 1px "+tabloStrokeRenk).css("position","absolute").css("bottom","0px").css("left","0px").css("margin","auto").css("border-left","none").css("background-color","white").css("line-height","30px").css("text-align","center").html("<span id='sayiBindeBirlerAlt'>0,005</span>"),$(".OyaziBolukler").css("text-align","center"),$(".OyaziBolukler").css("position","absolute"),$(".OyaziBolukler").css("width","120px"),$(".OyaziBolukler").css("height","14px"),$(".OyaziBolukler").css("top","0"),$(".OyaziBolukler").css("bottom","0"),$(".OyaziBolukler").css("left","0"),$(".OyaziBolukler").css("right","0"),$(".OyaziBolukler").css("margin","auto"),$("input").css("text-align","center").css("border-color",inputStrokeRenk).addClass("input"),$(".Oyatay").css("-webkit-transform","rotate(-90deg)"),$(".Oyatay").css("transform","rotate(-90deg)"),$(".Oyatay").css("-ms-transform","rotate(-90deg)"),$(".Oyatay").css("-moz-transform","rotate(-90deg)"),$(".Oyatay").css("-o-transform","rotate(-90deg)"),$(".Oyatay").css("text-align","left"),$(".Oyatay").css("position","absolute"),$(".Oyatay").css("height","30px"),$(".Oyatay").css("width","150px"),$(".Oyatay").css("bottom","130px"),$(".Oyatay").css("left","-50px"),$(".Oyatay").css("font-size","small");var s=0,o=500;for(var n=1;n<=t.length;n++)$("#paySayi"+n).css("opacity","0").delay(o*n).animate({opacity:"1"},500);s+=o*t.length,console.log("sayac: "+s),$("#OkesirIsareti").css("opacity","0").delay(s+o).animate({opacity:"1"},500),s+=o;for(var n=1;n<=r.length;n++)$("#paydaSayi"+n).css("opacity","0").delay(s+o*n).animate({opacity:"1"},500);s+=o*r.length,console.log("sayac: "+s),$("#Oesittir").css("opacity","0").delay(s+o).animate({opacity:"1"},500),s+=o;for(var n=1;n<=i.length;n++)$("#ondalikSayi"+n).css("opacity","0").delay(s+o*n).animate({opacity:"1"},500);s+=o*i.length,$("#OSoruCokluInput").css("opacity","0").delay(s+o+500).animate({opacity:"1"},1e3),s+=o+500;var u=["sayiYuzler","sayiYuzlerAlt","sayiOnlar","sayiOnlarAlt","sayiBirler","sayiBirlerAlt","sayiOndaBirler","sayiOndaBirlerAlt","sayiYuzdeBirler","sayiYuzdeBirlerAlt","sayiBindeBirler","sayiBindeBirlerAlt"];for(var n=0;n<u.length;n++)console.log("ondalik For"),$("#"+u[n]).css("opacity","0").delay(s+o*n).animate({opacity:"1"},500);Main.animationFinished(17e3)}};
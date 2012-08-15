

var sayilarStrokeRenk="#9bd1d9";
var sayilarFillRenk="#f2fafc";
var tabloStrokeRenk="#255b63";
var tabloBirlerFillRenk="#ecf8fa";
var tabloBinlerFillRenk="#d9f1f5";
var tabloMilyonlarFillRenk="#bfe8ef";
var inputStrokeRenk="#9bd1d9";

var Animation = {
	init:function(container){
		
		
		$(container).append("<div id='ornek'>");
			$("#ornek").css("width","757px")
			.css("height","170px")
			.css("position","absolute")
			.css("left","0")
			.css("top","0")
			.css("right","0")
			.css("bottom","0")
			.css("margin","auto");
			
		
			// Ana Div
		$("#ornek",container).append("<div id='OsoruTekliInput'>");
			$("#OsoruTekliInput").css("width","310px")
			.css("height","66px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","30px")
			.css("top","60px")
			.css("font-size","30px")
			.css("float","left");
			//.css("border","solid 1px black");
			
		$("#OsoruTekliInput",container).append("<div id='Okesir'>");
		$("#Okesir")
			.css("width", "155px")
			.css("height", "45px")
			.css("float","left")
			.css("position","relative")
			/*.css("position","absolute")
			.css("left", "0px")
			.css("top", "0px")
			.css("padding", 0)
			.css("border", "2px solid");*/
		
		$("#Okesir",container).append("<div id='OkesirPay'>");
		$("#OkesirPay").css("text-align","center").css("line-height","35px");
		//$("#OkesirPay").html("347 895").css("line-height","35px");
		var paySayi="347 895";
		console.log(paySayi.length);
		for(var i=1; i<=paySayi.length;i++){
			console.log("fora girdim");
			$("#OkesirPay").append("<span id='paySayi"+i+"'>");
			$("#OkesirPay #paySayi"+i).html(paySayi.charAt(i-1));
		}
		
		$("#Okesir",container).append("<div id='OkesirIsareti'>");
		$('#OkesirIsareti').css("position","absolute")
				.css("left", "px")
				.css("top", "30px")
				.css("width", "150px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
			
		$("#Okesir",container).append("<div id='OkesirPayda'>");
		$("#OkesirPayda").css("text-align","center");
		
		var paydaSayi="1000";
		console.log(paydaSayi.length);
		for(var i=1; i<=paydaSayi.length;i++){
			console.log("fora girdim");
			$("#OkesirPayda").append("<span id='paydaSayi"+i+"'>");
			$("#OkesirPayda #paydaSayi"+i).html(paydaSayi.charAt(i-1));
		}
		
		$("#OsoruTekliInput",container).append("<div id='Oesittir'>");

		$("#Oesittir")
			.css("height", "45px")
			.css("width","40px")
			.css("float","left")
			.css("line-height","62px")
			.css("text-align","center")
			.html("=");
		
	
		$("#OsoruTekliInput",container).append("<div id='Oinput'>");

		$("#Oinput")
			.css("height", "45px")
			.css("width","60px")
			.css("float","left")
			.css("line-height","62px")
			.css("text-align","center");
	
		//$("#OsoruTekliInput #Oinput",container).append("347,895");
		var ondalikSayi="347,895";
		console.log(ondalikSayi.length);
		for(var i=1; i<=ondalikSayi.length;i++){
			console.log("fora girdim");
			$("#OsoruTekliInput #Oinput").append("<span id='ondalikSayi"+i+"'>");
			$("#OsoruTekliInput #Oinput #ondalikSayi"+i).html(ondalikSayi.charAt(i-1));
		}
		
			// cok inputlu
		$("#ornek", Interaction.container).append("<div id='OSoruCokluInput'>");
			$("#OSoruCokluInput").css("width","261px")
			.css("height","180px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("right","30px")
//			.css("right","0")
			.css("top","-5px")
			.css("font-size","20px")
			.css("border","solid 1px "+tabloStrokeRenk);
		
		// Tam Kısım
	$("#OSoruCokluInput",container).append("<div id='OtamKisim'>");
		$("#OtamKisim").css("width","120px");
		$("#OtamKisim").css("height","30px");
		$("#OtamKisim").css("position","absolute");
		$("#OtamKisim").css("top","0px");
		$("#OtamKisim").css("left","0px");
		$("#OtamKisim").css("margin","auto")
			.css("border-right","solid 1px "+tabloStrokeRenk)
			.css("background-color",tabloMilyonlarFillRenk)
		$("#OtamKisim").css("font-size","small");
		$("#OtamKisim").css("font-weight","bold");
		
	$("#OtamKisim", container).append("<div class='OyaziBolukler'>");
	$("#OtamKisim .OyaziBolukler").html("Tam Kısmı");
		
		// Kesir kısım
		$("#OSoruCokluInput",container).append("<div id='OkesirKisim'>");
		$("#OkesirKisim").css("width","120px");
		$("#OkesirKisim").css("height","30px");
		$("#OkesirKisim").css("position","absolute");
		$("#OkesirKisim").css("top","0px");
		$("#OkesirKisim").css("left","140px");
		//$("#milyonlarYuz").css("right","0");
		$("#OkesirKisim").css("margin","auto")
			.css("border-left","solid 1px "+tabloStrokeRenk)
			.css("background-color",tabloBinlerFillRenk)
		$("#OkesirKisim").css("font-size","small");
		$("#OkesirKisim").css("font-weight","bold");
		
	$("#OkesirKisim", container).append("<div class='OyaziBolukler'>");
		$("#OkesirKisim .OyaziBolukler").html("Kesir Kısmı");	
		
		// basamaklar baslık
	/*$("#OtamKisim",container).append("<div id='ObasamaklarBaslik' >");
	
		$("#ObasamaklarBaslik").css("width","31px")
			.css("height","89px")
			.css("position","absolute")
			.css("top","30px")
			.css("left","-32px")
			.css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("background-color", tabloMilyonlarFillRenk)
			.css("border-right","none").css("border-left","none")
			.css("font-size","small").css("font-weight","bold");
		
		$("#ObasamaklarBaslik",container).append("<div class='OyatayBaslik'>");
		$("#ObasamaklarBaslik .OyatayBaslik").html("Basamaklar")
			.css("-webkit-transform","rotate(-90deg)")
			.css("transform","rotate(-90deg)")
			.css("-ms-transform","rotate(-90deg)")
			.css("-moz-transform","rotate(-90deg)")
			.css("-o-transform","rotate(-90deg)")
			.css("text-align","left")
			.css("position","absolute")
			.css("height","30px")
			.css("width","150px")
			.css("bottom","70px")
			.css("left","-53px")
			.css("font-size","small");*/
		
			// 
	$("#OSoruCokluInput",container).append("<div id='Oyuzler' >");
	
		$("#Oyuzler").css("width","40px");
		$("#Oyuzler").css("height","150px");
		$("#Oyuzler").css("position","absolute");
		$("#Oyuzler").css("top","30px");
		$("#Oyuzler").css("left","0px");
		//$("#milyonlarYuz").css("right","0");
		$("#Oyuzler").css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("background-color", tabloMilyonlarFillRenk)
		$("#Oyuzler").css("border-left","none").css("border-bottom","none");
		$("#Oyuzler").css("font-size","medium");
		
		$("#Oyuzler",container).append("<div class='Oyatay'>");
		$("#Oyuzler .Oyatay").html("Yüzler");
		
		$("#OSoruCokluInput #Oyuzler",container).append("<div id='OgirdiYuzler' >");
		$("#OgirdiYuzler").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","30px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiYuzler'>3</span>");
		
		$("#OSoruCokluInput #Oyuzler",container).append("<div id='OgirdiYuzler1' >");
		$("#OgirdiYuzler1").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiYuzlerAlt'>300</span>");
			//.css("font-size","medium").html("ok");
		
		
				/*else if (this.amac=="soru"){
			$("#girdiYuzler",container).append(yuzler);
		
		}
			*/
			
		
		$("#OinputYuzler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
			
		// onlar
	$("#OSoruCokluInput",container).append("<div id='Oonlar' >");
		$("#Oonlar").css("width","40px");
		$("#Oonlar").css("height","150px");
		$("#Oonlar").css("position","absolute");
		$("#Oonlar").css("top","30px");
		$("#Oonlar").css("left","40px");
		//$("#milyonlarYuz").css("right","0");
		$("#Oonlar").css("margin","auto")
		.css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloMilyonlarFillRenk);
		$("#Oonlar").css("border-bottom","none");
		$("#Oonlar").css("font-size","medium");
		
		$("#Oonlar",container).append("<div class='Oyatay'>");
		$("#Oonlar .Oyatay").html("Onlar");
		
		
	$("#OSoruCokluInput #Oonlar",container).append("<div id='OgirdiOnlar' >");
		$("#OgirdiOnlar").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","30px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiOnlar'>4</span>");
			
		$("#OSoruCokluInput #Oonlar",container).append("<div id='OgirdiOnlar1' >");
		$("#OgirdiOnlar1").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiOnlarAlt'>40</span>");
	
	
		// birler
	$("#OSoruCokluInput",container).append("<div id='Obirler' >");
		$("#Obirler").css("width","40px");
		$("#Obirler").css("height","150px");
		$("#Obirler").css("position","absolute");
		$("#Obirler").css("top","30px");
		$("#Obirler").css("left","80px");
		//$("#milyonlarYuz").css("right","0");
		$("#Obirler").css("margin","auto");
		$("#Obirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloMilyonlarFillRenk);
		$("#Obirler").css("border-bottom","none");
		$("#Obirler").css("font-size","medium");
		
		$("#Obirler",container).append("<div class='Oyatay'>");
		$("#Obirler .Oyatay").html("Birler");
		
		$("#OSoruCokluInput #Obirler",container).append("<div id='OgirdiBirler' >");
		$("#OgirdiBirler").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","30px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiBirler'>7</span>");
		
		$("#OSoruCokluInput #Obirler",container).append("<div id='OgirdiBirler1' >");
		$("#OgirdiBirler1").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiBirlerAlt'>7</span>");
			
		// Virgül
		
		$("#OSoruCokluInput",container).append("<div id='Ovirgul' >");
		$("#Ovirgul").css("width","20px")
			.css("height","150px")
			.css("position","absolute")
			.css("top","30px")
			.css("left","120px")
			.css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("background-color", "white")
			.css("border-top","none")
			.css("font-size","medium")
			.css("text-align","center")
			.css("font-size","40px")
			.css("line-height","190px")
			.html(",");

		
		// Kesir kısmı yatayşarı
		
		// Onda birler
	$("#OSoruCokluInput",container).append("<div id='OondaBirler' >");
		$("#OondaBirler").css("width","40px");
		$("#OondaBirler").css("height","150px");
		$("#OondaBirler").css("position","absolute");
		$("#OondaBirler").css("top","30px");
		$("#OondaBirler").css("left","140px");
		//$("#milyonlarYuz").css("right","0");
		$("#OondaBirler").css("margin","auto");
		$("#OondaBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#OondaBirler").css("border-bottom","none");
		$("#OondaBirler").css("font-size","medium");

		$("#OondaBirler",container).append("<div class='Oyatay'>");
		$("#OondaBirler .Oyatay").html("Onda Birler");
		
		$("#OSoruCokluInput #OondaBirler",container).append("<div id='OgirdiOndaBirler' >");
		$("#OgirdiOndaBirler").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","30px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiOndaBirler'>8</span>");
			
			$("#OSoruCokluInput #OondaBirler",container).append("<div id='OgirdiOndaBirler1' >");
		$("#OgirdiOndaBirler1").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiOndaBirlerAlt'>0,8</span>");
		
	
		
		// Yüzde birler
	$("#OSoruCokluInput",container).append("<div id='OyuzdeBirler' >");
		$("#OyuzdeBirler").css("width","40px");
		$("#OyuzdeBirler").css("height","150px");
		$("#OyuzdeBirler").css("position","absolute");
		$("#OyuzdeBirler").css("top","30px");
		$("#OyuzdeBirler").css("left","180px");
		//$("#milyonlarYuz").css("right","0");
		$("#OyuzdeBirler").css("margin","auto");
		$("#OyuzdeBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#OyuzdeBirler").css("border-bottom","none");
		$("#OyuzdeBirler").css("font-size","medium");
		
		$("#OyuzdeBirler",container).append("<div class='Oyatay'>");
		$("#OyuzdeBirler .Oyatay").html("Yüzde Birler");
		
		$("#OSoruCokluInput #OyuzdeBirler",container).append("<div id='OgirdiYuzdeBirler' >");
		$("#OgirdiYuzdeBirler").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("position","absolute")
			.css("bottom","30px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiYuzdeBirler'>9</span>");
			
		$("#OSoruCokluInput #OyuzdeBirler",container).append("<div id='OgirdiYuzdeBirler1' >");
		$("#OgirdiYuzdeBirler1").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiYuzdeBirlerAlt'>0,09</span>");
			
		
		// Binde Birler
	$("#OSoruCokluInput",container).append("<div id='ObindeBirler' >");
		$("#ObindeBirler").css("width","40px");
		$("#ObindeBirler").css("height","150px");
		$("#ObindeBirler").css("position","absolute");
		$("#ObindeBirler").css("top","30px");
		$("#ObindeBirler").css("left","220px");
		//$("#milyonlarYuz").css("right","0");
		$("#ObindeBirler").css("margin","auto");
		$("#ObindeBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#ObindeBirler").css("border-bottom","none");
		$("#ObindeBirler").css("font-size","medium");
		
		$("#ObindeBirler",container).append("<div class='Oyatay'>");
		$("#ObindeBirler .Oyatay").html("Binde Birler");
		
		
		$("#OSoruCokluInput #ObindeBirler",container).append("<div id='OgirdiBindeBirler' >");
		$("#OgirdiBindeBirler").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			
			.css("position","absolute")
			.css("bottom","30px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiBindeBirler'>5</span>");
		
		$("#OSoruCokluInput #ObindeBirler",container).append("<div id='OgirdiBindeBirler1' >");
		$("#OgirdiBindeBirler1").css("width","40px")
			.css("height","30px")
			.css("border","solid 1px "+tabloStrokeRenk)
			
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center")
			.html("<span id='sayiBindeBirlerAlt'>0,005</span>");
			
		
		$(".OyaziBolukler").css("text-align","center");
		$(".OyaziBolukler").css("position","absolute");
		$(".OyaziBolukler").css("width","120px");
		$(".OyaziBolukler").css("height","14px");
		//$(".yazi").css("height","210px");
		$(".OyaziBolukler").css("top","0");
		$(".OyaziBolukler").css("bottom","0");
		$(".OyaziBolukler").css("left","0");
		$(".OyaziBolukler").css("right","0");
		$(".OyaziBolukler").css("margin","auto");	
		
		$("input")
		.css("text-align","center")
		.css("border-color",inputStrokeRenk)
		.addClass("input");
			
		$(".Oyatay").css("-webkit-transform","rotate(-90deg)");
		$(".Oyatay").css("transform","rotate(-90deg)");
		$(".Oyatay").css("-ms-transform","rotate(-90deg)");
		$(".Oyatay").css("-moz-transform","rotate(-90deg)");
		$(".Oyatay").css("-o-transform","rotate(-90deg)");
		
		
		//$("#yuzler .yazi").css("-writing-mode","tb-rl");
		//-webkit-transform:rotate(-90deg);
		$(".Oyatay").css("text-align","left");
		$(".Oyatay").css("position","absolute");
		$(".Oyatay").css("height","30px");
		$(".Oyatay").css("width","150px");
		$(".Oyatay").css("bottom","130px");
		$(".Oyatay").css("left","-50px");
		//$("#yatay").css("right","200px");
		//$("#yatay").css("margin","auto");
		$(".Oyatay").css("font-size","small");
		
		/*$("#Okesir").css("opacity","0").delay(1000).animate({opacity:"1"},1000);
		$("#Oesittir").css("opacity","0").delay(2000).animate({opacity:"1"},1000);
		$("#Oinput").css("opacity","0").delay(3000).animate({opacity:"1"},1000);
		$("#OSoruCokluInput").css("opacity","0").delay(4000).animate({opacity:"1"},1000);*/
		var sayac=0;
		var hiz=500
		for(var i=1; i<=paySayi.length;i++)
			$("#paySayi"+i).css("opacity","0").delay(hiz*i).animate({opacity:"1"},500);

		sayac+=hiz*paySayi.length;
		console.log("sayac: "+sayac)
		
		$('#OkesirIsareti').css("opacity","0").delay(sayac+hiz).animate({opacity:"1"},500);
		sayac+=hiz;
		for(var i=1; i<=paydaSayi.length;i++)
			$("#paydaSayi"+i).css("opacity","0").delay(sayac+hiz*i).animate({opacity:"1"},500);

		sayac+=hiz*paydaSayi.length;
		console.log("sayac: "+sayac)
		
		$('#Oesittir').css("opacity","0").delay(sayac+hiz).animate({opacity:"1"},500);
		sayac+=hiz;
		
		for(var i=1; i<=ondalikSayi.length;i++)
			$("#ondalikSayi"+i).css("opacity","0").delay(sayac+hiz*i).animate({opacity:"1"},500);
		sayac+=hiz*ondalikSayi.length;
		
		$('#OSoruCokluInput').css("opacity","0").delay(sayac+hiz+500).animate({opacity:"1"},1000);
		sayac+=hiz+500;
		
		var basamaklar=["sayiYuzler","sayiYuzlerAlt","sayiOnlar","sayiOnlarAlt","sayiBirler","sayiBirlerAlt","sayiOndaBirler","sayiOndaBirlerAlt","sayiYuzdeBirler","sayiYuzdeBirlerAlt","sayiBindeBirler","sayiBindeBirlerAlt",];
		for(var i=0; i<basamaklar.length;i++){
			console.log("ondalik For");
			$("#"+basamaklar[i]).css("opacity","0").delay(sayac+hiz*i).animate({opacity:"1"},500);
		}
		Main.animationFinished(17000);	
                //Main.animationFinished(1000);	
		
	}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki kesri ondalık kesre çeviriniz ve tabloya yerleştiriniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			$(container).append("<div id='soru'>");
			$("#soru").css("width","590px")
			.css("height","300px")
			.css("position","absolute")
			.css("left","0")
			.css("top","0")
			.css("right","0")
			.css("bottom","0")
			.css("margin","auto");
			pay=0,payda=0, sonuc=0;
			sayiUret=function (deger){
				var rastgeleSayi=Math.floor(Math.random()*999998+1); 
				switch(deger){
					
					case 1:
						// sadece 1000'e bölünebilir.
						pay=rastgeleSayi;
						payda=1000;
						
						break;
					case 2:
						// 1000, 100 ve 10'a bölünebilir.
						pay=Math.floor(rastgeleSayi/10); 
						payda=Math.pow(10,Math.floor(Math.random()*2+2));
						
						break;
					case 3:
						// Sadece 10'a bölübebilir.
						pay=Math.floor(rastgeleSayi/100);
						payda=10;
						break;
				}
				return true;
					
			}
			 
			 etkilesimObjesi=new etkilesim("soru");
			 etkilesimObjesi.doldur();
			
			
			
			Interaction.appendButton({bottom:"40px", right:"48px"});
			Interaction.appendStatus({bottom:"50px", right:"200px"});
			
			
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
		
		sayiUret(2);
		$("#kesirPay").html(format(pay, {point:","}));
		$("#kesirPayda").html(payda);
		$("input").css("color","black");
                $("input").html("");
		
		
	
		},
	preCheck: function(){
		console.log("denetime giriyor");
		console.log("inputs.length: "+Interaction.inputs.length);
		
		var bosSayisi=0
		for(i=0; i<Interaction.inputs.length;i++){
			if(Interaction.inputs[i].value==""){
				bosSayisi++;

			}
		}
		/*	
		if(bosSayisi==7){
			console.log("if denetim"+bosSayisi);
			Interaction.setStatus('Lüften bütün kutucukları doldurun.',false);
			return false
		}
		
		else{
			if(Interaction.inputs[0]==""){
				console.log("girdsm");
				Interaction.setStatus('Lüften ondalık kısmı doldurun.',false);
			}
			else{
			console.log("if else denetim"+bosSayisi);
			return true;
			}
		}*/
		
		
		if(bosSayisi==7){
			console.log("if denetim"+bosSayisi);
			Interaction.setStatus('Lüften bütün kutucukları doldurun.',false);
			return false	
		}
		if(Interaction.inputs[0].value==""){
				console.log("girdsm");
				Interaction.setStatus('Lüften ondalık kısmı doldurun.',false);
				return false;
		}
		
		else{
			var sayac=0;
			for(var i=1; i<Interaction.inputs.length;i++){
				console.log("xxxxxxxxxxxxxxxxxxxxxxxxx");
				if(Interaction.inputs[i].value!=""){
					break;
				}
				else
					sayac++;
			}
                        console.log("sayac"+sayac);
			if(Interaction.inputs[0].value!="" && sayac==6){
				Interaction.setStatus('Lüften kesir kısmını doldurun.',false);
				return false;
			}
			else
				return true;
		}
			
		},
	isAnswerCorrect : function(values){
		Interaction.sonuc=pay/payda;
		Interaction.yanlis="";
                console.log("else");
		var girdilerdenGelen="";
		for(var i=1; i<values.length;i++){
		girdilerdenGelen+=values[i];
		if(i==3)
                    girdilerdenGelen+=".";
                }
		
                console.log("Girdi Gelen: "+girdilerdenGelen);
                 console.log("Girdi Gelen: "+parseFloat(girdilerdenGelen,10));
                console.log("Girdi Gelen: "+format(parseFloat(girdilerdenGelen,10), {group:"", places:3}));
                console.log("sonuc: "+format(Interaction.sonuc, {group:"", places:3}));
                if(parseInt(format(Interaction.sonuc, {group:"", places:3}))==parseInt(values) && format((girdilerdenGelen), {group:"", places:3})==format(Interaction.sonuc, {group:"", places:3}))
                    return true
                else if(parseInt(format(Interaction.sonuc, {group:"", places:3}))!=parseInt(values) && format(girdilerdenGelen, {group:"", places:3})!=format(Interaction.sonuc, {group:"", places:3}))
                    return false
                else{
                    if(parseInt(format(Interaction.sonuc, {group:"", places:3}))!=parseInt(values))
                        Interaction.yanlis="ondalik";
                    else if(format(girdilerdenGelen, {group:"", places:3})!=format(Interaction.sonuc, {group:"", places:3}))
                        Interaction.yanlis="tablo";
                }   
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		 
                     
                     
		
		},
	onFail : function(){
            var sonucStr=Interaction.sonuc.toString().replace(".",",");
            
            if(Interaction.yanlis=="ondalik"){
                Interaction.setStatus('Ondalık kısımdaki cevap yanlış, doğrusu <strong id="dCevap">'+sonucStr+' </strong>şeklinde olacaktı.',false);
                $("input").css("color","green");
                $(Interaction.inputs[0]).css("color","red");
            }
            else if(Interaction.yanlis=="tablo"){
                Interaction.setStatus('Tablodaki cevap yanlış, doğrusu <strong id="dCevap">'+sonucStr+' </strong>şeklinde olacaktı.',false);
                 $("input").css("color","red");
                $(Interaction.inputs[0]).css("color","green");
            }
            else{
                Interaction.setStatus('Yanlış cevap, doğrusu <strong id="dCevap">'+sonucStr+' </strong>şeklinde olacaktı.',false);
		$("input").css("color","red");
            }
 
            $("#dCevap").css("color","green");
		},
}


var etkilesim=function(amac){
	this.amac=amac;
	this.anadiv="#"+amac;
	this.doldur=function(){
		
			// Ana Div
		$(this.anadiv,Interaction.container).append("<div id='soruTekliInput'>");
			$("#soruTekliInput").css("width","200px")
			.css("height","50px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","30px")
			.css("top","90px")
			.css("font-size","20px")
			.css("float","left");
			//.css("border","solid 1px black");
			
		$("#soruTekliInput",Interaction.container).append("<div id='kesir'>");
		$("#kesir")
			.css("width", "90px")
			.css("height", "45px")
			.css("float","left")
			.css("position","relative")
			/*.css("position","absolute")
			.css("left", "0px")
			.css("top", "0px")
			.css("padding", 0)
			.css("border", "2px solid");*/
		
		$("#kesir",container).append("<div id='kesirPay'>");
		$("#kesirPay").css("text-align","center");
		if (this.amac=="ornek")
			$("#kesirPay").html("347 895").css("line-height","24px");	
		else if (this.amac=="soru")
			$("#kesirPay").html(format(pay, {places:3})).css("line-height","24px");
		
		$("#kesir",container).append("<div id='kesirIsareti'>");
		$('#kesirIsareti').css("position","absolute")
				.css("left", "px")
				.css("top", "22px")
				.css("width", "90px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
			
		$("#kesir",container).append("<div id='kesirPayda'>");
		
		if (this.amac=="ornek")
			$("#kesir #kesirPayda",container).append("1000");
		else if (this.amac=="soru")
			$("#kesir #kesirPayda",container).append(payda);
		$("#kesirPayda").css("text-align","center");
		
		$("#soruTekliInput",Interaction.container).append("<div id='esittir'>");

		$("#esittir")
			.css("height", "45px")
			.css("width","20px")
			.css("float","left")
			.css("line-height","45px")
			.css("text-align","center")
			.html("=");
		
	
		$("#soruTekliInput",Interaction.container).append("<div id='input'>");

		$("#input")
			.css("height", "45px")
			.css("width","60px")
			.css("float","left")
			.css("line-height","45px")
			.css("text-align","center")
			.css("padding-top","6px");
	
			if (this.amac=="soru"){		
				var girdi=Interaction.appendInput({
					width:"80px",
					fontSize:"20px",
					},true,true);
				$(Interaction.inputs[0]).attr('maxlength', '7')
				$("#soruTekliInput #input",Interaction.container).append(girdi);
			}
			else if (this.amac=="ornek")
				$("#soruTekliInput #input",Interaction.container).append("347,895");
			
			// cok inputlu
		$(this.anadiv, Interaction.container).append("<div id='SoruCokluInput'>");
			$("#SoruCokluInput").css("width","261px")
			.css("height","180px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("right","48px")
//			.css("right","0")
			.css("top","10px")
			.css("font-size","20px")
			.css("border","solid 1px "+tabloStrokeRenk);
			
			
			
			// Tam Kısım
	$("#SoruCokluInput",container).append("<div id=tamKisim>");
		$("#tamKisim").css("width","140px");
		$("#tamKisim").css("height","30px");
		$("#tamKisim").css("position","absolute");
		$("#tamKisim").css("top","0px");
		$("#tamKisim").css("left","0px");
		$("#tamKisim").css("margin","auto")
			.css("border-right","solid 1px "+tabloStrokeRenk)
			.css("background-color",tabloMilyonlarFillRenk)
		$("#tamKisim").css("font-size","small");
		$("#tamKisim").css("font-weight","bold");
		
	$("#tamKisim", container).append("<div class='yaziBolukler'>");
	$("#tamKisim .yaziBolukler").html("Tam Kısmı");
		
		// Kesir kısım
		$("#SoruCokluInput",container).append("<div id=kesirKisim>");
		$("#kesirKisim").css("width","120px");
		$("#kesirKisim").css("height","30px");
		$("#kesirKisim").css("position","absolute");
		$("#kesirKisim").css("top","0px");
		$("#kesirKisim").css("left","140px");
		//$("#milyonlarYuz").css("right","0");
		$("#kesirKisim").css("margin","auto")
			.css("border-left","solid 1px "+tabloStrokeRenk)
			.css("background-color",tabloBinlerFillRenk)
		$("#kesirKisim").css("font-size","small");
		$("#kesirKisim").css("font-weight","bold");
		
	$("#kesirKisim", container).append("<div class='yaziBolukler'>");
		$("#kesirKisim .yaziBolukler").html("Kesir Kısmı");	
		
		// basamaklar baslık
	/*$("#tamKisim",container).append("<div id='basamaklarBaslik' >");
	
		$("#basamaklarBaslik").css("width","31px")
			.css("height","108px")
			.css("position","absolute")
			.css("top","30px")
			.css("left","-32px")
			.css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("background-color", tabloMilyonlarFillRenk)
			.css("border-right","none").css("border-left","none")
			.css("font-size","small").css("font-weight","bold");
		
		$("#basamaklarBaslik",container).append("<div class='yatayBaslik'>");
		$("#basamaklarBaslik .yatayBaslik").html("Basamaklar")
			.css("-webkit-transform","rotate(-90deg)")
			.css("transform","rotate(-90deg)")
			.css("-ms-transform","rotate(-90deg)")
			.css("-moz-transform","rotate(-90deg)")
			.css("-o-transform","rotate(-90deg)")
			.css("text-align","left")
			.css("position","absolute")
			.css("height","30px")
			.css("width","150px")
			.css("bottom","70px")
			.css("left","-53px")
			.css("font-size","small");*/
		
			// 
	$("#SoruCokluInput",container).append("<div id='yuzler' >");
	
		$("#yuzler").css("width","40px");
		$("#yuzler").css("height","150px");
		$("#yuzler").css("position","absolute");
		$("#yuzler").css("top","30px");
		$("#yuzler").css("left","0px");
		//$("#milyonlarYuz").css("right","0");
		$("#yuzler").css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("background-color", tabloMilyonlarFillRenk)
		$("#yuzler").css("border-left","none").css("border-bottom","none");
		$("#yuzler").css("font-size","medium");
		
		$("#yuzler",container).append("<div class='yatay'>");
		$("#yuzler .yatay").html("Yüzler");
		
		$("#SoruCokluInput #yuzler",container).append("<div id='girdiYuzler' >");
		$("#girdiYuzler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
		
		if (this.amac=="soru"){	
		var yuzler=Interaction.appendInput({},true,true);
			$(Interaction.inputs[1]).attr('maxlength', '1').attr("id","inputYuzler");
			$("#girdiYuzler",container).append(yuzler);
		}
		/*else if (this.amac=="soru"){
			$("#girdiYuzler",container).append(yuzler);
		
		}
			*/
			
		
		$("#inputYuzler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
			
		// onlar
	$("#SoruCokluInput",container).append("<div id='onlar' >");
		$("#onlar").css("width","40px");
		$("#onlar").css("height","150px");
		$("#onlar").css("position","absolute");
		$("#onlar").css("top","30px");
		$("#onlar").css("left","40px");
		//$("#milyonlarYuz").css("right","0");
		$("#onlar").css("margin","auto")
		.css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloMilyonlarFillRenk);
		$("#onlar").css("border-bottom","none");
		$("#onlar").css("font-size","medium");
		
		$("#onlar",container).append("<div class='yatay'>");
		$("#onlar .yatay").html("Onlar");
		
		
	$("#SoruCokluInput #onlar",container).append("<div id='girdiOnlar' >");
		$("#girdiOnlar").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	if (this.amac=="soru"){		
		var onlar=Interaction.appendInput({},true,true);
		$(Interaction.inputs[2]).attr('maxlength', '1').attr("id","inputOnlar");
		$("#girdiOnlar",container).append(onlar);
	}
	
	
		$("#inputOnlar")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
	
	
		// birler
	$("#SoruCokluInput",container).append("<div id='birler' >");
		$("#birler").css("width","40px");
		$("#birler").css("height","150px");
		$("#birler").css("position","absolute");
		$("#birler").css("top","30px");
		$("#birler").css("left","80px");
		//$("#milyonlarYuz").css("right","0");
		$("#birler").css("margin","auto");
		$("#birler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloMilyonlarFillRenk);
		$("#birler").css("border-bottom","none");
		$("#birler").css("font-size","medium");
		
		$("#birler",container).append("<div class='yatay'>");
		$("#birler .yatay").html("Birler");
		
		$("#SoruCokluInput #birler",container).append("<div id='girdiBirler' >");
		$("#girdiBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	if (this.amac=="soru"){	
		var birler=Interaction.appendInput({},true,true);
		$(Interaction.inputs[3]).attr('maxlength', '1').attr("id","inputBirler");
		$("#girdiBirler",container).append(birler);
	}
		$("#inputBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
			
		// Virgül
		
		$("#SoruCokluInput",container).append("<div id='virgul' >");
		$("#virgul").css("width","20px")
			.css("height","180px")
			.css("position","absolute")
			.css("top","0px")
			.css("left","120px")
			.css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("background-color", "white")
			.css("border-top","none")
			.css("font-size","medium")
			.css("text-align","center")
			.css("font-size","40px")
			.css("line-height","310px")
			.html(",");

		
		// Kesir kısmı yatayşarı
		
		// Onda birler
	$("#SoruCokluInput",container).append("<div id='ondaBirler' >");
		$("#ondaBirler").css("width","40px");
		$("#ondaBirler").css("height","150px");
		$("#ondaBirler").css("position","absolute");
		$("#ondaBirler").css("top","30px");
		$("#ondaBirler").css("left","141px");
		//$("#milyonlarYuz").css("right","0");
		$("#ondaBirler").css("margin","auto");
		$("#ondaBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#ondaBirler").css("border-bottom","none");
		$("#ondaBirler").css("font-size","medium");

		$("#ondaBirler",container).append("<div class='yatay'>");
		$("#ondaBirler .yatay").html("Onda Birler");
		
		$("#SoruCokluInput #ondaBirler",container).append("<div id='girdiOndaBirler' >");
		$("#girdiOndaBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	if (this.amac=="soru"){		
		var ondaBirler=Interaction.appendInput({},true,true);
		$(Interaction.inputs[4]).attr('maxlength', '1').attr("id","inputOndaBirler");
		$("#girdiOndaBirler",container).append(ondaBirler);
	}
		$("#inputOndaBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
		
	
		
		// Yüzde birler
	$("#SoruCokluInput",container).append("<div id='yuzdeBirler' >");
		$("#yuzdeBirler").css("width","40px");
		$("#yuzdeBirler").css("height","150px");
		$("#yuzdeBirler").css("position","absolute");
		$("#yuzdeBirler").css("top","30px");
		$("#yuzdeBirler").css("left","180px");
		//$("#milyonlarYuz").css("right","0");
		$("#yuzdeBirler").css("margin","auto");
		$("#yuzdeBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#yuzdeBirler").css("border-bottom","none");
		$("#yuzdeBirler").css("font-size","medium");
		
		$("#yuzdeBirler",container).append("<div class='yatay'>");
		$("#yuzdeBirler .yatay").html("Yüzde Birler");
		
		$("#SoruCokluInput #yuzdeBirler",container).append("<div id='girdiYuzdeBirler' >");
		$("#girdiYuzdeBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	if (this.amac=="soru"){		
		var yuzdeBirler=Interaction.appendInput({},true,true);
		$(Interaction.inputs[5]).attr('maxlength', '1').attr("id","inputYuzdeBirler");
		$("#girdiYuzdeBirler",container).append(yuzdeBirler);
	}
		$("#inputYuzdeBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
		
		
		// Binde Birler
	$("#SoruCokluInput",container).append("<div id='bindeBirler' >");
		$("#bindeBirler").css("width","40px");
		$("#bindeBirler").css("height","150px");
		$("#bindeBirler").css("position","absolute");
		$("#bindeBirler").css("top","30px");
		$("#bindeBirler").css("left","220px");
		//$("#milyonlarYuz").css("right","0");
		$("#bindeBirler").css("margin","auto");
		$("#bindeBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#bindeBirler").css("border-bottom","none");
		$("#bindeBirler").css("font-size","medium");
		
		$("#bindeBirler",container).append("<div class='yatay'>");
		$("#bindeBirler .yatay").html("Binde Birler");
		
		
		$("#SoruCokluInput #bindeBirler",container).append("<div id='girdiBindeBirler' >");
		$("#girdiBindeBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	if (this.amac=="soru"){		
		var bindeBirler=Interaction.appendInput({},true,true);
		$(Interaction.inputs[6]).attr('maxlength', '1').attr("id","inputBindeBirler");
		$("#girdiBindeBirler",container).append(bindeBirler);
	}
		$("#inputBindeBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
			
		
		$(".yaziBolukler").css("text-align","center");
		$(".yaziBolukler").css("position","absolute");
		$(".yaziBolukler").css("width","120px");
		$(".yaziBolukler").css("height","14px");
		//$(".yazi").css("height","210px");
		$(".yaziBolukler").css("top","0");
		$(".yaziBolukler").css("bottom","0");
		$(".yaziBolukler").css("left","0");
		$(".yaziBolukler").css("right","0");
		$(".yaziBolukler").css("margin","auto");	
		
		$("input")
		.css("text-align","center")
		.css("border-color",inputStrokeRenk)
		.addClass("input");
			
		$(".yatay").css("-webkit-transform","rotate(-90deg)");
		$(".yatay").css("transform","rotate(-90deg)");
		$(".yatay").css("-ms-transform","rotate(-90deg)");
		$(".yatay").css("-moz-transform","rotate(-90deg)");
		$(".yatay").css("-o-transform","rotate(-90deg)");
		
		
		//$("#yuzler .yazi").css("-writing-mode","tb-rl");
		//-webkit-transform:rotate(-90deg);
		$(".yatay").css("text-align","left");
		$(".yatay").css("position","absolute");
		$(".yatay").css("height","30px");
		$(".yatay").css("width","150px");
		$(".yatay").css("bottom","110px");
		$(".yatay").css("left","-50px");
		//$("#yatay").css("right","200px");
		//$("#yatay").css("margin","auto");
		$(".yatay").css("font-size","small");
		
		}
	
	};
var format = function(num, options) {
	options.point=options.point ||',';
	options.group=options.group ||' ';
	options.places=options.places||0;
	options.suffix=options.suffix||'';
	options.prefix=options.prefix||'';
	
	regex = /(\d+)(\d{3})/;
	result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';
				
	for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
	return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};

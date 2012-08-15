/*
	Matematik Sözlüğü - Ondalık Kesirleri Karşılaştırma
	
	Halıcı Yazılım
	Abdullah Karacabey
	27.07.2012

*/


tabloStrokeRenk="#255b63";
tabloBirlerFillRenk="#ecf8fa";
tabloBinlerFillRenk="#d9f1f5";
tabloMilyonlarFillRenk="#bfe8ef";
inputStrokeRenk="#9bd1d9";

sayilarKutuRenk="#e6c181";
sayilarKutuStrokeRenk="#4f360b";
sayilarStrokeRenk="#4f360b";
yerTutucuRenk="#F2F2F2";

function __Styles(){
	
}

var Animation = {
	init:function(container){
		Animation.container = container;
		
		$(container).append("<div id='ornekUst'>");
				$("#ornekUst")
					.css("width","414px")
					.css("height","45px")
					.css("position","absolute")
					.css("left","0")
					.css("top","50px")
					//.css("right","0")
					//.css("bottom","0")
					.css("margin","auto");
					//.css("border","1px solid red");
		$(container).append("<div id='ornekAlt'>");
				$("#ornekAlt")
					.css("width","414px")
					.css("height","45px")
					.css("position","absolute")
					.css("left","0")
					//.css("top","0")
					//.css("right","0")
					.css("bottom","50px")
					.css("margin","auto");
					//.css("border","1px solid red");
		
		
		
		
		$(container).append("<div id='ornek'>");
			$("#ornek").css("width","757px")
			.css("height","190px")
			.css("position","absolute")
			.css("left","0")
			.css("top","0px")
			.css("right","0")
			.css("bottom","0")
			.css("margin","auto");
		
		// cok inputlu
		$("#ornek", Interaction.container).append("<div id='OSoruCokluInput'>");
			$("#OSoruCokluInput").css("width","261px")
			.css("height","190px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("right","30px")
//			.css("right","0")
			.css("top","0px")
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
			.css("height","81px")
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
			.css("bottom","62px")
			.css("left","-53px")
			.css("font-size","small");*/
		
			// 
	$("#OSoruCokluInput",container).append("<div id='Oyuzler' >");
	
		$("#Oyuzler").css("width","40px");
		$("#Oyuzler").css("height","160px");
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
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","53px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","27px")
			.css("text-align","center");
		
		$("#OSoruCokluInput #Oyuzler",container).append("<div id='OgirdiYuzler1' >");
		$("#OgirdiYuzler1").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","26px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
			
			$("#OSoruCokluInput #Oyuzler",container).append("<div id='OgirdiYuzler2' >");
		$("#OgirdiYuzler2").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
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
			.css("height","25px")
			.css("width","30px");
			
		// onlar
	$("#OSoruCokluInput",container).append("<div id='Oonlar' >");
		$("#Oonlar").css("width","40px");
		$("#Oonlar").css("height","160px");
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
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","53px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
			
		$("#OSoruCokluInput #Oonlar",container).append("<div id='OgirdiOnlar1' >");
		$("#OgirdiOnlar1").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","26px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		$("#OSoruCokluInput #Oonlar",container).append("<div id='OgirdiOnlar2' >");
		$("#OgirdiOnlar2").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
	
	
		// birler
	$("#OSoruCokluInput",container).append("<div id='Obirler' >");
		$("#Obirler").css("width","39px");
		$("#Obirler").css("height","160px");
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
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","53px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		
		$("#OSoruCokluInput #Obirler",container).append("<div id='OgirdiBirler1' >");
		$("#OgirdiBirler1").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","26px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		$("#OSoruCokluInput #Obirler",container).append("<div id='OgirdiBirler2' >");
		$("#OgirdiBirler2").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
			
		// Virgül
		
		$("#OSoruCokluInput",container).append("<div id='Ovirgul' >");
		$("#Ovirgul").css("width","19px")
			.css("height","82px")
			.css("position","absolute")
			.css("top","108px")
			.css("left","120px")
			.css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("background-color", "white")
			.css("border-top","none")
			.css("font-size","medium")
			.css("text-align","center")
			.css("font-size","40px")
			.css("line-height","24px")
			.css("vertical-align","bottom")
			.html(",<br/>,<br/>,<br/>");

		
		// Kesir kısmı yatayşarı
		
		// Onda birler
	$("#OSoruCokluInput",container).append("<div id='OondaBirler' >");
		$("#OondaBirler").css("width","40px");
		$("#OondaBirler").css("height","160px");
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
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","53px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
			
		$("#OSoruCokluInput #OondaBirler",container).append("<div id='OgirdiOndaBirler1' >");
			$("#OgirdiOndaBirler1").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","26px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		$("#OSoruCokluInput #OondaBirler",container).append("<div id='OgirdiOndaBirler2' >");
			$("#OgirdiOndaBirler2").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		
	
		
		// Yüzde birler
	$("#OSoruCokluInput",container).append("<div id='OyuzdeBirler' >");
		$("#OyuzdeBirler").css("width","40px");
		$("#OyuzdeBirler").css("height","160px");
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
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("position","absolute")
			.css("bottom","53px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
			
		$("#OSoruCokluInput #OyuzdeBirler",container).append("<div id='OgirdiYuzdeBirler1' >");
		$("#OgirdiYuzdeBirler1").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("position","absolute")
			.css("bottom","26px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		
		$("#OSoruCokluInput #OyuzdeBirler",container).append("<div id='OgirdiYuzdeBirler2' >");
		$("#OgirdiYuzdeBirler2").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
			
		
		// Binde Birler
	$("#OSoruCokluInput",container).append("<div id='ObindeBirler' >");
		$("#ObindeBirler").css("width","40px");
		$("#ObindeBirler").css("height","160px");
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
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			
			.css("position","absolute")
			.css("bottom","53px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("border-bottom","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		
		$("#OSoruCokluInput #ObindeBirler",container).append("<div id='OgirdiBindeBirler1' >");
		$("#OgirdiBindeBirler1").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			
			.css("position","absolute")
			.css("bottom","26px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		
		$("#OSoruCokluInput #ObindeBirler",container).append("<div id='OgirdiBindeBirler2' >");
		$("#OgirdiBindeBirler2").css("width","40px")
			.css("height","25px")
			.css("border","solid 1px "+tabloStrokeRenk)
			
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none")
			.css("background-color","white")
			.css("line-height","30px")
			.css("text-align","center");
		
		
			
		
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
		$(".Oyatay").css("height","25px");
		$(".Oyatay").css("width","150px");
		$(".Oyatay").css("bottom","145px");
		$(".Oyatay").css("left","-50px");
		//$("#yatay").css("right","200px");
		//$("#yatay").css("margin","auto");
		$(".Oyatay").css("font-size","small");
		
		//999
		$(container).append("<p id='_11' class='TekTekSayilar'>9</p>");
		$("#_11").css("top","122px").css("right","201px").css("opacity","0");
		$(container).append("<p id='_12' class='TekTekSayilar'>9</p>");
		$("#_12").css("top","148px").css("right","201px").css("opacity","0");
		$(container).append("<p id='_13' class='TekTekSayilar'>9</p>");
		$("#_13").css("top","174px").css("right","201px").css("opacity","0");

		//000
		$(container).append("<p id='_21' class='TekTekSayilar'>0</p>");
		$("#_21").css("top","122px").css("right","141px").css("opacity","0");
		$(container).append("<p id='_22' class='TekTekSayilar'>0</p>");
		$("#_22").css("top","148px").css("right","141px").css("opacity","0");
		$(container).append("<p id='_23' class='TekTekSayilar'>4</p>");
		$("#_23").css("top","174px").css("right","141px").css("opacity","0");
		
		//000
		$(container).append("<p id='_31' class='TekTekSayilar'>0</p>");
		$("#_31").css("top","122px").css("right","100px").css("opacity","0");
		$(container).append("<p id='_32' class='TekTekSayilar'>4</p>");
		$("#_32").css("top","148px").css("right","100px").css("opacity","0");
		$(container).append("<p id='_33' class='TekTekSayilar'>0</p>");
		$("#_33").css("top","174px").css("right","100px").css("color","red").css("opacity","0");
		
		//000
		$(container).append("<p id='_41' class='TekTekSayilar'>4</p>");
		$("#_41").css("top","122px").css("right","61px").css("opacity","0");
		$(container).append("<p id='_42' class='TekTekSayilar'>0</p>");
		$("#_42").css("top","148px").css("right","61px").css("color","red").css("opacity","0");
		$(container).append("<p id='_43' class='TekTekSayilar'>0</p>");
		$("#_43").css("top","174px").css("right","61px").css("color","red").css("opacity","0");
		
		
		//soldaki 0'lar
		$(container).append("<p id='_51' class='TekTekSayilar'>0</p>");
		$("#_51").css("top","65px").css("left","49px").css("color","red").css("opacity","0");
		$(container).append("<p id='_52' class='TekTekSayilar'>0</p>");
		$("#_52").css("top","65px").css("left","158px").css("color","red").css("opacity","0");
		$(container).append("<p id='_53' class='TekTekSayilar'>0</p>");
		$("#_53").css("top","65px").css("left","169px").css("color","red").css("opacity","0");
		
		$(".TekTekSayilar").css("position","absolute").css("font-size","20px");
		
		$("#ornekUst").css("opacity","0");
		$("#ornekAlt").css("opacity","0");
		$("#ornek").css("opacity","0");
		ornekUst=new liste("9,04","9,4","9,004","ornekUst");
		ornekUst.doldur();
		
		
		ornekAlt=new liste("9,004","9,04","9,4","ornekAlt");
		ornekAlt.doldur();
		$("#ornekUst").delay(1000).animate({opacity:1},1000);
		$("#ornek").delay(2000).animate({opacity:1},1000);
		
		$("#_11").delay(3000).animate({opacity:"1"},1000);
		$("#_21").delay(4000).animate({opacity:"1"},1000);
		$("#_31").delay(5000).animate({opacity:"1"},1000);
		$("#_41").delay(6000).animate({opacity:"1"},1000);
		
		$("#_12").delay(8000).animate({opacity:"1"},1000);
		$("#_22").delay(9000).animate({opacity:"1"},1000);
		$("#_32").delay(10000).animate({opacity:"1"},1000);
		$("#_42").delay(11000).animate({opacity:"1"},1000);
		
		$("#_13").delay(13000).animate({opacity:"1"},1000);
		$("#_23").delay(14000).animate({opacity:"1"},1000);
		$("#_33").delay(15000).animate({opacity:"1"},1000);
		$("#_43").delay(16000).animate({opacity:"1"},1000);
		
		$("#_51").delay(18000).animate({opacity:"1"},1000);
		$("#_52").delay(19000).animate({opacity:"1"},1000);
		$("#_53").delay(20000).animate({opacity:"1"},1000);
		
		$("#ornekAlt").delay(21000).animate({opacity:"1"},1000);
		
		Main.animationFinished(22000);
		
		
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki ondalık kesirleri sürükleyerek küçükten büyüğe doğru sıralayınız.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
	
	sayi1=0;sayi2=0,sayi3=0;
			// Ana Div
			$(container).append("<div id='soru'>");
				$("#soru")
					.css("width","100%")
					.css("height","45px")
					.css("position","absolute")
					.css("left","0")
					.css("top","50px")
					.css("right","0")
					
					.css("margin","auto");
					//.css("border","1px solid red");
					
			$(container).append("<div id='cevap'>");
				$("#cevap")
					.css("width","100%")
					.css("height","45px")
					.css("position","absolute")
					.css("left","0")
					.css("right","0")
					.css("bottom","100px")
					.css("margin","auto")
					.css("opacity","0");
					//.css("border","1px solid red");
					
		
		sayi1=sayiUretim();
		sayi2=sayiUretim();
		sayi3=sayiUretim();
		soru=new liste(sayi1,sayi2,sayi3,"soru");
		soru.doldur();
		
		/*var siraliListe=[sayi1,sayi2,sayi3];
		siraliListe.sort();
		cevap=new liste(siraliListe[0],siraliListe[1],siraliListe[2],"cevap");
		cevap.doldur();*/
		
		
		
			Interaction.appendButton({bottom:"40px", right:"48px"});
			Interaction.appendStatus({bottom:"50px", right:"200px"});
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
		$("#cevap").animate({opacity:"0"},1000);
		$("#soru").animate({opacity:"1"},1000);
		//$("#soru").delay(800).animate({top:"0px"},1000);
		
		sayi1=sayiUretim();
		sayi2=sayiUretim();
		sayi3=sayiUretim();
                $("li").removeClass("kapali");
		
		//$("#soru ul").empty()
		$("#soru #siralanacakSayi1").html(sayi1.replace(".",","));
		$("#soru #siralanacakSayi2").html(sayi2.replace(".",","));
		$("#soru #siralanacakSayi3").html(sayi3.replace(".",","));

                setTimeout(cevapGetir,1000);
		function cevapGetir(){
                    $(" #cevap").html("");
                    var siraliListe=[sayi1,sayi2,sayi3];
                    siraliListe.sort();
                    var cevap=new liste(siraliListe[0],siraliListe[1],siraliListe[2],"cevap");
                    cevap.doldur();
                }
		
		
		
		
	
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
		
		/*var sayi1= new Object;
		sayi1.icerik=$("#soru #siralanacakSayi1").html();
		sayi1.sira=$("#soru  #siralanacakSayi1").position().left;

		var sayi2= new Object;
		sayi2.icerik=$("#soru  #siralanacakSayi2").html();
		sayi2.sira=$("#soru #siralanacakSayi2").position().left;

		var sayi3= new Object;
		sayi3.icerik=$("#soru #siralanacakSayi3").html();
		sayi3.sira=$("#soru #siralanacakSayi3").position().left;
		
		
		console.log(sayi1.icerik+" "+sayi1.sira);
		console.log(sayi2.icerik+" "+sayi2.sira);
		console.log(sayi3.icerik+" "+sayi3.sira);
		
		var liste=[sayi1.icerik,sayi2.icerik,sayi3.icerik];
		var siraliListe=liste.sort();

		
		console.log(siraliListe);*/
		
		siraliListe=[parseFloat(sayi1),parseFloat(sayi2),parseFloat(sayi3)];
		//siraliListe.sort();
		siraliListe.sort(function(a,b){return b-a});
		siraliListe.reverse();
		console.log(siraliListe);
		console.log(typeof siraliListe[0]);
		$("#cevap #siralanacakSayi1").html(siraliListe[0].toString().replace(".",","));
		$("#cevap #siralanacakSayi2").html(siraliListe[1].toString().replace(".",","));
		$("#cevap #siralanacakSayi3").html(siraliListe[2].toString().replace(".",","));
		
		var ilk=$("#soru .sayilar:first").html();
                ilk=parseFloat(ilk.replace(",","."));
		console.log("ilk: "+ilk);
		
		var sonuncu=$("#soru .sayilar:last").html();
                sonuncu=parseFloat(sonuncu.replace(",","."));
		console.log("sonuncu: "+sonuncu);
		
		if(ilk==siraliListe[0] && sonuncu==siraliListe[2]){
                     $("li").addClass("kapali");
                    return true;
                   
                }
		
		/*
		console.log("1. item position: "+$("#siralanacakSayi1").position().left+" , "+$("#siralanacakSayi1").position().top);
		console.log("1. item val: "+$("#siralanacakSayi1").html());
		console.log("2. item position: "+$("#siralanacakSayi2").position().left+" , "+$("#siralanacakSayi1").position().top);
		console.log("2. item val: "+$("#siralanacakSayi2").html());
		console.log("3. item position: "+$("#siralanacakSayi3").position().left+" , "+$("#siralanacakSayi1").position().top);
		console.log("3. item val: "+$("#siralanacakSayi3").html());
		*/
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		Interaction.setStatus('Yanlış cevap, doğrusu yukarıdadır.',false);
		$("#soru").animate({opacity:"0.35"},1000);
		$("#cevap").animate({opacity:"1"},1000);
                $("li").addClass("kapali");
		
		},
}

liste=function(eleman1,eleman2, eleman3,div){
	this.div="#"+div;
	this.e1=eleman1;
	this.e2=eleman2;
	this.e3=eleman3;
	this.doldur=
		function(){	
		
		
			
			//$(container).append("<style>#siralama .yer_tutucu { width: 66px; background:#009966; height:20px}</style>");
			//$(container).append("<style>#cerceve { left:0px; top:10px; position:absolute}</style>");
			//$(container).append("<style>#kucuk { left:160px; top:10px; position:absolute}</style>");
			
			
			
			
			
			
			
			$(this.div).append("<ul id='siralama'>");
			
			$(this.div+" #siralama").append("<li id='siralanacakSayi1' class='sayilar'>");
				$(this.div+" #siralama #siralanacakSayi1")
					.html(this.e1);
                                 $(this.div+" #siralama").append("<div id='raf1' class='raf'>");
				$(this.div+" #siralama").append("<div id='kucuk1' class='isaretler'>");
                               

			$(this.div+" #siralama").append("<li id='siralanacakSayi2' class='sayilar'>");
				$(this.div+" #siralama #siralanacakSayi2")
					.html(this.e2);
                                 $(this.div+" #siralama").append("<div id='raf2' class='raf'>");
				$(this.div+" #siralama").append("<div id='kucuk2' class='isaretler'>");		


			$(this.div+" #siralama").append("<li id='siralanacakSayi3' class='sayilar'>");
				$(this.div+" #siralama #siralanacakSayi3")
					.html(this.e3);
			 $(this.div+" #siralama").append("<div id='raf3' class='raf'>");
			
			$(this.div+" #siralama .sayilar")
					
					.css("font-size","20px")
					.css("cursor","pointer");
					

			
			if(this.div=="#ornekUst" ||this.div=="#ornekAlt"){
				
				$(this.div+" #siralama")
				.css("list-style-type","none")
				.css("width","414px")
				.css("padding","0")
				.css("margin-top","10px");
				//.css("border","solid 1px orange");
			$(this.div+" #siralama li")
				.css("float","left")
				.css("height","30px")
				.css("line-height","30px");
				//.css("border","solid 1px black");
			$(this.div+" #siralama .sayilar")
					.css("font-size","20px")
					.css("cursor","pointer");
				
				$(this.div+" #siralama li").css("margin","0 70px 0 10px");
				$(this.div+" #siralama .sayilar").css("text-align","left").css("width","40px");
			}
			if(this.div=="#soru" ||this.div=="#cevap"){
				$(container).append("<style>"+this.div+" #siralama {width:430px; list-style-type:none; cursor:auto; margin:auto;}</style>");
				$(container).append("<style>" +this.div+" #siralama li {float:left; height:20px; width:70px; margin:0px 30px; padding: 8px 5px;background:"+sayilarKutuRenk+"; font-size:12px; color:"+sayilarStrokeRenk+"; font-weight:bold; border:1px solid "+sayilarKutuStrokeRenk+";}</style>");
				$(container).append("<style>" +this.div+" #siralama .yerTutucu { width: 70px; background:"+yerTutucuRenk+"; height:20px; border-color:"+yerTutucuRenk+"}</style>");
				$(this.div+" #siralama .sayilar").css("text-align","center");
			}
			
			
					
			if(this.div=="#soru" || this.div=="#cevap"){
				$(this.div+" #kucuk1").css("left","210px");
				$(this.div+" #kucuk2").css("left","350px");
                                $(this.div+" #raf1").css("left","103px");
                                $(this.div+" #raf2").css("left","246px");
                                $(this.div+" #raf3").css("left","388px");
			
				$(this.div+" #siralama .isaretler").append("<img id='kucuk' src='/assets/animations/ondalik_kesirleri_karsilastirma/oran_kucuk_active.png' />");
					$(this.div+" .isaretler")
						.css("position","absolute")
						.css("bottom","10px");
				$(this.div+" #siralama .raf").append("<img class='rafResim' src='/assets/animations/ondalik_kesirleri_karsilastirma/okk_etkilesim_raf.png' />");
					$(this.div+" .raf")
						.css("position","absolute")
                                                .css("top","38px")
						.css("margin","auto");
                                        $(this.div+" .rafResim").css("width","95px");        
                                console.log("div: "+this.div+" #siralama li")
			}
			else if(this.div=="#ornekAlt"){
				$(this.div+" #kucuk1").css("left","88px");
				$(this.div+" #kucuk2").css("left","206px");
				$(this.div+" .isaretler")
						
						.css("position","absolute")
						.css("bottom","10px")
						.css("margin","auto");
				$("#ornekAlt #kucuk1, #ornekAlt #kucuk2").html("<").css("width","10px").css("font-size","20px");
							
				}
			else if(this.div=="#ornekUst"){
				$("#ornekUst #kucuk1, #ornekUst #kucuk2").css("width","20px");	
				//$(this.div+" #siralama li").css("width","60px");				
				}
			
			
			
			
			
			if(this.div=="#soru"){
			$(function() {
				$("#soru #siralama" ).sortable({
					items: "li:not(.raf .isaretler)",
					
					 placeholder : "yerTutucu",
					//grid: [80, 30],
					//helper: 'original',
					//forceHelperSize: true,
					//forcePlaceholderSize: true,
					
					/*opactiy:0.6,
					cursor: 'move',
					axis: 'x',
					zIndex:5,*/
					tolerance: 'pointer'
					
					
				});
				
				$( "#soru #siralama" ).sortable({cancel: ".kapali"});

				
				//$( "#soru #siralama" ).disableSelection();
				//$("#soru #siralama").sortable( "refreshPositions" );
				
				/*$("#soru .sayilar").draggable({
					connectToSortable: ".sayilar",
					
			
					});*/
			});
			
			
		}
		}
}


sayiUretim=function(){
	
	var deger=Math.floor(Math.random()*3+1);
	console.log("deger: "+deger);
	
	var ondalik=Math.floor(Math.random()*3+1);
	console.log("deger: "+ondalik);
	//deger=3;
	//rastgeleSayi=999.999;
	switch(deger){
		case 1:
			var rastgeleSayi=Math.random()*9+1; 
			return format(rastgeleSayi,{places:ondalik});
			break;
		case 2:
			var rastgeleSayi=Math.random()*99+1; 
			return format(rastgeleSayi,{places:ondalik});
			break;
		case 3:
			var rastgeleSayi=Math.random()*999+1; 
			return format(rastgeleSayi,{places:ondalik});
			break;
	}
};

var format = function(num, options) {
	options.point=options.point ||'.';
	options.group=options.group ||' ';
	options.places=options.places||0;
	options.suffix=options.suffix||'';
	options.prefix=options.prefix||'';
	
	regex = /(\d+)(\d{3})/;
	result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';
				
	for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
	return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};
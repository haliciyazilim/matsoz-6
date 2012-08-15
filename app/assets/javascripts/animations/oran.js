/**
 * Oran
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 11.07.2012
 * 
 * 
 */

var dogruCevapGosterimRengi="green";
var kareIlkStrokeColor="black";
var kareIlkFillColor="white";
var kareBoyaliStrokeColor="black";
var kareBoyaliFillColor="red";
var divSonrakiYaziRenk="white";
var divSonrakiFillRenk="#4682b4";
var bilyeRengi1="blue";
var bilyeRengi2="red";

var Animation = function(){};Animation();

var Interaction = function(){};Interaction();

Interaction.getFramework = function() {
	return 'paper';
}


Animation.init=function(container){
function gulGetir(){
	var j=0;
	for(var i=0; i<5; i++){
		var isim="gul"+i;
		var left=(i*50+50)+"px";		
		$(container).append("<img class='cicekler' id='"+isim+"' src='/assets/animations/oran/cicek_gul.png' />");
		$("#"+isim).css("position", "absolute");
			if(i>=4){
				$("#"+isim).css("top","130px");
				$("#"+isim).css("left", "70px");
				
			}
			else if(i>=2 && i<4){
			
			left=(j*50+50)+"px";
				$("#"+isim).css("top","70px");
				$("#"+isim).css("left", left)
				j++;
			}
			else{
				$("#"+isim).css("top", "10px");
				$("#"+isim).css("left", left);
			}

	}
}

function laleGetir(){
	var j=0;
	for(var i=0; i<4; i++){
		var isim="lale"+i;
		var left=(i*40+660)+"px";		
		$(container).append("<img class='cicekler' id='"+isim+"' src='/assets/animations/oran/cicek_lale.png' />");
		$("#"+isim).css("position", "absolute");
			if(i>=4){
				$("#"+isim).css("top","105px");
				$("#"+isim).css("left", "625px");
				
			}
			else if(i>=2 && i<4){
			
			left=(j*40+660)+"px";
				$("#"+isim).css("top","100px");
				$("#"+isim).css("left", left)
				j++;
			}
			else{
				$("#"+isim).css("top", "20px");
				$("#"+isim).css("left", left);
			}

	}
}

gulGetir();
laleGetir();
function aciklamalariGetir(){
	var aciklama=Array();
		aciklama[0]="Güllerin lalelere oranı";
		aciklama[1]="Lalelerin güllere oranı";
		aciklama[2]="Güllerin tüm çiçeklere oranı";
		aciklama[3]="Lalelerin tüm çiçeklere oranı";
	var aciklamaPay=[5,4,5,4];
	var aciklamaPayda=[4,5,9,9];
	
	
	var siraSaayac=0;
	for(var i=0; i<4; i++){
		var cerceveId="cerceve"+i;
		var soruId="soru"+i;
		var payId="pay"+i;
		var paydaId="payda"+i;
		
		if(i>1){
				var top=(i-2)*70+40;
				var left="400px";
				var soruUzunlugu="200px";
			}
		else{
			var top=i*70+40;
			var left="170px";
			var soruUzunlugu="160px";
			}
		$(container).append("<div id='"+cerceveId+"' class='ornekCerceve'>");
			$("#"+cerceveId,container).append("<div class='soruOrnek' id='"+soruId+"'>");
			$("#"+cerceveId,container).append("<div class='girdiler'>");
			$("#"+cerceveId+" .girdiler",container).append("<div id='"+payId+"'>");
			$("#"+cerceveId+" .girdiler",container).append("<div class='kesir'>");
			$("#"+cerceveId+" .girdiler",container).append("<div id='"+paydaId+"'>");
				$(".ornekCerceve")
					.css("width","240px")
					.css("height","90px")
					//.css("border","solid 1px black")
					.css("font-size","14px");
				$("#"+cerceveId)
					.css("position","absolute")
					.css("top",top)
					.css("left",left)
					
					.css("margin","auto").hide();
			
			$(".ornekCerceve .soruOrnek")
					.css("height","60px")
					.css("float","left")
					//.css("border","solid 1px black")
					//.css("font-size","16px")
					.css("line-height","60px")
			$("#"+soruId).css("width",soruUzunlugu).html(aciklama[i]);
			
			$("#"+cerceveId+" .girdiler").css("width","30px")
				.css("float","left")
				.css("height","60px")
				.css("font-weight","bold");
					
			$("#"+payId)
					.css("width","30px")
					.css("height","30px")
					.css("font-size","16px")
					.css("text-align","center")
					.css("line-height","30px")
					
					.html(aciklamaPay[i]);
					
			$("#"+cerceveId+" .kesir").css("margin","auto")
				.css("width", "30px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
					
					$("#"+paydaId)
					.css("width","30px")
					.css("height","30px")
					.css("font-size","16px")
					.css("text-align","center")
					.css("line-height","30px")
					
					.html(aciklamaPayda[i]);
					
			
	}
}
	aciklamalariGetir();
	$(".cicekler").hide();
	
	function gosteri(nesne, baslangic){
	for(i=0;i<5;i++)
		$("#"+nesne+i).delay(baslangic+i*500).fadeIn(500);
	}
	
	gosteri("gul",1000);
	gosteri("lale",3500);
	gosteri("cerceve",5500);
        
        Main.animationFinished(8000);

};


Interaction.init = function(container){
	Main.setObjective("Yandaki bilyeler için istenen oranları bulunuz.");


var mavibilye, kirmiziBilye,soruSecimi, soru, cevapPay, cevapPayda;
var sorular= new Array();
var maviBilyeGrubu=new Group();
var kirmiziBilyeGrubu=new Group();

function soruOlustur(){
maviBilye=Math.floor((Math.random()*18)+1);
kirmiziBilye=Math.floor((Math.random()*18)+1);
	
//console.log("mavi Bilye: "+maviBilye+" kırmızı bilye "+kirmiziBilye);


sorular[1]="<span class='yazi1'>Mavi</span> bilyelerin <span class='yazi2'>kırmızı</span> bilyelere oranı";
sorular[2]="<span class='yazi2'>Kırmızı</span> bilyelerin <span class='yazi1'>mavi</span> bilyelere oranı";
sorular[3]="<span class='yazi1'>Mavi</span> bilyelerin tüm bilyelere oranı";
sorular[4]="<span class='yazi2'>Kırmızı</span> bilyelerin tüm bilyelere oranı";

soruSecimi=Math.floor((Math.random()*4)+1);
soru=sorular[soruSecimi];
//console.log("soru: "+soru);

cevapPay;
cevapPayda;
switch(soruSecimi)
{
	case 1:
		cevapPay=maviBilye;
		cevapPayda=kirmiziBilye;
		break;
	case 2:
		cevapPay=kirmiziBilye;
		cevapPayda=maviBilye;
		break;
	case 3:
		cevapPay=maviBilye;
		cevapPayda=maviBilye+kirmiziBilye;
		break;
	case 4:
		cevapPay=kirmiziBilye;
		cevapPayda=maviBilye+kirmiziBilye;
		break;
}

function maviBilyeYap(){
		
		$(".mavi_bilye").remove();
		var girdi=maviBilye;
				
		var onluk=Math.floor(girdi/3)==0?1:Math.floor(girdi/3+1);
		var birlik=Math.floor(girdi%3);
			
		var girilenKareSayisi=3;
		var idKontrol=0;
		for(j=0;j<onluk && j<6;j++){
				idKontrol++;	
			if(j==(onluk-1))
				girilenKareSayisi=birlik;
			else
				var girilenKareSayisi=3;
						
			for(i=0; i<girilenKareSayisi && i<10;i++){
				idKontrol++;		
				/*var bilye = new Path.Circle(i*25+30, j*25+30,10);
		var renkler = [['white', 0.0], ['blue', 0.3]];
		var gradient = new Gradient(renkler);
		var from = bilye.bounds.topLeft;
		var to = bilye.bounds.bottomRight;
		var gradientColor = new GradientColor(gradient, from, to);
		bilye.fillColor = gradientColor;
		maviBilyeGrubu.addChild(bilye);*/
		var maviBilyeId="#maviBilye"+idKontrol;
		$(container).append("<img class='mavi_bilye'  id='maviBilye"+idKontrol+"' src='/assets/animations/oran/bilye_mavi.png' />");
		$(maviBilyeId)
		.css("position", "absolute")
		.css("top",j*25+30)
		.css("left", i*25+30);
		

			}}
				
			}	

function kirmiziBilyeYap(){
		$(".kirmizi_bilye").remove();
		var girdi=kirmiziBilye;
			
		var onluk=Math.floor(girdi/3)==0?1:Math.floor(girdi/3+1);
		var birlik=Math.floor(girdi%3);
			
		var girilenKareSayisi=3;
		var idKontrol=0;
		for(j=0;j<onluk && j<6;j++){
			idKontrol++;	
			if(j==(onluk-1))
				girilenKareSayisi=birlik;
			else
				var girilenKareSayisi=3;
						
			for(i=0; i<girilenKareSayisi && i<10;i++){
				idKontrol++;		
				/*var bilye = new Path.Circle(i*25+500, j*25+30,10);
		var renkler = [['white', 0.0], ['red', 0.3]];
		var gradient = new Gradient(renkler);
		var from = bilye.bounds.topLeft;
		var to = bilye.bounds.bottomRight;
		var gradientColor = new GradientColor(gradient, from, to);
		bilye.fillColor = gradientColor;
		kirmiziBilyeGrubu.addChild(bilye);*/
		
				var kirmiziBilyeId="#kirmiziBilye"+idKontrol;
				$(container).append("<img class='kirmizi_bilye'  id='kirmiziBilye"+idKontrol+"' src='/assets/animations/oran/bilye_kirmizi.png' />");
				$(kirmiziBilyeId)
					.css("position", "absolute")
					.css("top",j*25+30)
					.css("left", i*25+500);

			}}
				
			}		

maviBilyeYap();
kirmiziBilyeYap();

}
soruOlustur();
	$(container).append("<div id='cerceve'>");
	$("#cerceve",container).append("<div class='soru'>");
	$("#cerceve",container).append("<div class='girdiler'>");
	$("#cerceve .girdiler",container).append("<input class='girdiPay' type='text' maxlength=3  onkeypress='return SadeceRakam(event)'>");
	$("#cerceve .girdiler",container).append("<div class='kesir'>");
	$("#cerceve .girdiler",container).append("<input class='girdiPayda' type='text' maxlength=3  onkeypress='return SadeceRakam(event)'>");
	
		$("#cerceve").css("width","340px")
		.css("height","90px")
		.css("position","absolute")
		.css("top","20px")
		.css("left","0")
		.css("right","0")
		.css("margin","auto")
		.css("font-size","16px");
		
		
		

		
	$(container).append("<div id='cerceveCevap'>");
	$("#cerceveCevap",container).append("<div class='soru'>");
	$("#cerceveCevap",container).append("<div class='girdiler'>");
	$("#cerceveCevap .girdiler",container).append("<div id='girdiPay'>");
	$("#cerceveCevap .girdiler",container).append("<div class='kesir'>");
	$("#cerceveCevap .girdiler",container).append("<div id='girdiPayda'>");
		$("#cerceveCevap").css("width","340px")
		.css("height","90px")
		.css("position","absolute")
		.css("top","160px")
		//.css("bottom","0")
		.css("left","0")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","16px").hide();
	
	
		$("#cerceve .soru, #cerceveCevap .soru")
			.css("width","270px")
			.css("height","90px")
			.css("float","left")
			//.css("border","solid 1px black")
			//.css("font-size","16px")
			.css("line-height","90px")
			.html(soru);
			$(".yazi1").css("color","blue");
			$(".yazi2").css("color","red");
					
		$("#cerceve .girdiler, #cerceveCevap .girdiler").css("width","60px")
			.css("float","left")
			.css("height","120px");
			
		$("#cerceveCevap #girdiPay")
			.css("width","60px")
			.css("height","40px")
			.css("font-size","20px")
			.css("text-align","center")
			.css("line-height","40px")
			.css("margin-top","5px")
			.html(cevapPay);
			
			$("#cerceveCevap #girdiPayda")
			.css("width","60px")
			.css("height","40px")
			.css("font-size","20px")
			.css("text-align","center")
			.css("line-height","40px")
			.html(cevapPayda);
								
		$("input")
			.css("margin-left","11px")
			.css("margin-bottom","5px")
			.css("margin-top","8px")
			.addClass("input").addClass("number_input_field");
			
		$('#cerceve .kesir, #cerceveCevap .kesir').css("margin","auto")
				.css("width", "50px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
			
	// geri bildirim
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'>");
	$("#geriBildirim").css("position","absolute")
		.css("right","0")
		.css("left","0")
		.css("bottom","120px")
		.css("height","50px")
		.css("width","300px","!important")
		.css("margin","auto");
//		.html("");
	
	
	// kontrol butonu
	$(container).append("<button class='control_button'id='btnKontrol'>");
	$(container).append("<style>.control_button{position:absolute; top:230px; right:25px;  }</style>");
	
	//sonraki divi
	$(container).append("<button id='sonraki' class='next_button'>");
	$("#sonraki")
		.css("position","absolute")
		.css("right","25px")
		//.css("left","0")
		.css("margin","auto")
		.css("top","230px")

		.hide();

	
	$("#sonraki").hide();
	
	$(".yazi1").live("yeniSoru", function(){
		$(this).css("color","blue");
		});
	$(".yazi2").live("yeniSoru", function(){
		$(this).css("color","red");
		});
	$("#btnKontrol").click(
		function(){
			
			kontrol();
			
		}
	);
	
	$("#sonraki").click(
		function(){
			maviBilyeGrubu.removeChildren()
			kirmiziBilyeGrubu.removeChildren()
			soruOlustur();
			$("input").val("");
			girdiPay="";
			girdiPayda="";
			//console.log("inputlar: "+girdiPay+" ,"+girdiPayda);
			$(".soru").html(soru);
			$("#cerceveCevap #girdiPay").html(cevapPay);
			
			$("#cerceveCevap #girdiPayda").html(cevapPayda);
			$(".yazi1").trigger("yeniSoru");
			$(".yazi2").trigger("yeniSoru");
			$(".sayi").trigger("yeniSayi");
			
			$("#cerceveCevap").hide();
			$("#sonraki").hide();
			$("#geriBildirimText").html("");
			$("#btnKontrol").show();
			tiklama=0;
		}
	);
	
	var girdiPay, girdiPayda;
	$(".girdiPay").keyup(
		function(event){
			$("#geriBildirimText").html("");
			girdiPay=$(this).val();
			if(event.keyCode == 13) {
				//console.log("Key"+event.keyCode);
				kontrol();
			}
			
			
			//console.log("girdiPay: "+girdiPay+"girdiPayda: "+girdiPayda);
		}
	);
	
	$(".girdiPayda").keyup(
		function(event){
			$("#geriBildirimText").html("");
			girdiPayda=$(this).val();
			if(event.keyCode == 13) {
				//console.log("Key"+event.keyCode);
				kontrol();
			}
			
			
			//console.log("girdiPay: "+girdiPay+"girdiPayda: "+girdiPayda);
		}
	);
	
	var tiklama=0;
	function kontrol(){
		
		
		if (girdiPay==undefined || girdiPay=="" ||girdiPayda=="" ||girdiPayda==undefined){
			
			//alert();
			$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurunuz.");
			//alert();
			$("input").keydown(
				function(){
					$("#geriBildirimText").html("");
				}
			);
		
		}
		else{
			tiklama++;
			girdiIslem=girdiPay/girdiPayda;
			cevapIslem=cevapPay/cevapPayda;
			if(girdiIslem==cevapIslem){
			//console.log("if doğruysa girdim."+girdi+" "+yuvarlak);
				$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
				$("#btnKontrol").hide();
				$("#sonraki").show();
			}
			else if(tiklama<2 && (girdiIslem!=cevapIslem)){
				//console.log("yanlış ve ikiden az");
				$("#geriBildirimText").attr("class","status_false").html("Tekrar deneyin");
			}
			
			else if(tiklama>=2 && (girdiIslem!=cevapIslem)){
				//console.log("yanlış ve ikiden çok");
				$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br />Doğru Cevap:");
				$("#cerceveCevap").show();
				$("#btnKontrol").hide();
				$("#sonraki").show();
			}
		}
		//console.log("tik: "+tiklama);
	}

	
	
};
	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

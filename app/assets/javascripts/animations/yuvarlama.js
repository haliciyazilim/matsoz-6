/**
 * Yuvarlama
 * kaynak: mat-5-yuvarlama.pdf
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 09.07.2012
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

var Animation = function(){};Animation();

var Interaction = function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}


Animation.init=function(container){
	//Animation.container = container;
	//var ok= new Path.OneSidedArrow(100,120,10,30);
	var oklar= new Group();
	var okYukari = new Path.OneSidedArrow(new Point(110, 83), new Point(110, 0), 10, 30);
	okYukari.strokeColor="red";
	
	var okAsagi = new Path.OneSidedArrow(new Point(170, 83), new Point(170, 170), 10, 30);
	okAsagi.strokeColor="red";
	var cizgi= new Path.Line(new Point(110, 83),new Point(170, 83));
	cizgi.strokeColor="red";
	cizgi.strokeWidth=2;
	
	oklar.addChild(okYukari);
	oklar.addChild(cizgi);
	oklar.addChild(okAsagi);
	oklar.opacity=0;
	oklar.fillColor="red";
	oklar.animate({
			style: {
				opacity: 1
			},
			duration: 2000,
			delay: 4700,
			callback: function () {
				//bosKareSol.remove();
			}
		});

	
	$(container).append("<div id='ornekSayilar'>");
		$('#ornekSayilar').css("position","absolute")
					.css("left", "150px")
					.css("top", "0")
					.css("bottom", "0")
					.css("width", "40px")
					.css("height", "180px")
					.css("margin", "auto")
					//.css("border", "1px solid")
					//.css("box-sizing","border-box")
					.css("font-size","15px");
	
	$(container).append("<div id='aciklamaYukari'>");
		$('#aciklamaYukari').css("position","absolute")
					.css("left", "10px")
					.css("top", "10px")
					//.css("bottom", "0")
					.css("width", "100px")
					.css("height", "90px")
					.css("margin", "auto").hide()
					//.css("border", "1px solid black")
					//.css("box-sizing","border-box")
					.css("font-size","15px").html("Basamaktaki sayı 5 ya da 5'ten büyük ise yukarıya yuvarlanır");
	
	$(container).append("<div id='aciklamaAsagi'>");
		$('#aciklamaAsagi').css("position","absolute")
					.css("left", "200px")
					//.css("top", "10px")
					.css("bottom", "10px")
					.css("width", "100px")
					.css("height", "80px")
					.css("margin", "auto").hide()
					//.css("border", "1px solid black")
					//.css("box-sizing","border-box")
					.css("font-size","15px").html("Basamaktaki sayı  5'ten küçük ise aşağıya yuvarlanır.");
	
	$(container).append("<div id='ornekCumleOnluk'>");
		$("#ornekCumleOnluk").css("width","400px")
		.css("height","45px")
		.css("position","absolute")
		.css("top","60px")
		//.css("bottom","0")
		.css("left","260px")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","16px")
		//.css("font-weight","bold");
		
		.html("<strong class='sayi' id='ornekSayi1'>1246</strong> <span class='ornekYazi' id='ornekYazi1_1'>en yakın <strong>onluğa</strong> yuvarlanırsa </span><strong class='sayi' id='ornekSayi2'>12<span id='onluk1'>4</span><span id='birlik1'>6</span></strong><span class='ornekYazi' id='ornekYazi1_2'> olur.</span>");
	
	$(container).append("<div id='ornekCumleYuzluk'>");
		$("#ornekCumleYuzluk").css("width","400px")
		.css("height","45px")
		.css("position","absolute")
		.css("top","120px")
		//.css("bottom","0")
		.css("left","260px")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","16px")
		//.css("font-weight","bold");
		
		.html("<strong class='sayi' id='ornekSayi3'>1246</strong> <span class='ornekYazi' id='ornekYazi2_1'>en yakın <strong>yüzlüğe</strong> yuvarlanırsa </span><strong class='sayi' id='ornekSayi4'>1<span id='yuzluk2'>2</span><span id='onluk2'>4</span><span id='birlik2'>6</span></strong> <span class='ornekYazi' id='ornekYazi2_2'>olur.</span>");
	
	
	$(".sayi").css("color","#0070c0","!important").css("font-size","20px").hide();
	$(".ornekYazi").hide();
	
	for(var i=9;i>=0;i--){
		id="sayi_"+i;
		$("#ornekSayilar",container).append("<div class='ornekSayi' id='"+id+"'>");
		$("#"+id).html(i).hide().css("padding-bottom","3px");
	}
	
	for(i=10;i>=0;i--){
		deger="#sayi_"+(i-1);
		$(deger).delay(4500-(i*500)).fadeIn(400);
	}
	
	$("#aciklamaYukari").delay(5500).fadeIn(500);
	$("#aciklamaAsagi").delay(6000).fadeIn(500);
	
	$("#ornekSayi1").delay(7000).fadeIn(500);
	$("#ornekYazi1_1").delay(8000).fadeIn(500);
	$("#ornekSayi2").delay(9000).fadeIn(500);
	
        $("#birlik1").delay(10000).animate({color:"#FF0000"},500);
        for(var i=0; i<6;i++){
            $("#birlik1").fadeOut(500).fadeIn(500);
            if(i==4)
                 $("#birlik1").animate({color:"#0070c0"},5);
            
        }
        
         $("#onluk1").delay(12010).animate({color:"#FF0000"},500);
        for(var i=0; i<4;i++){
            $("#onluk1").fadeOut(500).fadeIn(500);
            if(i==2)
                $("#onluk1").animate({color:"#0070c0"},5);
            
        }
       
        setTimeout("$('#birlik1').html('0')",16020);
        setTimeout("$('#onluk1').html('5')",16020);
        $("#ornekYazi1_2").delay(16020).fadeIn(500);
	
	$("#ornekSayi3").delay(17000).fadeIn(500);
	$("#ornekYazi2_1").delay(18000).fadeIn(500);
	$("#ornekSayi4").delay(19000).fadeIn(500);
        
         $("#birlik2").delay(20000).animate({color:"#FF0000"},500);
        for(var i=0; i<8;i++){
            $("#birlik2").fadeOut(500).fadeIn(500);
            if(i==6)
                 $("#birlik2").animate({color:"#0070c0"},5);
            
        }
        
         $("#onluk2").delay(22020).animate({color:"#FF0000"},500);
        for(var i=0; i<6;i++){
            $("#onluk2").fadeOut(500).fadeIn(500);
            if(i==4)
                $("#onluk2").animate({color:"#0070c0"},5);
            
        }
        
        $("#yuzluk2").delay(24040).animate({color:"#FF0000"},500);
        for(var i=0; i<4;i++){
            $("#yuzluk2").fadeOut(500).fadeIn(500);
            if(i==2)
                $("#yuzluk2").animate({color:"#0070c0"},5);
            
        }
        
        setTimeout("$('#birlik2').html('0')",28000);
        setTimeout("$('#onluk2').html('0')",28000);
        //setTimeout("$('#onluk2').html('0')",30000);
        
	$("#ornekYazi2_2").delay(28000).fadeIn(500);
        
        Main.animationFinished(28000);
	
};


Interaction.init = function(container){
	Main.setObjective("Yandaki sayılar için istenilen yuvarlamayı yaparak klavyeden sayıyı yazınız ve kontrol ediniz.");
	
	
	
	$(container).append("<div id='cerceve'>");
		$("#cerceve").css("width","370px")
		.css("height","45px")
		.css("position","absolute")
		.css("top","50px")
		//.css("bottom","0")
		.css("left","0")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","16px");
		//.css("font-weight","bold");
		
	$(container).append("<div id='cerceveCevap'>");
		$("#cerceveCevap").css("width","370px")
		.css("height","45px")
		.css("position","absolute")
		.css("top","180px")
		//.css("bottom","0")
		.css("left","0")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","16px").hide()
		//.css("font-weight","bold");
		.html("<strong class='sayi'>"+sayi+"</strong> en yakın "+yazi +" yuvarlanırsa <strong class='sayi' id='dogruCevap'>"+yuvarlak+"</strong> olur.");
	var yuvarlak, yuvarlakOn, yuvarlakYuz, yazi,sayi;
	var sira=0;
	function rastgeleSayi(){
		sira++;
		var sayi=Math.floor((Math.random()*9000)+1000);
		
		
		yuvarlakOn=Math.round(sayi/10)*10;
		yuvarlakYuz=Math.round(sayi/100)*100;
	
		yuvarlak=sira%2==0?yuvarlakOn:yuvarlakYuz;
		yazi=sira%2==0?"onluğa":"yüzlüğe";
		//console.log("sira"+sira+"yuvarlak: "+yuvarlak);
		//console.log("en yakın onluk: "+yuvarlakOn);
		//console.log("en yakın yüzlük: "+yuvarlakYuz);
		
		
		return sayi;
	}
	
	sayi=rastgeleSayi();
	
	
	$("#cerceve").html("<strong class='sayi'>"+sayi+"</strong> en yakın "+yazi +" yuvarlanırsa <input type='text' class='sayi' id='girdi' maxlength=5  onkeypress='return SadeceRakam(event)'> olur.");
	$("#cerceveCevap").html("<strong class='sayi' id='soruSayisi'>"+sayi+"</strong> en yakın "+yazi +" yuvarlanırsa <strong class='sayi' id='dogruCevap'>"+yuvarlak+"</strong> olur.");
	$("#dogruCevap").css("color",dogruCevapGosterimRengi);

	
	$("input").live("yeniSoru",function(){
		$(this).css("width","60px")
			.css("height","40px")
			.css("border","solid 1px black")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto").addClass("input").addClass("number_input_field");
	$(".sayi").live("yeniSayi",
		function(){
			
			$(this).css("color","#0070c0","!important").css("font-size","20px")
		}
	);
		$(this).keyup(
			function(event){
				
				girdi=$("#girdi").val();
				if(event.keyCode == 13) {
					//console.log("Key"+event.keyCode);
					kontrol();
				}
				
				
				//console.log("girdi: "+girdi);
			}
	);
	
	});

	//console.log("Sayi: "+sayi);
	
	$(".sayi").css("color","#0070c0","!important").css("font-size","20px");
	
	
	$("#girdi").css("width","60px")
			.css("height","40px")
			.css("border","solid 1px black")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto").addClass("input").addClass("number_input_field");
			
	
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'>");
	$(container).append("<style>#geriBildirim{  position:absolute; right:0; left:0; bottom:120px;height:50px; width:200px !important; margin:auto}</style>");
	
	
	// kontrol butonu
	$(container).append("<button class='control_button'id='btnKontrol'>");
	$(container).append("<style>.control_button{position:absolute; top:230px; right:25px;  }</style>");
	
	//sonraki divi
	$(container).append("<button id='sonraki' class='next_button'>");
	$("#sonraki")
		.css("position","absolute")
		.css("right","25px")
		.css("margin","auto")
		.css("top","230px")
		.css("text-align","center")
		.hide();
	
	$("#yazi").css("width","50px")
	.css("position","absolute")
	.css("height","13px")
	.css("top","0")
	.css("bottom","0")
	.css("left","0")
	.css("right","0")
	.css("margin","auto");

	
	$("#sonraki").hide();
	
	$("#btnKontrol").click(
		function(){
			
			kontrol();
			
		}
	);
	
	$("#sonraki").click(
		function(){yeniSoru();}
	);
	
	var girdi;
	$("#girdi").keyup(
		function(event){
			$("#geriBildirimText").html("");
			girdi=$("#girdi").val();
			if(event.keyCode == 13) {
				//console.log("Key"+event.keyCode);
				kontrol();
			}
			
			
			//console.log("girdi: "+girdi);
		}
	);
	
	function yeniSoru(){
			sayi=rastgeleSayi();
			$("#cerceve").html("<strong class='sayi'>"+sayi+"</strong> en yakın "+yazi +" yuvarlanırsa <input type='text' class='sayi' id='girdi' maxlength=4  onkeypress='return SadeceRakam(event)'> olur.");
			$("input").trigger("yeniSoru");
			$(".sayi").trigger("yeniSayi");
			$("#dogruCevap").html(yuvarlak);
			$("#soruSayisi").html(sayi);
			$("#cerceveCevap").hide();
			$("#sonraki").hide();
			$("#geriBildirimText").html("");
			$("#btnKontrol").show();
			tiklama=0;
		}
	
	var tiklama=0;
	var enter=0;
	function kontrol(){
		
		//console.log("kontrole girdim."+girdi+" "+yuvarlak);
		if ($("#girdi").val()==""){
			//console.log("if girdi boşsa girdim."+girdi+" "+yuvarlak);
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
			console.log("tiklama: "+tiklama);
			if(girdi==yuvarlak){
				enter++;
			//console.log("if doğruysa girdim."+girdi+" "+yuvarlak);
				$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
				$("#btnKontrol").hide();
				$("#sonraki").show();
				if (enter==2)
					yeniSoru();
			}
			else if(tiklama<2 && girdi!=yuvarlak){
				$("#geriBildirimText").attr("class","status_false").html("Tekrar deneyin");
			}
			
			else if(tiklama>2 ||girdi!=yuvarlak){
			//console.log("if doğruysa girdim."+girdi+" "+yuvarlak);
				$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru Cevap:");
				$("#cerceveCevap").show();
				$("#btnKontrol").hide();
				$("#sonraki").show();
				$("#girdi").css("color","red");
			}
			if(tiklama==3){
				console.log("tikalam 3'e grdim");
				yeniSoru();
			}
		}
	}

	
	
};
	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

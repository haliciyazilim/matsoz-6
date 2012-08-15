/*
 Yüzdeleri Karşılaştırma
 Kılavuz: mat-5-yüzdeleri karşılaştırma.pdf
   
 Halıcı Yazılım
 Abdullah Karacabey
 04.07.2012 - 05.07.2012
 */

var dogruCevapGosterimRengi="green";
var kareIlkStrokeColor="black";
var kareIlkFillColor="white";
var ornekKareBoyaliStrokeColor="black";
var ornekKareBoyaliFillColor="#d42b19";
var etkilesimKareBoyaliStrokeColor="#255b63";
var etkilesimKareBoyaliFillColor="#bfe8ef";
var divSonrakiYaziRenk="white";
var divSonrakiFillRenk="#4682b4";

var Animation = function(){};Animation();
var Interaction = function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}


Animation.init=function(container){


	
	
	
	// Sağdaki ve soldaki boş kareler çiziliyor.
	var ornekBosKareSol= new OrnekKare(100, kareIlkFillColor, kareIlkStrokeColor,40.5,20.5);
		ornekBosKareSol.opacity=0;
	
		ornekBosKareSol.animate({
			style: {
				opacity: 1
			},
			duration: 1000,
			delay: 1000
		});
	
	var ornekBoyaliKareSol=new OrnekKare(25, ornekKareBoyaliFillColor, ornekKareBoyaliStrokeColor,40.5,20.5);
	ornekBoyaliKareSol.opacity=0;

		ornekBoyaliKareSol.animate({
			style: {
				opacity: 1
			},
			duration: 1000,
			delay: 2000,
			callback: function () {
				//bosKareSol.remove();
			}
		});


	$(container).append("<div id='yaziSol'>");
	$("#yaziSol").css("position","absolute")
				.css("left", "55px")
				.css("top", "160px")
				.css("width", "120px")
				.css("font-size","12px")
				.css("text-align","center")
				.css("height", "12px").html("yüzde yirmi beş");
	
	$(container).append("<div id='yaziSag'>");
	$("#yaziSag").css("position","absolute")
				.css("right", "50px")
				.css("top", "160px")
				.css("width", "120px")
				.css("font-size","12px")
				.css("text-align","center")
				.css("height", "12px").html("yüzde otuz iki");
				
	$(container).append("<div id='yaziOrta'>");
	$("#yaziOrta").css("position","absolute")
				.css("margin", "auto")
				.css("right", "0")
				.css("top", "0")
				.css("bottom", "0")
				.css("left", "0")
				.css("width", "210px")
				.css("height", "40px")
				.css("font-size","18px");
				//.css("border","solid 1px black");	
	$("#yaziOrta", container).append("<div class='karsilastirma' id='yuzdeSol'>");
	$("#yaziOrta", container).append("<div class='karsilastirma' id='isaret'>");
	$("#yaziOrta", container).append("<div class='karsilastirma' id='yuzdeSag'>");
	$(".karsilastirma").css("float","left")
				.css("margin-left", "2px")
				.css("width", "32%")
				.css("height", "40px")
				//.css("border","solid 1px black")
				.css("font-size","20px")
				.css("text-align","center");
				
	$("#yuzdeSol").html("%25");
	$("#isaret").html("<");
	$("#yuzdeSag").html("%32");
							
				
		
	exampleHelper={
		
		yaziSol:0,
		yaziSag:0,
		yuzdeSol:0,
		yuzdeSag:0,
		isaret:0
		
		
	};
				
				
	var ornekBosKareSag= new OrnekKare(100, kareIlkFillColor, kareIlkStrokeColor,600.5,20.5);
	
	
	ornekBosKareSag.opacity=0;
	ornekBosKareSag.animate({
		style: {
			opacity: 1
		},
		duration: 1000,			
		delay: 1000
	});
	var ornekBoyaliKareSag=new OrnekKare(32, ornekKareBoyaliFillColor, ornekKareBoyaliStrokeColor,600.5,20.5);
	ornekBoyaliKareSag.opacity=0;
	
		ornekBoyaliKareSag.animate({
			style: {
				opacity: 1
			},
			duration: 1000,
			delay: 2000,
			callback: function () {
				//bosKareSol.remove();
			}
		});
	
	Animation.onFrame = function(event){
		$('#yaziSol').css("opacity", exampleHelper.yaziSol);
		$('#yaziSag').css("opacity", exampleHelper.yaziSag);
		$('#yuzdeSol').css("opacity", exampleHelper.yuzdeSol);
		$('#isaret').css("opacity", exampleHelper.isaret);
		$('#yuzdeSag').css("opacity", exampleHelper.yuzdeSag);
	}
	exampleHelper.animate = Item.prototype.animate;
	
	exampleHelper.animate({
		style:{
			isaret:1
		},
		duration:1000,
		delay:5000
	});
	
	exampleHelper.animate({
		style:{
			
			yaziSol:1,
			yaziSag:1,
		},
		duration:1000,
		delay:3000
	});
	
	exampleHelper.animate({
		style:{
			yuzdeSol:1,
			yuzdeSag:1,
		},
		duration:1000,
		delay:4000
	});
	
	
	

		
Main.animationFinished(6000);

};

Interaction.init = function(container){

	Main.setObjective("Yandaki yüzlük tabloların altındaki kutulara 0 ile 100 arasında sayılar yazınız. Sonra ortadaki bölümde oluşan yüzdeler  arasına gelecek <br /> “<” (küçük) ya da <br/>“>” (büyük) işaretlerinden uygun olanına basarak yüzdeleri karşılaştırınız. Daha sonra doğruluğunu kontrol ediniz.");
	$(Main.objective).css("font-size","14px");
	
	//sol div bilgileri	
	$(container).append("<div id='sol'>");
	$(container).append("<style>#sol{position:absolute; top:165px; left:40px; width:100px; height:100px}</style>");
	
	
	$("#sol",container).append("<input id='girisSol' type='text'  width: 30px; height:30px; maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$("#sol",container).append("<div id='kesir1'>");
	$('#kesir1').css("position","absolute")
				.css("left", "30px")
				.css("top", "40px")
				.css("width", "40px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
				.css("box-sizing","border-box");
				
	//$("#sol #kesir",container).append("_____");
	//Path.Fraction(57,170,0,0,25);
	$("#sol",container).append("<div class='payda'>");
	$("#sol .payda",container).append("100");
	
	$(container).append("<style>#girisSol{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; font-size:18px}</style>");
	
	//orta div bilgileri
	$(container).append("<div id='orta'>");
	$(container).append("<style>#orta{position:absolute; top:30px; left:0; right:0; margin: auto;width:220px; height:100px; border:solid 1px black}</style>");
	$("#orta", container).append("<div id='buyukKucuk'>");
	$("#orta", container).append("<style> #buyukKucuk{margin:auto;position:absolute; top:5px; left:0; right:0; height:30px; width:70px;}</style>");
	$("#orta #buyukKucuk", container).append("<img id='kucuk' src='/assets/animations/yuzdeleri_karsilastirma/sol_ok.png' />");
	$("#orta", container).append("<style> #kucuk{position: absolute; left:0px; top:0px;}</style>");
	
	
	$("#orta #buyukKucuk", container).append("<img id='buyuk' src='/assets/animations/yuzdeleri_karsilastirma/sag_ok.png' />");
	$("#orta", container).append("<style> #buyuk{position: absolute; left:40px; top:0px;}</style>");
	
	$("#orta #buyukKucuk #kucuk", container).append("<div class='isaret'><</div>");
	$("#orta #buyukKucuk #buyuk", container).append("<div class='isaret'>></div>");
	$("#orta #buyukKucuk", container).append("<style>.isaret{width:10px; height:13px;margin:auto;position:absolute; left:0; right:0; top:0; bottom:0;}");
	
	$("#orta", container).append("<div id='girdiler'>");
	$("#orta", container).append("<style> #girdiler{margin:auto;position:absolute; left:0; right:0; top:50px; width:200px ;font-weight:bold;float:left; text-align:center}</style>");
	
	//$("#orta #girdiler", container).append("<div id='yuzde1'>");
	$("#orta", container).append("<style> #yuzde1{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("% ");
	
	//$("#orta #girdiler", container).append("<div id='cevap1'>");
	$("#orta", container).append("<style> #cevap1{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("<input id='girdiCevap1' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/> ");
	$(container).append("<style>#girdiCevap1{width:30px; height:30px;}</style>");
	
	//$("#orta #girdiler", container).append("<div id='cevap2'>");
	$("#orta", container).append("<style> #cevap2{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("<input id='girdiCevap2' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$(container).append("<style>#girdiCevap2{width:30px; height:30px;}</style>");
	
	//$("#orta #girdiler", container).append("<div id='yuzde2'>");
	$("#orta", container).append("<style> #yuzde1{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append(" % ");
	
	//$("#orta #girdiler", container).append("<div id='cevap3'>");
	$("#orta", container).append("<style> #cevap3{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("<input id='girdiCevap3' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$(container).append("<style>#girdiCevap3{width:30px; height:30px;}</style>");
	
	$(container).append("<style>input {text-align:center;font-weight:bold; font-size:large;}</style>");
	
	//sağ div bilgileri	
	$(container).append("<div id='sag'>");
	$(container).append("<style>#sag{position:absolute; top:165px; right:40px; width:100px; height:100px}</style>");
	
	
	$("#sag",container).append("<input id='girisSag' type='text' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$("#sag",container).append("<div id='kesir2'>");
	$('#kesir2').css("position","absolute")
				.css("left", "30px")
				.css("top", "40px")
				.css("width", "40px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	//Path.Fraction(409,170,0,0,25);
	//$("#sag #kesir",container).append("_____");
	$("#sag",container).append("<div class='payda'>");
	$("#sag .payda",container).append("100");
	$(container).append("<style>#girisSag{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; }</style>");
	
	$(".payda").css("margin","auto")
	.css("position","absolute")
	.css("top","50px")
	.css("left","0")
	.css("right","0")
	.css("width","35px")
	.css("height","10px")
	.css("text-align","center")
	.css("font-size","18px");
	
	
	
	
	// kontrol butonu
	$(container).append("<button class='control_button' id='btnKontrol'>");
	$(container).append("<style>.control_button{position:absolute; top:250px; margin:auto;right:0px; left:0px; }</style>");
	
	//sonraki divi
	$(container).append("<button id='sonraki' class='next_button'>");
	$("#sonraki")
		.css("position","absolute")
		
		.css("right","0")
		.css("left","0")
		.css("margin","auto")
		.css("top","250px")
		.css("text-align","center")
		.hide();
	
	// Gösterilecek gCevaplar
	$("#orta", container).append("<div id='gCevaplar'>");
	$("#orta", container).append("<style> #gCevaplar{margin:auto;position:absolute; left:0; right:0; top:150px; width:200px ;font-weight:bold;float:left; text-align:center; font-size:18px}</style>");
	$("#orta", container).append("<style>.cevapİsaret{color:"+dogruCevapGosterimRengi+"}");

	$("input").addClass("input");
	$("input").addClass("number_input_field");
	$("input").css("font-size","18px");
	
	
	
	
	// Sağdaki ve soldaki boş kareler çiziliyor.
	bosKareSol= new Kare(100, kareIlkFillColor, etkilesimKareBoyaliStrokeColor,30,30);
	bosKareSol.yap();
	
	bosKareSag= new Kare(100, kareIlkFillColor, etkilesimKareBoyaliStrokeColor,440,30);
	bosKareSag.yap();
	
	/*
	girdi=$("#giris").val();
	boyaliKareSol=new kare(,kareBoyaliFillColor, kareBoyaliStrokeColor,30,30);
	boyaliKareSol.yap();
	*/
	
	// Sol kareler boyanıyor.
	var girdi;
	
	$("#girisSol").keyup(
		function(){
			if(Interaction.boyaliKareSolGroup)
				Interaction.boyaliKareSolGroup.remove();
				
			//Interaction.group.remove();
			//bosKareSol.yap();
			girdi=$("#girisSol").val();
			$("#girdiCevap1").val(girdi);
			boyaliKareSol=new Kare(girdi,etkilesimKareBoyaliFillColor, etkilesimKareBoyaliStrokeColor,30,30);
			Interaction.boyaliKareSolGroup = boyaliKareSol.yap();
	});
	
	//Sağ kareler boyanıyor.
	$("#girisSag").keyup(
		function(){
				if(Interaction.boyaliKareSagGroup)
				Interaction.boyaliKareSagGroup.remove();
			//bosKareSag.yap();
			girdi=$("#girisSag").val();
			$("#girdiCevap3").val(girdi);
			boyaliKareSag=new Kare(girdi,etkilesimKareBoyaliFillColor, etkilesimKareBoyaliStrokeColor,440,30);
			Interaction.boyaliKareSagGroup = boyaliKareSag.yap();
	});
	
	// girdi kontrolleri
	$("#girisSol").keyup(
		function(){
			$("#geriBildirim").hide();
	    	var input=parseInt(this.value);
	    	if(input<0 || input>100){
				//Interaction.group.remove();
    			//alert("0 ile 100 arasında bir sayı giriniz.");
    			if(Interaction.boyaliKareSolGroup)
					Interaction.boyaliKareSolGroup.remove();
			
				$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("0 ile 100 arasında bir sayı giriniz.");
				$("#geriBildirim").show();
    			//bosKareSol.yap();
    			//$("#girisSol").val("");
    		}
    		if($("#girisSol").val()!="" && $("#girisSag").val()!="" && $("#girisSol").val()==$("#girisSag").val()){
    			//alert("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
    			console.log("sol: "+$("#girisSol").val()+ " sag: "+$("#girisSag").val());
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
				$("#geriBildirim").show();
    			//$(this).val("");
    			//$("#girdiCevap1").val("");
    		}
	    	return;
		});  
	
	$("#girisSag").keyup(
		function(){
			$("#geriBildirim").hide();
	    	var input=parseInt(this.value);
	    	if(input<0 || input>100){
    			//alert("0 ile 100 arasında bir sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("0 ile 100 arasında bir sayı giriniz.");
				$("#geriBildirim").show();
    			bosKareSag.yap();
    			//$("#girisSag").val("");
    		}
    		if( $("#girisSol").val()==$("#girisSag").val()){
    			//alert("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
				$("#geriBildirim").show();
    			//$(this).val("");
    			//$("#girdiCevap3").val("");
    		}
	    	return;
		});  
		
	function buyuk(){
			$("#girdiCevap2").val("");
			$("#girdiCevap2").val(">");
			$("#geriBildirim").hide();
		}
	
	$("#buyuk").click(
		function(){
			buyuk();
		}
	);
	
	function kucuk(){
			$("#girdiCevap2").val("");
			$("#girdiCevap2").val("<");
			$("#geriBildirim").hide();
		}
	
	$("#kucuk").click(function(){
		kucuk();
	}
	);
	
	
	
	$("#btnKontrol").click(
		function(){
			
			console.log("kontrole basıldı");
			
			kontrol();
		}
	);
	
	function kontrol(){
		
		var girdi1=$("#girdiCevap1").val();
			var girdi2=$("#girdiCevap3").val();
			var isaret=$("#girdiCevap2").val();
			
			
			
			if(girdi1 == "" || girdi1 == undefined || girdi2 == "" || girdi2 == undefined || isaret == ""|| isaret == undefined)
			{
				$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Lütfen kutucukları doldurun!");
				$("#geriBildirim").show();
			}
			else{
				
				var input=parseInt(this.value);
	    	if(input<0 || input>100){
    			//alert("0 ile 100 arasında bir sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("0 ile 100 arasında bir sayı giriniz.");
				$("#geriBildirim").show();
    			bosKareSag.yap();
    			}
    			/*
    		else if(($("#girisSol").val()==" "  || $("#girisSol").val()==" ") && $("#girisSol").val()==$("#girisSag").val()){
    			alert("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
				$("#geriBildirim").show();
    			$(this).val("");
    			$("#girdiCevap3").val("");
    		}
    		*/
    		else{	
				if(isaret=="<"){
					if(girdi1<girdi2){
						$("#btnKontrol").hide();
						$("#sonraki").show();
						//$("#geriBildirim").hide();
						//$("#geriBildirim").removeClass("status_false").addClass("status_true").html("Tebrikler");
						$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
						$("#geriBildirim").show();
						
						$("#kucuk").unbind("click");
						$("#buyuk").unbind("click");
						
					}
					
				else if(girdi1>girdi2)
				{
					$("#geriBildirimText").attr("class","status_false").html("Yanlış. Cevap:");
					
					//$(container).append("<style>#girdiCevap2{color:"+dogruCevapGosterimRengi+"}");
					$("#gCevaplar").html("%"+girdi1+" <stroke class='cevapİsaret'>></stroke> %"+girdi2);
					$("#gCevaplar").show();
					
					$("#geriBildirim").show();
					$("#btnKontrol").hide();
					$("#sonraki").show();
					$("#kucuk").unbind("click");
					$("#buyuk").unbind("click");
					//$("#buyuk").attr("id","b");
					
					
				}
			
			}
			if(isaret==">"){
				if(girdi1>girdi2){
					$("#btnKontrol").hide();
					$("#sonraki").show();
					//$("#geriBildirim").hide();
					//$("#geriBildirim").removeClass("status_false").addClass("status_true");
					$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
					$("#geriBildirim").show();
					
					$("#kucuk").unbind("click");
					$("#buyuk").unbind("click");
					
				}
				else if(girdi1<girdi2)
				{
					$("#geriBildirimText").attr("class","status_false").html("Yanlış. Cevap:");
					
					//$(container).append("<style>#girdiCevap2{color:"+dogruCevapGosterimRengi+"}");
					$("#gCevaplar").html("%"+girdi1+" <stroke class='cevapİsaret'><</stroke> %"+girdi2);
					
					$("#gGirdiCevap1").val($("#girdiCevap1").val());
					$("#gGirdiCevap2").val("<");
					$("#gGirdiCevap3").val($("#girdiCevap3").val());
					$("#gCevaplar").show();
					
					$("#geriBildirim").show();
					$("#btnKontrol").hide();
					$("#sonraki").show();
					
					$("#kucuk").unbind("click");
					$("#buyuk").unbind("click");
				}
			}
			
			
			
				
				
		}	}
		
	}
	
	
	$("#girisSol").keyup(function(event) {
		if(event.keyCode == 13) {
			console.log("Key"+event.keyCode);
			kontrol();
		}
	});
	
	$("#girisSag").keyup(function(event) {
		if(event.keyCode == 13) {
			kontrol();
		}
	});
	
	
	
	// Geri bildirim
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'></div>");
	$("#geriBildirim").css("margin","auto")
	.css("position","absolute")
	.css("top","0")
	.css("left","0")
	.css("right","0")
	.css("bottom","0")
	.css("width","200px")
	.css("height","20px")
	.css("text-align","center");
	
	//$("#geriBildirimText", container).append("Naber?");
	
	
	$("#sonraki").click(
		function(){
			$("#geriBildirim").hide();
			$("#btnKontrol").show();
			$("#sonraki").hide();
			$("#gCevaplar").hide();
			$("#girisSol").val("");
			$("#girisSag").val("");
			$("#girdiCevap1").val("");
			$("#girdiCevap2").val("");
			$("#girdiCevap3").val("");
			
			$("#kucuk").bind("click", kucuk);
			$("#buyuk").bind("click", buyuk);
			
			bosKareSol.yap();
			bosKareSag.yap();
			
		}
	);
	
	
};
// kare sınıfı

var OrnekKare = function(kareSayisi, dolguRengi, hatRengi, x,y) {
	this.animate = Item.prototype.animate;
	this.kareSayisi=kareSayisi;
	this.dolguRengi=dolguRengi;
	this.hatRengi=hatRengi;
	this.x=x;
	this.y=y;
	
	var group = new Group();	

	var girdi=this.kareSayisi;
			
	var onluk=Math.floor(girdi/10)==0?1:Math.floor(girdi/10+1);
	var birlik=Math.floor(girdi%10);
		
	var girilenKareSayisi=10;
	
	for(j=0;j<onluk && j<10;j++){
				
		if(j==(onluk-1))
			girilenKareSayisi=birlik;
		else
			var girilenKareSayisi=10;
					
		for(i=0; i<girilenKareSayisi && i<10;i++){
					
			boyaliKare = new Rectangle((this.x+i*12),(this.y+j*12),12,12); //x,y,width,height
			var path = new Path.Rectangle(boyaliKare);
			path.fillColor = this.dolguRengi;
			path.strokeColor=this.hatRengi;
			
			if(dolguRengi!="white"){
				path.opacity = 0;
				path.animate({
					style: {
						opacity: 1
					},
					duration: 250,
					delay: 20 * (j*10 + i)
				})
			}
			
			group.addChild(path);
		}	
	}
	
	return group;
}


var Kare= function(kareSayisi, dolguRengi, hatRengi, x,y){
		this.animate = Item.prototype.animate;
		this.kareSayisi=kareSayisi;
		this.dolguRengi=dolguRengi;
		this.hatRengi=hatRengi;
		this.x=x;
		this.y=y;
		this.yap=kareYap;
		
	}
	
	function kareYap(){
		
		var group = new Group();	

		var girdi=this.kareSayisi;
				
		var onluk=Math.floor(girdi/10)==0?1:Math.floor(girdi/10+1);
		var birlik=Math.floor(girdi%10);
			
		var girilenKareSayisi=10;
		
		for(j=0;j<onluk && j<10;j++){
					
			if(j==(onluk-1))
				girilenKareSayisi=birlik;
			else
				var girilenKareSayisi=10;
						
			for(i=0; i<girilenKareSayisi && i<10;i++){
						
				boyaliKare = new Rectangle((this.x+i*12)+0.5,(this.y+j*12)+0.5,12,12); //x,y,width,height
				var path = new Path.Rectangle(boyaliKare);
				path.fillColor = this.dolguRengi;
				path.strokeColor=this.hatRengi;
				
				// Tek Tek boyama
					/*if(this.dolguRengi!="white"){
						path.opacity = 0;
						path.animate({
							style: {
								opacity: 1
							},
							duration: 250,
							delay: 20 * (j*10 + i)
						})
					}*/
				
				group.addChild(path);
			}	
			
		}
		
		return group;
		
	}
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}

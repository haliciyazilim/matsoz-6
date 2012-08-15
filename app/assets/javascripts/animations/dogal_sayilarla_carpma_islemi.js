/**
 * Doğal sayılarla çarpma işlemi
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 17.07.2012
 * 
 * 
 */



var yanlisRengi="#d42b19";
var dogruRengi="green";
var kalanRengi="#255b63";
var Animation = function(){};Animation();

var Interaction = function(){};Interaction();

Interaction.getFramework = function() {
	return 'paper';
}


Animation.init=function(container){
	
    $(container).append("<div id='ornek'>");
    $("#ornek").css("width","120px")
        .css("height","130px")
	.css("margin","auto")
	.css("position","absolute")
	.css("left","290px")
	.css("top","10px");

        var islem=new LongMultiplication(502,235,"ornek",30);
        //var islem=new LongMultiplication(178,172,"ornek");
        islem.doldur()
        islem.basla(1000,1000);
        
         Main.animationFinished(47000);

};


Interaction.init = function(container){
	Main.setObjective("Yandaki çarpma işlemini yapınız ve kontrol ediniz.");
		
	// Soru Divi
	$(container).append("<div id='soru'>");
		$("#soru").css("width","120px")
		.css("height","130px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		.css("left","0")
		.css("right","0")
		.css("top","0px")
		.css("font-size","20px");
		//.css("border","solid 1px black");
	
	// Cevap Divi
	$(container).append("<div id='cevap'>");
		$("#cevap").css("width","120px")
		.css("height","130px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")

		.css("right","120px")
		.css("top","0px")
		.css("font-size","20px")
		.css("opacity","0");
		//.css("border","solid 1px black");
	
	// Geri bildirim
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'></div>");
	$("#geriBildirim").css("position","absolute")
		.css("top","258px")
		.css("right","0")
		.css("left","0")
		.css("margin","auto")
		.css("width","210px");
	
	
	// kontrol butonu
	$(container).append("<button class='control_button' id='btnKontrol'></button>");
	$(container).append("<style>.control_button{position:absolute; top:250px; right:50px; }</style>");
	
	//sonraki divi
	$(container).append("<button id='sonraki' class='next_button'>");
	$("#sonraki")
		.css("position","absolute")
		.css("right","50px")
		.css("margin","auto")
		.css("top","250px")
		.css("text-align","center")
		.hide();
	$("#girdi1, #girdi2, #girdi3").keyup(
		function(){
			$("#geriBildirim").hide();
		}
	);
	$("#btnKontrol").click(
		function(){
			kontrol();
				
		}
	);
	$("#sonraki").click(
		function(){
			yeniSoru();
		}
	);
	function yeniSoru(){
		soruSirasi++;
		soruId++;
		$("#soru").html("");
		$("#geriBildirimText").html("");
		$("#sonraki").hide();
		$("#btnKontrol").show();
		
		
		function soruSecimi(){
			if(soruSirasi<=7)
					soruGetir();
				else
					randomSoruGetir();
			$("#girdi, #girdi1, #girdi2, #girdi3").trigger("yeniSoru");
		}
		if(soruSirasi>1){
			$("#cevap").animate({opacity:"0"},1000);
			$("#soru").delay(800).animate({right:"0px"},1000);
			//setTimeout(soruSecimi,1800);
		}
		
		soruSecimi();
	}
	
	var soruSirasi=0;
	var soruId=0;
	
	//Normal Çarpma için
	var carpma1="";
	var carpma2="";
	var toplam="";
	
	// Normal Çarpma
	function carpma(){
		
		carpan1="";
		carpan2="";
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?100:10;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		carpan1=Math.floor(Math.random()*100+100);
		console.log(carpan1);
		carpan2=Math.floor(Math.random()*100+sayiSiniri);
                carpan2=Math.floor(Math.random()*100+100);
		console.log(carpan2);
		
		
		
		
			
	$("#soru",container).append("<div id='carpan1' class='carpan'>");
		$("#carpan1")
		.css("top","10px").html(format(carpan1, {point:'.'}));
		
	$("#soru",container).append("<div id='carpan2' class='carpan'>");
		$("#carpan2")
		.css("top","50px").html(format(carpan2, {point:'.'}));
		
	$("#soru",container).append("<div id='carpmaIsareti'>");
	$("#carpmaIsareti").css("width","100px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("x");
		
		
	var carpan2Str=carpan2.toString();
	var icerik= new Array();
	for (var i=0; i<=carpan2Str.length; i++){
		icerik[i]=carpan1*carpan2Str.charAt(carpan2Str.length-i);
		
		if(icerik[i]==0)
			icerik[i]="000";
		console.log("icerik_"+i+": "+icerik[i]);
	}
	
	for(var i=0; i<carpan2Str.length;i++){
		var top=(100+35*i);
		var right=(i*16);
		var id=i+1;
		
			$("#soru",container).append("<div id='sonuc"+id+"'/>");	
			$("#sonuc"+id).css("width","100px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right",right)
				.css("font-size","30px")
				.css("top",top+"px")
				.css("z-index","5")
				.html(icerik[i+1]);
			
			$("#soru",container).append("<input id='girdi"+id+"' type='text' maxlength=5  onkeypress='return SadeceRakam(event)'/>");	
			$("#girdi"+id).css("width","100px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right",right)
				.css("font-size","30px")
				.css("top",top+"px")
				.css("z-index","5");
		
		 if(i==(carpan2Str.length-1)){
			$("#soru",container).append("<div id='toplamaIsareti'>");
			$("#toplamaIsareti").css("width",120+i*20+"px")
				.css("text-align","left")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				.css("right","0px")
				.css("font-size","30px")
				.css("border-bottom","solid 2px black")
				.css("top",(top+5)+"px")
				.html("+");
				
			$("#soru",container).append("<div id='sonucToplam'/>");	
			$("#sonucToplam").css("width",120+(i-1)*16+"px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right","0px")
				.css("font-size","30px")
				.css("top",top+40+"px")
				.css("z-index","5")
				.html(carpan1*carpan2);
				
			$("#soru",container).append("<input id='girdiToplam' type='text' maxlength=5  onkeypress='return SadeceRakam(event)'/>");	
			$("#girdiToplam").css("width",120+(i-1)*16+"px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right","0px")
				.css("font-size","30px")
				.css("top",top+40+"px")
				.css("z-index","5");
				
		
		
		}
		
		

	}
		
	
	
	/*$("#soru",container).append("<div id='toplam' class='carpan'>");
				$("#toplam")
				.attr("style","top:210px; right:32px !important")
				.html(format(toplam, {point:'.'}));*/
				
	$("input").addClass("input").addClass("number_input_field");
	
	$(".carpan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
	$("#girdi1, #girdi2, #girdi3, #girdiToplam").keydown(function(event){
					var pos;
					if(event.keyCode == 8)
						pos = 1;
					else
						pos = 0; 
					if(this.createTextRange){
						var textRange = node.createTextRange();
						textRange.collapse(true);
						textRange.moveEnd(pos);
						textRange.moveStart(pos);
						textRange.select();
						return true;
					}else if(this.setSelectionRange){
						this.setSelectionRange(pos,pos);
						return true;
					}
				});
	
	
	$("#girdi1, #girdi2, #girdi3, #girdiToplam").keyup(
		function(){
			var icerik=$(this).val();
			
			$(this).val(icerik);
			console.log($(this).val());
		}
	);
	
	
	}
	
	
	//Bilinmeyen Çarpanlar
	
	function bilinmeyenCarpanlar(){
				
		carpan1="";
		carpan2="";
		var icerik="";
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?100:10;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		carpan1=Math.floor(Math.random()*100+100);
		console.log(carpan1);
		carpan2=Math.floor(Math.random()*100+sayiSiniri);
                carpan2=Math.floor(Math.random()*100+100);
		console.log(carpan2);
		var toplam=carpan1*carpan2;
		
		
		
		
			
	$("#soru",container).append("<input id='girdi' class='carpan' type='text' maxlength=5  onkeypress='return SadeceRakam(event)'/>");	
		$("#girdi")
		.css("top","10px")
		.css("z-index","5");
		
	$("#soru",container).append("<div id='carpan1' class='carpan'>");
		$("#carpan1")
		.css("top","10px").html(format(carpan1, {point:'.'}));
			
	$("#soru",container).append("<div id='carpan2' class='carpan'>");
		$("#carpan2")
		.css("top","50px").html(format(carpan2, {point:'.'}));
		
	$("#soru",container).append("<div id='carpmaIsareti'>");
	$("#carpmaIsareti").css("width","100px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("x");
		
		
	var carpan2Str=carpan2.toString();
	var icerik= new Array();
	for (var i=0; i<=carpan2Str.length; i++){
		icerik[i]=carpan1*carpan2Str.charAt(carpan2Str.length-i);
		
		if(icerik[i]==0)
			icerik[i]="000";
		console.log("icerik_"+i+": "+icerik[i]);
	}
	
	for(var i=0; i<carpan2Str.length;i++){
		var top=(100+35*i);
		var right=(i*16);
		var id=i+1;
		
		
			$("#soru",container).append("<div id='sonuc"+id+"'/>");	
			$("#sonuc"+id).css("width","100px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right",right)
				.css("font-size","30px")
				.css("top",top+"px")
				.css("z-index","5")
				.html(icerik[i+1]);
		
		 if(i==(carpan2Str.length-1)){
			$("#soru",container).append("<div id='toplamaIsareti'>");
			$("#toplamaIsareti").css("width",80+i*20+"px")
				.css("text-align","left")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				.css("right","0px")
				.css("font-size","30px")
				.css("border-bottom","solid 2px black")
				.css("top",(top+5)+"px")
				.html("+");
				
			$("#soru",container).append("<div id='sonucToplam'/>");	
			$("#sonucToplam").css("width",120+(i-1)*16+"px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right","0px")
				.css("font-size","30px")
				.css("top",top+40+"px")
				.css("z-index","5")
				.html(toplam);
				
				
		
		
		}
	}
	
	
		
	
	

				
	$("input").addClass("input").addClass("number_input_field");
	
	$(".carpan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
	$("#girdi").keydown(function(event){
					var pos;
					if(event.keyCode == 8)
						pos = 1;
					else
						pos = 0; 
					if(this.createTextRange){
						var textRange = node.createTextRange();
						textRange.collapse(true);
						textRange.moveEnd(pos);
						textRange.moveStart(pos);
						textRange.select();
						return true;
					}else if(this.setSelectionRange){
						this.setSelectionRange(pos,pos);
						return true;
					}
				});
	
	
	
	
	
	}
	
	//Tek Çarpanlar
	
	function tekCarpanlar(){
		if (soruId==6){
				
		carpan1="";
		carpan2="";
		var icerik="";
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?100:10;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		carpan1=Math.floor(Math.random()*100+100);
		console.log(carpan1);
		carpan2=Math.floor(Math.random()*100+sayiSiniri);
                carpan2=Math.floor(Math.random()*100+100);
		console.log(carpan2);
		var toplam=carpan1*carpan2;
		
		
		
	$("#soru",container).append("<div id='cevap1'>");	
		$("#cevap1").attr("style"," right:35px !important; ").css("top","10px").css("z-index","4");
	$("#soru",container).append("<div id='cevap2'>");
		$("#cevap2").attr("style"," right:0px !important; ").css("top","50px").css("z-index","4");
	
	$("#soru",container).append("<input id='girdi1' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>");	
		$("#girdi1").attr("style"," right:35px !important; ").css("top","7px").css("z-index","5");
	$("#soru",container).append("<input id='girdi2' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>");
		$("#girdi2").attr("style"," right:0px !important; ").css("top","47px").css("z-index","5");

	
	
	$("input").addClass("input").addClass("number_input_field");
	
	$("#girdi1, #girdi2, #cevap1, #cevap2").css("width","16px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("right","0px")
		.css("font-size","30px");
		
	$("#soru",container).append("<div id='carpan1' class='carpan'>");
		$("#carpan1")
		.css("top","10px").html(format(carpan1, {point:'.'}));
		
			
	$("#soru",container).append("<div id='carpan2' class='carpan'>");
		$("#carpan2")
		.css("top","50px").html(format(carpan2, {point:'.'}));
		
	$("#soru",container).append("<div id='carpmaIsareti'>");
	$("#carpmaIsareti").css("width","100px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("x");
		
	
		
	var carpan2Str=carpan2.toString();
	var icerik= new Array();
	for (var i=0; i<=carpan2Str.length; i++){
		icerik[i]=carpan1*carpan2Str.charAt(carpan2Str.length-i);
		
		if(icerik[i]==0)
			icerik[i]="000";
		console.log("icerik_"+i+": "+icerik[i]);
	}
	
	for(var i=0; i<carpan2Str.length;i++){
		var top=(100+35*i);
		var right=(i*16);
		var id=i+1;
		
		
			$("#soru",container).append("<div id='sonuc"+id+"'/>");	
			$("#sonuc"+id).css("width","100px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right",right)
				.css("font-size","30px")
				.css("top",top+"px")
				.css("z-index","5")
				.html(icerik[i+1]);
		
		 if(i==(carpan2Str.length-1)){
			$("#soru",container).append("<div id='toplamaIsareti'>");
			$("#toplamaIsareti").css("width",90+i*10+"px")
				.css("text-align","left")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				.css("right","0px")
				.css("font-size","30px")
				.css("border-bottom","solid 2px black")
				.css("top",(top+5)+"px")
				.html("+");
				
			$("#soru",container).append("<div id='sonucToplam'/>");	
			$("#sonucToplam").css("width",120+(i-1)*16+"px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right","0px")
				.css("font-size","30px")
				.css("top",top+40+"px")
				.css("z-index","5")
				.html(toplam);
				
				
		
		
		}
	}
	
	
		
	
	

				
	$("input").addClass("input").addClass("number_input_field");
	
	$(".carpan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
	$("#girdi").keydown(function(event){
					var pos;
					if(event.keyCode == 8)
						pos = 1;
					else
						pos = 0; 
					if(this.createTextRange){
						var textRange = node.createTextRange();
						textRange.collapse(true);
						textRange.moveEnd(pos);
						textRange.moveStart(pos);
						textRange.select();
						return true;
					}else if(this.setSelectionRange){
						this.setSelectionRange(pos,pos);
						return true;
					}
				});
	
	
	
		}
		else if (soruId==7){
				
		carpan1="";
		carpan2="";
		var icerik="";
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?100:10;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		carpan1=Math.floor(Math.random()*100+100);
		console.log(carpan1);
		carpan2=Math.floor(Math.random()*100+sayiSiniri);
		console.log(carpan2);
		var toplam=carpan1*carpan2;
		
		
	
	$("#soru",container).append("<div id='cevap1'>");	
		$("#cevap1").attr("style"," right:1px !important; ").css("top","10px").css("z-index","4");
	$("#soru",container).append("<div id='cevap2'>");
		$("#cevap2").attr("style"," right:18px !important; ").css("top","50px").css("z-index","4");
	$("#soru",container).append("<div id='cevap3'>");
		$("#cevap3").attr("style"," right:34px !important; ").css("top","135px").css("z-index","4");
		
	
	$("#soru",container).append("<input id='girdi1' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>");	
		$("#girdi1").attr("style"," right:0px !important; ").css("top","7px").css("z-index","5");
	$("#soru",container).append("<input id='girdi2' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>");
		$("#girdi2").attr("style","right:18px !important; ").css("top","47px").css("z-index","5");
	$("#soru",container).append("<input id='girdi3' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>");
		$("#girdi3").attr("style","right:33px !important; ").css("top","130px").css("z-index","5");

	$("input").addClass("input").addClass("number_input_field");
	
	$("#girdi1, #girdi2, #girdi3, #cevap1, #cevap2, #cevap3").css("width","16px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("right","0px")
		.css("font-size","30px");
		
	$("#soru",container).append("<div id='carpan1' class='carpan'>");
		$("#carpan1")
		.css("top","10px").html(format(carpan1, {point:'.'}));
		
			
	$("#soru",container).append("<div id='carpan2' class='carpan'>");
		$("#carpan2")
		.css("top","50px").html(format(carpan2, {point:'.'}));
		
	$("#soru",container).append("<div id='carpmaIsareti'>");
	$("#carpmaIsareti").css("width","100px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("x");
		
	
		
	var carpan2Str=carpan2.toString();
	var icerik= new Array();
	for (var i=0; i<=carpan2Str.length; i++){
		/*if(carpan2Str.charAt(carpan2Str.length-i)=="0"){
			icerik[i] = "";
			for(var i=0;i<(""+carpan1).length;i++)
				icerik[i] += '0';
			}
		else*/
			icerik[i]=carpan1*carpan2Str.charAt(carpan2Str.length-i);
			
			if(icerik[i]==0){
				console.log("içerik sıfır");
				icerik[i]="000";
				
			
			}
		console.log("icerik_"+i+": "+icerik[i]);
	}
	
	for(var i=0; i<carpan2Str.length;i++){
		var top=(100+35*i);
		var right=(i*16);
		var id=i+1;
		
		
			$("#soru",container).append("<div id='sonuc"+id+"'/>");	
			$("#sonuc"+id).css("width","100px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right",right)
				.css("font-size","30px")
				.css("top",top+"px")
				//.html(parseInt(icerik[i+1],10));
				.html(icerik[i+1]);
		
		 if(i==(carpan2Str.length-1)){
			$("#soru",container).append("<div id='toplamaIsareti'>");
			$("#toplamaIsareti").css("width",120+i*20+"px")
				.css("text-align","left")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				.css("right","0px")
				.css("font-size","30px")
				.css("border-bottom","solid 2px black")
				.css("top",(top+5)+"px")
				.html("+");
				
			$("#soru",container).append("<div id='sonucToplam'/>");	
			$("#sonucToplam").css("width",120+(i-1)*16+"px")
				.css("text-align","right")
				.css("height","30px")
				.css("margin","auto")
				.css("position","absolute")
				//.css("bottom","20px")
				//.css("left","0")
				.css("right","0px")
				.css("font-size","30px")
				.css("top",top+40+"px")
				.css("z-index","5")
				.html(toplam);
				
				
		
		
		}
	}
	
	$("input").addClass("input").addClass("number_input_field");
	
	$(".carpan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
	$("#girdi").keydown(function(event){
					var pos;
					if(event.keyCode == 8)
						pos = 1;
					else
						pos = 0; 
					if(this.createTextRange){
						var textRange = node.createTextRange();
						textRange.collapse(true);
						textRange.moveEnd(pos);
						textRange.moveStart(pos);
						textRange.select();
						return true;
					}else if(this.setSelectionRange){
						this.setSelectionRange(pos,pos);
						return true;
					}
				});
	
	
	
		}
		
	}
	
	
	function soruGetir(){
		switch(soruId){
			
			case 0:
			case 1:
			case 2:
				console.log("soru İD: "+soruId);
				carpma();
				break;
			
			case 3:
			case 4:
			case 5:
				console.log("soru İD: "+soruId);
				bilinmeyenCarpanlar();
				break;

			case 6:
			case 7:
				console.log("soru İD: "+soruId);
				tekCarpanlar();
				break;
		}
		
	}
	
yeniSoru();

	function randomSoruGetir(){
		console.log("random moddayim");
		var randomSayi=Math.floor(Math.random()*8);
		
		
		soruId=randomSayi;
		console.log("soru sirası: "+soruSirasi);
		soruGetir();
	}

kontrolSayaci=0;
	function kontrol(){
		switch (soruId){
			
			case 0:
			case 1:
			case 2:
			
				console.log("girdim normal çarpma");
				toplam=carpan1*carpan2;
				
				var girdi1=$("#girdi1").val();
				var girdi2=$("#girdi2").val();
				var girdi3=$("#girdi3").val();
				var girdiToplam=$("#girdiToplam").val();
					
					if(girdi1=="" || girdi2=="" ||girdi3=="" || girdiToplam==""){
						$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun.");
						$("#geriBildirim").show();
						tusSayac=0;
					}
					else{
						carpan2Str=carpan2.toString();
						console.log("çarpan2 basamak sayısı: "+carpan2Str.length);
						
						icerik= new Array();
						
						for (var i=0; i<=carpan2Str.length; i++){
						
								icerik[i]=carpan1*carpan2Str.charAt(carpan2Str.length-i);
								if(icerik[i]==0)
									icerik[i]="000";
								console.log("icerik_"+i+": "+icerik[i]);
						}
					
						if(icerik[1]==girdi1 && icerik[2]==girdi2 &&icerik[3]==girdi3  && girdiToplam==toplam ){
							$("#geriBildirimText").attr("class","status_true").html("Tebrikler.");
							$("#geriBildirim").show();
							$("#btnKontrol").hide();
							$("#sonraki").show();
							girdi1="";
							girdi2="";
							girdi3="";
						}
						else{
							kontrolSayaci++;
							if(kontrolSayaci<2){
								$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
								$("#geriBildirim").show();
								
							}
							else{
								kontrolSayaci=0;
								$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru sağ taraftadır.");
								$("#geriBildirim").show();
								$("#btnKontrol").hide();
								$("#sonraki").show();
								
								console.log("girdi1: "+icerik[1]);
								console.log(girdi1);
								console.log("girdi2: "+icerik[2]);
								console.log(girdi2);
								console.log("girdi3: "+icerik[3]);
								console.log(girdi3);
								console.log("toplam: "+toplam);
								console.log(girdiToplam);
								
								if(icerik[1]!=girdi1)
									$("#girdi1").css("color",yanlisRengi);
								else
									$("#girdi1").css("color",dogruRengi);
								
								if(icerik[2]!=girdi2)
									$("#girdi2").css("color",yanlisRengi);
								else
									$("#girdi2").css("color",dogruRengi);
								
								if(icerik[3]!=girdi3)
									$("#girdi3").css("color",yanlisRengi);
								else
									$("#girdi3").css("color",dogruRengi);
									
								if(girdiToplam!=toplam)
									$("#girdiToplam").css("color",yanlisRengi);
								else
									$("#girdiToplam").css("color",dogruRengi);
//								
//								$("#cevap").html($("#soru").html());
//								
								
                                                                $("#cevap").html("");
                                                                var islemKontrol=new LongMultiplication(carpan1,carpan2, "cevap",30);
                                                                islemKontrol.doldur();
                                                                islemKontrol.basla(1000,1000);
                                                                
								$("#soru").animate({right:"240px"},1000);
								$("#cevap").delay(800).animate({opacity:"1"},1000);
								$("#cevap #sonuc1, #cevap #sonuc2, #cevap #sonuc3").css("color",dogruRengi);
								
								girdi1="";
								girdi2="";
								girdi3="";
							}
						}
					}
				break;
			
			case 3:
			case 4:
			case 5:
			
				var icerik=$("#girdi").val();
				var index = icerik.indexOf(" ", 0);
				while (index != -1) {
					icerik = icerik.replace(" ", "");
					index = icerik.indexOf(" ", 0);
				}
				
				
				if(icerik==""){
						$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun.");
						$("#geriBildirim").show();
						tusSayac=0;
					}
					else{
					
						if(icerik==carpan1){
							$("#geriBildirimText").attr("class","status_true").html("Tebrikler.");
							$("#geriBildirim").show();
							$("#btnKontrol").hide();
							$("#sonraki").show();
							icerik="";
							
						}
						else{
							kontrolSayaci++;
							if(kontrolSayaci<2){
								$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
								$("#geriBildirim").show();
								
							}
							else{
								kontrolSayaci=0;
								$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap sağ taraftadır.");
								$("#geriBildirim").show();
								$("#btnKontrol").hide();
								$("#sonraki").show();
								$("#girdi").css("color",yanlisRengi);
								
                                                                
                                                                $("#cevap").html("");
                                                                var islemKontrol=new LongMultiplication(carpan1,carpan2, "cevap",30);
                                                                islemKontrol.doldur();
                                                                islemKontrol.basla(1000,1000);
                                                                
								$("#soru").animate({right:"240px"},1000);
								$("#cevap").delay(800).animate({opacity:"1"},1000);
								$("#cevap #carpan1").css("color",dogruRengi);
								icerik="";
								
							}
						}
					}
				break;
			
			case 6:
					
					console.log("girdim soruBirerBilinmeyen1");
					carpan1Basamak=carpan1.toString().charAt(carpan1.toString().length-3)
					carpan2Basamak=carpan2.toString().charAt(carpan2.toString().length-1)
					console.log("toplam1Basamak: "+carpan1Basamak);
					console.log("toplam1: "+carpan1);
					console.log("toplam2Basamak: "+carpan2Basamak);
					console.log("toplam2: "+carpan2);
					
					var girdi1=$("#girdi1").val();
					var girdi2=$("#girdi2").val();
					
					if(girdi1=="" || girdi2==""){
						$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun.");
						$("#geriBildirim").show();
						tusSayac=0;
					}
					else{
					
						if(carpan1Basamak==girdi1 && carpan2Basamak==girdi2){
							$("#geriBildirimText").attr("class","status_true").html("Tebrikler.");
							$("#geriBildirim").show();
							$("#btnKontrol").hide();
							$("#sonraki").show();
							girdi1="";
							girdi2="";

						}
						else{
							kontrolSayaci++;
							if(kontrolSayaci<2){
								$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
								$("#geriBildirim").show();
								
							}
							else{
								kontrolSayaci=0;
								$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru sağ taraftadır.");
								$("#geriBildirim").show();
								$("#btnKontrol").hide();
								$("#sonraki").show();
								
								if(carpan1Basamak!=girdi1)
									$("#girdi1").css("color",yanlisRengi);
								else
									$("#girdi1").css("color",dogruRengi);
								
								if(carpan2Basamak!=girdi2)
									$("#girdi2").css("color",yanlisRengi);
								else
									$("#girdi2").css("color",dogruRengi);
								
								
                                                                $("#cevap").html("");
                                                                var islemKontrol=new LongMultiplication(carpan1,carpan2, "cevap",30);
                                                                islemKontrol.doldur();
                                                                islemKontrol.basla(1000,1000);
								
								$("#soru").animate({right:"240px"},1000);
								$("#cevap").delay(800).animate({opacity:"1"},1000);
								
								$("#cevap #cevap1").html(carpan1Basamak).css("color",dogruRengi);
								$("#cevap #cevap2").html(carpan2Basamak).css("color",dogruRengi);
								girdi1="";
								girdi2="";
								
							}
						}
					}
				
				break;
				case 7:
					console.log("girdim soruBirerBilinmeyen2");
					carpan1Basamak=carpan1.toString().charAt(carpan1.toString().length-1)
					carpan2Basamak=carpan2.toString().charAt(carpan2.toString().length-2)
					
					if(carpan1*carpan2Basamak==0)
						carpan3Basamak=0;
					else					
						carpan3Basamak=(carpan1*carpan2Basamak).toString().charAt((carpan1*carpan2Basamak).toString().length-2);
					console.log("toplam1Basamak: "+carpan1Basamak);
					console.log("carpan1: "+carpan1);
					console.log("toplam2Basamak: "+carpan2Basamak);
					console.log("carpan2: "+carpan2);
					
					console.log("toplam3Basamak: "+(carpan1*carpan2Basamak));
					console.log("carpan3: "+carpan3Basamak);
					
					var girdi1=$("#girdi1").val();
					var girdi2=$("#girdi2").val();
					var girdi3=$("#girdi3").val();
					
					if(girdi1=="" || girdi2==""){
						$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun.");
						$("#geriBildirim").show();
						tusSayac=0;
					}
					else{
					
						if(carpan1Basamak==girdi1 && carpan2Basamak==girdi2  && carpan3Basamak==girdi3){
							$("#geriBildirimText").attr("class","status_true").html("Tebrikler.");
							$("#geriBildirim").show();
							$("#btnKontrol").hide();
							$("#sonraki").show();
							girdi1="";
							girdi2="";

						}
						else{
							kontrolSayaci++;
							if(kontrolSayaci<2){
								$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
								$("#geriBildirim").show();
								
							}
							else{
								kontrolSayaci=0;
								$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap yukarıdadır.");
								$("#geriBildirim").show();
								$("#btnKontrol").hide();
								$("#sonraki").show();
								
								if(carpan1Basamak!=girdi1)
									$("#girdi1").css("color",yanlisRengi);
								else
									$("#girdi1").css("color",dogruRengi);
								
								if(carpan2Basamak!=girdi2)
									$("#girdi2").css("color",yanlisRengi);
								else
									$("#girdi2").css("color",dogruRengi);
									
								if(carpan3Basamak!=girdi3)
									$("#girdi3").css("color",yanlisRengi);
								else
									$("#girdi3").css("color",dogruRengi);
								
								
                                                                $("#cevap").html("");
                                                                var islemKontrol=new LongMultiplication(carpan1,carpan2, "cevap",30);
                                                                islemKontrol.doldur();
                                                                islemKontrol.basla(1000,1000);
                                                                
								$("#soru").animate({right:"240px"},1000);
								$("#cevap").delay(800).animate({opacity:"1"},1000);
								
								$("#cevap #cevap1").html(carpan1Basamak).css("color",dogruRengi);
								$("#cevap #cevap2").html(carpan2Basamak).css("color",dogruRengi);
								$("#cevap #cevap3").html(carpan3Basamak).css("color",dogruRengi);
								
								girdi1="";
								girdi2="";
								
							}
						}
					}
				break;
				}
	}
		
};

	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

 var format = function(num, options) {
	options.point=options.point ||',';
	options.group=options.group ||' ';
	options.places=options.places||0;
	options.suffix=options.suffix||'';
	options.prefix=options.prefix||'';
	
	regex = /(\d+)(\d{3})/;
	if (num=="")
		result="";
	else
		result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';
	
	for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
	return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};

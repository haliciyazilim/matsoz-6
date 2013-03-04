function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
var Animation = {
    init:function(container){
        
        
        var sayiDogrusuTop=25;
        var animasyonDuration=1000;
        var animasyonBaslama=1000;
        var fontSize=16;
        Animation.container = container;
        Animation.numericalAxis = new Group();
	var arr = new Group();
        var arrow = new Path.OneSidedArrow(new Point(111, sayiDogrusuTop), new Point(671, sayiDogrusuTop), 10, 30)
	var arrow2 = new Path.OneSidedArrow(new Point(671, sayiDogrusuTop), new Point(672, sayiDogrusuTop), 10, 30);
	arrow.rotate(180);
	arr.addChild(arrow);
	arr.addChild(arrow2);
        arr.strokeWidth=2;
	
        var pieceLength = 480/13;
	
        Interaction.smallDots = new Group();
	for(var i = 0; i < 13; i++){
            var smallDot = new Path.Circle(new Point(131+pieceLength*(i+1), sayiDogrusuTop), 3)
            smallDot.fillColor = "black";
            Interaction.smallDots.addChild(smallDot);
	}
        
        
        $(container).append("<div id=sayi1>");
            $("#sayi1")
                .css("width","500px")
                .css("height","30px")
                .css("position","absolute")
                .css("left","162px")
                .css("top",sayiDogrusuTop+30)
                .css("margin","auto")
                //.css("border","1px solid red");
        
        for(i=-6; i<=6; i++){
            $("#sayi1").append("<div class='sayilar' id=sayilar"+i+">");
            
            $("#sayilar"+i)
                .css("margin","auto").html(i)
                .css("border","1px solid white");
        }
        
        $(".sayilar")
            .css("width","35px")
            .css("height","30px")
            .css("float","left")
            .css("font-style","bold")
            .css("font-size",fontSize)
            .css("text-align","center")
            .css("opacity","0");
        
        kirmiziHelper={
            kirmiziNokta:new Point(390,sayiDogrusuTop)
        };
        maviHelper={
          maviNokta:new Point(390,sayiDogrusuTop)  
        };
        
        var maviCizgiBaslangicNoktasi=new Point(390, sayiDogrusuTop)
        var maviCizgiBitisNoktasi=new Point(242, sayiDogrusuTop);
        
        Animation.maviCizgi=new Path.Line(maviCizgiBaslangicNoktasi, maviHelper.maviNokta);
        Animation.maviCizgi.strokeColor="blue";
        Animation.maviCizgi.strokeWidth=3;
        
        var kirmiziCizgiBaslangicNoktasi=new Point(390, sayiDogrusuTop)
        var kirmiziCizgiBitisNoktasi=kirmiziHelper.kirmiziNokta;
        
        Animation.kirmiziCizgi=new Path.Line(kirmiziCizgiBaslangicNoktasi,kirmiziCizgiBitisNoktasi);
        Animation.kirmiziCizgi.strokeColor="red";
        Animation.kirmiziCizgi.strokeWidth=3;
        
        console.log(Animation.kirmiziCizgi.position.x);
        
        kirmiziHelper.animate = Item.prototype.animate;
        maviHelper.animate = Item.prototype.animate;
	
	kirmiziHelper.animate({
		style:{
			kirmiziNokta:new Point(538,sayiDogrusuTop)
		},
		duration:animasyonDuration*2,
		delay:animasyonBaslama*7,
                update:function(){
                    
                        Animation.kirmiziCizgi.remove();
                        Animation.kirmiziCizgi=new Path();
                        Animation.kirmiziCizgi.add(kirmiziCizgiBaslangicNoktasi);
                        Animation.kirmiziCizgi.add(this.kirmiziNokta);
                        Animation.kirmiziCizgi.strokeColor="red";
                        Animation.kirmiziCizgi.strokeWidth=3;
                        
                        
                }
	});
        
        maviHelper.animate({
		style:{
			maviNokta:new Point(242,sayiDogrusuTop)
		},
		duration:animasyonDuration*2,
		delay:animasyonBaslama*2,
                update:function(){
                    
                        Animation.maviCizgi.remove();
                        Animation.maviCizgi=new Path();
                        Animation.maviCizgi.add(maviCizgiBaslangicNoktasi);
                        Animation.maviCizgi.add(this.maviNokta);
                        Animation.maviCizgi.strokeColor="blue";
                        Animation.maviCizgi.strokeWidth=3;
                    
                }
	});
        
        
        Animation.numericalAxis.addChild(arr);
	Animation.numericalAxis.addChild(Interaction.smallDots);
	Animation.numericalAxis.opacity = 0;
                        
        Animation.numericalAxis.animate({
            style:{
                opacity: 1
            },
            duration: animasyonDuration,
            delay: animasyonBaslama,
            animationType: 'easeInOutQuad'
	});
        
        $(".sayilar").delay(animasyonBaslama+500).animate({opacity:"1"},animasyonDuration);
        
        $(container).append("<img class='parantez' id='parantezSol' src='/assets/animations/mutlak_deger/mutlak_deger_ok.png' />")
	$("#parantezSol")
		.css("left","253px")
		.css("opacity","0");
        $(container).append("<img class='parantez' id='parantezSag' src='/assets/animations/mutlak_deger/mutlak_deger_ok.png' />")
	$("#parantezSag")
		.css("left","402px")
		.css("opacity","0");
        $(".parantez")
            .css("position", "absolute")
            .css("top",sayiDogrusuTop+55)
        
        $(container).append("<div id='bilgilerSol'>");
            $("#bilgilerSol")
                .css("width","145px")
                .css("height","45px")
                .css("position","absolute")
                .css("left","257px")
                .css("top",sayiDogrusuTop+80)
                .css("margin","auto")
                .css("color","blue")
                //.css("border","1px solid red");
                
        $("#bilgilerSol").append("<div  class='bilgiler' id='birim1'>");
            $("#birim1").html("4 birim").css("opacity","0");

         $("#bilgilerSol").append("<div class='bilgiler' id='birim2'>");
            $("#birim2").html("<strong>|</strong> -4 <strong>|</strong> = 4").css("opacity","0");
        
                
         $(container).append("<div id='bilgilerSag'>");
            $("#bilgilerSag")
                .css("width","145px")
                .css("height","45px")
                .css("position","absolute")
                .css("right","237px")
                .css("top",sayiDogrusuTop+80)
                .css("margin","auto")
                .css("color","red")
                //.css("border","1px solid red");
        $("#bilgilerSag").append("<div  class='bilgiler' id='birim3'>");
            $("#birim3").html("4 birim").css("opacity","0");

         $("#bilgilerSag").append("<div class='bilgiler' id='birim4'>");
            $("#birim4").html("<strong>|</strong> 4 <strong>|</strong> = 4").css("opacity","0");
         
         $(".bilgiler")
            .css("width","140px")
            .css("height","15px")
            .css("margin","auto")
            .css("padding-bottom","15px")
            .css("text-align","center")
            .css("font-size",fontSize)
            //.css("border","1px solid red");
                
         
         $(container).append("<div id='bilgilerAlt'>");
            $("#bilgilerAlt")
                .css("width","290px")
                .css("height","30px")
                .css("position","absolute")
                .css("left","257px")
                .css("top",sayiDogrusuTop+140)
                .css("margin","auto")
               // .css("border","1px solid red")
               .css("font-size",fontSize)
                .css("text-align","center")
                .html("<strong>|</strong> -4 <strong>|</strong> = <strong>|</strong> 4 <strong>|</strong> = 4").css("opacity","0");;
                
                $(container,"strong").css("font-size","20px")
                
                
                $("#parantezSol").delay(animasyonBaslama*5).animate({opacity:"1"},animasyonDuration);
                $("#birim1").delay(animasyonBaslama*5+500).animate({opacity:"1"},animasyonDuration);
                $("#birim2").delay(animasyonBaslama*5+1000).animate({opacity:"1"},animasyonDuration);
                
                $("#parantezSag").delay(animasyonBaslama*9).animate({opacity:"1"},animasyonDuration);
                $("#birim3").delay(animasyonBaslama*9+500).animate({opacity:"1"},animasyonDuration);
                $("#birim4").delay(animasyonBaslama*9+1000).animate({opacity:"1"},animasyonDuration);
                
                $("#bilgilerAlt").delay(animasyonBaslama*9+2000).animate({opacity:"1"},animasyonDuration);
     Main.animationFinished(12000);
    }
    
}
;
var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
	Main.setObjective('Yanda verilen mutlak değerin eşitini bulunuz.');
	Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        
        
        // Ana Div
        $(container).append("<div id='soru'>");
            $("#soru")
                .css("width","145px")
                .css("height","45px")
                .css("position","absolute")
                .css("left","0")
                .css("top","50px")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red");
        $("#soru").append("<div id='istenen'>");
            $("#istenen")
                .css("width","90px")
                .css("height","20px")
                
                .css("font-size","20px")
                .css("position","absolute")
                .css("top","0")
                .css("bottom","0")
                .css("margin","auto");
                //.css("border","1px solid red");
        $("#soru").append("<div id='girilen'>");
            $("#girilen")
                .css("width","50px")
                .css("position","absolute")
                .css("right","0px")
                //.css("border","1px solid red")
                .css("height","45px");
					
        $(container).append("<div id='cevap'>");
            $("#cevap")
                .css("width","145px")
                .css("height","45px")
                .css("position","absolute")
		.css("left","0")
		.css("right","0")
		.css("bottom","100px")
		.css("margin","auto")
                .css("font-size","20px")
		//.css("opacity","0")
		//.css("border","1px solid red");
        
        Interaction.appendInput({
            width: '60px',
            //height: '32px',
            textAlign: 'center',
            fontSize: '20px'
            
            
        },false,false);
        Interaction.input.id="girdi";

        $("#girdi").keydown(function(){Interaction.setStatus('',false);});
        $("#girdi").attr("onkeypress","return SadeceRakam(event,('-','-'))");

        $("#soru #girilen").append(Interaction.input);
        $("input").css("height","100%").css("margin","auto").attr("maxLength","4");
        
        Interaction.appendStatus({
            bottom:'50px',
            right:'160px'
        });
	
        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
	});
        
        Interaction.setRandomGenerator(1000, 0)
        
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.trial=1;
        Interaction.randomNumber = randomNumber;
        console.log(Interaction.randomNumber);
        Interaction.isaretRandomu=Math.floor(Math.random()*2+1);
        console.log(Interaction.isaretRandomu);
        Interaction.isaret=Interaction.isaretRandomu%2==0?"":"-";
        console.log(Interaction.isaret);
        Interaction.soru="<strong style='color:#006E7D; font-size:24px;'>| </strong>"+Interaction.isaret+Interaction.randomNumber+" <strong style='color:#006E7D; font-size:24px;'>|</strong>";
        console.log(Interaction.soru);
        $("#istenen").html(Interaction.soru+" = ");
        $("#cevap").html("");
        $("input").css("color","black");
    },
	
    preCheck : function(){
        console.log("Precheck: "+$("#girdi").val());
        console.log(Util.isNumber($("#girdi").val()));
        if(!Util.isNumber($("#girdi").val())){
            Interaction.setStatus('Girdiğiniz sayının formatı uygun değil; lütfen düzeltiniz.',false);
            return false;
        }
    },
    isAnswerCorrect : function(value){
        if(value==Interaction.randomNumber)
            return true;
    },
    onCorrectAnswer : function(){
        
    },
    onWrongAnswer : function(){
    },
    onFail : function(){
        $("#cevap").html(Interaction.soru+" = "+"<b style='color:green'>"+Interaction.randomNumber+"</b>");
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        $("input").css("color","red");
        
    }
}


// Sadece rakam girilmesini sağlanıyor.
function SadeceRakam(e,allowedchars){
    var key=e.charCode==undefined?e.keyCode:e.charCode;
    if((/^(-)?[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13 ||isPassKey(key,allowedchars)){return true;}else{return false;}}
function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
;





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
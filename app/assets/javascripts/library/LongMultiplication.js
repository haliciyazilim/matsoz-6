function LongMultiplication(carpim1, carpim2, div, fontSize){
    this.carpim1=carpim1;
    this.carpim2=carpim2;
    this.div="#"+div;
    this.fontSize=fontSize;
    
    if(this.fontSize==undefined)
        this.fontSize=30;
    var oran=this.fontSize*40/30;
    
    this.doldur=function(){
        $(this.div,container).append("<div id='carpim1' class='carpilan'>");
	$(this.div+" #carpim1")
            .css("top",this.fontSize*10/30).html();
	
        // ustteki divi dolduruyoruz.			
        for (var i=0; i<this.carpim1.toString().length;i++){
            var id=this.carpim1.toString().length-i
            $(this.div+" #carpim1",container).append("<span id='ilkBasamak"+id+"'>");
            $(this.div+" #carpim1 #ilkBasamak"+id).html(this.carpim1.toString().charAt(i));
            $(this.div+" #carpim1 #ilkBasamak"+id).addClass("ilkBasamakTek");
	}
	
        $(this.div,container).append("<div id='carpim2' class='carpilan'>");
            $(this.div+" #carpim2")
                .css("top",oran).html();

        // ustteki divi dolduruyoruz.			
	for(var i=0;i<this.carpim2.toString().length;i++){
            var id=this.carpim2.toString().length-i
            $(this.div+" #carpim2",container).append("<span id='ikinciBasamak"+id+"'>");
            $(this.div+" #carpim2 #ikinciBasamak"+id).html(this.carpim2.toString().charAt(i));
            $(this.div+" #carpim2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
	}
			
	$(this.div,container).append("<div id='isaretCarpma'>");
	$(this.div+" #isaretCarpma").css("width",this.fontSize*80/30)
            .css("text-align","left")
            .css("height",this.fontSize*30/30)
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize)
            .css("border-bottom","solid 2px black")
            .css("top",oran)
            .html("x");
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height",this.fontSize*30/30)
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize);
	
       /*
       $(this.div,container).append("<div id='sonuc' class='carpilan'>");
            $(this.div+" #sonuc").css("top","100px").html();
		
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize)
            .css("z-index","4");
       */
        
        for(var i=0; i<this.carpim2.toString().length;i++){
		var top= this.fontSize*(75+25*i)/30;
		var right=this.fontSize*(i*16)/30;
		var id=i+1;
		
		$(this.div,container).append("<div id='carpmaSonuc"+id+"'/>");	
		$(this.div+" #carpmaSonuc"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #carpmaSonuc"+id,container).append("<span id='carpmaSonuc"+id+"Basamak"+j+"'>");
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).html(i);
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).addClass("basamakTek");
                
                }
                
                $(this.div,container).append("<div id='elde"+id+"'/>");	
		$(this.div+" #elde"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #elde"+id,container).append("<span id='elde"+id+"Basamak"+j+"'>");
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).html(0);
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).addClass("eldeBasamakTek");
                
                }	
                
                $(this.div,container).append("<div id='carpmaEldedenSonra"+id+"'/>");	
		$(this.div+" #carpmaEldedenSonra"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #carpmaEldedenSonra"+id,container).append("<span id='carpmaEldedenSonra"+id+"Basamak"+j+"'>");
                $(this.div+" #carpmaEldedenSonra"+id+" #carpmaEldedenSonra"+id+"Basamak"+j).html(j);
                $(this.div+" #carpmaEldedenSonra"+id+" #carpmaEldedenSonra"+id+"Basamak"+j).addClass("basamakTek");
                
                }
                
		if(i==(carpim2.toString().length-1)){
                    $(this.div,container).append("<div id='isaretToplama'>");
                    $(this.div+" #isaretToplama").css("width",this.fontSize*(80+i*20)/30+"px")
                        .css("text-align","left")
                        .css("height",this.fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("border-bottom","solid 2px black")
                        .css("top",(top)+"px")
                        .html("+").css("opacity","0");
				
                    $(this.div,container).append("<div id='toplamaSonuc'/>");	
                    $(this.div+" #toplamaSonuc").css("width",120+(i-1)*16+"px")
                        .css("text-align","right")
                        .css("height",this.fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+(this.fontSize*35/30)+"px")
                        .css("z-index","5");
                        //.css("opacity","0");
                    
                    var sonuc=this.carpim1*this.carpim2;
                    for(var j=sonuc.toString().length;j>=1;j--){

                    $(this.div+" #toplamaSonuc",container).append("<span id='toplamaSonucBasamak"+j+"'>");
                    $(this.div+" #toplamaSonucBasamak"+j).html(i);
                    $(this.div+" #toplamaSonucBasamak"+j).addClass("basamakTek");

                    }

                    $(this.div,container).append("<div id='toplamaElde'/>");	
                    $(this.div+" #toplamaElde").css("width","100px")
                        .css("text-align","right")
                        .css("height",fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+(this.fontSize*35/30)+"px")
                        .css("z-index","5");

                    for(var j=sonuc.toString().length;j>=1;j--){
                        
                        $(this.div+" #toplamaElde",container).append("<span id='toplamaEldeBasamak"+j+"'>");
                        $(this.div+" #toplamaEldeBasamak"+j).html(0);
                        $(this.div+" #toplamaEldeBasamak"+j).addClass("eldeBasamakTek");

                    }
                    
                    $(this.div,container).append("<div id='toplamaEldedenSonra'/>");	
                    $(this.div+" #toplamaEldedenSonra").css("width",120+(i-1)*16+"px")
                        .css("text-align","right")
                        .css("height",fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+35+"px")
                        .css("z-index","5")
                        .css("opacity","0");
                    
                    
                    for(var j=sonuc.toString().length;j>=1;j--){

                    $(this.div+" #toplamaEldedenSonra",container).append("<span id='toplamaEldedenSonra"+j+"'>");
                    $(this.div+" #toplamaEldedenSonra"+j).html(0);
                    $(this.div+" #toplamaEldedenSonra"+j).addClass("basamakTek");

                    }
		}
        }
        $(this.div+" .basamakTek").css("opacity","0");
	$(this.div+" .eldeBasamakTek").css("opacity","0").css("position","absolute");

    }

this.basla=function(hizB,hizA){
    this.hizA=hizA;
    this.hizB=hizB;
    
    var sayilarFadeInRenk="#FF6600";
    var sayilarFadeOutRenk="#000000";
    var sonuclarRengi="#008000";
    var eldeRengi="#8C1717";
    
    
    Interaction.carpim1BasamakSayisi=this.carpim1.toString().length;
    Interaction.carpim2BasamakSayisi=this.carpim2.toString().length;
    
    
    
    
//    
//    for (var i=1;i<=Interaction.carpim2BasamakSayisi;i++){ // çarpim ikinin döngüsü
//        
//        setTimeout(function(){yanmaTekDongu(i);},1000+(i-1)*9000);
//        
//    }
    

    function yanmaTekDongu(i){
        var zamanCizgisi=0;
        var sayac=0;

        
        $("#"+div+" #ikinciBasamak"+i).animate({color:sayilarFadeInRenk},hizA);
        
        for(var p=1; p<=Interaction.carpim1BasamakSayisi;p++){
            
            
            Interaction.carpim1BasamakTek=carpim1.toString().reverse().charAt(p-1);
            console.log("1. çarpan: "+Interaction.carpim1BasamakTek);
            
            Interaction.carpim2BasamakTek=carpim2.toString().reverse().charAt(i-1);
            console.log("2. çarpan: "+Interaction.carpim2BasamakTek);
            Interaction.basamakSonuc= Interaction.carpim1BasamakTek*Interaction.carpim2BasamakTek;
            
            console.log("Sonuc: "+Interaction.basamakSonuc);
            
            $("#"+div+" #ilkBasamak"+p).delay(sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);

            console.log("Delay: "+(p+(i-1)*3))
            
            console.log("i: "+i);
           
             if(Interaction.basamakSonuc<10){
                
                if($("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!=0 || $("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!="0"){
                    console.log("1 if(elde!=0)........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc);
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({color:"#000000",opacity:"0"},hizA);
                
                    
                    var eldeCarpmaToplam=parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10)+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10);
                    
                    console.log("#"+div+" #elde"+(i)+"Basamak"+(p)+" eldeli**************************");
                    console.log("sonucBasamak"+p+": "+parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10));
                    console.log("elde"+p+": "+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10));
                    console.log("eldeCarpmaToplam: "+eldeCarpmaToplam);
                    
                    
                    
                    if(eldeCarpmaToplam>9){
                        console.log("eldeCarpmaToplam'a giriliyor. 999999999999999999999999999")
                        var oncekiElde=parseInt($("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(),10);
                        var eldeCarpmaToplamBasamak2=parseInt(eldeCarpmaToplam.toString().charAt(0),10);
                        
                        
                        
                            
                            console.log("#"+div+" #elde"+(i)+"Basamak"+(p+1)+", "+oncekiElde+", "+eldeCarpmaToplamBasamak2);
                            $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+(p+1)).html(oncekiElde+eldeCarpmaToplamBasamak2);
                        
                        
                        
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam.toString().charAt(1));
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+(p+1)).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                    else{
                    
                    
                    
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);

                        //$("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                    }
                }
                else{
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc);
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({color:"#000000"},hizA);
                }
                
                sayac+=(hizA+hizB*2);

            }
            else{
                
                
                
                console.log("1 else........................")
                
                var right=fontSize*((p)*16)/30+"px"
                $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc.toString().charAt(1));
                $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(Interaction.basamakSonuc.toString().charAt(0)).css("right",right);

                $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA/5);
                if(p==3){
                    console.log("1 if(p==3)........................")
                    
                    
                    $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA/5).delay(hizB).animate({color:"#000000"},hizA);
                }
                else{
                    console.log("1 if(p==3) else........................")
                    var yeniRight=fontSize*(-30+(-15*i-1))/30+"px";
                    
                    $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({right:yeniRight,color:eldeRengi},hizA).delay(hizB*2).animate({right:right,color:"#000000",opacity:"0"},hizA);
                    //$("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({opacity:"0", color:sonuclarRengi},hizA/5)
                }   
                
                
                if($("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!=0 || $("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!="0"){
                    console.log("1 if(elde!=0)........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({opacity:"0", color:sonuclarRengi},hizA);
                    console.log("#"+div+" #elde"+(i)+"Basamak"+(p)+" eldeli**************************");
                    var eldeCarpmaToplam=parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10)+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10);
                    
                    if(eldeCarpmaToplam>9){
                        console.log("eldeCarpmaToplam'a giriliyor. 999999999999999999999999999")
                        var oncekiElde=parseInt($("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(),10);
                        var eldeCarpmaToplamBasamak2=parseInt(eldeCarpmaToplam.toString().charAt(0),10);
                        
                        
                        
                            
                            console.log("#"+div+" #elde"+(i)+"Basamak"+(p+1)+", "+oncekiElde+", "+eldeCarpmaToplamBasamak2);
                            $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(oncekiElde+eldeCarpmaToplamBasamak2);
                        
                        
                        
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam.toString().charAt(1));
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                        //$("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                    else{
//                    
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                }
                else{
                    console.log("1 if(elde!=0) else........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({color:"#000000"},hizA);
                }
            
                sayac+=(hizA+hizB*2)+1500;

            }
            
            
            
        
            
        }

        zamanCizgisi+=sayac;
            console.log("zamanCizgisi: "+zamanCizgisi);
          

        $("#"+div+" #ikinciBasamak"+i).delay(sayac-hizA*2).animate({color:sayilarFadeOutRenk},hizA);
        if(i==1){
            i++;
            setTimeout(function(){yanmaTekDongu(i);},zamanCizgisi);
            
        }
        else if(i==2){
            i++;
            if(Interaction.carpim2BasamakSayisi==3)
                setTimeout(function(){yanmaTekDongu(i);},zamanCizgisi);
            else{
                console.log("girdim");
                $("#"+div+" #isaretToplama").delay(zamanCizgisi).animate({opacity:"1"},hizA);
                setTimeout(function(){toplama(zamanCizgisi);},zamanCizgisi);
            }
        }
        
        
        else{
            console.log("girdim");
            $("#"+div+" #isaretToplama").delay(zamanCizgisi).animate({opacity:"1"},hizA);
            setTimeout(function(){toplama(zamanCizgisi);},zamanCizgisi);
            
            
        }
        
    }
    
    
    setTimeout(function(){yanmaTekDongu(1);},1000);
    //setTimeout(function(){yanmaTekDongu(2);},10000);
    //setTimeout(function(){yanmaTekDongu(3);},19000);
    
    function toplama(){
        
        for(var b=1; b<=5;b++){
            console.log("xsx girdi");
            setTimeout(toplama1,2000*b);
            setTimeout(toplama2,2000+2000*b);
            setTimeout(toplama3,4000+2000*b);
        }
        toplama1Sayac=0;
        function toplama1(){
        
            console.log("topalam1 girdi");
            toplama1Sayac++;
            $("#"+div+" #carpmaSonuc1Basamak"+toplama1Sayac+", #"+div+" #elde1Basamak"+toplama1Sayac+" ,#"+div+" #carpmaEldedenSonra1Basamak"+toplama1Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
            
            //console.log("*****************topalam1: "+$("#"+div+" #carpmaSonuc1Basamak"+toplama1Sayac).html());
            
            
        }

        toplama2Sayac=0;
        function toplama2(){
            //var sonuc=carpim1*carpim2;
        console.log("topalam2 girdi");
            toplama2Sayac++;
                //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+hizB,10))
                $("#"+div+" #carpmaSonuc2Basamak"+toplama2Sayac+", #"+div+" #elde2Basamak"+toplama2Sayac+" ,#"+div+" #carpmaEldedenSonra2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
                //$("#"+div+" #elde2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
        }
        toplama3Sayac=0;
        function toplama3(){
            //var sonuc=carpim1*carpim2;
        console.log("topalam3 girdi");
            toplama3Sayac++;
                //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+hizB,10))
                $("#"+div+" #carpmaSonuc3Basamak"+toplama3Sayac+", #"+div+" #elde3Basamak"+toplama3Sayac+" ,#"+div+" #carpmaEldedenSonra3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
                //$("#"+div+" #elde3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
        }
        
        var sonuc=carpim1*carpim2;
        console.log("wwwwwwwwwwwwwww: "+sonuc.toString().length+", weeeeeeee: "+sonuc);
        for(var t=1;t<=sonuc.toString().length;t++){
            var basamak=sonuc.toString().charAt(sonuc.toString().length-t);
            $("#"+div+" #toplamaSonucBasamak"+t).html(basamak);
            $("#"+div+" #toplamaSonucBasamak"+t).delay(2000*t).animate({opacity:"1"},hizA);
        
        
    }
        
    }
    
   
}
    
}


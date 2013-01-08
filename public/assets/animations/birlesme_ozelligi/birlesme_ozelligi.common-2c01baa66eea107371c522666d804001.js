function random1(){
    for(i=0; i<3; i++){
        Interaction.random.push(Math.floor(Math.random()*19+1));
    }
}
        
function random2(){
    for(i=0; i<3; i++){
        Interaction.random.push(Math.floor(Math.random()*99+1));
    }
}

function esitliklerGosterim(){

    var solParantezSonuc=Interaction.isaretSayaci%2==0?(Interaction.random[1]*Interaction.random[2]):(Interaction.random[1]+Interaction.random[2])
    var solSonSonuc=Interaction.isaretSayaci%2==0?(Interaction.random[0]*solParantezSonuc):(Interaction.random[0]+solParantezSonuc)
    var icerikAltSol=[Interaction.random[0]+Interaction.isaret+"("+Interaction.random[1]+Interaction.isaret+Interaction.random[2]+")",Interaction.random[0]+Interaction.isaret+solParantezSonuc,solSonSonuc];
        
    var sagParantezSonuc=Interaction.isaretSayaci%2==0?(Interaction.random[0]*Interaction.random[1]):(Interaction.random[0]+Interaction.random[1])
    var sagSonSonuc=Interaction.isaretSayaci%2==0?(Interaction.random[2]*sagParantezSonuc):(Interaction.random[2]+sagParantezSonuc)
    var icerikAltSag=["("+Interaction.random[0]+Interaction.isaret+Interaction.random[1]+")"+Interaction.isaret+Interaction.random[2],sagParantezSonuc+Interaction.isaret+Interaction.random[2],sagSonSonuc];
        
    var ornekAlt=ornek("Alt",30,80,30, icerikAltSol, icerikAltSag);
    
    for(var i=0;i<3;i++){

        //setTimeout(function(){$("#ornekAltSol"+i).fadeIn(1000)},(i*2500));
            
            $("#ornekAltSol"+i).delay(i*2500).animate({opacity:"1"},1000);
            $("#esittirAlt"+i).delay(i*2500+750).animate({opacity:"1"},1000);
            $("#ornekAltSag"+i).delay(i*2500+1500).animate({opacity:"1"},1000);
        }
}

function ornek(isim, left, topDegeri, fontSize, icerikSol, icerikSag){
    this.isim=isim;
    this.left=left;
    this.topDegeri=topDegeri;
    this.fontSize=fontSize;
    this.icerikSol=icerikSol;
    this.icerikSag=icerikSag;
    
    if(this.isim=="Alt")
        $(Interaction.container).append("<div id='ornek"+this.isim+"'>");
    else
        $(Animation.container).append("<div id='ornek"+this.isim+"'>");
         $("#ornek"+this.isim+"").append("<div id='icerikS"+this.isim+"'>");
        for(var i=0; i<3; i++){
            
            $("#ornek"+this.isim).append("<div class='ornekIcerik' id='ornek"+this.isim+"Sol"+i+"'>");
            $("#ornek"+this.isim).append("<div class='ornekEsittir' id='esittir"+this.isim+i+"'>");
            $("#ornek"+this.isim).append("<div class='ornekIcerik' id='ornek"+this.isim+"Sag"+i+"'>");
            
        }
        
        $("#ornek"+this.isim)
                .css("width","495px")
                .css("height","140px")
                .css("position","absolute")
                .css("left",this.left)
                .css("top",this.topDegeri)
                .css("margin","auto")
                .css("font-size",this.fontSize)
                //.css("border","1px solid red");
        
        $(".ornekIcerik")
            .css("width","220px")
            .css("height","30px")
            .css("float","left")
            .css("margin-bottom","20px")
            //.css("border","1px solid red");
        $(".ornekEsittir")
            .css("width","20px")
            .css("height","30px")
            .css("float","left")
            .css("margin-left","10px")
            .css("margin-right","10px")
            //.css("border","1px solid red")
            .html("=");
        
            
        $("#nokta").css("line-height","30px");
        
        if(this.isim=="Alt"){
            for(var i=0; i<3; i++){
              $("#ornek"+this.isim+"Sol"+i)
                .html(this.icerikSol[i])
                .css("text-align","right")
                .css("opacity","0");
              $("#ornek"+this.isim+"Sag"+i)
                .html(this.icerikSag[i])
                .css("opacity","0");
              $("#esittir"+this.isim+i).css("opacity","0");
            }
        }
        else{
            for(var i=0; i<3; i++){
              $("#ornek"+this.isim+"Sol"+i)
                .html(this.icerikSol[i])
                .css("text-align","right")
                .css("opacity","0");
              $("#ornek"+this.isim+"Sag"+i)
                .html(this.icerikSag[i])
                .css("opacity","0");
              $("#esittir"+this.isim+i).css("opacity","0");
            }
        }
}
;

var Animation = {
	init:function(container){
		Animation.container = container;

        resimler=[
            "/assets/animations/cebir/cebir_zemin.jpg",
            "/assets/animations/cebir/cebir_harezmi.png",
            "/assets/animations/cebir/cebir_eski_yazi.png",
            "/assets/animations/cebir/cebir_yeni_yazi.png"];

        $(container).append("<img id='zemin'  class='resim' src='"+resimler[0]+"'>");
        $(container).append("<img id='harezmi' class='resim' src='"+resimler[1]+"'>");
        $(container).append("<img id='eskiYazi' class='resim' src='"+resimler[2]+"'>");
        $(container).append("<img id='yeniYazi' class='resim' src='"+resimler[3]+"'>");

        $(container).append("<ul id='ifadeler'>");
        $("#ifadeler").append("<li id='ifade1'>x</li>");
        $("#ifadeler").append("<li id='ifade2'>a+1</li>");
        $("#ifadeler").append("<li id='ifade3'>2n-1=3</li>");

        $(".resim").css({
            position:"absolute",
            top:"20px",
            left:"0",
            right:"0",
            margin:"auto",
            opacity:"0"

        });

        $("#ifadeler").css({
           width:"300px",
           float:"left",
           listStyle:"none",
           position:"absolute",
           top:"20px",
           left:"133px",
           margin:"auto",
           fontSize:"22px",
           textAlign:"right"


        });
        $("#ifadeler li").css({
            position:"relative",
            width:"30%",
            float:"left",
            opacity:"0",
            fontWeight:"bold"
        });

        $("#ifade1").css("color","#44DFFB");
        $("#ifade2").css("color","#B1A0C6");
        $("#ifade3").css("color","#FFCA00");
        var idler=["zemin","harezmi","eskiYazi","yeniYazi"];
        var zaman=0
        for(var i=0; i<idler.length;i++){
            $("#"+idler[i]).delay(i*1000).animate({opacity:"1"},1000);
            zaman=i*1000;
        }

        var idlerIfade=["ifade1","ifade2","ifade3"];
        for(var i=0; i<idlerIfade.length;i++){
            $("#"+idlerIfade[i]).delay(i*1000+zaman).animate({top:"135px",opacity:"1"},1000);
        }

        Main.animationFinished(1000);
		
	}
}
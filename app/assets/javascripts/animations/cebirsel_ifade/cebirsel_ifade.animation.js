var Animation = {
    images:[],
	init:function(container){
		Animation.container = container;

        $(container).append("<div id='aciklama'>");
        $(container).append("<div id='tanim1'>");
        $(container).append("<div id='tanim2'>");

        $("#aciklama").css({
            width:"100%",
            height:"20px",
            position:"absolute",
            top:"30px",
            left:"0px",
            textAlign:"center",
            fontSize:"18px"



        }).html("Babasının yaşı kızın yaşının üç katından 2 yaş fazladır.");

        $("#tanim1").append("<div class='ifade'></div><div class='sonuc'></div>");
        $("#tanim2").append("<div class='ifade'></div><div class='sonuc'></div>");

        $("#tanim1").css({
            width:"320px",
            height:"30px",
            position:"absolute",
            top:"100px",
            right:"0px",
            fontSize:"20px",
            float:"left"
        });
        $("#tanim1 .ifade").html("Kızın yaşı: ");
        $("#tanim1 .sonuc").html("k olsun");

        $("#tanim2").css({
            width:"320px",
            height:"30px",
            position:"absolute",
            top:"150px",
            right:"0px",
            fontSize:"20px"
        });

        $("#tanim2 .ifade").html("Babasının yaşı: ");
        $("#tanim2 .sonuc").html("3k + 2");

        $(".ifade").css({
            width:"150px",
            float:"left",
            textAlign:"right"
        });

        $(".sonuc").css({
            width:"150px",
            marginLeft:"10px",
            float:"left"
        });


        Main.animationFinished(1000);


		
		}
}
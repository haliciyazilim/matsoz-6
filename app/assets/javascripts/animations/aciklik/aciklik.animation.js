var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;


        $(Animation.container).append("<div id='ornekAciklik'>Açıklık = 168 - 145 = 23</div>");
        $(Animation.container).append("<div id='ornekAritmetikOrtalama'>");
        $("#ornekAritmetikOrtalama").append("<div id='ifade' class='icerik'>");
        $("#ornekAritmetikOrtalama").append("<div id='islem' class='icerik'>");
        $("#ornekAritmetikOrtalama").append("<div id='sonuc' class='icerik'>");


        $("#ornekAciklik").css({

            position:"absolute",
            top:"30px",
            left:"335px",
            fontSize:"16px"

        });

        $("#ornekAritmetikOrtalama").css({

            position:"absolute",
            width:"450px",
            height:"100px",
            top:"90px",
            right:"0px",
            fontSize:"16px"
            //border:"solid 1px black"

        });


        var icerikYukseklik=100;
        $(".icerik").css({
            position:"relative",
            height:icerikYukseklik+"px",
            float:"left",

            //border:"solid 1px black"
        });

        $("#ifade").css({
            lineHeight:icerikYukseklik+"px",
            width:"150px"
        }).html("Aritmetik Ortalama = ");

        $("#islem").append("<div id='pay' class='kesir'>");
        $("#islem").append("<div id='payda' class='kesir'>");

        $(".kesir").css({
            width:"215px",
            height:"50px",
            lineHeight:icerikYukseklik/2+"px",
            textAlign:"center"
        });

        $("#payda").css({
            borderTop:"2px black solid"
        }).html("5");

        $("#pay").css({
            textAlign:"center",
            width:"220px"

        }).html("148+168+150+145+154");

        $("#sonuc").css({
            lineHeight:icerikYukseklik+"px"
        }).html(" = 153 cm")



        Main.animationFinished(1000);

    }
}
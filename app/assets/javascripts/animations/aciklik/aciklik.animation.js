var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        $(Animation.container).append("<img id='cocuklar' src='/assets/animations/aciklik/cocuklar.jpg'>");
        $("#cocuklar").css({
            width:"365",
            height:"170px",
            position:"absolute",
            top:"20px",
            left:"5px",
            zIndex:"1",
            opacity:0
        });

        $(Animation.container).append("<div id='beyaz'></div>");
        $("#beyaz").css({
            width:"70",
            height:"170px",
            position:"absolute",
            top:"20px",
            left:"300px",
            backgroundColor:"white",
            zIndex:"2",
            opacity:"0"
        });

        $(Animation.container).append("<div id='ornekAciklik'>Açıklık = <span id='degisAciklik1'>168</span> - 145 = <span id='degisAciklik2'>23</span> </div>");
        $(Animation.container).append("<div id='ornekAritmetikOrtalama'>");
        $("#ornekAritmetikOrtalama").append("<div id='ifade' class='icerik'>");
        $("#ornekAritmetikOrtalama").append("<div id='islem' class='icerik'>");
        $("#ornekAritmetikOrtalama").append("<div id='sonuc' class='icerik'>");


        $("#ornekAciklik").css({

            position:"absolute",
            top:"30px",
            left:"380px",
            fontSize:"16px",
            opacity:"0"

        });

        $("#ornekAritmetikOrtalama").css({

            position:"absolute",
            width:"410px",
            height:"100px",
            top:"90px",
            right:"0px",
            fontSize:"16px",
            opacity:"0"
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
            width:"180px",
            height:"50px",

            textAlign:"center"
        });

        $("#payda").css({
            borderTop:"1px black solid",
            lineHeight:"30px"
        }).html("5");

        $("#pay").css({
            textAlign:"center",
            width:"180px",
            lineHeight:"70px"

        }).html("148+145+150+154<span id='degisecekPay'>+168</span>");

        $("#sonuc").css({
            lineHeight:icerikYukseklik+"px",
            paddingLeft:"5px"
        }).html(" = <span id='degisecekSonuc'>153 cm</span>")

        $("#cocuklar").delay(1000).animate({opacity:"1"},1000);
        $("#ornekAciklik").delay(3000).animate({opacity:"1"},1000);
        $("#ornekAritmetikOrtalama").delay(5000).animate({opacity:"1"},1000);

        $("#beyaz").delay(7000).animate({opacity:"1"},1000);
        $("#degisAciklik1, #degisAciklik2").delay(8000).animate({color:"#ff0000" },1000).animate({opacity:"0"},1000,function(){$("#degisAciklik1").html("154"); $("#degisAciklik2").html("9");}).animate({opacity:"1" },1000);
        $("#degisAciklik1, #degisAciklik2").delay(1000).animate({color:"#000000"},1000);

        $("#degisecekPay,#degisecekSonuc").delay(11000).animate({color:"#ff0000" },1000).animate({opacity:"0"},1000,function(){$("#degiseceksonuc").html("149,25 cm");});

        //$("#degisecekSonuc").delay(1000).animate({opacity:"0"},1000,function(){$("#degiseceksonuc").html("149,25 cm");});

        $("#degisecekSonuc").delay(1000).animate({opacity:"1" },1000).animate({color:"#000000" },1000);
        $("#pay").delay(2000).animate({color:"#000000" },1000);


        Main.animationFinished(16000);

    }
}
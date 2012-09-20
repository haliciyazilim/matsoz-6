var Animation = {
    images:[],
	init:function(container){
		Animation.container = container;

        $(Animation.container).append("<img id='resim' src='/assets/animations/cebirsel_ifade/baba_kiz.jpg'>");
        $("#resim").css({
            width:"123px",
            height:"170px",
            position:"absolute",
            top:"30px",
            left:"180px",
            opacity:0
        });

        $(container).append("<div id='aciklama' class='metin'>");
        $(container).append("<div id='tanim1' class='metin'>");
        $(container).append("<div id='tanim2' class='metin'>");

        $("#aciklama").css({
            width:"450px",
            height:"20px",
            top:"45px",
            opacity:0
        }).html("Babasının yaşı<br /> <span id='kizinYasi'>kızın yaşının</span> <span id='ucKati'>üç katından</span> <span id='ikiYas'>2 yaş fazladır</span>.");

        $("#tanim1").css({
            width:"170px",
            height:"30px",
            position:"absolute",
            top:"115px",
            opacity:0
        });
        $("#tanim1").html("Kızın yaşı: <span id='k'>k</span> olsun");


        $("#tanim2").css({
            width:"200px",
            height:"30px",
            position:"absolute",
            top:"165px",
            opacity:0
        });

        $("#tanim2").html("Babasının yaşı: <span id='ucK'>3k</span><span id='artiIki'> + 2</span>");

        $(".metin").css({
            left:"320px",
            position:"absolute",
            textAlign:"left",
            fontSize:"16px",
            color:"#000000"
        });

        //$(".kirmizi").css("color","red");


        $("#resim").delay(1000).animate({opacity:1},1000);
        $("#aciklama").delay(2000).animate({opacity:1},1000);
        $("#tanim1").delay(3000).animate({opacity:1},1000);
        $("#tanim2").delay(4000).animate({opacity:1},1000);

        $("#kizinYasi, #k").delay(5000).animate({color:"#ff0000"},1000).delay(2000).animate({color:"#000000"},1000);
        $("#ucKati, #ucK").delay(10000).animate({color:"#ff0000"},1000).delay(2000).animate({color:"#000000"},1000);
        $("#ikiYas, #artiIki").delay(15000).animate({color:"#ff0000"},1000).delay(2000).animate({color:"#000000"},1000);
        $("#ucK").delay(1000).animate({color:"#ff0000"},1000).delay(2000).animate({color:"#000000"},1000);


        Main.animationFinished(19000);


		
		}
}
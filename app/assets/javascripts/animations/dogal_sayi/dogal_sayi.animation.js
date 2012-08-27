var Animation = {
    images: [],
    init: function (container) {
        Animation.container = container;
        var hizA=500;
        var hizB=500;
        resimler=[
            '/assets/animations/dogal_sayi/sayi00.jpg',
            '/assets/animations/dogal_sayi/sayi01.jpg',
            '/assets/animations/dogal_sayi/sayi02.jpg',
            '/assets/animations/dogal_sayi/sayi03.jpg',
            '/assets/animations/dogal_sayi/sayi04.jpg',
            '/assets/animations/dogal_sayi/sayi05.jpg',
            '/assets/animations/dogal_sayi/sayi06.jpg',
            '/assets/animations/dogal_sayi/sayi07.jpg',
            '/assets/animations/dogal_sayi/sayi08.jpg',
            '/assets/animations/dogal_sayi/sayi09.jpg'
        ];
        
        //$(container).append("<div id='kapsayici'>")
        $("#kapsayici").css({
            zIndex:2,
            backgroundColor:"white"
        });
        for ( var i=0;i<=10;i++ ){
            $(container).append("<img id='resim"+i+"' class='resim' src="+resimler[i]+">");
            //$("#resim"+i).css("opacity","0")
        }
        $(".resim")
            .css("opacity","0")
            .css("z-index","1");
        $(".resim, #kapsayici").css({
            position:"absolute",
            //top:"0",
            bottom:"30px",
            margin:"auto",
            left:"0px",
            right:"0px",
            width:"293px",
            height:"31px"
            //border:"1px solid black"
            
            
            
        });

        
        $(container).append("<div id='sifir' class='sayilar'>")
        $("#sifir").css({
            right:"279px"
        }).html("0");
        
        $(container).append("<div id='bir' class='sayilar'>")
         $("#bir").css({
            right:"310px"
        }).html("1");
        
        $(container).append("<div id='iki' class='sayilar'>")
         $("#iki").css({
            right:"279px"
        }).html("2");
        
        $(container).append("<div id='uc' class='sayilar'>")
         $("#uc").css({
            right:"279px"
        }).html("3");

        $(container).append("<div id='dort' class='sayilar'>")
        $("#dort").css({
            right:"250px"
        }).html("4");

        $(container).append("<div id='bes' class='sayilar'>")
        $("#bes").css({
            right:"230px"
        }).html("5");

        $(container).append("<div id='alti' class='sayilar'>")
        $("#alti").css({
            right:"260px"
        }).html("6");

        $(container).append("<div id='yedi' class='sayilar'>")
        $("#yedi").css({
            right:"270px"
        }).html("7");

        $(container).append("<div id='sekiz' class='sayilar'>")
        $("#sekiz").css({
            right:"270px"
        }).html("8");

        $(container).append("<div id='dokuz' class='sayilar'>")
        $("#dokuz").css({
            right:"270px"
        }).html("9");

        $(container).append("<div id='oynakIki' class='oynakSayilar'>")
        $("#oynakIki").css({
            right:"555px"
        }).html("2");

        $(container).append("<div id='oynakUc' class='oynakSayilar'>")
        $("#oynakUc").css({
            right:"490px"
        }).html("3");

        $(container).append("<div id='oynakBes' class='oynakSayilar'>")
        $("#oynakBes").css({
            right:"360px"
        }).html("5");

        $(container).append("<div id='oynakYedi' class='oynakSayilar'>")
        $("#oynakYedi").css({
            right:"230px"
        }).html("7");

        $(container).append("<div id='oynakYedi2' class='oynakSayilar'>")
        $("#oynakYedi2").css({
            right:"230px"
        }).html("7");

        $(container).append("<div id='saymaSayilari' class='sayilar'>")
        $("#saymaSayilari").css({
            right:"0",
            left:"0"
        }).html("<strong id='saymaSayilariBaslik'>Sayma Sayıları:</strong> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...");



        $(".sayilar").css({
            position:"absolute",
            //top:"0",
            bottom:"35px",
            margin:"auto",
            fontSize:"20px",
            color:"#876327",
            zIndex:"1",
            opacity:"0"
        });

        $(".oynakSayilar").css({
            position:"absolute",
            //top:"0",
            bottom:"130px",
            margin:"auto",
            fontSize:"30px",
            color:"#FF0000",
            zIndex:"1",
            opacity:"0"
        });

        $("#saymaSayilariBaslik").css("color","#8FCED8");
        $("#saymaSayilari").css("color","#000000").css("width","450px");

        var sayilarArray=["sifir","bir","iki","uc","dort","bes","alti","yedi","sekiz","dokuz"];
        var bekleme=0;
        for(var i=1; i<11; i++){


            var right=(750-65*i)+"px";
            $("#resim"+(i-1)).delay(bekleme+hizB).animate({opacity:"1"},hizA);
            $("#"+sayilarArray[(i-1)]).delay(bekleme+hizB).animate({opacity:"1"},hizA).delay(hizB).animate({right:right,bottom:"130px", fontSize:"30"},hizA*3);
            $("#resim"+(i-1)).delay(2*(hizB+hizA)).animate({opacity:0},hizA);

            bekleme=i*2*(hizA+hizB)+hizA*3*i;

        }
        console.log(bekleme);

        $("#oynakUc").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"400px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        $("#oynakYedi").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"380px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        bekleme=bekleme+4*hizA+3*hizB;
        $("#oynakIki").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"405px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        $("#oynakBes").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"390px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        $("#oynakYedi2").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"375px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        bekleme=bekleme+4*hizA+3*hizB;
        $("#saymaSayilari").delay(bekleme).animate({opacity:"1"},hizA);

        Main.animationFinished(bekleme+hizA);
    }
    
    
}
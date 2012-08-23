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
            '/assets/animations/dogal_sayi/sayi09.jpg',
            '/assets/animations/dogal_sayi/sayi10.jpg'
        ];
        
        $(container).append("<div id='kapsayici'>")
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
        $("#resim0").css("opacity","1");
        
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
        
        $(".sayilar").css({
            position:"absolute",
            //top:"0",
            bottom:"37px",
            margin:"auto",
            fontSize:"20px",
            color:"#876327",
            zIndex:"1",
            opacity:"0"
        });
        
        // sıfır
        $("#kapsayici")
            .delay(hizB).animate({left:"180px"},hizA)
            .delay(hizB).animate({left:"230px"},hizA)
            .delay(hizB).animate({left:"300px"},hizA)
            .delay(hizB).animate({left:"380px"},hizA)
            .delay(hizB).animate({left:"480px"},hizA)
            .delay(hizB).animate({opacity:"0"},hizA);
        $("#sifir").delay(((hizB+hizA)*6)).animate({opacity:"1"},hizA/2);
        $("#sifir").delay(hizB).animate({right:"700px",bottom:"130px", fontSize:"30"},hizA*2);
        $("#resim0").delay(((hizB+hizA)*7)).animate({opacity:"0"},hizA);
        
        $("#resim1").delay(((hizB+hizA)*8)).animate({opacity:"1"},hizA);
        $("#kapsayici")
            .delay(hizB*3).animate({left:"0px", opacity:"1"},hizA)
            .delay(hizB).animate({left:"230px"},hizA)
            .delay(hizB).animate({left:"300px"},hizA)
            .delay(hizB).animate({left:"380px"},hizA)
            .delay(hizB).animate({opacity:"0"},hizA);
        $("#bir").delay(((hizB+hizA)*12)).animate({opacity:"1"},hizA/2);    
        $("#bir").delay(hizB).animate({right:"650px",bottom:"130px", fontSize:"30"},hizA*2);
        $("#resim1").delay(((hizB+hizA)*5)).animate({opacity:"0"},hizA);
        
        $("#resim2").delay(((hizB+hizA)*14)).animate({opacity:"1"},hizA);
        $("#kapsayici")
            .delay(hizB*3).animate({left:"0px", opacity:"1"},hizA)
            .delay(hizB).animate({left:"180px"},hizA)
            .delay(hizB).animate({left:"230px"},hizA)
            .delay(hizB).animate({left:"310px"},hizA)
            .delay(hizB).animate({left:"390px"},hizA)
            .delay(hizB).animate({left:"490px"},hizA)
            .delay(hizB).animate({opacity:"0"},hizA);
        $("#iki").delay(((hizB+hizA)*20)).animate({opacity:"1"},hizA/2);    
        $("#iki").delay(hizB).animate({right:"600px",bottom:"130px", fontSize:"30"},hizA*2);
        $("#resim2").delay(((hizB+hizA)*8)).animate({opacity:"0"},hizA);
        
         $("#resim3").delay(((hizB+hizA)*23)).animate({opacity:"1"},hizA);
        $("#kapsayici")
            .delay(hizB*3).animate({left:"0px", opacity:"1"},hizA)
            .delay(hizB).animate({left:"170px"},hizA)
            .delay(hizB).animate({left:"240px"},hizA)
            .delay(hizB).animate({left:"310px"},hizA)
            .delay(hizB).animate({left:"390px"},hizA)
            .delay(hizB).animate({left:"490px"},hizA)
            .delay(hizB).animate({opacity:"0"},hizA);
        $("#uc").delay(((hizB+hizA)*28)).animate({opacity:"1"},hizA/2);    
        $("#uc").delay(hizB).animate({right:"550px",bottom:"130px", fontSize:"30"},hizA*2);
        $("#resim3").delay(((hizB+hizA)*8)).animate({opacity:"0"},hizA);
        
        Main.animationFinished(((hizB+hizA)*30))
    }
    
    
}
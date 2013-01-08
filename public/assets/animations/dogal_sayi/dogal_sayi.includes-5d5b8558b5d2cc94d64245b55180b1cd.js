function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
function dogalSayi(){
    var dogalSayi=Math.floor(Math.random()*99+1);
    
    $("#soru").append("<div id='dogalSayi'>");
        $("#dogalSayi")
            .css("width","40px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            .html(dogalSayi);
            //.css("border","1px solid red");
    
    return 1;
}

function negatifTamSayi(){
    var negatifTamSayi=Math.floor(Math.random()*(-99)+(-1));
    
    $("#soru").append("<div id='dogalSayi'>");
        $("#dogalSayi")
            .css("width","40px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            .html(negatifTamSayi);
            //.css("border","1px solid red");
    return 2;
    
}

function ondalikKesir(){
    var ondalikKesir=0;
    function sayiSec(){
    ondalikKesir=Math.random()*99+1;
    ondalikKesir=ondalikKesir.toFixed(2);
    }

    sayiSec();
    var kesik= ondalikKesir.toString().substring(0,ondalikKesir.toString().length-3);
    console.log("test: "+kesik);
    console.log("LEnght: "+ondalikKesir.toString().length)
    var test=ondalikKesir-parseFloat(kesik,10);
    test=test.toFixed(2);
    console.log("sonuc: "+test);
    if((test)==0)
        sayiSec();


    $("#soru").append("<div id='ondalikKesir'>");
        $("#ondalikKesir")
            .css("width","100px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            .html(Util.format(ondalikKesir,{places:2}));
            //.css("border","1px solid red");
    return 3;
}


function kesir(){
    var payda=Math.floor(Math.random()*97+2);
    //payda=2;
    var pay=Math.floor(Math.random()*payda+1);
    
    $("#soru").append("<div id='kesir'>");
        $("#kesir")
            .css("width","100px")
            .css("height","82px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            //.html(pay+"/"+payda);
            //.css("border","1px solid red");
    $("#kesir").append("<div id='pay' class='kesir'>");
    $("#kesir").append("<div id='payda' class='kesir'>");
    
    $(".kesir")
        .css("width","50px")
        .css("height","40px")
        .css("left","0")
        .css("top","0")
        .css("bottom","0")
        .css("right","0")
        .css("margin","auto")
        
        //.css("border","1px solid red");
    $("#payda").css("border-top","2px solid black").html(payda).css("line-height","40px");
    $("#pay").html(pay).css("line-height","50px")
            
     return 4;  
    
}
;
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
            $(container).append("<img id='resim"+i+"' class='resim' src='"+resimler[i]+"'>");
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

        $(container).append("<div id='donusumStr'>");
        $(container).append("<div id='sayiOlusturmaStr'>");


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

        $("#donusumStr").css({
            width:"350px",
            position:"absolute",
            //top:"0",
            bottom:"70px",
            left:"0",
            right:"0",
            margin:"auto",
            fontSize:"20px",
            color:"#000000"


        }).html("<b>Rakamların tarih boyunca dönüşümü</b>");

        $("#sayiOlusturmaStr").css({
            width:"300px",
            position:"absolute",
            //top:"0",
            bottom:"40px",
            left:"0",
            right:"0",
            margin:"auto",
            fontSize:"20px",
            color:"#000000",
            opacity:"0"



        }).html("<b>Rakamlarla sayıları oluştururuz.</b>");

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
        $("#donusumStr").delay((bekleme-hizA)).animate({opacity:"0"},hizA)
        $("#sayiOlusturmaStr").delay((bekleme)).animate({opacity:"1"},hizA)

        $("#oynakUc").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"400px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        $("#oynakYedi").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"380px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        bekleme=bekleme+4*hizA+3*hizB;
        $("#oynakIki").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"405px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        $("#oynakBes").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"390px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        $("#oynakYedi2").delay(bekleme).animate({opacity:"1"},hizA).animate({right:"375px",bottom:"70px",color:"#000000"},hizA*2).delay(hizB*3).animate({opacity:"0"},hizA);
        bekleme=bekleme+4*hizA+3*hizB;

        $("#sayiOlusturmaStr").delay(6*hizA+6*hizB).animate({opacity:"0"},hizA);
        $("#saymaSayilari").delay(bekleme).animate({opacity:"1"},hizA);

        Main.animationFinished(bekleme+hizA);
    }
    
    
}
;
var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    images:[],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen sayının doğal sayı olup olmadığını, "EVET" ya da "HAYIR" düğmelerine basarak belirtiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        
        $(container).append("<div id='soru'>");
            $("#soru")
                .css("width","100px")
                .css("height","100px")
                .css("position","absolute")
                .css("left","0")
                .css("top","20px")
                //.css("bottom","0")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red");
        
          Interaction.appendStatus({
            bottom:'50px',
            right:'160px',
            width:"280px",
            textAlign:"center"
        });
	
        Interaction.appendButton({
            bottom:'40px',
            right:'40px',
	});
        Interaction.button.id="btnKontrol";
        
        $(container).append("<div id='soruCumlesi'>")
        $("#soruCumlesi")
                .css("width","300px")
                .css("height","30px")
                .css("position","absolute")
                .css("left","0")
                .css("top","130px")
                //.css("bottom","0")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red")
                //.css("font-size","20px")
                .css("text-align","center")
                .html("Yukarıdaki sayı doğal sayı mı?");
        $(container).append("<div id='yanit'>")
        $("#yanit")
            .css("width","154px")
            .css("height","40px")
            .css("position","absolute")
            .css("left","0")
            .css("top","160px")
            //.css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            
            
        
        $("#yanit").append("<img id='evet' class='yanitlar' src='/assets/animations/dogal_sayi/evet.png' />");
        $("#yanit").append("<img id='hayir' class='yanitlar' src='/assets/animations/dogal_sayi/hayir.png' />");
        $("#yanit img").attr("style","clear:none !important");
        $("#evet").css("margin-right","10px");
        $(".yanitlar").css("float","left").css("width","72").css("height","32");
        
        Interaction.cevap;
        
        Interaction.evetTik=function(){
            Interaction.cevap=1;
            console.log(Interaction.cevap);
            Interaction.button.click();
            $("#btnKontrol").css("visibility","visible");
        
        };
        
        Interaction.hayirTik=function(){
            Interaction.cevap=0;
            console.log(Interaction.cevap);
            Interaction.button.click();
            $("#btnKontrol").css("visibility","visible");
        };
        

        Interaction.setRandomGenerator(5,1)
        
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $("#btnKontrol").css("visibility","hidden");
        $("#evet").bind("click",Interaction.evetTik);
        $("#hayir").bind("click",Interaction.hayirTik);
        Interaction.trial=1;
        console.log(randomNumber);
        //dogalSayi();
        //ondalikKesir();
        //negatifTamSayi();
        //kesir();
        $("#soru").html("");
        
        switch (randomNumber){
            case 1:
                Interaction.istenen=dogalSayi();
                break;
            case 2:
                Interaction.istenen=ondalikKesir();
                break;
            case 3:
                Interaction.istenen=negatifTamSayi();
                break;
            case 4:
                Interaction.istenen=kesir();
                break;
             
        }
        
    },
    preCheck : function(){
        
    },
    isAnswerCorrect : function(value){
        console.log("istenen: "+Interaction.istenen+", cevap: "+Interaction.cevap);
        $("#evet, #hayir").unbind("click");
        
        if(Interaction.istenen==1){
            if(Interaction.cevap==1){
                return true;
            }
        }
        else{
            if(Interaction.cevap==0){
                return true;
            }
        }
            
        
        
    },
    onCorrectAnswer : function(){
        if(Interaction.istenen==1)
            Interaction.setStatus('Doğru; yukarıdaki sayı doğal sayıdır.', true);
        else if(Interaction.istenen==2)
            Interaction.setStatus('Doğru; yukarıdaki sayı negatif tam sayıdır.', true);
        else if(Interaction.istenen==3)
            Interaction.setStatus('Doğru; yukarıdaki sayı ondalık kesirdir.', true);
        else if(Interaction.istenen==4)
            Interaction.setStatus('Doğru; yukarıdaki sayı kesirdir.', true);
    },
    onWrongAnswer : function(){
        
    },
    onFail : function(){
        if(Interaction.istenen==1)
            Interaction.setStatus('Yanlış; yukarıdaki sayı doğal sayıdır.', false);
        else if(Interaction.istenen==2)
            Interaction.setStatus('Yanlış; yukarıdaki sayı negatif tam sayıdır.', false);
        else if(Interaction.istenen==3)
            Interaction.setStatus('Yanlış; yukarıdaki sayı ondalık kesirdir.', false);
        else if(Interaction.istenen==4)
            Interaction.setStatus('Yanlış; yukarıdaki sayı kesirdir.', false);
        
    }
}
;





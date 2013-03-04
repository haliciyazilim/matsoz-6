function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
function adamlariGetir(){

    var kisilerArray=Interaction.kisilerArray;
    var kisilerEn=[73,69,78,81,79,92,87];
    for(var i=0; i<kisilerArray.length;i++){
        $(Interaction.container).append("<img id='"+kisilerArray[i][0]+"' class='kisiler' src='"+kisilerArray[i][1]+"'>");
        $("#"+kisilerArray[i][0]).css("width",kisilerEn[i])


        if(i<4){
            $("#"+kisilerArray[i][0]).css({
                left:i*90+20+"px",
                bottom:"150px"
            });
        }
        else{
            $("#"+kisilerArray[i][0]).css({
                left:(i-4)*90+20+"px",
                bottom:"50px"
            });
        }
        Interaction.kisilerYasToplam+=kisilerArray[i][0];



    }

    $(".kisiler").css({
        position:"absolute",

        height:"96px",
        cursor:"pointer"

    });



    $(".kisiler").click(
        function(){
            console.log("vurma");
            if(Interaction.izin==true){

                    $(this).animate({opacity:"0"},1000);
                    $(this).addClass("yok");

                hesapla();
            }

        }
    );
}

function adamlariKaristir(){
    Interaction.izin=true;
    var kisilerArray=Interaction.kisilerArray;

    var karisikSira=Util.getShuffledArray(7);
    //console.log(karisikSira);

    $(".kisiler").css("opacity","1").removeClass("yok");

    for(var i=0; i<kisilerArray.length;i++){
        if(i<4){
            $("#"+kisilerArray[karisikSira[i]][0]).css({
                left:i*90+20+"px",
                bottom:"150px"
            });
        }
        else{
            $("#"+kisilerArray[karisikSira[i]][0]).css({
                left:(i-4)*90+20+"px",
                bottom:"50px"
            });
        }

    }

    //setTimeout(function(){Interaction.izin=false;},5000);
    //setTimeout(function(){adamlariKaristir()},10000);

    hesapla();

}

function hesapla(){

    var elemanSayisi=$(".yok").length;
    var gidenlerToplam=0;
    for(var i=0; i<elemanSayisi;i++){
        //console.log($(".yok").get(i).id);
        gidenlerToplam+=parseInt($(".yok").get(i).id,10);
    }
    var kalanlar=$(".kisiler").not(".yok");
   /* if(kalanlar.length==2)
        Interaction.izin=false;*/
    console.log("kalanlar"+kalanlar.length);

    var kalanlarArray=[];
    for(var i=0; i<kalanlar.length;i++)
        kalanlarArray.push(kalanlar.get(i).id);

    //console.log(kalanlarArray);
    var buyuktenKucuge=kalanlarArray.sort(function(a,b){return b-a});
    //console.log("Buyuk"+enBuyuk[0]);


    //console.log("Kucuk"+enKucuk[0]);

    var enBuyuk=buyuktenKucuge[0];
    var enKucuk=buyuktenKucuge[buyuktenKucuge.length-1];
    console.log("Buyuk: "+enBuyuk+", Küçük: "+enKucuk);
    var aciklik=enBuyuk-enKucuk>0?enBuyuk-enKucuk:0 ;


    var ortalama=Util.format(parseInt(Interaction.kisilerYasToplam-gidenlerToplam,10)/parseInt(Interaction.kisilerArray.length-elemanSayisi),{places:2});

    console.log("Kişiler yas Toplam: "+Interaction.kisilerYasToplam+", gidenler Toplam:"+gidenlerToplam+",Kişiler Uzunluk: "+Interaction.kisilerArray.length+",giden Eleman sayısı "+elemanSayisi)

    $("#sonucAciklik").html(aciklik);
    $("#sonucOrtalama").html(ortalama);




}
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        $(Animation.container).append("<img id='cocuklar' src='/assets/animations/aciklik/cocuklar.jpg'>");
        $("#cocuklar").css({
            width:"360",
            height:"172px",
            position:"absolute",
            top:"20px",
            left:"5px",
            zIndex:"1",
            opacity:0
        });

        $(Animation.container).append("<div id='beyaz'></div>");
        $("#beyaz").css({
            width:"70",
            height:"172px",
            position:"absolute",
            top:"20px",
            left:"290px",
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
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },

    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki insanların yaşları için açıklık ve aritmetik ortalama hesaplanmıştır. İstediğiniz kişiyi çıkararak açıklık ve aritmetik ortalamayı inceleyiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        var resim1=[5,"/assets/animations/aciklik/aciklik_5.jpg"];
        var resim2=[12,"/assets/animations/aciklik/aciklik_12.jpg"];
        var resim3=[19,"/assets/animations/aciklik/aciklik_19.jpg"];
        var resim4=[27,"/assets/animations/aciklik/aciklik_27.jpg"];
        var resim5=[35,"/assets/animations/aciklik/aciklik_35.jpg"];
        var resim6=[43,"/assets/animations/aciklik/aciklik_43.jpg"];
        var resim7=[72,"/assets/animations/aciklik/aciklik_72.jpg"];



        Interaction.kisilerArray=[resim1,resim2,resim3,resim4,resim5,resim6,resim7];
        Interaction.kisilerYasToplam=0;


        $(container).append("<div id='aciklik'>");
        $("#aciklik").html("Açıklık = <b id='sonucAciklik'></b>");
        $("#aciklik").css({
            position:"absolute",
            width:"150px",
            height:"20px",
            top:"90px",
            left:"410px",
            fontSize:"20px"

        });

        $(container).append("<div id='ortalama'>");
        $("#ortalama").html("Aritmetik ortalama = <b id='sonucOrtalama'></b>");
        $("#ortalama").css({
            position:"absolute",
            width:"250px",
            height:"20px",
            top:"190px",
            left:"300px",
            fontSize:"20px"

        });

        $(container).append("<button id='btn'> Yeniden dene</button>")
        $("#btn").css({
            position:"absolute",
            left:"400px",
            bottom:"40px"
        });

        $("#btn").click(function (){
            adamlariKaristir();
        });

        adamlariGetir();




        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        adamlariKaristir();

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
;





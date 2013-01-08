function __Styles(){
    animTop=50;
    animLeft=384;
}
;
var sil=function(secilen, parent){
    this.secilen=secilen
    this.parent=parent;

    console.log("secilen: "+this.secilen+", parent: "+this.parent);
    console.log(this.secilen);
    console.log($("#pantolon1"));
    if($(this.secilen).hasClass("tisortler")==true){
        $(".tisortler").css("opacity","1");
        var tisortElemanlar=$(".tisortler");
        //console.log(tisortElemanlar)
            for(var i=0;i<tisortElemanlar.length;i++){
                console.log($(this.secilen).get(0).className);
                if($(this.secilen).get(0).className=="giydirilmis")
                    continue;
                else
                {
                for(var j=1; j<=5;j++){
                    //console.log(tisortElemanlar[i].id+", tisort"+j+"A");
                    if(tisortElemanlar[i].id==("tisort"+j+"A") && ($(this.secilen).get(0).id+"A")!=tisortElemanlar[i].id){
                        console.log("İf: #"+tisortElemanlar[i].id+", "+$(this.secilen).get(0).id);
                        $("#"+tisortElemanlar[i].id).remove();
                        break;
                    }
                }

            }
        }
    }

    else if($(this.secilen).hasClass("pantolonlar")==true){
        $(".pantolonlar").css("opacity","1");
        var pantolonElemanlar=$(".pantolonlar");

        for(var i=0;i<pantolonElemanlar.length;i++){
            if($(this.secilen).get(0).className=="giydirilmis")
                continue;
            else
            {
                for(var j=1; j<=4;j++){
                    console.log(pantolonElemanlar[i].id+", pantolon"+j+"A");
                    if(pantolonElemanlar[i].id==("pantolon"+j+"A") && ($(this.secilen).get(0).id+"A")!=pantolonElemanlar[i].id){
                        $("#"+pantolonElemanlar[i].id).remove();
                        break;
                    }
                }
            }
        }
    }

    else if($(this.secilen).hasClass("ayakkabilar")==true){
        $(".ayakkabilar").css("opacity","1");
        var ayakkabiElemanlar=$("#ayakkabiCerceve").children();
        for(var i=0;i<ayakkabiElemanlar.length;i++){
            if($(this.secilen).get(0).className=="giydirilmis")
                continue;
            else
            {
                for(var j=1; j<=3;j++){
                    console.log(ayakkabiElemanlar[i].id+", ayakkabi"+j+"A");
                    if(ayakkabiElemanlar[i].id==("ayakkabi"+j+"A") && ($(this.secilen).get(0).id+"A")!=ayakkabiElemanlar[i].id){
                        $("#"+ayakkabiElemanlar[i].id).remove();
                        break;
                    }

                }
            }
        }
    }
}



var kombinasyonKontrol=function(grup){
    this.grup=grup;
    this.eslesme=0
    this.genelSayac=0;
    //alert("Ombinasyon uzunluğu: "+Interaction.kombinasyonlar.length)
    if(Interaction.kombinasyonlar.length>0){
        for(var i=0; i<Interaction.kombinasyonlar.length;i++){
            //alert("this.grup.length"+this.grup.length)
            for(var j=0; j<this.grup.length;j++){
                if(Interaction.kombinasyonlar[i][j]==this.grup[j]){
                    //alert("Büyük Array: "+Interaction.kombinasyonlar[i][j]+", küçük grup: "+this.grup[j]+", eşleme"+this.eslesme);
                    this.eslesme++;
                }
            }
            if(this.eslesme==3){
                //alert("sııntı var: "+i);
                Interaction.setStatus('Daha önce bu kıyafet üçlüsünü seçtin.',false);

                this.genelSayac=1;
                break;

            }
            else{
                //alert("sııntı yok: "+i);
                this.eslesme=0;
            }

        }
    }

    if(this.genelSayac==0){
        Interaction.kombinasyonlar.push(this.grup);

        if(Interaction.kombinasyonlar.length==24){
            Interaction.setStatus('Tebrikler',true);
            Interaction.kombinasyonlar=[];
            return true;
        }
        else
            return true;
    }



}

function esyalarClick (){

    Interaction.setStatus("");
    $("#kiyafetlerStr").html("");
    var seciliCerceveId=$(this).get(0).parentNode.id;
    var secilen=$(this).get(0).id;
    var seciliYeniId=$(this).get(0).id+"A";

    sil(this,$(this).get(0).className);
    //console.log(seciliYeniId);
    $(this).clone().attr("id",seciliYeniId).appendTo("#"+seciliCerceveId).css("opacity","0.4");
    $(this).css("opacity","0.4");



    //console.log($(this).get(0).parentNode.id);
    //console.log("seçilen: "+$(this).get(0).id);
    console.log("Sınıf işmi: "+$(this).get(0).className);


    console.log("Giydirilmişler: "+$(".esyalar").length);
    var esyalarUzunluk=$(".esyalar").length;
    if(esyalarUzunluk==12)
        $("#btnGoster").removeAttr("disabled");

}

function hepsiniSil(){
    var uzunlukT=$(".tisortler").length;

    for(var i=4; i<uzunlukT; i++){
        var idNo=$(".tisortler").get(i).id;
        $("#"+idNo).remove();
    }

    var uzunlukP=$(".pantolonlar").length;

    for(var i=3; i<uzunlukP; i++){
        var idNo=$(".pantolonlar").get(i).id;
        $("#"+idNo).remove();
    }

    var uzunlukA=$(".ayakkabilar").length;

    for(var i=2; i<uzunlukA; i++){
        var idNo=$(".ayakkabilar").get(i).id;
        $("#"+idNo).remove();
    }

}
;
var Animation = {
    images:[],
	init:function(container){
		Animation.container = container;

        var resim={
        haritaBos:"/assets/animations/saymanin_temel_ilkesi/harita_bos.jpg",
        harita:"/assets/animations/saymanin_temel_ilkesi/harita.jpg",

        istIzmGemi:"/assets/animations/saymanin_temel_ilkesi/ist_izm_gemi.gif",
        istIzmOtobus:"/assets/animations/saymanin_temel_ilkesi/ist_izm_otobus.gif",
        istIzmUcak:"/assets/animations/saymanin_temel_ilkesi/ist_izm_ucak.gif",

        izmAnkOtobus:"/assets/animations/saymanin_temel_ilkesi/izm_ank_otobus.gif",
        izmAnkTren:"/assets/animations/saymanin_temel_ilkesi/izm_ank_tren.gif",

        istAnkOtoOto:"/assets/animations/saymanin_temel_ilkesi/istank_oto_oto.gif",
        istAnkOtoTren:"/assets/animations/saymanin_temel_ilkesi/istank_oto_tren.gif",
        istAnkGemiOto:"/assets/animations/saymanin_temel_ilkesi/istank_gemi_oto.gif",
        istAnkGemiTren:"/assets/animations/saymanin_temel_ilkesi/istank_gemi_tren.gif",
        istAnkUcakOto:"/assets/animations/saymanin_temel_ilkesi/istank_ucak_oto.gif",
        istAnkUcakTren:"/assets/animations/saymanin_temel_ilkesi/istank_ucak_tren.gif",

        otobus:"/assets/animations/saymanin_temel_ilkesi/otobus.png",
        tren:"/assets/animations/saymanin_temel_ilkesi/tren.png",
        ucak:"/assets/animations/saymanin_temel_ilkesi/ucak.png",
        gemi:"/assets/animations/saymanin_temel_ilkesi/gemi.png"
        }




        $(Animation.container).append("<img id='haritaBos'  class='harita' src='"+resim.haritaBos+"'>");
        $(Animation.container).append("<img id='haritaDolu'  class='harita' src='"+resim.harita+"'>");
        $("#haritaDolu").css("opacity","0");
        $(".harita").css({
            position:"absolute",
            width:"387px",
            height:"170px",
            left:"6px",
            top:"25px",
            zIndex:1
        });


        //
        $(Animation.container).append("<div id='tablo1'>" );

        

        $("#tablo1").append("<div id='istIzmirB' class='baslik'>");
        $("#istIzmirB").html("İstanbul - İzmir");


        $("#tablo1").append("<div id='istIzmirI' class='icerik'>");

        $("#tablo1 #istIzmirI").append("<img class='otobus' src='"+resim.otobus+"'><img class='gemi' src='"+resim.gemi+"'> <img class='ucak' src='"+resim.ucak+"'>" );


        $("#tablo1").append("<div id='izmirAnkaraB' class='baslik'>");
        $("#izmirAnkaraB").html("İzmir - Ankara");

        $("#tablo1").append("<div id='izmirAnkaraI' class='icerik'>");


        $("#tablo1 #izmirAnkaraI").append("<img class='otobus' src='"+resim.otobus+"'><img class='tren' src='"+resim.tren+"'>" );


        $(Animation.container).append("<div id='tablo2'>" );
        $("#tablo2").append("<div id='istAnkaraB' class='baslik'>");
        $("#istAnkaraB").html("İstanbul - Ankara");


        $("#tablo2").append("<div id='istAnkaraI' class='icerik'>");

        $("#tablo2 #istAnkaraI").append("<img id='ayrim1' class='otobus' src='"+resim.otobus+"'><img id='ayrim2' class='otobus' src='"+resim.otobus+"'><img id='ayrim3' class='otobus' src='"+resim.otobus+"'><img id='ayrim4' class='tren' src='"+resim.tren+"'>" );
        $("#tablo2 #istAnkaraI").append("<img id='ayrim5' class='gemi' src='"+resim.gemi+"'><img id='ayrim6' class='otbus' src='"+resim.otobus+"'><img id='ayrim7' class='gemi' src='"+resim.gemi+"'><img id='ayrim8' class='tren' src='"+resim.tren+"'>" );
        $("#tablo2 #istAnkaraI").append("<img id='ayrim9' class='ucak' src='"+resim.ucak+"'><img id='ayrim10' class='otobus' src='"+resim.otobus+"'><img id='ayrim11' class='ucak' src='"+resim.ucak+"'><img id='ayrim12' class='tren' src='"+resim.tren+"'>" );



        $("#ayrim2").css("padding-right","40px");
        $("#ayrim4").css("padding-right","10px");
        $("#ayrim6").css("padding-right","10px");
        $("#ayrim8").css("padding-right","25px");
        $("#ayrim10").css("padding-right","35px");


        $("#tablo1").css({
            position:"absolute",
            width:"125px",
            height:"auto",
            left:"246px",
            top:"25px",
            zIndex:2,

            padding:"10px",
            backgroundColor: "rgb(255, 255, 255)",
            backgroundColor: "rgba(255, 255, 255, .65)"
        });

        $("#tablo2").css({
            position:"absolute",
            width:"365px",
            height:"auto",
            right:"16px",
            top:"85px",
//            backgroundColor: "rgb(255, 255, 255)",
//            backgroundColor: "rgba(255, 255, 255, .65)"
        });
        
        $(".baslik").css({
            float:"left",
            width:"100%",
            textAlign:"center"

        });

        $(".icerik").css({
            float:"left",
            width:"100%",
            textAlign:"center"
        });

        $(".icerik img").css({
            height:"auto",
            float:"left",
            clear:"none"


        });

        //$(".ayrim").css("padding-right","10px")

        $(Animation.container).append("<div id='soru'>");
        $(Animation.container).append("<div id='sonuc'>");

        $("#soru").css({
            position:"absolute",
            width:"380px",
            height:"auto",
            right:"6px",
            top:"30px",
            fontSize:"13px"



        }).html("İstanbul’dan İzmir’e 3 araçla, İzmir’den Ankara’ya 2 araçla gidebilen bir kişi, İstanbul’dan, İzmir’e uğrayarak Ankara’ya kaç farklı araçla gidebilir?");

        $("#sonuc").css({
            position:"absolute",
            width:"380px",
            height:"auto",
            right:"6px",
            bottom:"20px",
            fontSize:"13px"

        }).html("İstanbul’dan, İzmir’e uğrayarak Ankara’ya 3 x 2 = 6 farklı araçla gidilebilir.");




        $("#soru, #sonuc, #istIzmirB, #istIzmirI .otobus, #istIzmirI .gemi, #istIzmirI .ucak, #izmirAnkaraB, #izmirAnkaraI .otobus, #izmirAnkaraI .tren, #tablo1").css("opacity","0");
        $("#istAnkaraB,").css("opacity","0");

        for(i=1; i<13;i++)
            $("#ayrim"+i).css("opacity","0");

        $("#soru").delay(1000).animate({opacity:1},1000);

        //$("#istIzmirI .otobus").delay(1000).animate({opacity:1},1000);


        setTimeout(function(){$("#haritaDolu").animate({opacity:1},2000)});

        setTimeout(function(){
            haritaGetir(resim.istIzmOtobus, "#istIzmirI .otobus");
            $("#tablo1, #istIzmirB").animate({"opacity":"1"},1000);

        },3000);

        setTimeout(function(){
            haritaGetir(resim.istIzmGemi, "#istIzmirI .gemi")

        },11000);

        setTimeout(function(){
            haritaGetir(resim.istIzmUcak, "#istIzmirI .ucak")

        },22000);

        setTimeout(function(){
            haritaGetir(resim.izmAnkOtobus, "#izmirAnkaraI .otobus");
            $("#izmirAnkaraB").animate({"opacity":"1"},1000);

        },29000);

        setTimeout(function(){
            haritaGetir(resim.izmAnkTren, "#izmirAnkaraI .tren")

        },37000);
// İstanbul - İzmir - Ankara
        setTimeout(function(){
            haritaGetir(resim.istAnkOtoOto, "#istAnkaraI #ayrim1, #istAnkaraI #ayrim2");
            $("#tablo2, #istAnkaraB").animate({"opacity":"1"},1000);

        },48000);

        setTimeout(function(){
            haritaGetir(resim.istAnkOtoTren, "#istAnkaraI #ayrim3, #istAnkaraI #ayrim4");
        },56000);

        setTimeout(function(){
            haritaGetir(resim.istAnkGemiOto, "#istAnkaraI #ayrim5, #istAnkaraI #ayrim6");
        },64000);

        setTimeout(function(){
            haritaGetir(resim.istAnkGemiTren, "#istAnkaraI #ayrim7, #istAnkaraI #ayrim8");
        },72000);

        setTimeout(function(){
            haritaGetir(resim.istAnkUcakOto, "#istAnkaraI #ayrim9, #istAnkaraI #ayrim10");
        },78000);

        setTimeout(function(){
            haritaGetir(resim.istAnkUcakTren, "#istAnkaraI #ayrim11, #istAnkaraI #ayrim12");
        },84000);
        setTimeout(function(){
            $("#sonuc").animate({opacity:1},1000);
        },90000);


        function haritaGetir(src, id){

            //$("#harita").attr("src",src);
            if($("#harita"))
                $("#harita").remove();


            $(id).delay(500).animate({opacity:"1"},1000);

            $(Animation.container).append("<img id='harita' class='harita' src='"+src+"'>");
            $(".harita").css({
                position:"absolute",
                width:"387px",
                height:"170px",
                left:"6px",
                top:"25px",
                zIndex:1

            });

        }

//        $(Animation.container).append("<img id='haritaBos'  class='harita' src='"+resim.harita+"'>");
//        $(Animation.container).append("<img id='haritaBos'  class='harita' src='"+resim.istIzmGemi+"'>");
//        $(Animation.container).append("<img id='haritaBos'  class='harita' src='"+resim.istIzmOtobus+"'>");
//        $(Animation.container).append("<img id='haritaBos'  class='harita' src='"+resim.istIzmUcak+"'>");
//        $(Animation.container).append("<img id='haritaBos'  class='harita' src='"+resim.izmAnkOtobus+"'>");



        Main.animationFinished(90000);
		
		}
}
;
var Interaction = {
    
	getFramework:function(){
		return 'paper';
	},

    init:function(container){
		Interaction.container = container;
		Main.setObjective('Yandaki çocuğun 4 tişört 3 pantolon ve 2 ayakkabısından birer tanesini seçerek çocuğun kaç farklı şekilde giyinebileceğini bulunuz.');
		Interaction.paper = {
			width:$(container).width(),
			height:$(container).height()
		}

        Interaction.rCocuk="/assets/animations/saymanin_temel_ilkesi/cocuk.png";
        Interaction.rTisortBeyaz="/assets/animations/saymanin_temel_ilkesi/tisort_beyaz.png";
        Interaction.rTisortKirmizi="/assets/animations/saymanin_temel_ilkesi/tisort_kirmizi.png";
        Interaction.rTisortMavi="/assets/animations/saymanin_temel_ilkesi/tisort_mavi.png";
        Interaction.rTisortMor="/assets/animations/saymanin_temel_ilkesi/tisort_mor.png";
        Interaction.rTisortSari="/assets/animations/saymanin_temel_ilkesi/tisort_sari.png";

        Interaction.rPantolontBeyaz="/assets/animations/saymanin_temel_ilkesi/pantolon_beyaz.png";
        Interaction.rPantolonKahve="/assets/animations/saymanin_temel_ilkesi/pantolon_kahve.png";
        Interaction.rPantolonMavi="/assets/animations/saymanin_temel_ilkesi/pantolon_mavi.png";
        Interaction.rPantolonSiyah="/assets/animations/saymanin_temel_ilkesi/pantolon_siyah.png";

        Interaction.rAyakkabitBeyaz="/assets/animations/saymanin_temel_ilkesi/ayakkabi_beyaz.png";
        Interaction.rAyakkabiKahve="/assets/animations/saymanin_temel_ilkesi/ayakkabi_kahve.png";
        Interaction.rAyakkabiSiyah="/assets/animations/saymanin_temel_ilkesi/ayakkabi_siyah.png";


        Interaction.tisortlerStr=["sarı","kırmızı","mavi","mor"];
        Interaction.pantolonlarStr=["siyah","mavi","kahverengi"];
        Interaction.ayakkabilarStr=["kahverengi","siyah"];

        $(container).append("<img id='cocuk' src='"+Interaction.rCocuk+"'>");

        $(container).append("<img id='cocukTisort' src='"+Interaction.rTisortBeyaz+"'>");
        $(container).append("<img id='cocukPantolon' src='"+Interaction.rPantolontBeyaz+"'>");
        $(container).append("<img id='cocukAyakkabi' src='"+Interaction.rAyakkabitBeyaz+"'>");

		$(container).append("<div id='tisortCerceve'>");
            $("#tisortCerceve").append("<img id='tisort1' class='esyalar tisortler' src='"+Interaction.rTisortSari+"'>");
            $("#tisortCerceve").append("<img id='tisort2' class='esyalar tisortler' src='"+Interaction.rTisortKirmizi+"'>");
            $("#tisortCerceve").append("<img id='tisort3' class='esyalar tisortler' src='"+Interaction.rTisortMavi+"'>");
            $("#tisortCerceve").append("<img id='tisort4' class='esyalar tisortler' src='"+Interaction.rTisortMor+"'>");
        $(container).append("<div id='pantolonCerceve'>");
            $("#pantolonCerceve").append("<img id='pantolon1' class='esyalar pantolonlar' src='"+Interaction.rPantolonSiyah+"'>");
            $("#pantolonCerceve").append("<img id='pantolon2' class='esyalar pantolonlar' src='"+Interaction.rPantolonMavi+"'>");
            $("#pantolonCerceve").append("<img id='pantolon3' class='esyalar pantolonlar' src='"+Interaction.rPantolonKahve+"'>");
        $(container).append("<div id='ayakkabiCerceve'>");
            $("#ayakkabiCerceve").append("<img id='ayakkabi1' class='esyalar ayakkabilar' src='"+Interaction.rAyakkabiKahve+"'>");
            $("#ayakkabiCerceve").append("<img id='ayakkabi2' class='esyalar ayakkabilar' src='"+Interaction.rAyakkabiSiyah+"'>");

        $("#tisortCerceve").css({
            position:"absolute",
            width:"230px",
            height:"50px",
            top:"20px",
            left:"20px"
            //backgroundColor:"red"
        });

        $("#pantolonCerceve").css({
            position:"absolute",
            width:"170px",
            height:"70px",
            top:"100px",
            left:"15px"
            //backgroundColor:"yellow"
        });

        $("#ayakkabiCerceve").css({
            position:"absolute",
            width:"110px",
            height:"30px",
            top:"200px",
            left:"15px"
            //backgroundColor:"orange"
        });

        $(".esyalar").css({
            position:"absolute",
            width:"59px",
            top:"0px",
            cursor:"pointer"

        });

        for(var i=1;i<5;i++){
            $("#tisort"+i).css({left:(i-1)*70});
            $("#pantolon"+i).css({left:(i-1)*70});
            $("#ayakkabi"+i).css({left:(i-1)*70});

        }

        $(".tisortler").css({
            height:"75px",
            zIndex:4
        });
        $(".pantolonlar").css({
            height:"95px",
            zIndex:3
        });
        $(".ayakkabilar").css({
            height:"30px",
            zIndex:2
        });

        $("#cocuk").css({
            position:"absolute",
            width:"96px",
            height:"232px",
            top:"0px",
            left:"370px"
        });

        $("#cocukTisort").css({
            position:"absolute",
            width:"59px",
            height:"75",
            top:"60px",
            left:"404px",
            zIndex:3
        });

        $("#cocukPantolon").css({
            position:"absolute",
            width:"59px",
            height:"95px",
            top:"122px",
            left:"399px",
            zIndex:2
        });

        $("#cocukAyakkabi").css({
            position:"absolute",
            width:"59px",
            height:"30px",
            top:"203px",
            left:"398px",
            zIndex:1
        });
/*


        $("#tisort1").css({backgroundColor:"green"});
        $("#tisort2").css({backgroundColor:"blue"});
        $("#tisort3").css({backgroundColor:"black"});
        $("#tisort4").css({backgroundColor:"purple"});

        $("#pantolon1").css({backgroundColor:"green"});
        $("#pantolon2").css({backgroundColor:"blue"});
        $("#pantolon3").css({backgroundColor:"black"});

        $("#ayakkabi1").css({backgroundColor:"green"});
        $("#ayakkabi2").css({backgroundColor:"blue"});
*/


        $(container).append("<div id='kiyafetlerStr'>")
        $("#kiyafetlerStr").css({
            position:"absolute",
            width:"350px",
            height:"30px",
            bottom:"30px",
            right:"20px",
            textAlign:"right"
        });

        $(container).append("<button id='btnGoster'>")
        $("#btnGoster").css({
            position:"absolute",
            width:"110px",
            height:"30px",
            bottom:"20px",
            left:"110px",


        }).attr("disabled","disabled").html("Göster");

        $(".esyalar").click(esyalarClick);

        Interaction.kombinasyonlar=new Array();

        $("#btnGoster").click(function(){

            $(".esyalar").unbind("click");
            $(this).attr("disabled","disabled");
            $(".giydirilmis").remove();

            $(".esyalar").css("opacity","1");
            var tisort="";
            var pantolon="";
            var ayakkabi="";
            var tisortElemanlar=$("#tisortCerceve").children();
            var pantolonElemanlar=$("#pantolonCerceve").children();
            var ayakkabiElemanlar=$("#ayakkabiCerceve").children();

            //console.log(tisortElemanlar[1])
            //console.log("tisort class: "+$("#"+tisortElemanlar[1].id).hasClass("giydilirmis"))

            for(var i=0;i<tisortElemanlar.length;i++){
                if($("#"+tisortElemanlar[1].id).hasClass("giydilirmis")==true)
                    continue
                else
                {
                    for(var j=1; j<=5;j++){
                        console.log(tisortElemanlar[i].id+", tisort"+j+"A");
                        if(tisortElemanlar[i].id==("tisort"+j+"A")){

                            tisort="#"+tisortElemanlar[i].id;
                            break;
                        }
                    }

                }
            }

            for(var i=0;i<pantolonElemanlar.length;i++){
                if($("#"+pantolonElemanlar[1].id).hasClass("giydilirmis")==true)
                    continue
                else
                {

                    for(var j=1; j<=4;j++){
                        console.log(pantolonElemanlar[i].id+", pantolon"+j+"A");
                        if(pantolonElemanlar[i].id==("pantolon"+j+"A")){
                            pantolon="#"+pantolonElemanlar[i].id;
                            break;
                        }
                    }
                }

            }

            for(var i=0;i<ayakkabiElemanlar.length;i++){
                if($("#"+ayakkabiElemanlar[1].id).hasClass("giydilirmis")==true)
                    continue
                else
                {
                    for(var j=1; j<=3;j++){
                        console.log(ayakkabiElemanlar[i].id+", ayakkabi"+j+"A");
                        if(ayakkabiElemanlar[i].id==("ayakkabi"+j+"A")){
                            ayakkabi="#"+ayakkabiElemanlar[i].id;
                            break;
                        }
                    }
                }

            }

            var giydirilmisGrup=new Array();

            giydirilmisGrup.push(tisort);
            giydirilmisGrup.push(pantolon);
            giydirilmisGrup.push(ayakkabi);

            var testSonucu=kombinasyonKontrol(giydirilmisGrup);

            if(testSonucu==true){
            $(tisort).animate({
                left:animLeft,
                top:(animTop-10)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");


            });

            $(pantolon).animate({
                left:animLeft,
                top:(animTop-30)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");


            });

            $(ayakkabi).animate({
                left:animLeft,
                top:(animTop-47)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");

                $("#kiyafetlerStr").html(Interaction.tisortlerStr[tisort.charAt(tisort.length-2)-1]+" tişört, "+Interaction.pantolonlarStr[pantolon.charAt(pantolon.length-2)-1]+" pantolon, "+Interaction.ayakkabilarStr[ayakkabi.charAt(ayakkabi.length-2)-1]+" ayakkabı");

                $(".esyalar").bind("click",esyalarClick);


            });

            }
            else{
                hepsiniSil();
                $(".esyalar").bind("click",esyalarClick);
            }

            console.log(giydirilmisGrup);
            console.log($(".giydirilmis"));
            //alert(tisort+" "+pantolon+" "+ayakkabi);
        })

        Interaction.appendStatus({
            bottom:'26px',
            right:'60px',
            width:"300px",
            textAlign:"center"
        });
		Interaction.prepareNextQuestion();
	},
	nextQuestion: function(randomNumber){


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





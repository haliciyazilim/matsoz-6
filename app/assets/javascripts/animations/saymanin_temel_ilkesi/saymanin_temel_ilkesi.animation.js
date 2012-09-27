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

        $("#tablo2 #istAnkaraI").append("<img id='ayrim1' class='otobus' src='"+resim.otobus+"'><img id='ayrim2' class='otobus' src='"+resim.otobus+"'><img id='ayrim3' class='gemi' src='"+resim.gemi+"'><img id='ayrim4' class='tren' src='"+resim.tren+"'>" );
        $("#tablo2 #istAnkaraI").append("<img id='ayrim5' class='otobus' src='"+resim.otobus+"'><img id='ayrim6' class='tren' src='"+resim.tren+"'><img id='ayrim7' class='ucak' src='"+resim.ucak+"'><img id='ayrim8' class='otobus' src='"+resim.otobus+"'>" );
        $("#tablo2 #istAnkaraI").append("<img id='ayrim9' class='gemi' src='"+resim.gemi+"'><img id='ayrim10' class='otobus' src='"+resim.otobus+"'><img id='ayrim11' class='ucak' src='"+resim.ucak+"'><img id='ayrim12' class='tren' src='"+resim.tren+"'>" );



        $("#ayrim2").css("padding-right","10px");
        $("#ayrim4").css("padding-right","10px");
        $("#ayrim6").css("padding-right","10px");
        $("#ayrim8").css("padding-right","25px");
        $("#ayrim10").css("padding-right","42px");
        $("#ayrim12").css("padding-right","10px");

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
            haritaGetir(resim.istIzmOtobus, "#istAnkaraI #ayrim1");
            $("#tablo2, #istAnkaraB").animate({"opacity":"1"},1000);

        },48000);

        setTimeout(function(){
            haritaGetir(resim.izmAnkOtobus, "#istAnkaraI #ayrim2");
            $("#izmirAnkaraB").animate({"opacity":"1"},1000);

        },56000);


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



        Main.animationFinished(1000);
		
		}
}
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        $(container).append("<div id='ornek'>");
        $("#ornek").css("width","120px")
            .css("height","130px")

            .css("position","absolute")
            .css("left","0px")
            .css("top","10px");




        // Tablo

        var sayilarStrokeRenk="#9bd1d9";
        var sayilarFillRenk="#f2fafc";
        var tabloStrokeRenk="#255b63";
        var tabloBirlerFillRenk="#ecf8fa";
        var tabloBinlerFillRenk="#d9f1f5";
        var tabloMilyonlarFillRenk="#bfe8ef";
        var inputStrokeRenk="#9bd1d9";

        // Ana Tablo
        $(Animation.container).append("<div id='tablo'>");
        $("#tablo").css("width","540px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","20px")
            .css("top","20px")
            .css("font-size","20px")

        var basamaklar=["Yüzler b.","Onlar b.","Birler b.","Onda birler b.","Yüzde birler b.","Binde birler b."];
        var siniflar=["baslik","rakam","virgul"];
        var sinif;
        for(var i=1; i<=6;i++){

            for(var j=1; j<=7;j++){
                if(i==1 && j!=4)
                    sinif=siniflar[0];
                else if(j==4)
                    sinif=siniflar[2];
                else
                    sinif=siniflar[1];

                $("#tablo",Animation.container).append("<div id='parca"+i+"x"+j+"' class='"+sinif+"'>");
                $("#parca"+i+"x"+j).html(" ")

                if(i==1 && j!=4){
                    if(j<4)
                        $("#parca"+i+"x"+j).html(basamaklar[j-1]);
                    else
                        $("#parca"+i+"x"+j).html(basamaklar[j-2]);
                }

                if(i>1 && i%2!=0 && j!=4)
                    $("#parca"+i+"x"+j).css({borderBottom:"1px solid black"})
                else if(i>1 && i%2!=0 && j==4)
                    $("#parca"+i+"x"+j).css({borderBottom:"1px solid "+tabloMilyonlarFillRenk}).html(",");

                if(i>1 && j==4)
                    $("#parca"+i+"x"+j).html("<span id='virgulK"+(i-1)+"'>,</span>");




                if(j%2==0){
                    $("#parca"+i+"x"+j).css({backgroundColor:tabloMilyonlarFillRenk})
                }
                else
                    $("#parca"+i+"x"+j).css({backgroundColor:tabloBirlerFillRenk})
            }
        }

        $(".baslik").css({
            height:"26px",
            width:"85px",
            float:"left",
            fontSize:"12px",
            textAlign:"center",
            lineHeight:"25px",
//            borderBottom:"1px solid black"
        });


        $("#tablo .virgul").css({
            height:"26px",
            width:"30px",
            float:"left",
            textAlign:"center",
            lineHeight:"25px",
//            borderBottom:"1px solid black"


        })

        $(".rakam").css({
            height:"26px",
            width:"85px",
            float:"left",
            fontSize:"16px",
            textAlign:"center",
//            borderBottom:"1px solid black",
            lineHeight:"25px",

        });

        $("#parca2x3").html("<span class='kademe1'>0</span>");
        $("#parca2x5").html("<span class='kademe1'>7</span>");

        $("#parca3x3").html("<span class='kademe2'>1</span>");
        $("#parca3x5").html("<span class='kademe2'>5</span>");

        $("#parca3x1").html("<span class='kademe2'>x</span>");

        $("#parca4x3").html("<span class='kademe3'>0</span>");
        $("#parca4x5").html("<span class='kademe3'>3</span>");
        $("#parca4x6").html("<span class='kademe3'>5</span>");


        $("#parca5x3").html("<span class='kademe4'>0</span>");
        $("#parca5x5").html("<span class='kademe4'>7</span>");

        $("#parca5x1").html("<span class='kademe4'>+</span>");

        $("#parca6x3").html("<span class='kademe5'>1</span>");
        $("#parca6x5").html("<span class='kademe5'>0</span>");
        $("#parca6x6").html("<span class='kademe5'>5</span>");

        $(".kademe1,.kademe2, .kademe3, .kademe4, .kademe5, #virgulK1, #virgulK2, #virgulK3, #virgulK4, #virgulK5").css({opacity:0});

        var islem=new DecimalMultiplication(0.7,1.5,"ornek",30);
//        var islem=new DecimalMultiplication(90,1.5,"ornek",30);


        setTimeout(function(){islem.doldur(); islem.basla(1000,1000);},1000);

        $(".kademe1, #virgulK1").delay(1000).animate({opacity:1},1000);
        $(".kademe2, #virgulK2").delay(2000).animate({opacity:1},1000);
        $(".kademe3, #virgulK3").delay(10000).animate({opacity:1},1000);
        $(".kademe4, #virgulK4").delay(14000).animate({opacity:1},1000);
        $(".kademe5").delay(22000).animate({opacity:1},1000);
        $("#virgulK5").delay(22500).animate({opacity:1},1000);



        Main.animationFinished(24000);

    }
}
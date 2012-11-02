var Animation = {
    images:[],
    init:function(container){
        Animation.container = container;

        bekleme=1000;
        islem=2000;

        aResimleri={
            ornek1A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_1_a.png",
            ornek1B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_1_b.png",

            ornek2A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_2_a.png",
            ornek2B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_2_b.png",

            ornek3A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_3_a.png",
            ornek3B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_3_b.png",

            ornek4A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_4_a.png",
            ornek4B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_4_b.png",

            ornek5A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_5_a.png",
            ornek5B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_5_b.png",
            ornek5C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_5_c.png",

            ornek6A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_6_a.png",
            ornek6B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_6_b.png",
            ornek6C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_6_c.png",

            ornek7A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_7_a.png",
            ornek7B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_7_b.png",
            ornek7C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_7_c.png",

            ornek8A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_8_a.png",
            ornek8B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_8_b.png",
            ornek8C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_8_c.png",


        }

        kumeA=new Image();
        kumeA.id="kumeA";

        $(container).append(kumeA);
        $(kumeA).css({
            position:"absolute"
        });

        kumeB=new Image();
        kumeB.id="kumeB";

        $(container).append(kumeB);
        $(kumeB).css({
            position:"absolute"
        });

        kumeC=new Image();
        kumeC.id="kumeC";

        $(container).append(kumeC);
        $(kumeC).css({
            position:"absolute"
        });

        $(container).append("<div id='denklem'>")
        $(container).append("<div id='aciklama'>")
        $("#denklem").css({position:"absolute", width:"100%",height:"20px",left:"0px",bottom:"25px",textAlign:"center",opacity:0});
        $("#aciklama").css({position:"absolute", width:"100%",height:"20px",left:"0px",bottom:"5px",textAlign:"center",opacity:0});

        ornek1();
        //sonPerde();



    }
}

function ornek1(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A = B";
    var izah="İki küme eşit olabilir."

    kumeA.src=aResimleri.ornek1A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek1B;
    $(kumeB).css({
        right:right+"px",
        top:top+"px"
    });

    $(kumeA).delay(bekleme).animate({left:"285px"},islem);
    $(kumeB).delay(bekleme).animate({right:"285px"},islem,function(){$(this).animate({opacity:0},1000)});


    setTimeout(function(){aciklama()},bekleme+islem);
    setTimeout(function(){kapat()},bekleme+islem+2000);
    setTimeout(function(){ornek2()},bekleme+islem+4000);
    console.log("örnek 1");

    function aciklama(){
        console.log("örnek 1 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);
    }
    function kapat(){
        console.log("örnek 1 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }



}

function ornek2(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="";
    var izah="İki küme ayrık olabilir.";
    kumeA.src=aResimleri.ornek2A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek2B;
    $(kumeB).css({
        right:right+"px",
        top:top+"px"
    });

    $(kumeA).delay(500).animate({opacity:1},500).delay(bekleme).animate({left:"150px"},islem);
    $(kumeB).delay(500).animate({opacity:1},500).delay(bekleme).animate({right:"150px"},islem);

    console.log("örnek 2");
    setTimeout(function(){aciklama()},bekleme+islem+1000);
    setTimeout(function(){kapat()},bekleme+islem+3000);
    setTimeout(function(){ornek3()},bekleme+islem+5000);
    function aciklama(){
        console.log("örnek 2 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 2 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }



}

function ornek3(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A ⊂ B";
    var izah="İki kümeden biri diğerinin alt kümesi olabilir.";
    kumeA.src=aResimleri.ornek3A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek3B;
    $(kumeB).css({
        right:right+"px",
        top:top+25+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);

    $(kumeA).delay(bekleme).animate({left:"285px"},islem);
    $(kumeB).delay(bekleme).animate({right:"307px"},islem);
    console.log("örnek 3");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek4()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 3 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 3 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }

}

function ornek4(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A ∩ B";
    var izah="İki küme kesişebilir.";
    kumeA.src=aResimleri.ornek4A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek4B;
    $(kumeB).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"225px"},islem);
    $(kumeB).delay(bekleme).animate({right:"226px"},islem);

    console.log("örnek 4");

    setTimeout(function(){aciklama()},bekleme+islem+1000);
    setTimeout(function(){kapat()},bekleme+islem+3000);
    setTimeout(function(){ornek5()},bekleme+islem+5000);
    function aciklama(){
        console.log("örnek 4 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 4 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }

}

function ornek5(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A = B= C";
    var izah="Üç küme eşit olabilir.";
    kumeA.src=aResimleri.ornek5A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek5B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top+"px"
    });

    kumeC.src=aResimleri.ornek5C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"285px"},islem);
    $(kumeC).delay(bekleme).animate({right:"285px"},islem,function(){$("#kumeB, #kumeC").animate({opacity:0},1000)});


    console.log("örnek 5");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek6()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 5 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 5 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }

}

function ornek6(){
    var left=50;
    var right=50;
    var top=5;
    var denklem="A ∩ B  B ∩ C";
    var izah="Kümelerden biri diğerleri ile kesişebilir diğer iki küme ayrıktır.";
    kumeA.src=aResimleri.ornek6A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek6B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top+"px"
    });

    kumeC.src=aResimleri.ornek6C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeC).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"158px"},islem);
    $(kumeC).delay(bekleme).animate({right:"157px"},islem);

    console.log("örnek 6");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek7()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 6 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 6 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB, #kumeC").animate({opacity:0},1000);
    }
}

function ornek7(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="C ⊂ B ⊂ A";
    var izah="Üç küme biri diğerinin o da öbürünün alt kümesi olabilir.";
    kumeA.src=aResimleri.ornek7A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek7B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top+"px"
    });

    kumeC.src=aResimleri.ornek7C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });

    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeC).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"286px"},islem);
    $(kumeC).delay(bekleme).animate({right:"285px"},islem);


    console.log("örnek 7");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek8()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 7 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 7 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB, #kumeC").animate({opacity:0},1000);
    }
}

function ornek8(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A ∩ B ∩ C";
    var izah="Kümeler kesişebilir.";
    kumeA.src=aResimleri.ornek8A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek8B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top-2+"px"
    });

    kumeC.src=aResimleri.ornek8C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeC).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"238px"},islem);
    $(kumeC).delay(bekleme).animate({right:"346px",top:"79px"},islem);
    $("#denklem").css({width:"320",left:"465px",bottom:"100px"}).delay(bekleme+islem+1000).animate({opacity:1},1000).html("A ∩ B  B ∩ C");
    $("#aciklama").css({width:"320",left:"465px",bottom:"50px"}).delay(bekleme+islem+2000).animate({opacity:1},1000).html("Kümelerden biri diğerleri ile kesişebilir diğer iki küme ayrıktır.");

    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){sonPerde()},bekleme+islem+6000);

    function kapat(){
        console.log("örnek 8 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB, #kumeC").animate({opacity:0},1000);
    }
}

function sonPerde(){
    $(Animation.container).append("<div id='sonPerde'>");
    $("#sonPerde").css({
        position:"absolute",
        width:"100%",
        height:"100%",
        top:"20px",
        left:"5px",
        opacity:"0"

    });
    for(var i=1; i<9;i++){
        $("#sonPerde").append("<div id='sonPerde"+i+"'>");
        $("#sonPerde"+i).css({
            width:"385px",
            height:"40px",
            float:"left",
            //backgroundColor:"red",
            margin:"2px",
            textAlign:"center"


        });
    }

    $("#sonPerde1").html("A = B <p>İki küme eşit olabilir.");
    $("#sonPerde2").html("A &nbsp;&nbsp;&nbsp;&nbsp;B <p>İki küme ayrık olabilir.");
    $("#sonPerde3").html("A ⊂ B <p>İki kümeden biri diğerinin alt kümesi olabilir.");
    $("#sonPerde4").html("A ∩ B <p>İki küme kesişebilir.");
    $("#sonPerde5").html("A = B= C <p>Üç küme eşit olabilir.");
    $("#sonPerde6").html("A ∩ B  B ∩ C <p>Kümelerden biri diğerleri ile kesişebilir diğer iki küme ayrıktır.");
    $("#sonPerde7").html("C ⊂ B ⊂ A <p>Üç küme biri diğerinin o da öbürünün alt kümesi olabilir.");
    $("#sonPerde8").html("A ∩ B ∩ C <p>Kümeler kesişebilir.");

    $("#sonPerde").animate({opacity:1},1000,function(){Main.animationFinished()});
}

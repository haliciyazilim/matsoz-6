soruGetir=function(){
    var bolum=Math.random()*10;
    var bolen=Math.random()*10;

    bolum=bolum.toFixed(2);
    bolen=bolen.toFixed(2);

    var gidecekler=[bolum,bolen];

    return gidecekler;
}

bolmeIslemi=function(bolum,bolen,div,fontSize){
    this.bolum=bolum;
    this.bolen=bolen;
    this.div=div;
    this.fontSize=fontSize || 16;

    $("#"+this.div).css("width",29*this.fontSize+"px")

    $("#"+this.div).append("<div id='"+this.div+"Gosterim1' class='bolumler'></div> <div id='"+this.div+"e1' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim2' class='bolumler'></div><div id='"+this.div+"e2' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim3' class='bolumler'></div><div id='"+this.div+"e3' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim4' class='bolumler'></div><div id='"+this.div+"e4' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim5' class='bolumler'></div>");

    //1. kısım
    $("#"+this.div+"Gosterim1").append("<div id='"+this.div+"gosterim1Bolum' class='sayilar'></div>" +
                                       "<div id='"+this.div+"gosterim1Isaret' class='isaretler'> : </div>" +
                                       "<div id='"+this.div+"gosterim1Bolen' class='sayilar'></div>");

    $("#"+this.div+"gosterim1Bolum").append("<div id='"+this.div+"gosterim1BolumPay' class='pay'></div><div id='"+this.div+"gosterim1BolumPayda' class='payda'></div>");
    $("#"+this.div+"gosterim1Bolen").append("<div id='"+this.div+"gosterim1BolenPay' class='pay'></div><div id='"+this.div+"gosterim1BolenPayda' class='payda'></div>");

    // 2. kısım
    $("#"+this.div+"Gosterim2").append("<div id='"+this.div+"gosterim2Bolum' class='sayilar'></div>" +
        "<div id='"+this.div+"gosterim2Isaret' class='isaretler'> : </div>" +
        "<div id='"+this.div+"gosterim2Bolen' class='sayilar'></div>");


    $("#"+this.div+"gosterim2Bolum").append("<div id='"+this.div+"gosterim2BolumPay' class='pay'></div><div id='"+this.div+"gosterim2BolumPayda' class='payda'></div>");
    $("#"+this.div+"gosterim2Bolen").append("<div id='"+this.div+"gosterim2BolenPay' class='pay'></div><div id='"+this.div+"gosterim2BolenPayda' class='payda'></div>");

    // 3. kısım
    $("#"+this.div+"Gosterim3").append("<div id='"+this.div+"gosterim3Bolum' class='sayilar'></div>" +
        "<div id='"+this.div+"gosterim3Isaret' class='isaretler'> : </div>" +
        "<div id='"+this.div+"gosterim3Bolen' class='sayilar'></div>");


    $("#"+this.div+"gosterim3Bolum").append("<div id='"+this.div+"gosterim3BolumPay' class='pay'></div><div id='"+this.div+"gosterim3BolumPayda' class='payda'></div>");
    $("#"+this.div+"gosterim3Bolen").append("<div id='"+this.div+"gosterim3BolenPay' class='pay'></div><div id='"+this.div+"gosterim3BolenPayda' class='payda'></div>");

    // 4. kısım
    $("#"+this.div+"Gosterim4").append("<div id='"+this.div+"gosterim4Bolum' class='sayilar'></div>" +
        "<div id='"+this.div+"gosterim4Isaret' class='isaretler'> : </div>" +
        "<div id='"+this.div+"gosterim4Bolen' class='sayilar'></div>");


    $("#"+this.div+"gosterim4Bolum").append("<div id='"+this.div+"gosterim4BolumPay' class='pay'></div><div id='"+this.div+"gosterim4BolumPayda' class='payda'></div>");
    $("#"+this.div+"gosterim4Bolen").append("<div id='"+this.div+"gosterim4BolenPay' class='pay'></div><div id='"+this.div+"gosterim4BolenPayda' class='payda'></div>");

    // 5. kısım
    $("#"+this.div+"Gosterim5").append("<div id='"+this.div+"gosterim5Sonuc' class='sayilar'></div>");



    //stiller
    $(".bolumler").css({

        width:5*this.fontSize+"px",
        height:2.5*this.fontSize+"px",
        textAlign:"center",
        fontSize:this.fontSize+"px",
        float:"left"
    });

    $(".sayilar").css({
        width:2*this.fontSize+"px",
        height:2.5*this.fontSize+"px",
        float:"left"
    });

    $(".isaretler").css({
        width:this.fontSize+"px",
        height:2.5*this.fontSize+"px",
        float:"left"
    });

    // birinci kısmı dolduruyoruz.

    var bolum1Pay=this.bolum;
    var bolen1Pay=this.bolen;

    var bolum1PayVirguldenSonra;
    var bolum1PayGosterim;
    if(Util.isInteger(bolum1Pay)==false){
        var bolum1PayArray=bolum1Pay.toString().split(".");
        bolum1PayVirguldenSonra=bolum1PayArray[1].length;
        bolum1PayGosterim=Util.format(bolum1Pay,{places:bolum1PayVirguldenSonra});
    }
    else
    bolum1PayGosterim=bolum1Pay;

    var bolen1PayVirguldenSonra;
    var bolen1PayGosterim;
    if(Util.isInteger(bolen1Pay)==false){
        var bolen1PayArray=bolen1Pay.toString().split(".");
        bolen1PayVirguldenSonra=bolen1PayArray[1].length;

        bolen1PayGosterim=Util.format(bolen1Pay,{places:bolen1PayVirguldenSonra});
    }
    else
        bolen1PayGosterim=bolen1Pay;

    $("#"+this.div+"gosterim1BolumPay").html(bolum1PayGosterim);
    $("#"+this.div+"gosterim1BolenPay").html(bolen1PayGosterim);


// ikinci gösterimi dolduruyoruz.

    var bolumArray=this.bolum.toString().split(".");
    var bolenArray=this.bolen.toString().split(".");

    var bolumOndalikKisim=bolumArray[1]?bolumArray[1]:-1;
    var bolenOndalikKisim=bolenArray[1]?bolenArray[1]:-1;


    if(bolumOndalikKisim!=-1){
        var payda=Math.pow(10,bolumOndalikKisim.length);
        var pay=this.bolum * payda;

        $("#"+this.div+"gosterim2BolumPay").html(pay);
        $("#"+this.div+"gosterim2BolumPayda").css({borderTop:"solid black 2px"}).html(payda);
    }
    else{
        $("#"+this.div+"gosterim2BolumPay").html(this.bolum);
    }

    if(bolenOndalikKisim!=-1){
       var payda=Math.pow(10,bolenOndalikKisim.length);
       var pay=this.bolen * payda;

       $("#"+this.div+"gosterim2BolenPay").html(pay);
       $("#"+this.div+"gosterim2BolenPayda").css({borderTop:"solid black 2px"}).html(payda);
   }
    else{
        $("#"+this.div+"gosterim2BolenPay").html(this.bolen);
    }

    //üçüncü gösterimi dolduruyoruz.
    var bolen2Pay=$("#"+this.div+"gosterim2BolenPay").html();
    var bolum2Pay=$("#"+this.div+"gosterim2BolumPay").html();
    var bolum2Payda=$("#"+this.div+"gosterim2BolumPayda").html() || 1;
    var bolen2Payda=$("#"+this.div+"gosterim2BolenPayda").html() || 1;

    var bolum3Pay;
    var bolum3Payda;
    var bolen3Pay;
    var bolen3Payda;

   if(bolum2Payda>bolen2Payda){
       var fark=bolum2Payda/bolen2Payda;
       bolen3Payda=bolen2Payda*fark;
       bolen3Pay=$("#"+this.div+"gosterim2BolenPay").html()*fark;


       $("#"+this.div+"gosterim3BolumPay").html(bolum2Pay);
       $("#"+this.div+"gosterim3BolumPayda").html(bolum2Payda);

       $("#"+this.div+"gosterim3BolenPay").html(bolen3Pay);
       $("#"+this.div+"gosterim3BolenPayda").html(bolen3Payda);

   }
    else  if(bolum2Payda<bolen2Payda){
       var fark=bolen2Payda/bolum2Payda;
       bolum3Payda=bolum2Payda*fark;
       bolum3Pay=$("#"+this.div+"gosterim2BolumPay").html()*fark;


       $("#"+this.div+"gosterim3BolumPay").html(bolum3Pay);
       $("#"+this.div+"gosterim3BolumPayda").html(bolum3Payda);

       $("#"+this.div+"gosterim3BolenPay").html(bolen2Pay);
       $("#"+this.div+"gosterim3BolenPayda").html(bolen2Payda);

   }
    else{
       $("#"+this.div+"gosterim3BolumPay").html(bolum2Pay);
       $("#"+this.div+"gosterim3BolumPayda").html(bolum2Payda);

       $("#"+this.div+"gosterim3BolenPay").html(bolen2Pay);
       $("#"+this.div+"gosterim3BolenPayda").html(bolen2Payda);
   }

    $("#"+this.div+"gosterim3BolenPayda, #"+this.div+"gosterim3BolumPayda").css({borderTop:"solid black 2px"});




    //Dördüncü gösterimi dolduruyoruz.

    bolum3Pay=$("#"+this.div+"gosterim3BolumPay").html();
    bolen3Pay=$("#"+this.div+"gosterim3BolenPay").html();

    $("#"+this.div+"gosterim4BolumPay").html(bolum3Pay);
    $("#"+this.div+"gosterim4BolenPay").html(bolen3Pay);

    var sonuc=this.bolum/this.bolen;
    var sonucArray=sonuc.toString().split(".");

    sonuc=sonucArray[1]?Util.format(sonuc,{places:sonucArray[1].length}):sonuc;
    /*if(sonucArray[1]){
        console.log("içierdeim0: "+sonuc+", "+sonucArray[1]);
        sonuc=Util.format(sonuc,{places:sonucArray[1].length});
        console.log("içierdeiym: "+sonuc);
    }
*/

    // aynı olanlar siliniyor
    console.log(bolen3Pay+" . "+bolen2Pay+" . "+bolum3Pay+" . "+bolum2Pay);
    if(bolen3Pay==bolen2Pay &&bolum3Pay==bolum2Pay){
        $("#"+this.div+"Gosterim3, #"+this.div+"e3").html("").css("width","0px");
        console.log("EVET");
    }


    $("#"+this.div+"gosterim5Sonuc").html(sonuc);

    // Gösteri
    $("#"+this.div+"Gosterim1, "+
        "#"+this.div+"Gosterim2, "+
        "#"+this.div+"Gosterim3, "+
        "#"+this.div+"Gosterim4, "+
        "#"+this.div+"Gosterim5, "+
        "#"+this.div+"e1, #"+this.div+"e2, #"+this.div+"e3, #"+this.div+"e4").css("opacity","0");

    for(var i=1;i<6;i++){
        $("#"+this.div+"Gosterim"+i).delay(1000*i-1).animate({opacity:1},1000);
        $("#"+this.div+"e"+i).delay(1000*i-1+500).animate({opacity:1},500);
    }







}
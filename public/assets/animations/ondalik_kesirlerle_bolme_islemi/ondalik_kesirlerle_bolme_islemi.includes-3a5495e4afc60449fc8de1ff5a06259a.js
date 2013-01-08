function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
soruGetir=function(){
    var bolum=Math.random()*100;
    var bolen=Math.random()*100;

    bolum=bolum.toFixed(2);
    bolen=bolen.toFixed(2);

    var gidecekler=[bolum,bolen];

    console.log("Bolüm: "+bolum);
    console.log("Bolen: "+bolen);


    return gidecekler;
}

bolmeIslemi=function(bolum,bolen,div,fontSize){
    this.bolum=bolum;
    this.bolen=bolen;
    this.div=div;
    this.fontSize=fontSize || 16;

    $("#"+this.div).css("width",35*this.fontSize+"px")

    $("#"+this.div).append("<div id='"+this.div+"Gosterim1' class='bolumler'></div> <div id='"+this.div+"e1' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim2' class='bolumler'></div><div id='"+this.div+"e2' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim3' class='bolumler'></div><div id='"+this.div+"e3' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim4' class='bolumler'></div><div id='"+this.div+"e4' class='isaretler esittir'> = </div>" +
                            "<div id='"+this.div+"Gosterim5' class='bolumler'></div>");

    //1. kısım
    $("#"+this.div+"Gosterim1").append("<div id='"+this.div+"gosterim1Bolum' class='sayilar bolum'></div>" +
                                       "<div id='"+this.div+"gosterim1Isaret' class='isaretler'> : </div>" +
                                       "<div id='"+this.div+"gosterim1Bolen' class='sayilar bolen'></div>");

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

        width:6*this.fontSize+"px",
        height:2.5*this.fontSize+"px",
        textAlign:"center",
        fontSize:this.fontSize+"px",
        float:"left"
    });

    $(".sayilar").css({
        width:2.5*this.fontSize+"px",
        height:2.5*this.fontSize+"px",
        float:"left",

    });

    $(".isaretler").css({
        width:this.fontSize+"px",
        height:2.5*this.fontSize+"px",
        float:"left"
    });

    $(".bolum").css({
        textAlign:"right"
    });

    $(".bolen").css({
        textAlign:"left"
    });

    $("#"+this.div+"Gosterim2").css("color","#006E7D");
    $("#"+this.div+"Gosterim3").css("color","#006E7D");
    $("#"+this.div+"Gosterim4").css("color","#006E7D");
    $("#"+this.div+"Gosterim5").css("color","#008700");


    

    // birinci kısmı dolduruyoruz.

    var bolum1Pay=this.bolum;
    var bolen1Pay=this.bolen;

    console.log("Sayılar: "+bolum1Pay+", "+bolen1Pay);
    console.log("isInteger: "+Util.isInteger(bolum1Pay)+", "+Util.isInteger(bolen1Pay));



    var bolum1PayVirguldenSonra;
    var bolum1PayGosterim;
    if(Util.isInteger(bolum1Pay)==false){
        var bolum1PayArray=bolum1Pay.toString().split(".");
        bolum1PayVirguldenSonra=bolum1PayArray[1].length;
        bolum1PayGosterim=Util.format(bolum1Pay,{places:bolum1PayVirguldenSonra});
    }
    else
        bolum1PayGosterim=parseInt(bolum1Pay,10);

    var bolen1PayVirguldenSonra;
    var bolen1PayGosterim;
    if(Util.isInteger(bolen1Pay)==false){
        var bolen1PayArray=bolen1Pay.toString().split(".");
        bolen1PayVirguldenSonra=bolen1PayArray[1].length;

        bolen1PayGosterim=Util.format(bolen1Pay,{places:bolen1PayVirguldenSonra});
    }
    else
        bolen1PayGosterim=parseInt(bolen1Pay,10);

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

        $("#"+this.div+"gosterim2BolumPay").html(parseInt(pay,10));

        $("#"+this.div+"gosterim2BolumPayda").css({borderTop:"solid #006E7D 2px"}).html(payda);

    }
    else{
        $("#"+this.div+"gosterim2BolumPay").html(this.bolum);
    }

    if(bolenOndalikKisim!=-1){
       var payda=Math.pow(10,bolenOndalikKisim.length);
       var pay=this.bolen * payda;

       $("#"+this.div+"gosterim2BolenPay").html(parseInt(pay,10));

        $("#"+this.div+"gosterim2BolenPayda").css({borderTop:"solid #006E7D 2px"}).html(payda);

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


        $("#"+this.div+"gosterim3BolenPayda, #"+this.div+"gosterim3BolumPayda").css({borderTop:"solid #006E7D 2px"});




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
        //$("#"+this.div+"Gosterim3, #"+this.div+"e3").html("").css("width","0px");
        $("#"+this.div+"Gosterim3, #"+this.div+"e3").remove();
        console.log("EVET");
    }


    $("#"+this.div+"gosterim5Sonuc").html(sonuc);

    for(var i=1;i<5;i++){
        if($("#"+this.div+"gosterim"+i+"BolumPayda").html()!=""){
            $("#"+this.div+"gosterim"+i+"Bolum").css({
                marginTop:"-10px"
            });
        }

        if($("#"+this.div+"gosterim"+i+"BolenPayda").html()!=""){
            $("#"+this.div+"gosterim"+i+"Bolen").css({
                marginTop:"-10px"
            });
        }
    }

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
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;



        $(container).append("<div id='islem1'>");
        $("#islem1").css({
            position:"absolute",
            width:"100%",
            top:"35px",
            left:"70px",
//            right:"0px",
//            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        });


        $(container).append("<div id='islem2'>");
        $("#islem2").css({
            position:"absolute",
            width:"100%",
            top:"90px",
            left:"69px",
//            right:"0px",
//            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        });


        $(container).append("<div id='islem3'>");
        $("#islem3").css({
            position:"absolute",
            width:"100%",
            top:"145px",
            left:"67px",
//            right:"0px",
//            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        });

        setTimeout(function(){bolmeIslemi(12.00,0.3,"islem1",20);},1000);
        setTimeout(function(){bolmeIslemi(1.2,0.3,"islem2",20)},7000);
        setTimeout(function(){bolmeIslemi(0.12,0.3,"islem3",20)},13000);
        //bolmeIslemi(1.2,0.3,"islem2",20);
        //bolmeIslemi(0.12,0.3,"islem3",20);


        Main.animationFinished(20000);
    }
}
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki ondalık kesirlerle bölme işlemini yapınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"140px",
            height:"50px",
            left:"110px",
            top:"100px",
            fontSize:"20px",
            lineHeight:"55px",
            textAlign:"right",
            opacity:1
        });

        $(container).append("<div id='cevap'>");
        $("#cevap").css({
            position:"absolute",
            width:"100%",
            top:"180px",
            left:"20px",


            textAlign:"center",
            fontSize:"20px"
        });




        Interaction.appendInput({
            position:"absolute",
            width:"70px",
            height:"50px",
            right:"0",
            top:"100px",
            left:"0",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",
            opacity:1
        }, true, false);
        Interaction.input.id = "girdi";
        $("#girdi").attr("maxLength", "5");
        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })
        /*
        *	Initialize your interaction here
        */

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        $("#cevap").html("");
        $("input").css("color","black");
        var kontrol=0;

        while(kontrol==0){
            soru=soruGetir();

            var sonuc=soru[0]/soru[1];
            var sonucArray=sonuc.toString().split(".");


            if(sonucArray[1] && sonucArray[1].length<3)
                kontrol=1;

            console.log(soru[0]+", "+soru[1]+", "+sonuc);
        }


        var bolum=Util.isInteger(soru[0])?parseInt(soru[0],10):Util.format(soru[0],{places:2})
        var bolen=Util.isInteger(soru[1])?parseInt(soru[1],10):Util.format(soru[1],{places:2})

        $("#soru").html(bolum+" : "+bolen+" = ");

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        sonuc=soru[0]/soru[1];
        gelenCevapArray=value.split(",");
        gelenCevap=parseFloat(gelenCevapArray[0]+"."+gelenCevapArray[1]);
        console.log(gelenCevap);
        if(sonuc==gelenCevap)
            return true;

    },
	onCorrectAnswer : function(){
        bolmeIslemi(soru[0],soru[1],"cevap",20);
        $("input #cevap").css("color","green");

        Interaction.pause();
        setTimeout(function(){Interaction.resume()},6000);
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Cevabın yanlış; doğrusu yukarıdadır.',false);
        $("input").css("color","red");


        bolmeIslemi(soru[0],soru[1],"cevap",20);

        Interaction.pause();
        setTimeout(function(){Interaction.resume()},6000);


		
    }
}
;





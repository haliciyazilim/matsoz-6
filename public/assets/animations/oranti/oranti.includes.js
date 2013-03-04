function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
/*var sorular={
    // [soru,ilk bağımsız birim,ilk bağımlı birim, ikinci bağımsız brim, ikinci bağımlı birim]
    soru1:["2 dakikada 1 sayfa okuyan Metin 120 sayfalık bir kitabı kaç dakikada okur?",2,1,0,120],
    soru2:["Bir matbaada 10 dakikada 40 kitap basıldığına göre 1 saatte kaç kitap basılır?",10,40,60,0],
    soru3:["Kilosu 2 lira olan domatesten 10 liraya kaç kilo domates alınır?",1,2,0,10],
    soru4:["Günde 20 ton eşya gönderen kargo firması ayda kaç ton eşya gönderir?",1,20,30,0],
    soru5:["3 dakikada 1 çiçek diken bahçıvan 12 çiçeği kaç dakikada diker?",3,1,0,12],
    soru6:["3 dakikada 1 çiçek diken bahçıvan 36 dakikada kaç çiçek diker?",3,1,36,0],
    soru7:["60 km’lik yolu 1 saatte giden bir otomobil 120 km lik yolu kaç saatte gider?",1,60,0,120],
    soru8:["120 km’lik yolu 2 saatte giden bir otomobil 60 km lik yolu kaç saatte gider?",2,120,0,60],
    soru9:["60 km’lik yolu 1 saatte giden bir otomobil 2 saatte kaç km gider?",1,60,2,0],
    soru10:["120 km’lik yolu 2 saatte giden bir otomobil 1 saatte kaç km gider?",2,120,1,0]



}*/
// [soru,ilk bağımsız birim,ilk bağımlı birim, ikinci bağımsız brim, ikinci bağımlı birim,sonuc birimi,donüştürelecek birim, dönüşecek birim, dönüştürme değeri, dönüşecek değerin dizi id'si]
sorular=[
    ["ilkBagimsiz dakikada ilkBagimli sayfa okuyan Metin ikinciBagimli sayfalık bir kitabı kaç dakikada okur?","dakika",2,1,0,120],
    ["Bir matbaada ilkBagimsiz dakikada ilkBagimli kitap basıldığına göre ikinciBagimsiz saatte kaç kitap basılır?","kitap",10,40,1,0,"saat","dakika",60,3],
    ["ilkBagimsiz kilosu ilkBagimli lira olan domatesten ikinciBagimli liraya kaç kilo domates alınır?","kilo",1,2,0,10],
    ["ilkBagimsiz günde ilkBagimli ton eşya gönderen kargo firması ikinciBagimsiz haftada kaç ton eşya gönderir?","ton",1,20,1,0,"hafta","gün",7,3],
    ["ilkBagimsiz dakikada ilkBagimli çiçek diken bahçıvan ikinciBagimli çiçeği kaç dakikada diker?","dakika",3,1,0,12],
    ["ilkBagimsiz dakikada ilkBagimli çiçek diken bahçıvan ikinciBagimsiz dakikada kaç çiçek diker?","çiçek",3,1,36,0],
    ["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimsiz km'lik yolu kaç saatte gider?","saat",60,1,120,0],
    ["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimsiz km'lik yolu kaç saatte gider?","saat",120,2,60,0],
    ["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimli saatte kaç km gider?","km",60,1,0,2],
    ["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimli saatte kaç km gider?","km",120,2,0,1]

];

yeniSoru=function(){
    var simdikiSoruId = Interaction.soruIdArray[Interaction.sira];
    Interaction.simdikiSoru=sorular[simdikiSoruId];
    Interaction.soruMetni = Interaction.simdikiSoru[0];
    randomSayiGetir();
    function randomSayiGetir(){
        Interaction.ilkBagimsiz=Interaction.simdikiSoru[2]*Math.floor(Math.random()*4+1);
        Interaction.ilkBagimli=Interaction.simdikiSoru[3]*Math.floor(Math.random()*4+1);
        Interaction.ikinciBagimsiz=Interaction.simdikiSoru[4]*Math.floor(Math.random()*4+1);
        Interaction.ikinciBagimli=Interaction.simdikiSoru[5]*Math.floor(Math.random()*4+1);
        if(Interaction.ilkBagimsiz==Interaction.ikinciBagimsiz || Interaction.ilkBagimli==Interaction.ikinciBagimli)
        randomSayiGetir();
    }

    Interaction.soruMetni=Interaction.soruMetni.replace("ilkBagimsiz",Interaction.ilkBagimsiz);
    Interaction.soruMetni=Interaction.soruMetni.replace("ilkBagimli",Interaction.ilkBagimli);
    Interaction.soruMetni=Interaction.soruMetni.replace("ikinciBagimsiz",Interaction.ikinciBagimsiz);
    Interaction.soruMetni=Interaction.soruMetni.replace("ikinciBagimli",Interaction.ikinciBagimli);
    kontrol();
}
kontrol=function(){
    if(Interaction.simdikiSoru.length>6){
        var donusturmeDegeri=Interaction.simdikiSoru[8];
        var donusturulecekDegerId=Interaction.simdikiSoru[9]

        switch (donusturulecekDegerId){
            case 1:
                Interaction.ilkBagimsiz=Interaction.ilkBagimsiz*donusturmeDegeri;
                break;
            case 2:
                Interaction.ilkBagimli=Interaction.ilkBagimli*donusturmeDegeri;
                break;
            case 3:
                Interaction.ikinciBagimsiz=Interaction.ikinciBagimsiz*donusturmeDegeri;
                break;
            case 4:
                Interaction.ikinciBagimli=Interaction.ikinciBagimli*donusturmeDegeri;
                break;
        }
    }


    if(Interaction.ilkBagimsiz==0)
        Interaction.sonuc=Interaction.ikinciBagimsiz*Interaction.ilkBagimli/Interaction.ikinciBagimli;
    else if(Interaction.ilkBagimli==0)
        Interaction.sonuc=Interaction.ikinciBagimli*Interaction.ilkBagimsiz/Interaction.ikinciBagimsiz;
    else if(Interaction.ikinciBagimsiz==0)
        Interaction.sonuc=Interaction.ikinciBagimli*Interaction.ilkBagimsiz/Interaction.ilkBagimli;
    else if(Interaction.ikinciBagimli==0)
        Interaction.sonuc=Interaction.ikinciBagimsiz*Interaction.ilkBagimli/Interaction.ilkBagimsiz;

    var sorgu=Util.isInteger(Interaction.sonuc);
    if(sorgu==false)
        yeniSoru();
}

;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var resim={
            bisiklet:"/assets/animations/oranti/bisiklet.jpg",
            ok:"/assets/animations/oranti/capraz_ok.png"
        };
        var tabloIcerik=["Süre (Saat)",1,2,3,4,"Alınan Yol",5,10,15,""];

        $(container).append("<img id='bisiklet' src='"+resim.bisiklet+"'>");
        $("#bisiklet").css({
            width:"247px",
            height:"170px",
            position:"absolute",
            left:"0px",
            top:"20px",
            opacity:0


        });

        $(container).append("<div id='tablo'>");
        for(var i=0; i<10;i++){
            $("#tablo").append("<div id='sutun"+i+"' class='sutunlar'>")
            $("#sutun"+i).html(tabloIcerik[i]);

            if(i!=0 && i!=5){
                $("#sutun"+i).css({lineHeight:"40px", textAlign:"center"});
            }

            if(i<5)
                $("#sutun"+i).css({backgroundColor:"#BFE8EF"});
            else
                $("#sutun"+i).css({backgroundColor:"#D9F1F5"});


        }

        $("#tablo").css({
            width:"225px",
            height:"82px",
            position:"absolute",
            left:"235px",
            top:"65px",
            border:"solid 1px white",
            borderTop:"none",
            borderRight:"none",

            opacity:0
        });

        $(".sutunlar").css({
            width:"40px",
            height:"40px",
            borderRight:"solid white 1px",
            borderTop:"solid white 1px",
            float:"left"
        });
        $("#sutun0,#sutun5").css({width:"60px", lineHeight:"18px",fontWeight:"bold"});

        $(container).append("<div id='islemKesirUst' class='islemKesirler'>");
        $("#islemKesirUst").append("<div class='kesirler'><div class='oPay'>1</div><div class='oPayda'>2</div></div>");
        $("#islemKesirUst").append("<div class='esitlik'> = </div>");
        $("#islemKesirUst").append("<div class='kesirler'><div class='oPay'>5</div><div class='oPayda'>10</div></div>");

        $(container).append("<div id='islemKesirAlt' class='islemKesirler'>");
        $("#islemKesirAlt").append("<div class='kesirler'><div class='oPay'>1</div><div class='oPayda'>4</div></div>");
        $("#islemKesirAlt").append("<div class='esitlik'> = </div>");
        $("#islemKesirAlt").append("<div class='kesirler'><div class='oPay'>5</div><div class='oPayda'>?</div></div>");

        $(container).append("<div id='islemEsitlikUst' class='islemEsitlik'><div class='ust' id='ustUst'>1.10 = 5.2</div><div class='alt' id='ustAlt'>10 = 10</div></div>");
        $(container).append("<div id='islemEsitlikAlt' class='islemEsitlik'><div class='ust'>1.? = 5.4</div><div class='alt' id='altAlt'>? = 20</div></div>");

        $(container).append("<img id='okUst' src='"+resim.ok+"'>");
        $("#okUst").css({
            width:"30px",
            height:"30px",
            position:"absolute",
            left:"525px",
            top:"65px",
            opacity:0
        });

        $(container).append("<img id='okAlt' src='"+resim.ok+"'>");
        $("#okAlt").css({
            width:"30px",
            height:"30px",
            position:"absolute",
            left:"525px",
            top:"140px",
            opacity:0
        });

        $(container).append("<div id='ucan'>");
        $("#ucan").css({
            width:"22px",
            height:"20px",
            position:"absolute",
            top:"160px",
            left:"703px",
            fontSize:"20px",
            color:"red",
            opacity:0

        }).html(20);

        $(".islemEsitlik").css({
            width:"200px",
            height:"50px",
            position:"absolute",
            fontSize:"20px",
            textAlign:"center"
        });
        $("#islemEsitlikUst").css({
            left:"590px",
            top:"40px",
            opacity:0
        });
        $("#islemEsitlikAlt").css({
            left:"590px",
            top:"120px",
            opacity:0
        });
        $(".ust, .alt").css({
            float:"left",
            width:"100%",
            marginTop:"10px"

        });
        $("#ustAlt, #altAlt").css({
            paddingLeft:"6px"
        });

        $(".islemKesirler").css({
            width:"100px",
            height:"50px",
            position:"absolute",
            fontSize:"20px",
            textAlign:"center"
        });

        $("#islemKesirUst").css({
            left:"490px",
            top:"60px",
            opacity:0
        });
        $("#islemKesirAlt").css({
            left:"490px",
            top:"135px",
            opacity:0
        });

        $(".kesirler").css({
            width:"40%",
            height:"100%",
            float:"left"

        });
        $(".esitlik").css({
            width:"20%",
            height:"100%",
            float:"left",
            textAlign:"center",
            lineHeight:"40px"
        });

        $(".oPay").css({
            width:"100%",
            height:"40%"

        });


        $(".oPayda").css({
            width:"100%",
            height:"40%",
            borderTop:"1px solid black"
        });



        $("#bisiklet").animate({opacity:1},1000);
        $("#tablo").delay(1000).animate({opacity:1},1000);
        $("#islemKesirUst").delay(2000).animate({opacity:1},1000);
        $("#okUst").delay(3000).animate({opacity:1},1000);
        $("#islemEsitlikUst").delay(4000).animate({opacity:1},1000);
        $("#islemKesirAlt").delay(5000).animate({opacity:1},1000);
        $("#okAlt").delay(6000).animate({opacity:1},1000);
        $("#islemEsitlikAlt").delay(7000).animate({opacity:1},1000);
        $("#ucan").delay(8000).animate({opacity:1},1000).animate({top:"118px",left:"430px"},3000);

        Main.animationFinished(12000);

    }
}
;

Interaction = {

    getFramework:function () {
        return 'paper';
    },
    images:[

    ],
    init:function (container) {
        Interaction.container = container;
        Main.setObjective('Yandaki orantıda verilmeyeni bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()

        }



        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"490px",
            top:"35px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",
            opacity:1
        });

        Interaction.appendInput({
            position:"absolute",
            width:"50px",
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

        $(container).append("<div id='dogruCevap'><div id='kesirD'></div><div id='sonucD'></div></div>");
        $("#dogruCevap").css({
            position:"absolute",
            width:"300px",
            height:"50px",

            left:"165px",
            top:"170px",

            textAlign:"center",
            fontSize:"20px",
            opacity:0,
            color:"green",



        });
        $("#kesirD").css({
            width:"110px",
            height:"100%",
            float:"left",
            opacity:1


        });
        $("#kesirD").append("<div id='payD' class='kesir'></div><div id='paydaD' class='kesir'></div>");
        $(".kesir").css({width:"100%",height:"50%"})
        $("#payD").css({lineHeight:"30px"})
        $("#paydaD").css({borderTop:"green 2px solid",lineHeight:"30px"});

        $("#sonucD").css({marginTop:"16px",textAlign:"left",opacity:1});


        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        });

        soruSayisi=10;

        Interaction.soruIdArray = Util.getShuffledArray(sorular.length);
        Interaction.sira = 0;


        Interaction.prepareNextQuestion();
    },
    nextQuestion:function (randomNumber) {
        $("#dogruCevap").animate({opacity:"0"},1000);
        $("input").css("color","black");

        yeniSoru();

        $("#soru").html(Interaction.soruMetni);

        Interaction.sira++;
        if(Interaction.sira==sorular.length-1)
            Interaction.sira=0;

        //kontrol();



    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck:function () {

    },
    isAnswerCorrect:function (value) {


        if(Interaction.sonuc==value)
            return true;

    },
    onCorrectAnswer:function () {

    },
    onWrongAnswer:function () {

    },
    onFail:function () {
        Interaction.setStatus('Cevabın yanlış; doğrusu yukarıdadır.',false);
        Interaction.sonucBirimi=Interaction.simdikiSoru[1];

        if(Interaction.ilkBagimsiz==0){
            $("#payD").html(Interaction.ilkBagimli+" x "+Interaction.ikinciBagimsiz);
            $("#paydaD").html(Interaction.ikinciBagimli);

        }

        else if(Interaction.ilkBagimli==0){
            $("#payD").html(Interaction.ikinciBagimli+" x "+Interaction.ilkBagimsiz);
            $("#paydaD").html(Interaction.ikinciBagimsiz);
        }

        else if(Interaction.ikinciBagimsiz==0){
            $("#payD").html(Interaction.ilkBagimsiz+" x "+Interaction.ikinciBagimli);
            $("#paydaD").html(Interaction.ilkBagimli);
        }

        else if(Interaction.ikinciBagimli==0){
            $("#payD").html(Interaction.ilkBagimli+" x "+Interaction.ikinciBagimsiz);
            $("#paydaD").html(Interaction.ilkBagimsiz);
        }

        $("#sonucD").html("&nbsp; = "+Interaction.sonuc.toString().replace(".",",")+" "+Interaction.sonucBirimi);

        $("#dogruCevap").animate({opacity:"1"},1000);
        $("input").css("color","red");

    }
};






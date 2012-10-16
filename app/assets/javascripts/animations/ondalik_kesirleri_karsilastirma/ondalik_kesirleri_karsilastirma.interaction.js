var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki ondalık kesirleri sürükleyerek küçükten büyüğe doğru sıralayınız.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        sayi1=0;sayi2=0,sayi3=0;
        // Ana Div
        $(container).append("<div id='soru'>");
        $("#soru")
            .css("width","100%")
            .css("height","45px")
            .css("position","absolute")
            .css("left","0")
            .css("top","50px")
            .css("right","0")

            .css("margin","auto");
        //.css("border","1px solid red");

        $(container).append("<div id='cevap'>");
        $("#cevap")
            .css("width","100%")
            .css("height","45px")
            .css("position","absolute")
            .css("left","0")
            .css("right","0")
            .css("bottom","100px")
            .css("margin","auto")
            .css("opacity","0");
        //.css("border","1px solid red");


        sayi1=sayiUretim();
        sayi2=sayiUretim();
        sayi3=sayiUretim();
        soru=new liste(sayi1,sayi2,sayi3,"soru");
        soru.doldur();

        /*var siraliListe=[sayi1,sayi2,sayi3];
         siraliListe.sort();
         cevap=new liste(siraliListe[0],siraliListe[1],siraliListe[2],"cevap");
         cevap.doldur();*/



        Interaction.appendButton({bottom:"40px", right:"48px"});
        Interaction.appendStatus({bottom:"50px", right:"200px"});

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $("#cevap").animate({opacity:"0"},1000);
        $("#soru").animate({opacity:"1"},1000);
        //$("#soru").delay(800).animate({top:"0px"},1000);

        sayi1=sayiUretim();
        sayi2=sayiUretim();
        sayi3=sayiUretim();
        $("li").removeClass("kapali");

        //$("#soru ul").empty()
        $("#soru #siralanacakSayi1").html(sayi1.replace(".",","));
        $("#soru #siralanacakSayi2").html(sayi2.replace(".",","));
        $("#soru #siralanacakSayi3").html(sayi3.replace(".",","));

        setTimeout(cevapGetir,1000);
        function cevapGetir(){
            $(" #cevap").html("");
            var siraliListe=[sayi1,sayi2,sayi3];
            siraliListe.sort();
            var cevap=new liste(siraliListe[0],siraliListe[1],siraliListe[2],"cevap");
            cevap.doldur();
        }





    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){

        /*var sayi1= new Object;
         sayi1.icerik=$("#soru #siralanacakSayi1").html();
         sayi1.sira=$("#soru  #siralanacakSayi1").position().left;

         var sayi2= new Object;
         sayi2.icerik=$("#soru  #siralanacakSayi2").html();
         sayi2.sira=$("#soru #siralanacakSayi2").position().left;

         var sayi3= new Object;
         sayi3.icerik=$("#soru #siralanacakSayi3").html();
         sayi3.sira=$("#soru #siralanacakSayi3").position().left;


         console.log(sayi1.icerik+" "+sayi1.sira);
         console.log(sayi2.icerik+" "+sayi2.sira);
         console.log(sayi3.icerik+" "+sayi3.sira);

         var liste=[sayi1.icerik,sayi2.icerik,sayi3.icerik];
         var siraliListe=liste.sort();


         console.log(siraliListe);*/

        siraliListe=[parseFloat(sayi1),parseFloat(sayi2),parseFloat(sayi3)];
        //siraliListe.sort();
        siraliListe.sort(function(a,b){return b-a});
        siraliListe.reverse();
        console.log(siraliListe);
        console.log(typeof siraliListe[0]);
        $("#cevap #siralanacakSayi1").html(siraliListe[0].toString().replace(".",","));
        $("#cevap #siralanacakSayi2").html(siraliListe[1].toString().replace(".",","));
        $("#cevap #siralanacakSayi3").html(siraliListe[2].toString().replace(".",","));

        var ilk=$("#soru .sayilar:first").html();
        ilk=parseFloat(ilk.replace(",","."));
        console.log("ilk: "+ilk);

        var sonuncu=$("#soru .sayilar:last").html();
        sonuncu=parseFloat(sonuncu.replace(",","."));
        console.log("sonuncu: "+sonuncu);

        if(ilk==siraliListe[0] && sonuncu==siraliListe[2]){
            $("li").addClass("kapali");
            return true;

        }

        /*
         console.log("1. item position: "+$("#siralanacakSayi1").position().left+" , "+$("#siralanacakSayi1").position().top);
         console.log("1. item val: "+$("#siralanacakSayi1").html());
         console.log("2. item position: "+$("#siralanacakSayi2").position().left+" , "+$("#siralanacakSayi1").position().top);
         console.log("2. item val: "+$("#siralanacakSayi2").html());
         console.log("3. item position: "+$("#siralanacakSayi3").position().left+" , "+$("#siralanacakSayi1").position().top);
         console.log("3. item val: "+$("#siralanacakSayi3").html());
         */
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıdadır.',false);
        $("#soru").animate({opacity:"0.35"},1000);
        $("#cevap").animate({opacity:"1"},1000);
        $("li").addClass("kapali");

    },
}
var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki kesri ondalık kesre çeviriniz ve tabloya yerleştiriniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        $(container).append("<div id='soru'>");
        $("#soru").css("width","590px")
            .css("height","300px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("right","0")
            .css("bottom","0")
            .css("margin","auto");
        pay=0,payda=0, sonuc=0;
        sayiUret=function (deger){
            var rastgeleSayi=Math.floor(Math.random()*999998+1);
            switch(deger){

                case 1:
                    // sadece 1000'e bölünebilir.
                    pay=rastgeleSayi;
                    payda=1000;

                    break;
                case 2:
                    // 1000, 100 ve 10'a bölünebilir.
                    pay=Math.floor(rastgeleSayi/10);
                    payda=Math.pow(10,Math.floor(Math.random()*2+2));

                    break;
                case 3:
                    // Sadece 10'a bölübebilir.
                    pay=Math.floor(rastgeleSayi/100);
                    payda=10;
                    break;
            }

            return true;

        }

        etkilesimObjesi=new etkilesim("soru");
        etkilesimObjesi.doldur();



        Interaction.appendButton({bottom:"20px", right:"48px"});
        Interaction.appendStatus({bottom:"30px", right:"185px", width:"400px"});



        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(){

        sayiUret(2);
        $("#kesirPay").html(format(pay, {point:","}));
        $("#kesirPayda").html(payda);
        $("input").css("color","black");
        $("input").html("");

        $("#soruTekliInputCevap").animate({opacity:"0"},1000);
        $(".cokluCevap").animate({opacity:"0"},1000);



    },
    preCheck: function(){
        console.log("denetime giriyor");
        console.log("inputs.length: "+Interaction.inputs.length);

        var bosSayisi=0
        for(i=0; i<Interaction.inputs.length;i++){
            if(Interaction.inputs[i].value==""){
                bosSayisi++;

            }
        }



        if(bosSayisi==7){
            console.log("if denetim"+bosSayisi);
            Interaction.setStatus('Lüften bütün kutucukları doldurun.',false);
            return false
        }
        if(Interaction.inputs[0].value==""){
            console.log("girdsm");
            Interaction.setStatus('Lüften ondalık kısmı doldurun.',false);
            return false;
        }

        else{
            var sayac=0;
            for(var i=1; i<Interaction.inputs.length;i++){
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxx");
                if(Interaction.inputs[i].value!=""){
                    break;
                }
                else
                    sayac++;
            }
            console.log("sayac"+sayac);
            if(Interaction.inputs[0].value!="" && sayac==6){
                Interaction.setStatus('Lüften kesir kısmını doldurun.',false);
                return false;
            }
            else
                return true;
        }

    },
    isAnswerCorrect : function(values){
        Interaction.sonuc=pay/payda;

        Interaction.yanlis="";
        console.log("else");
        Interaction.girdilerdenGelen="";
        for(var i=1; i<values.length;i++){
            Interaction.girdilerdenGelen+=values[i];
            if(i==3)
                Interaction.girdilerdenGelen+=".";
        }

        Interaction.girdilerdenGelen=format(parseFloat(Interaction.girdilerdenGelen,10), {group:"", places:3})
        Interaction.formatliSonuc=format(Interaction.sonuc, {group:"", places:3});

        Interaction.ondalikGirdi=values[0];
        var ondalikGirdiAyrim=Interaction.ondalikGirdi.split(",");

        Interaction.ondalikGirdi=ondalikGirdiAyrim[0]+"."+ondalikGirdiAyrim[1];

        Interaction.ondalikGirdi=format(parseFloat(Interaction.ondalikGirdi,10), {group:"", places:3});
        if(Interaction.girdilerdenGelen==Interaction.formatliSonuc && Interaction.formatliSonuc==Interaction.ondalikGirdi)
            return true
        else if(Interaction.girdilerdenGelen!=Interaction.formatliSonuc && Interaction.formatliSonuc!=Interaction.ondalikGirdi)
            return false
        else{
            if(Interaction.formatliSonuc!=Interaction.ondalikGirdi)
                Interaction.yanlis="ondalik";


            else if(Interaction.girdilerdeGelen!=Interaction.formatliSonuc)
                Interaction.yanlis="tablo";

        }
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){
        if(Interaction.yanlis=="ondalik" || Interaction.yanlis=="tablo"){
            Interaction.setStatus("Cevabın bir kısmı <b id='dogru'>doğru</b>, bir kısmı <b id='yanlis'>yanlış</b>; lütfen tekrar deneyiniz");
            $("#dogru").css("color","green")
            $("#yanlis").css("color","red")
        }



    },
    onFail : function(){
        var sonucStr=Interaction.sonuc.toString().replace(".",",");

        $("#kesirPayCevap").html($("#kesirPay").html());
        $("#kesirPaydaCevap").html($("#kesirPayda").html());
        $("#inputCevap").html(sonucStr).css("color","green").css("font-weight","bold");


        var sonucAyrim=sonucStr.split(",");
        console.log("sonucAytrim: "+sonucAyrim[0]);
        console.log("sonucAytrim: "+sonucAyrim[1]);
        //sonucAyrim[0].reverse();
        //sonucAyrim[1].reverse();
        for(var i=2;i>=0;i--){
            if(sonucAyrim[1].length==3)
                var rakam=sonucAyrim[1].charAt(sonucAyrim[1].length-1-i);
            else
                var rakam=sonucAyrim[1].charAt(sonucAyrim[1].length-i);
            $("#cokluInputCevap"+i).html(rakam);
        }

        for(var i=3;i<=5;i++){

            var rakam=sonucAyrim[0].charAt(sonucAyrim[0].length-(i-2));
            $("#cokluInputCevap"+i).html(rakam);
        }


        if(Interaction.yanlis=="ondalik"){
            Interaction.setStatus('Ondalık kısımdaki cevap yanlış, doğrusu ondalık kısmın altındadır.',false);
            $("input").css("color","green");
            $(Interaction.inputs[0]).css("color","red");


            $("#soruTekliInputCevap").animate({opacity:"1"},1000);
        }
        else if(Interaction.yanlis=="tablo"){
            Interaction.setStatus('Tablodaki cevap yanlış, doğrusu tablonun altındadır.',false);
            $("input").css("color","red");
            $(Interaction.inputs[0]).css("color","green");
            $(".cokluCevap").animate({opacity:"1"},1000);



        }
        else{
            Interaction.setStatus('Yanlış cevap, doğrusu yukarıda belirtilmiştir.',false);
            $("input").css("color","red");

            $("#soruTekliInputCevap").animate({opacity:"1"},1000);
            $(".cokluCevap").animate({opacity:"1"},1000);
        }

        $("#dCevap").css("color","green");
    }
}
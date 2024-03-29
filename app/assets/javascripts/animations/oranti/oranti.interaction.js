
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


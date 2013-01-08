var Interaction = {

	getFramework:function(){
        return 'paper';
    },
	images:[

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen kümenin boş küme olup olmadığını belirleyip kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        var resim="/assets/radio_buttons.png";

        $(container).append("<div id='soru'>");
        $("#soru")
            .css("width","500px")
            .css("height","20px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","0px")
            .css("right","0px")
            .css("top","90px")
            .css("font-size","20px")
            .css("text-align","center")
            //.css("border","1px solid red");




        $(container).append("<div id='bosKume' class='secenek'>");

        $("#bosKume")
            .css("width","200px")
            .css("height","32px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","100px")
            .css("top","150px")
            .css("font-size","20px")
            .css("line-height","30px")
            .css("cursor","pointer")
            //.css("border","1px solid red")

        $("#bosKume").append("<div id='rbBosKume'>");



        $("#bosKume").append("<div id='bosKumeMetin'>");
        $("#bosKumeMetin")
            .css("width","150px")
            .css("height","32px")
            .css("position","relative")
            .css("float","right")
            .html("Boş küme");

        $(container).append("<div id='bosKumeDegil' class='secenek'>");

        $("#bosKumeDegil")
            .css("width","200px")
            .css("height","32px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("right","100px")
            .css("top","150px")
            .css("font-size","20px")
            .css("line-height","30px")
            .css("cursor","pointer")
        //.css("border","1px solid red")

        $("#bosKumeDegil").append("<div id='bosKumeDegilMetin'>");
        $("#bosKumeDegilMetin")
            .css("width","150px")
            .css("height","32px")
            .css("position","relative")
            .css("float","right")
            .html("Boş küme değil");


        $("#bosKumeDegil").append("<div id='rbBosKumeDegil'>");
        $("#rbBosKume, #rbBosKumeDegil")
            .css("width","32px")
            .css("height","32px")
            .css("position","relative")
            .css("float","left")
            .css("background-image","url("+resim+")")
            .css("background-position",'-128px 0px');

        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        });



        Interaction.aktifBtn=0;

        Interaction.soruSirasi=0;
        Interaction.soruSirasiArray=Util.getShuffledArray(13,1);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.sorguSecici=Interaction.soruSirasiArray[Interaction.soruSirasi];

        Interaction.soru= new sorgular();
        Interaction.yeniSoru=Interaction.soru.yeniSoru("A");
        $("#soru").html(Interaction.yeniSoru);

        $(".secenek").css("color","black").css("font-weight","normal");
        $("#rbBosKume, #rbBosKumeDegil").css("background-position",'-128px 0px');

        $("#bosKume").bind("click",function(){
            $("#rbBosKume").css("background-position",'-32px 0px');
            $("#rbBosKumeDegil").css("background-position",'-128px 0px');
            $(this).css("color","#2B5998").css("font-weight","bold");
            $("#bosKumeDegil").css("color","#000000").css("font-weight","normal");
            Interaction.aktifBtn=1;
        });

        $("#bosKumeDegil").bind("click",function(){
            $("#rbBosKumeDegil").css("background-position",'-32px 0px');
            $("#rbBosKume").css("background-position",'-128px 0px').css("color","#000000");
            $(this).css("color","#2B5998").css("font-weight","bold");
            $("#bosKume").css("color","#000000").css("font-weight","normal");
            Interaction.aktifBtn=-1;
        });

        Interaction.soruSirasi++;
        if(Interaction.soruSirasi==Interaction.soruSirasiArray.length)
            Interaction.soruSirasi=0;


    },


	preCheck : function(){
        if(Interaction.aktifBtn==0){
            Interaction.setStatus("Lütfen iki seçenekten birini seçin.",false);
            return false;
        }

    },
	isAnswerCorrect : function(value){
        Interaction.trial=1;
        if(Interaction.aktifBtn==1){
            if(Interaction.soru.kume.elements.length==0){
                return true;
            }
        }
        else if(Interaction.aktifBtn==-1){
            if(Interaction.soru.kume.elements.length>0){
                return true;
            }
        }
    },
	onCorrectAnswer : function(){
        $(".secenek").unbind("click");
    },
	onWrongAnswer : function(){

    },
	onFail : function(){
        if(Interaction.aktifBtn==1){
            Interaction.setStatus("Yanlış cevap; yukarıdaki kümenin elemanları:<br /> "+Interaction.soru.kume.definition+" = "+Interaction.soru.kume.getElementsString(),false);
            $("#bosKume").css("color","red");
            $("#bosKumeDegil").css("color","green");

            $("#rbBosKume").css("background-position","-96px 0px")
            $("#rbBosKumeDegil").css("background-position","-64px 0px")
        }
        else if(Interaction.aktifBtn==-1){
            Interaction.setStatus("Yanlış cevap; yukarıdaki küme, boş kümedir.",false);
            $("#bosKumeDegil").css("color","red");
            $("#bosKume").css("color","green");

            $("#rbBosKumeDegil").css("background-position","-96px 0px")
            $("#rbBosKume").css("background-position","-64px 0px")
        }
        $(".secenek").unbind("click");

    }
}
;

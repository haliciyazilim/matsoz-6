var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){

        console.log("********* navigator.platform: "+navigator.platform);
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"20px",
            right:"40px",

        });
        $("input").attr("disabled","disabled");
        Interaction.appendStatus({
            bottom:"30px",
            right:"150px"
        })

        var fonResmi=new Image();
        fonResmi.src="/assets/animations/dogru_ile_duzlem_iliskisi/dogru_duzlem_etkilesim.png";
        fonResmi.id="fonResmi";

        $(container).append(fonResmi);
        $("#fonResmi").css({
            position:"absolute",
            left:"0px",
            right:"0px",
            top:"0px",
            margin:"auto",
            zIndex:"-1"


        });

        $(container).append("<div id='sayacMetinUst'>");
        $("#sayacMetinUst").css({
            position:"absolute",
            width:"145px",
            height:"20px",
            right:"20px",
            top:"20px",
            textAlign:"center"
        }).html("Bulmanız gereken");

        $(container).append("<div id='sayac'>");
        $("#sayac").css({
            position:"absolute",
            width:"145px",
            height:"20px",
            right:"20px",
            top:"40px",
            fontSize:"20px",
            textAlign:"center",
            fontWeight:"bold"
        });

        $(container).append("<div id='sayacMetinAlt'>");
        $("#sayacMetinAlt").css({
            position:"absolute",
            width:"145px",
            height:"20px",
            right:"20px",
            top:"60px",

            textAlign:"center"
        }).html("doğru parçası kaldı.");


        duzlemArray=["maviDuvar","cati","sariDuvar"];
        dogruArray=["kesişen","paralel"];
        dogru="";
        duzlem="";
        soruMetin="";


        soruDuzlemRandomArray=Util.getShuffledArray(3);

        soruDuzlem=0;
        Interaction.soru=0;

        $(container).append("<img src='/assets/animations/dogru_ile_duzlem_iliskisi/btn_gray_cevapgoster.png' id='goster'>");
        $("#goster").css({
            position:"absolute",
            //width:"145px",
            //height:"20px",
            left:"20px",
            top:"245px",
            textAlign:"center",
            opacity:"1"

        });

        gosterBasilimi=0;

        //dogrular();
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.trial++;
        Main.interactionProject.activeLayer.removeChildren();
        $("input").css("opacity","0").attr("disabled","disabled");



        soruDuzlem=soruDuzlemRandomArray[Interaction.soru];
        switch (soruDuzlem){
            case 0:
                duzlem="mavi renkli duvarı";
                break;
            case 1:
                duzlem="çatısı";
                break;
            case 2:
                duzlem="sarı renkli duvarı";

                break;
        }


        if(Interaction.soru%2==0){
            dogru=dogruArray[0];


        }
        else{

            dogru=dogruArray[1];

        }
        soruMetin= "Yandaki resimde evin <b>"+duzlem+"</b> ile <b>"+dogru+"</b> tüm doğru parçalarını bulunuz ve kontrol ediniz.";
        Main.setObjective(soruMetin);
        dogrular();

        if(Interaction.soru%2==0){

            $("#sayac").html(kesisen);
        }
        else{


            $("#sayac").html(paralel);
        }

        gosterBasilimi=0;
        $("#goster").click(function(){
            if(dogru=="paralel"){
                for(var i=0; i<dogrularArray.length;i++){
                    if(dogrularArray[i].class=="paralel")
                        dogrularArray[i].strokeColor="red";
                    dogrularArray[i].strokeWidth=4;
                }
                console.log("ONFAIL soru paralel")
                for(var i=0; i<Interaction.seciliId.length;i++){
                    if(Interaction.seciliId[i].class=="paralel"){
                        Interaction.seciliId[i].strokeColor="green";
                    }
                    else
                        Interaction.seciliId[i].strokeColor="red";
                    dogrularArray[i].strokeWidth=4;
                }
            }
            else if(dogru=="kesişen"){
                for(var i=0; i<dogrularArray.length;i++){
                    if(dogrularArray[i].class=="kesişen")
                        dogrularArray[i].strokeColor="red";
                    dogrularArray[i].strokeWidth=4;
                }
                console.log("ONFAIL soru kesişen")
                for(var i=0; i<Interaction.seciliId.length;i++){
                    if(Interaction.seciliId[i].class=="kesişen"){
                        Interaction.seciliId[i].strokeColor="green";
                    }
                    else
                        Interaction.seciliId[i].strokeColor="red";
                    dogrularArray[i].strokeWidth=4;
                }
            }
            gosterBasilimi=1;
            Interaction.__checkAnswer();
            //$("input").css("opacity","1").removeAttr("disabled");
        });

        if(Interaction.soru==2)
            Interaction.soru=0;
        else
            Interaction.soru++;


    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        if(Interaction.seciliId.length==0){
            if(gosterBasilimi==1)
                return true;
            else
            Interaction.setStatus('Lütfen doğruları seçiniz.',false);
                return false;
        }

    },
	isAnswerCorrect : function(value){
       /* var dogruMu=true;
        if(soru=="paralel" && Interaction.seciliClass.length==paralel){
            for(var i=0; i<Interaction.seciliClass.length;i++){
                if(Interaction.seciliClass[i]!="paralel"){
                    dogruMu=false;
                    break;
                }

            }
            console.log("doğru mu: "+dogruMu);
            if(dogruMu==true){
                return true;
            }

        }
        else if(soru=="kesisen" && Interaction.seciliClass.length==kesisen){
            for(var i=0; i<Interaction.seciliClass.length;i++){
                if(Interaction.seciliClass[i]!="kesisen"){
                    dogruMu=false;
                    break;
                }

            }
            console.log("doğru mu: "+dogruMu);
            if(dogruMu==true){
                return true;
            }
        }*/
        if(gosterBasilimi==1)
            sayac=0;

        if(sayac==0 && gosterBasilimi==0)
        {
            $("input").css("opacity","1").removeAttr("disabled");
            $("#sayac").html("0");
            console.log("xxxxxxxxxx onmousedown null");
            //Interaction.tool.onMouseDown=null;
            return true;
        }
        else{
            $("input").css("opacity","1").removeAttr("disabled");
            $("#sayac").html("0");
            //Interaction.tool.onMouseDown=null;
            return false;
        }

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){

    },
	onFail : function(){
        //goster();

        Interaction.setStatus('Cevaplar yukarıda gösterilmiştir.',false);
    }
}
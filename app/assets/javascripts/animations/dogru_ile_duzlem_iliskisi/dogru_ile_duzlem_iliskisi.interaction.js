var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"20px",
            right:"40px"
        });
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
        }).html("Tüm kesişen doğrulara");

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

        soru="paralel";
        dogrular();


        Interaction.soru=0;
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();


        Interaction.soru++;
        if(Interaction.soru%2==0){
            Main.setObjective('Yandaki resimde evin mavi renkli duvarı ile <b>kesişen</b> tüm doğru parçalarını bulunuz ve kontrol ediniz.');
            soru="kesisen";
            $("#sayac").html(kesisen);
        }
        else{
            Main.setObjective('Yandaki resimde evin mavi renkli duvarına <b>paralel</b> olan tüm doğru parçalarını bulunuz ve kontrol ediniz.');
            soru="paralel";
            $("#sayac").html(paralel);
        }
        dogrular();


    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        if(Interaction.seciliId.length==0){
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

        if(sayac==0)
        {
            return true;
        }

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        if(soru=="paralel"){
            for(var i=0; i<dogrularArray.length;i++){
                if(dogrularArray[i].class=="paralel")
                    dogrularArray[i].strokeColor="blue";
            }
            console.log("ONFAIL soru paralel")
            for(var i=0; i<Interaction.seciliId.length;i++){
                if(Interaction.seciliId[i].class=="paralel"){
                    Interaction.seciliId[i].strokeColor="green";
                }
                else
                    Interaction.seciliId[i].strokeColor="red";
            }
        }
        else if(soru=="kesisen"){
            for(var i=0; i<dogrularArray.length;i++){
                if(dogrularArray[i].class=="kesisen")
                    dogrularArray[i].strokeColor="blue";
            }
            console.log("ONFAIL soru kesisen")
            for(var i=0; i<Interaction.seciliId.length;i++){
                if(Interaction.seciliId[i].class=="kesisen"){
                    Interaction.seciliId[i].strokeColor="green";
                }
                else
                    Interaction.seciliId[i].strokeColor="red";
            }
        }
		
    }
}
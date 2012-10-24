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
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })

        dogrular();
        console.log(onDuvarA.position.x)

        Interaction.soru=0;
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();
        dogrular();

        Interaction.soru++;
        if(Interaction.soru%2==0){
            Main.setObjective('Yandaki resimde evin sarı renkli duvarı ile <b>kesişen</b> tüm doğru parçalarını bulunuz ve kontrol ediniz.');
            soru="kesisen";
        }
        else{
            Main.setObjective('Yandaki resimde evin sarı renkli duvarına <b>paralel</b> olan tüm doğru parçalarını bulunuz ve kontrol ediniz.');
            soru="paralel";
        }



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
        var dogruMu=true;
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
                    dogrularArray[i].strokeColor="yellow";
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
                    dogrularArray[i].strokeColor="yellow";
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
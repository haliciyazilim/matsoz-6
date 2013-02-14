var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen sayıların çarpanlarını bulunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.questionArray = [];
        for(var i = 0; i < 100; i++){
            Interaction.questionArray[i] = i+1;
        }

        Interaction.appendStatus({
            bottom:'20px',
            right:'170px',
            //    border:'1px solid',
            width:'400px',
            height:'30px',
            textAlign:'center'

        });
        Interaction.appendButton({
            bottom:'20px',
            right:'40px'
        });


        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 4; j++){
                var topStr = 40+i*60;
                var leftStr = 280+j*65;
                topStr = ""+topStr+"px";
                leftStr = ""+leftStr+"px"
                Interaction.appendInput({
                    top:topStr,
                    left:leftStr,
                    width:'45px',
                    height:'40px',
                    fontSize:'24px'
                }, true, true);
            }
        }

        Interaction.questionDiv = document.createElement('div');
        Interaction.questionDiv.id = 'questionDiv';
        $(Interaction.container).append(Interaction.questionDiv);
        $(Interaction.questionDiv).css({
            position:'absolute',
            top:'40px',
            left:'30px',
            width:'200px',
            height:'100px'
        });
        $(Interaction.questionDiv).html('<div id="questionNum"></div><div id="text1">sayısının çarpanları</div><div id="prime">ASAL SAYI</div>');
        $('#questionNum').css({
            position:'absolute',
            top:'10px',
            left:0,
            right:0,
            fontSize:'40px',
            textAlign:'center',
            fontWeight:'bold'
        });
        $('#text1').css({
            position:'absolute',
            top:'60px',
            left:0,
            right:0,
            fontSize:'20px',
            textAlign:'center'
        });
        $('#prime').css({
            position:'absolute',
            top:'96px',
            left:0,
            right:0,
            textAlign:'center',
            fontWeight:'bold',
            color:"#069",
            fontSize:'18px',
            opacity:0
        });

        Interaction.answerDiv = document.createElement('div');
        Interaction.answerDiv.id = 'answerDiv';
        $(Interaction.container).append(Interaction.answerDiv);
        $(Interaction.answerDiv).css({
            position: 'absolute',
            top:'145px',
            left:'20px',
            width:'230px',
            height:'80px',
            //   border:'1px solid',
            color:'#069',
            fontSize:'18px',
            textAlign:'center',
        });
        $(Interaction.answerDiv).html('<div id="texttt"></div><div id="missingF"></div>')
        $('#texttt').css({
            position:'absolute',
            top:'10px',
            left:0,
            right:0,
        });
        $('#missingF').css({
            position:'absolute',
            top:'35px',
            left:0,
            right:0,
            lineHeight:'22px'
        });


        Interaction.setRandomGenerator(100);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.trial2 = 0;
        $('#prime').css("opacity", 0);
        $('#texttt').html('');
        $('#missingF').html('');
        Interaction.question = Interaction.questionArray[randomNumber];
        Interaction.factorsOfQuestion = [];
        Interaction.factorsOfQuestion = Util.getFactors(Interaction.question);
        Interaction.factorNum = Interaction.factorsOfQuestion.length;
        for(var i = 0; i < Interaction.inputs.length; i++){
            Interaction.inputs[i].readOnly = false;
            $(Interaction.inputs[i]).css("opacity", 1);
            $(Interaction.inputs[i]).addClass("input");
            $(Interaction.inputs[i]).css("display","block");
            Interaction.inputs[i].style.color = "black";
        }
        for(var i = 0; i < 12-Interaction.factorNum; i++){
            Interaction.inputs[Interaction.inputs.length-1-i].readOnly = true;
            //$(Interaction.inputs[Interaction.inputs.length-1-i]).css("opacity", 0.3);
            $(Interaction.inputs[Interaction.inputs.length-1-i]).css("display","none");
            $(Interaction.inputs[Interaction.inputs.length-1-i]).removeClass("input");
        }

        $('#questionNum').html(Interaction.question);
    },


    preCheck : function(){
        if(Interaction.trial == 1){
            return true;
        }
        else{
            for(var i = 0; i < Interaction.factorsOfQuestion.length; i++){
                if(Interaction.inputs[i].value == ""){
                    Interaction.setStatus('Lütfen tüm kutucukları doldurunuz.',false);
                    Interaction.trial2 += 1;
                    Interaction.trial += 1;
                    break;
                }
            }
            if(Interaction.trial2 == 1){
                return false;
            }
            else{
                return true;
            }
        }
    },
    isAnswerCorrect : function(value){
        Interaction.correctAnswerNum = 0;
        var checkDataArr = [];
        var len = Interaction.factorNum;
        for(var i = 0; i < len; i++){
            checkDataArr[i] = value[i];
        }

        if(checkDatas(checkDataArr)){

            return true;
        }
        else{
            return false;
        }
    },
    onCorrectAnswer : function(){
        for(var i = 0; i < Interaction.factorNum; i++){
            Interaction.inputs[i].style.color = "red";
        }
        for(var i = 0; i < Interaction.inputsColors.length; i++){
            Interaction.inputs[Interaction.inputsColors[i]].style.color = "green";
        }

        if(Interaction.factorNum == 2)
            $('#prime').css("opacity", 1)
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);

        var missingFactorsStr = "";

        for(var i = 0; i < Interaction.factorsOfQuestion.length-1; i++){
            missingFactorsStr = missingFactorsStr+Interaction.factorsOfQuestion[i]+", ";
        }
        missingFactorsStr = missingFactorsStr+"ve "+Interaction.factorsOfQuestion[Interaction.factorsOfQuestion.length-1];
        $('#texttt').html('Bu sayının tüm çarpanları:');



        $('#missingF').html(missingFactorsStr);

        for(var i = 0; i < Interaction.factorNum; i++){
            Interaction.inputs[i].style.color = "red";
        }
        for(var i = 0; i < Interaction.inputsColors.length; i++){
            Interaction.inputs[Interaction.inputsColors[i]].style.color = "green";
        }

        if(Interaction.factorNum == 2)
            $('#prime').css("opacity", 1)
    },
}
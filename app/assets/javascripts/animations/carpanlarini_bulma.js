function __Styles(){
    
    animationEqsColor = "green";
    wholeFactorsColor = "#069"
}

var Animation = {
    init:function(container){
        Animation.container = container;

        var animStart = 0;
        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = "animDiv";
        $(Animation.container).append(Animation.animDiv);
        $(Animation.animDiv).css({
            position:'absolute',
            top:'40px',
            left:'130px',
            width:'600px',
            height:'150px',
 //           border:'1px solid',
            fontSize:'20px'
        });

        $(Animation.animDiv).html('<div id="factorT">çarpanları</div><div id="firstDiv">12 = <span id="eq1">1 x 12</span></div><div id="secondDiv">12 = <span id="eq2">2 x 6</span></div><div id="thirdDiv">12 = <span id="eq3">3 x 4</span></div><div id="fourthDiv">1, 12</div><div id="fifthDiv">2, 6</div><div id="sixthDiv">3, 4</div><div id="seventhDiv"><b>12</b> </br>sayısının çarpanları</div><div id="eighthDiv">1, 2, 3, 4, 6, 12</div>');
        $('#factorT').css({
            position:'absolute',
            top:'0px',
            left:'216px',
            opacity:0,
            fontWeight:'bold'
        });
        $('#factorT').delay(animStart+3000).animate({opacity:1}, 1000, 'easeInOutQuad')
        $('#firstDiv').css({
            position:'absolute',
            top:'35px',
            left:'20px',
            opacity:0
        });
        $('#firstDiv').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq1').css("opacity", 0).delay(animStart+1500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#secondDiv').css({
            position:'absolute',
            top:'65px',
            left:'20px',
            opacity:0
        });
        $('#secondDiv').delay(animStart+6000).animate({opacity:1}, 1000, 'easeInOutQuad')
        $('#eq2').css("opacity", 0).delay(animStart+7500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#thirdDiv').css({
            position:'absolute',
            top:'95px',
            left:'20px',
            opacity:0
        });
        $('#thirdDiv').delay(animStart+10500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq3').css("opacity", 0).delay(animStart+12000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#fourthDiv').css({
            position:'absolute',
            top:'35px',
            left:'236px',
            opacity:0,
            color:animationEqsColor
        });
        $('#fourthDiv').delay(animStart+4500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#fifthDiv').css({
            position:'absolute',
            top:'65px',
            left:'238px',
            opacity:0,
            color:animationEqsColor
        });
        $('#fifthDiv').delay(animStart+9000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#sixthDiv').css({
            position:'absolute',
            top:'95px',
            left:'238px',
            opacity:0,
            color:animationEqsColor
        });
        $('#sixthDiv').delay(animStart+13500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#seventhDiv').css({
            position:'absolute',
            top:'30px',
            left:'356px',
            textAlign:'center',
            width:'180px',
            opacity:0,
            color:wholeFactorsColor,
        });
        $('#seventhDiv').delay(animStart+15000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eighthDiv').css({
            position:'absolute',
            top:'80px',
            left:'376px',
            opacity:0,
            color:wholeFactorsColor,
        });
        $('#eighthDiv').delay(animStart+16500).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1000)})

    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
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
                });
            }
        }

        Interaction.questionDiv = document.createElement('div');
        Interaction.questionDiv.id = 'questionDiv';
        $(Interaction.container).append(Interaction.questionDiv);
        $(Interaction.questionDiv).css({
            position:'absolute',
            top:'40px',
            left:'30px',
    //        border:'1px solid',
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
            left:'30px',
            width:'210px',
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

        $('#prime').css("opacity", 0)
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
            Interaction.inputs[i].isEmpty = false;
            Interaction.inputs[i].style.color = "black";
        }
        for(var i = 0; i < 12-Interaction.factorNum; i++){
            Interaction.inputs[Interaction.inputs.length-1-i].readOnly = true;
            $(Interaction.inputs[Interaction.inputs.length-1-i]).css("opacity", 0.3);
            $(Interaction.inputs[Interaction.inputs.length-1-i]).removeClass("input");
            Interaction.inputs[Interaction.inputs.length-1-i].isEmpty = true;
        }

        $('#questionNum').html(Interaction.question);

        console.log("question: "+Interaction.question);
        console.log("factorNum: "+Interaction.factorNum);
        console.log("factors: "+Interaction.factorsOfQuestion);

    },


    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        Interaction.correctAnswerNum = 0;
        var checkDataArr = [];
        var len = Interaction.factorNum;
        for(var i = 0; i < len; i++){
            checkDataArr[i] = value[i];
        }

        if(Interaction.checkDatas(checkDataArr)){

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
        if(Interaction.missingFactors.length > 1){
            for(var i = 0; i < Interaction.missingFactors.length-1; i++){
                missingFactorsStr = missingFactorsStr+Interaction.missingFactors[i]+", ";
            }
            missingFactorsStr = missingFactorsStr+"ve "+Interaction.missingFactors[Interaction.missingFactors.length-1];
            $('#texttt').html('Eksik girdiğiniz çarpanlar:');
        }
        else if(Interaction.missingFactors.length == 1){
            missingFactorsStr = missingFactorsStr+Interaction.missingFactors[0];
            $('#texttt').html('Eksik girdiğiniz çarpan:');
        }

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

    checkDatas : function(values){
        var correctN = 0;
        var a = [];
        Interaction.missingFactors = [];
        Interaction.inputsColors = [];
        for(var i = 0; i < Interaction.factorNum; i++){
            a[i] = Interaction.factorsOfQuestion[i];
        }
        for(var i = 0; i < Interaction.factorNum; i++){
            for(var j = 0; j < Interaction.factorNum; j++){
                if(values[j] == a[i]){
                    values[j] = "axxwt";
                    a[i] = "axxwt";
                    Interaction.inputsColors.push(j);
                }
            }
        }

        for(var i = 0; i < Interaction.factorNum; i++){
            if(a[i] != "axxwt"){
                Interaction.missingFactors.push(a[i]);
            }
        }

        for(var i=0; i < Interaction.factorNum; i++){
            if(values[i] == "axxwt")
                correctN += 1;
        }
        if(correctN == Interaction.factorNum)
            return true;
        else
            return false;
    }
}
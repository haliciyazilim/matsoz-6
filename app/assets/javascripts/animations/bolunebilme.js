function __Styles(){
    wholeTableFillColor = "white";
    wholeTableStrokeColor = "#a8dbe3";

    wholeTablePrimeFillColor = "#9ee9a5";
    wholeTablePrimeStrokeColor = "#4f9c4f";

    counterColor = "#a8dbe3";
    counterQuestionColor = "#41818a"

    animationRectFillColor = "e99e9e";
    animationRectStrokeColor = "9c4f4f"

    animationRectFillColor2 = "f2c885";
    animationRectStrokeColor2 = "9b763d";

    textColor = "#006e7d";
    textColor2 = "#FF0000"; // not divisible color
    textColor3 = "#000000"; // original color
    textColor4 = "#006e7d" // divisible color
}

var Animation = {
    init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var firstDivStart = animStart+2000;
        var secondDivStart = firstDivStart+4000;
        var thirdDivStart = secondDivStart+4000;
        var fourthDivStart = thirdDivStart+4000;
        var fifthDivStart = fourthDivStart+4000;
        var sixthDivStart = fifthDivStart+4000;
        var seventhDivStart = sixthDivStart+4000;


        var basicFadeInDuration = 1000;
        var coloredNumberDuration = 1000;

        var animationDiv = document.createElement('div');
        animationDiv.id = 'animationDiv'
        $(Animation.container).append(animationDiv);
        $(animationDiv).css({
            position:'absolute',
            top:'30px',
            left:'10px',
            width:'760px',
            height:'160px',
        });

        $(animationDiv).append('<div id="numm"><span id="fD">1</span><span id="sD">3</span><span id="tD">2</span></div>')
        $('#numm').css({
            position:'absolute',
            top:'-5px',
            left:0,
            right:0,
            fontSize: '40px',
            fontWeight:'bold',
            textAlign:'center',
            opacity:0

        });

        $('#numm').css("text-shadow","2px 2px 3px rgba(0,0,0,.20)");
        $('#numm').delay(animStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $('#tD').delay(firstDivStart).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3},coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(5000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')


        $('#fD').delay(secondDivStart).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(13000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')

        $('#sD').delay(secondDivStart).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(9000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="firstDiv">birler basamağı (2) çift sayı </br> <span style="font-weight:bold;color:'+textColor+';">2\'ye kalansız bölünür</span></div>')
        $('#firstDiv').css({
            position:'absolute',
            top:'45px',
            left:'10px',
            width:'240px',
            height:'30px',
            textAlign:'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#firstDiv').delay(firstDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')
        $(animationDiv).append('<div id="secondDiv">rakamlar toplamı (1+3+2=6) 3\'ün katı </br> <span style="font-weight:bold;color:'+textColor+';">3\'e kalansız bölünür</span></div>')
        $('#secondDiv').css({
            position:'absolute',
            top:'45px',
            left:'260px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#secondDiv').delay(secondDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')
        $(animationDiv).append('<div id="thirdDiv">sağdan iki basamak (32) 4\'ün katı </br><span style="font-weight:bold;color:'+textColor+';"> 4\'e kalansız bölünür</span></div>')
        $('#thirdDiv').css({
            position:'absolute',
            top:'45px',
            left:'510px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#thirdDiv').delay(thirdDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="fourthDiv">2 ve 3\'e kalansız bölünür </br><span style="font-weight:bold;color:'+textColor+';"> 6\'ya kalansız bölünür</span></div>')
        $('#fourthDiv').css({
            position:'absolute',
            top:'85px',
            left:'260px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#fourthDiv').delay(fourthDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="fifthDiv">birler basamağı (2) 5 ya da 0 değil </br><span style="font-weight:bold;color:'+textColor2+';"> 5\'e kalansız bölünmez</span></div>')
        $('#fifthDiv').css({
            position:'absolute',
            top:'125px',
            left:'10px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#fifthDiv').delay(fifthDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="sixthDiv">rakamlar toplamı (1+3+2=6) 9\'un katı değil </br><span style="font-weight:bold;color:'+textColor2+';"> 9\'a kalansız bölünmez</span></div>')
        $('#sixthDiv').css({
            position:'absolute',
            top:'125px',
            left:'260px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#sixthDiv').delay(sixthDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="seventhDiv">birler basamağı (2) 0 değil </br><span style="font-weight:bold;color:'+textColor2+';"> 10\'a kalansız bölünmez</span></div>')
        $('#seventhDiv').css({
            position:'absolute',
            top:'125px',
            left:'510px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#seventhDiv').delay(seventhDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad', function(){Main.animationFinished(2000);})


    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendStatus({
            left:'410px',
            top:'120px',
            width:'140px',
            height:'50px',
            textAlign:'center',
        });

        Interaction.wholeTable = [];
        Interaction.textTable = [];
        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; j++){
                var a = i*10+j;
                Interaction.wholeTable[a] = new Path.Rectangle(new Point(20.5+j*35, 20.5+i*26), new Size(35, 26));
                Interaction.wholeTable[a].strokeColor = wholeTableStrokeColor;
                Interaction.wholeTable[a].fillColor = wholeTableFillColor;
                Interaction.wholeTable[a].myId = a+1;
                Interaction.wholeTable[a].class = "number";

                Interaction.textTable[a] = new PointText(new Point(Interaction.wholeTable[i*10+j].position.x,Interaction.wholeTable[i*10+j].position.y+6));
                Interaction.textTable[a].justification = 'center';
                Interaction.textTable[a].fillColor = 'black';
                Interaction.textTable[a].content = a+1;
                Interaction.textTable[a].myId = a+1;
            }
        }

        var tool = new Tool();
        tool.onMouseDown = function(event){
            if(Interaction.pause2 == 1)
                return;
            else{
                Interaction.setStatus('');
                if(event.item){
                    if(event.item.class == "number"){
                        if(Interaction.answerTable.indexOf(event.item.myId) != -1){
                            Interaction.wholeTable[event.item.myId-1].fillColor = wholeTablePrimeFillColor;
                            Interaction.wholeTable[event.item.myId-1].strokeColor = wholeTablePrimeStrokeColor;
                            if(Interaction.userAnswerTable.indexOf(event.item.myId) == -1){
                                Interaction.userAnswerTable.push(event.item.myId);
                                Interaction.remainingNumber -= 1;
                                $('#count').html(Interaction.remainingNumber);
                                if(Interaction.userAnswerTable.length == Interaction.answerTable.length){
                                    if($('#counterDiv'))
                                        $('#counterDiv').remove();
                                    $(Interaction.button).css("opacity",1);
                                    Interaction.setStatus('Tebrikler, '+Interaction.questionString+' kalansız bölünen bütün sayıları buldunuz.', true)
                                    Interaction.button.onclick = Interaction.prepareNextQuestion;
                                    Interaction.pause2 = 1;
                                }
                            }
                        }
                        else{
                            Interaction.setStatus('Seçtiğiniz sayı '+Interaction.questionString+' kalansız bölünmüyor.', false)
                        }
                    }
                }
            }
        }
        tool.activate();

        Interaction.appendButton({
            bottom: '20px',
            right: '40px',
        });

        Interaction.questionArray = [];
        Interaction.questionArray[0] = 2;
        Interaction.questionArray[1] = 3;
        Interaction.questionArray[2] = 4;
        Interaction.questionArray[3] = 5;
        Interaction.questionArray[4] = 6;
        Interaction.questionArray[5] = 9;
        Interaction.questionArray[6] = 10;
        Interaction.setRandomGenerator(7);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;
        Interaction.pause2 = 0;
        Interaction.button.className = "next_button";
        $(Interaction.button).css("opacity", 0);
        Interaction.setStatus('');


        Interaction.question = Interaction.questionArray[randomNumber];
        Interaction.remainingNumber = Math.floor(100/Interaction.question);

        Interaction.userAnswerTable = [];
        Interaction.answerTable = [];
        for(var i = 1; i < 101; i ++){
            if(i % Interaction.question == 0){
                Interaction.answerTable.push(i);
            }
        }

        Interaction.questionString = Interaction.question;
        if(Interaction.question == 2){
            Interaction.questionString = ""+Interaction.questionString+"'ye"
        }
        else if(Interaction.question == 3 || Interaction.question == 4 || Interaction.question == 5){
            Interaction.questionString = ""+Interaction.questionString+"'e";
        }
        else if(Interaction.question == 6){
            Interaction.questionString = ""+Interaction.questionString+"'ya";
        }
        else{
            Interaction.questionString = ""+Interaction.questionString+"'a"
        }



        Main.setObjective('Yanda verilen yüzlük tabloda '+'<span id="qt">'+Interaction.questionString+'</span>'+' kalansız bölünen sayıları belirleyiniz.');
        $('#qt').css("font-weight", "bold")
            .css("color", "red")
        for(var i = 0; i < 100; i++){
            Interaction.wholeTable[i].strokeColor = wholeTableStrokeColor;
            Interaction.wholeTable[i].fillColor = wholeTableFillColor;
        }


        $(Interaction.container).append('<div id="counterDiv"><div id="ct"></div><div id="count"></div><div id="text">tane sayı kaldı</div></div>')
        $('#counterDiv').css({
            position:'absolute',
            top:'20px',
            left:'400px',
            width:'160px',
            height:'80px',
        //    border:'solid'
        });
        $('#ct').css({
            position:'absolute',
            top:'10px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '16px',
            color: counterQuestionColor
        });
        $('#ct').html(""+Interaction.questionString+" kalansız bölünen");
        $('#count').css({
            position:'absolute',
            top:'30px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: 'bold',
            color: counterColor
        });
        $('#count').html(Interaction.remainingNumber);
        $('#text').css({
            position:'absolute',
            top:'60px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '16px',
            color: counterColor
        })

    },


    preCheck : function(){

    },
    isAnswerCorrect : function(value){

    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){

    }
}
function __Styles(){
    /*
     * write your styles here without using 'var' definer
     */
}

var Animation = {
    init:function(container){
        Animation.container = container;

        Main.animationFinished();

    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki birimleri birbirine dönüştürünüz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendStatus({
            bottom:'50px',
            right:'160px'
        });

        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
        })

        Interaction.setRandomGenerator(4);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;

        if($('#questionDiv'))
            $('#questionDiv').remove();

        Interaction.flushInputs();
        Interaction.questionNum = Util.randomInteger(1, 10000);
        Interaction.ascDescPicker = Util.rand01();
        // cm-mm
        if(Interaction.randomNumber == 0){
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "cm";
                Interaction.answerUnit = "mm";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 10;
                if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Interaction.answer / Interaction.factor;
                }
                else{
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
            }
            else{
                Interaction.questionUnit = "mm";
                Interaction.answerUnit = "cm";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 10;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }
        // m-mm
        else if(Interaction.randomNumber == 1){
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "m";
                Interaction.answerUnit = "mm";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 1000;
                if(Interaction.questionNum % 100 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
                else if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 2)
                }
                else{
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 3)
                }
            }
            else{
                Interaction.questionUnit = "mm";
                Interaction.answerUnit = "m";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 1000;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }
        // m-cm
        else if(Interaction.randomNumber == 2){
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "m";
                Interaction.answerUnit = "cm";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 100;
                if(Interaction.questionNum % 100 == 0){
                    Interaction.question = Interaction.answer / 100;
                }
                else if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
                else {
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 2)
                }
            }
            else{
                Interaction.questionUnit = "cm";
                Interaction.answerUnit = "m";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 100;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }
        // m-km
        else{
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "km";
                Interaction.answerUnit = "m";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 1000;
                if(Interaction.questionNum % 100 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
                else if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 2)
                }
                else{
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 3)
                }
            }
            else{
                Interaction.questionUnit = "m";
                Interaction.answerUnit = "km";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 1000;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }

        // creating html elements
        if(Interaction.ascDescPicker == 1){

            Interaction.appendInput({
                width: '54px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '90px',
                top: "8px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '54px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '90px',
                top: "52px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '62px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '204px',
                top: "30px",
                fontSize: '20px',
            });

            $(Interaction.inputs[0]).attr('maxlength', '5')
            $(Interaction.inputs[1]).attr('maxlength', '5')
            $(Interaction.inputs[2]).attr('maxlength', '5')

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "114px")
                .css("top", "72px")
                .css("width", "280px")
                .css("height", "100px")
                .css("font-size", 20)

            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "106px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("right", "200px")
                .css("top", "38px")
                .css("text-align", "right");
            $('#questionN').html(""+Interaction.question+" "+Interaction.questionUnit+"  =  ");

            $('#questionDiv').append('<div id="line1"></div>');
            $('#line1').css("position","absolute")
                .css("left", "88px")
                .css("top", "46px")
                .css("width", "60px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");

            $('#questionDiv').append('<p id="questionU" ><p/>');
            $('#questionU').css("width", "58")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "148px")
                .css("top", "38px")
                .css("text-align", "center");
            $('#questionU').html(" "+Interaction.answerUnit+"  =  ");

            $('#questionDiv').append('<p id="questionU2" ><p/>');
            $('#questionU2').css("width", "28")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "274px")
                .css("top", "38px")
                .css("text-align", "left");
            $('#questionU2').html(" "+Interaction.answerUnit);
        }
        else{

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '88px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '54px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '172px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '62px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '286px',
                top: "32px",
                fontSize: '20px',
            });

            $(Interaction.inputs[0]).attr('maxlength', '5')
            $(Interaction.inputs[1]).attr('maxlength', '5')
            $(Interaction.inputs[2]).attr('maxlength', '5')

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "100px")
                .css("top", "72px")
                .css("width", "280px")
                .css("height", "100px")
                .css("font-size", 20)

            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "106px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("right", "200px")
                .css("top", "38px")
                .css("text-align", "right");
            $('#questionN').html(""+Interaction.question+" "+Interaction.questionUnit+"  =  ");

            $('#questionDiv').append('<p id="cross1" >x</p>');
            $('#cross1')
                .css("position", "absolute")
                .css("left", "156px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU" ><p/>');
            $('#answerU').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "232px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#answerU').html(""+Interaction.answerUnit);

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2')
                .css("position", "absolute")
                .css("left", "268px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU2" ><p/>');
            $('#answerU2').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "356px")
                .css("top", "38px")
                .css("text-align", "center");
            $('#answerU2').html(""+Interaction.answerUnit);
        }
    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        if(Interaction.ascDescPicker == 1){
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseInt(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseFloat(ans33);

            Interaction.answer1 = Interaction.question;
            Interaction.answer2 = Interaction.divider;
            Interaction.answer3 = Interaction.question/Interaction.divider;
            if(ans11 == Interaction.answer1 && ans22 == Interaction.answer2 && ans33 == Interaction.answer3)
                return true;
            else
                return false;
        }
        else{
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseFloat(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseInt(ans33);

            Interaction.answer1 = parseFloat(Interaction.question.replace(/,/g, "."));
            Interaction.answer2 = Interaction.factor;
            Interaction.answer3 = Interaction.answer1 * Interaction.answer2;

            if(ans11 == Interaction.answer1 && ans22 == Interaction.answer2 && ans33 == Interaction.answer3)
                return true;
            else
                return false;

        }
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){

        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        if(Interaction.ascDescPicker == 1){
            Interaction.answer3 = Interaction.answer3.toString().replace(".", ",");
        }
        else{
            Interaction.answer1 = Interaction.answer1.toString().replace(".", ",")
        }

        Interaction.inputs[0].value = Interaction.answer1;
        Interaction.inputs[1].value = Interaction.answer2;
        Interaction.inputs[2].value = Interaction.answer3;
        Interaction.inputs[0].style.color = "green";
        Interaction.inputs[1].style.color = "green";
        Interaction.inputs[2].style.color = "green";

    }
}
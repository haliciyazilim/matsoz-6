function __Styles(){
    /*
     * write your styles here without using 'var' definer
     */
}

var Animation = {
    init:function(container){
        Animation.container = container;

        $(container).append('<img id="shrub" src="/assets/animations/sivilari_olcme/sivilari_olcme_01.jpg" />');
        $('#shrub')
            .css("position", "absolute")
            .css("left", "70px")
            .css("bottom", "10px");

        $(container).append('<img id="milk" src="/assets/animations/sivilari_olcme/sivilari_olcme_02.jpg" />');
        $('#milk')
            .css("position", "absolute")
            .css("left", "280px")
            .css("bottom", "10px");

        $(container).append('<img id="water" src="/assets/animations/sivilari_olcme/sivilari_olcme_03.jpg" />');
        $('#water')
            .css("position", "absolute")
            .css("left", "430px")
            .css("bottom", "10px");

        $(container).append('<img id="pitcher" src="/assets/animations/sivilari_olcme/pitcher_bos.jpg" />');
        $('#pitcher')
            .css("position", "absolute")
            .css("left", "610px")
            .css("bottom", "10px")

        setTimeout('$("#pitcher").attr("src", "/assets/animations/sivilari_olcme/pitcher_animation.gif")', 8500);

     //   setTimeout('$("#pitcher").attr("src", "/assets/animations/sivilari_olcme/pitcher_dolu.jpg")', 13000)

        AnimateHelper = new AnimationHelper({
            shrubOpacity: 0,
            milkOpacity: 0,
            waterOpacity: 0,
            pitcherOpacity: 0
        });

        Animation.onFrame = function(event) {
            $('#shrub').css("opacity", AnimateHelper.shrubOpacity);
            $('#milk').css("opacity", AnimateHelper.milkOpacity);
            $('#water').css("opacity", AnimateHelper.waterOpacity);
            $('#pitcher').css("opacity", AnimateHelper.pitcherOpacity);
        }

        AnimateHelper.animate({
            style: {
                shrubOpacity: 1,
            },
            duration: 1500,
            delay: 1000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                milkOpacity: 1,
            },
            duration: 1500,
            delay: 3000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                waterOpacity: 1,
            },
            duration: 1500,
            delay: 5000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                pitcherOpacity: 1,
            },
            duration: 1000,
            delay: 7000,
            animationType: 'easeInEaseOut',
            callback: function(){
                Main.animationFinished();
            }
        });

    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki dönüşümleri yapınız.');
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

        Interaction.setRandomGenerator(2);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        if($('#questionDiv'))
            $('#questionDiv').remove();
        Interaction.flushInputs();
        Interaction.randomNumber = randomNumber;

        Interaction.randNum = Util.randomInteger(1, 10000);

        if(Interaction.randomNumber == 0){
            Interaction.questionUnit = "mL";
            Interaction.answerUnit = "L";

            Interaction.question = Interaction.randNum;
            Interaction.answer = Interaction.question/100;

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '92px',
                top: "8px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '92px',
                top: "52px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '192px',
                top: "32px",
                fontSize: '20px',
            });

            $(Interaction.inputs[0]).attr('maxlength', '5')
            $(Interaction.inputs[1]).attr('maxlength', '5')
            $(Interaction.inputs[2]).attr('maxlength', '5')

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                        .css("left", "124px")
                        .css("top", "72px")
                        .css("width", "266px")
                        .css("height", "100")
                        .css("font-size", 20)
            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "60px")
                    .css("height", "30px")
                    .css("position", "absolute")
                    .css("top", "38px")
                    .css("right", "236px")
                    .css("text-align", "right")
              //  .css("border", "solid")

            $('#questionDiv').append('<p id="questionU" >mL<p/>');
            $('#questionU').css("width", "32")
                .css("height", "30")
                .css("position", "absolute")
                .css("left", "36px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal1" >=</p>');
            $('#equal1') .css("position", "absolute")
                .css("left", "72px")
                .css("top", "38px");

            $('#questionDiv').append('<div id="line1"></div>');
            $('#line1').css("position","absolute")
                .css("left", "92px")
                .css("top", "46px")
                .css("width", "62px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid")

            $('#questionDiv').append('<p id="answerU" >L<p/>');
            $('#answerU').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "148px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2').css("position", "absolute")
                .css("left", "176px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU2" >L<p/>');
            $('#answerU2').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "254px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionN').html(Interaction.question);
        }
        else{
            Interaction.questionUnit = "L";
            Interaction.answerUnit = "mL";

            Interaction.answer = Interaction.randNum;

            if(Interaction.randNum % 100 == 0){
                Interaction.question = Util.numberTurkishFloating(Interaction.answer/1000, 1)
            }
            else if(Interaction.randNum % 10 == 0){
                Interaction.question = Util.numberTurkishFloating(Interaction.answer/1000, 2)
            }
            else{
                Interaction.question = Util.numberTurkishFloating(Interaction.answer/1000, 3)
            }

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '89px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '174px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
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
                .css("left", "74px")
                .css("top", "72px")
                .css("width", "366px")
                .css("height", "100")
                .css("font-size", 20)
            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "60px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("right", "320px")
                .css("top", "38px")
                .css("text-align", "right");


            $('#questionDiv').append('<p id="questionU" >L<p/>');
            $('#questionU').css("width", "32px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("left", "42px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal1" >=</p>');
            $('#equal1') .css("position", "absolute")
                .css("left", "70px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="cross1" >x</p>');
            $('#cross1').css("position", "absolute")
                .css("left", "158px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU" >mL<p/>');
            $('#answerU').css("width", "32")
                .css("height", "30")
                .css("position", "absolute")
                .css("left", "236px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2').css("position", "absolute")
                .css("left", "270px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU2" >mL<p/>');
            $('#answerU2').css("width", "32")
                .css("height", "30")
                .css("position", "absolute")
                .css("left", "354px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionN').html(Interaction.question);
        }

    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        if(Interaction.questionUnit == "L"){
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseFloat(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseInt(ans33);

            Interaction.answer1 = parseFloat(Interaction.question.replace(/,/g, "."));
            Interaction.answer2 = 1000;
            Interaction.answer3 = Interaction.answer1 * Interaction.answer2;

            if(ans11 == Interaction.answer1 && ans22 == Interaction.answer2 && ans33 == Interaction.answer3)
                return true;
            else
                return false;
        }
        else{
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseInt(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseFloat(ans33);

            Interaction.answer1 = Interaction.question;
            Interaction.answer2 = 1000;
            Interaction.answer3 = Interaction.answer1 / Interaction.answer2;

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
        if(Interaction.questionUnit == "L"){
            Interaction.answer1 = Interaction.answer1.toString().replace(".", ",");
        }
        else{
            Interaction.answer3 = Interaction.answer3.toString().replace(".", ",");
        }

        Interaction.inputs[0].value = Interaction.answer1;
        Interaction.inputs[1].value = Interaction.answer2;
        Interaction.inputs[2].value = Interaction.answer3;
        Interaction.inputs[0].style.color = "green";
        Interaction.inputs[1].style.color = "green";
        Interaction.inputs[2].style.color = "green";

    }
}
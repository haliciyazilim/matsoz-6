function __Styles(){

    interactionShapesFillColor = "#bfe8ef";
    interactionShapesStrokeColor="#255b63"
}

var Animation = {
    init:function(container){
        Animation.container = container;

        var emptyRect, segmentedRect, rectt, rectt2;
        //var fillColor = "#DD7500";
        var fillColor = "#FFDEAD";

        // empty 4
        emptyRect = new Path.Rectangle(new Point(88.5, 50.5), new Size(80, 80));
        emptyRect.strokeColor = '#000';
        emptyRectstrokeWidth = 1;
        // empty-segmented 4
        segmentedRect = new Path.SegmentedRectangle(88.5, 50.5, 80, 80, 2, 2, 0, fillColor);
        // filled-segmented 4
        rectt = new Path.SegmentedRectangle(88.5, 50.5, 80, 80, 2, 2, 1, fillColor);
        // empty-segmented 100
        rectt2 = new Path.SegmentedRectangle(548.5, 24.5, 120, 120, 10, 10, 0, fillColor);
        // filled-segmented 100
        rectt3 = new Path.SegmentedRectangle(548.5, 24.5, 120, 120, 10, 10, 25, fillColor);


        $(container).append('<div id="exampleHolderDiv"></div>');
        $('#exampleHolderDiv').css("position", "absolute")
            .css("left", "208px")
            .css("top", "58px")
            .css("width", "330")
            .css("height", "100")

        // firstFractionDiv
        $('#exampleHolderDiv').append('<div id="firstFracDiv"></div>');
        $('#firstFracDiv').css("position", "absolute")
            .css("left", "4px")
            .css("top", "8px")
            .css("width", "44")
            .css("height", "80")

        $('#firstFracDiv').append('<p id="firstFracNom" >1</p>');
        $('#firstFracNom').css("position", "absolute")
            .css("font-size", 18)
            .css("top", "16px")
            .css("left", "16px");

        $('#firstFracDiv').append('<div id="firstFracLine"></div>')
        $('#firstFracLine').css("position","absolute")
            .css("left", "4px")
            .css("top", "40px")
            .css("width", "36px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");

        $('#firstFracDiv').append('<p id="firstFracDenom" >4</p>');
        $('#firstFracDenom').css("position", "absolute")
            .css("font-size", 18)
            .css("top", "46px")
            .css("left", "16px");

        // secondFractionDiv

        $('#exampleHolderDiv').append('<div id="secondFracDiv"></div>');
        $('#secondFracDiv').css("position", "absolute")
            .css("left", "52px")
            .css("top", "8px")
            .css("width", "82")
            .css("height", "80")

        $('#secondFracDiv').append('<p id="firstEq" >=</p>');
        $('#firstEq').css("position", "absolute")
            .css("left", "0px")
            .css("top", "32px")
            .css("font-size", 18);

        $('#secondFracDiv').append('<p id="secondFracNom" >1 x 25</p>');
        $('#secondFracNom').css("position", "absolute")
            .css("font-size", 18)
            .css("top", "16px")
            .css("left", "20px");

        $('#secondFracDiv').append('<div id="secondFracLine"></div>')
        $('#secondFracLine').css("position","absolute")
            .css("left", "18px")
            .css("top", "40px")
            .css("width", "60px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");

        $('#secondFracDiv').append('<p id="secondFracDenom" >4 x 25</p>');
        $('#secondFracDenom').css("position", "absolute")
            .css("font-size", 18)
            .css("top", "46px")
            .css("left", "20px");

        // thirdFractionDiv

        $('#exampleHolderDiv').append('<div id="thirdFracDiv"></div>');
        $('#thirdFracDiv').css("position", "absolute")
            .css("left", "138px")
            .css("top", "8px")
            .css("width", "58")
            .css("height", "80")

        $('#thirdFracDiv').append('<p id="secondEq" >=</p>');
        $('#secondEq').css("position", "absolute")
            .css("left", "0px")
            .css("top", "32px")
            .css("font-size", 18);

        $('#thirdFracDiv').append('<p id="thirdFracNom" >25</p>');
        $('#thirdFracNom').css("position", "absolute")
            .css("font-size", 18)
            .css("top", "16px")
            .css("left", "26px");

        $('#thirdFracDiv').append('<div id="thirdFracLine"></div>')
        $('#thirdFracLine').css("position","absolute")
            .css("left", "18px")
            .css("top", "40px")
            .css("width", "36px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");

        $('#thirdFracDiv').append('<p id="thirdFracDenom">100</p>');
        $('#thirdFracDenom').css("position", "absolute")
            .css("font-size", 18)
            .css("top", "46px")
            .css("left", "20px");

        // fracDiv

        $('#exampleHolderDiv').append('<div id="fracDiv"></div>');
        $('#fracDiv').css("position", "absolute")
            .css("left", "200px")
            .css("top", "8px")
            .css("width", "58")
            .css("height", "80")

        $('#fracDiv').append('<p id="thirdEq" >=</p>');
        $('#thirdEq').css("position", "absolute")
            .css("left", "0px")
            .css("top", "32px")
            .css("font-size", 18);

        $('#fracDiv').append('<p id="fracc" >0,25</p>');
        $('#fracc').css("position", "absolute")
            .css("left", "18px")
            .css("top", "28px")
            .css("font-size", 18);

        // percentDiv

        $('#exampleHolderDiv').append('<div id="percentDiv"></div>');
        $('#percentDiv').css("position", "absolute")
            .css("left", "262px")
            .css("top", "8px")
            .css("width", "58")
            .css("height", "80")

        $('#percentDiv').append('<p id="fourthEq" >=</p>');
        $('#fourthEq').css("position", "absolute")
            .css("left", "0px")
            .css("top", "30px")
            .css("font-size", 18);

        $('#percentDiv').append('<p id="percc" >%25</p>');
        $('#percc').css("position", "absolute")
            .css("left", "18px")
            .css("top", "28px")
            .css("font-size", 18);


        // percentageTextDiv

        $('#exampleHolderDiv').append('<div id="percentageTextDiv">yüzde yirmi beş</div>');
        $('#percentageTextDiv').css("position", "absolute")
            .css("width", "180px")
            .css("height", "20px")
            .css("font-size", 12)
            .css("left", "325px")
            .css("top", "112px")
            .css("text-align", "center");



        exampleHelper = {
            emptyRectOpacity: 0,
            segmentedRectOpacity: 0,
            firstRectOpacity: 0,
            firstFracOpacity: 0,
            secondFracOpacity: 0,
            thirdFracOpacity: 0,
            fracOpacity: 0,
            percentOpacity: 0,
            secondRectOpacity: 0,
            percentTextOpacity:0
        };

        exampleHelper.animate = Item.prototype.animate;

        Animation.onFrame = function(event){
            //	emptyRect.opacity = exampleHelper.emptyRectOpacity;
            //	segmentedRect.opacity = exampleHelper.segmentedRectOpacity;
            //	rectt.opacity = exampleHelper.firstRectOpacity;
            $('#firstFracDiv').css("opacity", exampleHelper.firstFracOpacity);
            $('#secondFracDiv').css("opacity", exampleHelper.secondFracOpacity);
            $('#thirdFracDiv').css("opacity", exampleHelper.thirdFracOpacity);
            $('#fracDiv').css("opacity", exampleHelper.fracOpacity);
            $('#percentDiv').css("opacity", exampleHelper.percentOpacity);
            //	rectt2.opacity = exampleHelper.secondRectOpacity;
            $('#percentageTextDiv').css("opacity", exampleHelper.percentTextOpacity);
        }

        emptyRect.opacity = 0;
        segmentedRect.opacity = 0;
        rectt.opacity = 0;
        rectt2.opacity = 0;
        rectt3.opacity = 0;

        emptyRect.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 500,
            animationType: 'easeInOutQuad'
        });

        segmentedRect.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 1500,
            animationType: 'easeInOutQuad',
            callback: function () {
                emptyRect.remove();
            }
        });

        rectt.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 2500,
            animationType: 'easeInOutQuad',
            callback: function () {
                segmentedRect.remove();
            }
        });

        exampleHelper.animate({
            style: {
                firstFracOpacity: 1
            },
            duration: 1500,
            delay: 4000,
            animationType: 'easeInOutQuad'
            //	animationType: 'easeOut'
        });

        exampleHelper.animate({
            style: {
                secondFracOpacity: 1
            },
            duration: 1500,
            delay: 5500,
            animationType: 'easeInOutQuad'
            //	animationType: 'easeOut'
        });

        exampleHelper.animate({
            style: {
                thirdFracOpacity: 1
            },
            duration: 1500,
            delay: 7000,
            animationType: 'easeInOutQuad'
            //	animationType: 'easeOut'
        });

        exampleHelper.animate({
            style: {
                fracOpacity: 1
            },
            duration: 1500,
            delay: 8500,
            animationType: 'easeInOutQuad'
            //	animationType: 'easeOut'
        });

        exampleHelper.animate({
            style: {
                percentOpacity: 1
            },
            duration: 1500,
            delay: 10000,
            animationType: 'easeInOutQuad'
        });

        rectt2.animate({
            style: {
                opacity: 1
            },
            duration: 1500,
            delay: 11500,
            animationType: 'easeInOutQuad',
        });

        rectt3.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 13000,
            animationType: 'easeInOutQuad',
            callback: function () {
                rectt2.remove();
            }
        });

        exampleHelper.animate({
            style: {
                percentTextOpacity: 1
            },
            duration: 1000,
            delay: 14000,
            animationType: 'easeInOutQuad',
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
        Main.setObjective('Yanda verilen renkli bölgeyi kesir, ondalık kesir ve yüzde olarak yazınız.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        $(container).append('<div id="questionDiv"></div>');
        $('#questionDiv').css("position", "absolute")
            .css("left", "54px")
            .css("top", "152px")
            .css("width", "266")
            .css("height", "100")

        $('#questionDiv').append('<div id="line1"></div>');
        $('#line1').css("position","absolute")
            .css("left", "4px")
            .css("top", "52px")
            .css("width", "36px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid")

        $('#questionDiv').append('<div id="line2"></div>');
        $('#line2').css("position","absolute")
            .css("left", "64px")
            .css("top", "52px")
            .css("width", "36px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid")

        $('#questionDiv').append('<p id="equal1" >=</p>');
        $('#equal1').css("font-size", 18)
            .css("position", "absolute")
            .css("left", "46px")
            .css("top", "44px");

        $('#questionDiv').append('<p id="equal2" >=</p>');
        $('#equal2').css("font-size", 18)
            .css("position", "absolute")
            .css("left", "106px")
            .css("top", "44px");

        $('#questionDiv').append('<p id="equal3" >=</p>');
        $('#equal3').css("font-size", 18)
            .css("position", "absolute")
            .css("left", "184px")
            .css("top", "44px");

        $('#questionDiv').append('<p id="zero" >0,</p>');
        $('#zero').css("font-size", 18)
            .css("position", "absolute")
            .css("left", "122px")
            .css("top", "42px");

        $('#questionDiv').append('<p id="percent_sign" >%</p>');
        $('#percent_sign').css("font-size", 18)
            .css("position", "absolute")
            .css("left", "202px")
            .css("top", "42px");

        $(container).append('<div id="percentage"></div>');
        $('#percentage').css("position", "absolute")
            .css("width", "150px")
            .css("height", "20px")
            .css("font-size", 12)
            .css("left", "386px")
            .css("top", "142px")
            .css("text-align", "center");

        $('#questionDiv').append('<p id="hundred" >100<p/>');
        $('#hundred').css("width", "32")
            .css("height", "30")
            .css("box-sizing","border-box")
            .css("padding", "0")
            .css("font-size", 20)
            .css("position", "absolute")
            .css("left", "66px")
            .css("top", "64px")
            .css("text-align", "center")
            .css("border", "none");

        Interaction.appendStatus({
            bottom:'30px',
            right:'160px'
        });
        Interaction.appendButton({
            bottom:'20px',
            right:'40px'
        });

        // input1
        Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            position: 'absolute',
            left: '6px',
            top: "14px",
            fontSize: '20px',
        });

        // input2
        Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            position: 'absolute',
            left: '6px',
            top: "57px",
            fontSize: '20px',
        });

        // input3
        Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            position: 'absolute',
            left: '66px',
            top: "14px",
            fontSize: '20px',
        });

        // input4
        Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            position: 'absolute',
            left: '146px',
            top: "36px",
            fontSize: '20px',
        });

        // input5
        Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            position: 'absolute',
            left: '224px',
            top: "36px",
            fontSize: '20px',
        });

        $(Interaction.inputs[0]).attr('maxlength', '2')
        $(Interaction.inputs[1]).attr('maxlength', '2')
        $(Interaction.inputs[2]).attr('maxlength', '2')
        $(Interaction.inputs[3]).attr('maxlength', '2')
        $(Interaction.inputs[4]).attr('maxlength', '2')

        $('#questionDiv').append(Interaction.inputs[0])
                        .append(Interaction.inputs[1])
                        .append(Interaction.inputs[2])
                        .append(Interaction.inputs[3])
                        .append(Interaction.inputs[4])

        Interaction.setRandomGenerator(3)
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;
        if(Interaction.rect)
            Interaction.rect.remove();
        if(Interaction.rect2)
            Interaction.rect2.remove();
        if(Interaction.rect3)
            Interaction.rect3.remove();
        if(Interaction.circ)
            Interaction.circ.remove();
        $('#percentage').html('');
        for(var i = 0; i < Interaction.inputs.length; i++)
            Interaction.inputs[i].style.color = "black";
        do
            Interaction.denom = Math.floor(Math.random() * 20) + 2;
            while(Interaction.denom != 2 && Interaction.denom != 4 && Interaction.denom != 5 && Interaction.denom != 10 && Interaction.denom != 20)

        Interaction.nom = Util.randomInteger(1, Interaction.denom);
        if(randomNumber == 0){
            Interaction.circ = new Path.SegmentedCircle(new Point(118.5, 76.5), 66, Interaction.nom, Interaction.denom, interactionShapesFillColor);
            Interaction.circ.strokeColor = interactionShapesStrokeColor;
        }
        else if(randomNumber == 1){
            if(Interaction.denom == 20){
                Interaction.rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, 4, 5, Interaction.nom, interactionShapesFillColor);
            }
            else if(Interaction.denom == 10){
                Interaction.rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, 2, 5, Interaction.nom, interactionShapesFillColor);
            }
            else if(Interaction.denom == 5){
                Interaction.rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, 1, 5, Interaction.nom, interactionShapesFillColor);
            }
            else{
                Interaction.rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, Interaction.denom/2, 2, Interaction.nom, interactionShapesFillColor);
            }
            Interaction.rect2.strokeColor = interactionShapesStrokeColor;
        }
        else{
            if(Interaction.denom == 20){
                Interaction.rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80, 120, 4, 5, Interaction.nom, interactionShapesFillColor);
            }
            else if(Interaction.denom == 10){
                Interaction.rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80, 120, 2, 5, Interaction.nom, interactionShapesFillColor);
            }
            else if(Interaction.denom == 5){
                Interaction.rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80.5, 120, 1, 5, Interaction.nom, interactionShapesFillColor);
            }
            else{
                Interaction.rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80, 120, Interaction.denom/2, 2, Interaction.nom, interactionShapesFillColor);
            }
            Interaction.rect3.strokeColor = interactionShapesStrokeColor;
        }
        Interaction.rect = new Path.SegmentedRectangle(400.5, 15.5, 120, 120, 10, 10, 0);
        Interaction.rect.strokeColor = interactionShapesStrokeColor;
    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        Interaction.ans1 = Interaction.nom;
        Interaction.ans2 = Interaction.denom;
        Interaction.ans3 = Interaction.nom *(100 / Interaction.denom);
        Interaction.ans5 = Interaction.ans3;
        if(Interaction.ans3 < 10)
            Interaction.ans4 = "0"+Interaction.ans3;
        else
            Interaction.ans4 = Interaction.ans3;

        if(Interaction.ans4 % 10 == 0)
            Interaction.ans4 /= 10;

        if(Interaction.ans1 == value[0] && Interaction.ans2 == value[1] && Interaction.ans3 == value[2] && (Interaction.ans4 == value[3] || value[3] == Interaction.ans4 * 10) && Interaction.ans5 == value[4])
            return true;
        else
            return false;
    },
    onCorrectAnswer : function(){
        for(var i = 0; i < Interaction.ans3; i ++)
            Interaction.rect.children[i].fillColor = interactionShapesFillColor;
        var firstStr = Interaction.ans3.toString();
        var secondNum = firstStr.charAt(1);
        var firstNum = firstStr.charAt(0);
        if(Interaction.ans3 == 5)
            var percent = Interaction.ConvertPercentage("0", "5");
        else
            var percent = Interaction.ConvertPercentage(firstNum, secondNum);
        $('#percentage').html("yüzde "+percent);
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        Interaction.inputs[0].value = Interaction.ans1;
        Interaction.inputs[1].value = Interaction.ans2;
        Interaction.inputs[2].value = Interaction.ans3;
        Interaction.inputs[3].value = Interaction.ans4;
        Interaction.inputs[4].value = Interaction.ans5;

        for(var i = 0; i < Interaction.inputs.length; i++)
            Interaction.inputs[i].style.color = "green";

        for(var i = 0; i < Interaction.ans3; i ++)
            Interaction.rect.children[i].fillColor = interactionShapesFillColor;
        var firstStr = Interaction.ans3.toString();
        var secondNum = firstStr.charAt(1);
        var firstNum = firstStr.charAt(0);
        if(Interaction.ans3 == 5)
            var percent = Interaction.ConvertPercentage("0", "5");
        else
            var percent = Interaction.ConvertPercentage(firstNum, secondNum);
        $('#percentage').html("yüzde "+percent);
    },

    ConvertPercentage : function(firstNum, secondNum){
        var percent;

        switch(firstNum)
        {
            case "0":
                percent = "";
                break;
            case "1":
                percent = "on";
                break;
            case "2":
                percent = "yirmi";
                break;
            case "3":
                percent = "otuz";
                break;
            case "4":
                percent = "kırk";
                break;
            case "5":
                percent = "elli";
                break;
            case "6":
                percent = "atmış";
                break;
            case "7":
                percent = "yetmiş";
                break;
            case "8":
                percent = "seksen";
                break;
            case "9":
                percent = "doksan";
                break;
        }

        switch(secondNum)
        {
            case "0":
                percent = percent+"";
                break;
            case "1":
                percent = percent+" bir";
                break;
            case "2":
                percent = percent+" iki";
                break;
            case "3":
                percent = percent+" üç";
                break;
            case "4":
                percent = percent+" dört";
                break;
            case "5":
                percent = percent+" beş";
                break;
            case "6":
                percent = percent+" altı";
                break;
            case "7":
                percent = percent+" yedi";
                break;
            case "8":
                percent = percent+" sekiz";
                break;
            case "9":
                percent = percent+" dokuz";
                break;
        }
        return percent;
    },
};
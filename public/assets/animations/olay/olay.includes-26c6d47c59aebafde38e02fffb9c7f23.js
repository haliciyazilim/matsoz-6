function __Styles(){
	ballStyle = {
        strokeColor : "#9b763d",
        fillColor : "#f2c885"
    };
    ballTextColor = "#8b5400";

    animDivStyle = {
        position:'absolute',
        top:'20px',
        left:'300px',
        height:'160px',
        width:'460px',
        fontSize:'16px'
    };
    firstDivStyle = {
        position:'absolute',
        top:'0px',
        right:'0px',
        opacity:0,
        padding:0,
        margin:0
    };
    secondDivStyle = {
        position:'absolute',
        top:'36px',
        right:'0px',
        opacity:0,
        padding:0,
        margin:0
    };
    thirdDivStyle = {
        position:'absolute',
        top:'72px',
        left:'0px'
    };
    fourthDivStyle = {
        position:'absolute',
        top:'140px',
        left:'70px',
        opacity:0
    };

    optionsStyle = {
        position:'absolute',
        fontSize:'16px',
        fontWeight:'bold',
        color:'#000',
        cursor:'pointer',
        width:'300px'
    };

    optionsImageContainer = {
        position:'relative',
        width:'32px',
        height:'32px',
        float:'left',
        top:'-8px',
        marginRight:'10px',
        backgroundImage:'url(/assets/radio_buttons.png)',
        backgroundPosition:'0px 0px'
    };
    selectedOptionStyle = {
        color:'#235394'
    };

    trueOptionStyle = {
        color:'#309423'
    };

    falseOptionStyle = {
        color:'#942323'
    };

    imagesDivStyle = {
        position:'absolute',
        top:'20px',
        left:'20px',
        width:'248px',
        height:'233px',
        border:'1px solid',
    };

    questionDivStyle = {
        position:'absolute',
        top:'20px',
        left:'320px',
        width:'250px',
        height:'80px',
        fontSize:'20px',
    //    border:'1px solid'
    }
}
;
var animateNumber = function(isOdd){

    var lastIndex, total;
    if(isOdd == undefined || isNaN(isOdd)){
        isOdd = 0;
    }
    if(isOdd){
        lastIndex = 5;
        total = 0;
    }
    else{
        lastIndex = 4;
        total = 1;
    }

    for(var i = 0; i < lastIndex; i++){
        var pos = Animation.balls.children[2*i+total].position;
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y-40),
            },
            duration:500,
            delay:0,
            animationType:'easeOut',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y),
            },
            duration:400,
            delay:500,
            animationType:'easeIn',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y-25),
            },
            duration:400,
            delay:900,
            animationType:'easeOut',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y),
            },
            duration:300,
            delay:1300,
            animationType:'easeIn',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y-15),
            },
            duration:300,
            delay:1600,
            animationType:'easeOut',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y),
            },
            duration:200,
            delay:1900,
            animationType:'easeIn',
        });
    }
};

var Question = Class.extend({
    init:function(type,qIndex){
        switch(type){
            case Question.DICE:
                this.question = Question.diceArray[qIndex];
                break;
            case Question.COIN:
                this.question = Question.coinArray[qIndex];
                break;
            case Question.WHEEL:
                this.question = Question.wheelArray[qIndex];
                break;
            case Question.WHEEL2:
                this.question = Question.wheel2Array[qIndex];
                break;
            case Question.WHEEL3:
                this.question = Question.wheel3Array[qIndex];
                break;
            case Question.POUCH:
                this.question = Question.pouchArray[qIndex];
                break;
            case Question.POUCH2:
                this.question = Question.pouch2Array[qIndex];
                break;
            case Question.POUCH3:
                this.question = Question.pouch3Array[qIndex];
                break;
        }
    }
});

Question.DICE = 0;
Question.COIN = 1;
Question.WHEEL = 2;
Question.WHEEL2 = 3;
Question.WHEEL3 = 4;
Question.POUCH = 5;
Question.POUCH2 = 6;
Question.POUCH3 = 7;

Question.diceArray = [];
Question.diceArray[0] = "7 gelme olasılığı";    // impossible event
Question.diceArray[1] = "0\'dan büyük 7\'den küçük sayı gelme olasılığı";   // certain event
Question.diceArray[2] = "\"Tek sayı gelme olasılığı\" ve \"Çift sayı gelme olasılığı\"";    // complement event
Question.diceArray[3] = "\"4 gelme olasılığı\" ve \"Tek sayı gelme olasılığı\"";    // not complement event

Question.coinArray = [];
Question.coinArray[0] = "Yazı ya da tura gelmeme olasılığı";    // impossible event
Question.coinArray[1] = "Yazı ya da tura gelme olasılığı";      // certain event
Question.coinArray[2] = "\"Yazı gelme olasılığı\" ve \"Tura gelme olasılığı\"";     // complement event
Question.coinArray[3] = "\"Yazı gelme olasılığı\" ve \"Tura gelmeme olasılığı\"";  // not complement event

Question.wheelArray = [];
Question.wheelArray[0] = "Yeşil gelme olasılığı";   // impossible event
Question.wheelArray[1] = "Kırmızı, mavi, sarı renklerden birinin gelme olasılığı";  // certain event
Question.wheelArray[2] = "\"Kırmızı gelme olasılığı\" ve \"Mavi gelme olasılığı\" ve \"Sarı gelme olasılığı\"";     // complement event
Question.wheelArray[3] = "\"Kırmızı gelme olasılığı\" ve \"Mavi gelme olasılığı\"";     // not complement event

Question.wheel2Array = [];
Question.wheel2Array[0] = "Kırmızı gelme olasılığı";    // impossible event
Question.wheel2Array[1] = "Yeşil, mor, turuncu renklerden birinin gelme olasılığı";  // certain event
Question.wheel2Array[2] = "\"Yeşil gelme olasılığı\" ve \"Mor gelme olasılığı\" ve \"Turuncu gelme olasılığı\"";   // complement event
Question.wheel2Array[3] = "\"Yeşil gelme olasılığı\" ve \"Mor gelme olasılığı\"";

Question.wheel3Array = [];
Question.wheel3Array[0] = "Sarı gelme olasılığı";       // impossible event
Question.wheel3Array[1] = "Pembe, beyaz, gri renklerden birinin gelme olasılığı";  // certain event
Question.wheel3Array[2] = "\"Pembe gelme olasılığı\" ve \"Beyaz gelme olasılığı\" ve \"Gri gelme olasılığı\"";  // complement event
Question.wheel3Array[3] = "\"Pembe gelme olasılığı\" ve \"Beyaz gelme olasılığı\"";  // not complement event

Question.pouchArray = [];
Question.pouchArray[0] = "Kırmızı top çekme olasılığı";     // impossible event
Question.pouchArray[1] = "Mor, pembe, yeşil renk toplardan birini çekme olasılığı";     // certain event
Question.pouchArray[2] = "\"Mor top çekme olasılığı\" ve \"Pembe top çekme olasılığı\" ve \"Yeşil top çekme olasılığı\"";    // complement event
Question.pouchArray[3] = "\"Mor top çekme olasılığı\" ve \"Pembe top çekme olasılığı\"";      // not complement event

Question.pouch2Array = [];
Question.pouch2Array[0] = "Yeşil top çekme olasılığı";      // impossible event
Question.pouch2Array[1] = "Mavi, kahverengi, turuncu renk toplardan birini çekme olasılığı";    // certain event
Question.pouch2Array[2] = "\"Mavi top çekme olasılığı\" ve \"Kahverengi top çekme olasılığı\" ve \"Turuncu top çekme olasılığı";    // complement event
Question.pouch2Array[3] = "\"Mavi top çekme olasılığı\" ve \"Kahverengi top çekme olasılığı\"";     // not complement event

Question.pouch3Array = [];
Question.pouch3Array[0] = "Sarı top çekme olasılığı";       // impossible event
Question.pouch3Array[1] = "Kırmızı, gri, beyaz renk toplardan birini çekme olasılığı";      // certain event
Question.pouch3Array[2] = "\"Kırmızı top çekme olasılığı\" ve \"Gri top çekme olasılığı\" ve \"Beyaz top çekme olasılığı\"";    // complement event
Question.pouch3Array[3] = "\"Kırmızı top çekme olasılığı\" ve \"Gri top çekme olasılığı\"";     // not complement event
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var firstDivStart = animStart+2000;
        var secondDivStart = firstDivStart+2000;
        var firstFracStart = secondDivStart+2000;
        var secondFracStart = firstFracStart+4000;
        var fourthDivStart = secondFracStart+4000;

        Animation.balls = new Group();

        for(var i = 0; i < 9; i++){
            var ballANDTextGroup = new Group();

            var ball = new Path.Circle(new Point(14+31*i, 94), 13);
            ball.style = ballStyle;

            var text = new PointText(new Point(14+31*i, 99));
            text.justification = "center";
            text.strokeWidth = "1px"
            text.strokeColor = ballTextColor;
            text.content = i+1;
            text.fillColor = ballTextColor;

            ballANDTextGroup.addChild(ball);
            ballANDTextGroup.addChild(text);

            Animation.balls.addChild(ballANDTextGroup);
        }

        Animation.balls.opacity = 0;

        var animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle});

        var firstDiv = Util.dom({parent:animDiv, tag:'div', css:firstDivStyle, html:'0\'dan büyük 10\'dan küçük sayı çekme olasılığı = <b>1</b>&nbsp;<span style="color:red;">kesin olay</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'});
        var secondDiv = Util.dom({parent:animDiv, tag:'div', css:secondDivStyle, html:'10 çekme olasılığı = <b>0</b>&nbsp;<span style="color:red;">imkânsız olay</span>'});
        var thirdDiv = Util.dom({parent:animDiv, tag:'div', css:thirdDivStyle, html:'<div id="fT" style="float:left;position:relative;top:17px;opacity:0;width:190px;text-align:right;">Çift sayı çekme olasılığı = </div>' +
            '<div id="firstFrac" style="position:static;float:left;opacity:0;width:30px;height:51px;padding:0;margin:0;margin-left:4px;line-height:25px;">' +
                '<div id="nom1"></div><div id="line1"></div><div id="denom1"></div></div>' +
            '<div id="sT" style="position:relative;top:17px;float:left;opacity:0;width:190px;text-align:right;margin-left:4px;">Tek sayı çekme olasılığı = </div>' +
            '<div id="secondFrac" style="position:static;float:left;opacity:0;width:30px;height:51px;padding:0;margin:0;margin-left:4px;line-height:25px;">' +
                '<div id="nom2"></div><div id="line2"></div><div id="denom2"></div></div>'});

        $('#line1').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom1').css("text-align", "center")
            .css("height", "25px");
        $('#nom1').html(4);

        $('#denom1').css("text-align", "center")
            .css("height", "25px");
        $('#denom1').html(9);

        $('#line2').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom2').css("text-align", "center")
            .css("height", "25px");
        $('#nom2').html(5);

        $('#denom2').css("text-align", "center")
            .css("height", "25px");
        $('#denom2').html(9);

        var fourthDiv = Util.dom({parent:animDiv, tag:'div', css:fourthDivStyle, html:'<span style="color:red;">Tümleyen olay</span>' +
            '<div id="thirdFrac" style="position:absolute;opacity:0;top:-17px;left:140px;width:50px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom3"></div><div id="line3"></div><div id="denom3"></div></div>' +
            '<div id="tfFrac" style="position:absolute;top:-17px;left:110px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
            '<div id="nomtf"></div><div id="linetf"></div><div id="denomtf"></div></div>' +
            '<span id="pls" style="position:absolute;left:146px">+</span>' +
            '<div id="tsFrac" style="position:absolute;top:-17px;left:160px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
            '<div id="nomts"></div><div id="linets"></div><div id="denomts"></div></div>' +
            '<span id="eqq" style="opacity:0;position:absolute;left:200px">=</span>' +
            '<div id="fourthFrac" style="opacity:0;position:absolute;top:-17px;left:220px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom4"></div><div id="line4"></div><div id="denom4"></div></div>' +
            '<span id="last" style="opacity:0;position:absolute;left:260px;width:30px;">= <b>1</b></span>'});

        $('#line3').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom3').css("text-align", "center")
            .css("height", "25px");
        $('#nom3').html("4 + 5");

        $('#denom3').css("text-align", "center")
            .css("height", "25px");
        $('#denom3').html(9);

        $('#linetf').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nomtf').css("text-align", "center")
            .css("height", "25px");
        $('#nomtf').html(4);

        $('#denomtf').css("text-align", "center")
            .css("height", "25px");
        $('#denomtf').html(9);

        $('#linets').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nomts').css("text-align", "center")
            .css("height", "25px");
        $('#nomts').html(5);

        $('#denomts').css("text-align", "center")
            .css("height", "25px");
        $('#denomts').html(9);

        $('#line4').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom4').css("text-align", "center")
            .css("height", "25px");
        $('#nom4').html(9);

        $('#denom4').css("text-align", "center")
            .css("height", "25px");
        $('#denom4').html(9);

        Animation.balls.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:animStart,
            animationType:'easeInOutQuad'
        });

        $(firstDiv).delay(firstDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $(secondDiv).delay(secondDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#fT').delay(firstFracStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#firstFrac').delay(firstFracStart).animate({opacity:1},1000,'easeInOutQuad');
        AnimationManager.delay(function(){animateNumber(0)},firstFracStart+1000);
        $('#sT').delay(secondFracStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#secondFrac').delay(secondFracStart).animate({opacity:1},1000,'easeInOutQuad');
        AnimationManager.delay(function(){animateNumber(1)},secondFracStart+1000);
        $(fourthDiv).delay(fourthDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#tfFrac').delay(fourthDivStart+2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#tsFrac').delay(fourthDivStart+2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#pls').delay(fourthDivStart+2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#thirdFrac').delay(fourthDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqq').delay(fourthDivStart+3500).animate({opacity:1},1000,'easeInOutQuad');
        $('#fourthFrac').delay(fourthDivStart+3500).animate({opacity:1},1000,'easeInOutQuad');
        $('#last').delay(fourthDivStart+5000).animate({opacity:1},1000,'easeInOutQuad', function(){Main.animationFinished(1000);})
    }
}
;
var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        {
            id:'radio_buttons',
            src:'/assets/radio_buttons.png'
        },
        {
            id:'dice',
            src:'/assets/animations/olay/olay_etki_01.jpg'
        },
        {
            id:'coin',
            src:'/assets/animations/olay/olay_etki_02.jpg'
        },
        {
            id:'wheel',
            src:'/assets/animations/olay/olay_etki_03.jpg'
        },
        {
            id:'wheel2',
            src:'/assets/animations/olay/olay_etki_03_1.jpg'
        },
        {
            id:'wheel3',
            src:'/assets/animations/olay/olay_etki_03_2.jpg'
        },
        {
            id:'pouch',
            src:'/assets/animations/olay/olay_etki_04.jpg'
        },
        {
            id:'pouch2',
            src:'/assets/animations/olay/olay_etki_04_1.jpg'
        },
        {
            id:'pouch3',
            src:'/assets/animations/olay/olay_etki_04_2.jpg'
        }

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki olayları tanımlayınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'15px',
            right:'250px',
            width:'300px',
            textAlign:'center'
        });

        Interaction.appendButton({
            bottom:'15px',
            right:'110px'
        });

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});

        Interaction.setRandomGenerator(8);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.cleanOptions();
        Interaction.trial = 1;
        Interaction.myPause = 0;
        Interaction.randomNumber = randomNumber;
        Interaction.randomNumber2 = Util.randomInteger(1,4);
        var referencePoint = new Point(100,100);
        Interaction.createOptions(referencePoint.add(250,0));
         var qIndex;

        if(Interaction.pp){
            Interaction.pp.remove();
        }

        switch(Interaction.randomNumber){
            case 0:
                Interaction.questionType = Question.DICE;
                Interaction.pp = new Raster('dice');
                Interaction.pp.position = new Point(144,136);
                break;
            case 1:
                Interaction.questionType = Question.COIN;
                Interaction.pp = new Raster('coin');
                Interaction.pp.position = new Point(144,136);
                break;
            case 2:
                Interaction.questionType = Question.WHEEL;
                Interaction.pp = new Raster('wheel');
                Interaction.pp.position = new Point(144,136);
                break;
            case 3:
                Interaction.questionType = Question.WHEEL2;
                Interaction.pp = new Raster('wheel2');
                Interaction.pp.position = new Point(144,136);
                break;
            case 4:
                Interaction.questionType = Question.WHEEL3;
                Interaction.pp = new Raster('wheel3');
                Interaction.pp.position = new Point(144,136);
                break;
            case 5:
                Interaction.questionType = Question.POUCH;
                Interaction.pp = new Raster('pouch');
                Interaction.pp.position = new Point(144,136);
                break;
            case 6:
                Interaction.questionType = Question.POUCH2;
                Interaction.pp = new Raster('pouch2');
                Interaction.pp.position = new Point(144,136);
                break;
            case 7:
                Interaction.questionType = Question.POUCH3;
                Interaction.pp = new Raster('pouch3');
                Interaction.pp.position = new Point(144,136);
                break;
        }

        switch(Interaction.randomNumber2){
            case 0:
                qIndex = 0;
                Interaction.answer = Interaction.impossibleEvent;
                break;
            case 1:
                qIndex = 1;
                Interaction.answer = Interaction.certainEvent;
                break;
            case 2:
                qIndex = 2;
                Interaction.answer = Interaction.complementaryEvent;
                break;
            case 3:
                qIndex = 3;
                Interaction.answer = Interaction.notComplementaryEvent;
                break;
        }

        Interaction.question = new Question(Interaction.questionType, qIndex);
        $(Interaction.questionDiv).html(Interaction.question.question);

    },
	preCheck : function(){
        if(Interaction.clickedOption == null){
            Interaction.setStatus("Lütfen bir şık seçiniz!", "alert");
            return false;
        }
    },
	isAnswerCorrect : function(value){
        if(Interaction.clickedOption == Interaction.answer){
            return true;
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
        $(Interaction.clickedOption).css(trueOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-64px 0px'
        });
        Interaction.myPause = 1;
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yeşil renk ile gösterilmiştir.',false);

        $(Interaction.clickedOption).css(falseOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-96px 0px'
        });

        $('.image-container', Interaction.answer).css({
            backgroundPosition:'-64px 0px'
        });

        $(Interaction.answer).css(trueOptionStyle);
        Interaction.myPause = 1;
    },
    createOptions:function(referencePoint){
        if($(Interaction.certainEvent)){
            $(Interaction.certainEvent).remove();
            Interaction.certainEvent = null;
        }
        if($(Interaction.impossibleEvent)){
            $(Interaction.impossibleEvent).remove();
            Interaction.impossibleEvent = null;
        }
        if($(Interaction.complementaryEvent)){
            $(Interaction.complementaryEvent).remove();
            Interaction.complementaryEvent = null;
        }
        if($(Interaction.notComplementaryEvent)){
            $(Interaction.notComplementaryEvent).remove();
            Interaction.notComplementaryEvent = null;
        }
        if(Interaction.randomNumber2 < 2){
            Interaction.certainEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Kesin olay'});
            Interaction.impossibleEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'İmkânsız olay'});
            Interaction.options = [Interaction.certainEvent, Interaction.impossibleEvent];
        }
        else{
            Interaction.complementaryEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Tümleyen olay'});
            Interaction.notComplementaryEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Tümleyen olay değil'});
            Interaction.options = [Interaction.complementaryEvent, Interaction.notComplementaryEvent];
        }
        for(var i=0;i<Interaction.options.length;i++){
            $(Interaction.options[i]).css({
                top:referencePoint.y+30+40*i,
                left:referencePoint.x-20
            }).click(function(){
                    if(!Interaction.myPause){
                        Interaction.cleanOptions();
                        Interaction.clickedOption = this;
                        $('.image-container',this)
                            .css({
                                backgroundPosition:'-32px 0px'
                            })
                        $(Interaction.clickedOption).css(selectedOptionStyle);
                    }
                }).prepend('<div class="image-container"></div>');
            $('.image-container',Interaction.options[i])
                .css(optionsImageContainer)
        }
    },

    cleanOptions:function(){
        Interaction.clickedOption = null;
        $(Interaction.options).each(function(){
            $(this).css(optionsStyle);

        })
        $('.image-container')
            .css({
                backgroundPosition:'0px 0px'
            })
    },
}
;





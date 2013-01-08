function __Styles(){
    wholeTableFillColor = "white";
    wholeTableStrokeColor = "#a8dbe3";

    wholeTablePrimeFillColor = "#9ee9a5";
    wholeTablePrimeStrokeColor = "#4f9c4f";

    counterColor = "#a8dbe3";

    animationRectFillColor = "e99e9e";
    animationRectStrokeColor = "9c4f4f"

    animationRectFillColor2 = "f2c885";
    animationRectStrokeColor2 = "9b763d"
}
;
var Animation = {
	init:function(container){
			Animation.container = container;

        var animStart = 1000;
        var basicFadeInDuration = 1000;

        var rect1 = new Path.SegmentedRectangle(206.5, 50.5, 144, 12, 12, 1, 12, animationRectFillColor);
        rect1.strokeColor = animationRectStrokeColor;
        rect1.opacity = 0;
        var rect2 = new Path.SegmentedRectangle(434.5, 50.5, 72, 24, 6, 2, 12, animationRectFillColor);
        rect2.strokeColor = animationRectStrokeColor;
        rect2.opacity = 0;
        var rect3 = new Path.SegmentedRectangle(606.5, 50.5, 48, 36, 4, 3, 12, animationRectFillColor);
        rect3.strokeColor = animationRectStrokeColor;
        rect3.opacity = 0;

        var rect4 = new Path.SegmentedRectangle(200.5, 140.5, 156, 12, 13, 1, 13, animationRectFillColor2);
        rect4.strokeColor = animationRectStrokeColor2;
        rect4.opacity = 0;


        $(Animation.container).append('<div id="firstDiv"><div id="num1">12</div><div id="text1">asal değil</div></div>');
        $(Animation.container).append('<div id="secondDiv">12 = 1 x 12</div>');
        $(Animation.container).append('<div id="thirdDiv">12 = 2 x 6</div>');
        $(Animation.container).append('<div id="fourthDiv">12 = 3 x 4</div>');

        $('#firstDiv').css({
            position:'absolute',
            top:'30px',
            left:'80px',
            fontSize:'20px',
            width:'100px',
            height:'50px'
        });
        $('#num1').css({
            position:'absolute',
            top:'0px',
            left:0,
            right:0,
            textAlign: 'center',
            opacity:0
        });
        $('#num1').delay(animStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');
        $('#text1').css({
            position:'absolute',
            top:'30px',
            left:0,
            right:0,
            textAlign: 'center',
            opacity:0
        });
        $('#text1').delay(animStart+4000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');

        $('#secondDiv').css({
            position:'absolute',
            top:'30px',
            left:'240px',
            fontSize:'20px',
            width:'120px',
            height:'50px',
            opacity:0
        });
        $('#secondDiv').delay(animStart+1000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $('#thirdDiv').css({
            position:'absolute',
            top:'30px',
            left:'440px',
            fontSize:'20px',
            width:'100px',
            height:'50px',
            opacity:0
        });
        $('#thirdDiv').delay(animStart+2000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $('#fourthDiv').css({
            position:'absolute',
            top:'30px',
            left:'600px',
            fontSize:'20px',
            width:'100px',
            height:'50px',
            opacity:0
        });
        $('#fourthDiv').delay(animStart+3000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');

        $(Animation.container).append('<div id="fifthDiv"><div id="num2">13</div><div id="text2">asal sayı</div></div>');
        $(Animation.container).append('<div id="sixthDiv">13 = 1 x 13</div>');

        $('#fifthDiv').css({
            position:'absolute',
            top:'120px',
            left:'80px',
            fontSize:'20px',
            width:'100px',
            height:'50px',
        });
        $('#num2').css({
            position:'absolute',
            top:'0px',
            left:0,
            right:0,
            textAlign: 'center',
            opacity:0
        });
        $('#num2').delay(animStart+5000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');
        $('#text2').css({
            position:'absolute',
            top:'30px',
            left:0,
            right:0,
            textAlign: 'center',
            color: 'red',
            opacity:0
        });
        $('#text2').delay(animStart+7000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');

        $('#sixthDiv').css({
            position:'absolute',
            top:'120px',
            left:'240px',
            fontSize:'20px',
            width:'120px',
            height:'50px',
            opacity:0
        });
        $('#sixthDiv').delay(animStart+6000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad', function(){Main.animationFinished(1500);});

        rect1.animate({
            style:{
                opacity:1,
            },
            duration: basicFadeInDuration,
            delay: animStart+1000,
            animationType: 'easeInOutQuad'
        });

        rect2.animate({
            style:{
                opacity:1,

            },
            duration: basicFadeInDuration,
            delay: animStart+2000,
            animationType: 'easeInOutQuad'
        });

        rect3.animate({
            style:{
                opacity:1,
            },
            duration: basicFadeInDuration,
            delay: animStart+3000,
            animationType: 'easeInOutQuad'
        });

        rect4.animate({
            style:{
                opacity:1,
            },
            duration: basicFadeInDuration,
            delay: animStart+6000,
            animationType: 'easeInOutQuad'
        });
		
    }
}
;
var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
        console.log("Interaction.init started ");
			Interaction.container = container;
        Main.setObjective('Yanda verilen yüzlük tabloda asal sayıları belirleyiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            left:'410px',
            top:'120px',
            width:'140px',
            height:'50px',
            textAlign:'center',
        });

        // whole prime numbers from 1 to 100
        Interaction.primeNumbers = [];
        for(var i = 1; i < 101; i++){
            if(Util.isPrimeNumber(i)){
                Interaction.primeNumbers.push(i);
            }
        }
        Interaction.answerTable = [];
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
            if(Interaction.pause == 1)
                return;
            else{
                Interaction.setStatus('');
                if(event.item){
                    if(event.item.class == "number"){
                        if(Util.isPrimeNumber(event.item.myId)){
                            Interaction.wholeTable[event.item.myId-1].fillColor = wholeTablePrimeFillColor;
                            Interaction.wholeTable[event.item.myId-1].strokeColor = wholeTablePrimeStrokeColor;
                            if(Interaction.answerTable.indexOf(event.item.myId) == -1){
                                Interaction.answerTable.push(event.item.myId);
                                Interaction.remainingNumber -= 1;
                                $('#count').html(Interaction.remainingNumber);
                                if(Interaction.answerTable.length == Interaction.primeNumbers.length){
                                    if($('#counterDiv'))
                                        $('#counterDiv').remove();
                                    $(Interaction.button).css("opacity",1);
                                    Interaction.setStatus('Tebrikler, bütün asal sayıları buldunuz.', true)
                                    Interaction.button.onclick = Interaction.nextQuestion;
                                    Interaction.pause = 1;
                                }
                            }
                        }
                        else{
                            Interaction.setStatus('Seçtiğiniz sayı asal sayı değil.', false)
                        }
                    }
                }
            }
        };
        tool.onMouseUp = function(event){

        };

        Interaction.appendButton({
            bottom: '20px',
            right: '40px',
        });

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.pause = 0;
        Interaction.button.className = "repeat_button";
        $(Interaction.button).css("opacity", 0);
        Interaction.setStatus('');
        Interaction.remainingNumber = 25;

        Interaction.answerTable = [];
        for(var i = 0; i < 100; i++){
            Interaction.wholeTable[i].strokeColor = wholeTableStrokeColor;
            Interaction.wholeTable[i].fillColor = wholeTableFillColor;
        }

        $(Interaction.container).append('<div id="counterDiv"><div id="count"></div><div id="text">tane sayı kaldı</div></div>')
        $('#counterDiv').css({
            position:'absolute',
            top:'20px',
            left:'400px',
            width:'160px',
            height:'60px'
        });
        $('#count').css({
            position:'absolute',
            top:'10px',
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
            top:'40px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '16px',
            color: counterColor
        });
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
;





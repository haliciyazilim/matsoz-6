function __Styles(){
	questionDivStyle = {
        position:'absolute',
        top:'20px',
        left:'80px',
        width:'440px',
        height:'100px',
    //    border:'1px solid',
        fontSize:'32px'
    };

    answerDivStyle = {
        position:'absolute',
        top:'120px',
        left:'30px',
        width:'500px',
        height:'60px',
    //    border:'1px solid',
        color:'#069',
        fontSize:'20px',
        opacity:0
    };

    firstDivStyle = {
        position:'absolute',
        top:'26px',
        left:'260px',
        width:'80px',
        height:'150px',
    //    border:'1px solid',
        fontSize:'24px'
    };

    secondDivStyle = {
        position:'absolute',
        top:'110px',
        left:'440px',
        width:'200px',
        height:'70px',
    //    border:'1px solid',
        fontSize:'24px'
    };
}
;
var getFactorsAndNumbersArrays = function(number){
    var primeFactors = [];
    var wholePrimeFactors = [];

    Interaction.primeFactors = [];
    Interaction.numbersOfFactors = [];
    Interaction.wholePrimeFactors = [];

    Interaction.wholePrimeFactors = Util.getWholePrimeFactors(number);

    primeFactors = Util.getPrimeFactors(number);
    wholePrimeFactors = Util.getWholePrimeFactors(number);

    for(var i = 0; i < primeFactors.length; i++){
        Interaction.primeFactors.push(primeFactors[i]);
    }

    var a;
    var b = [];
    for(var j = 0; j < primeFactors.length; j++){
        b = wholePrimeFactors.slice(wholePrimeFactors.indexOf(primeFactors[j]),wholePrimeFactors.lastIndexOf(primeFactors[j])+1);
        a = b.length;
        Interaction.numbersOfFactors.push(a);
    }

};
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var divisionStart = animStart+1000;
        var firstLineStart = divisionStart+8000;
        var indicatorStart = firstLineStart+2000;
        var secondLineStart = firstLineStart+13500;
        var lastAnim = secondLineStart+2000;

        Animation.firstDiv = Util.dom({parent:Animation.container, tag:'div', css:firstDivStyle,
            html:'<div id="line" style="opacity:0;position:absolute;top:0px;left:40px;border-left:1px solid;width:1px;height:150px;"></div>' +
                '<span id="num1" style="opacity:0;font-weight:bold;position:absolute;left:8px;top:0px;">24</span><span id="num2" style="opacity:0;position:absolute;top:0px;left:48px">2</span>' +
                '<span id="num3" style="opacity:0;position:absolute;top:32px;left:8px;">12</span><span id="num4" style="opacity:0;position:absolute;top:32px;left:48px">2</span>' +
                '<span id="num5" style="opacity:0;position:absolute;top:64px;left:18px;">6</span><span id="num6" style="opacity:0;position:absolute;top:64px;left:48px">2</span>' +
                '<span id="num7" style="opacity:0;position:absolute;top:96px;left:18px;">3</span><span id="num8" style="opacity:0;position:absolute;top:96px;left:48px">3</span>' +
                '<span id="num9" style="opacity:0;position:absolute;top:128px;left:18px;">1</span>'
        });

        Animation.secondDiv = Util.dom({parent:Animation.container, tag:'div', css:secondDivStyle,
            html:'<div id="firstLine" style="opacity:0;"><b>24</b> = 2 x 2 x 2 x 3</div>' +
                '<image id="indicator" src="/assets/animations/asal_carpan/asal_sayi_ikonu.png" style="opacity:0;position:absolute;top:-86px;left:46px;"/>' +
                '<div id="secondLine" style="opacity:0;"><span style="position:absolute;top:46px;left:34px;"> = </span>' +
                    '<div id="x1" style="position:absolute;top:46px;left:54px;">2</div><div id="y1" style="position:absolute;top:36px;left:66px;font-size:18px;">3</div>' +
                    '<span style="position:absolute;top:46px;left:82px;"> x </span><div style="position:absolute;top:46px;left:100px;" id="x1">3</div>' +
                '</div>'
        });

        $('#num1').delay(animStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#line').delay(animStart+1000).animate({opacity:1},1000,'easeInOutQuad')

        for(var i = 2; i < 10; i+=2){
            var j = i + 1;
            $('#num'+i).delay(divisionStart+750*i).animate({opacity:1},1000,'easeInOutQuad');
            $('#num'+j).delay(divisionStart+750*i).animate({opacity:1},1000,'easeInOutQuad');
        }

        $('#firstLine').delay(firstLineStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#indicator').delay(indicatorStart).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad',function(){$('#indicator').css("left","85px");})
            .delay(500).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad',function(){$('#indicator').css("left","124px");})
            .delay(500).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad',function(){$('#indicator').css("left","162px");})
            .delay(500).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad');

        $('#secondLine').delay(secondLineStart).animate({opacity:1},1000,'easeInOutQuad');
        $(Animation.secondDiv).delay(lastAnim).animate({top:"-=40px"},1000,'easeInOutQuad',function(){Main.animationFinished();})
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
        Interaction.container = container;
        Main.setObjective('Yandaki sayının asal çarpanlarını yazınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'20px',
            right:'160px',
            width:'340px',
            height:'26px',
            textAlign:'center',
            //    border:'1px solid'
        });
        Interaction.appendButton({
            bottom:'20px',
            right:'40px'
        });

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if(Interaction.questionDiv){
            $(Interaction.questionDiv).remove();
        }

        if(Interaction.answerDiv){
            $(Interaction.answerDiv).remove();
        }

        Interaction.flushInputs();

        Interaction.question = Util.randomInteger(4,101);
    //    Interaction.question = 100;

        getFactorsAndNumbersArrays(Interaction.question);

        Interaction.numOfWholeFactors = Util.getWholePrimeFactors(Interaction.question).length;

//        console.log("question: "+Interaction.question);
//        console.log("prime factors: "+Interaction.primeFactors);
//        console.log("factors numbers: "+Interaction.numbersOfFactors);
//        console.log("numOfWholeFactors: "+Interaction.numOfWholeFactors);

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle,
            html:'<div id="question"></div><span id="eq">=</span><span id="inputs"></span>'
        });

        $('#question').css({
            position:'absolute',
            top:'30px',
            left:'22px',
            width:'48px',
            height:'30px',
            textAlign:'right'
        });
        $('#question').html(Interaction.question);
        $('#eq').css({
            position:'absolute',
            top:'30px',
            left:'76px'
        });
        $('#inputs').css({
            position:'absolute',
            top:'26px',
            left:'100px',
            width:'380px',
            height:'40px'
        });

        for(var i = 0; i < Interaction.numOfWholeFactors; i++){
            Interaction.appendInput({
                position:'static',
                width:'32px',
                height:'30px',
                fontSize:'24px'
            });
        }

        for(var i = 0; i < Interaction.numOfWholeFactors; i++){
            $('#inputs').append(Interaction.inputs[i]);
            if(i != Interaction.numOfWholeFactors-1){
                $('#inputs').append('<span style="position:relative;top:2px;"> x </span>');
            }
        }

        var left = (6-Interaction.numOfWholeFactors)*28 + 26;
        var leftStr = ""+left+"px";
        $(Interaction.questionDiv).css("left",leftStr);

        for(var k = 0; k < Interaction.numOfWholeFactors; k++){
            $(Interaction.inputs[k]).attr('maxlength', '2');
        }

        Interaction.answerDiv = Util.dom({parent:Interaction.container, tag:'div', css:answerDivStyle,
            html:'<span id="primeText" style="text-align:center;position:absolute;top:60px;left:-10px;line-height:24px;"></span>' +
                '<span id="q" style="position:absolute;top:10px;left:166px;width:34px;text-align:right;"></span><span style="position:absolute;top:10px;left:206px;"> = </span>' +
                '<span id="b1" style="position:absolute;top:10px;left:224px;"></span><span id="p1" style="position:absolute;top:0px;left:234px;font-size:16px;"></span>' +
                '<span id="c1" style="position:absolute;top:10px;left:248px;"></span>' +
                '<span id="b2" style="position:absolute;top:10px;left:266px;"></span><span id="p2" style="position:absolute;top:0px;left:276px;font-size:16px;"></span>' +
                '<span id="c2" style="position:absolute;top:10px;left:290px;"></span>' +
                '<span id="b3" style="position:absolute;top:10px;left:306px;"></span><span id="p3" style="position:absolute;top:0px;left:316px;font-size:16px;"></span>'
        });

        if(Interaction.primeFactors[0] < 10 && Interaction.numbersOfFactors[0] <= 1){
            $('#b1').css("left", "228px");
        }

        $('#q').html(Interaction.question);
        for(var i = 1; i <= Interaction.primeFactors.length; i++){
            $('#b'+i).html(Interaction.primeFactors[i-1]);
            if(Interaction.numbersOfFactors[i-1] > 1){
                $('#p'+i).html(Interaction.numbersOfFactors[i-1]);
            }
            if(i != Interaction.primeFactors.length){
                $('#c'+i).html(" x ");
            }
        }
        if(Util.isPrimeNumber(Interaction.question)){
            var primeStr = ""+Interaction.question+" kendisi asal sayı olduğu için asal çarpanı da kendisidir.";
            $('#primeText').html(primeStr);
        }

    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        var checkArr = [];
        var correctN = 0;

        if(Interaction.numOfWholeFactors == 1){
            checkArr[0] = value;
        }
        else{
            for(var i = 0; i < value.length; i++){
                checkArr[i] = value[i];
            }
        }
        checkArr.sort(function(a,b){return a-b});

        for(var j = 0; j < checkArr.length; j++){
            console.log(checkArr[j]);
            console.log(Interaction.wholePrimeFactors[j]);
            if(checkArr[j] == Interaction.wholePrimeFactors[j]){
                correctN += 1;
            }
        }

        if(correctN == Interaction.numOfWholeFactors){
            return true;
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
		for(var i = 0; i < Interaction.numOfWholeFactors; i++){
            $(Interaction.inputs[i]).css("color","green");
        }

        $(Interaction.answerDiv).css("opacity",1);
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir!',false);
        for(var i = 0; i < Interaction.numOfWholeFactors; i++){
            Interaction.inputs[i].value = Interaction.wholePrimeFactors[i];
            $(Interaction.inputs[i]).css("color","green");
        }

        $(Interaction.answerDiv).css("opacity",1);
    }
}
;





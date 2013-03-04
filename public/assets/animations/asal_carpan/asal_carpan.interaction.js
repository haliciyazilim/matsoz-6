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

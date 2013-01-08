function __Styles(){

    animDivStyle = {
        position:'absolute',
        top:'40px',
        left:'330px',
        width:'150px',
        height:'80px',
        fontSize:'32px'
    };

    questionDivStyle = {
        position:'absolute',
        top:'60px',
        left:'160px',
        width:'200px',
        height:'60px',
        fontSize:'32px'
    };

    answerDivStyle = {
        position:'absolute',
        top:'160px',
        left:'80px',
        width:'360px',
        height:'30px',
        fontSize:'24px',
        color:'#069',
        textAlign:'center',
    //    border:'1px solid'
    }

};
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var secondStart = animStart+4500;
        var thirdStart = secondStart+4500;
        var fourthStart = thirdStart+4500;
        var fifthStart = fourthStart+3000;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle,
            html:'<span id="eq1" style="opacity:0;position:absolute;top:0px;left:0px;">7 x 0 = 0</span>' +
                '<span id="eq2" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 7 = 0</span>' +
                '<span id="eq3" style="opacity:0;position:absolute;top:0px;left:0px;">3 x 0 = 0</span>' +
                '<span id="eq4" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 3 = 0</span>' +
                '<span id="eq5" style="opacity:0;position:absolute;top:0px;left:0px;">46 x 0 = 0</span>' +
                '<span id="eq6" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 46 = 0</span>' +
                '<span id="eq7" style="opacity:0;position:absolute;top:0px;left:0px;">a x <span style="color:red;">0</span> = <span style="color:red;">0</span></span>' +
                '<span id="eq8" style="opacity:0;position:absolute;top:40px;left:0px;"><span style="color:red;">0</span> x a = <span style="color:red;">0</span></span>' +
                '<span id="lastText" style="opacity:0;position:absolute;width:240px;top:100px;left:-46px;">yutan eleman <span style="color:red;">0</span></span>'
        });

        $('#eq1').delay(animStart).animate({opacity:1},1000,'easeInOutQuad').delay(2500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq2').delay(animStart+1000).animate({opacity:1},1000,'easeInOutQuad').delay(1500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq3').delay(secondStart).animate({opacity:1},1000,'easeInOutQuad').delay(2500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq4').delay(secondStart+1000).animate({opacity:1},1000,'easeInOutQuad').delay(1500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq5').delay(thirdStart).animate({opacity:1},1000,'easeInOutQuad').delay(2500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq6').delay(thirdStart+1000).animate({opacity:1},1000,'easeInOutQuad').delay(1500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq7').delay(fourthStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq8').delay(fourthStart+1000).animate({opacity:1},1000,'easeInOutQuad');
        $('#lastText').delay(fifthStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000)});
    }
};
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki işlemlerin sonuçlarını yazınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle,
            html:'<span id="num1" style="position:static;">0</span>' +
                '<span id="operator" style="position:static;"> x </span>' +
                '<span id="num2" style="position:static;">100</span>' +
                '<span id="eqq" style="position:static;"> = </span>'
        });

        Interaction.answerDiv = Util.dom({parent:Interaction.container, tag:'div', css:answerDivStyle,
            html:'<span id="ansText"></span>'
        });

        Interaction.appendInput({
            position:'static',
            width:'56px',
            height:'36px',
            fontSize:'32px'
        });

        $(Interaction.questionDiv).append(Interaction.input);

        Interaction.appendStatus({
            bottom:'20px',
            right:'160px',
            width:'340px',
            height:'26px',
            textAlign:'center'
        });

        Interaction.appendButton({
            bottom:'20px',
            right:'40px'
        });

        Interaction.myIndex = 0;    // 0 and 100 index -> increment at every new question and check if it is equal to myRandom
        Interaction.myRandom = Util.randomInteger(1,11);
        Interaction.setRandomGenerator(2);      // decide whether 0 x a or a x 0
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;
        $('#ansText').html('');
        Interaction.myIndex += 1;

        if(Interaction.myIndex == Interaction.myRandom){
            if(Interaction.randomNumber == 0){  // 0 x 100
                Interaction.num1 = 0;
                Interaction.num2 = 100;
                Interaction.operator = "x";
            //    Interaction.feint = 0;
            }
            else{   // 100 x 0
                Interaction.num1 = 100;
                Interaction.num2 = 0;
                Interaction.operator = "x";
            }
        }
        else{
            Interaction.feint = Util.randomInteger(0,4);
            if(Interaction.feint != 0){     // no feint
                if(Interaction.randomNumber == 0){  // 0 x a
                    Interaction.num1 = 0;
                    Interaction.num2 = Util.randomInteger(2,100);
                    Interaction.operator = "x";
                }
                else{   // a x 0
                    Interaction.num1 = Util.randomInteger(2,100);
                    Interaction.num2 = 0;
                    Interaction.operator = "x";
                }
            }
            else{   // feint
                if(Util.rand01() == 0){
                    Interaction.operator = "+";
                }
                else{
                    Interaction.operator = "x";
                }

                if(Interaction.operator == "x"){
                    if(Interaction.randomNumber == 0){
                        Interaction.num1 = 0;
                        Interaction.num2 = 1;
                    }
                    else{
                        Interaction.num1 = 1;
                        Interaction.num2 = 0;
                    }
                }
                else{   // operator is +
                    if(Interaction.randomNumber == 0){
                        Interaction.num1 = 0;
                        Interaction.num2 = Util.rand01();
                    }
                    else{
                        Interaction.num1 = Util.rand01();
                        Interaction.num2 = 0;
                    }
                }
            }
        }

        if(Interaction.operator == "x"){
            Interaction.answer = Interaction.num1 * Interaction.num2;
        }
        else{
            Interaction.answer = Interaction.num1 + Interaction.num2;
        }

        if(Interaction.operator == "x"){
            Interaction.answerStr = "0 yutan elemandır!";
        }
        else{
            Interaction.answerStr = "0 etkisiz elemandır!";
        }

        $('#num1').html(Interaction.num1);
        $('#num2').html(Interaction.num2);
        $('#operator').html(" "+Interaction.operator+" ");

        $(Interaction.input).css("color","black");
    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return value == Interaction.answer;
    },
	onCorrectAnswer : function(){
        if(Interaction.feint != 0){
            $('#ansText').html(Interaction.answerStr);
        }
        $(Interaction.input).css("color","green");
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir!',false);
        if(Interaction.feint != 0){
            $('#ansText').html(Interaction.answerStr);
        }
        Interaction.input.value = Interaction.answer;
        $(Interaction.input).css("color","green");
    }
}
;





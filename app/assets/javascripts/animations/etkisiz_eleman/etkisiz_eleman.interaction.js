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
        Interaction.setRandomGenerator(2);  // decide whether 0 x a or a x 0
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
                Interaction.feint = 0;
            }
            else{   // 100 x 0
                Interaction.num1 = 100;
                Interaction.num2 = 0;
                Interaction.operator = "x";
                Interaction.feint = 0;
            }
        }
        else{
            Interaction.operator = Util.rand01() ? "x" : "+";
            Interaction.feint = Util.randomInteger(0,5);
            if(Interaction.feint != 0){     // no feint
                if(Interaction.randomNumber == 0){  // 0 x a
                    Interaction.num1 = (Interaction.operator == "x") ? 1 : 0;
                    Interaction.num2 = Util.randomInteger(2,100);
                }
                else{
                    Interaction.num1 = Util.randomInteger(2,100);
                    Interaction.num2 = (Interaction.operator == "x") ? 1 : 0;
                }
            }
            else{   // feint
                if(Interaction.operator == "x"){
                    if(Interaction.randomNumber == 0){  // 0,1 x a
                        Interaction.num1 = Util.rand01();
                        Interaction.num2 = Util.randomInteger(1,100);
                    }
                    else{   // a x 0,1
                        Interaction.num1 = Util.randomInteger(1,100);
                        Interaction.num2 = Util.rand01();
                    }
                }
                else{
                    if(Interaction.randomNumber == 0){  // 0,1 + a
                        Interaction.num1 = Util.rand01();
                        Interaction.num2 = Util.randomInteger(1,100);
                    }
                    else{   // a + 0,1
                        Interaction.num1 = Util.randomInteger(1,100);
                        Interaction.num2 = Util.rand01();
                    }
                }
            }
        }

        if(Interaction.operator == "x"){
            Interaction.answer = Interaction.num1 * Interaction.num2;
            Interaction.answerStr = "1 etkisiz elemandır!";
        }
        else{
            Interaction.answer = Interaction.num1 + Interaction.num2;
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
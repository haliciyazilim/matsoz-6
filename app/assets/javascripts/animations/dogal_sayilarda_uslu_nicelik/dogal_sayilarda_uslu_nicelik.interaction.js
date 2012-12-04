var Interaction = {

    getFramework:function(){
        return 'paper';
    },
    images:[

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'10px',
            right:'150px',
            width:'340px',
            height:'26px',
            textAlign:'center',
            //    border:'1px solid'
        });
        Interaction.appendButton({
            bottom:'10px',
            right:'30px'
        });

        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){

        Interaction.randomNumber = randomNumber;
        Interaction.flushInputs();

        if(Interaction.questionDiv){
            $(Interaction.questionDiv).remove();
        }

        if(Interaction.answerDiv){
            $(Interaction.answerDiv).remove();
        }

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});

        Interaction.answerDiv = Util.dom({parent:Interaction.container, tag:'div', css:answerDivStyle});

        if(Interaction.randomNumber == 0){
            Main.setObjective('Yandaki üslü nicelikte <span style="color:red;">tabanı</span> bulunuz.');

            Interaction.appendInput({
                position:'absolute',
                top:'24px',
                left:'130px',
                width:'40px',
                height:'30px',
                fontSize:'30px'
            });
            $(Interaction.input).attr('maxlength', '2');

            Interaction.base = Util.randomInteger(1,11);

            if(Interaction.base < 4){
                Interaction.power = Util.randomInteger(1,6);
            }
            else if(Interaction.base < 10){
                Interaction.power = Util.randomInteger(1,4);
            }
            else{
                Interaction.power = Util.randomInteger(1,8);
            }

            Interaction.answer = Math.pow(Interaction.base,Interaction.power);

            $(Interaction.questionDiv).append('<span id="qp" style="position:absolute;left:180px;top:10px;font-size:20px;"></span>' +
                '<span style="position:absolute;left:200px;top:30px"> = </span>' +
                '<span id="qa" style="position:absolute;left:224px;top:28px;"></span>');
            $('#qp').html(Interaction.power);
            $('#qa').html(Interaction.answer);
        }
        else if(Interaction.randomNumber == 1){
            Main.setObjective('Yandaki üslü nicelikte <span style="color:red;">kuvveti</span> bulunuz.');

            Interaction.appendInput({
                position:'absolute',
                top:'4px',
                left:'160px',
                width:'25px',
                height:'22px',
                fontSize:'20px'
            });
            $(Interaction.input).attr('maxlength', '2');

            Interaction.base = Util.randomInteger(2,11);

            if(Interaction.base < 4){
                Interaction.power = Util.randomInteger(1,6);
            }
            else if(Interaction.base < 10){
                Interaction.power = Util.randomInteger(1,4);
            }
            else{
                Interaction.power = Util.randomInteger(1,8);
            }

            Interaction.answer = Math.pow(Interaction.base,Interaction.power);

            $(Interaction.questionDiv).append('<span id="qb" style="text-align:right;width:30px;position:absolute;left:130px;top:28px;"></span>' +
                '<span style="position:absolute;left:190px;top:30px"> = </span>' +
                '<span id="qa" style="position:absolute;left:214px;top:28px;"></span>');
            $('#qb').html(Interaction.base);
            $('#qa').html(Interaction.answer);

        }
        else{
            Main.setObjective('Yandaki üslü nicelikte <span style="color:red;">değeri</span> bulunuz.');

            Interaction.appendInput({
                position:'absolute',
                top:'28px',
                left:'144px',
                width:'178px',
                height:'30px',
                fontSize:'30px'
            });
            $(Interaction.input).attr('maxlength', '10');

            Interaction.base = Util.randomInteger(2,11);

            if(Interaction.base < 4){
                Interaction.power = Util.randomInteger(1,6);
            }
            else if(Interaction.base < 10){
                Interaction.power = Util.randomInteger(1,4);
            }
            else{
                Interaction.power = Util.randomInteger(1,8);
            }

            Interaction.answer = Math.pow(Interaction.base,Interaction.power);

            $(Interaction.questionDiv).append('<span id="qb" style="text-align:right;width:30px;position:absolute;left:70px;top:28px;"></span>' +
                '<span id="qp" style="position:absolute;left:100px;top:10px;font-size:20px;"></span>' +
                '<span style="position:absolute;left:120px;top:30px"> = </span>');

            $('#qb').html(Interaction.base);
            $('#qp').html(Interaction.power);



        }

        $(Interaction.questionDiv).append(Interaction.input);

        $(Interaction.answerDiv).html('<div><span id="base""></span><span id="power" style="position:absolute;top:-10px;font-size:12px;"></span>&nbsp;<span id="answer"></span></div>');

        $('#base').html(Interaction.base);
        $('#power').html(Interaction.power);
        if(Interaction.power == 1){
            var answerStr = " = "+Interaction.answer;
        }
        else{
            var answerStr = " = ";
            for(var i = 0; i < Interaction.power-1; i++){
                answerStr += ""+Interaction.base+" x ";
            }
            answerStr += Interaction.base+" = "+Interaction.answer;
        }
        $('#answer').html(answerStr);
    },
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        if(Interaction.randomNumber == 0){
            return Interaction.base == value;
        }
        else if(Interaction.randomNumber == 1){
            return Interaction.power == value;
        }
        else{
            return Interaction.answer == value;
        }

    },
    onCorrectAnswer : function(){
        $(Interaction.answerDiv).css("opacity",1);
        $(Interaction.input).css("color","green");
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Olmadı! Doğru cevap yukarıda gösterilmiştir!',false);
        $(Interaction.answerDiv).css("opacity",1);
        $(Interaction.input).css("color","red");

    }
}
var Interaction = {

    getFramework:function(){
        return 'paper';
    },
    images:[

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki sıvı miktarlarını istenen ölçü birimine çeviriniz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'30px',
            right:'150px',
            width:'340px',
            height:'26px',
            textAlign:'center'
        });
        Interaction.appendButton({
            bottom:'30px',
            right:'30px'
        });
        Interaction.appendInput({
            position:'absolute',
            top:'4px',
            width:'80px',
            height:'32px',
            right:'86px',
            fontSize:'22px'
        });
        $(Interaction.input).attr("maxLength",6);

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle,
            html:'<span id="question" style="position:absolute;top:10px;right:200px;width:120px;height:30px;text-align:right;"></span><span id="eq" style="position:absolute;top:10px;right:180px;">=</span><span id="answerUnit" style="position:absolute;top:10px;right:24px;width:50px;text-align:left;"></span>'
        });
        $(Interaction.questionDiv).append(Interaction.input);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $(Interaction.input).css("color","black");

        generateQuestion();

        var turkishQuantity = ""+Interaction.question;
        if(turkishQuantity.indexOf(".") != -1){
            turkishQuantity = turkishQuantity.replace(".",",");
        }
        $('#question').html(turkishQuantity+" "+Interaction.questionUnit);
        $('#answerUnit').html(Interaction.answerUnit);

        Interaction.answer = convertUnits(Interaction.question,convertInitials(Interaction.questionUnit),convertInitials(Interaction.answerUnit));

    },
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        var lastPart = "";
        var flag = 1;
        var checkedValue = Util.numberTurkishFloating(Interaction.answer,6);
        var parts = checkedValue.split(",");
        if(parts.length != 1){
            lastPart = parts[1];
            for(var i = lastPart.length-1; i>=0; i--){
                if(lastPart[i] == "0" && flag == 1){
                    lastPart = lastPart.slice(0,i);
                }
                else{
                    flag = 0;
                }
            }
        }
        if(lastPart.length > 0){
            checkedValue = ""+parts[0]+","+lastPart;
        }
        else{
            checkedValue = parts[0];
        }
        Interaction.checkedValue = checkedValue;
        return parseFloat(checkedValue.replace(",",".")) == parseFloat(value.replace(",","."));
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",false);
        Interaction.input.value = Interaction.checkedValue;
        $(Interaction.input).css("color","green");
    }
}
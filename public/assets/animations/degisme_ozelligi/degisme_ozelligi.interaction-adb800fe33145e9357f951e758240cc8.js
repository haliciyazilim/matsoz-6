var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen tabloda sol üst köşedeki işarete tıklayarak işlemi değiştirebilirsiniz. Köşedeki işleme göre tabloda belirtilen kutuya uygun sayıyı yazınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.operatorBox = new Path.Rectangle(new Point(10.5, 10.5), new Size(25,25));
        Interaction.operatorBox.fillColor = operatorFillColor;
        Interaction.operatorBox.strokeColor = generalStrokeColor;
        Interaction.operatorBox.class = "clickable";

        Interaction.operatorText = new PointText(new Point(Interaction.operatorBox.position.x, Interaction.operatorBox.position.y+6));
        Interaction.operatorText.justification = 'center';
        Interaction.operatorText.fillColor = operatorTextColor;
        Interaction.operatorText.content = '+';
        Interaction.operatorText.strokeWidth = "1px";
        Interaction.operatorText.strokeColor = operatorTextColor;

        Interaction.operandBox = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandBox[i] = new Path.Rectangle(new Point(35.5+(25*i), 10.5), new Size(25,25));
            Interaction.operandBox[i].fillColor = operandBoxesFillColor;
            Interaction.operandBox[i].strokeColor = generalStrokeColor;
        }

        Interaction.operandText = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandText[i] = new PointText(new Point(Interaction.operandBox[i].position.x, Interaction.operandBox[i].position.y+6));
            Interaction.operandText[i].justification = 'center';
            Interaction.operandText[i].fillColor = operandTextColor;
            Interaction.operandText[i].content = i+1;
            Interaction.operandText[i].strokeWidth = "1px";
            Interaction.operandText[i].strokeColor = operandTextColor;

        }

        Interaction.operandBox2 = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandBox2[i] = new Path.Rectangle(new Point(10.5, 35.5+(25*i)), new Size(25,25));
            Interaction.operandBox2[i].fillColor = operandBoxesFillColor;
            Interaction.operandBox2[i].strokeColor = generalStrokeColor;
        }

        Interaction.operandText2 = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandText2[i] = new PointText(new Point(Interaction.operandBox2[i].position.x, Interaction.operandBox2[i].position.y+6));
            Interaction.operandText2[i].justification = 'center';
            Interaction.operandText2[i].fillColor = operandTextColor;
            Interaction.operandText2[i].content = i+1;
            Interaction.operandText2[i].strokeWidth = "1px";
            Interaction.operandText2[i].strokeColor = operandTextColor;
        }

        var tool = new Tool();
        tool.onMouseUp = function(event){
            if(event.item){
                if(event.item.class == "clickable"){
                    if(Interaction.pause2 == 0){
                        if(Interaction.operatorText.content == "+"){
                            Interaction.operatorText.content = "x";
                            Interaction.operator = "x";
                        }
                        else{
                            Interaction.operatorText.content = "+";
                            Interaction.operator = "+";
                        }
                    }
                    else{
                        Interaction.setStatus('Soruyu tamamladıktan sonra işlemi değiştirebilirsiniz. Lütfen önce soruyu tamamlayınız.', false)
                    }
                }
            }
        }
        tool.activate();

        for(var i = 0; i < 10; i++){
            var top = 35.5+(25*i);
            var topStr = ""+top+"px";
            for(var j = 0; j < 10; j++){
                var left = 35.5+(25*j);
                var leftStr = ""+left+"px";
                var input = Interaction.appendInput({
                    position:'absolute',
                    top:topStr,
                    left:leftStr,
                    width:'25px',
                    height:'25px',
                    padding:0,
                    margin:0,
                    boxSizing:'border-box',
                    border:'none',
                    borderRight:'1px solid #999',
                    borderBottom:'1px solid #999'
                }, true, true);
                $(input).focus(function(){
                    $(this).css({
                        zIndex:'100'
                    })
                }).blur(function(){
                    $(this).css({
                        zIndex:'1'
                    })
                })
            }
        }

        Interaction.appendStatus({
            bottom:'160px',
            right:'60px',
            width:'160px',
            height:'60px',
          //  border:'1px solid',
            textAlign:'center'

        });
        Interaction.appendButton({
            bottom:'20px',
            right:'40px'
        });

        if(Util.rand01() == 0){
            Interaction.operator = "+";
        }
        else{
            Interaction.operator = "x";
        }
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.quest = 0;
        Interaction.pause2 = 0;
        Interaction.trial2 = 0;
        getNewQuestion();
    },
		

	preCheck : function(){
        if(Interaction.inputs[Interaction.indexOfAnswer].value == ""){
            Interaction.setStatus('Lütfen kutucuğu doldurunuz.', false);
            return false;
        }
        else{
            if(Interaction.operator == "+"){
                Interaction.answer = Interaction.operand1 + Interaction.operand2;
            }
            else{
                Interaction.answer = Interaction.operand1 * Interaction.operand2;
            }
            if(Interaction.quest == 0){
                if(Interaction.answer == Interaction.inputs[Interaction.indexOfAnswer].value){
                    $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
                    Interaction.setStatus('');
                    Interaction.quest += 1;
                    getSecondQuestion();
                    return false;
                }
                else{
                    if(Interaction.trial2 == 0){
                        Interaction.setStatus('Yanlış cevap, lütfen tekrar deneyiniz.',false);
                        Interaction.inputs[Interaction.indexOfAnswer].value = "";
                        Interaction.trial2 += 1;
                    }
                    else{
                        Interaction.setStatus('Yanlış cevap, doğrusu yanda gösterilmiştir.',false);
                        Interaction.inputs[Interaction.indexOfAnswer].value = Interaction.answer;
                        $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
                        Interaction.quest += 1;
                        getSecondQuestion();
                    }
                }
                return false;
            }
            else{
                return true;
            }
        }
    },
	isAnswerCorrect : function(value){
	    return Interaction.answer == value[Interaction.indexOfAnswer];


    },
	onCorrectAnswer : function(){
        $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
		Interaction.pause2 = 0;
    },
	onWrongAnswer : function(){
		Interaction.inputs[Interaction.indexOfAnswer].value = "";
    },
	onFail : function(){

        Interaction.setStatus('Yanlış cevap, doğrusu yanda gösterilmiştir.',false);
        Interaction.inputs[Interaction.indexOfAnswer].value = Interaction.answer;
        $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
        Interaction.pause2 = 0;
    }
}
;

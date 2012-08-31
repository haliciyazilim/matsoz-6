var Interaction = {
    
	getFramework:function(){
			return 'paper';
    },
	images:[{
        id:'shadow',
        src:'/assets/animations/olasilik/top_golge.png'
    }],
    init:function(container){
        Interaction.container = container;

        Main.setObjective('Yandaki toplar bir torbanın içindedir. İstenen topun torbadan rastgele çekilme olasılığını bulunuz ve kontrol ediniz.');

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});
        Interaction.questionText = Util.dom({parent:Interaction.questionDiv, tag:'div', css:questionTextStyle});
        Interaction.line = Util.dom({parent:Interaction.questionDiv, tag:'div', css:lineStyle});
        Interaction.appendStatus({
            bottom:'10px',
            right:'170px',
            //    border:'1px solid',
            width:'400px',
            height:'26px',
            textAlign:'center'
        });
        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'2px',
            left:'250px',
            width:'32px',
            height:'30px',
            fontSize:'24px'
        });
        Interaction.appendInput({
            position:'absolute',
            top:'42px',
            left:'250px',
            width:'32px',
            height:'30px',
            fontSize:'24px'
        });
        $(Interaction.questionDiv).append(Interaction.inputs[0]);
        $(Interaction.questionDiv).append(Interaction.inputs[1]);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if(Interaction.ballsGroup){
            Interaction.ballsGroup.remove();
        }

        $(Interaction.inputs[0]).css("color","black");
        $(Interaction.inputs[1]).css("color","black");

        generateBalls();
        Interaction.qIndex = Util.randomInteger(0,Interaction.questionArr.length);

        Interaction.question = ""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =";

        $(Interaction.questionText).html(Interaction.question);
        Interaction.answer = Interaction.ballArr[Interaction.qIndex] / Interaction.totalBall;
	
    },
		

	preCheck : function(){
		
    },
	isAnswerCorrect : function(value){

        if(value[0]/value[1] == Interaction.answer){
            return true;
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
        $(Interaction.inputs[0]).css("color","green");
        $(Interaction.inputs[1]).css("color","green");
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir!', false);
        Interaction.inputs[0].value = Interaction.ballArr[Interaction.qIndex];
        Interaction.inputs[1].value = Interaction.totalBall;
        $(Interaction.inputs[0]).css("color","green");
        $(Interaction.inputs[1]).css("color","green");
		
    }
}
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
        }

        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
        });
        Interaction.appendStatus({
            bottom:'50px',
            right:'150px'
        });
        Interaction.set1Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set1Div).css({
            top:'100px'
        })
        Interaction.set2Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set2Div).css({
            top:'150px'
        })

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(){
        Interaction.flushInputs();
        $(Interaction.answerSetDiv).remove();
        Interaction.generateSets();
        Interaction.answerSetDiv = Util.dom({
            tag:'div',
            parent:Interaction.container,
            css:answerSetDivCss
        });
        $(Interaction.answerSetDiv).append('A \\ B = { ');
        var inputCount = Interaction.set1.getDifference(Interaction.set2).elements.length;
        var i=0;
        do{i++;
            var input = Interaction.appendInput({
                position:'relative',
                width:'2.5 ex',
                height:'30px'

            },true,inputCount==0);
            input.maxLength = 2;
            $(Interaction.answerSetDiv)
                .append(i>1?',':'')
                .append(input)
        }while(i<inputCount)
        $(Interaction.answerSetDiv).append(' }');
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
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
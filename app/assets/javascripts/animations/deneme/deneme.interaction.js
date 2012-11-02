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
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })
        /*
        *	Initialize your interaction here
        */

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        if (Interaction.sets) {
            Interaction.sets.set1.remove();
            Interaction.sets.set2.remove();
            Interaction.sets.intersect.remove();
            Interaction.sets.intersectClone.remove();
        }

        var set1 = new Set({
            type: Set.ELEMENTS,
            elements: [1,2]
        })

        var set2 = new Set({
            type: Set.ELEMENTS,
            elements: [4,5,6,7,8]
        })

        Interaction.sets = Set.drawSets(container, new Point(100, 100),[set1],['A']);
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
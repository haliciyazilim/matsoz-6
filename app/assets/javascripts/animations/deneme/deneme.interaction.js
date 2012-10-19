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

//        var set1 = new Set({type:Set.ELEMENTS,elements:[0,1,2,3,4,5,6]});
//        var set2 = new Set({type:Set.ELEMENTS,elements:[3,4,5,6,7,8,9]});

//        Set.drawSets(container, new Point(100,100), [set1,set2], ['A', 'B']);


        var text = new PointText(new Point(400,100));
        text.content = 'eren eren eren eren eren eren eren eren eren';
        text.justification = 'right';

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

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
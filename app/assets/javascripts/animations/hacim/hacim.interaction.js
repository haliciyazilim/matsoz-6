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

        Interaction.appendInput({
            position:'static'
        });

        Interaction.appendQuestion(
            "H = ",
            {
                position:'absolute',
                right:'50px',
                top:'80px'
            }
        );
        $(Interaction.questionDiv)
            .append(Interaction.input)
            .append(" cm<sup>3</sup>")

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
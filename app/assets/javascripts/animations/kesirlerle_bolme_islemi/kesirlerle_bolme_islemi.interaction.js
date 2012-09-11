var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('kesir deneme');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 6; j++){
                var num = RationalNumber.randomGenerator();
                num.simplification();
                var html = num.toHTML(24);

                $(Interaction.container).append(html);

                var top = 20+(i*94);
                var left = 5+(96*j);
                var topStr = ""+top+"px";
                var leftStr = ""+left+"px";

                $(html).css({
                    position:'absolute',
                    top:topStr,
                    left:leftStr
                });
            }
        }

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
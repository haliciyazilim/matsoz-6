var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki örüntüde bir sonraki adımda gelecek sayıyı yazarak kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }




        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.generatePatters(randomNumber);
        console.log("I'm here");
        new QuadraticPattern(1,0,4).draw(new Point(20,175));
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
		
    },
    generatePatters: function(randomNumber){
        Interaction.patternType = randomNumber;
        var pattern;
        switch(randomNumber){
            case 0:

                pattern = new Pattern();
                break;

            case 1:
                break;

            case 2:
                break;
        }
    }
}
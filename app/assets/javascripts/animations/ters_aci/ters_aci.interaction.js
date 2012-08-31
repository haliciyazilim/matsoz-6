var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
			Interaction.container = container;
			Main.setObjective('İki doğrunun kesişmesi sonucu ters yönlerde oluşan eş açılar.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			/*
			*	Initialize your interaction here
			*/
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
	        new OppositeAngles({
                angle:60,
                phase:0,
                center:new Point(250,150)
            }).draw();
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
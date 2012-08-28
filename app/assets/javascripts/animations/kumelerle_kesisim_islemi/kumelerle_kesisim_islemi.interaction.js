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
			
			/*
			*	Initialize your interaction here
			*/
			
			var a;
			do {
				a = Set.randomGenerator(undefined);
			} while (a.elements.length > 10);
			var start_time = Date.now();
			a.drawVennDiagram(Interaction.container, new Point(200,100), 'C');
			var endTime = Date.now();
			Main.setObjective(endTime-start_time);
			
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
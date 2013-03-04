var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki şekilde AB doğrusunu hareket ettirerek oluşan ters açıların durumunu gözlemleyiniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}

			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
	        new OppositeAngles({
                angle:120,
                phase:0,
                center:new Point(
                        Interaction.paper.width*0.5,
                        Interaction.paper.height*0.5
                    )
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
;

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
			var path = new Path();
						
						path.add(new Point(100,100));
						path.add(new Point(100,200));
						path.add(new Point(200,200));
						path.add(new Point(200,100));
						
						path.fillColor = '#aaaaff';
						path.strokeColor = '#222255';
						path.strokeWidth = 2;
						path.closed = true;
						
						path.opacity = 0.9;
						// 
			// 
			// pie1 = new Path.SegmentedRectangle(82, 30, 120, 120, 5, 5, 5, '#aaaaff', true);
			// pie1.strokeColor = '#222255';
			// pie1.strokeWidth = 2;
			// pie1.opacity = 0.7;
			// 		
						
									var rect = new Path.Rectangle(new Point(100,100), new Point(50, 50));
									rect.strokeColor = '#222255';
									rect.fillColor = '#aaaaff';
									rect.strokeWidth = 2;
									rect.opacity = 0.9;
						// 
						// var circ = new Path.Circle(new Point(200,100), 50);
						// circ.strokeColor = '#222255';
						// circ.fillColor = '#aaaaff';
						// circ.strokeWidth = 2;
						// circ.opacity = 0.7;
						// 
			
			
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
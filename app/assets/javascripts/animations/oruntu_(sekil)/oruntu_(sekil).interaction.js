var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki şekil örüntüsünde bir sonraki adımda oluşacak şekli, verilen çokgenden gerektiği kadar sürükleyerek oluşturunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };
        Interaction.appendButton({
            bottom:"20px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"30px",
            right:"150px"
        });
        Interaction.staticGrids = new InteractiveGrids({
            rows:8,
            cols:17,
            position:new Point(15.5,15.5),
            size:23,
            style:{
                strokeColor:'#999'
            }
        });


        Interaction.inputGrids = new InteractiveGrids({
            rows:8,
            cols:7,
            position:Interaction.staticGrids.position.add(Interaction.staticGrids.size*Interaction.staticGrids.cols+10,0),
            size:Interaction.staticGrids.size,
            style:{
                strokeColor:'#333'
            }
        });
        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        var numbers = new LinearPattern(1,0/*Util.randomInteger(0,3)*/,4).numbers;
        console.log(numbers);
        var totalWidth = 1;
        var patternName;
        for(var i=0; i < numbers.length; i++){
            var pattern;
            switch(randomNumber){
                default:
                    patternName = 'TriangleShapePattern';
                    pattern = new TriangleShapePattern({position:new Point(0,1)});
            }
            pattern.number = numbers[i];
            pattern.position = pattern.position.add(new Point(totalWidth,0));
            totalWidth += pattern.getWidth()+1;
            if(i < numbers.length-1 )
                Interaction.staticGrids.drawPattern(pattern);
            else
                Interaction.correctAnswer = pattern;
        }
        Interaction.inputGrids.createTool(patternName);

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(){
        if(Interaction.inputGrids.getInputPattern().isEqual(Interaction.correctAnswer))
            return true;
        return false;
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
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
        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({

        })
        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.flushInputs();
        /*<[[TEST*/
//            randomNumber = 0;
        /*TEST]]>*/
//        var pattern = new QuadraticPattern(1,0,4);
        var pattern = Interaction.generatePattern(randomNumber);
        var inputPosition = pattern.draw(new Point(290,155));
        Interaction.appendInput({
            position:'absolute',
            top:inputPosition.y,
            left:inputPosition.x,
            marginLeft:"-18.5px",
            marginTop:'-25px'
        });
        /*<[[TEST*/
//            Main.setObjective(pattern.toString());
        /*TEST]]>*/
        Interaction.pattern = pattern;

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
    generatePattern: function(randomNumber){
        var pattern;
        var coefficient = Util.randomInteger(1,5);
        var constant = Util.randomInteger(0,5);
        var base = 2;
        var length = 5;
        var hiddenNumberIndex = Util.randomInteger(0,length-1);
        /*<[[TEST*/
//            coefficient = 4;
//            constant = 5;
        /*TEST]]>*/
        switch(randomNumber){
            case 0:
                pattern = new LinearPattern(coefficient,constant,length);
                break;
            case 1:
                pattern = new QuadraticPattern(coefficient,constant,length);
                break;
            case 2:
                pattern = new ExponentialPattern(coefficient,constant,base,length);
                break;
        }
        console.log(pattern.numbers,pattern.numbers[hiddenNumberIndex]);
        pattern.setHiddenNumber(pattern.numbers[hiddenNumberIndex]);
        Interaction.patternType = randomNumber;
        return pattern;
    }
}
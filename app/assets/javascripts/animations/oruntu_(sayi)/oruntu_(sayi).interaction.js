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
            bottom:"50px",
            right:"150px"
        })
        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.flushInputs();
        if(Interaction.pattern)
            Interaction.pattern.remove();
        /*<[[TEST*/
//            randomNumber = 0;
        /*TEST]]>*/
//        var pattern = new QuadraticPattern(1,0,4);
        var pattern = Interaction.generatePattern(randomNumber);
        var inputPosition = pattern.draw(new Point(290,135));
        Interaction.appendInput({
            position:'absolute',
            top:inputPosition.y,
            left:inputPosition.x,
            marginLeft:"-18.5px",
            marginTop:'-25px'
        }).focus();
        /*<[[TEST*/
//            Main.setObjective(pattern.toString());
        /*TEST]]>*/
        Interaction.pattern = pattern;

    },
		
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return Interaction.pattern.hiddenNumber == value;
    },
	onCorrectAnswer : function(){
		Interaction.setStatus('Tebrikler! Bu örüntünün genel sayısı: '+Interaction.pattern.toString(),true);
        Interaction.showAnswer();
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		Interaction.setStatus('Olmadı! Bu örüntünün genel sayısı: '+Interaction.pattern.toString(),false);
        Interaction.showAnswer();

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
                pattern = new ExponentialPattern(Math.ceil(coefficient*0.5),constant,base,length);
                break;
        }
        console.log(pattern.numbers,pattern.numbers[hiddenNumberIndex]);
        pattern.setHiddenNumber(pattern.numbers[hiddenNumberIndex]);
        Interaction.patternType = randomNumber;
        return pattern;
    },
    showAnswer:function(){
        Interaction.pause();
        Interaction.pattern.showHiddenNumber(1000,1000);
        $(Interaction.input).animate({opacity:0},500);
        Interaction.resume(2000);
    }
}
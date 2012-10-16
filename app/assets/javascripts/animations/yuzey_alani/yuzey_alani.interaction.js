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
        var div = Util.dom({
            parent: container,
            tag: 'div',
            css: {
                fontSize: "20px",
                position: 'absolute',
                top: '100px',
                right: '40px'
            }
        });

        Interaction.appendInput({
            position: "static"
        })

        $(div)
            .append("Yüzey alanı: ")
            .append(Interaction.input)
            .append(" cm²");
        /*
        *	Initialize your interaction here
        */

        Interaction.matrix = Util.createProjectionMatrixForObjectAt(120,120);
        Interaction.prismGroup;
        Interaction.setRandomGenerator(3);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if (Interaction.prismGroup) {
            Interaction.prismGroup.remove();
        }

        $(Interaction.input).css("color","black");

        Interaction.prismGroup = new Group();

        var width, height, length;

        switch (randomNumber) {
            case 0:
                width = Util.randomInteger(2,5);
                height = width;
                length = height;
                break;
            case 1:
                width = Util.randomInteger(2,5);
                length = width;
                height = Util.randomInteger(2,7, [width]);
                break;
            case 2:
                width = Util.randomInteger(2,7);
                height = Util.randomInteger(2,7, [width]);
                length = Util.randomInteger(2,5, [width, height]);
                break;
        }


        Interaction.answer = 2 * (width * height + width * length + height * length);

        var prism = new Prism(width, height, length, Interaction.matrix);
        Interaction.prismGroup.addChild(prism.project());
        Interaction.prismGroup.addChild(prism.showDimensions());

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return value == Interaction.answer;
    },
	onCorrectAnswer : function(){
        $(Interaction.input).css("color","green");
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğru cevap ' + Interaction.answer + ' olacaktı!',false);
        $(Interaction.input).css("color","red");
    }
}
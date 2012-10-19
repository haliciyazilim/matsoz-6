var Interaction = {

	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki geometrik cismin yüzey alanını bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"10px",
            right:"10px"
        });
        Interaction.appendStatus({
            bottom:"20px",
            right:"150px"
        })
        var div = Util.dom({
            parent: container,
            tag: 'div',
            css: {
                fontSize: "20px",
                position: 'absolute',
                top: '100px',
                right: '10px'
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

        if (Interaction.expandedShape) {
            Interaction.expandedShape.remove();
        }

        if (Interaction.areaSums) {
            Interaction.areaSums.remove();
        }

        $(Interaction.input).css("color","black");

        Interaction.prismGroup = new Group();

        var width, height, length;

        switch (randomNumber) {
            case 1:
                width = Util.randomInteger(2,5);
                height = width;
                length = height;
                break;
            case 2:
                width = Util.randomInteger(2,5);
                length = width;
                height = Util.randomInteger(2,6, [width]);
                break;
            case 0:
                width = Util.randomInteger(2,6);
                height = Util.randomInteger(2,6, [width]);
                length = Util.randomInteger(2,5, [width, height]);
                break;
        }


        Interaction.answer = 2 * (width * height + width * length + height * length);

        var prism = new Prism(width, height, length, Interaction.matrix);
        var projected = prism.project();
        projected.set_style(styles[randomNumber]);
        Interaction.prismGroup.addChild(projected);
        Interaction.prismGroup.addChild(prism.showDimensions());

        Interaction.expandedShape = prism.drawExpandedShape();
        Interaction.expandedShape.set_style(styles[randomNumber]);

        Interaction.areaCalculations = prism.drawAreaCalculations();
        Interaction.areas = prism.drawAreas();

        Interaction.expandedShape.addChild(Interaction.areaCalculations);
        Interaction.expandedShape.addChild(Interaction.areas);
        Interaction.expandedShape.position = new Point(180.5, 130.5);

        Interaction.areaSums = prism.drawAreaSums();
        Interaction.areaSums.position = new Point(448.5, 220.5);
        Interaction.areaSums.opacity = 0;

        Interaction.expandedShape.opacity = 0;
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
        Interaction.showAnswer();
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğru cevap ' + Interaction.answer + ' olacaktı!',false);
        $(Interaction.input).css("color","red");
        Interaction.showAnswer();
    },
    showAnswer : function() {
        Interaction.prismGroup.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            animationType: 'easeInEaseOut'
        });

        Interaction.expandedShape.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 1000,
            animationType: 'easeInEaseOut',
            update: function() {
                Interaction.areas.opacity = 0;
            }
        });

        Interaction.areaCalculations.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 4000,
            animationType: 'easeInEaseOut'
        });

        Interaction.areas.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 5000,
            animationType: 'easeInEaseOut'
        });

        Interaction.areaSums.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 5000,
            animationType: 'easeInEaseOut'
        });
    }
}
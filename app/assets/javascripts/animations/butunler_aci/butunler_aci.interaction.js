var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki ilk açının kollarını hareket ettirerek bütünleyeni olan açının ölçüsündeki değişimi görebilirsiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:'50px',
            right:'40px'
        });
        Interaction.appendStatus({
            bottom:'60px',
            right:'150px'
        });
        Interaction.alterLevelButton = Util.dom({
            tag:'button',
            parent:Interaction.container,
            css:{
                position:'absolute',
                bottom:'10px',
                right:'40px'
            },
            html:'2. seviyeye geç'
        });
        Interaction.setRandomGenerator(2);
        Interaction.alterLevelButton.onclick = Interaction.enterLevel2;
        Interaction.level = 1;
        /*<[[TEST*/Interaction.level = 2;/*TEST]]>*/
        Interaction.firstAnglePosition = new Point(130,150);
        Interaction.secondAnglePosition = new Point(370,150);
        Interaction.textPosition = new Point(270,220);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();
        switch(Interaction.level){
            case 1:
                Interaction.button.className = "next_button";
                var angle = new Angle({
                    angle:60,
                    phase:0,
                    center:Interaction.firstAnglePosition,
                    textPosition:Interaction.textPosition
                });
                Interaction.angle = angle;
                var suplementAngle  = new Angle({
                    angle:120,
                    phase: 15,
                    center:Interaction.secondAnglePosition,
                    isNeighbour:false
                });
//                Interaction.button.className = "next_button";
//                var angle = new Angle({
//                    angle:60,
//                    phase:0,
//                    center:new Point(250,150),
//                    textPosition:new Point(270,220)
//                });
//
//                var suplementAngle  = new Angle({
//                    angle:120,
//                    phase: 15,
//                    center:new Point(250,150),
//                    isNeighbour:true
//                })
                angle.setSuplement(suplementAngle);
                angle.draw(true);
                angle.redraw();
                break;

            case 2:
                Interaction.angle = new Angle({
                    angle:Util.randomInteger(10,170),
                    phase:Util.randomInteger(0,60)-30,
                    center:Interaction.firstAnglePosition
                });
                Interaction.angle.draw(false);
                var input = Interaction.addInput({
                    isNumber:true,
                    maxLength:3,
                    reverseText:false,
                    css:{
                    },
                    correctAnswer:180 - Interaction.angle.angle
                });
                Interaction.questionDiv = Util.dom({
                    tag:'div',
                    parent:Interaction.container,
                    html:'Bütünler açı ölçüsü = ',
                    css:{
                        position:'absolute',
                        top:'70px',
                        right:'50px'
                    }
                });
                $(Interaction.questionDiv)
                    .append(input)
                    .append("°");

                break;
        }

    },

    enterLevel1: function(){
        Interaction.level = 1;
        Interaction.alterLevelButton.innerHTML = '2. seviyeye geç';
        Interaction.alterLevelButton.onclick = Interaction.enterLevel2;
        Interaction.prepareNextQuestion();
    },

    enterLevel2: function(){
        Interaction.level = 2;
        Interaction.alterLevelButton.innerHTML = '1. seviyeye geç';
        Interaction.alterLevelButton.onclick = Interaction.enterLevel1;
        Interaction.prepareNextQuestion();

    },


	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		if(Interaction.level == 1){
            Interaction.prepareNextQuestion();
            return false;
        }
    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		if(Interaction.level = 2){
            Interaction.showAnswer();
        }
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        if(Interaction.level == 2){
            Interaction.showAnswer();
        }
    },
    showAnswer : function(){
        Interaction.pause();
        $(Interaction.questionDiv).fadeOut(1000,function(){
            $(this).remove();
            Interaction.suplementAngle = new Angle({
                angle:10,
                phase:10,
                center:Interaction.secondAnglePosition
            });
            Interaction.angle.setSuplement(Interaction.suplementAngle);
            Interaction.angle.redraw();
            Interaction.resume(1000);
        });


    }
}
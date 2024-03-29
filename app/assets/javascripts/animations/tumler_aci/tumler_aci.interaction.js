var Interaction = {

    getFramework:function(){
        return 'paper';
    },
    images:[

    ],
    objective1:'Yandaki ilk açının kırmızı kolunu hareket ettirerek tümleri olan açının ölçüsündeki değişimi görebilirsiniz.',
    objective2:'Yandaki açının tümler açısını bulunuz.',
    init:function(container){
        Interaction.container = container;
        Main.setObjective(Interaction.objective1);
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:'60px',
            right:'10px'
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
                right:'10px',
                width:'105px',
                height:'42px',
                border:0,
                backgroundImage:"url(/assets/animations/butunler_aci/seviye_2.png)"

            }
        });
        Interaction.setRandomGenerator(2);
        Interaction.alterLevelButton.onclick = Interaction.enterLevel2;
        Interaction.level = 1;
//        /*<[[TEST*/Interaction.level = 2;/*TEST]]>*/
        Interaction.firstAnglePosition = new Point(130,150);
        Interaction.secondAnglePosition = new Point(370,150);
        Interaction.textPosition = new Point(270,220);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $(Interaction.questionDiv).remove();

        Main.interactionProject.activeLayer.removeChildren();
        switch(Interaction.level){
            case 1:
                Interaction.button.className = "next_button";

                    var angle = new Angle({
                        angle:Util.randomInteger(20,70),
                        phase:0,
                        center:Interaction.firstAnglePosition,
                        textPosition:Interaction.textPosition
                    });
                    Interaction.angle = angle;
                    var complementAngle  = new Angle({
                        angle:120,
                        phase: 15,
                        center:Interaction.secondAnglePosition

                    });
                if(Util.rand01() == 1){
                    complementAngle.isNeighbour = true;
                    angle.centerPoint = new Point(215,150)
                }
                angle.setComplement(complementAngle);
                angle.draw(true);
                angle.redraw();
                break;

            case 2:
                Interaction.angle = new Angle({
                    angle:Util.randomInteger(10,80),
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
                    correctAnswer:90 - Interaction.angle.angle
                });
                Interaction.questionDiv = Util.dom({
                    tag:'div',
                    parent:Interaction.container,
                    html:'Tümleyen açı ölçüsü = ',
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
        Interaction.alterLevelButton.style.backgroundImage ="url(/assets/animations/butunler_aci/seviye_2.png)"
        Interaction.alterLevelButton.onclick = Interaction.enterLevel2;
        $(Interaction.questionDiv).remove();

        Main.setObjective(Interaction.objective1);
        Interaction.prepareNextQuestion();
    },

    enterLevel2: function(){
        Interaction.level = 2;
        Interaction.alterLevelButton.style.backgroundImage ="url(/assets/animations/butunler_aci/seviye_1.png)"
        Interaction.alterLevelButton.onclick = Interaction.enterLevel1;
        Main.setObjective(Interaction.objective2);
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
            Interaction.complementAngle = new Angle({
                angle:10,
                phase:10,
                center:Interaction.secondAnglePosition
            });
            Interaction.angle.setComplement(Interaction.complementAngle);
            Interaction.angle.redraw();
            Interaction.resume(1000);
        });


    }
}
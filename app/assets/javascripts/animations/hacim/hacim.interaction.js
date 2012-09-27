var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki dikdörtgenler prizmasının hacmini bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"20px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"30px",
            right:"150px"
        })

        Interaction.appendInput({
            position:'static'
        });

        Interaction.appendQuestion(
            "H = ",
            {
                position:'absolute',
                right:'50px',
                top:'120px'
            }
        );
        $(Interaction.questionDiv)
            .append(Interaction.input)
            .append(" cm<sup>3</sup>")

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.sizes = {
            xCube : Util.randomInteger(3,10),
            yCube : Util.randomInteger(3,7),
            zCube : Util.randomInteger(3,7)
        };
        Interaction.unitSize = 25;
        Interaction.referencePoint  = new Point(200,130);
        var size1 = new Size(
            Interaction.sizes.xCube*Interaction.unitSize,
            Interaction.sizes.yCube*Interaction.unitSize
        );
        var size2 = new Size(
            Interaction.sizes.zCube*0.4*Interaction.unitSize,
            Interaction.sizes.zCube*0.3*Interaction.unitSize
        );
        Interaction.referencePoint = Interaction.referencePoint.subtract(size1.width*0.5,size1.height*0.5)
        Interaction.referencePoint = Interaction.referencePoint.subtract(size2.width*0.5,size2.height*0.5)
        Interaction.rectPrisim = new Path.RectanglePrisim(Interaction.referencePoint.floor(),size1,size2)
        Interaction.rectPrisim.set_style({
            strokeWidth:2,
            strokeColor:'#000',
            fillColor:new RgbColor(0.65,0.83,0.89,0.7)
        });

        new PointText(Interaction.referencePoint.add(
            size1.width+size2.width+10,
            size1.height*0.5 + 10
        )).content = Interaction.sizes.yCube + " cm";
        new PointText(Interaction.referencePoint.add(
            size1.width+size2.width*0.5+10,
            size1.height+size2.height*0.5+10
        )).content = Interaction.sizes.zCube + " cm";
        new PointText(Interaction.referencePoint.add(
            size1.width*0.5+10,
            size1.height+size2.height + 20
        )).content = Interaction.sizes.xCube + " cm";



    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return (value == Interaction.sizes.xCube * Interaction.sizes.yCube  * Interaction.sizes.zCube );
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		Interaction.setStatus('Yanlış. Doğru cevap: H = ' + Interaction.sizes.xCube + ' . ' + Interaction.sizes.yCube + ' . ' +
            Interaction.sizes.zCube + ' = ' + (Interaction.sizes.xCube * Interaction.sizes.yCube  * Interaction.sizes.zCube) +
            ' cm<sup>3</sup>',false);
    }
}
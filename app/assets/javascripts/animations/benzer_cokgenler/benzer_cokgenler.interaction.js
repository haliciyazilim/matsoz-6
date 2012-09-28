var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki çokgenin benzerini yandaki kareli bölgede oluşturup kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"00px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"10px",
            right:"150px"
        })
        /*
        *	Initialize your interaction here
        */
        Interaction.setRandomGenerator(12)
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.trial++;

        Main.interactionProject.activeLayer.removeChildren();
        /*<[[TEST*/
//            randomNumber = 5;
        /*TEST]]>*/

        Interaction.masterGrid = new InteractiveGrids({
            position:new Point(10.5,10.5),
            size:30,
            style:{
                strokeColor:'#000'
            }
        }).drawShape(InteractiveGrids.CreateShape(randomNumber));

        Interaction.slaveGrid = new InteractiveGrids({
            position:new Point(300.5,10.5),
            size:18 + (randomNumber % 4) * 4,
            style:{
                strokeColor:'#666'
            }
        }).drawShape().createTool();

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        if(Interaction.slaveGrid.path.closed != true){
            Interaction.setStatus("Lütfen bir kapalı şekil çiziniz","alert");
            return false;
        }
    },
	isAnswerCorrect : function(value){
        return InteractiveGrids.AreShapesSimilar(Interaction.masterGrid.points,Interaction.slaveGrid.points);
    },
	onCorrectAnswer : function(){
		Interaction.pause();
    },
	onWrongAnswer : function(){
    },
	onFail : function(){
        Interaction.setStatus("Yanlış cevap.",false);
		
    }
}
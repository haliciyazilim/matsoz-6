var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki kareli zeminde verilen çokgenin eşini diğer kareli zeminde oluşturunuz ve kontrol ediniz.');
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

        Interaction.setRandomGenerator(12)
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.trial++;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.masterShape = InteractiveGrids.CreateShape(randomNumber);
        Interaction.masterGrid = new InteractiveGrids({
            position:new Point(10.5,23.5),
            size:27,
            style:{
                strokeColor:'#000'
            }
        }).drawShape(Interaction.masterShape);
        Interaction.slaveGrid = new InteractiveGrids({
            position:new Point(300.5,23.5),
            size:27,
            style:{
                strokeColor:'#666'
            }
        }).drawShape().createTool();
    },

    preCheck : function(){
        if(Interaction.slaveGrid.path.closed != true){
            Interaction.setStatus("Lütfen bir kapalı şekil çiziniz","alert");
            return false;
        }
    },
    isAnswerCorrect : function(value){
        Interaction.slaveGrid.path.strokeColor = "green";
        return InteractiveGrids.AreShapesSame(Interaction.masterGrid.points,Interaction.slaveGrid.points);
    },
    onCorrectAnswer : function(){
        Interaction.pause();
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus("Yanlış cevap.",false);
        Interaction.slaveGrid.path.strokeColor = "red";
        Interaction.pause();
        AnimationManager.delay(function(){
            Interaction.slaveGrid.removeShape();
            Interaction.slaveGrid.drawShape(Interaction.masterShape);
            Interaction.slaveGrid.path.strokeColor = "green";
            Interaction.slaveGrid.path.opacity = 0;
            InteractiveGrids.AreShapesSame(Interaction.slaveGrid.points,Interaction.masterGrid.points)
        },2000);

    }
}
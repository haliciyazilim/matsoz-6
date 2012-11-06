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
            bottom:"10px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"20px",
            right:"150px"
        });
        Interaction.undoButton = Util.dom({
            parent:container,
            tag:'input'
        });
        Interaction.undoButton.setAttribute('class','next_button');
        Interaction.undoButton.setAttribute('type','button');
        $(Interaction.undoButton).css({
            position:'absolute',
            bottom:'70px',
            right:'10px',
            backgroundImage:'url(/assets/btn_gray_undo_text.png)',
            width:'57px',
            height:'32px'
        })
        Interaction.undoButton.onclick = Interaction.undo;
        Interaction.setRandomGenerator(12)
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Interaction.trial++;
        Main.interactionProject.activeLayer.removeChildren();
        /*<[[TEST*/
//            randomNumber = 5;
        /*TEST]]>*/
        var v1 = ['A','B','C','D','E','F','G','H','I','J'];
        var v2 = ['K','L','M','N','O','P','R','S','T','U'];
        if(Util.rand01()==1){
            var vertex1 = v1;
            var vertex2 = v2;
        }
        else{
            var vertex1 = v2;
            var vertex2 = v1;

        }

        Interaction.masterShape = InteractiveGrids.CreateShape(randomNumber);
        Interaction.masterGrid = new InteractiveGrids({
            position:new Point(10.5,23.5),
            size:27,
            style:{
                strokeColor:'#000'
            },
            vertexLetters:vertex1
        }).drawShape(Interaction.masterShape);
        Interaction.slaveGrid = new InteractiveGrids({
            position:new Point(300.5,23.5),
            size:15 + (randomNumber % 4) * 4,
            style:{
                strokeColor:'#666'
            },
            vertexLetters:vertex2
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
        return InteractiveGrids.AreShapesSimilar(Interaction.masterGrid.points,Interaction.slaveGrid.points);
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
            AnimationManager.delay(function(){
                InteractiveGrids.AreShapesSimilar(Interaction.masterGrid.points,Interaction.slaveGrid.points);
            },500)
        },2000);

    },
    undo:function(){
        Interaction.slaveGrid.undo();
    }

}
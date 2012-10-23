var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki eş küplerle oluşturulmuş şeklin istenen yönde görünümünü kareli bölgeye çiziniz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"15px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"25px",
            right:"150px"
        });


        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        /*<[[TEST*/
            randomNumber  = 0;
        /*TEST]]>*/
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.grids = new InteractiveGrids({
            position:new Point(332.5,15.5),
            size:27,
            style:{
                strokeColor:'#AAA'
            },
            pieceType:2,
            pieceStyle:{
                strokeWidth:2,
                strokeColor:'#000'
            }
        });


        Interaction.grids.createTool("ShapePattern");
        Interaction.shape = Shape3.Generate(randomNumber);
        Interaction.shape.draw(new Point(150,200));
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
		
    }
}
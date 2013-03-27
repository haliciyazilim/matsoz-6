var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
    FRONT:'onden',
    BACK:'arkadan',
    RIGHT:'sagdan',
    LEFT:'soldan',
    DOWN:'alttan',
    UP:'ustten',
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki eş küplerle oluşturulmuş şeklin istenen yönde görünümünü kareli bölgede karelerin üzerine basarak çiziniz ve kontrol ediniz.');
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
        Interaction.appendQuestion('<span id="side"></span>',{
            position:'absolute',
            left:'120px',
            top:'20px',
            fontWeight:'bold'

        })
        Interaction.setRandomGenerator(6);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        /*<[[TEST*/
//            randomNumber  = 5;
        /*TEST]]>*/
        var askedSide = null;
        switch(Util.randomInteger(0,6)){
            case 0:
                askedSide = Shape3.FrontSide;
                break;
            case 1:
                askedSide = Shape3.BackSide;
                break;
            case 2:
                askedSide = Shape3.LeftSide;
                break;
            case 3:
                askedSide = Shape3.RightSide;
                break;
            case 4:
                askedSide = Shape3.UpSide;
                break;
            case 5:
                askedSide = Shape3.DownSide;
                break;
        }
        Interaction.setQuestionParams({
            id:'side',html:askedSide
        })
        Interaction.askedSide = askedSide;
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

        Interaction.tool = Interaction.grids.createTool("ShapePattern");
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

        var inputPoints = Interaction.grids.getInputPattern().generateShapePoints();
        var correctPoints = Interaction.shape.getMinimizedFlattedPoints(Interaction.askedSide).normalizePoints();

        return inputPoints.equals(correctPoints);

    },
	onCorrectAnswer : function(){
        Interaction.showCorrectAnswer();
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap. Doğrusu şekil üzerinde gösterilecektir.',false);
		Interaction.showCorrectAnswer();
    },
    showCorrectAnswer:function(){
        Interaction.tool.remove();
        Interaction.pause();
        Interaction.shape.showCorrectSide(Interaction.askedSide);
    }
}
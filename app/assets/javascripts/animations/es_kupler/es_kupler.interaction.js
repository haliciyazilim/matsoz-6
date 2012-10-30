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
        var askedSide = null;
        switch(randomNumber){
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

        var points = Interaction.grids.getInputPattern().generateShapePoints();

        for(var i=0;i<points.length;i++){
            console.log(points[i].x,points[i].y);
        }
        points.normalizePoints();
        console.log('abc');
        for(var i=0;i<points.length;i++){
            console.log(points[i].x,points[i].y);
        }

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
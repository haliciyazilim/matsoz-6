var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki kareli zeminde verilen şekli sürükleyerek istenen yönde öteleyiniz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"0px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"10px",
            right:"150px"
        });
        Interaction.appendQuestion('<div id="command"></div>',{
            position:'absolute',
            right:'30px',
            top:'120px',
            width:'200px',
            lineHeight:'26px',
            fontSize:'16px',
            textAlign:'center',
            fontWeight:'bold'
        });

        Interaction.setRandomGenerator(1)
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.trial++;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.shape = InteractiveGrids.CreateShape(randomNumber)
        Interaction.grids = new InteractiveGrids({
            position:new Point(100.5,23.5),
            size:30,
            style:{
                strokeColor:'#999'
            }
        }).drawShape(Interaction.shape).createTool();
        Interaction.initialPathPosition = Interaction.grids.getPathPosition();
        do
            Interaction.generateAndShowCommand()
        while(function(){
            var newPositionOnGrids = Interaction.grids.getPathPosition().add(Interaction.command);
            Interaction.grids.setPathPosition(newPositionOnGrids);
            var isOverflowed = false;
            if(Interaction.grids.isPathVerticalOverflowed() || Interaction.grids.isPathHorizontalOverflowed())
                isOverflowed = true;
            Interaction.grids.setPathPosition(Interaction.initialPathPosition);
            return isOverflowed;
        }())
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        if(Interaction.initialPathPosition.equals(Interaction.grids.getPathPosition())){
            Interaction.setStatus('Lütfen şekli farklı bir noktaya sürükleyiniz','alert');
            return false;

        }
    },
	isAnswerCorrect : function(value){
        return Interaction.command.equals(Interaction.grids.getPathPosition().subtract(Interaction.initialPathPosition));
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){

    },
	onFail : function(){
		Interaction.pause();
        Interaction.grids.animateToNewPosition({
            position:Interaction.command.add(Interaction.initialPathPosition),
            callback:Interaction.resume,
            delay:2000
        });
        Interaction.setStatus('Yanlış cevap. Şekil olması gerektiği noktaya taşınacaktır.',false)
    },
    generateAndShowCommand:function(){
        var point = new Point(Util.rand01()?1:-1,Util.rand01()?1:-1);
        point = point.multiply(Util.randomInteger(1,4),Util.randomInteger(1,4));
        Interaction.setQuestionParams({id:'command',html:Interaction.commandToString(point)});
        Interaction.command = point;
    },
    commandToString:function(vector){
        var x = vector.x;
        var y = vector.y;
        var str = "";
        if(x != 0){
            str += Util.numberToString(Math.abs(x)) + ' birim ';
            str += (x>0?'sağa':'sola');
        }
        if(x != 0 && y != 0)
            str += ",<br/> ";
        if(y !=0 ){
            str += Util.numberToString(Math.abs(y)) + ' birim ';
            str += (y>0?'aşağıya':'yukarıya');
        }
        return str;
    }
}
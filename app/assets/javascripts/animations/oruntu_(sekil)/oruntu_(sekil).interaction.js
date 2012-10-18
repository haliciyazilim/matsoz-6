var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'question_mark',
            src:'/assets/animations/oruntu_(sekil)/question_mark.png'
        }

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki şekil örüntüsünde bir sonraki adımda oluşacak şekli, verilen çokgenden gerektiği kadar sürükleyerek oluşturunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };
        Interaction.appendButton({
            bottom:"20px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"30px",
            right:"150px"
        });

        Interaction.setRandomGenerator(6);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Main.interactionProject.activeLayer.removeChildren();
        Interaction.staticGrids = new InteractiveGrids({
            rows:9,
            cols:23,
            position:new Point(10.5,15.5),
            size:18,
            style:{
                strokeColor:'#bbb'
            }
        });
        Interaction.inputGrids = new InteractiveGrids({
            rows:9,
            cols:8,
            position:Interaction.staticGrids.position.add(Interaction.staticGrids.size*Interaction.staticGrids.cols+10,0),
            size:Interaction.staticGrids.size,
            style:{
                strokeColor:'#acf'
            }
        });
        var numbers = new LinearPattern(1,0/*Util.randomInteger(0,3)*/,4).numbers;
        var totalWidth = 1;
        var patternName;
        var answer = Util.randomInteger(0,numbers.length);

        Interaction.pieceType = Util.randomInteger(0,4);
        var r = Math.random()*0.5;
        var g = Math.random()*0.5;
        var b = Math.random()*0.5;
        Interaction.pieceStyle = {
            fillColor: new RgbColor(r,g,b),
            strokeColor: new RgbColor(r*0.5,g*0.5,b*0.5)
        }
        var questionMarkHeight = 0;
        /*<[[TEST*/
//            randomNumber = 5;
        /*TEST]]>*/
        for(var i=0; i < numbers.length; i++){
            var pattern;
            switch(randomNumber){
                case 0:
                    patternName = 'TriangleShapePattern';
                    pattern = new TriangleShapePattern({position:new Point(0,2)});
                    break;

                case 1:
                    patternName = 'XShapePattern';
                    pattern = new XShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
                case 2:
                    patternName = 'HexagonShapePattern';
                    pattern = new HexagonShapePattern({position:new Point(0,2)});
                    break;
                case 3:
                    patternName = 'PlusShapePattern';
                    pattern = new PlusShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
                case 4:
                    patternName = 'XPlusShapePattern';
                    pattern = new XPlusShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
                case 5:
                    patternName = 'DoubleXShapePattern';
                    pattern = new DoubleXShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
            }
            pattern.number = numbers[i];
            pattern.pieceType = Interaction.pieceType;
            pattern.pieceStyle = Interaction.pieceStyle;
            if( i == answer ){
                var questionMark = new QuestionMarkPattern({});
                questionMark.position = pattern.position.add(totalWidth,questionMarkHeight);
                Interaction.staticGrids.drawPattern(questionMark);
                pattern.position = pattern.position.add(totalWidth,0);
                Interaction.correctAnswer = pattern;
                totalWidth += 4;
            }
            else{
                pattern.position = pattern.position.add(totalWidth,0);
                Interaction.staticGrids.drawPattern(pattern);
                totalWidth += pattern.getWidth()+1;

            }

        }
        Interaction.inputGrids.createTool(patternName);

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        var pattern = Interaction.inputGrids.getInputPattern()
            pattern.generateShapePoints()
        if(pattern.shapePoints.length == 0){
            Interaction.setStatus('Lutfen bir sekil ciziniz','alert');
            return false;
        }

    },
	isAnswerCorrect : function(){
        if(Interaction.inputGrids.getInputPattern().isEqual(Interaction.correctAnswer))
            return true;
        return false;
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlis cevap. Dogrusu girdi kisminda gozukecektir.','alert');
        Interaction.pause();
        Interaction.inputGrids.cleanGrids(700,1000);
        AnimationManager.delay(function(){
            var pattern = Interaction.correctAnswer;
            pattern.position = pattern.position.multiply(0,1).add(1,0);
            Interaction.inputGrids.drawPattern(pattern);
            Interaction.resume();
        },2000)

    }
}
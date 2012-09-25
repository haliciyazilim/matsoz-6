var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki nokta ve doğru sembollerinden birini seçiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.letters = [];
        Interaction.letters[0] = "A";
        Interaction.letters[1] = "B";
        Interaction.letters[2] = "C";
        Interaction.letters[3] = "D";
        Interaction.letters[4] = "E";
        Interaction.letters[5] = "F";
        Interaction.letters[6] = "K";
        Interaction.letters[7] = "L";
        Interaction.letters[8] = "M";
        Interaction.letters[9] = "N";

        Interaction.setRandomGenerator(9);
        Interaction.pointRadius = 6;
        Interaction.lineWidth = 3;
        var tool = new Tool();
        Interaction.tool = tool;
        tool.activate();
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.cleanButton = Util.dom({
            parent:Interaction.container,
            tag:'button',
            css:{
                position:'absolute',
                bottom:'20px',
                left:'200px'
            }
        });
        Interaction.cleanButton.setAttribute('class','repeat_button')
        Interaction.cleanButton.setAttribute('type','button');
        Interaction.cleanButton.onclick = Interaction.cleanPaper;

        Interaction.pointButton = Util.dom({
            parent:Interaction.container,
            tag:'button',
            css:{
                position:'absolute',
                top:'20px',
                left:'20px',
                border:'none',
                backgroundImage:'url(/assets/animations/dogru_ile_nokta_iliskisi/btn_gray_point.png)',
                backgroundColor:'#fff',
                height:'30px',
                width:'73px'
            }
        });
        Interaction.pointButton.setAttribute('type','button');
        Interaction.pointButton.onclick = Interaction.selectPoint;

        Interaction.lineButton = Util.dom({
            parent:Interaction.container,
            tag:'button',
            css:{
                position:"absolute",
                top:'20px',
                left:'120px',
                border:'none',
                backgroundImage:'url(/assets/animations/dogru_ile_nokta_iliskisi/btn_gray_dogru.png)',
                backgroundColor:'#fff',
                height:'30px',
                width:'73px'
            }
        });
        Interaction.lineButton.setAttribute('type','button');
        Interaction.lineButton.onclick = Interaction.selectLine;
    },
    cleanPaper:function(callFunction){
        console.log(callFunction);
        if(callFunction != false )
            callFunction = true;
        if(callFunction == true)
            if(Interaction.selectedFunction){
                Interaction.selectedFunction();
                return;
            }

        Main.interactionProject.activeLayer.removeChildren();
        Interaction.pointA = null
        Interaction.pointB = null;
        Interaction.circle1 = undefined;
        Interaction.circle2 = undefined;


    },
    selectPoint:function(){
        Interaction.cleanPaper(false);
        Interaction.selectedFunction = Interaction.selectPoint;
        new Point(Util.randomInteger(150,350),Util.randomInteger(125,175)).showOnCanvas(Interaction.pointRadius*1.5);
        Main.setObjective("Bu noktadan geçen bir doğru çizmek için ekranda uygun yerlerde iki noktaya basınız.");
        Interaction.pointA = null;
        Interaction.pointB = null;
        Interaction.tool.onMouseDown = function(event){
            if(Interaction.pointA != null){
                Interaction.pointB = event.point;
                Interaction.pointB.showOnCanvas(Interaction.pointRadius);
                var p1 = Interaction.pointA.findPointTo(Interaction.pointB,-50);
                var p2 = Interaction.pointB.findPointTo(Interaction.pointA,-50);
                new Path.TwoSidedArrow(p1,p2,15,30);
                var tp1 = Interaction.pointA.findPointTo(Interaction.pointB,20).getRotatedPoint(90,Interaction.pointA).add(0,8);
                var pt1 = new PointText(tp1);
                pt1.content = "A";
                pt1.fontSize = 16;
                pt1.justification = "center";

                var tp2 = Interaction.pointB.findPointTo(Interaction.pointA,20).getRotatedPoint(-90,Interaction.pointB).add(0,8);
                var pt2 = new PointText(tp2);
                pt2.content = "B";
                pt2.fontSize = 16;
                pt2.justification = "center";

                Interaction.pointA = null;
            }else if(Interaction.pointB == null){
                Interaction.pointA = event.point;
                Interaction.pointA.showOnCanvas(Interaction.pointRadius);
            }
        }

    },
    selectLine:function(){
        Interaction.cleanPaper(false);
        Interaction.selectedFunction = Interaction.selectLine;
        Interaction.pointA = new Point(Util.randomInteger(60,200),Util.randomInteger(75,175));
        Interaction.pointB = new Point(Util.randomInteger(360,500),Util.randomInteger(75,175));
        Main.setObjective("Bu doğru üzerinde iki nokta belirtiniz.");

        Interaction.line = new Path.TwoSidedArrow(
            Interaction.pointA,
            Interaction.pointB,
            15,30
        );
        Interaction.tool.onMouseDown = function(event){
            var projectedPoint = event.point.projectToLine(Interaction.pointA,Interaction.pointB);
            if(event.point.getDistance(projectedPoint) > 15)
                return;
            if( projectedPoint.getDistance(Interaction.pointA.findPointTo(Interaction.pointB,30),true) +
                projectedPoint.getDistance(Interaction.pointB.findPointTo(Interaction.pointA,30),true)
                >
                Interaction.pointA.findPointTo(Interaction.pointB,30).getDistance(Interaction.pointB.findPointTo(Interaction.pointA,30),true)+1)
                return;
            if(Interaction.circle1 == undefined || Interaction.circle2 == undefined)
            {
                var circle = projectedPoint.showOnCanvas(10);
                if(Interaction.circle1 == undefined)
                    Interaction.circle1 = circle;
                else if(Interaction.circle2 == undefined)
                    Interaction.circle2 = circle;
            }


        }

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
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki alanda iki nokta belirleyerek bir doğru oluşturunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<button id="again" class="repeat_button" style="position:absolute;bottom:20px;right:250px;"></button>');

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        $('#again').css("opacity",0.4);
        $('#again').get(0).onclick = null;

        Interaction.clickk = 0;

        var tool = new Tool();

        tool.onMouseDown = function(event){

            if(Interaction.clickk == 0){
                Interaction.firstPoint = event.downPoint;
                if(Interaction.firstPoint.x > 40 && Interaction.firstPoint.y > 40 && Interaction.firstPoint.x < 550 && Interaction.firstPoint.y < 210){
                    Interaction.path = new Path();
                    Interaction.path.strokeColor = "black";
                    Interaction.path.strokeWidth = 4;
                    Interaction.path.add(event.downPoint);
                    Interaction.circle1 = new Path.Circle(Interaction.firstPoint,9);
                    Interaction.circle1.strokeColor = "black";
                    Interaction.circle1.fillColor = "black";

                    Interaction.clickk += 1;
                }
            }
            else if(Interaction.clickk == 1){
                Interaction.secondPoint = event.downPoint;
                if(Interaction.secondPoint.x > 40 && Interaction.secondPoint.y > 40 && Interaction.secondPoint.x < 550 && Interaction.secondPoint.y < 210){
                    Interaction.clickk += 1;
                    Interaction.path.add(event.downPoint);

                    $('#again').css("opacity",1);
                    $('#again').get(0).onclick = deleteAll;

                    Interaction.line1 = new Path.Line(new Point(Interaction.firstPoint.findPointTo(Interaction.secondPoint,-30)),new Point(Interaction.firstPoint));
                    Interaction.line1.strokeColor = "black";
                    Interaction.line1.strokeWidth = 4;

                    Interaction.line2 = new Path.Line(new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-30)),new Point(Interaction.secondPoint));
                    Interaction.line2.strokeColor = "black";
                    Interaction.line2.strokeWidth = 4;

                    Interaction.circle2 = new Path.Circle(Interaction.secondPoint,9);
                    Interaction.circle2.strokeColor = "black";
                    Interaction.circle2.fillColor = "black";

                    Interaction.text1 = new PointText(new Point(Interaction.firstPoint.x, Interaction.firstPoint.y+5));
                    Interaction.text1.justification = 'center';
                    Interaction.text1.fillColor = 'white';
                    Interaction.text1.content = 'A';
                    Interaction.text1.strokeWidth = '1px';

                    Interaction.text2 = new PointText(new Point(Interaction.secondPoint.x, Interaction.secondPoint.y+5));
                    Interaction.text2.justification = 'center';
                    Interaction.text2.fillColor = 'white';
                    Interaction.text2.content = 'B';
                    Interaction.text2.strokeWidth = '1px';
                }
            }
            else{
                return false;
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
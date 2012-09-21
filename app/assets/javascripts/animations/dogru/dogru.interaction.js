var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'paper',
            src:'/assets/animations/mavi_cizgili_kagit.jpg'
        }
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki alanda iki nokta belirleyerek bir doğru oluşturunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<button id="again" class="repeat_button" style="position:absolute;bottom:20px;right:90px;"></button>');

        Interaction.appendStatus({
            bottom:'20px',
            right:'240px',
        //    border:'1px solid',
            width:'310px',
            height:'26px',
            textAlign:'center'
        });

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        $('#again').css("opacity",0.4);
        $('#again').get(0).onclick = null;

        Interaction.clickk = 0;
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

        Interaction.rectangle = new Path.Rectangle(new Point(40.5,40.5),new Size(500,160));
        Interaction.rectangle.strokeColor = "black";
        Interaction.rectangle.fillColor = "white";
        Interaction.rectangle.opacity = 0;

        var pp = new Raster('paper');
        pp.position = new Point(295,150);
        var tool = new Tool();

        tool.onMouseDown = function(event){

            if(Interaction.clickk == 0){
                Interaction.firstPoint = event.downPoint;
                if(Interaction.rectangle.hitTest(Interaction.firstPoint)){
                    Interaction.path = new Path();
                    Interaction.path.strokeColor = "black";
                    Interaction.path.strokeWidth = 4;
                    Interaction.path.add(event.downPoint);
                    Interaction.circle1 = new Path.Circle(Interaction.firstPoint,6);
                    Interaction.circle1.strokeColor = "black";
                    Interaction.circle1.fillColor = "black";

                    Interaction.clickk += 1;
                }
            }
            else if(Interaction.clickk == 1){
                if(Interaction.firstPoint.getDistance(event.downPoint) < 25){
                    Interaction.setStatus('Lütfen daha uzak bir nokta belirleyiniz.',false);
                }
                else{
                    Interaction.secondPoint = event.downPoint;
                    if(Interaction.rectangle.hitTest(Interaction.secondPoint)){
                        Interaction.clickk += 1;
                        Interaction.path.add(event.downPoint);

                        $('#again').css("opacity",1);
                        $('#again').get(0).onclick = deleteAll;

                        var myRand = Util.randomInteger(0,5);
                        myRand *= 2;

                        Interaction.line1 = new Path.Line(new Point(Interaction.firstPoint.findPointTo(Interaction.secondPoint,-35)),new Point(Interaction.firstPoint));
                        Interaction.line1.strokeColor = "black";
                        Interaction.line1.strokeWidth = 4;
                        Interaction.arrow = new Path.OneSidedArrow(new Point(Interaction.firstPoint.findPointTo(Interaction.secondPoint,-35)), new Point(Interaction.firstPoint.findPointTo(Interaction.secondPoint,-36)), 10,30);

                        Interaction.line2 = new Path.Line(new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-35)),new Point(Interaction.secondPoint));
                        Interaction.line2.strokeColor = "black";
                        Interaction.line2.strokeWidth = 4;
                        Interaction.arrow2 = new Path.OneSidedArrow(new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-35)), new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-36)), 10,30);

                        Interaction.circle2 = new Path.Circle(Interaction.secondPoint,6);
                        Interaction.circle2.strokeColor = "black";
                        Interaction.circle2.fillColor = "black";

                        var myPoint1 = Interaction.firstPoint.findPointTo(Interaction.secondPoint,20);
                        myPoint1 = myPoint1.getRotatedPoint(90,Interaction.firstPoint);
                        var myPoint2 = Interaction.secondPoint.findPointTo(Interaction.firstPoint,20);
                        myPoint2 = myPoint2.getRotatedPoint(-90,Interaction.secondPoint);

                        Interaction.text1 = new PointText(new Point(myPoint1.x, myPoint1.y+4));
                        Interaction.text1.justification = 'center';
                        Interaction.text1.fillColor = 'black';
                        Interaction.text1.content = Interaction.letters[myRand];
                        Interaction.text1.strokeWidth = '1px';

                        Interaction.text2 = new PointText(new Point(myPoint2.x, myPoint2.y+4));
                        Interaction.text2.justification = 'center';
                        Interaction.text2.fillColor = 'black';
                        Interaction.text2.content = Interaction.letters[myRand+1];
                        Interaction.text2.strokeWidth = '1px';

                        Interaction.text3 = new PointText(new Point(206.5,264.5));
                        Interaction.text3.justification = 'center';
                        Interaction.text3.fillColor = 'black';
                        Interaction.text3.fontSize = 16;
                        Interaction.text3.content = ""+Interaction.letters[myRand+0]+Interaction.letters[myRand+1]+" doğrusu";

                        Interaction.setStatus('');
                    }
                }
            }
            else{
                return false;
            }
        }
    },
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
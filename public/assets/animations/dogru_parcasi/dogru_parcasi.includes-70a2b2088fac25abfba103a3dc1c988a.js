function __Styles(){

    lettersStyle = {
        position:'absolute',
        top:'106px',
        left:'242px',
        width:'308px',
        height:'40px',
        fontSize:'24px',
        textAlign:'center',
        opacity:0
    };
};
var deleteAll = function(){
    if(Interaction.path){
        Interaction.path.remove();
    }

    if(Interaction.line2){
        Interaction.line2.remove();
    }

    if(Interaction.circle1){
        Interaction.circle1.remove();
    }

    if(Interaction.circle2){
        Interaction.circle2.remove();
    }

    if(Interaction.text1){
        Interaction.text1.remove();
    }

    if(Interaction.text2){
        Interaction.text2.remove();
    }

    if(Interaction.text3){
        Interaction.text3.remove();
    }

    Interaction.clickk = 0;

    Interaction.firstPoint = null;
    Interaction.secondPoint = null;

    $('#again').css("opacity",0.4);
    $('#again').get(0).onclick = null;
};
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var lineStart = animStart+1000;
        var dotStart = lineStart+6000;
        var lettersStart = dotStart+2000;


    //    Animation.line = new Path.Line(new Point(379.5,80.5), new Point(381.5,80.5));
    //    Animation.line.strokeColor = "black";

        var dot1 = new Path.Circle(new Point(235,80),6);
        dot1.strokeColor = "black";
        dot1.fillColor = "black";
        dot1.opacity = 0;

        var dot2 = new Path.Circle(new Point(525,80),6);
        dot2.strokeColor = "black";
        dot2.fillColor = "black";
        dot2.opacity = 0;

        Animation.line2 = new Path.Line(new Point(234.5,80.5), new Point(525.5,80.5));
        Animation.line2.strokeColor = "black";
        Animation.line2.strokeWidth = 3;
        Animation.line2.opacity = 0;

        var animHelper = new AnimationHelper({
            X:0
        });

        animHelper.animate({
            style:{
                X:230
            },
            duration:5000,
            delay:lineStart,
            animationType:'linear',
            update:function(){
                if(this.X < 150){
                    if(Animation.line){
                        Animation.line.remove();
                    }

                    Animation.line = new Path.Line(new Point(379.5-this.X,80.5), new Point(381.5+this.X,80.5));
                    Animation.line.strokeColor = "black";
                    Animation.line.strokeWidth = 3;
                }
                else{
                    if(Animation.line3){
                        Animation.line3.remove();
                    }
                    if(Animation.line4){
                        Animation.line4.remove();
                    }
                    Animation.line3 = new Path.Line(new Point(230.5,80.5),new Point(379.5-this.X,80.5));
                    Animation.line3.strokeColor = "black";
                    Animation.line3.strokeWidth = 3;
                    Animation.line3.opacity = 1;
                    Animation.line3.insertAbove(dot1);

                    Animation.line4 = new Path.Line(new Point(530.5,80.5), new Point(381.5+this.X,80.5));
                    Animation.line4.strokeColor = "black";
                    Animation.line4.strokeWidth = 3;
                    Animation.line4.opacity = 1;
                    Animation.line4.insertAbove(dot2);
                }
            },
            callback:function(){
                Animation.line3.animate({
                    style:{
                        opacity:0
                    },
                    duration:1000,
                    delay:3000,
                    animationType:'easeInOutQuad'
                });

                Animation.line4.animate({
                    style:{
                        opacity:0
                    },
                    duration:1000,
                    delay:3000,
                    animationType:'easeInOutQuad'
                });
            }
        });

        dot1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });
        dot2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });

        Animation.line2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });
        console.log("dotStart ",dotStart);
        var letters = Util.dom({parent:Animation.container, tag:'div', css:lettersStyle,
            html:'<span style="float:left">A</span> <span style="float:right">B</span><span style="position:relative;top:30px;">AB doğru parçası</span>&nbsp;&nbsp;&nbsp;<span style="position:relative;top:30px;">[AB]</span>'
        });

        $(letters).delay(lettersStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});
    }
}
;
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
        Main.setObjective('Yandaki alanda iki nokta belirleyerek bir doğru parçası oluşturunuz.');
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

                        Interaction.text3 = new PointText(new Point(186.5,260.5));
                        Interaction.text3.justification = 'center';
                        Interaction.text3.fillColor = 'black';
                        Interaction.text3.fontSize = 16;
                        Interaction.text3.content = ""+Interaction.letters[myRand+0]+Interaction.letters[myRand+1]+" doğru parçası";

                        Interaction.setStatus('');
                    }
                }
            }
            else{
                return false;
            }
        };
        tool.onMouseUp = function(event){

        };
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
;





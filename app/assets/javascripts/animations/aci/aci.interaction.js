var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'compass_left_leg',
            src:'/assets/animations/compass_left_leg.png'
        },
        {
            id:'compass_knuckle',
            src:'/assets/animations/compass_knuckle.png'
        },
        {
            id:'compass_right_leg',
            src:'/assets/animations/compass_right_leg.png'
        }
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki MNK açısının açıortayını çiziniz. Önce pergelin sivri ucunu açının köşesine yerleştirip bir yay çiziniz. Yayın açının kollarını kestiği noktalardan pergelin açıklığını bozmadan yaylar çiziniz ve kesiştikleri noktayı açının köşesi ile birleştiriniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<button id="drawBtn" class="draw_text_button"></button>' +
            '<button id="repeatBtn" class="repeat_button"></button>');

        $('#drawBtn').css({
            position:'absolute',
            top:'210px',
            left:'460px',
            width:'55px',
            height:'32px'
        });

        $('#repeatBtn').css({
            position:'absolute',
            top:'160px',
            left:'440px',
            width:'103px',
            height:'40px'
        });



        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if(Interaction.drawCompass){
            Interaction.drawCompass.remove();
        }

        if(Interaction.angle){
            Interaction.angle.remove();
        }

        if(Interaction.arcGroup){
            Interaction.arcGroup.remove();
        }

        if(Interaction.lastLine){
            Interaction.lastLine.remove();
        }

        $('#drawBtn').css("opacity",1);
        $('#drawBtn').get(0).onclick = Interaction.drawAndAnimateCurves;

        $('#repeatBtn').css("opacity", 0);
        $('#repeatBtn').get(0).onclick = null;

        if(Interaction.angle){
            Interaction.angle.remove();
        }
        if(Interaction.compass){
            Interaction.compass.remove();
        }
        Interaction.br = 12;
        Interaction.step2 = false;
        initCompass(new Point(440.5,160.5));
        Interaction.myAngle = Util.randomInteger(50,121);
        Interaction.myCenterPoint = new Point(200.5,180.5);
        Interaction.referencePoint = new Point(Interaction.myCenterPoint.x,Interaction.myCenterPoint.y-120);
        Interaction.point1 = Interaction.referencePoint.getRotatedPoint(-Interaction.myAngle/2,Interaction.myCenterPoint);
        Interaction.point2 = Interaction.referencePoint.getRotatedPoint(Interaction.myAngle/2,Interaction.myCenterPoint);

        Interaction.angle = new Group();

        var lline1 = new Path.OneSidedArrow(Interaction.myCenterPoint,Interaction.point1.findPointTo(Interaction.myCenterPoint,-30),6,20);
        var lline2 = new Path.OneSidedArrow(Interaction.myCenterPoint,Interaction.point2.findPointTo(Interaction.myCenterPoint,-30),6,20);

        var dot1 = new Path.Circle(Interaction.myCenterPoint,4);
        dot1.fillColor = 'black';
        var dot2 = new Path.Circle(Interaction.point1,4);
        dot2.fillColor = 'black';
        var dot3 = new Path.Circle(Interaction.point2,4);
        dot3.fillColor = 'black';

        var letter1 = new PointText(new Point(Interaction.myCenterPoint.x+20,Interaction.myCenterPoint.y+20));
        letter1.justification = 'center';
        letter1.content = 'N';
        letter1.fontSize = 16;

        var letter2 = new PointText(new Point(Interaction.point1.x-20,Interaction.point1.y+20));
        letter2.justification = 'center';
        letter2.content = 'M';
        letter2.fontSize = 16;

        var letter3 = new PointText(new Point(Interaction.point2.x+20,Interaction.point2.y+20));
        letter3.justification = 'center';
        letter3.content = 'K';
        letter3.fontSize = 16;

        Interaction.angle.addChild(lline1);
        Interaction.angle.addChild(lline2);
        Interaction.angle.addChild(dot1);
        Interaction.angle.addChild(dot2);
        Interaction.angle.addChild(dot3);
        Interaction.angle.addChild(letter1);
        Interaction.angle.addChild(letter2);
        Interaction.angle.addChild(letter3);

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
		
    },
    drawAndAnimateCurves : function(){

        var dx = Interaction.compass.d;

        var intersection1 = Interaction.myCenterPoint.findPointTo(Interaction.point1,dx*1.15);
        var intersection2 = Interaction.myCenterPoint.findPointTo(Interaction.point2,dx*1.15);
        var difference1 = Interaction.myCenterPoint.x-intersection1.x;
        var difference2 = intersection2.x - Interaction.myCenterPoint.x;

        if(Interaction.compass){
            Interaction.compass.remove();
        }

        Interaction.arcGroup = new Group();
        var animHelper = new AnimationHelper({
            angle1:0,
            angle2:90,
            angle3:-90,
            X:0
        });

        animHelper.animate({
            style:{
                angle1:-180
            },
            duration:2000,
            delay:1000,
            animationType:'easeInOutQuad',
            update:function(){
                if(Interaction.drawCompass){
                    Interaction.drawCompass.remove();
                }
                if(Interaction.firstArc){
                    Interaction.firstArc.remove();
                }

                Interaction.firstArc = new Path.ArcByAngle(Interaction.myCenterPoint,dx*1.15,this.angle1,0);
                Interaction.firstArc.strokeColor = 'red';
                Interaction.firstArc.strokeWidth = 2;

                Interaction.drawCompass = new Compass(Interaction.myCenterPoint.x,Interaction.myCenterPoint.y);
                Interaction.drawCompass.changeDelta(dx);
                Interaction.drawCompass.rotate(this.angle1,Interaction.myCenterPoint);
            },
            callback:function(){
                Interaction.drawCompass.remove();
                Interaction.arcGroup.addChild(Interaction.firstArc);
            }
        });

        animHelper.animate({
            style:{
                angle2:-90
            },
            duration:2000,
            delay:4000,
            animationType:'easeInOutQuad',
            update:function(){
                if(Interaction.drawCompass){
                    Interaction.drawCompass.remove();
                }
                if(Interaction.secondArc){
                    Interaction.secondArc.remove();
                }
                Interaction.secondArc = new Path.ArcByAngle(intersection1,difference1*1.15,this.angle2,90);
                Interaction.secondArc.strokeColor = 'blue';
                Interaction.secondArc.strokeWidth = 2;

                Interaction.drawCompass = new Compass(intersection1.x,intersection1.y);
                Interaction.drawCompass.changeDelta(difference1);
                Interaction.drawCompass.rotate(this.angle2,intersection1);
            },
            callback:function(){
                Interaction.drawCompass.remove();
                Interaction.arcGroup.addChild(Interaction.secondArc);
            }
        });

        animHelper.animate({
            style:{
                angle3:-270
            },
            duration:2000,
            delay:7000,
            animationType:'easeInOutQuad',
            update:function(){
                if(Interaction.drawCompass){
                    Interaction.drawCompass.remove();
                }
                if(Interaction.thirdArc){
                    Interaction.thirdArc.remove();
                }

                Interaction.thirdArc = new Path.ArcByAngle(intersection2,difference2*1.15,this.angle3,-90);
                Interaction.thirdArc.strokeColor = 'blue';
                Interaction.thirdArc.strokeWidth = 2;

                Interaction.drawCompass = new Compass(intersection2.x,intersection2.y);
                Interaction.drawCompass.changeDelta(difference2);
                Interaction.drawCompass.rotate(this.angle3,intersection2);
            },
            callback:function(){
                Interaction.drawCompass.remove();
                Interaction.arcGroup.addChild(Interaction.thirdArc);
            }
        });

        animHelper.animate({
            style: {
                X:180.5
            },
            duration:2000,
            delay:10000,
            animationType:'easeInOutQuad',
            update:function(){
                if(Interaction.lastLine){
                    Interaction.lastLine.remove();
                }
                Interaction.lastLine = new Path.Line(new Point(Interaction.referencePoint.x-0.5,Interaction.referencePoint.y-0.5-Math.round(dx*0.5)), new Point(Interaction.referencePoint.x-0.5,Interaction.referencePoint.y+this.X));
                Interaction.lastLine.strokeColor = 'black';
                Interaction.lastLine.strokeWidth = 2;
            }
        });

        $('#drawBtn').css("opacity",0);
        $('#drawBtn').get(0).onclick = null;

        $('#repeatBtn').delay(13000).animate({opacity:1},1000,'easeInOutQuad',
            function(){$('#repeatBtn').get(0).onclick = Interaction.nextQuestion;});
    }
}
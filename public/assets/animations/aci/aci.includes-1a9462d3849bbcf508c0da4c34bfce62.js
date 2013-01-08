function __Styles(){
	outsideColor = new RgbColor(0.953,0.784,0.518);
    insideColor = new RgbColor(0.663,0.859,0.898);

    insideColor2 = new RgbColor(0.255,0.506,0.541);
    outsideColor2 = new RgbColor(0.451,0.467,0.239);
}
;
function initCompass(compassPoint){
    Interaction.compass = new Compass(compassPoint.x+20,compassPoint.y);
    Interaction.compass.right.class = "right_leg";
    drawCompass(Interaction.br*3.5);

    var tool = new Tool();
    tool.drag = false;
    tool.onMouseDown = function(event){
        if(Interaction.compass.group.bounds.contains(event.point)){
            this.drag = true;
        }
    };
    tool.onMouseDrag = function(event){
        if(this.drag === true && Interaction.step2 == false){
            drawCompass(event.delta.x);
        }
    };
    tool.onMouseUp = function(event){
        this.drag = false;
    };
    tool.activate;
    Interaction.tool = tool;
}

function drawCompass(dx){
    if(dx == null || dx == undefined){
        dx = 0;
    }
    if(Interaction.compass.d + dx > Interaction.br*7 ||
        Interaction.compass.d + dx < Interaction.br*2) {
        return;
    }
    Interaction.compass.changeDelta(dx);
}
function drawRuler(rulerPoint){
    Interaction.ruler = new Raster('ruler');
    Interaction.ruler.position = new Point(rulerPoint.x,rulerPoint.y+20);
}
;
var Animation = {
    images:[
        {
            id:'animPaper',
            src:'/assets/ornek_kagit.png'
        }
    ],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var paperStart = animStart+1000;
        var angleStart = paperStart+2000;
        var angleGrowStart = angleStart+2000;
        var angleLettersStart = angleGrowStart+4000;
        var firstTextStart = angleLettersStart+2000;
        var secondTextStart = firstTextStart+9000;
        var thirdTextStart = secondTextStart+9000;
        var angleLastGrowStart = thirdTextStart+5000;

        var outsideStart = angleLastGrowStart+3000;

        var insideStart = outsideStart+5000;


        var rasterPos = new Point(212,87);
        var animPaper = new Raster('animPaper');
        animPaper.position = rasterPos;
        animPaper.opacity = 0;

        // angle's points
        var pointA = new Point(240,41);
        var pointO = new Point(150,107);
        var pointB = new Point(270,126);

        // other points -> neccessary for fillPaths
        var pointD = new Point(82,8);
        var pointE = new Point(82,162);
        var pointF = new Point(338,8);
        var pointG = new Point(338,162);
        var pointH = pointO.findPointTo(pointA,168);
        var pointJ = pointO.findPointTo(pointB,190);

        // texts' points
        var firstTextPoint = new Point(390,40);
        var secondTextPoint = new Point(390,90);
        var thirdTextPoint = new Point(390,140);

        // last texts' points
        var insideTextPoint = new Point(600,80);
        var outsideTextPoint = new Point(600,80);

//        pointA.showOnCanvas();
//        pointO.showOnCanvas();
//        pointB.showOnCanvas();
//        pointD.showOnCanvas();
//        pointE.showOnCanvas();
//        pointF.showOnCanvas();
//        pointG.showOnCanvas();
//        pointH.showOnCanvas();
//        pointJ.showOnCanvas();

        var insideFillPath = new Path();
        insideFillPath.moveTo(pointH);
        insideFillPath.lineTo(pointF);
        insideFillPath.lineTo(pointJ);
        insideFillPath.lineTo(pointO);
        insideFillPath.lineTo(pointH);
        insideFillPath.closed = true;
        insideFillPath.fillColor = insideColor;
        insideFillPath.opacity = 0;

        var outsideFillPath = new Path();
        outsideFillPath.moveTo(pointD);
        outsideFillPath.lineTo(pointH);
        outsideFillPath.lineTo(pointO);
        outsideFillPath.lineTo(pointJ);
        outsideFillPath.lineTo(pointG);
        outsideFillPath.lineTo(pointE);
        outsideFillPath.lineTo(pointD);
        outsideFillPath.closed = true;
        outsideFillPath.fillColor = outsideColor;
        outsideFillPath.opacity = 0;

        var textO = new PointText(new Point(pointO.x-16,pointO.y+16));
        textO.content = 'O';
        textO.justification = 'center';
        textO.fontSize = 16;
        textO.opacity = 0;

        var textA = new PointText(new Point(pointA.x-16,pointA.y));
        textA.content = 'A';
        textA.justification = 'center';
        textA.fontSize = 16;
        textA.opacity = 0;

        var textB = new PointText(new Point(pointB.x,pointB.y+24));
        textB.content = 'B';
        textB.justification = 'center';
        textB.fontSize = 16;
        textB.opacity = 0;

        var circO = new Path.Circle(pointO,3);
        circO.fillColor = 'black';
        circO.opacity = 0;

        var circA = new Path.Circle(pointA,3);
        circA.fillColor = 'black';
        circA.opacity = 0;

        var circB = new Path.Circle(pointB,3);
        circB.fillColor = 'black';
        circB.opacity = 0;

        var firstText = [];
        firstText[0] = new PointText(new Point(firstTextPoint.x,firstTextPoint.y));
        firstText[0].justification = 'left';
        firstText[0].fontSize = 16;
        firstText[0].content = 'A';
        firstText[0].opacity = 0;

        firstText[1] = new PointText(new Point(firstTextPoint.x+15,firstTextPoint.y));
        firstText[1].justification = 'left';
        firstText[1].fontSize = 16;
        firstText[1].content = 'O';
        firstText[1].opacity = 0;

        firstText[2] = new PointText(new Point(firstTextPoint.x+32,firstTextPoint.y));
        firstText[2].justification = 'left';
        firstText[2].fontSize = 16;
        firstText[2].content = 'B';
        firstText[2].opacity = 0;

        firstText[3] = new PointText(new Point(firstTextPoint.x+17,firstTextPoint.y-15));
        firstText[3].justification = 'left';
        firstText[3].fontSize = 16;
        firstText[3].content = '^';
        firstText[3].opacity = 0;

        firstText[4] = new PointText(new Point(firstTextPoint.x+72,firstTextPoint.y));
        firstText[4].justification = 'left';
        firstText[4].fontSize = 16;
        firstText[4].content = 'AOB açısı';
        firstText[4].opacity = 0;

        var secondText = [];
        secondText[0] = new PointText(new Point(secondTextPoint.x,secondTextPoint.y));
        secondText[0].justification = 'left';
        secondText[0].fontSize = 16;
        secondText[0].content = 'B';
        secondText[0].opacity = 0;

        secondText[1] = new PointText(new Point(secondTextPoint.x+15,secondTextPoint.y));
        secondText[1].justification = 'left';
        secondText[1].fontSize = 16;
        secondText[1].content = 'O';
        secondText[1].opacity = 0;

        secondText[2] = new PointText(new Point(secondTextPoint.x+32,secondTextPoint.y));
        secondText[2].justification = 'left';
        secondText[2].fontSize = 16;
        secondText[2].content = 'A';
        secondText[2].opacity = 0;

        secondText[3] = new PointText(new Point(secondTextPoint.x+17,secondTextPoint.y-15));
        secondText[3].justification = 'left';
        secondText[3].fontSize = 16;
        secondText[3].content = '^';
        secondText[3].opacity = 0;

        secondText[4] = new PointText(new Point(secondTextPoint.x+72,secondTextPoint.y));
        secondText[4].justification = 'left';
        secondText[4].fontSize = 16;
        secondText[4].content = 'BOA açısı';
        secondText[4].opacity = 0;

        var thirdText = [];
        thirdText[0] = new PointText(new Point(thirdTextPoint.x,thirdTextPoint.y));
        thirdText[0].justification = 'left';
        thirdText[0].fontSize = 16;
        thirdText[0].content = 'O';
        thirdText[0].opacity = 0;

        thirdText[1] = new PointText(new Point(thirdTextPoint.x+2,thirdTextPoint.y-15));
        thirdText[1].justification = 'left';
        thirdText[1].fontSize = 16;
        thirdText[1].content = '^';
        thirdText[1].opacity = 0;

        thirdText[2] = new PointText(new Point(thirdTextPoint.x+72,thirdTextPoint.y));
        thirdText[2].justification = 'left';
        thirdText[2].fontSize = 16;
        thirdText[2].content = 'O açısı';
        thirdText[2].opacity = 0;

        var insideText = [];
        insideText[0] = new PointText(new Point(insideTextPoint.x,insideTextPoint.y));
        insideText[0].justification = 'left';
        insideText[0].fontSize = 14;
        insideText[0].content = 'AOB açısının';
        insideText[0].fillColor = insideColor2;
        insideText[0].opacity = 0;

        insideText[1] = new PointText(new Point(insideTextPoint.x+16,insideTextPoint.y+20));
        insideText[1].justification = 'left';
        insideText[1].fontSize = 14;
        insideText[1].content = 'iç bölgesi';
        insideText[1].fillColor = insideColor2;
        insideText[1].opacity = 0;

        var outsideText = [];
        outsideText[0] = new PointText(new Point(outsideTextPoint.x,outsideTextPoint.y));
        outsideText[0].justification = 'left';
        outsideText[0].fontSize = 14;
        outsideText[0].content = 'AOB açısının';
        outsideText[0].fillColor = outsideColor2;
        outsideText[0].opacity = 0;

        outsideText[1] = new PointText(new Point(outsideTextPoint.x+10,outsideTextPoint.y+20));
        outsideText[1].justification = 'left';
        outsideText[1].fontSize = 14;
        outsideText[1].content = 'dış bölgesi';
        outsideText[1].fillColor = outsideColor2;
        outsideText[1].opacity = 0;

        var leg1,leg2;

        var animHelper = new AnimationHelper({
            X1:0,
            X2:0
        });

        animPaper.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:paperStart,
            animationType:'easeInOutQuad'
        });

        textO.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:angleStart,
            animationType:'easeInOutQuad'
        });

        circO.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:angleStart,
            animationType:'easeInOutQuad'
        });

        animHelper.animate({
            style:{
                X1:140,
                X2:140
            },
            duration:3000,
            delay:angleGrowStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(leg1){
                    leg1.remove();
                }
                if(leg2){
                    leg2.remove();
                }

                leg1 = new Path.OneSidedArrow(pointO,pointO.findPointTo(pointA,this.X1),6,20);
                leg2 = new Path.OneSidedArrow(pointO,pointO.findPointTo(pointB,this.X2),6,20);

            },
            callback:function(){
                circA.insertAbove(leg1);
                circA.insertAbove(leg2);

                circO.insertAbove(leg1);
                circO.insertAbove(leg2);

                circB.insertAbove(leg1);
                circB.insertAbove(leg2);
            }
        });

        textA.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:angleLettersStart,
            animationType:'easeInOutQuad'
        });

        circA.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:angleLettersStart,
            animationType:'easeInOutQuad'
        });

        textB.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:angleLettersStart,
            animationType:'easeInOutQuad'
        });

        circB.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:angleLettersStart,
            animationType:'easeInOutQuad'
        });
        /****************************/
        /***** firstText ************/
        /****************************/
        for(var i = 0; i < 3; i++){
            firstText[i].animate({
                style:{
                    opacity:1
                },
                duration:750,
                delay:firstTextStart+i*2000,
                animationType:'easeInOutQuad'
            });
        }

        // A reds and goes back
        textA.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:firstTextStart,
            animationType:'easeInOutQuad'
        });
        textA.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:firstTextStart+1250,
            animationType:'easeInOutQuad'
        });

        circA.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:firstTextStart,
            animationType:'easeInOutQuad'
        });
        circA.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:firstTextStart+1250,
            animationType:'easeInOutQuad'
        });

        // O reds and goes back
        textO.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:firstTextStart+2000,
            animationType:'easeInOutQuad'
        });
        textO.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:firstTextStart+3250,
            animationType:'easeInOutQuad'
        });

        circO.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:firstTextStart+2000,
            animationType:'easeInOutQuad'
        });
        circO.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:firstTextStart+3250,
            animationType:'easeInOutQuad'
        });

        // B reds and goes back
        textB.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:firstTextStart+4000,
            animationType:'easeInOutQuad'
        });
        textB.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:firstTextStart+5250,
            animationType:'easeInOutQuad'
        });

        circB.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:firstTextStart+4000,
            animationType:'easeInOutQuad'
        });
        circB.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:firstTextStart+5250,
            animationType:'easeInOutQuad'
        });

        firstText[3].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTextStart+6500,
            animationType:'easeInOutQuad'
        });

        firstText[4].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTextStart+6500,
            animationType:'easeInOutQuad'
        });

        /****************************/
        /***** secondText ************/
        /****************************/
        for(var i = 0; i < 3; i++){
            secondText[i].animate({
                style:{
                    opacity:1
                },
                duration:750,
                delay:secondTextStart+i*2000,
                animationType:'easeInOutQuad'
            });
        }

        // A reds and goes back
        textB.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:secondTextStart,
            animationType:'easeInOutQuad'
        });
        textB.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:secondTextStart+1250,
            animationType:'easeInOutQuad'
        });

        circB.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:secondTextStart,
            animationType:'easeInOutQuad'
        });
        circB.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:secondTextStart+1250,
            animationType:'easeInOutQuad'
        });

        // O reds and goes back
        textO.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:secondTextStart+2000,
            animationType:'easeInOutQuad'
        });
        textO.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:secondTextStart+3250,
            animationType:'easeInOutQuad'
        });

        circO.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:secondTextStart+2000,
            animationType:'easeInOutQuad'
        });
        circO.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:secondTextStart+3250,
            animationType:'easeInOutQuad'
        });

        // B reds and goes back
        textA.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:secondTextStart+4000,
            animationType:'easeInOutQuad'
        });
        textA.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:secondTextStart+5250,
            animationType:'easeInOutQuad'
        });

        circA.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:secondTextStart+4000,
            animationType:'easeInOutQuad'
        });
        circA.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:secondTextStart+5250,
            animationType:'easeInOutQuad'
        });

        secondText[3].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondTextStart+6500,
            animationType:'easeInOutQuad'
        });

        secondText[4].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondTextStart+6500,
            animationType:'easeInOutQuad'
        });

        /****************************/
        /***** thirdText ************/
        /****************************/
        for(var i = 0; i < 1; i++){
            thirdText[i].animate({
                style:{
                    opacity:1
                },
                duration:750,
                delay:thirdTextStart+i*2000,
                animationType:'easeInOutQuad'
            });
        }

        // O reds and goes back
        textO.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:thirdTextStart,
            animationType:'easeInOutQuad'
        });
        textO.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:thirdTextStart+1250,
            animationType:'easeInOutQuad'
        });

        circO.animate({
            style:{
                fillColor:new RgbColor(1,0,0)
            },
            duration:500,
            delay:thirdTextStart,
            animationType:'easeInOutQuad'
        });
        circO.animate({
            style:{
                fillColor:new RgbColor(0,0,0)
            },
            duration:500,
            delay:thirdTextStart+1250,
            animationType:'easeInOutQuad'
        });

        thirdText[1].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:thirdTextStart+2500,
            animationType:'easeInOutQuad'
        });

        thirdText[2].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:thirdTextStart+2500,
            animationType:'easeInOutQuad'
        });

        animHelper.animate({
            style:{
                X1:168,
                X2:192
            },
            duration:2000,
            delay:angleLastGrowStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(leg1){
                    leg1.remove();
                }
                if(leg2){
                    leg2.remove();
                }

                leg1 = new Path.OneSidedArrow(pointO,pointO.findPointTo(pointA,this.X1),6,20);
                leg2 = new Path.OneSidedArrow(pointO,pointO.findPointTo(pointB,this.X2),6,20);

            }
        });

        // outside
        for(var i = 0; i < 2; i++){
            outsideText[i].animate({
                style:{
                    opacity:1
                },
                duration:1000,
                delay:outsideStart,
                animationType:'easeInOutQuad'
            });
        }

        outsideFillPath.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:outsideStart,
            animationType:'easeInOutQuad'
        });

        for(var i = 0; i < 2; i++){
            outsideText[i].animate({
                style:{
                    opacity:0
                },
                duration:1000,
                delay:outsideStart+3000,
                animationType:'easeInOutQuad'
            });
        }

        outsideFillPath.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:outsideStart+3000,
            animationType:'easeInOutQuad'
        });

        // inside

        for(var i = 0; i < 2; i++){
            insideText[i].animate({
                style:{
                    opacity:1
                },
                duration:1000,
                delay:insideStart,
                animationType:'easeInOutQuad'
            });
        }

        insideFillPath.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:insideStart,
            animationType:'easeInOutQuad'
        });

        for(var i = 0; i < 2; i++){
            insideText[i].animate({
                style:{
                    opacity:0
                },
                duration:1000,
                delay:insideStart+3000,
                animationType:'easeInOutQuad'
            });
        }

        insideFillPath.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:insideStart+3000,
            animationType:'easeInOutQuad',
            callback:function(){
                Main.animationFinished(1000);
            }
        });
    }
}
;
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
        },
        {
            id:'ruler',
            src:'/assets/animations/ruler.png'
        }
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki MNK açısının açıortayının çizilmesi için önce pergelin açıklığını cetvel üzerinde ayarlayarak "ÇİZ" butonuna basınız. Daha sonra pergelin sivri ucu açının köşesine yerleşip bir yay çizilecek. Yayın açının kollarını kestiği noktalardan pergelin açıklığı bozulmadan yaylar çizilecek.  Bu iki yayın kesiştiği nokta açının köşesi ile birleştiğinde açıortay elde edilecek.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<button id="drawBtn" class="draw_text_button"></button>' +
            '<button id="repeatBtn" class="repeat_button"></button>');

        $('#drawBtn').css({
            position:'absolute',
            top:'210px',
            left:'440px',
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
        initCompass(new Point(420.5,140.5));
        Interaction.myAngle = Util.randomInteger(30,141);
        Interaction.myCenterPoint = new Point(200.5,205.5);
        Interaction.referencePoint = new Point(Interaction.myCenterPoint.x,Interaction.myCenterPoint.y-120);
        Interaction.point1 = Interaction.referencePoint.getRotatedPoint(-Interaction.myAngle/2,Interaction.myCenterPoint);
        Interaction.point2 = Interaction.referencePoint.getRotatedPoint(Interaction.myAngle/2,Interaction.myCenterPoint);

        drawRuler(new Point(500.5,150.5));

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
        if(Interaction.ruler){
            Interaction.ruler.remove();
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
;





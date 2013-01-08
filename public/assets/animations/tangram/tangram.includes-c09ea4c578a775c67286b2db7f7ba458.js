function __Styles(){

    tangramDefaultColor = new RgbColor(0,0,0);

    animationDefaultColor = new RgbColor(0,0,0);

	animationColors = [];

    animationColors[0] = new RgbColor(0.871,0.345,0.345);
    animationColors[1] = new RgbColor(0.345,0.713,0.871);
    animationColors[2] = new RgbColor(0.290,0.807,0.349);
    animationColors[3] = new RgbColor(0.298,0.349,0.862);
    animationColors[4] = new RgbColor(0.871,0.729,0.345);
    animationColors[5] = new RgbColor(0.851,0.345,0.871);
    animationColors[6] = new RgbColor(0.447,0.447,0.447);

    interactionColors = [];
    interactionColors[0] = "#7c2f00";
    interactionColors[1] = "#004f7c";
    interactionColors[2] = "#78007c";
    interactionColors[3] = "#553e00";
    interactionColors[4] = "#355339";

    interactionSelectedColors = [];
    interactionSelectedColors[0] = "#632600";
    interactionSelectedColors[1] = "#003f63";
    interactionSelectedColors[2] = "#600063";
    interactionSelectedColors[3] = "#443200";
    interactionSelectedColors[4] = "#2a422e";

    correctAnswerBorder = new RgbColor(0.764,0.584,0.352);
}
;
var Tangram = Class.extend({
    init:function(){

    },
    drawPieces:function(myPoint,size,strokeColor,fillColor){
        if(myPoint == null || myPoint == undefined){
            myPoint = new Point(0,0);
        }
        if(size == null || size == undefined){
            size = 120;
        }
        this.strokeColor = strokeColor;
        this.fillColor = fillColor;
        this.size = size;
        // big triangle1 points
        var point1 = new Point(myPoint.x,myPoint.y);
        var point2 = new Point(myPoint.x+size,myPoint.y);
        var point3 = new Point(myPoint.x+(size*0.5),myPoint.y+(size*0.5));

        // big triangle2 points
        var point4 = new Point(myPoint.x,myPoint.y+size);
        var point5 = new Point(myPoint.x,myPoint.y);
        var point6 = new Point(myPoint.x+(size*0.5),myPoint.y+(size*0.5));


        // little triangle1 points
        var point7 = new Point(myPoint.x+(size*0.5),myPoint.y+(size*0.5));
        var point8 = new Point(myPoint.x+(size*0.75),myPoint.y+(size*0.25));
        var point9 = new Point(myPoint.x+(size*0.75),myPoint.y+(size*0.75));

        // parallelogram points
        var point10 = new Point(myPoint.x+(size*0.75),myPoint.y+(size*0.25));
        var point11 = new Point(myPoint.x+size,myPoint.y);
        var point12 = new Point(myPoint.x+size,myPoint.y+(size*0.5));
        var point13 = new Point(myPoint.x+(size*0.75),myPoint.y+(size*0.75));

        // square points
        var point14 = new Point(myPoint.x+(size*0.25),myPoint.y+(size*0.75));
        var point15 = new Point(myPoint.x+(size*0.5),myPoint.y+(size*0.5));
        var point16 = new Point(myPoint.x+(size*0.75),myPoint.y+(size*0.75));
        var point17 = new Point(myPoint.x+(size*0.5),myPoint.y+size);

        // little triangle2 points
        var point18 = new Point(myPoint.x+(size*0.25),myPoint.y+(size*0.75));
        var point19 = new Point(myPoint.x,myPoint.y+size);
        var point20 = new Point(myPoint.x+(size*0.5),myPoint.y+size);

        // middle triangle points
        var point21 = new Point(myPoint.x+(size*0.5),myPoint.y+size);
        var point22 = new Point(myPoint.x+size,myPoint.y+(size*0.5));
        var point23 = new Point(myPoint.x+size,myPoint.y+size);

        // animate points
        this.animatePoints = [];
        this.animatePoints[0] = new Point(-2,-3);
        this.animatePoints[1] = new Point(-4,-1);
        this.animatePoints[2] = new Point(1,-1);
        this.animatePoints[3] = new Point(4,-4);
        this.animatePoints[4] = new Point(-2,2);
        this.animatePoints[5] = new Point(-4,4);
        this.animatePoints[6] = new Point(3,2);

        this.pieces = [];

        // big triangle 1
        var path1PointsArr = [];
        path1PointsArr[0] = new Point(point1);
        path1PointsArr[1] = new Point(point2);
        path1PointsArr[2] = new Point(point3);

        this.pieces[0] = new MyShapes(path1PointsArr,1,strokeColor,fillColor);
        this.pieces[0].shape.class = "draggable";

        // big triangle 2
        var path2PointsArr = [];
        path2PointsArr[0] = new Point(point4);
        path2PointsArr[1] = new Point(point5);
        path2PointsArr[2] = new Point(point6);

        this.pieces[1] = new MyShapes(path2PointsArr,1,strokeColor,fillColor);
        this.pieces[1].shape.class = "draggable";

        // little triangle 1
        var path3PointsArr = [];
        path3PointsArr[0] = new Point(point7);
        path3PointsArr[1] = new Point(point8);
        path3PointsArr[2] = new Point(point9);

        this.pieces[2] = new MyShapes(path3PointsArr,2,strokeColor,fillColor);
        this.pieces[2].shape.class = "draggable";

        // parallelogram
        var path4PointsArr = [];
        path4PointsArr[0] = new Point(point10);
        path4PointsArr[1] = new Point(point11);
        path4PointsArr[2] = new Point(point12);
        path4PointsArr[3] = new Point(point13);

        this.pieces[3] = new MyShapes(path4PointsArr,3,strokeColor,fillColor);
        this.pieces[3].shape.class = "draggable";

        // square
        var path5PointsArr = [];
        path5PointsArr[0] = new Point(point14);
        path5PointsArr[1] = new Point(point15);
        path5PointsArr[2] = new Point(point16);
        path5PointsArr[3] = new Point(point17);

        this.pieces[4] = new MyShapes(path5PointsArr,4,strokeColor,fillColor);
        this.pieces[4].shape.class = "draggable";

        // little triangle 2
        var path6PointsArr = [];
        path6PointsArr[0] = new Point(point18);
        path6PointsArr[1] = new Point(point19);
        path6PointsArr[2] = new Point(point20);

        this.pieces[5] = new MyShapes(path6PointsArr,2,strokeColor,fillColor);
        this.pieces[5].shape.class = "draggable";

        // middle triangle
        var path7PointsArr = [];
        path7PointsArr[0] = new Point(point21);
        path7PointsArr[1] = new Point(point22);
        path7PointsArr[2] = new Point(point23);

        this.pieces[6] = new MyShapes(path7PointsArr,5,strokeColor,fillColor);
        this.pieces[6].shape.class = "draggable";
    },
    animatePieces:function(delay){
        if(this.pieces){
            var animHelper1 = new AnimationHelper({
                myPoint:new Point(0,0)
            });
            var animHelper2 = new AnimationHelper({
                myPoint:new Point(0,0)
            });
            var animHelper3 = new AnimationHelper({
                myPoint:new Point(0,0)
            });
            var animHelper4 = new AnimationHelper({
                myPoint:new Point(0,0)
            });
            var animHelper5 = new AnimationHelper({
                myPoint:new Point(0,0)
            });
            var animHelper6 = new AnimationHelper({
                myPoint:new Point(0,0)
            });
            var animHelper7 = new AnimationHelper({
                myPoint:new Point(0,0)
            });

            var b1 = this.pieces[0];
            var b2 = this.pieces[1];
            var b3 = this.pieces[2];
            var b4 = this.pieces[3];
            var b5 = this.pieces[4];
            var b6 = this.pieces[5];
            var b7 = this.pieces[6];

            var c1 = this.pieces[0].shape.position;
            var c2 = this.pieces[1].shape.position;
            var c3 = this.pieces[2].shape.position;
            var c4 = this.pieces[3].shape.position;
            var c5 = this.pieces[4].shape.position;
            var c6 = this.pieces[5].shape.position;
            var c7 = this.pieces[6].shape.position;
            var self = this;
            animHelper1.animate({
                style:{
                    myPoint:new Point(self.animatePoints[0])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b1.setPos(new Point(c1.add(this.myPoint)));
                },
                callback:function(){
                    b1.originalPosition = b1.shape.position;
                }
            });
            animHelper2.animate({
                style:{
                    myPoint:new Point(self.animatePoints[1])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b2.setPos(new Point(c2.add(this.myPoint)));
                },
                callback:function(){
                    b2.originalPosition = b2.shape.position;
                }
            });
            animHelper3.animate({
                style:{
                    myPoint:new Point(self.animatePoints[2])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b3.setPos(new Point(c3.add(this.myPoint)));
                },
                callback:function(){
                    b3.originalPosition = b3.shape.position;
                }
            });
            animHelper4.animate({
                style:{
                    myPoint:new Point(self.animatePoints[3])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b4.setPos(new Point(c4.add(this.myPoint)));
                },
                callback:function(){
                    b4.originalPosition = b4.shape.position;
                }
            });
            animHelper5.animate({
                style:{
                    myPoint:new Point(self.animatePoints[4])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b5.setPos(new Point(c5.add(this.myPoint)));
                },
                callback:function(){
                    b5.originalPosition = b5.shape.position;
                }
            });
            animHelper6.animate({
                style:{
                    myPoint:new Point(self.animatePoints[5])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b6.setPos(new Point(c6.add(this.myPoint)));
                },
                callback:function(){
                    b6.originalPosition = b6.shape.position;
                }
            });
            animHelper7.animate({
                style:{
                    myPoint:new Point(self.animatePoints[6])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b7.setPos(new Point(c7.add(this.myPoint)));
                },
                callback:function(){
                    b7.originalPosition = b7.shape.position;
                }
            });
        }
    },
    flipPiece4:function(){
        var flipped = this.pieces[3].pointsArr;
        var flipped2 = this.pieces[3].shape;
        var newPointsArray = [];

        var originalAngle = this.pieces[3].originalAngle;
        var originalPosition = this.pieces[3].originalPosition;
        var isFlipped = this.pieces[3].isFlipped;
//
        var point0 = flipped[0].add((flipped2.position.x-flipped[0].x)*2,0);

        var point1 = flipped[1].add((flipped2.position.x-flipped[1].x)*2,0);

        var point2 = flipped[2].add((flipped2.position.x-flipped[2].x)*2,0);

        var point3 = flipped[3].add((flipped2.position.x-flipped[3].x)*2,0);

        newPointsArray[0] = new Point(point0);
        newPointsArray[1] = new Point(point1);
        newPointsArray[2] = new Point(point2);
        newPointsArray[3] = new Point(point3);

        if(this.pieces[3]){
            this.pieces[3].shape.remove();
            this.pieces[3] = null;
        }
        this.pieces[3] = new MyShapes(newPointsArray,3,this.strokeColor,this.fillColor);
        this.pieces[3].shape.class = "draggable";
        this.pieces[3].originalAngle = originalAngle;
        this.pieces[3].originalPosition = originalPosition;
        if(isFlipped == 0){
            this.pieces[3].isFlipped = 1;
        }
        else if(isFlipped == 1){
            this.pieces[3].isFlipped = 0;
        }

    }
});

function MyShapes(pointsArr,type,strokeColor,fillColor){
    this.myType = type;

    this.pointsArr = [];

    for(var i = 0; i < pointsArr.length; i++){
        this.pointsArr[i] = pointsArr[i];
    }

    this.centerPoint = Util.centerOfPoints(this.pointsArr);
    this.strokeColor = strokeColor;
    this.fillColor = fillColor;
    this.isFlipped = 0;

    this.updatePointsArr = function(newPointsArr){
        if(this.shape){
            this.shape.remove();
        }
        this.pointsArr = [];

        for(var i = 0; i < newPointsArr.length; i++){
            this.pointsArr[i] = newPointsArr[i];
        }

        this.drawShape(this.strokeColor,this.fillColor);
        this.shape.parentObject = this;
        this.computeLinesArray();
        this.computeCurrentAngle();
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
    };

    this.computeOriginalAngle = function(){
        var angle;
        angle = Util.findAngle(this.pointsArr[0].x,this.pointsArr[0].y,this.centerPoint.x,this.centerPoint.y);
        angle = Util.radianToDegree(angle);

        this.originalAngle = angle;
    };

    this.computeCurrentAngle = function(){
        var angle;
        angle = Util.findAngle(this.pointsArr[0].x,this.pointsArr[0].y,this.centerPoint.x,this.centerPoint.y);
        angle = Util.radianToDegree(angle);

        this.currentAngle = angle;
    };

    this.drawShape = function(strokeColor,fillColor){
        var a = new Path();
        a.moveTo(pointsArr[0]);
        for(var i = 0; i < this.pointsArr.length; i++){
            a.lineTo(this.pointsArr[i]);
        }
        a.lineTo(this.pointsArr[0]);
        a.closed = true;
        a.strokeColor = strokeColor;
        a.fillColor = fillColor;
        this.centerPoint = Util.centerOfPoints(this.pointsArr);

        return a;
    };

    this.shape = this.drawShape(strokeColor,fillColor);
    this.shape.parentObject = this;
    this.originalPosition = this.shape.position;
    this.shape.isSnapped = false;
    this.computeOriginalAngle();
    this.computeCurrentAngle();

    this.setPos = function(newPosition){
        var difference = newPosition.subtract(this.shape.position);
        for(var i = 0; i < this.pointsArr.length; i++){
            this.pointsArr[i] = this.pointsArr[i].add(difference);
        }
        this.shape.position = newPosition;
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeLinesArray();
        this.computeCurrentAngle();
    };

    this.setRotation = function(angle){
        for(var i = 0; i < this.pointsArr.length; i++){
            this.pointsArr[i] = this.pointsArr[i].getRotatedPoint(angle,this.centerPoint);
        }

        this.shape.rotate(angle,this.centerPoint);
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeLinesArray();
        this.computeCurrentAngle();
    };

    this.computeLinesArray = function(){
        this.linesArr = [];

        for(var i = 0; i < this.pointsArr.length; i++){
            var p1 = this.pointsArr[i];
            var p2 = this.pointsArr[(i+1)%this.pointsArr.length];

            var angle = Util.findAngle(p1.x,p1.y,p2.x,p2.y);
            while(angle > Math.PI){
                angle -= Math.PI;
            }

            this.linesArr.push({
                p1:p1,
                p2:p2,
                angle:angle
            });
        }
    };

    this.computeLinesArray();

    this.trySnapTo = function(otherObject){
        if(this.centerPoint.getDistance(otherObject.centerPoint,true) > 1000){
            return;
        }
        if(this.myType == otherObject.myType){
            if(this.myType == 4){
                if((Math.abs(this.currentAngle - otherObject.currentAngle)%90) < 20 || (Math.abs(this.currentAngle - otherObject.currentAngle)%90) > 70){
                    if(this.centerPoint.getDistance(otherObject.centerPoint,true) < 400){
                        this.setRotation(this.currentAngle-otherObject.currentAngle);
                        this.setPos(otherObject.shape.position);
                        this.shape.isSnapped = true;
                        console.log("snapped");
                    }
                }
            }
            else if(this.myType == 3){
                if((Math.abs(this.currentAngle - otherObject.currentAngle)%180) < 20 || (Math.abs(this.currentAngle - otherObject.currentAngle)%180) > 160){
                    if(this.centerPoint.getDistance(otherObject.centerPoint,true) < 400){
                        this.setRotation(this.currentAngle-otherObject.currentAngle);
                        this.setPos(otherObject.shape.position);
                        this.shape.isSnapped = true;
                        console.log("snapped");
                    }
                }
            }
            else{
                if(this.isFlipped == otherObject.isFlipped){
                    if(Math.abs(this.currentAngle - otherObject.currentAngle) < 20 || Math.abs(this.currentAngle - otherObject.currentAngle) > 340){
                        if(this.centerPoint.getDistance(otherObject.centerPoint,true) < 400){
                            this.setRotation(this.currentAngle-otherObject.currentAngle);
                            this.setPos(otherObject.shape.position);
                            this.shape.isSnapped = true;
                            console.log("snapped");
                        }
                    }
                }
            }
        }

    };
};

function flipSelectedItem(){
    if(Interaction.rotItems){
        Interaction.rotItems.remove();
    }
    Interaction.tangram.flipPiece4();

    Interaction.rotatableItem = Interaction.tangram.pieces[3].shape;
    Interaction.rotItems = new Group();

    for(var i = 0; i < Interaction.rotatableItem.parentObject.pointsArr.length; i++){
        var myPos = Interaction.rotatableItem.parentObject.pointsArr[i].findPointTo(Interaction.rotatableItem.parentObject.centerPoint,-10);

        var myAng = Util.findAngle(Interaction.rotatableItem.parentObject.pointsArr[i].x,Interaction.rotatableItem.parentObject.pointsArr[i].y,Interaction.rotatableItem.position.x,Interaction.rotatableItem.position.y);
        myAng = Util.radianToDegree(myAng);
        myAng = 225-myAng;

        var rotArrow = new Raster('rotationArrow');
        rotArrow.position = new Point(myPos);
        rotArrow.rotate(myAng,myPos);

        var circ = new Path.Circle(myPos,10);
        circ.fillColor = "red";
        circ.class = "rotatable";
        circ.opacity = 0;

        Interaction.rotItems.addChild(circ);
        Interaction.rotItems.addChild(rotArrow);
    }
    Interaction.rotatableItem.fillColor = interactionSelectedColors[Interaction.randomNumber];
    Interaction.rotatableItem.strokeColor = interactionSelectedColors[Interaction.randomNumber];
    Interaction.rotItems.class = "rotatable";
    if(Interaction.rotatableItem.isSnapped == true){
        Interaction.rotatableItem.isSnapped = false;
    }
    for(var i = 0; i < Interaction.questionTangram.pieces.length; i++){
        Interaction.rotatableItem.parentObject.trySnapTo(Interaction.questionTangram.pieces[i]);
    }
    if(Interaction.rotItems){
        Interaction.rotItems.remove();
    }
    Interaction.rotItems = new Group();
    for(var i = 0; i < Interaction.rotatableItem.parentObject.pointsArr.length; i++){
        var myPos = Interaction.rotatableItem.parentObject.pointsArr[i].findPointTo(Interaction.rotatableItem.parentObject.centerPoint,-10);

        var myAng = Util.findAngle(Interaction.rotatableItem.parentObject.pointsArr[i].x,Interaction.rotatableItem.parentObject.pointsArr[i].y,Interaction.rotatableItem.position.x,Interaction.rotatableItem.position.y);
        myAng = Util.radianToDegree(myAng);
        myAng = 225-myAng;

        var rotArrow = new Raster('rotationArrow');
        rotArrow.position = new Point(myPos);
        rotArrow.rotate(myAng,myPos);

        var circ = new Path.Circle(myPos,10);
        circ.fillColor = "red";
        circ.class = "rotatable";
        circ.opacity = 0;

        Interaction.rotItems.addChild(circ);
        Interaction.rotItems.addChild(rotArrow);
    }
    Interaction.rotatableItem.fillColor = interactionSelectedColors[Interaction.randomNumber];
    Interaction.rotatableItem.strokeColor = interactionSelectedColors[Interaction.randomNumber];
    Interaction.rotItems.class = "rotatable";
};
function generateTangramQuestions(){
    TangramQuestions = [
        [
            // question1
            {point:new Point(325.5,154.5),angle:162},
            {point:new Point(356.5,124.5),angle:342},
            {point:new Point(229.5,215.5),angle:315},
            {point:new Point(281.5,206.5),angle:270,flip:0},
            {point:new Point(355.5,63.5),angle:0},
            {point:new Point(374.5,254.5),angle:45},
            {point:new Point(355.5,214.5),angle:117}
        ],
        [
            // question2
            {point:new Point(353.5,228.5),angle:162},
            {point:new Point(323.5,198.5),angle:72},
            {point:new Point(252.5,116.5),angle:135},
            {point:new Point(344.5,168.5),angle:0,flip:0},
            {point:new Point(335.5,61.5),angle:48},
            {point:new Point(293.5,98.5),angle:90},
            {point:new Point(323.5,126.5),angle:252}
        ],
        [
            // question3
            {point:new Point(326.5,156.5),angle:252},
            {point:new Point(326.5,216.5),angle:72},
            {point:new Point(280.5,187.5),angle:0},
            {point:new Point(296.5,125.5),angle:135,flip:1},
            {point:new Point(355.5,74.5),angle:50},
            {point:new Point(352.5,38.5),angle:275},
            {point:new Point(326.5,246.5),angle:27}
        ],
        [
            // question4
            {point:new Point(315.5,178.5),angle:252},
            {point:new Point(252.5,169.5),angle:207},
            {point:new Point(375.5,73.5),angle:91},
            {point:new Point(361.5,132.5),angle:315,flip:0},
            {point:new Point(315.5,119.5),angle:0},
            {point:new Point(360.5,89.5),angle:180},
            {point:new Point(273.5,148.5),angle:161}
        ],
        [
            // question5
            {point:new Point(340.5,183.5),angle:167},
            {point:new Point(307.5,156.5),angle:78},
            {point:new Point(277.5,232.5),angle:90},
            {point:new Point(322.5,232.5),angle:315,flip:1},
            {point:new Point(253.5,196.5),angle:315},
            {point:new Point(263.5,164.5),angle:136},
            {point:new Point(313.5,95.5),angle:257}
        ],
        [
            // question6
            {point:new Point(310.5,231.5),angle:27},
            {point:new Point(302.5,166.5),angle:72},
            {point:new Point(258.5,76.5),angle:0},
            {point:new Point(377.5,237.5),angle:135,flip:1},
            {point:new Point(243.5,106.5),angle:0},
            {point:new Point(227.5,76.5),angle:181},
            {point:new Point(272.5,148.5),angle:252}
        ],
        [
            // question7
            {point:new Point(344.5,189.5),angle:342},
            {point:new Point(306.5,223.5),angle:297},
            {point:new Point(257.5,172.5),angle:180},
            {point:new Point(287.5,97.5),angle:225,flip:1},
            {point:new Point(272.5,142.5),angle:0},
            {point:new Point(262.5,84.5),angle:135},
            {point:new Point(285.5,202.5),angle:252}
        ],
        [
            // question8
            {point:new Point(285.5,183.5),angle:252},
            {point:new Point(277.5,247.5),angle:297},
            {point:new Point(330.5,182.5),angle:181},
            {point:new Point(348.5,67.5),angle:290,flip:0},
            {point:new Point(337.5,123.5),angle:315},
            {point:new Point(330.5,211.5),angle:359},
            {point:new Point(312.5,70.5),angle:257}
        ],
        [
            // question9
            {point:new Point(318.5,142.5),angle:297},
            {point:new Point(360.5,185.5),angle:117},
            {point:new Point(281.5,162.5),angle:0},
            {point:new Point(319.5,63.5),angle:135,flip:1},
            {point:new Point(275.5,100.5),angle:315},
            {point:new Point(306.5,217.5),angle:0},
            {point:new Point(352.5,218.5),angle:297}
        ],
        [
            // question10
            {point:new Point(351.5,248.5),angle:27},
            {point:new Point(342.5,184.5),angle:72},
            {point:new Point(387.5,239.5),angle:180},
            {point:new Point(295.5,76.5),angle:340,flip:0},
            {point:new Point(291.5,145.5),angle:45},
            {point:new Point(301.5,216.5),angle:135},
            {point:new Point(262.5,94.5),angle:297}
        ],
        [
            // question11
            {point:new Point(296.5,243.5),angle:27},
            {point:new Point(338.5,243.5),angle:297},
            {point:new Point(390.5,84.5),angle:135},
            {point:new Point(319.5,160.5),angle:0,flip:0},
            {point:new Point(317.5,63.5),angle:0},
            {point:new Point(243.5,84.5),angle:45},
            {point:new Point(316.5,94.5),angle:342}
        ],
        [
            // question12
            {point:new Point(326.5,194.5),angle:297},
            {point:new Point(286.5,194.5),angle:27},
            {point:new Point(409.5,230.5),angle:90},
            {point:new Point(320.5,115.5),angle:225,flip:1},
            {point:new Point(343.5,66.5),angle:329},
            {point:new Point(208.5,225.5),angle:314},
            {point:new Point(366.5,131.5),angle:297}
        ],
        [
            // question13
            {point:new Point(281.5,231.5),angle:162},
            {point:new Point(311.5,201.5),angle:252},
            {point:new Point(382.5,116.5),angle:45},
            {point:new Point(291.5,169.5),angle:180,flip:1},
            {point:new Point(292.5,61.5),angle:39},
            {point:new Point(341.5,99.5),angle:90},
            {point:new Point(312.5,127.5),angle:72}
        ],
        [
            // question14
            {point:new Point(309.5,117.5),angle:162},
            {point:new Point(289.5,168.5),angle:207},
            {point:new Point(253.5,224.5),angle:0},
            {point:new Point(319.5,211.5),angle:315,flip:0},
            {point:new Point(313.5,65.5),angle:310},
            {point:new Point(335.5,241.5),angle:270},
            {point:new Point(369.5,86.5),angle:27}
        ],
        [
            // question15
            {point:new Point(369.5,121.5),angle:317},
            {point:new Point(329.5,136.5),angle:137},
            {point:new Point(232.5,107.5),angle:245},
            {point:new Point(351.5,196.5),angle:200,flip:0},
            {point:new Point(384.5,64.5),angle:355},
            {point:new Point(394.5,249.5),angle:65},
            {point:new Point(279.5,146.5),angle:317}
        ],
        [
            // question16
            {point:new Point(247.5,157.5),angle:162},
            {point:new Point(286.5,218.5),angle:342},
            {point:new Point(361.5,78.5),angle:180},
            {point:new Point(330.5,144.5),angle:315,flip:0},
            {point:new Point(262.5,111.5),angle:30},
            {point:new Point(420.5,203.5),angle:91},
            {point:new Point(359.5,188.5),angle:162}
        ],
        [
            // question17
            {point:new Point(339.5,184.5),angle:118},
            {point:new Point(339.5,142.5),angle:28},
            {point:new Point(332.5,280.5),angle:134},
            {point:new Point(298.5,111.5),angle:315,flip:1},
            {point:new Point(354.5,58.5),angle:320},
            {point:new Point(351.5,22.5),angle:275},
            {point:new Point(331.5,218.5),angle:298}
        ],
        [
            // question18
            {point:new Point(321.5,93.5),angle:162},
            {point:new Point(345.5,154.5),angle:342},
            {point:new Point(232.5,152.5),angle:44},
            {point:new Point(299.5,169.5),angle:225,flip:0},
            {point:new Point(304.5,45.5),angle:323},
            {point:new Point(396.5,248.5),angle:181},
            {point:new Point(380.5,191.5),angle:252}
        ],
        [
            // question19
            {point:new Point(280.5,113.5),angle:162},
            {point:new Point(324.5,97.5),angle:252},
            {point:new Point(263.5,218.5),angle:315},
            {point:new Point(367.5,190.5),angle:1,flip:0},
            {point:new Point(269.5,60.5),angle:315},
            {point:new Point(383.5,248.5),angle:45},
            {point:new Point(315.5,177.5),angle:27}
        ]
    ];
}
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var tangramStart = animStart+1000;
        var tangramAnimation = tangramStart+2000;
        var tangramColorAnimation = tangramAnimation+2000;
        var tangramOpening = tangramColorAnimation+2500;
        var tangramClosing = tangramOpening+3000;

        var myRectangle = new Path.Rectangle(new Point(340.5,45.5),new Size(80,80));
        myRectangle.fillColor = animationDefaultColor;
        myRectangle.strokeColor = animationDefaultColor;
        myRectangle.opacity = 0;

        Animation.animationPoints = [];
        Animation.animationPoints[0] = new Point(125,-29);
        Animation.animationPoints[1] = new Point(-177,-18);
        Animation.animationPoints[2] = new Point(126,37);
        Animation.animationPoints[3] = new Point(180,-8);
        Animation.animationPoints[4] = new Point(-107,-43);
        Animation.animationPoints[5] = new Point(-116,44);
        Animation.animationPoints[6] = new Point(18,42);

        Animation.tangram = new Tangram();
        Animation.tangram.drawPieces(new Point(340.5,45.5),80,animationDefaultColor,animationDefaultColor);
        for(var i = 0; i < Animation.tangram.pieces.length; i++){
            Animation.tangram.pieces[i].shape.opacity = 0;
        }

        myRectangle.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:tangramStart,
            animationType:'easeInOutQuad',
            callback:function(){
                for(var j = 0; j < Animation.tangram.pieces.length; j++){
                    Animation.tangram.pieces[j].shape.opacity = 1;
                }
            }
        });
        myRectangle.animate({
            style:{
                opacity:0
            },
            duration:0,
            delay:tangramAnimation,
            animationType:'easeInOutQuad'
        });
        Animation.tangram.animatePieces(tangramAnimation);

        for(var k = 0; k < Animation.tangram.pieces.length; k++){
            Animation.tangram.pieces[k].shape.animate({
                style:{
                    fillColor:animationColors[k],
                    strokeColor:animationColors[k]
                },
                duration:1000,
                delay:tangramColorAnimation,
                animationType:'easeInOutQuad'
            })
        }

        for(var i = 0; i < Animation.tangram.pieces.length; i++){
            Animation.tangram.pieces[i].shape.animate({
                style:{
                    position:new Point(Animation.tangram.pieces[i].shape.position.add(Animation.animationPoints[i]))
                },
                duration:2000,
                delay:tangramOpening,
                animationType:'easeOut'
            })
        }

        for(var i = 0; i < Animation.tangram.pieces.length; i++){
            Animation.tangram.pieces[i].shape.animate({
                style:{
                    position:new Point(Animation.tangram.pieces[i].originalPosition)
                },
                duration:2000,
                delay:tangramClosing,
                animationType:'easeOut',
                callback:function(){
                    Main.animationFinished(1000);
                }
            })
        }
    }
};
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'rotationArrow',
            src:'/assets/animations/tangram/tangram_ok.png'
        },
        {
            id:'tangramBackground',
            src:'/assets/animations/tangram/tangram_zemin.jpg'
        },
        {
            id:'tangram_1',
            src:'/assets/animations/tangram/tangram_01.png'
        },
        {
            id:'tangram_2',
            src:'/assets/animations/tangram/tangram_02.png'
        },
        {
            id:'tangram_3',
            src:'/assets/animations/tangram/tangram_03.png'
        },
        {
            id:'tangram_4',
            src:'/assets/animations/tangram/tangram_04.png'
        },
        {
            id:'tangram_5',
            src:'/assets/animations/tangram/tangram_05.png'
        },
        {
            id:'tangram_6',
            src:'/assets/animations/tangram/tangram_06.png'
        },
        {
            id:'tangram_7',
            src:'/assets/animations/tangram/tangram_07.png'
        },
        {
            id:'tangram_8',
            src:'/assets/animations/tangram/tangram_08.png'
        },
        {
            id:'tangram_9',
            src:'/assets/animations/tangram/tangram_09.png'
        },
        {
            id:'tangram_10',
            src:'/assets/animations/tangram/tangram_10.png'
        },
        {
            id:'tangram_11',
            src:'/assets/animations/tangram/tangram_11.png'
        },
        {
            id:'tangram_12',
            src:'/assets/animations/tangram/tangram_12.png'
        },
        {
            id:'tangram_13',
            src:'/assets/animations/tangram/tangram_13.png'
        },
        {
            id:'tangram_14',
            src:'/assets/animations/tangram/tangram_14.png'
        },
        {
            id:'tangram_15',
            src:'/assets/animations/tangram/tangram_15.png'
        },
        {
            id:'tangram_16',
            src:'/assets/animations/tangram/tangram_16.png'
        },
        {
            id:'tangram_17',
            src:'/assets/animations/tangram/tangram_17.png'
        },
        {
            id:'tangram_18',
            src:'/assets/animations/tangram/tangram_18.png'
        },
        {
            id:'tangram_19',
            src:'/assets/animations/tangram/tangram_19.png'
        }
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Tangram parçalarını kullanarak, ortada verilmiş figürü oluşturunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.background = new Raster('tangramBackground');
        Interaction.background.position = new Point(317.5,149.5);

        $(Interaction.container).append('<button id="flip" class="flip_button" style="position:absolute;top:30px;right:55px;"></button>');

        Interaction.appendStatus({
            top:'200px',
            left:'7px',
            width:'160px',
            height:'56px',
            textAlign:'center'
        });

        Interaction.appendButton({
            bottom:'15px',
            right:'15px'
        });

        generateTangramQuestions();

        Interaction.setRandomGenerator(19);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Interaction.randomNumber = Util.randomInteger(0,5);

        $('#flip').css("opacity",0.4);
        $('#flip').get(0).onclick = null;

        if(Interaction.questionPicture){
            Interaction.questionPicture.remove();
        }

        Interaction.questionIndex = randomNumber+1;
        Interaction.questionPicture = new Raster('tangram_'+Interaction.questionIndex);
        Interaction.questionPicture.position = new Point(317.5,149.5);

        Interaction.currentQuestion = TangramQuestions[Interaction.questionIndex-1];

        if(Interaction.questionTangram){
            for(var i = 0; i < Interaction.questionTangram.pieces.length; i++){
                Interaction.questionTangram.pieces[i].shape.remove();
            }
        }
        Interaction.questionTangram = null;
        Interaction.questionTangram = new Tangram();
        Interaction.questionTangram.drawPieces(new Point(0,0),120,interactionColors[Interaction.randomNumber],interactionColors[Interaction.randomNumber]);
        for(var i = 0; i < 7; i++){
            if(i == 3){
                if(Interaction.currentQuestion[3].flip == 1){
                    Interaction.questionTangram.flipPiece4();
                }
            }
            Interaction.questionTangram.pieces[i].setRotation(Interaction.questionTangram.pieces[i].currentAngle-Interaction.currentQuestion[i].angle);
            Interaction.questionTangram.pieces[i].setPos(Interaction.currentQuestion[i].point);
            Interaction.questionTangram.pieces[i].shape.opacity = 0;

        }

        if(Interaction.tangram){
            for(var i = 0; i < Interaction.tangram.pieces.length; i++){
                Interaction.tangram.pieces[i].shape.remove();
            }
        }
        Interaction.tangram = null;

        if(Interaction.rotItems){
            Interaction.rotItems.remove();
        }

        Interaction.dropArea = new Path.Rectangle(new Point(175,2), new Size(285,295));
        Interaction.dropArea.fillColor = "#f7f8f8";
        Interaction.dropArea.class = "dropArea";
        Interaction.dropArea.opacity = 0;

        Interaction.tangram = new Tangram();
        Interaction.tangram.drawPieces(new Point(28.5,25.5),120,interactionColors[Interaction.randomNumber],interactionColors[Interaction.randomNumber]);
        Interaction.tangram.animatePieces(750);

        setTimeout('Interaction.createTool()',2000);
    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        var noOfSnapped = 0;
        for(var i = 0; i < Interaction.tangram.pieces.length; i++){
            if(Interaction.tangram.pieces[i].shape.isSnapped == true){
                noOfSnapped += 1;
            }
        }
        if(noOfSnapped == Interaction.tangram.pieces.length){
            return true;
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
        Interaction.pause();
        if(Interaction.rotItems){
            Interaction.rotItems.remove();
        }
        for(var i = 0; i < Interaction.tangram.pieces.length; i++){
            Interaction.tangram.pieces[i].shape.opacity = 0;
        }
        for(var j = 0; j < Interaction.questionTangram.pieces.length; j++){
            Interaction.questionTangram.pieces[j].shape.opacity = 1;
            Interaction.questionTangram.pieces[j].shape.animate({
                style:{
                    strokeColor:correctAnswerBorder
                },
                duration:1000,
                delay:500,
                animationType:'easeInOutQuad',
                callback:function(){
                    Interaction.resume();
                }
            })
        }

    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yanda gösterilmiştir!',false);
        Interaction.pause();
        if(Interaction.rotItems){
            Interaction.rotItems.remove();
        }
        for(var i = 0; i < Interaction.tangram.pieces.length; i++){
            Interaction.tangram.pieces[i].shape.opacity = 0;
        }
        for(var j = 0; j < Interaction.questionTangram.pieces.length; j++){
            Interaction.questionTangram.pieces[j].shape.opacity = 1;
            Interaction.questionTangram.pieces[j].shape.animate({
                style:{
                    strokeColor:correctAnswerBorder
                },
                duration:1000,
                delay:500,
                animationType:'easeInOutQuad',
                callback:function(){
                    Interaction.resume();
                }
            })
        }
		
    },
    createTool : function(){
        var tool = new Tool();
        tool.onMouseDown = function(event){
//            console.log("onMouseDown");
            if(event.item){
                this.item = event.item;
                if(this.item.class == "rotatable"){
                    this.rotate = true;
                    this.lastAngle = "wx";
                }
                else{
                    if(this.item.class == "draggable"){
                        this.drag = true;
                        this.totalDelta = new Point(0,0);
                        this.firstPosition = this.item.position;
                        if(Interaction.rotatableItem){
                            if(Interaction.rotItems){
                                Interaction.rotItems.remove();
                            }
                            Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem = null;
                            $('#flip').css("opacity",0.4);
                            $('#flip').get(0).onclick = null;

//                            for(var i = 0; i < Interaction.tangram.pieces.length; i++){
//                                this.item.insertAbove(Interaction.tangram.pieces[i].shape);
//                            }

                        }
                    }
                    else{
                        if(Interaction.rotatableItem){
                            if(Interaction.rotItems){
                                Interaction.rotItems.remove();
                            }
                            Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem = null;
                            $('#flip').css("opacity",0.4);
                            $('#flip').get(0).onclick = null;
                        }
                    }
                }
            }
            else{
                if(Interaction.rotatableItem){
                    if(Interaction.rotItems){
                        Interaction.rotItems.remove();
                    }
                    Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                    Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                    Interaction.rotatableItem = null;
                    $('#flip').css("opacity",0.4);
                    $('#flip').get(0).onclick = null;
                }
            }
        };
        tool.onMouseMove = function(event){

        };
        tool.onMouseDrag = function(event){
            if(this.drag == true){
//                console.log("onMouseDrag inside drag=true");
                var newPosition = new Point(this.firstPosition.add(this.totalDelta).add(event.delta));
                this.item.parentObject.setPos(newPosition);
                this.totalDelta = this.totalDelta.add(event.delta);
            }
            else if(this.rotate == true){
                var beta = Util.findAngle(event.point.x,event.point.y,Interaction.rotatableItem.parentObject.centerPoint.x,Interaction.rotatableItem.parentObject.centerPoint.y);
                var angle = beta;
                angle = Util.radianToDegree(angle);
                if(this.lastAngle == "wx"){
                    this.lastAngle = angle;
                }
                this.item.rotate(this.lastAngle-angle,Interaction.rotatableItem.parentObject.centerPoint);
                Interaction.rotatableItem.parentObject.setRotation(this.lastAngle-angle);
                this.lastAngle = angle;
            }
        };
        tool.onMouseUp = function(event){
//            console.log("onMouseUp");
            if(this.item){
                if(this.rotate == true){
                    if(Interaction.rotatableItem){
                        if(Interaction.rotatableItem.isSnapped == true){
                            Interaction.rotatableItem.isSnapped = false;
                        }
                        for(var i = 0; i < Interaction.questionTangram.pieces.length; i++){
                            Interaction.rotatableItem.parentObject.trySnapTo(Interaction.questionTangram.pieces[i]);
                        }
                        if(Interaction.rotItems){
                            Interaction.rotItems.remove();
                        }
                        Interaction.rotItems = new Group();
                        for(var i = 0; i < Interaction.rotatableItem.parentObject.pointsArr.length; i++){
                            var myPos = Interaction.rotatableItem.parentObject.pointsArr[i].findPointTo(Interaction.rotatableItem.parentObject.centerPoint,-10);

                            var myAng = Util.findAngle(Interaction.rotatableItem.parentObject.pointsArr[i].x,Interaction.rotatableItem.parentObject.pointsArr[i].y,Interaction.rotatableItem.position.x,Interaction.rotatableItem.position.y);
                            myAng = Util.radianToDegree(myAng);
                            myAng = 225-myAng;

                            var rotArrow = new Raster('rotationArrow');
                            rotArrow.position = new Point(myPos);
                            rotArrow.rotate(myAng,myPos);

                            var circ = new Path.Circle(myPos,10);
                            circ.fillColor = "red";
                            circ.class = "rotatable";
                            circ.opacity = 0;

                            Interaction.rotItems.addChild(circ);
                            Interaction.rotItems.addChild(rotArrow);
                        }
                        Interaction.rotatableItem.fillColor = interactionSelectedColors[Interaction.randomNumber];
                        Interaction.rotatableItem.strokeColor = interactionSelectedColors[Interaction.randomNumber];
                        Interaction.rotItems.class = "rotatable";
                    }
                }
                if(this.item.class == "draggable"){
                    var noOfPoints = 0;
                    for(var i = 0; i < this.item.parentObject.pointsArr.length; i++){
                        if(Interaction.dropArea.hitTest(this.item.parentObject.pointsArr[i])){
                            noOfPoints += 1;
                        }
                    }
                    if(noOfPoints == this.item.parentObject.pointsArr.length){
                        Interaction.rotatableItem = this.item;
                        if(this.item.parentObject.myType == 3){
                            $('#flip').css("opacity",1);
                            $('#flip').get(0).onclick = flipSelectedItem;
                        }
                        if(this.item.isSnapped == true){
                            this.item.isSnapped = false;
                        }
                        for(var i = 0; i < 7; i++){
                            this.item.parentObject.trySnapTo(Interaction.questionTangram.pieces[i]);
                        }
                        Interaction.rotItems = new Group();
                        for(var i = 0; i < this.item.parentObject.pointsArr.length; i++){
                            var myPos = this.item.parentObject.pointsArr[i].findPointTo(this.item.parentObject.centerPoint,-10);

                            var myAng = Util.findAngle(this.item.parentObject.pointsArr[i].x,this.item.parentObject.pointsArr[i].y,this.item.position.x,this.item.position.y);
                            myAng = Util.radianToDegree(myAng);
                            myAng = 225-myAng;

                            var rotArrow = new Raster('rotationArrow');
                            rotArrow.position = new Point(myPos);
                            rotArrow.rotate(myAng,myPos);

                            var circ = new Path.Circle(myPos,10);
                            circ.fillColor = "red";
                            circ.class = "rotatable";
                            circ.opacity = 0;

                            Interaction.rotItems.addChild(circ);
                            Interaction.rotItems.addChild(rotArrow);
                        }
                        this.item.fillColor = interactionSelectedColors[Interaction.randomNumber];
                        this.item.strokeColor = interactionSelectedColors[Interaction.randomNumber];
                        Interaction.rotItems.class = "rotatable";
                    }
                    else{
                        if(this.item.parentObject.myType == 3){
                            if(this.item.parentObject.isFlipped == 1){
                                flipSelectedItem();
                            }
                        }
                        if(this.item.parentObject.myType == 3){
                            this.item = Interaction.tangram.pieces[3].shape;
                            this.item.parentObject.setRotation(this.item.parentObject.currentAngle-this.item.parentObject.originalAngle);
                            this.item.parentObject.setPos(this.item.parentObject.originalPosition);
                            if(Interaction.rotItems){
                                Interaction.rotItems.remove();
                            }
                            if(Interaction.rotatableItem){
                                Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                                Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                                Interaction.rotatableItem = null;
                            }
                            $('#flip').css("opacity",0.4);
                            $('#flip').get(0).onclick = null;
                        }
                        else{
                            this.item.parentObject.setRotation(this.item.parentObject.currentAngle-this.item.parentObject.originalAngle);
                            this.item.parentObject.setPos(this.item.parentObject.originalPosition);
                        }
                        if(this.item.isSnapped == true){
                            this.item.isSnapped = false;
                        }
                    }
                }
            }
            this.drag = false;
            this.item = null;
            this.rotate = false;
        };

        tool.activate();
    }
}
;





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
        // big triangle1 points
        var point1 = new Point(myPoint.x,myPoint.y);
        var point2 = new Point(myPoint.x+size,myPoint.y);
        var point3 = new Point(myPoint.x+(size*0.5),myPoint.y+(size*0.5));

        // big triangle2 points
        var point4 = new Point(myPoint.x,myPoint.y);
        var point5 = new Point(myPoint.x+(size*0.5),myPoint.y+(size*0.5));
        var point6 = new Point(myPoint.x,myPoint.y+size);

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
        var point18 = new Point(myPoint.x,myPoint.y+size);
        var point19 = new Point(myPoint.x+(size*0.25),myPoint.y+(size*0.75));
        var point20 = new Point(myPoint.x+(size*0.5),myPoint.y+size);

        // middle triangle points
        var point21 = new Point(myPoint.x+(size*0.5),myPoint.y+size);
        var point22 = new Point(myPoint.x+size,myPoint.y+(size*0.5));
        var point23 = new Point(myPoint.x+size,myPoint.y+size);

        // animate points
        animatePoints = [];
        animatePoints[0] = new Point(-2,-3);
        animatePoints[1] = new Point(-4,-1);
        animatePoints[2] = new Point(1,-1);
        animatePoints[3] = new Point(4,-4);
        animatePoints[4] = new Point(-2,2);
        animatePoints[5] = new Point(-4,4);
        animatePoints[6] = new Point(3,2);

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
            animHelper1.animate({
                style:{
                    myPoint:new Point(animatePoints[0])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b1.setPos(new Point(c1.add(this.myPoint)));
                }
            });
            animHelper2.animate({
                style:{
                    myPoint:new Point(animatePoints[1])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b2.setPos(new Point(c2.add(this.myPoint)));
                }
            });
            animHelper3.animate({
                style:{
                    myPoint:new Point(animatePoints[2])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b3.setPos(new Point(c3.add(this.myPoint)));
                }
            });
            animHelper4.animate({
                style:{
                    myPoint:new Point(animatePoints[3])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b4.setPos(new Point(c4.add(this.myPoint)));
                }
            });
            animHelper5.animate({
                style:{
                    myPoint:new Point(animatePoints[4])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b5.setPos(new Point(c5.add(this.myPoint)));
                }
            });
            animHelper6.animate({
                style:{
                    myPoint:new Point(animatePoints[5])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b6.setPos(new Point(c6.add(this.myPoint)));
                }
            });
            animHelper7.animate({
                style:{
                    myPoint:new Point(animatePoints[6])
                },
                duration:1000,
                delay:delay,
                animationType:'easeInOutQuad',
                update:function(){
                    b7.setPos(new Point(c7.add(this.myPoint)));
                }
            });
        }
    },
    flipPiece4:function(){
        var flipped = this.pieces[3].pointsArr;
        var newPointsArray = [];
        newPointsArray[0] = new Point(flipped[0].x,flipped[1].y);
        newPointsArray[1] = new Point(flipped[1].x,flipped[0].y);
        newPointsArray[2] = new Point(flipped[2].x,flipped[3].y);
        newPointsArray[3] = new Point(flipped[3].x,flipped[2].y);

        if(this.pieces[3]){
            this.pieces[3].shape.remove();
            this.pieces[3] = null;
        }
        this.pieces[3] = new MyShapes(newPointsArray,3,this.strokeColor,this.fillColor);
        this.pieces[3].shape.class = "draggable";
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

    this.setPos = function(newPosition){
        var difference = newPosition.subtract(this.shape.position);
        for(var i = 0; i < this.pointsArr.length; i++){
            this.pointsArr[i] = this.pointsArr[i].add(difference);
        }
        this.shape.position = newPosition;
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeLinesArray();
    };

    this.setRotation = function(angle){
        for(var i = 0; i < this.pointsArr.length; i++){
            this.pointsArr[i] = this.pointsArr[i].getRotatedPoint(angle,this.centerPoint);
        }

        this.shape.rotate(angle,this.centerPoint);
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeLinesArray();
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

    this.trySnapTo = function(){

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
};
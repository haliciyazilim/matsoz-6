function __Styles(){
	pantographShapesFillColor = "#f2c885";
    pantographShapesStrokeColor = "#9b763d";
}
;
/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 05.11.2012
 * Time: 06:20
 * To change this template use File | Settings | File Templates.
 */


var Pantograph = Class.extend({
    init:function(opt){
        this.animate = Item.prototype.animate;
        if(opt.legHeight == undefined)
            opt.legHeight = 150;
        this.referencePoint = opt.position;
        this.legHeight = opt.legHeight;


        this.aPosition = this.referencePoint.add(this.legHeight*1.5,0);
        this.rectangleStyle = {
            strokeColor:'#fca',
            fillColor:'#630'
        }
        this.circleStyle = {
            fillColor:'#000',
            strokeColor:'#fca'
        }
    },
    draw:function(){
        var squaredDistance = this.referencePoint.getDistance(this.aPosition,true);
        var topAngle = Math.acos( 1 - squaredDistance / (2 * Math.pow(this.legHeight,2)));
        var twinAngle = (Math.PI - topAngle)*0.5;
        var topPoint = this.referencePoint.findPointTo(this.aPosition,this.legHeight).getRotatedPoint(-Util.radianToDegree(twinAngle),this.referencePoint);
        var leftLeg = new Path.TwoPointRectangle(this.referencePoint,topPoint);
        leftLeg.set_style(this.rectangleStyle);
        var rightLeg = new Path.TwoPointRectangle(this.aPosition,topPoint);
        rightLeg.set_style(this.rectangleStyle);

        var leftArmPoint = this.referencePoint.findPointTo(topPoint,33.33,true);
        var rightArmPoint = topPoint.findPointTo(this.aPosition,33.33,true);
        var armsCommonPoint = this.referencePoint.findPointTo(this.aPosition,33.33,true);
//        leftArmPoint.showOnCanvas();
//        armsCommonPoint.showOnCanvas();
//        rightArmPoint.showOnCanvas();
        var leftArm = new Path.TwoPointRectangle(leftArmPoint,armsCommonPoint);
        var rightArm = new Path.TwoPointRectangle(rightArmPoint,armsCommonPoint);
        leftArm.set_style(this.rectangleStyle);
        rightArm.set_style(this.rectangleStyle);

        this.knuckles = [];
        var knuckleRadius = 3;
        this.knuckles.push(new Path.Circle(leftArmPoint,knuckleRadius))
        this.knuckles.push(new Path.Circle(rightArmPoint,knuckleRadius))
        this.knuckles.push(new Path.Circle(armsCommonPoint,knuckleRadius))
        this.knuckles.push(new Path.Circle(topPoint,knuckleRadius))
        for(var i=0;i<this.knuckles.length;i++)
            this.knuckles[i].set_style(this.circleStyle);

        this.rightLeg = rightLeg;
        this.leftLeg = leftLeg;
        this.leftArm = leftArm;
        this.rightArm = rightArm;

        this.armsCommonPoint = armsCommonPoint;

    },
    redraw:function(){
        if(this.rightLeg)
            this.rightLeg.remove();
        if(this.leftLeg)
            this.leftLeg.remove();
        if(this.rightArm)
            this.rightArm.remove();
        if(this.leftArm)
            this.leftArm.remove();
        if(this.knuckles)
            for(var i=0; i<this.knuckles.length;i++)
                this.knuckles[i].remove();
        this.draw();
    },
    setA:function(point){
        this.aPosition = point;
        this.redraw();
    }
});



function InteractiveGrids(opt){
    this.id = InteractiveGrids.GetId();

    if (opt.rows) {
        this.rows = opt.rows;
    } else {
        this.rows = 8;
    }

    if (opt.cols) {
        this.cols = opt.cols;
    } else {
        this.cols = 8;
    }

    this.vertexLetters = opt.vertexLetters;

    this.size = opt.size;
    this.position = opt.position;
    this.style = opt.style;
    this.points = [];
    this.vertexes = [];
    this.circles = [];
    this.lines = [];
    for(var i=0; i<=this.rows; i++)
        this.lines.push(new Path.Line(
            this.position.add(0,this.size*i),
            this.position.add(this.size*this.cols,this.size*i)
        ).set_style(this.style));
    for(var i=0; i<=this.cols;i++)
        this.lines.push(new Path.Line(
            this.position.add(this.size*i,0),
            this.position.add(this.size*i,this.size*this.rows)
        ).set_style(this.style));

    for(var i=0;i<=this.rows;i++)
        for(var j=0;j<=this.cols;j++){
            var point = this.position.add(this.size*i,this.size*j);
            var circle = new Path.Circle(point,this.size*0.3);
            circle.set_style({
                fillColor:new RgbColor(1,1,1,0)
            });
            circle.class = "InteractiveGridCircles"+this.id;
            this.circles.push(circle);
        }
    return this;
}


InteractiveGrids.prototype.activateRemoveOnClick = function(){
    this.removeOnClick = true;
}


InteractiveGrids.prototype.removeShape = function(){
    this.path.remove();
    for(var i=0;i < this.vertexes.length; i++)
        this.vertexes[i].remove();
    this.vertexes = [];
    for(var i=0; i< this.points.length; i++){
        this.points[i].class = "InteractiveGridCircles"+this.id;
    }
    this.path.remove();
    this.disableDraw = false;
    this.points = [];
    this.createTool();
}
InteractiveGrids.prototype.drawShape = function(points){
    this.path = new Path();
    this.path.set_style(this.style).set_style({
        strokeWidth: 3,
        strokeCap : 'butt',
        strokeColor : '#000'
    });
    if(points){
        for(var i=0; i<points.length; i++){
            var point = points[i].multiply(this.size,this.size).add(this.position);
            this.points.push(point);
            this.path.add(point);
        }
        this.path.closed = true;
        this.appendVertexLetters();
    }

    return this;
}

InteractiveGrids.prototype.undo  = function(){
    if(this.path.closed == true){
        this.path.closed = false;
        this.disableDraw = false;
        return;
    }
    this.path.removeSegment(this.path.segments.length-1);
    this.points.pop();
    this.appendVertexLetters();
    var circle = this.vertexes.pop()
        circle.baseCircle.class = "InteractiveGridCircles"+this.id;
        circle.remove();

}

InteractiveGrids.prototype.appendVertexLetters = function(){
    if(this.vertexLetters == undefined)
        return;
    var vertexLetters = [];
    for(var i=0; i<this.vertexLetters.length; i++)
        vertexLetters.push(this.vertexLetters[i]);
    if(this.vertexPointTexts)
        for(var i=0;i < this.vertexPointTexts.length; i++)
            this.vertexPointTexts[i].remove();
    this.vertexPointTexts = [];
    var centerPoint = Util.centerOfPoints(this.points);
    for(var i=0; i< this.points.length ; i++){
        var pointText = new PointText(this.points[i].findPointTo(centerPoint,-13).add(0,6));
        pointText.content = vertexLetters.shift();
        pointText.set_style({
            fontSize:12,
            justification:'center',
            strokeWidth:2,
            strokeColor:'#000'
        })
        this.vertexPointTexts.push(pointText);
    }
}
InteractiveGrids.prototype.createTool = function(){
    var tool = new Tool();
    var self = this;
    this.disableDraw = false;
    tool.onMouseDown = function(event){
        if(self.removeOnClick == true){
            self.removeShape();
            return;
        }
        if(self.disableDraw == true)
            return;
        if(event.item && event.item.class == "InteractiveGridCircles"+self.id){

            event.item.set_style({
            })
            var circle = new Path.Circle(event.item.position,4).set_style({
                fillColor:new RgbColor(0.2,0.2,0.2),
                class:"SelectedGridCircles"+self.id
            });
            circle.baseCircle = event.item;
            self.vertexes.push(circle)
            self.path.add(event.item.position);
            event.item.class = "SelectedGridCircles"+self.id;
            event.item.opacity =1 ;
            self.points.push(event.item.position);
            event.item.insertAbove(self.path);
            self.appendVertexLetters();

        }
        else if(event.item && event.item.class == "SelectedGridCircles"+self.id && self.points.length > 2){
            self.path.closed = true;
            self.disableDraw = true;
        }
    }
    tool.activate();
    return this;
}
InteractiveGrids.CreateShape = function(type){
    var points = [];
    var multiply = new Point(1,1);
    var add = new Point(0,0);
    switch(type){

        case 0: //cesitkenar ucgen
            points.push(new Point(1,0));
            points.push(new Point(0,2));
            points.push(new Point(3,2));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 1: //eskenar ucgen
            points.push(new Point(0,2));
            points.push(new Point(2,2));
            points.push(new Point(1,0));
            var rand = Util.randomInteger(1,3);
            multiply = new Point(rand , rand);
            add = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5))
            break;

        case 2: //dik ucgen
            points.push(new Point(0,0));
            points.push(new Point(0,1));
            points.push(new Point(1,1));
            multiply = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5));
            add = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5))
            break;

        case 3: //dik ucgen
            points.push(new Point(1,1));
            points.push(new Point(1,0));
            points.push(new Point(0,1));
            multiply = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5));
            add = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5))
            break;

        case 4: //genis acili ucgen
            points.push(new Point(0,2));
            points.push(new Point(2,2));
            points.push(new Point(3,0));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 5://dikdortgen
            points.push(new Point(2,0));
            points.push(new Point(2,2));
            points.push(new Point(0,2));
            points.push(new Point(0,0));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 6://paralekenar
            points.push(new Point(0,0));
            points.push(new Point(1,2));
            points.push(new Point(3,2));
            points.push(new Point(2,0));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 7://yamuk
            points.push(new Point(1,0));
            points.push(new Point(0,2));
            points.push(new Point(3,2));
            points.push(new Point(5,0));
            multiply = new Point(1 , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 8://duzgun besgen
            points.push(new Point(0,2));
            points.push(new Point(1,4));
            points.push(new Point(3,4));
            points.push(new Point(4,2));
            points.push(new Point(2,0));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;

        case 9:// cesitkenar besgen
            points.push(new Point(0,2));
            points.push(new Point(1,4));
            points.push(new Point(4,5));
            points.push(new Point(5,2));
            points.push(new Point(2,0));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;

        case 10://duzgun altigen
            points.push(new Point(0,2));
            points.push(new Point(1,4));
            points.push(new Point(3,4));
            points.push(new Point(4,2));
            points.push(new Point(3,0));
            points.push(new Point(1,0));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;

        case 11://duzgun altigen
            points.push(new Point(0,2));
            points.push(new Point(1,3));
            points.push(new Point(3,4));
            points.push(new Point(4,2));
            points.push(new Point(3,0));
            points.push(new Point(1,1));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;
    }
    for(var i=0;i<points.length;i++){
        points[i] = points[i].multiply(multiply).add(add);
    }
    return points;
}
InteractiveGrids.AreShapesSame = function(points1,points2){
    return InteractiveGrids.AreShapesSimilar(points1,points2,1);
}
InteractiveGrids.AreShapesSimilar = function(points1,points2,ratio){
    if(points1.length != points2.length )
        return false;
    else{
        function extractShape(points){
            var shape = [];
            for(var i=0; i < points.length; i++){

                var currentPoint = points[i];
                var backPoint = points[(i-1+points.length) % points.length];
                var frontPoint = points[(i+1) % points.length];
//                currentPoint.showOnCanvas();
//                new PointText(currentPoint).content = i;
                var angle = Math.abs(
                    Util.findAngle(currentPoint.x,currentPoint.y,frontPoint.x,frontPoint.y) -
                    Util.findAngle(currentPoint.x,currentPoint.y,backPoint.x,backPoint.y)
                );
                angle = Util.radianToDegree(angle);
                if(angle > 180)
                    angle = 360 - angle;
//                console.log(angle);
                shape.push([
                    currentPoint.getDistance(frontPoint,true),
                    currentPoint.getDistance(backPoint,true),
                    angle,
                    currentPoint
                ])
            }
            return shape;
        }
        var shape1 = extractShape(points1);
        var shape2 = extractShape(points2);
        var largestEdgeInShape1 = 0;
        for(var i=0; i < shape1.length; i++)
            if(largestEdgeInShape1 < shape1[i][0])
                largestEdgeInShape1 = shape1[i][0];
        var largestEdgeInShape2 = 0;
        for(var i=0; i < shape2.length; i++)
            if(largestEdgeInShape2 < shape2[i][0])
                largestEdgeInShape2 = shape2[i][0];

        var similarityRatio
        if(ratio == undefined)
            similarityRatio = largestEdgeInShape1 / largestEdgeInShape2 ;
        else
            similarityRatio = ratio;
        var error = 0.00001;
        var length = shape1.length;

        //start comparing in the same direction
        function compareShapes(shape1,shape2,reverse){
            for(var j= 0;j<=length;j++){
                var isSimilar = true;
                for(var i=0; i<=length;i++ ){
                    var x = (i+j+length) % length;
                    if(shape1[i%length][2] == shape2[x][2]){ //angle
                        var currentRatio = shape1[i%length][0] / shape2[x][(reverse?1:0)];
                        if(similarityRatio+error > currentRatio && similarityRatio-error  < currentRatio ){ // edges
                            continue;
                        }else{
                            isSimilar = false;
                        }
                    }
                    else{
                        isSimilar = false;
                    }
                }
                if(isSimilar == true){
                    InteractiveGrids.MoveShapeTo(shape1,shape2,j,reverse)
                    return true;
                }
            }
        }
        if(compareShapes(shape1,shape2,false)==true)
            return true;
        if(compareShapes(shape1,shape2,true)==true)
            return true;
        shape1 = shape1.reverse();
        if(compareShapes(shape1,shape2,false)==true)
            return true;
        if(compareShapes(shape1,shape2,true)==true)
            return true;
    }
    return false;
}
InteractiveGrids.GetId = function(){
    if(InteractiveGrids.order){
        return InteractiveGrids.order++;
    }else{
        InteractiveGrids.order = 1;
        return InteractiveGrids.GetId();
    }
}
InteractiveGrids.MoveShapeTo = function(fromPoints,toPoints,toStartPoint,reverse){

    if(fromPoints.length != toPoints.length)
        return;
    var shape;
    var animHelper = new AnimationHelper({});
    var style = {};
    console.log("reverse: " + reverse)
    for(var i=0;i<fromPoints.length;i++){
        style["point"+i] = fromPoints[i][3];
        animHelper["point"+i] = toPoints[(i+toStartPoint+toPoints.length-(reverse===true && toPoints.length > 3 ?0:0))%toPoints.length][3];
    }
    animHelper.animate({
        style:style,
        duration:2000,
        animationType:'easeInEaseOut',
        update:function(){
            if(shape)
                shape.remove();
            shape = new Path();
            for(var i=0;true;i++)
                if(this["point"+i])
                    shape.add(this["point"+i]);
                else
                    break;
            shape.closed = true;
            shape.strokeColor = "#000";
            shape.strokeWidth = 2;
        },
        callback:function(){
            Interaction.resume();
        }
    })
};

function PantographShapes(pointsArr,halfLength) {
    this.pointsArr = [];

    for(var i = 0; i < pointsArr.length; i++) {
        this.pointsArr[i] = pointsArr[i];
    }

    this.centerPoint = Util.centerOfPoints(this.pointsArr);

    this.drawShape = function(){
        var shapeGroup = new Group();
        var a = new Path();
        a.moveTo(this.pointsArr[0].x,this.pointsArr[0].y-halfLength);
        a.lineTo(this.pointsArr[1].x,this.pointsArr[1].y-halfLength);
        a.lineTo(this.pointsArr[1].x,this.pointsArr[1].y+halfLength);
        a.lineTo(this.pointsArr[1].x,this.pointsArr[0].y+halfLength);
        a.lineTo(this.pointsArr[0].x,this.pointsArr[0].y-halfLength);
        a.closed = true;
        a.strokeColor = pantographShapesStrokeColor;
        a.fillColor = pantographShapesFillColor;
        a.strokeCap = 'round';
        this.centerPoint = Util.centerOfPoints(this.pointsArr);

        var firstCenter = Util.centerOfPoints([this.pointsArr[0],this.pointsArr[3]]);
        firstCenter = firstCenter.findPointTo(this.centerPoint,7);

        var firstCirc = new Path.Circle(firstCenter,2);
        firstCirc.fillColor = '#333';

        var secondCenter = Util.centerOfPoints([this.pointsArr[1],this.pointsArr[2]]);
        secondCenter = secondCenter.findPointTo(this.centerPoint,7);

        var secondCirc = new Path.Circle(secondCenter,2);
        secondCirc.fillColor = '#333';

        shapeGroup.addChild(a);
        shapeGroup.addChild(firstCirc);
        shapeGroup.addChild(secondCirc);

        return shapeGroup;
    };

    this.shape = this.drawShape();
    this.shape.parentObject = this;

    this.setPos = function(newPosition) {
        var difference = newPosition.subtract(this.shape.position);
        for(var i = 0; i < this.pointsArr.length; i++) {
            this.pointsArr[i] = this.pointsArr[i].add(difference);
        }
        this.shape.position = newPosition;
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeCurrentAngle();
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
    this.computeOriginalAngle();
    this.computeCurrentAngle();

    this.setRotation = function(angle) {
        for(var i = 0; i < this.pointsArr.length; i++) {
            this.pointsArr[i] = this.pointsArr[i].getRotatedPoint(angle,this.centerPoint);
        }
        this.shape.rotate(angle,this.centerPoint);
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeCurrentAngle();
    };
    return this;
}
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Main.animationFinished();

        var pantograph = new Pantograph({
            position:new Point(200,160)
        })
        pantograph.draw();
        pantograph.setA(pantograph.referencePoint.add(110,-75));
        Animation.pantograph = pantograph;
        console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
        Path.DrawPoints([
            new Point(236.663, 135.0025 ),
            new Point(269.993, 135.0025),
            new Point(279.992, 160),
            new Point(229.997, 160)
        ]).set_style({
                strokeColor:'#000'
            });
        Animation.path = new Path();
        Animation.path.add(Animation.pantograph.aPosition);
        Animation.path.set_style({
            strokeColor:'#000'
        })
        AnimationManager.delay(Animation.anim1,1000);
    },
    anim1:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(100,0)},
            duration:2000,
            init:function(){
            },
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Animation.anim2();
            },
            animationType:'easeInEaseOut'
        });
    },
    anim2:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(30,75)},
            duration:2000,
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Animation.anim3();
            },
            animationType:'easeInEaseOut'
        });
    },
    anim3:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(-150,0)},
            duration:2000,
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Animation.anim4();
            },
            animationType:'easeInEaseOut'
        });
    },
    anim4:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(20,-75)},
            duration:2000,
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Main.animationFinished();
            },
            animationType:'easeInEaseOut'
        });
    }
}
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki çokgenin benzerini yandaki kareli bölgede oluşturup kontrol ediniz.');

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:"10px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"20px",
            right:"150px"
        });
        Interaction.undoButton = Util.dom({
            parent:container,
            tag:'input'
        });
        Interaction.undoButton.setAttribute('class','next_button');
        Interaction.undoButton.setAttribute('type','button');
        $(Interaction.undoButton).css({
            position:'absolute',
            bottom:'70px',
            right:'10px',
            backgroundImage:'url(/assets/btn_gray_undo_text.png)',
            width:'57px',
            height:'32px'
        })
        Interaction.undoButton.onclick = Interaction.undo;
        Interaction.setRandomGenerator(12)
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Interaction.trial++;
        Main.interactionProject.activeLayer.removeChildren();
        /*<[[TEST*/
//            randomNumber = 5;
        /*TEST]]>*/
        var v1 = ['A','B','C','D','E','F','G','H','I','J'];
        var v2 = ['K','L','M','N','O','P','R','S','T','U'];
        if(Util.rand01()==1){
            var vertex1 = v1;
            var vertex2 = v2;
        }
        else{
            var vertex1 = v2;
            var vertex2 = v1;

        }

        Interaction.masterShape = InteractiveGrids.CreateShape(randomNumber);
        Interaction.masterGrid = new InteractiveGrids({
            position:new Point(10.5,23.5),
            size:27,
            style:{
                strokeColor:'#000'
            },
            vertexLetters:vertex1
        }).drawShape(Interaction.masterShape);
        Interaction.slaveGrid = new InteractiveGrids({
            position:new Point(300.5,23.5),
            size:15 + (randomNumber % 4) * 4,
            style:{
                strokeColor:'#666'
            },
            vertexLetters:vertex2
        }).drawShape().createTool();
    },
		
	preCheck : function(){
        if(Interaction.slaveGrid.path.closed != true){
            Interaction.setStatus("Lütfen bir kapalı şekil çiziniz","alert");
            return false;
        }
    },
	isAnswerCorrect : function(value){
        Interaction.slaveGrid.path.strokeColor = "green";
        return InteractiveGrids.AreShapesSimilar(Interaction.masterGrid.points,Interaction.slaveGrid.points);
    },
	onCorrectAnswer : function(){
		Interaction.pause();
    },
	onWrongAnswer : function(){

    },
	onFail : function(){
        Interaction.setStatus("Yanlış cevap.",false);
        Interaction.slaveGrid.path.strokeColor = "red";
        Interaction.pause();
        AnimationManager.delay(function(){
            Interaction.slaveGrid.removeShape();
            Interaction.slaveGrid.drawShape(Interaction.masterShape);
            Interaction.slaveGrid.path.strokeColor = "green";
            AnimationManager.delay(function(){
                InteractiveGrids.AreShapesSimilar(Interaction.masterGrid.points,Interaction.slaveGrid.points);
            },500)
        },2000);

    },
    undo:function(){
        Interaction.slaveGrid.undo();
    }

}
;
/**
 * Created with JetBrains WebStorm.
 * User: yunus_work
 * Date: 13.09.2012
 * Time: 10:08
 * To change this template use File | Settings | File Templates.
 */


function __Languages(){

}
;







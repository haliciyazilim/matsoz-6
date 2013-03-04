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
function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
    interactionPathWrongStyle = {
        strokeColor:new RgbColor(1,0.3,0.3,0.7),
        fillColor:new RgbColor(1,0.5,0.5,0.7)
    }
    interactionPathCorrectStyle ={
        strokeColor:new RgbColor(0,0.7,0,0.8),
        fillColor:new RgbColor(0.3,0.7,0.3,0.8)
    }
}
;
InteractiveGrids.prototype._drawShape = InteractiveGrids.prototype.drawShape
InteractiveGrids.prototype.drawShape = function(points,drawShadow){
    if(drawShadow == undefined)
        drawShadow = true;
    if(drawShadow == true){
        this._drawShape(points);
        this.shadowPath = this.path;
        this.path = null
        this.shadowPath.set_style({
            fillColor:new RgbColor(0.7,0.7,0.7,0.3),
            strokeColor:new RgbColor(0.3,0.3,0.3,0.3)
        });
    }
    this._drawShape(points);
    this.path.class = "draggable";
    this.path.set_style({
        fillColor:new RgbColor(Math.random()-0.1,Math.random()-0.1,Math.random()+0.1,0.8),
        strokeColor:new RgbColor(0.4,0.4,0.4,1)
    });
    return this;
}
InteractiveGrids.prototype.isPathHorizontalOverflowed = function(){
    var rect = new Rectangle(this.position,new Size(this.size*8,this.size*8));
    if(!rect.contains(new Point(this.path.bounds.x,this.position.y)))
        return true;
    if(!rect.contains(new Point(this.path.bounds.x+this.path.bounds.width,this.position.y)))
        return true;
    return false;
}
InteractiveGrids.prototype.isPathVerticalOverflowed = function(){
    var rect = new Rectangle(this.position,new Size(this.size*8,this.size*8));
    if(!rect.contains(new Point(this.position.x,this.path.bounds.y)))
        return true;
    if(!rect.contains(new Point(this.position.x,this.path.bounds.y+this.path.bounds.height)))
        return true;
    return false;
}
InteractiveGrids.prototype.setPathPosition = function(point){
    this.path.position = this.position.add(point.multiply(this.size,this.size));
}
InteractiveGrids.prototype.animateToNewPosition = function(opt){
    if(!opt.delay)
        opt.delay = 0;
    if(!opt.speed)
        opt.speed = 1;
    var oldPosition = this.path.position;
    var newPosition = opt.position.multiply(this.size,this.size).add(this.position);
    this.path.animate({
        style:{
            position:newPosition
        },
        duration:oldPosition.getDistance(newPosition) * 10 / opt.speed,
        delay:opt.delay,
        callback:opt.callback,
        animationType:'easeInEaseOut'
    })
}
InteractiveGrids.prototype.appendVertexLetters = function(){}
InteractiveGrids.prototype.getPathPosition = function(){
    return this.path.position.subtract(this.position).divide(this.size,this.size);
}
InteractiveGrids.prototype.createTool = function(){
    var snapTolerance = 3;
    var tool = new Tool();
    var self = this;
    tool.onMouseDown = function(event){
        this.item = null;
        if(event.item && event.item.class == "draggable"){
            this.item = event.item;
            this.firstPosition = this.item.position;
            this.totalDelta = new Point(0,0)
        }
    }
    tool.onMouseDrag = function(event){
        if(this.item){
            this.totalDelta = this.totalDelta.add(event.delta);
            var oldPosition = this.item.position;
            this.item.position = this.firstPosition.add(
                Util.round(this.totalDelta.x,self.size),
                Util.round(this.totalDelta.y,self.size)
            );
            if(self.isPathVerticalOverflowed())
                this.item.position = new Point(this.item.position.x,oldPosition.y);
            if(self.isPathHorizontalOverflowed())
                this.item.position = new Point(oldPosition.x,this.item.position.y);
        }
    }
    tool.onMouseUp = function(event){
        this.item = null;
        this.firstPosition = null;
        this.totalDelta = null;
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
    multiply = new Point(1,1);
    for(var i=0;i<points.length;i++){
        points[i] = points[i].multiply(multiply).add(add);
    }
    return points;
}
;
var Animation = {
    images:[
    ],
	init:function(container){
        Animation.grids = new InteractiveGrids({
            position:new Point(305.5,10.5),
            size:17,
            style:{
                strokeColor:'#999'
            }
        }).drawShape([
            new Point(1,1),
            new Point(2,1),
            new Point(2,3),
            new Point(1,3),
            new Point(1,1),
            new Point(1,2),
            new Point(3,2),
            new Point(3,3),
            new Point(1,3)
        ]);
        Animation.grids.path.set_style({
            fillColor:new RgbColor(0.5,1,0),
            strokeColor:new RgbColor(0,0,0)
        });

        AnimationManager.delay(function(){
            var text = new PointText(new Point(375,165));
            text.set_style({
                content:'üç birim sağa',
                justification:'center',
                fontSize:13,
                opacity:0
            }).animate({
                style:{opacity:1},
                duration:500
            });
            Animation.grids.animateToNewPosition({
                position:Animation.grids.getPathPosition().add(3,0),
                speed:0.5,
                delay:500,
                callback:function(){
                    text.animate({
                        style:{opacity:0},
                        duration:500,
                        delay:500,
                        callback:text.remove
                    })
                }
            })

        },1000)

        AnimationManager.delay(function(){
            var text = new PointText(new Point(375,165));
            text.set_style({
                content:'dört birim aşağıya',
                justification:'center',
                fontSize:13,
                opacity:0
            }).animate({
                    style:{opacity:1},
                    duration:500
                });
            Animation.grids.animateToNewPosition({
                position:Animation.grids.getPathPosition().add(0,4),
                speed:0.5,
                delay:500,
                callback:function(){
                    text.animate({
                        style:{opacity:0},
                        duration:500,
                        delay:500,
                        callback:function(){
                            text.remove();
                            Main.animationFinished();
                        }
                    })
                }
            })

        },4000)
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
        Main.setObjective('Yandaki kareli zeminde verilen şekli sürükleyerek istenen yönde öteleyiniz ve kontrol ediniz.');
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
        Interaction.appendQuestion('<div id="command"></div>',{
            position:'absolute',
            right:'30px',
            top:'120px',
            width:'200px',
            lineHeight:'26px',
            fontSize:'16px',
            textAlign:'center',
            fontWeight:'bold'
        });

        Interaction.setRandomGenerator(11)
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
//        Interaction.trial++;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.shape = InteractiveGrids.CreateShape(randomNumber)
        Interaction.grids = new InteractiveGrids({
            position:new Point(100.5,23.5),
            size:30,
            style:{
                strokeColor:'#999'
            }
        }).drawShape(Interaction.shape).createTool();
        Interaction.initialPathPosition = Interaction.grids.getPathPosition();
        do
            Interaction.generateAndShowCommand()
        while(function(){
            var newPositionOnGrids = Interaction.grids.getPathPosition().add(Interaction.command);
            Interaction.grids.setPathPosition(newPositionOnGrids);
            var isOverflowed = false;
            if(Interaction.grids.isPathVerticalOverflowed() || Interaction.grids.isPathHorizontalOverflowed())
                isOverflowed = true;
            Interaction.grids.setPathPosition(Interaction.initialPathPosition);
            return isOverflowed;
        }())
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        if(Interaction.initialPathPosition.equals(Interaction.grids.getPathPosition())){
            Interaction.setStatus('Lütfen şekli farklı bir noktaya sürükleyiniz','alert');
            return false;

        }
    },
	isAnswerCorrect : function(value){
        return Interaction.command.equals(Interaction.grids.getPathPosition().subtract(Interaction.initialPathPosition));
    },
	onCorrectAnswer : function(){
        Interaction.grids.path.set_style(interactionPathCorrectStyle);
		
    },
	onWrongAnswer : function(){

    },
	onFail : function(){
		Interaction.pause();
        Interaction.grids.path.animate({
            style:interactionPathWrongStyle,
            duration:1000,
            callback:function(){
                Interaction.grids.drawShape(Interaction.shape,false);
                Interaction.grids.path.set_style({opacity:0})
                Interaction.grids.path.set_style(interactionPathCorrectStyle);
                Interaction.grids.path.animate({style:{opacity:1},duration:500});
                Interaction.grids.animateToNewPosition({
                    position:Interaction.initialPathPosition.add(Interaction.command.multiply(1,0)),
                    callback:function(){
                        Interaction.grids.animateToNewPosition({
                            position:Interaction.initialPathPosition.add(Interaction.command.multiply(1,1)),
                            callback:Interaction.resume,
                            speed:0.8
                        });
                    },
                    speed:0.8,
                    delay:1000
                });
            }
        });

        Interaction.setStatus('Yanlış cevap. Şekil olması gerektiği noktaya taşınacaktır.',false)
    },
    generateAndShowCommand:function(){
        var point = new Point(Util.rand01()?1:-1,Util.rand01()?1:-1);
        point = point.multiply(Util.randomInteger(1,4),Util.randomInteger(1,4));
        Interaction.setQuestionParams({id:'command',html:Interaction.commandToString(point)});
        Interaction.command = point;
    },
    commandToString:function(vector){
        var x = vector.x;
        var y = vector.y;
        var str = "";
        if(x != 0){
            str += Util.numberToString(Math.abs(x)) + ' birim ';
            str += (x>0?'sağa':'sola');
        }
        if(x != 0 && y != 0)
            str += ",<br/> ";
        if(y !=0 ){
            str += Util.numberToString(Math.abs(y)) + ' birim ';
            str += (y>0?'aşağıya':'yukarıya');
        }
        return str;
    }
}
;






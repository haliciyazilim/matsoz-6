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
var ShapePattern = Class.extend({
    init:function(opt){
        if(opt.position)
            this.position = opt.position;
        else
            this.position = new Point(0,0);
        if(opt.number)
            this.number = opt.number;
        if(opt.pieceType)
            this.pieceType = opt.pieceType;
        if(opt.pieceStyle)
            this.pieceStyle = opt.pieceStyle;


    },
    generateShapePoints:function(){
        this.shapePoints = [new Point(0,0)];
    },
    isEqual:function(other){
        this.generateShapePoints(true);
        other.generateShapePoints(true);
        if(this.shapePoints.length != other.shapePoints.length)
            return false;
        var length = this.shapePoints.length;
        var equalsFlag = [];
        for(var i=0; i < length; i++)
            equalsFlag.push(false);
        for(var i=0 ; i <length; i++)
            for(var j=0; j < length ;j++)
                if(this.shapePoints[i].equals(other.shapePoints[j]))
                    equalsFlag[i] = true;
        this.generateShapePoints();
        other.generateShapePoints();
        for(var i=0;i<length;i++)
            if(equalsFlag[i] == false)
                return false;
        return true;
    },
    drawAPiece:function(upperLeftPosition,gridSize){
        return PieceFactory({
            type:this.pieceType,
            upperLeftPosition:upperLeftPosition,
            gridSize:gridSize,
            style:this.pieceStyle
        });
    },
    getWidth:function(){
        this.generateShapePoints(true);
        var rows = [];
        for(var i=0;i<this.shapePoints.length;i++)
            rows[i] = 0;
        for(var i=0; i<this.shapePoints.length; i++)
            rows[this.shapePoints[i].y]++;
        var max = 0;
        for(var i=0; i<rows.length;i++)
            if(max < rows[i])
                max = rows[i];
        return max;
    }
});
InteractiveGrids.prototype.cleanGrids = function(duration,delay){
    for(var i=0; i<this.pieces.length;i++)
        if(duration == undefined)
            this.pieces[i].remove();
        else
            this.pieces[i].animate({
                style:{opacity:0},
                duration:duration,
                delay:delay,
                callback:function(){
                    this.remove();
                }
            })
    this.pieces = [];
}
InteractiveGrids.prototype.drawPattern = function(pattern){
    var absolutePoints = [];
    pattern.generateShapePoints();
    for(var i=0; i<pattern.shapePoints.length; i++){
        absolutePoints.push(
            this.extractAbsolutePointFromGridPoint(
                pattern.shapePoints[i]
                    .multiply(1,-1)
                    .add(0,this.rows-1)
            )
        );
    }
    var pieces = [];
    for(var i=0; i < absolutePoints.length ;i++){
        pieces.push(pattern.drawAPiece(absolutePoints[i],this.size));
    }
    return pieces;
}
InteractiveGrids.prototype.createTool = function(patternName){
    var tool = new Tool();
    var self = this;
    this.inputPattern = new window[patternName]({});
    this.inputPattern.pieceType = Interaction.pieceType;
    this.inputPattern.pieceStyle = Interaction.pieceStyle;
    this.pieces = [];
    tool.onMouseDown = function(event){
        if(this.down == true)
            return;
        this.down = true;
        var gridPoint = self.extractGridPointFromAbsolutePoint(event.point);
        for(var i=0;i < self.pieces.length; i++)
            if(self.pieces[i] && self.pieces[i].gridPoint.equals(gridPoint)){
                gridPoint = false;
                self.pieces[i].remove();
                self.pieces.splice(i,1);
                break;
            }
        if(gridPoint  != false){
            var piece = self.inputPattern.drawAPiece(self.extractAbsolutePointFromGridPoint(gridPoint),self.size);
            piece.gridPoint = gridPoint;
            self.pieces.push(piece);
        }
    }
    tool.onMouseUp = function(event){
        this.down = false;
    }
    tool.activate();
}

InteractiveGrids.prototype.getInputPattern = function(){
    this.inputPattern.shapePoints = [];
    this.inputPoints = [];
    this.inputPattern.generateShapePoints = function(){
        return this.shapePoints;
    }
    if(this.pieces.length == 0)
        return this.inputPattern;
    for(var i=0; i<this.pieces.length;i++)
        if(this.pieces[i] != undefined)
            this.inputPoints.push(this.pieces[i].gridPoint)
    //convert -y axis
    for(var i=0; i<this.inputPoints.length; i++)
        this.inputPattern.shapePoints[i] = this.inputPoints[i].subtract(0,this.rows).multiply(1,-1);
    //calculate shape relative grid points
    var minX = this.inputPattern.shapePoints[0].x,minY = this.inputPattern.shapePoints[0].y;
    for(var i=1; i<this.inputPoints.length; i++)
        if(minX > this.inputPattern.shapePoints[i].x)
            minX = this.inputPattern.shapePoints[i].x;
    for(var i=1; i<this.inputPoints.length; i++)
        if(minY > this.inputPattern.shapePoints[i].y)
            minY = this.inputPattern.shapePoints[i].y;
    for(var i=0; i<this.inputPoints.length; i++)
        this.inputPattern.shapePoints[i] = this.inputPattern.shapePoints[i].subtract(minX,minY);
    return this.inputPattern;
}

InteractiveGrids.prototype.extractAbsolutePointFromGridPoint = function(gridPoint){
    return gridPoint
        .multiply(this.size,this.size)
        .add(this.position)
}
InteractiveGrids.prototype.extractGridPointFromAbsolutePoint = function(absolutePoint){
    absolutePoint = absolutePoint.subtract(this.position);
    var gridPoint = new Point(
        Util.floor(absolutePoint.x,this.size),
        Util.floor(absolutePoint.y,this.size)
    ).divide(this.size,this.size)
    if(gridPoint.x >= this.cols)
        return false;
    if(gridPoint.x < 0)
        return false;
    if(gridPoint.y >= this.rows)
        return false;
    if(gridPoint.y < 0)
        return false;
    return gridPoint;
}

var TriangleShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
        this.patternStyle = {
            strokeColor:'dark',
            fillColor:'red',
            opacity:0.8
        }
    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [];
        for(var i=0; i<this.number; i++){
            for(var j=0;j<=i;j++){
                this.shapePoints.push(new Point(j,i-j));
            }
        }
        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
    }
});


var DoubleXShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);

    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [];
        switch(this.number){
            case 4:
                this.shapePoints.push( new Point(-3, 2) )
                this.shapePoints.push( new Point(-3,-2) )
                this.shapePoints.push( new Point( 3,-2) )
                this.shapePoints.push( new Point( 3, 2) )
                this.shapePoints.push( new Point(-2,-3) )
                this.shapePoints.push( new Point(-2, 3) )
                this.shapePoints.push( new Point( 2, 3) )
                this.shapePoints.push( new Point( 2,-3) )
            case 3:
                this.shapePoints.push( new Point( 2,-1) )
                this.shapePoints.push( new Point(-2,-1) )
                this.shapePoints.push( new Point(-2, 1) )
                this.shapePoints.push( new Point( 2, 1) )
                this.shapePoints.push( new Point( 1, 2) )
                this.shapePoints.push( new Point( 1,-2) )
                this.shapePoints.push( new Point(-1,-2) )
                this.shapePoints.push( new Point(-1, 2) )
            case 2:
                this.shapePoints.push( new Point(-1, 0) )
                this.shapePoints.push( new Point( 1, 0) )
                this.shapePoints.push( new Point( 0, 1) )
                this.shapePoints.push( new Point( 0,-1) )
            case 1:
                this.shapePoints.push( new Point( 0, 0) )

        }
        for(var i=0;i < this.shapePoints.length; i++)
            this.shapePoints[i] = this.shapePoints[i].add(this.number-1,0);
        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
        else{
            //calculate shape relative grid points
            var minX = this.shapePoints[0].x,minY = this.shapePoints[0].y;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minX > this.shapePoints[i].x)
                    minX = this.shapePoints[i].x;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minY > this.shapePoints[i].y)
                    minY = this.shapePoints[i].y;
            for(var i=0; i<this.shapePoints.length; i++)
                this.shapePoints[i] = this.shapePoints[i].subtract(minX,minY);


        }
    },
    getWidth:function(){
        return  this.number < 2 ? 3 : this.number*2-1;
    }
})


var XPlusShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);

    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [
            new Point(1,1),
            new Point(-1,1),
            new Point(-1,-1),
            new Point(1,-1),
        ];
        for(var i=0; i<this.number; i++){
            for(var j=0;i > 0 && j<4 || j == 0 && i==j;j++){
                var point = new Point(i,i);
                var a, b;
                switch(j%4){
                    case 0:
                        a = 0;
                        b = -1;
                        break;
                    case 1:
                        a = 1;
                        b = 0;
                        break;
                    case 2:
                        a = -1;
                        b = 0;
                        break;
                    case 3:
                        a = 0;
                        b = 1;
                        break;
                }
                this.shapePoints.push(point.multiply(a,b));
            }
        }
        for(var i=0;i < this.shapePoints.length; i++)
            this.shapePoints[i] = this.shapePoints[i].add(this.number-1,0);
        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
        else{
            //calculate shape relative grid points
            var minX = this.shapePoints[0].x,minY = this.shapePoints[0].y;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minX > this.shapePoints[i].x)
                    minX = this.shapePoints[i].x;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minY > this.shapePoints[i].y)
                    minY = this.shapePoints[i].y;
            for(var i=0; i<this.shapePoints.length; i++)
                this.shapePoints[i] = this.shapePoints[i].subtract(minX,minY);


        }
    },
    getWidth:function(){
        return  this.number < 2 ? 3 : this.number*2-1;
    }
})
var PlusShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
        this.patternStyle = {
            strokeColor:'dark',
            fillColor:'#3C9',
            strokeCap:'square'
        }
    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [];
        for(var i=0; i<this.number; i++){
            for(var j=0;i > 0 && j<4 || j == 0 && i==j;j++){
                var point = new Point(i,i);
                var a, b;
                switch(j%4){
                    case 0:
                        a = 0;
                        b = -1;
                        break;
                    case 1:
                        a = 1;
                        b = 0;
                        break;
                    case 2:
                        a = -1;
                        b = 0;
                        break;
                    case 3:
                        a = 0;
                        b = 1;
                        break;
                }
                this.shapePoints.push(point.multiply(a,b).add(this.number-1,0));
            }
        }
        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
        else{
            //calculate shape relative grid points
            var minX = this.shapePoints[0].x,minY = this.shapePoints[0].y;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minX > this.shapePoints[i].x)
                    minX = this.shapePoints[i].x;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minY > this.shapePoints[i].y)
                    minY = this.shapePoints[i].y;
            for(var i=0; i<this.shapePoints.length; i++)
                this.shapePoints[i] = this.shapePoints[i].subtract(minX,minY);


        }
    },
    getWidth:function(){
        return this.number*2-1;
    }
});

var HexagonShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
        this.patternStyle = {
            strokeColor:'dark',
            fillColor:'#f99'
        }
    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [];

        for(var i=0; i < this.number*this.number; i++){
            this.shapePoints.push(new Point(
                Math.floor(i/this.number),
                Math.floor(i%this.number)
            ))
        }

        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
    },
    getWidth:function(){
        return this.number;
    }
});


var QuestionMarkPattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
    },
    generateShapePoints:function(relativePoints){
        this.shapePoints = [new Point(0,2)];
        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
    },
    drawAPiece:function(upperLeftPosition,gridSize){
        var raster = new Raster('question_mark');
        raster.position = upperLeftPosition.add(raster.bounds.width*0.5,raster.bounds.height*0.2)
    }

});

var TShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
    },
    getWidth:function(){
        return this.number*2-1;
    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [];
        switch(this.number){
            case 4:
                this.shapePoints.push( new Point(-3, 0) )
                this.shapePoints.push( new Point( 3, 0) )
                this.shapePoints.push( new Point( 0, 3) )
            case 3:
                this.shapePoints.push( new Point(-2, 0) )
                this.shapePoints.push( new Point( 2, 0) )
                this.shapePoints.push( new Point( 0, 2) )
            case 2:
                this.shapePoints.push( new Point(-1, 0) )
                this.shapePoints.push( new Point( 1, 0) )
                this.shapePoints.push( new Point( 0, 1) )
            case 1:
                this.shapePoints.push( new Point( 0, 0) )

        }
        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
        else{
            //calculate shape relative grid points
            var minX = this.shapePoints[0].x,minY = this.shapePoints[0].y;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minX > this.shapePoints[i].x)
                    minX = this.shapePoints[i].x;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minY > this.shapePoints[i].y)
                    minY = this.shapePoints[i].y;
            for(var i=0; i<this.shapePoints.length; i++)
                this.shapePoints[i] = this.shapePoints[i].subtract(minX,minY);


        }
    }
})

var NumberPattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [ new Point (0,0) ];

        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
        else{
            //calculate shape relative grid points
            var minX = this.shapePoints[0].x,minY = this.shapePoints[0].y;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minX > this.shapePoints[i].x)
                    minX = this.shapePoints[i].x;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minY > this.shapePoints[i].y)
                    minY = this.shapePoints[i].y;
            for(var i=0; i<this.shapePoints.length; i++)
                this.shapePoints[i] = this.shapePoints[i].subtract(minX,minY);
        }
    },
    drawAPiece:function(upperLeftPosition,gridSize){
        var text = new PointText(new Point(0,0));
        text.content = (this.number-1)*3+1;
        text.set_style({
            fontSize:gridSize,
            justification:'center'
        });
        text.position = text.position.add(upperLeftPosition).add(gridSize*0.5,gridSize);
        return text;
    },

})

var XShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
        this.patternStyle = {
            strokeColor:'dark',
            fillColor:'red',
            opacity:0.8
        }
    },
    getWidth:function(){
        return this.number*2-1;
    },
    generateShapePoints:function(relativePoints){
        if(relativePoints == undefined)
            relativePoints = false;
        this.shapePoints = [];
        for(var i=0; i<this.number; i++){
            for(var j=0;i > 0 && j<4 || j == 0 && i==j;j++){
                var point = new Point(i,i);
                var a, b;
                switch(j%4){
                    case 0:
                        a = -1;
                        b = -1;
                        break;
                    case 1:
                        a = 1;
                        b = -1;
                        break;
                    case 2:
                        a = -1;
                        b = 1;
                        break;
                    case 3:
                        a = 1;
                        b = 1;
                        break;
                }
                this.shapePoints.push(point.multiply(a,b).add(this.number-1,0));
            }
        }
        if(!relativePoints)
            for(var i=0;i<this.shapePoints.length;i++)
                this.shapePoints[i] = this.shapePoints[i].add(this.position)
        else{
            //calculate shape relative grid points
            var minX = this.shapePoints[0].x,minY = this.shapePoints[0].y;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minX > this.shapePoints[i].x)
                    minX = this.shapePoints[i].x;
            for(var i=1; i<this.shapePoints.length; i++)
                if(minY > this.shapePoints[i].y)
                    minY = this.shapePoints[i].y;
            for(var i=0; i<this.shapePoints.length; i++)
                this.shapePoints[i] = this.shapePoints[i].subtract(minX,minY);


        }
    }
});

var PieceFactory = function(opt){
    var path = new Path();
    var gridSize = opt.gridSize;
    /*<[[TEST*/
//        opt.type = 5;
    /*TEST]]>*/
    switch(opt.type){
        case 1:
            var points = [
                new Point(0,gridSize*0.5),
                new Point(gridSize*0.25,gridSize),
                new Point(gridSize*0.75,gridSize),
                new Point(gridSize,gridSize*0.5),
                new Point(gridSize*0.75,0),
                new Point(gridSize*0.25,0)
            ];
            break;
        case 2:
            var points = [
                new Point(0,0),
                new Point(0,gridSize),
                new Point(gridSize,gridSize)
            ];
            break;
        case 3:
            var points = [
                new Point(gridSize*0.5,-0.5),
                new Point(gridSize,gridSize*0.5-0.5),
                new Point(gridSize*0.5,gridSize-0.5),
                new Point(0,gridSize*0.5-0.5)
            ];
            break;
        case 4:
            var points = [
                new Point(gridSize*0.5,0),
                new Point(0,gridSize),
                new Point(gridSize,gridSize)
            ];
            break;
        case 5:
            var points = [
                new Point(gridSize*0.5,0),
                new Point(0,gridSize*0.4),
                new Point(gridSize*0.2,gridSize),
                new Point(gridSize*0.8,gridSize),
                new Point(gridSize,gridSize*0.4)
            ];
            break;
        case 0:
        default:
            var points = [
                new Point(0,0),
                new Point(0,gridSize),
                new Point(gridSize,gridSize),
                new Point(gridSize,0)
            ]
            break;
    }

    path.closed = true;

    for(var i=0;i<points.length;i++)
            path.add(points[i])
    var pathCenter = Util.centerOfPoints(points);
    var layers = new Group();
    console.log(opt.disableLayers)
    if(opt.disableLayers == undefined){
        console.log("I'm here");
        for(var i=1;i<=points.length;i++){
            var layer = new Path();
            layer.add(pathCenter);
            layer.add(points[(i-1)]);
            layer.add(points[i%points.length]);
            layer.closed = true;
            layer.set_style({
                strokeColor:new RgbColor(0,0,0,0),
                fillColor:'#fff',
                opacity:Math.abs(i - points.length*0.5-0.25)/points.length
            });
            layer.position = layer.position.add(opt.upperLeftPosition);
            layers.addChild(layer);
        }
    }
    path.position = path.position.add(opt.upperLeftPosition);
    if(opt.style)
        path.set_style(opt.style);
    else
        path.set_style({
            strokeColor:'#000',
            fillColor:'#aaa'
        })
    var group =  new Group();
    group.addChild(path);
    group.addChild(layers);
    return group;
}
;
/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 23.10.2012
 * Time: 06:58
 * To change this template use File | Settings | File Templates.
 */


var Shape3 = Class.extend({
    init:function(opt){
        this.points = [];
        this.dY = 0.3;
        this.h = 30;
        this.a = 30;
        this.dX = 0.4;
        this.style = interactionShapeStyle;
    },
    redraw:function(){
        this.removeCubes();
        this.draw(this.zeroPoint);
    },
    draw:function(zeroPoint){
        this.zeroPoint = zeroPoint;

        var matrix = Shape3.CreateProjectionMatrixForObjectAt(zeroPoint.x,zeroPoint.y);

        //sort points
        this.points.sort(Shape3.SortFunction);

        //draw cubes
        this.cubes = [];

        for(var i=0; i<this.points.length;i++){


            var cube = new ExpandablePrism(this.a,this.a,this.a,matrix);
            cube.set_style(this.style);
            cube.transform(this.points[i].multiply(new Point3(this.a,-this.a,-this.a)));
            cube.project();
            this.cubes.push(cube);
        }

    },
    setOpacity:function(opacity){
        for(var i=0; i<this.cubes.length;i++){
            this.cubes[i].set_style({opacity:opacity});
            this.cubes[i].project();
        }
    },

    rotateByY:function(clockwise){
        for(var i=0; i<this.points.length; i++){
            var temp = this.points[i].x;
            this.points[i].x = (clockwise?-1:1) * this.points[i].z;
            this.points[i].z = (clockwise?1:-1) * temp;
        }
    },
    rotateByX:function(clockwise){
        for(var i=0; i<this.points.length; i++){
            var temp = this.points[i].y;
            this.points[i].y = (clockwise?-1:1) * this.points[i].z;
            this.points[i].z = (clockwise?1:-1) * temp;
        }
    },
    rotateByZ:function(clockwise){
        for(var i=0; i<this.points.length; i++){
            var temp = this.points[i].y;
            this.points[i].y = (clockwise?-1:1) * this.points[i].x;
            this.points[i].x = (clockwise?1:-1) * temp;
        }
    },
    setRotationX:function(angle){
        for(var i=0;i<this.cubes.length;i++){
            this.cubes[i].setRotationX(angle);
            this.cubes[i].project();
        }
    },
    setRotationY:function(angle){
        for(var i=0;i<this.cubes.length;i++){
            this.cubes[i].setRotationY(angle);
            this.cubes[i].project();
        }
    },
    setRotationZ:function(angle){
        for(var i=0;i<this.cubes.length;i++){
            this.cubes[i].setRotationZ(angle);
            this.cubes[i].project();
        }
    },
    showLeftSide:function(redraw){
        this.rotateByY(false);
        if(redraw)
            this.redraw();
    },
    showRightSide:function(redraw){
        this.rotateByY(true);
        if(redraw)
            this.redraw();
    },
    showUpSide:function(redraw){
        this.rotateByX(true);
        if(redraw)
            this.redraw();
    },
    showDownSide:function(redraw){
        this.rotateByX(false);
        if(redraw)
            this.redraw();
    },
    showBackSide:function(redraw){
        this.rotateByY();
        this.rotateByY();
        if(redraw)
            this.redraw();
    },
    showSide: function(side,redraw){
        switch(side){
            case Shape3.LeftSide:
                this.showLeftSide(redraw);
                break;
            case Shape3.RightSide:
                this.showRightSide(redraw);
                break;
            case Shape3.DownSide:
                this.showDownSide(redraw);
                break;
            case Shape3.UpSide:
                this.showUpSide(redraw);
                break;
            case Shape3.BackSide:
                this.showBackSide(redraw);
                break;
        }
    },
    getMinimizedFlattedPoints:function(forSide){
        var tempPoint3s = [];
        for(var i=0; i < this.points.length; i++)
            tempPoint3s.push(this.points[i].clone());
        this.showSide(forSide);
        var flattedPoints = [];
        for(var i=0; i< this.points.length; i++){
            flattedPoints.push( new Point(this.points[i].x,this.points[i].y) );
        }
        var minimizedFlattedPoints = [];
        for(var i=0; i< flattedPoints.length ; i++){
            var exists = false;
            for(var j=0; j<minimizedFlattedPoints.length;j++){
                if(flattedPoints[i].equals(minimizedFlattedPoints[j]) == true){
                    exists = true;
                }
            }
            if(exists === false){
                minimizedFlattedPoints.push(flattedPoints[i]);
            }
        }
        this.points = tempPoint3s;
        return minimizedFlattedPoints;
    },

    /*
    * function is NOT COMPLETED!!!!
    */
    showCorrectSide:function(side){
        var rotationAmount = (Math.PI/4);
        var axis = null;
        switch(side){
            case Shape3.LeftSide:
                rotationAmount *= -1;
                axis = 'Y';
                break;
            case Shape3.RightSide:
                rotationAmount *= 1;
                axis = 'Y';
                break;
            case Shape3.DownSide:
                rotationAmount *= -1;
                axis = 'X';
                break;
            case Shape3.UpSide:
                rotationAmount *= 1;
                axis = 'X';
                break;
            case Shape3.BackSide:
                rotationAmount *= -2;
                axis = 'Y'
                break;
            default:
                this.flatten(1000,500);
                return;
        }
        var helper1 = new AnimationHelper({
            rotation: 0
        });
        var self = this;
        helper1.animate({
            style:{rotation:rotationAmount},
            duration:1000,
            delay:1000,
            update:function(){
                self['setRotation'+axis](this.rotation);
            },
            callback:function(){
                self.removeCubes();
                this.rotation = -this.rotation;
                self.showSide(side,true);
                self['setRotation'+axis](this.rotation);
                this.animate({
                    style:{rotation:0},
                    duration:1000,
                    update:function(){
                        self['setRotation'+axis](this.rotation);
                    },
                    callback: function() {
                        self.flatten(1000,500);
                    }
                })
            }
        });
    },
//    flatten:function(duration,delay){
//        var animHelper = new AnimationHelper({
//            dX:this.dX,
//            dY:this.dY
//        });
//        this._old_dX = this.dX;
//        this._old_dY = this.dY;
//        var self = this;
//        animHelper.animate({
//            style:{
//                dX:0,
//                dY:0
//            },
//            duration:duration,
//            delay:delay,
//            update:function(){
//                self.dX = this.dX;
//                self.dY = this.dY;
//                self.redraw();
//            }
//        });
//    },
    flatten:function(duration,delay){
        var animationHelper = new AnimationHelper({
            zFactor: 3
        })
        var self = this;
        animationHelper.animate({
            style: {
                zFactor: 0
            },
            duration: duration,
            delay: delay,
            animationType:'easeInEaseOut',
            update: function() {
                console.log(this.zFactor)
                var matrix = Shape3.CreateProjectionMatrixForObjectAt (self.zeroPoint.x,self.zeroPoint.y,this.zFactor);
                for(var i=0;i<self.cubes.length;i++){
                    self.cubes[i].matrix = matrix;
                    self.cubes[i].project();
                }
            },
            callback:function(){
                Interaction.resume();
            }
        })

    },
    removeCubes:function(){
        if(this.cubes)
            for(var i=0; i< this.cubes.length; i++){
                this.cubes[i].remove();
            }
    }

});


Shape3.SortFunction = function(a,b){
    if(a.z > b.z)
        return 1;
    if(a.z < b.z)
        return -1;
    if(a.y > b.y)
        return 1;
    if(a.y < b.y)
        return -1;
    if(a.x > b.x)
        return 1
    if(a.x < b.x)
        return -1;
    return 0;
}

Shape3.CreateProjectionMatrixForObjectAt = function(x, y, zFactor) {
    var fov = 1024;

    if (zFactor == undefined) {
        zFactor = 3;
    }

    return [
        1, 0, 128*zFactor/fov ,  x,
        0,  1,   -128*zFactor/fov,  y,
        0, 0,   0,  1,
        0, 0,    0,  1
    ];
};

Shape3.FrontSide = "önden";
Shape3.DownSide = "alttan";
Shape3.UpSide = "üstten";
Shape3.LeftSide = "soldan";
Shape3.RightSide = "sağdan";
Shape3.BackSide = "arkadan";

Array.prototype.normalizePoints = function(){
    //calculate shape relative grid points
    var minX = this[0].x,minY = this[0].y;
    for(var i=1; i<this.length; i++)
        if(minX > this[i].x)
            minX = this[i].x;
    for(var i=1; i<this.length; i++)
        if(minY > this[i].y)
            minY = this[i].y;
    for(var i=0; i<this.length; i++)
        this[i] = this[i].subtract(minX,minY);
    return this;
}

Array.prototype.equals = function(other){
    if(this.length != other.length)
        return false;
    var length = this.length;
    var equalsFlag = [];
    for(var i=0; i < length; i++)
        equalsFlag.push(false);
    for(var i=0 ; i <length; i++)
        for(var j=0; j < length ;j++)
            if(this[i].equals(other[j]))
                equalsFlag[i] = true;
    for(var i=0;i<length;i++)
        if(equalsFlag[i] == false)
            return false;
    return true;
}
;
function __Styles(){
	animationShapeStyle = {
        strokeColor:'#666',
        fillColor: new RgbColor(0.8,0.8,0.8,0.60)
    };
    interactionShapeStyle = {
        strokeColor:'#687',
        fillColor: new RgbColor(0.6,0.8,0.7,0.8)
    }

}
;

Shape3.Generate = function(type){
    var shape;
    switch(type){
        case 0:
            shape = new LShape3();
            break;
        case 1:
            shape = new UShape3();
            break;
        case 2:
            shape = new dShape3();
            break;
        case 3:
            shape = new ManivelaShape3();
            break;
        case 4:
            shape = new ForkShape3();
            break
        case 5:
            shape = new PlusShape3();
            break;
    }
    return shape;
}

var LShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
//        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3( 0, 0, 1 ) );
        this.points.push( new Point3( 0, 1, 0 ) );
        this.points.push( new Point3( 0, 2, 0 ) );
        this.points.push( new Point3( 0, 3, 0 ) );

    }
});

var UShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3(-1, 1, 0 ) );
        this.points.push( new Point3( 1, 1, 0 ) );
        if(Util.rand01() == 1)
            this.points.push( new Point3( 1, 2, 0 ) );
        if(Util.rand01() == 1)
            this.points.push( new Point3(-1, 2, 0 ) );

    }
});

var dShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 1 ) );
        this.points.push( new Point3( 0, 0, 1 ) );
        this.points.push( new Point3( 0, 1, 0 ) );
        if(Util.rand01() == 1){
            this.points.push( new Point3( 0, 1, 0 ) );
            this.points.push( new Point3( 1, 1, 0 ) );
            this.points.push( new Point3( 1, 1, 1 ) );
            this.points.push( new Point3( 0, 1, 1 ) );
            this.points.push( new Point3( 0, 2, 0 ) );
            this.points.push( new Point3( 0, 2, 0 ) );
        }
    }
});

var ManivelaShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );

        this.points.push( new Point3( 1, 1, 0 ) );
        this.points.push( new Point3( 1, 1,-1 ) );

        this.points.push( new Point3(-1,-1, 0 ) );
        this.points.push( new Point3(-1,-1, 1 ) );

    }
})
var ForkShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );

        this.points.push( new Point3( 1, 1, 0 ) );
        this.points.push( new Point3( 1, 1,-1 ) );

        this.points.push( new Point3(-1, 1, 0 ) );
        this.points.push( new Point3(-1, 1,-1 ) );

        this.points.push( new Point3( 0, 0, 1 ) );

    }
})

var PlusShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3( 0, 1, 0 ) );
        this.points.push( new Point3( 0, 0, 1 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 0,-1, 0 ) );
        this.points.push( new Point3( 0, 0,-1 ) );

    }
})

var AnimationShape = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3(-1, 1, 0 ) );
        this.points.push( new Point3( 1, 1, 0 ) );
        this.points.push( new Point3( 1, 2, 0 ) );
        this.style = animationShapeStyle;
    }
})


ShapePattern.prototype.drawAPiece = function(upperLeftPosition,gridSize){
    return PieceFactory({
        type:this.pieceType,
        upperLeftPosition:upperLeftPosition,
        gridSize:gridSize,
        style:this.pieceStyle,
        disableLayers:true
    });
};
var Animation = {
    images:[],
	init:function(container){

//        Main.animationFinished();

        Animation.container = container;
        Animation.initializePoints();
        Animation.shape = new AnimationShape();
        Animation.shape.draw(new Point(200,125));
        Animation.grids = new InteractiveGrids({
            size:30,
            position:new Point(425.5,10.5),
            rows:5,
            cols:5,
            style:{
                strokeColor:'#888'
            }
        });
        Animation.sideText = new PointText(new Point(335,100));
        Animation.sideText.set_style({
            justification:'center',
            fontSize:14
        });
        var functions = [
            Animation.showFrontSide,
            Animation.showRightSide,
            Animation.showLeftSide,
            Animation.showUpSide,
            Animation.showBackSide
        ];
        var delay = 7000;
        for(var i=0;i<functions.length;i++){
            AnimationManager.delay(functions[i],delay*i+500+(i==0?1000:0));
            AnimationManager.delay(Animation.clean,delay*(i+1)-1000);
        }
        Main.animationFinished(delay * functions.length );
    },
    recreateShape:function(){
        var animHelper = new AnimationHelper({
            opacity:1
        });
        animHelper.animate({
            style:{opacity:0},
            duration:500,
            delay:100,
            update:function(){
                Animation.shape.setOpacity(this.opacity);
            },
            callback:function(){
                Animation.shape.removeCubes();
                Animation.shape = new AnimationShape();
                Animation.shape.draw(new Point(200,125));
                Animation.shape.setOpacity(0);
                this.animate({
                    style:{opacity:1},
                    duration:500,
                    delay:100,
                    update:function(){
                        Animation.shape.setOpacity(this.opacity);
                    }

                })
            }
        })

    },
    clean:function(){
        if(Animation.grids.path)
            Animation.grids.path.animate({
                style:{opacity:0},
                duration:500,
                callback:function(){
                    this.remove();
                }
            });
        Animation.changeText('');
        Animation.recreateShape();
    },
    changeText:function(newText,duration,delay){
        if(!duration)
            duration = 500;
        Animation.sideText.animate({
            style:{opacity:0},
            duration:duration/2,
            delay:delay,
            callback:function(){
                this.content = newText;
                this.animate({
                    style:{opacity:1},
                    duration:duration/2
                })
            }
        })
    },
    showLeftSide:function(){
        Animation.changeText('soldan');
        Animation.shape.showCorrectSide(Shape3.LeftSide);
        Animation.drawToGrids(Animation.leftPoints,1000,3000);

    },
    showRightSide:function(){
        Animation.changeText('sağdan');
        Animation.shape.showCorrectSide(Shape3.RightSide);
        Animation.drawToGrids(Animation.leftPoints,1000,3000);

    },
    showUpSide:function(){
        Animation.changeText('üstten');
        Animation.shape.showCorrectSide(Shape3.UpSide);
        Animation.drawToGrids(Animation.upPoints,1000,3000);

    },
    showDownSide:function(){
        Animation.changeText('alttan');
        Animation.shape.showCorrectSide(Shape3.DownSide);
        Animation.drawToGrids(Animation.upPoints,1000,3000);

    },
    showFrontSide:function(){
        Animation.changeText('önden');
        Animation.shape.flatten(1000,1000);
        Animation.drawToGrids(Animation.frontPoints,1000,2000);
    },
    showBackSide:function(){
        Animation.changeText('arkadan');
        Animation.shape.showCorrectSide(Shape3.BackSide);
        Animation.drawToGrids(Animation.backPoints,1000,2000);

    },
    drawToGrids:function(points,duration,delay){
        if(!duration)
            duration=500;
        if(!delay)
            delay = 0;
        AnimationManager.delay(function(){
            Animation.grids.drawShape(points);
            Animation.grids.path.opacity = 0;
            Animation.grids.path.animate({
                style:{opacity:1},
                duration:duration
            })
        },delay)
    },
    initializePoints:function(){
        Animation.frontPoints = [
            new Point(1,2),
            new Point(1,3),
            new Point(1,4),
            new Point(2,4),
            new Point(3,4),
            new Point(4,4),
            new Point(4,3),
            new Point(4,2),
            new Point(4,1),
            new Point(3,1),
            new Point(3,2),
            new Point(3,3),
            new Point(2,3),
            new Point(2,2)
        ];
        Animation.backPoints = [
            new Point(4,2),
            new Point(4,3),
            new Point(4,4),
            new Point(3,4),
            new Point(2,4),
            new Point(1,4),
            new Point(1,3),
            new Point(1,2),
            new Point(1,1),
            new Point(2,1),
            new Point(2,2),
            new Point(2,3),
            new Point(3,3),
            new Point(3,2)
        ];
        Animation.leftPoints =[
            new Point(2,1),
            new Point(2,2),
            new Point(2,3),
            new Point(2,4),
            new Point(3,4),
            new Point(3,3),
            new Point(3,2),
            new Point(3,1)
        ];
        Animation.upPoints = [
            new Point(1,2),
            new Point(2,2),
            new Point(3,2),
            new Point(4,2),
            new Point(4,3),
            new Point(3,3),
            new Point(2,3),
            new Point(1,3),
        ];
    }

}

;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
    FRONT:'onden',
    BACK:'arkadan',
    RIGHT:'sagdan',
    LEFT:'soldan',
    DOWN:'alttan',
    UP:'ustten',
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki eş küplerle oluşturulmuş şeklin istenen yönde görünümünü kareli bölgede karelerin üzerine basarak çiziniz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"15px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"25px",
            right:"150px"
        });
        Interaction.appendQuestion('<span id="side"></span>',{
            position:'absolute',
            left:'120px',
            top:'20px',
            fontWeight:'bold'

        })
        Interaction.setRandomGenerator(6);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        /*<[[TEST*/
//            randomNumber  = 5;
        /*TEST]]>*/
        var askedSide = null;
        switch(Util.randomInteger(0,6)){
            case 0:
                askedSide = Shape3.FrontSide;
                break;
            case 1:
                askedSide = Shape3.BackSide;
                break;
            case 2:
                askedSide = Shape3.LeftSide;
                break;
            case 3:
                askedSide = Shape3.RightSide;
                break;
            case 4:
                askedSide = Shape3.UpSide;
                break;
            case 5:
                askedSide = Shape3.DownSide;
                break;
        }
        Interaction.setQuestionParams({
            id:'side',html:askedSide
        })
        Interaction.askedSide = askedSide;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.grids = new InteractiveGrids({
            position:new Point(332.5,15.5),
            size:27,
            style:{
                strokeColor:'#AAA'
            },
            pieceType:2,
            pieceStyle:{
                strokeWidth:2,
                strokeColor:'#000'
            }
        });

        Interaction.grids.createTool("ShapePattern");
        Interaction.shape = Shape3.Generate(randomNumber);
        Interaction.shape.draw(new Point(150,200));

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){

        var inputPoints = Interaction.grids.getInputPattern().generateShapePoints();
        var correctPoints = Interaction.shape.getMinimizedFlattedPoints(Interaction.askedSide).normalizePoints();

        return inputPoints.equals(correctPoints);

    },
	onCorrectAnswer : function(){
        Interaction.showCorrectAnswer();
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap. Doğrusu şekil üzerinde gösterilecektir.',false);
		Interaction.showCorrectAnswer();
    },
    showCorrectAnswer:function(){
        Interaction.pause();
        Interaction.shape.showCorrectSide(Interaction.askedSide);
    }
}
;








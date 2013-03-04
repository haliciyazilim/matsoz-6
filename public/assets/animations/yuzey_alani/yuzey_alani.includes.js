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

    gridColor = '#D9D9D9';


    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;

    styles = [
        {
            fillColor: new RgbColor(139/255, 84/255, 1/255, 0.7),
            strokeColor: new RgbColor(139/400, 84/400, 1/400, 0.7),
            strokeWidth: strokeWidth
        },
        {
            fillColor: new RgbColor(142/255, 4/255, 4/255, 0.7),
            strokeColor: new RgbColor(142/400, 4/400, 4/400, 0.7),
            strokeWidth: strokeWidth
        },
        {
            fillColor: new RgbColor(0/255, 110/255, 125/255, 0.7),
            strokeColor: new RgbColor(0/400, 110/400, 125/400, 0.7),
            strokeWidth: strokeWidth
        }
    ]


    style = {
        fillColor: fillColor,
        strokeColor: strokeColor,
        strokeWidth: strokeWidth
    };
}
;
var Prism = ExpandableShape.extend({
    init: function(width, height, length, matrix) {
        this._super(matrix);

        this.width = width;
        this.height = height;
        this.length = length;

        width *= 10;
        height *= 10;
        length *= 10;
        this.setSurfaces({
            backSurface: new Surface([
                new Point3(-width,  height, length),
                new Point3( width,  height, length),
                new Point3( width, -height, length),
                new Point3(-width, -height, length)
            ]),
            bottomSurface: new Surface([
                new Point3(-width, height,  length),
                new Point3( width, height,  length),
                new Point3( width, height, -length),
                new Point3(-width, height, -length)
            ]),
            leftSurface: new Surface([
                new Point3(-width, -height, -length),
                new Point3(-width, -height,  length),
                new Point3(-width,  height,  length),
                new Point3(-width,  height, -length)
            ]),
            rightSurface: new Surface([
                new Point3(width,  height, -length),
                new Point3(width,  height,  length),
                new Point3(width, -height,  length),
                new Point3(width, -height, -length)
            ]),
            topSurface: new Surface([
                new Point3(-width, -height, -length),
                new Point3( width, -height, -length),
                new Point3( width, -height,  length),
                new Point3(-width, -height,  length)
            ]),
            frontSurface: new Surface([
                new Point3(-width, -height, -length),
                new Point3( width, -height, -length),
                new Point3( width,  height, -length),
                new Point3(-width,  height, -length)
            ])
        });
    },
    showDimensions: function() {
        var group = new Group();
        var point = Util.project(new Point3(-this.width*10, 0, -this.length*10), this.matrix);
        point = point.add(-6, 0);
        var text = new PointText(point);
        text.content = this.height + ' cm';
        text.justification = 'right';
        text.characterStyle.fontSize = '8';
        group.addChild(text);


        point = Util.project(new Point3(0, this.height*10, -this.length*10), this.matrix);
        point = point.add(0, 14);
        var text = new PointText(point);
        text.content = this.width + ' cm';
        text.justification = 'center';
        text.characterStyle.fontSize = '8';
        group.addChild(text);


        point = Util.project(new Point3(-this.width*10, -this.height*10, 0), this.matrix);
        point = point.add(-6, 0);
        text = new PointText(point);
        text.content = this.length + ' cm';
        text.justification = 'right';
        text.characterStyle.fontSize = '8';
        group.addChild(text);

        return group;
    },
    areaCalculationSteps: function() {
        var type;
        var steps = [];

        if (this.width == this.length) {
            if (this.height == this.width) {
                type = 0;
                steps.push("Küpün yüzey alanı");
            } else {
                type = 1;
                steps.push("Kare prizmanın yüzey alanı");
            }
        } else {
            type = 2;
            steps.push("Dikdörtgenler prizmasının yüzey alanı");
        }

        steps.push('= ('+this.length * this.height+' + '+this.length * this.height+' + '
            +this.width * this.height+' + '+this.width * this.height+' + '
            +this.length * this.width+' + '+this.length * this.width+') cm²');

        steps.push('= [2('+this.length+'.'+this.height+') + 2('
            +this.width+'.'+this.height+') + 2('
            +this.length+'.'+this.width+')] cm²');

        steps.push('= ' + (2*this.length*this.height+2*this.length*this.width+2*this.height*this.width) + ' cm²');

        switch(type) {
            case 0:
                steps.push("A = 6a²");
                break;
            case 1:
                steps.push("A = 4(a.b)+2(b.c)");
                break;
            case 2:
                steps.push("A = 2(a.b)+2(a.c)+2(b.c)");
                break;
        }

        return steps;
    },
    drawExpandedShape: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18;
        var height = this.height * 18;

        var points = [
            [
                new Point(0, length),
                new Point(length, length),
                new Point(length, length+height),
                new Point(0, length+height)
            ],
            [
                new Point(length, length),
                new Point(length + width, length),
                new Point(length + width, length+height),
                new Point(length, length+height)
            ],
            [
                new Point(length + width, length),
                new Point(2*length + width, length),
                new Point(2*length + width, length+height),
                new Point(length + width, length+height)
            ],
            [
                new Point(2*length + width, length),
                new Point(2*length + 2*width, length),
                new Point(2*length + 2*width, length+height),
                new Point(2*length + width, length+height)
            ],
            [
                new Point(length, 0),
                new Point(length + width, 0),
                new Point(length + width, length),
                new Point(length, length)
            ],
            [
                new Point(length, length+height),
                new Point(length + width, length+height),
                new Point(length + width, 2*length+height),
                new Point(length, 2*length+height)
            ]
        ]

        for (var i = 0; i < points.length; i++) {
            var surf = new Path();

            for (var j = 0; j < points[i].length; j++) {
                surf.add(points[i][j]);
            }

            surf.closed = true;

            group.addChild(surf);
        }

        return group;
    },
    drawAreaCalculations: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18;
        var height = this.height * 18;

        var text = new PointText(length/2, length + height/2+4);
        text.content = this.length + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height/2+4);
        text.content = this.width + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        var text = new PointText(length + width + length/2, length + height/2+4);
        text.content = this.length + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(2*length + width + width/2, length + height/2+4);
        text.content = this.width + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length/2+4);
        text.content = this.width + '.' + this.length;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height + length/2+4);
        text.content = this.width + '.' + this.length;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        group.fillColor = 'white';

        return group;
    },
    drawAreas: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18
        var height = this.height * 18;

        var text = new PointText(length/2, length + height/2+4);
        text.content = this.length * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height/2+4);
        text.content = this.width * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        var text = new PointText(length + width + length/2, length + height/2+4);
        text.content = this.length * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(2*length + width + width/2, length + height/2+4);
        text.content = this.width * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length/2+4);
        text.content = this.width * this.length + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height + length/2+4);
        text.content = this.width * this.length + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        return group;
    },
    drawAreaSums: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18
        var height = this.height * 18;

        var numbers = [
            this.width * this.length,
            this.width * this.length,
            this.length * this.height,
            this.length * this.height,
            this.width * this.height,
            this.width * this.height
        ]

        var total = numbers[0];

        var text = new PointText(0, 0);

        text.content = 'A = ' + numbers[0] + ' cm²';

        for (var i = 1; i < numbers.length; i++) {
            text.content = text.content + ' + ' + numbers[i] + ' cm²';
            total += numbers[i];
        }

        text.justification = 'right';
//        text.characterStyle.fontSize = 12;

        group.addChild(text);


        var width = text.getBounds().width;

        var text = new PointText(-width/1.8-61, 20);
        text.content = '= ' + total + ' cm²';
        text.justification = 'left';
        text.fillColor = 'green';
//        text.characterStyle.fontSize = 12;
        group.addChild(text);

        return group;
    }
});// var Prisim

var writeAreaCalculation = function (surface, grid) {
    var center = new Point(0,0);
    for (var i = 0; i < surface.points.length; i++) {
        center = center.add(surface.points[i]);
    }

    center.x = center.x/i;
    center.y = center.y/i;

    var point = center.multiply(grid.size,grid.size).add(grid.position).add(0, 4);

    var text = new PointText(point);
    text.content = surface.area[0] + "." + surface.area[1];
    text.justification = 'center';
    text.fillColor = 'white';

    return text;
}

var writeArea = function (surface, grid) {
    var center = new Point(0,0);
    for (var i = 0; i < surface.points.length; i++) {
        center = center.add(surface.points[i]);
    }

    center.x = center.x/i;
    center.y = center.y/i;

    var point = center.multiply(grid.size,grid.size).add(grid.position).add(0, 4);

    var text = new PointText(point);
    text.content = surface.area[0] * surface.area[1] + " cm²";
    text.justification = 'center';
    text.fillColor = 'white';

    return text;
}
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;


        var legendGroup = new Group();
        var square = new Path.Rectangle(new Point(180.5, 8.5), new Point(200.5,28.5));
        square.strokeColor = '#999';
        var text1 = new PointText(new Point(176, 40));
        text1.content = "1 cm²";
        text1.characterStyle.fontSize = 8;
        var text2 = new PointText(new Point(204, 22));
        text2.content = "1 cm²";
        text2.characterStyle.fontSize = 8;

        legendGroup.addChild(square);
        legendGroup.addChild(text1);
        legendGroup.addChild(text2);

        legendGroup.opacity = 0;

        legendGroup.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 4000,
            animationType: 'easeInEaseOut'
        })

        var matrix = Util.createProjectionMatrixForObjectAt(100,90);

        var prism = new Prism(3, 4, 2, matrix);
        var cube = new Prism(2, 2, 2, matrix);
        var squarePrism = new Prism(2, 4, 2, matrix);

        var prismSurfaces = [
            {
                points: [new Point(3,0), new Point(3,2), new Point(6,2), new Point(6,0)],
                area: [3, 2]
            },
            {
                points: [new Point(1,2), new Point(1,6), new Point(3,6), new Point(3,2)],
                area: [2, 4]
            },
            {
                points: [new Point(3,2), new Point(3,6), new Point(6,6), new Point(6,2)],
                area: [3, 4]
            },
            {
                points: [new Point(6,2), new Point(6,6), new Point(8,6), new Point(8,2)],
                area: [2, 4]
            },
            {
                points: [new Point(8,2), new Point(8,6), new Point(11,6), new Point(11,2)],
                area: [3, 4]
            },
            {
                points: [new Point(3,6), new Point(3,8), new Point(6,8), new Point(6,6)],
                area: [3, 2]
            }
        ]

        var cubeSurfaces = [
            {
                points: [new Point(4,1), new Point(4,3), new Point(6,3), new Point(6,1)],
                area: [2, 2]
            },
            {
                points: [new Point(2,3), new Point(2,5), new Point(4,5), new Point(4,3)],
                area: [2, 2]
            },
            {
                points: [new Point(4,3), new Point(4,5), new Point(6,5), new Point(6,3)],
                area: [2, 2]
            },
            {
                points: [new Point(6,3), new Point(6,5), new Point(8,5), new Point(8,3)],
                area: [2, 2]
            },
            {
                points: [new Point(8,3), new Point(8,5), new Point(10,5), new Point(10,3)],
                area: [2, 2]
            },
            {
                points: [new Point(4,5), new Point(4,7), new Point(6,7), new Point(6,5)],
                area: [2, 2]
            }
        ];

        var squarePrismSurfaces = [
            {
                points: [new Point(4,0), new Point(4,2), new Point(6,2), new Point(6,0)],
                area: [2, 2]
            },
            {
                points: [new Point(2,2), new Point(2,6), new Point(4,6), new Point(4,2)],
                area: [2, 4]
            },
            {
                points: [new Point(4,2), new Point(4,6), new Point(6,6), new Point(6,2)],
                area: [2, 4]
            },
            {
                points: [new Point(6,2), new Point(6,6), new Point(8,6), new Point(8,2)],
                area: [2, 4]
            },
            {
                points: [new Point(8,2), new Point(8,6), new Point(10,6), new Point(10,2)],
                area: [2, 4]
            },
            {
                points: [new Point(4,6), new Point(4,8), new Point(6,8), new Point(6,6)],
                area: [2, 2]
            }
        ];

        var shapes = [
            {
                shape: prism,
                surfaces: prismSurfaces
            },
            {
                shape: cube,
                surfaces: cubeSurfaces
            },
            {
                shape: squarePrism,
                surfaces: squarePrismSurfaces
            }
        ]


        InteractiveGrids.prototype.appendVertexLetters = function(){};
        var grid = new InteractiveGrids({
            position:new Point(250.5,8.5),
            size:20,
            rows: 8,
            cols: 12,
            style:{
                strokeColor:gridColor
            }
        });

        for (var g = 0; g < grid.lines.length; g++) {
            grid.lines[g].opacity = 0;
        }

        var gridHelper = new AnimationHelper({
            opacity: 0
        });

        gridHelper.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 2000,
            animationType: 'easeInEaseOut',
            update: function () {
                for (var g = 0; g < grid.lines.length; g++) {
                    grid.lines[g].opacity = this.opacity;
                }
            }
        })

        var shapes3D = [];
        var shapeGroups = [];
        var shapeCalculations = [];
        var shapeAreas = [];

        var totalDelay = 4000;

        for (var i = 0; i < 3; i++) {
            shapeGroups[i] = new Group();
            shapeCalculations[i] = new Group();
            shapeAreas[i] = new Group();

            for (var j = 0; j < 6; j++) {
                grid.drawShape(shapes[i].surfaces[j].points);

                shapeGroups[i].addChild(grid.path);
                shapeCalculations[i].addChild(writeAreaCalculation(shapes[i].surfaces[j], grid));
                shapeAreas[i].addChild(writeArea(shapes[i].surfaces[j], grid));
            }

            shapes3D[i] = shapes[i].shape.project();
            shapes3D[i].set_style(styles[i]);
            shapes3D[i].addChild(shapes[i].shape.showDimensions());
            shapes3D[i].opacity = 0;

            shapeGroups[i].set_style(styles[i]);

            shapeGroups[i].opacity = 0;
            shapeCalculations[i].opacity = 0;
            shapeAreas[i].opacity = 0;

            shapes3D[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut'
            });

            shapeGroups[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut'
            });

            shapeCalculations[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut'
            });

            shapeCalculations[i].animate({
                style: {
                    opacity: 0
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut',
                callback: function() {
                    this.remove();
                }
            });

            shapeAreas[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay,
                animationType: 'easeInEaseOut'
            });

//            totalDelay += 2000;

            var areaSteps = shapes[i].shape.areaCalculationSteps();
            var startPoint = new Point(520, 50);
            var increment = new Point(0, 20);
            var areaStepsGroup = new Group();

            for (var ii = 0; ii < areaSteps.length; ii++) {
                var text = new PointText(startPoint);
                text.content = areaSteps[ii];
                areaStepsGroup.addChild(text);
                text.opacity = 0;
                text.animate({
                    style: {
                        opacity: 1
                    },
                    duration: 1000,
                    delay: totalDelay += 2000,
                    animationType: 'easeInEaseOut'
                });

                startPoint = startPoint.add(increment);
            }

            if (i < 2) {
                shapes3D[i].animate({
                    style: {
                        opacity: 0
                    },
                    duration: 1000,
                    delay: totalDelay += 4000,
                    animationType: 'easeInEaseOut',
                    callback: function() {
                        this.remove();
                    }
                });

                shapeGroups[i].animate({
                    style: {
                        opacity: 0
                    },
                    duration: 1000,
                    delay: totalDelay,
                    animationType: 'easeInEaseOut',
                    callback: function() {
                        this.remove();
                    }
                });

                shapeAreas[i].animate({
                    style: {
                        opacity: 0
                    },
                    duration: 1000,
                    delay: totalDelay,
                    animationType: 'easeInEaseOut',
                    callback: function() {
                        this.remove();
                    }
                });

                areaStepsGroup.animate({
                    style: {
                        opacity: 0
                    },
                    duration: 1000,
                    delay: totalDelay,
                    animationType: 'easeInEaseOut',
                    callback: function() {
                        this.remove();
                    }
                });
            }
        }
        Main.animationFinished(totalDelay + 1000);
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
        Main.setObjective('Yandaki geometrik cismin yüzey alanını bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"10px",
            right:"10px"
        });
        Interaction.appendStatus({
            bottom:"20px",
            right:"150px"
        })
        var div = Util.dom({
            parent: container,
            tag: 'div',
            css: {
                fontSize: "20px",
                position: 'absolute',
                top: '100px',
                right: '10px'
            }
        });

        Interaction.appendInput({
            position: "static"
        })

        $(div)
            .append("Yüzey alanı: ")
            .append(Interaction.input)
            .append(" cm²");
        /*
        *	Initialize your interaction here
        */

        Interaction.matrix = Util.createProjectionMatrixForObjectAt(120,120);
        Interaction.prismGroup;
        Interaction.setRandomGenerator(3);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if (Interaction.prismGroup) {
            Interaction.prismGroup.remove();
        }

        if (Interaction.expandedShape) {
            Interaction.expandedShape.remove();
        }

        if (Interaction.areaSums) {
            Interaction.areaSums.remove();
        }

        $(Interaction.input).css("color","black");

        Interaction.prismGroup = new Group();

        var width, height, length;

        switch (randomNumber) {
            case 1:
                width = Util.randomInteger(2,5);
                height = width;
                length = height;
                break;
            case 2:
                width = Util.randomInteger(2,5);
                length = width;
                height = Util.randomInteger(2,6, [width]);
                break;
            case 0:
                width = Util.randomInteger(2,6);
                height = Util.randomInteger(2,6, [width]);
                length = Util.randomInteger(2,5, [width, height]);
                break;
        }


        Interaction.answer = 2 * (width * height + width * length + height * length);

        var prism = new Prism(width, height, length, Interaction.matrix);
        var projected = prism.project();
        projected.set_style(styles[randomNumber]);
        Interaction.prismGroup.addChild(projected);
        Interaction.prismGroup.addChild(prism.showDimensions());

        Interaction.expandedShape = prism.drawExpandedShape();
        Interaction.expandedShape.set_style(styles[randomNumber]);

        Interaction.areaCalculations = prism.drawAreaCalculations();
        Interaction.areas = prism.drawAreas();

        Interaction.expandedShape.addChild(Interaction.areaCalculations);
        Interaction.expandedShape.addChild(Interaction.areas);
        Interaction.expandedShape.position = new Point(180.5, 130.5);

        Interaction.areaSums = prism.drawAreaSums();
        Interaction.areaSums.position = new Point(448.5, 220.5);
        Interaction.areaSums.opacity = 0;

        Interaction.expandedShape.opacity = 0;
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return value == Interaction.answer;
    },
	onCorrectAnswer : function(){
        $(Interaction.input).css("color","green");
        Interaction.showAnswer();
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğru cevap ' + Interaction.answer + ' olacaktı!',false);
        $(Interaction.input).css("color","red");
        Interaction.showAnswer();
    },
    showAnswer : function() {
        Interaction.prismGroup.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            animationType: 'easeInEaseOut'
        });

        Interaction.expandedShape.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 1000,
            animationType: 'easeInEaseOut',
            update: function() {
                Interaction.areas.opacity = 0;
            }
        });

        Interaction.areaCalculations.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 4000,
            animationType: 'easeInEaseOut'
        });

        Interaction.areas.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 5000,
            animationType: 'easeInEaseOut'
        });

        Interaction.areaSums.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 5000,
            animationType: 'easeInEaseOut'
        });
    }
}
;






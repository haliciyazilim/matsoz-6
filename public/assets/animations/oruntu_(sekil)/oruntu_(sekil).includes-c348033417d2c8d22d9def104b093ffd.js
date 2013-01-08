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
var NumberWithShape = function(opt){
    this.animate = Item.prototype.animate;
    this.position = opt.position;
    this.number = opt.number;
    this.size = opt.size;
    if(opt.isHiddenNumber)
        this.isHiddenNumber = opt.isHiddenNumber;
    else
        this.isHiddenNumber = false;
    if(opt.fillColor)
        this.fillColor = opt.fillColor;
    else
        this.fillColor = '#a9dbe4';
    if(opt.strokeColor)
        this.strokeColor = opt.strokeColor
    else
        this.strokeColor = "#41818a"
}

NumberWithShape.prototype.draw = function(){
    this.removeShape();
    this.cubeArray = [];
    this.sqrt = Math.ceil(Math.sqrt(this.number))
    if(this.number == 3){
        for(var i=0; i < this.number; i++){
            this.cubeArray.push(new Path.Cube(
                this.position.add(this.size*i,0),
                this.size,
                new Point(0.4,0.3)
            ).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}));
        }
    }else{
        for(var i=0; i < this.number; i++){
            var position = this.position;

            position = position.add(
                this.size * Math.floor(i % this.sqrt),
                -this.size * Math.floor(i / this.sqrt)
            );

            this.cubeArray.push(new Path.Cube(
                position,
                this.size,
                new Point(0.4,0.3)
            ).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}));
        }
    }

    this.width = this.size * this.sqrt;
    if(this.number <=8)
        this.height = this.size * Math.ceil(this.number /2 );
    else
        this.height = this.size * 4;
    if(this.number == 3){
        this.width = 3 * this.size;
        this.height = this.size;
    }
    this.numberText = new PointText(this.position.add(this.width*0.5,this.size+28));
    this.numberText.justification = 'center';
    this.numberText.content = this.number;
    this.numberText.fontSize = 16;
    if(this.isHiddenNumber === true){
        this.setOpacity(0);
    }
}

NumberWithShape.prototype.setOpacity = function(opacity){

        for(var i=0;i<this.cubeArray.length;i++)
            this.cubeArray[i].opacity = opacity;

        this.numberText.opacity = opacity;

}

NumberWithShape.prototype.removeShape = function (){
    if(this.cubeArray)
        $(this.cubeArray).each(function(){this.remove()});
    if(this.numberText)
        this.numberText.remove();
}

var Pattern = Class.extend({
    init:function(coefficient,constant,length){
        this.coefficient = coefficient;
        this.constant = constant;
        this.length = length;
        this.cubeSize = 25;
    },
    setHiddenNumber:function(hiddenNumber){
        this.hiddenNumber = hiddenNumber;
    },
    draw:function(position){
        var nums = [];
        var self = this;
        var hiddenNumberPosition;
        console.log(""+this,this.hiddenNumber);
        var totalWidth = 0;
        this.cubeSize++;



        do{
            totalWidth = 0;
            this.cubeSize--;
            for(var i=0; i<this.numbers.length;i++)
                totalWidth += (i==0?0:this.cubeSize) + this.cubeSize * Math.ceil(this.numbers[i] / Math.ceil(Math.sqrt(this.numbers[i])));
        }
        while(totalWidth > 500)
        $(this.numbers).each(function(index){
            var num = new NumberWithShape({
                position:position.add(120*index,0),
                number:this,
                size:self.cubeSize,
                isHiddenNumber:(this == self.hiddenNumber)
            });
            num.draw();
            nums.push(num);
//            totalWidth+= (index==0?0:self.cubeSize) + num.width;
        });
        position = position.add(-totalWidth*0.5,0)

        totalWidth = 0;
        for(var i=0;i<nums.length;i++){
            totalWidth += (i>0?this.cubeSize:0);
            nums[i].position = position.add(totalWidth,0);
            nums[i].draw();
            totalWidth += nums[i].width;
            if(nums[i].number == this.hiddenNumber)
                hiddenNumberPosition  = nums[i].numberText.position;
        }
        this.numberWithShapes = nums;
        return hiddenNumberPosition;
    },
    showHiddenNumber:function(duration,delay){
        if(duration == undefined || isNaN(duration))
            duration = 0;
        if(delay == undefined || isNaN(duration))
            delay = 0;
        var hiddenNumber;
        for(var i=0; i<this.numberWithShapes.length; i++)
            if(this.numberWithShapes[i].isHiddenNumber === true)
                hiddenNumber = this.numberWithShapes[i];
        if(duration == 0)
            hiddenNumber.setOpacity(1);
        else{
            hiddenNumber.opacity = 0;
            hiddenNumber.animate({
                style:{opacity:1},
                duration:duration,
                delay:delay,
                update:function(){
                    this.setOpacity(this.opacity);
                }
            });
        }

    },
    remove:function(){
        for(var i=0;i<this.numberWithShapes.length;i++)
            this.numberWithShapes[i].removeShape();
    }
});

var LinearPattern = Pattern.extend({
    init:function(coefficient,constant,length){
        this._super(coefficient,constant,length);
        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*i+constant);
        }
        this.numbers = numbers;
    },
    toString:function(){
        return (this.coefficient>1?this.coefficient:"") +
            "n" +
            (this.constant > 0 ? " + "+this.constant:(this.constant < 0 ? this.constant: ""));
    }

});

var QuadraticPattern = Pattern.extend({
    init:function(coefficient,constant,length){
        this._super(coefficient,constant,length);
        this.cubeSize = 20;
        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*i*i+constant);
        }
        this.numbers = numbers;
    },
    toString:function(){
        return (this.coefficient>1?this.coefficient:"") +
            "n²" +
            (this.constant > 0 ? " + "+this.constant:(this.constant < 0 ? this.constant: ""));
    }
});

var ExponentialPattern = Pattern.extend({
    init:function(coefficient,constant,base,length){
        this._super(coefficient,constant,length);
        this.base = base;
        this.cubeSize = 20;

        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*Math.pow(base,i)+constant);
        }
        this.numbers = numbers;
    },
    toString:function(){
        return (this.coefficient>1?this.coefficient:"") +
            "(" + this.base +"<sup>n</sup>)" +
            (this.constant > 0 ? " + "+this.constant:(this.constant < 0 ? this.constant: ""));
    }
});
function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
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
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.grids = new InteractiveGrids({
            position:new Point(50.5,10.5),
            size:22,
            cols:30,
            rows:7,
            style:{
                strokeColor:'#CCC'
            }
        });
        Animation.pieceType = 0;
        Animation.pieceStyle = {
            strokeColor: "#000",
            fillColor:'#f6f'
        };
        var patterns = [
            new TShapePattern({
                position: new Point(3,2),
                number:2
            }),
            new NumberPattern({
                position: new Point(3,0),
                number:2
            }),
            new TShapePattern({
                position: new Point(10,2),
                number:3
            }),
            new NumberPattern({
                position: new Point(10,0),
                number:3
            }),
            new TShapePattern({
                position: new Point(19,2),
                number:4
            }),
            new NumberPattern({
                position: new Point(19,0),
                number:4
            }),

        ];
        for(var i=0; i< patterns.length; i++){

            var pattern = patterns[i];
            pattern.position = pattern.position.add(2,0)
            pattern.pieceStyle = Animation.pieceStyle;
            pattern.pieceType = Animation.pieceType;
            var pieces = Animation.grids.drawPattern(pattern);
            for(var j=0;j<pieces.length;j++){
                pieces[j].set_style({
                    opacity:0
                });
                pieces[j].animate({
                    style:{opacity:1},
                    duration:1000,
                    delay:1500*i+1000-(100*j)
                });
            }
        }

        Main.animationFinished(patterns.length * 2000)



    }

}
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'question_mark',
            src:'/assets/animations/oruntu_(sekil)/question_mark.png'
        }

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki şekil örüntüsünde soru işaretinin yerinde olusmasi gereken şekli, yandaki mavi kareli bölgede gerekli karelere basarak oluşturunuz');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };
        Interaction.appendButton({
            bottom:"20px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"30px",
            right:"150px"
        });

        Interaction.setRandomGenerator(6);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Main.interactionProject.activeLayer.removeChildren();
        Interaction.staticGrids = new InteractiveGrids({
            rows:9,
            cols:23,
            position:new Point(10.5,15.5),
            size:18,
            style:{
                strokeColor:'#bbb'
            }
        });
        Interaction.inputGrids = new InteractiveGrids({
            rows:9,
            cols:8,
            position:Interaction.staticGrids.position.add(Interaction.staticGrids.size*Interaction.staticGrids.cols+10,0),
            size:Interaction.staticGrids.size,
            style:{
                strokeColor:'#acf'
            }
        });
        var numbers = new LinearPattern(1,0/*Util.randomInteger(0,3)*/,4).numbers;
        var totalWidth = 1;
        var patternName;
        var answer = Util.randomInteger(0,numbers.length);
        var r = Math.random()*0.5;
        var g = Math.random()*0.5;
        var b = Math.random()*0.5;
        Interaction.pieceType = Util.randomInteger(0,6);
        Interaction.pieceStyle = {
            fillColor: new RgbColor(r,g,b),
            strokeColor: new RgbColor(r*0.5,g*0.5,b*0.5)
        }
        var questionMarkHeight = 0;
        /*<[[TEST*/
//            randomNumber = 5;
        /*TEST]]>*/
        for(var i=0; i < numbers.length; i++){
            var pattern;
            switch(randomNumber){
                case 0:
                    patternName = 'TriangleShapePattern';
                    pattern = new TriangleShapePattern({position:new Point(0,2)});
                    break;

                case 1:
                    patternName = 'XShapePattern';
                    pattern = new XShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
                case 2:
                    patternName = 'HexagonShapePattern';
                    pattern = new HexagonShapePattern({position:new Point(0,2)});
                    break;
                case 3:
                    patternName = 'PlusShapePattern';
                    pattern = new PlusShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
                case 4:
                    patternName = 'XPlusShapePattern';
                    pattern = new XPlusShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
                case 5:
                    patternName = 'DoubleXShapePattern';
                    pattern = new DoubleXShapePattern({position:new Point(0,4)});
                    questionMarkHeight = -1.8;
                    break;
            }
            pattern.number = numbers[i];
            pattern.pieceType = Interaction.pieceType;
            pattern.pieceStyle = Interaction.pieceStyle;
            if( i == answer ){
                var questionMark = new QuestionMarkPattern({});
                questionMark.position = pattern.position.add(totalWidth,questionMarkHeight);
                Interaction.staticGrids.drawPattern(questionMark);
                pattern.position = pattern.position.add(totalWidth,0);
                Interaction.correctAnswer = pattern;
                totalWidth += 4;
            }
            else{
                pattern.position = pattern.position.add(totalWidth,0);
                Interaction.staticGrids.drawPattern(pattern);
                totalWidth += pattern.getWidth()+1;

            }

        }
        Interaction.inputGrids.createTool(patternName);

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        var pattern = Interaction.inputGrids.getInputPattern()
            pattern.generateShapePoints()
        if(pattern.shapePoints.length == 0){
            Interaction.setStatus('Lutfen bir sekil ciziniz','alert');
            return false;
        }

    },
	isAnswerCorrect : function(){
        if(Interaction.inputGrids.getInputPattern().isEqual(Interaction.correctAnswer))
            return true;
        return false;
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlis cevap. Dogrusu girdi kisminda gozukecektir.','alert');
        Interaction.pause();
        Interaction.inputGrids.cleanGrids(700,1000);
        AnimationManager.delay(function(){
            var pattern = Interaction.correctAnswer;
            pattern.position = pattern.position.multiply(0,1).add(1,0);
            Interaction.inputGrids.drawPattern(pattern);
            Interaction.resume();
        },2000)

    }
}
;







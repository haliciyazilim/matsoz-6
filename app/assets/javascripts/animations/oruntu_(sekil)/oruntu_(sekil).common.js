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
            style:this.pieceStyle,
            disableLayers:true
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
    if(opt.disableLayers != true){
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
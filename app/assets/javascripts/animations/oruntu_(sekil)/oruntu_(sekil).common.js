var ShapePattern = Class.extend({
    init:function(opt){
        if(opt.position)
            this.position = opt.position;
        else
            this.position = new Point(0,0);
        if(opt.number)
            this.number = opt.number;
    },
    generateShapePoints:function(){
        this.shapePoints = [];
        throw 'This method should be implemented';
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
                if(this.shapePoints[i].equals(other.shapePoints[i]))
                    equalsFlag[i] = true;
        this.generateShapePoints();
        other.generateShapePoints();
        for(var i=0;i<length;i++)
            if(equalsFlag[i] == false)
                return false;
        return true;
    },
    drawAPiece:function(centerPosition){
        var path = new Path();
        throw 'This method should be implemented';
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

InteractiveGrids.prototype.drawPattern = function(pattern){
    var absolutePoints = [];
    pattern.generateShapePoints();
    for(var i=0; i<pattern.shapePoints.length; i++){
        absolutePoints.push(
            pattern.shapePoints[i]
                .multiply(1,-1)
                .add(0,this.rows-1)
                .multiply(this.size,this.size)
                .add(this.position)
        );

    }
//    console.log(absolutePoints);
    for(var i=0; i < absolutePoints.length ;i++){
        pattern.drawAPiece(absolutePoints[i],this.size);
    }
}


var TriangleShapePattern = ShapePattern.extend({
    init:function(opt){
        this._super(opt);
        this.patternStyle = {
            strokeColor:'dark',
            fillColor:'red'
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
    },
    drawAPiece:function(upperLeftPosition,gridSize){
        var path = new Path();
        var points = [
            new Point(0,0),
            new Point(0,gridSize),
            new Point(gridSize,gridSize)
        ];
        for(var i=0;i<points.length;i++)
            path.add(points[i])
        path.closed = true;
        path.position = path.position.add(upperLeftPosition);
        path.set_style(this.patternStyle);
        return path;
    }
})
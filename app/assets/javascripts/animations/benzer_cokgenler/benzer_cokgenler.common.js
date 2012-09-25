function InteractiveGrids(opt){
    this.id = InteractiveGrids.GetId();
    this.size = opt.size;
    this.position = opt.position;
    this.style = opt.style;
    this.points = [];
    for(var i=0; i<=8; i++){
        new Path.Line(
            this.position.add(0,this.size*i),
            this.position.add(this.size*8,this.size*i)
        ).set_style(this.style);
        new Path.Line(
            this.position.add(this.size*i,0),
            this.position.add(this.size*i,this.size*8)
        ).set_style(this.style);
    }
    for(var i=0;i<=8;i++)
        for(var j=0;j<=8;j++){
            var point = this.position.add(this.size*i,this.size*j);
            var circle = new Path.Circle(point,this.size*0.3);
            circle.set_style({
                fillColor:new RgbColor(1,1,1,0)
            });
            circle.class = "InteractiveGridCircles"+this.id;
        }
    return this;
}
InteractiveGrids.prototype.drawShape = function(points){
    this.path = new Path();
    this.path.set_style(this.style).set_style({
        strokeWidth: 3,
        strokeCap : 'butt',
        strokeColor : '#f00'
    });
    if(points){
//         = points;
        for(var i=0; i<points.length; i++){
            var point =points[i].multiply(this.size,this.size).add(this.position);
            this.points.push(point);
            this.path.add(point);

        }
        this.path.closed = true;
    }
    return this;
}
InteractiveGrids.prototype.createTool = function(){
    var tool = new Tool();
    var self = this;
    tool.onMouseDown = function(event){
        if(event.item && event.item.class == "InteractiveGridCircles"+self.id){
            event.item.set_style({
//                fillColor:"#f00"
            })
            self.path.add(event.item.position);
            event.item.class = "SelectedGridCircles";
            self.points.push(event.item.position);
            event.item.insertAbove(self.path);
        }
        else if(event.item && event.item.class == "SelectedGridCircles" && self.points.length > 2){
            self.path.closed = true;
            this.remove();
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
    }
    for(var i=0;i<points.length;i++){
        points[i] = points[i].multiply(multiply).add(add);
    }
    return points;
}
InteractiveGrids.AreShapesSimilar = function(points1,points2){
    if(points1.length != points2.length )
        return false;
    else{

        var error = 0.00001;
        function extractShape(points){
            var shape = [];
            for(var i=0; i < points.length; i++){

                var currentPoint = points[i];
                var backPoint = points[(i-1+points.length) % points.length];
                var frontPoint = points[(i+1) % points.length];
                console.log((i-1+points.length) % points.length, (i+1) % points.length)
                currentPoint.showOnCanvas();
                new PointText(currentPoint).content = i;

                var angle = Math.abs(
                    Util.findAngle(currentPoint.x,currentPoint.y,frontPoint.x,frontPoint.y) -
                    Util.findAngle(currentPoint.x,currentPoint.y,backPoint.x,backPoint.y)
                )

                shape.push([
                    currentPoint.getDistance(frontPoint,true),
                    currentPoint.getDistance(backPoint,true),
                    Util.radianToDegree(angle)
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

        var similarityRatio = largestEdgeInShape1 / largestEdgeInShape2 ;

        var length = shape1.length;

        //start comparing in the same direction
        console.log("Comparison started")
        for(var j= 0;j<length;j++){
            var isSimilar = true;
            for(var i=0; i<length;i++ ){
                var x = (i+j+length) % length;
                console.log(i,x);
                if(shape1[i][2] == shape2[x][2]){ //angle
                    console.log("same angle ");
                    var currentRatio = shape1[i][0] / shape2[x][0];
                    if(similarityRatio+error > currentRatio && similarityRatio-error  < currentRatio ){ // edges
                        console.log("similar edges")
                        continue;
                    }else{
                        isSimilar = false;
//                        break;
                    }
                }
                else{
                    isSimilar = false;
//                    break;
                }
            }
            if(isSimilar == true)
                return true;
        }
        console.log("reverse comparison is started")
        for(var j= 0;j<length;j++){
            var isSimilar = true;
            for(var i=length- 1,x=j; i>=0;i--,x = (x+1)%length ){
                console.log(i,x);
                if(shape1[i][2] == shape2[x][2]){ //angle
                    console.log("same angle ");
                    var currentRatio = shape1[i][1] / shape2[x][0];
                    if(similarityRatio+error > currentRatio && similarityRatio-error  < currentRatio ){ // edges
                        console.log("similar edges")
                        continue;
                    }else{
                        isSimilar = false;
//                        break;
                    }
                }
                else{
                    isSimilar = false;
//                    break;
                }
            }
            if(isSimilar == true)
                return true;
        }
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
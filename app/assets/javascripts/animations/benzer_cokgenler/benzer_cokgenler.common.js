function InteractiveGrids(opt){
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
            circle.class = "InteractiveGridCircles";
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
        if(event.item && event.item.class == "InteractiveGridCircles"){
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
InteractiveGrids.AreShapesSimilar = function(shape1,shape2){
    if(shape1.length != shape2.length )
        return false;
    else{

        var error = 0.00001;
        for(var j=0;j<shape1.length+1;j++){
            var isSimilar = true;
            var ratio = undefined;
            console.log("**")
            for(var i=0; i<shape1.length+1;i++ ){
                var x = (i+j) % shape1.length;
                var y = (x+1) % shape1.length;
                console.log(shape1[i%shape1.length].getDistance(shape1[(i+1)%shape1.length],true) , shape2[x].getDistance(shape2[y],true))
                var  _ratio = shape1[x].getDistance(shape1[y],true) / shape2[x].getDistance(shape2[y],true);
                if(ratio == undefined)
                    ratio = _ratio;
                if(ratio + error < _ratio || ratio - error > _ratio){
                    isSimilar  = false;
                }
            }
            if(isSimilar == true)
                return true;
        }
        console.log("--------------")
        for(var j=0;j<shape1.length+1;j++){
            var isSimilar = true;
            var ratio = undefined;
            console.log("**")
            for(var i=shape1.length+1; i>=0;i-- ){
                var x = (i+j) % shape1.length;
                var y = (x-1) % shape1.length;
                console.log(shape1[i%shape1.length].getDistance(shape1[(i-1)%shape1.length],true) , shape2[x].getDistance(shape2[y],true))
                var  _ratio = shape1[x].getDistance(shape1[y],true) / shape2[x].getDistance(shape2[y],true);
                if(ratio == undefined)
                    ratio = _ratio;
                if(ratio + error < _ratio || ratio - error > _ratio){
                    isSimilar  = false;
                }
            }
            if(isSimilar == true)
                return true;
        }

    }
    return false;
}

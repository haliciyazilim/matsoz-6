InteractiveGrids.prototype._drawShape = InteractiveGrids.prototype.drawShape
InteractiveGrids.prototype.drawShape = function(points){
    this._drawShape(points);
    this.shadowPath = this.path;
    this.path = null
    this.shadowPath.set_style({
        fillColor:new RgbColor(0.7,0.7,0.7,0.5),
        strokeColor:new RgbColor(0.3,0.3,0.3,0.5)
    });
    this._drawShape(points);
    this.path.class = "draggable";
    this.path.set_style({
        fillColor:new RgbColor(Math.random(),Math.random(),Math.random(),0.8),
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
InteractiveGrids.prototype.appendVertexLetters = function(){}
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
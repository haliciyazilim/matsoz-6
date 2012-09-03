var OppositeAngles = function(opt){
    this.animate = Item.prototype.animate;
    this.angle = opt.angle;
    if(opt.phase)
        this.phase = opt.phase;
    else
        this.phase = 0;
    if(opt.radius)
        this.radius = opt.radius;
    else
        this.radius = 145;
    this.centerPoint = opt.center;

    this.draggable = opt.draggable?opt.draggable:true;
    if(opt.textPosition)
        this.textPosition = opt.textPosition;
    this.angles = [];
    this.angles[0] = new Angle({
        angle:this.angle,
        phase:this.phase,
        center:this.centerPoint
    });
    this.angles[1] = new Angle({
        angle:180-this.angle,
        phase:this.angle+this.phase,
        center:this.centerPoint,
        isNeighbour:true
    });
    this.angles[2] = new Angle({
        angle:this.angle,
        phase:180+this.phase,
        center:this.centerPoint
    });
    this.angles[3] = new Angle({
        angle:180-this.angle,
        phase:180+this.phase+this.angle,
        center:this.centerPoint,
        isNeighbour:true
    });
    this.angles[0].setSuplement(this.angles[1]);
    this.angles[2].setSuplement(this.angles[3]);

    for(var i=0;i<this.angles.length;i++){
//        this.angles[i].isInteractive = true;
        this.angles[i].ownerOppositeAngle = this;
        this.angles[i]._draw = Angle.prototype.draw;
        this.angles[i]._redraw = Angle.prototype.redraw;
        this.angles[i].radius = this.radius;
    }
    this.angles[0].redraw = function(point){
        this.ownerOppositeAngle.redraw(this,point);
    };
    this.angles[2].redraw = function(point){
        this.ownerOppositeAngle.redraw(this,point);
    }
}
OppositeAngles.prototype.setAngle = function(angleValue){
    this.angle = angleValue;
}
OppositeAngles.prototype.draw = function(){
    this.angles[2]._draw(this.draggable);
    this.angles[0]._draw(this.draggable);

}
OppositeAngles.prototype.redraw = function(callerAngle,point){
    callerAngle._redraw(point);
    var otherAngle = this.angles[0] == callerAngle ? 2 : 0;
    this.angles[otherAngle]._redraw(callerAngle.angle);

    for(var i=0;i<this.angles.length;i++){
        var t = new Path.Circle()
    }

    function showLetter(angle,letters){
        function drawLetter(point,point2,letter){
            var group = new Group();
            var circle = new Path.Circle(point,3);
            circle.set_style({fillColor:'#000'});
//            console.log("I'm here");
            var text = new PointText(point.findPointTo(point2.getRotatedPoint(-90,point),15).add(0,8));
            text.content = letter;
            text.justification = 'center';
            text.set_style( OppositeAngles.letterTextStyle);
            group.addChild(circle);
            group.addChild(text);
            return group;
        }
        var letter1 = angle.firstLegPoint.findPointTo(angle.centerPoint,25,true);
        var letter2 = angle.secondLegPoint.findPointTo(angle.centerPoint,25,true);

        var group = new Group();
        group.addChild( drawLetter( letter1,angle.firstLegPoint,letters[0] ) );
        group.addChild( drawLetter( letter2,angle.secondLegPoint,letters[1] ) );
        return group;
    }
    if(this.letters)
        this.letters.remove();
    this.letters = new Group();
    this.letters.addChild(showLetter(this.angles[0],["D","A"]));
    this.letters.addChild(showLetter(this.angles[2],["C","B"]));
    var group = new Group();
    var circle = new Path.Circle(this.centerPoint,3);
    circle.set_style({fillColor:'#000'});
    var text = new PointText(this.centerPoint.add(4,-7));
    text.content = "O";
    text.justification = 'center';
    text.set_style( OppositeAngles.letterTextStyle);
    group.addChild(circle);
    group.addChild(text);
    this.letters.addChild(group);

}

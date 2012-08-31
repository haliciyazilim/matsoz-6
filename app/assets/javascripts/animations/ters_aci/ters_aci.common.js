var OppositeAngles = function(opt){
    this.animate = Item.prototype.animate;
    this.angle = opt.angle;
    if(opt.phase)
        this.phase = opt.phase;
    else
        this.phase = 0;
    this.centerPoint = opt.center;
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
    this.angles[2]._draw(true);
    this.angles[0]._draw(true);

}
OppositeAngles.prototype.redraw = function(callerAngle,point){
    callerAngle._redraw(point);
    var otherAngle = this.angles[0] == callerAngle ? 2 : 0;
    this.angles[otherAngle]._redraw(callerAngle.angle);

    for(var i=0;i<this.angles.length;i++){
        var t = new Path.Circle()
    }


}
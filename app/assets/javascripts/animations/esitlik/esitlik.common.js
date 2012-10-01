var Scales2 = function(opt){
    this.animate = Item.prototype.animate;
    this.position = opt.position;
    this.angle = 0;
    this.bar = new Raster('terazi_k_02');
    this.knuckle = new Raster('terazi_k_01');
    this.left = new Raster('terazi_k_03');
    this.right = new Raster('terazi_k_04');
    this.pieces = [];
    this.pieces.push(this.bar);
    this.pieces.push(this.knuckle);
    this.pieces.push(this.left);
    this.pieces.push(this.right);
    for(var i=0;i<this.pieces.length;i++){
        this.pieces[i].position = this.position;
        this.pieces[i].lastTransformation = this.pieces[i].matrix;
    }
    this.knucklePoint = this.position.add(0,-37);
    this.leftKnucklePoint = this.knucklePoint.subtract(54,0);
    this.rightKnucklePoint = this.knucklePoint.add(54,0);
    this.leftWeights = [];
    this.rightWeights = [];
    this.animationType = "easeOutBounce";

//    this.setAngle(30);


}
Scales2.prototype.setAngle = function(angle){
    this.angle = angle;
    var matrix = new Matrix();
    matrix.rotate(this.angle, this.knucklePoint.x, this.knucklePoint.y);
    matrix.concatenate(this.bar.lastTransformation);
    this.bar.setMatrix(matrix);
    this.left.position = this.position.add(this.leftKnucklePoint.getRotatedPoint(angle,this.knucklePoint).subtract(this.leftKnucklePoint));
    this.right.position = this.position.add(this.rightKnucklePoint.getRotatedPoint(angle,this.knucklePoint).subtract(this.rightKnucklePoint));
    this.calculateLeftWeightPositions();
    this.calculateRightWeightPositions();
}
Scales2.prototype.insideLeft = function(point){

    return  point.x < this.left.position.x &&
        point.x > this.left.position.x  - this.left.width*0.5 &&
        point.y < this.left.position.y + this.left.height*0.5 &&
        point.y > this.left.position.y

}
Scales2.prototype.insideRight = function(point){

    return  point.x > this.right.position.x &&
        point.x < this.right.position.x  + this.right.width*0.5 &&
        point.y < this.right.position.y + this.right.height*0.5 &&
        point.y > this.right.position.y

}
Scales2.prototype.calculateLeftWeightPositions = function(){
    var totalLeftWidth = 0;var locatedLeftWidth= 0;
    for(var i=0;i<this.leftWeights.length;i++){
        totalLeftWidth+=this.leftWeights[i].raster.width;
    }
    var leftStartPoint = this.left.position.add(-54,60).subtract(totalLeftWidth/2,0);
    for(i=0;i<this.leftWeights.length;i++){
        this.leftWeights[i].raster.position = leftStartPoint.add(locatedLeftWidth,0).add(this.leftWeights[i].raster.width*0.5,-this.leftWeights[i].raster.height*0.5);
        locatedLeftWidth += this.leftWeights[i].raster.width;
    }
}
Scales2.prototype.calculateRightWeightPositions = function(){
    var totalRightWidth = 0;var locatedRightWidth= 0;
    for(var i=0;i<this.rightWeights.length;i++){
        totalRightWidth+=this.rightWeights[i].raster.width;
    }
    var rightStartPoint = this.right.position.add(54,60).subtract(totalRightWidth/2,0);
    for(i=0;i<this.rightWeights.length;i++){
        this.rightWeights[i].raster.position = rightStartPoint.add(locatedRightWidth,0).add(this.rightWeights[i].raster.width*0.5,-this.rightWeights[i].raster.height*0.5);
        locatedRightWidth += this.rightWeights[i].raster.width;
    }
}
Scales2.prototype.addWeightToLeft = function(weight,calculate){
    if(this.leftWeights.length >= 4)
        return false;
    weight.owner = this;
    this.leftWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateLeftWeightPositions();
}

Scales2.prototype.addWeightToRight = function(weight,calculate){
    if(this.rightWeights.length >= 4)
        return false;
    weight.owner = this;
    this.rightWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateRightWeightPositions();
}
Scales2.prototype.calculateWeights = function(){

    var totalLeftWeights = 0;
    var totalRightWeights = 0;
    for(var i=0;i<this.leftWeights.length;i++)
        totalLeftWeights += this.leftWeights[i].value;
    for(var i=0;i<this.rightWeights.length;i++)
        totalRightWeights += this.rightWeights[i].value;
//    console.log("calculateWeights Left: ",totalLeftWeights," Right: ",totalRightWeights);

    var duration = 7000 / (Math.abs(totalLeftWeights-totalRightWeights)+1);
    totalLeftWeights+=0.3;totalRightWeights+=0.3; // escape from zero values
    var angle = 30;
    this.animationType = "easeOutBounce";
    if(totalLeftWeights < totalRightWeights){
        duration *= totalLeftWeights / totalRightWeights;
        angle *= 1;
    }
    else if(totalLeftWeights > totalRightWeights){
        duration *= totalRightWeights / totalLeftWeights;
        angle *= -1;
    }
    else{
        angle = 0;
        duration = 4000;
        this.animationType = "easeOutElastic";

    }
//    console.log("Angle: ",angle," Duration: ",duration);
    if(this.angle != angle)
        this.animateToAngle(angle,duration);

}
Scales2.prototype.animateToAngle = function(angle,duration){
    if(duration == undefined)
        duration = 1000;
    this._angle =this.angle;
    this.animate({
        style:{_angle:angle},
        duration:duration,
        delay:100,
        animationType:this.animationType,
        init:this.beforeAnimate,
        update:function(){
            this.setAngle(this._angle);
        },
        callback:function(){
            Interaction.resume();
            if(this.angle == 0 && this.onEqual)
                this.onEqual();
        }
    })
}
Scales2.prototype.callOnEqual = function(func){
    this.onEqual = func;
}
Scales2.prototype.callBeforeAnimate = function(func){
    this.beforeAnimate = func;
}
Scales2.prototype.emptyScales = function(){
    $(this.leftWeights).each(function(){
        this.remove();
    });
    $(this.rightWeights).each(function(){
        this.remove();
    });
    this.leftWeights = [];
    this.rightWeights = [];
    this.calculateWeights();
}
Scales2.prototype.removeWeight = function(weight,calculate){
    if(calculate == undefined)
        calculate = false;
    var isFound = false;
    var leftIndex = this.leftWeights.indexOf(weight);
    if(leftIndex >= 0){
        this.leftWeights[leftIndex].remove();
        this.leftWeights.splice(leftIndex,1);
        isFound = true;
    }
    else{
        var rightIndex = this.rightWeights.indexOf(weight);
        if(rightIndex >= 0){
            this.rightWeights[rightIndex].remove();
            this.rightWeights.splice(rightIndex,1);
            isFound = true;
        }
    }
    if(isFound && calculate){
        this.calculateWeights();
    }
    return isFound;
}
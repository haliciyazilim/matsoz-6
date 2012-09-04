var Scales = function(opt){
    this.animate = Item.prototype.animate;
    this.position = opt.position;
    this.angle = 0;
    this.bar = new Raster('scales_bar');
    this.knuckle = new Raster('scales_knuckle');
    this.left = new Raster('scales_left');
    this.right = new Raster('scales_right');
    this.pieces = [];
    this.pieces.push(this.bar);
    this.pieces.push(this.knuckle);
    this.pieces.push(this.left);
    this.pieces.push(this.right);
    for(var i=0;i<this.pieces.length;i++){
        this.pieces[i].position = this.position;
        this.pieces[i].lastTransformation = this.pieces[i].matrix;
    }
    this.knucklePoint = this.position.add(-1,-56);
    this.leftKnucklePoint = this.knucklePoint.subtract(83,0);
    this.rightKnucklePoint = this.knucklePoint.add(83,0);
    this.leftWeights = [];
    this.rightWeights = [];

//    this.setAngle(30);


}
Scales.prototype.setAngle = function(angle){
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
Scales.prototype.calculateLeftWeightPositions = function(){
    var totalLeftWidth = 0;var locatedLeftWidth= 0;
    for(var i=0;i<this.leftWeights.length;i++){
        totalLeftWidth+=this.leftWeights[i].raster.width;
    }
    var leftStartPoint = this.left.position.add(-83,92).subtract(totalLeftWidth/2,0);
    for(i=0;i<this.leftWeights.length;i++){
        this.leftWeights[i].raster.position = leftStartPoint.add(locatedLeftWidth,0).add(this.leftWeights[i].raster.width*0.5,-this.leftWeights[i].raster.height*0.5);
        locatedLeftWidth += this.leftWeights[i].raster.width;
    }
}
Scales.prototype.calculateRightWeightPositions = function(){
    var totalRightWidth = 0;var locatedRightWidth= 0;
    for(var i=0;i<this.rightWeights.length;i++){
        totalRightWidth+=this.rightWeights[i].raster.width;
    }
    var rightStartPoint = this.right.position.add(83,92).subtract(totalRightWidth/2,0);
    for(i=0;i<this.rightWeights.length;i++){
        this.rightWeights[i].raster.position = rightStartPoint.add(locatedRightWidth,0).add(this.rightWeights[i].raster.width*0.5,-this.rightWeights[i].raster.height*0.5);
        locatedRightWidth += this.rightWeights[i].raster.width;
    }
}
Scales.prototype.addWeightToLeft = function(weight,calculate){
    if(this.leftWeights.length >= 4)
        return false;
    this.leftWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateLeftWeightPositions();
}

Scales.prototype.addWeightToRight = function(weight,calculate){
    if(this.rightWeights.length >= 4)
        return false;
    this.rightWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateRightWeightPositions();
}
Scales.prototype.calculateWeights = function(){

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
    }
//    console.log("Angle: ",angle," Duration: ",duration);
    if(this.angle != angle)
        this.animateToAngle(angle,duration);

}
Scales.prototype.animateToAngle = function(angle,duration){
    if(Interaction.isPaused())
        return;
    Interaction.pause();
    if(duration == undefined)
        duration = 1000;
    this._angle =this.angle;
    this.animate({
        style:{_angle:angle},
        duration:duration,
        delay:500,
        animationType:'easeOutBounce',
        update:function(){
            this.setAngle(this._angle);
        },
        callback:Interaction.resume
    })
}

Scales.prototype.emptyScales = function(){
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

var Weight = function(opt){
    if(opt.type)
        this.type = opt.type;
    else
        throw "Please indicate the type of weight";

    var raster;
    switch(this.type){
        case 1:
            raster = new Raster('weight_1');
            this.value = 1;
            break;
        case 2:
            raster = new Raster('weight_2');
            this.value = 2;
            break;
        case 3:
            raster = new Raster('weight_3');
            this.value = 3;
            break;
        case 4:
            raster = new Raster('weight_4');
            this.value = 4;
            break;
        case 'a':
            raster = new Raster('weight_a');
            this.value = opt.value;
            break;
        case 'm':
            raster = new Raster('weight_m');
            this.value = opt.value;
            break;
        case 'x':
            raster = new Raster('weight_x');
            this.value = opt.value;
            break;
    }
    this.raster = raster;
}

Weight.prototype.remove = function(){
    this.raster.remove();
}

/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 05.11.2012
 * Time: 06:20
 * To change this template use File | Settings | File Templates.
 */

var Pantograph = Class.extend({
    init:function(opt){
        this.animate = Item.prototype.animate;
        if(opt.legHeight == undefined)
            opt.legHeight = 150;
        this.referencePoint = opt.position;
        this.legHeight = opt.legHeight;


        this.aPosition = this.referencePoint.add(this.legHeight*1.5,0);
    },
    draw:function(){
        var squaredDistance = this.referencePoint.getDistance(this.aPosition,true);
        var topAngle = Math.acos( 1 - squaredDistance / (2 * Math.pow(this.legHeight,2)));
        var twinAngle = (Math.PI - topAngle)*0.5;
        var topPoint = this.referencePoint.findPointTo(this.aPosition,this.legHeight).getRotatedPoint(-Util.radianToDegree(twinAngle),this.referencePoint);
        var leftLeg = new Path.TwoPointRectangle(this.referencePoint,topPoint);
        leftLeg.set_style({
            strokeColor:'#000'
        });
        var rightLeg = new Path.TwoPointRectangle(this.aPosition,topPoint);
        rightLeg.set_style({
            strokeColor:'#000'
        });

        var leftArmPoint = this.referencePoint.findPointTo(topPoint,33.33,true);
        var rightArmPoint = topPoint.findPointTo(this.aPosition,33.33,true);
        var armsCommonPoint = this.referencePoint.findPointTo(this.aPosition,33.33,true);
//        leftArmPoint.showOnCanvas();
//        armsCommonPoint.showOnCanvas();
//        rightArmPoint.showOnCanvas();
        var leftArm = new Path.TwoPointRectangle(leftArmPoint,armsCommonPoint);
        var rightArm = new Path.TwoPointRectangle(rightArmPoint,armsCommonPoint);
        leftArm.set_style({
            strokeColor:'#000'
        });
        rightArm.set_style({
            strokeColor:'#000'
        });


        this.rightLeg = rightLeg;
        this.leftLeg = leftLeg;
        this.leftArm = leftArm;
        this.rightArm = rightArm;



    },
    redraw:function(){
        if(this.rightLeg)
            this.rightLeg.remove();
        if(this.leftLeg)
            this.leftLeg.remove();
        if(this.rightArm)
            this.rightArm.remove();
        if(this.leftArm)
            this.leftArm.remove();
        this.draw();
    },
    setA:function(point){
        this.aPosition = point;
        this.redraw();
    }
});




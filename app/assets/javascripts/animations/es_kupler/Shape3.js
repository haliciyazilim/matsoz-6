/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 23.10.2012
 * Time: 06:58
 * To change this template use File | Settings | File Templates.
 */

var Shape3 = Class.extend({
    init:function(opt){
        this.points = [];
        this.dY = 0.3;
        this.h = 30;
        this.a = 30;
        this.dX = 0.4;
        this.style = {
            strokeColor:'#687',
            fillColor:new RgbColor(0.6,0.8,0.7,0.90)
        }
    },
    redraw:function(){
        this.draw(this.zeroPoint);
    },
    draw:function(zeroPoint){
        if(this.drawedShape)
            this.drawedShape.remove();
        this.zeroPoint = zeroPoint;
        this.drawedShape = new Group();

        //sort points
        this.points.sort(Shape3.SortFunction);

        //draw cubes
        for(var i=0; i<this.points.length;i++){

//            this.drawedShape.addChild(
//                new Path.Cube(
//                    zeroPoint.add(this.convertPoint3ToPoint(this.points[i])),
//                    this.a,
//                    new Point(this.dX,this.dY)
//                ).set_style(this.style)
//            )

            var point = zeroPoint.add( this.convertPoint3ToPoint( this.points[i] ) );
            new ExpandablePrism(this.a,this.a,this.a,Util.createProjectionMatrixForObjectAt(point.x,point.y)).project();
        }
    },
    convertPoint3ToPoint:function(point3){
        return new Point(
            ( point3.x * this.a ) + 0.5,
            (-point3.y * this.a ) + 0.5
        ).add(
            (-point3.z * this.a * this.dX ),
            ( point3.z * this.a * this.dY )
        );
    },
    rotateByY:function(clockwise){
        for(var i=0; i<this.points.length; i++){
            var temp = this.points[i].x;
            this.points[i].x = (clockwise?-1:1) * this.points[i].z;
            this.points[i].z = (clockwise?1:-1) * temp;
        }
    },
    rotateByX:function(clockwise){
        for(var i=0; i<this.points.length; i++){
            var temp = this.points[i].y;
            this.points[i].y = (clockwise?-1:1) * this.points[i].z;
            this.points[i].z = (clockwise?1:-1) * temp;
        }
    },
    rotateByZ:function(clockwise){
        for(var i=0; i<this.points.length; i++){
            var temp = this.points[i].y;
            this.points[i].y = (clockwise?-1:1) * this.points[i].x;
            this.points[i].x = (clockwise?1:-1) * temp;
        }
    },
    showLeftSide:function(){
        this.rotateByY(false);
        this.redraw();
    },
    showRightSide:function(){
        this.rotateByY(true);
        this.redraw();
    },
    showUpSide:function(){
        this.rotateByX(true);
        this.redraw();
    },
    showDownSide:function(){
        this.rotateByX(false);
        this.redraw();
    },
    showBackSide:function(){
        this.rotateByY();
        this.rotateByY();
        this.redraw();
    },
    flatten:function(duration,delay){
        var animHelper = new AnimationHelper({
            dX:this.dX,
            dY:this.dY
        });
        this._old_dX = this.dX;
        this._old_dY = this.dY;
        var self = this;
        animHelper.animate({
            style:{
                dX:0,
                dY:0
            },
            duration:duration,
            delay:delay,
            update:function(){
                self.dX = this.dX;
                self.dY = this.dY;
                self.redraw();
            }
        });
    }

});

Shape3.Generate = function(type){
    var shape;
    switch(type){
        case 0:
            shape = new TShape3();
            break;
    }
    return shape;
}
Shape3.SortFunction = function(a,b){
    if(a.z > b.z)
        return 1;
    if(a.z < b.z)
        return -1;
    if(a.y > b.y)
        return 1;
    if(a.y < b.y)
        return -1;
    if(a.x > b.x)
        return 1
    if(a.x < b.x)
        return -1;
    return 0;
}

Shape3.CreateProjectionMatrixForObjectAt = function(x, y, zFactor) {
    var fov = 1024;

    if (zFactor == undefined) {
        zFactor = 3;
    }

    return [
        1, 0, 128*zFactor/fov ,  x,
        0,  1,   -128*zFactor/fov,  y,
        0, 0,   0,  1,
        0, 0,    0,  1
    ];
};
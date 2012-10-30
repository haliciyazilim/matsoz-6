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
        this.style = interactionShapeStyle;
    },
    redraw:function(){
        this.removeCubes();
        this.draw(this.zeroPoint);
    },
    draw:function(zeroPoint){
        this.zeroPoint = zeroPoint;

        var matrix = Shape3.CreateProjectionMatrixForObjectAt(zeroPoint.x,zeroPoint.y);

        //sort points
        this.points.sort(Shape3.SortFunction);

        //draw cubes
        this.cubes = [];

        for(var i=0; i<this.points.length;i++){

//            this.drawedShape.addChild(
//                new Path.Cube(
//                    zeroPoint.add(this.convertPoint3ToPoint(this.points[i])),
//                    this.a,
//                    new Point(this.dX,this.dY)
//                ).set_style(this.style)
//            )

            var cube = new ExpandablePrism(this.a,this.a,this.a,matrix);
            cube.transform(this.points[i].multiply(new Point3(this.a,-this.a,-this.a)));
            cube.project();
            this.cubes.push(cube);
        }

    },
//    convertPoint3ToPoint:function(point3){
//        return new Point(
//            ( point3.x * this.a ) + 0.5,
//            (-point3.y * this.a ) + 0.5
//        ).add(
//            (-point3.z * this.a * this.dX ),
//            ( point3.z * this.a * this.dY )
//        );
//    },
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
    setRotationX:function(angle){
        for(var i=0;i<this.cubes.length;i++){
            this.cubes[i].setRotationX(angle);
            this.cubes[i].project();
        }
    },
    setRotationY:function(angle){
        for(var i=0;i<this.cubes.length;i++){
            this.cubes[i].setRotationY(angle);
            this.cubes[i].project();
        }
    },
    setRotationZ:function(angle){
        for(var i=0;i<this.cubes.length;i++){
            this.cubes[i].setRotationZ(angle);
            this.cubes[i].project();
        }
    },
    showLeftSide:function(redraw){
        this.rotateByY(false);
        if(redraw)
            this.redraw();
    },
    showRightSide:function(redraw){
        this.rotateByY(true);
        if(redraw)
            this.redraw();
    },
    showUpSide:function(redraw){
        this.rotateByX(true);
        if(redraw)
            this.redraw();
    },
    showDownSide:function(redraw){
        this.rotateByX(false);
        if(redraw)
            this.redraw();
    },
    showBackSide:function(redraw){
        this.rotateByY();
        this.rotateByY();
        if(redraw)
            this.redraw();
    },
    showSide: function(side,redraw){
        switch(side){
            case Shape3.LeftSide:
                this.showLeftSide(redraw);
                break;
            case Shape3.RightSide:
                this.showRightSide(redraw);
                break;
            case Shape3.DownSide:
                this.showDownSide(redraw);
                break;
            case Shape3.UpSide:
                this.showUpSide(redraw);
                break;
            case Shape3.BackSide:
                this.showBackSide(redraw);
                break;
        }
    },
    getMinimizedFlattedPoints:function(forSide){
        var tempPoint3s = [];
        for(var i=0; i < this.points.length; i++)
            tempPoint3s.push(this.points[i].clone());
        this.showSide(forSide);
        var flattedPoints = [];
        for(var i=0; i< this.points.length; i++){
            flattedPoints.push( new Point(this.points[i].x,this.points[i].y) );
        }
        var minimizedFlattedPoints = [];
        for(var i=0; i< flattedPoints.length ; i++){
            var exists = false;
            for(var j=0; j<minimizedFlattedPoints.length;j++){
                if(flattedPoints[i].equals(minimizedFlattedPoints[j]) == true){
                    exists = true;
                }
            }
            if(exists === false){
                minimizedFlattedPoints.push(flattedPoints[i]);
            }
        }
        this.points = tempPoint3s;
        return minimizedFlattedPoints;
    },

    /*
    * function is NOT COMPLETED!!!!
    */
    showCorrectSide:function(side){
        var rotationAmount = (Math.PI/4);
        var axis = null;
        switch(side){
            case Shape3.LeftSide:
                rotationAmount *= -1;
                axis = 'Y';
                break;
            case Shape3.RightSide:
                rotationAmount *= 1;
                axis = 'Y';
                break;
            case Shape3.DownSide:
                rotationAmount *= -1;
                axis = 'X';
                break;
            case Shape3.UpSide:
                rotationAmount *= 1;
                axis = 'X';
                break;
            case Shape3.BackSide:
                rotationAmount *= -2;
                axis = 'Y'
                break;
            default:
                this.flatten(1000,500);
                return;
        }
        var helper1 = new AnimationHelper({
            rotation: 0
        });
        var self = this;
        helper1.animate({
            style:{rotation:rotationAmount},
            duration:1000,
            delay:1000,
            update:function(){
                self['setRotation'+axis](this.rotation);
            },
            callback:function(){
                self.removeCubes();
                this.rotation = -this.rotation;
                self.showSide(side,true);
                self['setRotation'+axis](this.rotation);
                this.animate({
                    style:{rotation:0},
                    duration:1000,
                    update:function(){
                        self['setRotation'+axis](this.rotation);
                    },
                    callback: function() {
                        self.flatten(1000,500);
                    }
                })
            }
        });
    },
//    flatten:function(duration,delay){
//        var animHelper = new AnimationHelper({
//            dX:this.dX,
//            dY:this.dY
//        });
//        this._old_dX = this.dX;
//        this._old_dY = this.dY;
//        var self = this;
//        animHelper.animate({
//            style:{
//                dX:0,
//                dY:0
//            },
//            duration:duration,
//            delay:delay,
//            update:function(){
//                self.dX = this.dX;
//                self.dY = this.dY;
//                self.redraw();
//            }
//        });
//    },
    flatten:function(duration,delay){
        var animationHelper = new AnimationHelper({
            zFactor: 3
        })
        var self = this;
        animationHelper.animate({
            style: {
                zFactor: 0
            },
            duration: duration,
            delay: delay,
            animationType:'easeInEaseOut',
            update: function() {
                console.log(this.zFactor)
                var matrix = Shape3.CreateProjectionMatrixForObjectAt (self.zeroPoint.x,self.zeroPoint.y,this.zFactor);
                for(var i=0;i<self.cubes.length;i++){
                    self.cubes[i].matrix = matrix;
                    self.cubes[i].project();
                }
            },
            callback:function(){
                Interaction.resume();
            }
        })

    },
    removeCubes:function(){
        if(this.cubes)
            for(var i=0; i< this.cubes.length; i++){
                this.cubes[i].remove();
            }
    }

});


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

Shape3.FrontSide = "önden";
Shape3.DownSide = "alttan";
Shape3.UpSide = "üstten";
Shape3.LeftSide = "soldan";
Shape3.RightSide = "sağdan";
Shape3.BackSide = "arkadan";

Array.prototype.normalizePoints = function(){
    //calculate shape relative grid points
    var minX = this[0].x,minY = this[0].y;
    for(var i=1; i<this.length; i++)
        if(minX > this[i].x)
            minX = this[i].x;
    for(var i=1; i<this.length; i++)
        if(minY > this[i].y)
            minY = this[i].y;
    for(var i=0; i<this.length; i++)
        this[i] = this[i].subtract(minX,minY);
    return this;
}

Array.prototype.equals = function(other){
    if(this.length != other.length)
        return false;
    var length = this.length;
    var equalsFlag = [];
    for(var i=0; i < length; i++)
        equalsFlag.push(false);
    for(var i=0 ; i <length; i++)
        for(var j=0; j < length ;j++)
            if(this[i].equals(other[j]))
                equalsFlag[i] = true;
    for(var i=0;i<length;i++)
        if(equalsFlag[i] == false)
            return false;
    return true;
}
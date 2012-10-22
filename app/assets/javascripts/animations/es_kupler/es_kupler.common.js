var Shape3 = Class.extend({
    init:function(opt){
        this.points = [];
    },
    draw:function(){
        if(this.drawedShape)
            this.drawedShape.remove();
        this.drawedShape = new Group();

        //sort points
        this.points.sort(Shape3.SortFunction);

        //draw cubes
        for(var i=0; i<this.points.length;i++){

        }
    },
    convertPoint3ToPoint:function(point3){
        var p = new Point(
            0.5,
            Math.floor(-cubes[i].y*a*Math.cos(Util.degreeToRadian(Interaction.h)))+0.5
        )
        p = p.add(
            Math.floor(cubes[i].x*a*Math.sqrt(2)*0.5),
            Math.floor(cubes[i].x*dY)
        );
        p = p.add(
            Math.floor(-cubes[i].z*a*Math.sqrt(2)*0.5),
            Math.floor(cubes[i].z*dY)
        );
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


var TShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3( 0, 0, 1 ) );
        this.points.push( new Point3( 0, 1, 0 ) );
        this.points.push( new Point3( 0, 2, 0 ) );
        this.points.push( new Point3( 0, 3, 0 ) );

    }
})
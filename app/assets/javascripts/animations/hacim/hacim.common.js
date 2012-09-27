function UnitCube(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.draw = function(p,a,_s,style){
        if(this.shape)
            this.shape.remove();
        this.shape = new Path.Cube(p,a,new Point(_s.xZ,_s.yZ));
        if(style)
            this.shape.set_style(style);
        else
            this.shape.set_style(cubeStyle);
    return this.shape;
    };
}
UnitCube.compare = function(a,b){
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
UnitCube.drawCubes = function(cubes,zero,a,_s,style){
    //decide the draw order
    cubes.sort(UnitCube.compare);

    //draw the cubes
    for(var i=0; i<cubes.length;i++){
        var p = zero.add(
            Math.floor(cubes[i].x*a)+0.5,
            Math.floor(-cubes[i].y*a)+0.5
        );
        p = p.add(
            Math.floor(-cubes[i].z*a*_s.xZ),
            Math.floor(cubes[i].z*a*_s.yZ)
        );

        cubes[i].draw(p,a,_s,style);
    }
}
UnitCube.explode = function(cubes,zero,a,distance,_s){
    //decide the draw order
    cubes.sort(UnitCube.compare);
    //draw the cubes
    for(var i=0; i<cubes.length;i++){
        //console.log(cubes[i].x,cubes[i].y,cubes[i].z)
        var p = zero.add(cubes[i].x*a,-cubes[i].y*a);
        p = p.add(-cubes[i].z*a*_s.xZ,cubes[i].z*a*_s.yZ);
        p = p.add(distance*cubes[i].x,0);
        p = p.add(0,-distance*cubes[i].y);
        p = p.add(-cubes[i].z*distance*_s.xZ,cubes[i].z*distance*_s.yZ);
        p = new Point(Math.floor(p.x)+0.5,Math.floor(p.y)+0.5)
        cubes[i].draw(p,a,_s);
    }
}

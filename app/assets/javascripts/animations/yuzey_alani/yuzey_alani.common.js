
var writeArea = function (surface) {
    var center = new Point(0,0);
    for (var i = 0; i < surface.points.length; i++) {
        center.add(surface.points[i]);
        console.log(center);
    }


}
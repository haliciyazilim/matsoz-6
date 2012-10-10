
var writeAreaCalculation = function (surface, grid) {
    var center = new Point(0,0);
    for (var i = 0; i < surface.points.length; i++) {
        center = center.add(surface.points[i]);
    }

    center.x = center.x/i;
    center.y = center.y/i;

    var point = center.multiply(grid.size,grid.size).add(grid.position).add(0, 4);

    var text = new PointText(point);
    text.content = surface.area[0] + "." + surface.area[1];
    text.justification = 'center';

    return text;
}

var writeArea = function (surface, grid) {
    var center = new Point(0,0);
    for (var i = 0; i < surface.points.length; i++) {
        center = center.add(surface.points[i]);
    }

    center.x = center.x/i;
    center.y = center.y/i;

    var point = center.multiply(grid.size,grid.size).add(grid.position).add(0, 4);

    var text = new PointText(point);
    text.content = surface.area[0] * surface.area[1] + " cm²";
    text.justification = 'center';

    return text;
}

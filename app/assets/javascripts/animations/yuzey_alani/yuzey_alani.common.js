var Prism = ExpandableShape.extend({
    init: function(width, height, length, matrix) {
        this._super(matrix);

        this.width = width;
        this.height = height;
        this.length = length;

        width *= 10;
        height *= 10;
        length *= 10;
        this.setSurfaces({
            backSurface: new Surface([
                new Point3(-width,  height, length),
                new Point3( width,  height, length),
                new Point3( width, -height, length),
                new Point3(-width, -height, length)
            ]),
            bottomSurface: new Surface([
                new Point3(-width, height,  length),
                new Point3( width, height,  length),
                new Point3( width, height, -length),
                new Point3(-width, height, -length)
            ]),
            leftSurface: new Surface([
                new Point3(-width, -height, -length),
                new Point3(-width, -height,  length),
                new Point3(-width,  height,  length),
                new Point3(-width,  height, -length)
            ]),
            rightSurface: new Surface([
                new Point3(width,  height, -length),
                new Point3(width,  height,  length),
                new Point3(width, -height,  length),
                new Point3(width, -height, -length)
            ]),
            topSurface: new Surface([
                new Point3(-width, -height, -length),
                new Point3( width, -height, -length),
                new Point3( width, -height,  length),
                new Point3(-width, -height,  length)
            ]),
            frontSurface: new Surface([
                new Point3(-width, -height, -length),
                new Point3( width, -height, -length),
                new Point3( width,  height, -length),
                new Point3(-width,  height, -length)
            ])
        });
    },
    showDimensions: function() {
        var group = new Group();
        var point = Util.project(new Point3(-this.width*10, 0, -this.length*10), this.matrix);
        point = point.add(-6, 0);
        var text = new PointText(point);
        text.content = this.height + ' cm';
        text.justification = 'right';
        text.characterStyle.fontSize = '8';
        group.addChild(text);


        point = Util.project(new Point3(0, this.height*10, -this.length*10), this.matrix);
        point = point.add(0, 14);
        var text = new PointText(point);
        text.content = this.width + ' cm';
        text.justification = 'center';
        text.characterStyle.fontSize = '8';
        group.addChild(text);


        point = Util.project(new Point3(-this.width*10, -this.height*10, 0), this.matrix);
        point = point.add(-6, 0);
        text = new PointText(point);
        text.content = this.length + ' cm';
        text.justification = 'right';
        text.characterStyle.fontSize = '8';
        group.addChild(text);

        return group;
    },
    areaCalculationSteps: function() {
        var type;
        var steps = [];

        if (this.width == this.length) {
            if (this.height == this.width) {
                type = 0;
                steps.push("Küpün yüzey alanı");
            } else {
                type = 1;
                steps.push("Kare prizmanın yüzey alanı");
            }
        } else {
            type = 2;
            steps.push("Dikdörtgenler prizmasının yüzey alanı");
        }

        steps.push('= ('+this.length * this.height+' + '+this.length * this.height+' + '
            +this.width * this.height+' + '+this.width * this.height+' + '
            +this.length * this.width+' + '+this.length * this.width+') cm²');

        steps.push('= [2('+this.length+'.'+this.height+') + 2('
            +this.width+'.'+this.height+') + 2('
            +this.length+'.'+this.width+')] cm²');

        steps.push('= ' + this.length*this.height*this.width+' cm²');

        switch(type) {
            case 0:
                steps.push("A = 6a²");
                break;
            case 1:
                steps.push("A = 4(a.b)+2(b.c)");
                break;
            case 2:
                steps.push("A = 2(a.b)+2(a.c)+2(b.c)");
                break;
        }

        return steps;
    }
});// var Prisim

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

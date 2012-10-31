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

        steps.push('= ' + (2*this.length*this.height+2*this.length*this.width+2*this.height*this.width) + ' cm²');

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
    },
    drawExpandedShape: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18;
        var height = this.height * 18;

        var points = [
            [
                new Point(0, length),
                new Point(length, length),
                new Point(length, length+height),
                new Point(0, length+height)
            ],
            [
                new Point(length, length),
                new Point(length + width, length),
                new Point(length + width, length+height),
                new Point(length, length+height)
            ],
            [
                new Point(length + width, length),
                new Point(2*length + width, length),
                new Point(2*length + width, length+height),
                new Point(length + width, length+height)
            ],
            [
                new Point(2*length + width, length),
                new Point(2*length + 2*width, length),
                new Point(2*length + 2*width, length+height),
                new Point(2*length + width, length+height)
            ],
            [
                new Point(length, 0),
                new Point(length + width, 0),
                new Point(length + width, length),
                new Point(length, length)
            ],
            [
                new Point(length, length+height),
                new Point(length + width, length+height),
                new Point(length + width, 2*length+height),
                new Point(length, 2*length+height)
            ]
        ]

        for (var i = 0; i < points.length; i++) {
            var surf = new Path();

            for (var j = 0; j < points[i].length; j++) {
                surf.add(points[i][j]);
            }

            surf.closed = true;

            group.addChild(surf);
        }

        return group;
    },
    drawAreaCalculations: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18;
        var height = this.height * 18;

        var text = new PointText(length/2, length + height/2+4);
        text.content = this.length + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height/2+4);
        text.content = this.width + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        var text = new PointText(length + width + length/2, length + height/2+4);
        text.content = this.length + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(2*length + width + width/2, length + height/2+4);
        text.content = this.width + '.' + this.height;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length/2+4);
        text.content = this.width + '.' + this.length;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height + length/2+4);
        text.content = this.width + '.' + this.length;
        text.justification = 'center';
        text.fillColor = 'white';
        group.addChild(text);

        group.fillColor = 'white';

        return group;
    },
    drawAreas: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18
        var height = this.height * 18;

        var text = new PointText(length/2, length + height/2+4);
        text.content = this.length * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height/2+4);
        text.content = this.width * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        var text = new PointText(length + width + length/2, length + height/2+4);
        text.content = this.length * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(2*length + width + width/2, length + height/2+4);
        text.content = this.width * this.height + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length/2+4);
        text.content = this.width * this.length + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        text = new PointText(length + width/2, length + height + length/2+4);
        text.content = this.width * this.length + ' cm²';
        text.justification = 'center';
        text.characterStyle.fontSize = 8;
        text.fillColor = 'white';
        group.addChild(text);

        return group;
    },
    drawAreaSums: function() {
        var group = new Group();

        var length = this.length * 18;
        var width = this.width * 18
        var height = this.height * 18;

        var numbers = [
            this.width * this.length,
            this.width * this.length,
            this.length * this.height,
            this.length * this.height,
            this.width * this.height,
            this.width * this.height
        ]

        var total = numbers[0];

        var text = new PointText(0, 0);

        text.content = 'A = ' + numbers[0] + ' cm²';

        for (var i = 1; i < numbers.length; i++) {
            text.content = text.content + ' + ' + numbers[i] + ' cm²';
            total += numbers[i];
        }

        text.justification = 'right';
//        text.characterStyle.fontSize = 12;

        group.addChild(text);


        var width = text.getBounds().width;

        var text = new PointText(-width/1.8-61, 20);
        text.content = '= ' + total + ' cm²';
        text.justification = 'left';
        text.fillColor = 'green';
//        text.characterStyle.fontSize = 12;
        group.addChild(text);

        return group;
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
    text.fillColor = 'white';

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
    text.fillColor = 'white';

    return text;
}

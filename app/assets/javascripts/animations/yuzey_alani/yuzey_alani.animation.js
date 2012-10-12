var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var square = new Path.Rectangle(new Point(180.5, 8.5), new Point(200.5,28.5));
        square.strokeColor = '#999';
        var text1 = new PointText(new Point(176, 40));
        text1.content = "1 cm²";
        text1.characterStyle.fontSize = 8;
        var text2 = new PointText(new Point(204, 22));
        text2.content = "1 cm²";
        text2.characterStyle.fontSize = 8;

        var matrix = Util.createProjectionMatrixForObjectAt(100,90);

        var prism = new ExpandablePrism(60, 80, 40, matrix);
        var cube = new ExpandablePrism(40, 40, 40, matrix);
        var squarePrism = new ExpandablePrism(40, 80, 40, matrix);

        var prismSurfaces = [
            {
                points: [new Point(3,0), new Point(3,2), new Point(6,2), new Point(6,0)],
                area: [3, 2]
            },
            {
                points: [new Point(1,2), new Point(1,6), new Point(3,6), new Point(3,2)],
                area: [2, 4]
            },
            {
                points: [new Point(3,2), new Point(3,6), new Point(6,6), new Point(6,2)],
                area: [3, 4]
            },
            {
                points: [new Point(6,2), new Point(6,6), new Point(8,6), new Point(8,2)],
                area: [2, 4]
            },
            {
                points: [new Point(8,2), new Point(8,6), new Point(11,6), new Point(11,2)],
                area: [3, 4]
            },
            {
                points: [new Point(3,6), new Point(3,8), new Point(6,8), new Point(6,6)],
                area: [3, 2]
            }
        ]

        var cubeSurfaces = [
            {
                points: [new Point(4,1), new Point(4,3), new Point(6,3), new Point(6,1)],
                area: [2, 2]
            },
            {
                points: [new Point(2,3), new Point(2,5), new Point(4,5), new Point(4,3)],
                area: [2, 2]
            },
            {
                points: [new Point(4,3), new Point(4,5), new Point(6,5), new Point(6,3)],
                area: [2, 2]
            },
            {
                points: [new Point(6,3), new Point(6,5), new Point(8,5), new Point(8,3)],
                area: [2, 2]
            },
            {
                points: [new Point(8,3), new Point(8,5), new Point(10,5), new Point(10,3)],
                area: [2, 2]
            },
            {
                points: [new Point(4,5), new Point(4,7), new Point(6,7), new Point(6,5)],
                area: [2, 2]
            }
        ];

        var squarePrismSurfaces = [
            {
                points: [new Point(4,0), new Point(4,2), new Point(6,2), new Point(6,0)],
                area: [2, 2]
            },
            {
                points: [new Point(2,2), new Point(2,6), new Point(4,6), new Point(4,2)],
                area: [2, 4]
            },
            {
                points: [new Point(4,2), new Point(4,6), new Point(6,6), new Point(6,2)],
                area: [2, 4]
            },
            {
                points: [new Point(6,2), new Point(6,6), new Point(8,6), new Point(8,2)],
                area: [2, 4]
            },
            {
                points: [new Point(8,2), new Point(8,6), new Point(10,6), new Point(10,2)],
                area: [2, 4]
            },
            {
                points: [new Point(4,6), new Point(4,8), new Point(6,8), new Point(6,6)],
                area: [2, 2]
            }
        ];

        var shapes = [
            {
                shape: prism,
                surfaces: prismSurfaces
            },
            {
                shape: cube,
                surfaces: cubeSurfaces
            },
            {
                shape: squarePrism,
                surfaces: squarePrismSurfaces
            }
        ]


        InteractiveGrids.prototype.appendVertexLetters = function(){};
        var grid = new InteractiveGrids({
            position:new Point(250.5,8.5),
            size:20,
            rows: 12,
            cols: 8,
            style:{
                strokeColor:'#999'
            }
        });

        var shapes3D = [];
        var shapeGroups = [];
        var shapeCalculations = [];
        var shapeAreas = [];

        var totalDelay = -2000;

        for (var i = 0; i < 3; i++) {
            shapeGroups[i] = new Group();
            shapeCalculations[i] = new Group();
            shapeAreas[i] = new Group();

            for (var j = 0; j < 6; j++) {
                grid.drawShape(shapes[i].surfaces[j].points);

                shapeGroups[i].addChild(grid.path);
                shapeCalculations[i].addChild(writeAreaCalculation(shapes[i].surfaces[j], grid));
                shapeAreas[i].addChild(writeArea(shapes[i].surfaces[j], grid));
            }

            shapes3D[i] = shapes[i].shape.project();

            shapes3D[i].opacity = 0;

            shapeGroups[i].set_style(style);

            shapeGroups[i].opacity = 0;
            shapeCalculations[i].opacity = 0;
            shapeAreas[i].opacity = 0;

            shapes3D[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut'
            });

            shapeGroups[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut'
            });

            shapeCalculations[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut'
            });

            shapeCalculations[i].animate({
                style: {
                    opacity: 0
                },
                duration: 1000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut',
                callback: function() {
                    this.remove();
                }
            });

            shapeAreas[i].animate({
                style: {
                    opacity: 1
                },
                duration: 1000,
                delay: totalDelay,
                animationType: 'easeInEaseOut'
            });

            if (i < 2) {
                shapes3D[i].animate({
                    style: {
                        opacity: 0
                    },
                    duration: 1000,
                    delay: totalDelay += 2000,
                    animationType: 'easeInEaseOut',
                    callback: function() {
                        this.remove();
                    }
                });

                shapeGroups[i].animate({
                    style: {
                        opacity: 0
                    },
                    duration: 1000,
                    delay: totalDelay,
                    animationType: 'easeInEaseOut',
                    callback: function() {
                        this.remove();
                    }
                });

                shapeAreas[i].animate({
                    style: {
                        opacity: 0
                    },
                    duration: 1000,
                    delay: totalDelay,
                    animationType: 'easeInEaseOut',
                    callback: function() {
                        this.remove();
                        Main.animationFinished();
                    }
                });
            }
        }
    }
}
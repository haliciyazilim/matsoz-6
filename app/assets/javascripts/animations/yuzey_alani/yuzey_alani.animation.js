var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;


        var matrix = Util.createProjectionMatrixForObjectAt(100,90);

        var prism = new ExpandablePrism(60, 80, 40, matrix);

        prism.project();


//        Interaction.masterShape = InteractiveGrids.CreateShape(randomNumber);


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

        var shape1 = new Group();
        var shape1Calculations = new Group();
        var shape1Areas = new Group();

        for (var i = 0; i < 6; i++) {
            grid.drawShape(squarePrismSurfaces[i].points);

            shape1.addChild(grid.path);
            shape1Calculations.addChild(writeAreaCalculation(squarePrismSurfaces[i], grid));
            shape1Areas.addChild(writeArea(squarePrismSurfaces[i], grid));
        }

        shape1.set_style(style);

        shape1.opacity = 0;
        shape1Calculations.opacity = 0;
        shape1Areas.opacity = 0;

        shape1.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 2000,
            animationType: 'easeInEaseOut'
        });

        shape1Calculations.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 4000,
            animationType: 'easeInEaseOut'
        });

        shape1Calculations.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 6000,
            animationType: 'easeInEaseOut'
        });

        shape1Areas.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 6000,
            animationType: 'easeInEaseOut'
        });
    }
}
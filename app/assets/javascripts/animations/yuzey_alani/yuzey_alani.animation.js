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
                area: 8
            },
            {
                points: [new Point(1,2), new Point(1,6), new Point(3,6), new Point(3,2)],
                area: 6
            },
            {
                points: [new Point(3,2), new Point(3,6), new Point(6,6), new Point(6,2)],
                area: 12
            },
            {
                points: [new Point(6,2), new Point(6,6), new Point(8,6), new Point(8,2)],
                area: 8
            },
            {
                points: [new Point(8,2), new Point(8,6), new Point(11,6), new Point(11,2)],
                area: 12
            },
            {
                points: [new Point(3,6), new Point(3,8), new Point(6,8), new Point(6,6)],
                area: 6
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


        var shape1 = new Group();

//        //grid.path.
//
//        grid.drawShape(prismSurfaces[1]);
//        grid.drawShape(prismSurfaces[2]);
//        grid.drawShape(prismSurfaces[3]);
//        grid.drawShape(prismSurfaces[4]);
//        grid.drawShape(prismSurfaces[5]);

        for (var i = 0; i < 6; i++) {
            grid.drawShape(prismSurfaces[i].points);

            shape1.addChild(grid.path);
            shape1.addChild(writeArea(prismSurfaces[i]));
        }

        shape1.opacity = 1;

        shape1.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 2000,
            animationType: 'easeInEaseOut'
        });

        shape1.set_style(style);
    }
}
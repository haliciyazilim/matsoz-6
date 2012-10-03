var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;


        var matrix = Util.createProjectionMatrixForObjectAt(100,90);

        var prism = new ExpandablePrism(60, 100, 20, matrix);

        prism.project();


//        Interaction.masterShape = InteractiveGrids.CreateShape(randomNumber);


        var prismSurfaces = [
            {
                points: [new Point(1,0), new Point(1,1), new Point(4,1), new Point(4,0)],
                area: 3
            },
            {
                points: [new Point(0,1), new Point(0,6), new Point(1,6), new Point(1,1)],
                area: 
            }
            [new Point(1,1), new Point(1,6), new Point(4,6), new Point(4,1)],
            [new Point(4,1), new Point(4,6), new Point(5,6), new Point(5,1)],
            [new Point(5,1), new Point(5,6), new Point(8,6), new Point(8,1)],
            [new Point(1,6), new Point(1,7), new Point(4,7), new Point(4,6)]
        ]


        InteractiveGrids.prototype.appendVertexLetters = function(){};
        var grid = new InteractiveGrids({
            position:new Point(250.5,16.5),
            size:18,
            style:{
                strokeColor:'#999'
            }
        }).drawShape(prismSurfaces[0]);

        grid.path.

        grid.drawShape(prismSurfaces[1]);
        grid.drawShape(prismSurfaces[2]);
        grid.drawShape(prismSurfaces[3]);
        grid.drawShape(prismSurfaces[4]);
        grid.drawShape(prismSurfaces[5]);
    }
}
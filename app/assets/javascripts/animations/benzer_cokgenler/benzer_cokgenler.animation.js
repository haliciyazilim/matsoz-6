var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Main.animationFinished();

        var firstPointsArr = [];
        firstPointsArr[0] = new Point(100.5,50.5);
        firstPointsArr[1] = new Point(240.5,50.5);
        firstPointsArr[2] = new Point(240.5,58.5);
        firstPointsArr[3] = new Point(100.5,58.5);

        var secondPointsArr = [];
        secondPointsArr[0] = new Point(100.5,50.5);
        secondPointsArr[1] = new Point(200.5,50.5);
        secondPointsArr[2] = new Point(200.5,58.5);
        secondPointsArr[3] = new Point(100.5,58.5);

        var thirdPointsArr = [];
        thirdPointsArr[0] = new Point(100.5,50.5);
        thirdPointsArr[1] = new Point(160.5,50.5);
        thirdPointsArr[2] = new Point(160.5,58.5);
        thirdPointsArr[3] = new Point(100.5,58.5);

        var fourthPointsArr = [];
        fourthPointsArr[0] = new Point(100.5,50.5);
        fourthPointsArr[1] = new Point(240.5,50.5);
        fourthPointsArr[2] = new Point(240.5,58.5);
        fourthPointsArr[3] = new Point(100.5,58.5);

        var firstShape = PantographShapes(firstPointsArr);
        firstShape.setRotation(-35);


        var secondShape = PantographShapes(secondPointsArr);
        secondShape.setRotation(-35);
        secondShape.setPos(new Point(100,60));

        var thirdShape = PantographShapes(thirdPointsArr);
        thirdShape.setRotation(-120);
        thirdShape.setPos(new Point(60,60));

        var fourthShape = PantographShapes(fourthPointsArr);
        fourthShape.setRotation(-120);
        fourthShape.setPos(new Point(200,80));
    }
}
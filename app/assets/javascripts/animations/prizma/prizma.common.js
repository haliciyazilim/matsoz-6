function ciz(){

    surfaceStyle = {
        strokeColor: "#4F9C4F",
        strokeWidth: 2

    };

    var width = 100;
    var length =100;
    var height = 100;

    var width2 = 180;
    var length2 = 70;
    var height2 = 50;

    var skew=35;

    matrix = Util.createProjectionMatrixForObjectAt(275, 120);
    shape=new ExpandablePrism(width,height,length,matrix);
    path = shape.project();


    matrix2 = Util.createProjectionMatrixForObjectAt(100, 120);
    shape2=new ExpandablePrisimPyramid(width,height,length,matrix2);
    path2 = shape2.project();

    matrix3 = Util.createProjectionMatrixForObjectAt(450, 120);
    shape3=new ExpandableSkewedPrism(width,height,length,skew,matrix3);
    path2 = shape3.project();

    point= new Path.Circle(new Point(245.5,149.5),5);
    point.fillColor="red";




}
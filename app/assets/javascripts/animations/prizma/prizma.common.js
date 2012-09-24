function ciz(){

//    surfaceStyle = {
//        strokeColor: "#4F9C4F",
//        strokeWidth: 2
//
//    };

    var width = 100;
    var length =100;
    var height = 100;

    var width2 = 180;
    var length2 = 70;
    var height2 = 50;

    var skew=0.5;


    matrix = Util.createProjectionMatrixForObjectAt(100, 120);
    matrix2 = Util.createProjectionMatrixForObjectAt(300, 120);
    matrix3 = Util.createProjectionMatrixForObjectAt(450, 120);

    //Küp
    /*matrix = Util.createProjectionMatrixForObjectAt(275, 120);
    shape=new ExpandablePrism(width,height,length,matrix);
    path = shape.project();
*/
    //Dik Kare Prizma
    shapeDikKarePrizma=new ExpandablePrism(width,0,length,matrix2);

    // Eğik Kare Prizma
    shapeEgikKare=new ExpandableSkewedPrism(width,0,length,0,matrix2);

    //Dik Kare Prizma
    shapeDikdortgenPrizma=new ExpandableRectangularPrism(width,0,length,matrix3);

    // Paralel kenar Prizma
    shapeParalelKenar=new ExpandableParallelogramPrism(width,0,length,matrix);

    // Eş kenar Prizma
    shapeEsKenar=new ExpandableEquilateralPrism(width,0,length,matrix2);

    dondur(shapeParalelKenar,matrix,height);
    //dondur(shapeEsKenar,matrix2,height);
    dondur(shapeEgikKare,matrix2,height,skew);
    //dondur(shapeDikKarePrizma,matrix2,height);
    //dondur(shapeDikdortgenPrizma,matrix3,height);

    function dondur(shape,matrix,height,skew){

        shape.delay = 2000;

        shape.surfaces.topSurface.pivotsX[0] = new Point3(0, 0, 0);
        shape.surfaces.topSurface.rotationsX[0] = Math.PI/2;
        shape.surfaces.bottomSurface.pivotsX[0] = new Point3(0, 0, 0);
        shape.surfaces.bottomSurface.rotationsX[0] = Math.PI/2;
        shape.surfaces.leftSurface.pivotsX[0] = new Point3(0, 0, 0);
        shape.surfaces.leftSurface.rotationsX[0] = Math.PI/2;
        shape.surfaces.rightSurface.pivotsX[0] = new Point3(0, 0, 0);
        shape.surfaces.rightSurface.rotationsX[0] = Math.PI/2;
        shape.surfaces.frontSurface.pivotsX[0] = new Point3(0, 0, 0);
        shape.surfaces.frontSurface.rotationsX[0] = Math.PI/2;
        shape.surfaces.backSurface.pivotsX[0] = new Point3(0, 0, 0);
        shape.surfaces.backSurface.rotationsX[0] = Math.PI/2;

        shape.rotateSurfaceX(shape.surfaces.topSurface, -Math.PI/2, new Point3(0,0,0), true);
        shape.rotateSurfaceX(shape.surfaces.bottomSurface, -Math.PI/2, new Point3(0,0,0), true);
        shape.rotateSurfaceX(shape.surfaces.leftSurface, -Math.PI/2, new Point3(0,0,0), true);
        shape.rotateSurfaceX(shape.surfaces.rightSurface, -Math.PI/2, new Point3(0,0,0), true);
        shape.rotateSurfaceX(shape.surfaces.frontSurface, -Math.PI/2, new Point3(0,0,0), true);
        shape.rotateSurfaceX(shape.surfaces.backSurface, -Math.PI/2, new Point3(0,0,0), true);

        var animationHelper = new AnimationHelper({
            height: 0
        });

        var path = shape.project();

        animationHelper.animate({
            style: {
                height: height
            },
            duration: 1000,
            delay: 3000,
            animationType: 'easeInEaseOut',
            update: function () {

                if(skew)
                    shape.init(width,this.height,length,skew,matrix);
                else
                    shape.init(width,this.height,length,matrix);

                path = shape.project();
            }
        });
    }



    // Üçgen Piamid
   /* matrix3 = Util.createProjectionMatrixForObjectAt(450, 120);
    shape3=new ExpandableShapeTetrahedron(width,matrix3);
    path3 = shape3.project();*/


//    point= new Path.Circle(new Point(245.5,149.5),5);
//    point.fillColor="red";




}
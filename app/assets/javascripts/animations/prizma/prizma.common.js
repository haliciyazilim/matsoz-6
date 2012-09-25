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

    koordinat=new Array();
    koordinatBack=new Array();
    koordinatFront=new Array();
    koordinatLeft=new Array();
    koordinatRight=new Array();

    //k1,k2,k3,k4,k5,k6,k7,k8;


    //Küp
    /*matrix = Util.createProjectionMatrixForObjectAt(275, 120);
    shape=new ExpandablePrism(width,height,length,matrix);
    path = shape.project();
*/
    //Dik Kare Prizma
    shapeDikKarePrizma=new ExpandablePrism(width,0,length,matrix);

    // Eğik Kare Prizma
    shapeEgikKare=new ExpandableSkewedPrism(width,0,length,0,matrix2);

    //Dik Kare Prizma
    shapeDikdortgenPrizma=new ExpandableRectangularPrism(width,0,length,matrix3);

    // Paralel kenar Prizma
    shapeParalelKenar=new ExpandableParallelogramPrism(width,0,length,matrix);

    // Eş kenar Prizma
    shapeEsKenar=new ExpandableEquilateralPrism(width,0,length,matrix2);

    //Üçgen Prizma
    shapeUcgen=new ExpandableTrianglePrism(width,0,length,matrix3)
    //shapeUcgen.project();




    //dondur(shapeParalelKenar,matrix,height);
    dondur(shapeEsKenar,matrix2,height);
    //dondur(shapeEgikKare,matrix2,height,skew);
    //donukshape=dondur(shapeDikKarePrizma,matrix,height);
    //dondur(shapeDikdortgenPrizma,matrix3,height);
    //dondur(shapeUcgen,matrix3,height);

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

        if(path)
            path.remove();

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
            },
            callback:function(){
                koordinatBack=shape.surfaces.backSurface.get2DPoints(matrix);
                koordinatFront=shape.surfaces.frontSurface.get2DPoints(matrix);
                koordinatLeft=shape.surfaces.leftSurface.get2DPoints(matrix);
                koordinatRight=shape.surfaces.rightSurface.get2DPoints(matrix);

                koordinat=[koordinatBack,koordinatFront];

                renk=["black","yellow","red","green"]
                for(var i=0; i<koordinat.length;i++){
                    for(var j=0; j<4;j++){
                        var point= new Path.Circle(new Point(koordinat[i][j].x,koordinat[i][j].y),10);
                        point.class="nokta";
                        point.myId="nokta"+i+j;
                        point.fillColor=renk[j];
                    }
                }
            }
        });

        return path;
    }



    // Üçgen Piamid
   /* matrix3 = Util.createProjectionMatrixForObjectAt(450, 120);
    shape3=new ExpandableShapeTetrahedron(width,matrix3);
    path3 = shape3.project();*/

    /*kordinat=shapeDikKarePrizma.surfaces.backSurface.get2DPoints(matrix)[0];
    point= new Path.Circle(new Point(kordinat.x,kordinat.y),5);
    point.fillColor="red";
*/



}
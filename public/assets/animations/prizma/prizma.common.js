function ciz(secim,matrixX,matrixY,amac,sira){

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

    if(!matrixX)
        matrixX=300;
    if(!matrixY)
        matrixY=120;
    if(!amac)
        amac="";
    if(!sira)
        sira=0;

    matrix = Util.createProjectionMatrixForObjectAt(100, 120);
    matrix2 = Util.createProjectionMatrixForObjectAt(matrixX, matrixY);
    matrix3 = Util.createProjectionMatrixForObjectAt(450, 120);
//
//    koordinat=new Array();
//    koordinatBack=new Array();
//    koordinatFront=new Array();
//    koordinatLeft=new Array();
//    koordinatRight=new Array();

    //k1,k2,k3,k4,k5,k6,k7,k8;


    //Küp
    /*matrix = Util.createProjectionMatrixForObjectAt(275, 120);
    shape=new ExpandablePrism(width,height,length,matrix);
    path = shape.project();
*/


    switch (secim){

        case "dikKare":
            //Dik Kare Prizma
            shapeDikKarePrizma=new ExpandablePrism(width,0,length,matrix2);
            dondur(shapeDikKarePrizma,matrix2,height);
            break;
        case "egikKare":
            // Eğik Kare Prizma
            shapeEgikKare=new ExpandableSkewedPrism(width,0,length,0,matrix2);
            dondur(shapeEgikKare,matrix2,height,skew);
            break;
        case "dikdortgen":
            //Dik Kare Prizma
            shapeDikdortgenPrizma=new ExpandableRectangularPrism(width,0,length,matrix2);
            dondur(shapeDikdortgenPrizma,matrix2,height);
            break;
        case "paralelKenar":
            // Paralel kenar Prizma
            shapeParalelKenar=new ExpandableParallelogramPrism(width,0,length,matrix2);
            dondur(shapeParalelKenar,matrix2,height);
            break;
        case "esKenar":
            // Eş kenar Prizma
            shapeEsKenar=new ExpandableEquilateralPrism(width,0,length,matrix2);
            dondur(shapeEsKenar,matrix2,height);
            break;
        case "ucgen":
            //Üçgen Prizma
            shapeUcgen=new ExpandableTrianglePrism(width,0,length,matrix2)
            dondur(shapeUcgen,matrix2,height);
            break;
    }




    //dondur(shapeParalelKenar,matrix,height);
    //dondur(shapeEsKenar,matrix2,height);
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
        Interaction.noktaArray=[];
        grup=new Group();
        animationHelper.animate({
            style: {
                height: height
            },
            duration: 1000,
            delay: 3000,
            animationType: 'easeInEaseOut',
            update: function () {

                if(amac=="ornek")
                    Main.animationProject.activeLayer.removeChildren();
                else
                    Main.interactionProject.activeLayer.removeChildren();

                if(skew)
                    shape.init(width,this.height,length,skew,matrix);
                else
                    shape.init(width,this.height,length,matrix);

                path = shape.project();
            },
            callback:function(){
                
                if(amac!="ornek"){
                    koordinatBack=shape.surfaces.backSurface.get2DPoints(matrix);
                    koordinatFront=shape.surfaces.frontSurface.get2DPoints(matrix);
                    koordinatLeft=shape.surfaces.leftSurface.get2DPoints(matrix);
                    koordinatRight=shape.surfaces.rightSurface.get2DPoints(matrix);
                    koordinat=[];
                    koordinat=[koordinatBack,koordinatFront];
                    console.log("koordinat 1");
                    console.log(koordinat);
                    renk=["black","yellow","red","green"]
                    var point;
                    for(var i=0; i<koordinat.length;i++){
                        for(var j=0; j<4;j++){
                            point= new Path.Circle(new Point(koordinat[i][j].x,koordinat[i][j].y),5);
                            point.class="nokta";
                            point.myId="nokta"+i+j;
                            point.name="nokta"+i+j;
    
                            if(amac=="ornek")
                                grup.addChild(point);
                            point.fillColor="black";
                            point.strokeWidth=20;
                            //point.strokeColor="red";
                            point.opacity=0.1;
                            Interaction.noktaArray.push(point);
    
    
                        }
                    }
                }
                if(amac=="ornek"){
                    
                    koordinatBackO=shape.surfaces.backSurface.get2DPoints(matrix);
                    koordinatFrontO=shape.surfaces.frontSurface.get2DPoints(matrix);
                    koordinatLeftO=shape.surfaces.leftSurface.get2DPoints(matrix);
                    koordinatRightO=shape.surfaces.rightSurface.get2DPoints(matrix);
                    koordinatO=[];
                    koordinatO=[koordinatBackO,koordinatFrontO];
                    console.log("koordinatO 1");
                    console.log(koordinatO);
                    renk=["black","yellow","red","green"]
                    var point;
                    for(var i=0; i<koordinatO.length;i++){
                        for(var j=0; j<4;j++){
                            point= new Path.Circle(new Point(koordinatO[i][j].x,koordinatO[i][j].y),20);
                            point.class="nokta";
                            point.myId="nokta"+i+j;
                            point.name="nokta"+i+j;
    
                            if(amac=="ornek")
                                grup.addChild(point);
                            point.fillColor="black";
                            point.opacity=0.1;
                            Interaction.noktaArray.push(point);
    
    
                        }
                    }
                    
                    
                    ornekAnim(grup,"Dik kare prizma",0,sira);
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

function ornekAnim(grup,metin,bekleme,sira){
    var baslangicNoktasi=new Point(grup.children.nokta03.position.x,grup.children.nokta03.position.y)
    var bitisNoktasi=new Point(grup.children.nokta12.position.x,grup.children.nokta12.position.y)

    var baslangicNoktasi2=new Point(grup.children.nokta02.position.x,grup.children.nokta02.position.y)
    var bitisNoktasi2=new Point(grup.children.nokta12.position.x,grup.children.nokta12.position.y)

    if(sira==5){
        var baslangicNoktasi=new Point(grup.children.nokta03.position.x,grup.children.nokta03.position.y)
        var bitisNoktasi=new Point(grup.children.nokta12.position.x,grup.children.nokta12.position.y)

        var baslangicNoktasi2=new Point(grup.children.nokta03.position.x,grup.children.nokta03.position.y)
        var bitisNoktasi2=new Point(grup.children.nokta13.position.x,grup.children.nokta13.position.y)
    }

    var animationHelper=new AnimationHelper({
        opacity:0
    });

    cizgi=new Path.Line(baslangicNoktasi,bitisNoktasi);
    cizgi.strokeColor="#d2a3a8";
    cizgi.opacity=0

    cizgi2=new Path.Line(baslangicNoktasi2,bitisNoktasi2);
    cizgi2.strokeColor="#000fff";
    cizgi2.opacity=0

    var cisimT = new PointText(new Point(600, 80));
    cisimT.fillColor = 'red';

    var cisimK = new PointText(new Point(600, 110));
    cisimK.fillColor = '#000fff';

// Set the content of the text item:
    switch (sira){
        case 0:
            aciklama.content = 'Dik kare prizma';
            break;
        case 2:
            aciklama.content = 'Paralelkenar prizma';
            break;
        case 3:
            aciklama.content = 'Dikdörtgenler prizması';
            break;
        case 4:
            aciklama.content = 'Eşkenar dörtgen prizma';
            break;

    }
    cisimT.opacity=0;
    cisimK.opacity=0;


    //$("#aciklama").html(metin).animate({opacity:0},500).animate({opacity:1},500);
    cisimT.content="Cisim köşegeni";
    cisimK.content="Yüzey köşegeni";

    animationHelper.animate({
        style:{
            opacity:1
        },
        duration:1000,
        delay:bekleme+1000,

        update:function(){

            cizgi.opacity=animationHelper.opacity;
            //$("#aciklama").css({opacity:1-animationHelper.opacity});
            cisimT.opacity=animationHelper.opacity;
        },
        callback: function(){

            animationHelper.opacity=0;

            animationHelper.animate({
                style:{
                    opacity:1
                },
                duration:1000,
                delay:1000,


                update:function(){

                    cizgi2.opacity=animationHelper.opacity;
                    cisimK.opacity=animationHelper.opacity;
                },
                callback:function(){

                    animationHelper.opacity=1;
                    animationHelper.animate({
                        style:{
                            opacity:0
                        },
                        duration:1000,
                        delay:2000,


                        update:function(){
                            if(sira!=5)
                                Main.animationProject.activeLayer.opacity=animationHelper.opacity;
                                cisimK.opacity=animationHelper.opacity;
                                cisimT.opacity=animationHelper.opacity;


                        },
                        callback:function(){
                            if(sira!=5)
                                Main.animationProject.activeLayer.removeChildren();
                            Main.animationProject.activeLayer.opacity=1;

                            if(sira==0)
                                ciz("egikKare",350,90,"ornek",2);
                            else if(sira==2)
                                ciz("paralelKenar",350,90,"ornek",3);
                            else if(sira==3)
                                ciz("dikdortgen",350,90,"ornek",4);
                            else if(sira==4)
                                ciz("esKenar",350,90,"ornek",5);

                        }
                    });

                }
            });
        }
    });


}
;

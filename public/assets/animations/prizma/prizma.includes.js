function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
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
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        $(container).append("<div id='aciklama'>");
        $("#aciklama").css({
            position:"absolute",
            width:"120px",
            height:"20px",
            top:"0",
            bottom:"0",
            right:"100px",
            margin:"auto",
            opacity:"0"
        });

        ciz("dikKare",350,90,"ornek");
        //ciz("egikKare",350,90,"ornek",15000);

//        setTimeout(
//            function(){
//                //Main.animationProject.activeLayer.removeChildren();
//                ciz("egikKare",350,90,"ornek");
//            }
//
//            ,10000);
//setTimeout(
////            function(){
////                //Main.animationProject.activeLayer.removeChildren();
////                ciz("egikKare",350,90,"ornek");
////            }
////
////            ,10000);

//        cizgi=new Path.Line(new Point(270.5,149.5),new Point(332.5,87.5));
//        //cizgi=new Path.Line(new Point(0,149.5),new Point(100,87.5));
//        cizgi.strokeColor="red";

        Main.animationFinished(50000);





    }
}
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki prizmaların cisim köşegenlerini belirleyiniz. Bunun için ilgili köşelere basmanız gerekecek.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"40px",
            right:"40px",
            opacity:0


        });

        //$("input").attr("disabled",true);
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })

        //$(container).append("<div id='tiklama'>")
        $("#tiklama").css({
            position:"absolute",
            width:"100px",
            height:"20px",
            right:"50px",
            top:"100px"


        });

     /*   //ciz("dikKare");
        //ciz("egikKare");
        //ciz("dikdortgen");
        //ciz("paralelKenar");
        ciz("esKenar");
        //ciz("ucgen");*/

        sekiller=["dikKare","egikKare","dikdortgen","paralelKenar","esKenar","ucgen"];

        sayi=deger=Util.getShuffledArray(6);
        sira=0;





        tik="";
        tiklama=0;
        tool=new Tool();
        //tool.distanceThreshold = 100;
        Interaction.tiklama=onMouseDown;
        tool.onMouseDown=Interaction.tiklama;
        tool.onMouseUp=onMouseUp;

        if( navigator.platform.indexOf("Win") >-1 || navigator.platform.indexOf("Mac") >-1 || navigator.platform.indexOf("Linux") >-1){
            if( navigator.platform != 'Linux armv6l' && navigator.platform != 'Linux armv7l')
                tool.onMouseMove=onMouseMove;
        }



        birinciTiklama="";
        ikinciTiklama="";
        kosegen="";
        hata=0;
        dogru=0;

        var idler=["nokta00","nokta01","nokta02","nokta03","nokta10","nokta11","nokta12","nokta13"];

        Interaction.dogruNoktalar=[];
        function onMouseDown(event) {
            if(event.item){

                if(event.item.class=="nokta"){
                    console.log(event.item);
                    Interaction.setStatus('',true);
                    if(tiklama==0){
                        event.item.opacity=1;
                        event.item.fillColor="yellow";
                        tik = new Path(event.item.position);

                        birinciTiklama=event.item;

                        $("#tiklama").html("Birinci Tıklama: "+tiklama+" . "+birinciTiklama.myId);
                        tiklama++;

                    }
                    else if(tiklama==1){
                        ikinciTiklama=event.item;
                        if(birinciTiklama.myId!=ikinciTiklama.myId){


                            switch (birinciTiklama.myId){
                                case "nokta00":
                                    kosegen="nokta11"
                                    break;
                                case "nokta01":
                                    kosegen="nokta10"
                                    break;
                                case "nokta02":
                                    kosegen="nokta13"
                                    break;
                                case "nokta03":
                                    kosegen="nokta12"
                                    break;
                                case "nokta10":
                                    kosegen="nokta01"
                                    break;
                                case "nokta11":
                                    kosegen="nokta00"
                                    break;
                                case "nokta12":
                                    kosegen="nokta03"
                                    break;
                                case "nokta13":
                                    kosegen="nokta02"
                                    break;

                            }

                            if(ikinciTiklama.myId==kosegen){
                                event.item.fillColor="yellow";
                                tik.add(event.item.position)
                                tik.strokeColor = 'green';
                                tiklama++;
                                console.log("ikinci tıklama "+tiklama+" . "+event.item.myid);
                                $("#tiklama").html("ikinci tıklama "+tiklama+" . "+event.item.myId);
                                Interaction.dogruNoktalar.push(birinciTiklama.myId);
                                Interaction.dogruNoktalar.push(ikinciTiklama.myId);
                                console.log("ok");
                                dogru++
                                if(dogru<4){
                                    Interaction.setStatus('Doğru; şimdi diğer cisim köşegenini belirleyiniz.',true);

                                    birinciTiklama.opacity=0.1;
                                    ikinciTiklama.opacity=0.1;
                                }
                                else if(dogru==4){
                                    Interaction.setStatus('Doğru; cisim köşegenlerinin tamamını buldunuz.',true);
                                    birinciTiklama.opacity=0.1;
                                    ikinciTiklama.opacity=0.1;
                                    dogru=0;
                                    tool.onMouseDown=null;
                                    $(".next_button").css("opacity","1").attr("disabled",false);


                                }


                            }
                            else{


                                birinciTiklama.opacity=0.1;
                                ikinciTiklama.opacity=0.1;
                                birinciTiklama=null;
                                ikinciTiklama=null;
                                tiklama=0;
                                hata++;

                                if(hata==2){
                                    tool.onMouseDown=null;
                                    Interaction.setStatus('Bulamadın; cisim köşegenleri yukarıda belirtilmiştir.',false);
                                    $(".next_button").css("opacity","1").attr("disabled",false);
                                    hata=0;
                                    console.log("koordinat 2");
                                    console.log(koordinat);
                                    if(Interaction.dogruNoktalar.indexOf("nokta00")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][0].x,koordinat[0][0].y),new Point(koordinat[1][1].x,koordinat[1][1].y));
                                        cizgi.strokeColor="red";
                                        console.log("if 1");
                                    }
                                    if(Interaction.dogruNoktalar.indexOf("nokta01")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][1].x,koordinat[0][1].y),new Point(koordinat[1][0].x,koordinat[1][0].y));
                                        cizgi.strokeColor="red";
                                        console.log("if 2");
                                    }
                                    if(Interaction.dogruNoktalar.indexOf("nokta02")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][2].x,koordinat[0][2].y),new Point(koordinat[1][3].x,koordinat[1][3].y));
                                        cizgi.strokeColor="red";
                                        console.log("if 3");
                                    }
                                    if(Interaction.dogruNoktalar.indexOf("nokta03")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][3].x,koordinat[0][3].y),new Point(koordinat[1][2].x,koordinat[1][2].y));
                                        cizgi.strokeColor="red";
                                        console.log("if 4");
                                    }
                                }
                                else{
                                    Interaction.setStatus('Bu cisim köşegeni değil; lütfen tekrar deneyin.',false)
                                }
                            }

                        }
                        else if(birinciTiklama.myId==event.item.myId){
                            tiklama++;
                            birinciTiklama=null;
                            console.log(birinciTiklama)
                            event.item.opacity=0;

                        }
                    }

                }
            }
        }

        function onMouseUp(){
            if(tiklama==2)
                tiklama=0;

        }


        item=[];
        colors=[];
        var firstBox;
        var hitOptions = {
            //segments: true,
            //stroke: true,
            fill: true,
            tolerance: 10

        };
        function onMouseMove(event) {
            firstBox = null;
            var hitResult = project.hitTest(event.point, hitOptions);
            project.activeLayer.selected = false;
            if (hitResult && hitResult.item){
                if(event.item){
                    if(event.item.class=="nokta"){
                        //hitResult.item.selected = true;
                        console.log(hitResult.item);
                        $(Interaction.container).css("cursor","pointer");
                        firstBox = hitResult.item;

                    }
                    else{
                        $(Interaction.container).css("cursor","default");
                }

            }


            }


        }


        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.button.className="next_button";
        Interaction.button.onclick=Interaction.prepareNextQuestion;
        Main.interactionProject.activeLayer.removeChildren();
        tool.onMouseDown=Interaction.tiklama;
        Interaction.dogruNoktalar=[];
        $(".next_button").css("opacity","0").attr("disabled",true);

        birinciTiklama="";
        ikinciTiklama="";
        kosegen="";
        hata=0;
        dogru=0;
        tiklama=0;
        
        var cizilecek=sekiller[sayi[sira]];
        //var cizilecek=sekiller[0];
        ciz(cizilecek);
        sira++;
        if(sira==5)
            sira=0;

        if(cizilecek=="ucgen"){
            tool.onMouseDown=null;
            Interaction.setStatus('Üçgen prizmanın cisim köşegeni yoktur.',true);
            setTimeout(function(){$(".next_button").css("opacity","1").attr("disabled",false)},5000);
        }

       //ciz("dikKare");
        //ciz("egikKare");
        //ciz("dikdortgen");
        //ciz("paralelKenar");
        //ciz("esKenar");
        //ciz("ucgen");


    },

	preCheck : function(){


    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
;





function dikdortgenCiz(){


    var a=1
    while(a%2!=0)
        a=Math.floor(Math.random()*24+1);

    var b=1
    while(b%2!=0)
        b=Math.floor(Math.random()*19+1);

    var dikeyOrta=(300-b*10)/2;

    var point = new Point(50, dikeyOrta);
    var size = new Size(a*10, b*10);
    var rectangle = new Rectangle(point, size);
    var path = new Path.Rectangle(rectangle);
    path.strokeColor = 'black';

    console.log("a: "+a+", b: "+b);



    // a
    var aX=a*10/2+35;
    var aY=dikeyOrta+(b*10)+20;
    var aText=new PointText(aX,aY);
    aText.content=a+" cm";
    aText.fillColor="black";

    //b
    var bX=a*10+60;
    var bY=dikeyOrta+b*10/2;
    var bText=new PointText(bX,bY);
    bText.content=b+" cm";
    bText.fillColor="black";

    var soruMetni="Dikdörtgenin uzun kenarının kısa kenarına oranı";

    if(a>b)
        var bilgiler=[soruMetni,a,b];
    else
        var bilgiler=[soruMetni,b,a];



    //bilgiler.sort();
    console.log(bilgiler);
    return bilgiler;


}

function ucgenCiz(){
    // a noktası
    var aX=1
    while(aX%2!=0)
        aX=Math.floor(Math.random()*15+10);

    var aY=1
    while(aY%2!=0)
        aY=Math.floor(Math.random()*5+5);
    aX=aX*10;
    aY=aY*10;

    // b noktası
    var bX=1
    while(bX%2!=0)
        bX=Math.floor(Math.random()*10+5);

    var bY=1
    while(bY%2!=0)
        bY=Math.floor(Math.random()*5+15);
    bX=bX*10;
    bY=bY*10;

    // c noktası
    var cX=1
    var cD=30-bX/10;
    while(cX%2!=0)
        cX=Math.floor(Math.random()*5+25);
        //cX=Math.floor(Math.random()*cD+bX/10);

    console.log("bX: "+bX/10+", "+"cD: "+cD+", cX: "+cX);

    var cY=1
    while(cY%2!=0)
        cY=Math.floor(Math.random()*5+15);
    cX=cX*10;
    cY=cY*10;

    console.log("bX: "+bX/10+", "+"cD: "+cD+", cX: "+cX);
    var p1= new Point(aX, aY);
    var p2= new Point(bX, bY);
    var p3=new Point(cX,cY);

    ucgen=new Path.Triangle(p1,p2,p3);
    ucgen.strokeColor="black";
    ucgen.strokeWidth=1;


    var tabanUzunlugu=p2.getDistance(p3);
    var yukseklikKoordinat=p1.projectToLine(p2,p3);

    var yLine=new Path.Line(p1,yukseklikKoordinat);
    yLine.strokeColor="red";

//    var pY=new Path.Circle(yukseklikKoordinat.x,yukseklikKoordinat.y,2);
//    pY.fillColor="black";

    var yukseklik=p1.getDistance(yukseklikKoordinat);

    tabanUzunlugu=Math.floor(tabanUzunlugu/10);
    tabanUzunlugu=tabanUzunlugu%2==0?tabanUzunlugu:tabanUzunlugu+1;
    yukseklik=Math.floor(yukseklik/10)
    yukseklik=yukseklik%2==0?yukseklik:yukseklik+1;


    var yukseklikT=new PointText(aX+10,(aY+yukseklik*5));
    yukseklikT.content=yukseklik+" cm";
    yukseklikT.fillColor="red";

    var tabanText=new PointText((cX-bX)/2+bX,cY+30);
    tabanText.content=tabanUzunlugu+" cm";
    tabanText.fillColor="black";

    console.log("taban: "+tabanUzunlugu+" ,yukseklik: "+yukseklik);

    var soruMetni="Üçgenin tabanının yüksekliğine oranı";

    var bilgiler=[soruMetni,tabanUzunlugu,yukseklik];

    //bilgiler.sort();
    console.log(bilgiler);
    return bilgiler;

}

function paralelKenarCiz(){

    var egim=Math.floor(Math.random()*10)<=5?40:(-40);
    var altY=200;
    // yükseklik
    var yukseklik=1;
    while(yukseklik%2!=0)
        yukseklik=Math.floor(Math.random()*15+5);

    // taban
    var taban=1
    while(taban%2!=0)
        taban=Math.floor(Math.random()*10+5);

    // test
    //yukseklik=14;
    //taban=6;

    yukseklik=yukseklik*10;
    taban=taban*10;

    var aX=150-taban/2+20;
    var bX=150+taban/2+20;

    var ab=new Path.Line(new Point(aX,200),new Point(bX,200));
    ab.strokeColor="black";

    var cX=bX+egim;
    var cY=altY-yukseklik;

    var dX=aX+egim;
    var dY=altY-yukseklik;

    var ad=new Path.Line(new Point(aX,altY),new Point(dX,dY));
    ad.strokeColor="black";

    var bc=new Path.Line(new Point(bX,altY),new Point(cX,cY));
    bc.strokeColor="black";

    var cd=new Path.Line(new Point(cX,cY),new Point(dX,dY));
    cd.strokeColor="black";

   var yukseklikT="";

    var yukseklikCizgisi=new Path.Line(new Point(cX,cY),new Point(cX,altY));
    yukseklikCizgisi.strokeColor="red";

    if(egim>0){
        var kesikCizgi=new Path.Line(new Point(bX,altY),new Point(cX,altY));
        kesikCizgi.strokeColor="black";
        kesikCizgi.dashArray=[3,2];
        yukseklikT=new PointText(bX+50,altY-yukseklik/2);
    }
    else
        yukseklikT=new PointText(bX,altY-yukseklik/2);

    //yukseklikT= new PointText(bX+20,altY-yukseklik/2);
    yukseklikT.content=yukseklik/10+" cm";
    yukseklikT.fillColor="red";

    var tabanT= new PointText(aX+(bX-aX)/2-20,altY+20);
    tabanT.content=taban/10+" cm";
    tabanT.fillColor="black";


    console.log("taban: "+taban+", yükseklik: "+yukseklik+", aX: "+aX);



    console.log("taban: "+taban+" ,yukseklik: "+yukseklik);

    var soruMetni="Paralel kenarın tabanının yüksekliğine oranı";

    var bilgiler=[soruMetni,taban/10,yukseklik/10];

    //bilgiler.sort();
    console.log(bilgiler);
    return bilgiler;
}

function yamukCiz(){

    var taban=1;
    while(taban%2!=0)
        taban=Math.floor(Math.random()*20+10);

    var yukseklik=1;
    while(yukseklik%2!=0)
        yukseklik=Math.floor(Math.random()*15+5);

    taban=taban*10;
    yukseklik=yukseklik*10;

    console.log("taban: "+taban+", yukseklik: "+yukseklik);

    var aY=(200-yukseklik)/2+yukseklik+10;
    var aX=(300-taban)/2+50;
    var egimA=Math.floor(Math.random()*8)*10;

    console.log(taban+", "+yukseklik+", "+aX+", "+aY)

    var bX=aX+taban;
    var bY=aY
    var egimB=egimB==0?Math.floor(Math.random()*5+3)*10:Math.floor(Math.random()*5)*10;


    var aB=new Path.Line(new Point(aX,aY),new Point(bX,bY));
    aB.strokeWidth=1;
    aB.strokeColor="black";

//    var center = new Point(aX,aY)
//    var ustKose = center.add(100,0);
//    ustKose = ustKose.getRotatedPoint(-80,center);



    var dX=aX+egimA;
    var dY=aY-yukseklik;

    egimliNokta=new Point(dX,dY);

     aD=new Path.Line(new Point(aX,aY),egimliNokta);
    //aD=new Path.Line(center,ustKose);
//    aD.getRotatedPoint(30)
    aD.strokeColor="black";
    aD.strokeWidth=1;


    var paralellikSecimi=Math.floor(Math.random()*10);


        var cX=bX-egimB;
        var cY=dY;



    var bD=new Path.Line(new Point(bX,bY),new Point(cX,cY))
    bD.strokeColor="black";
    bD.strokeWidth=1;

    var dC=new Path.Line(new Point(dX,dY),new Point(cX,cY))
    dC.strokeColor="black";
    dC.strokeWidth=1;


    var yukseklikT="";

    var yukseklikCizgisi=new Path.Line(new Point(dX,dY),new Point(dX,aY));
    yukseklikCizgisi.strokeColor="red";
    yukseklikT=new PointText(dX+20,aY-yukseklik/2);

    //yukseklikT= new PointText(bX+20,altY-yukseklik/2);
    yukseklikT.content=yukseklik/10+" cm";
    yukseklikT.fillColor="red";

    var tabanT= new PointText(aX+(bX-aX)/2-20,aY+20);
    tabanT.content=taban/10+" cm";
    tabanT.fillColor="black";


    console.log("taban: "+taban+" ,yukseklik: "+yukseklik);

    var soruMetni="Yamuğun tabanının yüksekliğine oranı";

    var bilgiler=[soruMetni,taban/10,yukseklik/10];

    //bilgiler.sort();
    console.log(bilgiler);
    return bilgiler;


/*
    yardimCizgiY= new Path.Line(new Point(50,100),new Point(350,100))
    yardimCizgiY.strokeWidth=1;
    yardimCizgiY.strokeColor="red"

    yardimCizgiD= new Path.Line(new Point(200,00),new Point(200,200))
    yardimCizgiD.strokeWidth=1;
    yardimCizgiD.strokeColor="red"*/

}

function yeniSoru(siradakiSoru){
    var soru;

    switch (siradakiSoru){
        case 0:
            soru=dikdortgenCiz();
            console.log("Dikdortgen");
            console.log(soru);
            break;

        case 1:
            soru=ucgenCiz();
            console.log("Üçgen");
            console.log(soru);
            break;

        case 2:
            soru=paralelKenarCiz();
            console.log("Paralel Kenar");
            console.log(soru);
            break;

        case 3:
            soru=yamukCiz();
            console.log("Yamuk");
            console.log(soru);
            break;
    }
    kontrol(soru);

}

function kontrol(soru){
    console.log("Kontrol")
    console.log(soru)

    var sonuc=soru[1]/soru[2];
    var sonucArray=sonuc.toString().split(".");
    console.log(soru[1]+", "+soru[2]);
    if(sonucArray[1]){
        if(sonucArray[1].length>2){
            Main.interactionProject.activeLayer.removeChildren();
            yeniSoru(Interaction.siradakiSoru);
            console.log("tekrar");
        }
        else{
            Interaction.soru=soru;
            console.log("Kontrol SOru")
            console.log(Interaction.soru)
        }
    }
    else{
        Interaction.soru=soru;
        console.log("Kontrol SOru")
        console.log(Interaction.soru)
    }

}
;

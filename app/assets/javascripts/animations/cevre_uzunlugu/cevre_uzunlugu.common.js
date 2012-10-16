Dikdortgen=function (){

    // şekil Çiziliyor.
    var a=1
    while(a%2!=0)
        a=Math.floor(Math.random()*24+1);

    var b=1
    while(b%2!=0)
        b=Math.floor(Math.random()*14+1);

    var dikeyOrta=(210-b*10)/2;
    var yatayOrta=(430-a*10)/2;

    var point = new Point(yatayOrta, dikeyOrta);
    var size = new Size(a*10, b*10);
    var rectangle = new Rectangle(point, size);
    var path = new Path.Rectangle(rectangle);
    path.strokeColor = 'black';

    console.log("a: "+a+", b: "+b);

    this.kenarlar=[a,b,a,b];


    var yaziGrup=new Group();

    // a-b
    var abX=yatayOrta+a*10/2;
    var abY=dikeyOrta+(b*10)+20;
    var abText=new PointText(abX,abY);
    abText.content=a+" cm";
    abText.paragraphStyle.justification="center";
    abText.fillColor="black";
    yaziGrup.addChild(abText);


    //b-c
    var bcX=yatayOrta+a*10+10
    var bcY=dikeyOrta+b*10/2+5;
    var bcText=new PointText(bcX,bcY);
    bcText.content=b+" cm";
    bcText.fillColor="black";
    yaziGrup.addChild(bcText);

    //c-d
    var cdX=yatayOrta+a*10/2
    var cdY=dikeyOrta-10;
    var cdText=new PointText(cdX,cdY);
    cdText.paragraphStyle.justification="center";
    cdText.content=a+" cm";
    cdText.fillColor="black";
    yaziGrup.addChild(cdText);

    //d-a
    var daX=yatayOrta-10
    var daY=dikeyOrta+b*10/2+5;
    var daText=new PointText(daX,daY);
    daText.paragraphStyle.justification="right";
    daText.content=b+" cm";
    daText.fillColor="black";
    yaziGrup.addChild(daText);


    var gosteriSecimi=Math.floor(Math.random()*3+1);
    //gosteriSecimi=4;
    switch (gosteriSecimi){
        case 1:
            abText.opacity=0;
            daText.opacity=0;

            bcText.opacity=1;
            cdText.opacity=1;

            abText.fillColor="red";
            daText.fillColor="red";
            break;
        case 2:
            abText.opacity=1;
            daText.opacity=1;

            bcText.opacity=0;
            cdText.opacity=0;

            bcText.fillColor="red";
            cdText.fillColor="red";
            break;
        case 3:
            daText.opacity=0;
            cdText.opacity=0;

            abText.opacity=1;
            bcText.opacity=1;

            daText.fillColor="red";
            cdText.fillColor="red";
            break;
        case 4:
            daText.opacity=1;
            cdText.opacity=1;

            abText.opacity=0;
            bcText.opacity=0;

            abText.fillColor="red";
            bcText.fillColor="red";
            break;

    }

    this.yazilar=yaziGrup;
    this.yazilariGoster=yaziGoster;
    this.cevap=(a*2)+(b*2);
    this.cevapGoster=cevapGoster;

}
function yaziGoster(){
    for(var i=0;i<this.yazilar.children.length;i++)
        this.yazilar.children[i].opacity=1;
}
SekilL1=function(){

    var stil={strokeColor:"black"};

    ab=parseInt(Math.floor(Math.random()*9+9)*10,10);
    bc=parseInt(Math.floor(Math.random()*20+10)*10,10);
    cd=parseInt(Math.floor(Math.random()*5+2)*10,10);
    de=parseInt(Math.floor(Math.random()*7+3)*10,10);

    ortaNokta=new Point();
    ortaNokta.y=ab/2;
    ortaNokta.x=bc/2;

    a=new Point(0,0);
    b=new Point(0,ab);
    c=new Point(bc,ab);
    d=new Point(bc,ab-cd);
    e=new Point(bc-de,ab-cd);
    f=new Point(bc-de,0);



    var noktalar = [a,b,c,d,e,f];


    var interactionCenterPoint = new Point(220,110);

    var ortaNokta=Util.centerOfPoints(noktalar);

    var path = new Path();
    path.set_style(stil);
    for(var i=0;i<noktalar.length;i++){
        //noktalar[i] = noktalar[i].getRotatedPoint(donmeDerecesi,ortaNokta);
        path.add(noktalar[i]);
        //noktalar[i].showOnCanvas(i+3)
    }
    path.closed = true;
    //Util.centerOfPoints(noktalar).showOnCanvas(5)
    path.position = path.position.add(interactionCenterPoint.subtract(ortaNokta));
    console.log(path);
    console.log(path.segments[0]);


            // a
            var aX=path.segments[1].point.x-10;
            var aY=path.segments[0].point.y+ab/2+10;
            var aText=new PointText(aX,aY);
            aText.paragraphStyle.justification="right";
            aText.content=ab+" m";
            aText.fillColor="black";



            // b
            var bX=path.segments[1].point.x+bc/2;
            var bY=path.segments[1].point.y+20;
            var bText=new PointText(bX,bY);
            bText.paragraphStyle.justification="center";
            bText.content=bc+" m";
            bText.fillColor="black";

            // c
            var cX=path.segments[2].point.x+5;
            var cY=path.segments[2].point.y-cd/2;
            var cText=new PointText(cX,cY);
            cText.paragraphStyle.justification="left";
            cText.content=cd+" m";
            cText.fillColor="black";

            // d
            var dX=path.segments[4].point.x+de/2;
            var dY=path.segments[4].point.y-5;
            var dText=new PointText(dX,dY);
            dText.paragraphStyle.justification="center";
            dText.content=de+" m";
            dText.fillColor="black";

            // e
            ef=path.segments[4].point.y-path.segments[5].point.y;
            var eX=path.segments[5].point.x+5;
            var eY=path.segments[5].point.y+ef/2;
            var eText=new PointText(eX,eY);
            eText.paragraphStyle.justification="left";
            eText.content=ef+" m";
            eText.fillColor="black";

            // f
            fa=path.segments[5].point.x-path.segments[0].point.x;
            var fX=path.segments[0].point.x+fa/2;
            var fY=path.segments[0].point.y-5;
            var fText=new PointText(fX,fY);
            fText.paragraphStyle.justification="center";
            fText.content=fa+" m";
            fText.fillColor="black";



    var yaziGrup=new Group();
    yaziGrup.addChild(aText);
    yaziGrup.addChild(bText);
    yaziGrup.addChild(cText);
    yaziGrup.addChild(dText);
    yaziGrup.addChild(eText);
    yaziGrup.addChild(fText);

    var gosterimSecimi=Math.floor(Math.random()*3+1);

    //gosterimSecimi=3;
    switch (gosterimSecimi){
        case 1:
            aText.opacity=1;
            bText.opacity=1;
            cText.opacity=1;
            dText.opacity=1;

            eText.opacity=0;
            fText.opacity=0;

            eText.fillColor="red";
            fText.fillColor="red";

            break;

        case 2:
            aText.opacity=1;
            bText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            cText.opacity=0;
            dText.opacity=0;

            cText.fillColor="red";
            dText.fillColor="red";

            break;

        case 3:
            cText.opacity=1;
            dText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            aText.opacity=0;
            bText.opacity=0;

            aText.fillColor="red";
            bText.fillColor="red";

            break;
    }

    this.kenarlar=[ab,bc,cd,de,ef,fa];
    this.yazilar=yaziGrup;

    this.cevap=ab+bc+cd+de+ef+fa;
    this.yazilariGoster=yaziGoster;
    this.cevapGoster=cevapGoster;


}

SekilL2=function(){

    var stil={strokeColor:"black"};

    ab=parseInt(Math.floor(Math.random()*5+2)*10,10);
    bc=parseInt(Math.floor(Math.random()*20+10)*10,10);
    cd=parseInt(Math.floor(Math.random()*9+9)*10,10);
    de=parseInt(Math.floor(Math.random()*7+3)*10,10);
    ef=parseInt(cd-ab,10);
    fa=parseInt(bc-de,10);

    ortaNokta=new Point();
    ortaNokta.y=cd/2;
    ortaNokta.x=bc/2;


    a=new Point(0,ef);
    b=new Point(0,cd);
    c=new Point(bc,cd);
    d=new Point(bc,0);
    e=new Point(fa,0);
    f=new Point(fa,ef);



    var noktalar = [a,b,c,d,e,f];


    var interactionCenterPoint = new Point(220,120);

    var ortaNokta=Util.centerOfPoints(noktalar);

    var path = new Path();
    path.set_style(stil);
    for(var i=0;i<noktalar.length;i++){
        noktalar[i] = noktalar[i].getRotatedPoint(0,ortaNokta);
        path.add(noktalar[i]);
        //noktalar[i].showOnCanvas(i+3)
    }
    path.closed = true;
    //Util.centerOfPoints(noktalar).showOnCanvas(5)
    path.position = path.position.add(interactionCenterPoint.subtract(ortaNokta));
    console.log(path);
    console.log(path.segments[0]);


    // a
    var aX=path.segments[1].point.x-10;
    var aY=path.segments[0].point.y+ab/2+10;
    var aText=new PointText(aX,aY);
    aText.paragraphStyle.justification="right";
    aText.content=ab+" m";
    aText.fillColor="black";



    // b
    var bX=path.segments[1].point.x+bc/2;
    var bY=path.segments[1].point.y+20;
    var bText=new PointText(bX,bY);
    bText.paragraphStyle.justification="center";
    bText.content=bc+" m";
    bText.fillColor="black";

    // c
    var cX=path.segments[2].point.x+5;
    var cY=path.segments[2].point.y-cd/2;
    var cText=new PointText(cX,cY);
    cText.paragraphStyle.justification="left";
    cText.content=cd+" m";
    cText.fillColor="black";

    // d
    var dX=path.segments[4].point.x+de/2;
    var dY=path.segments[4].point.y-5;
    var dText=new PointText(dX,dY);
    dText.paragraphStyle.justification="center";
    dText.content=de+" m";
    dText.fillColor="black";

    // e
    //ef=path.segments[4].point.y-path.segments[5].point.y;
    var eX=path.segments[4].point.x-5;
    var eY=path.segments[4].point.y+ef/2;
    var eText=new PointText(eX,eY);
    eText.paragraphStyle.justification="right";
    eText.content=ef+" m";
    eText.fillColor="black";

    // f
    //fa=path.segments[5].point.x-path.segments[0].point.x;
    var fX=path.segments[5].point.x-fa/2;
    var fY=path.segments[5].point.y-5
    var fText=new PointText(fX,fY);
    fText.paragraphStyle.justification="center";
    fText.content=fa+" m";
    fText.fillColor="black";



    var yaziGrup=new Group();
    yaziGrup.addChild(aText);
    yaziGrup.addChild(bText);
    yaziGrup.addChild(cText);
    yaziGrup.addChild(dText);
    yaziGrup.addChild(eText);
    yaziGrup.addChild(fText);

    var gosterimSecimi=Math.floor(Math.random()*3+1);

    //gosterimSecimi=3;
    switch (gosterimSecimi){
        case 1:
            aText.opacity=1;
            bText.opacity=1;
            cText.opacity=1;
            dText.opacity=1;

            eText.opacity=0;
            fText.opacity=0;

            eText.fillColor="red";
            fText.fillColor="red";

            break;

        case 2:
            aText.opacity=1;
            bText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            cText.opacity=0;
            dText.opacity=0;

            cText.fillColor="red";
            dText.fillColor="red";

            break;

        case 3:
            cText.opacity=1;
            dText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            aText.opacity=0;
            bText.opacity=0;

            aText.fillColor="red";
            bText.fillColor="red";

            break;
    }


    this.kenarlar=[ab,bc,cd,de,ef,fa];
    this.yazilar=yaziGrup;

    this.cevap=ab+bc+cd+de+ef+fa;
    this.yazilariGoster=yaziGoster;
    this.cevapGoster=cevapGoster;


}

SekilL3=function(){

    var stil={strokeColor:"black"};

    ab=parseInt(Math.floor(Math.random()*9+9)*10,10);//
    bc=parseInt(Math.floor(Math.random()*5+2)*10,10);//
    cd=parseInt(Math.floor(Math.random()*7+3)*10,10);

    ef=parseInt(ab-cd,10);
    fa=parseInt(Math.floor(Math.random()*20+10)*10,10);
    de=parseInt(fa-bc,10);

    ortaNokta=new Point();
    ortaNokta.y=cd/2;
    ortaNokta.x=bc/2;


    a=new Point(0,0);
    b=new Point(0,ab);
    c=new Point(bc,ab);
    d=new Point(bc,ab-cd);
    e=new Point(fa,ab-cd);
    f=new Point(fa,0);



    var noktalar = [a,b,c,d,e,f];


    var interactionCenterPoint = new Point(220,120);

    var ortaNokta=Util.centerOfPoints(noktalar);

    var path = new Path();
    path.set_style(stil);
    for(var i=0;i<noktalar.length;i++){
        noktalar[i] = noktalar[i].getRotatedPoint(0,ortaNokta);
        path.add(noktalar[i]);
        //noktalar[i].showOnCanvas(i+3)
    }
    path.closed = true;
    //Util.centerOfPoints(noktalar).showOnCanvas(5)
    path.position = path.position.add(interactionCenterPoint.subtract(ortaNokta));
    console.log(path);
    console.log(path.segments[0]);


    // a
    var aX=path.segments[1].point.x-10;
    var aY=path.segments[0].point.y+ab/2+10;
    var aText=new PointText(aX,aY);
    aText.paragraphStyle.justification="right";
    aText.content=ab+" m";
    aText.fillColor="black";



    // b
    var bX=path.segments[1].point.x+bc/2;
    var bY=path.segments[1].point.y+20;
    var bText=new PointText(bX,bY);
    bText.paragraphStyle.justification="center";
    bText.content=bc+" m";
    bText.fillColor="black";

    // c
    var cX=path.segments[2].point.x+5;
    var cY=path.segments[2].point.y-cd*1/3;
    var cText=new PointText(cX,cY);
    cText.paragraphStyle.justification="left";
    cText.content=cd+" m";
    cText.fillColor="black";

    // d
    var dX=path.segments[3].point.x+de/2;
    var dY=path.segments[3].point.y+20;
    var dText=new PointText(dX,dY);
    dText.paragraphStyle.justification="center";
    dText.content=de+" m";
    dText.fillColor="black";

    // e
    //ef=path.segments[4].point.y-path.segments[5].point.y;
    var eX=path.segments[4].point.x+5;
    var eY=path.segments[4].point.y-ef/2;
    var eText=new PointText(eX,eY);
    eText.paragraphStyle.justification="left";
    eText.content=ef+" m";
    eText.fillColor="black";

    // f
    //fa=path.segments[5].point.x-path.segments[0].point.x;
    var fX=path.segments[5].point.x-fa/2;
    var fY=path.segments[5].point.y-5
    var fText=new PointText(fX,fY);
    fText.paragraphStyle.justification="center";
    fText.content=fa+" m";
    fText.fillColor="black";



    var yaziGrup=new Group();
    yaziGrup.addChild(aText);
    yaziGrup.addChild(bText);
    yaziGrup.addChild(cText);
    yaziGrup.addChild(dText);
    yaziGrup.addChild(eText);
    yaziGrup.addChild(fText);

    var gosterimSecimi=Math.floor(Math.random()*3+1);

    //gosterimSecimi=3;
    switch (gosterimSecimi){
        case 1:
            aText.opacity=1;
            bText.opacity=1;
            cText.opacity=1;
            dText.opacity=1;

            eText.opacity=0;
            fText.opacity=0;

            eText.fillColor="red";
            fText.fillColor="red";

            break;

        case 2:
            aText.opacity=1;
            bText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            cText.opacity=0;
            dText.opacity=0;

            cText.fillColor="red";
            dText.fillColor="red";

            break;

        case 3:
            cText.opacity=1;
            dText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            aText.opacity=0;
            bText.opacity=0;

            aText.fillColor="red";
            bText.fillColor="red";

            break;
    }


    this.kenarlar=[ab,bc,cd,de,ef,fa];
    this.yazilar=yaziGrup;

    this.cevap=ab+bc+cd+de+ef+fa;
    this.yazilariGoster=yaziGoster;
    this.cevapGoster=cevapGoster;


}

SekilL4=function(){

    var stil={strokeColor:"black"};

    fa=parseInt(Math.floor(Math.random()*20+10)*10,10);
    ef=parseInt(Math.floor(Math.random()*9+9)*10,10);
    de=parseInt(Math.floor(Math.random()*4+2)*10,10);
    cd=parseInt(Math.floor(Math.random()*6+3)*10,10);
    ab=parseInt(ef-cd,10);
    bc=parseInt(fa-de,10);

    ortaNokta=new Point();
    ortaNokta.y=ef/2;
    ortaNokta.x=fa/2;


    a=new Point(0,0);
    b=new Point(0,ab);
    c=new Point(bc,ab);
    d=new Point(bc,ef);
    e=new Point(fa,ef);
    f=new Point(fa,0);



    var noktalar = [a,b,c,d,e,f];


    var interactionCenterPoint = new Point(220,120);

    var ortaNokta=Util.centerOfPoints(noktalar);

    var path = new Path();
    path.set_style(stil);
    for(var i=0;i<noktalar.length;i++){
        noktalar[i] = noktalar[i].getRotatedPoint(0,ortaNokta);
        path.add(noktalar[i]);
        //noktalar[i].showOnCanvas(i+3)
    }
    path.closed = true;
    //Util.centerOfPoints(noktalar).showOnCanvas(5)
    path.position = path.position.add(interactionCenterPoint.subtract(ortaNokta));
    console.log(path);
    console.log(path.segments[0]);


    // a
    var aX=path.segments[1].point.x-10;
    var aY=path.segments[0].point.y+ab/2+10;
    var aText=new PointText(aX,aY);
    aText.paragraphStyle.justification="right";
    aText.content=ab+" m";
    aText.fillColor="black";



    // b
    var bX=path.segments[1].point.x+bc/2;
    var bY=path.segments[1].point.y+20;
    var bText=new PointText(bX,bY);
    bText.paragraphStyle.justification="center";
    bText.content=bc+" m";
    bText.fillColor="black";

    // c
    var cX=path.segments[2].point.x-5;
    var cY=path.segments[2].point.y+cd*2/3;
    var cText=new PointText(cX,cY);
    cText.paragraphStyle.justification="right";
    cText.content=cd+" m";
    cText.fillColor="black";

    // d
    var dX=path.segments[3].point.x+de/2;
    var dY=path.segments[3].point.y+20;
    var dText=new PointText(dX,dY);
    dText.paragraphStyle.justification="center";
    dText.content=de+" m";
    dText.fillColor="black";

    // e
    //ef=path.segments[4].point.y-path.segments[5].point.y;
    var eX=path.segments[4].point.x+5;
    var eY=path.segments[4].point.y-ef/2;
    var eText=new PointText(eX,eY);
    eText.paragraphStyle.justification="left";
    eText.content=ef+" m";
    eText.fillColor="black";

    // f
    //fa=path.segments[5].point.x-path.segments[0].point.x;
    var fX=path.segments[5].point.x-fa/2;
    var fY=path.segments[5].point.y-5
    var fText=new PointText(fX,fY);
    fText.paragraphStyle.justification="center";
    fText.content=fa+" m";
    fText.fillColor="black";



    var yaziGrup=new Group();
    yaziGrup.addChild(aText);
    yaziGrup.addChild(bText);
    yaziGrup.addChild(cText);
    yaziGrup.addChild(dText);
    yaziGrup.addChild(eText);
    yaziGrup.addChild(fText);

    var gosterimSecimi=Math.floor(Math.random()*3+1);

    //gosterimSecimi=3;
    switch (gosterimSecimi){
        case 1:
            aText.opacity=1;
            bText.opacity=1;
            cText.opacity=1;
            dText.opacity=1;

            eText.opacity=0;
            fText.opacity=0;

            eText.fillColor="red";
            fText.fillColor="red";

            break;

        case 2:
            aText.opacity=1;
            bText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            cText.opacity=0;
            dText.opacity=0;

            cText.fillColor="red";
            dText.fillColor="red";

            break;

        case 3:
            cText.opacity=1;
            dText.opacity=1;
            eText.opacity=1;
            fText.opacity=1;

            aText.opacity=0;
            bText.opacity=0;

            aText.fillColor="red";
            bText.fillColor="red";

            break;
    }


    this.kenarlar=[ab,bc,cd,de,ef,fa];
    this.yazilar=yaziGrup;

    this.cevap=ab+bc+cd+de+ef+fa;
    this.yazilariGoster=yaziGoster;
    this.cevapGoster=cevapGoster;


}



function cevapGoster(){
    var kenarlar="";
    for(var i=0; i<this.kenarlar.length;i++){
        if(i==this.kenarlar.length-1)
            kenarlar=kenarlar+""+this.kenarlar[i];
        else
            kenarlar=kenarlar+""+this.kenarlar[i]+" + ";
    }
    $("#cevap").html("Ç= "+kenarlar+" = "+this.cevap+" m").animate({opacity:1},1000);

}

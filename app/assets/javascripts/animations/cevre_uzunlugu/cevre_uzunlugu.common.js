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
SekilL=function(){

    var stil={strokeColor:"black"};
    var donmeDerecesi=0;

    switch (donmeDerecesi){
        case 0:
            ab=Math.floor(Math.random()*9+9)*10;
            bc=Math.floor(Math.random()*20+10)*10;
            cd=Math.floor(Math.random()*5+2)*10;
            de=Math.floor(Math.random()*7+3)*10;

            ortaNokta=new Point();
            ortaNokta.y=ab/2;
            ortaNokta.x=bc/2;
            break;
    }


//    a=new Point(0,0);
//    b=new Point(0,ab);
//    c=new Point(bc,ab);
//    d=new Point(bc,ab-cd);
//    e=new Point(bc-de,ab-cd);
//    f=new Point(bc-de,0);

//    var noktalar = [a,b,c,d,e,f];
    var noktalar=[new Point(0,0),
    new Point(0,ab),
    new Point(bc,ab),
    new Point(bc,ab-cd),
    new Point(bc-de,ab-cd),
    new Point(bc-de,0)]
    console.log(noktalar)

    var interactionCenterPoint = new Point(220,110);

    //var ortaNokta=Util.centerOfPoints(noktalar);

    var path = new Path();
    path.set_style(stil);
    for(var i=0;i<noktalar.length;i++){
        noktalar[i] = noktalar[i].getRotatedPoint(donmeDerecesi,ortaNokta);
        path.add(noktalar[i]);
//        noktalar[i].showOnCanvas(5)
    }
    path.closed = true;
//    Util.centerOfPoints(noktalar).showOnCanvas(5)
    path.position = path.position.add(interactionCenterPoint.subtract(ortaNokta));
    console.log(path);
    console.log(path.segments[0]);



    switch (donmeDerecesi){
        case 0:

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

            break;




    }

    var yaziGrup=new Group();
    yaziGrup.addChild(aText);
    yaziGrup.addChild(bText);
    yaziGrup.addChild(cText);
    yaziGrup.addChild(dText);
    yaziGrup.addChild(eText);
    yaziGrup.addChild(fText);

    var gosterimSecimi=Math.floor(Math.random()*3+1);

    gosterimSecimi=3;
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

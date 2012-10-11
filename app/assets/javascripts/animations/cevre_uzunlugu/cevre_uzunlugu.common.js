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

sekilL=function(){

    var a=new Point(50,10);
    var b=new Point(50,100);
    var c=new Point(100,200);
    var d=new Point(80,200);
    var e=new Point(50,10);
    var f=new Point(50,10);


}

function cevapGoster(){
    $("#cevap").html("Ç= "+this.cevap+" m").animate({opacity:1},1000);;

}

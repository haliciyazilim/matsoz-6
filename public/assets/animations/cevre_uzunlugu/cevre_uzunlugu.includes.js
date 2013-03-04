function InteractiveGrids(opt){
    this.id = InteractiveGrids.GetId();

    if (opt.rows) {
        this.rows = opt.rows;
    } else {
        this.rows = 8;
    }

    if (opt.cols) {
        this.cols = opt.cols;
    } else {
        this.cols = 8;
    }

    this.vertexLetters = opt.vertexLetters;

    this.size = opt.size;
    this.position = opt.position;
    this.style = opt.style;
    this.points = [];
    this.vertexes = [];
    this.circles = [];
    this.lines = [];
    for(var i=0; i<=this.rows; i++)
        this.lines.push(new Path.Line(
            this.position.add(0,this.size*i),
            this.position.add(this.size*this.cols,this.size*i)
        ).set_style(this.style));
    for(var i=0; i<=this.cols;i++)
        this.lines.push(new Path.Line(
            this.position.add(this.size*i,0),
            this.position.add(this.size*i,this.size*this.rows)
        ).set_style(this.style));

    for(var i=0;i<=this.rows;i++)
        for(var j=0;j<=this.cols;j++){
            var point = this.position.add(this.size*i,this.size*j);
            var circle = new Path.Circle(point,this.size*0.3);
            circle.set_style({
                fillColor:new RgbColor(1,1,1,0)
            });
            circle.class = "InteractiveGridCircles"+this.id;
            this.circles.push(circle);
        }
    return this;
}


InteractiveGrids.prototype.activateRemoveOnClick = function(){
    this.removeOnClick = true;
}


InteractiveGrids.prototype.removeShape = function(){
    this.path.remove();
    for(var i=0;i < this.vertexes.length; i++)
        this.vertexes[i].remove();
    this.vertexes = [];
    for(var i=0; i< this.points.length; i++){
        this.points[i].class = "InteractiveGridCircles"+this.id;
    }
    this.path.remove();
    this.disableDraw = false;
    this.points = [];
    this.createTool();
}
InteractiveGrids.prototype.drawShape = function(points){
    this.path = new Path();
    this.path.set_style(this.style).set_style({
        strokeWidth: 3,
        strokeCap : 'butt',
        strokeColor : '#000'
    });
    if(points){
        for(var i=0; i<points.length; i++){
            var point = points[i].multiply(this.size,this.size).add(this.position);
            this.points.push(point);
            this.path.add(point);
        }
        this.path.closed = true;
        this.appendVertexLetters();
    }

    return this;
}

InteractiveGrids.prototype.undo  = function(){
    if(this.path.closed == true){
        this.path.closed = false;
        this.disableDraw = false;
        return;
    }
    this.path.removeSegment(this.path.segments.length-1);
    this.points.pop();
    this.appendVertexLetters();
    var circle = this.vertexes.pop()
        circle.baseCircle.class = "InteractiveGridCircles"+this.id;
        circle.remove();

}

InteractiveGrids.prototype.appendVertexLetters = function(){
    if(this.vertexLetters == undefined)
        return;
    var vertexLetters = [];
    for(var i=0; i<this.vertexLetters.length; i++)
        vertexLetters.push(this.vertexLetters[i]);
    if(this.vertexPointTexts)
        for(var i=0;i < this.vertexPointTexts.length; i++)
            this.vertexPointTexts[i].remove();
    this.vertexPointTexts = [];
    var centerPoint = Util.centerOfPoints(this.points);
    for(var i=0; i< this.points.length ; i++){
        var pointText = new PointText(this.points[i].findPointTo(centerPoint,-13).add(0,6));
        pointText.content = vertexLetters.shift();
        pointText.set_style({
            fontSize:12,
            justification:'center',
            strokeWidth:2,
            strokeColor:'#000'
        })
        this.vertexPointTexts.push(pointText);
    }
}
InteractiveGrids.prototype.createTool = function(){
    var tool = new Tool();
    var self = this;
    this.disableDraw = false;
    tool.onMouseDown = function(event){
        if(self.removeOnClick == true){
            self.removeShape();
            return;
        }
        if(self.disableDraw == true)
            return;
        if(event.item && event.item.class == "InteractiveGridCircles"+self.id){

            event.item.set_style({
            })
            var circle = new Path.Circle(event.item.position,4).set_style({
                fillColor:new RgbColor(0.2,0.2,0.2),
                class:"SelectedGridCircles"+self.id
            });
            circle.baseCircle = event.item;
            self.vertexes.push(circle)
            self.path.add(event.item.position);
            event.item.class = "SelectedGridCircles"+self.id;
            event.item.opacity =1 ;
            self.points.push(event.item.position);
            event.item.insertAbove(self.path);
            self.appendVertexLetters();

        }
        else if(event.item && event.item.class == "SelectedGridCircles"+self.id && self.points.length > 2){
            self.path.closed = true;
            self.disableDraw = true;
        }
    }
    tool.activate();
    return this;
}
InteractiveGrids.CreateShape = function(type){
    var points = [];
    var multiply = new Point(1,1);
    var add = new Point(0,0);
    switch(type){

        case 0: //cesitkenar ucgen
            points.push(new Point(1,0));
            points.push(new Point(0,2));
            points.push(new Point(3,2));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 1: //eskenar ucgen
            points.push(new Point(0,2));
            points.push(new Point(2,2));
            points.push(new Point(1,0));
            var rand = Util.randomInteger(1,3);
            multiply = new Point(rand , rand);
            add = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5))
            break;

        case 2: //dik ucgen
            points.push(new Point(0,0));
            points.push(new Point(0,1));
            points.push(new Point(1,1));
            multiply = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5));
            add = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5))
            break;

        case 3: //dik ucgen
            points.push(new Point(1,1));
            points.push(new Point(1,0));
            points.push(new Point(0,1));
            multiply = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5));
            add = new Point(Util.randomInteger(1,5) , Util.randomInteger(1,5))
            break;

        case 4: //genis acili ucgen
            points.push(new Point(0,2));
            points.push(new Point(2,2));
            points.push(new Point(3,0));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 5://dikdortgen
            points.push(new Point(2,0));
            points.push(new Point(2,2));
            points.push(new Point(0,2));
            points.push(new Point(0,0));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 6://paralekenar
            points.push(new Point(0,0));
            points.push(new Point(1,2));
            points.push(new Point(3,2));
            points.push(new Point(2,0));
            multiply = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 7://yamuk
            points.push(new Point(1,0));
            points.push(new Point(0,2));
            points.push(new Point(3,2));
            points.push(new Point(5,0));
            multiply = new Point(1 , Util.randomInteger(1,3));
            add = new Point(Util.randomInteger(1,3) , Util.randomInteger(1,3))
            break;

        case 8://duzgun besgen
            points.push(new Point(0,2));
            points.push(new Point(1,4));
            points.push(new Point(3,4));
            points.push(new Point(4,2));
            points.push(new Point(2,0));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;

        case 9:// cesitkenar besgen
            points.push(new Point(0,2));
            points.push(new Point(1,4));
            points.push(new Point(4,5));
            points.push(new Point(5,2));
            points.push(new Point(2,0));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;

        case 10://duzgun altigen
            points.push(new Point(0,2));
            points.push(new Point(1,4));
            points.push(new Point(3,4));
            points.push(new Point(4,2));
            points.push(new Point(3,0));
            points.push(new Point(1,0));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;

        case 11://duzgun altigen
            points.push(new Point(0,2));
            points.push(new Point(1,3));
            points.push(new Point(3,4));
            points.push(new Point(4,2));
            points.push(new Point(3,0));
            points.push(new Point(1,1));
            add = new Point(Util.randomInteger(1,4) , Util.randomInteger(1,4))
            break;
    }
    for(var i=0;i<points.length;i++){
        points[i] = points[i].multiply(multiply).add(add);
    }
    return points;
}
InteractiveGrids.AreShapesSame = function(points1,points2){
    return InteractiveGrids.AreShapesSimilar(points1,points2,1);
}
InteractiveGrids.AreShapesSimilar = function(points1,points2,ratio){
    if(points1.length != points2.length )
        return false;
    else{
        function extractShape(points){
            var shape = [];
            for(var i=0; i < points.length; i++){

                var currentPoint = points[i];
                var backPoint = points[(i-1+points.length) % points.length];
                var frontPoint = points[(i+1) % points.length];
//                currentPoint.showOnCanvas();
//                new PointText(currentPoint).content = i;
                var angle = Math.abs(
                    Util.findAngle(currentPoint.x,currentPoint.y,frontPoint.x,frontPoint.y) -
                    Util.findAngle(currentPoint.x,currentPoint.y,backPoint.x,backPoint.y)
                );
                angle = Util.radianToDegree(angle);
                if(angle > 180)
                    angle = 360 - angle;
//                console.log(angle);
                shape.push([
                    currentPoint.getDistance(frontPoint,true),
                    currentPoint.getDistance(backPoint,true),
                    angle,
                    currentPoint
                ])
            }
            return shape;
        }
        var shape1 = extractShape(points1);
        var shape2 = extractShape(points2);
        var largestEdgeInShape1 = 0;
        for(var i=0; i < shape1.length; i++)
            if(largestEdgeInShape1 < shape1[i][0])
                largestEdgeInShape1 = shape1[i][0];
        var largestEdgeInShape2 = 0;
        for(var i=0; i < shape2.length; i++)
            if(largestEdgeInShape2 < shape2[i][0])
                largestEdgeInShape2 = shape2[i][0];

        var similarityRatio
        if(ratio == undefined)
            similarityRatio = largestEdgeInShape1 / largestEdgeInShape2 ;
        else
            similarityRatio = ratio;
        var error = 0.00001;
        var length = shape1.length;

        //start comparing in the same direction
        function compareShapes(shape1,shape2,reverse){
            for(var j= 0;j<=length;j++){
                var isSimilar = true;
                for(var i=0; i<=length;i++ ){
                    var x = (i+j+length) % length;
                    if(shape1[i%length][2] == shape2[x][2]){ //angle
                        var currentRatio = shape1[i%length][0] / shape2[x][(reverse?1:0)];
                        if(similarityRatio+error > currentRatio && similarityRatio-error  < currentRatio ){ // edges
                            continue;
                        }else{
                            isSimilar = false;
                        }
                    }
                    else{
                        isSimilar = false;
                    }
                }
                if(isSimilar == true){
                    InteractiveGrids.MoveShapeTo(shape1,shape2,j,reverse)
                    return true;
                }
            }
        }
        if(compareShapes(shape1,shape2,false)==true)
            return true;
        if(compareShapes(shape1,shape2,true)==true)
            return true;
        shape1 = shape1.reverse();
        if(compareShapes(shape1,shape2,false)==true)
            return true;
        if(compareShapes(shape1,shape2,true)==true)
            return true;
    }
    return false;
}
InteractiveGrids.GetId = function(){
    if(InteractiveGrids.order){
        return InteractiveGrids.order++;
    }else{
        InteractiveGrids.order = 1;
        return InteractiveGrids.GetId();
    }
}
InteractiveGrids.MoveShapeTo = function(fromPoints,toPoints,toStartPoint,reverse){

    if(fromPoints.length != toPoints.length)
        return;
    var shape;
    var animHelper = new AnimationHelper({});
    var style = {};
    console.log("reverse: " + reverse)
    for(var i=0;i<fromPoints.length;i++){
        style["point"+i] = fromPoints[i][3];
        animHelper["point"+i] = toPoints[(i+toStartPoint+toPoints.length-(reverse===true && toPoints.length > 3 ?0:0))%toPoints.length][3];
    }
    animHelper.animate({
        style:style,
        duration:2000,
        animationType:'easeInEaseOut',
        update:function(){
            if(shape)
                shape.remove();
            shape = new Path();
            for(var i=0;true;i++)
                if(this["point"+i])
                    shape.add(this["point"+i]);
                else
                    break;
            shape.closed = true;
            shape.strokeColor = "#000";
            shape.strokeWidth = 2;
        },
        callback:function(){
            Interaction.resume();
        }
    })
};

function PantographShapes(pointsArr,halfLength) {
    this.pointsArr = [];

    for(var i = 0; i < pointsArr.length; i++) {
        this.pointsArr[i] = pointsArr[i];
    }

    this.centerPoint = Util.centerOfPoints(this.pointsArr);

    this.drawShape = function(){
        var shapeGroup = new Group();
        var a = new Path();
        a.moveTo(this.pointsArr[0].x,this.pointsArr[0].y-halfLength);
        a.lineTo(this.pointsArr[1].x,this.pointsArr[1].y-halfLength);
        a.lineTo(this.pointsArr[1].x,this.pointsArr[1].y+halfLength);
        a.lineTo(this.pointsArr[1].x,this.pointsArr[0].y+halfLength);
        a.lineTo(this.pointsArr[0].x,this.pointsArr[0].y-halfLength);
        a.closed = true;
        a.strokeColor = pantographShapesStrokeColor;
        a.fillColor = pantographShapesFillColor;
        a.strokeCap = 'round';
        this.centerPoint = Util.centerOfPoints(this.pointsArr);

        var firstCenter = Util.centerOfPoints([this.pointsArr[0],this.pointsArr[3]]);
        firstCenter = firstCenter.findPointTo(this.centerPoint,7);

        var firstCirc = new Path.Circle(firstCenter,2);
        firstCirc.fillColor = '#333';

        var secondCenter = Util.centerOfPoints([this.pointsArr[1],this.pointsArr[2]]);
        secondCenter = secondCenter.findPointTo(this.centerPoint,7);

        var secondCirc = new Path.Circle(secondCenter,2);
        secondCirc.fillColor = '#333';

        shapeGroup.addChild(a);
        shapeGroup.addChild(firstCirc);
        shapeGroup.addChild(secondCirc);

        return shapeGroup;
    };

    this.shape = this.drawShape();
    this.shape.parentObject = this;

    this.setPos = function(newPosition) {
        var difference = newPosition.subtract(this.shape.position);
        for(var i = 0; i < this.pointsArr.length; i++) {
            this.pointsArr[i] = this.pointsArr[i].add(difference);
        }
        this.shape.position = newPosition;
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeCurrentAngle();
    };

    this.computeOriginalAngle = function(){
        var angle;
        angle = Util.findAngle(this.pointsArr[0].x,this.pointsArr[0].y,this.centerPoint.x,this.centerPoint.y);
        angle = Util.radianToDegree(angle);

        this.originalAngle = angle;
    };
    this.computeCurrentAngle = function(){
        var angle;
        angle = Util.findAngle(this.pointsArr[0].x,this.pointsArr[0].y,this.centerPoint.x,this.centerPoint.y);
        angle = Util.radianToDegree(angle);

        this.currentAngle = angle;
    };
    this.computeOriginalAngle();
    this.computeCurrentAngle();

    this.setRotation = function(angle) {
        for(var i = 0; i < this.pointsArr.length; i++) {
            this.pointsArr[i] = this.pointsArr[i].getRotatedPoint(angle,this.centerPoint);
        }
        this.shape.rotate(angle,this.centerPoint);
        this.centerPoint = Util.centerOfPoints(this.pointsArr);
        this.computeCurrentAngle();
    };
    return this;
}
;
function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
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
    ef=ab-cd;
    fa=bc-de;

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


    var interactionCenterPoint = new Point(220,120);

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
            //ef=path.segments[4].point.y-path.segments[5].point.y;
            var eX=path.segments[5].point.x+5;
            var eY=path.segments[5].point.y+ef/2;
            var eText=new PointText(eX,eY);
            eText.paragraphStyle.justification="left";
            eText.content=ef+" m";
            eText.fillColor="black";

            // f
            //fa=path.segments[5].point.x-path.segments[0].point.x;
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
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
//
//        var size=new Size(26,26);
//        var point=new Point(10,5);
//        grid(point,size);



        var grids = new InteractiveGrids({
            position:new Point(300.5,10.5),
            size:26,
            style:{
                strokeColor:'#666'
            },
            rows:6,
            cols:6
        }).drawShape([
            new Point(2,1),
            new Point(3,1),
            new Point(5,5),
            new Point(1,5)
        ]);
        grids.path.set_style({
            strokeColor:'#f00'
        });

        for(var i=0; i < grids.lines.length ; i++)
            grids.lines[i].set_style({
                strokeColor:new RgbColor(0,0,0,0)
            }).animate({
                style:{strokeColor:new RgbColor(0,0,0,1)},
                duration:500,
                delay:2000
            });



        var birim=new Group();

        var birimAH=new AnimationHelper({
            opacity:0
        });

        var birimSekil=new Path.Rectangle(new Point(250.5,10.5), new Size(26,26));
        birimSekil.strokeColor=new RgbColor(0,0,0,1);
        birimSekil.opacity=birimAH.opacity;
//        birim.addChild(birimSekil);

        var birim1T=new PointText(new Point(200,28))
        birim1T.content="1 birim";
        birim1T.fillColor=new RgbColor(0,0,0,1)
        birim1T.opacity=birimAH.opacity;
        birim.addChild(birim1T);

        var birim2T=new PointText(new Point(240,60))
        birim2T.content="1 birim";
        birim2T.fillColor=new RgbColor(0,0,0,1);
        birim2T.opacity=birimAH.opacity;
        birim.addChild(birim2T);

        var aciklamaAH=new AnimationHelper({
            opacity:0
        });

        var aciklamalar=new Group();
        var aciklamaP=new Point(600.5,70)
        var aciklama1=new PointText(aciklamaP);
        aciklama1.content="Yamuğun çevre uzunluğu";
        aciklama1.fillColor=new RgbColor(0,0,0,1)
        aciklama1.paragraphStyle.justification="center";
        aciklama1.opacity=aciklamaAH.opacity;
        aciklamalar.addChild(aciklama1);

        aciklamaP.y=90;
        var aciklama2=new PointText(aciklamaP);
        aciklama2.content="13 birimden";
        aciklama2.fillColor=new RgbColor(0,0,0,1)
        aciklama2.paragraphStyle.justification="center";
        aciklama2.opacity=aciklamaAH.opacity;
        aciklamalar.addChild(aciklama2);

        aciklamaP.y=110;
        var aciklama3=new PointText(aciklamaP);
        aciklama3.content="fazladır.";
        aciklama3.fillColor=new RgbColor(0,0,0,1)
        aciklama3.paragraphStyle.justification="center";
        aciklama3.opacity=aciklamaAH.opacity;
        aciklamalar.addChild(aciklama3);






        birimAH.animate({
            style:{
                strokeColor:new RgbColor(0,0,0,1),
                fillColor:new RgbColor(0,0,0,1),
                opacity:1
            },
            duration:500,
            delay:3000,
            update:function(){
                birimSekil.opacity=this.opacity
                birim1T.opacity=this.opacity;
                birim2T.opacity=this.opacity;
            }
        });

        aciklamaAH.animate({
            style:{
                opacity:1
            },
            duration:500,
            delay:4000,
            update:function(){
                aciklama1.opacity=this.opacity;
                aciklama2.opacity=this.opacity;
                aciklama3.opacity=this.opacity;
            }
        });



        Main.animationFinished(4500);




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
        Main.setObjective('Yandaki şeklinde çevre uzunluğunu bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"10px",
            right:"40px"
        });

        Interaction.appendStatus({
            bottom:"20px",
            right:"200px"
        });

        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"235px",
            height:"50px",
            right:"0px",
            top:"35px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1


        });

        $(container).append("<div id='cevap'>");
        $("#cevap").css({
            position:"absolute",
            width:"420px",
            height:"25px",
            right:"0px",
            left:"0px",
            bottom:"50px",
            margin:"auto",
            opacity:0,
            fontSize:"20px",
            textAlign:"center",
            color:"green"
        });

        Interaction.appendInput({
            position:"relative",
            width:"70px",
            height:"50px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1,
            float:"left"

        },true, false);
        Interaction.input.id="girdi";
        $("#girdi").attr("maxLength","5");

        $(container).append("<div id='girdiKapsayici'>");
        $("#girdiKapsayici").css({
            position:"absolute",
            width:"135px",
            height:"50px",
            right:"11px",
            top:"60px"
        });

        $("#girdiKapsayici").append("<span id='ccc'>Ç= </span>");
        $("#girdiKapsayici").append(Interaction.input);
        $("#girdiKapsayici").append("<span id='biriM'> m</span>");
        $("#ccc").css({
            float:"left",
            marginTop:"20px",
            marginRight:"10px",
            fontSize:"20px"
        });
        $("#biriM").css({
            float:"left",
            marginTop:"20px",
            marginLeft:"10px",
            fontSize:"20px"
        });



        Interaction.soruArray=Util.getShuffledArray(5);
        Interaction.soruSirasi=0;

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        $("input").css({color:"black"});

        Main.interactionProject.activeLayer.removeChildren();
        $("#cevap").animate({opacity:0},1000);

        /*var lineY=new Path.Line(new Point(10,210),new Point(430,210));
        lineY.strokeColor="black";

        var lineX=new Path.Line(new Point(10,10),new Point(10,210));
        lineX.strokeColor="black";*/

        var simdikiSoru=Interaction.soruArray[Interaction.soruSirasi];

        switch (simdikiSoru){
            case 0:
                soru=new Dikdortgen();
                console.log("Dikdörtgen")
                break;
            case 1:
                soru= new SekilL1();
                console.log("ŞekilL1")
                break;
            case 2:
                soru= new SekilL2();
                console.log("ŞekilL2")
                break;
            case 3:
                soru= new SekilL3();
                console.log("ŞekilL3")
                break;
            case 4:
                soru= new SekilL4();
                console.log("ŞekilL4")
                break;
        }
        Interaction.soruSirasi++;
        if(Interaction.soruSirasi==5)
            Interaction.soruSirasi=0;


//        soru=new Dikdortgen();
//        soru= new SekilL1();
//        soru= new SekilL2();
//        soru= new SekilL3();
//        soru= new SekilL4();
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){

        if(soru.cevap==value)
            return true

    },
	onCorrectAnswer : function(){
        $("input").css({color:"green"});
        soru.cevapGoster();
        soru.yazilariGoster();
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        $("input").css({color:"red"});
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.',false);
        soru.yazilariGoster();
        soru.cevapGoster();

		
    }

}
;






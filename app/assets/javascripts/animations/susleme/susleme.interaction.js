var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'wholePaper',
            src:'/assets/animations/susleme/6_susleme_bg.jpg'
        },
        {
            id:'selectedColorMark',
            src:'/assets/animations/susleme/active_color.png'
        }
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki model oluşturma yöntemlerinden birini seçiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<button id ="newPageBtn" class="newpage_button" onclick="getNewPage();"></button>')
        $('#newPageBtn').css("position", "absolute")
            .css("top", "260px")
            .css("left", "485px");

        Interaction.pp = new Raster('wholePaper');
        Interaction.pp.position = new Point(296,151);

        // selected color circle
        Interaction.selectedColorCircle = new Path.Circle(new Point(433,55),16);
        Interaction.selectedColorCircle.fillColor = "white";
        Interaction.selectedColorCircle.opacity = 0;

        Interaction.mark = new Raster('selectedColorMark');
        Interaction.mark.position = new Point(440,50);
        Interaction.mark.opacity = 0;


        // first shape big part
        point1 = new Point(140.5,25.5);
        point2 = new Point(180.5,25.5);
        point3 = new Point(180.5,65.5);
        point4 = new Point(160.5,65.5);
        point5 = new Point(140.5,45.5);

        // first shape small part
        point6 = new Point(140.5,45.5);
        point7 = new Point(160.5,65.5);
        point8 = new Point(140.5,65.5);

        // first shape last1
        point29 = new Point(140.5,5.5);
        point30 = new Point(160.5,25.5);
        // first shape last2
        point27 = new Point(180.5,45.5);
        point28 = new Point(200.5,65.5);

        // second shape big part
        point9 = new Point(220.5,25.5);
        point10 = new Point(260.5,25.5);
        point11 = new Point(260.5,65.5);
        point12 = new Point(220.5,65.5);
        point13 = new Point(240.5,45.5);

        // second shape small part
        point14 = new Point(220.5,25.5);
        point15 = new Point(240.5,45.5);
        point16 = new Point(220.5,65.5);

        // second shape last
        point31 = new Point(280.5,45.5);

        // third shape big part
        point17 = new Point(300.5,25.5);
        point18 = new Point(340.5,25.5);
        point19 = new Point(340.5,65.5);
        point20 = new Point(300.5,65.5);
        point21 = new Point(320.5,55.5);
        point22 = new Point(320.5,35.5);

        // third shape small part
        point23 = new Point(300.5,25.5);
        point24 = new Point(320.5,35.5);
        point25 = new Point(320.5,55.5);
        point26 = new Point(300.5,65.5);

        // third shape last
        point32 = new Point(360.5,35,5);
        point33 = new Point(360.5,55.5);

        // shape1
        shape1 = new Group();
        var fShape1 = new Path();
        fShape1.moveTo(point1);
        fShape1.lineTo(point2);
        fShape1.lineTo(point3);
        fShape1.lineTo(point4);
        fShape1.lineTo(point5);
        fShape1.lineTo(point1);
        fShape1.closed = true;
        fShape1.fillColor = "white";
        fShape1.strokeColor = "black";

        var sShape1 = new Path();
        sShape1.moveTo(point6);
        sShape1.lineTo(point7);
        sShape1.lineTo(point8);
        sShape1.lineTo(point6);
        sShape1.closed = true;
        sShape1.fillColor = "white";
        sShape1.strokeColor = "black";

        shape1.addChild(fShape1);
        shape1.addChild(sShape1);
        shape1.myId = 1;
        shape1.class = "shapes";

        // shape2
        shape2 = new Group();
        var fShape2 = new Path();
        fShape2.moveTo(point9);
        fShape2.lineTo(point10);
        fShape2.lineTo(point11);
        fShape2.lineTo(point12);
        fShape2.lineTo(point13);
        fShape2.lineTo(point9);
        fShape2.closed = true;
        fShape2.fillColor = "white";
        fShape2.strokeColor = "black";

        var sShape2 = new Path();
        sShape2.moveTo(point14);
        sShape2.lineTo(point15);
        sShape2.lineTo(point16);
        sShape2.lineTo(point14);
        sShape2.closed = true;
        sShape2.fillColor = "white";
        sShape2.strokeColor = "black";

        shape2.addChild(fShape2);
        shape2.addChild(sShape2);
        shape2.myId = 2;
        shape2.class = "shapes";

        // shape3
        shape3 = new Group();
        var fShape3 = new Path();
        fShape3.moveTo(point17);
        fShape3.lineTo(point18);
        fShape3.lineTo(point19);
        fShape3.lineTo(point20);
        fShape3.lineTo(point21);
        fShape3.lineTo(point22);
        fShape3.lineTo(point17);
        fShape3.closed = true;
        fShape3.fillColor = "white";
        fShape3.strokeColor = "black";

        var sShape3 = new Path();
        sShape3.moveTo(point23);
        sShape3.lineTo(point24);
        sShape3.lineTo(point25);
        sShape3.lineTo(point26);
        sShape3.lineTo(point23);
        sShape3.closed = true;
        sShape3.fillColor = "white";
        sShape3.strokeColor = "black";

        shape3.addChild(fShape3);
        shape3.addChild(sShape3);
        shape3.myId = 3;
        shape3.class = "shapes";

        // dropable area
        Interaction.dropArea = new Path.Rectangle(new Point(50.5,95.5),new Size(398,192));
        Interaction.dropArea.fillColor = "white";
        Interaction.dropArea.class = "dropArea";
        Interaction.dropArea.opacity = 0;




        // colors circles
        var myId3 = -1;
        Interaction.colorsCircles = [];
        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 2; j++){
                myId3 += 1;
                Interaction.colorsCircles[myId3] = new Path.Circle(new Point(509+j*44,72+i*41),16);
                Interaction.colorsCircles[myId3].strokeColor = "black";
                Interaction.colorsCircles[myId3].fillColor = "white";
                Interaction.colorsCircles[myId3].opacity = 0;
                Interaction.colorsCircles[myId3].class = "colors";
                Interaction.colorsCircles[myId3].myId3 = myId3;
            }
        }


        Interaction.clonesObjectArr = [];
        Interaction.selectedColor = null;
        var tool1 = new Tool();
        tool1.onMouseDown = function(event){
            if(event.item){
                if(event.item.class == "shapes"){
                    var myId = event.item.myId;
                    Interaction.selectedColor = null;
                    Interaction.mark.opacity = 0;
                    Interaction.selectedColorCircle.opacity = 0;
                    if(myId == 1){
                        shape2.remove();
                        shape3.remove();
                        shape1.animate({
                            style:{
                                position:new Point(shape1.position.x+80,shape1.position.y)
                            },
                            duration:500,
                            delay:0,
                            animationType:'easeInOutQuad'
                        });
                        shape1.class = "drg"
                        shape1.children[1].myId2 = 1;
                        Main.setObjective('Kare içindeki şekli sağa ya da yukarı sürükleyerek öteleyiniz.');
                    }
                    else if(myId == 2){
                        shape1.remove();
                        shape3.remove();
                        shape2.class = "drg";
                        shape2.children[1].myId2 = 2;
                        Main.setObjective('Kare içindeki şekli sağa sürükleyerek öteleyiniz.');
                    }
                    else if(myId == 3){
                        shape1.remove();
                        shape2.remove();
                        shape3.animate({
                            style:{
                                position:new Point(shape3.position.x-80,shape3.position.y)
                            },
                            duration:500,
                            delay:0,
                            animationType:'easeInOutQuad'
                        });
                        shape3.class = "drg";
                        shape3.children[1].myId2 = 3;
                        Main.setObjective('Kare içindeki şekli sağa sürükleyerek öteleyiniz.');
                    }

                }
                else if(event.item.class == "drg"){
                    this.item = event.item.children[1];
                    this.drag = true;
                    this.totalDelta = new Point(0,0);
                    this.firstPosition = this.item.position;
                    Interaction.selectedColor = null;
                    Interaction.mark.opacity = 0;
                    Interaction.selectedColorCircle.opacity = 0;
                }
                else if(event.item.class == "decorable"){
                    this.item = new MyShapes(event.item.parentObject.pointsArr,event.item.parentObject.myType,event.item.parentObject.myType2).shape;
                    this.item.fillColor = "white";
                    this.item.class = "clone";
                    this.drag = true;
                    this.totalDelta = new Point(0,0);
                    this.firstPosition = this.item.position;
                    Interaction.selectedColor = null;
                    Interaction.mark.opacity = 0;
                    Interaction.selectedColorCircle.opacity = 0;
                }
                else if(event.item.class == "clone"){
                    if(Interaction.selectedColor == null || Interaction.selectedColor == 'undefined'){
                        this.item = new MyShapes(event.item.parentObject.pointsArr,event.item.parentObject.myType,event.item.parentObject.myType2).shape;
                        this.drag = true;
                        this.item.fillColor = event.item.fillColor;
                        this.item.class = "clone";
                        this.totalDelta = new Point(0,0);
                        this.firstPosition = this.item.position;
                        Interaction.clonesObjectArr.splice(Interaction.clonesObjectArr.indexOf(event.item),1);
                        event.item.remove();
                    }
                    else{
                        this.item = event.item;
                        this.drag = false;
                        this.item.fillColor = Interaction.selectedColor;
                    }
                }
                else if(event.item.class == "colors"){
                    Interaction.selectedColor = interactionFillColors[event.item.myId3];
                    Interaction.mark.opacity = 1;
                    Interaction.selectedColorCircle.opacity = 1;
                    Interaction.selectedColorCircle.fillColor = Interaction.selectedColor;
                }
                else{
                    Interaction.selectedColor = null;
                    Interaction.mark.opacity = 0;
                    Interaction.selectedColorCircle.opacity = 0;
                }
            }
            else{
                Interaction.selectedColor = null;
                Interaction.mark.opacity = 0;
                Interaction.selectedColorCircle.opacity = 0;
            }
        };
        tool1.onMouseDrag = function(event){
            if(this.item){
                if(this.drag == true){
                    if(this.item.myId2 == 1){
                        var x1 = event.point.x - this.firstPosition.x;
                        var y1 = this.firstPosition.y - event.point.y;
                        if(x1 < 0 && y1 < 0){
                            this.item.position = new Point(this.firstPosition.x,this.firstPosition.y);
                        }
                        else if(x1 > y1){
                            if(x1 > 30 && x1 < 50){
                                this.item.position = new Point(this.firstPosition.x+40,this.firstPosition.y);
                            }
                            else{
                                this.item.position = new Point(this.firstPosition.x+x1,this.firstPosition.y);
                            }
                            this.item.last = 2;
                        }
                        else if(y1 > x1){
                            if (y1 > 30 && y1 < 50) {
                                this.item.position = new Point(this.firstPosition.x,this.firstPosition.y-40);
                            } else {
                                this.item.position = new Point(this.firstPosition.x,this.firstPosition.y-y1);
                            }
                            this.item.last = 1;
                        }
                    }
                    else if(this.item.myId2 == 2){
                        var x1 = event.point.x - this.firstPosition.x;
                        if(x1 < 0){
                            this.item.position = new Point(this.firstPosition.x,this.firstPosition.y);
                        }
                        else if(x1 > 30 && x1 < 50){
                            this.item.position = new Point(this.firstPosition.x+40,this.firstPosition.y);
                        }
                        else{
                            this.item.position = new Point(this.firstPosition.x+x1,this.firstPosition.y);
                        }
                    }
                    else if(this.item.myId2 == 3){
                        var x1 = event.point.x - this.firstPosition.x;
                        if(x1 < 0){
                            this.item.position = new Point(this.firstPosition.x,this.firstPosition.y);
                        }
                        else if(x1 > 30 && x1 < 50){
                            this.item.position = new Point(this.firstPosition.x+40,this.firstPosition.y);
                        }
                        else{
                            this.item.position = new Point(this.firstPosition.x+x1,this.firstPosition.y);
                        }
                    }
                    else if(this.item.class == "clone"){
                        var newPosition = new Point(this.firstPosition.add(this.totalDelta).add(event.delta));
                        this.item.parentObject.setPos(newPosition);
                        this.totalDelta = this.totalDelta.add(event.delta);
                        for(var i = 0; i < Interaction.clonesObjectArr.length;i++){
                            this.item.parentObject.trySnapTo(Interaction.clonesObjectArr[i].parentObject);
                        }
                    }
                }
            }
        };

        tool1.onMouseUp = function(event){
            if(this.item){
                if(this.item.myId2 == 1){
                    if(this.item.last == 2){
                        shape1.remove();
                        var shape11PointsArr = [];
                        shape11PointsArr[0] = new Point(point1);
                        shape11PointsArr[1] = new Point(point2);
                        shape11PointsArr[2] = new Point(point27);
                        shape11PointsArr[3] = new Point(point28);
                        shape11PointsArr[4] = new Point(point3);
                        shape11PointsArr[5] = new Point(point7);
                        shape11PointsArr[6] = new Point(point6);

                        shape11 = new MyShapes(shape11PointsArr,1,2);
                        shape11.shape.class = "decorable";
                        shape11.shape.fillColor = "white";
                        shape11.setPos(new Point(shape11.shape.position.x+80,shape11.shape.position.y));
                    }
                    else if(this.item.last == 1){
                        shape1.remove();
                        var shape11PointsArr = [];
                        shape11PointsArr[0] = new Point(point1);
                        shape11PointsArr[1] = new Point(point29);
                        shape11PointsArr[2] = new Point(point30);
                        shape11PointsArr[3] = new Point(point2);
                        shape11PointsArr[4] = new Point(point3);
                        shape11PointsArr[5] = new Point(point7);
                        shape11PointsArr[6] = new Point(point6);
                        shape11 = new MyShapes(shape11PointsArr,1,1);
                        shape11.shape.class = "decorable";
                        shape11.shape.fillColor = "white";
                        shape11.setPos(new Point(shape11.shape.position.x+80,shape11.shape.position.y));
                    }
                    Interaction.myType = 1;
                }
                else if(this.item.myId2 == 2){
                    shape2.remove();
                    var shape22PointsArr = [];
                    shape22PointsArr[0] = new Point(point9);
                    shape22PointsArr[1] = new Point(point10);
                    shape22PointsArr[2] = new Point(point31);
                    shape22PointsArr[3] = new Point(point11);
                    shape22PointsArr[4] = new Point(point12);
                    shape22PointsArr[5] = new Point(point13);
                    shape22 = new MyShapes(shape22PointsArr,2);
                    shape22.shape.class = "decorable";
                    shape22.shape.fillColor = "white";
                    shape22.setPos(new Point(shape22.shape.position.x,shape22.shape.position.y));
                    Interaction.myType = 2;
                }
                else if(this.item.myId2 == 3){
                    shape3.remove();
                    var shape33PointsArr = [];
                    shape33PointsArr[0] = new Point(point17);
                    shape33PointsArr[1] = new Point(point18);
                    shape33PointsArr[2] = new Point(point32);
                    shape33PointsArr[3] = new Point(point33);
                    shape33PointsArr[4] = new Point(point19);
                    shape33PointsArr[5] = new Point(point20);
                    shape33PointsArr[6] = new Point(point21);
                    shape33PointsArr[7] = new Point(point22);
                    shape33 = new MyShapes(shape33PointsArr,3);
                    shape33.shape.class = "decorable";
                    shape33.shape.fillColor = "white";
                    shape33.setPos(new Point(shape33.shape.position.x-80,shape33.shape.position.y));
                    Interaction.myType = 3;
                }
                else if(this.item.class == "clone"){
                    var noOfPoints = 0;
                    for(var i = 0; i < this.item.parentObject.pointsArr.length; i++){
                        if(Interaction.dropArea.hitTest(this.item.parentObject.pointsArr[i])){
                            noOfPoints += 1;
                        }
                    }
                    if(noOfPoints == this.item.parentObject.pointsArr.length){
                        Interaction.clonesObjectArr.push(this.item);
                    }
                    else{
                        this.item.remove();
                    }
                }
            }
            this.drag = false;
            this.item = null;
        };

        function MyShapes(pointsArr,type,type2){
            if(type2 == 'undefined' || type2 == null){
                type2 = 0;
            }

            this.myType = type;
            this.myType2 = type2;

            this.pointsArr = [];
            for(var i = 0; i < pointsArr.length; i++){
                this.pointsArr[i] = pointsArr[i];
            }

            this.centerPoint = Util.centerOfPoints(this.pointsArr);

            this.drawShape = function(){
                var a = new Path();
                a.moveTo(pointsArr[0]);
                for(var i = 1; i < this.pointsArr.length; i++){
                    a.lineTo(this.pointsArr[i]);
                }
                a.lineTo(this.pointsArr[0]);
                a.closed = true;
                a.strokeColor = "black";
                this.centerPoint = Util.centerOfPoints(this.pointsArr);
                return a;
            };

            this.shape = this.drawShape();
            this.shape.parentObject = this;

            this.setPos = function(newPosition){
                var difference = newPosition.subtract(this.shape.position);
                for(var i = 0; i < this.pointsArr.length; i++){
                    this.pointsArr[i] = this.pointsArr[i].add(difference);
                }
                this.shape.position = newPosition;
                this.centerPoint = Util.centerOfPoints(this.pointsArr);
                if(this.b){
                    this.b.remove();
                }
                this.computeLinesArray();
            };

            this.computeLinesArray = function(){
                this.linesArr = [];

                for(var i = 0; i < this.pointsArr.length; i++){
                    var p1 = this.pointsArr[i];
                    var p2 = this.pointsArr[(i+1)%this.pointsArr.length];

                    var angle = Util.findAngle(p1.x,p1.y,p2.x,p2.y);
                    while(angle > Math.PI){
                        angle -= Math.PI;
                    }

                    this.linesArr.push({
                        p1:p1,
                        p2:p2,
                        angle:angle
                    });
                }
            };
            this.computeLinesArray();

            this.trySnapTo = function(otherObject){
                if(this.centerPoint.getDistance(otherObject.centerPoint, true) > 7200){
                    return;
                }
                if(this.myType == 1){
                    if(this.myType2 == 1){
                        for(var i = 0; i < this.linesArr.length; i++){
                            for(var j = 0; j < otherObject.linesArr.length; j++){
                                var line1 = this.linesArr[i];
                                var line2 = otherObject.linesArr[j];

                                var center1 = Util.centerOfPoints([line1.p1,line1.p2]);
                                var center2 = Util.centerOfPoints([line2.p1,line2.p2]);

                                if(Math.abs(line1.angle - line2.angle) < 0.01 || Math.abs(line1.angle - line2.angle) > Math.PI - 0.01){
                                    if(center1.getDistance(center2,true) < 400){
                                        this.setPos(new Point(this.shape.position.add(center2.subtract(center1)).x,this.shape.position.y));
                                        if(Math.abs(this.centerPoint.x-otherObject.centerPoint.x) < 0.01){
                                            if(!otherObject.shape.hitTest(new Point(this.shape.position.x,this.shape.position.add(center2.subtract(center1)).y))){
                                                this.setPos(new Point(this.shape.position.x,this.shape.position.add(center2.subtract(center1)).y));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if(this.myType2 == 2){
                        for(var i = 0; i < this.linesArr.length; i++){
                            for(var j = 0; j < otherObject.linesArr.length; j++){
                                var line1 = this.linesArr[i];
                                var line2 = otherObject.linesArr[j];

                                var center1 = Util.centerOfPoints([line1.p1,line1.p2]);
                                var center2 = Util.centerOfPoints([line2.p1,line2.p2]);

                                if(Math.abs(line1.angle - line2.angle) < 0.01 || Math.abs(line1.angle - line2.angle) > Math.PI - 0.01){
                                    if(center1.getDistance(center2,true) < 400){
                                        this.setPos(new Point(this.shape.position.x,this.shape.position.add(center2.subtract(center1)).y));
                                        if(Math.abs(this.centerPoint.y-otherObject.centerPoint.y) < 0.01){
                                            if(!otherObject.shape.hitTest(new Point(this.shape.position.add(center2.subtract(center1)).x,this.shape.position.y))){
                                                this.setPos(new Point(this.shape.position.add(center2.subtract(center1)).x,this.shape.position.y));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if(this.myType == 2){
                    for(var i = 0; i < this.linesArr.length; i++){
                        for(var j = 0; j < otherObject.linesArr.length; j++){
                            var line1 = this.linesArr[i];
                            var line2 = otherObject.linesArr[j];

                            var center1 = Util.centerOfPoints([line1.p1,line1.p2]);
                            var center2 = Util.centerOfPoints([line2.p1,line2.p2]);

                            if(Math.abs(line1.angle - line2.angle) < 0.01 || Math.abs(line1.angle - line2.angle) > Math.PI - 0.01){
                                if(center1.getDistance(center2,true) < 600){
                                    this.setPos(new Point(this.shape.position.x,this.shape.position.add(center2.subtract(center1)).y));
                                    if(Math.abs(this.centerPoint.y-otherObject.centerPoint.y) < 0.01){
                                        if(!otherObject.shape.hitTest(new Point(this.shape.position.add(center2.subtract(center1)).x,this.shape.position.y))){
                                            this.setPos(new Point(this.shape.position.add(center2.subtract(center1)).x,this.shape.position.y));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if(this.myType == 3){
                    for(var i = 0; i < this.linesArr.length; i++){
                        for(var j = 0; j < otherObject.linesArr.length; j++){
                            var line1 = this.linesArr[i];
                            var line2 = otherObject.linesArr[j];

                            var center1 = Util.centerOfPoints([line1.p1,line1.p2]);
                            var center2 = Util.centerOfPoints([line2.p1,line2.p2]);

                            if(Math.abs(line1.angle - line2.angle) < 0.01 || Math.abs(line1.angle - line2.angle) > Math.PI - 0.01){
                                if(center1.getDistance(center2,true) < 600){
                                    this.setPos(new Point(this.shape.position.x,this.shape.position.add(center2.subtract(center1)).y));
                                    if(Math.abs(this.centerPoint.y-otherObject.centerPoint.y) < 0.01){
                                        if(!otherObject.shape.hitTest(new Point(this.shape.position.add(center2.subtract(center1)).x,this.shape.position.y))){
                                            this.setPos(new Point(this.shape.position.add(center2.subtract(center1)).x,this.shape.position.y));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
//                for(var i = 0; i < this.linesArr.length; i++){
//                    for(var j = 0; j < otherObject.linesArr.length; j++){
//                        var line1 = this.linesArr[i];
//                        var line2 = otherObject.linesArr[j];
//                        if(Math.abs(line1.angle - line2.angle) < 0.01 ||
//                            Math.abs(line1.angle - line2.angle) > Math.PI - 0.01){
//                            if(line1.p1.getDistance(line2.p1, true) < 100){
//                                if(line1.p2.getDistance(line2.p2, true) < 100){
//                                    if(!otherObject.shape.hitTest(this.centerPoint.add(line2.p1.subtract(line1.p1))) && !this.shape.hitTest(otherObject.centerPoint.add(line2.p1.subtract(line1.p1)))){
//                                        this.setPos(this.shape.position.add(line2.p1.substract(line1.p1)));
//                                    }
//                                }
//                            }
//                            else if (line1.p1.getDistance(line2.p2, true) < 100) {
//                                if (line1.p2.getDistance(line2.p1, true) < 100) {
//                                    if(!otherObject.shape.hitTest(this.centerPoint.add(line2.p2.subtract(line1.p1))) && !this.shape.hitTest(otherObject.centerPoint.add(line2.p2.subtract(line1.p1)))){
//                                        this.setPos(this.shape.position.add(line2.p2.subtract(line1.p1)));
//                                    }
//                                }
//                            }
//                        }
//                    }
//                }
            };
        };

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
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
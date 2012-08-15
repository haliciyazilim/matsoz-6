function __Styles(){
    animationTriangleColor = "#FABF8F";
    animationTriangleColor2 = "#92D050";

    interactionTriangleColor = "#ffbfc0";
    interactionTriangleColor2 = "#ffd495";
    interactionSquareColor = "#aeefaf";
    interactionSquareColor2 = "#b9e7fe";
    interactionHexagonColor = "#e6bcfe";
    interactionHexagonColor2 = "#a2c4ff";
}

var Animation = {
    init:function(container){
        Animation.container = container;

        Animation.triangleGroup = new Group();
        for(var i = 0; i < 4; i++){
            for(var j = i, k = 0; j < 4; j++, k++){
                var triangle = new Path.Triangle(new Point(300.5+(i*20)+(k*40), 168.5-(i*35)), new Point(340.5+(i*20)+(k*40), 168.5-(i*35)), new Point(320.5+(i*20)+(k*40), 133.5-(i*35)));
                triangle.strokeColor = "black";
                triangle.fillColor = animationTriangleColor;
                Animation.triangleGroup.addChild(triangle);
            }
        }

        Animation.triangleGroup2 = new Group();
        for(var i = 0; i < 3; i++){
            for(var j = i, k = 0; j < 3; j++, k++){
                var triangle2 = new Path.Triangle(new Point(320.5+(i*20)+(k*40), 133.5-(i*35)), new Point(360.5+(i*20)+(k*40), 133.5-(i*35)), new Point(340.5+(i*20)+(k*40), 168.5-(i*35)));
                triangle2.strokeColor = "black";
                triangle2.fillColor = animationTriangleColor2;
                Animation.triangleGroup2.addChild(triangle2);
            }
        }
        for(var i = 0; i < 4; i++)
            Animation.triangleGroup.children[i].position.y -= 170;
        for(var j = 0; j < 3; j++)
            Animation.triangleGroup2.children[j].position.y -= 170;
        for(var i = 0; i < 3; i++)
            Animation.triangleGroup.children[i+4].position.y -= 135;
        for(var j = 0; j < 2; j++)
            Animation.triangleGroup2.children[j+3].position.y -= 135;
        for(var i = 0; i < 2; i++)
            Animation.triangleGroup.children[i+7].position.y -= 100;
        for(var j = 0; j < 1; j++)
            Animation.triangleGroup2.children[j+5].position.y -= 100;

        Animation.triangleGroup.children[9].position.y -= 65;


        // animate
        for(var i = 0; i < 4; i++){
            var posX = Animation.triangleGroup.children[i].position.x;
            var posY = Animation.triangleGroup.children[i].position.y + 170;
            Animation.triangleGroup.children[i].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 1000,
                delay: 2000+(1000*i),
                animationType: 'easeOutBounce'
            });
        }
        for(var j = 0; j < 3; j++){
            var posX = Animation.triangleGroup2.children[j].position.x;
            var posY = Animation.triangleGroup2.children[j].position.y + 170;
            Animation.triangleGroup2.children[j].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 1000,
                delay: 7000+(1000*j),
                animationType: 'easeOutBounce'
            });
        }

        for(var i = 0; i < 3; i++){
            var posX = Animation.triangleGroup.children[4+i].position.x;
            var posY = Animation.triangleGroup.children[4+i].position.y + 135;
            Animation.triangleGroup.children[4+i].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 1000,
                delay: 11000+(1000*i),
                animationType: 'easeOutBounce'
            });
        }
        for(var j = 0; j < 2; j++){
            var posX = Animation.triangleGroup2.children[3+j].position.x;
            var posY = Animation.triangleGroup2.children[3+j].position.y + 135;
            Animation.triangleGroup2.children[3+j].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 1000,
                delay: 15000+(1000*j),
                animationType: 'easeOutBounce'
            });
        }

        for(var i = 0; i < 2; i++){
            var posX = Animation.triangleGroup.children[7+i].position.x;
            var posY = Animation.triangleGroup.children[7+i].position.y + 100;
            Animation.triangleGroup.children[7+i].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 1000,
                delay: 18000+(1000*i),
                animationType: 'easeOutBounce'
            });
        }
        for(var j = 0; j < 1; j++){
            var posX = Animation.triangleGroup2.children[5+j].position.x;
            var posY = Animation.triangleGroup2.children[5+j].position.y + 100;
            Animation.triangleGroup2.children[5+j].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 1000,
                delay: 21000+(1000*j),
                animationType: 'easeOutBounce'
            });
        }

        var posX = Animation.triangleGroup.children[9].position.x;
        var posY = Animation.triangleGroup.children[9].position.y + 65;
        Animation.triangleGroup.children[9].animate({
            style:{
                position: new Point(posX, posY)
            },
            duration: 1000,
            delay: 23000,
            animationType: 'easeOutBounce',
            callback: function(){
                Main.animationFinished();

            }
        });
    }
}

var Interaction = {
    images: [{
        id: 'page',
        src: '/assets/animations/susleme/susleme_kagit.png'
    }],

    getFramework:function(){
        return 'paper';
    },
    init:function(container){


        var pp = new Raster('page');
        pp.position = new Point(396, 140);
        Interaction.container = container;
        Main.setObjective('Yandaki yüzeyi verilen düzgün çokgensel bölgeleri kullanarak ve gerektiğinde şekli 30° döndürerek  döşeyiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<button id ="rotateBtn" class="rotate_button" onclick="Interaction.rotateSelectedItem()"></button>')
        $('#rotateBtn').css("position", "absolute")
            .css("top", "260px")
            .css("left", "10px")

        $(Interaction.container).append('<button id ="newPageBtn" class="newpage_button" onclick="Interaction.getNewPage()"></button>')
        $('#newPageBtn').css("position", "absolute")
            .css("top", "260px")
            .css("left", "100px")



        Interaction.clonesObjectArr = [];
        function MyShapes(pointsArr, fillColor) {
            this.pointsArr = [];
            for(var i = 0; i < pointsArr.length; i++)
                this.pointsArr[i] = pointsArr[i];

            this.fillColor = fillColor;
            this.centerPoint = Util.centerOfPoints(this.pointsArr);

            this.drawShape = function(){
                var a = new Path();
                a.moveTo(this.pointsArr[0]);
                for(var i = 1; i < this.pointsArr.length; i++){
                    a.lineTo(this.pointsArr[i]);
                }
                a.lineTo(this.pointsArr[0]);
                a.closed = true;
                a.strokeColor = "black";
                a.fillColor = fillColor;
                this.centerPoint = Util.centerOfPoints(this.pointsArr);
                return a;
            };

            this.shape = this.drawShape();
            this.shape.parentObject = this;

            this.setPos = function(newPosition){
                var difference = newPosition.subtract(this.shape.position);
                for(var i=0; i < this.pointsArr.length; i++){
                    this.pointsArr[i] = this.pointsArr[i].add(difference);
                }
                this.shape.position = newPosition;
                this.centerPoint = Util.centerOfPoints(this.pointsArr);
                this.computeLinesArray();
            }

            this.rot = function(angle){
                for(var i = 0; i < this.pointsArr.length; i++){
                    this.pointsArr[i] = this.pointsArr[i].getRotatedPoint(angle, this.centerPoint);
                }
                this.shape.rotate(angle, this.centerPoint);
                this.centerPoint = Util.centerOfPoints(this.pointsArr);
                this.computeLinesArray();
            }

            this.computeLinesArray = function () {
                this.linesArr = [];

                for (var i = 0; i < this.pointsArr.length; i++) {
                    var p1 = this.pointsArr[i];
                    var p2 = this.pointsArr[(i+1)%this.pointsArr.length];

                    var angle = Util.findAngle(p1.x, p1.y, p2.x, p2.y);
                    while (angle > Math.PI) {
                        angle -= Math.PI;
                    }

                    this.linesArr.push({
                        p1: p1,
                        p2: p2,
                        angle: angle
                    });
                }
            }
            this.computeLinesArray();
            this.trySnapTo = function (otherObject) {
                console.log(this.centerPoint.getDistance(otherObject.centerPoint, true));
                if (this.centerPoint.getDistance(otherObject.centerPoint, true) > 7200) {
                    return;
                }

                for (var i = 0; i < this.linesArr.length; i++) {
                    for (var j = 0; j < otherObject.linesArr.length; j++) {
                        var line1 = this.linesArr[i];
                        var line2 = otherObject.linesArr[j];
                        if (Math.abs(line1.angle - line2.angle) < 0.01 ||
                            Math.abs(line1.angle - line2.angle) > Math.PI - 0.01) {
                            if (line1.p1.getDistance(line2.p1, true) < 100) {
                                if (line1.p2.getDistance(line2.p2, true) < 100) {
                                    if(!otherObject.shape.hitTest(this.centerPoint.add(line2.p1.subtract(line1.p1))) && !this.shape.hitTest(otherObject.centerPoint.add(line2.p1.subtract(line1.p1)))){
                                        this.setPos(this.shape.position.add(line2.p1.subtract(line1.p1)));
                                    }

                                }
                            }
                            else if (line1.p1.getDistance(line2.p2, true) < 100) {
                                if (line1.p2.getDistance(line2.p1, true) < 100) {
                                    if(!otherObject.shape.hitTest(this.centerPoint.add(line2.p2.subtract(line1.p1))) && !this.shape.hitTest(otherObject.centerPoint.add(line2.p2.subtract(line1.p1)))){
                                        this.setPos(this.shape.position.add(line2.p2.subtract(line1.p1)));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        var firstTrianglePointsArr = [];
        firstTrianglePointsArr[0] = new Point(50.5, 50.5);
        firstTrianglePointsArr[1] = new Point(90.5, 50.5);
        firstTrianglePointsArr[2] = new Point(70.5, 50.5-Math.floor(Math.sqrt(3)*20+0.5));
        Interaction.triangle = new MyShapes(firstTrianglePointsArr, interactionTriangleColor);
        Interaction.triangle.shape.class = "draggable";
        Interaction.triangle.setPos(new Point(54, 50));

        var secondTrianglePointsArr = [];
        secondTrianglePointsArr[0] = new Point(50.5, 50.5);
        secondTrianglePointsArr[1] = new Point(90.5, 50.5);
        secondTrianglePointsArr[2] = new Point(70.5, 50.5-Math.floor(Math.sqrt(3)*20+0.5));
        Interaction.triangle2 = new MyShapes(secondTrianglePointsArr, interactionTriangleColor2);
        Interaction.triangle2.shape.class = "draggable";
        Interaction.triangle2.setPos(new Point(144, 50));

        var firstHexagonPointsArr = [];
        firstHexagonPointsArr[0] = new Point(50, 60);
        firstHexagonPointsArr[1] = new Point(70, 60-Math.floor(Math.sqrt(3)*20 + 0.5));
        firstHexagonPointsArr[2] = new Point(110, 60-Math.floor(Math.sqrt(3)*20 + 0.5));
        firstHexagonPointsArr[3] = new Point(130, 60);
        firstHexagonPointsArr[4] = new Point(110, 60+Math.floor(Math.sqrt(3)*20 + 0.5));
        firstHexagonPointsArr[5] = new Point(70, 60+Math.floor(Math.sqrt(3)*20 + 0.5));
        Interaction.hexagon = new MyShapes(firstHexagonPointsArr, interactionHexagonColor);
        Interaction.hexagon.shape.class = "draggable";
        Interaction.hexagon.setPos(new Point(54, 190.5));

        var secondHexagonPointsArr = [];
        secondHexagonPointsArr[0] = new Point(50, 60);
        secondHexagonPointsArr[1] = new Point(70, 60-Math.floor(Math.sqrt(3)*20+0.5));
        secondHexagonPointsArr[2] = new Point(110, 60-Math.floor(Math.sqrt(3)*20+0.5));
        secondHexagonPointsArr[3] = new Point(130, 60);
        secondHexagonPointsArr[4] = new Point(110, 60+Math.floor(Math.sqrt(3)*20+0.5));
        secondHexagonPointsArr[5] = new Point(70, 60+Math.floor(Math.sqrt(3)*20+0.5));
        Interaction.hexagon2 = new MyShapes(secondHexagonPointsArr, interactionHexagonColor2);
        Interaction.hexagon2.shape.class = "draggable";
        Interaction.hexagon2.setPos(new Point(144, 190.5))

        var firstSquarePointsArr = [];
        firstSquarePointsArr[0] = new Point(50.5, 50.5);
        firstSquarePointsArr[1] = new Point(50.5, 90.5);
        firstSquarePointsArr[2] = new Point(90.5, 90.5);
        firstSquarePointsArr[3] = new Point(90.5, 50.5);
        Interaction.square = new MyShapes(firstSquarePointsArr, interactionSquareColor);
        Interaction.square.shape.class = "draggable";
        Interaction.square.setPos(new Point(54.5, 110.5));

        var secondSquarePointsArr = [];
        secondSquarePointsArr[0] = new Point(50.5, 50.5);
        secondSquarePointsArr[1] = new Point(50.5, 90.5);
        secondSquarePointsArr[2] = new Point(90.5, 90.5);
        secondSquarePointsArr[3] = new Point(90.5, 50.5);
        Interaction.square2 = new MyShapes(secondSquarePointsArr, interactionSquareColor2);
        Interaction.square2.shape.class = "draggable";
        Interaction.square2.setPos(new Point(144.5, 110.5))


        // dropable area
        Interaction.dropArea = new Path();
        Interaction.dropArea.moveTo(214.5, 256.5);
        Interaction.dropArea.lineTo(570.5, 256.5);
        Interaction.dropArea.lineTo(570.5, 4.5);
        Interaction.dropArea.lineTo(214.5, 4.5);
        Interaction.dropArea.lineTo(214.5, 256.5);
        Interaction.dropArea.closed = true;
        Interaction.dropArea.strokeColor = "grey";
        Interaction.dropArea.fillColor = "white";
        Interaction.dropArea.class = "dropArea";
        Interaction.dropArea.opacity = 0;

        Interaction.droppedArr = [];
        var tool = new Tool();
        tool.onMouseDown = function(event){
            if(event.item){
                Interaction.setStatus('');

                if(event.item.class == "draggable"){

                    this.item = new MyShapes(event.item.parentObject.pointsArr, event.item.parentObject.fillColor).shape;
                    this.item.class = "clone";
                    this.drag = true;
                    this.totalDelta = new Point(0,0);
                    this.firstPosition = this.item.position;
                }

                else if(event.item.class == "clone"){
                    this.item = new MyShapes(event.item.parentObject.pointsArr, event.item.parentObject.fillColor).shape;
                    this.item.class = "clone";
                    this.drag = true;
                    this.totalDelta = new Point(0,0);
                    this.firstPosition = this.item.position;
                    Interaction.clonesObjectArr.splice(Interaction.clonesObjectArr.indexOf(event.item), 1);
                    event.item.remove();
                }
                else{
                    if(Interaction.selectedItem){
                        Interaction.selectedItem.fullySelected = false;
                        Interaction.selectedItem = null;
                    }
                }
            }
            else{
                if(Interaction.selectedItem){
                    Interaction.selectedItem.fullySelected = false;
                    Interaction.selectedItem = null;
                }
            }
        }

        tool.onMouseDrag = function(event){
            if(this.drag === true){
                var newPosition = new Point(this.firstPosition.add(this.totalDelta).add(event.delta));
                this.item.parentObject.setPos(newPosition);
                this.totalDelta = this.totalDelta.add(event.delta);
                for(var i = 0; i < Interaction.clonesObjectArr.length; i++){
                        this.item.parentObject.trySnapTo(Interaction.clonesObjectArr[i].parentObject);
                }

            }
        }

        tool.onMouseUp = function(event){
            if(event.item){
                var noOfPoints = 0;
                for(var i = 0; i < event.item.parentObject.pointsArr.length; i++){
                    console.log(event.item.parentObject.pointsArr[i]);
                   if(Interaction.dropArea.hitTest(event.item.parentObject.pointsArr[i])){
                       noOfPoints += 1;
                   }
                }
                if(noOfPoints == event.item.parentObject.pointsArr.length){
                    if(Interaction.selectedItem){
                        Interaction.selectedItem.fullySelected = false;
                        Interaction.selectedItem = null;
                    }
                    this.item.fullySelected = true;
                    Interaction.selectedItem = this.item;
                    Interaction.clonesObjectArr.push(event.item);
                }else{
                    this.item.remove();
                }
                this.drag = false;
                this.item = null;
            }

        }

        tool.activate();

        Interaction.selectedItem = null;

        Interaction.appendStatus({
            left:'240px',
            top:'275px',
            width: '300px',
            height: '20px',
            fontWeight: 'normal',
            color: 'red',
            textAlign: 'center',
        //    border: 'solid'
        });

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

    },
    rotateSelectedItem : function(){

        if(Interaction.selectedItem === null){
            Interaction.setStatus('Lütfen döndürmek için bir şekil seçiniz.');
        }
        else{
            Interaction.selectedItem.parentObject.rot(30);
            Interaction.setStatus('');
        }

    },
    getNewPage : function(){
        Interaction.selectedItem = null;
        for(var i = 0; i < Interaction.clonesObjectArr.length; i++){
            Interaction.clonesObjectArr[i].remove();
        }
        Interaction.clonesObjectArr = [];

    }
}
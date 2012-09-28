var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'rotationArrow',
            src:'/assets/animations/tangram/tangram_ok.png'
        },
        {
            id:'tangramBackground',
            src:'/assets/animations/tangram/tangram_zemin.jpg'
        },
        {
            id:'tangram_1',
            src:'/assets/animations/tangram/tangram_01.png'
        }
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Tangram parçalarını kullanarak, ortada verilmiş figürü oluşturunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.background = new Raster('tangramBackground');
        Interaction.background.position = new Point(317.5,149.5);

        $(Interaction.container).append('<button id="flip" class="flip_button" style="position:absolute;top:30px;right:55px;"></button>');

        Interaction.appendStatus({
            top:'200px',
            left:'7px',
            width:'160px',
            height:'56px',
            textAlign:'center'
        });

        Interaction.appendButton({
            bottom:'15px',
            right:'15px'
        });

        generateTangramQuestions();

        Interaction.setRandomGenerator(7);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Interaction.randomNumber = randomNumber;

        $('#flip').css("opacity",0.4);
        $('#flip').get(0).onclick = null;

        if(Interaction.questionPicture){
            Interaction.questionPicture.remove();
        }

        //Interaction.questionIndex = Util.randomInteger(0,18);
        Interaction.questionIndex = 1;
        Interaction.questionPicture = new Raster('tangram_'+Interaction.questionIndex);
        Interaction.questionPicture.position = new Point(317.5,149.5);

        Interaction.currentQuestion = TangramQuestions[Interaction.questionIndex-1];

        if(Interaction.questionTangram){
            for(var i = 0; i < Interaction.questionTangram.pieces.length; i++){
                Interaction.questionTangram.pieces[i].shape.remove();
            }
        }
        Interaction.questionTangram = null;
        Interaction.questionTangram = new Tangram();
        Interaction.questionTangram.drawPieces(new Point(0,0),120,interactionColors[Interaction.randomNumber],interactionColors[Interaction.randomNumber]);
        for(var i = 0; i < 7; i++){
            Interaction.questionTangram.pieces[i].setRotation(Interaction.questionTangram.pieces[i].currentAngle-Interaction.currentQuestion[i].angle);
            Interaction.questionTangram.pieces[i].setPos(Interaction.currentQuestion[i].point);
            Interaction.questionTangram.pieces[i].shape.opacity = 0;

        }

        if(Interaction.tangram){
            for(var i = 0; i < Interaction.tangram.pieces.length; i++){
                Interaction.tangram.pieces[i].shape.remove();
            }
        }
        Interaction.tangram = null;

        if(Interaction.rotItems){
            Interaction.rotItems.remove();
        }

        Interaction.dropArea = new Path.Rectangle(new Point(175,2), new Size(285,295));
        Interaction.dropArea.fillColor = "#f7f8f8";
        Interaction.dropArea.class = "dropArea";
        Interaction.dropArea.opacity = 0;

        Interaction.tangram = new Tangram();
        Interaction.tangram.drawPieces(new Point(28.5,25.5),120,interactionColors[Interaction.randomNumber],interactionColors[Interaction.randomNumber]);
        Interaction.tangram.animatePieces(2000);
        Interaction.tangram.pieces[3].isFlipped = 0;



        setTimeout('Interaction.createTool()',3000);
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
        Interaction.setStatus('Yanlış cevap, doğrusu yanda gösterilmiştir!',false);
		
    },
    createTool : function(){
        var tool = new Tool();
        tool.onMouseDown = function(event){
            if(event.item){
                this.item = event.item;
                if(this.item.class == "rotatable"){
                    this.rotate = true;
                    this.lastAngle = "wx";
                }
                else{
                    if(this.item.class == "draggable"){
                        this.drag = true;
                        this.totalDelta = new Point(0,0);
                        this.firstPosition = this.item.position;
                        if(Interaction.rotatableItem){
                            if(Interaction.rotItems){
                                Interaction.rotItems.remove();
                            }
                            Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem = null;
                            $('#flip').css("opacity",0.4);
                            $('#flip').get(0).onclick = null;

                            for(var i = 0; i < Interaction.tangram.pieces.length; i++){
                                this.item.insertAbove(Interaction.tangram.pieces[i].shape);
                            }

                        }
                    }
                    else{
                        if(Interaction.rotatableItem){
                            if(Interaction.rotItems){
                                Interaction.rotItems.remove();
                            }
                            Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                            Interaction.rotatableItem = null;
                            $('#flip').css("opacity",0.4);
                            $('#flip').get(0).onclick = null;
                        }
                    }
                }
            }
            else{
                if(Interaction.rotatableItem){
                    if(Interaction.rotItems){
                        Interaction.rotItems.remove();
                    }
                    Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                    Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                    Interaction.rotatableItem = null;
                    $('#flip').css("opacity",0.4);
                    $('#flip').get(0).onclick = null;
                }
            }
        };
        tool.onMouseDrag = function(event){
            if(this.drag == true){
                var newPosition = new Point(this.firstPosition.add(this.totalDelta).add(event.delta));
                this.item.parentObject.setPos(newPosition);
                this.totalDelta = this.totalDelta.add(event.delta);
            }
            else if(this.rotate == true){
                var beta = Util.findAngle(event.point.x,event.point.y,Interaction.rotatableItem.parentObject.centerPoint.x,Interaction.rotatableItem.parentObject.centerPoint.y);
                var angle = beta;
                angle = Util.radianToDegree(angle);
                if(this.lastAngle == "wx"){
                    this.lastAngle = angle;
                }
                this.item.rotate(this.lastAngle-angle,Interaction.rotatableItem.parentObject.centerPoint);
                Interaction.rotatableItem.parentObject.setRotation(this.lastAngle-angle);
                this.lastAngle = angle;
            }
        };
        tool.onMouseUp = function(event){
            if(this.item){
                if(this.item.class == "draggable"){
                    var noOfPoints = 0;
                    for(var i = 0; i < this.item.parentObject.pointsArr.length; i++){
                        if(Interaction.dropArea.hitTest(this.item.parentObject.pointsArr[i])){
                            noOfPoints += 1;
                        }
                    }
                    if(noOfPoints == this.item.parentObject.pointsArr.length){
                        Interaction.rotatableItem = this.item;
                        if(this.item.parentObject.myType == 3){
                            $('#flip').css("opacity",1);
                            $('#flip').get(0).onclick = flipSelectedItem;
                        }
                        for(var i = 0; i < 7; i++){
                            this.item.parentObject.trySnapTo(Interaction.questionTangram.pieces[i]);
                        }
                        Interaction.rotItems = new Group();
                        for(var i = 0; i < this.item.parentObject.pointsArr.length; i++){
                            var myPos = this.item.parentObject.pointsArr[i].findPointTo(this.item.parentObject.centerPoint,-10);

                            var myAng = Util.findAngle(this.item.parentObject.pointsArr[i].x,this.item.parentObject.pointsArr[i].y,this.item.position.x,this.item.position.y);
                            myAng = Util.radianToDegree(myAng);
                            myAng = 225-myAng;

                            var rotArrow = new Raster('rotationArrow');
                            rotArrow.position = new Point(myPos);
                            rotArrow.rotate(myAng,myPos);

                            var circ = new Path.Circle(myPos,10);
                            circ.fillColor = "red";
                            circ.class = "rotatable";
                            circ.opacity = 0;

                            Interaction.rotItems.addChild(circ);
                            Interaction.rotItems.addChild(rotArrow);
                        }
                        this.item.fillColor = interactionSelectedColors[Interaction.randomNumber];
                        this.item.strokeColor = interactionSelectedColors[Interaction.randomNumber];
                        Interaction.rotItems.class = "rotatable";
                    }
                    else{
                        if(this.item.parentObject.myType == 3){
                            if(this.item.parentObject.isFlipped == 1){
                                flipSelectedItem();
                            }
                        }
                        if(this.item.parentObject.myType == 3){
                            this.item = Interaction.tangram.pieces[3].shape;
                            this.item.parentObject.setRotation(this.item.parentObject.currentAngle-this.item.parentObject.originalAngle);
                            this.item.parentObject.setPos(this.item.parentObject.originalPosition);
                            if(Interaction.rotItems){
                                Interaction.rotItems.remove();
                            }
                            if(Interaction.rotatableItem){
                                Interaction.rotatableItem.fillColor = interactionColors[Interaction.randomNumber];
                                Interaction.rotatableItem.strokeColor = interactionColors[Interaction.randomNumber];
                                Interaction.rotatableItem = null;
                            }
                            $('#flip').css("opacity",0.4);
                            $('#flip').get(0).onclick = null;
                        }
                        else{
                            this.item.parentObject.setRotation(this.item.parentObject.currentAngle-this.item.parentObject.originalAngle);
                            this.item.parentObject.setPos(this.item.parentObject.originalPosition);
                        }
                    }
                }
            }

            this.drag = false;
            this.item = null;
            this.rotate = false;
        };
    }
}
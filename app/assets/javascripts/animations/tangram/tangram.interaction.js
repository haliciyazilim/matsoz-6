var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'rotationArrow',
            src:'/assets/animations/tangram/tangram_ok.png'
        }
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'25px',
            right:'200px',
            width:'300px',
            textAlign:'center'
        });

        Interaction.appendButton({
            bottom:'15px',
            right:'50px'
        });


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
                    Interaction.rotatableItem = this.item;
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
            }

            this.drag = false;
            this.item = null;
            this.rotate = false;
        };

        Interaction.setRandomGenerator(7);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;

        if(Interaction.tangram){
            for(var i = 0; i < Interaction.tangram.pieces.length; i++){
                Interaction.tangram.pieces[i].shape.remove();
            }
            Interaction.tangram = null;
        }
        if(Interaction.rotItems){
            Interaction.rotItems.remove();
        }

        Interaction.tangram = new Tangram();
        Interaction.tangram.drawPieces(new Point(50.5,80.5),120,interactionColors[Interaction.randomNumber],interactionColors[Interaction.randomNumber]);
        Interaction.tangram.animatePieces(2000);
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
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        });

        var tool = new Tool();
        tool.onMouseDown = function(event){
            if(event.item){
                this.item = event.item;
                if(this.item.isRotatable){

                }
                else{
                    if(event.item.class == "draggable"){
                        this.item = event.item;
                        this.drag = true;
                        this.totalDelta = new Point();
                        this.firstPosition = this.item.position;
                    }
                }
            }
            else{
                if(Interaction.rotatableItem){
                    Interaction.rotatableItem = null;
                }
            }
        };
        tool.onMouseDrag = function(event){
            if(this.drag){
                var newPosition = new Point(this.firstPosition.add(this.totalDelta).add(event.delta));
                this.item.parentObject.setPos(newPosition);
                this.totalDelta = this.totalDelta.add(event.delta);
            }
        };
        tool.onMouseUp = function(event){
            this.item.isRotatable = true;

            this.drag = false;
            this.item = null;
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
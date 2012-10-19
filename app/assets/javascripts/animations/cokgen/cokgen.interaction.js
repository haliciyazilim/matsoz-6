var Interaction = {

	getFramework:function(){
        return 'paper';
    },
    images : [
        {
            id:'dropable_default',
            src:'/assets/animations/cokgenler/dropable_default.png'
        },
        {
            id:'dropable_hover',
            src:'/assets/animations/cokgenler/dropable_hover.png'
        },
        {
            id:'dropable_false',
            src:'/assets/animations/cokgenler/dropable_false.png'
        },
        {
            id:'dropable_true',
            src:'/assets/animations/cokgenler/dropable_true.png'
        }
    ],
    init : function(container){
    Main.setObjective('Yandaki çokgenleri sınıflandırınız.');
    Interaction.container = container;
    Interaction.container.top = $(container).offset().top;
    Interaction.container.left = $(container).offset().left;
    var w = $(Interaction.container).width();
    var h = $(Interaction.container).height();
    project.activeLayer.removeChildren();
    Interaction.dropableShapes = {
        setImage : function(image){
            Interaction.dropableShapes.triangle.setImage($('#'+image).get(0));
            Interaction.dropableShapes.rectangle.setImage($('#'+image).get(0));
            Interaction.dropableShapes.pentagon.setImage($('#'+image).get(0));
            Interaction.dropableShapes.hexagon.setImage($('#'+image).get(0));
        },
        hitTest : function(p){
            if(Interaction.dropableShapes.triangle.bounds.contains(p))
                return Interaction.dropableShapes.triangle;
            if(Interaction.dropableShapes.rectangle.bounds.contains(p))
                return Interaction.dropableShapes.rectangle;
            if(Interaction.dropableShapes.pentagon.bounds.contains(p))
                return Interaction.dropableShapes.pentagon;
            if(Interaction.dropableShapes.hexagon.bounds.contains(p))
                return Interaction.dropableShapes.hexagon;
        }

    };
    Interaction.shuffledArray = null;
    createDropableShapesLeft(10,0,w*0.2,h*0.8);
    createDropableShapesRight(w*0.8-10,0,w*0.2,h*0.8);
    generateRandomShapes(w*0.25,10,w*0.55,h);
    Interaction.paper = {width:500,height:300};
    Interaction.preventDrag = false;
    if(Interaction.status == null || Interaction.status == 'undefined'){
        Interaction.status = document.createElement('div');
        Interaction.status.className = 'status_true';
        $(Interaction.status).css({
            position:'absolute',
            bottom:'10px',
            left:'0px',
            paddingLeft:'20px',
            width:'100%'
        });
        Interaction.container.appendChild(Interaction.status);
    }
    else
        Interaction.setStatus('');
    var drag = new Tool();
    drag.setHitTestOptions({
        fill: true,
        stroke: true,
        segments: true,
        tolerance: 2,
        class: "draggable"
    });
    drag.onMouseDown = function(event){
        if(event.item){
            drag.shape = event.item;
            event.item.start();
        }
    };
    drag.onMouseDrag = function(event){
        if(drag.shape)
            drag.shape.move(event.delta.x,event.delta.y,event.point.x,event.point.y);
    };
    drag.onMouseUp = function(event){
        if(drag.shape)
            drag.shape.up();
        drag.shape = null;
    }
    drag.activate();
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
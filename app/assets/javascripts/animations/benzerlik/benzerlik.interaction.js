var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'resizeImage',
            src:'/assets/animations/benzerlik/resize.png'
        }
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki şeklin, bir köşesinden tutarak büyütüp ya da küçültüp benzerini elde edebilirsiniz.');
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
        Interaction.size = 30;
        Interaction.referencePoint = new Point(10,10);
        Interaction.boundary = new Path.Rectangle(Interaction.referencePoint,new Size(400,270));
        Interaction.boundary.set_style(interactionBoundaryStyle);
        Interaction.centerPoint = new Point(
            Interaction.boundary.bounds.x + Interaction.boundary.bounds.width*0.5,
            Interaction.boundary.bounds.y + Interaction.boundary.bounds.height*0.5
        )
        Interaction.createTool();
        Interaction.setRandomGenerator(19);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if(Interaction.path)
            Interaction.path.remove()
        if(Interaction.cornerPoints)
            for(var i=0; i < Interaction.cornerPoints.length; i++)
                Interaction.cornerPoints[i].remove();
        Interaction.button.className = 'next_button';
        Interaction.button.onclick = Interaction.prepareNextQuestion;
        /*<[[TEST*/
//            randomNumber = 12;
        /*TEST]]>*/
        var dots = Interaction.generateShape(randomNumber);
        var path = new Path();

        for(var i=0;i<dots.length;i++){
            var cornerPoint = dots[i].p.multiply(Interaction.size,Interaction.size).add(Interaction.referencePoint);
            path.add(cornerPoint);
            dots[i].p = cornerPoint;
        };
        path.closed = true;
        path.set_style(interactionPathStyle);
//        console.log(path);
        Interaction.path = path;
        Interaction.path.centerPoint = Util.centerOfPoints(extricatePoints(dots));
        var differenceToInteractionCenterPoint = Interaction.centerPoint.subtract(Interaction.path.centerPoint);
        Interaction.path.position = Interaction.path.position.add(differenceToInteractionCenterPoint);

        Interaction.cornerPoints = [];
        for(var i=0;i<dots.length; i++){
            dots[i].p = dots[i].p.add(differenceToInteractionCenterPoint);
            var circle = new Path.Circle(dots[i].p,6);
            circle.opacity = dots[i].opacity;
            circle.set_style(interactionCircleStyle);
            circle.class = 'cornerPoint';
            Interaction.cornerPoints.push(circle);
        }
        Interaction.path.centerPoint = Util.centerOfPoints(extricatePoints(dots));

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
    drawPathFromPoints : function(points){
        var path = new Path();
        for(var i=0;i<points.length;i++){
            path.add(points[i]);
        }
        path.closed = true;
        path.set_style(interactionPathStyle);
        path.centerPoint = Util.centerOfPoints(points);
        return path;
    },
    createTool: function(){
        var tool = new Tool();

        tool.onMouseDown = function(event){
            this.drag = false;
            if(event.item && event.item.class == 'cornerPoint'){
                this.drag = true;
                this.initialDistance = Interaction.path.centerPoint.getDistance(event.point);
                for(var i=0; i<Interaction.cornerPoints.length; i++)
                    Interaction.cornerPoints[i].initialPosition = Interaction.cornerPoints[i].position
            }
        }

        tool.onMouseDrag = function(event){
            if(this.drag == true){
                this.currentDistance = Interaction.path.centerPoint.getDistance(event.point);
                if(this.currentDistance < 25)
                    return;
                var ratio = this.currentDistance / this.initialDistance;
                for(var i=0; i<Interaction.cornerPoints.length;i++)
                    if(!Interaction.boundary.bounds.contains(Interaction.cornerPoints[i].initialPosition.scale(ratio,Interaction.path.centerPoint))){
                        console.log("the area is overflowed");
                        return;
                    }
                var points = [];
                for(var i=0; i<Interaction.cornerPoints.length; i++){
                    Interaction.cornerPoints[i].position = Interaction.cornerPoints[i].initialPosition.scale(ratio,Interaction.path.centerPoint);
                    points.push(Interaction.cornerPoints[i].position);
                }
                Interaction.path.remove();
                Interaction.path = Interaction.drawPathFromPoints(points);
                for(var i=0; i<Interaction.cornerPoints.length; i++){
                    Interaction.cornerPoints[i].insertAbove(Interaction.path);
                }

            }
        }

        tool.onMouseUp = function(event){
            this.drag = false;
        }

        tool.activate();
        Interaction.tool = tool;
    },

    generateShape:function(type){
        if(type < 11){
            var points = InteractiveGrids.CreateShape(type);
            var dots = [];
            for(var i=0;i<points.length;i++)
                dots.push({p:points[i],opacity:1});
            return dots;
        }
        var points = [];
        switch(type){
            case 11:
                points.push({p:new Point(0,0),opacity:1});
                points.push({p:new Point(0,1),opacity:0});
                points.push({p:new Point(0,2),opacity:0});
                points.push({p:new Point(0,3),opacity:0});
                points.push({p:new Point(0,4),opacity:1});
                points.push({p:new Point(1,4),opacity:0});
                points.push({p:new Point(2,4),opacity:0});
                points.push({p:new Point(3,4),opacity:0});
                points.push({p:new Point(4,4),opacity:1});
                points.push({p:new Point(4,2),opacity:1});
                points.push({p:new Point(2,2),opacity:1});
                points.push({p:new Point(2,0),opacity:1});
                break;
            case 12:
                points.push({p:new Point(3,0)  ,opacity:1});
                points.push({p:new Point(4,2)  ,opacity:1});
                points.push({p:new Point(6,2)  ,opacity:1});
                points.push({p:new Point(4.3,3),opacity:1});
                points.push({p:new Point(5,5)  ,opacity:1});
                points.push({p:new Point(3,3.8),opacity:1});
                points.push({p:new Point(1,5)  ,opacity:1});
                points.push({p:new Point(1.6,3),opacity:1});
                points.push({p:new Point(0,2)  ,opacity:1});
                points.push({p:new Point(2,2)  ,opacity:1});
                break;
            case 13:
                points.push({p:new Point(0,1),opacity:1});
                points.push({p:new Point(0,3),opacity:1});
                points.push({p:new Point(3,3),opacity:1});
                points.push({p:new Point(3,4),opacity:1});
                points.push({p:new Point(5,2),opacity:1});
                points.push({p:new Point(3,0),opacity:1});
                points.push({p:new Point(3,1),opacity:1});
                break;
            case 14:
                points.push({p:new Point(1,0),opacity:1});
                points.push({p:new Point(0,2),opacity:1});
                points.push({p:new Point(1,4),opacity:1});
                points.push({p:new Point(2,2),opacity:1});
                break;
            case 15:
                points.push({p:new Point(2,0),opacity:1});
                points.push({p:new Point(0,2),opacity:1});
                points.push({p:new Point(0,4),opacity:1});
                points.push({p:new Point(4,4),opacity:1});
                points.push({p:new Point(4,2),opacity:1});
                break;
            case 16:
                points.push({p:new Point(0,0),opacity:1});
                points.push({p:new Point(1,0),opacity:0});
                points.push({p:new Point(2,0),opacity:0});
                points.push({p:new Point(3,0),opacity:1});
                points.push({p:new Point(3,1),opacity:1});
                points.push({p:new Point(2,1),opacity:1});
                points.push({p:new Point(2,2),opacity:1});
                points.push({p:new Point(1,2),opacity:1});
                points.push({p:new Point(1,1),opacity:1});
                points.push({p:new Point(0,1),opacity:1});
                break;
            case 17:
                points.push({p:new Point(0,0),opacity:1});
                points.push({p:new Point(1,0),opacity:0});
                points.push({p:new Point(2,0),opacity:1});
                points.push({p:new Point(2,1),opacity:1});
                points.push({p:new Point(3,1),opacity:1});
                points.push({p:new Point(3,2),opacity:1});
                points.push({p:new Point(2,2),opacity:0});
                points.push({p:new Point(1,2),opacity:1});
                points.push({p:new Point(1,1),opacity:1});
                points.push({p:new Point(0,1),opacity:1});
                break;
            case 18:
                points.push({p:new Point(0,1),opacity:1});
                points.push({p:new Point(0,2),opacity:1});
                points.push({p:new Point(1,2),opacity:0});
                points.push({p:new Point(2,2),opacity:0});
                points.push({p:new Point(3,2),opacity:1});
                points.push({p:new Point(3,1),opacity:0});
                points.push({p:new Point(3,0),opacity:1});
                points.push({p:new Point(2,0),opacity:1});
                points.push({p:new Point(2,1),opacity:1});
                points.push({p:new Point(1,1),opacity:0});
                break;

        }
        return points;
    }
}
function extricatePoints(points){
    var p_s  = [];
    for(var i=0;i<points.length;i++)
        p_s.push(points[i].p);
    return p_s;
}
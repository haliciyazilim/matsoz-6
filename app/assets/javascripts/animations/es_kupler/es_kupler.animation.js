var Animation = {
    images:[],
	init:function(container){

        Main.animationFinished();

//        Animation.container = container;
//        Animation.initializePoints();
//        Animation.shape = new AnimationShape();
//        Animation.shape.draw(new Point(200,125));
//        Animation.grids = new InteractiveGrids({
//            size:30,
//            position:new Point(425.5,10.5),
//            rows:5,
//            cols:5,
//            style:{
//                strokeColor:'#888'
//            }
//        });
//        Animation.sideText = new PointText(new Point(335,100));
//        Animation.sideText.set_style({
//            justification:'center',
//            fontSize:14
//        });
//        AnimationManager.delay(Animation.showFrontSide,500);
//        AnimationManager.delay(Animation.clean,4500);
    },
    clean:function(){
        Animation.grids.path.animate({
            style:{opacity:0},
            duration:500,
            callback:function(){
                this.remove();
            }
        });
        Animation.changeText('');
        Animation.shape.redraw();
    },
    changeText:function(newText,duration,delay){
        if(!duration)
            duration = 1000;
        Animation.sideText.animate({
            style:{opacity:0},
            duration:duration/2,
            delay:delay,
            callback:function(){
                this.content = newText;
                this.animate({
                    style:{opacity:1},
                    duration:duration/2
                })
            }
        })
    },
    showLeftSide:function(delay){
        Animation.changeText('soldan');
        Animation.shape.showCorrectSide(Shape3.LeftSide);
        Animation.drawToGrids(Animation.leftPoints,1000,3000);
        AnimationManager.delay(function(){
            Animation.shape.redraw();
//            Animation.shape.
        },3000);
    },
    showRightSide:function(delay){

    },
    showUpSide:function(delay){

    },
    showDownSide:function(delay){

    },
    showFrontSide:function(delay){
        Animation.changeText('önden');
        Animation.shape.flatten(1000,1000);
        Animation.drawToGrids(Animation.frontPoints,1000,2000);
    },
    showBackSide:function(delay){

    },
    drawToGrids:function(points,duration,delay){
        if(!duration)
            duration=500;
        if(!delay)
            delay = 0;
        AnimationManager.delay(function(){
            Animation.grids.drawShape(points);
            Animation.grids.path.opacity = 0;
            Animation.grids.path.animate({
                style:{opacity:1},
                duration:duration
            })
        },delay)
    },
    initializePoints:function(){
        Animation.frontPoints = [
            new Point(1,2),
            new Point(1,3),
            new Point(1,4),
            new Point(2,4),
            new Point(3,4),
            new Point(4,4),
            new Point(4,3),
            new Point(4,2),
            new Point(4,1),
            new Point(3,1),
            new Point(3,2),
            new Point(3,3),
            new Point(2,3),
            new Point(2,2)
        ];
        Animation.leftPoints =[
            new Point(2,1),
            new Point(2,2),
            new Point(2,3),
            new Point(2,4),
            new Point(3,4),
            new Point(3,3),
            new Point(3,2),
            new Point(3,1)
        ]
    }

}


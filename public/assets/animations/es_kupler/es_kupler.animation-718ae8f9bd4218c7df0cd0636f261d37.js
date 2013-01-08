var Animation = {
    images:[],
	init:function(container){

//        Main.animationFinished();

        Animation.container = container;
        Animation.initializePoints();
        Animation.shape = new AnimationShape();
        Animation.shape.draw(new Point(200,125));
        Animation.grids = new InteractiveGrids({
            size:30,
            position:new Point(425.5,10.5),
            rows:5,
            cols:5,
            style:{
                strokeColor:'#888'
            }
        });
        Animation.sideText = new PointText(new Point(335,100));
        Animation.sideText.set_style({
            justification:'center',
            fontSize:14
        });
        var functions = [
            Animation.showFrontSide,
            Animation.showRightSide,
            Animation.showLeftSide,
            Animation.showUpSide,
            Animation.showBackSide
        ];
        var delay = 7000;
        for(var i=0;i<functions.length;i++){
            AnimationManager.delay(functions[i],delay*i+500+(i==0?1000:0));
            AnimationManager.delay(Animation.clean,delay*(i+1)-1000);
        }
        Main.animationFinished(delay * functions.length );
    },
    recreateShape:function(){
        var animHelper = new AnimationHelper({
            opacity:1
        });
        animHelper.animate({
            style:{opacity:0},
            duration:500,
            delay:100,
            update:function(){
                Animation.shape.setOpacity(this.opacity);
            },
            callback:function(){
                Animation.shape.removeCubes();
                Animation.shape = new AnimationShape();
                Animation.shape.draw(new Point(200,125));
                Animation.shape.setOpacity(0);
                this.animate({
                    style:{opacity:1},
                    duration:500,
                    delay:100,
                    update:function(){
                        Animation.shape.setOpacity(this.opacity);
                    }

                })
            }
        })

    },
    clean:function(){
        if(Animation.grids.path)
            Animation.grids.path.animate({
                style:{opacity:0},
                duration:500,
                callback:function(){
                    this.remove();
                }
            });
        Animation.changeText('');
        Animation.recreateShape();
    },
    changeText:function(newText,duration,delay){
        if(!duration)
            duration = 500;
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
    showLeftSide:function(){
        Animation.changeText('soldan');
        Animation.shape.showCorrectSide(Shape3.LeftSide);
        Animation.drawToGrids(Animation.leftPoints,1000,3000);

    },
    showRightSide:function(){
        Animation.changeText('sağdan');
        Animation.shape.showCorrectSide(Shape3.RightSide);
        Animation.drawToGrids(Animation.leftPoints,1000,3000);

    },
    showUpSide:function(){
        Animation.changeText('üstten');
        Animation.shape.showCorrectSide(Shape3.UpSide);
        Animation.drawToGrids(Animation.upPoints,1000,3000);

    },
    showDownSide:function(){
        Animation.changeText('alttan');
        Animation.shape.showCorrectSide(Shape3.DownSide);
        Animation.drawToGrids(Animation.upPoints,1000,3000);

    },
    showFrontSide:function(){
        Animation.changeText('önden');
        Animation.shape.flatten(1000,1000);
        Animation.drawToGrids(Animation.frontPoints,1000,2000);
    },
    showBackSide:function(){
        Animation.changeText('arkadan');
        Animation.shape.showCorrectSide(Shape3.BackSide);
        Animation.drawToGrids(Animation.backPoints,1000,2000);

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
        Animation.backPoints = [
            new Point(4,2),
            new Point(4,3),
            new Point(4,4),
            new Point(3,4),
            new Point(2,4),
            new Point(1,4),
            new Point(1,3),
            new Point(1,2),
            new Point(1,1),
            new Point(2,1),
            new Point(2,2),
            new Point(2,3),
            new Point(3,3),
            new Point(3,2)
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
        ];
        Animation.upPoints = [
            new Point(1,2),
            new Point(2,2),
            new Point(3,2),
            new Point(4,2),
            new Point(4,3),
            new Point(3,3),
            new Point(2,3),
            new Point(1,3),
        ];
    }

}

;

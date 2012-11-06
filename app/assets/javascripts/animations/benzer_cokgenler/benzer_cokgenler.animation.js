var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Main.animationFinished();

        var pantograph = new Pantograph({
            position:new Point(200,160)
        })
        pantograph.draw();
        pantograph.setA(pantograph.referencePoint.add(110,-75));
        Animation.pantograph = pantograph;
        console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
        Path.DrawPoints([
            new Point(236.663, 135.0025 ),
            new Point(269.993, 135.0025),
            new Point(279.992, 160),
            new Point(229.997, 160)
        ]).set_style({
                strokeColor:'#000'
            });
        Animation.path = new Path();
        Animation.path.add(Animation.pantograph.aPosition);
        Animation.path.set_style({
            strokeColor:'#000'
        })
        AnimationManager.delay(Animation.anim1,1000);
    },
    anim1:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(100,0)},
            duration:2000,
            init:function(){
            },
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Animation.anim2();
            },
            animationType:'easeInEaseOut'
        });
    },
    anim2:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(30,75)},
            duration:2000,
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Animation.anim3();
            },
            animationType:'easeInEaseOut'
        });
    },
    anim3:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(-150,0)},
            duration:2000,
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Animation.anim4();
            },
            animationType:'easeInEaseOut'
        });
    },
    anim4:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(20,-75)},
            duration:2000,
            update:function(){
                this.redraw();
                Animation.path.add(this.aPosition);
            },
            callback:function(){
                console.log(Animation.pantograph.armsCommonPoint.x,Animation.pantograph.armsCommonPoint.y);
                Main.animationFinished();
            },
            animationType:'easeInEaseOut'
        });
    }
}
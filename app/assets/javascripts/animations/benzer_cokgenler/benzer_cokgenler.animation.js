var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Main.animationFinished();
//
//        var rect = Path.TwoPointRectangle(new Point(30,40), new Point(230,70));
//        rect.set_style({
//            strokeColor:'#000'
//        })
        var pantograph = new Pantograph({
            position:new Point(200,150)
        })
        pantograph.draw();
        pantograph.animate({
            style:{aPosition:new Point(300,80)},
            duration:2000,
            update:function(){
                this.redraw();
            },
            callback:function(){
                Animation.anim1();
            }
        });

        Animation.pantograph = pantograph;
    },
    anim1:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(100,0)},
            duration:2000,
            update:function(){
                this.redraw();
            },
            callback:function(){
                Animation.anim2();
            }
        });
    },
    anim2:function(){
        Animation.pantograph.animate({
            style:{aPosition:Animation.pantograph.aPosition.add(50,75)},
            duration:2000,
            update:function(){
                this.redraw();
            }
        });
    }
}
var Animation = {
    images:[
    ],
	init:function(container){
        Animation.grids = new InteractiveGrids({
            position:new Point(305.5,10.5),
            size:17,
            style:{
                strokeColor:'#999'
            }
        }).drawShape([
            new Point(1,1),
            new Point(2,1),
            new Point(2,3),
            new Point(1,3),
            new Point(1,1),
            new Point(1,2),
            new Point(3,2),
            new Point(3,3),
            new Point(1,3)
        ]);
        Animation.grids.path.set_style({
            fillColor:new RgbColor(0.5,1,0),
            strokeColor:new RgbColor(0,0,0)
        });

        AnimationManager.delay(function(){
            var text = new PointText(new Point(375,165));
            text.set_style({
                content:'üç birim sağa',
                justification:'center',
                fontSize:13,
                opacity:0
            }).animate({
                style:{opacity:1},
                duration:500
            });
            Animation.grids.animateToNewPosition({
                position:Animation.grids.getPathPosition().add(3,0),
                speed:0.5,
                delay:500,
                callback:function(){
                    text.animate({
                        style:{opacity:0},
                        duration:500,
                        delay:500,
                        callback:text.remove
                    })
                }
            })

        },1000)

        AnimationManager.delay(function(){
            var text = new PointText(new Point(375,165));
            text.set_style({
                content:'dört birim aşağıya',
                justification:'center',
                fontSize:13,
                opacity:0
            }).animate({
                    style:{opacity:1},
                    duration:500
                });
            Animation.grids.animateToNewPosition({
                position:Animation.grids.getPathPosition().add(0,4),
                speed:0.5,
                delay:500,
                callback:function(){
                    text.animate({
                        style:{opacity:0},
                        duration:500,
                        delay:500,
                        callback:function(){
                            text.remove();
                            Main.animationFinished();
                        }
                    })
                }
            })

        },4000)
    }
}
;

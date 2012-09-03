var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.oppositeAngles = new OppositeAngles({
            angle:150,
            phase:15,
            radius:120,
            center:new Point(200,60),
            draggable:false
        });

        Animation.oppositeAngles.draw();
        Main.animationProject.activeLayer.set_style({opacity:0});
        Main.animationProject.activeLayer.animate({
            style:{opacity:1},
            delay:1000,
            duration:1
        });
        Animation.firstAngle = true;
        AnimationManager.delay(function(){
            for(var i=0;i<Animation.oppositeAngles.angles.length;i++){
                Animation.oppositeAngles.angles[i].setAngleOpacity(0);
                Animation.oppositeAngles.letters.set_style({opacity:0})
            }
            Animation.showLegs();
        },1000);

    },
    showLegs:function(){
        var animHelper =new AnimationHelper({opacity:0});
        animHelper.animate({
            style:{opacity:1},
            duration:1000,
            update:function(){
                Animation.oppositeAngles.angles[1].firstLeg.opacity = this.opacity;
                Animation.oppositeAngles.angles[3].firstLeg.opacity = this.opacity;
            },
            callback:function(){
                animHelper.opacity = 0;
                animHelper.animate({
                    style:{opacity:1},
                    duration:1000,
                    update:function(){
                        Animation.oppositeAngles.angles[1].secondLeg.opacity = this.opacity;
                        Animation.oppositeAngles.angles[3].secondLeg.opacity = this.opacity;
                    },
                    callback:function(){
                        Animation.showLetters();
                    }
                })
            }
        })
    },
    showLetters:function(){
        Animation.oppositeAngles.letters.animate({
            style:{opacity:1},
            duration:1000,
            delay:500,
            callback:function(){
                Animation.showAngles();
            }
        })
    },
    showAngles:function(){
        var anglesText11 = new PointText(Animation.oppositeAngles.centerPoint.add(0,75));
        var anglesText12 = new PointText(Animation.oppositeAngles.centerPoint.add(0,105));
        anglesText11.justification = 'center';
        anglesText12.justification = 'center';
        anglesText11.set_style({fontSize:14,opacity:0})
        anglesText12.set_style({fontSize:14,opacity:0})
        anglesText11.content = Animation.firstAngle?"AOC ve BOD açıları eş":"AOD ve BOC açıları eş"
        anglesText12.content =  "Ters açı"
        var animHelper =new AnimationHelper({opacity:0});
        animHelper.animate({
            style:{opacity:1},
            duration:1000,
            update:function(){
                Animation.oppositeAngles.angles[Animation.firstAngle?1:0].arc.opacity = this.opacity;
                Animation.oppositeAngles.angles[Animation.firstAngle?1:0].arcText.opacity = this.opacity;
                Animation.oppositeAngles.angles[Animation.firstAngle?3:2].arc.opacity = this.opacity;
                Animation.oppositeAngles.angles[Animation.firstAngle?3:2].arcText.opacity = this.opacity;
                anglesText11.opacity = this.opacity;
                anglesText12.opacity = this.opacity;
            },
            callback:function(){
                if(Animation.firstAngle == true){
                    Animation.firstAngle = false;
                }
                else{
                    Main.animationFinished();
                    return;
                }
                Animation.oppositeAngles = new OppositeAngles({
                    angle:150,
                    phase:15,
                    radius:120,
                    center:new Point(550,60),
                    draggable:false
                });
                Animation.oppositeAngles.draw();
                var rect = new Path.Rectangle(new Point(350,0),new Size(400,200));
                rect.fillColor = "#fff";
                rect.animate({
                    style:{opacity:0},
                    delay:1000,
                    duration:1000,
                    callback:rect.remove
                })
                AnimationManager.delay(function(){
                    for(var i=0;i<Animation.oppositeAngles.angles.length;i++){
                        Animation.oppositeAngles.angles[i].setAngleOpacity(0);
                        Animation.oppositeAngles.letters.set_style({opacity:0})
                    }
                    Animation.showLegs();
                },1000);
            }

        })
    }
}
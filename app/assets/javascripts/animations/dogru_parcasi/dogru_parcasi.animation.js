var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var lineStart = animStart+1000;
        var dotStart = lineStart+6000;
        var lettersStart = dotStart+2000;


    //    Animation.line = new Path.Line(new Point(379.5,80.5), new Point(381.5,80.5));
    //    Animation.line.strokeColor = "black";

        var dot1 = new Path.Circle(new Point(235,80),6);
        dot1.strokeColor = "black";
        dot1.fillColor = "black";
        dot1.opacity = 0;

        var dot2 = new Path.Circle(new Point(525,80),6);
        dot2.strokeColor = "black";
        dot2.fillColor = "black";
        dot2.opacity = 0;

        Animation.line2 = new Path.Line(new Point(234.5,80.5), new Point(525.5,80.5));
        Animation.line2.strokeColor = "black";
        Animation.line2.strokeWidth = 3;
        Animation.line2.opacity = 0;

        var animHelper = new AnimationHelper({
            X:0
        });

        animHelper.animate({
            style:{
                X:230
            },
            duration:5000,
            delay:lineStart,
            animationType:'linear',
            update:function(){
                if(this.X < 150){
                    if(Animation.line){
                        Animation.line.remove();
                    }

                    Animation.line = new Path.Line(new Point(379.5-this.X,80.5), new Point(381.5+this.X,80.5));
                    Animation.line.strokeColor = "black";
                    Animation.line.strokeWidth = 3;
                }
                else{
                    if(Animation.line3){
                        Animation.line3.remove();
                    }
                    if(Animation.line4){
                        Animation.line4.remove();
                    }
                    Animation.line3 = new Path.Line(new Point(230.5,80.5),new Point(379.5-this.X,80.5));
                    Animation.line3.strokeColor = "black";
                    Animation.line3.strokeWidth = 3;
                    Animation.line3.opacity = 1;
                    Animation.line3.insertAbove(dot1);

                    Animation.line4 = new Path.Line(new Point(530.5,80.5), new Point(381.5+this.X,80.5));
                    Animation.line4.strokeColor = "black";
                    Animation.line4.strokeWidth = 3;
                    Animation.line4.opacity = 1;
                    Animation.line4.insertAbove(dot2);
                }
            },
            callback:function(){
                Animation.line3.animate({
                    style:{
                        opacity:0
                    },
                    duration:1000,
                    delay:3000,
                    animationType:'easeInOutQuad'
                });

                Animation.line4.animate({
                    style:{
                        opacity:0
                    },
                    duration:1000,
                    delay:3000,
                    animationType:'easeInOutQuad'
                });
            }
        });

        dot1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });
        dot2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });

        Animation.line2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });
        console.log("dotStart ",dotStart);
        var letters = Util.dom({parent:Animation.container, tag:'div', css:lettersStyle,
            html:'<span style="float:left">A</span> <span style="float:right">B</span><span style="position:relative;top:30px;">AB doğru parçası</span>&nbsp;&nbsp;&nbsp;<span style="position:relative;top:30px;">[AB]</span>'
        });

        $(letters).delay(lettersStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});
    }
}
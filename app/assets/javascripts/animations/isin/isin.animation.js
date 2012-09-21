var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var pencilStart = animStart+1000;
        var lineStart = pencilStart+1500;
        var dotStart = lineStart+5500;
        var lettersStart = dotStart+2000;

        Animation.dot1 = new Path.Circle(new Point(237,50),6);
        Animation.dot1.strokeColor = "black";
        Animation.dot1.fillColor = "black";
        Animation.dot1.opacity = 0;

        Animation.dot2 = new Path.Circle(new Point(525,50),6);
        Animation.dot2.strokeColor = "black";
        Animation.dot2.fillColor = "black";
        Animation.dot2.opacity = 0;

        Animation.arrow = new Path.OneSidedArrow(new Point(587.5,50.5), new Point(588.5,50.5), 10,30);
        Animation.arrow.opacity = 0;

        var letters = Util.dom({parent:Animation.container, tag:'div', css:lettersStyle,
            html:'<span style="float:left">A</span> <span style="float:right">B</span><span style="position:relative;top:30px;">[AB</span>&nbsp;&nbsp;&nbsp;<span style="position:relative;top:30px;">AB</span>'
        });
        var letters2 = Util.dom({parent:Animation.container, tag:'div', css:letters2Style,
            html:'<span>AB ışını</span>'
        });


        var myArrow = new Path.OneSidedArrow(new Point(400,86),new Point(440,86),10,20);
        myArrow.opacity = 0;

        var pencil = Util.dom({parent:Animation.container, tag:'div', css:pencilStyle,
            html:'<img id="pencil" src="/assets/animations/isin/kursun_kalem_.png"/>'
        });

        $(pencil).delay(pencilStart).animate({opacity:1},1000,'easeInOutQuad')
            .delay(500).animate({left:'+=350px'},4000,'linear')
            .delay(500).animate({opacity:0},1000,'easeInOutQuad');

        var animHelper = new AnimationHelper({
            X:0
        });

        animHelper.animate({
            style:{
                X:350
            },
            duration:4000,
            delay:lineStart,
            animationType:'linear',
            update:function(){
                if(Animation.line){
                    Animation.line.remove();
                }
                Animation.line = new Path.Line(new Point(237.5,50.5), new Point(237.5+this.X,50.5));
                Animation.line.strokeColor = "black";
                Animation.line.strokeWidth = 3;
            },
            callback:function(){
                Animation.line.insertBelow(Animation.dot1);
                Animation.line.insertBelow(Animation.dot2);
            }
        });

        Animation.dot1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });

        Animation.dot2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });

        Animation.arrow.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });

        $(letters).delay(lettersStart).animate({opacity:1},1000,'easeInOutQuad');
        $(letters2).delay(lettersStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});

        myArrow.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lettersStart,
            animationType:'easeInOutQuad'
        });
    }
}
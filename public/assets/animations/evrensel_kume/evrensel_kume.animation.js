var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.referencePoint = new Point(200,20);
        Animation.dots = [];
        var r = 5;
        Animation.dots.push( new Path.Circle( Animation.referencePoint.add( 50, 30), r ) );
        Animation.dots.push( new Path.Circle( Animation.referencePoint.add(150, 50), r ) );
        Animation.dots.push( new Path.Circle( Animation.referencePoint.add(210,100), r ) );
        Animation.dots.push( new Path.Circle( Animation.referencePoint.add(220, 30), r ) );
        Animation.dots.push( new Path.Circle( Animation.referencePoint.add(240, 75), r ) );
        Animation.dots.push( new Path.Circle( Animation.referencePoint.add( 75,115), r ) );

        for(var i=0;i < Animation.dots.length;i++){
            Animation.dots[i].set_style(animationDotStyle);
        }

        Animation.setA = new Path.Oval(new Rectangle(Animation.referencePoint.add(20,0), new Size(150,80)));
        Animation.setA.set_style(animationEdgeStyle);

        Animation.setB = new Path.Oval(new Rectangle(Animation.referencePoint.add(110,10), new Size(180,100)));
        Animation.setB.set_style(animationEdgeStyle);
        Animation.setC = new Path.Oval(new Rectangle(Animation.referencePoint.add(40,90), new Size(80,50)));
        Animation.setC.set_style(animationEdgeStyle);

        Animation.setAText = new PointText(Animation.referencePoint.add(20,10))
        Animation.setBText = new PointText(Animation.referencePoint.add(290,30))
        Animation.setCText = new PointText(Animation.referencePoint.add(20,110))

        Animation.setAText.content = "A";
        Animation.setBText.content = "B";
        Animation.setCText.content = "C";

        Animation.setAText.set_style(animationTextStyle);
        Animation.setBText.set_style(animationTextStyle);
        Animation.setCText.set_style(animationTextStyle);

        Animation.universalSet = new Path.Rectangle(Animation.referencePoint.add(-50,-16),new Size(420,165));
        Animation.universalSet.set_style(animationEdgeStyle);

        Animation.universalSetText = new PointText(Animation.referencePoint.add(-45,10));
        Animation.universalSetText.content = "E";
        Animation.universalSetText.set_style(animationTextStyle).set_style({fillColor:'#f00',strokeColor:'#f00'})


        Animation.showSetA( 500);
        Animation.showSetB(2000);
        Animation.showSetC(3500);
        Animation.showUniversalSet(5000);
        Main.animationFinished(6500)

    },

    showSetA : function(delay){
        Animation.setA.set_style({opacity:0});
        Animation.dots[0].set_style({opacity:0});
        Animation.dots[1].set_style({opacity:0});
        Animation.setAText.set_style({opacity:0});

        Animation.setA.animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.dots[0].animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.dots[1].animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.setAText.animate({style:{opacity:1},delay:delay,duration:1000})
    },
    showSetB : function(delay){
        Animation.setB.set_style({opacity:0});
        Animation.dots[2].set_style({opacity:0});
        Animation.dots[3].set_style({opacity:0});
        Animation.dots[4].set_style({opacity:0});
        Animation.setBText.set_style({opacity:0});

        Animation.setB.animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.dots[2].animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.dots[3].animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.dots[4].animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.setBText.animate({style:{opacity:1},delay:delay,duration:1000})

    },
    showSetC : function(delay){
        Animation.setC.set_style({opacity:0});
        Animation.dots[5].set_style({opacity:0});
        Animation.setCText.set_style({opacity:0});

        Animation.setC.animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.dots[5].animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.setCText.animate({style:{opacity:1},delay:delay,duration:1000})
    },
    showUniversalSet: function(delay){
        Animation.universalSet.set_style({opacity:0});
        Animation.universalSetText.set_style({opacity:0});

        Animation.universalSet.animate({style:{opacity:1},delay:delay,duration:1000})
        Animation.universalSetText.animate({style:{opacity:1},delay:delay,duration:1000})
    }


}
;

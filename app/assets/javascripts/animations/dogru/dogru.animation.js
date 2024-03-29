var Animation = {
    images:[
        {
            id:'shadow',
            src:'/assets/animations/olasilik/top_golge.png'
        }
    ],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var lineStart = animStart + 2500;
        var firstStart = animStart + 3000;
        var secondStart = firstStart+1000;
        var thirdStart = secondStart+1000;
        var fourthStart = thirdStart+1000;
        var fadeOut = fourthStart + 2500;
        var dotStart = fadeOut + 2000;
        var lettersStart = dotStart+1500;


        Animation.line = new Path.Line(new Point(336.5,50.5), new Point(426.5,50.5));
        Animation.line.strokeColor = "black";
        Animation.line.opacity = 0;
        Animation.circleGroup = new Group();

        var firstGroup = new Group();
        var firstC = new Path.Circle(new Point(381,49),18);
        firstC.fillColor = firstCircleColor;
        var firstS = new Raster('shadow');
        firstS.position = new Point(381,49);
        firstGroup.addChild(firstC);
        firstGroup.addChild(firstS);
        firstGroup.opacity = 0;

        var secondGroup = new Group();
        var secondC = new Path.Circle(new Point(345,49),18);
        secondC.fillColor = secondCircleColor;
        var secondS = new Raster('shadow');
        secondS.position = new Point(345,49);
        secondGroup.addChild(secondC);
        secondGroup.addChild(secondS);
        secondGroup.position = new Point(-20,49);

        var second2Group = new Group();
        var second2C = new Path.Circle(new Point(417,49),18);
        second2C.fillColor = secondCircleColor;
        var second2S = new Raster('shadow');
        second2S.position = new Point(417,49);
        second2Group.addChild(second2C);
        second2Group.addChild(second2S);
        second2Group.position = new Point(777,49);

        var thirdGroup = new Group();
        var thirdC = new Path.Circle(new Point(309,49),18);
        thirdC.fillColor = thirdCircleColor;
        var thirdS = new Raster('shadow');
        thirdS.position = new Point(309,49);
        thirdGroup.addChild(thirdC);
        thirdGroup.addChild(thirdS);
        thirdGroup.position = new Point(-20,49);

        var third2Group = new Group();
        var third2C = new Path.Circle(new Point(453,49),18);
        third2C.fillColor = thirdCircleColor;
        var third2S = new Raster('shadow');
        third2S.position = new Point(453,49);
        third2Group.addChild(third2C);
        third2Group.addChild(third2S);
        third2Group.position = new Point(777,49);

        var fourthGroup = new Group();
        var fourthC = new Path.Circle(new Point(273,49),18);
        fourthC.fillColor = fourthCircleColor;
        var fourthS = new Raster('shadow');
        fourthS.position = new Point(273,49);
        fourthGroup.addChild(fourthC);
        fourthGroup.addChild(fourthS);
        fourthGroup.position = new Point(-20,49);

        var fourth2Group = new Group();
        var fourth2C = new Path.Circle(new Point(489,49),18);
        fourth2C.fillColor = fourthCircleColor;
        var fourth2S = new Raster('shadow');
        fourth2S.position = new Point(489,49);
        fourth2Group.addChild(fourth2C);
        fourth2Group.addChild(fourth2S);
        fourth2Group.position = new Point(777,49);

        var fifthGroup = new Group();
        var fifthC = new Path.Circle(new Point(237,49),18);
        fifthC.fillColor = fifthCircleColor;
        var fifthS = new Raster('shadow');
        fifthS.position = new Point(237,49);
        fifthGroup.addChild(fifthC);
        fifthGroup.addChild(fifthS);
        fifthGroup.position = new Point(-20,49);

        var fifth2Group = new Group();
        var fifth2C = new Path.Circle(new Point(525,49),18);
        fifth2C.fillColor = fifthCircleColor;
        var fifth2S = new Raster('shadow');
        fifth2S.position = new Point(525,49);
        fifth2Group.addChild(fifth2C);
        fifth2Group.addChild(fifth2S);
        fifth2Group.position = new Point(777,49);

        var dot1 = new Path.Circle(new Point(237,50),6);
        dot1.strokeColor = "black";
        dot1.fillColor = "black";
        dot1.opacity = 0;

        var dot2 = new Path.Circle(new Point(525,50),6);
        dot2.strokeColor = "black";
        dot2.fillColor = "black";
        dot2.opacity = 0;

        Animation.myLine = new Group();
        var myLinee = new Path.OneSidedArrow(new Point(186.5,50.5),new Point(576.5,50.5),10,30);
        myLinee.strokeWidth = 3;
        Animation.myLine.addChild(myLinee);
        var myLinee2 = new Path.OneSidedArrow(new Point(186.5,50.5),new Point(184.5,50.5),10,30);
        myLinee2.strokeWidth = 3;
        Animation.myLine.addChild(myLinee2);
        Animation.myLine.opacity = 0;

        Animation.circleGroup.addChild(firstGroup);
        Animation.circleGroup.addChild(secondGroup);
        Animation.circleGroup.addChild(second2Group);
        Animation.circleGroup.addChild(thirdGroup);
        Animation.circleGroup.addChild(third2Group);
        Animation.circleGroup.addChild(fourthGroup);
        Animation.circleGroup.addChild(fourth2Group);
        Animation.circleGroup.addChild(fifthGroup);
        Animation.circleGroup.addChild(fifth2Group);
        Animation.circleGroup.addChild(dot1);
        Animation.circleGroup.addChild(dot2);

        var letters = Util.dom({parent:Animation.container, tag:'div', css:lettersStyle,
            html:'<span style="float:left">A</span> <span style="float:right">B</span>' +
                '<span style="position:relative;top:30px;">AB</span>&nbsp;&nbsp;&nbsp;' +
                '<span style="position:relative;top:30px;">AB</span>'
        });
        var letters2 = Util.dom({parent:Animation.container, tag:'div', css:letters2Style,
            html:'<span>AB doğrusu</span>'
        });

        var myArroww = new Path.Line(new Point(396,86),new Point(430,86));
        myArroww.strokeColor = "black";
        myArroww.strokeWidth = 2;
        myArroww.opacity = 0;

        var animHelper = new AnimationHelper({
            X:0
        });

        animHelper.animate({
            style:{
                X:150
            },
            duration:5000,
            delay:lineStart,
            animationType:'linear',
            update:function(){
                Animation.line.remove();
                Animation.line = new Path.Line(new Point(334.5-this.X,50.5), new Point(424.5+this.X,50.5));
                Animation.line.strokeColor = "black";
                Animation.line.insertBelow(Animation.circleGroup);
                Animation.line.insertBelow(Animation.myLine);
            }
        });

        firstGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:animStart,
            animationType:'easeInOutQuad'
        });

        Animation.line.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:animStart+750,
            animationType:'easeInOutQuad'
        });

        secondGroup.animate({
            style:{
                position:new Point(345,49)
            },
            duration:1000,
            delay:firstStart,
            animationType:'easeInOutQuad'
        });

        second2Group.animate({
            style:{
                position:new Point(417,49)
            },
            duration:1000,
            delay:firstStart+300,
            animationType:'easeInOutQuad'
        });

        thirdGroup.animate({
            style:{
                position:new Point(309,49)
            },
            duration:1000,
            delay:secondStart,
            animationType:'easeInOutQuad'
        });

        third2Group.animate({
            style:{
                position:new Point(453,49)
            },
            duration:1000,
            delay:secondStart+300,
            animationType:'easeInOutQuad'
        });

        fourthGroup.animate({
            style:{
                position:new Point(273,49)
            },
            duration:1000,
            delay:thirdStart,
            animationType:'easeInOutQuad'
        });

        fourth2Group.animate({
            style:{
                position:new Point(489,49)
            },
            duration:1000,
            delay:thirdStart+300,
            animationType:'easeInOutQuad'
        });

        fifthGroup.animate({
            style:{
                position:new Point(237,49)
            },
            duration:1000,
            delay:fourthStart,
            animationType:'easeInOutQuad'
        });

        fifth2Group.animate({
            style:{
                position:new Point(525,49)
            },
            duration:1000,
            delay:fourthStart+300,
            animationType:'easeInOutQuad'
        });

        firstGroup.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:fadeOut,
            animationType:'easeInOutQuad'
        });

        secondGroup.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:fadeOut,
            animationType:'easeInOutQuad'
        });

        second2Group.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:fadeOut,
            animationType:'easeInOutQuad'
        });

        thirdGroup.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:fadeOut,
            animationType:'easeInOutQuad'
        });

        third2Group.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:fadeOut,
            animationType:'easeInOutQuad'
        });

        fourthGroup.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:fadeOut,
            animationType:'easeInOutQuad'
        });

        fourth2Group.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:fadeOut,
            animationType:'easeInOutQuad'
        });

        fifthGroup.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });

        fifth2Group.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
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
        Animation.myLine.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });
        Animation.line.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dotStart,
            animationType:'easeInOutQuad'
        });
        $(letters).delay(lettersStart).animate({opacity:1},1000,'easeInOutQuad');
        $(letters2).delay(lettersStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});

        myArroww.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lettersStart,
            animationType:'easeInOutQuad'
        });
    }
}
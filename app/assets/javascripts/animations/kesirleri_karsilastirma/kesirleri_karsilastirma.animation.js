var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var fractionsStart = animStart+1000;
        var axisStart = fractionsStart+2000;
        var bigDotsStart = axisStart+1500;
        var informationsStart = bigDotsStart+2000;
        var equalizedFractionsStart = informationsStart+6000;
        var sortingStart = equalizedFractionsStart+12500;
        var lessThanStart = sortingStart+2000;

        var smallDotsStart = lessThanStart+2000;

        var fractionsDiv = Util.dom({parent:Animation.container, tag:'div', css:fractionsDivStyle,
            html:'<div id="firstF" style="position:absolute;top:0px;left:0px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="firstNom" style="text-align:center;height:16px;">10</div>' +
                    '<div id="firstLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="firstDenom" style="text-align:center;height:16px;">16</div>' +
                '</div>' +
                '<div id="secondF" style="position:absolute;top:0px;left:70px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="secondNom" style="text-align:center;height:16px;">1</div>' +
                    '<div id="secondLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="secondDenom" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<div id="thirdF" style="position:absolute;top:0px;left:140px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="thirdNom" style="text-align:center;height:16px;">7</div>' +
                    '<div id="thirdLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="thirdDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>'
        });

        var equalizedFractionsDiv = Util.dom({parent:Animation.container, tag:'div', css:equalizedFractionsDivStyle,
            html:'<div id="fourthF" style="opacity:0;position:absolute;top:0px;left:0px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="fourthNom" style="text-align:center;height:16px;">5</div>' +
                    '<div id="fourthLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="fourthDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<span id="firstL" style="opacity:0;position:absolute;top:10px;left:40px;"><</span> ' +
                '<div id="fifthF" style="opacity:0;position:absolute;top:0px;left:70px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="fifthNom" style="text-align:center;height:16px;">2</div>' +
                    '<div id="fifthLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="fifthDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<span id="secondL" style="opacity:0;position:absolute;top:10px;left:110px;"><</span> ' +
                '<div id="sixthF" style="opacity:0;position:absolute;top:0px;left:140px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="sixthNom" style="text-align:center;height:16px;">7</div>' +
                    '<div id="sixthLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="sixthDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>'
        });

        var arr = new Group();
        var arrow = new Path.OneSidedArrow(new Point(60,130), new Point(700,130), 10, 30);
        var arrow2 = new Path.OneSidedArrow(new Point(700,130), new Point(701,130), 10, 30);
        arrow.rotate(180);
        arr.addChild(arrow);
        arr.addChild(arrow2);
        arr.opacity = 0;

        var bigDots = new Group();
        var bigDot1 = new Path.Circle(new Point(100, 130), 6);
        bigDot1.fillColor = "black";

        var bigDot2 = new Path.Circle(new Point(660, 130), 6);
        bigDot2.fillColor = "black";

        bigDots.addChild(bigDot1);
        bigDots.addChild(bigDot2);

        bigDots.opacity = 0;

        var smallDots = new Group();
        for(var i = 0; i < 7; i++){
            var dot = new Path.Circle(new Point(170+70*i, 130), 4);
            dot.fillColor = "black";
            dot.opacity = 0;
            smallDots.addChild(dot);
        }
        smallDots.children[3].opacity = 1;
        smallDots.opacity = 0;

        var circGroup = new Group();
        for(var i = 0; i < 3; i++){
            var circ = new Path.Circle(new Point(146+70*i, 30), 24);
            circ.strokeColor = "black";
            circ.opacity = 0;
            circGroup.addChild(circ);
        }

        var fractionsOnAxisDiv = Util.dom({parent:Animation.container, tag:'div', css:fractionsOnAxisDivStyle,
            html:'<span id="zero" style="opacity:0;position:absolute;top:-40px;left:-136px;font-size:24px;">0</span>' +
                '<span id="one" style="opacity:0;position:absolute;top:-40px;left:422px;font-size:24px;">1</span>' +
                '<div id="seventhF" style="opacity:0;position:absolute;top:0px;left:0px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="seventhNom" style="text-align:center;height:16px;">2</div>' +
                    '<div id="seventhLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="seventhDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<div id="eighthF" style="opacity:0;position:absolute;top:0px;left:210px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="eighthNom" style="text-align:center;height:16px;">5</div>' +
                    '<div id="eighthLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="eighthDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<div id="ninthF" style="opacity:0;position:absolute;top:0px;left:350px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="ninthNom" style="text-align:center;height:16px;">7</div>' +
                    '<div id="ninthLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="ninthDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<div id="tenthF" style="opacity:0;position:absolute;top:-46px;left:140px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="tenthNom" style="text-align:center;height:16px;">1</div>' +
                    '<div id="tenthLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="tenthDenom" style="text-align:center;height:16px;">2</div>' +
                '</div>'
        });

        var firstArrowedLine = new Path.OneSidedArrow(new Point(166,54), new Point(354, 116), 6, 20);
        firstArrowedLine.opacity = 0;
        var secondArrowedLine = new Path.OneSidedArrow(new Point(216,60), new Point(120,110), 6, 20);
        secondArrowedLine.opacity = 0;
        var thirdArrowedLine = new Path.OneSidedArrow(new Point(310,50), new Point(640,110), 6, 20);
        thirdArrowedLine.opacity = 0;

        var informationsDiv = Util.dom({parent:Animation.container, tag:'div', css:informationsDivStyle,
            html:'<span id="firstInfo" style="opacity:0;position:absolute;top:20px;left:200px;">yarıma yakın</span>' +
                '<span id="secondInfo" style="opacity:0;position:absolute;top:16px;left:-16px;">0\'a daha yakın</span>' +
                '<span id="thirdInfo" style="opacity:0;position:absolute;top:10px;left:410px;">1\'e daha yakın</span>'
        });

        $(fractionsDiv).delay(fractionsStart).animate({opacity:1},1000,'easeInOutQuad');

        arr.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:axisStart,
            animationType:'easeInOutQuad'
        });

        bigDots.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bigDotsStart,
            animationType:'easeInOutQuad'
        });

        smallDots.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bigDotsStart,
            animationType:'easeInOutQuad'
        });

        $('#zero').delay(bigDotsStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#one').delay(bigDotsStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#tenthF').delay(bigDotsStart).animate({opacity:1},1000,'easeInOutQuad');

        circGroup.children[0].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:informationsStart,
            animationType:'easeInOutQuad'
        });

        firstArrowedLine.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:informationsStart,
            animationType:'easeInOutQuad'
        });

        $('#firstInfo').delay(informationsStart).animate({opacity:1},1000,'easeInOutQuad');

        circGroup.children[1].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:informationsStart+2000,
            animationType:'easeInOutQuad'
        });

        secondArrowedLine.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:informationsStart+2000,
            animationType:'easeInOutQuad'
        });

        $('#secondInfo').delay(informationsStart+2000).animate({opacity:1},1000,'easeInOutQuad');

        circGroup.children[2].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:informationsStart+4000,
            animationType:'easeInOutQuad'
        });

        thirdArrowedLine.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:informationsStart+4000,
            animationType:'easeInOutQuad'
        });

        $('#thirdInfo').delay(informationsStart+4000).animate({opacity:1},1000,'easeInOutQuad');

        $('#firstF').delay(equalizedFractionsStart).animate({color:"#ff0000"},1000,'easeInOutQuad')
            .delay(1500).animate({color:"#000000"},1000,'easeInOutQuad');

        $('#fourthF').delay(equalizedFractionsStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#secondF').delay(equalizedFractionsStart+4500).animate({color:"#ff0000"},1000,'easeInOutQuad')
            .delay(1500).animate({color:"#000000"},1000,'easeInOutQuad');

        $('#fifthF').delay(equalizedFractionsStart+4500).animate({opacity:1},1000,'easeInOutQuad');

        $('#thirdF').delay(equalizedFractionsStart+9000).animate({color:"#ff0000"},1000,'easeInOutQuad')
            .delay(1500).animate({color:"#000000"},1000,'easeInOutQuad');

        $('#sixthF').delay(equalizedFractionsStart+9000).animate({opacity:1},1000,'easeInOutQuad');

        $('#fourthF').delay(sortingStart-equalizedFractionsStart-1000).animate({left: '+=70'},1500,'easeInOutQuad');
        $('#fifthF').delay(sortingStart-equalizedFractionsStart-5500).animate({left: '-=70'},1500,'easeInOutQuad');

        $('#firstL').delay(lessThanStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#secondL').delay(lessThanStart).animate({opacity:1},1000,'easeInOutQuad');

        for(var i = 0; i < smallDots.children.length; i++){
            smallDots.children[i].animate({
                style:{
                    opacity:1
                },
                duration:1000,
                delay:smallDotsStart,
                animationType:'easeInOutQuad'
            });
        }

        $('#seventhF').delay(smallDotsStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eighthF').delay(smallDotsStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#ninthF').delay(smallDotsStart+2000).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});
    }
}
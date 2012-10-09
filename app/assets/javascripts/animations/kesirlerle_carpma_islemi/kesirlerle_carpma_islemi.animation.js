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
        var ballsStart = animStart+1000;
        var firstTextStart = ballsStart+2000;
        var firstSolutionStart = firstTextStart+3000;
        var rectStart = firstSolutionStart+9000;
        var secondTextStart = rectStart+2000;
        var secondSolutionStart = secondTextStart+3000;

        var firstText = Util.dom({parent:Animation.container, tag:'div', css:firstTextCss,
            html:'<span id="a1" style="position:absolute;top:0px;left:0px;">Satıcı 12 topun</span>' +
                '<div id="f1" style="position:absolute;top:-6px;left:110px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n1" style="text-align:center;height:16px;">3</div>' +
                    '<div id="l1" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d1" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="a2" style="position:absolute;top:0px;left:132px;">\'ünü satmıştır.</span>' +
                '<span id="a3" style="position:absolute;top:26px;left:0px;line-height:18px;">Satıcı kaç top satmıştır?</span>'
        });

        var firstSolution = Util.dom({parent:Animation.container, tag:'div', css:firstSolutionCss,
            html:'<span id="num1" style="opacity:0;position:absolute;top:20px;left:0px;">12</span>' +
                '<span id="cross1" style="opacity:0;position:absolute;top:20px;left:20px;">•</span>' +
                '<div id="f2" style="opacity:0;position:absolute;top:11px;left:30px;width:18px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n2" style="text-align:center;height:16px;">3</div>' +
                    '<div id="l2" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d2" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq1" style="opacity:0;position:absolute;top:19px;left:54px;">=</span>' +
                '<div id="f3" style="opacity:0;position:absolute;top:11px;left:68px;width:46px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n3" style="text-align:center;height:16px;">12 • 3</div>' +
                    '<div id="l3" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d3" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq2" style="opacity:0;position:absolute;top:19px;left:120px;">=</span>' +
                '<div id="f4" style="opacity:0;position:absolute;top:11px;left:136px;width:18px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n4" style="text-align:center;height:16px;">36</div>' +
                    '<div id="l4" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d4" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq3" style="opacity:0;position:absolute;top:19px;left:160px;">=</span>' +
                '<span id="result1" style="opacity:0;position:absolute;top:20px;left:174px;">9</span>'
        });

        var ballsGroup = new Group();
        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 3; j++){
                var a = new Group();
                var circ = new Path.Circle(new Point(30+j*40,30+i*40),15);
                circ.fillColor = circFillColor;
                var shadow = new Raster('shadow');
                shadow.position = new Point(30+j*40, 30+i*40);
                shadow.size = new Size(30,30);
                a.addChild(circ);
                a.addChild(shadow);
                ballsGroup.addChild(a);
            }
        }

        ballsGroup.opacity = 0;

        var dashedRect = new Path.Rectangle(new Point(8.5,8.5), new Size(124,122));
        dashedRect.strokeColor = "#069";
        dashedRect.dashArray = [8,7];

        dashedRect.opacity = 0;

        var rect = new Path.SegmentedRectangle(460.5, 60.5, 200, 40, 2, 1, 1, rectFillColor);
        rect.opacity = 0;

        var lineGroup = new Group();
        for(var i = 0; i < 3; i++){
            var b = new Path.Line(new Point(485.5+25*i,60.5), new Point(485.5+25*i,100.5));
            b.strokeColor = "black";
            lineGroup.addChild(b);
        }

        lineGroup.opacity = 0;

        var lineGroup2 = new Group();
        for(var j = 0; j < 3; j++){
            var c = new Path.Line(new Point(585.5+25*j,60.5), new Point(585.5+25*j,100.5));
            c.strokeColor = "black";
            c.dashArray = [3,2];
            lineGroup2.addChild(c);
        }

        lineGroup2.opacity = 0;

        var rect2 = new Path.SegmentedRectangle(460.5,60.5, 25, 40, 1, 1, 1, rectFillColor2);

        rect2.opacity = 0;

        var secondText = Util.dom({parent:Animation.container, tag:'div', css:secondTextCss,
            html:'<div id="f5" style="position:absolute;top:-6px;left:0px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n5" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l5" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d5" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="p1" style="position:absolute;top:0px;left:26px;">\'in</span>' +
                '<div id="f6" style="position:absolute;top:-6px;left:50px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n6" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l6" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d6" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="p2" style="position:absolute;top:0px;left:72px;">\'i kaçtır?</span>'
        });

        var secondSolution = Util.dom({parent:Animation.container, tag:'div', css:secondSolutionCss,
            html:'<div id="f7" style="opacity:0;position:absolute;top:0px;left:0px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n7" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l7" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d7" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="cross2" style="opacity:0;position:absolute;top:9px;left:20px;">•</span>' +
                '<div id="f8" style="opacity:0;position:absolute;top:0px;left:30px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n8" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l8" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d8" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq4" style="opacity:0;position:absolute;top:8px;left:52px;">=</span>' +
                '<div id="f9" style="opacity:0;position:absolute;top:0px;left:68px;width:38px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n9" style="text-align:center;height:16px;">1 • 1</div>' +
                    '<div id="l9" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d9" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<span id="eq5" style="opacity:0;position:absolute;top:8px;left:112px;">=</span>' +
                '<div id="f10" style="opacity:0;position:absolute;top:0px;left:126px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n10" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l10" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d10" style="text-align:center;height:16px;">8</div>' +
                '</div>'
        });

        ballsGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:ballsStart,
            animationType:'easeInOutQuad'
        });

        $(firstText).delay(firstTextStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#num1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#cross1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#f2').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#f3').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq2').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');

        $('#f4').delay(firstSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq3').delay(firstSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');

        $('#result1').delay(firstSolutionStart+6000).animate({opacity:1},1000,'easeInOutQuad');

        dashedRect.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstSolutionStart+6000,
            animationType:'easeInOutQuad'
        });

        rect.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:rectStart,
            animationType:'easeInOutQuad'
        });

        $(secondText).delay(secondTextStart).animate({opacity:1},1000,'easeInOutQuad');

        lineGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+2000,
            animationType:'easeInOutQuad'
        });

        $('#f7').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#cross2').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#f8').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq4').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#f9').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq5').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');

        $('#f10').delay(secondSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');

        rect2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+4000,
            animationType:'easeInOutQuad'
        });

        lineGroup2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+6000,
            animationType:'easeInOutQuad',
            callback:function(){
                Main.animationFinished(1000);
            }
        });
    }
}
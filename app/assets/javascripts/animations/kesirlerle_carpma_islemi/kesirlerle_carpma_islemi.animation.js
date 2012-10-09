var Animation = {
    images:[
        {
            id:'shadow',
            src:'/assets/animations/olasilik/top_golge.png'
        }
    ],
	init:function(container){
        Animation.container = container;

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
            html:'<span id="num1" style=position:absolute;top:20px;left:0px;>12</span>' +
                '<span id="cross1" style="position:absolute;top:20px;left:20px;">•</span>' +
                '<div id="f2" style="position:absolute;top:11px;left:30px;width:18px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n2" style="text-align:center;height:16px;">3</div>' +
                    '<div id="l2" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d2" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq1" style="position:absolute;top:19px;left:54px;">=</span>' +
                '<div id="f3" style="position:absolute;top:11px;left:68px;width:42px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n3" style="text-align:center;height:16px;">12 • 3</div>' +
                    '<div id="l3" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d3" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq2" style="position:absolute;top:19px;left:112px;">=</span>' +
                '<div id="f4" style="position:absolute;top:11px;left:126px;width:18px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n4" style="text-align:center;height:16px;">36</div>' +
                    '<div id="l4" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d4" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq3" style="position:absolute;top:19px;left:150px;">=</span>' +
                '<span id="result1" style="position:absolute;top:20px;left:162px;">9</span>'
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

        var dashedRect = new Path.Rectangle(new Point(8.5,8.5), new Size(124,122));
        dashedRect.strokeColor = "#069";
        dashedRect.dashArray = [8,7];

        var rect = new Path.SegmentedRectangle(460.5, 60.5, 200, 40, 2, 1, 1, rectFillColor);

        var lineGroup = new Group();
//        for(var i = 0; i < 3; i++){
//
//        }

    //    var rect2 = new Path.SegmentedRectangle(460.5,60.5, 25, 40, 1, 1, 1, rectFillColor2);

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
            html:'<div id="f7" style="position:absolute;top:0px;left:0px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n7" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l7" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d7" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="cross2" style="position:absolute;top:9px;left:20px;">•</span>' +
                '<div id="f8" style="position:absolute;top:0px;left:30px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n8" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l8" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d8" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq4" style="position:absolute;top:8px;left:52px;">=</span>' +
                '<div id="f9" style="position:absolute;top:0px;left:68px;width:38px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n9" style="text-align:center;height:16px;">1 • 1</div>' +
                    '<div id="l9" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d9" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<span id="eq5" style="position:absolute;top:8px;left:112px;">=</span>' +
                '<div id="f10" style="position:absolute;top:0px;left:126px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n10" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l10" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d10" style="text-align:center;height:16px;">8</div>' +
                '</div>'
        });
    }
}
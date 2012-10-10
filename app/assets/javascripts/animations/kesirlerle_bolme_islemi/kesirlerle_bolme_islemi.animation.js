var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var firstShape = new Group();
        for(var i = 0; i < 3; i++){
            var a = new Path.Rectangle(new Point(90.5+80*i,70.5), new Size(60,30));
            a.strokeColor = firstShapeStrokeColor;
            a.fillColor = firstShapeFillColor;
            firstShape.addChild(a);
        }
        firstShape.opacity = 1;

        var firstShape2 = new Group();
        for(var k = 0; k < 3; k++){
            for(var j = 0; j < 2; j++){
                var b = new Path.Rectangle(new Point(90.5+j*35+k*80,70.5), new Size(30,30));
                b.strokeColor = firstShapeStrokeColor;
                b.fillColor = firstShapeFillColor;
                firstShape2.addChild(b);
            }
        }
        firstShape2.opacity = 0;

        var secondShape = new Path.SegmentedRectangle(450.5, 60.5, 150, 50, 3, 1, 2, secondShapeFillColor);

        var myLine = new Path.Line(new Point(450.5,85.5), new Point(600.5,85.5));
        myLine.strokeColor = "black";

        var fillPath = new Path.Rectangle(new Point(450.5,60.5), new Size(50,25));
        fillPath.fillColor = secondShapeLastColor;

        var firstText = Util.dom({parent:Animation.container, tag:'div', css:firstTextStyle,
            html:'<span id="m1" style="position:absolute;top:0px;left:0px;">3 bütünün içinde</span>' +
                '<div id="mf1" style="position:absolute;top:-6px;left:120px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom1" style="text-align:center;height:16px;">1</div>' +
                    '<div id="mfline1" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom1" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="m2" style="position:absolute;top:0px;left:146px;">kaç tanedir?</span>'
        });

        var firstSolution = Util.dom({parent:Animation.container, tag:'div', css:firstSolutionStyle,
            html:'<span id="num1" style="position:absolute;top:20px;left:0px;">3</span>' +
                '<span id="divis1" style="position:absolute;top:19px;left:12px;font-weight:bold;">:</span>' +
                '<div id="mf2" style="position:absolute;top:11px;left:22px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom2" style="text-align:center;height:16px;">1</div>' +
                    '<div id="mfline2" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom2" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="eqq1" style="position:absolute;top:19px;left:46px;">=</span>' +
                '<div id="mf3" style="position:absolute;top:11px;left:62px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom3" style="text-align:center;height:16px;">6</div>' +
                    '<div id="mfline3" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom3" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="divis2" style="position:absolute;top:19px;left:84px;font-weight:bold;">:</span>' +
                '<div id="mf4" style="position:absolute;top:11px;left:96px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom4" style="text-align:center;height:16px;">1</div>' +
                    '<div id="mfline4" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom4" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="eqq2" style="position:absolute;top:19px;left:120px;">=</span>' +
                '<span id="result1" style="position:absolute;top:20px;left:134px;">6</span>'
        });

        var secondText = Util.dom({parent:Animation.container, tag:'div', css:secondTextStyle,
            html:'<div id="mf5" style="position:absolute;top:-6px;left:0px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom5" style="text-align:center;height:16px;">2</div>' +
                    '<div id="mfline5" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom5" style="text-align:center;height:16px;">3</div>' +
                '</div>' +
                '<span id="m3" style="position:absolute;top:0px;left:26px;">\'nin 4\'e bölümü kaçtır?</span>'
        });

        var secondSolution = Util.dom({parent:Animation.container, tag:'div', css:secondSolutionStyle,
            html:'<span id="num2" style="position:absolute;top:20px;left:30px;">4</span>' +
                '<span id="divis3" style="position:absolute;top:19px;left:20px;font-weight:bold;">:</span>' +
                '<div id="mf6" style="position:absolute;top:11px;left:0px;width:16px;height:33px;padding:0;margin:0;">' +
                '<div id="mfnom6" style="text-align:center;height:16px;">2</div>' +
                '<div id="mfline6" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                '<div id="mfdenom6" style="text-align:center;height:16px;">3</div>' +
                '</div>' +
                '<span id="eqq3" style="position:absolute;top:19px;left:46px;">=</span>' +
                '<div id="mf7" style="position:absolute;top:11px;left:62px;width:16px;height:33px;padding:0;margin:0;">' +
                '<div id="mfnom7" style="text-align:center;height:16px;">4</div>' +
                '<div id="mfline7" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                '<div id="mfdenom7" style="text-align:center;height:16px;">6</div>' +
                '</div>' +
                '<span id="divis4" style="position:absolute;top:19px;left:82px;font-weight:bold;">:</span>' +
                '<span id="num3" style="position:absolute;top:20px;left:92px;">4</span>'+
                '</div>' +
                '<span id="eqq4" style="position:absolute;top:19px;left:106px;">=</span>' +
                '<div id="mf8" style="position:absolute;top:11px;left:122px;width:16px;height:33px;padding:0;margin:0;">' +
                '<div id="mfnom8" style="text-align:center;height:16px;">1</div>' +
                '<div id="mfline8" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                '<div id="mfdenom8" style="text-align:center;height:16px;">6</div>' +
                '</div>'
        });
    }
}
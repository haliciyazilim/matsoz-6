var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var emptyTableStart = animStart+1000;
        var tableTitleStart = emptyTableStart+2000;
        var tableLinesStart = tableTitleStart+2000;
        var emptyGraphStart = tableLinesStart+7000;
        var graphTitleStart = emptyGraphStart+2000;
        var emptyGraph2Start = graphTitleStart+2000;
        var lastGraphStart = emptyGraph2Start+2000;
        var tableColorStart = lastGraphStart+3000;

        var daysArray = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        var datasArray = ["27","23","31","19","24","29"];

        var animTable = new Group();
        for(var i = 0; i < 2; i++){
            for(var j = 0; j < 7; j++){
                var a = new Path.Rectangle(new Point(40.5+100*i,25.5+20*j), new Size(100,20));
                a.strokeColor = '#aaaaaa';
                if(j == 0){
                    a.fillColor = '#d9d9d9';
                }
                else{
                    a.fillColor = new RgbColor(1,1,1);
                }
                animTable.addChild(a);
            }
        }
        animTable.opacity = 0;
        var tableTitle = new PointText(new Point(5,10));
        tableTitle.justification = 'left';
        tableTitle.content = 'Tablo:';
        tableTitle.fillColor = 'red';
        tableTitle.opacity = 0;

        var tableTitle2 = new PointText(new Point(45,10));
        tableTitle2.justification = 'left';
        tableTitle2.content = 'Bir haftada satılan cep telefonu sayısı';
        tableTitle2.opacity = 0;

        var graphTitle = new PointText(new Point(425,30));
        graphTitle.justification = 'left';
        graphTitle.content = 'Grafik:';
        graphTitle.fillColor = 'red';
        graphTitle.opacity = 0;

        var graphTitle2 = new PointText(new Point(468,30));
        graphTitle2.justification = 'left';
        graphTitle2.content = 'Bir haftada satılan cep telefonu sayısı';
        graphTitle2.opacity = 0;

        var tableTextsGroup = new Group();
        var firstText = new PointText(new Point(46.5,41.5));
        firstText.justification = 'left';
        firstText.content = 'Günler';

        var secondText = new PointText(new Point(152.5,41.5));
        secondText.justification = 'left';
        secondText.content = 'Satış Miktarı';

        tableTextsGroup.addChild(firstText);
        tableTextsGroup.addChild(secondText);

        for(var i = 0; i < 6; i++){
            var myText = new PointText(new Point(46.5,61.5+i*20));
            myText.justification = 'left';
            myText.content = daysArray[i];

            var myText2 = new PointText(new Point(182.5,61.5+i*20));
            myText2.justification = 'left';
            myText2.content = datasArray[i];
            tableTextsGroup.addChild(myText);
            tableTextsGroup.addChild(myText2);
        }
        for(var i = 0; i < tableTextsGroup.children.length; i++){
            tableTextsGroup.children[i].opacity = 0;
        }
        for(var i = 1; i < 7; i++){
//            animTable.children[i].fillColor = colors[i-1];
        }
        for(var i = 8; i < 14; i++){
//            animTable.children[i].fillColor = colors[i-8];
        }

        var graphPoint = new Point(300,50);
        var xLabels = ["Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        var yLabels = ["40","30","20","10","0"];
        var data = [5.4,4.6,6.2,3.8,4.8,5.8];
        var xGridLabelStyle = {
            justification:'right'
        };
        var chart = {
            xAxisName:'Günler',
            yAxisName: 'Satış Miktarı',
            xGridLabelStyle:xGridLabelStyle,
            xLabels:xLabels,
            yLabels:yLabels,
            data:data
        };
        var chart2 = {
            xAxisName:'',
            yAxisName:'',
            xGridLabelStyle:xGridLabelStyle,
            xLabels:["","","","","",""],
            yLabels:["","","","","0"],
            data:[0,0,0,0,0,0]
        };
        var chart3 = {
            xAxisName:'Günler',
            yAxisName:'Satış Miktarı',
            xGridLabelStyle:xGridLabelStyle,
            xLabels:["","","","","",""],
            yLabels:["","","","","0"],
            data:[0,0,0,0,0,0]
        };

        var emptyGraph = columnGraph(graphPoint,chart2.xLabels.length*65,100,chart2,undefined,1000,1000,undefined,1);
        emptyGraph.opacity = 0;
        var emptyGraph2 = columnGraph(graphPoint,chart3.xLabels.length*65,100,chart3,undefined,1000,1000,undefined,1);
        emptyGraph2.opacity = 0;
        Animation.graphGroup = columnGraph(graphPoint,chart.xLabels.length*65,100,chart,undefined,1500,lastGraphStart+3000,4000,1);

        Animation.graphGroup.opacity = 0;

        var myAnimHelper = new AnimationHelper({
            eOpacity:1,
            e2Opacity:0
        });

        animTable.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:emptyTableStart,
            animationType:'easeInOutQuad'
        });

        tableTitle.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:tableTitleStart,
            animationType:'easeInOutQuad'
        });
        tableTitle2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:tableTitleStart,
            animationType:'easeInOutQuad'
        });
        tableTextsGroup.children[0].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:tableTitleStart,
            animationType:'easeInOutQuad'
        });
        tableTextsGroup.children[1].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:tableTitleStart,
            animationType:'easeInOutQuad'
        });
        var myIndex = 0;
        for(var i = 2; i < tableTextsGroup.children.length; i+=2){
            tableTextsGroup.children[i].animate({
                style:{
                    opacity:1
                },
                duration:1000,
                delay:tableLinesStart+myIndex*1000,
                animationType:'easeInOutQuad'
            });
            tableTextsGroup.children[i+1].animate({
                style:{
                    opacity:1
                },
                duration:1000,
                delay:tableLinesStart+myIndex*1000,
                animationType:'easeInOutQuad'
            });
            myIndex+=1;
        }

        emptyGraph.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:emptyGraphStart,
            animationType:'easeInOutQuad'
        });

        graphTitle.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:graphTitleStart,
            animationType:'easeInOutQuad'
        });
        graphTitle2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:graphTitleStart,
            animationType:'easeInOutQuad'
        });

        myAnimHelper.animate({
            style:{
                eOpacity:0,
                e2Opacity:1
            },
            duration:1000,
            delay:emptyGraph2Start,
            animationType:'easeInOutQuad',
            update:function(){
                emptyGraph.opacity = this.eOpacity;
                emptyGraph2.opacity = this.e2Opacity;
            }
        });
        emptyGraph2.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:lastGraphStart,
            animationType:'easeInOutQuad'
        });

        Animation.graphGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lastGraphStart,
            animationType:'easeInOutQuad'
        });

        var aIndex = 0;
        for(var k = 1; k < 7; k++){
            aIndex = k;
            animTable.children[k].animate({
                style:{
                    fillColor:rgbColors[aIndex-1]
                },
                duration:1500,
                delay:tableColorStart+(aIndex-1)*4000,
                animationType:'easeInOutQuad'
            });
        }
        var bIndex = 0;
        for(var l = 8; l < 14; l++){
            bIndex = l-7;
            animTable.children[l].animate({
                style:{
                    fillColor:rgbColors[bIndex-1]
                },
                duration:1500,
                delay:tableColorStart+(bIndex-1)*4000,
                animationType:'easeInOutQuad'
            });
        }

        var cIndex = 0;
        for(var t = 1; t < 7; t++){
            cIndex = t;
            animTable.children[t].animate({
                style:{
                    fillColor:new RgbColor(1,1,1)
                },
                duration:1500,
                delay:tableColorStart+(cIndex-1)*4000+2000,
                animationType:'easeInOutQuad'
            });
        }
        var dIndex = 0;
        for(var y = 8; y < 14; y++){
            dIndex = y-7;
            animTable.children[y].animate({
                style:{
                    fillColor:new RgbColor(1,1,1)
                },
                duration:1500,
                delay:tableColorStart+(dIndex-1)*4000+2000,
                animationType:'easeInOutQuad'
            });
        }

        Main.animationFinished(tableColorStart+24000);
    }
}
;

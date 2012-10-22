var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

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
                animTable.addChild(a);
            }
        }
        var tableTitle = new PointText(new Point(5,10));
        tableTitle.justification = 'left';
        tableTitle.content = 'Tablo:';
        tableTitle.fillColor = 'red';

        var tableTitle2 = new PointText(new Point(45,10));
        tableTitle2.justification = 'left';
        tableTitle2.content = 'Bir haftada satılan cep telefonu sayısı';

        var graphTitle = new PointText(new Point(425,30));
        graphTitle.justification = 'left';
        graphTitle.content = 'Grafik:';
        graphTitle.fillColor = 'red';

        var graphTitle2 = new PointText(new Point(468,30));
        graphTitle2.justification = 'left';
        graphTitle2.content = 'Bir haftada satılan cep telefonu sayısı';

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
        for(var i = 1; i < 7; i++){
            animTable.children[i].fillColor = colors[i-1];
        }
        for(var i = 8; i < 14; i++){
            animTable.children[i].fillColor = colors[i-8];
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

        Animation.graphGroup = columnGraph(graphPoint,chart.xLabels.length*65,100,chart,undefined,1000,1000,undefined,1);

        Main.animationFinished();
    }
}
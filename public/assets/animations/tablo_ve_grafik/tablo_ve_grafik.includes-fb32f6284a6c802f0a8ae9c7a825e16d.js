function __Styles(){
	colors = [];

    colors[0] = "#dcdd89";
    colors[1] = "#d397f0";
    colors[2] = "#9ee9a5";
    colors[3] = "#e99e9e";
    colors[4] = "#a8dbe3";
    colors[5] = "#f2c885";

    rgbColors = [];
    rgbColors[0] = new RgbColor(0.863,0.867,0.537);
    rgbColors[1] = new RgbColor(0.827,0.592,0.941);
    rgbColors[2] = new RgbColor(0.620,0.914,0.647);
    rgbColors[3] = new RgbColor(0.914,0.620,0.620);
    rgbColors[4] = new RgbColor(0.659,0.859,0.890);
    rgbColors[5] = new RgbColor(0.949,0.784,0.522);

}
;
function columnGraph(point,width,height,chart,style,duration,delay,step,notRot){

    if(step == undefined){
        step = duration*0.3;
    }

    if(notRot == undefined){
        notRot = 0;
    }

    if(style == undefined){
        style = {
            axisColor: '#41818a',
            gridColor: '#d9d9d9',
            lineColor: '#8b5400',
            textColor: '#006e7d'
        }
    }

    var group = new Group();

    var gridStartOffset = 10;

    var numOfXPoints = chart.xLabels.length;
    var numOfYPoints = chart.yLabels.length;

    var xStep = (width-60)/(numOfXPoints-1);
    var yStep = 20;
    var xStart = point.x + gridStartOffset;
    var yStart = point.y;

    var defaultGridLabelStyle = {
        justification:'center',
        fillColor:'black'
    };

    var xGridLabelStyle = chart.xGridLabelStyle ? chart.xGridLabelStyle : defaultGridLabelStyle;
    var yGridLabelStyle = chart.yGridLabelStyle ? chart.yGridLabelStyle : defaultGridLabelStyle;

    // Grid Lines
    for(index = 0; index < numOfXPoints; index++){
        var xOffset = 10;
        gridLine = new Path.Line(new Point(xStart+xStep*index+xOffset+10, yStart+10), new Point(xStep*index+xStart+10+xOffset, yStart+height));
        gridLine.strokeWidth = 1;
        gridLine.strokeColor = style.gridColor;
        group.addChild(gridLine);
    }

    for(index = 1; index < numOfYPoints; index++){
        gridLine = new Path.Line(new Point(xStart-xOffset, index * yStep + yStart), new Point(xStart+(chart.xLabels.length-1)*xStep+40, index * yStep + yStart));
        gridLine.strokeWidth = 1;
        gridLine.strokeColor = style.gridColor;
        group.addChild(gridLine);
    }

    // Grid Labels
    if(notRot == 1){
        for(var k = 0; k < numOfXPoints; k++){
            var text = new PointText(new Point(xStart+k*xStep+18, yStart+height+16));
            text.set_style(xGridLabelStyle);
            text.justification = 'center';
            text.fillColor = style.textColor;
            text.content = chart.xLabels[k];
            group.addChild(text);
        }
    }
    else{
        for(index = 0; index < numOfXPoints; index++){
            var xOffset = 10;
            var yOffset = 15;

            if(xGridLabelStyle.rotation == 90){
                xOffset = 2.5 + 5;
                yOffset = 5.5;
            }

            var text = new PointText(new Point(xStart+index*xStep+xOffset+10, yStart+height+16));
            text.set_style(xGridLabelStyle);
            text.fillColor = style.textColor;
            text.content = chart.xLabels[index];
            if(xGridLabelStyle.rotation){
                text.rotate(xGridLabelStyle.rotation);
            }
            group.addChild(text);
        }
    }

    for(index = 0; index < numOfYPoints; index++){
        var text = new PointText(new Point(xStart - 20 - gridStartOffset, yStart + index*yStep + 21));
        text.set_style(yGridLabelStyle);
        text.fillColor = style.textColor;
        text.content = chart.yLabels[index];
        group.addChild(text);
    }

    // Axes
    origin = new Point(point.add([0,height]));

    xAxis = new Path.OneSidedArrow(origin, origin.add([width + 10 + gridStartOffset, 0]),10, 18);
    xAxis.strokeWidth = 2;
    xAxis.fillColor = style.axisColor;
    xAxis.strokeColor = style.axisColor;

    yAxis = new Path.OneSidedArrow(origin, origin.add([0, -height - 10 - gridStartOffset]),10, 18);
    yAxis.strokeWidth = 2;
    yAxis.fillColor = style.axisColor;
    yAxis.strokeColor = style.axisColor;

    group.addChild(xAxis);
    group.addChild(yAxis);

    // Axis Labels
    var text = new PointText(new Point(xStart+width+14, yStart+height+4));
    text.justification = 'left';
    text.fillColor = 'black';
    text.content = chart.xAxisName;
    group.addChild(text);

    if (chart.xAxisUnit) {
        var text = new PointText(new Point(xStart+width+20, yStart+height+20));
        text.justification = 'left';
        text.fillColor = 'black';
        text.content = '(' + chart.xAxisUnit + ')';
        group.addChild(text);
    }

    var offset = 16;
    if (chart.yAxisUnit) {
        offset = 0;
    }

    var text = new PointText(new Point(xStart-26,yStart-26));
    text.justification = 'left';
    text.fillColor = 'black';
    text.content = chart.yAxisName;
    group.addChild(text);

    if (chart.yAxisUnit) {
        var text = new PointText(new Point(xStart-30,yStart-16));
        text.justification = 'center';
        text.fillColor = 'black';
        text.content = '(' + chart.yAxisUnit + ')';
        group.addChild(text);
    }

    var myHelper = [];
    // animHelpers
    for(var i = 0; i < chart.data.length; i++){
        myHelper[i] = new AnimationHelper({
            index:i,
            X:0
        });
    }

    // data columns
    var rect;
    var rects = [];
    for(index = 0; index < chart.data.length; index++){
        myHelper[index].index = index;
        myHelper[index].animate({
            style:{
                X:chart.data[index]*10
            },
            duration:duration,
            delay:delay+this.index*step,
            animationType:'easeInOutQuad',
            update:function(){
                if(rects[this.index]){
                    rects[this.index].remove();
                }
                rects[this.index] = new Path.Rectangle(new Point((xStep*this.index)+xStart+xOffset,yStart+height-this.X-1), new Size(20,this.X));
                rects[this.index].fillColor = colors[this.index];
            },
            callback:function(){
                group.addChild(rects[this.index]);
            }
        });
    }

    group.getXYCoordinate = function(x, y) {
        return new Point((xStep * x + xStart), yStep * y + yStart);
    };

    return group;
};
function drawColumnGraph(){
    var xLabels = [];
    var xlabel1 = ""+Interaction.inputs[3].value;
    var xlabel2 = ""+Interaction.inputs[5].value;
    xLabels.push(xlabel1);
    xLabels.push(xlabel2);
    if(Interaction.inputs[7].value != ""){
        var xlabel3 = ""+Interaction.inputs[7].value;
        xLabels.push(xlabel3);
    }
    if(Interaction.inputs[9].value != ""){
        var xlabel4 = ""+Interaction.inputs[9].value;
        xLabels.push(xlabel4);
    }
    var yLabels = ["10","8","6","4","2","0"];
    var xAxisName = Interaction.inputs[1].value;
    var yAxisName = Interaction.inputs[2].value;
    var data = [];
    data.push(parseInt(Interaction.inputs[4].value));
    data.push(parseInt(Interaction.inputs[6].value));
    if(Interaction.inputs[8].value != ""){
        data.push(parseInt(Interaction.inputs[8].value));
    }
    if(Interaction.inputs[10].value != ""){
        data.push(parseInt(Interaction.inputs[10].value));
    }
    var xGridLabelStyle = {
        justification:'right',
        rotation:-90
    }
    var chart = {
        xAxisName:xAxisName,
        yAxisName:yAxisName,
        xGridLabelStyle:xGridLabelStyle,
        xLabels:xLabels,
        yLabels:yLabels,
        data:data
    };
    if(Interaction.emptyGroup){
        Interaction.emptyGroup.remove();
    }
    if(data.length == 2){
        var graphPoint = new Point(330,90);
        var titleTextPoint = new Point(400,45);
//        $('#graph').css({
//            opacity:1,
//            left:'330px'
//        });
    }
    else if(data.length == 3){
        var graphPoint = new Point(300,90);
        var titleTextPoint = new Point(400,45);
//        $('#graph').css({
//            opacity:1,
//            left:'300px'
//        });
    }
    else if(data.length == 4){
        var graphPoint = new Point(270,90);
        var titleTextPoint = new Point(400,45);
//        $('#graph').css({
//            opacity:1,
//            left:'270px'
//        });
    }
    Interaction.graphGroup = columnGraph(graphPoint,chart.xLabels.length*50,120,chart,undefined,1000,1000);

    Interaction.titleText = new PointText(titleTextPoint);
    Interaction.titleText.justification = 'center';
    Interaction.titleText.fontSize = 14;
    Interaction.titleText.fillColor = "#006e7d";
    Interaction.titleText.content = "Grafik: "+Interaction.inputs[0].value;

    $('#repeatBtn').css("opacity",1);
    $('#repeatBtn').get(0).onclick = Interaction.nextQuestion;

    $('#graphBtn').css("opacity",0.4);
    $('#graphBtn').get(0).onclick = null;

    disableInputsBox();
};
function disableInputsBox(){
    $(Interaction.inputs).each(function(index, element) {
        $(this).get(0).onkeydown = function(event){
            if(event.keyCode != 13)
                return false;
        }
    });
}
function enableInputsBox(){
    $(Interaction.inputs).each(function(index, element) {
        $(this).get(0).onkeydown = null;
    });
}
;
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
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;

        Main.setObjective('Yandaki tablonun başlığını yazınız. Tablodaki bölümlerden en az ilk üçünü doldurunuz. Tabloyu 0 ile 10 arasındaki değerlerle doldurup "Oluştur" düğmesine basınız ve grafiği oluşturunuz.');

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<span id="table" style="position:absolute;top:31px;left:10px;font-size:12px;">Tablo:</span>' +
            '<span id="graph" style="position:absolute;top:14px;left:270px;opacity:0;">Grafik:</span>' +
            ' <button id="graphBtn" class="chart_button"></button>' +
            '<button id="repeatBtn" class="repeat_button_small"></button>');

        $('#graphBtn').css({
            position:'absolute',
            top:'210px',
            left:'20px',
            opacity:1
        });
        $('#repeatBtn').css({
            position:'absolute',
            top:'210px',
            left:'130px',
            opacity:1
        });

        Interaction.appendStatus({
            bottom:"10px",
            left:"10px",
            width:"220px",
            height:"40px",
//            border:"1px solid",
            textAlign:'center'
        });
        Interaction.appendInput({
            position:'absolute',
            top:'20px',
            left:'47px',
            width:'183px',
            height:'30px',
            fontSize:'12px',
            color:'#757575'
        },false,false);
        var xText = new PointText(new Point(30,65));
        xText.justification = 'left';
        xText.content = 'x ekseni';

        var yText = new PointText(new Point(145,65));
        yText.justification = 'left';
        yText.content = 'y ekseni';

        $(Interaction.container).append(Interaction.input);
        Interaction.input.onfocus = function(){
            if(this.value == 'Tablo başlığını giriniz'){
                this.value = '';
                $(Interaction.input).css({
                    color:'#000000',
                    fontSize:'12px'
                });
            }

        };
        Interaction.input.onblur = function(){
            if(this.value == ''){
                this.value = 'Tablo başlığını giriniz';
                $(Interaction.input).css({
                    color:'#757575',
                    fontSize:'12px'
                });
            }

        };
        $(Interaction.input).attr('maxLength',28);
        var leftStr = '';
        var topStr = '';
        var myIndex;
        for(var t = 0; t < 5; t++){
            var top = 70+t*26;
            topStr = ''+top+'px';
            for(var y = 0; y < 2; y++){
                myIndex = t*2+y;
                var left = 10+y*110;
                leftStr = ''+left+'px';
                if(t == 0){
                    Interaction.appendInput({
                        position:'absolute',
                        top:topStr,
                        left:leftStr,
                        width:'110px',
                        height:'26px',
                        fontSize:'12px',
                        backgroundColor:'#d9d9d9',
                        fontWeight:'normal'
                    },false,false);
                }
                else{
                    Interaction.appendInput({
                        position:'absolute',
                        top:topStr,
                        left:leftStr,
                        width:'110px',
                        height:'26px',
                        fontSize:'12px',
                        fontWeight:'normal'
                    },false,false);
                }
                if(myIndex == 0 || myIndex == 1){
                    $(Interaction.inputs[myIndex+1]).attr("maxLength",10);
                }
                else{
                    $(Interaction.inputs[myIndex+1]).attr("maxLength",20);
                }
            }
        }
        Interaction.disableAutoFocus();

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        for(var i = 0; i < Interaction.inputs.length; i++){
            Interaction.inputs[i].value = '';
        }

        if(Interaction.titleText){
            Interaction.titleText.remove();
        }

        if(Interaction.graphGroup){
            Interaction.graphGroup.remove();
        }
        if(Interaction.emptyGroup){
            Interaction.emptyGroup.remove();
        }

        $('#graph').css("opacity",0);

        var xLabels = ["","", "",""];
        var yLabels = ["","","","","","0"];
        var data = [];
        var xGridLabelStyle = {
            justification:'right',
            rotation:-90
        };
        var chart = {
            xAxisName: "x ekseni",
//            xAxisUnit: "Gün",
            yAxisName: "y ekseni",
//            yAxisUnit: "TL",
            xGridLabelStyle: xGridLabelStyle,
            xLabels: xLabels,
            yLabels: yLabels,
            data: data
        };
        Interaction.emptyGroup = columnGraph(new Point(270,90),chart.xLabels.length*50,120,chart);

        enableInputsBox();
        Interaction.inputs[0].focus();
        Interaction.inputs[0].blur();

        $('#repeatBtn').css("opacity",0.4);
        $('#repeatBtn').get(0).onclick = null;

        $('#graphBtn').css("opacity",1);
        $('#graphBtn').get(0).onclick = Interaction.preCheck;
    },
	preCheck : function(){
        if(Interaction.inputs[0].value == 'Tablo başlığını giriniz'){
            Interaction.setStatus('Lütfen tablo başlığını giriniz.',false);
        }
        else if(Interaction.inputs[1].value == '' || Interaction.inputs[2].value == ''){
            Interaction.setStatus('Lütfen eksen başlıklarını doldurunuz.',false);
        }
        else if(Interaction.inputs[3].value == '' || Interaction.inputs[5].value == ''){
            Interaction.setStatus('Lütfen en az iki sütunu doldurunuz.',false);
        }
        else if(!Util.isInteger(Interaction.inputs[4].value) || !Util.isInteger(Interaction.inputs[6].value)){
            Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
        }
        else if(Interaction.inputs[4].value < 0 || Interaction.inputs[4].value > 10){
            Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
        }
        else if(Interaction.inputs[6].value < 0 || Interaction.inputs[6].value > 10){
            Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
        }
        else if(Interaction.inputs[7].value == '' && Interaction.inputs[8].value != ''){
            Interaction.setStatus('Lütfen x eksenini eksiksiz doldurunuz.',false);
        }
        else if(Interaction.inputs[9].value == '' && Interaction.inputs[10].value != ''){
            Interaction.setStatus('Lütfen x eksenini eksiksiz doldurunuz.',false);
        }
        else if(Interaction.inputs[7].value != ''){
            if(!Util.isInteger(Interaction.inputs[8].value) || Interaction.inputs[8].value < 0 || Interaction.inputs[8].value > 10){
                Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
            }
            else{
                if(Interaction.inputs[9].value != ''){
                    if(!Util.isInteger(Interaction.inputs[10].value) || Interaction.inputs[10].value < 0 || Interaction.inputs[10].value > 10){
                        Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
                    }
                    else{
                        Interaction.setStatus('');
                        drawColumnGraph();
                    }
                }
                else{
                    Interaction.setStatus('');
                    drawColumnGraph();
                }
            }
        }

        else{
            Interaction.setStatus('');
            drawColumnGraph();
        }
        return false;
    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
;





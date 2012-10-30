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

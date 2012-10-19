function columnGraph(point,width,height,chart,style){

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
    var text = new PointText(new Point(xStart+width+20, yStart+height));
    text.justification = 'left';
    text.fillColor = 'black';
    text.content = chart.xAxisName;
    group.addChild(text);

    if (chart.xAxisUnit) {
        var text = new PointText(new Point(xStart+width+20, yStart+height+16));
        text.justification = 'left';
        text.fillColor = 'black';
        text.content = '(' + chart.xAxisUnit + ')';
        group.addChild(text);
    }

    var offset = 16;
    if (chart.yAxisUnit) {
        offset = 0;
    }

    var text = new PointText(new Point(xStart-30,yStart-32));
    text.justification = 'center';
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

    // data columns
    var rect;
    for(index = 0; index < chart.data.length; index++){
        rect = new Path.Rectangle(new Point((xStep*index)+xStart+xOffset,yStart+height-chart.data[index]*10-1),new Size(20,chart.data[index]*10));
        rect.fillColor = colors[index];
        group.addChild(rect);
    }

    group.getXYCoordinate = function(x, y) {
        return new Point((xStep * x + xStart), yStep * y + yStart);
    };

    return group;
}
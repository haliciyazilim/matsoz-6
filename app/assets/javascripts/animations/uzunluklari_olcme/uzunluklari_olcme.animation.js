var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var mySize = new Size(120,20);
        var meterPoint = new Point(140.5,80.5);
        var decimeterPoint = new Point(160.5,100.5);
        var centimeterPoint = new Point(180.5,120.5);
        var millimeterPoint = new Point(200.5,140.5);
        var decameterPoint = new Point(120.5,60.5);
        var hectometerPoint = new Point(100.5,40.5);
        var kilometerPoint = new Point(80.5,20.5);

        var kmPoint = new Point(480.5,80.5);

        // meter Group
        var meterGroup = new Group();

        var meterRect1 = new Path.Rectangle(meterPoint,mySize);
        meterRect1.strokeColor = animStrokeColors;
        meterRect1.fillColor = meterColor;

        var meterRect2 = new Path.Rectangle(new Point(meterPoint.x+mySize.width,meterPoint.y),mySize);
        meterRect2.strokeColor = animStrokeColors;

        var meterText1 = new PointText(new Point(meterPoint.x+4,meterPoint.y+16));
        meterText1.justification = 'left';
        meterText1.content = 'Metre';
        meterText1.fillColor = "white";
        meterText1.fontSize = 12;

        var meterText2 = new PointText(new Point(meterPoint.x+mySize.width+4,meterPoint.y+16));
        meterText2.justification = 'left';
        meterText2.content = '1 metre';
        meterText2.fontSize = 12;

        meterGroup.addChild(meterRect1);
        meterGroup.addChild(meterRect2);
        meterGroup.addChild(meterText1);
        meterGroup.addChild(meterText2);

        // decimeter Group
        var decimeterGroup = new Group();

        var decimeterRect1 = new Path.Rectangle(decimeterPoint,mySize);
        decimeterRect1.strokeColor = animStrokeColors;
        decimeterRect1.fillColor = decimeterColor;

        var decimeterRect2 = new Path.Rectangle(new Point(decimeterPoint.x+mySize.width,decimeterPoint.y),mySize);
        decimeterRect2.strokeColor = animStrokeColors;

        var decimeterText1 = new PointText(new Point(decimeterPoint.x+4,decimeterPoint.y+16));
        decimeterText1.justification = 'left';
        decimeterText1.content = 'Desimetre';
        decimeterText1.fontSize = 12;

        var decimeterText2 = new PointText(new Point(decimeterPoint.x+mySize.width+4,decimeterPoint.y+16));
        decimeterText2.justification = 'left';
        decimeterText2.content = '0,1 metre';
        decimeterText2.fontSize = 12;

        decimeterGroup.addChild(decimeterRect1);
        decimeterGroup.addChild(decimeterRect2);
        decimeterGroup.addChild(decimeterText1);
        decimeterGroup.addChild(decimeterText2);

        // centimeter Group
        var centimeterGroup = new Group();

        var centimeterRect1 = new Path.Rectangle(centimeterPoint,mySize);
        centimeterRect1.strokeColor = animStrokeColors;
        centimeterRect1.fillColor = centimeterColor;

        var centimeterRect2 = new Path.Rectangle(new Point(centimeterPoint.x+mySize.width,centimeterPoint.y),mySize);
        centimeterRect2.strokeColor = animStrokeColors;

        var centimeterText1 = new PointText(new Point(centimeterPoint.x+4,centimeterPoint.y+16));
        centimeterText1.justification = 'left';
        centimeterText1.content = 'Santimetre';
        centimeterText1.fontSize = 12;

        var centimeterText2 = new PointText(new Point(centimeterPoint.x+mySize.width+4,centimeterPoint.y+16));
        centimeterText2.justification = 'left';
        centimeterText2.content = '0,01 metre';
        centimeterText2.fontSize = 12;

        centimeterGroup.addChild(centimeterRect1);
        centimeterGroup.addChild(centimeterRect2);
        centimeterGroup.addChild(centimeterText1);
        centimeterGroup.addChild(centimeterText2);

        // millimeter Group
        var millimeterGroup = new Group();

        var millimeterRect1 = new Path.Rectangle(millimeterPoint,mySize);
        millimeterRect1.strokeColor = animStrokeColors;
        millimeterRect1.fillColor = millimeterColor;

        var millimeterRect2 = new Path.Rectangle(new Point(millimeterPoint.x+mySize.width,millimeterPoint.y),mySize);
        millimeterRect2.strokeColor = animStrokeColors;

        var millimeterText1 = new PointText(new Point(millimeterPoint.x+4,millimeterPoint.y+16));
        millimeterText1.justification = 'left';
        millimeterText1.content = 'Milimetre';
        millimeterText1.fontSize = 12;

        var millimeterText2 = new PointText(new Point(millimeterPoint.x+mySize.width+4,millimeterPoint.y+16));
        millimeterText2.justification = 'left';
        millimeterText2.content = '0,001 metre';
        millimeterText2.fontSize = 12;

        millimeterGroup.addChild(millimeterRect1);
        millimeterGroup.addChild(millimeterRect2);
        millimeterGroup.addChild(millimeterText1);
        millimeterGroup.addChild(millimeterText2);

        // decameter Group
        var decameterGroup = new Group();

        var decameterRect1 = new Path.Rectangle(decameterPoint,mySize);
        decameterRect1.strokeColor = animStrokeColors;
        decameterRect1.fillColor = decameterColor;

        var decameterRect2 = new Path.Rectangle(new Point(decameterPoint.x+mySize.width,decameterPoint.y),mySize);
        decameterRect2.strokeColor = animStrokeColors;

        var decameterText1 = new PointText(new Point(decameterPoint.x+4,decameterPoint.y+16));
        decameterText1.justification = 'left';
        decameterText1.content = 'Dekametre';
        decameterText1.fillColor = "white";
        decameterText1.fontSize = 12;

        var decameterText2 = new PointText(new Point(decameterPoint.x+mySize.width+4,decameterPoint.y+16));
        decameterText2.justification = 'left';
        decameterText2.content = '10 metre';
        decameterText2.fontSize = 12;

        decameterGroup.addChild(decameterRect1);
        decameterGroup.addChild(decameterRect2);
        decameterGroup.addChild(decameterText1);
        decameterGroup.addChild(decameterText2);

        // hectometer Group
        var hectometerGroup = new Group();

        var hectometerRect1 = new Path.Rectangle(hectometerPoint,mySize);
        hectometerRect1.strokeColor = animStrokeColors;
        hectometerRect1.fillColor = hectometerColor;

        var hectometerRect2 = new Path.Rectangle(new Point(hectometerPoint.x+mySize.width,hectometerPoint.y),mySize);
        hectometerRect2.strokeColor = animStrokeColors;

        var hectometerText1 = new PointText(new Point(hectometerPoint.x+4,hectometerPoint.y+16));
        hectometerText1.justification = 'left';
        hectometerText1.content = 'Hektometre';
        hectometerText1.fillColor = "white";
        hectometerText1.fontSize = 12;

        var hectometerText2 = new PointText(new Point(hectometerPoint.x+mySize.width+4,hectometerPoint.y+16));
        hectometerText2.justification = 'left';
        hectometerText2.content = '100 metre';
        hectometerText2.fontSize = 12;

        hectometerGroup.addChild(hectometerRect1);
        hectometerGroup.addChild(hectometerRect2);
        hectometerGroup.addChild(hectometerText1);
        hectometerGroup.addChild(hectometerText2);

        // kilometer Group
        var kilometerGroup = new Group();

        var kilometerRect1 = new Path.Rectangle(kilometerPoint,mySize);
        kilometerRect1.strokeColor = animStrokeColors;
        kilometerRect1.fillColor = kilometerColor;

        var kilometerRect2 = new Path.Rectangle(new Point(kilometerPoint.x+mySize.width,kilometerPoint.y),mySize);
        kilometerRect2.strokeColor = animStrokeColors;

        var kilometerText1 = new PointText(new Point(kilometerPoint.x+4,kilometerPoint.y+16));
        kilometerText1.justification = 'left';
        kilometerText1.content = 'Kilometre';
        kilometerText1.fillColor = "white";
        kilometerText1.fontSize = 12;

        var kilometerText2 = new PointText(new Point(kilometerPoint.x+mySize.width+4,kilometerPoint.y+16));
        kilometerText2.justification = 'left';
        kilometerText2.content = '1000 metre';
        kilometerText2.fontSize = 12;

        kilometerGroup.addChild(kilometerRect1);
        kilometerGroup.addChild(kilometerRect2);
        kilometerGroup.addChild(kilometerText1);
        kilometerGroup.addChild(kilometerText2);

        // km
        var kmText = new PointText(kmPoint);
        kmText.justification = 'left';
        kmText.content = 'km';
        kmText.fontSize = 10;

        // hm
        var hmText = new PointText(new Point(kmPoint.x+40,kmPoint.y));
        hmText.justification = 'left';
        hmText.content = 'hm';
        hmText.fontSize = 10;

        // dam
        var damText = new PointText(new Point(kmPoint.x+80,kmPoint.y));
        damText.justification = 'left';
        damText.content = 'dam';
        damText.fontSize = 10;

        // m
        var mText = new PointText(new Point(kmPoint.x+126,kmPoint.y));
        mText.justification = 'left';
        mText.content = 'm';
        mText.fillColor = "red";
        mText.fontSize = 10;

        // hm
        var dmText = new PointText(new Point(kmPoint.x+160,kmPoint.y));
        dmText.justification = 'left';
        dmText.content = 'dm';
        dmText.fontSize = 10;

        // hm
        var cmText = new PointText(new Point(kmPoint.x+200,kmPoint.y));
        cmText.justification = 'left';
        cmText.content = 'cm';
        cmText.fontSize = 10;

        // mm
        var mmText = new PointText(new Point(kmPoint.x+240,kmPoint.y));
        mmText.justification = 'left';
        mmText.content = 'mm';
        mmText.fontSize = 10;
    }
}
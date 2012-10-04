var Animation = {
    images:[
        {
            id:'top_arrow',
            src:'/assets/animations/uzunluklari_olcme/ust_ok.png'
        },
        {
            id:'bottom_arrow',
            src:'/assets/animations/uzunluklari_olcme/alt_ok.png'
        },
        {
            id:'ticker',
            src:'/assets/animations/alan_olcme/alanolcme_ticker.gif'
        }
    ],
    init:function(container){
        Animation.container = container;

        var mySize = new Size(160,20);
        var mySize2 = new Size(50,50);

        var mySquarePoint = new Point(22.5,100.5);

        var meterSquarePoint = new Point(73.5,70.5);
        var decimeterSquarePoint = new Point(93.5,90.5);
        var centimeterSquarePoint = new Point(113.5,110.5);
        var millimeterSquarePoint = new Point(133.5,130.5);
        var decameterSquarePoint = new Point(53.5,50.5);
        var hectometerSquarePoint = new Point(33.5,30.5);
        var kilometerSquarePoint = new Point(13.5,10.5);

        var kmPoint = new Point(480.5,80.5);

        var lastTextPoint = new Point(616.5,140.5);

        var animStart = 0;
        var mySquareStart = animStart+1000;
        var meterSquareStart = mySquareStart+2000;
        var decimeterSquareStart = meterSquareStart+1000;
        var centimeterSquareStart = decimeterSquareStart+1000;
        var millimeterSquareStart = centimeterSquareStart+1000;
        var decameterSquareStart = millimeterSquareStart+1000;
        var hectometerSquareStart = decameterSquareStart+1000;
        var kilometerSquareStart = hectometerSquareStart+1000;

        var tickerStart = kilometerSquareStart+1500;

        var kmTextStart = tickerStart+1500;
        var hmTextStart = kmTextStart+500;
        var damTextStart = hmTextStart+500;
        var mTextStart = damTextStart+500;
        var dmTextStart = mTextStart+500;
        var cmTextStart = dmTextStart+500;
        var mmTextStart = cmTextStart+500;

        var top1Start = mmTextStart+1500;
        var top2Start = top1Start+750;
        var top3Start = top2Start+750;
        var top4Start = top3Start+750;
        var top5Start = top4Start+750;
        var top6Start = top5Start+750;

        var bottom6Start = top6Start+1500;
        var bottom5Start = bottom6Start+750;
        var bottom4Start = bottom5Start+750;
        var bottom3Start = bottom4Start+750;
        var bottom2Start = bottom3Start+750;
        var bottom1Start = bottom2Start+750;

        var lastTextStart = bottom1Start+1500;

        var mySquare = new Path.Rectangle(mySquarePoint,mySize2);
        mySquare.strokeColor = meterSquareColor;
        mySquare.fillColor = meterSquareColor;
        mySquare.opacity = 0;

        var firstText = new PointText(new Point(mySquarePoint.x-22,mySquarePoint.y+30));
        firstText.justification = 'left';
        firstText.content = '1m';
        firstText.fontSize = 10;
        firstText.opacity = 0;

        var secondText = new PointText(new Point(mySquarePoint.x+14,mySquarePoint.y+64));
        secondText.justification = 'left';
        secondText.content = '1m';
        secondText.fontSize = 10;
        secondText.opacity = 0;

        var thirdText = new PointText(new Point(mySquarePoint.x+14,mySquarePoint.y+30));
        thirdText.justification = 'left';
        thirdText.content = '1m²';
        thirdText.fontSize = 10;
        thirdText.opacity = 0;

        // meterSquare Group
        var meterSquareGroup = new Group();

        var meterSquareRect1 = new Path.Rectangle(meterSquarePoint,mySize);
        meterSquareRect1.strokeColor = animStrokeColors;
        meterSquareRect1.fillColor = meterSquareColor;

        var meterSquareRect2 = new Path.Rectangle(new Point(meterSquarePoint.x+mySize.width,meterSquarePoint.y),mySize);
        meterSquareRect2.strokeColor = animStrokeColors;

        var meterSquareText1 = new PointText(new Point(meterSquarePoint.x+4,meterSquarePoint.y+16));
        meterSquareText1.justification = 'left';
        meterSquareText1.content = 'Metrekare';
        meterSquareText1.fillColor = "white";
        meterSquareText1.fontSize = 12;

        var meterSquareText2 = new PointText(new Point(meterSquarePoint.x+mySize.width+4,meterSquarePoint.y+16));
        meterSquareText2.justification = 'left';
        meterSquareText2.content = '1 metrekare';
        meterSquareText2.fontSize = 12;

        meterSquareGroup.addChild(meterSquareRect1);
        meterSquareGroup.addChild(meterSquareRect2);
        meterSquareGroup.addChild(meterSquareText1);
        meterSquareGroup.addChild(meterSquareText2);
        meterSquareGroup.opacity = 0;

        // decimeterSquare Group
        var decimeterSquareGroup = new Group();

        var decimeterSquareRect1 = new Path.Rectangle(decimeterSquarePoint,mySize);
        decimeterSquareRect1.strokeColor = animStrokeColors;
        decimeterSquareRect1.fillColor = decimeterSquareColor;

        var decimeterSquareRect2 = new Path.Rectangle(new Point(decimeterSquarePoint.x+mySize.width,decimeterSquarePoint.y),mySize);
        decimeterSquareRect2.strokeColor = animStrokeColors;

        var decimeterSquareText1 = new PointText(new Point(decimeterSquarePoint.x+4,decimeterSquarePoint.y+16));
        decimeterSquareText1.justification = 'left';
        decimeterSquareText1.content = 'Desimetrekare';
        decimeterSquareText1.fontSize = 12;

        var decimeterSquareText2 = new PointText(new Point(decimeterSquarePoint.x+mySize.width+4,decimeterSquarePoint.y+16));
        decimeterSquareText2.justification = 'left';
        decimeterSquareText2.content = '0,01 metrekare';
        decimeterSquareText2.fontSize = 12;

        decimeterSquareGroup.addChild(decimeterSquareRect1);
        decimeterSquareGroup.addChild(decimeterSquareRect2);
        decimeterSquareGroup.addChild(decimeterSquareText1);
        decimeterSquareGroup.addChild(decimeterSquareText2);
        decimeterSquareGroup.opacity = 0;

        // centimeterSquare Group
        var centimeterSquareGroup = new Group();

        var centimeterSquareRect1 = new Path.Rectangle(centimeterSquarePoint,mySize);
        centimeterSquareRect1.strokeColor = animStrokeColors;
        centimeterSquareRect1.fillColor = centimeterSquareColor;

        var centimeterSquareRect2 = new Path.Rectangle(new Point(centimeterSquarePoint.x+mySize.width,centimeterSquarePoint.y),mySize);
        centimeterSquareRect2.strokeColor = animStrokeColors;

        var centimeterSquareText1 = new PointText(new Point(centimeterSquarePoint.x+4,centimeterSquarePoint.y+16));
        centimeterSquareText1.justification = 'left';
        centimeterSquareText1.content = 'Santimetrekare';
        centimeterSquareText1.fontSize = 12;

        var centimeterSquareText2 = new PointText(new Point(centimeterSquarePoint.x+mySize.width+4,centimeterSquarePoint.y+16));
        centimeterSquareText2.justification = 'left';
        centimeterSquareText2.content = '0,0001 metrekare';
        centimeterSquareText2.fontSize = 12;

        centimeterSquareGroup.addChild(centimeterSquareRect1);
        centimeterSquareGroup.addChild(centimeterSquareRect2);
        centimeterSquareGroup.addChild(centimeterSquareText1);
        centimeterSquareGroup.addChild(centimeterSquareText2);
        centimeterSquareGroup.opacity = 0;

        // millimeterSquare Group
        var millimeterSquareGroup = new Group();

        var millimeterSquareRect1 = new Path.Rectangle(millimeterSquarePoint,mySize);
        millimeterSquareRect1.strokeColor = animStrokeColors;
        millimeterSquareRect1.fillColor = millimeterSquareColor;

        var millimeterSquareRect2 = new Path.Rectangle(new Point(millimeterSquarePoint.x+mySize.width,millimeterSquarePoint.y),mySize);
        millimeterSquareRect2.strokeColor = animStrokeColors;

        var millimeterSquareText1 = new PointText(new Point(millimeterSquarePoint.x+4,millimeterSquarePoint.y+16));
        millimeterSquareText1.justification = 'left';
        millimeterSquareText1.content = 'Milimetrekare';
        millimeterSquareText1.fontSize = 12;

        var millimeterSquareText2 = new PointText(new Point(millimeterSquarePoint.x+mySize.width+4,millimeterSquarePoint.y+16));
        millimeterSquareText2.justification = 'left';
        millimeterSquareText2.content = '0,000001 metrekare';
        millimeterSquareText2.fontSize = 12;

        millimeterSquareGroup.addChild(millimeterSquareRect1);
        millimeterSquareGroup.addChild(millimeterSquareRect2);
        millimeterSquareGroup.addChild(millimeterSquareText1);
        millimeterSquareGroup.addChild(millimeterSquareText2);
        millimeterSquareGroup.opacity = 0;

        // decameterSquare Group
        var decameterSquareGroup = new Group();

        var decameterSquareRect1 = new Path.Rectangle(decameterSquarePoint,mySize);
        decameterSquareRect1.strokeColor = animStrokeColors;
        decameterSquareRect1.fillColor = decameterSquareColor;

        var decameterSquareRect2 = new Path.Rectangle(new Point(decameterSquarePoint.x+mySize.width,decameterSquarePoint.y),mySize);
        decameterSquareRect2.strokeColor = animStrokeColors;

        var decameterSquareText1 = new PointText(new Point(decameterSquarePoint.x+4,decameterSquarePoint.y+16));
        decameterSquareText1.justification = 'left';
        decameterSquareText1.content = 'Dekametrekare';
        decameterSquareText1.fillColor = "white";
        decameterSquareText1.fontSize = 12;

        var decameterSquareText2 = new PointText(new Point(decameterSquarePoint.x+mySize.width+4,decameterSquarePoint.y+16));
        decameterSquareText2.justification = 'left';
        decameterSquareText2.content = '100 metrekare';
        decameterSquareText2.fontSize = 12;

        decameterSquareGroup.addChild(decameterSquareRect1);
        decameterSquareGroup.addChild(decameterSquareRect2);
        decameterSquareGroup.addChild(decameterSquareText1);
        decameterSquareGroup.addChild(decameterSquareText2);
        decameterSquareGroup.opacity = 0;

        // hectometerSquare Group
        var hectometerSquareGroup = new Group();

        var hectometerSquareRect1 = new Path.Rectangle(hectometerSquarePoint,mySize);
        hectometerSquareRect1.strokeColor = animStrokeColors;
        hectometerSquareRect1.fillColor = hectometerSquareColor;

        var hectometerSquareRect2 = new Path.Rectangle(new Point(hectometerSquarePoint.x+mySize.width,hectometerSquarePoint.y),mySize);
        hectometerSquareRect2.strokeColor = animStrokeColors;

        var hectometerSquareText1 = new PointText(new Point(hectometerSquarePoint.x+4,hectometerSquarePoint.y+16));
        hectometerSquareText1.justification = 'left';
        hectometerSquareText1.content = 'Hektometrekare';
        hectometerSquareText1.fillColor = "white";
        hectometerSquareText1.fontSize = 12;

        var hectometerSquareText2 = new PointText(new Point(hectometerSquarePoint.x+mySize.width+4,hectometerSquarePoint.y+16));
        hectometerSquareText2.justification = 'left';
        hectometerSquareText2.content = '10000 metrekare';
        hectometerSquareText2.fontSize = 12;

        hectometerSquareGroup.addChild(hectometerSquareRect1);
        hectometerSquareGroup.addChild(hectometerSquareRect2);
        hectometerSquareGroup.addChild(hectometerSquareText1);
        hectometerSquareGroup.addChild(hectometerSquareText2);
        hectometerSquareGroup.opacity = 0;

        // kilometerSquare Group
        var kilometerSquareGroup = new Group();

        var kilometerSquareRect1 = new Path.Rectangle(kilometerSquarePoint,mySize);
        kilometerSquareRect1.strokeColor = animStrokeColors;
        kilometerSquareRect1.fillColor = kilometerSquareColor;

        var kilometerSquareRect2 = new Path.Rectangle(new Point(kilometerSquarePoint.x+mySize.width,kilometerSquarePoint.y),mySize);
        kilometerSquareRect2.strokeColor = animStrokeColors;

        var kilometerSquareText1 = new PointText(new Point(kilometerSquarePoint.x+4,kilometerSquarePoint.y+16));
        kilometerSquareText1.justification = 'left';
        kilometerSquareText1.content = 'Kilometrekare';
        kilometerSquareText1.fillColor = "white";
        kilometerSquareText1.fontSize = 12;

        var kilometerSquareText2 = new PointText(new Point(kilometerSquarePoint.x+mySize.width+4,kilometerSquarePoint.y+16));
        kilometerSquareText2.justification = 'left';
        kilometerSquareText2.content = '1000000 metrekare';
        kilometerSquareText2.fontSize = 12;

        kilometerSquareGroup.addChild(kilometerSquareRect1);
        kilometerSquareGroup.addChild(kilometerSquareRect2);
        kilometerSquareGroup.addChild(kilometerSquareText1);
        kilometerSquareGroup.addChild(kilometerSquareText2);
        kilometerSquareGroup.opacity = 0;

        var ticker = $('#ticker');
        $(Animation.container).append(ticker);
        $(ticker).css({
            position:'absolute',
            top:'26px',
            left:'470px',
            opacity:0
        });

        // km
        var kmText = new PointText(kmPoint);
        kmText.justification = 'left';
        kmText.content = 'km²';
        kmText.fontSize = 10;
        kmText.opacity = 0;

        // hm
        var hmText = new PointText(new Point(kmPoint.x+40,kmPoint.y));
        hmText.justification = 'left';
        hmText.content = 'hm²';
        hmText.fontSize = 10;
        hmText.opacity = 0;

        // dam
        var damText = new PointText(new Point(kmPoint.x+80,kmPoint.y));
        damText.justification = 'left';
        damText.content = 'dam²';
        damText.fontSize = 10;
        damText.opacity = 0;

        // m
        var mText = new PointText(new Point(kmPoint.x+126,kmPoint.y));
        mText.justification = 'left';
        mText.content = 'm²';
        mText.fillColor = "red";
        mText.fontSize = 10;
        mText.opacity = 0;

        // dm
        var dmText = new PointText(new Point(kmPoint.x+160,kmPoint.y));
        dmText.justification = 'left';
        dmText.content = 'dm²';
        dmText.fontSize = 10;
        dmText.opacity = 0;

        // cm
        var cmText = new PointText(new Point(kmPoint.x+200,kmPoint.y));
        cmText.justification = 'left';
        cmText.content = 'cm²';
        cmText.fontSize = 10;
        cmText.opacity = 0;

        // mm
        var mmText = new PointText(new Point(kmPoint.x+240,kmPoint.y));
        mmText.justification = 'left';
        mmText.content = 'mm²';
        mmText.fontSize = 10;
        mmText.opacity = 0;

        // top arrows
        var top1 = new Raster('top_arrow');
        top1.position = new Point(kmPoint.x+30,kmPoint.y-20);
        top1.opacity = 0;

        var top2 = new Raster('top_arrow');
        top2.position = new Point(kmPoint.x+70,kmPoint.y-20);
        top2.opacity = 0;

        var top3 = new Raster('top_arrow');
        top3.position = new Point(kmPoint.x+114,kmPoint.y-20);
        top3.opacity = 0;

        var top4 = new Raster('top_arrow');
        top4.position = new Point(kmPoint.x+150,kmPoint.y-20);
        top4.opacity = 0;

        var top5 = new Raster('top_arrow');
        top5.position = new Point(kmPoint.x+190,kmPoint.y-20);
        top5.opacity = 0;

        var top6 = new Raster('top_arrow');
        top6.position = new Point(kmPoint.x+230,kmPoint.y-20);
        top6.opacity = 0;

        // bottom arrows

        var bottom1 = new Raster('bottom_arrow');
        bottom1.position = new Point(kmPoint.x+30,kmPoint.y+14);
        bottom1.opacity = 0;

        var bottom2 = new Raster('bottom_arrow');
        bottom2.position = new Point(kmPoint.x+70,kmPoint.y+14);
        bottom2.opacity = 0;

        var bottom3 = new Raster('bottom_arrow');
        bottom3.position = new Point(kmPoint.x+114,kmPoint.y+14);
        bottom3.opacity = 0;

        var bottom4 = new Raster('bottom_arrow');
        bottom4.position = new Point(kmPoint.x+150,kmPoint.y+14);
        bottom4.opacity = 0;

        var bottom5 = new Raster('bottom_arrow');
        bottom5.position = new Point(kmPoint.x+190,kmPoint.y+14);
        bottom5.opacity = 0;

        var bottom6 = new Raster('bottom_arrow');
        bottom6.position = new Point(kmPoint.x+230,kmPoint.y+14);
        bottom6.opacity = 0;

        // top texts
        var ttext1 = new PointText(kmPoint.x+12,kmPoint.y-30);
        ttext1.justification = 'left';
        ttext1.content = 'x 100';
        ttext1.fontSize = 10;
        ttext1.opacity = 0;

        var ttext2 = new PointText(kmPoint.x+52,kmPoint.y-30);
        ttext2.justification = 'left';
        ttext2.content = 'x 100';
        ttext2.fontSize = 10;
        ttext2.opacity = 0;

        var ttext3 = new PointText(kmPoint.x+96,kmPoint.y-30);
        ttext3.justification = 'left';
        ttext3.content = 'x 100';
        ttext3.fontSize = 10;
        ttext3.opacity = 0;

        var ttext4 = new PointText(kmPoint.x+132,kmPoint.y-30);
        ttext4.justification = 'left';
        ttext4.content = 'x 100';
        ttext4.fontSize = 10;
        ttext4.opacity = 0;

        var ttext5 = new PointText(kmPoint.x+172,kmPoint.y-30);
        ttext5.justification = 'left';
        ttext5.content = 'x 100';
        ttext5.fontSize = 10;
        ttext5.opacity = 0;

        var ttext6 = new PointText(kmPoint.x+212,kmPoint.y-30);
        ttext6.justification = 'left';
        ttext6.content = 'x 100';
        ttext6.fontSize = 10;
        ttext6.opacity = 0;

        // bottom texts
        var btext1 = new PointText(kmPoint.x+12,kmPoint.y+32);
        btext1.justification = 'left';
        btext1.content = ': 100';
        btext1.fontSize = 10;
        btext1.opacity = 0;

        var btext2 = new PointText(kmPoint.x+52,kmPoint.y+32);
        btext2.justification = 'left';
        btext2.content = ': 100';
        btext2.fontSize = 10;
        btext2.opacity = 0;

        var btext3 = new PointText(kmPoint.x+96,kmPoint.y+32);
        btext3.justification = 'left';
        btext3.content = ': 100';
        btext3.fontSize = 10;
        btext3.opacity = 0;

        var btext4 = new PointText(kmPoint.x+132,kmPoint.y+32);
        btext4.justification = 'left';
        btext4.content = ': 100';
        btext4.fontSize = 10;
        btext4.opacity = 0;

        var btext5 = new PointText(kmPoint.x+172,kmPoint.y+32);
        btext5.justification = 'left';
        btext5.content = ': 100';
        btext5.fontSize = 10;
        btext5.opacity = 0;

        var btext6 = new PointText(kmPoint.x+212,kmPoint.y+32);
        btext6.justification = 'left';
        btext6.content = ': 100';
        btext6.fontSize = 10;
        btext6.opacity = 0;

        // last texts
        var lastText1 = new PointText(lastTextPoint);
        lastText1.justification = 'center';
        lastText1.content = 'En çok kullanılan alan ölçme birimleri';
        lastText1.fillColor = "#069";
        lastText1.fontSize = 12;
        lastText1.opacity = 0;

        var lastText2 = new PointText(lastTextPoint.x,lastTextPoint.y+20);
        lastText2.justification = 'center';
        lastText2.content = 'km², m², cm², mm² ve dekar(dönüm)\'dür.';
        lastText2.fillColor = "#069";
        lastText2.fontSize = 12;
        lastText2.opacity = 0;

        mySquare.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:mySquareStart,
            animationType:'easeInOutQuad'
        });

        firstText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:mySquareStart,
            animationType:'easeInOutQuad'
        });

        secondText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:mySquareStart,
            animationType:'easeInOutQuad'
        });

        thirdText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:mySquareStart,
            animationType:'easeInOutQuad'
        });

        meterSquareGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:meterSquareStart,
            animationType:'easeInOutQuad'
        });

        decimeterSquareGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:decimeterSquareStart,
            animationType:'easeInOutQuad'
        });

        centimeterSquareGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:centimeterSquareStart,
            animationType:'easeInOutQuad'
        });

        millimeterSquareGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:millimeterSquareStart,
            animationType:'easeInOutQuad'
        });

        decameterSquareGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:decameterSquareStart,
            animationType:'easeInOutQuad'
        });

        hectometerSquareGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:hectometerSquareStart,
            animationType:'easeInOutQuad'
        });

        kilometerSquareGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:kilometerSquareStart,
            animationType:'easeInOutQuad'
        });

        $(ticker).delay(tickerStart).animate({opacity:1},1000,'easeInOutQuad');

        kmText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:kmTextStart,
            animationType:'easeInOutQuad'
        });

        hmText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:hmTextStart,
            animationType:'easeInOutQuad'
        });

        damText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:damTextStart,
            animationType:'easeInOutQuad'
        });

        mText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:mTextStart,
            animationType:'easeInOutQuad'
        });

        dmText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dmTextStart,
            animationType:'easeInOutQuad'
        });

        cmText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:cmTextStart,
            animationType:'easeInOutQuad'
        });

        mmText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:mmTextStart,
            animationType:'easeInOutQuad'
        });

        top1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top1Start,
            animationType:'easeInOutQuad'
        });

        ttext1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top1Start,
            animationType:'easeInOutQuad'
        });

        top2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top2Start,
            animationType:'easeInOutQuad'
        });

        ttext2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top2Start,
            animationType:'easeInOutQuad'
        });

        top3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top3Start,
            animationType:'easeInOutQuad'
        });

        ttext3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top3Start,
            animationType:'easeInOutQuad'
        });

        top4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top4Start,
            animationType:'easeInOutQuad'
        });

        ttext4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top4Start,
            animationType:'easeInOutQuad'
        });

        top5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top5Start,
            animationType:'easeInOutQuad'
        });

        ttext5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top5Start,
            animationType:'easeInOutQuad'
        });

        top6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top6Start,
            animationType:'easeInOutQuad'
        });

        ttext6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top6Start,
            animationType:'easeInOutQuad'
        });

        bottom6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom6Start,
            animationType:'easeInOutQuad'
        });

        btext6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom6Start,
            animationType:'easeInOutQuad'
        });

        bottom5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom5Start,
            animationType:'easeInOutQuad'
        });

        btext5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom5Start,
            animationType:'easeInOutQuad'
        });

        bottom4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom4Start,
            animationType:'easeInOutQuad'
        });

        btext4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom4Start,
            animationType:'easeInOutQuad'
        });

        bottom3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom3Start,
            animationType:'easeInOutQuad'
        });

        btext3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom3Start,
            animationType:'easeInOutQuad'
        });

        bottom2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom2Start,
            animationType:'easeInOutQuad'
        });

        btext2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom2Start,
            animationType:'easeInOutQuad'
        });

        bottom1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom1Start,
            animationType:'easeInOutQuad'
        });

        btext1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom1Start,
            animationType:'easeInOutQuad'
        });

        lastText1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lastTextStart,
            animationType:'easeInOutQuad'
        });

        lastText2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lastTextStart,
            animationType:'easeInOutQuad',
            callback:function(){
                Main.animationFinished(1000);
            }
        });
    }
}
function __Styles(){
    animStrokeColors = "#000000";

    meterColor = "#ff0000";
    decimeterColor = "#ff6666";
    centimeterColor = "#ff9999";
    millimeterColor = "#ffcccc";
    decameterColor = "#990000";
    hectometerColor = "#66000";
    kilometerColor = "#33000";

    questionDivStyle = {
        position:'absolute',
        top:'80px',
        left:'120px',
        width:'340px',
        height:'60px',
        fontSize:'24px'
    }
};
function convertUnits(quantity,initialUnit,convertedUnit){

    var middleValue;
    var result;

    switch(initialUnit){
        case "kilometer":
            middleValue = quantity*1000;
            break;
        case "hectometer":
            middleValue = quantity*100;
            break;
        case "decameter":
            middleValue = quantity*10;
            break;
        case "meter":
            middleValue = quantity;
            break;
        case "decimeter":
            middleValue = quantity*0.1;
            break;
        case "centimeter":
            middleValue = quantity*0.01;
            break;
        case "millimeter":
            middleValue = quantity*0.001;
            break;
        default:
            throw("unsupported initial unit type");
    }

    switch(convertedUnit){
        case "kilometer":
            result = middleValue*0.001;
            break;
        case "hectometer":
            result = middleValue*0.01;
            break;
        case "decameter":
            result = middleValue*0.1;
            break;
        case "meter":
            result = middleValue;
            break;
        case "decimeter":
            result  = middleValue*10;
            break;
        case "centimeter":
            result = middleValue*100;
            break;
        case "millimeter":
            result = middleValue*1000;
            break;
        default:
            throw("unsupported converted unit type");
    }

    return result;
}

function generateQuestion(){
    var questionUnit, answerUnit;
    var questionIndex, answerIndex, quantity;
    var factor;

    questionIndex = Util.randomInteger(0,12);
    switch(questionIndex){
        case 0:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(1,5);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 1:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,5,[1]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 2:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,6,[2]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 3:
            factor = Util.randomInteger(0,2);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,7,[3]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 4:
            quantity = Util.randomInteger(1,100);
            answerIndex = Util.randomInteger(1,7,[4]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 5:
            quantity = Util.randomInteger(1,100);
            answerIndex = Util.randomInteger(2,7,[5]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 6:
            quantity = Util.randomInteger(1,100);
            answerIndex = Util.randomInteger(3,7,[6]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 7:
            factor = Util.randomInteger(1,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = 3;
            questionUnit = questionUnitsArray[0];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 8:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = 5;
            questionUnit = questionUnitsArray[3];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 9:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = 6;
            questionUnit = questionUnitsArray[3];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 10:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = 3;
            questionUnit = questionUnitsArray[0];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 11:
            factor = Util.randomInteger(1,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = 3;
            questionUnit = questionUnitsArray[0];
            answerUnit = answerUnitsArray[answerIndex];
            break;
    }

    Interaction.question = quantity;
    Interaction.questionUnit = questionUnit;
    Interaction.answerUnit = answerUnit;
}

function convertInitials(abbr){
    var long;

    switch(abbr){
        case "km":
            long = "kilometer";
            break;
        case "hm":
            long = "hectometer";
            break;
        case "dam":
            long = "decameter";
            break;
        case "m":
            long = "meter";
            break;
        case "dm":
            long = "decimeter";
            break;
        case "cm":
            long = "centimeter";
            break;
        case "mm":
            long = "millimeter";
            break;
    }

    return long;
}

questionUnitsArray = ["km","hm","dam","m","dm","cm","mm"];
answerUnitsArray = ["km","hm","dam","m","dm","cm","mm"];
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
            id:'ruler',
            src:'/assets/animations/uzunluklari_olcme/uzunluklariolcme_cetvel.png'
        }
    ],
	init:function(container){
        Animation.container = container;

        var mySize = new Size(120,20);
        var meterPoint = new Point(120.5,80.5);
        var decimeterPoint = new Point(140.5,100.5);
        var centimeterPoint = new Point(160.5,120.5);
        var millimeterPoint = new Point(180.5,140.5);
        var decameterPoint = new Point(100.5,60.5);
        var hectometerPoint = new Point(80.5,40.5);
        var kilometerPoint = new Point(60.5,20.5);

        var kmPoint = new Point(460.5,40.5);

        var lastTextPoint = new Point(600.5,144.5);

        var animStart = 0;
        var meterStart = animStart+1000;
        var decimeterStart = meterStart+1000;
        var centimeterStart = decimeterStart+1000;
        var millimeterStart = centimeterStart+1000;
        var decameterStart = millimeterStart+1000;
        var hectometerStart = decameterStart+1000;
        var kilometerStart = hectometerStart+1000;

        var rulerStart = kilometerStart+1500;

        var kmTextStart = rulerStart+1500;
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
        meterGroup.opacity = 0;

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
        decimeterGroup.opacity = 0;

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
        centimeterGroup.opacity = 0;

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
        millimeterGroup.opacity = 0;

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
        decameterGroup.opacity = 0;

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
        hectometerGroup.opacity = 0;

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
        kilometerGroup.opacity = 0;

        var ruler = new Raster('ruler');
        ruler.position = new Point(588,106);
        ruler.opacity = 0;

        // km
        var kmText = new PointText(kmPoint);
        kmText.justification = 'left';
        kmText.content = 'km';
        kmText.fontSize = 10;
        kmText.opacity = 0;

        // hm
        var hmText = new PointText(new Point(kmPoint.x+40,kmPoint.y));
        hmText.justification = 'left';
        hmText.content = 'hm';
        hmText.fontSize = 10;
        hmText.opacity = 0;

        // dam
        var damText = new PointText(new Point(kmPoint.x+80,kmPoint.y));
        damText.justification = 'left';
        damText.content = 'dam';
        damText.fontSize = 10;
        damText.opacity = 0;

        // m
        var mText = new PointText(new Point(kmPoint.x+126,kmPoint.y));
        mText.justification = 'left';
        mText.content = 'm';
        mText.fillColor = "red";
        mText.fontSize = 10;
        mText.opacity = 0;

        // dm
        var dmText = new PointText(new Point(kmPoint.x+160,kmPoint.y));
        dmText.justification = 'left';
        dmText.content = 'dm';
        dmText.fontSize = 10;
        dmText.opacity = 0;

        // cm
        var cmText = new PointText(new Point(kmPoint.x+200,kmPoint.y));
        cmText.justification = 'left';
        cmText.content = 'cm';
        cmText.fontSize = 10;
        cmText.opacity = 0;

        // mm
        var mmText = new PointText(new Point(kmPoint.x+240,kmPoint.y));
        mmText.justification = 'left';
        mmText.content = 'mm';
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
        var ttext1 = new PointText(kmPoint.x+17,kmPoint.y-30);
        ttext1.justification = 'left';
        ttext1.content = 'x 10';
        ttext1.fontSize = 10;
        ttext1.opacity = 0;

        var ttext2 = new PointText(kmPoint.x+57,kmPoint.y-30);
        ttext2.justification = 'left';
        ttext2.content = 'x 10';
        ttext2.fontSize = 10;
        ttext2.opacity = 0;

        var ttext3 = new PointText(kmPoint.x+101,kmPoint.y-30);
        ttext3.justification = 'left';
        ttext3.content = 'x 10';
        ttext3.fontSize = 10;
        ttext3.opacity = 0;

        var ttext4 = new PointText(kmPoint.x+137,kmPoint.y-30);
        ttext4.justification = 'left';
        ttext4.content = 'x 10';
        ttext4.fontSize = 10;
        ttext4.opacity = 0;

        var ttext5 = new PointText(kmPoint.x+177,kmPoint.y-30);
        ttext5.justification = 'left';
        ttext5.content = 'x 10';
        ttext5.fontSize = 10;
        ttext5.opacity = 0;

        var ttext6 = new PointText(kmPoint.x+217,kmPoint.y-30);
        ttext6.justification = 'left';
        ttext6.content = 'x 10';
        ttext6.fontSize = 10;
        ttext6.opacity = 0;

        // bottom texts
        var btext1 = new PointText(kmPoint.x+17,kmPoint.y+32);
        btext1.justification = 'left';
        btext1.content = ': 10';
        btext1.fontSize = 10;
        btext1.opacity = 0;

        var btext2 = new PointText(kmPoint.x+57,kmPoint.y+32);
        btext2.justification = 'left';
        btext2.content = ': 10';
        btext2.fontSize = 10;
        btext2.opacity = 0;

        var btext3 = new PointText(kmPoint.x+101,kmPoint.y+32);
        btext3.justification = 'left';
        btext3.content = ': 10';
        btext3.fontSize = 10;
        btext3.opacity = 0;

        var btext4 = new PointText(kmPoint.x+137,kmPoint.y+32);
        btext4.justification = 'left';
        btext4.content = ': 10';
        btext4.fontSize = 10;
        btext4.opacity = 0;

        var btext5 = new PointText(kmPoint.x+177,kmPoint.y+32);
        btext5.justification = 'left';
        btext5.content = ': 10';
        btext5.fontSize = 10;
        btext5.opacity = 0;

        var btext6 = new PointText(kmPoint.x+217,kmPoint.y+32);
        btext6.justification = 'left';
        btext6.content = ': 10';
        btext6.fontSize = 10;
        btext6.opacity = 0;

        // last texts
        var lastText1 = new PointText(lastTextPoint);
        lastText1.justification = 'center';
        lastText1.content = 'En çok kullanılan uzunluk ölçme birimleri';
        lastText1.fillColor = "#069";
        lastText1.fontSize = 12;
        lastText1.opacity = 0;

        var lastText2 = new PointText(new Point(lastTextPoint.x,lastTextPoint.y+20));
        lastText2.justification = 'center';
        lastText2.content = 'km, m, cm ve mm\'dir.';
        lastText2.fillColor = "#069";
        lastText2.fontSize = 12;
        lastText2.opacity = 0;

        meterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:meterStart,
            animationType:'easeInOutQuad'
        });

        decimeterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:decimeterStart,
            animationType:'easeInOutQuad'
        });

        centimeterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:centimeterStart,
            animationType:'easeInOutQuad'
        });

        millimeterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:millimeterStart,
            animationType:'easeInOutQuad'
        });

        decameterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:decameterStart,
            animationType:'easeInOutQuad'
        });

        hectometerGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:hectometerStart,
            animationType:'easeInOutQuad'
        });

        kilometerGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:kilometerStart,
            animationType:'easeInOutQuad'
        });

        ruler.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:rulerStart,
            animationType:'easeInOutQuad'
        });

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
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki uzunlukları istenen ölçü birimine çeviriniz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'30px',
            right:'150px',
            width:'340px',
            height:'26px',
            textAlign:'center'
        });
        Interaction.appendButton({
            bottom:'30px',
            right:'30px'
        });
        Interaction.appendInput({
            position:'absolute',
            top:'4px',
            width:'80px',
            height:'32px',
            right:'86px',
            fontSize:'22px'
        });
        $(Interaction.input).attr("maxLength",6);

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle,
            html:'<span id="question" style="position:absolute;top:10px;right:200px;width:120px;height:30px;text-align:right;"></span><span id="eq" style="position:absolute;top:10px;right:180px;">=</span><span id="answerUnit" style="position:absolute;top:10px;right:24px;width:50px;text-align:left;"></span>'
        });
        $(Interaction.questionDiv).append(Interaction.input);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        $(Interaction.input).css("color","black");

        generateQuestion();

        var turkishQuantity = ""+Interaction.question;
        if(turkishQuantity.indexOf(".") != -1){
            turkishQuantity = turkishQuantity.replace(".",",");
        }
        $('#question').html(turkishQuantity+" "+Interaction.questionUnit);
        $('#answerUnit').html(Interaction.answerUnit);

        Interaction.answer = convertUnits(Interaction.question,convertInitials(Interaction.questionUnit),convertInitials(Interaction.answerUnit));

    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        var lastPart = "";
        var flag = 1;
        var checkedValue = Util.numberTurkishFloating(Interaction.answer,6);
        var parts = checkedValue.split(",");
        if(parts.length != 1){
            lastPart = parts[1];
            for(var i = lastPart.length-1; i>=0; i--){
                if(lastPart[i] == "0" && flag == 1){
                    lastPart = lastPart.slice(0,i);
                }
                else{
                    flag = 0;
                }
            }
        }
        if(lastPart.length > 0){
            checkedValue = ""+parts[0]+","+lastPart;
        }
        else{
            checkedValue = parts[0];
        }
        Interaction.checkedValue = checkedValue;
        return parseFloat(checkedValue.replace(",",".")) == parseFloat(value.replace(",","."));
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",false);
        Interaction.input.value = Interaction.checkedValue;
        $(Interaction.input).css("color","green");
    }
}
;





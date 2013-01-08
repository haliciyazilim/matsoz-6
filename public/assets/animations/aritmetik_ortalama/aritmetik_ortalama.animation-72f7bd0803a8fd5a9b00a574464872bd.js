var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var tableGroup = new Group();

        var horiLine = new Path.Line(new Point(176.5, 60.5), new Point(602.5, 60.5));
        horiLine.strokeColor = "grey";
        horiLine.strokeWidth = 1;
        tableGroup.addChild(horiLine);

        var vertLine = new Path.Line(new Point(245.5, 40.5), new Point(245.5, 80.5));
        vertLine.strokeColor = "grey";
        vertLine.strokeWidth = 1;
        tableGroup.addChild(vertLine);

        var vertLine2 = new Path.Line(new Point(279.5, 40.5), new Point(279.5, 80.5));
        vertLine2.strokeColor = "grey";
        vertLine2.strokeWidth = 1;
        tableGroup.addChild(vertLine2);

        var vertLine3 = new Path.Line(new Point(356.5, 40.5), new Point(356.5, 80.5));
        vertLine3.strokeColor = "grey";
        vertLine3.strokeWidth = 1;
        tableGroup.addChild(vertLine3);

        var vertLine4 = new Path.Line(new Point(434.5, 40.5), new Point(434.5, 80.5));
        vertLine4.strokeColor = "grey";
        vertLine4.strokeWidth = 1;
        tableGroup.addChild(vertLine4);

        var vertLine5 = new Path.Line(new Point(480.5, 40.5), new Point(480.5, 80.5));
        vertLine5.strokeColor = "grey";
        vertLine5.strokeWidth = 1;
        tableGroup.addChild(vertLine5);

        var vertLine6 = new Path.Line(new Point(557.5, 40.5), new Point(557.5, 80.5));
        vertLine6.strokeColor = "grey";
        vertLine6.strokeWidth = 1;
        tableGroup.addChild(vertLine6);

        $(container).append('<img id="calendar" src="/assets/animations/aritmetik_ortalama/calendar.png" />');
        $('#calendar').css("width", "80px")
            .css("height", "60px")
            .css("position", "absolute")
            .css("left", "90px")
            .css("top", "46px");

        $(container).append('<img id="rainbow" src="/assets/animations/aritmetik_ortalama/rainbow.png" />');
        $('#rainbow').css("width", "80px")
            .css("height", "60px")
            .css("position", "absolute")
            .css("left", "640px")
            .css("top", "46px");


        $(container).append('<div id="datasHolderDiv"></div>');
        $('#datasHolderDiv').css("position", "absolute")
            .css("left", "206px")
            .css("top", "32px")
            .css("width", "400")
            .css("height", "100")

        $('#datasHolderDiv').append('<div id="context">Bir haftalık hava sıcaklığı sonuçları</div>');
        $('#context').css("position", "absolute")
            .css("left", "40px")
            .css("top", "-4px")
            .css("font-size", 18)
            .css("text-align", "center")
            .css("width", "320x");

        $('#datasHolderDiv').append('<div id="monday">Pazartesi</div>');
        $('#monday').css("position", "absolute")
            .css("left", "-14px")
            .css("top", "24px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("width", "50px")
            .css("font-weight", "bold");
        $('#datasHolderDiv').append('<div id="mondayD">25°</div>');
        $('#mondayD').css("position", "absolute")
            .css("left", "6px")
            .css("top", "48px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("opacity", 0)
            .delay(4000).animate({opacity:1}, 500,'easeInOutQuad');

        $('#datasHolderDiv').append('<div id="tuesday">Salı</div>');
        $('#tuesday').css("position", "absolute")
            .css("left", "50px")
            .css("top", "24px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("width", "40px")
            .css("font-weight", "bold");
        $('#datasHolderDiv').append('<div id="tuesdayD">27°</div>');
        $('#tuesdayD').css("position", "absolute")
            .css("left", "60px")
            .css("top", "48px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("opacity", 0)
            .delay(5000).animate({opacity:1}, 500, 'easeInOutQuad');

        $('#datasHolderDiv').append('<div id="wednesday">Çarşamba</div>');
        $('#wednesday').css("position", "absolute")
            .css("left", "92px")
            .css("top", "24px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("width", "54px")
            .css("font-weight", "bold");
        $('#datasHolderDiv').append('<div id="wednesdayD">30°</div>');
        $('#wednesdayD').css("position", "absolute")
            .css("left", "116px")
            .css("top", "48px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("opacity", 0)
            .delay(6000).animate({opacity:1}, 500, 'easeInOutQuad');

        $('#datasHolderDiv').append('<div id="thursday">Perşembe</div>');
        $('#thursday').css("position", "absolute")
            .css("left", "170px")
            .css("top", "24px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("width", "54px")
            .css("font-weight", "bold");
        $('#datasHolderDiv').append('<div id="thursdayD">29°</div>');
        $('#thursdayD').css("position", "absolute")
            .css("left", "196px")
            .css("top", "48px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("opacity", 0)
            .delay(7000).animate({opacity:1}, 500, 'easeInOutQuad');

        $('#datasHolderDiv').append('<div id="friday">Cuma</div>');
        $('#friday').css("position", "absolute")
            .css("left", "244px")
            .css("top", "24px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("width", "44px")
            .css("font-weight", "bold");
        $('#datasHolderDiv').append('<div id="fridayD">31°</div>');
        $('#fridayD').css("position", "absolute")
            .css("left", "258px")
            .css("top", "48px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("opacity", 0)
            .delay(8000).animate({opacity:1}, 500, 'easeInOutQuad');

        $('#datasHolderDiv').append('<div id="saturday">Cumartesi</div>');
        $('#saturday').css("position", "absolute")
            .css("left", "292px")
            .css("top", "24px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("width", "54px")
            .css("font-weight", "bold");
        $('#datasHolderDiv').append('<div id="saturdayD">28°</div>');
        $('#saturdayD').css("position", "absolute")
            .css("left", "316px")
            .css("top", "48px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("opacity", 0)
            .delay(9000).animate({opacity:1}, 500, 'easeInOutQuad');

        $('#datasHolderDiv').append('<div id="sunday">Pazar</div>');
        $('#sunday').css("position", "absolute")
            .css("left", "366px")
            .css("top", "24px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("width", "46px")
            .css("font-weight", "bold");
        $('#datasHolderDiv').append('<div id="sundayD">26°</div>');
        $('#sundayD').css("position", "absolute")
            .css("left", "380px")
            .css("top", "48px")
            .css("font-size", 14)
            .css("text-align", "center")
            .css("opacity", 0)
            .delay(10000).animate({opacity:1}, 500, 'easeInOutQuad');

        $(container).append('<div id="executionDiv"></div>');
        $('#executionDiv').css("position", "absolute")
            .css("left", "102px")
            .css("top", "128px")
            .css("width", "600")
            .css("height", "60");

        $('#executionDiv').append('<div id="averageText">Aritmetik Ortalama</div>');
        $('#averageText').css("position", "absolute")
            .css("left", "18px")
            .css("top", "20px")
            .css("font-size", 18)
            .css("text-align", "center")
            .css("width", "320x");

        $('#executionDiv').append('<p id="execEq">=</p>');
        $('#execEq').css("position", "absolute")
            .css("left", "176px")
            .css("top", "20px")
            .css("font-size", 20);

        $('#executionDiv').append('<div id="numerator"></div>');
        $('#numerator').css("position", "absolute")
            .css("left", "198px")
            .css("top", "9px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "320x");

        $('#numerator').append('<div id="firstN">25</div>')
        $('#firstN').css("position", "absolute")
            .css("left", "0px")
            .css("top", "2px")
            .css("font-size", 16)
            .css("text-align", "center");

        $('#numerator').append('<div id="secondN">+ 27</div>')
        $('#secondN').css("position", "absolute")
            .css("left", "20px")
            .css("top", "2px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "40px");

        $('#numerator').append('<div id="thirdN">+ 30</div>')
        $('#thirdN').css("position", "absolute")
            .css("left", "56px")
            .css("top", "2px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "40px");

        $('#numerator').append('<div id="fourthN">+ 29</div>')
        $('#fourthN').css("position", "absolute")
            .css("left", "92px")
            .css("top", "2px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "40px");

        $('#numerator').append('<div id="fifthN">+ 31</div>')
        $('#fifthN').css("position", "absolute")
            .css("left", "126px")
            .css("top", "2px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "40px");

        $('#numerator').append('<div id="sixthN">+ 28</div>')
        $('#sixthN').css("position", "absolute")
            .css("left", "164px")
            .css("top", "2px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "40px");

        $('#numerator').append('<div id="seventhN">+ 26</div>')
        $('#seventhN').css("position", "absolute")
            .css("left", "202px")
            .css("top", "2px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "40px");

        $('#executionDiv').append('<div id="execLine"></div>');
        $('#execLine').css("position","absolute")
            .css("left", "196px")
            .css("top", "30px")
            .css("width", "242px")
            .css("height", "1px")
            .css("padding", 0)
            //	.css("font-weight", "bold")
            .css("border-top", "2px solid");

        $('#executionDiv').append('<div id="denumerator">7</div>');
        $('#denumerator').css("position", "absolute")
            .css("left", "311px")
            .css("top", "36px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "20x");

        $('#executionDiv').append('<p id="execEq2" >=</p>');
        $('#execEq2').css("position", "absolute")
            .css("left", "449px")
            .css("top", "20px")
            .css("font-size", 20);

        $('#executionDiv').append('<div id="numerator2">196</div>');
        $('#numerator2').css("position", "absolute")
            .css("left", "474px")
            .css("top", "11px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "320x");

        $('#executionDiv').append('<div id="execLine2"></div>');
        $('#execLine2').css("position","absolute")
            .css("left", "470px")
            .css("top", "30px")
            .css("width", "39px")
            .css("height", "1px")
            //	.css("padding", 0)
            .css("border-top", "2px solid");

        $('#executionDiv').append('<div id="denumerator2">7</div>');
        $('#denumerator2').css("position", "absolute")
            .css("left", "484px")
            .css("top", "36px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "20x");

        $('#executionDiv').append('<p id="execEq3" >=</p>');
        $('#execEq3').css("position", "absolute")
            .css("left", "517px")
            .css("top", "20px")
            .css("font-size", 20);

        $('#executionDiv').append('<div id="lastNum">28</div>');
        $('#lastNum').css("position", "absolute")
            .css("left", "537px")
            .css("top", "22px")
            .css("font-size", 16)
            .css("text-align", "center")
            .css("width", "20x");

        horiLine.opacity = 0;
        for(i = 1; i < 7; i++) {
            tableGroup.children[i].opacity = 0;
        }

        exampleHelper = {
            averageTextOpacity: 0,
            firstNOpacity: 0,
            secondNOpacity: 0,
            thirdNOpacity: 0,
            fourthNOpacity: 0,
            fifthNOpacity:0,
            sixthNOpacity:0,
            seventhNOpacity:0,
            execLineOpacity: 0,
            execLine2Opacity: 0,
            execEqOpacity: 0,
            execEq2Opacity: 0,
            execEq3Opacity: 0,
            denumeratorOpacity: 0,
            denumerator2Opacity: 0,
            numerator2Opacity: 0,
            lastNumOpacity: 0,
            calendarOpacity: 0,
            rainbowOpacity: 0,
            contextOpacity: 0,
            mondayOpacity: 0,
            tuesdayOpacity: 0,
            wednesdayOpacity: 0,
            thursdayOpacity: 0,
            fridayOpacity: 0,
            saturdayOpacity: 0,
            sundayOpacity:0
        }

        exampleHelper.animate = Item.prototype.animate;

        Animation.onFrame = function(event) {
            $('#calendar').css("opacity", exampleHelper.calendarOpacity);
            $('#rainbow').css("opacity", exampleHelper.calendarOpacity);
            $('#context').css("opacity", exampleHelper.contextOpacity);
            $('#monday').css("opacity", exampleHelper.mondayOpacity);
            $('#tuesday').css("opacity", exampleHelper.tuesdayOpacity);
            $('#wednesday').css("opacity", exampleHelper.wednesdayOpacity);
            $('#thursday').css("opacity", exampleHelper.thursdayOpacity);
            $('#friday').css("opacity", exampleHelper.fridayOpacity);
            $('#saturday').css("opacity", exampleHelper.saturdayOpacity);
            $('#sunday').css("opacity", exampleHelper.sundayOpacity);
            $('#averageText').css("opacity", exampleHelper.averageTextOpacity);
            $('#execEq').css("opacity", exampleHelper.execEqOpacity);
            $('#execLine').css("opacity", exampleHelper.execLineOpacity);
            $('#firstN').css("opacity", exampleHelper.firstNOpacity);
            $('#secondN').css("opacity", exampleHelper.secondNOpacity);
            $('#thirdN').css("opacity", exampleHelper.thirdNOpacity);
            $('#fourthN').css("opacity", exampleHelper.fourthNOpacity);
            $('#fifthN').css("opacity", exampleHelper.fifthNOpacity);
            $('#sixthN').css("opacity", exampleHelper.sixthNOpacity);
            $('#seventhN').css("opacity", exampleHelper.seventhNOpacity);
            $('#denumerator').css("opacity", exampleHelper.denumeratorOpacity);
            $('#execEq2').css("opacity", exampleHelper.execEq2Opacity);
            $('#numerator2').css("opacity", exampleHelper.numerator2Opacity);
            $('#execLine2').css("opacity", exampleHelper.execLine2Opacity);
            $('#denumerator2').css("opacity", exampleHelper.denumerator2Opacity);
            $('#execEq3').css("opacity", exampleHelper.execEq3Opacity);
            $('#lastNum').css("opacity", exampleHelper.lastNumOpacity);
        }

        exampleHelper.animate({
            style: {
                calendarOpacity: 1
            },
            duration: 1000,
            delay: 1000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                contextOpacity: 1
            },
            duration: 1000,
            delay: 2000,
            animationType: 'easeInOutQuad'
        });


        horiLine.animate({
            style: {
                opacity: 1
            },
            duration: 500,
            delay: 3000,
            animationType: 'easeInOutQuad'
        });

        for(i = 1; i < 7; i++) {
            tableGroup.children[i].animate({
                style: {
                    opacity: 1
                },
                duration: 100,
                delay: 3700+(1000*i),
                animationType: 'easeInOutQuad'
            });
        }

        exampleHelper.animate({
            style: {
                mondayOpacity: 1
            },
            duration: 500,
            delay: 4000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                tuesdayOpacity: 1
            },
            duration: 500,
            delay: 5000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                wednesdayOpacity: 1
            },
            duration: 500,
            delay: 6000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                thursdayOpacity: 1
            },
            duration: 500,
            delay: 7000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                fridayOpacity: 1
            },
            duration: 500,
            delay: 8000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                saturdayOpacity: 1
            },
            duration: 500,
            delay: 9000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                sundayOpacity: 1
            },
            duration: 500,
            delay: 10000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                averageTextOpacity: 1
            },
            duration: 1000,
            delay: 11000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                execEqOpacity: 1
            },
            duration: 1000,
            delay: 12000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                execLineOpacity: 1
            },
            duration: 1000,
            delay: 13000,
            animationType: 'easeInOutQuad'
        });


        exampleHelper.animate({
            style: {
                firstNOpacity: 1
            },
            duration: 500,
            delay: 14000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                secondNOpacity: 1
            },
            duration: 500,
            delay: 14500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                thirdNOpacity: 1
            },
            duration: 500,
            delay: 15000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                fourthNOpacity: 1
            },
            duration: 300,
            delay: 15500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                fifthNOpacity: 1
            },
            duration: 500,
            delay: 16000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                sixthNOpacity: 1
            },
            duration: 500,
            delay: 16500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                seventhNOpacity: 1
            },
            duration: 500,
            delay: 17000,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                denumeratorOpacity: 1
            },
            duration: 1000,
            delay: 17500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                execEq2Opacity: 1
            },
            duration: 1000,
            delay: 18500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                execLine2Opacity: 1
            },
            duration: 1000,
            delay: 19500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                numerator2Opacity: 1
            },
            duration: 1000,
            delay: 20500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                denumerator2Opacity: 1
            },
            duration: 1000,
            delay: 21500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                execEq3Opacity: 1
            },
            duration: 1000,
            delay: 22500,
            animationType: 'easeInOutQuad'
        });

        exampleHelper.animate({
            style: {
                lastNumOpacity: 1
            },
            duration: 1000,
            delay: 23500,
            animationType: 'easeInOutQuad',
            callback: function(){
                Main.animationFinished(1000);
            }
        });
    }
}
;

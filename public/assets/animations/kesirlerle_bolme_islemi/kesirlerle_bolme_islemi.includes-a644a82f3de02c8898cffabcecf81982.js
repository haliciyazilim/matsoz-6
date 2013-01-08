function __Styles(){
    rectFillColor = "#ffdead";

    questionDivStyle = {
        position:'absolute',
        top:'40px',
        left:'120px',
        width:'300px',
        height:'60px',
        fontSize:'24px'
    };

    answerDivStyle = {
        position:'absolute',
        top:'130px',
        left:'172px',
        width:'400px',
        height:'80px',
        fontSize:'18px',
//        border:'1px solid',
        color:'#069'
    };

    firstShapeStrokeColor = "#9b763d";
    firstShapeFillColor = "#f2c885";

    secondShapeLastColor = "#4f9c4f";
    secondShapeFillColor = "#9ee9a5";

    firstTextStyle = {
        position:'absolute',
        top:'40px',
        left:'100px',
        width:'240px',
        height:'40px',
    //    border:'1px solid',
        fontSize:'16px',
        opacity:0
    };

    firstSolutionStyle = {
        position:'absolute',
        top:'120px',
        left:'146px',
        width:'150px',
        height:'40px',
    //    border:'1px solid',
        fontSize:'16px'
    };

    secondTextStyle = {
        position:'absolute',
        top:'30px',
        left:'450px',
        width:'240px',
        height:'40px',
//        border:'1px solid',
        fontSize:'16px',
        opacity:0
    };

    secondSolutionStyle = {
        position:'absolute',
        top:'130px',
        left:'470px',
        width:'150px',
        height:'40px',
//        border:'1px solid',
        fontSize:'16px'
    };
}
;
var RationalNumber = Class.extend({
    init:function(opt){
        if(opt.integer){
            this.integer = opt.integer;
        }
        this.nominator = opt.nominator;
        this.denominator = opt.denominator;
        if(opt.factor){
            this.factor = opt.factor;
        }
        else{
            this.factor = 1;
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();

    },
    simplification:function(){
        var gcd = Util.gcd(this.nominator,this.denominator);

        this.nominator = this.nominator/gcd;
        this.denominator = this.denominator/gcd;

        this.determineDefinition();
        this.determineValue();
    },
    denomEqualization:function(otherRationalNumber){
        var lcm = Util.lcm(this.denominator,otherRationalNumber.denominator);

        this.nominator = this.nominator * (lcm/this.denominator);
        this.denominator = lcm;

        otherRationalNumber.nominator = otherRationalNumber.nominator * (lcm/otherRationalNumber.denominator);
        otherRationalNumber.denominator = lcm;

        this.determineDefinition();
        this.determineValue();

        otherRationalNumber.determineDefinition();
        otherRationalNumber.determineValue();
    },
    addition:function(otherRationalNumber){
        var nom, nom1, nom2, factor1, flag, denom, integer;

        flag = 0;
        this.denomEqualization(otherRationalNumber);

        if(this.integer){
            nom1 = (this.integer * this.denominator) + this.nominator;
            flag = 1;
        }
        else{
            nom1 = this.nominator;
        }

        if(otherRationalNumber.integer){
            nom2 = (otherRationalNumber.integer * otherRationalNumber.denominator) + otherRationalNumber.nominator;
            flag = 1;
        }
        else{
            nom2 = otherRationalNumber.nominator;
        }

        denom = this.denominator;

        nom = (this.factor * nom1) + (otherRationalNumber.factor * nom2);

        if(flag){
            integer = Math.floor(Math.abs(nom / denom));
            nom = nom % denom;
            denom = denom;
        }

        if(nom < 0){
            factor1 = -1;
            nom = -1 * nom;
        }
        else{
            factor1 = 1;
            nom = nom;
        }

        if(flag){
           var addition = new RationalNumber({factor:factor1,integer:integer,nominator:nom,denominator:denom});
        }
        else{
            var addition = new RationalNumber({factor:factor1,nominator:nom,denominator:denom});
        }

        this.simplification();
        otherRationalNumber.simplification();

        addition.simplification();
        return addition;
    },
    substraction:function(otherRationalNumber){
        var substraction;

        otherRationalNumber.additionInvert();

        substraction = this.addition(otherRationalNumber);

        otherRationalNumber.additionInvert();

        substraction.simplification();
        return substraction;
    },
    multiplication:function(otherRationalNumber){
        var factor1, nom1, denom1;
        var flag1 = 0;
        var flag2 = 0;
        if(this.type == RationalNumber.COMPLEX){
            this.convertToCompoundForm();
            flag1 = 1;
        }
        if(otherRationalNumber.type == RationalNumber.COMPLEX){
            otherRationalNumber.convertToCompoundForm();
            flag2 = 1;
        }

        factor1 = this.factor * otherRationalNumber.factor;
        nom1 = this.nominator * otherRationalNumber.nominator;
        denom1 = this.denominator * otherRationalNumber.denominator;

        var multiplication = new RationalNumber({factor:factor1,nominator:nom1,denominator:denom1});

        if(flag1 == 1){
            this.convertToComplexForm();
        }
        if(flag2 == 1){
            otherRationalNumber.convertToComplexForm();
        }

    //    multiplication.simplification();
        return multiplication;
    },
    division:function(otherRationalNumber){
        var division;

        otherRationalNumber.multiplicationInvert();

        division = this.multiplication(otherRationalNumber);

        otherRationalNumber.multiplicationInvert();

    //    division.simplification();
        return division;
    },
    convertToComplexForm:function(){
        if(!this.integer){
            this.integer = Math.floor(this.nominator / this.denominator);
            this.nominator = this.nominator % this.denominator;
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    convertToCompoundForm:function(){
        if(this.integer){
            this.nominator = (this.integer * this.denominator) + this.nominator;
        }

        this.integer = undefined;
        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    additionInvert:function(){
        if(this.factor){
            if(this.factor == 1){
                this.factor = -1;
            }
            else{
                this.factor = 1;
            }
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    multiplicationInvert:function(){
        if(this.type == 3){
            this.convertToCompoundForm();
        }

        var nom = this.nominator;
        this.nominator = this.denominator;
        this.denominator = nom;

        this.determineType();
        this.determineDefinition();
        this.determineValue();

    },
    toHTML:function(fontSize){
        var now = Date.now();

        var line = fontSize+4;
        var height = (2*line)+1;
        var width = height+6;
        var width2 = Math.round(width * 0.56);
        var width3 = width - width2;
        var lineWidth = width2;
        var intHeight = 2*line;

        var fontStr = ""+fontSize+"px";
        var lineStr = ""+line+"px";
        var heightStr = ""+height+"px";
        var widthStr = ""+width+"px";
        var width2Str = ""+width2+"px";
        var width3Str = ""+width3+"px";
        var lineWidthStr = ""+lineWidth+"px";
        var intHeightStr = ""+intHeight+"px";

        var myCss = {
            position:'absolute',
            padding:0,
            margin:0,
            width:widthStr,
            height:heightStr,
            fontSize:fontStr,
            lineHeight:lineStr
        };

        var myCss2 = {
            position:'absolute',
            padding:0,
            margin:0,
            width:width2Str,
            fontSize:fontStr,
            lineHeight:lineStr
        };

        var intStyle = {
            width:width3Str,
            height:heightStr,
            textAlign:'right',
            paddingRight:'4px',
            boxSizing:'border-box',
            float:'left',
            lineHeight:intHeightStr
        };
        var nomStyle = {
            width:width2Str,
            height:lineStr,
            textAlign:'center',
            float:'left',
            lineHeight:lineStr
        };
        var lineStyle = {
            width:lineWidthStr,
            height:'1px',
            padding:0,
            borderTop:'2px solid',
            float:'left'
        };
        var denomStyle = {
            width:width2Str,
            height:lineStr,
            textAlign:'center',
            float:'left',
            lineHeight:lineStr
        };

        if(this.integer){

            var html = Util.dom({tag:'div', css:myCss,
                html:'<div class="frac">' +
                        '<div class="int"></div>' +
                        '<div class="nom"></div>' +
                        '<div class="line"></div>' +
                        '<div class="denom"></div>' +
                    '</div>'
            });
            var integer;

            if(this.integer){
                integer = this.factor * this.integer;
            }
            else{
                if(this.factor == -1){
                    integer = "-";
                }
                else{
                    integer = "";
                }
            }

            $('.int',html).html(integer);
            $('.int',html).css(intStyle);
            $('.nom',html).html(this.nominator);
            $('.nom',html).css(nomStyle);
            $('.denom',html).html(this.denominator);
            $('.denom',html).css(denomStyle);
            $('.line',html).css(lineStyle);
        }
        else{
            var html = Util.dom({tag:'div', css:myCss2,
            html:'<div class="frac">' +
                    '<div class="nom"></div>' +
                    '<div class="line"></div>' +
                    '<div class="denom"></div>' +
                '</div>'
            });

            $('.nom',html).html(this.nominator);
            $('.nom',html).css(nomStyle);
            $('.denom',html).html(this.denominator);
            $('.denom',html).css(denomStyle);
            $('.line',html).css(lineStyle);

        }
        return html;

    },
    determineType:function(){
        if(this.factor == -1){
            this.type = RationalNumber.RATIONAL;
        }
        else{
            if(this.integer){
                this.type = RationalNumber.COMPLEX;
            }
            else{
                if(this.nominator < this.denominator){
                    this.type = RationalNumber.SIMPLE;
                }
                else{
                    this.type = RationalNumber.COMPOUND;
                }
            }
        }
    },
    determineDefinition:function(){
        if(this.factor == -1){
            if(this.integer){
                this.definition = "-"+this.integer+" tam "+this.nominator+" bölü "+this.denominator;
            }
            else{
                this.definition = "-"+this.nominator+" bölü "+this.denominator;
            }
        }
        else{
            if(this.integer){
                this.definition = ""+this.integer+" tam "+this.nominator+" bölü "+this.denominator;
            }
            else{
                this.definition = ""+this.nominator+" bölü "+this.denominator;
            }
        }
    },
    determineValue:function(){
        var value;
        if(this.integer){
            value = this.integer + (this.nominator/this.denominator);
        }
        else{
            value = this.nominator/this.denominator;
        }
        this.value = this.factor * value;
    }
});

RationalNumber.randomGenerator = function(factor,type){
    if(type == null || type == undefined){
        type = Util.randomInteger(0,4);
    }
    if(factor == null || factor == undefined){
        if(type == 0){
            factor = -1;
        }
        else{
            factor = 1;
        }
    }

    var nom, denom, integer, rationalNumber;

    switch(type){
        case 0:
            if(Util.randomDigit()){
                integer = Util.randomInteger(1,4);
                nom = Util.randomInteger(1,11);
                denom = Util.randomInteger(2,16,[nom]);
                rationalNumber = new RationalNumber({factor:factor,integer:integer,nominator:nom,denominator:denom});
            }
            else{
                nom = Util.randomInteger(1,11);
                denom = Util.randomInteger(2,16,[nom]);
                rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            }
            break;
        case 1:
            nom = Util.randomInteger(1,11);
            denom = Util.randomInteger(nom+1,16);
            rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            break;
        case 2:
            do{
                nom = Util.randomInteger(3,16);
                denom = Util.randomInteger(2,nom);
            } while(nom % denom == 0)
            rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            break;
        case 3:
            integer = Util.randomInteger(1,4);
            nom = Util.randomInteger(1,11);
            denom = Util.randomInteger(nom+1,16);
            rationalNumber = new RationalNumber({factor:factor,integer:integer,nominator:nom,denominator:denom});
            break;
    }

    return rationalNumber;
};

RationalNumber.RATIONAL = 0;
RationalNumber.SIMPLE = 1;
RationalNumber.COMPOUND = 2;
RationalNumber.COMPLEX = 3;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var firstShapeStart = animStart+1000;
        var firstTextStart = firstShapeStart+2000;
        var firstSolutionStart = firstTextStart+2000;
        var secondShapeStart = firstSolutionStart+7000;
        var secondTextStart = secondShapeStart+2000;
        var secondSolutionStart = secondTextStart+2000;


        var firstShape = new Group();
        for(var i = 0; i < 3; i++){
            var a = new Path.Rectangle(new Point(90.5+80*i,70.5), new Size(60,30));
            a.strokeColor = firstShapeStrokeColor;
            a.fillColor = firstShapeFillColor;
            firstShape.addChild(a);
        }
        firstShape.opacity = 0;

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
        secondShape.opacity = 0;

        var myLine = new Path.Line(new Point(450.5,85.5), new Point(600.5,85.5));
        myLine.strokeColor = "black";
        myLine.opacity = 0;

        var fillPath = new Path.Rectangle(new Point(450.5,60.5), new Size(50,25));
        fillPath.fillColor = secondShapeLastColor;
        fillPath.opacity = 0;

        var firstText = Util.dom({parent:Animation.container, tag:'div', css:firstTextStyle,
            html:'<span id="m1" style="position:absolute;top:0px;left:0px;">3 bütünün içinde</span>' +
                '<div id="mf1" style="position:absolute;top:-6px;left:124px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom1" style="text-align:center;height:16px;">1</div>' +
                    '<div id="mfline1" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom1" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="m2" style="position:absolute;top:0px;left:146px;">kaç tanedir?</span>'
        });

        var firstSolution = Util.dom({parent:Animation.container, tag:'div', css:firstSolutionStyle,
            html:'<span id="num1" style="opacity:0;position:absolute;top:20px;left:0px;">3</span>' +
                '<span id="divis1" style="opacity:0;position:absolute;top:19px;left:12px;font-weight:bold;">:</span>' +
                '<div id="mf2" style="opacity:0;position:absolute;top:11px;left:22px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom2" style="text-align:center;height:16px;">1</div>' +
                    '<div id="mfline2" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom2" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="eqq1" style="opacity:0;position:absolute;top:19px;left:46px;">=</span>' +
                '<div id="mf3" style="opacity:0;position:absolute;top:11px;left:62px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom3" style="text-align:center;height:16px;">6</div>' +
                    '<div id="mfline3" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom3" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="divis2" style="opacity:0;position:absolute;top:19px;left:84px;font-weight:bold;">:</span>' +
                '<div id="mf4" style="opacity:0;position:absolute;top:11px;left:96px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom4" style="text-align:center;height:16px;">1</div>' +
                    '<div id="mfline4" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom4" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="eqq2" style="opacity:0;position:absolute;top:19px;left:120px;">=</span>' +
                '<span id="result1" style="opacity:0;position:absolute;top:20px;left:134px;">6</span>'
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
            html:'<span id="num2" style="opacity:0;position:absolute;top:20px;left:30px;">4</span>' +
                '<span id="divis3" style="opacity:0;position:absolute;top:19px;left:20px;font-weight:bold;">:</span>' +
                '<div id="mf6" style="opacity:0;position:absolute;top:11px;left:0px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom6" style="text-align:center;height:16px;">2</div>' +
                    '<div id="mfline6" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom6" style="text-align:center;height:16px;">3</div>' +
                '</div>' +
                '<span id="eqq3" style="opacity:0;position:absolute;top:19px;left:46px;">=</span>' +
                '<div id="mf7" style="opacity:0;position:absolute;top:11px;left:62px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom7" style="text-align:center;height:16px;">4</div>' +
                    '<div id="mfline7" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom7" style="text-align:center;height:16px;">6</div>' +
                '</div>' +
                '<span id="divis4" style="opacity:0;position:absolute;top:19px;left:82px;font-weight:bold;">:</span>' +
                '<span id="num3" style="opacity:0;position:absolute;top:20px;left:92px;">4</span>'+
                '</div>' +
                '<span id="eqq4" style="opacity:0;position:absolute;top:19px;left:106px;">=</span>' +
                '<div id="mf8" style="opacity:0;position:absolute;top:11px;left:122px;width:16px;height:33px;padding:0;margin:0;">' +
                    '<div id="mfnom8" style="text-align:center;height:16px;">1</div>' +
                    '<div id="mfline8" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="mfdenom8" style="text-align:center;height:16px;">6</div>' +
                '</div>'
        });

        firstShape.animate({
           style:{
               opacity:1
           },
            duration:1000,
            delay:firstShapeStart,
            animationType:'easeInOutQuad'
        });

        $(firstText).delay(firstTextStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#num1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#divis1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#mf2').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqq1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#mf3').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#divis2').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#mf4').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqq2').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');

        $('#result1').delay(firstSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');

        firstShape.animate({
            style:{
                opacity:0
            },
            duration:1000,
            delay:firstSolutionStart+4000,
            animationType:'easeInOutQuad'
        });

        firstShape2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstSolutionStart+4000,
            animationType:'easeInOutQuad'
        });

        secondShape.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondShapeStart,
            animationType:'easeInOutQuad'
        });

        $(secondText).delay(secondTextStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#num2').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#divis3').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#mf6').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqq3').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#mf7').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#divis4').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#num3').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqq4').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');

        $('#mf8').delay(secondSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');

        myLine.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+2000,
            animationType:'easeInOutQuad'
        });

        fillPath.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+4000,
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
        Main.setObjective('Yanda verilen bölme işlemini birinci kesri aynen yazıp, ikinci kesri ters çevirip çarparak yapabilirsiniz. Kontrol etmeyi unutmayınız.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'30px',
            right:'150px',
            width:'370px',
            height:'26px',
            textAlign:'center'
            //    border:'1px solid'
        });
        Interaction.appendButton({
            bottom:'30px',
            right:'30px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'-9px',
            left:'202px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'35px',
            left:'202px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle,
            html:'<div id="firstFracDiv" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div>' +
                '<span id="intPlus" style="position:absolute;top:17px;left:76px;font-weight:bold;">:</span>' +
                '</div><div id="secondFracDiv" style="position:absolute;top:0px;left:96px;width:65px;height:60px;"></div>' +
                '<span id="intEq" style="position:absolute;top:18px;left:170px;">=</span>' +
                '<div id="answerLine" style="position:absolute;top:29px;left:200px;width:48px;height:1px;border-top:2px solid;padding:0"></div>'
        });

        $(Interaction.inputs[0]).attr("max-length",3);
        $(Interaction.inputs[1]).attr("max-length",3);

        $(Interaction.questionDiv).append(Interaction.inputs[0]);
        $(Interaction.questionDiv).append(Interaction.inputs[1]);

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){

        if(Interaction.answerDiv){
            $(Interaction.answerDiv).remove();
        }

        $('#firstFracDiv').html('');
        $('#secondFracDiv').html('');

        $(Interaction.inputs[0]).css("color","black");
        $(Interaction.inputs[1]).css("color","black");

        var nom1, nom2, denom1, denom2;

        denom1 = Util.randomInteger(2,7);
        denom2 = Util.randomInteger(2,7,[denom1]);

        do{
            nom1 = Util.randomInteger(1,10);
        } while(nom1 == denom1 || nom1 % denom1 == 0);
        do{
            nom2 = Util.randomInteger(1,10);
        } while(nom2 == denom2 || nom2 % denom2 == 0);

        console.log("nom1: ",nom1);
        console.log("denom1: ",denom1);
        console.log("nom2: ",nom2);
        console.log("denom2: ",denom2);

        Interaction.firstFrac = new RationalNumber({factor:1,nominator:nom1,denominator:denom1});
        Interaction.secondFrac = new RationalNumber({factor:1,nominator:nom2,denominator:denom2});

        Interaction.answer = Interaction.firstFrac.division(Interaction.secondFrac);
        Interaction.answer.convertToCompoundForm();


        Interaction.firstH = Interaction.firstFrac.toHTML(24);
        $(Interaction.firstH).css("right","0px");
        Interaction.secondH = Interaction.secondFrac.toHTML(24);
        $(Interaction.secondH).css("left","0px");

        if(Interaction.secondFrac.integer){
            $('#intEq').css("left","170px");
            $('#answerLine').css("left","196px");
            $(Interaction.inputs[0]).css("left","198px");
            $(Interaction.inputs[1]).css("left","198px");
            $(Interaction.questionDiv).css("left","140px");
        }
        else{
            $('#intEq').css("left","140px");
            $('#answerLine').css("left","164px");
            $(Interaction.inputs[0]).css("left","166px");
            $(Interaction.inputs[1]).css("left","166px");
            $(Interaction.questionDiv).css("left","150px")
        }

        $('#firstFracDiv').append(Interaction.firstH);
        $('#secondFracDiv').append(Interaction.secondH);
    },
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        if(value[0] != 0 && value[1] != 0){
            if(value[0]*Interaction.answer.denominator == value[1]*Interaction.answer.nominator){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!", false);
        $(Interaction.inputs[0]).css("color","red");
        $(Interaction.inputs[1]).css("color","red");

        Interaction.showAnswer();

    },
    showAnswer : function(){
        Interaction.answerDiv = Util.dom({parent:Interaction.container, tag:'div', css:answerDivStyle,
            html:'<div id="sf11" style="color:black;position:absolute;top:20px;left:-52px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint11" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom11" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline11" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom11" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="t11" style="color:black;position:absolute;top:32px;left:-8px;font-weight:bold;">:</span>' +
                '<div id="sf22" style="color:black;position:absolute;top:20px;left:-16px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint22" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom22" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline22" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom22" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="ee11" style="position:absolute;top:33px;left:30px;">=</span>' +
                '<div id="sf1" style="position:absolute;top:20px;left:20px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint1" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline1" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="t1" style="position:absolute;top:32px;left:70px;">•</span>' +
                '<div id="sf2" style="position:absolute;top:20px;left:72px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint2" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom2" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline2" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom2" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="ee1" style="position:absolute;top:33px;left:118px;">=</span>' +
                '<div id="sf3" style="position:absolute;top:20px;left:134px;width:60px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="snom3" style="text-align:center;width:60px;height:20px;float:left;"></div>' +
                '<div id="sline3" style="height:1px;width:60px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom3" style="text-align:center;width:60px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="ee2" style="position:absolute;top:33px;left:200px;">=</span>' +
                '<div id="ff" style="position:absolute;top:20px;left:216px;width:30px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="fnom" style="text-align:center;width:30px;height:20px;float:left;"></div>' +
                '<div id="fline" style="height:1px;width:30px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="fdenom" style="text-align:center;width:30px;height:20px;float:left;"></div>' +
                '</div>'
        });

        if(Interaction.secondFrac.integer){
            $('#sf1').css("left","20px");
            $('#fact1').css("left","38px");
            $('#t1').css("left","66px");
        }
        else{
            $('#sf1').css("left","30px");
            $('#fact1').css("left","48px");
            $('#t1').css("left","78px");
        }

        var snomStr = "";

        snomStr += ""+Interaction.firstFrac.nominator+" • ";
        snomStr += ""+Interaction.secondFrac.denominator;

        $('#snom11').html(Interaction.firstFrac.nominator);
        $('#snom22').html(Interaction.secondFrac.nominator);

        $('#sdenom11').html(Interaction.firstFrac.denominator);
        $('#sdenom22').html(Interaction.secondFrac.denominator);

        $('#snom1').html(Interaction.firstFrac.nominator);
        $('#snom2').html(Interaction.secondFrac.denominator);

        $('#sdenom1').html(Interaction.firstFrac.denominator);
        $('#sdenom2').html(Interaction.secondFrac.nominator);

        $('#snom3').html(snomStr);
        $('#sdenom3').html(Interaction.answer.denominator);

        $('#fnom').html(Interaction.answer.nominator);
        $('#fdenom').html(Interaction.answer.denominator);
    }
}
;





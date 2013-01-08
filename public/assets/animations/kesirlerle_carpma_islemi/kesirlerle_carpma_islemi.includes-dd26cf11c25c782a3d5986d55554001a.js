function __Styles(){
	firstTextCss = {
        position:'absolute',
        top:'40px',
        left:'190px',
        height:'60px',
        width:'230px',
        fontSize:'16px',
        opacity:0
    };

    firstSolutionCss = {
        position:'absolute',
        top:'110px',
        left:'190px',
        height:'50px',
        width:'220px',
        fontSize:'16px'
    };

    secondTextCss = {
        position:'absolute',
        top:'40px',
        left:'480px',
        height:'30px',
        width:'200px',
        fontSize:'16px',
        opacity:0
    };

    secondSolutionCss = {
        position:'absolute',
        top:'130px',
        left:'480px',
        height:'50px',
        width:'220px',
        fontSize:'16px'
    };

    circFillColor = "#e99e9e";

    rectFillColor = "#e99e9e";
    rectFillColor2 = "#9c4f4f";

    interactionRectStrokeColor = "#41818a";
    interactionRectFillColor = "#a8dbe3";

    firstFracStyle = {
        position:'absolute',
        top:'120px',
        left:'40px',
        width:'100px',
        height:'60px',
//        border:'1px solid',
        fontSize:'20px'
    };

    secondFracStyle = {
        position:'absolute',
        top:'40px',
        left:'160px',
        width:'100px',
        height:'60px',
//        border:'1px solid',
        fontSize:'20px'
    };

    answerDivStyle = {
        position:'absolute',
        top:'150px',
        left:'135px',
        width:'400px',
        height:'80px',
        fontSize:'18px',
        //    border:'1px solid',
        color:'#069'
    };

    questionDivStyle = {
        position:'absolute',
        top:'40px',
        left:'120px',
        width:'300px',
        height:'60px',
        fontSize:'24px'
    };
}
;
var Animation = {
    images:[
        {
            id:'shadow',
            src:'/assets/animations/olasilik/top_golge.png'
        }
    ],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var ballsStart = animStart+1000;
        var firstTextStart = ballsStart+2000;
        var firstSolutionStart = firstTextStart+3000;
        var rectStart = firstSolutionStart+9000;
        var secondTextStart = rectStart+2000;
        var secondSolutionStart = secondTextStart+3000;

        var firstText = Util.dom({parent:Animation.container, tag:'div', css:firstTextCss,
            html:'<span id="a1" style="position:absolute;top:0px;left:0px;">Satıcı 12 topun</span>' +
                '<div id="f1" style="position:absolute;top:-6px;left:110px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n1" style="text-align:center;height:16px;">3</div>' +
                    '<div id="l1" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d1" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="a2" style="position:absolute;top:0px;left:132px;">\'ünü satmıştır.</span>' +
                '<span id="a3" style="position:absolute;top:26px;left:0px;line-height:18px;">Satıcı kaç top satmıştır?</span>'
        });

        var firstSolution = Util.dom({parent:Animation.container, tag:'div', css:firstSolutionCss,
            html:'<span id="num1" style="opacity:0;position:absolute;top:20px;left:0px;">12</span>' +
                '<span id="cross1" style="opacity:0;position:absolute;top:20px;left:20px;">•</span>' +
                '<div id="f2" style="opacity:0;position:absolute;top:11px;left:30px;width:18px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n2" style="text-align:center;height:16px;">3</div>' +
                    '<div id="l2" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d2" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq1" style="opacity:0;position:absolute;top:19px;left:54px;">=</span>' +
                '<div id="f3" style="opacity:0;position:absolute;top:11px;left:68px;width:46px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n3" style="text-align:center;height:16px;">12 • 3</div>' +
                    '<div id="l3" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d3" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq2" style="opacity:0;position:absolute;top:19px;left:120px;">=</span>' +
                '<div id="f4" style="opacity:0;position:absolute;top:11px;left:136px;width:18px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n4" style="text-align:center;height:16px;">36</div>' +
                    '<div id="l4" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d4" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq3" style="opacity:0;position:absolute;top:19px;left:160px;">=</span>' +
                '<span id="result1" style="opacity:0;position:absolute;top:20px;left:174px;">9</span>'
        });

        var ballsGroup = new Group();
        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 3; j++){
                var a = new Group();
                var circ = new Path.Circle(new Point(30+j*40,30+i*40),15);
                circ.fillColor = circFillColor;
                var shadow = new Raster('shadow');
                shadow.position = new Point(30+j*40, 30+i*40);
                shadow.size = new Size(30,30);
                a.addChild(circ);
                a.addChild(shadow);
                ballsGroup.addChild(a);
            }
        }

        ballsGroup.opacity = 0;

        var dashedRect = new Path.Rectangle(new Point(8.5,8.5), new Size(124,122));
        dashedRect.strokeColor = "#069";
        dashedRect.dashArray = [8,7];

        dashedRect.opacity = 0;

        var rect = new Path.SegmentedRectangle(460.5, 60.5, 200, 40, 2, 1, 1, rectFillColor);
        rect.opacity = 0;

        var lineGroup = new Group();
        for(var i = 0; i < 3; i++){
            var b = new Path.Line(new Point(485.5+25*i,60.5), new Point(485.5+25*i,100.5));
            b.strokeColor = "black";
            lineGroup.addChild(b);
        }

        lineGroup.opacity = 0;

        var lineGroup2 = new Group();
        for(var j = 0; j < 3; j++){
            var c = new Path.Line(new Point(585.5+25*j,60.5), new Point(585.5+25*j,100.5));
            c.strokeColor = "black";
            c.dashArray = [3,2];
            lineGroup2.addChild(c);
        }

        lineGroup2.opacity = 0;

        var rect2 = new Path.SegmentedRectangle(460.5,60.5, 25, 40, 1, 1, 1, rectFillColor2);

        rect2.opacity = 0;

        var secondText = Util.dom({parent:Animation.container, tag:'div', css:secondTextCss,
            html:'<div id="f5" style="position:absolute;top:-6px;left:0px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n5" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l5" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d5" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="p1" style="position:absolute;top:0px;left:26px;">\'in</span>' +
                '<div id="f6" style="position:absolute;top:-6px;left:50px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n6" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l6" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d6" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="p2" style="position:absolute;top:0px;left:72px;">\'i kaçtır?</span>'
        });

        var secondSolution = Util.dom({parent:Animation.container, tag:'div', css:secondSolutionCss,
            html:'<div id="f7" style="opacity:0;position:absolute;top:0px;left:0px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n7" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l7" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d7" style="text-align:center;height:16px;">2</div>' +
                '</div>' +
                '<span id="cross2" style="opacity:0;position:absolute;top:9px;left:20px;">•</span>' +
                '<div id="f8" style="opacity:0;position:absolute;top:0px;left:30px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n8" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l8" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d8" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<span id="eq4" style="opacity:0;position:absolute;top:8px;left:52px;">=</span>' +
                '<div id="f9" style="opacity:0;position:absolute;top:0px;left:68px;width:38px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n9" style="text-align:center;height:16px;">1 • 1</div>' +
                    '<div id="l9" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d9" style="text-align:center;height:16px;">8</div>' +
                '</div>' +
                '<span id="eq5" style="opacity:0;position:absolute;top:8px;left:112px;">=</span>' +
                '<div id="f10" style="opacity:0;position:absolute;top:0px;left:126px;width:16px;height:33px;padding:0;margin:0;line-height:16px;">' +
                    '<div id="n10" style="text-align:center;height:16px;">1</div>' +
                    '<div id="l10" style="height:1px;border-top:1px solid;padding:0;"></div>' +
                    '<div id="d10" style="text-align:center;height:16px;">8</div>' +
                '</div>'
        });

        ballsGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:ballsStart,
            animationType:'easeInOutQuad'
        });

        $(firstText).delay(firstTextStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#num1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#cross1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#f2').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq1').delay(firstSolutionStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#f3').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq2').delay(firstSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');

        $('#f4').delay(firstSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq3').delay(firstSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');

        $('#result1').delay(firstSolutionStart+6000).animate({opacity:1},1000,'easeInOutQuad');

        dashedRect.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstSolutionStart+6000,
            animationType:'easeInOutQuad'
        });

        rect.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:rectStart,
            animationType:'easeInOutQuad'
        });

        $(secondText).delay(secondTextStart).animate({opacity:1},1000,'easeInOutQuad');

        lineGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+2000,
            animationType:'easeInOutQuad'
        });

        $('#f7').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#cross2').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#f8').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq4').delay(secondSolutionStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#f9').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq5').delay(secondSolutionStart+2000).animate({opacity:1},1000,'easeInOutQuad');

        $('#f10').delay(secondSolutionStart+4000).animate({opacity:1},1000,'easeInOutQuad');

        rect2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+4000,
            animationType:'easeInOutQuad'
        });

        lineGroup2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondSolutionStart+6000,
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
        Main.setObjective('Yanda verilen çarpma işleminin sonucunu bulunuz ve kontrol ediniz.');
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
                '<span id="intPlus" style="position:absolute;top:17px;left:76px;font-weight:bold;">•</span>' +
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

        var digit1 = Util.randomInteger(0,5);
        var digit2 = Util.randomInteger(0,5);
        var nom1, nom2, denom1, denom2,factor1,factor2;

        if(digit1 == 0){
            factor1 = Util.randomInteger(1,4);
        }
        if(digit2 == 0){
            factor2 = Util.randomInteger(1,4);
        }

        denom1 = Util.randomInteger(2,7);
        do{
            denom2 = Util.randomInteger(2,7,[denom1]);
        } while(Util.gcd(denom1,denom2) != 1);

        do{
            nom1 = Util.randomInteger(1,10);
        } while(nom1 == denom1 || nom1 % denom1 == 0);
        do{
            nom2 = Util.randomInteger(1,10);
        } while(nom2 == denom2 || nom2 % denom2 == 0);

        if(digit1 == 0 && digit2 == 0){
            Interaction.firstFrac = new RationalNumber({factor:1,integer:factor1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,integer:factor2,nominator:nom2,denominator:denom2});
        }
        else if(digit1 == 0 && digit2 != 0){
            Interaction.firstFrac = new RationalNumber({factor:1,integer:factor1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,nominator:nom2,denominator:denom2});
        }
        else if(digit1 != 0 && digit2 == 0){
            Interaction.firstFrac = new RationalNumber({factor:1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,integer:factor2,nominator:nom2,denominator:denom2});
        }
        else{
            Interaction.firstFrac = new RationalNumber({factor:1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,nominator:nom2,denominator:denom2});
        }

        Interaction.answer = Interaction.firstFrac.multiplication(Interaction.secondFrac);
        Interaction.answer.convertToCompoundForm();

        Interaction.firstH = Interaction.firstFrac.toHTML(20);
        $(Interaction.firstH).css("right","0px");
        Interaction.secondH = Interaction.secondFrac.toHTML(20);
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
            html:'<div id="sf1" style="color:black;position:absolute;top:20px;left:20px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint1" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline1" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="t1" style="color:black;position:absolute;top:32px;left:66px;">•</span>' +
                '<div id="sf2" style="color:black;position:absolute;top:20px;left:72px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
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
                '</div>' +
                '<span id="ee3" style="position:absolute;top:33px;left:256px;"></span>' +
                '<div id="ff2" style="position:absolute;top:20px;left:272px;width:30px:height:42px;paddong:0;margin:0;line-height:20px;">' +
                    '<div id="f2nom" style="text-align:center;width:30px;"></div>' +
                    '<div id="f2line" style="height:1px;width:30px;border-top:2px solid;padding:0;"></div>' +
                    '<div id="f2denom" style="text-align:center;width:30px;"></div>' +
                '</div> ' +
                '<span id="ff3" style="position:absolute;top:32px;left:272px;"></span>'
        });

        if(Interaction.secondFrac.integer){
            $('#sf1').css("left","20px");
            $('#fact1').css("left","38px");
            $('#t1').css("left","66px");
        }
        else{
            $('#sf1').css("left","30px");
            $('#fact1').css("left","48px");
            $('#t1').css("left","76px");
        }

        var snomStr = "";
        if(Interaction.firstFrac.integer){
            $('#sint1').html(Interaction.firstFrac.integer);
            var intp = Interaction.firstFrac.integer*Interaction.firstFrac.denominator;
            intp += Interaction.firstFrac.nominator;
            snomStr += intp+" • ";
        }
        else{
            snomStr += ""+Interaction.firstFrac.nominator+" • "
        }
        if(Interaction.secondFrac.integer){
            $('#sint2').html(Interaction.secondFrac.integer);
            var intp2 = Interaction.secondFrac.integer*Interaction.secondFrac.denominator;
            intp2 += Interaction.secondFrac.nominator;
            snomStr += intp2
        }
        else{
            snomStr += ""+Interaction.secondFrac.nominator;

        }
        $('#snom1').html(Interaction.firstFrac.nominator);
        $('#snom2').html(Interaction.secondFrac.nominator);

        $('#sdenom1').html(Interaction.firstFrac.denominator);
        $('#sdenom2').html(Interaction.secondFrac.denominator);

        $('#snom3').html(snomStr);
        $('#sdenom3').html(Interaction.answer.denominator);

        $('#fnom').html(Interaction.answer.nominator);
        $('#fdenom').html(Interaction.answer.denominator);

        if(Util.gcd(Interaction.answer.denominator,Interaction.answer.nominator) != 1){
            if(Interaction.answer.nominator % Interaction.answer.denominator == 0){
                $('#ff3').html(Interaction.answer.nominator/Interaction.answer.denominator);
                $('#f2line').css("border-top","none");
            }
            else{
                Interaction.answer.simplification();
                $('#f2nom').html(Interaction.answer.nominator);
                $('#f2denom').html(Interaction.answer.denominator);
            }
            $('#ee3').html('=');
            $(Interaction.answerDiv).css("left","110px");
        }
        else{
            $('#f2line').css("border-top","none");
        }
    }
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






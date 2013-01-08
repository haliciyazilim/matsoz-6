function __Styles(){

    firstDivStyle = {
        position:'absolute',
        top:'30px',
        left:'30px',
        width:'340px',
        height:'70px'
    };

    secondDivStyle = {
        position:'absolute',
        top:'120px',
        left:'30px',
        width:'340px',
        height:'70px'
    };

    thirdDivStyle = {
        position:'absolute',
        top:'75px',
        left:'400px',
        width:'360px',
        height:'70px'
    };

    questionDivStyle = {
        position:'absolute',
        top:'60px',
        left:'120px',
        width:'340px',
        height:'100px',
    //    border:'1px solid',
        fontSize:'24px'
    };

};
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var firstDivStart = 1000;
        var secondDivStart = firstDivStart+6250;
        var thirdDivStart = secondDivStart+6250;

        Animation.firstDiv = Util.dom({parent:Animation.container, tag:'div', css:firstDivStyle,
        html:'<span id="eq1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:46px;"> = </span>' +
            '<div id="frac2" style="opacity:0;position:absolute;top:8px;left:66px;padding:0;margin:0;width:60px;height:51px;font-size:20px;line-height:24px;">' +
                '<div id="nom2" style="text-align:center;height:25px;">3 x 5</div>' +
                '<div id="line2" style="height:1px;padding:0;border-top:2px solid;"></div>' +
                '<div id="denom2" style="text-align:center;height:25px;">20 x 5</div>' +
            '</div>' +
            '<span id="eq2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:134px;"> = </span>' +
            '<span id="eq3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:196px;"> = </span>' +
            '<span id="a1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:216px;"> 0,15</span>' +
            '<span id="eq4" style="opacity:0;position:absolute;font-size:20px;top:24px;left:262px;"> = </span>' +
            '<span id="b1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:280px;color:red;"> %15</span>'
        });

        Animation.secondDiv = Util.dom({parent:Animation.container, tag:'div', css:secondDivStyle,
        html:'<span id="eq5" style="opacity:0;position:absolute;font-size:20px;top:24px;left:46px;"> = </span>' +
            '<div id="frac3" style="opacity:0;position:absolute;top:8px;left:66px;padding:0;margin:0;width:60px;height:51px;font-size:20px;line-height:24px;">' +
                '<div id="nom3" style="text-align:center;height:25px;">25 x 5</div>' +
                '<div id="line3" style="height:1px;padding:0;border-top:2px solid;"></div>' +
                '<div id="denom3" style="text-align:center;height:25px;">20 x 5</div>' +
            '</div>' +
            '<span id="eq6" style="opacity:0;position:absolute;font-size:20px;top:24px;left:134px;"> = </span>' +
            '<span id="eq7" style="opacity:0;position:absolute;font-size:20px;top:24px;left:198px;"> = </span>' +
            '<span id="a2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:218px;"> 1,25</span>' +
            '<span id="eq8" style="opacity:0;position:absolute;font-size:20px;top:24px;left:264px;"> = </span>' +
            '<span id="b2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:282px;color:red;"> %125</span>'
        });

        Animation.thirdDiv = Util.dom({parent:Animation.container, tag:'div', css:thirdDivStyle,
        html:'<span id="eq9" style="opacity:0;position:absolute;font-size:20px;top:24px;left:52px;"> = </span>' +
            '<div id="frac4" style="opacity:0;position:absolute;top:8px;left:70px;padding:0;margin:0;width:66px;height:51px;font-size:20px;line-height:24px;">' +
                '<div id="nom4" style="text-align:center;height:25px;">2 : 5</div>' +
                '<div id="line4" style="height:1px;padding:0;border-top:2px solid;"></div>' +
                '<div id="denom4" style="text-align:center;height:25px;">500 : 5</div>' +
            '</div>' +
            '<span id="eq10" style="opacity:0;position:absolute;font-size:20px;top:24px;left:142px;"> = </span>' +
            '<span id="eq11" style="opacity:0;position:absolute;font-size:20px;top:24px;left:202px;"> = </span>' +
            '<span id="a3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:222px;"> 0,004</span>' +
            '<span id="eq12" style="opacity:0;position:absolute;font-size:20px;top:24px;left:276px;"> = </span>' +
            '<span id="b3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:294px;color:red;"> %0,4</span>'
        });

        var firstNum = new RationalNumber({factor:1,nominator:3,denominator:20});
        var firstNode = firstNum.toHTML(20);
        $(Animation.firstDiv).append(firstNode);
        $(firstNode).css({
            position:'absolute',
            top:'9px',
            left:'10px',
            opacity:0
        });

        var secondNum = new RationalNumber({factor:1,nominator:15,denominator:100});
        var secondNode = secondNum.toHTML(20);
        $(Animation.firstDiv).append(secondNode);
        $(secondNode).css({
            position:'absolute',
            width:'64px',
            top:'9px',
            left:'152px',
            opacity:0
        });
        $('.nom',secondNode).css({
            width:'34px'
        });
        $('.denom',secondNode).css({
            width:'34px'
        });
        $('.line',secondNode).css({
            width:'34px'
        });

        var thirdNum = new RationalNumber({factor:1,nominator:25,denominator:20});
        var thirdNode = thirdNum.toHTML(20);
        $(Animation.secondDiv).append(thirdNode);
        $(thirdNode).css({
            position:'absolute',
            top:'9px',
            left:'10px',
            opacity:0
        });

        var fourthNum = new RationalNumber({factor:1,nominator:125,denominator:100});
        var fourthNode = fourthNum.toHTML(20);
        $(Animation.secondDiv).append(fourthNode);
        $(fourthNode).css({
            position:'absolute',
            width:'66px',
            top:'9px',
            left:'152px',
            opacity:0
        });
        $('.nom',fourthNode).css({
            width:'36px'
        });
        $('.denom',fourthNode).css({
            width:'36px'
        });
        $('.line',fourthNode).css({
            width:'36px'
        });

        var fifthNum = new RationalNumber({factor:1,nominator:2,denominator:500});
        var fifthNode = fifthNum.toHTML(20);
        $(Animation.thirdDiv).append(fifthNode);
        $(fifthNode).css({
            position:'absolute',
            width:'66px',
            top:'9px',
            left:'10px',
            opacity:0
        });
        $('.nom',fifthNode).css({
            width:'36px'
        });
        $('.denom',fifthNode).css({
            width:'36px'
        });
        $('.line',fifthNode).css({
            width:'36px'
        });

        var sixthNum = new RationalNumber({factor:1,nominator:"0,4",denominator:100});
        var sixthNode = sixthNum.toHTML(20);
        $(Animation.thirdDiv).append(sixthNode);
        $(sixthNode).css({
            position:'absolute',
            width:'66px',
            top:'9px',
            left:'158px',
            opacity:0
        });
        $('.nom',sixthNode).css({
            width:'36px'
        });
        $('.denom',sixthNode).css({
            width:'36px'
        });
        $('.line',sixthNode).css({
            width:'36px'
        });

        $(firstNode).delay(firstDivStart).animate({opacity:1},500,'easeInOutQuad');
        $('#eq1').delay(firstDivStart+1250).animate({opacity:1},500,'easeInOutQuad');
        $('#frac2').delay(firstDivStart+1250).animate({opacity:1},500,'easeInOutQuad');
        $('#eq2').delay(firstDivStart+2500).animate({opacity:1},500,'easeInOutQuad');
        $(secondNode).delay(firstDivStart+2500).animate({opacity:1},500,'easeInOutQuad');
        $('#eq3').delay(firstDivStart+3750).animate({opacity:1},500,'easeInOutQuad');
        $('#a1').delay(firstDivStart+3750).animate({opacity:1},500,'easeInOutQuad');
        $('#eq4').delay(firstDivStart+5000).animate({opacity:1},500,'easeInOutQuad');
        $('#b1').delay(firstDivStart+5000).animate({opacity:1},500,'easeInOutQuad');

        $(thirdNode).delay(secondDivStart).animate({opacity:1},500,'easeInOutQuad');
        $('#eq5').delay(secondDivStart+1250).animate({opacity:1},500,'easeInOutQuad');
        $('#frac3').delay(secondDivStart+1250).animate({opacity:1},500,'easeInOutQuad');
        $('#eq6').delay(secondDivStart+2500).animate({opacity:1},500,'easeInOutQuad');
        $(fourthNode).delay(secondDivStart+2500).animate({opacity:1},500,'easeInOutQuad');
        $('#eq7').delay(secondDivStart+3750).animate({opacity:1},500,'easeInOutQuad');
        $('#a2').delay(secondDivStart+3750).animate({opacity:1},500,'easeInOutQuad');
        $('#eq8').delay(secondDivStart+5000).animate({opacity:1},500,'easeInOutQuad');
        $('#b2').delay(secondDivStart+5000).animate({opacity:1},500,'easeInOutQuad');

        $(fifthNode).delay(thirdDivStart).animate({opacity:1},500,'easeInOutQuad');
        $('#eq9').delay(thirdDivStart+1250).animate({opacity:1},500,'easeInOutQuad');
        $('#frac4').delay(thirdDivStart+1250).animate({opacity:1},500,'easeInOutQuad');
        $('#eq10').delay(thirdDivStart+2500).animate({opacity:1},500,'easeInOutQuad');
        $(sixthNode).delay(thirdDivStart+2500).animate({opacity:1},500,'easeInOutQuad');
        $('#eq11').delay(thirdDivStart+3750).animate({opacity:1},500,'easeInOutQuad');
        $('#a3').delay(thirdDivStart+3750).animate({opacity:1},500,'easeInOutQuad');
        $('#eq12').delay(thirdDivStart+5000).animate({opacity:1},500,'easeInOutQuad');
        $('#b3').delay(thirdDivStart+5000).animate({opacity:1},500,'easeInOutQuad',function(){Main.animationFinished(1000);});

    }
};
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki eşitlikte boş kutuları doldurunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendButton({
            bottom:"30px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"40px",
            right:"200px"
        });

        Interaction.denomArr = [2,4,5,10,20,25,50];
        Interaction.denom2Arr = [200,400,500];
        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;
        Interaction.flushInputs();
        Interaction.myRandom = Util.randomInteger(0,3);
        if(Interaction.questionDiv){
            $(Interaction.questionDiv).remove();
        }

        var nom, denom, a;
        switch(randomNumber){
            case 0:     // simple
                denom = Interaction.denomArr[Util.randomInteger(0,7)];
                a = 100/denom;
                nom = Util.randomInteger(1,denom);
                Interaction.rationalNumber = new RationalNumber({factor:1,nominator:nom,denominator:denom});
                break;
            case 1:     // compound
                denom = Interaction.denomArr[Util.randomInteger(0,7)];
                a = 100/denom;
                nom = Util.randomInteger(denom+1,2*denom);
                Interaction.rationalNumber = new RationalNumber({factor:1,nominator:nom,denominator:denom});
                break;
            case 2:     // so-simple
                denom = Interaction.denom2Arr[Util.randomInteger(0,3)];
                a = 100/denom;
                b = denom/100;
                do{
                    nom = Util.randomInteger(2,4);
                }while(nom % b == 0)
                Interaction.rationalNumber = new RationalNumber({factor:1,nominator:nom,denominator:denom});
                break;
        }
        Interaction.nom = Interaction.rationalNumber.nominator;
        Interaction.denom = Interaction.rationalNumber.denominator;
        var c = (Interaction.nom * a) / 100;
        c = Math.floor(c*10000)/10000;

        var d = ""+c;
        var e = d.split(".");

        Interaction.d1 = e[0];
        Interaction.d2 = e[1];
        var t = Math.floor(c*10000)/100;
        var y = ""+t;
        var u = y.split(".");
       Interaction.pp = ""+u[0]+","+u[1];
        if(Interaction.randomNumber == 2){
            Interaction.e = Interaction.pp;
        }
        else{
            Interaction.e = t;
        }

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});

        var b;
        var p = Interaction.nom*a;
        p = Math.floor(p*10000)/10000;
        var g = p * 10;
        if(p % 10 == 0){
            b = 1;
        }
        else if(p % 1 == 0){
            b = 2;
        }
        else if(g % 1 == 0){
            b = 3;
        }
        else{
            b = 4;
        }

        var kk = ""+Interaction.d1+","+Interaction.d2;

        switch(Interaction.myRandom){
            case 0:
                Interaction.appendInput({
                    position:'absolute',
                    top:'24px',
                    left:'248px',
                    width:'68px',
                    height:'34px',
                    fontSize:'24px'
                });
                var myNode = Interaction.rationalNumber.toHTML(28);
                $(Interaction.questionDiv).append(myNode);
                $(myNode).css({
                    position:'absolute',
                    top:'7px',
                    left:'-22px'
                });
                $(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span>' +
                    '<span id="dec" style="position:absolute;top:28px;left:86px;text-align:center;width:100px;"></span>' +
                    '<span id="eqq2" style="position:absolute;top:29px;left:190px;"> = </span>' +
                    '<span id="decc" style="position:absolute;top:29px;left:214px;"> % </span>');
                $('#dec').html(kk);

                $(Interaction.input).attr("maxLength",4);
                $(Interaction.questionDiv).append(Interaction.input);
                break;
            case 1:
                Interaction.appendInput({
                    position:'absolute',
                    top:'24px',
                    left:'88px',
                    width:'30px',
                    height:'34px',
                    fontSize:'24px'
                });

                Interaction.appendInput({
                    position:'absolute',
                    top:'24px',
                    left:'130px',
                    width:'58px',
                    height:'34px',
                    fontSize:'24px'
                });

                var myNode = Interaction.rationalNumber.toHTML(28);
                $(Interaction.questionDiv).append(myNode);
                $(myNode).css({
                    position:'absolute',
                    top:'7px',
                    left:'-22px'
                });

                $(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span>' +
                    '<span id="eqq2" style="position:absolute;top:29px;left:196px;"> = </span>' +
                    '<span id="comma" style="position:absolute;top:29px;left:120px;">,</span>' +
                    '<span id="decc" style="position:absolute;top:29px;left:220px;"></span>');
                $('#decc').html(" %"+Interaction.e);

                $(Interaction.inputs[0]).attr("maxLength",1);
                $(Interaction.inputs[1]).attr("maxLength",4);

                $(Interaction.questionDiv).append(Interaction.inputs[0]);
                $(Interaction.questionDiv).append(Interaction.inputs[1]);
                break;
            case 2:
                Interaction.appendInput({
                    position:'absolute',
                    top:'-1px',
                    left:'-4px',
                    width:'56px',
                    height:'34px',
                    fontSize:'24px'
                });

                Interaction.appendInput({
                    position:'absolute',
                    top:'45px',
                    left:'-4px',
                    width:'56px',
                    height:'34px',
                    fontSize:'24px'
                });

                $(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span>' +
                    '<div id="lline" style="position:absolute;left:-6px;top:39px;width:62px;height:1px;padding:0;border-top:2px solid;"></div>' +
                    '<span id="eqq2" style="position:absolute;top:29px;left:190px;"> = </span>' +
                    '<span id="dec" style="position:absolute;top:28px;left:86px;text-align:center;width:100px;"></span>' +
                    '<span id="decc" style="position:absolute;top:29px;left:214px;"></span>');
                $('#dec').html(kk);
                $('#decc').html(" %"+Interaction.e);

                $(Interaction.inputs[0]).attr("maxLength",4);
                $(Interaction.inputs[1]).attr("maxLength",4);

                $(Interaction.questionDiv).append(Interaction.inputs[0]);
                $(Interaction.questionDiv).append(Interaction.inputs[1]);
                break;
        }
    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        if(Interaction.myRandom == 0){
            if(Interaction.randomNumber == 2){
                if(value == Interaction.pp || value == Interaction.pp+"0"){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return value == Interaction.e;
            }
        }
        else if(Interaction.myRandom == 1){
            var m = ""+Interaction.d2+"0";
            if(value[0] == Interaction.d1 && (value[1] == Interaction.d2 || value[1] == m)){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return ((value[0] * Interaction.denom) == (value[1] * Interaction.nom))
        }
    },
	onCorrectAnswer : function(){
		for(var i = 0; i < Interaction.inputs.length; i++){
            $(Interaction.inputs[i]).css("color","green");
        }
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir!',false);
        if(Interaction.myRandom == 0){
            Interaction.input.value = Interaction.e;
        }
        else if(Interaction.myRandom == 1){
            Interaction.inputs[0].value = Interaction.d1;
            Interaction.inputs[1].value = Interaction.d2;
        }
        else{
            Interaction.inputs[0].value = Interaction.nom;
            Interaction.inputs[1].value = Interaction.denom;
        }

        for(var i = 0; i < Interaction.inputs.length; i++){
            $(Interaction.inputs[i]).css("color","green");
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






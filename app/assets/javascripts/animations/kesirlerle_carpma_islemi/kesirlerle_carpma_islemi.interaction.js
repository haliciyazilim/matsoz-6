var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen dikdörtgenin alanını bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'20px',
            right:'150px',
            width:'370px',
            height:'26px',
            textAlign:'center'
            //    border:'1px solid'
        });
        Interaction.appendButton({
            bottom:'20px',
            right:'30px'
        });

        Interaction.questionRectangle = new Path.Rectangle(new Point(40,20), new Size(120,90));
        Interaction.questionRectangle.strokeColor = interactionRectStrokeColor;
        Interaction.questionRectangle.strokeWidth = 2;
        Interaction.questionRectangle.fillColor = interactionRectFillColor;

        var firstFrac = Util.dom({parent:Interaction.container, tag:'div', css:firstFracStyle,
            html:'<div id="fracc1" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div>' +
                '<span id="unit1" style="position:absolute;top:14px;left:72px;">cm</span>'
        });

        var secondFrac = Util.dom({parent:Interaction.container, tag:'div', css:secondFracStyle,
            html:'<div id="fracc2" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div>' +
                '<span id="unit2" style="position:absolute;top:14px;left:72px;">cm</span>'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'30px',
            left:'432px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'76px',
            left:'432px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        $(Interaction.container).append('<div id="ansLine" style="position:absolute;top:69px;left:430px;height:1px;width:48px;border-top:2px solid;padding:0;margin:0;"></div>' +
            '<span id="answerUn" style="position:absolute;top:60px;left:490px;font-size:20px;">cm²</span>');

        $(Interaction.inputs[0]).attr("max-length",3);
        $(Interaction.inputs[1]).attr("max-length",3);

        $(Interaction.container).append(Interaction.inputs[0]);
        $(Interaction.container).append(Interaction.inputs[1]);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        if(Interaction.answerDiv){
            $(Interaction.answerDiv).remove();
        }

        $('#fracc1').html('');
        $('#fracc2').html('');

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
        $(Interaction.secondH).css("right","0px");

        $('#fracc1').append(Interaction.firstH);
        $('#fracc2').append(Interaction.secondH);
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
    }
}
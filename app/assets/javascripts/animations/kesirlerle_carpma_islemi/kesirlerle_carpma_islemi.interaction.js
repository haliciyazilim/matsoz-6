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

        Interaction.questionRectangle = new Path.Rectangle(new Point(40,20), new Size(190,140));
        Interaction.questionRectangle.strokeColor = interactionRectStrokeColor;
        Interaction.questionRectangle.strokeWidth = 2;
        Interaction.questionRectangle.fillColor = interactionRectFillColor;

        var firstFrac = Util.dom({parent:Interaction.container, tag:'div', css:firstFracStyle,
            html:'<div id="fracc1" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div>' +
                '<span id="unit1" style="position:absolute;top:16px;left:70px;">cm</span>'
        });

        var secondFrac = Util.dom({parent:Interaction.container, tag:'div', css:secondFracStyle,
            html:'<div id="fracc2" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div>' +
                '<span id="unit2" style="position:absolute;top:16px;left:70px;">cm</span>'
        });



        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        var digit1 = Util.randomDigit(0,5);
        var digit2 = Util.randomDigit(0,5);
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

        Interaction.firstH = Interaction.firstFrac.toHTML(24);
        $(Interaction.firstH).css("right","0px");
        Interaction.secondH = Interaction.secondFrac.toHTML(24);
        $(Interaction.secondH).css("right","0px");

        $('#fracc1').append(Interaction.firstH);
        $('#fracc2').append(Interaction.secondH);
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
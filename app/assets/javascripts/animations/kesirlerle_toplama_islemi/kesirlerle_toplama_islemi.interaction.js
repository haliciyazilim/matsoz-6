var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen kesirlerin toplamlarını bulunuz ve kontrol ediniz.');
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
                '<span id="intPlus" style="position:absolute;top:18px;left:75px;">+</span>' +
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

        $('#firstFracDiv').html('');
        $('#secondFracDiv').html('');

        var digit1 = Util.randomDigit();
        var digit2 = Util.randomDigit();
        var nom1, nom2, denom1, denom2,factor1,factor2;

        if(digit1 && digit2){
            Interaction.firstFrac = new RationalNumber({factor:1,integer:factor1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,integer:factor2,nominator:nom2,denominator:denom2});
        }
        else if(digit1 && !digit2){
            Interaction.firstFrac = new RationalNumber({factor:1,integer:factor1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,nominator:nom2,denominator:denom2});
        }
//        else if(!digit1 && )


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

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
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
            top:'-8px',
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
            html:'<div id="firstFracDiv" style="position:absolute;top:0px;left:0px;width:50px;height:60px;"></div>' +
                '<span id="intPlus" style="position:absolute;top:20px;left:75px;">+</span>' +
                '</div><div id="secondFracDiv" style="position:absolute;top:0px;left:96px;width:50px;height:60px;"></div>' +
                '<span id="intEq" style="position:absolute;top:20px;left:170px;">=</span>' +
                '<div id="answerLine" style="position:absolute;top:30px;left:200px;width:48px;height:1px;border-top:1px solid;padding:0"></div>'
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

        Interaction.firstFrac = new RationalNumber({factor:1,nominator:1,denominator:3});
        Interaction.secondFrac = new RationalNumber({factor:1,nominator:1,denominator:2});

        Interaction.firstH = Interaction.firstFrac.toHTML(24);
        $(Interaction.firstH).css("border","1px solid");
        Interaction.secondH = Interaction.secondFrac.toHTML(24);
        $(Interaction.secondH).css("border","1px solid");

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
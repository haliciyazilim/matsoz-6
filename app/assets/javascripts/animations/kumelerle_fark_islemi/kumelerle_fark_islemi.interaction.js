var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen kümeler için fark kümesini yazınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
        });
        Interaction.appendStatus({
            bottom:'50px',
            right:'150px'
        });
        Interaction.set1Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set1Div).css({
            top:'100px'
        })
        Interaction.set2Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set2Div).css({
            top:'150px'
        })
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(){
        Interaction.flushInputs();
        $(Interaction.answerSetDiv).remove();
        Interaction.generateSets();
        Interaction.answerSetDiv = Util.dom({
            tag:'div',
            parent:Interaction.container,
            css:answerSetDivCss
        });
        $(Interaction.answerSetDiv).append('A \\ B = { ');
        var inputCount = Interaction.set1.getDifference(Interaction.set2).elements.length;
        var i=0;
        do{i++;
            var input = Interaction.appendInput({
                position:'relative',
                width:'2.5 ex',
                height:'30px'

            },true,inputCount==0);
            input.maxLength = 2;
            $(Interaction.answerSetDiv)
                .append(i>1?',':'')
                .append(input)
        }while(i<inputCount)
        $(Interaction.answerSetDiv).append(' }');

    },
    generateSets:function(){
        var set1String,set2String;
        Interaction.set1 = Set.randomGenerator();
        Interaction.set2 = Interaction.set1.getRandomIntersectingSet();
        var isSet1DefinitionString = Util.rand01() == 1;
        var isSet2DefinitionString = Util.rand01() == 1;
        if(Interaction.set1.isEqualSet(Interaction.set2))
            isSet1DefinitionString = ! isSet2DefinitionString;
        if(isSet1DefinitionString)
            set1String = Interaction.set1.getDefinitionString();
        else
            set1String = Interaction.set1.getElementsString();
        if(isSet2DefinitionString)
            set2String = Interaction.set2.getDefinitionString();
        else
            set2String = Interaction.set2.getElementsString();

        Interaction.set1Div.innerHTML = 'A = ' + set1String;
        Interaction.set2Div.innerHTML = 'B = ' + set2String;

    },
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(values){
        if(typeof values == "string"){
            values = [values];
        }
        var set = new Set({type:Set.ELEMENTS,elements:values});
        console.log(set);
        return set.isEqualSet(Interaction.set1.getDifference(Interaction.set2));

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
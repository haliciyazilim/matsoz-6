var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen kümelerin birbirine göre durumunu belirtiniz ve kontrol ediniz. Aynı anda birden fazla özellik olabilir.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });
        Interaction.appendStatus({
            bottom:'20px',
            right:'150px'
        });
        Interaction.set1Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set1Div).css({
            top:'10px'
        })
        Interaction.set2Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set2Div).css({
            top:'50px'
        })



        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(){
        Interaction.flushInputs();
        $(Interaction.answerSetDiv).remove();
        Interaction.generateSets();
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.answerSetDiv = Util.dom({
            tag:'div',
            parent:Interaction.container,
            css:answerSetDivCss
        });
        $(Interaction.answerSetDiv).append("A' = { ");
        var inputCount = Interaction.set1.getDifference(Interaction.set2).elements.length;
        var i=0;
        do{i++;
            var input = Interaction.appendInput({
                position:'relative',
                width:'2.5 ex',
                height:'30px'

            },false,inputCount==0);
            input.maxLength = 2;
            $(Interaction.answerSetDiv)
                .append(i>1?', ':'')
                .append(input)
        }while(i<inputCount)
        $(Interaction.answerSetDiv).append(' }');
    },
    generateSets:function(){
        var set1String,set2String;
        do
            Interaction.set1  = Set.randomGenerator();
        while(Interaction.set1.elements.length < 4 || Interaction.set1.elements.length > 10)
        do
            Interaction.set2  = Set.randomGenerator();
        while(Interaction.set1.elements.length <= Interaction.set2.elements.length || !Interaction.set2.isSubsetOf(Interaction.set1))
        var isSet1DefinitionString = Util.rand01() == 1;
        var isSet2DefinitionString = Util.rand01() == 1;
        if(isSet1DefinitionString)
            set1String = Interaction.set1.getDefinitionString();
        else
            set1String = Interaction.set1.getElementsString();
        if(isSet2DefinitionString)
            set2String = Interaction.set2.getDefinitionString();
        else
            set2String = Interaction.set2.getElementsString();
        Interaction.set1Div.innerHTML = 'E = ' + set1String;
        Interaction.set2Div.innerHTML = 'A = ' + set2String;



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
        Interaction.showCorrectAnswer();

    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış, doğru cevabı venn şemasında görebilirsiniz.',false);
        Interaction.showCorrectAnswer();
    },
    showCorrectAnswer:function(){
        Interaction.pause();
//        Interaction._set = Interaction.set1.getDifference(Interaction.set2);
//        Interaction._set.drawVennDiagram(Interaction.container,new Point(100,145),"A'");
//        setTimeout(Interaction.resume,2000);
        Interaction.answer = Set.animateComplementSets({
            container:Interaction.container,
            position:new Point(120,140),
            sets:[Interaction.set1, Interaction.set2],
            letters:['E', 'A'],
            callback:Interaction.resume
        })

    }
}
var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        {
            id:'radio_buttons',
            src:'/assets/radio_buttons.png'
        }
    ],
    init:function(container){
        Interaction.container = container;

        Main.setObjective('Yanda verilen kümelerin birbirine göre durumunu belirtiniz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        var referencePoint = new Point(100,100);
        Interaction.createOptions(referencePoint.add(250,-50));
        Interaction.appendStatus({
            bottom:'30px',
            right:'210px'
        })
        Interaction.appendButton({
            bottom:'20px',
            right:'100px'
        })
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
        Interaction.setRandomGenerator(4);
        Interaction.prepareNextQuestion();


    },
	nextQuestion: function(randomNumber){
        Interaction.trial++;
        Interaction.cleanOptions();
//        /*<[[TEST*/ randomNumber = 1 /*TEST]]>*/
        Interaction.generateSets(randomNumber);

    },
		
    cleanOptions:function(){
        Interaction.clickedOption = null;
        $(Interaction.options).each(function(){
            $(this).css(optionsStyle);

        })
        $('.image-container')
            .css({
                backgroundPosition:'0px 0px'
            })
    },
    createOptions:function(referencePoint){

        var equalSets       = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Eşit kümeler'});
        var subsetOfTheOther= Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Biri diğerinin alt kümesi'});
        var disjointSets    = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Ayrık kümeler'});
        var intersectingSets= Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Kesişen kümeler'});

        Interaction.options = [equalSets,subsetOfTheOther,disjointSets,intersectingSets];

        for(var i=0;i<Interaction.options.length;i++){
            $(Interaction.options[i]).css({
                top:referencePoint.y+50*i,
                left:referencePoint.x
            }).click(function(){
                Interaction.cleanOptions();
                    Interaction.clickedOption = this;
                $('.image-container',this)
                    .css({
                        backgroundPosition:'-32px 0px'
                    })
                $(Interaction.clickedOption).css(selectedOptionStyle);
            }).prepend('<div class="image-container"></div>');
            $('.image-container',Interaction.options[i])
                .css(optionsImageContainer)



        }


    },
    generateSets:function(randomNumber){
        var set1String,set2String;
        Interaction.set1  = Set.randomGenerator();
        switch(randomNumber){
            case 0:
                Interaction.set2 = Interaction.set1;
                set1String = Interaction.set1.getDefinitionString();
                set2String = Interaction.set2.getElementsString();
                break;
            case 1:
                Interaction.set2 = Interaction.set1.getRandomSubset();
                break;
            case 2:
                Interaction.set2 = Interaction.set1.getRandomDisjointSet();
                break;
            case 3:
                Interaction.set2 = Interaction.set1.getRandomIntersectingSet();
                break;
        }
        if(randomNumber != 0 ){
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
        }
        Interaction.set1Div.innerHTML = 'A = ' + set1String;
        Interaction.set2Div.innerHTML = 'B = ' + set2String;

    },
	preCheck : function(){
		if(Interaction.clickedOption == null){
            Interaction.setStatus("Lütfen bir şık seçiniz", "alert");
            return false;
        }
    },
	isAnswerCorrect : function(){
        if(Interaction.clickedOption == Interaction.options[0])
            return Interaction.set1.isEqualSet(Interaction.set2);
        if(Interaction.clickedOption == Interaction.options[1])
            return Interaction.set1.isSubsetOf(Interaction.set2) || Interaction.set2.isSubsetOf(Interaction.set1);
        if(Interaction.clickedOption == Interaction.options[2])
            return Interaction.set1.isDisjointWith(Interaction.set2);
        if(Interaction.clickedOption == Interaction.options[3])
            return Interaction.set1.isIntersectingWith(Interaction.set2);
    },
	onCorrectAnswer : function(){
        $(Interaction.clickedOption).css(trueOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-64px 0px'
        });
        var correctAnswers = [];
        if(Interaction.set1.isEqualSet(Interaction.set2))
            correctAnswers.push(0);
        if(Interaction.set1.isSubsetOf(Interaction.set2) || Interaction.set2.isSubsetOf(Interaction.set1))
            correctAnswers.push(1);
        if(Interaction.set1.isDisjointWith(Interaction.set2))
            correctAnswers.push(2);
        if(Interaction.set1.isIntersectingWith(Interaction.set2))
            correctAnswers.push(3);

        for(var i=0;i<correctAnswers.length;i++){
            $('.image-container',Interaction.options[correctAnswers[i]]).css({
                backgroundPosition:'-64px 0px'
            });
            $(Interaction.options[correctAnswers[i]]).css(trueOptionStyle);
        }
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){

        $(Interaction.clickedOption).css(falseOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-96px 0px'
        });
        var correctAnswers = [];
        if(Interaction.set1.isEqualSet(Interaction.set2))
            correctAnswers.push(0);
        if(Interaction.set1.isSubsetOf(Interaction.set2) || Interaction.set2.isSubsetOf(Interaction.set1))
            correctAnswers.push(1);
        if(Interaction.set1.isDisjointWith(Interaction.set2))
            correctAnswers.push(2);
        if(Interaction.set1.isIntersectingWith(Interaction.set2))
            correctAnswers.push(3);

        for(var i=0;i<correctAnswers.length;i++){
            $('.image-container',Interaction.options[correctAnswers[i]]).css({
                backgroundPosition:'-64px 0px'
            });
            $(Interaction.options[correctAnswers[i]]).css(trueOptionStyle);
        }

        if(correctAnswers.length > 1)
            Interaction.setStatus('Yanlış! Doğru cevaplar yeşil renk ile belirtilmiştir.',false);
        else
            Interaction.setStatus('Yanlış! Doğru cevap yeşil renk ile belirtilmiştir.',false);

    }
}
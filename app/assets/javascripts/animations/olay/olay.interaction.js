var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        {
            id:'radio_buttons',
            src:'/assets/radio_buttons.png'
        },
        {
            id:'dice',
            src:'/assets/animations/olay/olay_etki_01.jpg'
        },
        {
            id:'coin',
            src:'/assets/animations/olay/olay_etki_02.jpg'
        },
        {
            id:'wheel',
            src:'/assets/animations/olay/olay_etki_03.jpg'
        },
        {
            id:'wheel2',
            src:'/assets/animations/olay/olay_etki_03.jpg'
        },
        {
            id:'wheel3',
            src:'/assets/animations/olay/olay_etki_03.jpg'
        },
        {
            id:'pouch',
            src:'/assets/animations/olay/olay_etki_04.jpg'
        },
        {
            id:'pouch2',
            src:'/assets/animations/olay/olay_etki_04.jpg'
        },
        {
            id:'pouch3',
            src:'/assets/animations/olay/olay_etki_04.jpg'
        }

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki olayları tanımlayınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'15px',
            right:'250px',
            width:'300px',
            textAlign:'center'
        });

        Interaction.appendButton({
            bottom:'15px',
            right:'110px'
        });

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});

        Interaction.setRandomGenerator(8);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.cleanOptions();
        Interaction.myPause = 0;
        Interaction.randomNumber = randomNumber;
        Interaction.randomNumber2 = Util.randomInteger(1,4);
        var referencePoint = new Point(100,100);
        Interaction.createOptions(referencePoint.add(250,0));
         var qIndex;

        if(Interaction.pp){
            Interaction.pp.remove();
        }

        switch(Interaction.randomNumber){
            case 0:
                Interaction.questionType = Question.DICE;
                Interaction.pp = new Raster('dice');
                Interaction.pp.position = new Point(144,136);
                break;
            case 1:
                Interaction.questionType = Question.COIN;
                Interaction.pp = new Raster('coin');
                Interaction.pp.position = new Point(144,136);
                break;
            case 2:
                Interaction.questionType = Question.WHEEL;
                Interaction.pp = new Raster('wheel');
                Interaction.pp.position = new Point(144,136);
                break;
            case 3:
                Interaction.questionType = Question.WHEEL2;
                Interaction.pp = new Raster('wheel2');
                Interaction.pp.position = new Point(144,136);
                break;
            case 4:
                Interaction.questionType = Question.WHEEL3;
                Interaction.pp = new Raster('wheel3');
                Interaction.pp.position = new Point(144,136);
                break;
            case 5:
                Interaction.questionType = Question.POUCH;
                Interaction.pp = new Raster('pouch');
                Interaction.pp.position = new Point(144,136);
                break;
            case 6:
                Interaction.questionType = Question.POUCH2;
                Interaction.pp = new Raster('pouch2');
                Interaction.pp.position = new Point(144,136);
                break;
            case 7:
                Interaction.questionType = Question.POUCH3;
                Interaction.pp = new Raster('pouch3');
                Interaction.pp.position = new Point(144,136);
                break;
        }

        switch(Interaction.randomNumber2){
            case 0:
                qIndex = 0;
                Interaction.answer = Interaction.impossibleEvent;
                break;
            case 1:
                qIndex = 1;
                Interaction.answer = Interaction.certainEvent;
                break;
            case 2:
                qIndex = 2;
                Interaction.answer = Interaction.complementaryEvent;
                break;
            case 3:
                qIndex = 3;
                Interaction.answer = Interaction.notComplementaryEvent;
                break;
        }

        Interaction.question = new Question(Interaction.questionType, qIndex);
        $(Interaction.questionDiv).html(Interaction.question.question);

    },
	preCheck : function(){
        if(Interaction.clickedOption == null){
            Interaction.setStatus("Lütfen bir şık seçiniz!", "alert");
            return false;
        }
    },
	isAnswerCorrect : function(value){
        if(Interaction.clickedOption == Interaction.answer){
            return true;
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
        $(Interaction.clickedOption).css(trueOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-64px 0px'
        });
        Interaction.myPause = 1;
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yeşil renk ile gösterilmiştir.',false);

        $(Interaction.clickedOption).css(falseOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-96px 0px'
        });

        $('.image-container', Interaction.answer).css({
            backgroundPosition:'-64px 0px'
        });

        $(Interaction.answer).css(trueOptionStyle);
        Interaction.myPause = 1;
    },
    createOptions:function(referencePoint){
        if($(Interaction.certainEvent)){
            $(Interaction.certainEvent).remove();
            Interaction.certainEvent = null;
        }
        if($(Interaction.impossibleEvent)){
            $(Interaction.impossibleEvent).remove();
            Interaction.impossibleEvent = null;
        }
        if($(Interaction.complementaryEvent)){
            $(Interaction.complementaryEvent).remove();
            Interaction.complementaryEvent = null;
        }
        if($(Interaction.notComplementaryEvent)){
            $(Interaction.notComplementaryEvent).remove();
            Interaction.notComplementaryEvent = null;
        }
        if(Interaction.randomNumber2 < 2){
            Interaction.certainEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Kesin olay'});
            Interaction.impossibleEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'İmkânsız olay'});
            Interaction.options = [Interaction.certainEvent, Interaction.impossibleEvent];
        }
        else{
            Interaction.complementaryEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Tümleyen olay'});
            Interaction.notComplementaryEvent = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Tümleyen olay değil'});
            Interaction.options = [Interaction.complementaryEvent, Interaction.notComplementaryEvent];
        }
        for(var i=0;i<Interaction.options.length;i++){
            $(Interaction.options[i]).css({
                top:referencePoint.y+30+40*i,
                left:referencePoint.x-20
            }).click(function(){
                    if(!Interaction.myPause){
                        Interaction.cleanOptions();
                        Interaction.clickedOption = this;
                        $('.image-container',this)
                            .css({
                                backgroundPosition:'-32px 0px'
                            })
                        $(Interaction.clickedOption).css(selectedOptionStyle);
                    }
                }).prepend('<div class="image-container"></div>');
            $('.image-container',Interaction.options[i])
                .css(optionsImageContainer)
        }
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
}
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

        /*
        *	Initialize your interaction here
        */
        var referencePoint = new Point(100,100);
        Interaction.createOptions(referencePoint.add(200,-50));
        Interaction.appendStatus({
            bottom:'30px',
            right:'210px'
        })
        Interaction.appendButton({
            bottom:'20px',
            right:'100px'
        })

        Interaction.setRandomGenerator(4);
        Interaction.prepareNextQuestion();


		},
	nextQuestion: function(randomNumber){
            Interaction.answer = randomNumber;
            switch(randomNumber){
                case 0:
                    Interaction.set1 = Interaction.set2 = Set.randomGenerator();

                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }


            Interaction.set1


		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
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
                    Interaction.clickedOption = this;
                    $(Interaction.options).each(function(){
                        $(this).css(optionsStyle);

                    })
                    $('.image-container')
                        .css({
                            backgroundPosition:'0px 0px'
                        })
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
    generateSets:function(){

        },
	preCheck : function(){
		
		},
	isAnswerCorrect : function(){
		
		},
	onCorrectAnswer : function(){
            $(Interaction.clickedOption).css(trueOptionStyle);
            $('.image-container',Interaction.clickedOption).css({
                backgroundPosition:'-64px 0px'
            });
		},
	onWrongAnswer : function(){
            $(Interaction.clickedOption).css(falseOptionStyle);
            $('.image-container',Interaction.clickedOption).css({
                backgroundPosition:'-96px 0px'
            });
		
		},
	onFail : function(){
		
		}
}
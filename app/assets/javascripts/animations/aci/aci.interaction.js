var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki MNK açısının açıortayını çiziniz. Önce pergelin sivri ucunu açının köşesine yerleştirip bir yay çiziniz. Yayın açının kollarını kestiği noktalardan pergelin açıklığını bozmadan yaylar çiziniz ve kesiştikleri noktayı açının köşesi ile birleştiriniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

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
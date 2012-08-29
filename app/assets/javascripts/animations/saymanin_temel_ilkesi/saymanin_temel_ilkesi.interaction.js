var Interaction = {
    
	getFramework:function(){
		return 'paper';
	},

    init:function(container){
		Interaction.container = container;
		Main.setObjective('');
		Interaction.paper = {
			width:$(container).width(),
			height:$(container).height()
		}
			
		$(contaier).append("<div id='tisortCerceve'>");
            $("#tisortCerceve").append("<div id='tisort1'>");
            $("#tisortCerceve").append("<div id='tisort2'>");
            $("#tisortCerceve").append("<div id='tisort3'>");
            $("#tisortCerceve").append("<div id='tisort4'>");
        $(contaier).append("<div id='pantolonCerceve'>");
            $("#pantolonCerceve").append("<div id='pantolon1'>");
            $("#pantolonCerceve").append("<div id='pantolon2'>");
            $("#pantolonCerceve").append("<div id='pantolo3'>");
        $(contaier).append("<div id='ayakkabiCerceve'>");
            $("#ayakkabiCerceve").append("<div id='ayakkabi1'>");
            $("#ayakkabiCerceve").append("<div id='ayakkabi2'>");

        $("#tisortCerceve").css({
            position:"absolute",
            width:"200px",
            height:"50px",
            top:"50px",
            left:"50px",
            backgroundColor:"red"
        });

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
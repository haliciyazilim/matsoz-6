var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[],
    init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda verilen kümelerin birleşim kümesini yazınız ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			};

        Interaction.kume=new Set({type:Set.SMALLER_THAN,value:20 });

        $(container).append("<div id='soru'>");
        $("#soru")
            .css("width","300px")
            .css("height","100px")
            .css("position","absolute")
            .css("left","0")
            .css("top","20px")
            //.css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("border","1px solid red")
            .html("A="+Interaction.kume);

        Interaction.appendStatus({
            bottom:'50px',
            right:'160px',
            width:"280px",
            textAlign:"center"
        });

        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
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
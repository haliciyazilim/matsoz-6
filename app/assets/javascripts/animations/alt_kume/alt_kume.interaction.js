var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
    init:function(container){
        Interaction.container = container;
		Main.setObjective('Yanda verilen kümenin iki elemanlı alt kümelerinden birini bulunuz ve kontrol ediniz');

        Interaction.paper = {
		    width:$(container).width(),
			height:$(container).height()
		};

        $(container).append("<div id='kumeUst' class='soru'>");
        $(container).append("<div id='cevap' class='soru'>");

        $(".soru")
            .css("width","300px")
            .css("height","30px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
        //.css("border","1px solid red");

        $("#kumeUst")
            .css("left","10px")
            .css("top","10px");

        $("#cevap")
            .css("left","10px")
            .css("top","50px");

		Interaction.prepareNextQuestion();
	},
	nextQuestion: function(randomNumber){
        Interaction.birinciKume=new sorgular();
        Interaction.soru=Interaction.birinciKume.yeniSoru("A");
        console.log(Interaction.soru);
        $("#kumeUst").html(Interaction.soru);
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
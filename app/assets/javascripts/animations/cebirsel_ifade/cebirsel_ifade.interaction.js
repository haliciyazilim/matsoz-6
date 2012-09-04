var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda yazılı cümleleri cebirsel ifadelere dönüştürünüz. Bilinmeyen yerine x, a, n veya k harfi kullanabilirsiniz. Daha sonra yazdığınızı kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}

        $(container).append("<div id='soru'>");

        $(container).append("<div id='girdiler'>");

        $("#soru")
            .css("width","450px")
            .css("height","20px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","0px")
            .css("right","0px")
            .css("top","90px")
            .css("font-size","20px")
            .css("text-align","center")
            //.css("border","1px solid red");

        $("#girdiler")
            .css("width","450px")
            .css("height","32px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","0px")
            .css("right","0px")
            .css("top","140px")
            .css("font-size","20px")
            .css("text-align","center")
            //.css("border","1px solid red");

        Interaction.appendStatus({
            bottom:'20px',
            right:'160px',
            width:"280px",
            textAlign:"center"

        });

        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });

			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
        Interaction.flushInputs();
        $("#girdiler").html("");
        $("input").css("color","black");
        Interaction.gelenSoru=sorular();

        $("#soru").html(Interaction.gelenSoru);

		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
        var kntrl=kontrol(value);

        if(kntrl==true)
            return true;


		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
        hataliCevap();
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.',false);
        $("input").css("color","green");
		
		}
}
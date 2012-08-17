var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
	Main.setObjective('Yanda verilen mutlak değerin eşitini bulunuz.');
	Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        
        
        // Ana Div
        $(container).append("<div id='soru'>");
            $("#soru")
                .css("width","145px")
                .css("height","45px")
                .css("position","absolute")
                .css("left","0")
                .css("top","50px")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red");
        $("#soru").append("<div id='istenen'>");
            $("#istenen")
                .css("width","90px")
                .css("height","20px")
                
                .css("font-size","20px")
                .css("position","absolute")
                .css("top","0")
                .css("bottom","0")
                .css("margin","auto");
                //.css("border","1px solid red");
        $("#soru").append("<div id='girilen'>");
            $("#girilen")
                .css("width","50px")
                .css("position","absolute")
                .css("right","0px")
                //.css("border","1px solid red")
                .css("height","45px");
					
        $(container).append("<div id='cevap'>");
            $("#cevap")
                .css("width","145px")
                .css("height","45px")
                .css("position","absolute")
		.css("left","0")
		.css("right","0")
		.css("bottom","100px")
		.css("margin","auto")
                .css("font-size","20px")
		//.css("opacity","0")
		//.css("border","1px solid red");
        
        Interaction.appendInput({
            width: '60px',
            //height: '32px',
            textAlign: 'center',
            fontSize: '20px'
            
            
        },false);
        Interaction.input.id="girdi";
        
        
        $("#soru #girilen").append(Interaction.input);
        $("input").css("height","100%").css("margin","auto").attr("maxLength","4");
        
        Interaction.appendStatus({
            bottom:'50px',
            right:'160px'
        });
	
        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
	});
        
        Interaction.setRandomGenerator(1000, 0)
        
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.trial=1;
        Interaction.randomNumber = randomNumber;
        console.log(Interaction.randomNumber);
        Interaction.isaretRandomu=Math.floor(Math.random()*2+1);
        console.log(Interaction.isaretRandomu);
        Interaction.isaret=Interaction.isaretRandomu%2==0?"":"-";
        console.log(Interaction.isaret);
        Interaction.soru="<strong style='color:#006E7D; font-size:24px;'>| </strong>"+Interaction.isaret+Interaction.randomNumber+" <strong style='color:#006E7D; font-size:24px;'>|</strong>";
        console.log(Interaction.soru);
        $("#istenen").html(Interaction.soru+" = ");
        $("#cevap").html("");
        $("input").css("color","black");
    },
	
    preCheck : function(){
        
    },
    isAnswerCorrect : function(value){
        if(value==Interaction.randomNumber)
            return true;
    },
    onCorrectAnswer : function(){
        
    },
    onWrongAnswer : function(){
    },
    onFail : function(){
        $("#cevap").html(Interaction.soru+" = "+"<b style='color:green'>"+Interaction.randomNumber+"</b>");
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        $("input").css("color","red");
        
    }
}
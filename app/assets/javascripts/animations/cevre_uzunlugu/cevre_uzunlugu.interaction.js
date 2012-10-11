var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki şeklinde çevre uzunluğunu bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });

        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        });

        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"235px",
            height:"50px",
            right:"0px",
            top:"35px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1


        });

        $(container).append("<div id='cevap'>");
        $("#cevap").css({
            position:"absolute",
            width:"135px",
            height:"50px",
            right:"11px",
            top:"130px",
            opacity:0,
            fontSize:"20px",
            textAlign:"center",
            color:"green"
        });

        Interaction.appendInput({
            position:"relative",
            width:"70px",
            height:"50px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1,
            float:"left"

        },true, false);
        Interaction.input.id="girdi";
        $("#girdi").attr("maxLength","5");

        $(container).append("<div id='girdiKapsayici'>");
        $("#girdiKapsayici").css({
            position:"absolute",
            width:"135px",
            height:"50px",
            right:"11px",
            top:"60px"
        });

        $("#girdiKapsayici").append("<span id='ccc'>Ç= </span>");
        $("#girdiKapsayici").append(Interaction.input);
        $("#girdiKapsayici").append("<span id='biriM'> m</span>");
        $("#ccc").css({
            float:"left",
            marginTop:"20px",
            marginRight:"10px",
            fontSize:"20px"
        });
        $("#biriM").css({
            float:"left",
            marginTop:"20px",
            marginLeft:"10px",
            fontSize:"20px"
        });





        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();
        $("#cevap").animate({opacity:0},1000);

        var lineY=new Path.Line(new Point(10,210),new Point(430,210));
        lineY.strokeColor="black";

        var lineX=new Path.Line(new Point(10,10),new Point(10,210));
        lineX.strokeColor="black";

        soru=new Dikdortgen();

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        if(soru.cevap==value)
            return true

    },
	onCorrectAnswer : function(){
        soru.cevapGoster();
        soru.yazilariGoster();
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        soru.yazilariGoster();
        soru.cevapGoster();

		
    }

}
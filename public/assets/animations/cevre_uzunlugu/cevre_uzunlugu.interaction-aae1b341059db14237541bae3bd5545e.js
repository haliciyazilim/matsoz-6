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
            bottom:"10px",
            right:"40px"
        });

        Interaction.appendStatus({
            bottom:"20px",
            right:"200px"
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
            width:"420px",
            height:"25px",
            right:"0px",
            left:"0px",
            bottom:"50px",
            margin:"auto",
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



        Interaction.soruArray=Util.getShuffledArray(5);
        Interaction.soruSirasi=0;

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        $("input").css({color:"black"});

        Main.interactionProject.activeLayer.removeChildren();
        $("#cevap").animate({opacity:0},1000);

        /*var lineY=new Path.Line(new Point(10,210),new Point(430,210));
        lineY.strokeColor="black";

        var lineX=new Path.Line(new Point(10,10),new Point(10,210));
        lineX.strokeColor="black";*/

        var simdikiSoru=Interaction.soruArray[Interaction.soruSirasi];

        switch (simdikiSoru){
            case 0:
                soru=new Dikdortgen();
                console.log("Dikdörtgen")
                break;
            case 1:
                soru= new SekilL1();
                console.log("ŞekilL1")
                break;
            case 2:
                soru= new SekilL2();
                console.log("ŞekilL2")
                break;
            case 3:
                soru= new SekilL3();
                console.log("ŞekilL3")
                break;
            case 4:
                soru= new SekilL4();
                console.log("ŞekilL4")
                break;
        }
        Interaction.soruSirasi++;
        if(Interaction.soruSirasi==5)
            Interaction.soruSirasi=0;


//        soru=new Dikdortgen();
//        soru= new SekilL1();
//        soru= new SekilL2();
//        soru= new SekilL3();
//        soru= new SekilL4();
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
        $("input").css({color:"green"});
        soru.cevapGoster();
        soru.yazilariGoster();
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        $("input").css({color:"red"});
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.',false);
        soru.yazilariGoster();
        soru.cevapGoster();

		
    }

}
;

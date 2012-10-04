var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki ondalık kesirlerle bölme işlemini yapınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"120px",
            height:"50px",
            left:"130px",
            top:"100px",
            fontSize:"20px",
            lineHeight:"55px",
            textAlign:"right",
            opacity:1
        });

        $(container).append("<div id='cevap'><div id='sayi'>33,67</div><div id='olcum'>7>5</div><div id='sonuc'></div></div>");
        $("#cevap").css({
            position:"absolute",
            width:"600px",
            height:"50px",
            left:"0",
            right:"0",
            margin:"auto",
            top:"180px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1

        });
        $("#cevap div").css({float:"left",width:"200px"});

        $("#sayi, #sonuc, #olcum").css("opacity","0");




        Interaction.appendInput({
            position:"absolute",
            width:"70px",
            height:"50px",
            right:"0",
            top:"100px",
            left:"0",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",
            opacity:1
        }, true, false);
        Interaction.input.id = "girdi";
        $("#girdi").attr("maxLength", "5");
        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })
        /*
        *	Initialize your interaction here
        */

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        var kontrol=0;

        while(kontrol==0){
            soru=soruGetir();

            var sonuc=soru[0]/soru[1];
            var sonucArray=sonuc.toString().split(".");

            if(sonucArray[1].length<3)
                kontrol=1;

            console.log(soru[0]+", "+soru[1]+", "+sonuc);
        }




        $("#soru").html(Util.format(soru[0],{places:2})+" : "+Util.format(soru[1],{places:2})+" = ");

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        sonuc=soru[0]/soru[1];
        gelenCevapArray=value.split(",");
        gelenCevap=parseFloat(gelenCevapArray[0]+"."+gelenCevapArray[1]);
        console.log(gelenCevap);
        if(sonuc==gelenCevap)
            return true;

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}
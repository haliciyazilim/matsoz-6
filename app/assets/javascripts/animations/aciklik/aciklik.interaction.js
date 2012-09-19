var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },

    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki insanların yaşları için açıklık ve aritmetik ortalama hesaplanmıştır. İstediğiniz kişiyi çıkararak açıklık ve aritmetik ortalamayı inceleyiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        var resim1=[5,"/assets/animations/aciklik/aciklik_5.jpg"];
        var resim2=[12,"/assets/animations/aciklik/aciklik_12.jpg"];
        var resim3=[19,"/assets/animations/aciklik/aciklik_19.jpg"];
        var resim4=[27,"/assets/animations/aciklik/aciklik_27.jpg"];
        var resim5=[35,"/assets/animations/aciklik/aciklik_35.jpg"];
        var resim6=[43,"/assets/animations/aciklik/aciklik_43.jpg"];
        var resim7=[72,"/assets/animations/aciklik/aciklik_72.jpg"];



        Interaction.kisilerArray=[resim1,resim2,resim3,resim4,resim5,resim6,resim7];
        Interaction.kisilerYasToplam=0;


        $(container).append("<div id='aciklik'>");
        $("#aciklik").html("Açıklık = <b id='sonucAciklik'></b>");
        $("#aciklik").css({
            position:"absolute",
            width:"150px",
            height:"20px",
            top:"90px",
            left:"410px",
            fontSize:"20px"

        });

        $(container).append("<div id='ortalama'>");
        $("#ortalama").html("Artitmetik ortalama = <b id='sonucOrtalama'></b>");
        $("#ortalama").css({
            position:"absolute",
            width:"250px",
            height:"20px",
            top:"190px",
            left:"300px",
            fontSize:"20px"

        });

        $(container).append("<button id='btn'> Yeniden dene</button>")
        $("#btn").css({
            position:"absolute",
            left:"400px",
            bottom:"40px"
        });

        $("#btn").click(function (){
            adamlariKaristir();
        });

        adamlariGetir();




        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        adamlariKaristir();

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
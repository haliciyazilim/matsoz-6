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

        var resim1=[5,"/assets/animations/saymanin_temel_ilkesi/tisort_beyaz.png"];
        var resim2=[12,"/assets/animations/saymanin_temel_ilkesi/tisort_kirmizi.png"];
        var resim3=[19,"/assets/animations/saymanin_temel_ilkesi/tisort_mavi.png"];
        var resim4=[27,"/assets/animations/saymanin_temel_ilkesi/tisort_mor.png"];
        var resim5=[35,"/assets/animations/saymanin_temel_ilkesi/tisort_sari.png"];
        var resim6=[43,"/assets/animations/saymanin_temel_ilkesi/tisort_sari.png"];
        var resim7=[72,"/assets/animations/saymanin_temel_ilkesi/tisort_sari.png"];



        Interaction.kisilerArray=[resim1,resim2,resim3,resim4,resim5,resim6,resim7];
        Interaction.kisilerYasToplam=0;


        $(container).append("<div id='aciklik'>");
        $("#aciklik").html("Açıklık = <b id='sonucAciklik'></b>");
        $("#aciklik").css({
            position:"absolute",
            width:"150px",
            height:"20px",
            top:"50px",
            left:"300px",
            fontSize:"20px"

        });

        $(container).append("<div id='ortalama'>");
        $("#ortalama").html("Artitmetik ortalama = <b id='sonucOrtalama'></b>");
        $("#ortalama").css({
            position:"absolute",
            width:"250px",
            height:"20px",
            top:"150px",
            left:"300px",
            fontSize:"20px"

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
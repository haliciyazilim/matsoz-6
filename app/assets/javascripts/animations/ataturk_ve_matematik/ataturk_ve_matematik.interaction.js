var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'aciortay',
            src: '/assets/animations/ataturk_ve_geometri/aciortay.jpg'
        },
        {
            id:'arti',
            src: '/assets/animations/ataturk_ve_geometri/arti.jpg'
        },
        {
            id:'aci',
            src: '/assets/animations/ataturk_ve_geometri/aci.jpg'
        },
        {
            id:'besgen',
            src: '/assets/animations/ataturk_ve_geometri/besgen.jpg'
        },
        {
            id:'bolen',
            src: '/assets/animations/ataturk_ve_geometri/bolen.jpg'
        },
        {
            id:'bolme',
            src: '/assets/animations/ataturk_ve_geometri/bolme.jpg'
        },
        {
            id:'cap',
            src: '/assets/animations/ataturk_ve_geometri/cap.jpg'
        },
        {
            id:'carpan',
            src: '/assets/animations/ataturk_ve_geometri/carpan.jpg'
        },
        {
            id:'carpi',
            src: '/assets/animations/ataturk_ve_geometri/carpi.jpg'
        },
        {
            id:'cevre',
            src: '/assets/animations/ataturk_ve_geometri/cevre.jpg'
        },
        {
            id:'cikarma',
            src: '/assets/animations/ataturk_ve_geometri/cikarma.jpg'
        },
        {
            id:'daire_cember',
            src: '/assets/animations/ataturk_ve_geometri/daire_cember.jpg'
        },
        {
            id:'dik_ucgen',
            src: '/assets/animations/ataturk_ve_geometri/dik_ucgen.jpg'
        },
        {
            id:'dikdortgen',
            src: '/assets/animations/ataturk_ve_geometri/dikdortgen.jpg'
        },
        {
            id:'dikey',
            src: '/assets/animations/ataturk_ve_geometri/dikey.jpg'
        },
        {
            id:'dortgen',
            src: '/assets/animations/ataturk_ve_geometri/dortgen.jpg'
        },
        {
            id:'kare',
            src: '/assets/animations/ataturk_ve_geometri/kare.jpg'
        },
        {
            id:'ondalik',
            src: '/assets/animations/ataturk_ve_geometri/ondalik.jpg'
        },
        {
            id:'pay',
            src: '/assets/animations/ataturk_ve_geometri/pay.jpg'
        },
        {
            id:'payda',
            src: '/assets/animations/ataturk_ve_geometri/payda.jpg'
        },
        {
            id:'piramid',
            src: '/assets/animations/ataturk_ve_geometri/piramid.jpg'
        },
        {
            id:'prizma',
            src: '/assets/animations/ataturk_ve_geometri/prizma.jpg'
        },
        {
            id:'sadelestirme',
            src: '/assets/animations/ataturk_ve_geometri/sadelestirme.jpg'
        },
        {
            id:'ucgen',
            src: '/assets/animations/ataturk_ve_geometri/ucgen.jpg'
        },
        {
            id:'yuzey',
            src: '/assets/animations/ataturk_ve_geometri/yuzey.jpg'
        }
    ],
    init:function(container){
        Main.setObjective('Atatürk’ün bulduğu ve bugün kullandığımız matematik sözcüklerinden bir kısmı:');
        Interaction.old_word = document.createElement('div');
        Interaction.new_word = document.createElement('div');
        Interaction.image = document.createElement('div');
        Interaction.paper = {width:$(container).width(),height:$(container).height()};
        Interaction.shapeLimits = {
            x:Interaction.paper.width*0.5-75,
            y:Interaction.paper.height*0.5-75,
            w:150,
            h:150
        };
        $(container).append(Interaction.old_word);
        $(container).append(Interaction.new_word);
        $(container).append(Interaction.image);
        $('div',container).css({
            position:'absolute',
            width:'150px',
            height:'30px',
            color:'rgb(111,47,159)',
            fontWeight:'bold',
            top:Interaction.paper.height*0.5-15
        });
        $(Interaction.old_word).css({
            left:Interaction.paper.width*0.5 - 290,
            textAlign:'right'
        });
        $(Interaction.new_word).css({
            left:Interaction.paper.width*0.5 + 150,
            textAlign:'left'
        });
        $(Interaction.image).css({
            position:'absolute',
            height:'200px',
            width:'200px',
            top:Interaction.paper.height*0.5-100,
            left:Interaction.paper.width*0.5-100,
            textAlign:'left'
        });
        Interaction.next_button = document.createElement('input');
        Interaction.next_button.onclick = Interaction.nextQuestion;
        $(container).append(Interaction.next_button);
        Interaction.next_button.type = 'button';
        Interaction.next_button.className = 'next_button';
        $(Interaction.next_button).css({
            position:'absolute',
            bottom:'10%',
            right:'10%',
            width:103,
            textAlign:'center'
        });
        Interaction.preventNextQuestion = false;
        var NUMBER_OF_SHAPES  = words.length;
        Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
        Interaction.count = 0;
        $(Interaction.words).each(function(index, element) {
            this.image = $('#'+this.shape).get(0);
        });
        Interaction.nextQuestion();
    },
	nextQuestion: nextQuestion = function(){
        if(Interaction.preventNextQuestion == true)
            return;
        Interaction.preventNextQuestion = false;
        project.activeLayer.removeChildren();
        var count = (Interaction.count++)%Interaction.shuffledArray.length;
        var wordOrder = Interaction.shuffledArray[count];
        ///*TEST*/wordOrder=3;/*TEST*/
        var word = words[wordOrder];
        $(Interaction.old_word).html(word.oldName);
        $(Interaction.new_word).html(word.newName);
        $(Interaction.image).html('').append(word.image);

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
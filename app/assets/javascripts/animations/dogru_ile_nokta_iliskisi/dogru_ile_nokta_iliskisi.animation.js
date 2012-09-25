var Animation = {
    images:[
        {
            id:'ankara_dogrusal',
            src:'/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal.gif'
        },
        {
            id:'halat_dogrusal',
            src:'/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal.gif'
        }
    ],
	init:function(container){
        Animation.container = container;
        $(Animation.container).append($('#ankara_dogrusal'));
        $('#ankara_dogrusal').css({
            position:"absolute",
            top:'50%',
            left:'50%',
            marginLeft:'-125px',
            marginTop:'-85px'
        }).delay(6000).animate({marginLeft:'-325px'},1000,function(){
            $(Animation.container).append($('#halat_dogrusal'));
                $('#halat_dogrusal').css({
                    position:"absolute",
                    top:'50%',
                    left:'50%',
                    marginLeft:'60px',
                    marginTop:'-85px'
                })
                Main.animationFinished(4500);
        });

    }
}
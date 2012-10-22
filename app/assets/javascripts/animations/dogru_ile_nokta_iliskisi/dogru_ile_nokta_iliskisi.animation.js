var Animation = {
    images:[
        {
            id:'ankara_dogrusal',
            src:'/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_start.png'
        },
        {
            id:'halat_dogrusal',
            src:'/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_start.png'
        }
    ],
	init:function(container){
        Animation.container = container;
        var ankaraHarita = new GIF({
            src:'/assets/animations/dogru_ile_nokta_iliskisi/eslik.jpg',
            width:750,
            height:170,
            parent:container,
            count:101,
            css:{
                position:"absolute",
                top:'50%',
                left:'50%',
                marginLeft:'-375px',
                marginTop:'-85px'
            }
        });
        setTimeout(function(){ankaraHarita.play(14)},3000);
    },
    animateAnkaraDogrusal:function(){
        $(Animation.container).append($('#ankara_dogrusal'));
        $('#ankara_dogrusal').css({
            position:"absolute",
            top:'50%',
            left:'50%',
            marginLeft:'-125px',
            marginTop:'-85px'
        });
        AnimationManager.delay(function(){
            $('#ankara_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal.gif';
            $('#ankara_dogrusal').delay(6000).animate({marginLeft:'-325px'},1000,function(){
                Animation.animateHalatDogrusal();
                $('#ankara_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_end.png';

                });
        },100);
    },
    animateHalatDogrusal:function(){
        $(Animation.container).append($('#halat_dogrusal'));
        $('#halat_dogrusal').css({
            position:"absolute",
            top:'50%',
            left:'50%',
            marginLeft:'60px',
            marginTop:'-85px'
        })
        setTimeout(function(){
            $('#halat_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal.gif';

            AnimationManager.delay(function(){
                $('#halat_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_end.png';

            },6000);

        },1);
        Main.animationFinished(4500);
    }

}


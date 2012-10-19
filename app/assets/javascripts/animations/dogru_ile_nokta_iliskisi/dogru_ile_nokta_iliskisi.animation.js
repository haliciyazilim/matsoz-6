var Animation = {
    images:[
//        {
//            id:'ankara_dogrusal',
//            src:'/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal.gif'
//        },
//        {
//            id:'halat_dogrusal',
//            src:'/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal.gif'
//        },
        {
            id:'ankara_dogrusal',
            src:'/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_start.png'
        },
//        {
//            id:'ankara_dogrusal_end',
//            src:'/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_end.png'
//        },
        {
            id:'halat_dogrusal',
            src:'/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_start.png'
        },
//        {
//            id:'halat_dogrusal_end',
//            src:'/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_end.png'
//        }
    ],
	init:function(container){
        Animation.container = container;
        Animation.animateAnkaraDogrusal();

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
//            $(Animation.container).append($('#ankara_dogrusal'));
            $('#ankara_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal.gif';


//            $('#ankara_dogrusal_start').remove();
//            $('#ankara_dogrusal').css({
//                position:"absolute",
//                top:'50%',
//                left:'50%',
//                marginLeft:'-125px',
//                marginTop:'-85px'
//            })
            $('#ankara_dogrusal').delay(6000).animate({marginLeft:'-325px'},1000,function(){
                Animation.animateHalatDogrusal();
                $('#ankara_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_end.png';

//                $(Animation.container).append($('#ankara_dogrusal'));
//                $('#ankara_dogrusal').css({
//                    position:"absolute",
//                    top:'50%',
//                    left:'50%',
//                    marginLeft:'-325px',
//                    marginTop:'-85px'
//                });
//                $('#ankara_dogrusal').remove()
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
//            console.log('append halat_dogrusal')
//            $(Animation.container).append($('#halat_dogrusal'));
            $('#halat_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal.gif';

//            $('#halat_dogrusal').remove();
//            $('#halat_dogrusal').css({
//                position:"absolute",
//                top:'50%',
//                left:'50%',
//                marginLeft:'60px',
//                marginTop:'-85px'
//            });
            AnimationManager.delay(function(){
//                $(Animation.container).append($('#halat_dogrusal'));
                $('#halat_dogrusal').get(0).src = '/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_end.png';

//                $('#halat_dogrusal').remove();
//                $('#halat_dogrusal').css({
//                    position:"absolute",
//                    top:'50%',
//                    left:'50%',
//                    marginLeft:'60px',
//                    marginTop:'-85px'
//                })
            },6000);

        },1);

        Main.animationFinished(4500);
    }

}
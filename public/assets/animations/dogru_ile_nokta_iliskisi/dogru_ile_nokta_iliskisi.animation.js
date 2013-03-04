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
        Animation.animateAnkaraDogrusal();
    },
    animateAnkaraDogrusal:function(){
        var ankaraHarita = new GIF({
            src:'/assets/animations/dogru_ile_nokta_iliskisi/ankara.png',
            width:250,
            height:170,
            parent:Animation.container,
            count:54,
            css:{
                position:"absolute",
                top:'50%',
                left:'50%',
                marginLeft:'-125px',
                marginTop:'-83px'
            }
        });
        setTimeout(function(){
            ankaraHarita.play(14)
        },2000);
        $(ankaraHarita.div).delay(6000).animate({marginLeft:'-325px'},1000,function(){
            Animation.animateHalatDogrusal();
        });
    },
    animateHalatDogrusal:function(){
        var halat = new GIF({
            src:'/assets/animations/dogru_ile_nokta_iliskisi/halat.png',
            width:250,
            height:170,
            parent:Animation.container,
            count:39,
            css:{
                position:"absolute",
                top:'50%',
                left:'50%',
                marginLeft:'60px',
                marginTop:'-85px'
            }
        });
        setTimeout(function(){
            halat.play(14)
        },1000);
        Main.animationFinished(4500);
    }

}

;

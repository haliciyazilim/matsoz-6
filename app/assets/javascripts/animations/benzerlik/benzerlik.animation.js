var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        var ankaraHarita = new GIF({
            src:'/assets/animations/benzerlik/benzerlik.jpg',
            width:730,
            height:170,
            parent:container,
            count:144,
            css:{
                position:"absolute",
                top:'50%',
                left:'50%',
                marginLeft:'-375px',
                marginTop:'-85px'
            }
        });
        setTimeout(function(){
            console.log("animation");
            ankaraHarita.play(14)
        },2000);
        Main.animationFinished(13000);

//        $(container).append('<img src="/assets/animations/benzerlik/benzerlik.gif" />');
//        $('img',container).css({
//            position:"absolute",
//            top:'50%',
//            left:'50%',
//            marginLeft:'-375px',
//            marginTop:'-85px'
//        })
    }
}
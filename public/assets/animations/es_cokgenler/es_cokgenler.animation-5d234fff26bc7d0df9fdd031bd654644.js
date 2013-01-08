var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        var ankaraHarita = new GIF({
            src:'/assets/animations/es_cokgenler/es_cokgenler.jpg',
            width:750,
            height:160,
            parent:Animation.container,
            count:90,
            css:{
                position:"absolute",
                top:'50%',
                left:'50%',
                marginLeft:'-375px',
                marginTop:'-80px'
            }
        });
        setTimeout(function(){
            ankaraHarita.play(10)
        },2000);
        Main.animationFinished(11100);
    }
}
;

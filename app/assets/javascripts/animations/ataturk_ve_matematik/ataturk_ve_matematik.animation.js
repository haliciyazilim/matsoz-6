var Animation = {
    images:[
        {
            id:'ataturk_geometri_bg',
            src: '/assets/animations/ataturk_ve_geometri/ataturk_geometri_bg.jpg'
        }
    ],
    init:function(container){
        Animation.container = container;
        $(container).append($('#ataturk_geometri_bg').css({
            position:'absolute',
            left:'15px',
            top:'20px'
        }).fadeIn(1000,'linear'));
        Main.animationFinished(1000);
    }
};
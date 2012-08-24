var Animation = {

    images:[
        {
            id:'van_gol',
            src:'/assets/animations/kumelerle_fark_islemi/van_gol.png'
        },
        {
            id:'van_kara',
            src:'/assets/animations/kumelerle_fark_islemi/van_kara.png'
        },
        {
            id:'van_kesisim',
            src:'/assets/animations/kumelerle_fark_islemi/van_kesisim.png'
        },
        {
            id:'van_son',
            src:'/assets/animations/kumelerle_fark_islemi/van_son.png'
        },
        {
            id:'kume_a',
            src:'/assets/animations/kumelerle_fark_islemi/kume_a.png'
        },
        {
            id:'kume_b',
            src:'/assets/animations/kumelerle_fark_islemi/kume_b.png'
        },
        {
            id:'kume_son',
            src:'/assets/animations/kumelerle_fark_islemi/kume_son.png'
        },
        {
            id:'kume_kesisim',
            src:'/assets/animations/kumelerle_fark_islemi/kume_kesisim.png'
        },
    ],

	init:function(container){
        Animation.container = container;
        Animation.animateVan();
        Animation.animateKume();




    },
    animateVan:function(){
        var images = [];
        images[0] = $('#van_gol').get(0);
        images[1] = $('#van_kara').get(0);
        images[2] = $('#van_kesisim').get(0);
        images[3] = $('#van_son').get(0);
        $(images).each(function(){
            $(Animation.container).append(this);
            $(this)
                .css(animationVanImagesCSS)
                .css({opacity:0})
        })
        Animation.animateConcept(images,12000,0)
    },
    animateKume:function(){
        var images = [];
        images[0] = $('#kume_a').get(0);
        images[1] = $('#kume_b').get(0);
        images[2] = $('#kume_kesisim').get(0);
        images[3] = $('#kume_son').get(0);
        $(images).each(function(){
            $(Animation.container).append(this);
            $(this)
                .css(animationKumeImagesCSS)
                .css({opacity:0})
        })
        Animation.animateConcept(images,12000,0)
    },
    animateConcept:function(images,duration,delay){
        $(images[1]).css({zIndex:10});
        $(images[0]).css({zIndex:11,left:parseInt($(images[1]).css('left'),10)-50});
        $(images[2]).css({zIndex:12});
        $(images[3]).css({zIndex:9});
        $(images[1]).delay(delay).animate({opacity:1},duration/6);
        $(images[0]).delay(delay+duration/6)
            .animate({opacity:1},duration/6)
            .animate({left:parseInt($(images[1]).css('left'),10)},duration/12)
            .delay(duration/6)
            .animate({opacity:0},duration/6);
        $(images[2])
            .delay(delay+duration*3/6)
            .animate({opacity:1},duration/6)
            .delay(duration/6)
            .animate({opacity:0},duration/6)
        $(images[1]).delay(duration*3/6).animate({opacity:0},duration/6);
        $(images[3]).delay(duration*3/6).animate({opacity:1},duration/6);
    }
}
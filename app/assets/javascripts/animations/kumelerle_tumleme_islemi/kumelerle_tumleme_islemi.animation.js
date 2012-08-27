var Animation = {
    images:[
        {
            id:'kt_01',
            src:'/assets/animations/kumelerle_tumleme_islemi/kt_01.jpg'
        },
        {
            id:'kt_02',
            src:'/assets/animations/kumelerle_tumleme_islemi/kt_02.jpg'
        },
        {
            id:'kt_03',
            src:'/assets/animations/kumelerle_tumleme_islemi/kt_03.jpg'
        },
        {
            id:'kt_04',
            src:'/assets/animations/kumelerle_tumleme_islemi/kt_04.jpg'
        },
        {
            id:'kt_05',
            src:'/assets/animations/kumelerle_tumleme_islemi/kt_05.jpg'
        }
    ],
	init:function(container){
			Animation.container = container;
		    for(var i=0;i<Animation.images.length;i++){
                $(container).append($('#'+Animation.images[i].id));
                $('#'+Animation.images[i].id).css({
                    opacity:0,
                    position:'absolute',
                    top:'50%',
                    left:'50%',
                    marginLeft:'-127px',
                    marginTop:'-85px'
                }).delay(2000*i).animate({opacity:1},2000,(i==Animation.images.length-1?Main.animationFinished:null));//.animate({opacity:0},2000);

            }

//            $('#kt_01').animate({opacity:1},1000);
//            $('')
		}
}
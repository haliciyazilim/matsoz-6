var Animation = {
    images:[
        {
            id:'deneme',
            src:'/assets/deneme.jpg'
        }
    ],
	init:function(container){
        Animation.container = container;
        Main.animationFinished();
//        var div = Util.dom({
//            tag:'div',
//            parent:container,
//            css:{
//                position:'absolute',
//                height:'100px',
//                width:'100px',
//                backgroundImage:'url(/assets/deneme.jpg)',
//                top:'50px',
//                left:'300px'
//            }
//        });
//        var startTime = new Date().getTime();
//        var count = 0;
//        setTimeout(function(){
//            setInterval(function(){
//                count++;
//                var diff = new Date().getTime() - startTime;
//                currentPosition =  - 100 * Util.round(diff,42);
//                $(div).css({
//                    backgroundPosition:currentPosition+'px 0px'
//                });
//                Main.setObjective("fps: "+ (count*1000/diff));
//            },9);
//        },1000)



    }
}
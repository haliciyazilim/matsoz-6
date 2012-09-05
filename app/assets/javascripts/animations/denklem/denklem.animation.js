var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        $(Util.dom({
            tag:'div',
            parent:container,
            html:'Eğer 2 liram daha olursa cebimde 5 lira olacak. Şu an kaç liram var?',
            css:{
                position:'absolute',
                width:'100%',
                top:'30px',
                left:'0px',
                textAlign:'center',
                fontWeight:700,
                opacity:0,
                fontSize:'22px'
            }
        })).animate({opacity:1},1000);

        $(Util.dom({
            tag:'div',
            parent:container,
            html:'<span id="saklanan_x">x</span> + 2 = 5',
            css:{
                position:'absolute',
                width:'100%',
                top:'70px',
                left:'-20px',
                textAlign:'center',
                opacity:0,
                fontSize:'22px'
            }
        })).delay(1000).animate({opacity:1},1000)

        $(Util.dom({
            tag:'div',
            parent:container,
            html:'x + 2 = 1 + 2 + 2',
            css:{
                position:'absolute',
                width:'100%',
                top:'100px',
                left:'17px',
                textAlign:'center',
                opacity:0,
                fontSize:'22px'
            }
        })).delay(2000).animate({opacity:1},1000)
        $(Util.dom({
            tag:'div',
            parent:container,
            html:'x = 1 + 2',
            css:{
                position:'absolute',
                width:'100%',
                top:'130px',
                left:'17px',
                textAlign:'center',
                opacity:0,
                fontSize:'22px'
            }
        })).delay(3000).animate({opacity:1},1000)
        $(Util.dom({
            tag:'div',
            parent:container,
            html:'x = <span id="ucan_3" style="position: relative;">3</span>',
            css:{
                position:'absolute',
                width:'100%',
                top:'160px',
                left:'-1px',
                textAlign:'center',
                opacity:0,
                fontSize:'22px'
            }
        })).delay(4000).animate({opacity:1},1000)

        $("#ucan_3").delay(5000).animate({top:'-89px',left:'-71px'},1000);
        $("#saklanan_x").delay(5000).animate({opacity: 0},1000);
        $("#ucan_3").delay(1000).animate({top:'0px',left:'0px'},1000);
        $("#saklanan_x").delay(1000).animate({opacity: 1},1000);
    }
}
var Animation={images:[{id:"ankara_dogrusal",src:"/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_start.png"},{id:"halat_dogrusal",src:"/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_start.png"}],init:function(e){Animation.container=e;var t=new GIF({src:"/assets/animations/dogru_ile_nokta_iliskisi/eslik.jpg",width:750,height:170,parent:e,count:101,css:{position:"absolute",top:"50%",left:"50%",marginLeft:"-375px",marginTop:"-85px"}});setTimeout(function(){t.play(25)},2e3)},animateAnkaraDogrusal:function(){$(Animation.container).append($("#ankara_dogrusal")),$("#ankara_dogrusal").css({position:"absolute",top:"50%",left:"50%",marginLeft:"-125px",marginTop:"-85px"}),AnimationManager.delay(function(){$("#ankara_dogrusal").get(0).src="/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal.gif",$("#ankara_dogrusal").delay(6e3).animate({marginLeft:"-325px"},1e3,function(){Animation.animateHalatDogrusal(),$("#ankara_dogrusal").get(0).src="/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_end.png"})},100)},animateHalatDogrusal:function(){$(Animation.container).append($("#halat_dogrusal")),$("#halat_dogrusal").css({position:"absolute",top:"50%",left:"50%",marginLeft:"60px",marginTop:"-85px"}),setTimeout(function(){$("#halat_dogrusal").get(0).src="/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal.gif",AnimationManager.delay(function(){$("#halat_dogrusal").get(0).src="/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_end.png"},6e3)},1),Main.animationFinished(4500)}};
var Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=1e3,r=["/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_01.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_02.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_03.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_04.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_05.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_06.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_07.png"],i=["kume_siir_sol","kume_siir_sag","kume_bebe_sol","kume_bebe_sag","kume_bos_sol","kume_bos_sag","kume_birlesim"];for(var s=0;s<i.length;s++)$(e).append("<img id='"+i[s]+"' class='ortak' src='"+r[s]+"'>"),$("#"+i[s]).css("opacity","0");$(".ortak").css({position:"absolute",top:"0",bottom:"0",margin:"auto",width:"319px",height:"170px"}),$("#"+i[6]).css({width:"492px",left:"0px",right:"0px"}),$("#"+i[0]).css("left","10px"),$("#"+i[1]).css("right","10px"),$("#"+i[2]).css("left","10px"),$("#"+i[3]).css("right","10px"),$("#"+i[4]).css("left","150px"),$("#"+i[5]).css("right","150px"),$("#"+i[0]+", #"+i[1]+", #"+i[2]+", #"+i[3]).delay(t).animate({opacity:"1"},n),$("#"+i[0]+", #"+i[2]).delay(t).animate({left:"150px"},n*3),$("#"+i[1]+", #"+i[3]).delay(t).animate({right:"150px"},n*3),$("#"+i[0]+", #"+i[1]+", #"+i[2]+", #"+i[3]).delay(t).animate({opacity:"0"},n),$("#"+i[4]+", #"+i[5]).delay(t*3+n*4).animate({opacity:"1"},n),$("#"+i[4]+", #"+i[5]).delay(t*2).animate({opacity:"0"},n),$("#"+i[6]).delay(t*5+n*5).animate({opacity:"1"},n),Main.animationFinished(1e4)}};
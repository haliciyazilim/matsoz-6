var Animation={images:[],init:function(e){Animation.container=e,$(Animation.container).append("<img id='cocuklar' src='/assets/animations/aciklik/cocuklar.jpg'>"),$("#cocuklar").css({width:"360",height:"172px",position:"absolute",top:"20px",left:"5px",zIndex:"1",opacity:0}),$(Animation.container).append("<div id='beyaz'></div>"),$("#beyaz").css({width:"70",height:"172px",position:"absolute",top:"20px",left:"290px",backgroundColor:"white",zIndex:"2",opacity:"0"}),$(Animation.container).append("<div id='ornekAciklik'>Açıklık = <span id='degisAciklik1'>168</span> - 145 = <span id='degisAciklik2'>23</span> </div>"),$(Animation.container).append("<div id='ornekAritmetikOrtalama'>"),$("#ornekAritmetikOrtalama").append("<div id='ifade' class='icerik'>"),$("#ornekAritmetikOrtalama").append("<div id='islem' class='icerik'>"),$("#ornekAritmetikOrtalama").append("<div id='sonuc' class='icerik'>"),$("#ornekAciklik").css({position:"absolute",top:"30px",left:"380px",fontSize:"16px",opacity:"0"}),$("#ornekAritmetikOrtalama").css({position:"absolute",width:"410px",height:"100px",top:"90px",right:"0px",fontSize:"16px",opacity:"0"});var t=100;$(".icerik").css({position:"relative",height:t+"px","float":"left"}),$("#ifade").css({lineHeight:t+"px",width:"150px"}).html("Aritmetik Ortalama = "),$("#islem").append("<div id='pay' class='kesir'>"),$("#islem").append("<div id='payda' class='kesir'>"),$(".kesir").css({width:"180px",height:"50px",textAlign:"center"}),$("#payda").css({borderTop:"1px black solid",lineHeight:"30px"}).html("5"),$("#pay").css({textAlign:"center",width:"180px",lineHeight:"70px"}).html("148+145+150+154<span id='degisecekPay'>+168</span>"),$("#sonuc").css({lineHeight:t+"px",paddingLeft:"5px"}).html(" = <span id='degisecekSonuc'>153 cm</span>"),$("#cocuklar").delay(1e3).animate({opacity:"1"},1e3),$("#ornekAciklik").delay(3e3).animate({opacity:"1"},1e3),$("#ornekAritmetikOrtalama").delay(5e3).animate({opacity:"1"},1e3),$("#beyaz").delay(7e3).animate({opacity:"1"},1e3),$("#degisAciklik1, #degisAciklik2").delay(8e3).animate({color:"#ff0000"},1e3).animate({opacity:"0"},1e3,function(){$("#degisAciklik1").html("154"),$("#degisAciklik2").html("9")}).animate({opacity:"1"},1e3),$("#degisAciklik1, #degisAciklik2").delay(1e3).animate({color:"#000000"},1e3),$("#degisecekPay,#degisecekSonuc").delay(11e3).animate({color:"#ff0000"},1e3).animate({opacity:"0"},1e3,function(){$("#degiseceksonuc").html("149,25 cm")}),$("#degisecekSonuc").delay(1e3).animate({opacity:"1"},1e3).animate({color:"#000000"},1e3),$("#pay").delay(2e3).animate({color:"#000000"},1e3),Main.animationFinished(16e3)}};
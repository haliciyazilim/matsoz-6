var Animation={images:[],init:function(e){Animation.container=e,resimler=["/assets/animations/tam_sayi/zemin.jpg","/assets/animations/tam_sayi/cerceve_uzun.png","/assets/animations/tam_sayi/balik.png","/assets/animations/tam_sayi/kus.png","/assets/animations/tam_sayi/asagi_ok.png","/assets/animations/tam_sayi/yukari_ok.png","/assets/animations/tam_sayi/cetvel_siyah.png","/assets/animations/tam_sayi/cetvel_kirmizi.png"],$(e).append("<div id='resimCerceve'>"),$("#resimCerceve").append("<img id='cerceve' src="+resimler[1]+">"),$("#resimCerceve").append("<img id='zemin' src="+resimler[0]+">"),$("#resimCerceve").css({position:"absolute",top:"0",bottom:"0",margin:"auto",left:"0px",width:"419px",height:"170px"}),$("#zemin").css("z-index","2"),$("#cerceve").css("z-index","4"),$("#zemin").css({position:"absolute",top:"0",bottom:"0",margin:"auto",left:"50px"}),$("#cerceve").css({position:"absolute",top:"0",bottom:"0",margin:"auto",left:"0px"}),$("#resimCerceve").append("<img id='balik'  class='canlilar' src="+resimler[2]+">"),$("#resimCerceve").append("<img id='kus' class='canlilar' src="+resimler[3]+">"),$("#resimCerceve").append("<img id='ok_asagi' src="+resimler[4]+">"),$("#resimCerceve").append("<img id='ok_yukari' src="+resimler[5]+">"),$("#resimCerceve").append("<img id='cetvelSiyah' src="+resimler[6]+">"),$("#resimCerceve").append("<img id='cetvelKirmizi' src="+resimler[7]+">"),$("#resimCerceve").append("<div id='mesafeBildirimUst' class='bildirim'>"),$("#resimCerceve").append("<div id='mesafeBildirimAlt' class='bildirim'>"),$(e).append("<div id='negatifTamSayilarBaslik' class='basliklar'>"),$(e).append("<div id='pozitifTamSayilarBaslik' class='basliklar'>"),$(e).append("<div id='sifirBaslik' class='basliklar'>"),$(e).append("<div id='sifirIcerik' class='icerik'>"),$(e).append("<div id='negatifTamSayilarParantez' class='icerik'>"),$(e).append("<div id='negatifTamSayilarIcerik' class='icerik'>"),$(e).append("<div id='pozitifTamSayilarParantez' class='icerik'>"),$(e).append("<div id='pozitifTamSayilarIcerik' class='icerik'>"),$(e).append("<div id='tamSayiKumesi'>"),$("#cetvelKirmizi, #cetvelSiyah").css({position:"absolute",bottom:"0px",right:"50px",margin:"auto",zIndex:"3",opacity:"0"}),$("#tamSayiKumesi").css({position:"absolute",bottom:"40px",right:"87px",margin:"auto",zIndex:"4",opacity:"0"}).html("Z ={&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} "),$(".basliklar").css({position:"absolute",bottom:"130px",margin:"auto",zIndex:"4"}),$("#negatifTamSayilarBaslik").css({right:"260px",opacity:"0"}).html("Negatif Tam Sayılar"),$("#sifirBaslik").css({right:"205px",opacity:"0"}).html("Sıfır"),$("#pozitifTamSayilarBaslik").css({right:"70px",opacity:"0"}).html("Positif Tam Sayılar"),$(".icerik").css({position:"absolute",bottom:"100px",margin:"auto",zIndex:"4",opacity:"0"}),$("#negatifTamSayilarParantez").css({right:"250px",opacity:"0"}).html("{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}"),$("#negatifTamSayilarIcerik").css({right:"257px",opacity:"0"}).html("… -7, -6, -5, -3, -2, -1"),$("#sifirIcerik").css({right:"213px",opacity:"0"}).html("0"),$("#pozitifTamSayilarParantez").css({right:"60px",opacity:"0"}).html("{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}"),$("#pozitifTamSayilarIcerik").css({right:"67px",opacity:"0"}).html("1, 2, 3, 4, 5, 6, 7…"),$(".bildirim").html("4 m"),$("#mesafeBildirimUst").css({position:"absolute",bottom:"90px",right:"175px",margin:"auto",zIndex:"3",opacity:"0"}),$("#mesafeBildirimAlt").css({position:"absolute",bottom:"45px",right:"175px",margin:"auto",zIndex:"3",opacity:"0"}),$("#ok_yukari").css({position:"absolute",bottom:"80px",right:"200px",margin:"auto",zIndex:"3",opacity:"0"}),$("#ok_asagi").css({position:"absolute",bottom:"36px",right:"200px",margin:"auto",zIndex:"3",opacity:"0"}),$("#kus").css({top:"-85px"}),$("#balik").css({top:"95px"}),$(".canlilar").css({position:"absolute",bottom:"0",margin:"auto",right:"0px",zIndex:"3"}),$("#kus").delay(3e3).animate({right:"250px",konum:250},4e3,"linear",function(){dondurKus()}).animate({right:"200px"},2e3,"linear"),$("#balik").delay(2e3).animate({right:"270px"},4e3,"linear",function(){dondurBalik()}).animate({right:"200px"},2e3,"linear"),$("#cetvelSiyah").delay(1e4).animate({opacity:"1"},1e3),$("#ok_yukari").delay(1e4).animate({opacity:"1"},1e3),$("#mesafeBildirimUst").delay(11e3).animate({opacity:"1"},1e3),$("#ok_asagi").delay(12e3).animate({opacity:"1"},1e3),$("#mesafeBildirimAlt").delay(13e3).animate({opacity:"1"},1e3),$("#cetvelKirmizi").delay(13e3).animate({opacity:"1"},1e3),$("#cetvelSiyah").delay(13e3).animate({opacity:"0"},1e3),$("#negatifTamSayilarBaslik").delay(14e3).animate({opacity:"1"},1e3),$("#sifirBaslik").delay(16e3).animate({opacity:"1"},1e3),$("#pozitifTamSayilarBaslik").delay(18e3).animate({opacity:"1"},1e3),$("#negatifTamSayilarIcerik").delay(15e3).animate({opacity:"1"},1e3),$("#sifirIcerik").delay(17e3).animate({opacity:"1"},1e3),$("#pozitifTamSayilarIcerik").delay(19e3).animate({opacity:"1"},1e3),$("#negatifTamSayilarParantez").delay(15e3).animate({opacity:"1"},1e3),$("#pozitifTamSayilarParantez").delay(19e3).animate({opacity:"1"},1e3),$("#negatifTamSayilarIcerik").delay(5e3).animate({bottom:"40px",right:"240px"},1e3),$("#sifirIcerik").delay(3e3).animate({bottom:"40px",right:"222px"},1e3),$("#pozitifTamSayilarIcerik").delay(1e3).animate({bottom:"40px",right:"95px"},1e3),$("#tamSayiKumesi").delay(22e3).animate({opacity:"1"},500),$("#negatifTamSayilarBaslik").delay(8e3).animate({opacity:"0"},1e3),$("#sifirBaslik").delay(6e3).animate({opacity:"0"},1e3),$("#pozitifTamSayilarBaslik").delay(4e3).animate({opacity:"0"},1e3),$("#negatifTamSayilarParantez").delay(6e3).animate({opacity:"0"},1e3),$("#pozitifTamSayilarParantez").delay(2e3).animate({opacity:"0"},1e3),$("#negatifTamSayilarIcerik").delay(1e3).animate({bottom:"90px"},1e3),$("#sifirIcerik").delay(1e3).animate({bottom:"90px"},1e3),$("#pozitifTamSayilarIcerik").delay(1e3).animate({bottom:"90px"},1e3),$("#tamSayiKumesi").delay(500).animate({bottom:"90px"},1e3)}};
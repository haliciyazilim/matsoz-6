function __Styles(){}function dikdortgenCiz(){var e=1;while(e%2!=0)e=Math.floor(Math.random()*24+1);var t=1;while(t%2!=0)t=Math.floor(Math.random()*19+1);var n=(300-t*10)/2,r=new Point(50,n),i=new Size(e*10,t*10),s=new Rectangle(r,i),o=new Path.Rectangle(s);o.strokeColor="black",console.log("a: "+e+", b: "+t);var u=e*10/2+35,a=n+t*10+20,f=new PointText(u,a);f.content=e+" cm",f.fillColor="black";var l=e*10+60,c=n+t*10/2,h=new PointText(l,c);h.content=t+" cm",h.fillColor="black";var p="Dikdörtgenin uzun kenarının kısa kenarına oranı",d=[p,e,t];return console.log(d),d}function ucgenCiz(){var e=1;while(e%2!=0)e=Math.floor(Math.random()*15+10);var t=1;while(t%2!=0)t=Math.floor(Math.random()*5+5);e*=10,t*=10;var n=1;while(n%2!=0)n=Math.floor(Math.random()*10+5);var r=1;while(r%2!=0)r=Math.floor(Math.random()*5+15);n*=10,r*=10;var i=1,s=30-n/10;while(i%2!=0)i=Math.floor(Math.random()*5+25);console.log("bX: "+n/10+", "+"cD: "+s+", cX: "+i);var o=1;while(o%2!=0)o=Math.floor(Math.random()*5+15);i*=10,o*=10,console.log("bX: "+n/10+", "+"cD: "+s+", cX: "+i);var u=new Point(e,t),a=new Point(n,r),f=new Point(i,o);ucgen=new Path.Triangle(u,a,f),ucgen.strokeColor="black",ucgen.strokeWidth=1;var l=a.getDistance(f),c=u.projectToLine(a,f),h=new Path.Line(u,c);h.strokeColor="red";var p=u.getDistance(c);l=Math.floor(l/10),l=l%2==0?l:l+1,p=Math.floor(p/10),p=p%2==0?p:p+1;var d=new PointText(e+10,t+p*5);d.content=p+" cm",d.fillColor="red";var v=new PointText((i-n)/2+n,o+30);v.content=l+" cm",v.fillColor="black",console.log("taban: "+l+" ,yukseklik: "+p);var m="Üçgenin tabanının yüksekliğine oranı",g=[m,l,p];return console.log(g),g}function paralelKenarCiz(){var e=Math.floor(Math.random()*10)<=5?40:-40,t=200,n=1;while(n%2!=0)n=Math.floor(Math.random()*15+5);var r=1;while(r%2!=0)r=Math.floor(Math.random()*10+5);n*=10,r*=10;var i=150-r/2+20,s=150+r/2+20,o=new Path.Line(new Point(i,200),new Point(s,200));o.strokeColor="black";var u=s+e,a=t-n,f=i+e,l=t-n,c=new Path.Line(new Point(i,t),new Point(f,l));c.strokeColor="black";var h=new Path.Line(new Point(s,t),new Point(u,a));h.strokeColor="black";var p=new Path.Line(new Point(u,a),new Point(f,l));p.strokeColor="black";var d="",v=new Path.Line(new Point(u,a),new Point(u,t));v.strokeColor="red";if(e>0){var m=new Path.Line(new Point(s,t),new Point(u,t));m.strokeColor="black",m.dashArray=[3,2],d=new PointText(s+50,t-n/2)}else d=new PointText(s,t-n/2);d.content=n/10+" cm",d.fillColor="red";var g=new PointText(i+(s-i)/2-20,t+20);g.content=r/10+" cm",g.fillColor="black",console.log("taban: "+r+", yükseklik: "+n+", aX: "+i),console.log("taban: "+r+" ,yukseklik: "+n);var y="Paralel kenarın tabanının yüksekliğine oranı",b=[y,r/10,n/10];return console.log(b),b}function yamukCiz(){var e=1;while(e%2!=0)e=Math.floor(Math.random()*20+10);var t=1;while(t%2!=0)t=Math.floor(Math.random()*15+5);e*=10,t*=10,console.log("taban: "+e+", yukseklik: "+t);var n=(200-t)/2+t+10,r=(300-e)/2+50,i=Math.floor(Math.random()*8)*10;console.log(e+", "+t+", "+r+", "+n);var s=r+e,o=n,u=u==0?Math.floor(Math.random()*5+3)*10:Math.floor(Math.random()*5)*10,a=new Path.Line(new Point(r,n),new Point(s,o));a.strokeWidth=1,a.strokeColor="black";var f=r+i,l=n-t;egimliNokta=new Point(f,l),aD=new Path.Line(new Point(r,n),egimliNokta),aD.strokeColor="black",aD.strokeWidth=1;var c=Math.floor(Math.random()*10),h=s-u,p=l,d=new Path.Line(new Point(s,o),new Point(h,p));d.strokeColor="black",d.strokeWidth=1;var v=new Path.Line(new Point(f,l),new Point(h,p));v.strokeColor="black",v.strokeWidth=1;var m="",g=new Path.Line(new Point(f,l),new Point(f,n));g.strokeColor="red",m=new PointText(f+20,n-t/2),m.content=t/10+" cm",m.fillColor="red";var y=new PointText(r+(s-r)/2-20,n+20);y.content=e/10+" cm",y.fillColor="black",console.log("taban: "+e+" ,yukseklik: "+t);var b="Yamuğun tabanının yüksekliğine oranı",w=[b,e/10,t/10];return console.log(w),w}var Animation={images:[{id:"car",src:"/assets/animations/oran/car.jpg"},{id:"kadran",src:"/assets/animations/oran/kadran.png"},{id:"akrep",src:"/assets/animations/oran/akrep.png"},{id:"yelkovan",src:"/assets/animations/oran/yelkovan.png"}],init:function(e){Animation.container=e;var t=20,n=360;$(e).append('<img src="/assets/animations/oran/car.jpg" id="car_image"></img>'),$("#car_image").css("position","absolute").css("left",t+"px").css("top","110px").css("z-index","1"),$(e).append("<div id='yol'>"),$("#yol").css({position:"absolute",width:"466px",height:"20px",left:t+"px",top:"152px",borderTop:"solid 1px black",textAlign:"center",lineHeight:2,fontSize:"20px"}).html("130 km"),$(e).append("<div id='aciklama'>"),$("#aciklama").css({position:"absolute",width:"235px",height:"50px",right:"20px",top:"35px",textAlign:"center",fontSize:"20px",opacity:0}).html("Otomobilin gittiği yolun geçen süreye oranı"),$(e).append("<div id='islem'><div id='kesir'></div><div id='sonuc'></div></div>"),$("#islem").css({position:"absolute",width:"250px",height:"80px",right:"10px",bottom:"35px",textAlign:"center",fontSize:"20px"}),$("#kesir").css({width:"50%",height:"100%","float":"left",opacity:0}),$("#kesir").append("<div id='pay' class='kesir'></div><div id='payda' class='kesir'></div>"),$(".kesir").css({width:"100%",height:"50%"}),$("#pay").css({lineHeight:"55px"}).html("130 km"),$("#payda").css({borderTop:"black 2px solid",lineHeight:"35px"}).html("2 saat"),$("#sonuc").css({marginTop:"30px",opacity:0}).html("= 65 km/saat");var r={zemin:"/assets/animations/oran/zemin.jpg",can:"/assets/animations/oran/can.png",mehmet:"/assets/animations/oran/mehmet.png"};$(e).append("<img id='zemin' src='"+r.zemin+"'>"),$(e).append("<img id='can' src='"+r.can+"'>"),$(e).append("<img id='mehmet' src='"+r.mehmet+"'>"),$("#zemin").css({width:"250px",height:"170px",position:"absolute",left:"75px",top:"20px",opacity:0}),$("#can").css({width:"250px",height:"170px",position:"absolute",left:"75px",top:"20px",opacity:0}),$("#mehmet").css({width:"250px",height:"170px",position:"absolute",left:"76px",top:"23px",opacity:0}),kadran=new Raster("kadran"),kadran.position=new Point(192,48),yelkovan=new Raster("yelkovan"),yelkovan.position=new Point(192,48),akrep=new Raster("akrep"),akrep.position=new Point(192,48),clockHelper=new AnimationHelper({yelkovanAngle:0,akrepAngle:0,x:20}),akrep.lastTransformation=akrep.matrix,yelkovan.lastTransformation=yelkovan.matrix,clockHelper.animate({style:{yelkovanAngle:720,akrepAngle:60,x:n},delay:2e3,duration:8e3,update:function(){var e=new Matrix;e.rotate(this.akrepAngle,192,48),e.concatenate(akrep.lastTransformation),akrep.setMatrix(e),e=new Matrix,e.rotate(this.yelkovanAngle,192,48),e.concatenate(yelkovan.lastTransformation),yelkovan.setMatrix(e),$("#car_image").css({left:this.x})},callback:function(){$("#aciklama").delay(500).animate({opacity:1},1e3),$("#kesir").delay(2500).animate({opacity:1},1e3),$("#sonuc").delay(4500).animate({opacity:1},1e3),$("#aciklama").delay(5e3).animate({opacity:0},1e3),$("#kesir").delay(3e3).animate({opacity:0},1e3),$("#sonuc").delay(1e3).animate({opacity:0},1e3),$("#car_image, #yol").delay(6500).animate({opacity:0},1e3);var t=new AnimationHelper({opacity:1});t.animate({style:{opacity:0},delay:6500,duration:1e3,update:function(){kadran.opacity=this.opacity,yelkovan.opacity=this.opacity,akrep.opacity=this.opacity},callback:function(){$("#zemin").delay(500).animate({opacity:1},1e3),$("#can").delay(1500).animate({opacity:1},1e3),$("#mehmet").delay(2500).animate({opacity:1},1e3),$("#pay").html("145 cm"),$("#payda").html("152 cm"),$("#sonuc").html(" &nbsp;= ").css({textAlign:"left"}),$("#islem").css({width:"158px",right:"55px"}),$(e).append("<div id='sonucS'><div id='payS' class='kesir'></div><div id='paydaS' class='kesir'></div></div>"),$(".kesir").css({width:"100%",height:"50%"}),$("#payS").css({lineHeight:"75px",fontSize:"20px"}).html("145"),$("#paydaS").css({borderTop:"black 2px solid",lineHeight:"35px",fontSize:"20px"}).html("152"),$("#sonucS").css({width:"40px",height:"100px",position:"absolute",right:"65px",top:"74px",opacity:0}),$("#aciklama").html("Can'ın boyunun Mehmet'in boyuna oranı").delay(3e3).animate({opacity:1},1e3),$("#kesir").delay(4e3).animate({opacity:1},1e3),$("#sonuc").delay(5e3).animate({opacity:1},1e3),$("#sonucS").delay(5500).animate({opacity:1},1e3)}})}}),Main.animationFinished(15500)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen şekle göre istenen oranını bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"10px",right:"65px"}),Interaction.appendStatus({bottom:"10px",right:"200px"}),$(e).append("<div id='soru'>"),$("#soru").css({position:"absolute",width:"235px",height:"50px",right:"0px",top:"35px",textAlign:"center",fontSize:"20px",opacity:1}),$(e).append("<div id='dogruCevap'><div id='kesirD'></div><div id='sonucD'></div></div>"),$("#dogruCevap").css({position:"absolute",width:"235px",height:"50px",right:"-33px",top:"185px",textAlign:"center",fontSize:"20px",opacity:1}),$("#kesirD").css({width:"30%",height:"100%","float":"left",opacity:0}),$("#kesirD").append("<div id='payD' class='kesir'></div><div id='paydaD' class='kesir'></div>"),$(".kesir").css({width:"100%",height:"50%"}),$("#payD").css({lineHeight:"30px"}).html("130 km"),$("#paydaD").css({borderTop:"black 2px solid",lineHeight:"30px"}).html("2 saat"),$("#sonucD").css({marginTop:"16px",textAlign:"left",opacity:0}).html("&nbsp; = "),Interaction.appendInput({position:"absolute",width:"70px",height:"50px",right:"80px",top:"120px",textAlign:"center",fontSize:"20px",opacity:1},!0,!0),Interaction.input.id="girdi",$("#girdi").attr("maxLength","5"),Interaction.soruNo=Util.getShuffledArray(4),Interaction.sira=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){$("#kesirD, #sonucD").css("opacity","0"),Main.interactionProject.activeLayer.removeChildren(),Interaction.siradakiSoru=Interaction.soruNo[Interaction.sira];switch(Interaction.siradakiSoru){case 0:Interaction.soru=dikdortgenCiz();break;case 1:Interaction.soru=ucgenCiz();break;case 2:Interaction.soru=paralelKenarCiz();break;case 3:Interaction.soru=yamukCiz()}Interaction.sira++,Interaction.sira==4&&(Interaction.sira=0),$("#soru").html(Interaction.soru[0])},preCheck:function(){},isAnswerCorrect:function(e){var t=Interaction.soru[1],n=Interaction.soru[2],r=0;Interaction.siradakiSoru==0?t>n?(r=t/n,$("#payD").html(t+" cm"),$("#paydaD").html(n+" cm")):(r=n/t,$("#payD").html(n+" cm"),$("#paydaD").html(t+" cm")):(r=t/n,$("#payD").html(t+" cm"),$("#paydaD").html(n+" cm")),console.log(e);var i=e.split(",");virguldenSonra=0,i[1]?(Interaction.girilenDeger=parseFloat(i[0]+"."+i[1]),Interaction.virguldenSonra=i[1].length,Interaction.sonuc=r.toFixed(virguldenSonra)):(Interaction.girilenDeger=parseInt(i[0],10),Interaction.sonuc=r);if(Interaction.girilenDeger==Interaction.sonuc)return!0},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Cevabın yanlış; doğrusu yukarıdadır.",!1),console.log(Interaction.sonuc);var e=Interaction.sonuc.toString().split(".");if(e[1])var t=e.length;else var t=0;console.log(Util.format(Interaction.sonuc,{places:t})),$("#sonucD").html("&nbsp; = "+Util.format(Interaction.sonuc,{places:t})),$("#kesirD").animate({opacity:1},1e3),$("#sonucD").delay(500).animate({opacity:1},1e3)}};
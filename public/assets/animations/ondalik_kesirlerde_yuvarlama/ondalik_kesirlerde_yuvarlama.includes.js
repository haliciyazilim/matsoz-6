function __Styles(){}sayiOlustur=function(e){var t=0,n=0;while(n==0){t=Math.random()*10;var r=t.toFixed(2),i=r.toString().split(".");i[1]<95&&(n=1)}var s=0,o="",u=0,a=e;switch(a){case 0:t=t.toFixed(2),s=2,o="onda birler",u=2;break;case 1:t=t.toFixed(3),s=3,o="onda birler",u=3;break;case 2:t=t.toFixed(3),s=3,o="yüzde birler",u=2;var f=t.toString().charAt(t.toString().length-2);f==9&&(t=parseFloat(t)-.01,console.log("girdim: "+t),t=t.toFixed(3),console.log("girdim: "+t))}var l=[t,o,s,u];return l};var Animation={images:[],init:function(e){Animation.container=e,$(e).append("<div id='baslik'>"),$("#baslik").css({position:"absolute",width:"100%",top:"25px",left:"0px",right:"0px",margin:"auto",textAlign:"center",fontSize:"20px",opacity:1}).html("1,28 ondalık kesrini onda birler basamağına göre yuvarlama:"),$(e).append("<div id='cumle'>"),$("#cumle").css({position:"absolute",width:"100%",top:"135px",left:"0px",right:"0px",margin:"auto",textAlign:"center",fontSize:"18px",opacity:0}).html("1,28 ondalık kesri, 8 > 5 olduğu için 1,30 yani kısaca 1,3 ondalık kesrine yuvarlanır."),$(e).append("<div id='sonNokta'>"),$("#sonNokta").css({position:"absolute",width:"100%",top:"165px",left:"0px",right:"0px",margin:"auto",textAlign:"center",fontSize:"20px",opacity:0,color:"red"}).html("1,28 <img src='/assets/animations/ondalik_kesirlerde_yuvarlama/sag_ok.png'  /> 1,3"),$("#sonNokta img").css({display:"inline-block"});var t=90,n=16;Animation.numericalAxis=new Group;var r=new Group,i=new Path.OneSidedArrow(new Point(40,t),new Point(717,t),10,30),s=new Path.OneSidedArrow(new Point(717,t),new Point(718,t),10,30);i.rotate(180),r.addChild(i),r.addChild(s),r.strokeWidth=2;var o=677/15;Interaction.smallDots=new Group,Interaction.sayiTextGrup=new Group;for(var u=0;u<14;u++){var a=1.18+u/100;if(u==3||u==10||u==12){var f=new PointText(new Point(17+o*(u+1),t-20));f.fontSize=16,f.strokeWidth=2,f.strokeColor=new RgbColor(0,0,0);var l=new Path.Circle(new Point(40+o*(u+1),t),5);l.fillColor=new RgbColor(0,0,0)}else{var f=new PointText(new Point(25+o*(u+1),t-20));f.fontSize=12,f.fillColor=new RgbColor(0,0,0);var l=new Path.Circle(new Point(40+o*(u+1),t),3);l.fillColor=new RgbColor(0,0,0)}f.content=Util.format(a,{places:2}),Interaction.sayiTextGrup.addChild(f),Interaction.smallDots.addChild(l)}animationHelper=new AnimationHelper({fillColor:new RgbColor(0,0,0),strokeColor:new RgbColor(0,0,0)}),animationHelper.animate({style:{fillColor:new RgbColor(1,0,0),strokeColor:new RgbColor(1,0,0)},delay:1e3,duration:3e3,update:function(){Interaction.sayiTextGrup.children[10].fillColor=this.fillColor,Interaction.sayiTextGrup.children[10].strokeColor=this.strokeColor,Interaction.smallDots.children[10].fillColor=this.fillColor}}),sagaOkHelper=new AnimationHelper({okPosition:o*12,opacity:0}),Interaction.sagaOk=new Path.OneSidedArrow(new Point(o*12,t+20),new Point(sagaOkHelper.okPosition+6,t+20),10,30),Interaction.sagaOk.strokeColor="blue",Interaction.sagaOk.fillColor="blue",Interaction.sagaOk.opacity=0,sagaOkHelper.animate({style:{okPosition:o*14-5,opacity:1},delay:4e3,duration:3e3,update:function(){Interaction.sagaOk.remove(),Interaction.sagaOk=new Path.OneSidedArrow(new Point(o*12,t+20),new Point(this.okPosition,t+20),10,30),Interaction.sagaOk.strokeColor="blue",Interaction.sagaOk.fillColor="blue",Interaction.sagaOk.opacity=this.opacity*10}}),solaOkHelper=new AnimationHelper({okPosition:o*12-10,opacity:0}),Interaction.solaOk=new Path.OneSidedArrow(new Point(o*12-10,t+20),new Point(solaOkHelper.okPosition-11,t+20),10,30),Interaction.solaOk.strokeColor="blue",Interaction.solaOk.fillColor="blue",Interaction.solaOk.opacity=0,solaOkHelper.animate({style:{okPosition:o*5-5,opacity:1},delay:4e3,duration:4500,update:function(){Interaction.solaOk.remove(),Interaction.solaOk=new Path.OneSidedArrow(new Point(o*12-10,t+20),new Point(this.okPosition,t+20),10,30),Interaction.solaOk.strokeColor="blue",Interaction.SolaOk.fillColor="blue",Interaction.solaOk.opacity=this.opacity*10},callback:function(){$("#cumle").animate({opacity:1},1e3),$("#sonNokta").delay(1e3).animate({opacity:1},1e3)}}),Main.animationFinished(12e3)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Interaction.paper={width:$(e).width(),height:$(e).height()},$(e).append("<div id='soru'>"),$("#soru").css({position:"absolute",width:"100px",height:"50px",left:"150px",top:"100px",fontSize:"20px",lineHeight:"55px",textAlign:"right",opacity:1}),$(e).append("<div id='cevap'><div id='sayi'>33,67</div><div id='olcum'>7>5</div><div id='sonuc'></div></div>"),$("#cevap").css({position:"absolute",width:"600px",height:"50px",left:"0",right:"0",margin:"auto",top:"180px",textAlign:"center",fontSize:"20px",opacity:1}),$("#cevap div").css({"float":"left",width:"200px"}),$("#sayi, #sonuc, #olcum").css("opacity","0"),Interaction.appendInput({position:"absolute",width:"70px",height:"50px",right:"0",top:"100px",left:"0",margin:"auto",textAlign:"center",fontSize:"20px",opacity:1},!0,!1),Interaction.input.id="girdi",$("#girdi").attr("maxLength","5"),Interaction.appendButton({bottom:"40px",right:"40px"}),Interaction.appendStatus({bottom:"50px",right:"150px"}),siraArray=Util.getShuffledArray(3),sira=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){var t=siraArray[sira];Interaction.soru=sayiOlustur(t);var n=Interaction.soru[1];Interaction.virguldenSonraBasamak=Interaction.soru[2],Interaction.gelenSayi=Interaction.soru[0],Main.setObjective("Yandaki ondalık kesri <b>"+n+"</b> basamağına göre yuvarlayınız ve kontrol ediniz."),$("#soru").html(Util.format(Interaction.gelenSayi,{places:Interaction.virguldenSonraBasamak})+" = "),$("#sayi, #sonuc, #olcum").animate({opacity:0},1e3),sira++,sira==3&&(sira=0)},preCheck:function(){},isAnswerCorrect:function(e){istenen=Interaction.soru[3],sonKisim=Interaction.gelenSayi.toString().charAt(Interaction.gelenSayi.length-(istenen-1)),sonKisim<5?Interaction.dogruCevap=Interaction.gelenSayi.toString().substr(0,Interaction.gelenSayi.length-(istenen-1)):(degisecekRakam=Interaction.gelenSayi.toString().charAt(Interaction.gelenSayi.length-istenen),console.log("değişecek rakam: "+degisecekRakam),degisenRakam=parseInt(degisecekRakam,10)+1,console.log("değişen rakam: "+degisecekRakam),Interaction.dogruCevap=Interaction.gelenSayi.toString().substr(0,Interaction.gelenSayi.length-istenen),Interaction.dogruCevap=Interaction.dogruCevap+degisenRakam);var t=e.split(",");t.length==2?Interaction.gelenCevap=t[0]+"."+t[1]:Interaction.gelenCevap=t[0];if(parseFloat(Interaction.dogruCevap)==parseFloat(Interaction.gelenCevap))return!0},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Cevabın yanlış; doğrusu yukarıdadır.",!1),Interaction.pause();var e=Util.format(Interaction.gelenSayi,{places:Interaction.virguldenSonraBasamak}),t=Util.format(Interaction.dogruCevap,{places:Interaction.virguldenSonraBasamak-1});istenen==3&&Interaction.virguldenSonraBasamak==3&&(t=Util.format(Interaction.dogruCevap,{places:1})),sonKisim<5?$("#olcum").html(sonKisim+" < 5"):sonKisim==5?$("#olcum").html(sonKisim+" ≥ 5"):$("#olcum").html(sonKisim+" > 5"),$("#sayi").html(e),$("#sonuc").html(e+" <img src='/assets/animations/ondalik_kesirlerde_yuvarlama/sag_ok.png'  /> "+t),$("#cevap img").css({display:"inline-block"}),$("#sayi, #sonuc, #olcum").animate({opacity:1},1e3,function(){Interaction.resume()})}};
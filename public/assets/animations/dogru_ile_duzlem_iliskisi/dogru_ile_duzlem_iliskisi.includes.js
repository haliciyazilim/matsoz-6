function __Styles(){surfaceStyle={fillColor:"f2c885",strokeWidth:2,opacity:.8},surfaceStyleLine={strokeColor:"#8b5400",strokeWidth:2},textStyle={fillColor:"black",opacity:0},noktaStyle={strokeColor:"#8b5400",strokeWidth:5},circleStyle={strokeColor:"#8b5400",fillColor:"#8b5400"},dikmeStyle={strokeColor:"#8b5400",fillColor:"#8b5400"},dogruStyle={strokeColor:new RgbColor(1,0,0,0),strokeWidth:20},seciliStyle={strokeColor:new RgbColor(0,0,0,.5),strokeWidth:4}}dogrular=function(){function s(e){console.log("onMouseDown: "),console.log(e.point),console.log("onMouseDown: if**********************");if((navigator.platform=="Linux armv6l"||navigator.platform=="Linux armv7l")&&Interaction.basilanNokta.x==e.point.x&&Interaction.basilanNokta.y==e.point.y)return;Interaction.basilanNokta.x=e.point.x,Interaction.basilanNokta.y=e.point.y,console.log("qqqqqqqqonMouseDown:2 "+Interaction.basilanNokta.x+", "+Interaction.basilanNokta.y);var t=project.hitTest(e.point,r);if(t)if(e.item.class=="paralel"||e.item.class=="kesişen")if(e.item.strokeWidth==20&dogru==e.item.class)console.log("IF: "+e.item.name+","+e.item.opacity),e.item.style=seciliStyle,console.log(e.item.name),console.log("Class"+e.item.class),Interaction.seciliId.push(e.item),Interaction.seciliClass.push(e.item.class),console.log(Interaction.seciliId),console.log("seçili class"+Interaction.seciliClass),sayac--,$("#sayac").html(sayac),Interaction.setStatus("",!1),sayac==0&&Interaction.__checkAnswer();else if(e.item.strokeWidth==4&dogru==e.item.class){console.log("IF ELSE: "+e.item.name+","+e.item.opacity),e.item.style=dogruStyle,console.log(e.item.name),console.log(e.item.class);var n=Interaction.seciliId.indexOf(e.item);Interaction.seciliId.splice(n,1),Interaction.seciliClass.splice(n,1),console.log(Interaction.seciliId),console.log(Interaction.seciliClass),sayac++,$("#sayac").html(sayac),Interaction.setStatus("",!1)}else console.log("yanlış"),console.log("ELSE: "+e.item.name+","+e.item.opacity),Interaction.setStatus("Seçtiğiniz doğru parçası yanlış.",!1),yanlisSecim(e.item)}function o(){}function u(e){var t=project.hitTest(e.point,r);t&&t.item&&(e.item?e.item.class=="paralel"||e.item.class=="kesişen"?$(Interaction.container).css("cursor","pointer"):$(Interaction.container).css("cursor","default"):$(Interaction.container).css("cursor","default"))}console.log("********* dorular - common"),dogrularArray=[];var e="kesişen",t="paralel",n=dogru;catiAY=new Point(120,122),catiAX=new Point(168,35),catiA=new Path.Line(catiAX,catiAY),catiA.style=dogruStyle,catiA.class=e,catiA.cati=n,catiA.sari=e,catiA.name="catiA",dogrularArray.push(catiA),catiBY=new Point(318,35),catiBX=new Point(166,35),catiB=new Path.Line(catiBX,catiBY),catiB.style=dogruStyle,catiB.class=t,catiB.cati=n,catiB.sari=e,catiB.name="catiB",dogrularArray.push(catiB),catiCY=new Point(305,122),catiCX=new Point(318,35),catiC=new Path.Line(catiCX,catiCY),catiC.style=dogruStyle,catiC.class=e,catiC.cati=n,catiC.sari=e,catiC.name="catiC",dogrularArray.push(catiC),catiDY=new Point(305,122),catiDX=new Point(120,122),catiD=new Path.Line(catiDX,catiDY),catiD.style=dogruStyle,catiD.class=t,catiD.cati=n,catiD.sari=e,catiD.name="catiD",dogrularArray.push(catiD),arkaCatiY=new Point(317,35),arkaCatiX=new Point(402,98),arkaCati=new Path.Line(arkaCatiX,arkaCatiY),arkaCati.style=dogruStyle,arkaCati.class=e,arkaCati.cati=e,arkaCati.sari=e,arkaCati.name="arkaCati",dogrularArray.push(arkaCati),maviDuvarSolY=new Point(122,122),maviDuvarSolX=new Point(122,213),maviDuvarSol=new Path.Line(maviDuvarSolX,maviDuvarSolY),maviDuvarSol.style=dogruStyle,maviDuvarSol.class=n,maviDuvarSol.cati=e,maviDuvarSol.sari=t,maviDuvarSol.name="maviDuvarSol",dogrularArray.push(maviDuvarSol),maviDuvarSagY=new Point(123,211),maviDuvarSagX=new Point(307,211),maviDuvarSag=new Path.Line(maviDuvarSagX,maviDuvarSagY),maviDuvarSag.style=dogruStyle,maviDuvarSag.class=n,maviDuvarSag.cati=t,maviDuvarSag.sari=e,maviDuvarSag.name="maviDuvarSag",dogrularArray.push(maviDuvarSag),agacY=new Point(61,235),agacX=new Point(61,152),agac=new Path.Line(agacX,agacY),agac.style=dogruStyle,agac.class=t,agac.cati=e,agac.sari=t,agac.name="agac",dogrularArray.push(agac),merdivenSolY=new Point(150,139),merdivenSolX=new Point(117,240),merdivenSol=new Path.Line(merdivenSolX,merdivenSolY),merdivenSol.style=dogruStyle,merdivenSol.class=e,merdivenSol.cati=e,merdivenSol.sari=t,merdivenSol.name="merdivenSol",dogrularArray.push(merdivenSol),merdivenSagY=new Point(175,139),merdivenSagX=new Point(142,240),merdivenSag=new Path.Line(merdivenSagX,merdivenSagY),merdivenSag.style=dogruStyle,merdivenSag.class=e,merdivenSag.cati=e,merdivenSag.sari=t,merdivenSag.name="merdivenSag",dogrularArray.push(merdivenSag),basamak1Y=new Point(144,149),basamak1X=new Point(170,149),basamak1=new Path.Line(basamak1X,basamak1Y),basamak1.style=dogruStyle,basamak1.class=t,basamak1.cati=t,basamak1.sari=e,basamak1.name="basamak1",dogrularArray.push(basamak1),basamak2Y=new Point(139,172),basamak2X=new Point(163,172),basamak2=new Path.Line(basamak2X,basamak2Y),basamak2.style=dogruStyle,basamak2.class=t,basamak2.cati=t,basamak2.sari=e,basamak2.name="basamak2",dogrularArray.push(basamak2),basamak3Y=new Point(130,198),basamak3X=new Point(155,198),basamak3=new Path.Line(basamak3X,basamak3Y),basamak3.style=dogruStyle,basamak3.class=t,basamak3.cati=t,basamak3.sari=e,basamak3.name="basamak3",dogrularArray.push(basamak3),basamak4Y=new Point(123,222),basamak4X=new Point(146,222),basamak4=new Path.Line(basamak4X,basamak4Y),basamak4.style=dogruStyle,basamak4.class=t,basamak4.cati=t,basamak4.sari=e,basamak4.name="basamak4",dogrularArray.push(basamak4),pencere1AY=new Point(206,138),pencere1AX=new Point(290,138),pencere1A=new Path.Line(pencere1AX,pencere1AY),pencere1A.style=dogruStyle,pencere1A.class=n,pencere1A.cati=t,pencere1A.sari=e,pencere1A.name="pencere1A",dogrularArray.push(pencere1A),pencere1BY=new Point(289,138),pencere1BX=new Point(289,197),pencere1B=new Path.Line(pencere1BX,pencere1BY),pencere1B.style=dogruStyle,pencere1B.class=n,pencere1B.cati=e,pencere1B.sari=t,pencere1B.name="pencere1B",dogrularArray.push(pencere1B),pencere1IcY=new Point(247,140),pencere1IcX=new Point(247,197),pencere1Ic=new Path.Line(pencere1IcX,pencere1IcY),pencere1Ic.style=dogruStyle,pencere1Ic.class=n,pencere1Ic.cati=e,pencere1Ic.sari=t,pencere1Ic.name="pencere1Ic",dogrularArray.push(pencere1Ic),pencere1Ic2Y=new Point(206,169),pencere1Ic2X=new Point(290,169),pencere1Ic2=new Path.Line(pencere1Ic2X,pencere1Ic2Y),pencere1Ic2.style=dogruStyle,pencere1Ic2.class=n,pencere1Ic2.cati=t,pencere1Ic2.sari=e,pencere1Ic2.name="pencere1Ic2",dogrularArray.push(pencere1Ic2),pencere1CY=new Point(206,198),pencere1CX=new Point(290,198),pencere1C=new Path.Line(pencere1CX,pencere1CY),pencere1C.style=dogruStyle,pencere1C.class=n,pencere1C.name="pencere1C",pencere1C.cati=t,pencere1C.sari=e,dogrularArray.push(pencere1C),pencere1DY=new Point(206,138),pencere1DX=new Point(206,197),pencere1D=new Path.Line(pencere1DX,pencere1DY),pencere1D.style=dogruStyle,pencere1D.class=n,pencere1D.cati=e,pencere1D.sari=t,pencere1D.name="pencere1D",dogrularArray.push(pencere1D),pencere3AY=new Point(326,136),pencere3AX=new Point(378,120),pencere3A=new Path.Line(pencere3AX,pencere3AY),pencere3A.style=dogruStyle,pencere3A.class=e,pencere3A.cati=e,pencere3A.sari=n,pencere3A.name="pencere3A",dogrularArray.push(pencere3A),pencere3BY=new Point(378,120),pencere3BX=new Point(378,172),pencere3B=new Path.Line(pencere3BX,pencere3BY),pencere3B.style=dogruStyle,pencere3B.class=t,pencere3B.cati=e,pencere3B.sari=n,pencere3B.name="pencere3B",dogrularArray.push(pencere3B),pencere3IcY=new Point(326,162),pencere3IcX=new Point(378,147),pencere3Ic=new Path.Line(pencere3IcX,pencere3IcY),pencere3Ic.style=dogruStyle,pencere3Ic.class=e,pencere3Ic.cati=e,pencere3Ic.sari=n,pencere3Ic.name="pencere3Ic",dogrularArray.push(pencere3Ic),pencere3Ic2Y=new Point(353,128),pencere3Ic2X=new Point(353,180),pencere3Ic2=new Path.Line(pencere3Ic2X,pencere3Ic2Y),pencere3Ic2.style=dogruStyle,pencere3Ic2.class=t,pencere3Ic2.cati=e,pencere3Ic2.sari=n,pencere3Ic2.name="pencere3Ic2",dogrularArray.push(pencere3Ic2),pencere3CY=new Point(378,172),pencere3CX=new Point(326,188),pencere3C=new Path.Line(pencere3CX,pencere3CY),pencere3C.style=dogruStyle,pencere3C.class=e,pencere3C.cati=e,pencere3C.sari=n,pencere3C.name="pencere3C",dogrularArray.push(pencere3C),pencere3DY=new Point(326,136),pencere3DX=new Point(326,188),pencere3D=new Path.Line(pencere3DX,pencere3DY),pencere3D.style=dogruStyle,pencere3D.class="paralel",pencere3D.cati=e,pencere3D.sari=n,pencere3D.name="pencere3D",dogrularArray.push(pencere3D),sariDuvarAY=new Point(307,122),sariDuvarAX=new Point(307,213),sariDuvarA=new Path.Line(sariDuvarAX,sariDuvarAY),sariDuvarA.style=dogruStyle,sariDuvarA.class=n,sariDuvarA.cati=e,sariDuvarA.sari=n,sariDuvarA.name="sariDuvarA",dogrularArray.push(sariDuvarA),sariDuvarBY=new Point(304,122),sariDuvarBX=new Point(396,95),sariDuvarB=new Path.Line(sariDuvarBX,sariDuvarBY),sariDuvarB.style=dogruStyle,sariDuvarB.class=e,sariDuvarB.cati=e,sariDuvarB.sari=n,sariDuvarB.name="sariDuvarB",dogrularArray.push(sariDuvarB),sariDuvarCY=new Point(396,95),sariDuvarCX=new Point(396,183),sariDuvarC=new Path.Line(sariDuvarCX,sariDuvarCY),sariDuvarC.style=dogruStyle,sariDuvarC.class=t,sariDuvarC.cati=e,sariDuvarC.sari=n,sariDuvarC.name="sariDuvarC",dogrularArray.push(sariDuvarC),sariDuvarDY=new Point(304,211),sariDuvarDX=new Point(396,181),sariDuvarD=new Path.Line(sariDuvarDX,sariDuvarDY),sariDuvarD.style=dogruStyle,sariDuvarD.class=e,sariDuvarD.cati=e,sariDuvarD.sari=n,sariDuvarD.name="sariDuvarD",dogrularArray.push(sariDuvarD),lambaY=new Point(423,142),lambaX=new Point(423,232),lamba=new Path.Line(lambaX,lambaY),lamba.style=dogruStyle,lamba.class=t,lamba.cati=e,lamba.sari=t,lamba.name="lamba",dogrularArray.push(lamba),paralel=0,kesisen=0,ikisi=0;switch(soruDuzlem){case 0:break;case 1:for(i=0;i<dogrularArray.length;i++)dogrularArray[i].class=dogrularArray[i].cati;break;case 2:for(i=0;i<dogrularArray.length;i++)dogrularArray[i].class=dogrularArray[i].sari}for(i=0;i<dogrularArray.length;i++)dogrularArray[i].class=="paralel"&&paralel++,dogrularArray[i].class=="kesişen"&&kesisen++;Interaction.tool=new Tool,Interaction.tool.distanceThreshold=200,Interaction.tool.onMouseDown=s,Interaction.tool.onMouseUp=o,console.log("qqqqqqqqqqqqqqqqq on mouse down qqqqqqqqqqqqqqqqqqqqqqq"),(navigator.platform.indexOf("Win")>-1||navigator.platform.indexOf("Mac")>-1||navigator.platform.indexOf("Linux")>-1)&&navigator.platform!="Linux armv6l"&&navigator.platform!="Linux armv7l"&&(Interaction.tool.onMouseMove=u);var r={segments:!0,stroke:!0,fill:!0,tolerance:30};Interaction.seciliId=[],Interaction.seciliClass=[],sayac=dogru=="paralel"?paralel:kesisen,console.log("SAYAÇ: "+sayac),Interaction.basilanNokta={x:0,y:0}},yanlisSecim=function(e){bekleme=1e3,islem=500,e.strokeColor="red",e.strokeWidth=10,e.animate({style:{strokeColor:new RgbColor(1,.5,0,0),strokeWidth:20},delay:bekleme,duration:islem}),$(Interaction.status).delay(bekleme).animate({opacity:0},islem,function(){$(Interaction.status).html("").css("opacity","1")})};var Animation={images:[],init:function(e){function L(){return t[k-1]}function A(e,n,r){r||(r=0),Animation.line&&Animation.line.remove(),Animation.text&&Animation.text.remove(),Animation.text=new PointText(new Point(250,160)),Animation.text.set_style(textStyle),Animation.text.content=t[k-1];var i=Util.project(e,C),s=Util.project(n,C);if(r==1){var o=Util.project(f,C);Animation.line2=new Path.Line(i,o),Animation.line2.set_style(surfaceStyleLine)}if(r==2){var o=Util.project(v,C);Animation.line2=new Path.Line(i,o),Animation.line2.set_style(surfaceStyleLine)}Animation.path=S.project(C),Animation.path.set_style(surfaceStyle),Animation.line=new Path.Line(i,s),Animation.line.set_style(surfaceStyleLine);if(r==1){var l=Util.project(h,C);Animation.nokta=new Path.Circle(l,2),Animation.nokta.set_style(circleStyle)}if(r==2){var l=Util.project(m,C);Animation.nokta=new Path.Circle(l,2),Animation.nokta.set_style(circleStyle);var c=Util.project(g,C),L=Util.project(y,C);Animation.ki1=new Path.Line(c,L),Animation.ki1.set_style(dikmeStyle);var O=Util.project(b,C),M=Util.project(w,C);Animation.ki2=new Path.Line(O,M),Animation.ki2.set_style(dikmeStyle);var _=Util.project(E,C);Animation.kin=new Path.Circle(_,1),Animation.kin.set_style(circleStyle)}Animation.line.animate({style:{opacity:1},duration:1e3,delay:1e3}),Animation.text.position.x=(757-Animation.text.width)/2,Animation.text.animate({style:{opacity:1},duration:1e3,delay:1500}),Animation.animationHelper=new AnimationHelper({rotation:0}),Animation.animationHelper.animate({style:{rotation:Math.PI*2},duration:3e3,delay:N+=1e3,animationType:"easeInEaseOut",init:function(){S.pivotsX[0]=new Point3(0,0,0)},update:function(){if(this.rotation<Math.PI*.9){Animation.line&&Animation.line.remove(),Animation.nokta&&(Animation.nokta.remove(),Animation.line2.remove()),Animation.ki1&&(Animation.ki1.remove(),Animation.ki2.remove(),Animation.kin.remove(),Animation.line2.remove());var t=Util.project(e.getRotatedPointByX(this.rotation),C),i=Util.project(n.getRotatedPointByX(this.rotation),C);if(r==1){var s=Util.project(f.getRotatedPointByX(this.rotation),C);Animation.line2=new Path.Line(t,s),Animation.line2.set_style(surfaceStyleLine)}if(r==2){var s=Util.project(v.getRotatedPointByX(this.rotation),C);Animation.line2=new Path.Line(t,s),Animation.line2.set_style(surfaceStyleLine)}S.rotationsX[0]=this.rotation,Animation.path=S.project(C),Animation.path.set_style(surfaceStyle),Animation.line=new Path.Line(t,i),Animation.line.set_style(surfaceStyleLine);if(r==1){var o=Util.project(h.getRotatedPointByX(this.rotation),C);Animation.nokta=new Path.Circle(o,2),Animation.nokta.set_style(circleStyle)}if(r==2){var o=Util.project(m.getRotatedPointByX(this.rotation),C);Animation.nokta=new Path.Circle(o,2),Animation.nokta.set_style(circleStyle);var u=Util.project(g.getRotatedPointByX(this.rotation),C),a=Util.project(y.getRotatedPointByX(this.rotation),C);Animation.ki1=new Path.Line(u,a),Animation.ki1.set_style(dikmeStyle);var l=Util.project(b.getRotatedPointByX(this.rotation),C),c=Util.project(w.getRotatedPointByX(this.rotation),C);Animation.ki2=new Path.Line(l,c),Animation.ki2.set_style(dikmeStyle);var p=Util.project(E.getRotatedPointByX(this.rotation),C);Animation.kin=new Path.Circle(p,1),Animation.kin.set_style(circleStyle)}}else if(this.rotation>Math.PI*.9&&this.rotation<Math.PI*1.9){Animation.line&&Animation.line.remove(),Animation.nokta&&(Animation.nokta.remove(),Animation.line2.remove()),Animation.ki1&&(Animation.ki1.remove(),Animation.ki2.remove(),Animation.kin.remove(),Animation.line2.remove());var t=Util.project(e.getRotatedPointByX(this.rotation),C),i=Util.project(n.getRotatedPointByX(this.rotation),C);Animation.line=new Path.Line(t,i),Animation.line.set_style(surfaceStyleLine);if(r==2){var u=Util.project(g.getRotatedPointByX(this.rotation),C),a=Util.project(y.getRotatedPointByX(this.rotation),C);Animation.ki1=new Path.Line(u,a),Animation.ki1.set_style(dikmeStyle);var l=Util.project(b.getRotatedPointByX(this.rotation),C),c=Util.project(w.getRotatedPointByX(this.rotation),C);Animation.ki2=new Path.Line(l,c),Animation.ki2.set_style(dikmeStyle);var p=Util.project(E.getRotatedPointByX(this.rotation),C);Animation.kin=new Path.Circle(p,1),Animation.kin.set_style(circleStyle)}S.rotationsX[0]=this.rotation,Animation.path=S.project(C),Animation.path.set_style(surfaceStyle);if(r==1){var s=Util.project(f.getRotatedPointByX(this.rotation),C);Animation.line2=new Path.Line(t,s),Animation.line2.set_style(surfaceStyleLine)}if(r==2){var s=Util.project(v.getRotatedPointByX(this.rotation),C);Animation.line2=new Path.Line(t,s),Animation.line2.set_style(surfaceStyleLine)}if(r==1){var o=Util.project(h.getRotatedPointByX(this.rotation),C);Animation.nokta=new Path.Circle(o,2),Animation.nokta.set_style(circleStyle)}if(r==2){var o=Util.project(m.getRotatedPointByX(this.rotation),C);Animation.nokta=new Path.Circle(o,2),Animation.nokta.set_style(circleStyle)}}else{Animation.line&&Animation.line.remove(),Animation.nokta&&Animation.nokta.remove(),Animation.line2&&Animation.line2.remove(),Animation.ki1&&(Animation.ki1.remove(),Animation.ki2.remove(),Animation.kin.remove(),Animation.line2.remove());var t=Util.project(e.getRotatedPointByX(this.rotation),C),i=Util.project(n.getRotatedPointByX(this.rotation),C);if(r==1){var s=Util.project(f.getRotatedPointByX(this.rotation),C);Animation.line2=new Path.Line(t,s),Animation.line2.set_style(surfaceStyleLine)}if(r==2){var s=Util.project(v.getRotatedPointByX(this.rotation),C);Animation.line2=new Path.Line(t,s),Animation.line2.set_style(surfaceStyleLine)}S.rotationsX[0]=this.rotation,Animation.path=S.project(C),Animation.path.set_style(surfaceStyle),Animation.line=new Path.Line(t,i),Animation.line.set_style(surfaceStyleLine);if(r==1){var o=Util.project(h.getRotatedPointByX(this.rotation),C);Animation.nokta=new Path.Circle(o,2),Animation.nokta.set_style(circleStyle)}if(r==2){var o=Util.project(m.getRotatedPointByX(this.rotation),C);Animation.nokta=new Path.Circle(o,2),Animation.nokta.set_style(circleStyle);var u=Util.project(g.getRotatedPointByX(this.rotation),C),a=Util.project(y.getRotatedPointByX(this.rotation),C);Animation.ki1=new Path.Line(u,a),Animation.ki1.set_style(dikmeStyle);var l=Util.project(b.getRotatedPointByX(this.rotation),C),c=Util.project(w.getRotatedPointByX(this.rotation),C);Animation.ki2=new Path.Line(l,c),Animation.ki2.set_style(dikmeStyle);var p=Util.project(E.getRotatedPointByX(this.rotation),C);Animation.kin=new Path.Circle(p,1),Animation.kin.set_style(circleStyle)}}},callback:function(){k++,Animation.text.animate({style:{opacity:0},duration:1e3}),Animation.line.animate({style:{opacity:0},duration:1e3,callback:function(){switch(k){case 2:A(u,a,1);break;case 3:A(p,d,2);break;case 4:A(x,T)}}}),Animation.line2&&(Animation.line2.animate({style:{opacity:0},duration:1e3}),Animation.nokta.animate({style:{opacity:0},duration:1e3}))}})}Animation.container=e;var t=["Bir doğru ile bir düzlem paralel olabilir.","Bir doğru ile bir düzlem bir noktada kesişebilir.","Bir doğru ile bir düzlem bir noktada dik kesişebilir.","Bir doğru ile bir düzlemden biri diğerinin üzerinde olabilir."],n=100,r=50,i=30,s=new Point3(-70,-i,-50),o=new Point3(60,-i,15),u=new Point3(15,i,12.5),a=new Point3(60,-i*2,45),f=new Point3(-6,i*2.5,-6),l=new Point3(12,i,12.5),c=new Point3(18,i,12.5),h=new Point3(15,i,12.5),p=new Point3(-10,i,10),d=new Point3(-10,20-i*2,10),v=new Point3(-10,20+i*2,10),m=new Point3(-10,i,10),g=new Point3(0,20,10),y=new Point3(-10,20,10),b=new Point3(0,20,10),w=new Point3(0,30,10),E=new Point3(-5,25,10),S=new Surface([new Point3(-n,i,-r),new Point3(n,i,-r),new Point3(n,i,r),new Point3(-n,i,r)]),x=new Point3(-60,i,30),T=new Point3(40,i,-30),N=0,C=Util.createProjectionMatrixForObjectAt(375,70),k=1;A(s,o)}};Main.animationFinished(28e3);var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){console.log("********* navigator.platform: "+navigator.platform),Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"20px",right:"40px"}),$("input").attr("disabled","disabled"),Interaction.appendStatus({bottom:"30px",right:"150px"});var t=new Image;t.src="/assets/animations/dogru_ile_duzlem_iliskisi/dogru_duzlem_etkilesim.png",t.id="fonResmi",$(e).append(t),$("#fonResmi").css({position:"absolute",left:"0px",right:"0px",top:"0px",margin:"auto",zIndex:"-1"}),$(e).append("<div id='sayacMetinUst'>"),$("#sayacMetinUst").css({position:"absolute",width:"145px",height:"20px",right:"20px",top:"20px",textAlign:"center"}).html("Bulmanız gereken"),$(e).append("<div id='sayac'>"),$("#sayac").css({position:"absolute",width:"145px",height:"20px",right:"20px",top:"40px",fontSize:"20px",textAlign:"center",fontWeight:"bold"}),$(e).append("<div id='sayacMetinAlt'>"),$("#sayacMetinAlt").css({position:"absolute",width:"145px",height:"20px",right:"20px",top:"60px",textAlign:"center"}).html("doğru parçası kaldı."),duzlemArray=["maviDuvar","cati","sariDuvar"],dogruArray=["kesişen","paralel"],dogru="",duzlem="",soruMetin="",soruDuzlemRandomArray=Util.getShuffledArray(3),soruDuzlem=0,Interaction.soru=0,$(e).append("<img src='/assets/animations/dogru_ile_duzlem_iliskisi/btn_gray_cevapgoster.png' id='goster'>"),$("#goster").css({position:"absolute",left:"20px",top:"245px",textAlign:"center",opacity:"1"}),gosterBasilimi=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial++,Main.interactionProject.activeLayer.removeChildren(),$("input").css("opacity","0").attr("disabled","disabled"),soruDuzlem=soruDuzlemRandomArray[Interaction.soru];switch(soruDuzlem){case 0:duzlem="mavi renkli duvarı";break;case 1:duzlem="çatısı";break;case 2:duzlem="sarı renkli duvarı"}Interaction.soru%2==0?dogru=dogruArray[0]:dogru=dogruArray[1],soruMetin="Yandaki resimde evin <b>"+duzlem+"</b> ile <b>"+dogru+"</b> tüm doğru parçalarını bulunuz ve kontrol ediniz.",Main.setObjective(soruMetin),dogrular(),Interaction.soru%2==0?$("#sayac").html(kesisen):$("#sayac").html(paralel),gosterBasilimi=0,$("#goster").click(function(){if(dogru=="paralel"){for(var e=0;e<dogrularArray.length;e++)dogrularArray[e].class=="paralel"&&(dogrularArray[e].strokeColor="red"),dogrularArray[e].strokeWidth=4;console.log("ONFAIL soru paralel");for(var e=0;e<Interaction.seciliId.length;e++)Interaction.seciliId[e].class=="paralel"?Interaction.seciliId[e].strokeColor="green":Interaction.seciliId[e].strokeColor="red",dogrularArray[e].strokeWidth=4}else if(dogru=="kesişen"){for(var e=0;e<dogrularArray.length;e++)dogrularArray[e].class=="kesişen"&&(dogrularArray[e].strokeColor="red"),dogrularArray[e].strokeWidth=4;console.log("ONFAIL soru kesişen");for(var e=0;e<Interaction.seciliId.length;e++)Interaction.seciliId[e].class=="kesişen"?Interaction.seciliId[e].strokeColor="green":Interaction.seciliId[e].strokeColor="red",dogrularArray[e].strokeWidth=4}gosterBasilimi=1,Interaction.__checkAnswer()}),Interaction.soru==2?Interaction.soru=0:Interaction.soru++},preCheck:function(){if(Interaction.seciliId.length==0)return gosterBasilimi==1?!0:(Interaction.setStatus("Lütfen doğruları seçiniz.",!1),!1)},isAnswerCorrect:function(e){return gosterBasilimi==1&&(sayac=0),sayac==0&&gosterBasilimi==0?($("input").css("opacity","1").removeAttr("disabled"),$("#sayac").html("0"),console.log("xxxxxxxxxx onmousedown null"),!0):($("input").css("opacity","1").removeAttr("disabled"),$("#sayac").html("0"),!1)},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Cevaplar yukarıda gösterilmiştir.",!1)}};
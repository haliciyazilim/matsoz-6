function __Styles(){}function ciz(e,t,n,r,i){function h(e,t,n,u){e.delay=2e3,e.surfaces.topSurface.pivotsX[0]=new Point3(0,0,0),e.surfaces.topSurface.rotationsX[0]=Math.PI/2,e.surfaces.bottomSurface.pivotsX[0]=new Point3(0,0,0),e.surfaces.bottomSurface.rotationsX[0]=Math.PI/2,e.surfaces.leftSurface.pivotsX[0]=new Point3(0,0,0),e.surfaces.leftSurface.rotationsX[0]=Math.PI/2,e.surfaces.rightSurface.pivotsX[0]=new Point3(0,0,0),e.surfaces.rightSurface.rotationsX[0]=Math.PI/2,e.surfaces.frontSurface.pivotsX[0]=new Point3(0,0,0),e.surfaces.frontSurface.rotationsX[0]=Math.PI/2,e.surfaces.backSurface.pivotsX[0]=new Point3(0,0,0),e.surfaces.backSurface.rotationsX[0]=Math.PI/2,e.rotateSurfaceX(e.surfaces.topSurface,-Math.PI/2,new Point3(0,0,0),!0),e.rotateSurfaceX(e.surfaces.bottomSurface,-Math.PI/2,new Point3(0,0,0),!0),e.rotateSurfaceX(e.surfaces.leftSurface,-Math.PI/2,new Point3(0,0,0),!0),e.rotateSurfaceX(e.surfaces.rightSurface,-Math.PI/2,new Point3(0,0,0),!0),e.rotateSurfaceX(e.surfaces.frontSurface,-Math.PI/2,new Point3(0,0,0),!0),e.rotateSurfaceX(e.surfaces.backSurface,-Math.PI/2,new Point3(0,0,0),!0);var a=new AnimationHelper({height:0});f&&f.remove();var f=e.project();return Interaction.noktaArray=[],grup=new Group,a.animate({style:{height:n},duration:1e3,delay:3e3,animationType:"easeInEaseOut",update:function(){u?e.init(s,this.height,o,u,t):e.init(s,this.height,o,t),f=e.project()},callback:function(){koordinatBack=e.surfaces.backSurface.get2DPoints(t),koordinatFront=e.surfaces.frontSurface.get2DPoints(t),koordinatLeft=e.surfaces.leftSurface.get2DPoints(t),koordinatRight=e.surfaces.rightSurface.get2DPoints(t),koordinat=[koordinatBack,koordinatFront],renk=["black","yellow","red","green"];var n;for(var s=0;s<koordinat.length;s++)for(var o=0;o<4;o++)n=new Path.Circle(new Point(koordinat[s][o].x,koordinat[s][o].y),5),n.class="nokta",n.myId="nokta"+s+o,n.name="nokta"+s+o,r=="ornek"&&grup.addChild(n),Interaction.noktaArray.push(n);r=="ornek"&&ornekAnim(grup,"Dik kare prizma",0,i)}}),f}var s=100,o=100,u=100,a=180,f=70,l=50,c=.5;t||(t=300),n||(n=120),r||(r=""),i||(i=0),matrix=Util.createProjectionMatrixForObjectAt(100,120),matrix2=Util.createProjectionMatrixForObjectAt(t,n),matrix3=Util.createProjectionMatrixForObjectAt(450,120);switch(e){case"dikKare":shapeDikKarePrizma=new ExpandablePrism(s,0,o,matrix2),h(shapeDikKarePrizma,matrix2,u);break;case"egikKare":shapeEgikKare=new ExpandableSkewedPrism(s,0,o,0,matrix2),h(shapeEgikKare,matrix2,u,c);break;case"dikdortgen":shapeDikdortgenPrizma=new ExpandableRectangularPrism(s,0,o,matrix2),h(shapeDikdortgenPrizma,matrix2,u);break;case"paralelKenar":shapeParalelKenar=new ExpandableParallelogramPrism(s,0,o,matrix2),h(shapeParalelKenar,matrix2,u);break;case"esKenar":shapeEsKenar=new ExpandableEquilateralPrism(s,0,o,matrix2),h(shapeEsKenar,matrix2,u);break;case"ucgen":shapeUcgen=new ExpandableTrianglePrism(s,0,o,matrix2),h(shapeUcgen,matrix2,u)}}function ornekAnim(e,t,n,r){var i=new Point(e.children.nokta01.position.x,e.children.nokta01.position.y),s=new Point(e.children.nokta10.position.x,e.children.nokta10.position.y),o=new Point(e.children.nokta03.position.x,e.children.nokta03.position.y),u=new Point(e.children.nokta12.position.x,e.children.nokta12.position.y),a=new AnimationHelper({opacity:0});cizgi=new Path.Line(i,s),cizgi.strokeColor="red",cizgi.opacity=0,cizgi2=new Path.Line(o,u),cizgi2.strokeColor="red",cizgi2.opacity=0;var f=new PointText(new Point(600,80));f.fillColor="black";switch(r){case 0:f.content="Dik kare prizma";break;case 2:f.content="Paralelkenar prizma";break;case 3:f.content="Dikdörtgenler prizması";break;case 4:f.content="Eşkenar dörtgen prizma"}f.opacity=0,a.animate({style:{opacity:1},duration:1e3,delay:n+1e3,update:function(){cizgi.opacity=a.opacity,f.opacity=a.opacity},callback:function(){a.opacity=0,a.animate({style:{opacity:1},duration:1e3,delay:1e3,update:function(){f.content="2 cisim köşegeni",cizgi2.opacity=a.opacity,f.opacity=a.opacity},callback:function(){a.opacity=1,a.animate({style:{opacity:0},duration:1e3,delay:2e3,update:function(){r!=5&&(Main.animationProject.activeLayer.opacity=a.opacity)},callback:function(){r!=5&&Main.animationProject.activeLayer.removeChildren(),Main.animationProject.activeLayer.opacity=1,r==0?ciz("egikKare",350,90,"ornek",2):r==2?ciz("paralelKenar",350,90,"ornek",3):r==3?ciz("dikdortgen",350,90,"ornek",4):r==4&&ciz("esKenar",350,90,"ornek",5)}})}})}})}var Animation={images:[],init:function(e){Animation.container=e,$(e).append("<div id='aciklama'>"),$("#aciklama").css({position:"absolute",width:"120px",height:"20px",top:"0",bottom:"0",right:"100px",margin:"auto",opacity:"0"}),ciz("dikKare",350,90,"ornek"),Main.animationFinished(5e4)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){function s(e){if(e.item&&e.item.class=="nokta"){console.log(e.item),Interaction.setStatus("",!0);if(n==0)e.item.opacity=1,e.item.fillColor="yellow",t=new Path(e.item.position),birinciTiklama=e.item,$("#tiklama").html("Birinci Tıklama: "+n+" . "+birinciTiklama.myId),n++;else if(n==1){ikinciTiklama=e.item;if(birinciTiklama.myId!=ikinciTiklama.myId){switch(birinciTiklama.myId){case"nokta00":kosegen="nokta11";break;case"nokta01":kosegen="nokta10";break;case"nokta02":kosegen="nokta13";break;case"nokta03":kosegen="nokta12";break;case"nokta10":kosegen="nokta01";break;case"nokta11":kosegen="nokta00";break;case"nokta12":kosegen="nokta03";break;case"nokta13":kosegen="nokta02"}if(ikinciTiklama.myId==kosegen)e.item.fillColor="yellow",t.add(e.item.position),t.strokeColor="green",n++,console.log("ikinci tıklama "+n+" . "+e.item.myid),$("#tiklama").html("ikinci tıklama "+n+" . "+e.item.myId),Interaction.dogruNoktalar.push(birinciTiklama.myId),Interaction.dogruNoktalar.push(ikinciTiklama.myId),console.log("ok"),dogru++,dogru<4?(Interaction.setStatus("Doğru; şimdi diğer cisim köşegenini belirleyiniz.",!0),birinciTiklama.opacity=0,ikinciTiklama.opacity=0):dogru==4&&(Interaction.setStatus("Doğru; cisim köşegenlerinin tamamını buldunuz.",!0),birinciTiklama.opacity=0,ikinciTiklama.opacity=0,dogru=0,r.onMouseDown=null,$(".next_button").css("opacity","1"));else{birinciTiklama.opacity=0,ikinciTiklama.opacity=0,birinciTiklama=null,ikinciTiklama=null,n=0,hata++;if(hata==2){r.onMouseDown=null,Interaction.setStatus("Bulamadın; cisim köşegenleri yukarıda belirtilmiştir.",!1),$(".next_button").css("opacity","1"),hata=0;if(Interaction.dogruNoktalar.indexOf("nokta00")==-1){var i=new Path.Line(new Point(koordinat[0][0].x,koordinat[0][0].y),new Point(koordinat[1][1].x,koordinat[1][1].y));i.strokeColor="red"}if(Interaction.dogruNoktalar.indexOf("nokta01")==-1){var i=new Path.Line(new Point(koordinat[0][1].x,koordinat[0][1].y),new Point(koordinat[1][0].x,koordinat[1][0].y));i.strokeColor="red"}if(Interaction.dogruNoktalar.indexOf("nokta02")==-1){var i=new Path.Line(new Point(koordinat[0][2].x,koordinat[0][2].y),new Point(koordinat[1][3].x,koordinat[1][3].y));i.strokeColor="red"}if(Interaction.dogruNoktalar.indexOf("nokta03")==-1){var i=new Path.Line(new Point(koordinat[0][3].x,koordinat[0][3].y),new Point(koordinat[1][2].x,koordinat[1][2].y));i.strokeColor="red"}}else Interaction.setStatus("Bu cisim köşegeni değil; lütfen tekrar deneyin.",!1)}}else birinciTiklama.myId==e.item.myId&&(n++,birinciTiklama=null,console.log(birinciTiklama),e.item.opacity=0)}}}function o(){n==2&&(n=0)}function f(e){u=null;var t=project.hitTest(e.point,a);project.activeLayer.selected=!1,t&&t.item&&e.item&&(e.item.class=="nokta"?(console.log(t.item),$(Interaction.container).css("cursor","pointer"),u=t.item):$(Interaction.container).css("cursor","default"))}Interaction.container=e,Main.setObjective("Yandaki prizmaların cisim köşegenlerini belirleyiniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"40px",right:"40px",opacity:0}),Interaction.appendStatus({bottom:"50px",right:"150px"}),$("#tiklama").css({position:"absolute",width:"100px",height:"20px",right:"50px",top:"100px"}),sekiller=["dikKare","egikKare","dikdortgen","paralelKenar","esKenar","ucgen"],sayi=deger=Util.getShuffledArray(6),sira=0;var t,n=0,r=new Tool;Interaction.tiklama=s,r.onMouseDown=Interaction.tiklama,r.onMouseUp=o,r.onMouseMove=f,birinciTiklama="",ikinciTiklama="",kosegen="",hata=0,dogru=0;var i=["nokta00","nokta01","nokta02","nokta03","nokta10","nokta11","nokta12","nokta13"];Interaction.dogruNoktalar=[],item=[],colors=[];var u,a={fill:!0,tolerance:10};Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.button.className="next_button",Interaction.button.onclick=Interaction.prepareNextQuestion,Main.interactionProject.activeLayer.removeChildren(),tool.onMouseDown=Interaction.tiklama,$(".next_button").css("opacity","0");var t=sekiller[sayi[sira]];ciz(t),sira++,sira==5&&(sira=0),t=="ucgen"&&(tool.onMouseDown=null,$(".next_button").css("opacity","1"),Interaction.setStatus("Üçgen prizmanın cisim köşegeni yoktur.",!0))},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
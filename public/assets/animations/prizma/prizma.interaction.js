var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){function r(e){if(Interaction.basilanNokta.x==e.point.x&&Interaction.basilanNokta.y==e.point.y)return;Interaction.basilanNokta.x=e.point.x,Interaction.basilanNokta.y=e.point.y,console.log("qqqqqqqqonMouseDown:2 "+Interaction.basilanNokta.x+", "+Interaction.basilanNokta.y);if(e.item&&e.item.class=="nokta"){console.log(e.item),Interaction.setStatus("",!0);if(tiklama==0)e.item.opacity=1,e.item.fillColor="yellow",tik=new Path(e.item.position),birinciTiklama=e.item,$("#tiklama").html("Birinci Tıklama: "+tiklama+" . "+birinciTiklama.myId),tiklama++;else if(tiklama==1){ikinciTiklama=e.item;if(birinciTiklama.myId!=ikinciTiklama.myId){switch(birinciTiklama.myId){case"nokta00":kosegen="nokta11";break;case"nokta01":kosegen="nokta10";break;case"nokta02":kosegen="nokta13";break;case"nokta03":kosegen="nokta12";break;case"nokta10":kosegen="nokta01";break;case"nokta11":kosegen="nokta00";break;case"nokta12":kosegen="nokta03";break;case"nokta13":kosegen="nokta02"}if(ikinciTiklama.myId==kosegen)e.item.fillColor="yellow",tik.add(e.item.position),tik.strokeColor="green",tiklama++,console.log("ikinci tıklama "+tiklama+" . "+e.item.myid),$("#tiklama").html("ikinci tıklama "+tiklama+" . "+e.item.myId),Interaction.dogruNoktalar.push(birinciTiklama.myId),Interaction.dogruNoktalar.push(ikinciTiklama.myId),console.log("ok"),dogru++,dogru<4?(Interaction.setStatus("Doğru; şimdi diğer cisim köşegenini belirleyiniz.",!0),birinciTiklama.opacity=.1,ikinciTiklama.opacity=.1):dogru==4&&(Interaction.setStatus("Doğru; cisim köşegenlerinin tamamını buldunuz.",!0),birinciTiklama.opacity=.1,ikinciTiklama.opacity=.1,dogru=0,t.onMouseDown=null,$(".next_button").css("opacity","1").attr("disabled",!1));else{birinciTiklama.opacity=.1,ikinciTiklama.opacity=.1,birinciTiklama=null,ikinciTiklama=null,tiklama=0,hata++;if(hata==2){t.onMouseDown=null,Interaction.setStatus("Bulamadın; cisim köşegenleri yukarıda belirtilmiştir.",!1),$(".next_button").css("opacity","1").attr("disabled",!1),hata=0,console.log("koordinat 2"),console.log(koordinat);if(Interaction.dogruNoktalar.indexOf("nokta00")==-1){var n=new Path.Line(new Point(koordinat[0][0].x,koordinat[0][0].y),new Point(koordinat[1][1].x,koordinat[1][1].y));n.strokeColor="red",console.log("if 1")}if(Interaction.dogruNoktalar.indexOf("nokta01")==-1){var n=new Path.Line(new Point(koordinat[0][1].x,koordinat[0][1].y),new Point(koordinat[1][0].x,koordinat[1][0].y));n.strokeColor="red",console.log("if 2")}if(Interaction.dogruNoktalar.indexOf("nokta02")==-1){var n=new Path.Line(new Point(koordinat[0][2].x,koordinat[0][2].y),new Point(koordinat[1][3].x,koordinat[1][3].y));n.strokeColor="red",console.log("if 3")}if(Interaction.dogruNoktalar.indexOf("nokta03")==-1){var n=new Path.Line(new Point(koordinat[0][3].x,koordinat[0][3].y),new Point(koordinat[1][2].x,koordinat[1][2].y));n.strokeColor="red",console.log("if 4")}}else Interaction.setStatus("Bu cisim köşegeni değil; lütfen tekrar deneyin.",!1)}}else birinciTiklama.myId==e.item.myId&&(tiklama++,birinciTiklama=null,console.log(birinciTiklama),e.item.opacity=.1,e.item.fillColor="black")}}}function i(){tiklama==2&&(tiklama=0)}function u(e){s=null;var t=project.hitTest(e.point,o);project.activeLayer.selected=!1,t&&t.item&&e.item&&(e.item.class=="nokta"?(console.log(t.item),$(Interaction.container).css("cursor","pointer"),s=t.item):$(Interaction.container).css("cursor","default"))}Interaction.container=e,Main.setObjective("Yandaki prizmaların cisim köşegenlerini belirleyiniz. Bunun için ilgili köşelere basmanız gerekecek."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"40px",right:"40px",opacity:0}),Interaction.appendStatus({bottom:"50px",right:"150px"}),$("#tiklama").css({position:"absolute",width:"100px",height:"20px",right:"50px",top:"100px"}),sekiller=["dikKare","egikKare","dikdortgen","paralelKenar","esKenar","ucgen"],sayi=deger=Util.getShuffledArray(6),sira=0,tik="",tiklama=0;var t=new Tool;t.distanceThreshold=100,Interaction.tiklama=r,t.onMouseDown=Interaction.tiklama,t.onMouseUp=i,Interaction.basilanNokta={x:0,y:0},(navigator.platform.indexOf("Win")>-1||navigator.platform.indexOf("Mac")>-1||navigator.platform.indexOf("Linux")>-1)&&navigator.platform!="Linux armv6l"&&navigator.platform!="Linux armv7l"&&(t.onMouseMove=u),birinciTiklama="",ikinciTiklama="",kosegen="",hata=0,dogru=0;var n=["nokta00","nokta01","nokta02","nokta03","nokta10","nokta11","nokta12","nokta13"];Interaction.dogruNoktalar=[],item=[],colors=[];var s,o={fill:!0,tolerance:10};Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.button.className="next_button",Interaction.button.onclick=Interaction.prepareNextQuestion,Main.interactionProject.activeLayer.removeChildren(),tool.onMouseDown=Interaction.tiklama,Interaction.dogruNoktalar=[],$(".next_button").css("opacity","0").attr("disabled",!0),birinciTiklama="",ikinciTiklama="",kosegen="",hata=0,dogru=0,tiklama=0;var t=sekiller[sayi[sira]];ciz(t),sira++,sira==5&&(sira=0),t=="ucgen"&&(tool.onMouseDown=null,Interaction.setStatus("Üçgen prizmanın cisim köşegeni yoktur.",!0),setTimeout(function(){$(".next_button").css("opacity","1").attr("disabled",!1)},5e3))},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
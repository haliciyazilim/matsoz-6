var Interaction={getFramework:function(){return"paper"},images:[{id:"wholePaper",src:"/assets/animations/susleme/6_susleme_bg.jpg"},{id:"selectedColorMark",src:"/assets/animations/susleme/active_color.png"}],init:function(e){function c(e,t,n){if(n=="undefined"||n==null)n=0;this.myType=t,this.myType2=n,this.pointsArr=[];for(var r=0;r<e.length;r++)this.pointsArr[r]=e[r];this.centerPoint=Util.centerOfPoints(this.pointsArr),this.drawShape=function(){var t=new Path;t.moveTo(e[0]);for(var n=1;n<this.pointsArr.length;n++)t.lineTo(this.pointsArr[n]);return t.lineTo(this.pointsArr[0]),t.closed=!0,t.strokeColor="black",this.centerPoint=Util.centerOfPoints(this.pointsArr),t},this.shape=this.drawShape(),this.shape.parentObject=this,this.setPos=function(e){var t=e.subtract(this.shape.position);for(var n=0;n<this.pointsArr.length;n++)this.pointsArr[n]=this.pointsArr[n].add(t);this.shape.position=e,this.centerPoint=Util.centerOfPoints(this.pointsArr),this.b&&this.b.remove(),this.computeLinesArray()},this.computeLinesArray=function(){this.linesArr=[];for(var e=0;e<this.pointsArr.length;e++){var t=this.pointsArr[e],n=this.pointsArr[(e+1)%this.pointsArr.length],r=Util.findAngle(t.x,t.y,n.x,n.y);while(r>Math.PI)r-=Math.PI;this.linesArr.push({p1:t,p2:n,angle:r})}},this.computeLinesArray(),this.trySnapTo=function(e){if(this.centerPoint.getDistance(e.centerPoint,!0)>7200)return;if(this.myType==1){if(this.myType2==1)for(var t=0;t<this.linesArr.length;t++)for(var n=0;n<e.linesArr.length;n++){var r=this.linesArr[t],i=e.linesArr[n],s=Util.centerOfPoints([r.p1,r.p2]),o=Util.centerOfPoints([i.p1,i.p2]);(Math.abs(r.angle-i.angle)<.01||Math.abs(r.angle-i.angle)>Math.PI-.01)&&s.getDistance(o,!0)<400&&(this.setPos(new Point(Math.floor(this.shape.position.add(o.subtract(s)).x)+.5,this.shape.position.y)),Math.abs(this.centerPoint.x-e.centerPoint.x)<.01&&(e.shape.hitTest(new Point(this.shape.position.x,this.shape.position.add(o.subtract(s)).y))||this.setPos(new Point(Math.floor(this.shape.position.x)+.5,this.shape.position.add(o.subtract(s)).y))))}else if(this.myType2==2)for(var t=0;t<this.linesArr.length;t++)for(var n=0;n<e.linesArr.length;n++){var r=this.linesArr[t],i=e.linesArr[n],s=Util.centerOfPoints([r.p1,r.p2]),o=Util.centerOfPoints([i.p1,i.p2]);(Math.abs(r.angle-i.angle)<.01||Math.abs(r.angle-i.angle)>Math.PI-.01)&&s.getDistance(o,!0)<400&&(this.setPos(new Point(this.shape.position.x,Math.floor(this.shape.position.add(o.subtract(s)).y)+.5)),Math.abs(this.centerPoint.y-e.centerPoint.y)<.01&&(e.shape.hitTest(new Point(this.shape.position.add(o.subtract(s)).x,this.shape.position.y))||this.setPos(new Point(Math.floor(this.shape.position.add(o.subtract(s)).x)+.5,this.shape.position.y))))}}else if(this.myType==2)for(var t=0;t<this.linesArr.length;t++)for(var n=0;n<e.linesArr.length;n++){var r=this.linesArr[t],i=e.linesArr[n],s=Util.centerOfPoints([r.p1,r.p2]),o=Util.centerOfPoints([i.p1,i.p2]);(Math.abs(r.angle-i.angle)<.01||Math.abs(r.angle-i.angle)>Math.PI-.01)&&s.getDistance(o,!0)<600&&(this.setPos(new Point(this.shape.position.x,Math.floor(this.shape.position.add(o.subtract(s)).y)+.5)),Math.abs(this.centerPoint.y-e.centerPoint.y)<.01&&(e.shape.hitTest(new Point(this.shape.position.add(o.subtract(s)).x,this.shape.position.y))||this.setPos(new Point(Math.floor(this.shape.position.add(o.subtract(s)).x)+.5,this.shape.position.y))))}else if(this.myType==3)for(var t=0;t<this.linesArr.length;t++)for(var n=0;n<e.linesArr.length;n++){var r=this.linesArr[t],i=e.linesArr[n],s=Util.centerOfPoints([r.p1,r.p2]),o=Util.centerOfPoints([i.p1,i.p2]);(Math.abs(r.angle-i.angle)<.01||Math.abs(r.angle-i.angle)>Math.PI-.01)&&s.getDistance(o,!0)<600&&(this.setPos(new Point(this.shape.position.x,Math.floor(this.shape.position.add(o.subtract(s)).y)+.5)),Math.abs(this.centerPoint.y-e.centerPoint.y)<.01&&(e.shape.hitTest(new Point(this.shape.position.add(o.subtract(s)).x,this.shape.position.y))||this.setPos(new Point(Math.floor(this.shape.position.add(o.subtract(s)).x)+.5,this.shape.position.y))))}}}Interaction.container=e,Main.setObjective("Yandaki model oluşturma yöntemlerinden birini seçiniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(Interaction.container).append('<button id ="newPageBtn" class="newpage_button" onclick="getNewPage();"></button>'),$("#newPageBtn").css("position","absolute").css("top","260px").css("left","485px"),Interaction.pp=new Raster("wholePaper"),Interaction.pp.position=new Point(296,151),Interaction.selectedColorCircle=new Path.Circle(new Point(433,55),16),Interaction.selectedColorCircle.fillColor="white",Interaction.selectedColorCircle.opacity=0,Interaction.mark=new Raster("selectedColorMark"),Interaction.mark.position=new Point(440,50),Interaction.mark.opacity=0,point1=new Point(140.5,25.5),point2=new Point(180.5,25.5),point3=new Point(180.5,65.5),point4=new Point(160.5,65.5),point5=new Point(140.5,45.5),point6=new Point(140.5,45.5),point7=new Point(160.5,65.5),point8=new Point(140.5,65.5),point29=new Point(140.5,5.5),point30=new Point(160.5,25.5),point27=new Point(180.5,45.5),point28=new Point(200.5,65.5),point9=new Point(220.5,25.5),point10=new Point(260.5,25.5),point11=new Point(260.5,65.5),point12=new Point(220.5,65.5),point13=new Point(240.5,45.5),point14=new Point(220.5,25.5),point15=new Point(240.5,45.5),point16=new Point(220.5,65.5),point31=new Point(280.5,45.5),point17=new Point(300.5,25.5),point18=new Point(340.5,25.5),point19=new Point(340.5,65.5),point20=new Point(300.5,65.5),point21=new Point(320.5,55.5),point22=new Point(320.5,35.5),point23=new Point(300.5,25.5),point24=new Point(320.5,35.5),point25=new Point(320.5,55.5),point26=new Point(300.5,65.5),point32=new Point(360.5,35,5),point33=new Point(360.5,55.5),shape1=new Group;var t=new Path;t.moveTo(point1),t.lineTo(point2),t.lineTo(point3),t.lineTo(point4),t.lineTo(point5),t.lineTo(point1),t.closed=!0,t.fillColor="white",t.strokeColor="black";var n=new Path;n.moveTo(point6),n.lineTo(point7),n.lineTo(point8),n.lineTo(point6),n.closed=!0,n.fillColor="white",n.strokeColor="black",shape1.addChild(t),shape1.addChild(n),shape1.myId=1,shape1.class="shapes",shape2=new Group;var r=new Path;r.moveTo(point9),r.lineTo(point10),r.lineTo(point11),r.lineTo(point12),r.lineTo(point13),r.lineTo(point9),r.closed=!0,r.fillColor="white",r.strokeColor="black";var i=new Path;i.moveTo(point14),i.lineTo(point15),i.lineTo(point16),i.lineTo(point14),i.closed=!0,i.fillColor="white",i.strokeColor="black",shape2.addChild(r),shape2.addChild(i),shape2.myId=2,shape2.class="shapes",shape3=new Group;var s=new Path;s.moveTo(point17),s.lineTo(point18),s.lineTo(point19),s.lineTo(point20),s.lineTo(point21),s.lineTo(point22),s.lineTo(point17),s.closed=!0,s.fillColor="white",s.strokeColor="black";var o=new Path;o.moveTo(point23),o.lineTo(point24),o.lineTo(point25),o.lineTo(point26),o.lineTo(point23),o.closed=!0,o.fillColor="white",o.strokeColor="black",shape3.addChild(s),shape3.addChild(o),shape3.myId=3,shape3.class="shapes",Interaction.dropArea=new Path.Rectangle(new Point(50.5,95.5),new Size(398,192)),Interaction.dropArea.fillColor="white",Interaction.dropArea.class="dropArea",Interaction.dropArea.opacity=0;var u=-1;Interaction.colorsCircles=[];for(var a=0;a<5;a++)for(var f=0;f<2;f++)u+=1,Interaction.colorsCircles[u]=new Path.Circle(new Point(509+f*44,72+a*41),16),Interaction.colorsCircles[u].strokeColor="black",Interaction.colorsCircles[u].fillColor="white",Interaction.colorsCircles[u].opacity=0,Interaction.colorsCircles[u].class="colors",Interaction.colorsCircles[u].myId3=u;Interaction.clonesObjectArr=[],Interaction.selectedColor=null;var l=new Tool;l.onMouseDown=function(e){if(e.item)if(e.item.class=="shapes"){var t=e.item.myId;Interaction.selectedColor=null,Interaction.mark.opacity=0,Interaction.selectedColorCircle.opacity=0,t==1?(shape2.remove(),shape3.remove(),shape1.animate({style:{position:new Point(shape1.position.x+80,shape1.position.y)},duration:500,delay:0,animationType:"easeInOutQuad"}),shape1.class="drg",shape1.children[1].myId2=1,Main.setObjective("Kare içindeki şekli sağa ya da yukarı sürükleyerek öteleyiniz. Daha sonra oluşan süslemeyi renklere boyayınız.")):t==2?(shape1.remove(),shape3.remove(),shape2.class="drg",shape2.children[1].myId2=2,Main.setObjective("Kare içindeki şekli sağa sürükleyerek öteleyiniz. Daha sonra oluşan süslemeyi renklere boyayınız.")):t==3&&(shape1.remove(),shape2.remove(),shape3.animate({style:{position:new Point(shape3.position.x-80,shape3.position.y)},duration:500,delay:0,animationType:"easeInOutQuad"}),shape3.class="drg",shape3.children[1].myId2=3,Main.setObjective("Kare içindeki şekli sağa sürükleyerek öteleyiniz. Daha sonra oluşan süslemeyi renklere boyayınız."))}else e.item.class=="drg"?(this.item=e.item.children[1],this.drag=!0,this.totalDelta=new Point(0,0),this.firstPosition=this.item.position,Interaction.selectedColor=null,Interaction.mark.opacity=0,Interaction.selectedColorCircle.opacity=0):e.item.class=="decorable"?(this.item=(new c(e.item.parentObject.pointsArr,e.item.parentObject.myType,e.item.parentObject.myType2)).shape,this.item.fillColor="white",this.item.class="clone",this.drag=!0,this.totalDelta=new Point(0,0),this.firstPosition=this.item.position,Interaction.selectedColor=null,Interaction.mark.opacity=0,Interaction.selectedColorCircle.opacity=0):e.item.class=="clone"?Interaction.selectedColor==null||Interaction.selectedColor=="undefined"?(this.item=(new c(e.item.parentObject.pointsArr,e.item.parentObject.myType,e.item.parentObject.myType2)).shape,this.drag=!0,this.item.fillColor=e.item.fillColor,this.item.class="clone",this.totalDelta=new Point(0,0),this.firstPosition=this.item.position,Interaction.clonesObjectArr.splice(Interaction.clonesObjectArr.indexOf(e.item),1),e.item.remove()):(this.item=e.item,this.drag=!1,this.item.fillColor=Interaction.selectedColor):e.item.class=="colors"?(Interaction.selectedColor=interactionFillColors[e.item.myId3],Interaction.mark.opacity=1,Interaction.selectedColorCircle.opacity=1,Interaction.selectedColorCircle.fillColor=Interaction.selectedColor):(Interaction.selectedColor=null,Interaction.mark.opacity=0,Interaction.selectedColorCircle.opacity=0);else Interaction.selectedColor=null,Interaction.mark.opacity=0,Interaction.selectedColorCircle.opacity=0},l.onMouseDrag=function(e){if(this.item&&this.drag==1)if(this.item.myId2==1){var t=e.point.x-this.firstPosition.x,n=this.firstPosition.y-e.point.y;t<0&&n<0?this.item.position=new Point(this.firstPosition.x,this.firstPosition.y):t>n?(t>30&&t<50?this.item.position=new Point(this.firstPosition.x+40,this.firstPosition.y):this.item.position=new Point(this.firstPosition.x+t,this.firstPosition.y),this.item.last=2):n>t&&(n>30&&n<50?this.item.position=new Point(this.firstPosition.x,this.firstPosition.y-40):this.item.position=new Point(this.firstPosition.x,this.firstPosition.y-n),this.item.last=1)}else if(this.item.myId2==2){var t=e.point.x-this.firstPosition.x;t<0?this.item.position=new Point(this.firstPosition.x,this.firstPosition.y):t>30&&t<50?this.item.position=new Point(this.firstPosition.x+40,this.firstPosition.y):this.item.position=new Point(this.firstPosition.x+t,this.firstPosition.y)}else if(this.item.myId2==3){var t=e.point.x-this.firstPosition.x;t<0?this.item.position=new Point(this.firstPosition.x,this.firstPosition.y):t>30&&t<50?this.item.position=new Point(this.firstPosition.x+40,this.firstPosition.y):this.item.position=new Point(this.firstPosition.x+t,this.firstPosition.y)}else if(this.item.class=="clone"){var r=new Point(this.firstPosition.add(this.totalDelta).add(e.delta));this.item.parentObject.setPos(r),this.totalDelta=this.totalDelta.add(e.delta);for(var i=0;i<Interaction.clonesObjectArr.length;i++)this.item.parentObject.trySnapTo(Interaction.clonesObjectArr[i].parentObject)}},l.onMouseUp=function(e){if(this.item)if(this.item.myId2==1){if(this.item.last==2){shape1.remove();var t=[];t[0]=new Point(point1),t[1]=new Point(point2),t[2]=new Point(point27),t[3]=new Point(point28),t[4]=new Point(point3),t[5]=new Point(point7),t[6]=new Point(point6),shape11=new c(t,1,2),shape11.shape.class="decorable",shape11.shape.fillColor="white",shape11.setPos(new Point(shape11.shape.position.x+80,shape11.shape.position.y))}else if(this.item.last==1){shape1.remove();var t=[];t[0]=new Point(point1),t[1]=new Point(point29),t[2]=new Point(point30),t[3]=new Point(point2),t[4]=new Point(point3),t[5]=new Point(point7),t[6]=new Point(point6),shape11=new c(t,1,1),shape11.shape.class="decorable",shape11.shape.fillColor="white",shape11.setPos(new Point(shape11.shape.position.x+80,shape11.shape.position.y))}Interaction.myType=1}else if(this.item.myId2==2){shape2.remove();var n=[];n[0]=new Point(point9),n[1]=new Point(point10),n[2]=new Point(point31),n[3]=new Point(point11),n[4]=new Point(point12),n[5]=new Point(point13),shape22=new c(n,2),shape22.shape.class="decorable",shape22.shape.fillColor="white",shape22.setPos(new Point(shape22.shape.position.x,shape22.shape.position.y)),Interaction.myType=2}else if(this.item.myId2==3){shape3.remove();var r=[];r[0]=new Point(point17),r[1]=new Point(point18),r[2]=new Point(point32),r[3]=new Point(point33),r[4]=new Point(point19),r[5]=new Point(point20),r[6]=new Point(point21),r[7]=new Point(point22),shape33=new c(r,3),shape33.shape.class="decorable",shape33.shape.fillColor="white",shape33.setPos(new Point(shape33.shape.position.x-80,shape33.shape.position.y)),Interaction.myType=3}else if(this.item.class=="clone"){var i=0;for(var s=0;s<this.item.parentObject.pointsArr.length;s++)Interaction.dropArea.hitTest(this.item.parentObject.pointsArr[s])&&(i+=1);i==this.item.parentObject.pointsArr.length?Interaction.clonesObjectArr.push(this.item):this.item.remove()}this.drag=!1,this.item=null},Interaction.prepareNextQuestion()},nextQuestion:function(e){},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
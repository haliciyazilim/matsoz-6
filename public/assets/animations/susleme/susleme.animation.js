var Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1e3,r=n+2e3,i=r+2e3,s=i+2500,o=s+1500,u=o+14e3,a=u+14e3,f=new AnimationHelper({point1:new Point(358.5,64.5),point2:new Point(398.5,64.5),point3:new Point(398.5,104.5),point4:new Point(358.5,104.5),point5:new Point(368.5,64.5),point6:new Point(388.5,64.5),point7:new Point(378.5,79.5),point8:new Point(368.5,104.5),point9:new Point(388.5,104.5),point10:new Point(378.5,119.5),point11:new Point(368.5,64.5),point12:new Point(388.5,64.5),point13:new Point(378.5,79.5),X:0}),l=new Path;l.moveTo(f.point1),l.lineTo(f.point5),l.lineTo(f.point6),l.lineTo(f.point2),l.lineTo(f.point3),l.lineTo(f.point9),l.lineTo(f.point8),l.lineTo(f.point4),l.lineTo(f.point1),l.strokeColor="black";var c=new Path;c.moveTo(f.point11),c.lineTo(f.point12),c.lineTo(f.point13),c.lineTo(f.point11),c.strokeColor="black",c.fillColor="white",c.insertAbove(l),c.opacity=0,c.animate({style:{opacity:1},duration:1e3,delay:n,animationType:"easeInOutQuad",callback:function(){l&&l.remove(),l=new Path,l.moveTo(f.point1),l.lineTo(f.point5),l.lineTo(f.point7),l.lineTo(f.point6),l.lineTo(f.point2),l.lineTo(f.point3),l.lineTo(f.point9),l.lineTo(f.point8),l.lineTo(f.point4),l.lineTo(f.point1),l.strokeColor="black",c.insertAbove(l)}}),c.animate({style:{position:new Point(c.position.x,c.position.y-10)},duration:1e3,delay:r,animationType:"easeInOutQuad"}),c.animate({style:{position:new Point(c.position.x,c.position.y+40)},duration:1e3,delay:i,animationType:"easeInOutQuad",callback:function(){AnimationManager.delay(function(){l&&l.remove(),l=new Path,l.moveTo(f.point1),l.lineTo(f.point5),l.lineTo(f.point7),l.lineTo(f.point6),l.lineTo(f.point2),l.lineTo(f.point3),l.lineTo(f.point9),l.lineTo(f.point10),l.lineTo(f.point8),l.lineTo(f.point4),l.lineTo(f.point1),l.strokeColor="black",l.fillColor="white",c.opacity=0},500)}});var h;f.animate({init:function(){c.remove(),l.remove(),l=new Path,l.moveTo(f.point1),l.lineTo(f.point5),l.lineTo(f.point7),l.lineTo(f.point6),l.lineTo(f.point2),l.lineTo(f.point3),l.lineTo(f.point9),l.lineTo(f.point10),l.lineTo(f.point8),l.lineTo(f.point4),l.lineTo(f.point1),l.strokeColor="black",l.fillColor="white",h=l.position},style:{X:140},duration:1e3,delay:s,animationType:"easeInOutQuad",update:function(){l.position=new Point(h.x-this.X,h.y)}});var p=-1,d=new Group;for(var v=0;v<3;v++)for(var m=0;m<6;m++){p+=1;var g=v*3+m,y=new Path;y.moveTo(f.point1),y.lineTo(f.point5),y.lineTo(f.point7),y.lineTo(f.point6),y.lineTo(f.point2),y.lineTo(f.point3),y.lineTo(f.point9),y.lineTo(f.point10),y.lineTo(f.point8),y.lineTo(f.point4),y.lineTo(f.point1),y.opacity=0,y.position=new Point(320.5+40*m,50+40*v),y.strokeColor=new RgbColor(0,0,0),y.fillColor=new RgbColor(1,1,1),d.addChild(y),y.animate({style:{opacity:1},duration:1e3,delay:o+750*p,animationType:"easeInOutQuad"})}for(var v=0;v<18;v+=2)v<6||v>11?(d.children[v].animate({style:{fillColor:new RgbColor(.949,.784,.521),strokeColor:new RgbColor(.451,.462,.239)},duration:1e3,delay:u+750*v,animationType:"easeInOutQuad"}),d.children[v+1].animate({style:{fillColor:new RgbColor(.913,.619,.619),strokeColor:new RgbColor(.611,.309,.309)},duration:1e3,delay:u+750*(v+1),animationType:"easeInOutQuad"})):(d.children[v].animate({style:{fillColor:new RgbColor(.913,.619,.619),strokeColor:new RgbColor(.611,.309,.309)},duration:1e3,delay:u+750*v,animationType:"easeInOutQuad"}),d.children[v+1].animate({style:{fillColor:new RgbColor(.949,.784,.521),strokeColor:new RgbColor(.451,.462,.239)},duration:1e3,delay:u+750*(v+1),animationType:"easeInOutQuad"}));Main.animationFinished(a)}};
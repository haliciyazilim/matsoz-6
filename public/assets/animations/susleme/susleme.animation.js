var Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1e3,r=n+2e3,i=r+2e3,s=i+2500,o=s+1500,u=o+14e3,a=new AnimationHelper({point1:new Point(358.5,64.5),point2:new Point(398.5,64.5),point3:new Point(398.5,104.5),point4:new Point(358.5,104.5),point5:new Point(368.5,64.5),point6:new Point(388.5,64.5),point7:new Point(378.5,79.5),point8:new Point(368.5,104.5),point9:new Point(388.5,104.5),point10:new Point(378.5,119.5),point11:new Point(368.5,64.5),point12:new Point(388.5,64.5),point13:new Point(378.5,79.5),X:0}),f=new Path;f.moveTo(a.point1),f.lineTo(a.point5),f.lineTo(a.point6),f.lineTo(a.point2),f.lineTo(a.point3),f.lineTo(a.point9),f.lineTo(a.point8),f.lineTo(a.point4),f.lineTo(a.point1),f.strokeColor="black";var l=new Path;l.moveTo(a.point11),l.lineTo(a.point12),l.lineTo(a.point13),l.lineTo(a.point11),l.strokeColor="black",l.fillColor="white",l.insertAbove(f),l.opacity=0,l.animate({style:{opacity:1},duration:1e3,delay:n,animationType:"easeInOutQuad",callback:function(){f&&f.remove(),f=new Path,f.moveTo(a.point1),f.lineTo(a.point5),f.lineTo(a.point7),f.lineTo(a.point6),f.lineTo(a.point2),f.lineTo(a.point3),f.lineTo(a.point9),f.lineTo(a.point8),f.lineTo(a.point4),f.lineTo(a.point1),f.strokeColor="black",l.insertAbove(f)}}),l.animate({style:{position:new Point(l.position.x,l.position.y-10)},duration:1e3,delay:r,animationType:"easeInOutQuad"}),l.animate({style:{position:new Point(l.position.x,l.position.y+40)},duration:1e3,delay:i,animationType:"easeInOutQuad",callback:function(){AnimationManager.delay(function(){f&&f.remove(),f=new Path,f.moveTo(a.point1),f.lineTo(a.point5),f.lineTo(a.point7),f.lineTo(a.point6),f.lineTo(a.point2),f.lineTo(a.point3),f.lineTo(a.point9),f.lineTo(a.point10),f.lineTo(a.point8),f.lineTo(a.point4),f.lineTo(a.point1),f.strokeColor="black",f.fillColor="white",l.opacity=0},500)}});var c;a.animate({init:function(){l.remove(),f.remove(),f=new Path,f.moveTo(a.point1),f.lineTo(a.point5),f.lineTo(a.point7),f.lineTo(a.point6),f.lineTo(a.point2),f.lineTo(a.point3),f.lineTo(a.point9),f.lineTo(a.point10),f.lineTo(a.point8),f.lineTo(a.point4),f.lineTo(a.point1),f.strokeColor="black",f.fillColor="white",c=f.position},style:{X:140},duration:1e3,delay:s,animationType:"easeInOutQuad",update:function(){f.position=new Point(c.x-this.X,c.y)}});var h=-1;for(var p=0;p<3;p++)for(var d=0;d<6;d++){h+=1;var v=p*3+d,m=new Path;m.moveTo(a.point1),m.lineTo(a.point5),m.lineTo(a.point7),m.lineTo(a.point6),m.lineTo(a.point2),m.lineTo(a.point3),m.lineTo(a.point9),m.lineTo(a.point10),m.lineTo(a.point8),m.lineTo(a.point4),m.lineTo(a.point1),m.opacity=0,m.position=new Point(320.5+40*d,50+40*p),v%2==0?(m.strokeColor=animationFirstStrokeColor,m.fillColor=animationFirstFillColor):(m.strokeColor=animationSecondStrokeColor,m.fillColor=animationSecondFillColor),m.animate({style:{opacity:1},duration:1e3,delay:o+750*h,animationType:"easeInOutQuad"})}Main.animationFinished(u)}};
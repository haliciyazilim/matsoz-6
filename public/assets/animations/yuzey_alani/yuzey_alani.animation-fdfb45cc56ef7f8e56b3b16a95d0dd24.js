var Animation={images:[],init:function(e){Animation.container=e;var t=new Path.Rectangle(new Point(180.5,8.5),new Point(200.5,28.5));t.strokeColor="#999";var n=new PointText(new Point(176,40));n.content="1 cm²",n.characterStyle.fontSize=8;var r=new PointText(new Point(204,22));r.content="1 cm²",r.characterStyle.fontSize=8;var i=Util.createProjectionMatrixForObjectAt(100,90),s=new Prism(3,4,2,i),o=new Prism(2,2,2,i),u=new Prism(2,4,2,i),a=[{points:[new Point(3,0),new Point(3,2),new Point(6,2),new Point(6,0)],area:[3,2]},{points:[new Point(1,2),new Point(1,6),new Point(3,6),new Point(3,2)],area:[2,4]},{points:[new Point(3,2),new Point(3,6),new Point(6,6),new Point(6,2)],area:[3,4]},{points:[new Point(6,2),new Point(6,6),new Point(8,6),new Point(8,2)],area:[2,4]},{points:[new Point(8,2),new Point(8,6),new Point(11,6),new Point(11,2)],area:[3,4]},{points:[new Point(3,6),new Point(3,8),new Point(6,8),new Point(6,6)],area:[3,2]}],f=[{points:[new Point(4,1),new Point(4,3),new Point(6,3),new Point(6,1)],area:[2,2]},{points:[new Point(2,3),new Point(2,5),new Point(4,5),new Point(4,3)],area:[2,2]},{points:[new Point(4,3),new Point(4,5),new Point(6,5),new Point(6,3)],area:[2,2]},{points:[new Point(6,3),new Point(6,5),new Point(8,5),new Point(8,3)],area:[2,2]},{points:[new Point(8,3),new Point(8,5),new Point(10,5),new Point(10,3)],area:[2,2]},{points:[new Point(4,5),new Point(4,7),new Point(6,7),new Point(6,5)],area:[2,2]}],l=[{points:[new Point(4,0),new Point(4,2),new Point(6,2),new Point(6,0)],area:[2,2]},{points:[new Point(2,2),new Point(2,6),new Point(4,6),new Point(4,2)],area:[2,4]},{points:[new Point(4,2),new Point(4,6),new Point(6,6),new Point(6,2)],area:[2,4]},{points:[new Point(6,2),new Point(6,6),new Point(8,6),new Point(8,2)],area:[2,4]},{points:[new Point(8,2),new Point(8,6),new Point(10,6),new Point(10,2)],area:[2,4]},{points:[new Point(4,6),new Point(4,8),new Point(6,8),new Point(6,6)],area:[2,2]}],c=[{shape:s,surfaces:a},{shape:o,surfaces:f},{shape:u,surfaces:l}];InteractiveGrids.prototype.appendVertexLetters=function(){};var h=new InteractiveGrids({position:new Point(250.5,8.5),size:20,rows:8,cols:12,style:{strokeColor:"#999"}}),p=[],d=[],v=[],m=[],g=-2e3;for(var y=0;y<3;y++){d[y]=new Group,v[y]=new Group,m[y]=new Group;for(var b=0;b<6;b++)h.drawShape(c[y].surfaces[b].points),d[y].addChild(h.path),v[y].addChild(writeAreaCalculation(c[y].surfaces[b],h)),m[y].addChild(writeArea(c[y].surfaces[b],h));p[y]=c[y].shape.project(),p[y].addChild(c[y].shape.showDimensions()),p[y].opacity=0,d[y].set_style(style),d[y].opacity=0,v[y].opacity=0,m[y].opacity=0,p[y].animate({style:{opacity:1},duration:1e3,delay:g+=2e3,animationType:"easeInEaseOut"}),d[y].animate({style:{opacity:1},duration:1e3,delay:g+=2e3,animationType:"easeInEaseOut"}),v[y].animate({style:{opacity:1},duration:1e3,delay:g+=2e3,animationType:"easeInEaseOut"}),v[y].animate({style:{opacity:0},duration:1e3,delay:g+=2e3,animationType:"easeInEaseOut",callback:function(){this.remove()}}),m[y].animate({style:{opacity:1},duration:1e3,delay:g,animationType:"easeInEaseOut"});var w=c[y].shape.areaCalculationSteps(),E=new Point(520,50),S=new Point(0,20),x=new Group;for(var T=0;T<w.length;T++){var N=new PointText(E);N.content=w[T],x.addChild(N),N.opacity=0,N.animate({style:{opacity:1},duration:1e3,delay:g+=1e3,animationType:"easeInEaseOut"}),E=E.add(S)}y<2&&(p[y].animate({style:{opacity:0},duration:1e3,delay:g+=2e3,animationType:"easeInEaseOut",callback:function(){this.remove()}}),d[y].animate({style:{opacity:0},duration:1e3,delay:g,animationType:"easeInEaseOut",callback:function(){this.remove()}}),m[y].animate({style:{opacity:0},duration:1e3,delay:g,animationType:"easeInEaseOut",callback:function(){this.remove()}}),x.animate({style:{opacity:0},duration:1e3,delay:g,animationType:"easeInEaseOut",callback:function(){this.remove()}}))}}};
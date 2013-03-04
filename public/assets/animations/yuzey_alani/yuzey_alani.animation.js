var Animation={images:[],init:function(e){Animation.container=e;var t=new Group,n=new Path.Rectangle(new Point(180.5,8.5),new Point(200.5,28.5));n.strokeColor="#999";var r=new PointText(new Point(176,40));r.content="1 cm²",r.characterStyle.fontSize=8;var i=new PointText(new Point(204,22));i.content="1 cm²",i.characterStyle.fontSize=8,t.addChild(n),t.addChild(r),t.addChild(i),t.opacity=0,t.animate({style:{opacity:1},duration:1e3,delay:4e3,animationType:"easeInEaseOut"});var s=Util.createProjectionMatrixForObjectAt(100,90),o=new Prism(3,4,2,s),u=new Prism(2,2,2,s),a=new Prism(2,4,2,s),f=[{points:[new Point(3,0),new Point(3,2),new Point(6,2),new Point(6,0)],area:[3,2]},{points:[new Point(1,2),new Point(1,6),new Point(3,6),new Point(3,2)],area:[2,4]},{points:[new Point(3,2),new Point(3,6),new Point(6,6),new Point(6,2)],area:[3,4]},{points:[new Point(6,2),new Point(6,6),new Point(8,6),new Point(8,2)],area:[2,4]},{points:[new Point(8,2),new Point(8,6),new Point(11,6),new Point(11,2)],area:[3,4]},{points:[new Point(3,6),new Point(3,8),new Point(6,8),new Point(6,6)],area:[3,2]}],l=[{points:[new Point(4,1),new Point(4,3),new Point(6,3),new Point(6,1)],area:[2,2]},{points:[new Point(2,3),new Point(2,5),new Point(4,5),new Point(4,3)],area:[2,2]},{points:[new Point(4,3),new Point(4,5),new Point(6,5),new Point(6,3)],area:[2,2]},{points:[new Point(6,3),new Point(6,5),new Point(8,5),new Point(8,3)],area:[2,2]},{points:[new Point(8,3),new Point(8,5),new Point(10,5),new Point(10,3)],area:[2,2]},{points:[new Point(4,5),new Point(4,7),new Point(6,7),new Point(6,5)],area:[2,2]}],c=[{points:[new Point(4,0),new Point(4,2),new Point(6,2),new Point(6,0)],area:[2,2]},{points:[new Point(2,2),new Point(2,6),new Point(4,6),new Point(4,2)],area:[2,4]},{points:[new Point(4,2),new Point(4,6),new Point(6,6),new Point(6,2)],area:[2,4]},{points:[new Point(6,2),new Point(6,6),new Point(8,6),new Point(8,2)],area:[2,4]},{points:[new Point(8,2),new Point(8,6),new Point(10,6),new Point(10,2)],area:[2,4]},{points:[new Point(4,6),new Point(4,8),new Point(6,8),new Point(6,6)],area:[2,2]}],h=[{shape:o,surfaces:f},{shape:u,surfaces:l},{shape:a,surfaces:c}];InteractiveGrids.prototype.appendVertexLetters=function(){};var p=new InteractiveGrids({position:new Point(250.5,8.5),size:20,rows:8,cols:12,style:{strokeColor:gridColor}});for(var d=0;d<p.lines.length;d++)p.lines[d].opacity=0;var v=new AnimationHelper({opacity:0});v.animate({style:{opacity:1},duration:1e3,delay:2e3,animationType:"easeInEaseOut",update:function(){for(var e=0;e<p.lines.length;e++)p.lines[e].opacity=this.opacity}});var m=[],g=[],y=[],b=[],w=4e3;for(var E=0;E<3;E++){g[E]=new Group,y[E]=new Group,b[E]=new Group;for(var S=0;S<6;S++)p.drawShape(h[E].surfaces[S].points),g[E].addChild(p.path),y[E].addChild(writeAreaCalculation(h[E].surfaces[S],p)),b[E].addChild(writeArea(h[E].surfaces[S],p));m[E]=h[E].shape.project(),m[E].set_style(styles[E]),m[E].addChild(h[E].shape.showDimensions()),m[E].opacity=0,g[E].set_style(styles[E]),g[E].opacity=0,y[E].opacity=0,b[E].opacity=0,m[E].animate({style:{opacity:1},duration:1e3,delay:w+=2e3,animationType:"easeInEaseOut"}),g[E].animate({style:{opacity:1},duration:1e3,delay:w+=2e3,animationType:"easeInEaseOut"}),y[E].animate({style:{opacity:1},duration:1e3,delay:w+=2e3,animationType:"easeInEaseOut"}),y[E].animate({style:{opacity:0},duration:1e3,delay:w+=2e3,animationType:"easeInEaseOut",callback:function(){this.remove()}}),b[E].animate({style:{opacity:1},duration:1e3,delay:w,animationType:"easeInEaseOut"});var x=h[E].shape.areaCalculationSteps(),T=new Point(520,50),N=new Point(0,20),C=new Group;for(var k=0;k<x.length;k++){var L=new PointText(T);L.content=x[k],C.addChild(L),L.opacity=0,L.animate({style:{opacity:1},duration:1e3,delay:w+=2e3,animationType:"easeInEaseOut"}),T=T.add(N)}E<2&&(m[E].animate({style:{opacity:0},duration:1e3,delay:w+=4e3,animationType:"easeInEaseOut",callback:function(){this.remove()}}),g[E].animate({style:{opacity:0},duration:1e3,delay:w,animationType:"easeInEaseOut",callback:function(){this.remove()}}),b[E].animate({style:{opacity:0},duration:1e3,delay:w,animationType:"easeInEaseOut",callback:function(){this.remove()}}),C.animate({style:{opacity:0},duration:1e3,delay:w,animationType:"easeInEaseOut",callback:function(){this.remove()}}))}Main.animationFinished(w+1e3)}};
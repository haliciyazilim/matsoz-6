var Animation={images:[],init:function(e){Animation.container=e,Animation.grids=new InteractiveGrids({position:new Point(50.5,10.5),size:22,cols:30,rows:7,style:{strokeColor:"#CCC"}}),Animation.pieceType=0,Animation.pieceStyle={strokeColor:"#000",fillColor:"#f6f"};var t=[new TShapePattern({position:new Point(3,2),number:2}),new NumberPattern({position:new Point(3,0),number:2}),new TShapePattern({position:new Point(10,2),number:3}),new NumberPattern({position:new Point(10,0),number:3}),new TShapePattern({position:new Point(19,2),number:4}),new NumberPattern({position:new Point(19,0),number:4})];for(var n=0;n<t.length;n++){var r=t[n];r.position=r.position.add(2,0),r.pieceStyle=Animation.pieceStyle,r.pieceType=Animation.pieceType;var i=Animation.grids.drawPattern(r);for(var s=0;s<i.length;s++)i[s].set_style({opacity:0}),i[s].animate({style:{opacity:1},duration:1e3,delay:1500*n+1e3-100*s})}Main.animationFinished(t.length*2e3)}};
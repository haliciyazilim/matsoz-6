var Animation={images:[],init:function(e){Animation.container=e;var t=Util.createProjectionMatrixForObjectAt(100,90),n=new ExpandablePrism(60,100,20,t);n.project();var r=[{points:[new Point(1,0),new Point(1,1),new Point(4,1),new Point(4,0)],area:3},{points:[new Point(0,1),new Point(0,6),new Point(1,6),new Point(1,1)],area:4}[new Point(1,1),new Point(1,6),new Point(4,6),new Point(4,1)],[new Point(4,1),new Point(4,6),new Point(5,6),new Point(5,1)],[new Point(5,1),new Point(5,6),new Point(8,6),new Point(8,1)],[new Point(1,6),new Point(1,7),new Point(4,7),new Point(4,6)]];InteractiveGrids.prototype.appendVertexLetters=function(){};var i=(new InteractiveGrids({position:new Point(250.5,16.5),size:18,style:{strokeColor:"#999"}})).drawShape(r[0]);i.path.grid.drawShape(r[1]),i.drawShape(r[2]),i.drawShape(r[3]),i.drawShape(r[4]),i.drawShape(r[5])}};
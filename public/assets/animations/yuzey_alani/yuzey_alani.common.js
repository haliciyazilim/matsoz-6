var writeAreaCalculation=function(e,t){var n=new Point(0,0);for(var r=0;r<e.points.length;r++)n=n.add(e.points[r]);n.x=n.x/r,n.y=n.y/r;var i=n.multiply(t.size,t.size).add(t.position).add(0,4),s=new PointText(i);return s.content=e.area[0]+"."+e.area[1],s.justification="center",s},writeArea=function(e,t){var n=new Point(0,0);for(var r=0;r<e.points.length;r++)n=n.add(e.points[r]);n.x=n.x/r,n.y=n.y/r;var i=n.multiply(t.size,t.size).add(t.position).add(0,4),s=new PointText(i);return s.content=e.area[0]*e.area[1]+" cm²",s.justification="center",s};
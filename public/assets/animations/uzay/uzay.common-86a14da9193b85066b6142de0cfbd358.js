function point(e){var t=Util.project(e.from,Interaction.matrix).showOnCanvas(5);if(e.to)for(var n=0;n<e.to.length;n++)t.animate({style:{position:Util.project(e.to[n],Interaction.matrix)},duration:1e3,delay:1e3*(n+1)})}function surface(e){var t=new Surface(e.points);t.shape={strokeColor:new RgbColor(65/255,129/255,138/255,.5),fillColor:new RgbColor(168/255,219/255,227/255,.5)},t.project(Interaction.matrix);var n=new AnimationHelper({angle:0});(e.rotateX||e.rotateY||e.rotateZ)&&n.animate({style:{angle:Math.PI*2},duration:2e3,delay:1500,init:function(){e.rotateX?t.pivotsX[0]=e.rotateX:e.rotateY?t.pivotsY[0]=e.rotateY:t.pivotsZ[0]=e.rotateZ},update:function(){e.rotateX?t.rotationsX[0]=this.angle:e.rotateY?t.rotationsY[0]=this.angle:t.rotationsZ[0]=this.angle,t.project(Interaction.matrix)}})}function line(e){var t=Util.centerOfPoints([Util.project(e.point1,Interaction.matrix),Util.project(e.point2,Interaction.matrix)]),n=t.showOnCanvas(5);n.animate({style:{position:Util.project(e.point1,Interaction.matrix)},duration:1e3,delay:100}),n.set_style({fillColor:"#41818"});var r=t.showOnCanvas(5);r.animate({style:{position:Util.project(e.point2,Interaction.matrix)},duration:1e3,delay:100}),r.set_style({fillColor:"#41818"});var i=new AnimationHelper({line:null,point1:t,point2:t});i.animate({style:{point1:Util.project(e.point1,Interaction.matrix),point2:Util.project(e.point2,Interaction.matrix)},duration:1e3,delay:100,update:function(){this.line&&this.line.remove(),this.line=new Path.Line(this.point1,this.point2),this.line.set_style({strokeColor:"#41818A",strokeWidth:2})}});if(e.rotateX||e.rotateY||e.rotateZ){var s=new AnimationHelper({angle:0});s.animate({style:{angle:Math.PI*2},duration:2e3,delay:1500,update:function(){if(e.rotateX)var t=Util.project(e.point1.getRotatedPointByX(this.angle),Interaction.matrix),s=Util.project(e.point2.getRotatedPointByX(this.angle),Interaction.matrix);else if(e.rotateY)var t=Util.project(e.point1.getRotatedPointByY(this.angle),Interaction.matrix),s=Util.project(e.point2.getRotatedPointByY(this.angle),Interaction.matrix);else var t=Util.project(e.point1.getRotatedPointByY(this.angle),Interaction.matrix),s=Util.project(e.point2.getRotatedPointByY(this.angle),Interaction.matrix);i.line&&i.line.remove(),i.line=new Path.Line(t,s),i.line.set_style({strokeColor:"#41818A",strokeWidth:2}),n.position=t,r.position=s}})}}function dashedLine(e){this.line=new Path.Line(Util.project(e.point1,Interaction.matrix),Util.project(e.point2,Interaction.matrix)),this.line.set_style({strokeColor:new RgbColor(65/255,129/255,138/255,1),dashArray:[3,2]})};
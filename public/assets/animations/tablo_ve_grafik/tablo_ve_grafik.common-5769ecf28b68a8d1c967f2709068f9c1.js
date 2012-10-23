function columnGraph(e,t,n,r,i,s,o,u,a){u==undefined&&(u=s*.3),a==undefined&&(a=0),i==undefined&&(i={axisColor:"#41818a",gridColor:"#d9d9d9",lineColor:"#8b5400",textColor:"#006e7d"});var f=new Group,l=10,c=r.xLabels.length,h=r.yLabels.length,p=(t-60)/(c-1),d=20,v=e.x+l,m=e.y,g={justification:"center",fillColor:"black"},y=r.xGridLabelStyle?r.xGridLabelStyle:g,b=r.yGridLabelStyle?r.yGridLabelStyle:g;for(index=0;index<c;index++){var w=10;gridLine=new Path.Line(new Point(v+p*index+w+10,m+10),new Point(p*index+v+10+w,m+n)),gridLine.strokeWidth=1,gridLine.strokeColor=i.gridColor,f.addChild(gridLine)}for(index=1;index<h;index++)gridLine=new Path.Line(new Point(v-w,index*d+m),new Point(v+(r.xLabels.length-1)*p+40,index*d+m)),gridLine.strokeWidth=1,gridLine.strokeColor=i.gridColor,f.addChild(gridLine);if(a==1)for(var E=0;E<c;E++){var S=new PointText(new Point(v+E*p+18,m+n+16));S.set_style(y),S.justification="center",S.fillColor=i.textColor,S.content=r.xLabels[E],f.addChild(S)}else for(index=0;index<c;index++){var w=10,x=15;y.rotation==90&&(w=7.5,x=5.5);var S=new PointText(new Point(v+index*p+w+10,m+n+16));S.set_style(y),S.fillColor=i.textColor,S.content=r.xLabels[index],y.rotation&&S.rotate(y.rotation),f.addChild(S)}for(index=0;index<h;index++){var S=new PointText(new Point(v-20-l,m+index*d+21));S.set_style(b),S.fillColor=i.textColor,S.content=r.yLabels[index],f.addChild(S)}origin=new Point(e.add([0,n])),xAxis=new Path.OneSidedArrow(origin,origin.add([t+10+l,0]),10,18),xAxis.strokeWidth=2,xAxis.fillColor=i.axisColor,xAxis.strokeColor=i.axisColor,yAxis=new Path.OneSidedArrow(origin,origin.add([0,-n-10-l]),10,18),yAxis.strokeWidth=2,yAxis.fillColor=i.axisColor,yAxis.strokeColor=i.axisColor,f.addChild(xAxis),f.addChild(yAxis);var S=new PointText(new Point(v+t+14,m+n+4));S.justification="left",S.fillColor="black",S.content=r.xAxisName,f.addChild(S);if(r.xAxisUnit){var S=new PointText(new Point(v+t+20,m+n+20));S.justification="left",S.fillColor="black",S.content="("+r.xAxisUnit+")",f.addChild(S)}var T=16;r.yAxisUnit&&(T=0);var S=new PointText(new Point(v-26,m-26));S.justification="left",S.fillColor="black",S.content=r.yAxisName,f.addChild(S);if(r.yAxisUnit){var S=new PointText(new Point(v-30,m-16));S.justification="center",S.fillColor="black",S.content="("+r.yAxisUnit+")",f.addChild(S)}var N=[];for(var C=0;C<r.data.length;C++)N[C]=new AnimationHelper({index:C,X:0});var k,L=[];for(index=0;index<r.data.length;index++)N[index].index=index,N[index].animate({style:{X:r.data[index]*10},duration:s,delay:o+this.index*u,animationType:"easeInOutQuad",update:function(){L[this.index]&&L[this.index].remove(),L[this.index]=new Path.Rectangle(new Point(p*this.index+v+w,m+n-this.X-1),new Size(20,this.X)),L[this.index].fillColor=colors[this.index]},callback:function(){f.addChild(L[this.index])}});return f.getXYCoordinate=function(e,t){return new Point(p*e+v,d*t+m)},f}function drawColumnGraph(){var e=[],t=""+Interaction.inputs[3].value,n=""+Interaction.inputs[5].value;e.push(t),e.push(n);if(Interaction.inputs[7].value!=""){var r=""+Interaction.inputs[7].value;e.push(r)}if(Interaction.inputs[9].value!=""){var i=""+Interaction.inputs[9].value;e.push(i)}var s=["10","8","6","4","2","0"],o=Interaction.inputs[1].value,u=Interaction.inputs[2].value,a=[];a.push(parseInt(Interaction.inputs[4].value)),a.push(parseInt(Interaction.inputs[6].value)),Interaction.inputs[8].value!=""&&a.push(parseInt(Interaction.inputs[8].value)),Interaction.inputs[10].value!=""&&a.push(parseInt(Interaction.inputs[10].value));var f={justification:"right",rotation:-90},l={xAxisName:o,yAxisName:u,xGridLabelStyle:f,xLabels:e,yLabels:s,data:a};Interaction.emptyGroup&&Interaction.emptyGroup.remove();if(a.length==2)var c=new Point(330,80),h=new Point(400,30);else if(a.length==3)var c=new Point(300,80),h=new Point(400,30);else if(a.length==4)var c=new Point(270,80),h=new Point(400,30);Interaction.graphGroup=columnGraph(c,l.xLabels.length*50,120,l,undefined,1e3,1e3),Interaction.titleText=new PointText(h),Interaction.titleText.justification="center",Interaction.titleText.fontSize=14,Interaction.titleText.fillColor="#006e7d",Interaction.titleText.content=Interaction.inputs[0].value,$("#repeatBtn").css("opacity",1),$("#repeatBtn").get(0).onclick=Interaction.nextQuestion,$("#graphBtn").css("opacity",.4),$("#graphBtn").get(0).onclick=null,disableInputsBox()}function disableInputsBox(){$(Interaction.inputs).each(function(e,t){$(this).get(0).onkeydown=function(e){if(e.keyCode!=13)return!1}})}function enableInputsBox(){$(Interaction.inputs).each(function(e,t){$(this).get(0).onkeydown=null})};
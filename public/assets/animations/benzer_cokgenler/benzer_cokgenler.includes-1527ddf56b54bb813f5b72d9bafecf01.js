function __Styles(){}function InteractiveGrids(e){this.id=InteractiveGrids.GetId(),this.size=e.size,this.position=e.position,this.style=e.style,this.points=[],this.vertexes=[],this.circles=[];for(var t=0;t<=8;t++)(new Path.Line(this.position.add(0,this.size*t),this.position.add(this.size*8,this.size*t))).set_style(this.style),(new Path.Line(this.position.add(this.size*t,0),this.position.add(this.size*t,this.size*8))).set_style(this.style);for(var t=0;t<=8;t++)for(var n=0;n<=8;n++){var r=this.position.add(this.size*t,this.size*n),i=new Path.Circle(r,this.size*.3);i.set_style({fillColor:new RgbColor(1,1,1,0)}),i.class="InteractiveGridCircles"+this.id,this.circles.push(i)}return this}InteractiveGrids.prototype.activateRemoveOnClick=function(){this.removeOnClick=!0},InteractiveGrids.prototype.removeShape=function(){this.path.remove();for(var e=0;e<this.vertexes.length;e++)this.vertexes[e].remove();this.vertexes=[];for(var e=0;e<this.points.length;e++)this.points[e].class="InteractiveGridCircles"+this.id;this.path.remove(),this.disableDraw=!1,this.points=[],this.createTool()},InteractiveGrids.prototype.drawShape=function(e){this.path=new Path,this.path.set_style(this.style).set_style({strokeWidth:3,strokeCap:"butt",strokeColor:"#f00"});if(e){for(var t=0;t<e.length;t++){var n=e[t].multiply(this.size,this.size).add(this.position);this.points.push(n),this.path.add(n)}this.path.closed=!0}return this},InteractiveGrids.prototype.createTool=function(){var e=new Tool,t=this;return this.disableDraw=!1,e.onMouseDown=function(e){if(t.removeOnClick==1){t.removeShape();return}if(t.disableDraw==1)return;e.item&&e.item.class=="InteractiveGridCircles"+t.id?(e.item.set_style({}),t.vertexes.push((new Path.Circle(e.item.position,4)).set_style({fillColor:new RgbColor(.2,.2,.2)})),t.path.add(e.item.position),e.item.class="SelectedGridCircles",e.item.opacity=1,t.points.push(e.item.position),e.item.insertAbove(t.path)):e.item&&e.item.class=="SelectedGridCircles"&&t.points.length>2&&(t.path.closed=!0,t.disableDraw=!0)},e.activate(),this},InteractiveGrids.CreateShape=function(e){var t=[],n=new Point(1,1),r=new Point(0,0);switch(e){case 0:t.push(new Point(1,0)),t.push(new Point(0,2)),t.push(new Point(3,2)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 1:t.push(new Point(0,2)),t.push(new Point(2,2)),t.push(new Point(1,0));var i=Util.randomInteger(1,3);n=new Point(i,i),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 2:t.push(new Point(0,0)),t.push(new Point(0,1)),t.push(new Point(1,1)),n=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5)),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 3:t.push(new Point(1,1)),t.push(new Point(1,0)),t.push(new Point(0,1)),n=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5)),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 4:t.push(new Point(0,2)),t.push(new Point(2,2)),t.push(new Point(3,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 5:t.push(new Point(2,0)),t.push(new Point(2,2)),t.push(new Point(0,2)),t.push(new Point(0,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 6:t.push(new Point(0,0)),t.push(new Point(1,2)),t.push(new Point(3,2)),t.push(new Point(2,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 7:t.push(new Point(1,0)),t.push(new Point(0,2)),t.push(new Point(3,2)),t.push(new Point(5,0)),n=new Point(1,Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 8:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(2,0)),r=new Point(Util.randomInteger(1,6),Util.randomInteger(1,6));break;case 9:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(4,5)),t.push(new Point(5,2)),t.push(new Point(2,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 10:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(3,0)),t.push(new Point(1,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 11:t.push(new Point(0,2)),t.push(new Point(1,3)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(3,0)),t.push(new Point(1,1)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4))}for(var s=0;s<t.length;s++)t[s]=t[s].multiply(n).add(r);return t},InteractiveGrids.AreShapesSimilar=function(e,t){if(e.length!=t.length)return!1;function n(e){var t=[];for(var n=0;n<e.length;n++){var r=e[n],i=e[(n-1+e.length)%e.length],s=e[(n+1)%e.length];(new PointText(r)).content=n;var o=Math.abs(Util.findAngle(r.x,r.y,s.x,s.y)-Util.findAngle(r.x,r.y,i.x,i.y));o=Util.radianToDegree(o),o>180&&(o=360-o),t.push([r.getDistance(s,!0),r.getDistance(i,!0),o,r])}return t}var r=n(e),i=n(t),s=0;for(var o=0;o<r.length;o++)s<r[o][0]&&(s=r[o][0]);var u=0;for(var o=0;o<i.length;o++)u<i[o][0]&&(u=i[o][0]);var a=s/u,f=1e-5,l=r.length;function c(e,t,n){for(var r=0;r<=l;r++){var i=!0;for(var s=0;s<=l;s++){var o=(s+r+l)%l;if(e[s%l][2]==t[o][2]){var u=e[s%l][0]/t[o][n?1:0];if(a+f>u&&a-f<u)continue;i=!1}else i=!1}if(i==1)return InteractiveGrids.MoveShapeTo(e,t,r,n),!0}}return c(r,i,false)==1?!0:c(r,i,true)==1?!0:(r=r.reverse(),c(r,i,false)==1?!0:c(r,i,true)==1?!0:!1)},InteractiveGrids.GetId=function(){return InteractiveGrids.order?InteractiveGrids.order++:(InteractiveGrids.order=1,InteractiveGrids.GetId())},InteractiveGrids.MoveShapeTo=function(e,t,n,r){if(e.length!=t.length)return;var i,s=new AnimationHelper({}),o={};console.log("reverse: "+r);for(var u=0;u<e.length;u++)o["point"+u]=e[u][3],s["point"+u]=t[(u+n+t.length-(r===!0&&t.length>3?0:0))%t.length][3];s.animate({style:o,duration:2e3,animationType:"easeInEaseOut",update:function(){i&&i.remove(),i=new Path;for(var e=0;!0;e++){if(!this["point"+e])break;i.add(this["point"+e])}i.closed=!0,i.strokeColor="#000",i.strokeWidth=2},callback:function(){Interaction.resume()}})};var Animation={images:[],init:function(e){Animation.container=e,Main.animationFinished()}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki çokgenin benzerini yandaki kareli bölgede oluşturup kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"00px",right:"40px"}),Interaction.appendStatus({bottom:"10px",right:"150px"}),Interaction.setRandomGenerator(12),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial++,Main.interactionProject.activeLayer.removeChildren(),Interaction.masterGrid=(new InteractiveGrids({position:new Point(10.5,10.5),size:30,style:{strokeColor:"#000"}})).drawShape(InteractiveGrids.CreateShape(e)),Interaction.slaveGrid=(new InteractiveGrids({position:new Point(300.5,10.5),size:18+e%4*4,style:{strokeColor:"#666"}})).drawShape().createTool()},preCheck:function(){if(Interaction.slaveGrid.path.closed!=1)return Interaction.setStatus("Lütfen bir kapalı şekil çiziniz","alert"),!1},isAnswerCorrect:function(e){return InteractiveGrids.AreShapesSimilar(Interaction.masterGrid.points,Interaction.slaveGrid.points)},onCorrectAnswer:function(){Interaction.pause()},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap.",!1)}};
function InteractiveGrids(e){this.id=InteractiveGrids.GetId(),e.rows?this.rows=e.rows:this.rows=8,e.cols?this.cols=e.cols:this.cols=8,this.vertexLetters=e.vertexLetters,this.size=e.size,this.position=e.position,this.style=e.style,this.points=[],this.vertexes=[],this.circles=[],this.lines=[];for(var t=0;t<=this.rows;t++)this.lines.push((new Path.Line(this.position.add(0,this.size*t),this.position.add(this.size*this.rows,this.size*t))).set_style(this.style)),this.lines.push((new Path.Line(this.position.add(this.size*t,0),this.position.add(this.size*t,this.size*this.cols))).set_style(this.style));for(var t=0;t<=this.rows;t++)for(var n=0;n<=this.cols;n++){var r=this.position.add(this.size*t,this.size*n),i=new Path.Circle(r,this.size*.3);i.set_style({fillColor:new RgbColor(1,1,1,0)}),i.class="InteractiveGridCircles"+this.id,this.circles.push(i)}return this}function __Styles(){}function yaziGoster(){for(var e=0;e<this.yazilar.children.length;e++)this.yazilar.children[e].opacity=1}function cevapGoster(){var e="";for(var t=0;t<this.kenarlar.length;t++)t==this.kenarlar.length-1?e=e+""+this.kenarlar[t]:e=e+""+this.kenarlar[t]+" + ";$("#cevap").html("Ç= "+e+" = "+this.cevap+" m").animate({opacity:1},1e3)}InteractiveGrids.prototype.activateRemoveOnClick=function(){this.removeOnClick=!0},InteractiveGrids.prototype.removeShape=function(){this.path.remove();for(var e=0;e<this.vertexes.length;e++)this.vertexes[e].remove();this.vertexes=[];for(var e=0;e<this.points.length;e++)this.points[e].class="InteractiveGridCircles"+this.id;this.path.remove(),this.disableDraw=!1,this.points=[],this.createTool()},InteractiveGrids.prototype.drawShape=function(e){this.path=new Path,this.path.set_style(this.style).set_style({strokeWidth:3,strokeCap:"butt",strokeColor:"#000"});if(e){for(var t=0;t<e.length;t++){var n=e[t].multiply(this.size,this.size).add(this.position);this.points.push(n),this.path.add(n)}this.path.closed=!0,this.appendVertexLetters()}return this},InteractiveGrids.prototype.undo=function(){if(this.path.closed==1){this.path.closed=!1,this.disableDraw=!1;return}this.path.removeSegment(this.path.segments.length-1),this.points.pop(),this.appendVertexLetters();var e=this.vertexes.pop();e.baseCircle.class="InteractiveGridCircles"+this.id,e.remove()},InteractiveGrids.prototype.appendVertexLetters=function(){if(this.vertexLetters==undefined)return;var e=[];for(var t=0;t<this.vertexLetters.length;t++)e.push(this.vertexLetters[t]);if(this.vertexPointTexts)for(var t=0;t<this.vertexPointTexts.length;t++)this.vertexPointTexts[t].remove();this.vertexPointTexts=[];var n=Util.centerOfPoints(this.points);for(var t=0;t<this.points.length;t++){var r=new PointText(this.points[t].findPointTo(n,-13).add(0,6));r.content=e.shift(),r.set_style({fontSize:12,justification:"center",strokeWidth:2,strokeColor:"#000"}),this.vertexPointTexts.push(r)}},InteractiveGrids.prototype.createTool=function(){var e=new Tool,t=this;return this.disableDraw=!1,e.onMouseDown=function(e){if(t.removeOnClick==1){t.removeShape();return}if(t.disableDraw==1)return;if(e.item&&e.item.class=="InteractiveGridCircles"+t.id){e.item.set_style({});var n=(new Path.Circle(e.item.position,4)).set_style({fillColor:new RgbColor(.2,.2,.2),"class":"SelectedGridCircles"+t.id});n.baseCircle=e.item,t.vertexes.push(n),t.path.add(e.item.position),e.item.class="SelectedGridCircles"+t.id,e.item.opacity=1,t.points.push(e.item.position),e.item.insertAbove(t.path),t.appendVertexLetters()}else e.item&&e.item.class=="SelectedGridCircles"+t.id&&t.points.length>2&&(t.path.closed=!0,t.disableDraw=!0)},e.activate(),this},InteractiveGrids.CreateShape=function(e){var t=[],n=new Point(1,1),r=new Point(0,0);switch(e){case 0:t.push(new Point(1,0)),t.push(new Point(0,2)),t.push(new Point(3,2)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 1:t.push(new Point(0,2)),t.push(new Point(2,2)),t.push(new Point(1,0));var i=Util.randomInteger(1,3);n=new Point(i,i),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 2:t.push(new Point(0,0)),t.push(new Point(0,1)),t.push(new Point(1,1)),n=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5)),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 3:t.push(new Point(1,1)),t.push(new Point(1,0)),t.push(new Point(0,1)),n=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5)),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 4:t.push(new Point(0,2)),t.push(new Point(2,2)),t.push(new Point(3,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 5:t.push(new Point(2,0)),t.push(new Point(2,2)),t.push(new Point(0,2)),t.push(new Point(0,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 6:t.push(new Point(0,0)),t.push(new Point(1,2)),t.push(new Point(3,2)),t.push(new Point(2,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 7:t.push(new Point(1,0)),t.push(new Point(0,2)),t.push(new Point(3,2)),t.push(new Point(5,0)),n=new Point(1,Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 8:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(2,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 9:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(4,5)),t.push(new Point(5,2)),t.push(new Point(2,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 10:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(3,0)),t.push(new Point(1,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 11:t.push(new Point(0,2)),t.push(new Point(1,3)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(3,0)),t.push(new Point(1,1)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4))}for(var s=0;s<t.length;s++)t[s]=t[s].multiply(n).add(r);return t},InteractiveGrids.AreShapesSame=function(e,t){return InteractiveGrids.AreShapesSimilar(e,t,1)},InteractiveGrids.AreShapesSimilar=function(e,t,n){if(e.length!=t.length)return!1;function r(e){var t=[];for(var n=0;n<e.length;n++){var r=e[n],i=e[(n-1+e.length)%e.length],s=e[(n+1)%e.length],o=Math.abs(Util.findAngle(r.x,r.y,s.x,s.y)-Util.findAngle(r.x,r.y,i.x,i.y));o=Util.radianToDegree(o),o>180&&(o=360-o),t.push([r.getDistance(s,!0),r.getDistance(i,!0),o,r])}return t}var i=r(e),s=r(t),o=0;for(var u=0;u<i.length;u++)o<i[u][0]&&(o=i[u][0]);var a=0;for(var u=0;u<s.length;u++)a<s[u][0]&&(a=s[u][0]);var f;n==undefined?f=o/a:f=n;var l=1e-5,c=i.length;function h(e,t,n){for(var r=0;r<=c;r++){var i=!0;for(var s=0;s<=c;s++){var o=(s+r+c)%c;if(e[s%c][2]==t[o][2]){var u=e[s%c][0]/t[o][n?1:0];if(f+l>u&&f-l<u)continue;i=!1}else i=!1}if(i==1)return InteractiveGrids.MoveShapeTo(e,t,r,n),!0}}return h(i,s,false)==1?!0:h(i,s,true)==1?!0:(i=i.reverse(),h(i,s,false)==1?!0:h(i,s,true)==1?!0:!1)},InteractiveGrids.GetId=function(){return InteractiveGrids.order?InteractiveGrids.order++:(InteractiveGrids.order=1,InteractiveGrids.GetId())},InteractiveGrids.MoveShapeTo=function(e,t,n,r){if(e.length!=t.length)return;var i,s=new AnimationHelper({}),o={};console.log("reverse: "+r);for(var u=0;u<e.length;u++)o["point"+u]=e[u][3],s["point"+u]=t[(u+n+t.length-(r===!0&&t.length>3?0:0))%t.length][3];s.animate({style:o,duration:2e3,animationType:"easeInEaseOut",update:function(){i&&i.remove(),i=new Path;for(var e=0;!0;e++){if(!this["point"+e])break;i.add(this["point"+e])}i.closed=!0,i.strokeColor="#000",i.strokeWidth=2},callback:function(){Interaction.resume()}})},Dikdortgen=function(){var e=1;while(e%2!=0)e=Math.floor(Math.random()*24+1);var t=1;while(t%2!=0)t=Math.floor(Math.random()*14+1);var n=(210-t*10)/2,r=(430-e*10)/2,i=new Point(r,n),s=new Size(e*10,t*10),o=new Rectangle(i,s),u=new Path.Rectangle(o);u.strokeColor="black",console.log("a: "+e+", b: "+t),this.kenarlar=[e,t,e,t];var a=new Group,f=r+e*10/2,l=n+t*10+20,c=new PointText(f,l);c.content=e+" cm",c.paragraphStyle.justification="center",c.fillColor="black",a.addChild(c);var h=r+e*10+10,p=n+t*10/2+5,d=new PointText(h,p);d.content=t+" cm",d.fillColor="black",a.addChild(d);var v=r+e*10/2,m=n-10,g=new PointText(v,m);g.paragraphStyle.justification="center",g.content=e+" cm",g.fillColor="black",a.addChild(g);var y=r-10,b=n+t*10/2+5,w=new PointText(y,b);w.paragraphStyle.justification="right",w.content=t+" cm",w.fillColor="black",a.addChild(w);var E=Math.floor(Math.random()*3+1);switch(E){case 1:c.opacity=0,w.opacity=0,d.opacity=1,g.opacity=1,c.fillColor="red",w.fillColor="red";break;case 2:c.opacity=1,w.opacity=1,d.opacity=0,g.opacity=0,d.fillColor="red",g.fillColor="red";break;case 3:w.opacity=0,g.opacity=0,c.opacity=1,d.opacity=1,w.fillColor="red",g.fillColor="red";break;case 4:w.opacity=1,g.opacity=1,c.opacity=0,d.opacity=0,c.fillColor="red",d.fillColor="red"}this.yazilar=a,this.yazilariGoster=yaziGoster,this.cevap=e*2+t*2,this.cevapGoster=cevapGoster},SekilL1=function(){var t={strokeColor:"black"};ab=parseInt(Math.floor(Math.random()*9+9)*10,10),bc=parseInt(Math.floor(Math.random()*20+10)*10,10),cd=parseInt(Math.floor(Math.random()*5+2)*10,10),de=parseInt(Math.floor(Math.random()*7+3)*10,10),i=new Point,i.y=ab/2,i.x=bc/2,a=new Point(0,0),b=new Point(0,ab),c=new Point(bc,ab),d=new Point(bc,ab-cd),e=new Point(bc-de,ab-cd),f=new Point(bc-de,0);var n=[a,b,c,d,e,f],r=new Point(220,110),i=Util.centerOfPoints(n),s=new Path;s.set_style(t);for(var o=0;o<n.length;o++)s.add(n[o]);s.closed=!0,s.position=s.position.add(r.subtract(i)),console.log(s),console.log(s.segments[0]);var u=s.segments[1].point.x-10,l=s.segments[0].point.y+ab/2+10,h=new PointText(u,l);h.paragraphStyle.justification="right",h.content=ab+" m",h.fillColor="black";var p=s.segments[1].point.x+bc/2,v=s.segments[1].point.y+20,m=new PointText(p,v);m.paragraphStyle.justification="center",m.content=bc+" m",m.fillColor="black";var g=s.segments[2].point.x+5,y=s.segments[2].point.y-cd/2,w=new PointText(g,y);w.paragraphStyle.justification="left",w.content=cd+" m",w.fillColor="black";var E=s.segments[4].point.x+de/2,S=s.segments[4].point.y-5,x=new PointText(E,S);x.paragraphStyle.justification="center",x.content=de+" m",x.fillColor="black",ef=s.segments[4].point.y-s.segments[5].point.y;var T=s.segments[5].point.x+5,N=s.segments[5].point.y+ef/2,C=new PointText(T,N);C.paragraphStyle.justification="left",C.content=ef+" m",C.fillColor="black",fa=s.segments[5].point.x-s.segments[0].point.x;var k=s.segments[0].point.x+fa/2,L=s.segments[0].point.y-5,A=new PointText(k,L);A.paragraphStyle.justification="center",A.content=fa+" m",A.fillColor="black";var O=new Group;O.addChild(h),O.addChild(m),O.addChild(w),O.addChild(x),O.addChild(C),O.addChild(A);var M=Math.floor(Math.random()*3+1);switch(M){case 1:h.opacity=1,m.opacity=1,w.opacity=1,x.opacity=1,C.opacity=0,A.opacity=0,C.fillColor="red",A.fillColor="red";break;case 2:h.opacity=1,m.opacity=1,C.opacity=1,A.opacity=1,w.opacity=0,x.opacity=0,w.fillColor="red",x.fillColor="red";break;case 3:w.opacity=1,x.opacity=1,C.opacity=1,A.opacity=1,h.opacity=0,m.opacity=0,h.fillColor="red",m.fillColor="red"}this.kenarlar=[ab,bc,cd,de,ef,fa],this.yazilar=O,this.cevap=ab+bc+cd+de+ef+fa,this.yazilariGoster=yaziGoster,this.cevapGoster=cevapGoster},SekilL2=function(){var t={strokeColor:"black"};ab=parseInt(Math.floor(Math.random()*5+2)*10,10),bc=parseInt(Math.floor(Math.random()*20+10)*10,10),cd=parseInt(Math.floor(Math.random()*9+9)*10,10),de=parseInt(Math.floor(Math.random()*7+3)*10,10),ef=parseInt(cd-ab,10),fa=parseInt(bc-de,10),i=new Point,i.y=cd/2,i.x=bc/2,a=new Point(0,ef),b=new Point(0,cd),c=new Point(bc,cd),d=new Point(bc,0),e=new Point(fa,0),f=new Point(fa,ef);var n=[a,b,c,d,e,f],r=new Point(220,120),i=Util.centerOfPoints(n),s=new Path;s.set_style(t);for(var o=0;o<n.length;o++)n[o]=n[o].getRotatedPoint(0,i),s.add(n[o]);s.closed=!0,s.position=s.position.add(r.subtract(i)),console.log(s),console.log(s.segments[0]);var u=s.segments[1].point.x-10,l=s.segments[0].point.y+ab/2+10,h=new PointText(u,l);h.paragraphStyle.justification="right",h.content=ab+" m",h.fillColor="black";var p=s.segments[1].point.x+bc/2,v=s.segments[1].point.y+20,m=new PointText(p,v);m.paragraphStyle.justification="center",m.content=bc+" m",m.fillColor="black";var g=s.segments[2].point.x+5,y=s.segments[2].point.y-cd/2,w=new PointText(g,y);w.paragraphStyle.justification="left",w.content=cd+" m",w.fillColor="black";var E=s.segments[4].point.x+de/2,S=s.segments[4].point.y-5,x=new PointText(E,S);x.paragraphStyle.justification="center",x.content=de+" m",x.fillColor="black";var T=s.segments[4].point.x-5,N=s.segments[4].point.y+ef/2,C=new PointText(T,N);C.paragraphStyle.justification="right",C.content=ef+" m",C.fillColor="black";var k=s.segments[5].point.x-fa/2,L=s.segments[5].point.y-5,A=new PointText(k,L);A.paragraphStyle.justification="center",A.content=fa+" m",A.fillColor="black";var O=new Group;O.addChild(h),O.addChild(m),O.addChild(w),O.addChild(x),O.addChild(C),O.addChild(A);var M=Math.floor(Math.random()*3+1);switch(M){case 1:h.opacity=1,m.opacity=1,w.opacity=1,x.opacity=1,C.opacity=0,A.opacity=0,C.fillColor="red",A.fillColor="red";break;case 2:h.opacity=1,m.opacity=1,C.opacity=1,A.opacity=1,w.opacity=0,x.opacity=0,w.fillColor="red",x.fillColor="red";break;case 3:w.opacity=1,x.opacity=1,C.opacity=1,A.opacity=1,h.opacity=0,m.opacity=0,h.fillColor="red",m.fillColor="red"}this.kenarlar=[ab,bc,cd,de,ef,fa],this.yazilar=O,this.cevap=ab+bc+cd+de+ef+fa,this.yazilariGoster=yaziGoster,this.cevapGoster=cevapGoster},SekilL3=function(){var t={strokeColor:"black"};ab=parseInt(Math.floor(Math.random()*9+9)*10,10),bc=parseInt(Math.floor(Math.random()*5+2)*10,10),cd=parseInt(Math.floor(Math.random()*7+3)*10,10),ef=parseInt(ab-cd,10),fa=parseInt(Math.floor(Math.random()*20+10)*10,10),de=parseInt(fa-bc,10),i=new Point,i.y=cd/2,i.x=bc/2,a=new Point(0,0),b=new Point(0,ab),c=new Point(bc,ab),d=new Point(bc,ab-cd),e=new Point(fa,ab-cd),f=new Point(fa,0);var n=[a,b,c,d,e,f],r=new Point(220,120),i=Util.centerOfPoints(n),s=new Path;s.set_style(t);for(var o=0;o<n.length;o++)n[o]=n[o].getRotatedPoint(0,i),s.add(n[o]);s.closed=!0,s.position=s.position.add(r.subtract(i)),console.log(s),console.log(s.segments[0]);var u=s.segments[1].point.x-10,l=s.segments[0].point.y+ab/2+10,h=new PointText(u,l);h.paragraphStyle.justification="right",h.content=ab+" m",h.fillColor="black";var p=s.segments[1].point.x+bc/2,v=s.segments[1].point.y+20,m=new PointText(p,v);m.paragraphStyle.justification="center",m.content=bc+" m",m.fillColor="black";var g=s.segments[2].point.x+5,y=s.segments[2].point.y-cd*1/3,w=new PointText(g,y);w.paragraphStyle.justification="left",w.content=cd+" m",w.fillColor="black";var E=s.segments[3].point.x+de/2,S=s.segments[3].point.y+20,x=new PointText(E,S);x.paragraphStyle.justification="center",x.content=de+" m",x.fillColor="black";var T=s.segments[4].point.x+5,N=s.segments[4].point.y-ef/2,C=new PointText(T,N);C.paragraphStyle.justification="left",C.content=ef+" m",C.fillColor="black";var k=s.segments[5].point.x-fa/2,L=s.segments[5].point.y-5,A=new PointText(k,L);A.paragraphStyle.justification="center",A.content=fa+" m",A.fillColor="black";var O=new Group;O.addChild(h),O.addChild(m),O.addChild(w),O.addChild(x),O.addChild(C),O.addChild(A);var M=Math.floor(Math.random()*3+1);switch(M){case 1:h.opacity=1,m.opacity=1,w.opacity=1,x.opacity=1,C.opacity=0,A.opacity=0,C.fillColor="red",A.fillColor="red";break;case 2:h.opacity=1,m.opacity=1,C.opacity=1,A.opacity=1,w.opacity=0,x.opacity=0,w.fillColor="red",x.fillColor="red";break;case 3:w.opacity=1,x.opacity=1,C.opacity=1,A.opacity=1,h.opacity=0,m.opacity=0,h.fillColor="red",m.fillColor="red"}this.kenarlar=[ab,bc,cd,de,ef,fa],this.yazilar=O,this.cevap=ab+bc+cd+de+ef+fa,this.yazilariGoster=yaziGoster,this.cevapGoster=cevapGoster},SekilL4=function(){var t={strokeColor:"black"};fa=parseInt(Math.floor(Math.random()*20+10)*10,10),ef=parseInt(Math.floor(Math.random()*9+9)*10,10),de=parseInt(Math.floor(Math.random()*4+2)*10,10),cd=parseInt(Math.floor(Math.random()*6+3)*10,10),ab=parseInt(ef-cd,10),bc=parseInt(fa-de,10),i=new Point,i.y=ef/2,i.x=fa/2,a=new Point(0,0),b=new Point(0,ab),c=new Point(bc,ab),d=new Point(bc,ef),e=new Point(fa,ef),f=new Point(fa,0);var n=[a,b,c,d,e,f],r=new Point(220,120),i=Util.centerOfPoints(n),s=new Path;s.set_style(t);for(var o=0;o<n.length;o++)n[o]=n[o].getRotatedPoint(0,i),s.add(n[o]);s.closed=!0,s.position=s.position.add(r.subtract(i)),console.log(s),console.log(s.segments[0]);var u=s.segments[1].point.x-10,l=s.segments[0].point.y+ab/2+10,h=new PointText(u,l);h.paragraphStyle.justification="right",h.content=ab+" m",h.fillColor="black";var p=s.segments[1].point.x+bc/2,v=s.segments[1].point.y+20,m=new PointText(p,v);m.paragraphStyle.justification="center",m.content=bc+" m",m.fillColor="black";var g=s.segments[2].point.x-5,y=s.segments[2].point.y+cd*2/3,w=new PointText(g,y);w.paragraphStyle.justification="right",w.content=cd+" m",w.fillColor="black";var E=s.segments[3].point.x+de/2,S=s.segments[3].point.y+20,x=new PointText(E,S);x.paragraphStyle.justification="center",x.content=de+" m",x.fillColor="black";var T=s.segments[4].point.x+5,N=s.segments[4].point.y-ef/2,C=new PointText(T,N);C.paragraphStyle.justification="left",C.content=ef+" m",C.fillColor="black";var k=s.segments[5].point.x-fa/2,L=s.segments[5].point.y-5,A=new PointText(k,L);A.paragraphStyle.justification="center",A.content=fa+" m",A.fillColor="black";var O=new Group;O.addChild(h),O.addChild(m),O.addChild(w),O.addChild(x),O.addChild(C),O.addChild(A);var M=Math.floor(Math.random()*3+1);switch(M){case 1:h.opacity=1,m.opacity=1,w.opacity=1,x.opacity=1,C.opacity=0,A.opacity=0,C.fillColor="red",A.fillColor="red";break;case 2:h.opacity=1,m.opacity=1,C.opacity=1,A.opacity=1,w.opacity=0,x.opacity=0,w.fillColor="red",x.fillColor="red";break;case 3:w.opacity=1,x.opacity=1,C.opacity=1,A.opacity=1,h.opacity=0,m.opacity=0,h.fillColor="red",m.fillColor="red"}this.kenarlar=[ab,bc,cd,de,ef,fa],this.yazilar=O,this.cevap=ab+bc+cd+de+ef+fa,this.yazilariGoster=yaziGoster,this.cevapGoster=cevapGoster};var Animation={images:[],init:function(e){Animation.container=e;var t=(new InteractiveGrids({position:new Point(300.5,10.5),size:26,style:{strokeColor:"#666"},rows:6,cols:6})).drawShape([new Point(2,1),new Point(3,1),new Point(5,5),new Point(1,5)]);t.path.set_style({strokeColor:"#f00"});for(var n=0;n<t.lines.length;n++)t.lines[n].set_style({strokeColor:new RgbColor(0,0,0,0)}).animate({style:{strokeColor:new RgbColor(0,0,0,1)},duration:500,delay:2e3});var r=new Group,i=new AnimationHelper({opacity:0}),s=new Path.Rectangle(new Point(250.5,10.5),new Size(26,26));s.strokeColor=new RgbColor(0,0,0,1),s.opacity=i.opacity;var o=new PointText(new Point(200,28));o.content="1 birim",o.fillColor=new RgbColor(0,0,0,1),o.opacity=i.opacity,r.addChild(o);var u=new PointText(new Point(240,60));u.content="1 birim",u.fillColor=new RgbColor(0,0,0,1),u.opacity=i.opacity,r.addChild(u);var a=new AnimationHelper({opacity:0}),f=new Group,l=new Point(600.5,70),c=new PointText(l);c.content="Yamuğun çevre uzunluğu",c.fillColor=new RgbColor(0,0,0,1),c.paragraphStyle.justification="center",c.opacity=a.opacity,f.addChild(c),l.y=90;var h=new PointText(l);h.content="13 birimden",h.fillColor=new RgbColor(0,0,0,1),h.paragraphStyle.justification="center",h.opacity=a.opacity,f.addChild(h),l.y=110;var p=new PointText(l);p.content="fazladır.",p.fillColor=new RgbColor(0,0,0,1),p.paragraphStyle.justification="center",p.opacity=a.opacity,f.addChild(p),i.animate({style:{strokeColor:new RgbColor(0,0,0,1),fillColor:new RgbColor(0,0,0,1),opacity:1},duration:500,delay:3e3,update:function(){s.opacity=this.opacity,o.opacity=this.opacity,u.opacity=this.opacity}}),a.animate({style:{opacity:1},duration:500,delay:4e3,update:function(){c.opacity=this.opacity,h.opacity=this.opacity,p.opacity=this.opacity}}),Main.animationFinished(4500)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki şeklinde çevre uzunluğunu bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.appendStatus({bottom:"20px",right:"200px"}),$(e).append("<div id='soru'>"),$("#soru").css({position:"absolute",width:"235px",height:"50px",right:"0px",top:"35px",textAlign:"center",fontSize:"20px",opacity:1}),$(e).append("<div id='cevap'>"),$("#cevap").css({position:"absolute",width:"420px",height:"25px",right:"0px",left:"0px",bottom:"50px",margin:"auto",opacity:0,fontSize:"20px",textAlign:"center",color:"green"}),Interaction.appendInput({position:"relative",width:"70px",height:"50px",textAlign:"center",fontSize:"20px",opacity:1,"float":"left"},!0,!1),Interaction.input.id="girdi",$("#girdi").attr("maxLength","5"),$(e).append("<div id='girdiKapsayici'>"),$("#girdiKapsayici").css({position:"absolute",width:"135px",height:"50px",right:"11px",top:"60px"}),$("#girdiKapsayici").append("<span id='ccc'>Ç= </span>"),$("#girdiKapsayici").append(Interaction.input),$("#girdiKapsayici").append("<span id='biriM'> m</span>"),$("#ccc").css({"float":"left",marginTop:"20px",marginRight:"10px",fontSize:"20px"}),$("#biriM").css({"float":"left",marginTop:"20px",marginLeft:"10px",fontSize:"20px"}),Interaction.soruArray=Util.getShuffledArray(5),Interaction.soruSirasi=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){$("input").css({color:"black"}),Main.interactionProject.activeLayer.removeChildren(),$("#cevap").animate({opacity:0},1e3);var t=Interaction.soruArray[Interaction.soruSirasi];switch(t){case 0:soru=new Dikdortgen;break;case 1:soru=new SekilL1;break;case 2:soru=new SekilL2;break;case 3:soru=new SekilL3;break;case 4:soru=new SekilL4}Interaction.soruSirasi++,Interaction.soruSirasi==5&&(Interaction.soruSirasi=0)},preCheck:function(){},isAnswerCorrect:function(e){if(soru.cevap==e)return!0},onCorrectAnswer:function(){$("input").css({color:"green"}),soru.cevapGoster(),soru.yazilariGoster()},onWrongAnswer:function(){},onFail:function(){$("input").css({color:"red"}),Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),soru.yazilariGoster(),soru.cevapGoster()}};
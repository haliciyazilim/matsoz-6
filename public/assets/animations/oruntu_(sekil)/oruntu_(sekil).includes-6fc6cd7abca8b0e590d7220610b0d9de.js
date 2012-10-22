function InteractiveGrids(e){this.id=InteractiveGrids.GetId(),e.rows?this.rows=e.rows:this.rows=8,e.cols?this.cols=e.cols:this.cols=8,this.vertexLetters=e.vertexLetters,this.size=e.size,this.position=e.position,this.style=e.style,this.points=[],this.vertexes=[],this.circles=[],this.lines=[];for(var t=0;t<=this.rows;t++)this.lines.push((new Path.Line(this.position.add(0,this.size*t),this.position.add(this.size*this.cols,this.size*t))).set_style(this.style));for(var t=0;t<=this.cols;t++)this.lines.push((new Path.Line(this.position.add(this.size*t,0),this.position.add(this.size*t,this.size*this.rows))).set_style(this.style));for(var t=0;t<=this.rows;t++)for(var n=0;n<=this.cols;n++){var r=this.position.add(this.size*t,this.size*n),i=new Path.Circle(r,this.size*.3);i.set_style({fillColor:new RgbColor(1,1,1,0)}),i.class="InteractiveGridCircles"+this.id,this.circles.push(i)}return this}function __Styles(){}InteractiveGrids.prototype.activateRemoveOnClick=function(){this.removeOnClick=!0},InteractiveGrids.prototype.removeShape=function(){this.path.remove();for(var e=0;e<this.vertexes.length;e++)this.vertexes[e].remove();this.vertexes=[];for(var e=0;e<this.points.length;e++)this.points[e].class="InteractiveGridCircles"+this.id;this.path.remove(),this.disableDraw=!1,this.points=[],this.createTool()},InteractiveGrids.prototype.drawShape=function(e){this.path=new Path,this.path.set_style(this.style).set_style({strokeWidth:3,strokeCap:"butt",strokeColor:"#000"});if(e){for(var t=0;t<e.length;t++){var n=e[t].multiply(this.size,this.size).add(this.position);this.points.push(n),this.path.add(n)}this.path.closed=!0,this.appendVertexLetters()}return this},InteractiveGrids.prototype.undo=function(){if(this.path.closed==1){this.path.closed=!1,this.disableDraw=!1;return}this.path.removeSegment(this.path.segments.length-1),this.points.pop(),this.appendVertexLetters();var e=this.vertexes.pop();e.baseCircle.class="InteractiveGridCircles"+this.id,e.remove()},InteractiveGrids.prototype.appendVertexLetters=function(){if(this.vertexLetters==undefined)return;var e=[];for(var t=0;t<this.vertexLetters.length;t++)e.push(this.vertexLetters[t]);if(this.vertexPointTexts)for(var t=0;t<this.vertexPointTexts.length;t++)this.vertexPointTexts[t].remove();this.vertexPointTexts=[];var n=Util.centerOfPoints(this.points);for(var t=0;t<this.points.length;t++){var r=new PointText(this.points[t].findPointTo(n,-13).add(0,6));r.content=e.shift(),r.set_style({fontSize:12,justification:"center",strokeWidth:2,strokeColor:"#000"}),this.vertexPointTexts.push(r)}},InteractiveGrids.prototype.createTool=function(){var e=new Tool,t=this;return this.disableDraw=!1,e.onMouseDown=function(e){if(t.removeOnClick==1){t.removeShape();return}if(t.disableDraw==1)return;if(e.item&&e.item.class=="InteractiveGridCircles"+t.id){e.item.set_style({});var n=(new Path.Circle(e.item.position,4)).set_style({fillColor:new RgbColor(.2,.2,.2),"class":"SelectedGridCircles"+t.id});n.baseCircle=e.item,t.vertexes.push(n),t.path.add(e.item.position),e.item.class="SelectedGridCircles"+t.id,e.item.opacity=1,t.points.push(e.item.position),e.item.insertAbove(t.path),t.appendVertexLetters()}else e.item&&e.item.class=="SelectedGridCircles"+t.id&&t.points.length>2&&(t.path.closed=!0,t.disableDraw=!0)},e.activate(),this},InteractiveGrids.CreateShape=function(e){var t=[],n=new Point(1,1),r=new Point(0,0);switch(e){case 0:t.push(new Point(1,0)),t.push(new Point(0,2)),t.push(new Point(3,2)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 1:t.push(new Point(0,2)),t.push(new Point(2,2)),t.push(new Point(1,0));var i=Util.randomInteger(1,3);n=new Point(i,i),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 2:t.push(new Point(0,0)),t.push(new Point(0,1)),t.push(new Point(1,1)),n=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5)),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 3:t.push(new Point(1,1)),t.push(new Point(1,0)),t.push(new Point(0,1)),n=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5)),r=new Point(Util.randomInteger(1,5),Util.randomInteger(1,5));break;case 4:t.push(new Point(0,2)),t.push(new Point(2,2)),t.push(new Point(3,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 5:t.push(new Point(2,0)),t.push(new Point(2,2)),t.push(new Point(0,2)),t.push(new Point(0,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 6:t.push(new Point(0,0)),t.push(new Point(1,2)),t.push(new Point(3,2)),t.push(new Point(2,0)),n=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 7:t.push(new Point(1,0)),t.push(new Point(0,2)),t.push(new Point(3,2)),t.push(new Point(5,0)),n=new Point(1,Util.randomInteger(1,3)),r=new Point(Util.randomInteger(1,3),Util.randomInteger(1,3));break;case 8:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(2,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 9:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(4,5)),t.push(new Point(5,2)),t.push(new Point(2,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 10:t.push(new Point(0,2)),t.push(new Point(1,4)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(3,0)),t.push(new Point(1,0)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4));break;case 11:t.push(new Point(0,2)),t.push(new Point(1,3)),t.push(new Point(3,4)),t.push(new Point(4,2)),t.push(new Point(3,0)),t.push(new Point(1,1)),r=new Point(Util.randomInteger(1,4),Util.randomInteger(1,4))}for(var s=0;s<t.length;s++)t[s]=t[s].multiply(n).add(r);return t},InteractiveGrids.AreShapesSame=function(e,t){return InteractiveGrids.AreShapesSimilar(e,t,1)},InteractiveGrids.AreShapesSimilar=function(e,t,n){if(e.length!=t.length)return!1;function r(e){var t=[];for(var n=0;n<e.length;n++){var r=e[n],i=e[(n-1+e.length)%e.length],s=e[(n+1)%e.length],o=Math.abs(Util.findAngle(r.x,r.y,s.x,s.y)-Util.findAngle(r.x,r.y,i.x,i.y));o=Util.radianToDegree(o),o>180&&(o=360-o),t.push([r.getDistance(s,!0),r.getDistance(i,!0),o,r])}return t}var i=r(e),s=r(t),o=0;for(var u=0;u<i.length;u++)o<i[u][0]&&(o=i[u][0]);var a=0;for(var u=0;u<s.length;u++)a<s[u][0]&&(a=s[u][0]);var f;n==undefined?f=o/a:f=n;var l=1e-5,c=i.length;function h(e,t,n){for(var r=0;r<=c;r++){var i=!0;for(var s=0;s<=c;s++){var o=(s+r+c)%c;if(e[s%c][2]==t[o][2]){var u=e[s%c][0]/t[o][n?1:0];if(f+l>u&&f-l<u)continue;i=!1}else i=!1}if(i==1)return InteractiveGrids.MoveShapeTo(e,t,r,n),!0}}return h(i,s,false)==1?!0:h(i,s,true)==1?!0:(i=i.reverse(),h(i,s,false)==1?!0:h(i,s,true)==1?!0:!1)},InteractiveGrids.GetId=function(){return InteractiveGrids.order?InteractiveGrids.order++:(InteractiveGrids.order=1,InteractiveGrids.GetId())},InteractiveGrids.MoveShapeTo=function(e,t,n,r){if(e.length!=t.length)return;var i,s=new AnimationHelper({}),o={};console.log("reverse: "+r);for(var u=0;u<e.length;u++)o["point"+u]=e[u][3],s["point"+u]=t[(u+n+t.length-(r===!0&&t.length>3?0:0))%t.length][3];s.animate({style:o,duration:2e3,animationType:"easeInEaseOut",update:function(){i&&i.remove(),i=new Path;for(var e=0;!0;e++){if(!this["point"+e])break;i.add(this["point"+e])}i.closed=!0,i.strokeColor="#000",i.strokeWidth=2},callback:function(){Interaction.resume()}})};var NumberWithShape=function(e){this.animate=Item.prototype.animate,this.position=e.position,this.number=e.number,this.size=e.size,e.isHiddenNumber?this.isHiddenNumber=e.isHiddenNumber:this.isHiddenNumber=!1,e.fillColor?this.fillColor=e.fillColor:this.fillColor="#a9dbe4",e.strokeColor?this.strokeColor=e.strokeColor:this.strokeColor="#41818a"};NumberWithShape.prototype.draw=function(){this.removeShape(),this.cubeArray=[],this.sqrt=Math.ceil(Math.sqrt(this.number));if(this.number==3)for(var e=0;e<this.number;e++)this.cubeArray.push((new Path.Cube(this.position.add(this.size*e,0),this.size,new Point(.4,.3))).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}));else for(var e=0;e<this.number;e++){var t=this.position;t=t.add(this.size*Math.floor(e%this.sqrt),-this.size*Math.floor(e/this.sqrt)),this.cubeArray.push((new Path.Cube(t,this.size,new Point(.4,.3))).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}))}this.width=this.size*this.sqrt,this.number<=8?this.height=this.size*Math.ceil(this.number/2):this.height=this.size*4,this.number==3&&(this.width=3*this.size,this.height=this.size),this.numberText=new PointText(this.position.add(this.width*.5,this.size+28)),this.numberText.justification="center",this.numberText.content=this.number,this.numberText.fontSize=16,this.isHiddenNumber===!0&&this.setOpacity(0)},NumberWithShape.prototype.setOpacity=function(e){for(var t=0;t<this.cubeArray.length;t++)this.cubeArray[t].opacity=e;this.numberText.opacity=e},NumberWithShape.prototype.removeShape=function(){this.cubeArray&&$(this.cubeArray).each(function(){this.remove()}),this.numberText&&this.numberText.remove()};var Pattern=Class.extend({init:function(e,t,n){this.coefficient=e,this.constant=t,this.length=n,this.cubeSize=25},setHiddenNumber:function(e){this.hiddenNumber=e},draw:function(e){var t=[],n=this,r;console.log(""+this,this.hiddenNumber);var i=0;this.cubeSize++;do{i=0,this.cubeSize--;for(var s=0;s<this.numbers.length;s++)i+=(s==0?0:this.cubeSize)+this.cubeSize*Math.ceil(this.numbers[s]/Math.ceil(Math.sqrt(this.numbers[s])))}while(i>500);$(this.numbers).each(function(r){var i=new NumberWithShape({position:e.add(120*r,0),number:this,size:n.cubeSize,isHiddenNumber:this==n.hiddenNumber});i.draw(),t.push(i)}),e=e.add(-i*.5,0),i=0;for(var s=0;s<t.length;s++)i+=s>0?this.cubeSize:0,t[s].position=e.add(i,0),t[s].draw(),i+=t[s].width,t[s].number==this.hiddenNumber&&(r=t[s].numberText.position);return this.numberWithShapes=t,r},showHiddenNumber:function(e,t){if(e==undefined||isNaN(e))e=0;if(t==undefined||isNaN(e))t=0;var n;for(var r=0;r<this.numberWithShapes.length;r++)this.numberWithShapes[r].isHiddenNumber===!0&&(n=this.numberWithShapes[r]);e==0?n.setOpacity(1):(n.opacity=0,n.animate({style:{opacity:1},duration:e,delay:t,update:function(){this.setOpacity(this.opacity)}}))},remove:function(){for(var e=0;e<this.numberWithShapes.length;e++)this.numberWithShapes[e].removeShape()}}),LinearPattern=Pattern.extend({init:function(e,t,n){this._super(e,t,n);var r=[];for(var i=1;i<=n;i++)r.push(e*i+t);this.numbers=r},toString:function(){return(this.coefficient>1?this.coefficient:"")+"n"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),QuadraticPattern=Pattern.extend({init:function(e,t,n){this._super(e,t,n),this.cubeSize=20;var r=[];for(var i=1;i<=n;i++)r.push(e*i*i+t);this.numbers=r},toString:function(){return(this.coefficient>1?this.coefficient:"")+"n²"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),ExponentialPattern=Pattern.extend({init:function(e,t,n,r){this._super(e,t,r),this.base=n,this.cubeSize=20;var i=[];for(var s=1;s<=r;s++)i.push(e*Math.pow(n,s)+t);this.numbers=i},toString:function(){return(this.coefficient>1?this.coefficient:"")+"("+this.base+"<sup>n</sup>)"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),ShapePattern=Class.extend({init:function(e){e.position?this.position=e.position:this.position=new Point(0,0),e.number&&(this.number=e.number),e.pieceType&&(this.pieceType=e.pieceType),e.pieceStyle&&(this.pieceStyle=e.pieceStyle)},generateShapePoints:function(){throw this.shapePoints=[],"This method should be implemented"},isEqual:function(e){this.generateShapePoints(!0),e.generateShapePoints(!0);if(this.shapePoints.length!=e.shapePoints.length)return!1;var t=this.shapePoints.length,n=[];for(var r=0;r<t;r++)n.push(!1);for(var r=0;r<t;r++)for(var i=0;i<t;i++)this.shapePoints[r].equals(e.shapePoints[i])&&(n[r]=!0);this.generateShapePoints(),e.generateShapePoints();for(var r=0;r<t;r++)if(n[r]==0)return!1;return!0},drawAPiece:function(e,t){return PieceFactory({type:this.pieceType,upperLeftPosition:e,gridSize:t,style:this.pieceStyle})},getWidth:function(){this.generateShapePoints(!0);var e=[];for(var t=0;t<this.shapePoints.length;t++)e[t]=0;for(var t=0;t<this.shapePoints.length;t++)e[this.shapePoints[t].y]++;var n=0;for(var t=0;t<e.length;t++)n<e[t]&&(n=e[t]);return n}});InteractiveGrids.prototype.cleanGrids=function(e,t){for(var n=0;n<this.pieces.length;n++)e==undefined?this.pieces[n].remove():this.pieces[n].animate({style:{opacity:0},duration:e,delay:t,callback:function(){this.remove()}});this.pieces=[]},InteractiveGrids.prototype.drawPattern=function(e){var t=[];e.generateShapePoints();for(var n=0;n<e.shapePoints.length;n++)t.push(this.extractAbsolutePointFromGridPoint(e.shapePoints[n].multiply(1,-1).add(0,this.rows-1)));var r=[];for(var n=0;n<t.length;n++)r.push(e.drawAPiece(t[n],this.size));return r},InteractiveGrids.prototype.createTool=function(e){var t=new Tool,n=this;this.inputPattern=new window[e]({}),this.inputPattern.pieceType=Interaction.pieceType,this.inputPattern.pieceStyle=Interaction.pieceStyle,this.pieces=[],t.onMouseDown=function(e){if(this.down==1)return;this.down=!0;var t=n.extractGridPointFromAbsolutePoint(e.point);for(var r=0;r<n.pieces.length;r++)if(n.pieces[r]&&n.pieces[r].gridPoint.equals(t)){t=!1,n.pieces[r].remove(),n.pieces.splice(r,1);break}if(t!=0){var i=n.inputPattern.drawAPiece(n.extractAbsolutePointFromGridPoint(t),n.size);i.gridPoint=t,n.pieces.push(i)}},t.onMouseUp=function(e){this.down=!1},t.activate()},InteractiveGrids.prototype.getInputPattern=function(){this.inputPattern.shapePoints=[],this.inputPoints=[],this.inputPattern.generateShapePoints=function(){return this.shapePoints};if(this.pieces.length==0)return this.inputPattern;for(var e=0;e<this.pieces.length;e++)this.pieces[e]!=undefined&&this.inputPoints.push(this.pieces[e].gridPoint);for(var e=0;e<this.inputPoints.length;e++)this.inputPattern.shapePoints[e]=this.inputPoints[e].subtract(0,this.rows).multiply(1,-1);var t=this.inputPattern.shapePoints[0].x,n=this.inputPattern.shapePoints[0].y;for(var e=1;e<this.inputPoints.length;e++)t>this.inputPattern.shapePoints[e].x&&(t=this.inputPattern.shapePoints[e].x);for(var e=1;e<this.inputPoints.length;e++)n>this.inputPattern.shapePoints[e].y&&(n=this.inputPattern.shapePoints[e].y);for(var e=0;e<this.inputPoints.length;e++)this.inputPattern.shapePoints[e]=this.inputPattern.shapePoints[e].subtract(t,n);return this.inputPattern},InteractiveGrids.prototype.extractAbsolutePointFromGridPoint=function(e){return e.multiply(this.size,this.size).add(this.position)},InteractiveGrids.prototype.extractGridPointFromAbsolutePoint=function(e){e=e.subtract(this.position);var t=(new Point(Util.floor(e.x,this.size),Util.floor(e.y,this.size))).divide(this.size,this.size);return t.x>=this.cols?!1:t.x<0?!1:t.y>=this.rows?!1:t.y<0?!1:t};var TriangleShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"red",opacity:.8}},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number;t++)for(var n=0;n<=t;n++)this.shapePoints.push(new Point(n,t-n));if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position)}}),DoubleXShapePattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];switch(this.number){case 4:this.shapePoints.push(new Point(-3,2)),this.shapePoints.push(new Point(-3,-2)),this.shapePoints.push(new Point(3,-2)),this.shapePoints.push(new Point(3,2)),this.shapePoints.push(new Point(-2,-3)),this.shapePoints.push(new Point(-2,3)),this.shapePoints.push(new Point(2,3)),this.shapePoints.push(new Point(2,-3));case 3:this.shapePoints.push(new Point(2,-1)),this.shapePoints.push(new Point(-2,-1)),this.shapePoints.push(new Point(-2,1)),this.shapePoints.push(new Point(2,1)),this.shapePoints.push(new Point(1,2)),this.shapePoints.push(new Point(1,-2)),this.shapePoints.push(new Point(-1,-2)),this.shapePoints.push(new Point(-1,2));case 2:this.shapePoints.push(new Point(-1,0)),this.shapePoints.push(new Point(1,0)),this.shapePoints.push(new Point(0,1)),this.shapePoints.push(new Point(0,-1));case 1:this.shapePoints.push(new Point(0,0))}for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.number-1,0);if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var n=this.shapePoints[0].x,r=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)n>this.shapePoints[t].x&&(n=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)r>this.shapePoints[t].y&&(r=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(n,r)}},getWidth:function(){return this.number<2?3:this.number*2-1}}),XPlusShapePattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[new Point(1,1),new Point(-1,1),new Point(-1,-1),new Point(1,-1)];for(var t=0;t<this.number;t++)for(var n=0;t>0&&n<4||n==0&&t==n;n++){var r=new Point(t,t),i,s;switch(n%4){case 0:i=0,s=-1;break;case 1:i=1,s=0;break;case 2:i=-1,s=0;break;case 3:i=0,s=1}this.shapePoints.push(r.multiply(i,s))}for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.number-1,0);if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var o=this.shapePoints[0].x,u=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)o>this.shapePoints[t].x&&(o=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)u>this.shapePoints[t].y&&(u=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(o,u)}},getWidth:function(){return this.number<2?3:this.number*2-1}}),PlusShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"#3C9",strokeCap:"square"}},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number;t++)for(var n=0;t>0&&n<4||n==0&&t==n;n++){var r=new Point(t,t),i,s;switch(n%4){case 0:i=0,s=-1;break;case 1:i=1,s=0;break;case 2:i=-1,s=0;break;case 3:i=0,s=1}this.shapePoints.push(r.multiply(i,s).add(this.number-1,0))}if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var o=this.shapePoints[0].x,u=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)o>this.shapePoints[t].x&&(o=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)u>this.shapePoints[t].y&&(u=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(o,u)}},getWidth:function(){return this.number*2-1}}),HexagonShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"#f99"}},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number*this.number;t++)this.shapePoints.push(new Point(Math.floor(t/this.number),Math.floor(t%this.number)));if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position)},getWidth:function(){return this.number}}),QuestionMarkPattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){this.shapePoints=[new Point(0,2)];if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position)},drawAPiece:function(e,t){var n=new Raster("question_mark");n.position=e.add(n.bounds.width*.5,n.bounds.height*.2)}}),TShapePattern=ShapePattern.extend({init:function(e){this._super(e)},getWidth:function(){return this.number*2-1},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];switch(this.number){case 4:this.shapePoints.push(new Point(-3,0)),this.shapePoints.push(new Point(3,0)),this.shapePoints.push(new Point(0,3));case 3:this.shapePoints.push(new Point(-2,0)),this.shapePoints.push(new Point(2,0)),this.shapePoints.push(new Point(0,2));case 2:this.shapePoints.push(new Point(-1,0)),this.shapePoints.push(new Point(1,0)),this.shapePoints.push(new Point(0,1));case 1:this.shapePoints.push(new Point(0,0))}if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var n=this.shapePoints[0].x,r=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)n>this.shapePoints[t].x&&(n=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)r>this.shapePoints[t].y&&(r=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(n,r)}}}),NumberPattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[new Point(0,0)];if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var n=this.shapePoints[0].x,r=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)n>this.shapePoints[t].x&&(n=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)r>this.shapePoints[t].y&&(r=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(n,r)}},drawAPiece:function(e,t){var n=new PointText(new Point(0,0));return n.content=(this.number-1)*3+1,n.set_style({fontSize:t,justification:"center"}),n.position=n.position.add(e).add(t*.5,t),n}}),XShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"red",opacity:.8}},getWidth:function(){return this.number*2-1},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number;t++)for(var n=0;t>0&&n<4||n==0&&t==n;n++){var r=new Point(t,t),i,s;switch(n%4){case 0:i=-1,s=-1;break;case 1:i=1,s=-1;break;case 2:i=-1,s=1;break;case 3:i=1,s=1}this.shapePoints.push(r.multiply(i,s).add(this.number-1,0))}if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var o=this.shapePoints[0].x,u=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)o>this.shapePoints[t].x&&(o=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)u>this.shapePoints[t].y&&(u=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(o,u)}}}),PieceFactory=function(e){var t=new Path,n=e.gridSize;switch(e.type){case 0:var r=[new Point(0,0),new Point(0,n),new Point(n,n),new Point(n,0)];break;case 1:var r=[new Point(0,n*.5),new Point(n*.25,n),new Point(n*.75,n),new Point(n,n*.5),new Point(n*.75,0),new Point(n*.25,0)];break;case 2:var r=[new Point(0,0),new Point(0,n),new Point(n,n)];break;case 3:var r=[new Point(n*.5,-0.5),new Point(n,n*.5-.5),new Point(n*.5,n-.5),new Point(0,n*.5-.5)];break;case 4:var r=[new Point(n*.5,0),new Point(0,n),new Point(n,n)];break;case 5:var r=[new Point(n*.5,0),new Point(0,n*.4),new Point(n*.2,n),new Point(n*.8,n),new Point(n,n*.4)]}t.closed=!0;for(var i=0;i<r.length;i++)t.add(r[i]);var s=Util.centerOfPoints(r);for(var i=1;i<=r.length;i++){var o=new Path;o.add(s),o.add(r[i-1]),o.add(r[i%r.length]),o.closed=!0,o.set_style({strokeColor:new RgbColor(0,0,0,0),fillColor:"#fff",opacity:Math.abs(i-r.length*.5-.25)/r.length}),o.position=o.position.add(e.upperLeftPosition)}return t.position=t.position.add(e.upperLeftPosition),t.set_style(e.style),t},Animation={images:[],init:function(e){Animation.container=e,Animation.grids=new InteractiveGrids({position:new Point(50.5,10.5),size:22,cols:30,rows:7,style:{strokeColor:"#CCC"}}),Animation.pieceType=0,Animation.pieceStyle={strokeColor:"#000",fillColor:"#f6f"};var t=[new TShapePattern({position:new Point(3,2),number:2}),new NumberPattern({position:new Point(3,0),number:2}),new TShapePattern({position:new Point(10,2),number:3}),new NumberPattern({position:new Point(10,0),number:3}),new TShapePattern({position:new Point(19,2),number:4}),new NumberPattern({position:new Point(19,0),number:4})];for(var n=0;n<t.length;n++){var r=t[n];r.position=r.position.add(2,0),r.pieceStyle=Animation.pieceStyle,r.pieceType=Animation.pieceType;var i=Animation.grids.drawPattern(r);for(var s=0;s<i.length;s++)i[s].set_style({opacity:0}),i[s].animate({style:{opacity:1},duration:1e3,delay:1500*n+1e3-100*s})}Main.animationFinished(t.length*2e3)}},Interaction={getFramework:function(){return"paper"},images:[{id:"question_mark",src:"/assets/animations/oruntu_(sekil)/question_mark.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki şekil örüntüsünde soru işaretinin yerinde olusmasi gereken şekli, yandaki mavi kareli bölgede gerekli karelere basarak oluşturunuz"),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.appendStatus({bottom:"30px",right:"150px"}),Interaction.setRandomGenerator(6),Interaction.prepareNextQuestion()},nextQuestion:function(e){Main.interactionProject.activeLayer.removeChildren(),Interaction.staticGrids=new InteractiveGrids({rows:9,cols:23,position:new Point(10.5,15.5),size:18,style:{strokeColor:"#bbb"}}),Interaction.inputGrids=new InteractiveGrids({rows:9,cols:8,position:Interaction.staticGrids.position.add(Interaction.staticGrids.size*Interaction.staticGrids.cols+10,0),size:Interaction.staticGrids.size,style:{strokeColor:"#acf"}});var t=(new LinearPattern(1,0,4)).numbers,n=1,r,i=Util.randomInteger(0,t.length),s=Math.random()*.5,o=Math.random()*.5,u=Math.random()*.5;Interaction.pieceType=Util.randomInteger(0,6),Interaction.pieceStyle={fillColor:new RgbColor(s,o,u),strokeColor:new RgbColor(s*.5,o*.5,u*.5)};var a=0;for(var f=0;f<t.length;f++){var l;switch(e){case 0:r="TriangleShapePattern",l=new TriangleShapePattern({position:new Point(0,2)});break;case 1:r="XShapePattern",l=new XShapePattern({position:new Point(0,4)}),a=-1.8;break;case 2:r="HexagonShapePattern",l=new HexagonShapePattern({position:new Point(0,2)});break;case 3:r="PlusShapePattern",l=new PlusShapePattern({position:new Point(0,4)}),a=-1.8;break;case 4:r="XPlusShapePattern",l=new XPlusShapePattern({position:new Point(0,4)}),a=-1.8;break;case 5:r="DoubleXShapePattern",l=new DoubleXShapePattern({position:new Point(0,4)}),a=-1.8}l.number=t[f],l.pieceType=Interaction.pieceType,l.pieceStyle=Interaction.pieceStyle;if(f==i){var c=new QuestionMarkPattern({});c.position=l.position.add(n,a),Interaction.staticGrids.drawPattern(c),l.position=l.position.add(n,0),Interaction.correctAnswer=l,n+=4}else l.position=l.position.add(n,0),Interaction.staticGrids.drawPattern(l),n+=l.getWidth()+1}Interaction.inputGrids.createTool(r)},preCheck:function(){var e=Interaction.inputGrids.getInputPattern();e.generateShapePoints();if(e.shapePoints.length==0)return Interaction.setStatus("Lutfen bir sekil ciziniz","alert"),!1},isAnswerCorrect:function(){return Interaction.inputGrids.getInputPattern().isEqual(Interaction.correctAnswer)?!0:!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlis cevap. Dogrusu girdi kisminda gozukecektir.","alert"),Interaction.pause(),Interaction.inputGrids.cleanGrids(700,1e3),AnimationManager.delay(function(){var e=Interaction.correctAnswer;e.position=e.position.multiply(0,1).add(1,0),Interaction.inputGrids.drawPattern(e),Interaction.resume()},2e3)}};
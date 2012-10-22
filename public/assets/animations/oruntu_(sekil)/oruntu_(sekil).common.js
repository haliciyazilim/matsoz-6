var ShapePattern=Class.extend({init:function(e){e.position?this.position=e.position:this.position=new Point(0,0),e.number&&(this.number=e.number),e.pieceType&&(this.pieceType=e.pieceType),e.pieceStyle&&(this.pieceStyle=e.pieceStyle)},generateShapePoints:function(){throw this.shapePoints=[],"This method should be implemented"},isEqual:function(e){this.generateShapePoints(!0),e.generateShapePoints(!0);if(this.shapePoints.length!=e.shapePoints.length)return!1;var t=this.shapePoints.length,n=[];for(var r=0;r<t;r++)n.push(!1);for(var r=0;r<t;r++)for(var i=0;i<t;i++)this.shapePoints[r].equals(e.shapePoints[i])&&(n[r]=!0);this.generateShapePoints(),e.generateShapePoints();for(var r=0;r<t;r++)if(n[r]==0)return!1;return!0},drawAPiece:function(e,t){return PieceFactory({type:this.pieceType,upperLeftPosition:e,gridSize:t,style:this.pieceStyle})},getWidth:function(){this.generateShapePoints(!0);var e=[];for(var t=0;t<this.shapePoints.length;t++)e[t]=0;for(var t=0;t<this.shapePoints.length;t++)e[this.shapePoints[t].y]++;var n=0;for(var t=0;t<e.length;t++)n<e[t]&&(n=e[t]);return n}});InteractiveGrids.prototype.cleanGrids=function(e,t){for(var n=0;n<this.pieces.length;n++)e==undefined?this.pieces[n].remove():this.pieces[n].animate({style:{opacity:0},duration:e,delay:t,callback:function(){this.remove()}});this.pieces=[]},InteractiveGrids.prototype.drawPattern=function(e){var t=[];e.generateShapePoints();for(var n=0;n<e.shapePoints.length;n++)t.push(this.extractAbsolutePointFromGridPoint(e.shapePoints[n].multiply(1,-1).add(0,this.rows-1)));var r=[];for(var n=0;n<t.length;n++)r.push(e.drawAPiece(t[n],this.size));return r},InteractiveGrids.prototype.createTool=function(e){var t=new Tool,n=this;this.inputPattern=new window[e]({}),this.inputPattern.pieceType=Interaction.pieceType,this.inputPattern.pieceStyle=Interaction.pieceStyle,this.pieces=[],t.onMouseDown=function(e){if(this.down==1)return;this.down=!0;var t=n.extractGridPointFromAbsolutePoint(e.point);for(var r=0;r<n.pieces.length;r++)if(n.pieces[r]&&n.pieces[r].gridPoint.equals(t)){t=!1,n.pieces[r].remove(),n.pieces.splice(r,1);break}if(t!=0){var i=n.inputPattern.drawAPiece(n.extractAbsolutePointFromGridPoint(t),n.size);i.gridPoint=t,n.pieces.push(i)}},t.onMouseUp=function(e){this.down=!1},t.activate()},InteractiveGrids.prototype.getInputPattern=function(){this.inputPattern.shapePoints=[],this.inputPoints=[],this.inputPattern.generateShapePoints=function(){return this.shapePoints};if(this.pieces.length==0)return this.inputPattern;for(var e=0;e<this.pieces.length;e++)this.pieces[e]!=undefined&&this.inputPoints.push(this.pieces[e].gridPoint);for(var e=0;e<this.inputPoints.length;e++)this.inputPattern.shapePoints[e]=this.inputPoints[e].subtract(0,this.rows).multiply(1,-1);var t=this.inputPattern.shapePoints[0].x,n=this.inputPattern.shapePoints[0].y;for(var e=1;e<this.inputPoints.length;e++)t>this.inputPattern.shapePoints[e].x&&(t=this.inputPattern.shapePoints[e].x);for(var e=1;e<this.inputPoints.length;e++)n>this.inputPattern.shapePoints[e].y&&(n=this.inputPattern.shapePoints[e].y);for(var e=0;e<this.inputPoints.length;e++)this.inputPattern.shapePoints[e]=this.inputPattern.shapePoints[e].subtract(t,n);return this.inputPattern},InteractiveGrids.prototype.extractAbsolutePointFromGridPoint=function(e){return e.multiply(this.size,this.size).add(this.position)},InteractiveGrids.prototype.extractGridPointFromAbsolutePoint=function(e){e=e.subtract(this.position);var t=(new Point(Util.floor(e.x,this.size),Util.floor(e.y,this.size))).divide(this.size,this.size);return t.x>=this.cols?!1:t.x<0?!1:t.y>=this.rows?!1:t.y<0?!1:t};var TriangleShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"red",opacity:.8}},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number;t++)for(var n=0;n<=t;n++)this.shapePoints.push(new Point(n,t-n));if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position)}}),DoubleXShapePattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];switch(this.number){case 4:this.shapePoints.push(new Point(-3,2)),this.shapePoints.push(new Point(-3,-2)),this.shapePoints.push(new Point(3,-2)),this.shapePoints.push(new Point(3,2)),this.shapePoints.push(new Point(-2,-3)),this.shapePoints.push(new Point(-2,3)),this.shapePoints.push(new Point(2,3)),this.shapePoints.push(new Point(2,-3));case 3:this.shapePoints.push(new Point(2,-1)),this.shapePoints.push(new Point(-2,-1)),this.shapePoints.push(new Point(-2,1)),this.shapePoints.push(new Point(2,1)),this.shapePoints.push(new Point(1,2)),this.shapePoints.push(new Point(1,-2)),this.shapePoints.push(new Point(-1,-2)),this.shapePoints.push(new Point(-1,2));case 2:this.shapePoints.push(new Point(-1,0)),this.shapePoints.push(new Point(1,0)),this.shapePoints.push(new Point(0,1)),this.shapePoints.push(new Point(0,-1));case 1:this.shapePoints.push(new Point(0,0))}for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.number-1,0);if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var n=this.shapePoints[0].x,r=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)n>this.shapePoints[t].x&&(n=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)r>this.shapePoints[t].y&&(r=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(n,r)}},getWidth:function(){return this.number<2?3:this.number*2-1}}),XPlusShapePattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[new Point(1,1),new Point(-1,1),new Point(-1,-1),new Point(1,-1)];for(var t=0;t<this.number;t++)for(var n=0;t>0&&n<4||n==0&&t==n;n++){var r=new Point(t,t),i,s;switch(n%4){case 0:i=0,s=-1;break;case 1:i=1,s=0;break;case 2:i=-1,s=0;break;case 3:i=0,s=1}this.shapePoints.push(r.multiply(i,s))}for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.number-1,0);if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var o=this.shapePoints[0].x,u=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)o>this.shapePoints[t].x&&(o=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)u>this.shapePoints[t].y&&(u=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(o,u)}},getWidth:function(){return this.number<2?3:this.number*2-1}}),PlusShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"#3C9",strokeCap:"square"}},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number;t++)for(var n=0;t>0&&n<4||n==0&&t==n;n++){var r=new Point(t,t),i,s;switch(n%4){case 0:i=0,s=-1;break;case 1:i=1,s=0;break;case 2:i=-1,s=0;break;case 3:i=0,s=1}this.shapePoints.push(r.multiply(i,s).add(this.number-1,0))}if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var o=this.shapePoints[0].x,u=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)o>this.shapePoints[t].x&&(o=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)u>this.shapePoints[t].y&&(u=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(o,u)}},getWidth:function(){return this.number*2-1}}),HexagonShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"#f99"}},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number*this.number;t++)this.shapePoints.push(new Point(Math.floor(t/this.number),Math.floor(t%this.number)));if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position)},getWidth:function(){return this.number}}),QuestionMarkPattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){this.shapePoints=[new Point(0,2)];if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position)},drawAPiece:function(e,t){var n=new Raster("question_mark");n.position=e.add(n.bounds.width*.5,n.bounds.height*.2)}}),TShapePattern=ShapePattern.extend({init:function(e){this._super(e)},getWidth:function(){return this.number*2-1},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];switch(this.number){case 4:this.shapePoints.push(new Point(-3,0)),this.shapePoints.push(new Point(3,0)),this.shapePoints.push(new Point(0,3));case 3:this.shapePoints.push(new Point(-2,0)),this.shapePoints.push(new Point(2,0)),this.shapePoints.push(new Point(0,2));case 2:this.shapePoints.push(new Point(-1,0)),this.shapePoints.push(new Point(1,0)),this.shapePoints.push(new Point(0,1));case 1:this.shapePoints.push(new Point(0,0))}if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var n=this.shapePoints[0].x,r=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)n>this.shapePoints[t].x&&(n=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)r>this.shapePoints[t].y&&(r=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(n,r)}}}),NumberPattern=ShapePattern.extend({init:function(e){this._super(e)},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[new Point(0,0)];if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var n=this.shapePoints[0].x,r=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)n>this.shapePoints[t].x&&(n=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)r>this.shapePoints[t].y&&(r=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(n,r)}},drawAPiece:function(e,t){var n=new PointText(new Point(0,0));return n.content=(this.number-1)*3+1,n.set_style({fontSize:t,justification:"center"}),n.position=n.position.add(e).add(t*.5,t),n}}),XShapePattern=ShapePattern.extend({init:function(e){this._super(e),this.patternStyle={strokeColor:"dark",fillColor:"red",opacity:.8}},getWidth:function(){return this.number*2-1},generateShapePoints:function(e){e==undefined&&(e=!1),this.shapePoints=[];for(var t=0;t<this.number;t++)for(var n=0;t>0&&n<4||n==0&&t==n;n++){var r=new Point(t,t),i,s;switch(n%4){case 0:i=-1,s=-1;break;case 1:i=1,s=-1;break;case 2:i=-1,s=1;break;case 3:i=1,s=1}this.shapePoints.push(r.multiply(i,s).add(this.number-1,0))}if(!e)for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].add(this.position);else{var o=this.shapePoints[0].x,u=this.shapePoints[0].y;for(var t=1;t<this.shapePoints.length;t++)o>this.shapePoints[t].x&&(o=this.shapePoints[t].x);for(var t=1;t<this.shapePoints.length;t++)u>this.shapePoints[t].y&&(u=this.shapePoints[t].y);for(var t=0;t<this.shapePoints.length;t++)this.shapePoints[t]=this.shapePoints[t].subtract(o,u)}}}),PieceFactory=function(e){var t=new Path,n=e.gridSize;switch(e.type){case 0:var r=[new Point(0,0),new Point(0,n),new Point(n,n),new Point(n,0)];break;case 1:var r=[new Point(0,n*.5),new Point(n*.25,n),new Point(n*.75,n),new Point(n,n*.5),new Point(n*.75,0),new Point(n*.25,0)];break;case 2:var r=[new Point(0,0),new Point(0,n),new Point(n,n)];break;case 3:var r=[new Point(n*.5,-0.5),new Point(n,n*.5-.5),new Point(n*.5,n-.5),new Point(0,n*.5-.5)];break;case 4:var r=[new Point(n*.5,0),new Point(0,n),new Point(n,n)];break;case 5:var r=[new Point(n*.5,0),new Point(0,n*.4),new Point(n*.2,n),new Point(n*.8,n),new Point(n,n*.4)]}t.closed=!0;for(var i=0;i<r.length;i++)t.add(r[i]);var s=Util.centerOfPoints(r);for(var i=1;i<=r.length;i++){var o=new Path;o.add(s),o.add(r[i-1]),o.add(r[i%r.length]),o.closed=!0,o.set_style({strokeColor:new RgbColor(0,0,0,0),fillColor:"#fff",opacity:Math.abs(i-r.length*.5-.25)/r.length}),o.position=o.position.add(e.upperLeftPosition)}return t.position=t.position.add(e.upperLeftPosition),t.set_style(e.style),t};
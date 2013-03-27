/*
*   new Angle({
*       angle:30,
*       phase:15,
*       complement:angle1
*       center:new Point(100,200)
*   })
*/
function Angle(e){this.animate=Item.prototype.animate,this.angle=e.angle,e.phase?this.phase=e.phase:this.phase=0,e.comlement&&(this.complement=e.complement),e.suplement&&(this.suplement=e.suplement),this.centerPoint=e.center,e.textPosition&&(this.textPosition=e.textPosition),e.isNeighbour&&(this.isNeighbour=e.isNeighbour),this.elements={},this.radius=Angle.RADIUS}Angle.prototype.setAngle=function(e){this.angle=e,this.suplement&&this.suplement.setAngle(180-this.angle),this.complement&&this.complement.setAngle(90-this.angle)},Angle.prototype.setComplement=function(e){this.complement=e,this.complement.setAngle(90-this.angle),this.complement.owner=this},Angle.prototype.setSuplement=function(e){this.suplement=e,this.suplement.setAngle(180-this.angle),this.suplement.owner=this},Angle.prototype.redraw=function(e){this.secondLeg&&this.secondLeg.remove();var t;e==undefined?t=this.angle:typeof e=="number"?t=e:t=360-Util.radianToDegree(Util.findAngle(this.centerPoint.x,-this.centerPoint.y,e.x,-e.y))-this.phase;if(this.suplement||this.owner&&this.owner.suplement)t>180&&t<=270&&(t=180),t>270&&(t=0),t<0&&(t=0);else if(this.complement||this.owner&&this.owner.complement)t>90&&t<=270&&(t=90),t>270&&(t=0),t<0&&(t=0);var n=[0,30,45,60,90,120,135,150,180],r=3;for(var i=0;i<n.length;i++)if(t-n[i]>-r&&t-n[i]<r){t=n[i];break}this.angle=Math.floor(t),this.firstLeg&&this.firstLeg.remove(),this.isNeighbour==1&&(this.phase=this.owner.angle+this.owner.phase,this.centerPoint=this.owner.centerPoint),this.suplement&&this.suplement.redraw(180-this.angle),this.complement&&this.complement.redraw(90-this.angle);var s=this.firstLegPoint=this.centerPoint.add(this.radius,0).getRotatedPoint(-this.phase,this.centerPoint),o=this.secondLegPoint=this.centerPoint.add(this.radius,0).getRotatedPoint(-(this.phase+this.angle),this.centerPoint);this.firstLeg=new Path.OneSidedArrow(this.centerPoint,s,Angle.ARROW_HEAD_SIZE,Angle.ARROW_HEAD_ANGLE),this.secondLeg=new Path.OneSidedArrow(this.centerPoint,o,Angle.ARROW_HEAD_SIZE,Angle.ARROW_HEAD_ANGLE),this.isInteractive&&(this.interactiveLeg&&this.interactiveLeg.remove(),this.secondLeg.set_style({strokeColor:"#900",fillColor:"#900"}),this.interactiveLeg=(new Path.Line(this.centerPoint,o)).set_style({strokeColor:new RgbColor(0,0,0,0),strokeWidth:20,fillColor:new RgbColor(0,0,0,0)}),this.interactiveLeg.class="interactive_angle_leg",this.interactiveLeg.angleObject=this),this.arc&&this.arc.remove(),this.arcCircle&&this.arcCircle.remove();if(this.angle==90){this.arc=new Path,this.arc.add(this.centerPoint.findPointTo(s,this.radius*.2));var u=this.centerPoint.findPointTo(s,this.radius*.2*Math.sqrt(2)).getRotatedPoint(-this.angle*.5,this.centerPoint);this.arc.add(u),this.arc.add(this.centerPoint.findPointTo(o,this.radius*.2)),this.arc.set_style(Angle.ARC_STYLE),this.arcCircle=(new Path.Circle(this.centerPoint.findPointTo(u,50,!0),3)).set_style({fillColor:"#000"})}else this.arc=new Path.ArcByAngle(this.centerPoint,this.radius*.2,-(this.angle+this.phase),-this.phase),this.arc.set_style(Angle.ARC_STYLE);this.arcText&&this.arcText.remove();var a=this.centerPoint.add(this.radius*.2+22,0).getRotatedPoint(-(this.angle*.5+this.phase),this.centerPoint);this.arcText=new PointText(a.add(0,7)),this.arcText.content=this.angle+"°",this.arcText.fontSize=14,this.arcText.justification="center";if(this.textPosition){var f="",l="";this.suplement&&(f=this.angle+"° + "+(180-this.angle)+"°"+" = 180°",l=(this.suplement.isNeighbour?"Komşu ":"")+"Bütünler açı"),this.complement&&(f=this.angle+"° + "+(90-this.angle)+"°"+" = 90°",l=(this.complement.isNeighbour?"Komşu ":"")+"Tümler açı"),this.angleText&&this.angleText.remove(),this.typeText&&this.typeText.remove(),this.angleText=new PointText(this.textPosition),this.angleText.content=f,this.angleText.set_style(Angle.TEXT_STYLE),this.typeText=new PointText(this.textPosition.add(0,25)),this.typeText.content=l,this.typeText.set_style(Angle.TEXT_STYLE)}},Angle.prototype.draw=function(e,t){e==undefined&&(e=!1),t==undefined&&(t=0),this.isInteractive=e,this.redraw(this.angle);if(e===!0){console.log("tool will be created");var n=new Tool;n.onMouseDown=function(e){console.log(e),e.item&&e.item.class=="interactive_angle_leg"?(this.drag=!0,this.angleObject=e.item.angleObject):this.drag=!1},n.onMouseDrag=function(e){this.drag&&this.angleObject.redraw(e.point)},n.onMouseUp=function(){this.drag=!1},n.activate(),this.tool=n}this.opacity=0,this.setAngleOpacity(0),this.animate({style:{opacity:1},duration:Math.floor(t/3),update:function(){this.setAngleOpacity(this.opacity)}}),this.suplement&&(this.suplement.opacity=0,this.suplement.setAngleOpacity(0),this.suplement.animate({style:{opacity:1},duration:Math.floor(t/3),delay:Math.floor(t/3),update:function(){console.log(this.angle,this.opacity),this.setAngleOpacity(this.opacity)}})),this.complement&&(this.complement.opacity=0,this.complement.setAngleOpacity(0),this.complement.animate({style:{opacity:1},duration:Math.floor(t/3),delay:Math.floor(t/3),update:function(){this.setAngleOpacity(this.opacity)}})),this.textPosition&&(this.angleText&&(this.angleText.opacity=0),this.typeText&&(this.typeText.opacity=0),this.animate({style:{textOpacity:1},duration:Math.floor(t/3),delay:Math.floor(t*2/3),init:function(){this.textOpacity=0},update:function(){this.angleText&&(this.angleText.opacity=this.textOpacity),this.typeText&&(this.typeText.opacity=this.textOpacity)}}))},Angle.prototype.setAngleOpacity=function(e){this.firstLeg&&(this.firstLeg.opacity=e),this.secondLeg&&(this.secondLeg.opacity=e),this.arcText&&(this.arcText.opacity=e),this.arc&&(this.arc.opacity=e)},Angle.prototype.remove=function(){this.arc&&this.arc.remove(),this.suplement&&this.suplement.remove(),this.complement&&this.complement.remove(),this.angleText&&this.angleText.remove(),this.typeText&&this.typeText.remove(),this.arcText&&this.arcText.remove(),this.firstLeg&&this.firstLeg.remove(),this.secondLeg&&this.secondLeg.remove(),this.interactiveLeg&&this.interactiveLeg.remove(),this.arcCircle&&this.arcCircle.remove()},Angle.RADIUS=100,Angle.ARROW_HEAD_SIZE=10,Angle.ARROW_HEAD_ANGLE=18,Angle.TEXT_STYLE={justification:"center",fontSize:15},Angle.ARC_STYLE={strokeColor:"#000",strokeWidth:2};
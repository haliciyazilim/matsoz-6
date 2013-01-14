var NumberWithShape=function(e){this.animate=Item.prototype.animate,this.position=e.position,this.number=e.number,this.size=e.size,e.isHiddenNumber?this.isHiddenNumber=e.isHiddenNumber:this.isHiddenNumber=!1,e.fillColor?this.fillColor=e.fillColor:this.fillColor="#a9dbe4",e.strokeColor?this.strokeColor=e.strokeColor:this.strokeColor="#41818a"};NumberWithShape.prototype.draw=function(){this.removeShape(),this.cubeArray=[],this.sqrt=Math.ceil(Math.sqrt(this.number));if(this.number==3)for(var e=0;e<this.number;e++)this.cubeArray.push((new Path.Cube(this.position.add(this.size*e,0),this.size,new Point(.4,.3))).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}));else for(var e=0;e<this.number;e++){var t=this.position;t=t.add(this.size*Math.floor(e%this.sqrt),-this.size*Math.floor(e/this.sqrt)),this.cubeArray.push((new Path.Cube(t,this.size,new Point(.4,.3))).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}))}this.width=this.size*this.sqrt,this.number<=8?this.height=this.size*Math.ceil(this.number/2):this.height=this.size*4,this.number==3&&(this.width=3*this.size,this.height=this.size),this.numberText=new PointText(this.position.add(this.width*.5,this.size+28)),this.numberText.justification="center",this.numberText.content=this.number,this.numberText.fontSize=16,this.isHiddenNumber===!0&&this.setOpacity(0)},NumberWithShape.prototype.setOpacity=function(e){for(var t=0;t<this.cubeArray.length;t++)this.cubeArray[t].opacity=e;this.numberText.opacity=e},NumberWithShape.prototype.removeShape=function(){this.cubeArray&&$(this.cubeArray).each(function(){this.remove()}),this.numberText&&this.numberText.remove()};var Pattern=Class.extend({init:function(e,t,n){this.coefficient=e,this.constant=t,this.length=n,this.cubeSize=25},setHiddenNumber:function(e){this.hiddenNumber=e},draw:function(e){var t=[],n=this,r;console.log(""+this,this.hiddenNumber);var i=0;this.cubeSize++;do{i=0,this.cubeSize--;for(var s=0;s<this.numbers.length;s++)i+=(s==0?0:this.cubeSize)+this.cubeSize*Math.ceil(this.numbers[s]/Math.ceil(Math.sqrt(this.numbers[s])))}while(i>500);$(this.numbers).each(function(r){var i=new NumberWithShape({position:e.add(120*r,0),number:this,size:n.cubeSize,isHiddenNumber:this==n.hiddenNumber});i.draw(),t.push(i)}),e=e.add(-i*.5,0),i=0;for(var s=0;s<t.length;s++)i+=s>0?this.cubeSize:0,t[s].position=e.add(i,0),t[s].draw(),i+=t[s].width,t[s].number==this.hiddenNumber&&(r=t[s].numberText.position);return this.numberWithShapes=t,r},showHiddenNumber:function(e,t){if(e==undefined||isNaN(e))e=0;if(t==undefined||isNaN(e))t=0;var n;for(var r=0;r<this.numberWithShapes.length;r++)this.numberWithShapes[r].isHiddenNumber===!0&&(n=this.numberWithShapes[r]);e==0?n.setOpacity(1):(n.opacity=0,n.animate({style:{opacity:1},duration:e,delay:t,update:function(){this.setOpacity(this.opacity)}}))},remove:function(){for(var e=0;e<this.numberWithShapes.length;e++)this.numberWithShapes[e].removeShape()}}),LinearPattern=Pattern.extend({init:function(e,t,n){this._super(e,t,n);var r=[];for(var i=1;i<=n;i++)r.push(e*i+t);this.numbers=r},toString:function(){return(this.coefficient>1?this.coefficient:"")+"n"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),QuadraticPattern=Pattern.extend({init:function(e,t,n){this._super(e,t,n),this.cubeSize=20;var r=[];for(var i=1;i<=n;i++)r.push(e*i*i+t);this.numbers=r},toString:function(){return(this.coefficient>1?this.coefficient:"")+"n²"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),ExponentialPattern=Pattern.extend({init:function(e,t,n,r){this._super(e,t,r),this.base=n,this.cubeSize=20;var i=[];for(var s=1;s<=r;s++)i.push(e*Math.pow(n,s)+t);this.numbers=i},toString:function(){return(this.coefficient>1?this.coefficient:"")+"("+this.base+"<sup>n</sup>)"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}});
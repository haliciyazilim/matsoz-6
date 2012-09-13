function __Styles(){}var NumberWithShape=function(e){this.animate=Item.prototype.animate,this.position=e.position,this.number=e.number,this.size=e.size,e.isHiddenNumber?this.isHiddenNumber=e.isHiddenNumber:this.isHiddenNumber=!1,e.fillColor?this.fillColor=e.fillColor:this.fillColor="#a9dbe4",e.strokeColor?this.strokeColor=e.strokeColor:this.strokeColor="#41818a"};NumberWithShape.prototype.draw=function(){this.removeShape(),this.cubeArray=[],this.sqrt=Math.ceil(Math.sqrt(this.number));for(var e=0;e<this.number;e++){var t=this.position;t=t.add(this.size*Math.floor(e%this.sqrt),-this.size*Math.floor(e/this.sqrt)),this.cubeArray.push((new Path.Cube(t,this.size,new Point(.4,.3))).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}))}this.width=this.size*this.sqrt,this.number<=8?this.height=this.size*Math.ceil(this.number/2):this.height=this.size*4,this.numberText=new PointText(this.position.add(this.width*.5,this.size+28)),this.numberText.justification="center",this.numberText.content=this.number,this.numberText.fontSize=16,this.isHiddenNumber===!0&&this.setOpacity(0)},NumberWithShape.prototype.setOpacity=function(e){for(var t=0;t<this.cubeArray.length;t++)this.cubeArray[t].opacity=e;this.numberText.opacity=e},NumberWithShape.prototype.removeShape=function(){this.cubeArray&&$(this.cubeArray).each(function(){this.remove()}),this.numberText&&this.numberText.remove()};var Pattern=Class.extend({init:function(e,t,n){this.coefficient=e,this.constant=t,this.length=n,this.cubeSize=25},setHiddenNumber:function(e){this.hiddenNumber=e},draw:function(e){var t=[],n=this,r;console.log(""+this,this.hiddenNumber);var i=0;this.cubeSize++;do{i=0,this.cubeSize--;for(var s=0;s<this.numbers.length;s++)i+=(s==0?0:this.cubeSize)+this.cubeSize*Math.ceil(this.numbers[s]/Math.ceil(Math.sqrt(this.numbers[s])))}while(i>500);$(this.numbers).each(function(r){var i=new NumberWithShape({position:e.add(120*r,0),number:this,size:n.cubeSize,isHiddenNumber:this==n.hiddenNumber});i.draw(),t.push(i)}),e=e.add(-i*.5,0),i=0;for(var s=0;s<t.length;s++)i+=s>0?this.cubeSize:0,t[s].position=e.add(i,0),t[s].draw(),i+=t[s].width,t[s].number==this.hiddenNumber&&(r=t[s].numberText.position);return this.numberWithShapes=t,r},showHiddenNumber:function(e,t){if(e==undefined||isNaN(e))e=0;if(t==undefined||isNaN(e))t=0;var n;for(var r=0;r<this.numberWithShapes.length;r++)this.numberWithShapes[r].isHiddenNumber===!0&&(n=this.numberWithShapes[r]);e==0?n.setOpacity(1):(n.opacity=0,n.animate({style:{opacity:1},duration:e,delay:t,update:function(){this.setOpacity(this.opacity)}}))},remove:function(){for(var e=0;e<this.numberWithShapes.length;e++)this.numberWithShapes[e].removeShape()}}),LinearPattern=Pattern.extend({init:function(e,t,n){this._super(e,t,n);var r=[];for(var i=1;i<=n;i++)r.push(e*i+t);this.numbers=r},toString:function(){return(this.coefficient>1?this.coefficient:"")+"n"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),QuadraticPattern=Pattern.extend({init:function(e,t,n){this._super(e,t,n),this.cubeSize=20;var r=[];for(var i=1;i<=n;i++)r.push(e*i*i+t);this.numbers=r},toString:function(){return(this.coefficient>1?this.coefficient:"")+"n²"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),ExponentialPattern=Pattern.extend({init:function(e,t,n,r){this._super(e,t,r),this.base=n,this.cubeSize=20;var i=[];for(var s=1;s<=r;s++)i.push(e*Math.pow(n,s)+t);this.numbers=i},toString:function(){return(this.coefficient>1?this.coefficient:"")+"("+this.base+"<sup>n</sup>)"+(this.constant>0?" + "+this.constant:this.constant<0?this.constant:"")}}),Animation={images:[],init:function(e){Animation.container=e,Animation.referencePoint=new Point(-70,80);for(var t=1;t<=4;t++){var n=new NumberWithShape({number:t*3,position:Animation.referencePoint.add(120*t,0),size:25,fillColor:"#f3c884",strokeColor:"#9b773d"});n.draw(),n.setOpacity(0),n.opacity=0,n.order=t,n.animate({style:{opacity:1},duration:1e3,delay:t*2e3,update:function(){this.setOpacity(this.opacity)},callback:function(){var e=new PointText(this.numberText.position.add(0,16));e.content=this.order+". sayı",e.justification="center";var t=new PointText(this.numberText.position.add(0,32));t.content="3 . "+this.order+" = "+3*this.order,t.justification="center",e.opacity=0,t.opacity=0,e.animate({style:{opacity:1},duration:1e3,update:function(){t.opacity=this.opacity}})}})}AnimationManager.delay(function(){new PointTextFadeIn({position:new Point(650,50),content:"..."}),new PointTextFadeIn({position:new Point(650,130),content:"...",delay:1e3}),new PointTextFadeIn({position:new Point(650,147),content:"n. Sayı",delay:2e3}),new PointTextFadeIn({position:new Point(650,163),content:"3 . n = 3n",delay:3e3})},1e4),Main.animationFinished(14e3)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki örüntüde bir sonraki adımda gelecek sayıyı yazarak kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.appendStatus({bottom:"30px",right:"150px"}),Interaction.setRandomGenerator(3),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.flushInputs(),Interaction.pattern&&Interaction.pattern.remove();var t=Interaction.generatePattern(e),n=t.draw(new Point(260,165));Interaction.appendInput({position:"absolute",top:n.y,left:n.x,marginLeft:"-18.5px",marginTop:"-25px"}).focus(),Interaction.pattern=t},preCheck:function(){},isAnswerCorrect:function(e){return Interaction.pattern.hiddenNumber==e},onCorrectAnswer:function(){Interaction.setStatus("Tebrikler! Bu örüntünün genel sayısı: "+Interaction.pattern.toString(),!0),Interaction.showAnswer()},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Olmadı! Bu örüntünün genel sayısı: "+Interaction.pattern.toString(),!1),Interaction.showAnswer()},generatePattern:function(e){var t,n=Util.randomInteger(1,5),r=Util.randomInteger(0,5),i=2,s=5,o=Util.randomInteger(0,s-1);switch(e){case 0:t=new LinearPattern(n,r,s);break;case 1:t=new QuadraticPattern(1,0,s);break;case 2:t=new ExponentialPattern(1,0,i,s)}return console.log(t.numbers,t.numbers[o]),t.setHiddenNumber(t.numbers[o]),Interaction.patternType=e,t},showAnswer:function(){Interaction.pause(),Interaction.pattern.showHiddenNumber(1e3,1e3),$(Interaction.input).animate({opacity:0},500),Interaction.resume(2e3)}};
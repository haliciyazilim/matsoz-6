
function SingleLineMultiply(options){
    var position,delay,zero,factor1,factor2,textStyle,callback;
    position = options.position;
    delay = options.delay;
    factor1 = options.factor1;
    factor2 = options.factor2;
    zero = options.zero;
    textStyle = options.textStyle;
    callback = options.callback;
    
	function textAnimate(point,content,style,animateStyle,delay,textStyle,callback){
        var pT1 = new PointText(point);
        pT1.content = content;
        pT1.set_style(textStyle);
        pT1.set_style(style);
        pT1.animate({
            style:animateStyle,
            duration:1000,
            delay:delay,
            callback:callback,
            animationType:'easeInEaseOut'
        });
        return pT1;
    }   
	var L = 0;//length
	var t1 = textAnimate(position,						factor1,	{opacity:0},{opacity:1},100+delay,textStyle);
	t1.content = Util.groupNumber(t1.content);
    var rect = new Path.Rectangle(t1.bounds);
	rect.set_style({strokeColor:'#fff',strokeWidth:2});
	L += t1.getWidth();
	
    var t2 = textAnimate(position.add(L,0)	 ,	 '',	{opacity:0},{opacity:1},600+delay,textStyle);
    console.log("factor2: "+factor2);
    t2.content = ' × '+Util.groupNumber(""+factor2+""+zero);//.substring(0,(""+factor2+zero).length-zero.length+1);
    console.log("t2.content: "+t2.content);
    t2.content = t2.content.substring(0,t2.content.length-zero.length);
	L += t2.getWidth();
	var t3 = textAnimate(position.add(L,0)	 ,   		  zero,	{opacity:0},{opacity:1},600+delay,textStyle,
		function(){
			this.animate({
			style:{opacity:0},
			duration:500,
			callback:function(){
					this.animate({
						style:{opacity:1,fillColor:new RgbColor(1,0,0,0.9)},
						duration:500,
						delay:1500,
						callback:function(){
							this.animate({
								style:{fillColor:textStyle.fillColor},
								duration:500,
								delay:500,
                                callback:callback
							});
						}								
					});
				}
			});
		}
	);
	L += t3.getWidth();
	var t4 = textAnimate(position.add(L,0),		 	   ' = ',	{opacity:0},{opacity:1},600+delay,textStyle);
	L += t4.getWidth();
	var t5 = textAnimate(position.add(L,0),factor1*factor2,{opacity:0},{opacity:1},2000+delay,textStyle);
    t5.content = Util.groupNumber(""+t5.content+zero);
    t5.content = t5.content.substring(0,t5.content.length-zero.length);
	L += t5.getWidth();
	var t6 = textAnimate(t4.position,zero,{opacity:0},{opacity:1,position:position.add(L,0),fillColor:new RgbColor(1,0,0)},4000+delay,textStyle,
		function(){
			this.animate({
				style:{fillColor:textStyle.fillColor},
				duration:500
			});
		}
	);
}


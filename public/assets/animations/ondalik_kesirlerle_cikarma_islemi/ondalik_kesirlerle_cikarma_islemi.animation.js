var Animation={images:[{id:"board",src:"/assets/animations/board_black.jpg"}],init:function(e){var t=Math.floor($(e).width()),n=Math.floor($(e).height()),r=new Raster("board");r.position=new Point(Math.floor(t*.5),Math.floor(n*.5)+2);var i=document.createElement("div");$(e).append(i),i.id="animation_subtraction",$(i).css(animationSubtractCss);var s=new LongSubtraction(2.38,1.26,"animation_subtraction",24);s.doldur(),s.basla(1e3,1e3);var o=new Size(40,40),u=(new Point(450,10)).add(.5,.5),a=new Path.Rectangle(u,o);a.set_style(rectStyle);var f=new Path.Rectangle(u.add(-5,5),o);f.set_style(rectStyle);var l=u.add(60,0),c=Path.SegmentedRectangle(l.x,l.y,o.width,o.height,10,10,38,fillColor);c.strokeColor=rectStyle.strokeColor;var u=(new Point(450,60)).add(.5,.5),a=new Path.Rectangle(u,o);a.set_style(rectStyle);var l=u.add(60,0),c=Path.SegmentedRectangle(l.x,l.y,o.width,o.height,10,10,26,fillColor);c.strokeColor=rectStyle.strokeColor;var h=u.add(0,50),p=h.add(60,0);$("span.1").delay(1e3).animate({color:"#f00"},1e3).delay(2e3).animate({color:"#fff"},2e3),$("span.2").delay(5e3).animate({color:"#f00"},1e3).delay(2e3).animate({color:"#fff"},2e3),$("span.3").delay(9e3).animate({color:"#f00"},1e3).delay(2e3).animate({color:"#fff"},2e3),setTimeout(function(){$("#result").html("2")},2500),setTimeout(function(){$("#result").html("12")},6500),setTimeout(function(){$("#result").html("112")},10500),setTimeout(function(){$("#result").html("1,12")},11500),Animation.rectDraw=function(){Animation.rect&&Animation.rect.remove(),Animation.rect=Path.SegmentedRectangle(p.x,p.y,o.width,o.height,10,10,Math.floor(this.count),fillColor),Animation.rect.strokeColor=rectStyle.strokeColor},(new AnimationHelper({count:0})).animate({style:{count:2},duration:1e3,delay:1e3,update:Animation.rectDraw}),(new AnimationHelper({count:2})).animate({style:{count:12},duration:1e3,delay:3e3,update:Animation.rectDraw}),(new AnimationHelper).animate({duration:1,delay:5e3,callback:function(){var e=new Path.Rectangle(h,o);e.set_style(rectStyle),e.opacity=0,e.animate({style:{opacity:1},duration:1e3,callback:Main.animationFinished})}})}};
var Animation={images:[{id:"board",src:"/assets/animations/board_black.jpg"}],init:function(e){var t=Math.floor($(e).width()),n=Math.floor($(e).height()),r=new Raster("board");r.position=new Point(Math.floor(t*.5),Math.floor(n*.5)+2);var i=document.createElement("div");$(e).append(i),i.id="animation_addition",$(i).css(animationSubtractCss);var s=new LongAddition(2.38,1.26,"animation_addition",24);s.doldur(),s.basla(1e3,1e3);var o,u,a,f,l,c=new Size(40,40),h=new Size(40,40);o=(new Point(450,10)).add(.5,.5),f=new Path.Rectangle(o,c),f.set_style(rectStyle),l=new Path.Rectangle(o.add(-5,5),c),l.set_style(rectStyle),u=o.add(60,0),a=Path.SegmentedRectangle(u.x,u.y,h.width,h.height,10,10,38,fillColor),a.strokeColor=rectStyle.strokeColor,o=(new Point(450,60)).add(.5,.5),f=new Path.Rectangle(o,c),f.set_style(rectStyle),u=o.add(60,0),a=Path.SegmentedRectangle(u.x,u.y,h.width,h.height,10,10,26,fillColor),a.strokeColor=rectStyle.strokeColor;var p=o.add(0,50),d=p.add(60,0);$("span.1").delay(1e3).animate({color:"#f00"},1e3).delay(2e3).animate({color:animationSubtractCss.color},2e3),$("span.2").delay(5e3).animate({color:"#f00"},1e3).delay(2e3).animate({color:animationSubtractCss.color},2e3),$("span.3").delay(9e3).animate({color:"#f00"},1e3).delay(2e3).animate({color:animationSubtractCss.color},2e3),setTimeout(function(){$("#result").html("14")},2500),setTimeout(function(){$("#result").html("64")},6500),setTimeout(function(){$("#result").html("364")},10500),setTimeout(function(){$("#result").html("3,64")},11500),Animation.rectDraw=function(){Animation.rect&&Animation.rect.remove(),Animation.rect=Path.SegmentedRectangle(d.x,d.y,h.width,h.height,10,10,Math.floor(this.count),fillColor),Animation.rect.strokeColor=rectStyle.strokeColor},(new AnimationHelper({count:0})).animate({style:{count:14},duration:1e3,delay:3e3,update:Animation.rectDraw}),(new AnimationHelper({count:14})).animate({style:{count:64},duration:1e3,delay:7e3,update:Animation.rectDraw}),(new AnimationHelper).animate({duration:1,delay:11e3,callback:function(){var e=new Path.Rectangle(p,c);e.set_style(rectStyle);var t=new Path.Rectangle(p.add(-5,5),c);t.set_style(rectStyle);var n=new Path.Rectangle(p.add(-10,10),c);n.set_style(rectStyle),e.opacity=0,t.opacity=0,n.opacity=0,e.animate({style:{opacity:1},duration:1e3}),t.animate({style:{opacity:1},delay:1200,duration:1e3}),n.animate({style:{opacity:1},delay:2400,duration:1e3,callback:Main.animationFinished})}})}};
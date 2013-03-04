var Animation = {
    images:[
        {
            id:'board',
            src:'/assets/animations/board_black.jpg'
        }
    ],
    init:function(container){
        var w=Math.floor($(container).width()), h=Math.floor($(container).height());
        var board = new Raster('board');
        board.position = new Point(Math.floor(w*0.5),Math.floor(h*0.5)+2)
        var div = document.createElement('div');
        $(container).append(div);
        div.id = "animation_subtraction";

        $(div).css(animationSubtractCss);
        var subtraction = new LongSubtraction(2.38,1.26,"animation_subtraction",24);
        subtraction.doldur();
        subtraction.basla(1000, 1000);
//			$(container).append(div);
//			$(div)
//				.append('<div id="addend1"><span class="3">2</span>,<span class="2">3</span><span class="1">8</span></div><div id="addend2"><span class="3">1</span>,<span class="2">2</span><span class="1">6</span></div><div id="line"><span>-</span></div><br/>')
//				.append('<div id="result"></div>')
//				.css(animationSubtractCss);
//
//			$('#line',div).css({
//				height:'2px',
//				borderBottom:'2px solid #fff',
//				position:'relative',
//				top:'5px',
//				left:'15px'
//			});
//
//			$('#line span',div).css({
//				position:'absolute',
//				top:'-35px',
//				left:'10px',
//				zIndex:2
//			});
//			$('#result').css({
//				position:'relative',
//				top:'-35px'
//			})
        var size = new Size(40,40)
        var p1 = new Point(450,10).add(0.5,0.5);
        var r1 = new Path.Rectangle(p1, size);
        r1.set_style(rectStyle);
        var r2 = new Path.Rectangle(p1.add(-5,5),size);
        r2.set_style(rectStyle);
        var p2 = p1.add(60,0)
        var y1 = Path.SegmentedRectangle(p2.x,p2.y,size.width,size.height,10,10,38,fillColor);
        y1.strokeColor = rectStyle.strokeColor;
        var p1 = new Point(450,60).add(0.5,0.5);
        var r1 = new Path.Rectangle(p1, size);
        r1.set_style(rectStyle);
        var p2 = p1.add(60,0)
        var y1 = Path.SegmentedRectangle(p2.x,p2.y,size.width,size.height,10,10,26,fillColor);
        y1.strokeColor = rectStyle.strokeColor;
        var p3 = p1.add(0,50);
        var p4 = p3.add(60,0);
        $('span.1').delay(1000).animate({color:'#f00'},1000).delay(2000).animate({color:'#fff'},2000);
        $('span.2').delay(5000).animate({color:'#f00'},1000).delay(2000).animate({color:'#fff'},2000);
        $('span.3').delay(9000).animate({color:'#f00'},1000).delay(2000).animate({color:'#fff'},2000);
        setTimeout(function(){
            $('#result').html('2');
        },2500);
        setTimeout(function(){
            $('#result').html('12');
        },6500);
        setTimeout(function(){
            $('#result').html('112');
        },10500);
        setTimeout(function(){
            $('#result').html('1,12');
        },11500);
        Animation.rectDraw = function(){
            if(Animation.rect)
                Animation.rect.remove();
            Animation.rect = Path.SegmentedRectangle(p4.x,p4.y,size.width,size.height,10,10,Math.floor(this.count),fillColor);
            Animation.rect.strokeColor = rectStyle.strokeColor
        }

        new AnimationHelper({
            count:0
        }).animate({
                style:{count:2},
                duration:1000,
                delay:1000,
                update:Animation.rectDraw
            });

        new AnimationHelper({
            count:2
        }).animate({
                style:{count:12},
                duration:1000,
                delay:3000,
                update:Animation.rectDraw
            })
        new AnimationHelper().animate({
            duration:1,
            delay:5000,
            callback:function(){
                var r3 = new Path.Rectangle(p3, size);
                r3.set_style(rectStyle);
                r3.opacity =0;
                r3.animate({
                    style:{opacity:1},
                    duration:1000,
                    callback:Main.animationFinished
                });
            }
        })
    }

}
;

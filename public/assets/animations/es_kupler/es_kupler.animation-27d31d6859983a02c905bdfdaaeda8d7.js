var Animation={images:[],init:function(e){Main.animationFinished()},clean:function(){Animation.grids.path.animate({style:{opacity:0},duration:500,callback:function(){this.remove()}}),Animation.changeText(""),Animation.shape.redraw()},changeText:function(e,t,n){t||(t=1e3),Animation.sideText.animate({style:{opacity:0},duration:t/2,delay:n,callback:function(){this.content=e,this.animate({style:{opacity:1},duration:t/2})}})},showLeftSide:function(e){Animation.changeText("soldan"),Animation.shape.showCorrectSide(Shape3.LeftSide),Animation.drawToGrids(Animation.leftPoints,1e3,3e3),AnimationManager.delay(function(){Animation.shape.redraw()},3e3)},showRightSide:function(e){},showUpSide:function(e){},showDownSide:function(e){},showFrontSide:function(e){Animation.changeText("önden"),Animation.shape.flatten(1e3,1e3),Animation.drawToGrids(Animation.frontPoints,1e3,2e3)},showBackSide:function(e){},drawToGrids:function(e,t,n){t||(t=500),n||(n=0),AnimationManager.delay(function(){Animation.grids.drawShape(e),Animation.grids.path.opacity=0,Animation.grids.path.animate({style:{opacity:1},duration:t})},n)},initializePoints:function(){Animation.frontPoints=[new Point(1,2),new Point(1,3),new Point(1,4),new Point(2,4),new Point(3,4),new Point(4,4),new Point(4,3),new Point(4,2),new Point(4,1),new Point(3,1),new Point(3,2),new Point(3,3),new Point(2,3),new Point(2,2)],Animation.leftPoints=[new Point(2,1),new Point(2,2),new Point(2,3),new Point(2,4),new Point(3,4),new Point(3,3),new Point(3,2),new Point(3,1)]}};
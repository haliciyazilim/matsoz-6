var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.referencePoint = new Point(-70,80);
        for(var i=1; i<=4; i++){
            var num = new NumberWithShape({
                number:i*3,
                position:Animation.referencePoint.add(120*i,0),
                size:25,
                fillColor:"#f3c884",
                strokeColor:"#9b773d"
            });
            num.draw();
            num.setOpacity(0);
            num.opacity = 0;
            num.order = i;

            num.animate({
                style:{opacity:1},
                duration:1000,
                delay:i*2000,
                update:function(){
                    this.setOpacity(this.opacity);
                },
                callback:function(){
                    var text1 = new PointText(this.numberText.position.add(0,16));
                    text1.content = this.order + ". Sayı"
                    text1.justification = 'center';
                    var text2 = new PointText(this.numberText.position.add(0,32));
                    text2.content = "3 . " + this.order + " = " + (3*this.order);
                    text2.justification = 'center';

                    text1.opacity = 0;
                    text2.opacity = 0;

                    text1.animate({
                        style:{opacity:1},
                        duration:1000,
                        update:function(){
                            text2.opacity = this.opacity;
                        }
                    })
                }
            })
        }

        AnimationManager.delay(function(){
            new PointTextFadeIn({
                position:new Point(650,50),
                content:"..."
            });
            new PointTextFadeIn({
                position:new Point(650,130),
                content:"...",
                delay:1000
            });
            new PointTextFadeIn({
                position:new Point(650,147),
                content:"n. Sayı",
                delay:2000
            });
            new PointTextFadeIn({
                position:new Point(650,163),
                content:"3 . n = 3n",
                delay:3000
            });
        },10000)
    }
}
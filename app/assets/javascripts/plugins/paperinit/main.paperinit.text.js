Main.paperInit.Text = function(){
    PointTextFadeIn = function(opt){
        var text = new PointText(opt.position);
        text.content  = opt.content;
        text.justification = 'center';
        text.opacity = 0;
        if(!opt.duration)
            opt.duration = 1000;
        if(!opt.delay)
            opt.delay = 0
        text.animate({
            style:{opacity:1},
            duration:opt.duration,
            delay:opt.delay
        });
    }
}
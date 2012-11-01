var GIF = function(opt){
    var div = document.createElement('div');
    $(opt.parent).append(div);
    this.count = opt.count;
    $(div).css({
        width:opt.width+'px',
        height:opt.height+'px',
        backgroundImage:'url('+opt.src+')',
        backgroundPosition:'0px 0px',
        backgroundRepeat:'no-repeat'
    });
    this.animHelper = new AnimationHelper({
        position:0,
        width:opt.width,
        height:opt.height,
        div:div,
        count:this.count
    });
    this.div = div;
    if(opt.css)
        $(div).css(opt.css)
    this.div;
}
//GIF.prototype.play = function(fps){
//    if(fps == undefined)
//        fps = 23.97;
//    var waveLength = 1000 / fps;
//    this.animHelper.time = new Date().getTime();
//    this.animHelper.animate({
//        style:{},
//        duration:((this.count-1) / fps) * 1000,
//        update:function(){
//            var dT = new Date().getTime() - this.time; // delta time
//            var modulerNumber = Math.floor(GIF.MAX_ALLOWED_IMAGE_WIDTH / this.width);
//            var currentIndex = Math.floor(dT / waveLength);
//            if(currentIndex >= this.count)
//                currentIndex = this.count-1;
//            var x = (currentIndex % modulerNumber) * this.width;
//            var y = Math.floor(currentIndex / modulerNumber) * this.height;
//            $(this.div).css({
//                backgroundPosition:'-' + x + 'px -' + y + 'px '
//            });
//        }
//    });
//}
GIF.prototype.play = function(fps){
    if(fps == undefined)
        fps = 15;
    var waveLength = 1000 / fps;
    var width = this.animHelper.width;
    var time = new Date().getTime();
    var height = this.animHelper.height;
    var count  = this.animHelper.count;
    var div = this.animHelper.div;
    var interval = setInterval(
        function(){
            var dT = new Date().getTime() - time; // delta time
            var modulerNumber = Math.floor(GIF.MAX_ALLOWED_IMAGE_WIDTH / width);
            var currentIndex = Math.floor(dT / waveLength);
            var finish = false;
            if(currentIndex >= count){
                currentIndex = count-1;
                finish = true;
            }
            var x = (currentIndex % modulerNumber) * width;
            var y = Math.floor(currentIndex / modulerNumber) * height;
            $(div).css({
                backgroundPosition:'-' + x + 'px -' + y + 'px '
            });
            if(finish == true){
                clearInterval(interval);
            }
        },
        waveLength + 1
    );
}
GIF.MAX_ALLOWED_IMAGE_WIDTH = 30000;
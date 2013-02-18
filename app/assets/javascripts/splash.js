/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 01.11.2012
 * Time: 09:45
 * To change this template use File | Settings | File Templates.
 */

var Splash = function(){
    $(document).ready(Splash.init);

}

Splash.init = function(){
    Main.initializeNavigation();
    $('.navlinktasiyici').css({left:(parseInt($('.navlinktasiyici').css('left'),10)-700) +'px'})
    $('.sozcuktasiyici').css({left:(parseInt($('.sozcuktasiyici').css('left'),10)-600) +'px'})
    $('.btn_home').css({left:(parseInt($('.btn_home').css('left'),10)-600) +'px'})
    $('.btn_info').css({left:(parseInt($('.btn_info').css('left'),10)-600) +'px'})
    $('.btn_print').css({left:(parseInt($('.btn_print').css('left'),10)-600) +'px'})
    setTimeout(function(){
        Splash.animate();
    },1000);
}
Splash.animate = function(){
    $('.matsoz_logo').delay(1700).animate({marginLeft:'-150px'},1000,'easeInOutQuad');
    $('.navlinktasiyici').delay(0).animate({left:'12px'},2000,'easeInOutQuad');
    $('.sozcuktasiyici').delay(0).animate({left:'144px'},2000,'easeInOutQuad');
    $('.btn_home').delay(0).animate({left:'12px'},2000,'easeInOutQuad');
    $('.btn_info').delay(0).animate({left:'52px'},2000,'easeInOutQuad');
    $('.btn_print').delay(0).animate({left:'92px'},2000,'easeInOutQuad');

}

Splash();
/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 01.11.2012
 * Time: 09:45
 * To change this template use File | Settings | File Templates.
 */
var Splash=function(){$(document).ready(Splash.init)};Splash.init=function(){Main.initializeNavigation(),$(".navlinktasiyici").css({left:parseInt($(".navlinktasiyici").css("left"),10)-700+"px"}),$(".sozcuktasiyici").css({left:parseInt($(".navlinktasiyici").css("left"),10)-600+"px"}),setTimeout(function(){Splash.animate()},1e3)},Splash.animate=function(){$(".matsoz_logo").delay(1700).animate({marginLeft:"-150px"},1500,"easeInOutQuad"),$(".halici_logo").delay(1400).animate({left:parseInt($(".halici_logo").css("left"),10)+680+"px"},1500,"easeInOutQuad"),$(".meb_logo").delay(2e3).animate({right:parseInt($(".meb_logo").css("right"),10)+190+"px"},1500,"easeInOutQuad"),$(".navlinktasiyici").delay(0).animate({left:"12px"},2e3,"easeInOutQuad"),$(".sozcuktasiyici").delay(0).animate({left:"144px"},2e3,"easeInOutQuad")},Splash();
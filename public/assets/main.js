/*!
 * Paper.js v0.22
 *
 * This file is part of Paper.js, a JavaScript Vector Graphics Library,
 * based on Scriptographer.org and designed to be largely API compatible.
 * http://paperjs.org/
 * http://scriptographer.org/
 *
 * Copyright (c) 2011, Juerg Lehni & Jonathan Puckey
 * http://lehni.org/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: Thu Nov 10 19:19:25 2011 +0100
 *
 ***
 *
 * Bootstrap.js JavaScript Framework.
 * http://bootstrapjs.org/
 *
 * Copyright (c) 2006 - 2011 Juerg Lehni
 * http://lehni.org/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Parse-js
 *
 * A JavaScript tokenizer / parser / generator, originally written in Lisp.
 * Copyright (c) Marijn Haverbeke <marijnh@gmail.com>
 * http://marijn.haverbeke.nl/parse-js/
 *
 * Ported by to JavaScript by Mihai Bazon
 * Copyright (c) 2010, Mihai Bazon <mihai.bazon@gmail.com>
 * http://mihai.bazon.net/blog/
 *
 * Modifications and adaptions to browser (c) 2011, Juerg Lehni
 * http://lehni.org/
 *
 * Distributed under the BSD license.
 */
//
//= require_self
//= require_tree ./library
//= require_tree ./plugins
/*
* Halici Bilgi Islem A.S.
*
* www.halici.com.tr
*/
var isLV=!0,Main=function(){navigator.appName=="Microsoft Internet Explorer"&&(console={log:function(){}}),$(document).ready(function(){try{Interaction&&Main.init()}catch(e){Main.initializeToolbar(),console.log("Interaction is not defined")}})};Main.platform={MOBILE:"Mobile",DESKTOP:"Desktop"},Main.getCurrentPlatform=function(){var e=navigator.userAgent;return e.indexOf("Mobile")>0||e.indexOf("Android")>0?Main.platform.MOBILE:Main.platform.DESKTOP},Main.config={defaultLibrary:"paper"},Main.startAnimation=function(){animationView.onFrame=function(e){Main.animationProject.activate(),View._focused=animationView,AnimationManager.update(e),typeof Animation.onFrame=="function"&&Animation.onFrame(e)};if(animationReady==0){animationReady=!0;return}Main.animationProject.activate(),View._focused=animationView,Animation.init(Main.animation),Main.startInteraction();try{__START_INTERACTION_IMMEDIATELY===!0&&Main.animationFinished()}catch(e){}},Main.animationFinished=function(e){e==undefined&&(e=100);if(Main.animationFinished.called==1)return;isNaN(e)||e==0?(Main.animationFinished.called=!0,Main.disposeInteractionSkipSlider()):setTimeout(function(){if(Main.animationFinished.called==1)return;Main.animationFinished.called=!0,Main.disposeInteractionSkipSlider()},e)},Main.disposeInteractionSkipSlider=function(){$("#interaction_cover").animate({opacity:0},500,function(){$(this).remove()})},Main.startInteraction=function(){interactionReady==0?interactionReady=!0:(Main.interactionProject.activate(),View._focused=interactionView,initializeRunLoop(),Interaction.init(Main.interaction))},Main.animateDefinition=function(){$(".tanim .definition").css({opacity:0}),$(".tanim .additional_info").css({opacity:0}),$(".tanim .definition").delay(500).animate({opacity:1},1e3),$(".tanim .additional_info").delay(1600).animate({opacity:1},1e3)},Main.init=function(){if(isLV!=1){Main.vl();return}Main.initializeScreen(),Main.initializeNavigation(),Main.createInteractionSkipSlider(),Main.initializeToolbar(),Main.interaction=$(".etkilesimalan").get(0),Main.animation=$(".ornek").get(0),Main.objective=$(".mavikontrol").get(0),Language.init(Language.TURKISH);var e;typeof Interaction.getFramework=="function"?e=Interaction.getFramework():e=Main.config.defaultLibrary;if(e=="paper"){Main.scale=1,paper.install(window),Main.paperInit();var t=$(Main.interaction).width(),n=$(Main.interaction).height();Main.interaction.innerHTML+="<canvas id='interaction_canvas' class='interaction_canvas' keepalive='true' width='"+t*Main.scale+"px' height='"+n*Main.scale+"px'></canvas>",canvas=$(".interaction_canvas").get(0),paper.setup(canvas),Main.interactionProject=paper.project,interactionView=paper.view,paper.defaultProject=Main.interactionProject;var r=$(Main.animation).width(),i=$(Main.animation).height();Main.animation.innerHTML+="<canvas id='animation_canvas' class='animation_canvas' keepalive='true' width='"+r*Main.scale+"px' height='"+i*Main.scale+"px'></canvas>",canvas=$(".animation_canvas").get(0),paper.setup(canvas),Main.animationProject=paper.project,animationView=paper.view,AnimationManager(),animationReady=!1,interactionReady=!1,Animation.images==null||Animation.images==undefined?Main.startAnimation():Util.loadImages(Animation.images,function(){Main.startAnimation()}),Interaction.images==null||Interaction.images==undefined?Main.startInteraction():Util.loadImages(Interaction.images,function(){Main.startInteraction()}),initializeRunLoop=function(){animationReady===!0&&interactionReady===!0&&(interactionView.onFrame=function(e){Main.interactionProject.activate(),View._focused=interactionView,AnimationManager.update(e),typeof Interaction.onFrame=="function"&&Interaction.onFrame(e)})},InteractionBase(),Main.animateDefinition();try{if(__START_INTERACTION_IMMEDIATELY!==!0)throw"";Main.startAnimation()}catch(s){setTimeout(Main.startAnimation,1e3)}}},Main.initializeScreen=function(){setTimeout(function(){window.scrollTo(0,1)},1)},Main.vl=function(){var e=document.createElement("div");e.innerHTML="Tanıtım Sürümü <br/> (Geçerlilik: 25 Nisan - 25 Mayıs 2013) <br/> Kullanım hakları için Halıcı Bilgi İşlem A.Ş.",document.body.appendChild(e),$(e).css({padding:"20px",lineHeight:"18px"}),$(e).dialog({title:"Lisans Doğrulanıyor",modal:!0,autoOpen:!0}),$.ajax({async:!1,url:"http://www.matsoz.halici.com.tr/licence/matsoz_licence_validator.php?callback=?",dataType:"jsonp",data:{licence_token:"turkcell01"},type:"GET",crossDomain:!0,success:function(t){t.isValid==1?($(e).dialog("close"),isLV=!0,Main.init()):($(e).dialog({title:"Geçersiz Lisans"}),e.innerHTML="<strong style='color:red;font-size: 18px;'>Lisans doğrulanamadı!</strong><br/> Bilgi için: <a target='_blank' href='http://www.halici.com.tr'>http://www.halici.com.tr</a>")},error:function(){throw alert("Hata oluştu: Lisans Doğrulanamadı"),"Lisans dogrulanamadi!"}})},Main.initializeNavigation=function(){var e=0,t=function(t){$(".navlink").removeClass("harfselected"),$('.navlink[data-letter="'+t+'"]').addClass("harfselected");var n=wordList[t],i="";for(r=0;r<n.length;r++)n[r].selected&&(e=r),i+="<a href="+n[r].link+" class='sozcuklink "+(n[r].selected?"sozcukselected":"")+"'>"+n[r].word+"</a>";$(".sozcuktasiyici").html(i)};$(".navlink").click(function(){t($(this).data("letter"))}),t(currentLetter);var n="abcçdefghıijklmnoöprsştuüvyz";for(var r=0;r<n.length;r++){var i=n[r];if(wordList[i].length==0){var s=i;s=="ç"?s="cc":s=="ğ"?s="gg":s=="ı"?s="ii":s=="ö"?s="oo":s=="ş"?s="ss":s=="ü"&&(s="uu"),$("#letter_"+s).addClass("harfpasif")}}var o=$(".sozcuktasiyici").get(0);if(e>12){var u=(e-12)*42;$(o).animate({scrollTop:u+"px"},500)}},Main.setObjective=function(e){Main.objective.innerHTML=e},Main.createInteractionSkipSlider=function(){var e=document.createElement("div");$("#container").append(e),$(e).css({position:"absolute",paddingLeft:"-1px",top:"331px",left:"438px",width:"790px",height:"302px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",backgroundImage:"url(/assets/skip_screen.png)",backgroundRepeat:"no-repeat",backgroundPosition:"-100px -9px","-moz-user-select":"-moz-none","-khtml-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none","user-select":"none"}),e.id="interaction_cover";var t=!1,n=!0,r=0,i=function(e){e.preventDefault(),console.log(e);if(n!=1)return;return t=!0,r=e.pageX,!1},s=function(n){n.preventDefault();if(t==1){var i=n.pageX-r;i=i<0?"0":i,$(e).css({backgroundPosition:i-100+"px -9px"})}return!1},o=function(i){i.preventDefault();if(t==0)return;t=!1;var s=i.pageX-r;return s=s<0?"0":s,console.log("[up] change: "+s,i),s>100?(n=!1,$(e).animate({backgroundPosition:"700px -9px"},250,function(){$(this).remove()})):(n=!1,$(e).animate({backgroundPosition:"-100px -9px"},250,function(){n=!0})),!1};$(e).mousedown(i),$(e).mousemove(s),$(e).mouseup(o),$(e).mouseout(o),$(e).bind("touchmove",function(e){try{e.pageX=e.originalEvent.touches[0].pageX}catch(t){}s(e)}),$(e).bind("touchstart",function(e){try{e.pageX=e.originalEvent.touches[0].pageX}catch(t){}i(e)}),$(e).bind("touchend",function(e){try{e.pageX=e.originalEvent.changedTouches[0].pageX}catch(t){}o(e)})},Main.initializeToolbar=function(e){Main.InfoDialog=new Dialog({title:"Information"});var t="/resources/matsoz_manuel/matsoz_manuel.htm",n="/resources/about_us/about_us.htm";try{exportedPage&&indexPage&&(t="resources/matsoz_manuel/matsoz_manuel.htm",n="resources/about_us/about_us.htm")}catch(r){}Main.InfoDialog.addContent("Program Hakkında",'<iframe src="'+n+'" style="width: 100%; height: 99%; border: none; padding: 0px; box-sizing: border-box; overflow: hidden; margin: 0px;"></iframe>'),Main.InfoDialog.addContent("Kullanıcı Kılavuzu",'<iframe src="'+t+'" style="width: 100%; height: 99%; border: none; padding: 0px; box-sizing: border-box; overflow: hidden; margin: 0px;"></iframe>'),$(".btn_home").click(function(e){try{if(exportedPage)try{indexPage&&(window.location="../intro/index.html")}catch(t){window.location="../../intro/index.html"}}catch(t){window.location="../"}}),$(".btn_info").click(function(e){Main.InfoDialog.show()}),$(".btn_print").click(function(e){window.print()})},Main();
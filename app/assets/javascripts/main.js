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


var Main = function(){
    if(navigator.appName == "Microsoft Internet Explorer"){
        console ={
            log: function(){}
        }
    }
    $(document).ready(function(){

        try{
            if(Interaction)
                Main.init();
        }
        catch(e){
            Main.initializeToolbar();
            console.log('Interaction is not defined');
        }
    });

}

Main.platform = {
    MOBILE:'Mobile',
    DESKTOP:'Desktop'
}

Main.getCurrentPlatform = function(){
    var userAgent = navigator.userAgent;
    if(userAgent.indexOf("Mobile") > 0 || userAgent.indexOf("Android") > 0 )
        return Main.platform.MOBILE;
    else
        return Main.platform.DESKTOP;
}

Main.config = {
    defaultLibrary: "paper"
};

Main.startAnimation = function(){
    animationView.onFrame = function(event) {
        Main.animationProject.activate();
        View._focused = animationView;
        AnimationManager.update(event);
        if (typeof(Animation.onFrame) == 'function') {
            Animation.onFrame(event);
        }
    }
    if (animationReady == false) {
        animationReady = true;
        return;
    } else {
        Main.animationProject.activate();
        View._focused = animationView;
        Animation.init(Main.animation);
    }
    Main.startInteraction();
    try{
        if(__START_INTERACTION_IMMEDIATELY === true)
            Main.animationFinished();
    }
    catch(e){
    }
}
Main.animationFinished = function(delay){
    if (delay == undefined) {
        delay = 100;
    }
    if(Main.animationFinished.called == true)
        return;
    if(isNaN(delay) || delay == 0){
        Main.animationFinished.called = true;
        Main.disposeInteractionSkipSlider();
    }
    else {
        setTimeout(function(){
            if(Main.animationFinished.called == true)
                return;
            Main.animationFinished.called = true;
            Main.disposeInteractionSkipSlider();
        }, delay);
    }
}
Main.disposeInteractionSkipSlider = function(){
    $('#interaction_cover').animate({opacity:0},500,function(){$(this).remove()});
}
Main.startInteraction = function(){
    if (interactionReady == false) {
        interactionReady = true;
    } else {
        Main.interactionProject.activate();
        View._focused = interactionView;
        initializeRunLoop();
        Interaction.init(Main.interaction);
    }
}

Main.animateDefinition = function(){
    $(".tanim .definition").css({opacity:0});
    $(".tanim .additional_info").css({opacity:0});
    $(".tanim .definition").delay(500).animate({opacity:1},1000);
    $(".tanim .additional_info").delay(1600).animate({opacity:1},1000);
}

Main.init = function(){
    Main.initializeScreen();
    Main.initializeNavigation();
    Main.createInteractionSkipSlider();
    Main.initializeToolbar();
    Main.interaction = $('.etkilesimalan').get(0);
    Main.animation = $('.ornek').get(0);
    Main.objective = $('.mavikontrol').get(0);
    //Main.InteractionContainer.appendChild(Main.ObjectiveContainer);

    //Set the curent language
    Language.init(Language.TURKISH);

    var framework;
    if (typeof(Interaction.getFramework) == "function") {
        framework = Interaction.getFramework();
    } else {
        framework = Main.config.defaultLibrary;
    }

    if (framework == 'paper') {
        Main.scale = 1;
        paper.install(window);
        Main.paperInit();

        var interactionWidth = $(Main.interaction).width();
        var interactionHeight = $(Main.interaction).height();

        Main.interaction.innerHTML += "<canvas id='interaction_canvas' class='interaction_canvas' keepalive='true' width='"+interactionWidth*Main.scale+"px' height='"+interactionHeight*Main.scale+"px'></canvas>"
        canvas = $('.interaction_canvas').get(0);
        paper.setup(canvas);
        Main.interactionProject = paper.project;
        interactionView = paper.view;
        paper.defaultProject = Main.interactionProject;

        var animationWidth = $(Main.animation).width();
        var animationHeight = $(Main.animation).height();

        Main.animation.innerHTML += "<canvas id='animation_canvas' class='animation_canvas' keepalive='true' width='"+animationWidth*Main.scale+"px' height='"+animationHeight*Main.scale+"px'></canvas>"
        canvas = $('.animation_canvas').get(0);
        paper.setup(canvas);
        Main.animationProject = paper.project;
        animationView = paper.view;
        AnimationManager();

        animationReady = false;
        interactionReady = false;

        if(Animation.images == null || Animation.images == undefined) {
            Main.startAnimation();
        }
        else {
            Util.loadImages(
                Animation.images,
                function(){
                    Main.startAnimation();
                }
            );
        }   
        if(Interaction.images == null || Interaction.images == undefined) {
            Main.startInteraction();
        }
        else {
            Util.loadImages(
                Interaction.images,
                function(){
                    Main.startInteraction();
                }
            );
        }
        initializeRunLoop = function () {
            //console.log("I'm here");
            if (animationReady === true && interactionReady === true) {
                interactionView.onFrame = function(event) {
                    Main.interactionProject.activate();
                    View._focused = interactionView;
                    AnimationManager.update(event);
                    if (typeof(Interaction.onFrame) == 'function') {
                        Interaction.onFrame(event);
                    }
                }
            }
        }
        InteractionBase();
        Main.animateDefinition();
        try{
            if(__START_INTERACTION_IMMEDIATELY === true)
                Main.startAnimation();
            else
                throw '';
        }
        catch(e){
            setTimeout(Main.startAnimation,1000);
        }
    }
};


Main.initializeScreen = function() {
    setTimeout(function() { window.scrollTo(0, 1); }, 1);
}

Main.initializeNavigation = function() {
    var selectedWordIndex = 0;
    var createWordList = function(letter) {

        $('.navlink').removeClass('harfselected');
        $('.navlink[data-letter="'+letter+'"]').addClass('harfselected');
        var entries = wordList[letter];
        var htmlString = "";

        for (i = 0; i < entries.length; i++) {
            if(entries[i].selected){
                selectedWordIndex = i;
            }
            htmlString += "<a href=" + entries[i].link + " class='sozcuklink " + (entries[i].selected?"sozcukselected":"") + "'>" + entries[i].word + "</a>";
        }

        $('.sozcuktasiyici').html(htmlString);
    }

    $('.navlink').click(function() {
        createWordList($(this).data('letter'));
    });

    createWordList(currentLetter);

    var list = "abcçdefghıijklmnoöprsştuüvyz"

    for (var i = 0; i < list.length; i++) {
        var letter = list[i];
        if (wordList[letter].length == 0) {
            var letter_id = letter;
            if (letter_id == 'ç') letter_id = 'cc';
            else if (letter_id == 'ğ') letter_id = 'gg';
            else if (letter_id == 'ı') letter_id = 'ii';
            else if (letter_id == 'ö') letter_id = 'oo';
            else if (letter_id == 'ş') letter_id = 'ss';
            else if (letter_id == 'ü') letter_id = 'uu';

            $("#letter_"+letter_id).addClass("harfpasif");
        }
    }
    var sozcuktasiyici = $('.sozcuktasiyici').get(0);
    if(selectedWordIndex > 11)
        sozcuktasiyici.scrollByLines(selectedWordIndex - 11);
}

//Main.initializeSoundManager = function() {
//	soundManager.mute();
//
//	soundManager.setup({
//
//		// location: path to SWF files, as needed (SWF file name is appended later.)
//
//		url: '/swf/',
//
//		// optional: version of SM2 flash audio API to use (8 or 9; default is 8 if omitted, OK for most use cases.)
//		// flashVersion: 9,
//
//		// use soundmanager2-nodebug-jsmin.js, or disable debug mode (enabled by default) after development/testing
//		// debugMode: false,
//
//		// good to go: the onready() callback
//
//		onready: function() {
//
//			// SM2 has started - now you can create and play sounds!
//
//			Main.wrongSound = soundManager.createSound({
//				id: 'wrongSound',
//				url: '/sounds/wrong.mp3'
//				// onload: function() { console.log('sound loaded!', this); }
//				// other options here..
//			});
//
//			Main.correctSound = soundManager.createSound({
//				id: 'correctSound',
//				url: '/sounds/correct.mp3'
//				// onload: function() { console.log('sound loaded!', this); }
//				// other options here..
//			});
//			//
//			// mySound.play();
//		}
//	});
//}

Main.setObjective = function(str){
    Main.objective.innerHTML = str;
};

Main.createInteractionSkipSlider = function(){
    var div = document.createElement('div');
    $('#container').append(div);
    $(div).css({
        position:'absolute',
        paddingLeft:'-1px',
        top:'331px',
        left:'438px',
        width:'790px',
        height:'302px',
        borderRadius:'6px',
        border:'1px solid rgba(255,255,255,0.1)',
        overflow:'hidden',
        backgroundImage:'url(/assets/skip_screen.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'-100px -9px',
        '-moz-user-select': '-moz-none',
        '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    });
    div.id = 'interaction_cover';

    var isDragging = false;
    var isDraggable = true;
    var startPosition = 0;
    var down = function(event){
        event.preventDefault();
        console.log(event)
        if(isDraggable != true)
            return;
        isDragging = true;
        startPosition = event.pageX;
        return false;
    }
    var drag = function(event){
        event.preventDefault();
        if(isDragging==true){
            var change = event.pageX - startPosition;
            change = change < 0 ? '0':change;
            $(div).css({
                backgroundPosition:(change-100)+'px -9px'
            });
        }
        return false;
    }
    var up = function(event){
        event.preventDefault();
        if(isDragging == false)
            return;
        isDragging = false;
        var change = event.pageX - startPosition;
        change = change < 0 ? '0':change;
        console.log('[up] change: '+change,event)
        if(change > 100){
            isDraggable = false;
            $(div).animate({backgroundPosition:'700px -9px'},250,function(){$(this).remove();});
        }
        else{
            isDraggable = false;
            $(div).animate({backgroundPosition:'-100px -9px'},250,function(){isDraggable = true;});
        }
        return false;
    }
    $(div).mousedown(down);
    $(div).mousemove(drag);
    $(div).mouseup(up);
    $(div).mouseout(up);
    $(div).bind('touchmove',function(event){
        try{
            event.pageX = event.originalEvent.touches[0].pageX;
        }
        catch(e){}
        drag(event);
    });
    $(div).bind('touchstart',function(event){
        try{
            event.pageX = event.originalEvent.touches[0].pageX;
        }
        catch(e){}
        down(event);
    });
    $(div).bind('touchend',function(event){
        try{
            event.pageX = event.originalEvent.changedTouches[0].pageX;
        }
        catch(e){}
        up(event);
    });

}

Main.initializeToolbar = function(isPassive){
    Main.InfoDialog = new Dialog({title:'Information'});
    var matsozManualUrl = '/resources/matsoz_manuel/matsoz_manuel.htm';
    var aboutUsUrl = '/resources/about_us/about_us.htm';
    try{
        if(exportedPage){
            matsozManualUrl = './resources/matsoz_manuel/matsoz_manuel.htm';
            aboutUsUrl = './resources/about_us/about_us.htm';
        }
    }
    catch(e){}
    Main.InfoDialog.addContent(
        'Program Hakkında',
        '<iframe src="'+aboutUsUrl+'" style="width: 100%; height: 99%; border: none; padding: 0px; box-sizing: border-box; overflow: hidden; margin: 0px;"></iframe>'
    );
    Main.InfoDialog.addContent(
        'Kullanıcı Kılavuzu',
        '<iframe src="'+matsozManualUrl+'" style="width: 100%; height: 99%; border: none; padding: 0px; box-sizing: border-box; overflow: hidden; margin: 0px;"></iframe>'
    );

    $('.btn_home').click(function(event){
        try{
            if (exportedPage) {
                window.location = '../../intro/index.html';
            } else {
                window.location = '../';
            }
        }
        catch(e){
            window.location = '../';
        }
    });
    $('.btn_info').click(function(event){
        Main.InfoDialog.show();
    });
    $('.btn_print').click(function(event){
        window.print();
    });

}
Main();


var orientationWarningDialog = null;
window.onorientationchange = detectOrientation;
function detectOrientation(){
    if(window['orientation'] == undefined)
        return;
    if(typeof window.onorientationchange != 'undefined'){
        if ( orientation == 0 ) {
            if(orientationWarningDialog != null)
                orientationWarningDialog.hide();
        }
        else if ( orientation == 90 ) {
            if(orientationWarningDialog == null){
                orientationWarningDialog = new OrientationWarningDialogBox();
            }
            orientationWarningDialog.show();
            detectOrientation();
        }
        else if ( orientation == -90 ) {
            if(orientationWarningDialog == null){
                orientationWarningDialog = new OrientationWarningDialogBox();

            }
            orientationWarningDialog.show();
            detectOrientation();
        }
        else if ( orientation == 180 ) {
            if(orientationWarningDialog != null)
                orientationWarningDialog.hide();
        }
    }

}
function OrientationWarningDialogBox(){
    var mask = document.createElement('div');
    mask.className = 'dialogmaske dialogmaske_alert';
    document.body.appendChild(mask);

    var dialog_box = document.createElement('div');
    dialog_box.id = 'dialog_box';
    dialog_box.dialog = this;
    dialog_box.className = 'dialoggolge';
    dialog_box.setAttribute('DialogId',this.id);
    document.body.appendChild(dialog_box);
    $(mask).css({
        width:$('#container').width() + 'px'
    });
    $(dialog_box).css({
        position:'fixed',
        width:'390px',
        height:'140px',
        marginLeft:'-150px',
        marginTop:'-50px',
        padding:'30px',
        fontSize:'20px',
        lineHeight:'23px',
        color:'#f00',
        fontWeight:'bold',
        boxSizing:'border-box'
    });
//    $(mask).css({
//        background:"url(ui_img/serit_siyah_20.png) repeat rgba(255,0,0,0.8)"
//    })
    $(dialog_box).html("Dikey pozisyon desteklenmemektedir. Lütfen cihazınızı yatay konuma getiriniz.");
    this.mask = mask;
    this.dialog_box = dialog_box;


    this.show = function(){
        this.mask.style.display = 'block';
        this.dialog_box.style.display = 'block';
    }
    this.hide = function(){
        this.mask.style.display = 'none';
        this.dialog_box.style.display = 'none';
    }
}
$(document).ready(detectOrientation);

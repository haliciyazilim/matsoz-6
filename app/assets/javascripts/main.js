// This is a manifest file that'll be compiled into main.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
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
            console.log('Interaction is not defined');

        }
    });

}

Main.config = {
    defaultLibrary: "raphael"
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

    if (framework == 'raphael') {
        Main.raphaelInit();
        Interaction.init(Main.interaction);
    } else if (framework == 'paper') {
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
            setTimeout(Main.startAnimation,/*Main.calculateDefinitionWaitTime()*/1000);
        }
    }
};
Main.calculateDefinitionWaitTime = function(){
    function removeHTMLTags(htmlString){
        if(htmlString){
            var mydiv = document.createElement("div");
            mydiv.innerHTML = htmlString;
            if (document.all)// IE Stuff
                return mydiv.innerText;
            else // Mozilla does not work with innerText
                return mydiv.textContent;
        }
        return null;
    }
    function countWords(s){
        s = s.replace(/(^\s*)|(\s*$)/gi,"");
        s = s.replace(/[ ]{2,}/gi," ");
        s = s.replace(/\n /,"\n");
        return s.split(' ').length;
    }
    var html = $('.definition').html();
    html = removeHTMLTags(html);
    return countWords(html)*400+500;
}

Main.initializeScreen = function() {
    setTimeout(function() { window.scrollTo(0, 1); }, 1);
}

Main.initializeNavigation = function() {
    var createWordList = function(letter) {

        $('.navlink').removeClass('harfselected');
        $('.navlink[data-letter="'+letter+'"]').addClass('harfselected');
        var entries = wordList[letter];
        var htmlString = "";

        for (i = 0; i < entries.length; i++) {
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
            var animHelper = new AnimationHelper({
                change:change
            });
            animHelper.animate({
                style:{change:800},
                duration:250,
                animationType:'easeIn',
                update:function(){
                    $(div).css({backgroundPosition:(this.change-100)+'px -9px'});
                },
                callback:function(){
                    $(div).animate({opacity:0},250,function(){$(this).remove()});
                }
            })
        }
        else{
            isDraggable = false;
            var animHelper = new AnimationHelper({
                change:change
            });
            animHelper.animate({
                style:{change:0},
                duration:100,
                animationType:'easeIn',
                update:function(){
                    $(div).css({backgroundPosition:(this.change-100)+'px -9px'});
                },
                callback:function(){
                    isDraggable = true;
                }
            })
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

Main.initializeToolbar = function(){

    $('.btn_prev').click(function(event){
        window.history.go(-1);
    });
    $('.btn_next').click(function(event){
        window.history.go(1);
    });
    $('.btn_home').click(function(event){
        window.location = '../';
    });
    $('.btn_info').click(function(event){

        var div = document.createElement('div');
        div.innerHTML = "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
//        $(div).dialog({
//            autoOpen:true
//        })
    });
    $('.btn_print').click(function(event){
//        $('.etkilesimalan').printElement();
        window.print();
//        printDiv($('#container').get(0));
    });
}
Main();
//function printDiv(div) {
//    var printContents = div.innerHTML;
//    var originalContents = document.body.innerHTML;
//
//    document.body.innerHTML = printContents;
//
//    window.print();
//
//    document.body.innerHTML = originalContents;
//}
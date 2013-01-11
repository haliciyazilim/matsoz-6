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

Main.platform = {
    MOBILE:'Mobile',
    DESKTOP:'Desktop'
}

Main.getCurrentPlatform = function(){
    var userAgent = navigator.userAgent;
    if(userAgent.indexOf("Mobile") > 0)
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

Main.initializeToolbar = function(){
    Main.InfoDialog = new Dialog({title:'Information'});
    Main.InfoDialog.addContent(
        'Program Hakkında',
        'Tüm Hakları Saklıdır (C) 2012 - Halıcı Bilgi İşlem AŞ<br/>www.halici.com.tr<br/>Etkileşimli Matematik Sözlüğü<br/>Güncelleme Tarihi:  2012-11-08<br/>Versiyon: 0.8.1<br/>Tablet için kullanıma uygun olup Chrome ve Safari tarayıcıları ile çalışır.<br/>Tarayıcı Gereksinimleri: Javascript, HTML5, CSS3<br/>İhtiyaç duyulacak gereksinimler ve programın işlevselliği kullandığınız işletim sistemi ve donanıma bağlı olarak değişiklik gösterebilir.<br/>'
    );
    Main.InfoDialog.addContent(
        'Kullanım Şartları',
        '<span>Hal&#305;c&#305; Bilgi &#304;&#351;lem A&#350;&rsquo;nin sahibi oldu&#287;u &ldquo;Etkile&#351;imli Matematik S&ouml;zl&uuml;&#287;&uuml;&rdquo; program&#305;n&#305;n kullan&#305;m&#305; yaln&#305;zca bu Kullan&#305;m Ko&#351;ullar&#305;n&#305;n h&uuml;km&uuml; alt&#305;ndad&#305;r.</span></p><p class="c0"><span>Bu program&#305; ya da dahilindeki bilgileri kullanmay&#305; d&uuml;&#351;&uuml;n&uuml;yorsan&#305;z, l&uuml;tfen i&#351;bu &ldquo;Kullan&#305;m Ko&#351;ullar&#305;&rdquo;n&#305; okuyunuz. Program&#305; kullanarak, Kullan&#305;m Ko&#351;ullar&#305;n&#305; kabul etti&#287;iniz varsay&#305;l&#305;r. Kullan&#305;m Ko&#351;ullar&#305;n&#305; kabul etmiyorsan&#305;z, l&uuml;tfen programdan &ccedil;&#305;k&#305;n&#305;z ve i&#351;bu program&#305; kullanmay&#305;n&#305;z.</span></p><p class="c0"><span class="c3">K&#305;saltmalar</span><span><br>Program: Etkile&#351;imli Matematik S&ouml;zl&uuml;&#287;&uuml; &nbsp; <br>&Uuml;retici: Hal&#305;c&#305; Bilgi &#304;&#351;lem A&#350;, ODT&Uuml;-Hal&#305;c&#305; Yaz&#305;l&#305;mevi, Ankara<br>Kullan&#305;c&#305;: Etkile&#351;imli Matematik S&ouml;zl&uuml;&#287;&uuml;n&uuml; kullanan ki&#351;i</span></p><p class="c0"><span>Program&#305;n i&ccedil;eri&#287;i (yaz&#305;lar, &ouml;rnekler, resimler, animasyonlar ve etkile&#351;imler) &uuml;reticinin i&ccedil;erik geli&#351;tirme ekibi taraf&#305;ndan olu&#351;turulmu&#351;tur. &Uuml;retici i&ccedil;eri&#287;in do&#287;rulu&#287;unu ve g&uuml;ncelli&#287;ini sa&#287;lamak i&ccedil;in &ouml;zen g&ouml;stermi&#351;tir. Ancak, &uuml;retici i&ccedil;eri&#287;in do&#287;rulu&#287;u, g&uuml;venilirli&#287;i ve g&uuml;ncelli&#287;i konusunda bir garanti vermez.</span></p><p class="c0"><span>&Uuml;retici bu program&#305; kullan&#305;c&#305;n&#305;n teknolojik imkanlardan faydalanarak alan bilgisini geli&#351;tirmesi ve sa&#287;lanan etkile&#351;imlerle bu bilgilerini peki&#351;tirmesi amac&#305;yla hizmete sunmu&#351;tur.</span></p><p class="c0"><span>Program, harici &#304;nternet sayfalar&#305;na ba&#287;lant&#305;lar i&ccedil;erebilir. &Uuml;retici bu sayfalar&#305;n i&ccedil;eri&#287;inden sorumlu de&#287;ildir. Bu sayfalar&#305;n kullan&#305;m ko&#351;ullar&#305;na uymak sizin sorumlulu&#287;unuzdad&#305;r. </span></p><p class="c0"><span>Program&#305;n kullan&#305;m&#305;yla do&#287;abilecek her t&uuml;rl&uuml; zararlar kullan&#305;c&#305;n&#305;n kendi sorumlulu&#287;undad&#305;r.</span></p><p class="c0"><span>Program kullan&#305;c&#305;n&#305;n sa&#287;lad&#305;&#287;&#305; ki&#351;isel bilgileri hi&ccedil;bir &#351;ekilde &uuml;&ccedil;&uuml;nc&uuml; taraflar ile payla&#351;maz. Ancak yasal zorunluluk hallerinde, bu bilgileriniz ilgili ki&#351;i veya kurumlara verilebilir. </span></p><p class="c0"><span>Program&#305;n t&uuml;m haklar&#305; &uuml;reticiye aittir. Fikir ve Sanat Eserleri Kanunu&#39;nun telif haklar&#305;na ili&#351;kin h&uuml;k&uuml;mlerine g&ouml;re &uuml;reticinin yaz&#305;l&#305; izni olmad&#305;k&ccedil;a i&ccedil;erikler (yaz&#305;lar, &ouml;rnekler, resimler, animasyonlar ve etkile&#351;imler) k&#305;smen ya da tamamen kopyalanamaz, yay&#305;nlanamaz ve kullan&#305;lamaz. </span></p><p class="c0"><span>&Uuml;retici uygulaman&#305;n kullan&#305;m ko&#351;ullar&#305;n&#305; de&#287;i&#351;tirme hakk&#305;n&#305; sakl&#305; tutar.</span>'
    );
    $('.btn_prev').click(function(event){
        window.history.go(-1);
    });
    $('.btn_next').click(function(event){
        window.history.go(1);
    });
    $('.btn_home').click(function(event){
        if (exportedPage) {
            window.location = '../../intro/index.html';
        } else {
            window.location = '../';
        }
    });
    $('.btn_info').click(function(event){
//        console.log("I'm here");
        Main.InfoDialog.show();
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

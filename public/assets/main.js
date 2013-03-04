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
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  this.Class = function(){};
  
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})();
// JavaScript Document
function Compass(x,y){
	this.defaultX = x;
	this.defaultY = y;
	this.left = new Raster('compass_left_leg');
	this.right = new Raster('compass_right_leg');
	this.knuckle = new Raster('compass_knuckle');
	this.R = this.left.size.height;
	this.group = new Group();
	this.group.addChild(this.left);
	this.group.addChild(this.right);
	this.group.addChild(this.knuckle);
	this.left.position = [
		x,
		y-this.left.size.height*0.5
	]; 
	this.knuckle.position = [
		x+this.left.size.width*0.5,
		y-this.left.size.height-this.knuckle.size.height*0.5
	];
	this.right.position = [
		x+this.left.size.width,
		y-this.right.size.height*0.5
	];

	this.d = this.right.position.x -this.left.position.x;
	
	this.remove = function(){
		this.left.remove();
		this.right.remove();
		this.knuckle.remove();
	};
	this.changeDelta = function(dx){
		var _betha = Math.acos((this.d)/(2*this.R));
		var _alpha = Math.acos((this.d+dx)/(2*this.R));
		var _o = Util.radianToDegree(_betha ) - Util.radianToDegree(_alpha);
		var dy  = this.R*(Math.sin(_betha) - Math.sin(_alpha));
		this.left.rotate(
			_o,
			[
				this.defaultX,
				this.defaultY
			]
		);
		this.right.rotate(
			-_o,
			[
				this.defaultX+this.d,
				this.defaultY
			]
		);
		this.knuckle.position.y += dy;
		this.right.position.x += dx;
		this.knuckle.position.x += dx/2;
		this.d += dx;
	};
	this.rotate = function(angle,point){
		this.left.rotate(angle,point);
		this.right.rotate(angle,point);
		this.knuckle.rotate(angle,point);
	}
};
function DecimalMultiplication(carpim1, carpim2, div, fontSize){
    this.carpim1=carpim1;
    this.carpim2=carpim2;

    this.div="#"+div;
    this.fontSize=fontSize;

    carpim1F=carpim1;
    carpim2F=carpim2;

    if(this.fontSize==undefined)
        this.fontSize=30;
    var oran=this.fontSize*40/30;

    carpim1VirguldenSonraBasamak=0;
    carpim2VirguldenSonraBasamak=0;
    
    if(Util.isInteger(this.carpim1)==false){

        console.log("Util Çarpim1: "+this.carpim1)
        var carpim1Array=this.carpim1.toString().split(".");
        this.carpim1=carpim1Array[0]+""+carpim1Array[1];
        carpim1=carpim1Array[0]+""+carpim1Array[1];
        carpim1VirguldenSonraBasamak=carpim1Array[1].length;
        console.log("Util Çarpim1: "+this.carpim1)
    }
    else{
        this.carpim1=parseInt( this.carpim1,10);
        carpim1=parseInt( carpim1,10);
    }

    if(Util.isInteger(this.carpim2)==false){
        var carpim2Array=this.carpim2.toString().split(".");
        this.carpim2=carpim2Array[0]+""+carpim2Array[1];
        carpim2=carpim2Array[0]+""+carpim2Array[1];
        carpim2VirguldenSonraBasamak=carpim2Array[1].length;
    }






    this.doldur=function(){
        $(this.div,container).append("<div id='carpim1' class='carpilan'>");
	    $(this.div+" #carpim1")
            .css("top",this.fontSize*10/30).html();



	
        // ustteki divi dolduruyoruz.			
        for (var i=0; i<this.carpim1.toString().length;i++){
            var id=this.carpim1.toString().length-i
            $(this.div+" #carpim1",container).append("<span id='ilkBasamak"+id+"'>");
            $(this.div+" #carpim1 #ilkBasamak"+id).html(this.carpim1.toString().charAt(i));
            $(this.div+" #carpim1 #ilkBasamak"+id).addClass("ilkBasamakTek");
	}
	
        $(this.div,container).append("<div id='carpim2' class='carpilan'>");
            $(this.div+" #carpim2")
                .css("top",oran).html();



        // ustteki divi dolduruyoruz.			
	for(var i=0;i<this.carpim2.toString().length;i++){
            var id=this.carpim2.toString().length-i
            $(this.div+" #carpim2",container).append("<span id='ikinciBasamak"+id+"'>");
            $(this.div+" #carpim2 #ikinciBasamak"+id).html(this.carpim2.toString().charAt(i));
            $(this.div+" #carpim2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
	}
			
	$(this.div,container).append("<div id='isaretCarpma'>");
	$(this.div+" #isaretCarpma").css("width",this.fontSize*80/30)
            .css("text-align","left")
            .css("height",this.fontSize*30/30)
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize)
            .css("border-bottom","solid 2px black")
            .css("top",oran)
            .html("x");
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height",this.fontSize*30/30)
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize);


        // carpim2'nin konumunu ayarlıyoruz.
        virgulFarki=carpim1VirguldenSonraBasamak-carpim2VirguldenSonraBasamak;
        if(virgulFarki>0){
            $(this.div+" #carpim2")
                .css("right",this.fontSize*virgulFarki*18/30)
        }
        else if(virgulFarki<0){
            $(this.div+" #carpim1")
                .css("right",this.fontSize*18/30)
        }

	
       /*
       $(this.div,container).append("<div id='sonuc' class='carpilan'>");
            $(this.div+" #sonuc").css("top","100px").html();
		
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize)
            .css("z-index","4");
       */
        
        for(var i=0; i<this.carpim2.toString().length;i++){
		var top= this.fontSize*(75+25*i)/30;
		var right=this.fontSize*(i*16)/30;
		var id=i+1;
		
		$(this.div,container).append("<div id='carpmaSonuc"+id+"'/>");	
		$(this.div+" #carpmaSonuc"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #carpmaSonuc"+id,container).append("<span id='carpmaSonuc"+id+"Basamak"+j+"'>");
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).html(i);
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).addClass("basamakTek");
                
                }
                
                $(this.div,container).append("<div id='elde"+id+"'/>");	
		$(this.div+" #elde"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #elde"+id,container).append("<span id='elde"+id+"Basamak"+j+"'>");
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).html(0);
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).addClass("eldeBasamakTek");
                
                }	
                
                $(this.div,container).append("<div id='carpmaEldedenSonra"+id+"'/>");	
		$(this.div+" #carpmaEldedenSonra"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #carpmaEldedenSonra"+id,container).append("<span id='carpmaEldedenSonra"+id+"Basamak"+j+"'>");
                $(this.div+" #carpmaEldedenSonra"+id+" #carpmaEldedenSonra"+id+"Basamak"+j).html(j);
                $(this.div+" #carpmaEldedenSonra"+id+" #carpmaEldedenSonra"+id+"Basamak"+j).addClass("basamakTek");
                
                }
                
		if(i==(carpim2.toString().length-1)){
                    $(this.div,container).append("<div id='isaretToplama'>");
                    $(this.div+" #isaretToplama").css("width",this.fontSize*(80+i*20)/30+"px")
                        .css("text-align","left")
                        .css("height",this.fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("border-bottom","solid 2px black")
                        .css("top",(top)+"px")
                        .html("+").css("opacity","0");
				
                    $(this.div,container).append("<div id='toplamaSonuc'/>");	
                    $(this.div+" #toplamaSonuc").css("width",120+(i-1)*16+"px")
                        .css("text-align","right")
                        .css("height",this.fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+(this.fontSize*35/30)+"px")
                        .css("z-index","5");
                        //.css("opacity","0");
                    
                    var sonuc=parseFloat(carpim1F*carpim2F).toFixed(carpim1VirguldenSonraBasamak+carpim2VirguldenSonraBasamak);
                    var sonucArray=sonuc.toString().split(".");
                    sonuc=sonucArray[0]+sonucArray[1];
                    for(var j=sonuc.toString().length;j>=1;j--){

                    $(this.div+" #toplamaSonuc",container).append("<span id='toplamaSonucBasamak"+j+"'>");
                    $(this.div+" #toplamaSonucBasamak"+j).html(i);
                    $(this.div+" #toplamaSonucBasamak"+j).addClass("basamakTek");

                    }

                    $(this.div,container).append("<div id='toplamaElde'/>");	
                    $(this.div+" #toplamaElde").css("width","100px")
                        .css("text-align","right")
                        .css("height",fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+(this.fontSize*35/30)+"px")
                        .css("z-index","5");

                    for(var j=sonuc.toString().length;j>=1;j--){
                        
                        $(this.div+" #toplamaElde",container).append("<span id='toplamaEldeBasamak"+j+"'>");
                        $(this.div+" #toplamaEldeBasamak"+j).html(0);
                        $(this.div+" #toplamaEldeBasamak"+j).addClass("eldeBasamakTek");

                    }
                    
                    $(this.div,container).append("<div id='toplamaEldedenSonra'/>");	
                    $(this.div+" #toplamaEldedenSonra").css("width",120+(i-1)*16+"px")
                        .css("text-align","right")
                        .css("height",fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+35+"px")
                        .css("z-index","5")
                        .css("opacity","0");
                    
                    
                    for(var j=sonuc.toString().length;j>=1;j--){

                    $(this.div+" #toplamaEldedenSonra",container).append("<span id='toplamaEldedenSonra"+j+"'>");
                    $(this.div+" #toplamaEldedenSonra"+j).html(0);
                    $(this.div+" #toplamaEldedenSonra"+j).addClass("basamakTek");

                    }
		}
        }
        $(this.div+" .basamakTek").css("opacity","0");
	$(this.div+" .eldeBasamakTek").css("opacity","0").css("position","absolute");

        // virgüller

        $(this.div+" #carpim1",container).append("<div id='virgul1' class='virgul'>");
        $(this.div+" #carpim2",container).append("<div id='virgul2' class='virgul'>");
        $(this.div+" #toplamaSonuc",container).append("<div id='virgul3' class='virgul'>");

        $(this.div+ " .virgul").css("position","absolute").css("height",this.fontSize*30/30).html(",");
        $(this.div+" #virgul1").css("top","1px");
        $(this.div+" #virgul2").css("top","1px");
        $(this.div+" #virgul3").css("top","1px").css("opacity","0");

        if(carpim2.toString().length==1)
            $(this.div+" #virgul2").css("opacity","0");


        switch (carpim1VirguldenSonraBasamak){

            case 1:
                $(this.div+" #virgul1").css("right",this.fontSize*14/30)
                break
            case 2:
                $(this.div+" #virgul1").css("right",this.fontSize*32/30)
                break
            default :
                $(this.div+" #virgul1").css("right",this.fontSize*0/30).html("");
                break;
        }

        switch (carpim2VirguldenSonraBasamak){
            case 1:
                $(this.div+" #virgul2").css("right",this.fontSize*14/30)
                break
            case 2:
                $(this.div+" #virgul2").css("right",this.fontSize*32/30)
                break
        }

        virgulToplam=carpim1VirguldenSonraBasamak+carpim2VirguldenSonraBasamak;
        switch (virgulToplam){
            case 1:
                $(this.div+" #virgul3").css("right",this.fontSize*14/30)
                break
            case 2:
                $(this.div+" #virgul3").css("right",this.fontSize*30/30)
                break
            case 3:
                $(this.div+" #virgul3").css("right",this.fontSize*46/30)
                break
        }

        virgulFark=carpim1VirguldenSonraBasamak-carpim2VirguldenSonraBasamak;
        if(Util.isInteger(carpim2)==true)
            $(this.div +"#carpim2").css("margin-right",virgulFark*20+3);
        else
            $(this.div +"#carpim2").css("margin-right",virgulFark*20);
    }

this.basla=function(hizB,hizA){
    this.hizA=hizA;
    this.hizB=hizB;
    
    var sayilarFadeInRenk="#FF6600";
    var sayilarFadeOutRenk="#000000";
    var sonuclarRengi="#008000";
    var eldeRengi="#8C1717";
    
    
    Interaction.carpim1BasamakSayisi=this.carpim1.toString().length;
    Interaction.carpim2BasamakSayisi=this.carpim2.toString().length;
    
    
    
    
//    
//    for (var i=1;i<=Interaction.carpim2BasamakSayisi;i++){ // çarpim ikinin döngüsü
//        
//        setTimeout(function(){yanmaTekDongu(i);},1000+(i-1)*9000);
//        
//    }
    

    function yanmaTekDongu(i){
        var zamanCizgisi=0;
        var sayac=0;

        
        $("#"+div+" #ikinciBasamak"+i).animate({color:sayilarFadeInRenk},hizA);
        
        for(var p=1; p<=Interaction.carpim1BasamakSayisi;p++){
            
            
            Interaction.carpim1BasamakTek=carpim1.toString().reverse().charAt(p-1);
            console.log("1. çarpan: "+Interaction.carpim1BasamakTek);
            
            Interaction.carpim2BasamakTek=carpim2.toString().reverse().charAt(i-1);
            console.log("2. çarpan: "+Interaction.carpim2BasamakTek);
            Interaction.basamakSonuc= Interaction.carpim1BasamakTek*Interaction.carpim2BasamakTek;
            
            console.log("Sonuc: "+Interaction.basamakSonuc);
            
            $("#"+div+" #ilkBasamak"+p).delay(sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);

            console.log("Delay: "+(p+(i-1)*3))
            
            console.log("i: "+i);
           
             if(Interaction.basamakSonuc<10){
                
                if($("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!=0 || $("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!="0"){
                    console.log("1 if(elde!=0)........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc);
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({color:"#000000",opacity:"0"},hizA);
                
                    
                    var eldeCarpmaToplam=parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10)+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10);
                    
                    console.log("#"+div+" #elde"+(i)+"Basamak"+(p)+" eldeli**************************");
                    console.log("sonucBasamak"+p+": "+parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10));
                    console.log("elde"+p+": "+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10));
                    console.log("eldeCarpmaToplam: "+eldeCarpmaToplam);
                    
                    
                    
                    if(eldeCarpmaToplam>9){
                        console.log("eldeCarpmaToplam'a giriliyor. 999999999999999999999999999")
                        var oncekiElde=parseInt($("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(),10);
                        var eldeCarpmaToplamBasamak2=parseInt(eldeCarpmaToplam.toString().charAt(0),10);
                        
                        
                        
                            
                            console.log("#"+div+" #elde"+(i)+"Basamak"+(p+1)+", "+oncekiElde+", "+eldeCarpmaToplamBasamak2);
                            $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+(p+1)).html(oncekiElde+eldeCarpmaToplamBasamak2);
                        
                        
                        
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam.toString().charAt(1));
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+(p+1)).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                    else{
                    
                    
                    
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);

                        //$("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                    }
                }
                else{
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc);
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({color:"#000000"},hizA);
                }
                
                sayac+=(hizA+hizB*2);

            }
            else{
                
                
                
                console.log("1 else........................")
                
                var right=fontSize*((p)*16)/30+"px"
                $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc.toString().charAt(1));
                $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(Interaction.basamakSonuc.toString().charAt(0)).css("right",right);

                $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA/5);
                if(p==3){
                    console.log("1 if(p==3)........................")
                    
                    
                    $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA/5).delay(hizB).animate({color:"#000000"},hizA);
                }
                else{
                    console.log("1 if(p==3) else........................")
                    var yeniRight=fontSize*(-30+(-15*i-1))/30+"px";
                    
                    $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({right:yeniRight,color:eldeRengi},hizA).delay(hizB*2).animate({right:right,color:"#000000",opacity:"0"},hizA);
                    //$("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({opacity:"0", color:sonuclarRengi},hizA/5)
                }   
                
                
                if($("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!=0 || $("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!="0"){
                    console.log("1 if(elde!=0)........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({opacity:"0", color:sonuclarRengi},hizA);
                    console.log("#"+div+" #elde"+(i)+"Basamak"+(p)+" eldeli**************************");
                    var eldeCarpmaToplam=parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10)+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10);
                    
                    if(eldeCarpmaToplam>9){
                        console.log("eldeCarpmaToplam'a giriliyor. 999999999999999999999999999")
                        var oncekiElde=parseInt($("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(),10);
                        var eldeCarpmaToplamBasamak2=parseInt(eldeCarpmaToplam.toString().charAt(0),10);
                        
                        
                        
                            
                            console.log("#"+div+" #elde"+(i)+"Basamak"+(p+1)+", "+oncekiElde+", "+eldeCarpmaToplamBasamak2);
                            $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(oncekiElde+eldeCarpmaToplamBasamak2);
                        
                        
                        
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam.toString().charAt(1));
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                        //$("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                    else{
//                    
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                }
                else{
                    console.log("1 if(elde!=0) else........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({color:"#000000"},hizA);
                }
            
                sayac+=(hizA+hizB*2)+1500;

            }
            
            
            
        
            
        }

        zamanCizgisi+=sayac;
            console.log("zamanCizgisi: "+zamanCizgisi);

        $("#"+div+" #ikinciBasamak"+i).delay(sayac-hizA*2).animate({color:sayilarFadeOutRenk},hizA);
        if(carpim2.length>1){

            if(i==1){
                i++;
                setTimeout(function(){yanmaTekDongu(i);},zamanCizgisi);

            }
            else if(i==2){
                i++;
                if(Interaction.carpim2BasamakSayisi==3)
                    setTimeout(function(){yanmaTekDongu(i);},zamanCizgisi);
                else{
                    console.log("girdim");
                    $("#"+div+" #isaretToplama").delay(zamanCizgisi).animate({opacity:"1"},hizA);
                    setTimeout(function(){toplama(zamanCizgisi);},zamanCizgisi);
                }
            }


            else{
                console.log("girdim");
                $("#"+div+" #isaretToplama").delay(zamanCizgisi).animate({opacity:"1"},hizA);
                setTimeout(function(){toplama(zamanCizgisi);},zamanCizgisi);


            }
        }
        else{
            console.log("virgülün açılması lazım "+div );
            $("#"+div+" #virgul3").css({top:-35}).delay(zamanCizgisi).animate({opacity:"1"},1000);
        }
        
    }
    
    
    setTimeout(function(){yanmaTekDongu(1);},1000);
    //setTimeout(function(){yanmaTekDongu(2);},10000);
    //setTimeout(function(){yanmaTekDongu(3);},19000);
    
    function toplama(){
        
        for(var b=1; b<=5;b++){
            console.log("xsx girdi");
            setTimeout(toplama1,2000*b);
            setTimeout(toplama2,2000+2000*b);
            setTimeout(toplama3,4000+2000*b);
        }
        toplama1Sayac=0;
        function toplama1(){
        
            console.log("topalam1 girdi");
            toplama1Sayac++;
            $("#"+div+" #carpmaSonuc1Basamak"+toplama1Sayac+", #"+div+" #elde1Basamak"+toplama1Sayac+" ,#"+div+" #carpmaEldedenSonra1Basamak"+toplama1Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
            
            //console.log("*****************topalam1: "+$("#"+div+" #carpmaSonuc1Basamak"+toplama1Sayac).html());
            
            
        }

        toplama2Sayac=0;
        function toplama2(){
            //var sonuc=carpim1*carpim2;
        console.log("topalam2 girdi");
            toplama2Sayac++;
                //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+hizB,10))
                $("#"+div+" #carpmaSonuc2Basamak"+toplama2Sayac+", #"+div+" #elde2Basamak"+toplama2Sayac+" ,#"+div+" #carpmaEldedenSonra2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
                //$("#"+div+" #elde2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
        }
        toplama3Sayac=0;
        function toplama3(){
            //var sonuc=carpim1*carpim2;
        console.log("topalam3 girdi");
            toplama3Sayac++;
                //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+hizB,10))
                $("#"+div+" #carpmaSonuc3Basamak"+toplama3Sayac+", #"+div+" #elde3Basamak"+toplama3Sayac+" ,#"+div+" #carpmaEldedenSonra3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
                //$("#"+div+" #elde3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
        }
        
        var sonuc=parseFloat(carpim1F*carpim2F).toFixed(virgulToplam);
        var sonucArray=sonuc.toString().split(".");
        sonuc=sonucArray[0]+sonucArray[1];

        console.log("wwwwwwwwwwwwwww: "+sonuc.toString().length+", weeeeeeee: "+sonuc+" c1: "+carpim1F+" c2: "+carpim2F);
        for(var t=1;t<=sonuc.toString().length;t++){
            var basamak=sonuc.toString().charAt(sonuc.toString().length-t);
            $("#"+div+" #toplamaSonucBasamak"+t).html(basamak);
            $("#"+div+" #toplamaSonucBasamak"+t).delay(2000*t).animate({opacity:"1"},hizA);
            console.log("sonuc L: "+sonuc.toString().length+" t: "+t);
            if(t==sonuc.toString().length){

                console.log("virgülün açılması lazım "+div );
                $("#"+div+" #virgul3").delay(2000*t+1000).animate({opacity:"1"},1000);
            }
        
        
        }


        
    }
    
   
}
    
}

;
/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 06.11.2012
 * Time: 10:27
 * To change this template use File | Settings | File Templates.
 */

var Dialog = Class.extend({
    init:function(opt){
        this.id = Dialog.GetId();

        var mask = document.createElement('div');
        mask.className = 'dialogmaske';
        document.body.appendChild(mask);

        var dialog_box = document.createElement('div');
        dialog_box.id = 'dialog_box';
        dialog_box.dialog = this;
        dialog_box.className = 'dialoggolge';
        dialog_box.setAttribute('DialogId',this.id);
        document.body.appendChild(dialog_box);

        $(dialog_box).append('<a href="#" id="kapat" onclick="Dialog.CloseDialogWithId('+this.id+')"></a>');

        var dialog_tab_bar = document.createElement('div');
        dialog_tab_bar.className = 'dialog_tab_bar';
        dialog_box.appendChild(dialog_tab_bar);

        var dialog_content = document.createElement('div');
        dialog_content.className = 'dialog_content';
        dialog_box.appendChild(dialog_content);



//        this.dialog_title  = dialog_title;
        this.dialog_box = dialog_box;
        this.dialog_tab_bar = dialog_tab_bar;
        this.dialog_content = dialog_content;
        this.mask = mask;

        this.tabs = [];
        this.hide();

    },
    addContent:function(titleHTML,contentHTML){

        var title = document.createElement('div');
        title.className = 'dialog_tab_title';
        title.innerHTML = titleHTML;
        title.setAttribute('onclick',"Dialog.openTabInDialog('"+titleHTML+"','"+this.id+"')");

        var content = document.createElement('div');
        content.className = 'dialog_tab_content';
        content.innerHTML = contentHTML;
        title.content = content;

        this.tabs.push(title);
        $(this.dialog_tab_bar).append(title);
        $(this.dialog_content).append(content);


        Dialog.openTabInDialog(this.tabs[0].innerHTML,this.id);


    },
    setTitle:function(title){
        this.dialog_title.innerHTML = title + ' <div style="float:right;"><a href="#" onclick="Dialog.CloseDialogWithId('+this.id+')"><img src="/assets/theme/blue/ui_img/cancel.png" alt="Kapat"></a></div>';
    },
    show:function(){
        this.dialog_box.style.display = 'block';
        this.mask.style.display = 'block';
    },
    hide:function(){
        this.dialog_box.style.display = 'none';
        this.mask.style.display = 'none';
    }
});

Dialog.GetId = function(){
    if(!Dialog.__currentId)
        Dialog.__currentId = 1;
    return Dialog.__currentId++;
};

Dialog.CloseDialogWithId = function(id){
    console.log(id)
    $('*[DialogId="'+id+'"]').get(0).dialog.hide();
}
Dialog.openTabInDialog = function(tabTitle,id){
    var dialog = $('*[DialogId="'+id+'"]').get(0).dialog;
    console.log(dialog.tabs);
    for(var i=0; i<dialog.tabs.length;i++){
        console.log("I'm here");
        if(dialog.tabs[i].innerHTML == tabTitle){
            $(dialog.tabs[i]).removeClass('dialog_passive_tab');
            $(dialog.tabs[i]).addClass('dialog_active_tab');
            $(dialog.tabs[i].content).show();
        }
        else{
            $(dialog.tabs[i]).removeClass('dialog_active_tab');
            $(dialog.tabs[i]).addClass('dialog_passive_tab');
            $(dialog.tabs[i].content).hide();
        }
    }

}
;
var Surface = function (points) {
    this.points = points;
    
    this.rotationsX = [];
    this.pivotsX = [];
    
    this.rotationsY = [];
    this.pivotsY = [];
    
	this.rotationsZ = [];
	this.pivotsZ = [];
	
	this.clearRotations = function() {
		this.pivotsX = [];
		this.rotationsX = [];
		this.pivotsY = [];
		this.rotationsY = [];
		this.pivotsZ = [];
		this.rotationsZ = [];
	}
	this.remove = function(){
        if (this.projectedSurface) {
            this.projectedSurface.remove();
        }
    }
    this.project = function(matrix) {
        if (this.projectedSurface) {
            this.projectedSurface.remove();
        }
        
        var path = new Path();
        
        
        var points = this.get2DPoints(matrix);
        
        for (var i = 0; i < points.length; i++) {
            path.add(points[i]);
        }
            
        path.closed = true;
	
		if (this.shape) {
			path.strokeColor = this.shape.strokeColor;
	        path.fillColor = this.shape.fillColor;
	        path.strokeWidth = this.shape.strokeWidth;
			path.opacity = this.shape.opacity;
		}
				
        this.projectedSurface = path;
        
		path.surface = this;

        return path;
    }
    
    this.get2DPoints = function(matrix) {
        var points = [];
        
        for (var i = 0; i < this.points.length; i++) {
            var p = this.points[i];
            

            for (j = 0; j < this.rotationsY.length; j++) {
				p = Util.rotateY(this.rotationsY[j], p, this.pivotsY[j]);
            }

            for (j = 0; j < this.rotationsZ.length; j++) {
				p = Util.rotateZ(this.rotationsZ[j], p, this.pivotsZ[j]);
            }

    		for (var j = 0; j < this.rotationsX.length; j++) {
				p = Util.rotateX(this.rotationsX[j], p, this.pivotsX[j]);
			}
	        
            
            var pp = Util.project(p, matrix);
            pp.x = Math.floor(pp.x) + 0.5;
            pp.y = Math.floor(pp.y) + 0.5;
          
            points.push(pp);
        }
             
        return points;
    }
};

var ExpandableShape = Class.extend({
	delay: 0,
	opacity: 1,
	
	init: function(matrix) {
		this.matrix = matrix;
		this.animate = Item.prototype.animate;
		this.set_style = Item.prototype.set_style;

		this.fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
	    this.strokeColor = "#255b63";
	    this.strokeWidth = 1;
	},
	
	setSurfaces: function (surfaces) {
		this.surfaces = surfaces;
		
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].shape = this;
				}	
			}
		}
	},
    transform: function(point3){
        for (var key in this.surfaces) {
            if (this.surfaces.hasOwnProperty(key)) {
                if (this.surfaces[key] instanceof Surface) {
                    for (var i = 0; i < this.surfaces[key].points.length; i++) {
                        this.surfaces[key].points[i] = this.surfaces[key].points[i].add(point3);
                    }
                }
            }
        }
    },

	
	clearRotations: function() {
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].clearRotations();
				}	
			}
		}
	},

    setRotationX: function(angle, center) {
        if (!center) {
            center = new Point3(0,0,0);
        }
        for (var key in this.surfaces) {
            if (this.surfaces.hasOwnProperty(key)) {
                if (this.surfaces[key] instanceof Surface) {
                    this.surfaces[key].pivotsX[0] = center;
                    this.surfaces[key].rotationsX[0] = angle;
                }
            }
        }
    },
    setRotationY: function(angle, center) {
        if (!center) {
            center = new Point3(0,0,0);
        }
        for (var key in this.surfaces) {
            if (this.surfaces.hasOwnProperty(key)) {
                if (this.surfaces[key] instanceof Surface) {
                    this.surfaces[key].pivotsY[0] = center;
                    this.surfaces[key].rotationsY[0] = angle;
                }
            }
        }
    },
    remove:function(){
        for (var key in this.surfaces) {
            if (this.surfaces.hasOwnProperty(key)) {
                if (this.surfaces[key] instanceof Surface) {
                    this.surfaces[key].remove();
                }
            }
        }
    },
    setRotationZ: function(angle, center) {
        if (!center) {
            center = new Point3(0,0,0);
        }
        for (var key in this.surfaces) {
            if (this.surfaces.hasOwnProperty(key)) {
                if (this.surfaces[key] instanceof Surface) {
                    this.surfaces[key].pivotsZ[0] = center;
                    this.surfaces[key].rotationsZ[0] = angle;
                }
            }
        }
    },
	
	project: function() {
        var group = new Group();
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					group.addChild(this.surfaces[key].project(this.matrix));
				}	
			}
		}
        return group;
	},
	
	rotateSurfaceX: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 800,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == null) {
					surface.pivotsX.push(new Point3(0,0,0));
				} else {
					surface.pivotsX.push(center);
				}
			},
			update: function() {
				surface.rotationsX[surface.pivotsX.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	},
	
	rotateSurfaceY: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 800,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == nil) {
					surface.pivotsY.push(new Point3(0,0,0));
				} else {
					surface.pivotsY.push(center);
				}
			},
			update: function() {
				surface.rotationsY[surface.pivotsY.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	},
	
	rotateSurfaceZ: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 800,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == nil) {
					surface.pivotsZ.push(new Point3(0,0,0));
				} else {
					surface.pivotsZ.push(center);
				}
			},
			update: function() {
				surface.rotationsZ[surface.pivotsZ.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	}
});
var ExpandableEquilateralPrism = ExpandableShape.extend({
    init: function(width, height, length, matrix) {
            this._super(matrix);

            width /= 1;
            height /= 2;
            length /= 2;


            this.setSurfaces({
                backSurface: new Surface([
                    new Point3(-width,  height,      0),
                    new Point3(     0,  height, length),
                    new Point3(     0, -height, length),
                    new Point3(-width, -height,      0)
                    ]),
                bottomSurface: new Surface([
                    new Point3(     0, height, -length),
                    new Point3( width, height,       0),
                    new Point3(     0, height,  length),
                    new Point3(-width, height,       0)
                    ]),

                rightSurface: new Surface([
                    new Point3(width,  height,       0),
                    new Point3(    0,  height,  length),
                    new Point3(    0, -height,  length),
                    new Point3(width, -height,       0)
                    ]),
                leftSurface: new Surface([
                    new Point3(     0, -height, -length),
                    new Point3(-width, -height,       0),
                    new Point3(-width,  height,       0),
                    new Point3(     0,  height, -length)
                ]),
                topSurface: new Surface([
                    new Point3(     0, -height, -length),
                    new Point3( width, -height,       0),
                    new Point3(     0, -height,  length),
                    new Point3(-width, -height,       0)
                    ]),
                frontSurface: new Surface([
                    new Point3(     0, -height, -length),
                    new Point3( width, -height,       0),
                    new Point3( width,  height,       0),
                    new Point3(     0,  height, -length)
                    ])
            });
        },
    showSurfaces : function(delay,startingDelay) {
            var surface = function(s,m,index){
                AnimationManager.delay(function(){
                    var path = new Path();
                    var p = s.get2DPoints(m);
                    for(var i=0;i<p.length;i++)
                        path.add(p[i]);
                    path.closed = true;
                    path.set_style(animationSurfacesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*index
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }, startingDelay);
            }
            var i=0;
            surface(this.surfaces["bottomSurface"],this.matrix,i++);
            surface(this.surfaces["leftSurface"],this.matrix,i++);
            surface(this.surfaces["topSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
            surface(this.surfaces["frontSurface"],this.matrix,i++);

        },
    showVertexes : function(delay,startingDelay) {
            if(startingDelay == undefined)
                    startingDelay = 0;
            var circle = function(p1,i){
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
                        var a = new AnimationHelper({
                            shape:null,
                            opacity:0
                        });
                        a.animate({
                            style:{opacity:1}, 
                            duration:0,//delay,
                            delay:delay*i,
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                        a.animate({
                            style:{opacity:0},
                            delay:delay*8,
                            duration:delay,
                            callback:function(){
                                this.shape.remove();
                            },
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new circle(frontPoints[i],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new circle(backPoints[j],i);
            }

        },
    showEdges: function(delay,startingDelay){
            if(startingDelay == undefined)
                startingDelay = 0;
            var line = function(p1,p2,i) {
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
//                                    console.log("I'm here");
                        var path = new Path.Line(p1,p2);
                        path.set_style(animationEdgesHighlightStyle);
                        path.set_style({
                            opacity:0
                        });
                        path.animate({
                            style:{opacity:1},
                            duration:0,//delay,
                            delay:delay*i
                        });
                        path.animate({
                            style:{opacity:0},
                            duration:delay,
                            delay:delay*14,
                            callback:path.remove
                        });
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new line(frontPoints[i],frontPoints[(i+1)%frontPoints.length],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new line(backPoints[j],backPoints[(j+1)%backPoints.length],i);
            }
            for (;k < backPoints.length ; k++,i++){
                new line(frontPoints[3-k],backPoints[k],i);
            }
        },
    expand: function(style) {
            this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);

        },
    contract: function (style){
            this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
            this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
        }
});// var Prisim
;
var ExpandableParallelogramPrism = ExpandableShape.extend({
    init: function(width, height, length, matrix) {
            this._super(matrix);

            width /= 2;
            height /= 2;
            length /= 2;
            equilateral=-20
            skew=50;

            this.setSurfaces({
                backSurface: new Surface([
                    new Point3(-width,  height, length),
                    new Point3( width+skew,  height, length),
                    new Point3( width+skew, -height, length),
                    new Point3(-width, -height, length)
                    ]),
                bottomSurface: new Surface([
                    new Point3(-width, height,  length),
                    new Point3( width+skew, height,  length),
                    new Point3( width+equilateral+skew, height, -length),
                    new Point3(-width+equilateral, height, -length)
                    ]),
                leftSurface: new Surface([
                    new Point3(-width+equilateral, -height, -length),
                    new Point3(-width, -height,  length),
                    new Point3(-width,  height,  length),
                    new Point3(-width+equilateral,  height, -length)
                    ]),
                rightSurface: new Surface([
                    new Point3(width+equilateral+skew,  height, -length),
                    new Point3(width+skew,  height,  length),
                    new Point3(width+skew, -height,  length),
                    new Point3(width+equilateral+skew, -height, -length)
                    ]),
                topSurface: new Surface([
                    new Point3(-width+equilateral, -height, -length),
                    new Point3( width+equilateral+skew, -height, -length),
                    new Point3( width+skew, -height,  length),
                    new Point3(-width, -height,  length)
                    ]),
                frontSurface: new Surface([
                    new Point3(-width+equilateral, -height, -length),
                    new Point3( width+equilateral+skew, -height, -length),
                    new Point3( width+equilateral+skew,  height, -length),
                    new Point3(-width+equilateral,  height, -length)
                    ])
            });
        },
    showSurfaces : function(delay,startingDelay) {
            var surface = function(s,m,index){
                AnimationManager.delay(function(){
                    var path = new Path();
                    var p = s.get2DPoints(m);
                    for(var i=0;i<p.length;i++)
                        path.add(p[i]);
                    path.closed = true;
                    path.set_style(animationSurfacesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*index
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }, startingDelay);
            }
            var i=0;
            surface(this.surfaces["bottomSurface"],this.matrix,i++);
            surface(this.surfaces["leftSurface"],this.matrix,i++);
            surface(this.surfaces["topSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
            surface(this.surfaces["frontSurface"],this.matrix,i++);

        },
    showVertexes : function(delay,startingDelay) {
            if(startingDelay == undefined)
                    startingDelay = 0;
            var circle = function(p1,i){
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
                        var a = new AnimationHelper({
                            shape:null,
                            opacity:0
                        });
                        a.animate({
                            style:{opacity:1}, 
                            duration:0,//delay,
                            delay:delay*i,
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                        a.animate({
                            style:{opacity:0},
                            delay:delay*8,
                            duration:delay,
                            callback:function(){
                                this.shape.remove();
                            },
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new circle(frontPoints[i],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new circle(backPoints[j],i);
            }

        },
    showEdges: function(delay,startingDelay){
            if(startingDelay == undefined)
                startingDelay = 0;
            var line = function(p1,p2,i) {
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
//                                    console.log("I'm here");
                        var path = new Path.Line(p1,p2);
                        path.set_style(animationEdgesHighlightStyle);
                        path.set_style({
                            opacity:0
                        });
                        path.animate({
                            style:{opacity:1},
                            duration:0,//delay,
                            delay:delay*i
                        });
                        path.animate({
                            style:{opacity:0},
                            duration:delay,
                            delay:delay*14,
                            callback:path.remove
                        });
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new line(frontPoints[i],frontPoints[(i+1)%frontPoints.length],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new line(backPoints[j],backPoints[(j+1)%backPoints.length],i);
            }
            for (;k < backPoints.length ; k++,i++){
                new line(frontPoints[3-k],backPoints[k],i);
            }
        },
    expand: function(style) {
            this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);

        },
    contract: function (style){
            this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
            this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
        }
});// var Prisim
;
var ExpandablePrism = ExpandableShape.extend({
    init: function(width, height, length, matrix) {
            this._super(matrix);

            width /= 2;
            height /= 2;
            length /= 2;
            this.setSurfaces({
                backSurface: new Surface([
                    new Point3(-width,  height, length),
                    new Point3( width,  height, length),
                    new Point3( width, -height, length),
                    new Point3(-width, -height, length)
                    ]),
                bottomSurface: new Surface([
                    new Point3(-width, height,  length),
                    new Point3( width, height,  length),
                    new Point3( width, height, -length),
                    new Point3(-width, height, -length)
                    ]),
                leftSurface: new Surface([
                    new Point3(-width, -height, -length),
                    new Point3(-width, -height,  length),
                    new Point3(-width,  height,  length),
                    new Point3(-width,  height, -length)
                    ]),
                rightSurface: new Surface([
                    new Point3(width,  height, -length),
                    new Point3(width,  height,  length),
                    new Point3(width, -height,  length),
                    new Point3(width, -height, -length)
                    ]),
                topSurface: new Surface([
                    new Point3(-width, -height, -length),
                    new Point3( width, -height, -length),
                    new Point3( width, -height,  length),
                    new Point3(-width, -height,  length)
                    ]),
                frontSurface: new Surface([
                    new Point3(-width, -height, -length),
                    new Point3( width, -height, -length),
                    new Point3( width,  height, -length),
                    new Point3(-width,  height, -length)
                    ])
            });
        },
    showSurfaces : function(delay,startingDelay) {
            var surface = function(s,m,index){
                AnimationManager.delay(function(){
                    var path = new Path();
                    var p = s.get2DPoints(m);
                    for(var i=0;i<p.length;i++)
                        path.add(p[i]);
                    path.closed = true;
                    path.set_style(animationSurfacesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*index
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }, startingDelay);
            }
            var i=0;
            surface(this.surfaces["bottomSurface"],this.matrix,i++);
            surface(this.surfaces["leftSurface"],this.matrix,i++);
            surface(this.surfaces["topSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
            surface(this.surfaces["frontSurface"],this.matrix,i++);

        },
    showVertexes : function(delay,startingDelay) {
            if(startingDelay == undefined)
                    startingDelay = 0;
            var circle = function(p1,i){
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
                        var a = new AnimationHelper({
                            shape:null,
                            opacity:0
                        });
                        a.animate({
                            style:{opacity:1},
                            duration:0,//delay,
                            delay:delay*i,
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                        a.animate({
                            style:{opacity:0},
                            delay:delay*8,
                            duration:delay,
                            callback:function(){
                                this.shape.remove();
                            },
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new circle(frontPoints[i],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new circle(backPoints[j],i);
            }

        },
    showEdges: function(delay,startingDelay){
            if(startingDelay == undefined)
                startingDelay = 0;
            var line = function(p1,p2,i) {
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
//                                    console.log("I'm here");
                        var path = new Path.Line(p1,p2);
                        path.set_style(animationEdgesHighlightStyle);
                        path.set_style({
                            opacity:0
                        });
                        path.animate({
                            style:{opacity:1},
                            duration:0,//delay,
                            delay:delay*i
                        });
                        path.animate({
                            style:{opacity:0},
                            duration:delay,
                            delay:delay*14,
                            callback:path.remove
                        });
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new line(frontPoints[i],frontPoints[(i+1)%frontPoints.length],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new line(backPoints[j],backPoints[(j+1)%backPoints.length],i);
            }
            for (;k < backPoints.length ; k++,i++){
                new line(frontPoints[3-k],backPoints[k],i);
            }
        },
    expand: function(style) {
            this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);

        },
    contract: function (style){
            this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
            this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
        }
});// var Prisim
;
var ExpandableSkewedPrism = ExpandableShape.extend({
    init: function(width, height, length,skew, matrix) {
        this._super(matrix);

        width /= 2;
        height /= 2;
        length /= 2;
        //skew=0.5;
        this.setSurfaces({
            backSurface: new Surface([
                new Point3(-width,  height, length),
                new Point3( width,  height, length),
                new Point3( width+height*skew, -height, length),
                new Point3(-width+height*skew, -height, length)
            ]),
            bottomSurface: new Surface([
                new Point3(-width, height,  length),
                new Point3( width, height,  length),
                new Point3( width, height, -length),
                new Point3(-width, height, -length)
            ]),
            leftSurface: new Surface([
                new Point3(-width+height*skew, -height, -length),
                new Point3(-width+height*skew, -height,  length),
                new Point3(-width,  height,  length),
                new Point3(-width,  height, -length)
            ]),
            rightSurface: new Surface([
                new Point3(width,  height, -length),
                new Point3(width,  height,  length),
                new Point3(width+height*skew, -height,  length),
                new Point3(width+height*skew, -height, -length)
            ]),
            topSurface: new Surface([
                new Point3(-width+height*skew, -height, -length),
                new Point3( width+height*skew, -height, -length),
                new Point3( width+height*skew, -height,  length),
                new Point3(-width+height*skew, -height,  length)
            ]),
            frontSurface: new Surface([
                new Point3(-width+height*skew, -height, -length),
                new Point3( width+height*skew, -height, -length),
                new Point3( width,  height, -length),
                new Point3(-width,  height, -length)
            ])
        });
    },
    showSurfaces : function(delay,startingDelay) {
        var surface = function(s,m,index){
            AnimationManager.delay(function(){
                var path = new Path();
                var p = s.get2DPoints(m);
                for(var i=0;i<p.length;i++)
                    path.add(p[i]);
                path.closed = true;
                path.set_style(animationSurfacesHighlightStyle);
                path.set_style({
                    opacity:0
                });
                path.animate({
                    style:{opacity:1},
                    duration:0,//delay,
                    delay:delay*index
                });

                path.animate({
                    style:{opacity:0},
                    delay:delay*8,
                    duration:delay,
                    callback:path.remove
                })
            }, startingDelay);
        }
        var i=0;
        surface(this.surfaces["bottomSurface"],this.matrix,i++);
        surface(this.surfaces["leftSurface"],this.matrix,i++);
        surface(this.surfaces["topSurface"],this.matrix,i++);
        surface(this.surfaces["backSurface"],this.matrix,i++);
        surface(this.surfaces["rightSurface"],this.matrix,i++);
        surface(this.surfaces["frontSurface"],this.matrix,i++);

    },
    showVertexes : function(delay,startingDelay) {
        if(startingDelay == undefined)
            startingDelay = 0;
        var circle = function(p1,i){
            var anim = new AnimationHelper({});
            anim.animate({
                style:{},
                duration:0,
                delay:startingDelay,
                init: function() {
                    var a = new AnimationHelper({
                        shape:null,
                        opacity:0
                    });
                    a.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*i,
                        update:function(){
                            if(this.shape)
                                this.shape.remove();
                            this.shape = new Path.Circle(p1,4);
                            this.shape.set_style(animationVertexesHighlightStyle);
                            this.shape.set_style({opacity:this.opacity});
                        }
                    })
                    a.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:function(){
                            this.shape.remove();
                        },
                        update:function(){
                            if(this.shape)
                                this.shape.remove();
                            this.shape = new Path.Circle(p1,4);
                            this.shape.set_style(animationVertexesHighlightStyle);
                            this.shape.set_style({opacity:this.opacity});
                        }
                    })
                }
            })
        }
        var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
        var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
        var i = 0,j = 0,k = 0;
        for (; i < frontPoints.length; i++) {
            new circle(frontPoints[i],i);
        }
        for (;j < backPoints.length ; j++,i++){
            new circle(backPoints[j],i);
        }

    },
    showEdges: function(delay,startingDelay){
        if(startingDelay == undefined)
            startingDelay = 0;
        var line = function(p1,p2,i) {
            var anim = new AnimationHelper({});
            anim.animate({
                style:{},
                duration:0,
                delay:startingDelay,
                init: function() {
//                                    console.log("I'm here");
                    var path = new Path.Line(p1,p2);
                    path.set_style(animationEdgesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*i
                    });
                    path.animate({
                        style:{opacity:0},
                        duration:delay,
                        delay:delay*14,
                        callback:path.remove
                    });
                }
            })
        }
        var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
        var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
        var i = 0,j = 0,k = 0;
        for (; i < frontPoints.length; i++) {
            new line(frontPoints[i],frontPoints[(i+1)%frontPoints.length],i);
        }
        for (;j < backPoints.length ; j++,i++){
            new line(backPoints[j],backPoints[(j+1)%backPoints.length],i);
        }
        for (;k < backPoints.length ; k++,i++){
            new line(frontPoints[3-k],backPoints[k],i);
        }
    },
    expand: function(style) {
        this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
        this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
        this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
        this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
        this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
        this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);

    },
    contract: function (style){
        this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
        this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
        this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
        this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
        this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
        this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
    }
});// var Prisim
;
var ExpandablePrisimPyramid = ExpandableShape.extend({
	init: function(width, height, length, matrix) {
		this._super(matrix);
	
		this.width = width;
		this.height = height;
		this.length = length;
		
		width /= 2;
	    height /= 2;
	    length /= 2;
		
		this.setSurfaces({
		    backSurface: new Surface([
		        new Point3(-width,  height, length),
		        new Point3( width,  height, length),
		        new Point3( 0, -height, 0)
		        ]),
	        bottomSurface: new Surface([
	            new Point3(-width, height,  length),
	            new Point3( width, height,  length),
	            new Point3( width, height, -length),           
	            new Point3(-width, height, -length)
	            ]),
	        leftSurface: new Surface([
	            new Point3(0, -height, 0),
	            new Point3(-width,  height,  length),
	            new Point3(-width,  height, -length)
	            ]),
	        rightSurface: new Surface([
	            new Point3(width,  height, -length),
	            new Point3(width,  height,  length),
	            new Point3(0, -height,  0)
	            ]),
	        frontSurface: new Surface([
	            new Point3(0, -height, 0),
	            new Point3( width,  height, -length),
	            new Point3(-width,  height, -length)
	            ])
	    });
	},
    showSurfaces : function(delay,startingDelay) {
        var surface = function(s,m,index){
                AnimationManager.delay(function(){
                    var path = new Path();
                    var p = s.get2DPoints(m);
                    for(var i=0;i<p.length;i++)
                        path.add(p[i]);
                    path.closed = true;
                    path.set_style(animationSurfacesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*index
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }, startingDelay);
            }
            var i=0;
            surface(this.surfaces["bottomSurface"],this.matrix,i++);
            surface(this.surfaces["leftSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
            surface(this.surfaces["frontSurface"],this.matrix,i++);
    },
    showVertexes : function(delay,startingDelay) {
            if(startingDelay == undefined)
                    startingDelay = 0;
            var circle = function(p1,i){
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
                        var a = new AnimationHelper({
                            shape:null,
                            opacity:0
                        });
                        a.animate({
                            style:{opacity:1}, 
                            duration:0,//delay,
                            delay:delay*i,
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                        a.animate({
                            style:{opacity:0},
                            delay:delay*8,
                            duration:delay,
                            callback:function(){
                                this.shape.remove();
                            },
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new circle(frontPoints[i],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new circle(backPoints[j],i);
            }

        },
    showEdges: function(delay,startingDelay){
            if(startingDelay == undefined)
                startingDelay = 0;
            var line = function(p1,p2,i) {
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
//                                    console.log("I'm here");
                        var path = new Path.Line(p1,p2);
                        path.set_style(animationEdgesHighlightStyle);
                        path.set_style({
                            opacity:0
                        });
                        path.animate({
                            style:{opacity:1},
                            duration:0,//delay,
                            delay:delay*i
                        });
                        path.animate({
                            style:{opacity:0},
                            duration:delay,
                            delay:delay*14,
                            callback:path.remove
                        });
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new line(frontPoints[i],frontPoints[(i+1)%frontPoints.length],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new line(backPoints[j],backPoints[(j+1)%backPoints.length],i);
            }
            for (;k < backPoints.length ; k++,i++){
                new line(frontPoints[2-k],backPoints[k],i);
            }
        },
	expand: function(style) {
		
					var angle1 = Math.atan(this.width/this.height/2) + Math.PI/2;
					var angle2 = Math.atan(this.length/this.height/2) + Math.PI/2;

					var center = new Point3(0,0,0);
					this.rotateSurfaceZ(this.surfaces.rightSurface, angle1, this.surfaces.rightSurface.points[0], false);
					this.rotateSurfaceX(this.surfaces.backSurface, -angle2, this.surfaces.backSurface.points[0], false);
					this.rotateSurfaceZ(this.surfaces.leftSurface, -angle1, this.surfaces.leftSurface.points[1], false);
					this.rotateSurfaceX(this.surfaces.frontSurface, angle2, this.surfaces.frontSurface.points[1], false);
				
					this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.frontSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center, true);				
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center);
			
	},
	
	contract: function() {
		
					var angle1 = Math.atan(this.width/this.height/2) + Math.PI/2;
					var angle2 = Math.atan(this.length/this.height/2) + Math.PI/2;

					var center = new Point3(0,0,0);
                    
                    this.rotateSurfaceX(this.surfaces.rightSurface, -Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.leftSurface, -Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.frontSurface, -Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.backSurface, -Math.PI/2, center, true);				
					this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, center);
                    
					this.rotateSurfaceX(this.surfaces.frontSurface, -angle2, this.surfaces.frontSurface.points[1], false);
					this.rotateSurfaceZ(this.surfaces.leftSurface, angle1, this.surfaces.leftSurface.points[1], false);
					this.rotateSurfaceX(this.surfaces.backSurface, angle2, this.surfaces.backSurface.points[0], false);
					this.rotateSurfaceZ(this.surfaces.rightSurface, -angle1, this.surfaces.rightSurface.points[0], false);
				

		
	}
});
var ExpandableRectangularPrism = ExpandableShape.extend({
    init: function (width, height, length, matrix) {
        this._super(matrix);
        width /= 1;
        height /= 2;
        length /= 2;
        this.setSurfaces({
            backSurface: new Surface([
                new Point3(-width, height, length), new Point3(width, height, length), new Point3(width, -height, length), new Point3(-width, -height, length)]),
            bottomSurface: new Surface([
                new Point3(-width, height, length), new Point3(width, height, length), new Point3(width, height, -length), new Point3(-width, height, -length)]),
            leftSurface: new Surface([
                new Point3(-width, -height, -length), new Point3(-width, -height, length), new Point3(-width, height, length), new Point3(-width, height, -length)]),
            rightSurface: new Surface([
                new Point3(width, height, -length), new Point3(width, height, length), new Point3(width, -height, length), new Point3(width, -height, -length)]),
            topSurface: new Surface([
                new Point3(-width, -height, -length), new Point3(width, -height, -length), new Point3(width, -height, length), new Point3(-width, -height, length)]),
            frontSurface: new Surface([
                new Point3(-width, -height, -length), new Point3(width, -height, -length), new Point3(width, height, -length), new Point3(-width, height, -length)])
        });
    },
    showSurfaces: function (delay, startingDelay) {
        var surface = function (s, m, index) {
            AnimationManager.delay(function () {
                var path = new Path();
                var p = s.get2DPoints(m);
                for (var i = 0; i < p.length; i++)
                    path.add(p[i]);
                path.closed = true;
                path.set_style(animationSurfacesHighlightStyle);
                path.set_style({
                    opacity: 0
                });
                path.animate({
                    style: {
                        opacity: 1
                    },
                    duration: 0,
                    //delay,
                    delay: delay * index
                });
                path.animate({
                    style: {
                        opacity: 0
                    },
                    delay: delay * 8,
                    duration: delay,
                    callback: path.remove
                })
            }, startingDelay);
        }
        var i = 0;
        surface(this.surfaces["bottomSurface"], this.matrix, i++);
        surface(this.surfaces["leftSurface"], this.matrix, i++);
        surface(this.surfaces["topSurface"], this.matrix, i++);
        surface(this.surfaces["backSurface"], this.matrix, i++);
        surface(this.surfaces["rightSurface"], this.matrix, i++);
        surface(this.surfaces["frontSurface"], this.matrix, i++);
    },
    showVertexes: function (delay, startingDelay) {
        if (startingDelay == undefined) startingDelay = 0;
        var circle = function (p1, i) {
            var anim = new AnimationHelper({});
            anim.animate({
                style: {},
                duration: 0,
                delay: startingDelay,
                init: function () {
                    var a = new AnimationHelper({
                        shape: null,
                        opacity: 0
                    });
                    a.animate({
                        style: {
                            opacity: 1
                        },
                        duration: 0,
                        //delay,
                        delay: delay * i,
                        update: function () {
                            if (this.shape) this.shape.remove();
                            this.shape = new Path.Circle(p1, 4);
                            this.shape.set_style(animationVertexesHighlightStyle);
                            this.shape.set_style({
                                opacity: this.opacity
                            });
                        }
                    })
                    a.animate({
                        style: {
                            opacity: 0
                        },
                        delay: delay * 8,
                        duration: delay,
                        callback: function () {
                            this.shape.remove();
                        },
                        update: function () {
                            if (this.shape) this.shape.remove();
                            this.shape = new Path.Circle(p1, 4);
                            this.shape.set_style(animationVertexesHighlightStyle);
                            this.shape.set_style({
                                opacity: this.opacity
                            });
                        }
                    })
                }
            })
        }
        var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
        var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
        var i = 0,
            j = 0,
            k = 0;
        for (; i < frontPoints.length; i++) {
            new circle(frontPoints[i], i);
        }
        for (; j < backPoints.length; j++, i++) {
            new circle(backPoints[j], i);
        }
    },
    showEdges: function (delay, startingDelay) {
        if (startingDelay == undefined) startingDelay = 0;
        var line = function (p1, p2, i) {
            var anim = new AnimationHelper({});
            anim.animate({
                style: {},
                duration: 0,
                delay: startingDelay,
                init: function () {
                    //                                    console.log("I'm here");
                    var path = new Path.Line(p1, p2);
                    path.set_style(animationEdgesHighlightStyle);
                    path.set_style({
                        opacity: 0
                    });
                    path.animate({
                        style: {
                            opacity: 1
                        },
                        duration: 0,
                        //delay,
                        delay: delay * i
                    });
                    path.animate({
                        style: {
                            opacity: 0
                        },
                        duration: delay,
                        delay: delay * 14,
                        callback: path.remove
                    });
                }
            })
        }
        var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
        var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
        var i = 0,
            j = 0,
            k = 0;
        for (; i < frontPoints.length; i++) {
            new line(frontPoints[i], frontPoints[(i + 1) % frontPoints.length], i);
        }
        for (; j < backPoints.length; j++, i++) {
            new line(backPoints[j], backPoints[(j + 1) % backPoints.length], i);
        }
        for (; k < backPoints.length; k++, i++) {
            new line(frontPoints[3 - k], backPoints[k], i);
        }
    },
    expand: function (style) {
        this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI / 2, this.surfaces.topSurface.points[2]);
        this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI / 2, this.surfaces.rightSurface.points[2], true);
        this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI / 2, this.surfaces.rightSurface.points[2]);
        this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI / 2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
        this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI / 2, this.surfaces.leftSurface.points[1]);
        this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI / 2, this.surfaces.bottomSurface.points[0]);
    },
    contract: function (style) {
        this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI / 2, this.surfaces.bottomSurface.points[0]);
        this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI / 2, this.surfaces.leftSurface.points[1]);
        this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI / 2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
        this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI / 2, this.surfaces.rightSurface.points[2], true);
        this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI / 2, this.surfaces.rightSurface.points[2]);
        this.rotateSurfaceX(this.surfaces.topSurface, Math.PI / 2, this.surfaces.topSurface.points[2]);
    }
}); // var Prisim
;
var ExpandableShapeTetrahedron = ExpandableShape.extend({
	init: function(size, matrix) {
		this._super(matrix);
		
		size /= 2;
		this.size = size;
		
		
		this.setSurfaces({
		    backSurface: new Surface([
		        new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
		        new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
		        new Point3(0, -2*size*Math.sqrt(2)/3, 0)
		        ]),
	        bottomSurface: new Surface([
	            new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( 0, size*Math.sqrt(2)/3, -size)
	            ]),
	        leftSurface: new Surface([
				new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( 0, size*Math.sqrt(2)/3, -size),
	            new Point3(0, -2*size*Math.sqrt(2)/3, 0)
	            ]),
	        rightSurface: new Surface([
	            new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3(0, -2*size*Math.sqrt(2)/3, 0),
	            new Point3( 0, size*Math.sqrt(2)/3, -size)
	            ])
	    });
	},
	 showSurfaces : function(delay,startingDelay) {
        var surface = function(s,m,index){
                AnimationManager.delay(function(){
                    var path = new Path();
                    var p = s.get2DPoints(m);
                    for(var i=0;i<p.length;i++)
                        path.add(p[i]);
                    path.closed = true;
                    path.set_style(animationSurfacesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*index
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }, startingDelay);
            }
            var i=0;
            surface(this.surfaces["bottomSurface"],this.matrix,i++);
            surface(this.surfaces["leftSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
    },
    showVertexes : function(delay,startingDelay) {
            if(startingDelay == undefined)
                    startingDelay = 0;
            var circle = function(p1,i){
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
                        var a = new AnimationHelper({
                            shape:null,
                            opacity:0
                        });
                        a.animate({
                            style:{opacity:1}, 
                            duration:0,//delay,
                            delay:delay*i,
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                        a.animate({
                            style:{opacity:0},
                            delay:delay*8,
                            duration:delay,
                            callback:function(){
                                this.shape.remove();
                            },
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                    }
                })
            }
            var bottomPoints = this.surfaces.bottomSurface.get2DPoints(this.matrix);
            var topPoint = this.surfaces.leftSurface.get2DPoints(this.matrix)[2];
            var i = 0,j = 0,k = 0;
            for (; i < bottomPoints.length; i++) {
                new circle(bottomPoints[i],i);
            }
            new circle(topPoint,i);

        },
    showEdges: function(delay,startingDelay){
            if(startingDelay == undefined)
                startingDelay = 0;
            var line = function(p1,p2,i) {
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
                        var path = new Path.Line(p1,p2);
                        path.set_style(animationEdgesHighlightStyle);
                        path.set_style({
                            opacity:0
                        });
                        path.animate({
                            style:{opacity:1},
                            duration:0,//delay,
                            delay:delay*i
                        });
                        path.animate({
                            style:{opacity:0},
                            duration:delay,
                            delay:delay*14,
                            callback:path.remove
                        });
                    }
                })
            }
            var bottomPoints = this.surfaces.bottomSurface.get2DPoints(this.matrix);
            var topPoint = this.surfaces.leftSurface.get2DPoints(this.matrix)[2];
            var i = 0,j = 0,k = 0;
            for (; i < bottomPoints.length; i++) {
                new line(bottomPoints[i],bottomPoints[(i+1)%bottomPoints.length],i);
            }
            for (;j < bottomPoints.length ; j++,i++){
                new line(bottomPoints[j],topPoint,i);
            }
        },
	expand: function(style) {
		switch (style) {
			case 0:
			default:

				//var angle = Math.atan(Math.sqrt(2)) + Math.PI/2;
				var angle = Math.PI - Math.atan(4*Math.sqrt(2));
				var angle2 = Math.PI*5/6 - Math.acos(Math.sqrt(3)/6);
					// angle = Math.PI/4;
				//var center = new Point3(0,this.size*Math.sqrt(2)/3,0);
				var center = new Point3(this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
				
				var animationHelper = new AnimationHelper({
					rotation: 0,
					rotation2: 0,
					rotation3: 0
				})
				
				this.rightSurfacePoint = this.surfaces.rightSurface.points[1];
				this.backSurfacePoint = this.surfaces.backSurface.points[2];
				this.leftSurfacePoint = this.surfaces.leftSurface.points[2];
				
				var self = this;
				
				animationHelper.animate({
					style: {
						rotation: angle
					},
					duration: 900,
					delay: this.delay,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.rightSurface.points[1] = self.rightSurfacePoint.getRotatedPointByX(this.rotation, center);
						self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2/*this.rotation/angle*/, center);
						self.project();
					}
				})
				
				
				var center2 = new Point3(0, this.size*Math.sqrt(2)/3, this.size/2);
				var angle3 = Math.asin(1/3) + Math.PI/2;
				
				animationHelper.animate({
					style: {
						rotation2: angle3
					},
					duration: 900,
					delay: this.delay+1000,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.backSurface.points[2] = self.backSurfacePoint.getRotatedPointByX(-this.rotation2, center2);
						self.project();
					}
				})
				
				var center3 = new Point3(-this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
				
				animationHelper.animate({
					style: {
						rotation3: angle
					},
					duration: 900,
					delay: this.delay + 2000,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.leftSurface.points[2] = self.leftSurfacePoint.getRotatedPointByX(this.rotation3, center3);
						self.surfaces.leftSurface.points[2] = self.surfaces.leftSurface.points[2].getRotatedPointByY(angle2/*this.rotation3/angle*/, center3);
						self.project();
					}
				})
				
				this.delay += 3000;
				
				var center4 = new Point3(0,0,0);
				
				this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center4, true);
				this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center4, true);				
				this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center4, true);
				this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center4, true);
		}
	},
	
	contract: function() {
		var center4 = new Point3(0,0,0);
		this.rotateSurfaceX(this.surfaces.rightSurface, -Math.PI/2, center4, true);
		this.rotateSurfaceX(this.surfaces.backSurface, -Math.PI/2, center4, true);				
		this.rotateSurfaceX(this.surfaces.leftSurface, -Math.PI/2, center4, true);
		this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, center4, true);
		
		
		var angle = Math.PI - Math.atan(4*Math.sqrt(2));
		var angle2 = Math.PI*5/6 - Math.acos(Math.sqrt(3)/6);
		
		var angle3 = Math.asin(1/3) + Math.PI/2;
		var center = new Point3(this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
		
		var animationHelper = new AnimationHelper({
			rotation: angle,
			rotation2: angle3,
			rotation3: angle
		})
		
		var self = this;
		
		
		
		
		var center3 = new Point3(-this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
		
		animationHelper.animate({
			style: {
				rotation3: 0
			},
			duration: 900,
			delay: this.delay + 1000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.leftSurface.points[2] = self.leftSurfacePoint.getRotatedPointByX(this.rotation3, center3);
				self.surfaces.leftSurface.points[2] = self.surfaces.leftSurface.points[2].getRotatedPointByY(angle2/*this.rotation3/angle*/, center3);
				self.project();
			},
			callback: function() {
				self.surfaces.leftSurface.points[2] = self.leftSurfacePoint;
				self.project();
			}
		})
		
		
		var center2 = new Point3(0, this.size*Math.sqrt(2)/3, this.size/2);
		
		animationHelper.animate({
			style: {
				rotation2: 0
			},
			duration: 900,
			delay: this.delay+2000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.backSurface.points[2] = self.backSurfacePoint.getRotatedPointByX(-this.rotation2, center2);
				self.project();
			}
		})
		
		animationHelper.animate({
			style: {
				rotation: 0
			},
			duration: 900,
			delay: this.delay + 3000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.rightSurface.points[1] = self.rightSurfacePoint.getRotatedPointByX(this.rotation, center);
				self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2/*this.rotation/angle*/, center);
				self.project();
			},
			callback: function() {
				self.surfaces.rightSurface.points[1] = self.rightSurfacePoint;
				self.project();
			}
		})  

		

		
		
		
		
		
		
		
	}
});
var ExpandableTrianglePrism = ExpandableShape.extend({
    init: function(width, height, length, matrix) {
            this._super(matrix);

            width /= 2;
            height /= 2;
            length /= 2;
            this.setSurfaces({
                backSurface: new Surface([
                    new Point3(-width,  height, length),
                    new Point3( width,  height, -length),
                    new Point3( width, -height, -length),
                    new Point3(-width, -height, length)
                    ]),
                bottomSurface: new Surface([
                    new Point3(-width, height,  length),
                    new Point3( 0, height,  0),
                    new Point3( width, height, -length),
                    new Point3(-width, height, -length)
                    ]),
                leftSurface: new Surface([
                    new Point3(-width,  height, length),
                    new Point3( width,  height, -length),
                    new Point3( width, -height, -length),
                    new Point3(-width, -height, length)
                    ]),
                rightSurface: new Surface([
//                    new Point3(width,  height, -length),
//                    new Point3(width,  height,  length),
//                    new Point3(width, -height,  length),
//                    new Point3(width, -height, -length)
                    ]),
                topSurface: new Surface([
                    new Point3(-width, -height, -length),
                    new Point3( width, -height, -length),
                    new Point3( 0, -height,  0),
                    new Point3(-width, -height,  length)
                    ]),
                frontSurface: new Surface([
                    new Point3(-width, -height, -length),
                    new Point3( width, -height, -length),
                    new Point3( width,  height, -length),
                    new Point3(-width,  height, -length)
                    ])
            });
        },
    showSurfaces : function(delay,startingDelay) {
            var surface = function(s,m,index){
                AnimationManager.delay(function(){
                    var path = new Path();
                    var p = s.get2DPoints(m);
                    for(var i=0;i<p.length;i++)
                        path.add(p[i]);
                    path.closed = true;
                    path.set_style(animationSurfacesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*index
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }, startingDelay);
            }
            var i=0;
            surface(this.surfaces["bottomSurface"],this.matrix,i++);
            surface(this.surfaces["leftSurface"],this.matrix,i++);
            surface(this.surfaces["topSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
            surface(this.surfaces["frontSurface"],this.matrix,i++);

        },
    showVertexes : function(delay,startingDelay) {
            if(startingDelay == undefined)
                    startingDelay = 0;
            var circle = function(p1,i){
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
                        var a = new AnimationHelper({
                            shape:null,
                            opacity:0
                        });
                        a.animate({
                            style:{opacity:1}, 
                            duration:0,//delay,
                            delay:delay*i,
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                        a.animate({
                            style:{opacity:0},
                            delay:delay*8,
                            duration:delay,
                            callback:function(){
                                this.shape.remove();
                            },
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new circle(frontPoints[i],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new circle(backPoints[j],i);
            }

        },
    showEdges: function(delay,startingDelay){
            if(startingDelay == undefined)
                startingDelay = 0;
            var line = function(p1,p2,i) {
                var anim = new AnimationHelper({});
                anim.animate({
                    style:{},
                    duration:0,
                    delay:startingDelay,
                    init: function() {
//                                    console.log("I'm here");
                        var path = new Path.Line(p1,p2);
                        path.set_style(animationEdgesHighlightStyle);
                        path.set_style({
                            opacity:0
                        });
                        path.animate({
                            style:{opacity:1},
                            duration:0,//delay,
                            delay:delay*i
                        });
                        path.animate({
                            style:{opacity:0},
                            duration:delay,
                            delay:delay*14,
                            callback:path.remove
                        });
                    }
                })
            }
            var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
            var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
            var i = 0,j = 0,k = 0;
            for (; i < frontPoints.length; i++) {
                new line(frontPoints[i],frontPoints[(i+1)%frontPoints.length],i);
            }
            for (;j < backPoints.length ; j++,i++){
                new line(backPoints[j],backPoints[(j+1)%backPoints.length],i);
            }
            for (;k < backPoints.length ; k++,i++){
                new line(frontPoints[3-k],backPoints[k],i);
            }
        },
    expand: function(style) {
            this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);

        },
    contract: function (style){
            this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
            this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
            this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
            this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
            this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
        }
});// var Prisim
;
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
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function InputReverseWriteable(event) {
    if(this.selectorIndex == undefined)
        this.selectorIndex = 0;
//    console.log(this.selectorIndex);
    this.willSelectorBePlaced = false;
//    console.log('keyCode: ',event.keyCode);
    switch(event.keyCode){
        case 8:
            this.willSelectorBePlaced = false;
            this.selectorIndex = 0;
            this.value = this.value.substring(1);
            if(this.createTextRange){// IE
                var textRange = this.createTextRange();
                textRange.collapse(true);
                textRange.moveEnd("character",this.selectorIndex);
                textRange.moveStart("character",this.selectorIndex);
                textRange.select();
                return true;
            }else if(this.setSelectionRange){
                this.setSelectionRange(this.selectorIndex,this.selectorIndex);
                return true;
            }
            event.preventDefault();
            return false;
            break;
        case 37:
            if(this.selectorIndex > 0)
                this.selectorIndex--;
            break;
        case 39:
            if(this.selectorIndex < this.value.length)
                this.selectorIndex++
            break;
        default:
            this.willSelectorBePlaced = true;
            if(this.selectorIndex > 0)
                this.selectorIndex--;
            break;

    }
    $(this).keyup(function(){
        if(this.willSelectorBePlaced){
            if(this.createTextRange){// IE
                var textRange = this.createTextRange();
                textRange.collapse(true);
                textRange.moveEnd("character",this.selectorIndex);
                textRange.moveStart("character",this.selectorIndex);
                textRange.select();
                return true;
            }else if(this.setSelectionRange){
                this.setSelectionRange(this.selectorIndex,this.selectorIndex);
                return true;
            }
        }
    });
}

;
/**
 * Created with JetBrains WebStorm.
 * User: yunus_work
 * Date: 13.09.2012
 * Time: 09:47
 * To change this template use File | Settings | File Templates.
 */


var Language = {

    ENGLISH:"_ENGLISH",
    TURKISH:"_TURKISH",
    GERMAN:"_GERMAN",
    phrases:null,
    selectedLanguage:null,
    init:function(language){
//        console.log("I'm here");
        Language.phrases = Language[language];
        if(Language.phrases == undefined)
            throw "Specified language `" + language + "` is not supported";
        Language.selectedLanguage = language;
    },
    _ENGLISH:{},
    _TURKISH:{},
    _GERMAN:{},
    getText: function(phrase){
        Language.phrases = Language[Language.selectedLanguage];
        var result =  Language.phrases[phrase];
        if(result == undefined)
            throw  Language.selectedLanguage + " (selected language) does not support this phrase `"+phrase+"`";
        return result;
    },

    /*
    * example call
    *   Language.setText({
            text:"",
            meanings:[
                {
                    language:Language.ENGLISH,

                }
            ]
        })
    *
    */
    setText: function(nodes){
        for (var phrase in nodes) {
            if (nodes.hasOwnProperty(phrase)) {
                __convertNodeToLanguage(phrase,nodes[phrase]);
            }
        }
        function __convertNodeToLanguage(phrase,meanings){
            for (var lang in meanings) {
                if(meanings.hasOwnProperty(lang)) {
                    if(Language[lang] == undefined)
                        throw lang + " language is not supported";
                    Language[Language[lang]][phrase] = meanings[lang];
                }
            }
        }
    }

}


;
			
function LongAddition(ilkDeger, ikinciDeger, div,fontSize){
        
        
    this.ilk=ilkDeger.toString();
    this.ikinci=ikinciDeger.toString();
    console.log("ikinci değer: "+this.ikinci);
    console.log("İndex Of: "+this.ilk.indexOf("."));
    this.floatKontrolu=this.ilk.indexOf(".");
    if (this.floatKontrolu==-1){
        this.ilkDeger=parseInt(ilkDeger,10);
        this.ikinciDeger=parseInt(ikinciDeger,10);
    }

    else{
        var kesikIlk=this.ilk.split(".");
        var kesikIkinci=this.ikinci.split(".");
        console.log(kesikIlk);
        console.log(kesikIkinci);

        if(kesikIlk[1].length<kesikIkinci[1].length)
            kesikIlk[1]=kesikIlk[1]+"0";
        else if(kesikIlk[1].length>kesikIkinci[1].length)
            kesikIkinci[1]=kesikIkinci[1]+"0";
        console.log(kesikIlk);
        console.log(kesikIkinci);

        this.ilkDeger=(kesikIlk[0]+kesikIlk[1]);
        this.ikinciDeger=(kesikIkinci[0]+kesikIkinci[1]);

    }
        
       
        

    this.div="#"+div;

    this.sonuc=parseInt(this.ilkDeger,10)+parseInt(this.ikinciDeger,10);
    
    if($(this.div).css('color') != undefined)
        this.color = $(this.div).css('color');
    else
        this.color = '#000';
    
    this.fontSize=fontSize;

    if(this.fontSize==undefined)
        this.fontSize=30;
	
	this.doldur=function(){
                
                
		$(this.div,container).append("<div id='toplanan1' class='toplanan'>");
			$(this.div+" #toplanan1")
			.css("top",this.fontSize*10/30).html();
		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.ilkDeger.toString().length;i++){
			var id=this.ilkDeger.toString().length-i
			$(this.div+" #toplanan1",container).append("<span id='ilkBasamak"+id+"'>");
			$(this.div+" #toplanan1 #ilkBasamak"+id).html(this.ilkDeger.toString().charAt(i));
			$(this.div+" #toplanan1 #ilkBasamak"+id).addClass("ilkBasamakTek");
			
		}
		
				
		$(this.div,container).append("<div id='toplanan2' class='toplanan'>");
			$(this.div+" #toplanan2")
			.css("top",this.fontSize*50/30).html();

		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.ikinciDeger.toString().length;i++){
			var id=this.ikinciDeger.toString().length-i
			$(this.div+" #toplanan2",container).append("<span id='ikinciBasamak"+id+"'>");
			$(this.div+" #toplanan2 #ikinciBasamak"+id).html(this.ikinciDeger.toString().charAt(i));
			$(this.div+" #toplanan2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
			
		}
		
		//$(this.div+" #toplanan1 #ikinciBasamak4").css("margin-right","15px");
		//$(this.div+" #toplanan2 #ikinciBasamak4").css("margin-right","15px");
			
		$(this.div,container).append("<div id='toplamaIsareti'>");
		$(this.div+" #toplamaIsareti").css("width","100%")
			.css("text-align","left")
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30)
			.css("border-bottom","solid 2px black")
            .css('borderColor',this.color)
			.css("top",this.fontSize*60/30)
			.html("+");
		$(this.div+" .toplanan").css("width","100%")
			.css("text-align","right")
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30);
			//.css("border","solid 1px black");
			
		$(this.div,container).append("<div id='toplam' class='toplanan'>");
			$(this.div+" #toplam")
			.css("top",this.fontSize*100/30).html();
		
		//elde basamakları
		$(this.div,container).append("<div id='elde' class='toplanan'>");
		$(this.div+" #elde")
			.css("top",this.fontSize*100/30).html();
		
		// toplam divini dolduruyoruz.			
		for(var i=0;i<this.sonuc.toString().length;i++){
			var id=this.sonuc.toString().length-i
			$(this.div+" #toplam",container).append("<span id='toplamBasamak"+id+"'>");
			//$(this.div+" #toplam #toplamBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #toplam #toplamBasamak"+id).addClass("toplamBasamakTek");
			
			$(this.div+" #elde",container).append("<span id='eldeBasamak"+id+"'>");
			//$(this.div+" #toplam #toplamBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #elde #eldeBasamak"+id).addClass("eldeBasamakTek");
			
			
			
			if(id>3){
				var right=this.fontSize*((9*id*2-20+i)+12)/30+"px";
				$(this.div+" #elde #eldeBasamak"+id).html(0).css("right",right);//.css("width","30px").css("display","inline-block");;
			}
			else{
				var right=this.fontSize*(9*id*2-20+i)/30+"px";
				$(this.div+" #elde #eldeBasamak"+id).html(0).css("right",right);
				}
			
			
		}
		
		
			
			
		
		$(this.div+" #toplam .toplamBasamakTek").css("opacity","0");
		$(this.div+" #elde .eldeBasamakTek").css("opacity","0").css("position","absolute");
		
		
		$(this.div+" .toplanan").css("width","100%")
			.css("text-align","right")
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30)
			.css("z-index","4");
			//.css("border","solid 1px black");
		if(this.floatKontrolu==-1)
			$("#ilkBasamak3, #ikinciBasamak3, #toplamBasamak3, #eldeBasamak3").css("width",this.fontSize*30/30).css("display","inline-block");
		else{
                    
                        $("#ilkBasamak2, #ikinciBasamak2, #toplamBasamak2, #eldeBasamak2").css("width",this.fontSize*30/30).css("display","inline-block");
                        $(this.div+" #toplanan1",container).append("<div id='virgul1' class='virgul'>");
                        $(this.div+" #toplanan2",container).append("<div id='virgul2' class='virgul'>");
                        $(this.div+" #toplam",container).append("<div id='virgul3' class='virgul'>");
                        
                        $(this.div+ " .virgul").css("position","absolute").css("height",this.fontSize*30/30).css("right",this.fontSize*35/30).html(",");
                        $(this.div+" #virgul1").css("top","1px");
                        $(this.div+" #virgul2").css("top","1px");
                        $(this.div+" #virgul3").css("top","1px").css("opacity","0");
                }
	}
		this.basla=function(hizB,hizA,callback){
			this.hizB=hizB;
			this.hizA=hizA;
			var elde=0;
			var uzunSayi=this.ilkDeger.toString().length>this.ikinciDeger.toString().length==true?this.ilkDeger.toString().length:this.ikinciDeger.toString().length;
			console.log("uzunsayi: "+uzunSayi);
			console.log("sonuc: "+this.sonuc);
			for(var i=1; i<=uzunSayi;i++){
				$(this.div+" #ilkBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:this.color},hizA);
				$(this.div+" #ikinciBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:this.color},hizA);
				var ustBasamak=parseInt($(this.div+" #ilkBasamak"+i).html())||0;
				var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html())||0;
				var basamakToplamlar=parseInt(ustBasamak)+parseInt(altBasamak)+elde;
				console.log("i: "+i);
				if(basamakToplamlar>9 &&i!=uzunSayi){
					console.log("if");
					$(this.div+" #elde #eldeBasamak"+(i+1)).html(basamakToplamlar.toString().charAt(0));
					$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString().charAt(1));
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
                                        if(this.floatKontrolu!=-1 && i==2){
                                            $(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA).animate({bottom:this.fontSize*120/30, right:this.fontSize*48/30,color:"#8C1717"},hizA).delay(hizB).animate({opacity:"0"},hizA);
                                        }
					else{
                                            
                                        $(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA).animate({bottom:this.fontSize*120/30, color:"#8C1717"},hizA).delay(hizB).animate({opacity:"0"},hizA);
                                        }
					var elde=parseInt(basamakToplamlar.toString().charAt(0));
					console.log("sonuc_"+i+": "+this.sonuc.toString().charAt(i));
				}
				else if(i==uzunSayi){
					console.log("else if");
					$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString());
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
					//$(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA)
					//var elde=parseInt(basamakToplamlar.toString().charAt(0));
					console.log("sonuc_"+i+": "+this.sonuc.toString().charAt(i));
                                        $(this.div +" #virgul3").delay(hizB*i*2+1000).animate({opacity:"1"},1000,callback)
					
				}
				else{
					var id=this.sonuc.toString().length-i
					console.log("elseye giriyor");
					console.log("ilkbasamak: "+basamakToplamlar.toString().charAt(0));
					console.log("sonuc basamak: "+this.sonuc.toString().charAt(id));
					//$(this.div+" #elde #eldeBasamak"+(i+1)).html(basamakToplamlar.toString().charAt(0));
					
					$(this.div+" #toplam #toplamBasamak"+i).html(this.sonuc.toString().charAt(id));
					//$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString().charAt(1));
					
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
					elde=0;
				}
			}
			
		
	}
					
};
function LongDivision(n,d,container){
    this.num = n + "",
    this.numLength = this.num.length;
    this.remainder = 0;
    this.answer = '';
    this.i = 0;
	this.n = n;
	this.d = d;
	this.lastIndent = 0;
	this.container = container;
	$(container).html('<div id="dividend"></div><div id="divisor"></div><div id="answer"></div>');
	$(container).css({
		textAlign:'left'
	});
	this.nodes = {};
	this.fontSize = parseInt($(container).css('font-size'),10)+2;

	this.nodes.dividend = $('#dividend',container).html(this.num).css({
		width:'50%',
		borderRight:'1px solid #000',
		borderColor:$(container).css('color'),
		float:'left',
		textAlign:'left',
		height:this.fontSize*2
	}).get(0);
	this.nodes.divisor = $('#divisor',container).html(this.d).css({
		width:'40%',
		borderBottom:'1px solid #000',
		borderColor:$(container).css('color'),
		float:'left',
		paddingLeft:this.fontSize*0.5,
		boxSizing:'border-box',
		textAlign:'left',
		height:this.fontSize
	}).get(0);
	this.nodes.answer = $('#answer',container).css({
		width:'40%',
		float:'left',
		paddingLeft:this.fontSize*0.5,
		boxSizing:'border-box',
		textAlign:'left',
		height:this.fontSize
	}).get(0);
	$(this.nodes.dividend).height($(this.nodes.divisor).height()+$(this.nodes.answer).height());
	
	$(this.nodes.answer).html(this.answer);
	this.nodes.steps = [];	
    
}

LongDivision.prototype.nextStep = function(duration){
		if(this.i >= this.numLength)
			return null;
		var digit = this.i < this.numLength ? parseInt(this.num[this.i],10) : 0;
		var lastStepDown = ""+this.remainder+digit;
		var stepDividend = digit + (this.remainder * 10);
		var stepAnswer = Math.floor(stepDividend/this.d);
		this.answer = this.answer + stepAnswer;
		if(this.nodes.steps.length > 0){
			$('.down',this.nodes.steps[this.nodes.steps.length-1]).append(digit);
		}
		if(stepDividend < this.d){
			this.i++;
			if(this.answer > 0)
				$(this.nodes.answer).append(parseInt(stepAnswer,10));	
			this.remainder = stepDividend;
			return this.nextStep(duration);
			
		}
		this.remainder = stepDividend%this.d;
		//var minus  = Math.floor((digit + (this.remainder * 10)));
		
		this.i++;
		var div = document.createElement('div');
		
		$(div)
			.html('<div class="up"></div><div class="line"><span style="position:relative;top:-20px">-</span></div><div class="down"></div>')
			.css({
				position:'relative',
				top:-this.fontSize,
				height:this.fontSize*2+2,
				float:'left',
				width:$(this.container).width()
			}).addClass("step");
		$('.up',div)
			.html(''+stepAnswer*this.d)
			.css({
				height:this.fontSize,
				textAlign:'left',
				width:this.fontSize*0.5*this.num.length + 1
								
			})
		var pLeft=0;
		if(this.nodes.steps.length > 0){
			pLeft = $('.down',this.nodes.steps[this.nodes.steps.length - 1]).html().length 
						  - $('.up',div).html().length 
						  + parseInt($(this.nodes.steps[this.nodes.steps.length - 1]).attr('pLeft'),10);
		}
		$(div).attr('pLeft',pLeft);
		
		//$('.up',div).css({paddingLeft:this.fontSize*0.5*paddingLeft});
		
		$('.line',div)
			.css({
				position:'relative',
				height:1,
				borderTop:'1px solid #000',
				borderColor:$(this.container).css('color'),
				width:this.fontSize*0.5*(this.num.length+2),
				left:-this.fontSize
			});
		
		$('.line img',div)
			.css({
				position:'relative',
				top:'-15px',	
				left:'0px',
				zIndex:2
			});
		var remainderString = "";
		for(var i=0;i<(""+stepDividend).length - (""+this.remainder).length;i++)
			remainderString += "0";
		remainderString += this.remainder;
		$('.down',div)
			.html(remainderString)
			.css({
				height:this.fontSize,
				paddingLeft:this.fontSize*0.5*($('.up',div).html().length - $('.down',div).html().length)
			});
		
		$(div).css({left:this.fontSize*0.5*(pLeft)});
		
		$(this.container).append(div);
		if(stepAnswer != undefined)
			$(this.nodes.answer).append('<span id="'+this.i+'">'+stepAnswer+'</span>');
		if(!isNaN(duration)){
			$(div)
				.delay(duration*0.5)
				.css({opacity:0})
				.animate({opacity:1},duration*0.5);
			$('span#'+this.i,this.nodes.answer)
				.css({opacity:0})
				.delay(1)
				.animate({opacity:1},1);
		}
		this.nodes.steps.push(div);
		return div;
	}
;
function LongMultiplication(carpim1, carpim2, div, fontSize){
    this.carpim1=carpim1;
    this.carpim2=carpim2;
    this.div="#"+div;
    this.fontSize=fontSize;
    
    if(this.fontSize==undefined)
        this.fontSize=30;
    var oran=this.fontSize*40/30;
    
    this.doldur=function(){
        $(this.div,container).append("<div id='carpim1' class='carpilan'>");
	$(this.div+" #carpim1")
            .css("top",this.fontSize*10/30).html();
	
        // ustteki divi dolduruyoruz.			
        for (var i=0; i<this.carpim1.toString().length;i++){
            var id=this.carpim1.toString().length-i
            $(this.div+" #carpim1",container).append("<span id='ilkBasamak"+id+"'>");
            $(this.div+" #carpim1 #ilkBasamak"+id).html(this.carpim1.toString().charAt(i));
            $(this.div+" #carpim1 #ilkBasamak"+id).addClass("ilkBasamakTek");
	}
	
        $(this.div,container).append("<div id='carpim2' class='carpilan'>");
            $(this.div+" #carpim2")
                .css("top",oran).html();

        // ustteki divi dolduruyoruz.			
	for(var i=0;i<this.carpim2.toString().length;i++){
            var id=this.carpim2.toString().length-i
            $(this.div+" #carpim2",container).append("<span id='ikinciBasamak"+id+"'>");
            $(this.div+" #carpim2 #ikinciBasamak"+id).html(this.carpim2.toString().charAt(i));
            $(this.div+" #carpim2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
	}
			
	$(this.div,container).append("<div id='isaretCarpma'>");
	$(this.div+" #isaretCarpma").css("width",this.fontSize*80/30)
            .css("text-align","left")
            .css("height",this.fontSize*30/30)
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize)
            .css("border-bottom","solid 2px black")
            .css("top",oran)
            .html("x");
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height",this.fontSize*30/30)
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize);
	
       /*
       $(this.div,container).append("<div id='sonuc' class='carpilan'>");
            $(this.div+" #sonuc").css("top","100px").html();
		
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size",this.fontSize)
            .css("z-index","4");
       */
        
        for(var i=0; i<this.carpim2.toString().length;i++){
		var top= this.fontSize*(75+25*i)/30;
		var right=this.fontSize*(i*16)/30;
		var id=i+1;
		
		$(this.div,container).append("<div id='carpmaSonuc"+id+"'/>");	
		$(this.div+" #carpmaSonuc"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #carpmaSonuc"+id,container).append("<span id='carpmaSonuc"+id+"Basamak"+j+"'>");
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).html(i);
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).addClass("basamakTek");
                
                }
                
                $(this.div,container).append("<div id='elde"+id+"'/>");	
		$(this.div+" #elde"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #elde"+id,container).append("<span id='elde"+id+"Basamak"+j+"'>");
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).html(0);
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).addClass("eldeBasamakTek");
                
                }	
                
                $(this.div,container).append("<div id='carpmaEldedenSonra"+id+"'/>");	
		$(this.div+" #carpmaEldedenSonra"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height",this.fontSize*30/30)
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size",this.fontSize)
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #carpmaEldedenSonra"+id,container).append("<span id='carpmaEldedenSonra"+id+"Basamak"+j+"'>");
                $(this.div+" #carpmaEldedenSonra"+id+" #carpmaEldedenSonra"+id+"Basamak"+j).html(j);
                $(this.div+" #carpmaEldedenSonra"+id+" #carpmaEldedenSonra"+id+"Basamak"+j).addClass("basamakTek");
                
                }
                
		if(i==(carpim2.toString().length-1)){
                    $(this.div,container).append("<div id='isaretToplama'>");
                    $(this.div+" #isaretToplama").css("width",this.fontSize*(80+i*20)/30+"px")
                        .css("text-align","left")
                        .css("height",this.fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("border-bottom","solid 2px black")
                        .css("top",(top)+"px")
                        .html("+").css("opacity","0");
				
                    $(this.div,container).append("<div id='toplamaSonuc'/>");	
                    $(this.div+" #toplamaSonuc").css("width",120+(i-1)*16+"px")
                        .css("text-align","right")
                        .css("height",this.fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+(this.fontSize*35/30)+"px")
                        .css("z-index","5");
                        //.css("opacity","0");
                    
                    var sonuc=this.carpim1*this.carpim2;
                    for(var j=sonuc.toString().length;j>=1;j--){

                    $(this.div+" #toplamaSonuc",container).append("<span id='toplamaSonucBasamak"+j+"'>");
                    $(this.div+" #toplamaSonucBasamak"+j).html(i);
                    $(this.div+" #toplamaSonucBasamak"+j).addClass("basamakTek");

                    }

                    $(this.div,container).append("<div id='toplamaElde'/>");	
                    $(this.div+" #toplamaElde").css("width","100px")
                        .css("text-align","right")
                        .css("height",fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+(this.fontSize*35/30)+"px")
                        .css("z-index","5");

                    for(var j=sonuc.toString().length;j>=1;j--){
                        
                        $(this.div+" #toplamaElde",container).append("<span id='toplamaEldeBasamak"+j+"'>");
                        $(this.div+" #toplamaEldeBasamak"+j).html(0);
                        $(this.div+" #toplamaEldeBasamak"+j).addClass("eldeBasamakTek");

                    }
                    
                    $(this.div,container).append("<div id='toplamaEldedenSonra'/>");	
                    $(this.div+" #toplamaEldedenSonra").css("width",120+(i-1)*16+"px")
                        .css("text-align","right")
                        .css("height",fontSize*30/30)
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size",this.fontSize)
                        .css("top",top+35+"px")
                        .css("z-index","5")
                        .css("opacity","0");
                    
                    
                    for(var j=sonuc.toString().length;j>=1;j--){

                    $(this.div+" #toplamaEldedenSonra",container).append("<span id='toplamaEldedenSonra"+j+"'>");
                    $(this.div+" #toplamaEldedenSonra"+j).html(0);
                    $(this.div+" #toplamaEldedenSonra"+j).addClass("basamakTek");

                    }
		}
        }
        $(this.div+" .basamakTek").css("opacity","0");
	$(this.div+" .eldeBasamakTek").css("opacity","0").css("position","absolute");

    }

this.basla=function(hizB,hizA){
    this.hizA=hizA;
    this.hizB=hizB;
    
    var sayilarFadeInRenk="#FF6600";
    var sayilarFadeOutRenk="#000000";
    var sonuclarRengi="#008000";
    var eldeRengi="#8C1717";
    
    
    Interaction.carpim1BasamakSayisi=this.carpim1.toString().length;
    Interaction.carpim2BasamakSayisi=this.carpim2.toString().length;
    
    
    
    
//    
//    for (var i=1;i<=Interaction.carpim2BasamakSayisi;i++){ // çarpim ikinin döngüsü
//        
//        setTimeout(function(){yanmaTekDongu(i);},1000+(i-1)*9000);
//        
//    }
    

    function yanmaTekDongu(i){
        var zamanCizgisi=0;
        var sayac=0;

        
        $("#"+div+" #ikinciBasamak"+i).animate({color:sayilarFadeInRenk},hizA);
        
        for(var p=1; p<=Interaction.carpim1BasamakSayisi;p++){
            
            
            Interaction.carpim1BasamakTek=carpim1.toString().reverse().charAt(p-1);
            console.log("1. çarpan: "+Interaction.carpim1BasamakTek);
            
            Interaction.carpim2BasamakTek=carpim2.toString().reverse().charAt(i-1);
            console.log("2. çarpan: "+Interaction.carpim2BasamakTek);
            Interaction.basamakSonuc= Interaction.carpim1BasamakTek*Interaction.carpim2BasamakTek;
            
            console.log("Sonuc: "+Interaction.basamakSonuc);
            
            $("#"+div+" #ilkBasamak"+p).delay(sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);

            console.log("Delay: "+(p+(i-1)*3))
            
            console.log("i: "+i);
           
             if(Interaction.basamakSonuc<10){
                
                if($("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!=0 || $("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!="0"){
                    console.log("1 if(elde!=0)........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc);
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({color:"#000000",opacity:"0"},hizA);
                
                    
                    var eldeCarpmaToplam=parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10)+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10);
                    
                    console.log("#"+div+" #elde"+(i)+"Basamak"+(p)+" eldeli**************************");
                    console.log("sonucBasamak"+p+": "+parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10));
                    console.log("elde"+p+": "+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10));
                    console.log("eldeCarpmaToplam: "+eldeCarpmaToplam);
                    
                    
                    
                    if(eldeCarpmaToplam>9){
                        console.log("eldeCarpmaToplam'a giriliyor. 999999999999999999999999999")
                        var oncekiElde=parseInt($("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(),10);
                        var eldeCarpmaToplamBasamak2=parseInt(eldeCarpmaToplam.toString().charAt(0),10);
                        
                        
                        
                            
                            console.log("#"+div+" #elde"+(i)+"Basamak"+(p+1)+", "+oncekiElde+", "+eldeCarpmaToplamBasamak2);
                            $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+(p+1)).html(oncekiElde+eldeCarpmaToplamBasamak2);
                        
                        
                        
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam.toString().charAt(1));
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+(p+1)).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                    else{
                    
                    
                    
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);

                        //$("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                    }
                }
                else{
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc);
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({color:"#000000"},hizA);
                }
                
                sayac+=(hizA+hizB*2);

            }
            else{
                
                
                
                console.log("1 else........................")
                
                var right=fontSize*((p)*16)/30+"px"
                $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(Interaction.basamakSonuc.toString().charAt(1));
                $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(Interaction.basamakSonuc.toString().charAt(0)).css("right",right);

                $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA/5);
                if(p==3){
                    console.log("1 if(p==3)........................")
                    
                    
                    $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA/5).delay(hizB).animate({color:"#000000"},hizA);
                }
                else{
                    console.log("1 if(p==3) else........................")
                    var yeniRight=fontSize*(-30+(-15*i-1))/30+"px";
                    
                    $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac+hizB*2).animate({opacity:"1", color:sonuclarRengi},hizA).delay(hizB).animate({right:yeniRight,color:eldeRengi},hizA).delay(hizB*2).animate({right:right,color:"#000000",opacity:"0"},hizA);
                    //$("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({opacity:"0", color:sonuclarRengi},hizA/5)
                }   
                
                
                if($("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!=0 || $("#"+div+" #elde"+(i)+"Basamak"+(p)).html()!="0"){
                    console.log("1 if(elde!=0)........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({opacity:"0", color:sonuclarRengi},hizA);
                    console.log("#"+div+" #elde"+(i)+"Basamak"+(p)+" eldeli**************************");
                    var eldeCarpmaToplam=parseInt($("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).html(),10)+parseInt($("#"+div+" #elde"+(i)+"Basamak"+p).html(),10);
                    
                    if(eldeCarpmaToplam>9){
                        console.log("eldeCarpmaToplam'a giriliyor. 999999999999999999999999999")
                        var oncekiElde=parseInt($("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(),10);
                        var eldeCarpmaToplamBasamak2=parseInt(eldeCarpmaToplam.toString().charAt(0),10);
                        
                        
                        
                            
                            console.log("#"+div+" #elde"+(i)+"Basamak"+(p+1)+", "+oncekiElde+", "+eldeCarpmaToplamBasamak2);
                            $("#"+div+" #elde"+(i)+"Basamak"+(p+1)).html(oncekiElde+eldeCarpmaToplamBasamak2);
                        
                        
                        
                        
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam.toString().charAt(1));
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                        //$("#"+div+" #elde"+(i)+"Basamak"+(p+1)).delay(sayac).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                    else{
//                    
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).html(eldeCarpmaToplam);
                        $("#"+div+" #carpmaEldedenSonra"+(i)+"Basamak"+p).delay(sayac+hizA*3).animate({opacity:"1", color:sonuclarRengi},hizA).animate({color:"#000000"},hizA);
                    }
                }
                else{
                    console.log("1 if(elde!=0) else........................")
                    $("#"+div+" #carpmaSonuc"+(i)+"Basamak"+p).delay(hizB).animate({color:"#000000"},hizA);
                }
            
                sayac+=(hizA+hizB*2)+1500;

            }
            
            
            
        
            
        }

        zamanCizgisi+=sayac;
            console.log("zamanCizgisi: "+zamanCizgisi);
          

        $("#"+div+" #ikinciBasamak"+i).delay(sayac-hizA*2).animate({color:sayilarFadeOutRenk},hizA);
        if(i==1){
            i++;
            setTimeout(function(){yanmaTekDongu(i);},zamanCizgisi);
            
        }
        else if(i==2){
            i++;
            if(Interaction.carpim2BasamakSayisi==3)
                setTimeout(function(){yanmaTekDongu(i);},zamanCizgisi);
            else{
                console.log("girdim");
                $("#"+div+" #isaretToplama").delay(zamanCizgisi).animate({opacity:"1"},hizA);
                setTimeout(function(){toplama(zamanCizgisi);},zamanCizgisi);
            }
        }
        
        
        else{
            console.log("girdim");
            $("#"+div+" #isaretToplama").delay(zamanCizgisi).animate({opacity:"1"},hizA);
            setTimeout(function(){toplama(zamanCizgisi);},zamanCizgisi);
            
            
        }
        
    }
    
    
    setTimeout(function(){yanmaTekDongu(1);},1000);
    //setTimeout(function(){yanmaTekDongu(2);},10000);
    //setTimeout(function(){yanmaTekDongu(3);},19000);
    
    function toplama(){
        
        for(var b=1; b<=5;b++){
            console.log("xsx girdi");
            setTimeout(toplama1,2000*b);
            setTimeout(toplama2,2000+2000*b);
            setTimeout(toplama3,4000+2000*b);
        }
        toplama1Sayac=0;
        function toplama1(){
        
            console.log("topalam1 girdi");
            toplama1Sayac++;
            $("#"+div+" #carpmaSonuc1Basamak"+toplama1Sayac+", #"+div+" #elde1Basamak"+toplama1Sayac+" ,#"+div+" #carpmaEldedenSonra1Basamak"+toplama1Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
            
            //console.log("*****************topalam1: "+$("#"+div+" #carpmaSonuc1Basamak"+toplama1Sayac).html());
            
            
        }

        toplama2Sayac=0;
        function toplama2(){
            //var sonuc=carpim1*carpim2;
        console.log("topalam2 girdi");
            toplama2Sayac++;
                //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+hizB,10))
                $("#"+div+" #carpmaSonuc2Basamak"+toplama2Sayac+", #"+div+" #elde2Basamak"+toplama2Sayac+" ,#"+div+" #carpmaEldedenSonra2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
                //$("#"+div+" #elde2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
        }
        toplama3Sayac=0;
        function toplama3(){
            //var sonuc=carpim1*carpim2;
        console.log("topalam3 girdi");
            toplama3Sayac++;
                //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+hizB,10))
                $("#"+div+" #carpmaSonuc3Basamak"+toplama3Sayac+", #"+div+" #elde3Basamak"+toplama3Sayac+" ,#"+div+" #carpmaEldedenSonra3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
                //$("#"+div+" #elde3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},hizA).delay(hizB).animate({color:sayilarFadeOutRenk},hizA);
        }
        
        var sonuc=carpim1*carpim2;
        console.log("wwwwwwwwwwwwwww: "+sonuc.toString().length+", weeeeeeee: "+sonuc);
        for(var t=1;t<=sonuc.toString().length;t++){
            var basamak=sonuc.toString().charAt(sonuc.toString().length-t);
            $("#"+div+" #toplamaSonucBasamak"+t).html(basamak);
            $("#"+div+" #toplamaSonucBasamak"+t).delay(2000*t).animate({opacity:"1"},hizA);
        
        
    }
        
    }
    
   
}
    
}

;
function LongSubtraction(cikan1, cikan2, div, fontSize){
	    console.log("Ç1: "+cikan1+", "+"Ç2: "+cikan2);
        this.fontSize=fontSize || 30;
        
        console.log(this.fontSize);
        
        this.ilk=cikan1.toString();
        this.ikinci=cikan2.toString();
        this.floatKontrolu=this.ilk.indexOf(".");
        if (this.floatKontrolu==-1){

            this.cikan1=parseInt(cikan1,10);
            this.cikan2=parseInt(cikan2,10);
        }
        else{
            
            var kesikIlk=this.ilk.split(".");
            var kesikIkinci=this.ikinci.split(".");
            console.log(kesikIlk);
            console.log(kesikIkinci);

            if(!kesikIlk[1])
                kesikIlk[1]="00";
            if(!kesikIkinci[1])
                kesikIkinci[1]="00";

            if(kesikIlk[1].length<kesikIkinci[1].length)
                kesikIlk[1]=kesikIlk[1]+"0";
            else if(kesikIlk[1].length>kesikIkinci[1].length)
                kesikIkinci[1]=kesikIkinci[1]+"0";
            
            
            
            console.log(kesikIlk);
            console.log(kesikIkinci);
           
            this.cikan1=(kesikIlk[0]+kesikIlk[1]);
            this.cikan2=(kesikIkinci[0]+kesikIkinci[1]);
            
            console.log(this.cikan1+", "+this.cikan2);
            
        }
		
		this.sonuc=this.cikan1-this.cikan2;
                console.log(this.sonuc)

		this.div="#"+div;
		if($(this.div).css('color') != undefined)
            this.color = $(this.div).css('color');
        else
            this.color = '#000';
		var sayilarFadeInRenk="#FF6600";
		var sayilarFadeOutRenk=this.color;
		var oduncKontrolSayiRengi="#878787";
		this.doldur=function(){
	
		$(this.div,container).append("<div id='cikan1' class='sonuc'>");
			$(this.div+" #cikan1")
			.css("top",this.fontSize*10/30).html();
		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.cikan1.toString().length;i++){
			var id=this.cikan1.toString().length-i
			$(this.div+" #cikan1",container).append("<span id='ilkBasamak"+id+"'>");
			$(this.div+" #cikan1 #ilkBasamak"+id).html(this.cikan1.toString().charAt(i));
			$(this.div+" #cikan1 #ilkBasamak"+id).addClass("ilkBasamakTek");
		}
				
		$(this.div,container).append("<div id='cikan2' class='sonuc'>");
			$(this.div+" #cikan2")
			.css("top",this.fontSize*50/30).html();

	
			
		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.cikan2.toString().length;i++){
			var id=this.cikan2.toString().length-i
			$(this.div+" #cikan2",container).append("<span id='ikinciBasamak"+id+"'>");
			$(this.div+" #cikan2 #ikinciBasamak"+id).html(this.cikan2.toString().charAt(i));
			$(this.div+" #cikan2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
		}
			
			
			
		
		
		$(this.div,container).append("<div id='cikarmaIslemi'>");
		$(this.div+" #cikarmaIslemi").css("width",this.fontSize*120/30)
			.css("text-align","left")
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30)
			.css("border-bottom","solid 2px black")
            .css('borderColor',this.color)
			.css("top",this.fontSize*60/30)
			.html("-");
		$(this.div+" .sonuc").css("width",this.fontSize*100/30)
			.css("text-align","right")
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30);
			//.css("border","solid 1px black");
			
		$(this.div,container).append("<div id='sonuc' class='sonuc'>");
			$(this.div+" #sonuc")
			.css("top",this.fontSize*100/30).html();
		
		//odunc basamakları
		$(this.div,container).append("<div id='odunc' class='sonuc'>");
		$(this.div+" #odunc")
			.css("top",this.fontSize*10/30).html();
		
		//OduncAldiktanSonra basamakları
		//odunc basamakları
		$(this.div,container).append("<div id='odunctenSonra' class='sonuc'>");
		$(this.div+" #odunctenSonra")
			.css("top",this.fontSize*10/30).html();
		
		// sonuc divini dolduruyoruz.
		
		
		var fark=this.cikan1.toString().length-this.sonuc.toString().length;
		if(fark!=0){
			var eklenecek="";
			for(var i=0;i<fark;i++)
				eklenecek+="0";
			this.sonuc=eklenecek+this.sonuc.toString();
			
		}
		for(var i=0;i<this.cikan1.toString().length;i++){
			var id=this.cikan1.toString().length-i;
			var icerik=this.sonuc.toString().charAt(i);
			$(this.div+" #sonuc",container).append("<span id='sonucBasamak"+id+"'>");
			$(this.div+" #sonuc #sonucBasamak"+id).html(icerik);
			
			
			
			$(this.div+" #sonuc #sonucBasamak"+id).addClass("sonucBasamakTek");
		}
		
		
		
		for(var i=0; i<this.cikan1.toString().length; i++){
			var id=this.cikan1.toString().length-i;
			$(this.div+" #odunc",container).append("<span id='oduncBasamak"+id+"'>");
			//$(this.div+" #sonuc #sonucBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #odunc #oduncBasamak"+id).addClass("oduncBasamakTek");
			var right=this.fontSize*(9*id*2-20+i)/30;
			$(this.div+" #odunc #oduncBasamak"+id).html(this.cikan1.toString().charAt(i)).css("right",right); //icerik cikan1 ile aynı yapılıyor. daha sonra buna göre kontrol edilecek.
			
			$(this.div+" #odunctenSonra",container).append("<span id='odunctenSonraBasamak"+id+"'>");
			//$(this.div+" #sonuc #sonucBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #odunctenSonra #odunctenSonraBasamak"+id).addClass("oduncBasamakTek");
			
                        
                            $(this.div+" #odunctenSonra #odunctenSonraBasamak"+id).html(this.cikan1.toString().charAt(i)).css("right",right); //icerik cikan1 ile aynı yapılıyor. daha sonra buna göre kontrol edilecek.
                        
		}
		
                if(this.floatKontrolu==-1){
                    $(this.div+" #cikan1 #ilkBasamak4"+","+this.div+" #cikan2 #ikinciBasamak4"+","+this.div+" #odunctenSonra #odunctenSonraBasamak4"+","+this.div+" #sonuc #sonucBasamak4").css("margin-right",this.fontSize*15/30);
                   
                }
		else{
                    $(this.div+" #cikan1 #ilkBasamak3"+","+this.div+" #cikan2 #ikinciBasamak3"+","+this.div+" #odunctenSonra #odunctenSonraBasamak3"+","+this.div+" #odunc #oduncBasamak3"+","+this.div+" #sonuc #sonucBasamak3").css("margin-right",this.fontSize*15/30);
                    
                    
                    $(this.div+" #cikan1",container).append("<div id='virgul1' class='virgul'>");
                    $(this.div+" #cikan2",container).append("<div id='virgul2' class='virgul'>");
                    $(this.div+" #sonuc",container).append("<div id='virgul3' class='virgul'>");
                        
                    $(this.div+ " .virgul").css("position","absolute").css("height",this.fontSize*30/30).css("right",this.fontSize*35/30).html(",");
                    $(this.div+" #virgul1").css("top","1px");
                    $(this.div+" #virgul2").css("top","1px");
                    $(this.div+" #virgul3").css("top","1px").css("opacity","0");
                    
                }
                 $(this.div+" #odunc #oduncBasamak4").css("right",this.fontSize*67/30);
                    $(this.div+" #odunc #oduncBasamak5").css("right",this.fontSize*83/30);
		
		$(this.div+" .sonucBasamakTek").css("opacity","0");
		$(this.div+" .oduncBasamakTek").css("opacity","0").css("position","absolute");
		
		$(this.div+" .sonuc").css("width",this.fontSize*100/30)
			.css("text-align","right")
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30)
			.css("z-index","4");;
			//.css("border","solid 1px black");
		}
		

		
		this.basla=function(hizB,hizA,callback){
			this.hizB=hizB;
			this.hizA=hizA;

			var sayac=0;
			console.log("ilk Sayaç: "+sayac);
			var uzunSayi=this.cikan1.toString().length>this.cikan2.toString().length==true?this.cikan1.toString().length:this.cikan2.toString().length;
			console.log("uzunsayi: "+uzunSayi);
					
			for(var i=1; i<=uzunSayi;i++){
				
				var oduncBasamak=parseInt($(this.div+" #oduncBasamak"+i).html(),10);
				var odunctenSonraBasamak=parseInt($(this.div+" #odunctenSonraBasamak"+i).html(),10);
				var ilkBasamak=parseInt($(this.div+" #ilkBasamak"+i).html(),10);
				var ikinciBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html(),10);
				var basamakToplamlar=oduncBasamak-ikinciBasamak;
				
				if(oduncBasamak==ilkBasamak){ //Ödünç basamağı ile ilk basamak aynı mı? 
					console.log("*****************************************Eşit");
					console.log("Sayaç: "+sayac)
					if(oduncBasamak>=ikinciBasamak){
						console.log("*************************Eşit Odünc Büyük");
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						

						$(this.div+" #ilkBasamak"+i).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
						
						$(this.div+" #ikinciBasamak"+i).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
									
						$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
						/*console.log("i: "+i+", sonuç uzunluğu: "+(this.sonuc.toString().length)+", basamak Toplamlar: "+basamakToplamlar);
								if(i==(this.sonuc.toString().length) && basamakToplamlar==0 ){
									console.log("sonn basamak ife  girdi");
									$(this.div+" #sonuc #sonucBasamak"+i).html("0").delay(this.hizB).animate({opacity:"0"},hizA);
									
								}*/
						sayac=sayac+this.hizB+this.hizA;
						console.log("Sayaç hesap 1: "+sayac)
						
						
					}
					
					else if(oduncBasamak<ikinciBasamak){
						
						console.log("*********************eşit Odünc küçük");
						console.log("Sayaç: "+sayac)
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						
						var araBasamak=0;
						var oduncAlma=new Array();
						
						var ustBasamak=parseInt($(this.div+" #oduncBasamak"+i).html(),10)||0;
						var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html(),10)||0;
						var basamakToplamlar=ustBasamak-altBasamak;
						console.log("i: "+i);
						
						if(ustBasamak<altBasamak){
							for(var j=0; j<this.cikan1.toString().length; j++){
								if(araBasamak>altBasamak)
									break;
								else{
							
									var alinacakBasamak=$(this.div+" #ilkBasamak"+(i+j)).html(); // bir önceki basamağa alıyoruz. 
									
									//$(this.div+" #ilkBasamak"+(i+j)).css("color",oduncKontrolSayiRengi);
									$(this.div+" #ilkBasamak"+(i+j)).delay(sayac).animate({color:oduncKontrolSayiRengi},this.hizA).delay(this.hizB*2).animate({color:sayilarFadeOutRenk},this.hizA); // grileşme
									
									console.log("Alinacak Basamak: "+alinacakBasamak);
									
									oduncAlma.unshift(alinacakBasamak.toString()); // diziye atıyoruz.
									console.log("Ödünç Alma: "+oduncAlma);
									
									araBasamak=oduncAlma.join("");	// sayı haline getiriyoruz.
									console.log("Ara basamak: "+araBasamak);
								}
								
							}
							sayac=sayac+this.hizA+this.hizB; //Grileşmeden ötürü yapılan değişim.
							console.log("Sayaç Grileştirme: "+sayac)
							var oduncAlinanSayi=araBasamak.toString().substring(0,araBasamak.toString().length-1);
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							oduncAldiktanSonrakiSayi=(parseInt(oduncAlinanSayi,10)-1).toString(); // Ödünç alımı gerçekleştikten sonra sayının son hali.
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							
							
							
							// Ödünç alımı gerçekleştikten sayı rakamlarının basamakların yerleştirilmesi.
							
							for(var m=1; m<=oduncAldiktanSonrakiSayi.length;m++){

								var ilgiliBasamak=oduncAldiktanSonrakiSayi.charAt(oduncAldiktanSonrakiSayi.length-m);
								$(this.div+" #odunc #oduncBasamak"+(i+m)).html(ilgiliBasamak);
								
								console.log("ilgili basamak"+ilgiliBasamak);
								
								//$(this.div+" #ilkBasamak"+(i+m)).delay(hizB*i*3).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
								//$(this.div+" #odunc #oduncBasamak"+(i)).delay(sayac).animate({ bottom:"30px"},hizA).delay(hizB).animate({opacity:"0"},hizA);;;
								$(this.div+" #odunc #oduncBasamak"+(i+m)).delay(sayac).animate({opacity:"1", bottom:this.fontSize*30/30},this.hizA);
								
								
								
								
								
							}
							$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).html("1"+$(this.div+" #odunc #oduncBasamak"+(i)).html());
							$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).delay(sayac).animate({opacity:"1", bottom:this.fontSize*60/30, color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({opacity:"0"},this.hizA);
					
							$(this.div+" #ikinciBasamak"+(i)).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
							
							$(this.div+" #odunc #oduncBasamak"+(i)).delay(sayac).animate({opacity:"0"},hizA);
								//$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
								
								$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
							sayac=sayac+this.hizA*2+this.hizB;
							console.log("Sayaç hesap 3: "+sayac)
						}
				
					}
				}
				
				if(oduncBasamak!=ilkBasamak){ //Ödünç basamağı ile ilk basamak aynı mı? 
					console.log("*****************************************Eşit değil");
					console.log("Sayaç: "+sayac)
					
					if(oduncBasamak>=ikinciBasamak){
						console.log("*****************eşit değil Odünc Büyük");
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						
						console.log("yanan ödünç basamaği: "+i+"iceriği"+$(this.div+" #oduncBasamak"+i).html())

						if (oduncAlinanSayi.lenght>2)
						$(this.div+" #oduncBasamak"+i).delay((sayac-(this.hizB*4))).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA)).delay(this.hizB).animate({opacity:"0"},this.hizA);
						else
							$(this.div+" #oduncBasamak"+i).delay((this.hizB)).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA)).delay(this.hizB).animate({opacity:"0"},this.hizA);
						$(this.div+" #ikinciBasamak"+i).delay(sayac-this.hizB).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
									
						$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},this.hizA);	
						
						sayac=sayac+this.hizA*2+this.hizB;
						console.log("Sayaç hesap 4: "+sayac)
						
						
					}
					
					else if(oduncBasamak<ikinciBasamak){
						
						console.log("***************esşit değil Odünc küçük");
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						console.log("Sayaç: "+sayac)
						
						var araBasamak=0;
						var oduncAlma=new Array();
						
						var ustBasamak=parseInt($(this.div+" #oduncBasamak"+i).html(),10)||0;
						var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html(),10)||0;
						var basamakToplamlar=ustBasamak-altBasamak;
						console.log("i: "+i);
						
						if(ustBasamak<altBasamak){
							for(var j=0; i<this.cikan1.toString().length; j++){
								if(araBasamak>altBasamak)
									break;
								else{
							
									var alinacakBasamak=$(this.div+" #ilkBasamak"+(i+j)).html(); // bir önceki basamağa alıyoruz. 
									
									//$(this.div+" #ilkBasamak"+(i+j)).css("color",oduncKontrolSayiRengi);
									$(this.div+" #ilkBasamak"+(i+j)).delay(sayac).animate({color:oduncKontrolSayiRengi},this.hizA);
									
									console.log("Alinacak Basamak: "+alinacakBasamak);
									
									oduncAlma.unshift(alinacakBasamak.toString()); // diziye atıyoruz.
									console.log("Ödünç Alma: "+oduncAlma);
									
									araBasamak=oduncAlma.join("");	// sayı haline getiriyoruz.
									console.log("Ara basamak: "+araBasamak);
								}
								
							}
							sayac=sayac+this.hizA+this.hizB; //Grileşmeden ötürü yapılan değişim.
							console.log("Sayaç hesap 5: "+sayac)
							var oduncAlinanSayi=araBasamak.toString().substring(0,araBasamak.toString().length-1);
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							oduncAldiktanSonrakiSayi=(parseInt(oduncAlinanSayi,10)-1).toString(); // Ödünç alımı gerçekleştikten sonra sayının son hali.
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							
							
							
							// Ödünç alımı gerçekleştikten sayı rakamlarının basamakların yerleştirilmesi.

							for(var m=1; m<=oduncAldiktanSonrakiSayi.length;m++){

								var ilgiliBasamak=oduncAldiktanSonrakiSayi.charAt(oduncAldiktanSonrakiSayi.length-m);
								$(this.div+" #odunc #oduncBasamak"+(i+m)).html(ilgiliBasamak);
								
								console.log("ilgili basamak"+ilgiliBasamak);
								
								//$(this.div+" #ilkBasamak"+(i+m)).delay(hizB*i*3).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
								//$(this.div+" #odunc #oduncBasamak"+(i)).delay(sayac).animate({ bottom:"30px"},hizA).delay(hizB).animate({opacity:"0"},hizA);;;
								$(this.div+" #odunc #oduncBasamak"+(i+m)).delay(sayac).animate({opacity:"1", bottom:this.fontSize*30/30},this.hizA);
								
								
								
								
							}
							$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).html("1"+$(this.div+" #odunc #oduncBasamak"+(i)).html());
							$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).delay(sayac).animate({opacity:"1", bottom:this.fontSize*30/30, color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({opacity:"0"},this.hizA);
					
								
							$(this.div+" #ikinciBasamak"+(i)).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
							
							$(this.div+" #odunc #oduncBasamak"+(i)).delay(sayac-(this.hizA*2+this.hizB)).animate({opacity:"0"},hizA);
								//$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
								
							$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
							sayac=sayac+this.hizA*2+this.hizB;
							console.log("Sayaç hesap 6: "+sayac)

							
							
						}
				
					}
				}
                                
                                if(i==uzunSayi)
                                    $(this.div +" #virgul3").delay(sayac+this.hizB).animate({opacity:"1"},1000,callback)
			}
			console.log("selma");
			for(var i=5; i>0;i--){
				if($(this.div+" #sonuc #sonucBasamak"+i).html()=="0" ){
					console.log("sonn basamak ife  girdi");
					$(this.div+" #sonuc #sonucBasamak"+i).delay(this.hizB).animate({opacity:"0"},this.hizA);
				}
				else{
                                     
					break;
                                }
			}
			
		}
}
;

function SingleLineMultiply(options){
    var position,delay,zero,factor1,factor2,textStyle,callback;
    position = options.position;
    delay = options.delay;
    factor1 = options.factor1;
    factor2 = options.factor2;
    zero = options.zero;
    textStyle = options.textStyle;
    callback = options.callback;
    
	function textAnimate(point,content,style,animateStyle,delay,textStyle,callback){
        var pT1 = new PointText(point);
        pT1.content = content;
        pT1.set_style(textStyle);
        pT1.set_style(style);
        pT1.animate({
            style:animateStyle,
            duration:1000,
            delay:delay,
            callback:callback,
            animationType:'easeInEaseOut'
        });
        return pT1;
    }   
	var L = 0;//length
	var t1 = textAnimate(position,						factor1,	{opacity:0},{opacity:1},100+delay,textStyle);
	t1.content = Util.groupNumber(t1.content);
    var rect = new Path.Rectangle(t1.bounds);
	rect.set_style({strokeColor:'#fff',strokeWidth:2});
	L += t1.getWidth();
	
    var t2 = textAnimate(position.add(L,0)	 ,	 '',	{opacity:0},{opacity:1},600+delay,textStyle);
    console.log("factor2: "+factor2);
    t2.content = ' × '+Util.groupNumber(""+factor2+""+zero);//.substring(0,(""+factor2+zero).length-zero.length+1);
    console.log("t2.content: "+t2.content);
    t2.content = t2.content.substring(0,t2.content.length-zero.length);
	L += t2.getWidth();
	var t3 = textAnimate(position.add(L,0)	 ,   		  zero,	{opacity:0},{opacity:1},600+delay,textStyle,
		function(){
			this.animate({
			style:{opacity:0},
			duration:500,
			callback:function(){
					this.animate({
						style:{opacity:1,fillColor:new RgbColor(1,0,0,0.9)},
						duration:500,
						delay:1500,
						callback:function(){
							this.animate({
								style:{fillColor:textStyle.fillColor},
								duration:500,
								delay:500,
                                callback:callback
							});
						}								
					});
				}
			});
		}
	);
	L += t3.getWidth();
	var t4 = textAnimate(position.add(L,0),		 	   ' = ',	{opacity:0},{opacity:1},600+delay,textStyle);
	L += t4.getWidth();
	var t5 = textAnimate(position.add(L,0),factor1*factor2,{opacity:0},{opacity:1},2000+delay,textStyle);
    t5.content = Util.groupNumber(""+t5.content+zero);
    t5.content = t5.content.substring(0,t5.content.length-zero.length);
	L += t5.getWidth();
	var t6 = textAnimate(t4.position,zero,{opacity:0},{opacity:1,position:position.add(L,0),fillColor:new RgbColor(1,0,0)},4000+delay,textStyle,
		function(){
			this.animate({
				style:{fillColor:textStyle.fillColor},
				duration:500
			});
		}
	);
}

;
// JavaScript Document

var AnimationManager = function(){
	AnimationManager.animationAnimations = [];
	AnimationManager.interactionAnimations = [];	
}

AnimationManager.delay = function (func, delay) {
	var animationHelper = new AnimationHelper({});
	animationHelper.animate({
		style: {},
		duration: 0,
		delay: delay,
		init: func
	});
}

AnimationManager.Animation = function (item, animationHash) {
	this.item = item;
	
	this.style = animationHash.style;
	this.duration = animationHash.duration;
	
	if (animationHash.delay) {
		this.startTime = new Date().getTime() + animationHash.delay;
	} else {
		this.startTime = new Date().getTime();
	}
	
	if (animationHash.animationType) {
		this.animationType = animationHash.animationType;
		if (this.animationType == 'custom') {
			this.mappingFunction = animationHash.mappingFunction;
		}
	} else {
		this.animationType = 'linear';	
	}
	
	if (typeof(animationHash.init) == "function") {
		this.init = animationHash.init;
	}
	
	if (typeof(animationHash.callback) == "function") {
		this.callback = animationHash.callback;
	}
	
	if (typeof(animationHash.update) == "function") {
		this.update = animationHash.update;
	}
	
	this.idle = true;
	
	this.map = function(ratio) {
		if (this.animationType == 'linear') {
			return ratio;
		} else if (this.animationType == 'easeIn') {
			return ratio * ratio;
		} else if (this.animationType == 'easeOut') {
			return ratio * (-ratio+2);
		} else if (this.animationType == 'easeInEaseOut') {
			return (ratio*ratio) * (3-2*ratio);
		} else if (this.animationType == 'easeInOutQuad') { // From jQuery
			if (ratio < 0.5) return 2*ratio*ratio;
			return ratio * (4 - 2*ratio) - 1;
		} else if (this.animationType == 'easeOutBounce') { // From jQuery
			// t: current time, b: begInnIng value, c: change In value, d: duration
			
			// easeOutBounce: function (x, t, b, c, d) {
			// 		if ((t/=d) < (1/2.75)) {
			// 			return c*(7.5625*t*t) + b;
			// 		} else if (t < (2/2.75)) {
			// 			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			// 		} else if (t < (2.5/2.75)) {
			// 			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			// 		} else {
			// 			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			// 		}
			// 	}
			
			if (ratio < (1/2.75)) {
				return (7.5625*ratio*ratio);
			} else if (ratio < (2/2.75)) {
				return (7.5625*(ratio-=(1.5/2.75))*ratio + .75);
			} else if (ratio < (2.5/2.75)) {
				return (7.5625*(ratio-=(2.25/2.75))*ratio + .9375);
			} else {
				return (7.5625*(ratio-=(2.625/2.75))*ratio + .984375);
			}
		} else if (this.animationType == 'easeOutElastic') {
			// 			
			// Math.easeOutElastic = function (t, b, c, d, a, p) {
			// 	if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			// 	if (a < Math.abs(c)) { a=c; var s=p/4; }
			// 	else var s = p/(2*Math.PI) * Math.asin (c/a);
			// 	return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
			// };
			//
			
			var p = 0.3;
			var a = 1;
			
			if (ratio==0) return 0;  if (ratio==1) return 1;  
			if (a < Math.abs(1)) { a=1; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (1/a);
			return a*Math.pow(2,-10*ratio) * Math.sin( (ratio-s)*(2*Math.PI)/p ) + 1;
		} else if (this.animationType == 'custom') {
			return this.mappingFunction(ratio);
		} else {
			return ratio;
		}
	}
}


AnimationManager.animate = function(animation) {
	if (paper.project == Main.animationProject) {
		AnimationManager.animationAnimations.push(animation);
	} else if (paper.project == Main.interactionProject) {
		AnimationManager.interactionAnimations.push(animation);
	}
}

AnimationManager.clearAnimations = function () {
	if (paper.project == Main.animationProject) {
		AnimationManager.animationAnimations = [];
	} else if (paper.project == Main.interactionProject) {
		AnimationManager.interactionAnimations = [];
	}
}

AnimationManager.update = function(event) {
	var animations;
	
	if (paper.project == Main.animationProject) {
		animations = AnimationManager.animationAnimations;
	} else if (paper.project == Main.interactionProject) {
		animations = AnimationManager.interactionAnimations;
	}
	
	for(var i=0; i<animations.length; i++){		
		var animation = animations[i];
		
		currentTime = new Date().getTime();
		
		if (animation.startTime < currentTime) {
			if (animation.idle) {
				if (animation.init) {
					animation.item.init = animation.init;
					animation.item.init();
				}
				
				animation.startHash = {};
				animation.endHash = {};
				for (var key in animation.style) {
					if (animation.style.hasOwnProperty(key)) {
						animation.startHash[key] = (animation.item[key]);
							
					}
				}
				
				animation.idle = false;
			} else if (animation.startTime + animation.duration < currentTime) {
				animations.splice(i,1);
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
						animation.item[key] = animation.style[key];
					}
				}
				if (animation.update) {
					animation.item.update = animation.update;
					animation.item.update();
				}
				if (animation.callback) {
						animation.item.callback = animation.callback;
						animation.item.callback();
				}
				
			} else {
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
				    	var startValue = animation.startHash[key];
						var endValue = animation.style[key];
				
						var ratio = animation.map((currentTime - animation.startTime) / animation.duration);
						if (Util.isNumber(startValue)) {
							animation.item[key] = startValue + (endValue - startValue) * ratio;
						} else if (startValue instanceof Point) {
							var x = startValue.x + (endValue.x - startValue.x) * ratio;
							var y = startValue.y + (endValue.y - startValue.y) * ratio;
							animation.item[key] = new Point(x, y);
						} else if (startValue instanceof Point3) {
							var x = startValue.x + (endValue.x - startValue.x) * ratio;
							var y = startValue.y + (endValue.y - startValue.y) * ratio;
							var z = startValue.z + (endValue.z - startValue.z) * ratio;
							animation.item[key] = new Point3(x, y, z);
						} else if (startValue instanceof RgbColor) {
							var red = startValue.red + (endValue.red - startValue.red) * ratio;
							var green = startValue.green + (endValue.green - startValue.green) * ratio;
							var blue = startValue.blue + (endValue.blue - startValue.blue) * ratio;
							var alpha = startValue.alpha + (endValue.alpha - startValue.alpha) * ratio;
							animation.item[key] = new RgbColor(red, green, blue, alpha);
						}
					}
				}
				
				if (animation.update) {
					animation.item.update = animation.update;
					animation.item.update();
				}
			}
		}	
	}
};

function AnimationHelper(values){
	this.animate = Item.prototype.animate;
	for (var key in values) {
		this[key] = values[key];
	}
}
;
// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
	
/* -------------------------------------------------------------------- */


var canvas, ctx;
var canvasWidth, halfCanvasWidth;
var canvasHeight, halfCanvasHeight;

var space;  // 3D Engine
var scene;  // 3D Scene

/* -------------------------------------------------------------------- */

/**
 * Space is a simple 3D system.
 *
 * Y+ = up
 * Z+ = into screen
 * X+ = right
 */
function Space() {
	this.m = this.createMatrixIdentity();
	this.mStack = [];
}

Space.prototype.createMatrixIdentity = function() {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];
}

/**
 * Multiplies two 4x4 matricies together.
 */
Space.prototype.matrixMultiply = function(m1, m2) {
	var result = this.createMatrixIdentity();

	var width = m1[0].length;
	var height = m1.length;

	if (width != m2.length) {
		// error
	}

	for (var x = 0; x < width; x++) {
		for (var y = 0; y < height; y++) {
			var sum = 0;

			for (var z = 0; z < width; z++) {
				sum += m1[y][z] * m2[z][x];
			}

			result[y][x] = sum;
		}
	}

	return result;
}

/**
 * Transforms a coordinate using the current transformation
 * matrix, then flattens it using the projection matrix.
 */
Space.prototype.flatten = function(point) {
	var p = [[point.x, point.y, point.z, 1]];
	var pm = this.matrixMultiply(p, this.m);

	point.tx = pm[0][0];
	point.ty = pm[0][1];
	point.tz = pm[0][2];

	// lazy projection
	point.fx = halfCanvasWidth + (canvasWidth * point.tx / point.tz);
	point.fy = halfCanvasHeight -(canvasWidth * point.ty / point.tz);
}

/**
 * Translate (move) the current transformation matrix
 */
Space.prototype.translate = function(x, y, z) {
	var m = [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[x, y, z, 1]
	];

	this.m = this.matrixMultiply(m, this.m);
}

/**
 * Rotate the current transformation matrix. Rotations are
 * world-oriented, and occur in y,x,z order.
 */
Space.prototype.rotate = function(x, y, z) {
	if (y) {
		var cosY = Math.cos(y);
		var sinY = Math.sin(y);
		var rotY = [
			[cosY, 0, sinY, 0],
			[0, 1, 0, 0],
			[-sinY, 0, cosY, 0],
			[0, 0, 0, 1]
		];

		this.m = this.matrixMultiply(this.m, rotY);
	}

	if (x) {
		var cosX = Math.cos(x);
		var sinX = Math.sin(x);
		var rotX = [
			[1, 0, 0, 0],
			[0, cosX, -sinX, 0],
			[0, sinX, cosX,0],
			[0, 0, 0, 1]
		];
		this.m = this.matrixMultiply(this.m, rotX);
	}

	if (z) {
		var cosZ = Math.cos(z);
		var sinZ = Math.sin(z);
		var rotZ = [
			[cosZ, -sinZ, 0, 0],
			[sinZ, cosZ, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1]
		];

		this.m = this.matrixMultiply(this.m, rotZ);
	}
}

/**
 * Pushes the current transformation onto the stack
 */
Space.prototype.push = function() {
	this.mStack.push(this.m);
	this.m = [
		[this.m[0][0], this.m[0][1], this.m[0][2], this.m[0][3]],
		[this.m[1][0], this.m[1][1], this.m[1][2], this.m[1][3]],
		[this.m[2][0], this.m[2][1], this.m[2][2], this.m[2][3]],
		[this.m[3][0], this.m[3][1], this.m[3][2], this.m[3][3]]
	];
}

/**
 * Pops the end off the transformation stack
 */
Space.prototype.pop = function() {
	this.m = this.mStack.pop();
}

/* -------------------------------------------------------------------- */



/**
 * A Shape is made up of polygons
 */
function Shape() {
	this.points = [];
	this.polygons = [];
}
Shape.prototype.remove = function(){
	this.points = [];
	this.polygons = [];
}
/**
 * Draws the shape
 */
Shape.prototype.draw = function(drawlist) {
	for (var i = 0; i< this.points.length; i++) {
		if(this.points[i] == undefined)
			continue;
		space.flatten(this.points[i]);
	}

	for (var i = 0; i< this.polygons.length; i++) {
		if(this.polygons[i] == undefined){
			console.log(i + ' is undefined ')
			continue;
		}
		var poly = this.polygons[i]; // convenience

		space.flatten(poly.origin);

		// lazy backface culling
		if (false || poly.normal && this.backface) {
			space.flatten(poly.normal);

			var originDist = Math.pow(poly.origin.tx, 2)
										 + Math.pow(poly.origin.ty, 2)
										 + Math.pow(poly.origin.tz, 2);

			var normalDist = Math.pow(poly.normal.tx, 2)
										 + Math.pow(poly.normal.ty, 2)
										 + Math.pow(poly.normal.tz, 2);

			if(originDist > normalDist) {
				drawlist.push(poly);
			}
		} else {
			drawlist.push(poly);
		}
	}
}

/**
 * A polygon is a connection of points in the shape object. You
 * should probably try to make them coplanar.
 */
function Polygon(points, normal, backface, type, color) {
	this.points = points;

	this.origin = new Point3(0, 0, 0);
	for(var i = 0; i < this.points.length; i++) {
		this.origin.x += this.points[i].x;
		this.origin.y += this.points[i].y;
		this.origin.z += this.points[i].z;
	}

	this.origin.x /= this.points.length;
	this.origin.y /= this.points.length;
	this.origin.z /= this.points.length;

	if (normal) {
		this.normal = new Point3(this.origin.x + normal.x,
														this.origin.y + normal.y,
														this.origin.z + normal.z);
	} else {
		this.normal = null;
	}

	this.backface = backface;
	this.type = type;
	this.color = color;
}

Polygon.SOLID = 0;
Polygon.WIRE = 1;

/**
 * Draws the polygon. Assumes that the points have already been
 * flattened.
 */
Polygon.prototype.draw = function() {
	ctx.beginPath();
	ctx.moveTo(this.points[0].fx, this.points[0].fy);

	for(var i = 0; i < this.points.length; i++) {
		ctx.lineTo(this.points[i].fx, this.points[i].fy);
	}

	ctx.closePath();

	var color = this.color;

/*	
	// Do lighting here
	lightvector = Math.abs(this.normal.x + this.normal.y);
	if(lightvector > 1) {
		lightvector = 1;
	}

	color[0] = (color[0] * lightvector).toString();
	color[1] = (color[1] * lightvector).toString();
	color[2] = (color[2] * lightvector).toString();
	*/

	if (color.length > 3) {
		var style = ["rgba(",
					 color[0], ",",
					 color[1], ",",
					 color[2], ",",
					 color[3], ")"].join("");
	} else {
		var style = ["rgb(",
					 color[0], ",",
					 color[1], ",",
					 color[2], ")"].join("");
	}

	if (this.type == Polygon.SOLID) {
		ctx.fillStyle = style;
		ctx.fill();
	} else if (this.type == Polygon.WIRE) {
		ctx.strokeStyle = style;
		ctx.stroke();
	}
}

/* -------------------------------------------------------------------- */

/**
 * Scene describes the 3D environment
 */
function Scene() {
	this.shapes = {};
	this.camera = new Point3(0, 0, 0);
	this.cameraTarget = new Point3(0, 0, 0);
	this.cameraRotation = 0;

	this.drawlist = [];
}

/**
 * Draw the world
 */
Scene.prototype.draw = function() {
	space.push();

	// Camera transformation
	space.translate(
		-this.camera.x,
		-this.camera.y,
		-this.camera.z
	);

	// Camera rotation
	var xdiff = this.cameraTarget.x - this.camera.x;
	var ydiff = this.cameraTarget.y - this.camera.y;
	var zdiff = this.cameraTarget.z - this.camera.z;

	var xzdist = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(zdiff, 2));

	var xrot = -Math.atan2(ydiff, xzdist); // up/down rotation
	var yrot =  Math.atan2(xdiff, zdiff);  // left/right rotation

	space.rotate(xrot, yrot, this.cameraRotation);

	// Drawing
	this.drawlist = [];

	for(var i in this.shapes) {
		this.shapes[i].draw(this.drawlist);
	}

	// Depth sorting (warning: this is only enough to drive this demo - feel
	// free to contribute a better system).
	this.drawlist.sort(function (poly1, poly2) {
		return poly2.origin.tz - poly1.origin.tz;
	});

	for (var i = 0; i < this.drawlist.length; i++) {
		this.drawlist[i].draw();
	}

	space.pop();
}
;
function InteractionBase(){
    __Interaction_Base_Languages();
    if(window['__Styles'] !== undefined){
		__Styles();
	}
    if(window['__Languages'] !== undefined){
        __Languages();
    }
    Interaction.__disableAutoInputFocus = false;
	Interaction.inputs = [];
	Interaction.__isPaused = false;
	Interaction.__inputVersion = 0;
	Interaction.__status = function(e){
		switch(e){
			case Interaction.__status.WRONG:
					Interaction.setStatus(Language.getText("status.false"),false);
				break;
				
			case Interaction.__status.FAIL:
                Interaction.setStatus(Language.getText("status.fail"),false);
				break;
				
			case Interaction.__status.CORRECT:
                Interaction.setStatus(Language.getText("status.true"),true);
				break;
				
			case Interaction.__status.FLOATING:
				Interaction.setStatus(Language.getText("status.numberFloating"),"alert");
				break;
				
			case Interaction.__status.EMPTY:
				if(Interaction.inputs.length > 1)
					Interaction.setStatus(Language.getText("status.emptyInputs"), "alert");
				else
					Interaction.setStatus(Language.getText("status.emptyInput"), "alert");
				break;
				
			case Interaction.__status.NUMBER:
				if(Interaction.inputs.length > 1)
					Interaction.setStatus(Language.getText("status.emptyNumbers"),"alert");
				else
					Interaction.setStatus(Language.getText("status.emptyNumber"),"alert");
				break;
		}
	}
	Interaction.__status.WRONG 	= 1;
	Interaction.__status.FAIL 	 = 2;
	Interaction.__status.CORRECT  = 3;
	Interaction.__status.FLOATING = 4;
	Interaction.__status.EMPTY 	= 5;
	Interaction.__status.NUMBER   = 6;
	
	Interaction.setStatus = function(str,cls){
		$(Interaction.status ).html(str);
		if(cls === true)
			$(Interaction.status ).get(0).className = 'status_true';
		else if(cls === false)
			$(Interaction.status ).get(0).className = 'status_false';
		else if (cls == 'alert') {
			$(Interaction.status ).get(0).className = 'status_alert';
		}
		else
			$(Interaction.status ).get(0).className = 'status';
	};
	
	Interaction.appendStatus = function(css){
		Interaction.status = document.createElement('div');
		$(Interaction.container).append(Interaction.status);
		$(Interaction.status)
			.attr({
				class:'status'
			})
			.css({
				position:'absolute'
			});
		$(Interaction.status).css(css);
	};
	
	Interaction.appendInput = function(css,isNumber,isEmpty){
		if(Interaction.__inputVersion == 2){
			throw 'You cannot use Interaction.appendInput after Interaction.addInput ';
		}
		if(isEmpty == undefined)
			isEmpty = false;
		Interaction.__inputVersion = 1;
		if(isNumber == undefined || isNumber == null)
			isNumber = true;
		var input = Interaction.createInput(isNumber,3);
		input.setAttribute("isEmpty",isEmpty);
		$(input)
			.css({
				position:'absolute'
			})
		if(Interaction.inputs.length == 0)
			Interaction.input = input;
		Interaction.inputs.push(input);
		$(Interaction.container).append(input);
		$(input).css(css);
		return input;
	};
	
	/*
	*	example call
	*	Interaction.addInput({
	*		isNumber:true,
	*		maxLength:5,
	*		reverseText:false,
	*		css:{
	*			width:35px,
	*			fontSize:22px
	*		},
	*		correctAnswer:15,
	*		or
	*		correctAnswer:function(){
	*				return Interaction.value1 / Interaction.value2;
	*		},
	*	})
	*/

	Interaction.addInput = function(opt){
		if(Interaction.__inputVersion == 1){
			throw 'You cannot use Interaction.addInput after Interaction.appendInput';
		}
		Interaction.__inputVersion = 2;
		if(opt.correctAnswer == undefined){
			throw 'You have to define a correctAnswer object or value';
		}
		var input = Interaction.createInput(opt.isNumber,opt.maxLength, opt.css);		
		input.correctAnswer = opt.correctAnswer;
		Interaction.inputs.push(input);
		return input;
	}
	
	Interaction.appendQuestion = function(html,css){
		Interaction.questionDiv = document.createElement('div');
		$(Interaction.container).append(Interaction.questionDiv);
		$(Interaction.questionDiv).html(html).css(css);
		return Interaction.questionDiv;
	}
	//sets the question's parameters
	Interaction.setQuestionParams = function(params){
		Interaction.__questionParams = params;
		$(params).each(function(index, element) {
            if(this.html)
				$('#'+this.id,Interaction.questionDiv).html(this.html);
			if(this.value)
				$('#'+this.id,Interaction.questionDiv).val(this.value);
        });
	}
	//gets the questions's parameters
	Interaction.getQuestionParams = function(){
		return Interaction.__questionParams;
	}
	Interaction.createInput = function(isNumber,maxLength,css){
		var input = document.createElement('input');
		if(isNumber==true){
			input.setAttribute('onkeypress','return Interaction.__inputFilter__onlyNumbers(event)');
			input.setAttribute('isNumber','true');
		}
		else 	
			input.setAttribute('isNumber','false');
        input.setAttribute('type','text');
        if(isNumber == true && Main.getCurrentPlatform() == Main.platform.MOBILE){
            $(input).keydown(function(){
                this.setAttribute('type','text');
            });
            $(input).focus(function(){
                this.setAttribute('type','number');
            });
        }
		$(input)
			.attr({
				'class':'input',
				'maxLength':maxLength
			})
			.keyup(function(event){
				if(event.keyCode == 13 && Interaction.button)
					Interaction.button.click();
			})
			.css({
                fontSize:'16px'
			});

        if (css)
			$(input).css(css);
        $(input).css({
            width:(parseInt($(input).css('font-size'),10)*(maxLength*0.5+0.5))+"px",
            height:(parseInt($(input).css('font-size'),10)*1.7)+"px"
        });
        if (css)
			$(input).css(css);

        return input;
	};
	
	Interaction.flushInputs = function(){
		$(Interaction.inputs).each(function(index, element) {
            $(this).remove();
        });
		Interaction.inputs = [];
	};
	
	Interaction.appendButton = function(css){
		Interaction.button = document.createElement('input');
		Interaction.button.setAttribute('type','button');
		$(Interaction.container).append(Interaction.button);
		$(Interaction.button)
			.attr({
				'class':'control_button'
			})
			.css({
				position:'absolute'
				
			});
		$(Interaction.button).css(css);
	};
	
	
	Interaction.setRandomGenerator = function(to,from){
		if(isNaN(from))
			from=0;
		
		Interaction.__randomGenerator = {
			index : 0,
			shuffledArray : Util.getShuffledArray(to,from),
			nextNumber:function(){
				Interaction.__randomGenerator.index = Interaction.__randomGenerator.index%Interaction.__randomGenerator.shuffledArray.length;
				var number = Interaction.__randomGenerator.shuffledArray[Interaction.__randomGenerator.index];
				Interaction.__randomGenerator.index ++;
				return number;
			}
		}
	}
	
	Interaction.prepareNextQuestion = function(){
		if(typeof Interaction.pause == 'function' && Interaction.isPaused() || Interaction.pause == true)
			return;
		if(Interaction.status)
			Interaction.setStatus('');
		if(Interaction.__inputVersion == 2)
			Interaction.flushInputs();
		for(i = 0; i < Interaction.inputs.length; i++){
			if(Interaction.inputs[i]){
				$(Interaction.inputs[i]).get(0).onkeydown = null;
				Interaction.inputs[i].value = '';
				$(Interaction.inputs[i]).removeClass('input_user_answer_correct');
				$(Interaction.inputs[i]).removeClass('input_user_answer_wrong');
				$(Interaction.inputs[i]).removeClass('input_correct_answer');
			}
		}
		if(Interaction.button){
			Interaction.button.className = 'control_button';
			Interaction.button.onclick = Interaction.__checkAnswer;
		}
		Interaction.trial = 0;

        if(Main.getCurrentPlatform() == Main.platform.DESKTOP)
            Interaction.enableAutoFocus();

		if(Interaction.__randomGenerator)
			Interaction.nextQuestion(Interaction.__randomGenerator.nextNumber());	
		else
			Interaction.nextQuestion();

//        alert(Main.getCurrentPlatform() + " \n " + navigator.userAgent);
        if(Main.getCurrentPlatform() == Main.platform.DESKTOP){
            try{
                if(Interaction.__disableAutoInputFocus == false){
                    Interaction.inputs[0].focus();
                }
                else{
                    Interaction._removeFocusFromInputs();
                }
            }
            catch(e){}
        }
        else{
            Interaction._removeFocusFromInputs();
        }
	};

    Interaction._removeFocusFromInputs = function(){
//        alert("Focuses will be removed");
        for(var i=0;i<Interaction.inputs.length;i++){
            Interaction.inputs[i].blur();
        }
    }
    Interaction.disableAutoFocus = function(){
        Interaction.__disableAutoInputFocus = true;
    };
    Interaction.enableAutoFocus = function(){
        Interaction.__disableAutoInputFocus = false;
    };
	Interaction.__checkAnswer = function(){
		if(typeof Interaction.pause == 'function' && Interaction.isPaused() || Interaction.pause == true)
			return;
		if(Interaction.preCheck && Interaction.preCheck() === false)
			return;
		var isCorrect;
		if(Interaction.__inputVersion == 2){	// addInput()
			isCorrect = true;
			for(var i=0; i<Interaction.inputs.length;i++){
				var value = Interaction.inputs[i].value;
				if($(Interaction.inputs[i]).val() == ""){
					Interaction.__status(Interaction.__status.EMPTY);
					return;
				}
				if(value == "" ||isNaN(value) && value.indexOf(',') < 0) {
					Interaction.__status(Interaction.__status.NUMBER);
					return;
				}
				if(value.indexOf('.') > 0){
					Interaction.__status(Interaction.__status.FLOATING);
					return;
				}
				
				var isInputCorrect;
				if(typeof Interaction.inputs[i].correctAnswer == 'function')
					isInputCorrect = (value == Interaction.inputs[i].correctAnswer(value));
				else
					isInputCorrect = (value == Interaction.inputs[i].correctAnswer);
				
				$(Interaction.inputs[i]).get(0).onfocus = function () {
					$(this).removeClass('input_user_answer_correct');
					$(this).removeClass('input_user_answer_wrong');
					$(this).removeClass('input_correct_answer');
				}
				
				if(isInputCorrect === true){
					$(Interaction.inputs[i]).addClass('input_user_answer_correct');
				}
				else{
					$(Interaction.inputs[i]).addClass('input_user_answer_wrong');
					isCorrect = false;
				}
			}
		}
		else{ // appendInput()
			if(Interaction.inputs.length >= 1){
				var values = [];
				for(var i=0; i<Interaction.inputs.length;i++){
					values[i] = Interaction.inputs[i].value;
                    if(Interaction.inputs[i].getAttribute('isEmpty') == 'false' && $(Interaction.inputs[i]).val() == ""){
                        Interaction.__status(Interaction.__status.EMPTY);
                        return;
                    }
					if(Interaction.inputs[i].getAttribute('isNumber') == 'true'){
						if(isNaN(values[i]) && values[i].indexOf(',') < 0) {
							Interaction.__status(Interaction.__status.NUMBER);
							return;
						}
						if(values[i].indexOf('.') > 0){
							Interaction.__status(Interaction.__status.FLOATING);
							return;
						}
					}
				}
				if(Interaction.inputs.length == 1){
					isCorrect = Interaction.isAnswerCorrect(values[0]);
				}
				else{
					isCorrect = Interaction.isAnswerCorrect(values);
				}
			}
			else
				isCorrect = Interaction.isAnswerCorrect();
		}
		
		//call user-defined functions
		if(isCorrect){
			Interaction.__status(Interaction.__status.CORRECT);
			$(Interaction.inputs).each(function(index, element) {
            	$(this).get(0).onkeydown = function(event){
					if(event.keyCode != 13)
						return false;
				}
            });
			
			if(Interaction.onCorrectAnswer)
				Interaction.onCorrectAnswer();
				
//			Main.correctSound.play();
		}
		else if(Interaction.trial == 0){
			Interaction.__status(Interaction.__status.WRONG);
			if(Interaction.onWrongAnswer)
				Interaction.onWrongAnswer();
				
//			Main.wrongSound.play();
		}
		else{			
			$(Interaction.inputs).each(function(index, element) {
				$(this).get(0).onfocus = null;
            	$(this).get(0).onkeydown = function(event){
					if(event.keyCode != 13)
						return false;
				}   
            });

			if(Interaction.onFail)
				Interaction.onFail();
				
//			Main.wrongSound.play();
		}
		if(isCorrect || Interaction.trial > 0){
			Interaction.button.onclick = Interaction.prepareNextQuestion;
			Interaction.button.className = 'next_button';
		}
		Interaction.trial++;
	};
	
	Interaction.__inputFilter__onlyNumbers = function (e,allowedchars){
		var isPassKey =function (key,allowedchars){
			if(allowedchars!=null){
				for(var i=0;i<allowedchars.length;i++){
					if(allowedchars[i]==String.fromCharCode(key))
						return true;
					}
				}
			return false;		
		};
		var key=e.charCode==undefined?e.keyCode:e.charCode;
		if((/^[0-9]+|,$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){
			return true;
		}
		else{
			return false;
		}
	};
	Interaction.pause = function(delay){
		if(delay == undefined || isNaN(delay))
			delay = 0;
		if(delay == 0)
			Interaction.__isPaused = true;
		else
			setTimeout('Interaction.__isPaused = true',delay);
	}
	Interaction.resume = function(delay){
		if(delay == undefined || isNaN(delay))
			delay = 0;
		if(delay == 0)
			Interaction.__isPaused = false;
		else
			setTimeout('Interaction.__isPaused = false',delay)
		
	}
	Interaction.isPaused = function(){
		return Interaction.__isPaused;
	}
}
;
/**
 * Created with JetBrains WebStorm.
 * User: yunus_work
 * Date: 13.09.2012
 * Time: 10:12
 * To change this template use File | Settings | File Templates.
 */

function __Interaction_Base_Languages(){
    Language.setText({
        "status.true":{
            TURKISH:"Tebrikler!",
            ENGLISH:"Congratulations!"
        },
        "status.false":{
            TURKISH:"Yanlış cevap, tekrar deneyiniz.",
            ENGLISH:"Wrong answer, try again."
        },
        "status.fail":{
            TURKISH:"Yanlış cevap, doğrusu yukarıda gösterilmiştir.",
            ENGLISH:"Wrong answer, the correct one is shown above."
        },
        "status.emptyInput":{
            TURKISH:"Lütfen kutucuğu doldurunuz.",
            ENGLISH:"Please fill all the boxes."
        },
        "status.emptyInputs":{
            TURKISH:"Lütfen tüm kutucukları doldurunuz.",
            ENGLISH:"Please fill all the boxes."
        },
        "status.emptyNumber":{
            TURKISH:"Lütfen bir sayı giriniz.",
            ENGLISH:"Please enter a number."
        },
        "status.emptyNumbers":{
            TURKISH:"Lütfen kutucuklara sayı giriniz.",
            ENGLISH:"Please enter numbers to boxes."
        },
        "status.numberFloating":{
            TURKISH:"Lütfen ondalıklı sayıları virgülle yazınız.",
            ENGLISH:"Please write floating numbers with dot."
        }
    });
}
;
/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.22",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.22"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.droppable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.22"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.22"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.selectable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.extend(a.ui.selectable,{version:"1.8.22"})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.sortable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return e||(b.style.visibility="hidden"),b},update:function(a,b){if(e&&!d.forcePlaceholderSize)return;b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.containers[d].floating?this.items[i].item.offset().left:this.items[i].item.offset().top;Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i],this.direction=j-h>0?"down":"up")}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||d.push(function(a){this._trigger("remove",a,this._uiHash())});for(var f=this.containers.length-1;f>=0;f--)a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!c&&(d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.containers[f])),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.containers[f])))}for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.22"})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.accordion.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var b=this,c=b.options;b.running=0,b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),b.headers=b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-focus")}),b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(c.navigation){var d=b.element.find("a").filter(c.navigationFilter).eq(0);if(d.length){var e=d.closest(".ui-accordion-header");e.length?b.active=e:b.active=d.closest(".ui-accordion-content").prev()}}b.active=b._findActive(b.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),b.active.next().addClass("ui-accordion-content-active"),b._createIcons(),b.resize(),b.element.attr("role","tablist"),b.headers.attr("role","tab").bind("keydown.accordion",function(a){return b._keydown(a)}).next().attr("role","tabpanel"),b.headers.not(b.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),b.active.length?b.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):b.headers.eq(0).attr("tabIndex",0),a.browser.safari||b.headers.find("a").attr("tabIndex",-1),c.event&&b.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(a){b._clickHandler.call(b,a,this),a.preventDefault()})},_createIcons:function(){var b=this.options;b.icons&&(a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var b=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(b.autoHeight||b.fillHeight)&&c.css("height",""),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b=="active"&&this.activate(c),b=="icons"&&(this._destroyIcons(),c&&this._createIcons()),b=="disabled"&&this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(b){if(this.options.disabled||b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._clickHandler({target:b.target},b.target),b.preventDefault()}return f?(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),!1):!0},resize:function(){var b=this.options,c;if(b.fillSpace){if(a.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height(),a.browser.msie&&this.element.parent().css("overflow",d),this.headers.each(function(){c-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else b.autoHeight&&(c=0,this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c));return this},activate:function(a){this.options.active=a;var b=this._findActive(a)[0];return this._clickHandler({target:b},b),this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===!1?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,c){var d=this.options;if(d.disabled)return;if(!b.target){if(!d.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),this.active.next().addClass("ui-accordion-content-active");var e=this.active.next(),f={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:e},g=this.active=a([]);this._toggle(g,e,f);return}var h=a(b.currentTarget||c),i=h[0]===this.active[0];d.active=d.collapsible&&i?!1:this.headers.index(h);if(this.running||!d.collapsible&&i)return;var j=this.active,g=h.next(),e=this.active.next(),f={options:d,newHeader:i&&d.collapsible?a([]):h,oldHeader:this.active,newContent:i&&d.collapsible?a([]):g,oldContent:e},k=this.headers.index(this.active[0])>this.headers.index(h[0]);this.active=i?a([]):h,this._toggle(g,e,f,i,k),j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),i||(h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),h.next().addClass("ui-accordion-content-active"));return},_toggle:function(b,c,d,e,f){var g=this,h=g.options;g.toShow=b,g.toHide=c,g.data=d;var i=function(){if(!g)return;return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data),g.running=c.size()===0?b.size():c.size();if(h.animated){var j={};h.collapsible&&e?j={toShow:a([]),toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace}:j={toShow:b,toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace},h.proxied||(h.proxied=h.animated),h.proxiedDuration||(h.proxiedDuration=h.duration),h.animated=a.isFunction(h.proxied)?h.proxied(j):h.proxied,h.duration=a.isFunction(h.proxiedDuration)?h.proxiedDuration(j):h.proxiedDuration;var k=a.ui.accordion.animations,l=h.duration,m=h.animated;m&&!k[m]&&!a.easing[m]&&(m="slide"),k[m]||(k[m]=function(a){this.slide(a,{easing:m,duration:l||700})}),k[m](j)}else h.collapsible&&e?b.toggle():(c.hide(),b.show()),i(!0);c.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),b.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(this.running)return;this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)}}),a.extend(a.ui.accordion,{version:"1.8.22",animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},b);return}if(!b.toShow.size()){b.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},b);return}var d=b.toShow.css("overflow"),e=0,f={},g={},h=["height","paddingTop","paddingBottom"],i,j=b.toShow;i=j[0].style.width,j.width(j.parent().width()-parseFloat(j.css("paddingLeft"))-parseFloat(j.css("paddingRight"))-(parseFloat(j.css("borderLeftWidth"))||0)-(parseFloat(j.css("borderRightWidth"))||0)),a.each(h,function(c,d){g[d]="hide";var e=(""+a.css(b.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);f[d]={value:e[1],unit:e[2]||"px"}}),b.toShow.css({height:0,overflow:"hidden"}).show(),b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g,{step:function(a,c){c.prop=="height"&&(e=c.end-c.start===0?0:(c.now-c.start)/(c.end-c.start)),b.toShow[0].style[c.prop]=e*f[c.prop].value+f[c.prop].unit},duration:b.duration,easing:b.easing,complete:function(){b.autoHeight||b.toShow.css("height",""),b.toShow.css({width:i,overflow:d}),b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1e3:200})}}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},f=a.attrFn||{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0,click:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(g);a.each(d,function(a,b){if(a==="click")return;a in f?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.22",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.22"})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.22"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.22"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id;a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.22",window["DP_jQuery_"+dpuuid]=$})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.progressbar.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),a.Widget.prototype.destroy.apply(this,arguments)},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(b,c){b==="value"&&(this.options.value=c,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}}),a.extend(a.ui.progressbar,{version:"1.8.22"})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=(a.curCSS||a.css)(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.22",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}}),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*(c/=f)*c*((g+1)*c-g)+d},easeOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*((c=c/f-1)*c*((g+1)*c+g)+1)+d},easeInOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),(c/=f/2)<1?e/2*c*c*(((g*=1.525)+1)*c-g)+d:e/2*((c-=2)*c*(((g*=1.525)+1)*c+g)+2)+d},easeInBounce:function(b,c,d,e,f){return e-a.easing.easeOutBounce(b,f-c,0,e,f)+d},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(b,c,d,e,f){return c<f/2?a.easing.easeInBounce(b,c*2,0,e,f)*.5+d:a.easing.easeOutBounce(b,c*2-f,0,e,f)*.5+e*.5+d}})}(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.blind.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.blind=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=f=="vertical"?"height":"width",i=f=="vertical"?g.height():g.width();e=="show"&&g.css(h,0);var j={};j[h]=e=="show"?i:0,g.animate(j,b.duration,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.bounce.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.bounce=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"up",g=b.options.distance||20,h=b.options.times||5,i=b.duration||250;/show|hide/.test(e)&&d.push("opacity"),a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",g=b.options.distance||(j=="top"?c.outerHeight(!0)/3:c.outerWidth(!0)/3);e=="show"&&c.css("opacity",0).css(j,k=="pos"?-g:g),e=="hide"&&(g=g/(h*2)),e!="hide"&&h--;if(e=="show"){var l={opacity:1};l[j]=(k=="pos"?"+=":"-=")+g,c.animate(l,i/2,b.options.easing),g=g/2,h--}for(var m=0;m<h;m++){var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing),g=e=="hide"?g*2:g/2}if(e=="hide"){var l={opacity:0};l[j]=(k=="pos"?"-=":"+=")+g,c.animate(l,i/2,b.options.easing,function(){c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}else{var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.clip.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.clip=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","height","width"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=c[0].tagName=="IMG"?g:c,i={size:f=="vertical"?"height":"width",position:f=="vertical"?"top":"left"},j=f=="vertical"?h.height():h.width();e=="show"&&(h.css(i.size,0),h.css(i.position,j/2));var k={};k[i.size]=e=="show"?j:0,k[i.position]=e=="show"?0:j/2,h.animate(k,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.drop.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.drop=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","opacity"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0)/2:c.outerWidth(!0)/2);e=="show"&&c.css("opacity",0).css(g,h=="pos"?-i:i);var j={opacity:e=="show"?1:0};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.explode.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.explode=function(b){return this.queue(function(){var c=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,d=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;var e=a(this).show().css("visibility","hidden"),f=e.offset();f.top-=parseInt(e.css("marginTop"),10)||0,f.left-=parseInt(e.css("marginLeft"),10)||0;var g=e.outerWidth(!0),h=e.outerHeight(!0);for(var i=0;i<c;i++)for(var j=0;j<d;j++)e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(g/d),top:-i*(h/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/d,height:h/c,left:f.left+j*(g/d)+(b.options.mode=="show"?(j-Math.floor(d/2))*(g/d):0),top:f.top+i*(h/c)+(b.options.mode=="show"?(i-Math.floor(c/2))*(h/c):0),opacity:b.options.mode=="show"?0:1}).animate({left:f.left+j*(g/d)+(b.options.mode=="show"?0:(j-Math.floor(d/2))*(g/d)),top:f.top+i*(h/c)+(b.options.mode=="show"?0:(i-Math.floor(c/2))*(h/c)),opacity:b.options.mode=="show"?1:0},b.duration||500);setTimeout(function(){b.options.mode=="show"?e.css({visibility:"visible"}):e.css({visibility:"visible"}).hide(),b.callback&&b.callback.apply(e[0]),e.dequeue(),a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fade.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fade=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide");c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fold.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fold=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.size||15,g=!!b.options.horizFirst,h=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(c,d),c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),j=e=="show"!=g,k=j?["width","height"]:["height","width"],l=j?[i.width(),i.height()]:[i.height(),i.width()],m=/([0-9]+)%/.exec(f);m&&(f=parseInt(m[1],10)/100*l[e=="hide"?0:1]),e=="show"&&i.css(g?{height:0,width:f}:{height:f,width:0});var n={},p={};n[k[0]]=e=="show"?l[0]:f,p[k[1]]=e=="show"?l[1]:0,i.animate(n,h,b.options.easing).animate(p,h,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.highlight.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),d=["backgroundImage","backgroundColor","opacity"],e=a.effects.setMode(c,b.options.mode||"show"),f={backgroundColor:c.css("backgroundColor")};e=="hide"&&(f.opacity=0),a.effects.save(c,d),c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(f,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),e=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.pulsate.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.pulsate=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"show"),e=(b.options.times||5)*2-1,f=b.duration?b.duration/2:a.fx.speeds._default/2,g=c.is(":visible"),h=0;g||(c.css("opacity",0).show(),h=1),(d=="hide"&&g||d=="show"&&!g)&&e--;for(var i=0;i<e;i++)c.animate({opacity:h},f,b.options.easing),h=(h+1)%2;c.animate({opacity:h},f,b.options.easing,function(){h==0&&c.hide(),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}).dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.scale.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.puff=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide"),e=parseInt(b.options.percent,10)||150,f=e/100,g={height:c.height(),width:c.width()};a.extend(b.options,{fade:!0,mode:d,percent:d=="hide"?e:100,from:d=="hide"?g:{height:g.height*f,width:g.width*f}}),c.effect("scale",b.options,b.duration,b.callback),c.dequeue()})},a.effects.scale=function(b){return this.queue(function(){var c=a(this),d=a.extend(!0,{},b.options),e=a.effects.setMode(c,b.options.mode||"effect"),f=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:e=="hide"?0:100),g=b.options.direction||"both",h=b.options.origin;e!="effect"&&(d.origin=h||["middle","center"],d.restore=!0);var i={height:c.height(),width:c.width()};c.from=b.options.from||(e=="show"?{height:0,width:0}:i);var j={y:g!="horizontal"?f/100:1,x:g!="vertical"?f/100:1};c.to={height:i.height*j.y,width:i.width*j.x},b.options.fade&&(e=="show"&&(c.from.opacity=0,c.to.opacity=1),e=="hide"&&(c.from.opacity=1,c.to.opacity=0)),d.from=c.from,d.to=c.to,d.mode=e,c.effect("size",d,b.duration,b.callback),c.dequeue()})},a.effects.size=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","width","height","overflow","opacity"],e=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],g=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],j=a.effects.setMode(c,b.options.mode||"effect"),k=b.options.restore||!1,l=b.options.scale||"both",m=b.options.origin,n={height:c.height(),width:c.width()};c.from=b.options.from||n,c.to=b.options.to||n;if(m){var p=a.effects.getBaseline(m,n);c.from.top=(n.height-c.from.height)*p.y,c.from.left=(n.width-c.from.width)*p.x,c.to.top=(n.height-c.to.height)*p.y,c.to.left=(n.width-c.to.width)*p.x}var q={from:{y:c.from.height/n.height,x:c.from.width/n.width},to:{y:c.to.height/n.height,x:c.to.width/n.width}};if(l=="box"||l=="both")q.from.y!=q.to.y&&(d=d.concat(h),c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(d=d.concat(i),c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to));(l=="content"||l=="both")&&q.from.y!=q.to.y&&(d=d.concat(g),c.from=a.effects.setTransition(c,g,q.from.y,c.from),c.to=a.effects.setTransition(c,g,q.to.y,c.to)),a.effects.save(c,k?d:e),c.show(),a.effects.createWrapper(c),c.css("overflow","hidden").css(c.from);if(l=="content"||l=="both")h=h.concat(["marginTop","marginBottom"]).concat(g),i=i.concat(["marginLeft","marginRight"]),f=d.concat(h).concat(i),c.find("*[width]").each(function(){var c=a(this);k&&a.effects.save(c,f);var d={height:c.height(),width:c.width()};c.from={height:d.height*q.from.y,width:d.width*q.from.x},c.to={height:d.height*q.to.y,width:d.width*q.to.x},q.from.y!=q.to.y&&(c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.options.easing,function(){k&&a.effects.restore(c,f)})});c.animate(c.to,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity),j=="hide"&&c.hide(),a.effects.restore(c,k?d:e),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.shake=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"left",g=b.options.distance||20,h=b.options.times||3,i=b.duration||b.options.duration||140;a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",l={},m={},n={};l[j]=(k=="pos"?"-=":"+=")+g,m[j]=(k=="pos"?"+=":"-=")+g*2,n[j]=(k=="pos"?"-=":"+=")+g*2,c.animate(l,i,b.options.easing);for(var p=1;p<h;p++)c.animate(m,i,b.options.easing).animate(n,i,b.options.easing);c.animate(m,i,b.options.easing).animate(l,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.slide.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.slide=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"show"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c).css({overflow:"hidden"});var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0):c.outerWidth(!0));e=="show"&&c.css(g,h=="pos"?isNaN(i)?"-"+i:-i:i);var j={};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.transfer.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.transfer=function(b){return this.queue(function(){var c=a(this),d=a(b.options.to),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth()},g=c.offset(),h=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,b.duration,b.options.easing,function(){h.remove(),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;
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


var paper = new function() {

var Base = new function() { 
	var fix = !this.__proto__,
		hidden = /^(statics|generics|preserve|enumerable|prototype|__proto__|toString|valueOf)$/,
		proto = Object.prototype,
		has = fix
			? function(name) {
				return name !== '__proto__' && this.hasOwnProperty(name);
			}
			: proto.hasOwnProperty,
		toString = proto.toString,
		proto = Array.prototype,
		isArray = Array.isArray = Array.isArray || function(obj) {
			return toString.call(obj) === '[object Array]';
		},
		slice = proto.slice,
		forEach = proto.forEach = proto.forEach || function(iter, bind) {
			for (var i = 0, l = this.length; i < l; i++)
				iter.call(bind, this[i], i, this);
		},
		forIn = function(iter, bind) {
			for (var i in this)
				if (this.hasOwnProperty(i))
					iter.call(bind, this[i], i, this);
		},
		_define = Object.defineProperty,
		_describe = Object.getOwnPropertyDescriptor;

	function define(obj, name, desc) {
		if (_define) {
			try {
				delete obj[name];
				return _define(obj, name, desc);
			} catch (e) {}
		}
		if ((desc.get || desc.set) && obj.__defineGetter__) {
			desc.get && obj.__defineGetter__(name, desc.get);
			desc.set && obj.__defineSetter__(name, desc.set);
		} else {
			obj[name] = desc.value;
		}
		return obj;
	}

	function describe(obj, name) {
		if (_describe) {
			try {
				return _describe(obj, name);
			} catch (e) {}
		}
		var get = obj.__lookupGetter__ && obj.__lookupGetter__(name);
		return get
			? { get: get, set: obj.__lookupSetter__(name), enumerable: true,
					configurable: true }
			: has.call(obj, name)
				? { value: obj[name], enumerable: true, configurable: true,
						writable: true }
				: null;
	}

	function inject(dest, src, enumerable, base, preserve, generics) {
		var beans, bean;

		function field(name, val, dontCheck, generics) {
			var val = val || (val = describe(src, name))
					&& (val.get ? val : val.value),
				func = typeof val === 'function',
				res = val,
				prev = preserve || func
					? (val && val.get ? name in dest : dest[name]) : null;
			if (generics && func && (!preserve || !generics[name])) {
				generics[name] = function(bind) {
					return bind && dest[name].apply(bind,
							slice.call(arguments, 1));
				}
			}
			if ((dontCheck || val !== undefined && has.call(src, name))
					&& (!preserve || !prev)) {
				if (func) {
					if (prev && /\bthis\.base\b/.test(val)) {
						var fromBase = base && base[name] == prev;
						res = function() {
							var tmp = describe(this, 'base');
							define(this, 'base', { value: fromBase
								? base[name] : prev, configurable: true });
							try {
								return val.apply(this, arguments);
							} finally {
								tmp ? define(this, 'base', tmp)
									: delete this.base;
							}
						};
						res.toString = function() {
							return val.toString();
						}
						res.valueOf = function() {
							return val.valueOf();
						}
					}
					if (beans && val.length == 0
							&& (bean = name.match(/^(get|is)(([A-Z])(.*))$/)))
						beans.push([ bean[3].toLowerCase() + bean[4], bean[2] ]);
				}
				if (!res || func || !res.get && !res.set)
					res = { value: res, writable: true };
				if ((describe(dest, name)
						|| { configurable: true }).configurable) {
					res.configurable = true;
					res.enumerable = enumerable;
				}
				define(dest, name, res);
			}
		}
		if (src) {
			beans = [];
			for (var name in src)
				if (has.call(src, name) && !hidden.test(name))
					field(name, null, true, generics);
			field('toString');
			field('valueOf');
			for (var i = 0, l = beans && beans.length; i < l; i++)
				try {
					var bean = beans[i], part = bean[1];
					field(bean[0], {
						get: dest['get' + part] || dest['is' + part],
						set: dest['set' + part]
					}, true);
				} catch (e) {}
		}
		return dest;
	}

	function extend(obj) {
		var ctor = function(dont) {
			if (fix) define(this, '__proto__', { value: obj });
			if (this.initialize && dont !== ctor.dont)
				return this.initialize.apply(this, arguments);
		}
		ctor.prototype = obj;
		ctor.toString = function() {
			return (this.prototype.initialize || function() {}).toString();
		}
		return ctor;
	}

	function iterator(iter) {
		return !iter
			? function(val) { return val }
			: typeof iter !== 'function'
				? function(val) { return val == iter }
				: iter;
	}

	function each(obj, iter, bind, asArray) {
		try {
			if (obj)
				(asArray || asArray === undefined && isArray(obj)
					? forEach : forIn).call(obj, iterator(iter),
						bind = bind || obj);
		} catch (e) {
			if (e !== Base.stop) throw e;
		}
		return bind;
	}

	function clone(obj) {
		return each(obj, function(val, i) {
			this[i] = val;
		}, new obj.constructor());
	}

	return inject(function() {}, {
		inject: function(src) {
			if (src) {
				var proto = this.prototype,
					base = proto.__proto__ && proto.__proto__.constructor,
					statics = src.statics == true ? src : src.statics;
				if (statics != src)
					inject(proto, src, src.enumerable, base && base.prototype,
							src.preserve, src.generics && this);
				inject(this, statics, true, base, src.preserve);
			}
			for (var i = 1, l = arguments.length; i < l; i++)
				this.inject(arguments[i]);
			return this;
		},

		extend: function(src) {
			var proto = new this(this.dont),
				ctor = extend(proto);
			define(proto, 'constructor',
					{ value: ctor, writable: true, configurable: true });
			ctor.dont = {};
			inject(ctor, this, true);
			return arguments.length ? this.inject.apply(ctor, arguments) : ctor;
		}
	}, true).inject({
		has: has,
		each: each,

		inject: function() {
			for (var i = 0, l = arguments.length; i < l; i++)
				inject(this, arguments[i]);
			return this;
		},

		extend: function() {
			var res = new (extend(this));
			return res.inject.apply(res, arguments);
		},

		each: function(iter, bind) {
			return each(this, iter, bind);
		},

		clone: function() {
			return clone(this);
		},

		statics: {
			each: each,
			clone: clone,
			define: define,
			describe: describe,
			iterator: iterator,

			has: function(obj, name) {
				return has.call(obj, name);
			},

			type: function(obj) {
				return (obj || obj === 0) && (obj._type || typeof obj) || null;
			},

			check: function(obj) {
				return !!(obj || obj === 0);
			},

			pick: function() {
				for (var i = 0, l = arguments.length; i < l; i++)
					if (arguments[i] !== undefined)
						return arguments[i];
				return null;
			},

			stop: {}
		}
	});
}

this.Base = Base.inject({
	generics: true,

	clone: function() {
		return new this.constructor(this);
	},

	toString: function() {
		return '{ ' + Base.each(this, function(value, key) {
			if (key.charAt(0) != '_') {
				var type = typeof value;
				this.push(key + ': ' + (type === 'number'
						? Base.formatNumber(value)
						: type === 'string' ? "'" + value + "'" : value));
			}
		}, []).join(', ') + ' }';
	},

	statics: {
		read: function(list, start, length) {
			var start = start || 0,
				length = length || list.length - start;
			var obj = list[start];
			if (obj instanceof this
					|| this.prototype._readNull && obj == null && length <= 1)
				return obj;
			obj = new this(this.dont);
			return obj.initialize.apply(obj, start > 0 || length < list.length
				? Array.prototype.slice.call(list, start, start + length)
				: list) || obj;
		},

		readAll: function(list, start) {
			var res = [], entry;
			for (var i = start || 0, l = list.length; i < l; i++) {
				res.push(Array.isArray(entry = list[i])
					? this.read(entry, 0)
					: this.read(list, i, 1));
			}
			return res;
		},

		splice: function(list, items, index, remove) {
			var amount = items && items.length,
				append = index === undefined;
			index = append ? list.length : index;
			for (var i = 0; i < amount; i++)
				items[i]._index = index + i;
			if (append) {
				list.push.apply(list, items);
				return [];
			} else {
				var args = [index, remove];
				if (items)
					args.push.apply(args, items);
				var removed = list.splice.apply(list, args);
				for (var i = 0, l = removed.length; i < l; i++)
					delete removed[i]._index;
				for (var i = index + amount, l = list.length; i < l; i++)
					list[i]._index = i;
				return removed;
			}
		},

		merge: function() {
			return Base.each(arguments, function(hash) {
				Base.each(hash, function(value, key) {
					this[key] = value;
				}, this);
			}, new Base(), true); 
		},

		capitalize: function(str) {
			return str.replace(/\b[a-z]/g, function(match) {
				return match.toUpperCase();
			});
		},

		camelize: function(str) {
			return str.replace(/-(\w)/g, function(all, chr) {
				return chr.toUpperCase();
			});
		},

		hyphenate: function(str) {
			return str.replace(/[a-z][A-Z0-9]|[0-9][a-zA-Z]|[A-Z]{2}[a-z]/g,
				function(match) {
					return match.charAt(0) + '-' + match.substring(1);
				}
			).toLowerCase();
		},

		formatNumber: function(num) {
			return (Math.round(num * 100000) / 100000).toString();
		}
	}
});

var PaperScope = this.PaperScope = Base.extend({

	initialize: function(script) {
		paper = this;
		this.view = null;
		this.views = [];
		this.project = null;
		this.projects = [];
		this.tool = null;
		this.tools = [];
		this._id = script && (script.getAttribute('id') || script.src)
				|| ('paperscope-' + (PaperScope._id++));
		if (script)
			script.setAttribute('id', this._id);
		PaperScope._scopes[this._id] = this;
	},

	version: 0.22,

	evaluate: function(code) {
		var res = PaperScript.evaluate(code, this);
		View.updateFocus();
		return res;
	},

	install: function(scope) {
		var that = this;
		Base.each(['project', 'view', 'tool'], function(key) {
			Base.define(scope, key, {
				configurable: true,
				writable: true,
				get: function() {
					return that[key];
				}
			});
		});
		for (var key in this) {
			if (!/^(version|_id|load)/.test(key) && !(key in scope))
				scope[key] = this[key];
		}
	},

	setup: function(canvas) {
		paper = this;
		this.project = new Project();
		if (canvas)
			this.view = new View(canvas);
	},

	clear: function() {
		for (var i = this.projects.length - 1; i >= 0; i--)
			this.projects[i].remove();
		for (var i = this.views.length - 1; i >= 0; i--)
			this.views[i].remove();
		for (var i = this.tools.length - 1; i >= 0; i--)
			this.tools[i].remove();
	},

	remove: function() {
		this.clear();
		delete PaperScope._scopes[this._id];
	},

	_needsRedraw: function() {
		if (!this._redrawNotified) {
			for (var i = this.views.length - 1; i >= 0; i--)
				this.views[i]._redrawNeeded = true;
			this._redrawNotified = true;
		}
	},

	statics: {
		_scopes: {},
		_id: 0,

		get: function(id) {
			if (typeof id === 'object')
				id = id.getAttribute('id');
			return this._scopes[id] || null;
		},

		each: function(iter) {
			Base.each(this._scopes, iter);
		}
	}
});

var PaperScopeItem = Base.extend({

	initialize: function(activate) {
		this._scope = paper;
		this._index = this._scope[this._list].push(this) - 1;
		if (activate || !this._scope[this._reference])
			this.activate();
	},

	activate: function() {
		if (!this._scope)
			return false;
		this._scope[this._reference] = this;
		return true;
	},

	remove: function() {
		if (this._index == null)
			return false;
		Base.splice(this._scope[this._list], null, this._index, 1);
		if (this._scope[this._reference] == this)
			this._scope[this._reference] = null;
		this._scope = null;
		return true;
	}
});

var Point = this.Point = Base.extend({
	initialize: function(arg0, arg1) {
		if (arg1 !== undefined) {
			this.x = arg0;
			this.y = arg1;
		} else if (arg0 !== undefined) {
			if (arg0 == null) {
				this.x = this.y = 0;
			} else if (arg0.x !== undefined) {
				this.x = arg0.x;
				this.y = arg0.y;
			} else if (arg0.width !== undefined) {
				this.x = arg0.width;
				this.y = arg0.height;
			} else if (Array.isArray(arg0)) {
				this.x = arg0[0];
				this.y = arg0.length > 1 ? arg0[1] : arg0[0];
			} else if (arg0.angle !== undefined) {
				this.x = arg0.length;
				this.y = 0;
				this.setAngle(arg0.angle);
			} else if (typeof arg0 === 'number') {
				this.x = this.y = arg0;
			} else {
				this.x = this.y = 0;
			}
		} else {
			this.x = this.y = 0;
		}
	},

	set: function(x, y) {
		this.x = x;
		this.y = y;
		return this;
	},

	clone: function() {
		return Point.create(this.x, this.y);
	},

	toString: function() {
		var format = Base.formatNumber;
		return '{ x: ' + format(this.x) + ', y: ' + format(this.y) + ' }';
	},

	add: function(point) {
		point = Point.read(arguments);
		return Point.create(this.x + point.x, this.y + point.y);
	},

	subtract: function(point) {
		point = Point.read(arguments);
		return Point.create(this.x - point.x, this.y - point.y);
	},

	multiply: function(point) {
		point = Point.read(arguments);
		return Point.create(this.x * point.x, this.y * point.y);
	},

	divide: function(point) {
		point = Point.read(arguments);
		return Point.create(this.x / point.x, this.y / point.y);
	},

	modulo: function(point) {
		point = Point.read(arguments);
		return Point.create(this.x % point.x, this.y % point.y);
	},

	negate: function() {
		return Point.create(-this.x, -this.y);
	},

	transform: function(matrix) {
		return matrix ? matrix._transformPoint(this) : this;
	},

	getDistance: function(point, squared) {
		point = Point.read(arguments);
		var x = point.x - this.x,
			y = point.y - this.y,
			d = x * x + y * y;
		return squared ? d : Math.sqrt(d);
	},

	getLength: function() {
		var l = this.x * this.x + this.y * this.y;
		return arguments[0] ? l : Math.sqrt(l);
	},

	setLength: function(length) {
		if (this.isZero()) {
			var angle = this._angle || 0;
			this.set(
				Math.cos(angle) * length,
				Math.sin(angle) * length
			);
		} else {
			var scale = length / this.getLength();
			if (scale == 0)
				this.getAngle();
			this.set(
				this.x * scale,
				this.y * scale
			);
		}
		return this;
	},

	normalize: function(length) {
		if (length === undefined)
			length = 1;
		var current = this.getLength(),
			scale = current != 0 ? length / current : 0,
			point = Point.create(this.x * scale, this.y * scale);
		point._angle = this._angle;
		return point;
	},

	getAngle: function() {
		return this.getAngleInRadians(arguments[0]) * 180 / Math.PI;
	},

	setAngle: function(angle) {
		angle = this._angle = angle * Math.PI / 180;
		if (!this.isZero()) {
			var length = this.getLength();
			this.set(
				Math.cos(angle) * length,
				Math.sin(angle) * length
			);
		}
		return this;
	},

	getAngleInRadians: function() {
		if (arguments[0] === undefined) {
			if (this._angle == null)
				this._angle = Math.atan2(this.y, this.x);
			return this._angle;
		} else {
			var point = Point.read(arguments),
				div = this.getLength() * point.getLength();
			if (div == 0) {
				return NaN;
			} else {
				return Math.acos(this.dot(point) / div);
			}
		}
	},

	getAngleInDegrees: function() {
		return this.getAngle(arguments[0]);
	},

	getQuadrant: function() {
		return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3;
	},

	getDirectedAngle: function(point) {
		point = Point.read(arguments);
		return Math.atan2(this.cross(point), this.dot(point)) * 180 / Math.PI;
	},

	rotate: function(angle, center) {
		angle = angle * Math.PI / 180;
		var point = center ? this.subtract(center) : this,
			s = Math.sin(angle),
			c = Math.cos(angle);
		point = Point.create(
			point.x * c - point.y * s,
			point.y * c + point.x * s
		);
		return center ? point.add(center) : point;
	},

	equals: function(point) {
		point = Point.read(arguments);
		return this.x == point.x && this.y == point.y;
	},

	isInside: function(rect) {
		return rect.contains(this);
	},

	isClose: function(point, tolerance) {
		return this.getDistance(point) < tolerance;
	},

	isColinear: function(point) {
		return this.cross(point) < Numerical.TOLERANCE;
	},

	isOrthogonal: function(point) {
		return this.dot(point) < Numerical.TOLERANCE;
	},

	isZero: function() {
		return this.x == 0 && this.y == 0;
	},

	isNaN: function() {
		return isNaN(this.x) || isNaN(this.y);
	},

	dot: function(point) {
		point = Point.read(arguments);
		return this.x * point.x + this.y * point.y;
	},

	cross: function(point) {
		point = Point.read(arguments);
		return this.x * point.y - this.y * point.x;
	},

	project: function(point) {
		point = Point.read(arguments);
		if (point.isZero()) {
			return Point.create(0, 0);
		} else {
			var scale = this.dot(point) / point.dot(point);
			return Point.create(
				point.x * scale,
				point.y * scale
			);
		}
	},

	statics: {
		create: function(x, y) {
			var point = new Point(Point.dont);
			point.x = x;
			point.y = y;
			return point;
		},

		min: function(point1, point2) {
			point1 = Point.read(arguments, 0, 1);
			point2 = Point.read(arguments, 1, 1);
			return Point.create(
				Math.min(point1.x, point2.x),
				Math.min(point1.y, point2.y)
			);
		},

		max: function(point1, point2) {
			point1 = Point.read(arguments, 0, 1);
			point2 = Point.read(arguments, 1, 1);
			return Point.create(
				Math.max(point1.x, point2.x),
				Math.max(point1.y, point2.y)
			);
		},

		random: function() {
			return Point.create(Math.random(), Math.random());
		}
	}
}, new function() { 

	return Base.each(['round', 'ceil', 'floor', 'abs'], function(name) {
		var op = Math[name];
		this[name] = function() {
			return Point.create(op(this.x), op(this.y));
		};
	}, {});
});

var LinkedPoint = Point.extend({
	set: function(x, y, dontNotify) {
		this._x = x;
		this._y = y;
		if (!dontNotify)
			this._owner[this._setter](this);
		return this;
	},

	getX: function() {
		return this._x;
	},

	setX: function(x) {
		this._x = x;
		this._owner[this._setter](this);
	},

	getY: function() {
		return this._y;
	},

	setY: function(y) {
		this._y = y;
		this._owner[this._setter](this);
	},

	statics: {
		create: function(owner, setter, x, y, dontLink) {
			if (dontLink)
				return Point.create(x, y);
			var point = new LinkedPoint(LinkedPoint.dont);
			point._x = x;
			point._y = y;
			point._owner = owner;
			point._setter = setter;
			return point;
		}
	}
});

var Size = this.Size = Base.extend({
	initialize: function(arg0, arg1) {
		if (arg1 !== undefined) {
			this.width = arg0;
			this.height = arg1;
		} else if (arg0 !== undefined) {
			if (arg0 == null) {
				this.width = this.height = 0;
			} else if (arg0.width !== undefined) {
				this.width = arg0.width;
				this.height = arg0.height;
			} else if (arg0.x !== undefined) {
				this.width = arg0.x;
				this.height = arg0.y;
			} else if (Array.isArray(arg0)) {
				this.width = arg0[0];
				this.height = arg0.length > 1 ? arg0[1] : arg0[0];
			} else if (typeof arg0 === 'number') {
				this.width = this.height = arg0;
			} else {
				this.width = this.height = 0;
			}
		} else {
			this.width = this.height = 0;
		}
	},

	toString: function() {
		var format = Base.formatNumber;
		return '{ width: ' + format(this.width)
				+ ', height: ' + format(this.height) + ' }';
	},

	set: function(width, height) {
		this.width = width;
		this.height = height;
		return this;
	},

	clone: function() {
		return Size.create(this.width, this.height);
	},

	add: function(size) {
		size = Size.read(arguments);
		return Size.create(this.width + size.width, this.height + size.height);
	},

	subtract: function(size) {
		size = Size.read(arguments);
		return Size.create(this.width - size.width, this.height - size.height);
	},

	multiply: function(size) {
		size = Size.read(arguments);
		return Size.create(this.width * size.width, this.height * size.height);
	},

	divide: function(size) {
		size = Size.read(arguments);
		return Size.create(this.width / size.width, this.height / size.height);
	},

	modulo: function(size) {
		size = Size.read(arguments);
		return Size.create(this.width % size.width, this.height % size.height);
	},

	negate: function() {
		return Size.create(-this.width, -this.height);
	},

	equals: function(size) {
		size = Size.read(arguments);
		return this.width == size.width && this.height == size.height;
	},

	isZero: function() {
		return this.width == 0 && this.height == 0;
	},

	isNaN: function() {
		return isNaN(this.width) || isNaN(this.height);
	},

	statics: {
		create: function(width, height) {
			return new Size(Size.dont).set(width, height);
		},

		min: function(size1, size2) {
			return Size.create(
				Math.min(size1.width, size2.width),
				Math.min(size1.height, size2.height));
		},

		max: function(size1, size2) {
			return Size.create(
				Math.max(size1.width, size2.width),
				Math.max(size1.height, size2.height));
		},

		random: function() {
			return Size.create(Math.random(), Math.random());
		}
	}
}, new function() { 

	return Base.each(['round', 'ceil', 'floor', 'abs'], function(name) {
		var op = Math[name];
		this[name] = function() {
			return Size.create(op(this.width), op(this.height));
		};
	}, {});
});

var LinkedSize = Size.extend({
	set: function(width, height, dontNotify) {
		this._width = width;
		this._height = height;
		if (!dontNotify)
			this._owner[this._setter](this);
		return this;
	},

	getWidth: function() {
		return this._width;
	},

	setWidth: function(width) {
		this._width = width;
		this._owner[this._setter](this);
	},

	getHeight: function() {
		return this._height;
	},

	setHeight: function(height) {
		this._height = height;
		this._owner[this._setter](this);
	},

	statics: {
		create: function(owner, setter, width, height, dontLink) {
			if (dontLink)
				return Size.create(width, height);
			var size = new LinkedSize(LinkedSize.dont);
			size._width = width;
			size._height = height;
			size._owner = owner;
			size._setter = setter;
			return size;
		}
	}
});

var Rectangle = this.Rectangle = Base.extend({
	initialize: function(arg0, arg1, arg2, arg3) {
		if (arguments.length == 4) {
			this.x = arg0;
			this.y = arg1;
			this.width = arg2;
			this.height = arg3;
		} else if (arguments.length == 2) {
			if (arg1 && arg1.x !== undefined) {
				var point1 = Point.read(arguments, 0, 1);
				var point2 = Point.read(arguments, 1, 1);
				this.x = point1.x;
				this.y = point1.y;
				this.width = point2.x - point1.x;
				this.height = point2.y - point1.y;
				if (this.width < 0) {
					this.x = point2.x;
					this.width = -this.width;
				}
				if (this.height < 0) {
					this.y = point2.y;
					this.height = -this.height;
				}
			} else {
				var point = Point.read(arguments, 0, 1);
				var size = Size.read(arguments, 1, 1);
				this.x = point.x;
				this.y = point.y;
				this.width = size.width;
				this.height = size.height;
			}
		} else if (arg0) {
			this.x = arg0.x || 0;
			this.y = arg0.y || 0;
			this.width = arg0.width || 0;
			this.height = arg0.height || 0;
		} else {
			this.x = this.y = this.width = this.height = 0;
		}
	},

	set: function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		return this;
	},

	getPoint: function() {
		return LinkedPoint.create(this, 'setPoint', this.x, this.y,
				arguments[0]);
	},

	setPoint: function(point) {
		point = Point.read(arguments);
		this.x = point.x;
		this.y = point.y;
		return this;
	},

	getSize: function() {
		return LinkedSize.create(this, 'setSize', this.width, this.height,
				arguments[0]);
	},

	setSize: function(size) {
		size = Size.read(arguments);
		this.width = size.width;
		this.height = size.height;
		return this;
	},

	getLeft: function() {
		return this.x;
	},

	setLeft: function(left) {
		this.width -= left - this.x;
		this.x = left;
		return this;
	},

	getTop: function() {
		return this.y;
	},

	setTop: function(top) {
		this.height -= top - this.y;
		this.y = top;
		return this;
	},

	getRight: function() {
		return this.x + this.width;
	},

	setRight: function(right) {
		this.width = right - this.x;
		return this;
	},

	getBottom: function() {
		return this.y + this.height;
	},

	setBottom: function(bottom) {
		this.height = bottom - this.y;
		return this;
	},

	getCenterX: function() {
		return this.x + this.width * 0.5;
	},

	setCenterX: function(x) {
		this.x = x - this.width * 0.5;
		return this;
	},

	getCenterY: function() {
		return this.y + this.height * 0.5;
	},

	setCenterY: function(y) {
		this.y = y - this.height * 0.5;
		return this;
	},

	getCenter: function() {
		return LinkedPoint.create(this, 'setCenter',
				this.getCenterX(), this.getCenterY(), arguments[0]);
	},

	setCenter: function(point) {
		point = Point.read(arguments);
		return this.setCenterX(point.x).setCenterY(point.y);
	},

	equals: function(rect) {
		rect = Rectangle.read(arguments);
		return this.x == rect.x && this.y == rect.y
				&& this.width == rect.width && this.height == rect.height;
	},

	isEmpty: function() {
		return this.width == 0 || this.height == 0;
	},

	toString: function() {
		var format = Base.formatNumber;
		return '{ x: ' + format(this.x)
				+ ', y: ' + format(this.y)
				+ ', width: ' + format(this.width)
				+ ', height: ' + format(this.height)
				+ ' }';
	},

	contains: function(arg) {
		return arg && arg.width !== undefined
				|| (Array.isArray(arg) ? arg : arguments).length == 4
				? this._containsRectangle(Rectangle.read(arguments))
				: this._containsPoint(Point.read(arguments));
	},

	_containsPoint: function(point) {
		var x = point.x,
			y = point.y;
		return x >= this.x && y >= this.y
				&& x <= this.x + this.width
				&& y <= this.y + this.height;
	},

	_containsRectangle: function(rect) {
		var x = rect.x,
			y = rect.y;
		return x >= this.x && y >= this.y
				&& x + rect.width <= this.x + this.width
				&& y + rect.height <= this.y + this.height;
	},

	intersects: function(rect) {
		rect = Rectangle.read(arguments);
		return rect.x + rect.width > this.x
				&& rect.y + rect.height > this.y
				&& rect.x < this.x + this.width
				&& rect.y < this.y + this.height;
	},

	intersect: function(rect) {
		rect = Rectangle.read(arguments);
		var x1 = Math.max(this.x, rect.x),
			y1 = Math.max(this.y, rect.y),
			x2 = Math.min(this.x + this.width, rect.x + rect.width),
			y2 = Math.min(this.y + this.height, rect.y + rect.height);
		return Rectangle.create(x1, y1, x2 - x1, y2 - y1);
	},

	unite: function(rect) {
		rect = Rectangle.read(arguments);
		var x1 = Math.min(this.x, rect.x),
			y1 = Math.min(this.y, rect.y),
			x2 = Math.max(this.x + this.width, rect.x + rect.width),
			y2 = Math.max(this.y + this.height, rect.y + rect.height);
		return Rectangle.create(x1, y1, x2 - x1, y2 - y1);
	},

	include: function(point) {
		point = Point.read(arguments);
		var x1 = Math.min(this.x, point.x),
			y1 = Math.min(this.y, point.y),
			x2 = Math.max(this.x + this.width, point.x),
			y2 = Math.max(this.y + this.height, point.y);
		return Rectangle.create(x1, y1, x2 - x1, y2 - y1);
	},

	expand: function(hor, ver) {
		if (ver === undefined)
			ver = hor;
		return Rectangle.create(this.x - hor / 2, this.y - ver / 2,
				this.width + hor, this.height + ver);
	},

	scale: function(hor, ver) {
		return this.expand(this.width * hor - this.width,
				this.height * (ver === undefined ? hor : ver) - this.height);
	},

	statics: {
		create: function(x, y, width, height) {
			return new Rectangle(Rectangle.dont).set(x, y, width, height);
		}
	}
}, new function() {
	return Base.each([
			['Top', 'Left'], ['Top', 'Right'],
			['Bottom', 'Left'], ['Bottom', 'Right'],
			['Left', 'Center'], ['Top', 'Center'],
			['Right', 'Center'], ['Bottom', 'Center']
		],
		function(parts, index) {
			var part = parts.join('');
			var xFirst = /^[RL]/.test(part);
			if (index >= 4)
				parts[1] += xFirst ? 'Y' : 'X';
			var x = parts[xFirst ? 0 : 1],
				y = parts[xFirst ? 1 : 0],
				getX = 'get' + x,
				getY = 'get' + y,
				setX = 'set' + x,
				setY = 'set' + y,
				get = 'get' + part,
				set = 'set' + part;
			this[get] = function() {
				return LinkedPoint.create(this, set,
						this[getX](), this[getY](), arguments[0]);
			};
			this[set] = function(point) {
				point = Point.read(arguments);
				return this[setX](point.x)[setY](point.y);
			};
		}, {});
});

var LinkedRectangle = Rectangle.extend({
	set: function(x, y, width, height, dontNotify) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		if (!dontNotify)
			this._owner[this._setter](this);
		return this;
	},

	statics: {
		create: function(owner, setter, x, y, width, height) {
			var rect = new LinkedRectangle(LinkedRectangle.dont).set(
					x, y, width, height, true);
			rect._owner = owner;
			rect._setter = setter;
			return rect;
		}
	}
}, new function() {
	var proto = Rectangle.prototype;

	return Base.each(['x', 'y', 'width', 'height'], function(key) {
		var part = Base.capitalize(key);
		var internal = '_' + key;
		this['get' + part] = function() {
			return this[internal];
		};

		this['set' + part] = function(value) {
			this[internal] = value;
			if (!this._dontNotify)
				this._owner[this._setter](this);
		};
	}, Base.each(['Point', 'Size', 'Center',
			'Left', 'Top', 'Right', 'Bottom', 'CenterX', 'CenterY',
			'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
			'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'],
		function(key) {
			var name = 'set' + key;
			this[name] = function(value) {
				this._dontNotify = true;
				proto[name].apply(this, arguments);
				delete this._dontNotify;
				this._owner[this._setter](this);
				return this;
			};
		}, {})
	);
});

var Matrix = this.Matrix = Base.extend({
	initialize: function(arg) {
		var count = arguments.length,
			ok = true;
		if (count == 6) {
			this.set.apply(this, arguments);
		} else if (count == 1) {
			if (arg instanceof Matrix) {
				this.set(arg._a, arg._c, arg._b, arg._d, arg._tx, arg._ty);
			} else if (Array.isArray(arg)) {
				this.set.apply(this, arg);
			} else {
				ok = false;
			}
		} else if (count == 0) {
			this._a = this._d = 1;
			this._c = this._b = this._tx = this._ty = 0;
		} else {
			ok = false;
		}
		if (!ok)
			throw new Error('Unsupported matrix parameters');
	},

	clone: function() {
		return Matrix.create(this._a, this._c, this._b, this._d,
				this._tx, this._ty);
	},

	set: function(a, c, b, d, tx, ty) {
		this._a = a;
		this._c = c;
		this._b = b;
		this._d = d;
		this._tx = tx;
		this._ty = ty;
		return this;
	},

	scale: function( hor, ver, center) {
		if (arguments.length < 2 || typeof ver === 'object') {
			center = Point.read(arguments, 1);
			ver = hor;
		} else {
			center = Point.read(arguments, 2);
		}
		if (center)
			this.translate(center);
		this._a *= hor;
		this._c *= hor;
		this._b *= ver;
		this._d *= ver;
		if (center)
			this.translate(center.negate());
		return this;
	},

	translate: function(point) {
		point = Point.read(arguments);
		var x = point.x, y = point.y;
		this._tx += x * this._a + y * this._b;
		this._ty += x * this._c + y * this._d;
		return this;
	},

	rotate: function(angle, center) {
		return this.concatenate(
				Matrix.getRotateInstance.apply(Matrix, arguments));
	},

	shear: function( hor, ver, center) {
		if (arguments.length < 2 || typeof ver === 'object') {
			center = Point.read(arguments, 1);
			ver = hor;
		} else {
			center = Point.read(arguments, 2);
		}
		if (center)
			this.translate(center);
		var a = this._a,
			c = this._c;
		this._a += ver * this._b;
		this._c += ver * this._d;
		this._b += hor * a;
		this._d += hor * c;
		if (center)
			this.translate(center.negate());
		return this;
	},

	toString: function() {
		var format = Base.formatNumber;
		return '[[' + [format(this._a), format(this._b),
					format(this._tx)].join(', ') + '], ['
				+ [format(this._c), format(this._d),
					format(this._ty)].join(', ') + ']]';
	},

	getValues: function() {
		return [ this._a, this._c, this._b, this._d, this._tx, this._ty ];
	},

	concatenate: function(mx) {
		var a = this._a,
			b = this._b,
			c = this._c,
			d = this._d;
		this._a = mx._a * a + mx._c * b;
		this._b = mx._b * a + mx._d * b;
		this._tx += mx._tx * a + mx._ty * b;
		this._c = mx._a * c + mx._c * d;
		this._d = mx._b * c + mx._d * d;
		this._ty += mx._tx * c + mx._ty * d;
		return this;
	},

	preConcatenate: function(mx) {
		var a = this._a,
			b = this._b,
			c = this._c,
			d = this._d,
			tx = this._tx,
			ty = this._ty;
		this._a = mx._a * a + mx._b * c;
		this._c = mx._c * a + mx._d * c;
		this._b = mx._a * b + mx._b * d;
		this._d = mx._c * b + mx._d * d;
		this._tx = mx._a * tx + mx._b * ty + mx._tx;
		this._ty = mx._c * tx + mx._d * ty + mx._ty;
		return this;
	},

	transform: function( src, srcOff, dst, dstOff, numPts) {
		return arguments.length < 5
			? this._transformPoint(Point.read(arguments))
			: this._transformCoordinates(src, srcOff, dst, dstOff, numPts);
	},

	_transformPoint: function(point, dest, dontNotify) {
		var x = point.x,
			y = point.y;
		if (!dest)
			dest = new Point(Point.dont);
		return dest.set(
			x * this._a + y * this._b + this._tx,
			x * this._c + y * this._d + this._ty,
			dontNotify
		);
	},

	_transformCoordinates: function(src, srcOff, dst, dstOff, numPts) {
		var i = srcOff, j = dstOff,
			srcEnd = srcOff + 2 * numPts;
		while (i < srcEnd) {
			var x = src[i++];
			var y = src[i++];
			dst[j++] = x * this._a + y * this._b + this._tx;
			dst[j++] = x * this._c + y * this._d + this._ty;
		}
		return dst;
	},

	_transformCorners: function(rect) {
		var x1 = rect.x,
			y1 = rect.y,
			x2 = x1 + rect.width,
			y2 = y1 + rect.height,
			coords = [ x1, y1, x2, y1, x2, y2, x1, y2 ];
		return this._transformCoordinates(coords, 0, coords, 0, 4);
	},

	_transformBounds: function(bounds) {
		var coords = this._transformCorners(bounds),
			min = coords.slice(0, 2),
			max = coords.slice(0);
		for (var i = 2; i < 8; i++) {
			var val = coords[i],
				j = i & 1;
			if (val < min[j])
				min[j] = val;
			else if (val > max[j])
				max[j] = val;
		}
		return Rectangle.create(min[0], min[1],
				max[0] - min[0], max[1] - min[1]);
	},

	inverseTransform: function(point) {
		return this._inverseTransform(Point.read(arguments));
	},

	_getDeterminant: function() {
		var det = this._a * this._d - this._b * this._c;
		return isFinite(det) && Math.abs(det) > Numerical.EPSILON
				&& isFinite(this._tx) && isFinite(this._ty)
				? det : null;
	},

	_inverseTransform: function(point, dest, dontNotify) {
		var det = this._getDeterminant();
		if (!det)
			return null;
		var x = point.x - this._tx,
			y = point.y - this._ty;
		if (!dest)
			dest = new Point(Point.dont);
		return dest.set(
			(x * this._d - y * this._b) / det,
			(y * this._a - x * this._c) / det,
			dontNotify
		);
	},

	getTranslation: function() {
		return new Point(this._tx, this._ty);
	},

	getScaling: function() {
		var hor = Math.sqrt(this._a * this._a + this._c * this._c),
			ver = Math.sqrt(this._b * this._b + this._d * this._d);
		return new Point(this._a < 0 ? -hor : hor, this._b < 0 ? -ver : ver);
	},

	getRotation: function() {
		var angle1 = -Math.atan2(this._b, this._d),
			angle2 = Math.atan2(this._c, this._a);
		return Math.abs(angle1 - angle2) < Numerical.TOLERANCE
				? angle1 * 180 / Math.PI : undefined;
	},

	isIdentity: function() {
		return this._a == 1 && this._c == 0 && this._b == 0 && this._d == 1
				&& this._tx == 0 && this._ty == 0;
	},

	isInvertible: function() {
		return !!this._getDeterminant();
	},

	isSingular: function() {
		return !this._getDeterminant();
	},

	createInverse: function() {
		var det = this._getDeterminant();
		return det && Matrix.create(
				this._d / det,
				-this._c / det,
				-this._b / det,
				this._a / det,
				(this._b * this._ty - this._d * this._tx) / det,
				(this._c * this._tx - this._a * this._ty) / det);
	},

	createShiftless: function() {
		return Matrix.create(this._a, this._c, this._b, this._d, 0, 0);
	},

	setToScale: function(hor, ver) {
		return this.set(hor, 0, 0, ver, 0, 0);
	},

	setToTranslation: function(delta) {
		delta = Point.read(arguments);
		return this.set(1, 0, 0, 1, delta.x, delta.y);
	},

	setToShear: function(hor, ver) {
		return this.set(1, ver, hor, 1, 0, 0);
	},

	setToRotation: function(angle, center) {
		center = Point.read(arguments, 1);
		angle = angle * Math.PI / 180;
		var x = center.x,
			y = center.y,
			cos = Math.cos(angle),
			sin = Math.sin(angle);
		return this.set(cos, sin, -sin, cos,
				x - x * cos + y * sin,
				y - x * sin - y * cos);
	},

	applyToContext: function(ctx, reset) {
		ctx[reset ? 'setTransform' : 'transform'](
				this._a, this._c, this._b, this._d, this._tx, this._ty);
		return this;
	},

	statics: {
		create: function(a, c, b, d, tx, ty) {
			return new Matrix(Matrix.dont).set(a, c, b, d, tx, ty);
		},

		getScaleInstance: function(hor, ver) {
			var mx = new Matrix();
			return mx.setToScale.apply(mx, arguments);
		},

		getTranslateInstance: function(delta) {
			var mx = new Matrix();
			return mx.setToTranslation.apply(mx, arguments);
		},

		getShearInstance: function(hor, ver, center) {
			var mx = new Matrix();
			return mx.setToShear.apply(mx, arguments);
		},

		getRotateInstance: function(angle, center) {
			var mx = new Matrix();
			return mx.setToRotation.apply(mx, arguments);
		}
	}
}, new function() {
	return Base.each({
		scaleX: '_a',
		scaleY: '_d',
		translateX: '_tx',
		translateY: '_ty',
		shearX: '_b',
		shearY: '_c'
	}, function(prop, name) {
		name = Base.capitalize(name);
		this['get' + name] = function() {
			return this[prop];
		};
		this['set' + name] = function(value) {
			this[prop] = value;
		};
	}, {});
});

var Line = this.Line = Base.extend({
	initialize: function(point1, point2, infinite) {
		point1 = Point.read(arguments, 0, 1);
		point2 = Point.read(arguments, 1, 1);
		if (arguments.length == 3) {
			this.point = point1;
			this.vector = point2.subtract(point1);
			this.infinite = infinite;
		} else {
			this.point = point1;
			this.vector = point2;
			this.infinite = true;
		}
	},

	intersect: function(line) {
		var cross = this.vector.cross(line.vector);
		if (Math.abs(cross) <= Numerical.EPSILON)
			return null;
		var v = line.point.subtract(this.point),
			t1 = v.cross(line.vector) / cross,
			t2 = v.cross(this.vector) / cross;
		return (this.infinite || 0 <= t1 && t1 <= 1)
				&& (line.infinite || 0 <= t2 && t2 <= 1)
			? this.point.add(this.vector.multiply(t1)) : null;
	},

	getSide: function(point) {
		var v1 = this.vector,
			v2 = point.subtract(this.point),
			ccw = v2.cross(v1);
		if (ccw == 0) {
			ccw = v2.dot(v1);
			if (ccw > 0) {
				ccw = v2.subtract(v1).dot(v1);
				if (ccw < 0)
				    ccw = 0;
			}
		}
		return ccw < 0 ? -1 : ccw > 0 ? 1 : 0;
	},

	getDistance: function(point) {
		var m = this.vector.y / this.vector.x, 
			b = this.point.y - (m * this.point.x); 
		var dist = Math.abs(point.y - (m * point.x) - b) / Math.sqrt(m * m + 1);
		return this.infinite ? dist : Math.min(dist,
				point.getDistance(this.point),
				point.getDistance(this.point.add(this.vector)));
	}
});

var Project = this.Project = PaperScopeItem.extend({
	_list: 'projects',
	_reference: 'project',

	initialize: function() {
		this.base(true);
		this._currentStyle = new PathStyle();
		this._selectedItems = {};
		this._selectedItemCount = 0;
		this.layers = [];
		this.symbols = [];
		this.activeLayer = new Layer();
	},

	_needsRedraw: function() {
		if (this._scope)
			this._scope._needsRedraw();
	},

	getCurrentStyle: function() {
		return this._currentStyle;
	},

	setCurrentStyle: function(style) {
		this._currentStyle.initialize(style);
	},

	getIndex: function() {
		return this._index;
	},

	getSelectedItems: function() {
		var items = [];
		Base.each(this._selectedItems, function(item) {
			items.push(item);
		});
		return items;
	},

	_updateSelection: function(item) {
		if (item._selected) {
			this._selectedItemCount++;
			this._selectedItems[item.getId()] = item;
		} else {
			this._selectedItemCount--;
			delete this._selectedItems[item.getId()];
		}
	},

	selectAll: function() {
		for (var i = 0, l = this.layers.length; i < l; i++)
			this.layers[i].setSelected(true);
	},

	deselectAll: function() {
		for (var i in this._selectedItems)
			this._selectedItems[i].setSelected(false);
	},

	hitTest: function(point, options) {
		options = HitResult.getOptions(point, options);
		point = options.point;
		for (var i = this.layers.length - 1; i >= 0; i--) {
			var res = this.layers[i].hitTest(point, options);
			if (res) return res;
		}
		return null;
	},

	draw: function(ctx) {
		ctx.save();
		var param = { offset: new Point(0, 0) };
		for (var i = 0, l = this.layers.length; i < l; i++)
			Item.draw(this.layers[i], ctx, param);
		ctx.restore();

		if (this._selectedItemCount > 0) {
			ctx.save();
			ctx.strokeWidth = 1;
			ctx.strokeStyle = ctx.fillStyle = '#009dec';
			param = { selection: true };
			Base.each(this._selectedItems, function(item) {
				item.draw(ctx, param);
			});
			ctx.restore();
		}
	}
});

var Symbol = this.Symbol = Base.extend({
	initialize: function(item) {
		this.project = paper.project;
		this.project.symbols.push(this);
		this.setDefinition(item);
		this._instances = {};
	},

	_changed: function(flags) {
		Base.each(this._instances, function(item) {
			item._changed(flags);
		});
	},

	getDefinition: function() {
		return this._definition;
	},

	setDefinition: function(item) {
		if (item._parentSymbol)
			item = item.clone();
		if (this._definition)
			delete this._definition._parentSymbol;
		this._definition = item;
		item.remove();
		item.setPosition(new Point());
		item._parentSymbol = this;
		this._changed(Change.GEOMETRY);
	},

	place: function(position) {
		return new PlacedSymbol(this, position);
	},

	clone: function() {
	 	return new Symbol(this._definition.clone());
	}
});

var ChangeFlag = {
	APPEARANCE: 1,
	HIERARCHY: 2,
	GEOMETRY: 4,
	STROKE: 8,
	STYLE: 16,
	ATTRIBUTE: 32,
	CONTENT: 64,
	PIXELS: 128,
	CLIPPING: 256
};

var Change = {
	HIERARCHY: ChangeFlag.HIERARCHY | ChangeFlag.APPEARANCE,
	GEOMETRY: ChangeFlag.GEOMETRY | ChangeFlag.APPEARANCE,
	STROKE: ChangeFlag.STROKE | ChangeFlag.STYLE | ChangeFlag.APPEARANCE,
	STYLE: ChangeFlag.STYLE | ChangeFlag.APPEARANCE,
	ATTRIBUTE: ChangeFlag.ATTRIBUTE | ChangeFlag.APPEARANCE,
	CONTENT: ChangeFlag.CONTENT | ChangeFlag.APPEARANCE,
	PIXELS: ChangeFlag.PIXELS | ChangeFlag.APPEARANCE
};

var Item = this.Item = Base.extend({
	initialize: function() {
		this._id = ++Item._id;
		if (!this._project)
			paper.project.activeLayer.addChild(this);
		this._style = PathStyle.create(this);
		this.setStyle(this._project.getCurrentStyle());
	},

	_changed: function(flags) {
		if (flags & ChangeFlag.GEOMETRY) {
			delete this._bounds;
			delete this._position;
			delete this._strokeBounds;
			delete this._handleBounds;
			delete this._roughBounds;
		}
		if (flags & ChangeFlag.APPEARANCE) {
			this._project._needsRedraw();
		}
		if (this._parentSymbol)
			this._parentSymbol._changed(flags);
		if (this._project._changes) {
			var entry = this._project._changesById[this._id];
			if (entry) {
				entry.flags |= flags;
			} else {
				entry = { item: this, flags: flags };
				this._project._changesById[this._id] = entry;
				this._project._changes.push(entry);
			}
		}
	},

	getId: function() {
		return this._id;
	},

	getName: function() {
		return this._name;
	},

	setName: function(name) {

		if (this._name)
			this._removeFromNamed();
		this._name = name || undefined;
		if (name) {
			var children = this._parent._children,
				namedChildren = this._parent._namedChildren;
			(namedChildren[name] = namedChildren[name] || []).push(this);
			children[name] = this;
		}
		this._changed(ChangeFlag.ATTRIBUTE);
	},

	getPosition: function() {
		var pos = this._position
				|| (this._position = this.getBounds().getCenter());
		return LinkedPoint.create(this, 'setPosition', pos._x, pos._y);
	},

	setPosition: function(point) {
		this.translate(Point.read(arguments).subtract(this.getPosition()));
	},

	getStyle: function() {
		return this._style;
	},

	setStyle: function(style) {
		this._style.initialize(style);
	},

	statics: {
		_id: 0
	}
}, new function() { 
	return Base.each(['locked', 'visible', 'blendMode', 'opacity', 'guide'],
		function(name) {
			var part = Base.capitalize(name),
				name = '_' + name;
			this['get' + part] = function() {
				return this[name];
			};
			this['set' + part] = function(value) {
				if (value != this[name]) {
					this[name] = value;
					this._changed(name === '_locked'
							? ChangeFlag.ATTRIBUTE : Change.ATTRIBUTE);
				}
			};
		}, {});
}, {

	_locked: false,

	_visible: true,

	_blendMode: 'normal',

	_opacity: 1,

	_guide: false,

	isSelected: function() {
		if (this._children) {
			for (var i = 0, l = this._children.length; i < l; i++)
				if (this._children[i].isSelected())
					return true;
		}
		return this._selected;
	},

	setSelected: function(selected) {
		if (this._children) {
			for (var i = 0, l = this._children.length; i < l; i++) {
				this._children[i].setSelected(selected);
			}
		} else if ((selected = !!selected) != this._selected) {
			this._selected = selected;
			this._project._updateSelection(this);
			this._changed(Change.ATTRIBUTE);
		}
	},

	_selected: false,

	isFullySelected: function() {
		if (this._children && this._selected) {
			for (var i = 0, l = this._children.length; i < l; i++)
				if (!this._children[i].isFullySelected())
					return false;
			return true;
		}
		return this._selected;
	},

	setFullySelected: function(selected) {
		if (this._children) {
			for (var i = 0, l = this._children.length; i < l; i++) {
				this._children[i].setFullySelected(selected);
			}
		}
		this.setSelected(selected);
	},

	isClipMask: function() {
		return this._clipMask;
	},

	setClipMask: function(clipMask) {
		if (this._clipMask != (clipMask = !!clipMask)) {
			this._clipMask = clipMask;
			if (clipMask) {
				this.setFillColor(null);
				this.setStrokeColor(null);
			}
			this._changed(Change.ATTRIBUTE);
			if (this._parent)
				this._parent._changed(ChangeFlag.CLIPPING);
		}
	},

	_clipMask: false,

	getProject: function() {
		return this._project;
	},

	_setProject: function(project) {
		if (this._project != project) {
			this._project = project;
			if (this._children) {
				for (var i = 0, l = this._children.length; i < l; i++) {
					this._children[i]._setProject(project);
				}
			}
		}
	},

	getLayer: function() {
		var parent = this;
		while (parent = parent._parent) {
			if (parent instanceof Layer)
				return parent;
		}
		return null;
	},

	getParent: function() {
		return this._parent;
	},

	getChildren: function() {
		return this._children;
	},

	setChildren: function(items) {
		this.removeChildren();
		this.addChildren(items);
	},

	getFirstChild: function() {
		return this._children && this._children[0] || null;
	},

	getLastChild: function() {
		return this._children && this._children[this._children.length - 1]
				|| null;
	},

	getNextSibling: function() {
		return this._parent && this._parent._children[this._index + 1] || null;
	},

	getPreviousSibling: function() {
		return this._parent && this._parent._children[this._index - 1] || null;
	},

	getIndex: function() {
		return this._index;
	},

	clone: function() {
		return this._clone(new this.constructor());
	},

	_clone: function(copy) {
		copy.setStyle(this._style);
		if (this._children) {
			for (var i = 0, l = this._children.length; i < l; i++)
				copy.addChild(this._children[i].clone());
		}
		var keys = ['_locked', '_visible', '_blendMode', '_opacity',
				'_clipMask', '_guide'];
		for (var i = 0, l = keys.length; i < l; i++) {
			var key = keys[i];
			if (this.hasOwnProperty(key))
				copy[key] = this[key];
		}
		copy.setSelected(this._selected);
		if (this._name)
			copy.setName(this._name);
		return copy;
	},

	copyTo: function(itemOrProject) {
		var copy = this.clone();
		if (itemOrProject.layers) {
			itemOrProject.activeLayer.addChild(copy);
		} else {
			itemOrProject.addChild(copy);
		}
		return copy;
	},

	rasterize: function(resolution) {
		var bounds = this.getStrokeBounds(),
			scale = (resolution || 72) / 72,
			canvas = CanvasProvider.getCanvas(bounds.getSize().multiply(scale)),
			ctx = canvas.getContext('2d'),
			matrix = new Matrix().scale(scale).translate(-bounds.x, -bounds.y);
		matrix.applyToContext(ctx);
		this.draw(ctx, {});
		var raster = new Raster(canvas);
		raster.setBounds(bounds);
		return raster;
	},

	hitTest: function(point, options, matrix) {
		options = HitResult.getOptions(point, options);
		point = options.point;
		if (!this._children && !this.getRoughBounds(matrix)
				.expand(options.tolerance)._containsPoint(point))
			return null;
		if ((options.center || options.bounds) &&
				!(this instanceof Layer && !this._parent)) {
			var bounds = this.getBounds(),
				that = this,
				points = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
				'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'],
				res;
			function checkBounds(type, part) {
				var pt = bounds['get' + part]().transform(matrix);
				if (point.getDistance(pt) < options.tolerance)
					return new HitResult(type, that,
							{ name: Base.hyphenate(part), point: pt });
			}
			if (options.center && (res = checkBounds('center', 'Center')))
				return res;
			if (options.bounds) {
				for (var i = 0; i < 8; i++)
					if (res = checkBounds('bounds', points[i]))
						return res;
			}
		}

		return this._children || !(options.guides && !this._guide
				|| options.selected && !this._selected)
					? this._hitTest(point, options, matrix) : null;
	},

	_hitTest: function(point, options, matrix) {
		if (this._children) {
			for (var i = this._children.length - 1; i >= 0; i--) {
				var res = this._children[i].hitTest(point, options, matrix);
				if (res) return res;
			}
		}
	},

	addChild: function(item) {
		return this.insertChild(undefined, item);
	},

	insertChild: function(index, item) {
		if (this._children) {
			item._remove(false, true);
			Base.splice(this._children, [item], index, 0);
			item._parent = this;
			item._setProject(this._project);
			if (item._name)
				item.setName(item._name);
			this._changed(Change.HIERARCHY);
			return true;
		}
		return false;
	},

	addChildren: function(items) {
		for (var i = 0, l = items && items.length; i < l; i++)
			this.insertChild(undefined, items[i]);
	},

	insertChildren: function(index, items) {
		for (var i = 0, l = items && items.length; i < l; i++) {
			if (this.insertChild(index, items[i]))
				index++;
		}
	},

	insertAbove: function(item) {
		return item._parent && item._parent.insertChild(
				item._index + 1, this);
	},

	insertBelow: function(item) {
		return item._parent && item._parent.insertChild(
				item._index - 1, this);
	},

	appendTop: function(item) {
		return this.addChild(item);
	},

	appendBottom: function(item) {
		return this.insertChild(0, item);
	},

	moveAbove: function(item) {
		return this.insertAbove(item);
	},

	moveBelow: function(item) {
		return this.insertBelow(item);
	},

	_removeFromNamed: function() {
		var children = this._parent._children,
			namedChildren = this._parent._namedChildren,
			name = this._name,
			namedArray = namedChildren[name],
			index = namedArray ? namedArray.indexOf(this) : -1;
		if (index == -1)
			return;
		if (children[name] == this)
			delete children[name];
		namedArray.splice(index, 1);
		if (namedArray.length) {
			children[name] = namedArray[namedArray.length - 1];
		} else {
			delete namedChildren[name];
		}
	},

	_remove: function(deselect, notify) {
		if (this._parent) {
			if (deselect)
				this.setSelected(false);
			if (this._name)
				this._removeFromNamed();
			Base.splice(this._parent._children, null, this._index, 1);
			if (notify)
				this._parent._changed(Change.HIERARCHY);
			this._parent = null;
			return true;
		}
		return false;
	},

	remove: function() {
		return this._remove(true, true);
	},

	removeChildren: function(from, to) {
		if (!this._children)
			return null;
		from = from || 0;
	 	to = Base.pick(to, this._children.length);
		var removed = this._children.splice(from, to - from);
		for (var i = removed.length - 1; i >= 0; i--)
			removed[i]._remove(true, false);
		if (removed.length > 0)
			this._changed(Change.HIERARCHY);
		return removed;
	},

	reverseChildren: function() {
		if (this._children) {
			this._children.reverse();
			for (var i = 0, l = this._children.length; i < l; i++)
				this._children[i]._index = i;
			this._changed(Change.HIERARCHY);
		}
	},

	isEditable: function() {
		var item = this;
		while (item) {
			if (!item._visible || item._locked)
				return false;
			item = item._parent;
		}
		return true;
	},

	_getOrder: function(item) {
		function getList(item) {
			var list = [];
			do {
				list.unshift(item);
			} while (item = item._parent)
			return list;
		}
		var list1 = getList(this),
			list2 = getList(item);
		for (var i = 0, l = Math.min(list1.length, list2.length); i < l; i++) {
			if (list1[i] != list2[i]) {
				return list1[i]._index < list2[i]._index ? 1 : -1;
			}
		}
		return 0;
	},

	hasChildren: function() {
		return this._children && this._children.length > 0;
	},

	isAbove: function(item) {
		return this._getOrder(item) == -1;
	},

	isBelow: function(item) {
		return this._getOrder(item) == 1;
	},

	isParent: function(item) {
		return this._parent == item;
	},

	isChild: function(item) {
		return item && item._parent == this;
	},

	isDescendant: function(item) {
		var parent = this;
		while (parent = parent._parent) {
			if (parent == item)
				return true;
		}
		return false;
	},

	isAncestor: function(item) {
		return item ? item.isDescendant(this) : false;
	},

	isGroupedWith: function(item) {
		var parent = this._parent;
		while (parent) {
			if (parent._parent
				&& (parent instanceof Group || parent instanceof CompoundPath)
				&& item.isDescendant(parent))
					return true;
			parent = parent._parent;
		}
		return false;
	},

	_getBounds: function(getter, cacheName, args) {
		var children = this._children;
		if (!children || children.length == 0)
			return new Rectangle();
		var x1 = Infinity,
			x2 = -x1,
			y1 = x1,
			y2 = x2;
		for (var i = 0, l = children.length; i < l; i++) {
			var child = children[i];
			if (child._visible) {
				var rect = child[getter](args[0]);
				x1 = Math.min(rect.x, x1);
				y1 = Math.min(rect.y, y1);
				x2 = Math.max(rect.x + rect.width, x2);
				y2 = Math.max(rect.y + rect.height, y2);
			}
		}
		var bounds = Rectangle.create(x1, y1, x2 - x1, y2 - y1);
		return getter == 'getBounds' ? this._createBounds(bounds) : bounds;
	},

	_createBounds: function(rect) {
		return LinkedRectangle.create(this, 'setBounds',
				rect.x, rect.y, rect.width, rect.height);
	},

	getBounds: function() {
		return this._getBounds('getBounds', '_bounds', arguments);
	},

	setBounds: function(rect) {
		rect = Rectangle.read(arguments);
		var bounds = this.getBounds(),
			matrix = new Matrix(),
			center = rect.getCenter();
		matrix.translate(center);
		if (rect.width != bounds.width || rect.height != bounds.height) {
			matrix.scale(
					bounds.width != 0 ? rect.width / bounds.width : 1,
					bounds.height != 0 ? rect.height / bounds.height : 1);
		}
		center = bounds.getCenter();
		matrix.translate(-center.x, -center.y);
		this.transform(matrix);
	},

	getStrokeBounds: function() {
		return this._getBounds('getStrokeBounds', '_strokeBounds', arguments);
	},

	getHandleBounds: function() {
		return this._getBounds('getHandleBounds', '_handleBounds', arguments);
	},

	getRoughBounds: function() {
		return this._getBounds('getRoughBounds', '_roughBounds', arguments);
	},

	scale: function(hor, ver , center) {
		if (arguments.length < 2 || typeof ver === 'object') {
			center = ver;
			ver = hor;
		}
		return this.transform(new Matrix().scale(hor, ver,
				center || this.getPosition()));
	},

	translate: function(delta) {
		var mx = new Matrix();
		return this.transform(mx.translate.apply(mx, arguments));
	},

	rotate: function(angle, center) {
		return this.transform(new Matrix().rotate(angle,
				center || this.getPosition()));
	},

	shear: function(hor, ver, center) {
		if (arguments.length < 2 || typeof ver === 'object') {
			center = ver;
			ver = hor;
		}
		return this.transform(new Matrix().shear(hor, ver,
				center || this.getPosition()));
	},

	transform: function(matrix, flags) {
		var bounds = this._bounds,
			position = this._position,
			children = this._children;
		if (this._transform) {
			this._transform(matrix, flags);
			this._changed(Change.GEOMETRY);
		}
		if (bounds && matrix.getRotation() % 90 === 0) {
			this._bounds = this._createBounds(
					matrix._transformBounds(bounds));
			this._position = this._bounds.getCenter();
		} else if (position) {
			this._position = matrix._transformPoint(position, position, true);
		}
		for (var i = 0, l = children && children.length; i < l; i++)
			children[i].transform(matrix, flags);
		return this;
	},

	fitBounds: function(rectangle, fill) {
		rectangle = Rectangle.read(arguments);
		var bounds = this.getBounds(),
			itemRatio = bounds.height / bounds.width,
			rectRatio = rectangle.height / rectangle.width,
			scale = (fill ? itemRatio > rectRatio : itemRatio < rectRatio)
					? rectangle.width / bounds.width
					: rectangle.height / bounds.height,
			delta = rectangle.getCenter().subtract(bounds.getCenter()),
			newBounds = new Rectangle(new Point(),
					new Size(bounds.width * scale, bounds.height * scale));
		newBounds.setCenter(rectangle.getCenter());
		this.setBounds(newBounds);
	},

	toString: function() {
		return (this.constructor._name || 'Item') + (this._name
				? " '" + this._name + "'"
				: ' @' + this._id);
	},

	statics: {
		drawSelectedBounds: function(bounds, ctx, matrix) {
			var coords = matrix._transformCorners(bounds);
			ctx.beginPath();
			for (var i = 0; i < 8; i++)
				ctx[i == 0 ? 'moveTo' : 'lineTo'](coords[i], coords[++i]);
			ctx.closePath();
			ctx.stroke();
			for (var i = 0; i < 8; i++) {
				ctx.beginPath();
				ctx.rect(coords[i] - 2, coords[++i] - 2, 4, 4);
				ctx.fill();
			}
		},

		draw: function(item, ctx, param) {
			if (!item._visible || item._opacity == 0)
				return;

			var tempCanvas, parentCtx, itemOffset;
			if (item._blendMode !== 'normal'
					|| item._opacity < 1
					&& !((item._segments) && (!item.getFillColor()
							|| !item.getStrokeColor()))) {
				var bounds = item.getStrokeBounds() || item.getBounds();

				if (!bounds.width || !bounds.height)
					return;

				var itemOffset = bounds.getTopLeft().floor(),
					size = bounds.getSize().ceil().add(new Size(1, 1));
				tempCanvas = CanvasProvider.getCanvas(size);

				parentCtx = ctx;

				ctx = tempCanvas.getContext('2d');
				ctx.save();

				ctx.translate(-itemOffset.x, -itemOffset.y);
			}
			var savedOffset;
			if (itemOffset) {
				savedOffset = param.offset;
				param.offset = itemOffset;
			}
			item.draw(ctx, param);
			if (itemOffset)
				param.offset = savedOffset;

			if (tempCanvas) {

				ctx.restore();

				if (item._blendMode !== 'normal') {
					var pixelOffset = itemOffset.subtract(param.offset);
					BlendMode.process(item._blendMode, ctx, parentCtx,
						item._opacity, pixelOffset);
				} else {
					parentCtx.save();
					parentCtx.globalAlpha = item._opacity;
					parentCtx.drawImage(tempCanvas,
							itemOffset.x, itemOffset.y);
					parentCtx.restore();
				}

				CanvasProvider.returnCanvas(tempCanvas);
			}
		}
	}
}, new function() {

	var sets = {
		down: {}, drag: {}, up: {}, move: {}
	};

	function removeAll(set) {
		for (var id in set) {
			var item = set[id];
			item.remove();
			for (var type in sets) {
				var other = sets[type];
				if (other != set && other[item.getId()])
					delete other[item.getId()];
			}
		}
	}

	function installHandler(name) {
		var handler = 'onMouse' + Base.capitalize(name);
		var func = paper.tool[handler];
		if (!func || !func._installed) {
			var hash = {};
			hash[handler] = function(event) {
				if (name === 'up')
					sets.drag = {};
				removeAll(sets[name]);
				sets[name] = {};
				if (this.base)
					this.base(event);
			};
			paper.tool.inject(hash);
			paper.tool[handler]._installed = true;
		}
	}

	return Base.each(['down', 'drag', 'up', 'move'], function(name) {
		this['removeOn' + Base.capitalize(name)] = function() {
			var hash = {};
			hash[name] = true;
			return this.removeOn(hash);
		};
	}, {
		removeOn: function(obj) {
			for (var name in obj) {
				if (obj[name]) {
					sets[name][this.getId()] = this;
					if (name === 'drag')
						installHandler('up');
					installHandler(name);
				}
			}
			return this;
		}
	});
});

var PlacedItem = this.PlacedItem = Item.extend({
	_transform: function(matrix, flags) {
		this._matrix.preConcatenate(matrix);
	},

	_changed: function(flags) {
		Item.prototype._changed.call(this, flags);
		if (flags & ChangeFlag.GEOMETRY) {
			delete this._strokeBounds;
			delete this._handleBounds;
			delete this._roughBounds;
		}
	},

	getMatrix: function() {
		return this._matrix;
	},

	setMatrix: function(matrix) {
		this._matrix = matrix.clone();
		this._changed(Change.GEOMETRY);
	},

	getBounds: function() {
		var useCache = arguments[0] === undefined;
		if (useCache && this._bounds)
			return this._bounds;
		var bounds = this.getStrokeBounds(arguments[0]);
		if (useCache)
			bounds = this._bounds = this._createBounds(bounds);
		return bounds;
	},

	_getBounds: function(getter, cacheName, args) {
		var matrix = args[0],
			useCache = matrix === undefined;
		if (useCache && this[cacheName])
			return this[cacheName];
		matrix = matrix ? matrix.clone().concatenate(this._matrix)
				: this._matrix;
		var bounds = this._calculateBounds(getter, matrix);
		if (useCache)
			this[cacheName] = bounds;
		return bounds;
	}
});

var Group = this.Group = PlacedItem.extend({
	initialize: function(items) {
		this.base();
		this._children = [];
		this._namedChildren = {};
		this.addChildren(!items || !Array.isArray(items)
				|| typeof items[0] !== 'object' ? arguments : items);
				
		this._matrix = new Matrix();
	},

	_changed: function(flags) {
		Item.prototype._changed.call(this, flags);
		if (flags & (ChangeFlag.HIERARCHY | ChangeFlag.CLIPPING)) {
			delete this._clipItem;
		}
	},

	_getClipItem: function() {
		if (this._clipItem !== undefined)
			return this._clipItem;
		for (var i = 0, l = this._children.length; i < l; i++) {
			var child = this._children[i];
			if (child._clipMask)
				return this._clipItem = child;
		}
		return this._clipItem = null;
	},

	isClipped: function() {
		return !!this._getClipItem();
	},

	setClipped: function(clipped) {
		var child = this.getFirstChild();
		if (child)
			child.setClipMask(clipped);
		return this;
	},

	draw: function(ctx, param) {
		var clipItem = this._getClipItem();
		if (clipItem)
			Item.draw(clipItem, ctx, param);
		for (var i = 0, l = this._children.length; i < l; i++) {
			var item = this._children[i];
			if (item != clipItem)
				Item.draw(item, ctx, param);
		}
	},
	
	
	////////////////////////////////////////////////////////////////
	//// From PlacedItem	////////////////////////////////////////
	////////////////////////////////////////////////////////////////
	
	// getBounds: function() {
	// 	var useCache = arguments[0] === undefined;
	// 	if (useCache && this._bounds)
	// 		return this._bounds;
	// 	var bounds = this.getStrokeBounds(arguments[0]);
	// 	if (useCache)
	// 		bounds = this._bounds = this._createBounds(bounds);
	// 	return bounds;
	// },
	// 
	// _getBounds: function(getter, cacheName, args) {
	// 	var matrix = args[0],
	// 		useCache = matrix === undefined;
	// 	if (useCache && this[cacheName])
	// 		return this[cacheName];
	// 	matrix = matrix ? matrix.clone().concatenate(this._matrix)
	// 			: this._matrix;
	// 	//var bounds = this._calculateBounds(getter, matrix);
	// 	//var bounds = matrix._transformBounds(this.__getBounds(getter, cacheName, args));
	// 	var bounds = this.__getBounds(getter, cacheName, args);
	// 	if (useCache)
	// 		this[cacheName] = bounds;
	// 	return bounds;
	// },
	// 
	// ////////////////////////////////////////////////////////////////
	// 
	// 
	
	
	////////////////////////////////////////////////////////////////
	//// From Item	////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////
	getBounds: function() {
		return this._getBounds('getBounds', '_bounds', arguments);
	},
	
	_getBounds: function(getter, cacheName, args) {
		var children = this._children;
		if (!children || children.length == 0)
			return new Rectangle();
		var x1 = Infinity,
			x2 = -x1,
			y1 = x1,
			y2 = x2;
		for (var i = 0, l = children.length; i < l; i++) {
			var child = children[i];
			if (child._visible) {
				var rect = child[getter](args[0]);
				x1 = Math.min(rect.x, x1);
				y1 = Math.min(rect.y, y1);
				x2 = Math.max(rect.x + rect.width, x2);
				y2 = Math.max(rect.y + rect.height, y2);
			}
		}
		var bounds = Rectangle.create(x1, y1, x2 - x1, y2 - y1);
		return getter == 'getBounds' ? this._createBounds(bounds) : bounds;
	}
});

var Layer = this.Layer = Group.extend({
	initialize: function(items) {
		this._project = paper.project;
		this._index = this._project.layers.push(this) - 1;
		this.base.apply(this, arguments);
		this.activate();
	},

	_remove: function(deselect, notify) {
		if (this._parent)
			return this.base(deselect, notify);
		if (this._index != null) {
			if (deselect)
				this.setSelected(false);
			Base.splice(this._project.layers, null, this._index, 1);
			this._project._needsRedraw();
			return true;
		}
		return false;
	},

	getNextSibling: function() {
		return this._parent ? this.base()
				: this._project.layers[this._index + 1] || null;
	},

	getPreviousSibling: function() {
		return this._parent ? this.base()
				: this._project.layers[this._index - 1] || null;
	},

	activate: function() {
		this._project.activeLayer = this;
	}
}, new function () {
	function insert(above) {
		return function(item) {
			if (item instanceof Layer && !item._parent
						&& this._remove(false, true)) {
				Base.splice(item._project.layers, [this],
						item._index + (above ? 1 : -1), 0);
				this._setProject(item._project);
				return true;
			}
			return this.base(item);
		};
	}

	return {
		insertAbove: insert(true),

		insertBelow: insert(false)
	};
});

var Raster = this.Raster = PlacedItem.extend({
	initialize: function(object) {
		this.base();
		if (object.getContext) {
			this.setCanvas(object);
		} else {
			if (typeof object === 'string')
				object = document.getElementById(object);
			this.setImage(object);
		}
		this._matrix = new Matrix();
	},

	clone: function() {
		var image = this._image;
		if (!image) {
			image = CanvasProvider.getCanvas(this._size);
			image.getContext('2d').drawImage(this._canvas, 0, 0);
		}
		var copy = new Raster(image);
		copy._matrix = this._matrix.clone();
		return this._clone(copy);
	},

	getSize: function() {
		return this._size;
	},

	setSize: function() {
		var size = Size.read(arguments),
			image = this.getImage();
		this.setCanvas(CanvasProvider.getCanvas(size));
		this.getContext(true).drawImage(image, 0, 0, size.width, size.height);
	},

	getWidth: function() {
		return this._size.width;
	},

	getHeight: function() {
		return this._size.height;
	},

	getPpi: function() {
		var matrix = this._matrix,
			orig = new Point(0, 0).transform(matrix),
			u = new Point(1, 0).transform(matrix).subtract(orig),
			v = new Point(0, 1).transform(matrix).subtract(orig);
		return new Size(
			72 / u.getLength(),
			72 / v.getLength()
		);
	},

	getContext: function() {
		if (!this._context)
			this._context = this.getCanvas().getContext('2d');
		if (arguments[0])
			this._changed(Change.PIXELS);
		return this._context;
	},

	setContext: function(context) {
		this._context = context;
	},

	getCanvas: function() {
		if (!this._canvas) {
			this._canvas = CanvasProvider.getCanvas(this._size);
			if (this._image)
				this.getContext(true).drawImage(this._image, 0, 0);
		}
		return this._canvas;
	},

	setCanvas: function(canvas) {
		if (this._canvas)
			CanvasProvider.returnCanvas(this._canvas);
		this._canvas = canvas;
		this._size = new Size(canvas.width, canvas.height);
		this._image = null;
		this._context = null;
		this._changed(Change.GEOMETRY);
	},

	getImage: function() {
		return this._image || this.getCanvas();
	},

	setImage: function(image) {
		if (this._canvas)
			CanvasProvider.returnCanvas(this._canvas);
		this._image = image;
		this._size = new Size(image.naturalWidth, image.naturalHeight);
		this._canvas = null;
		this._context = null;
		this._changed(Change.GEOMETRY);
	},

	getSubImage: function(rect) {
		rect = Rectangle.read(arguments);
		var canvas = CanvasProvider.getCanvas(rect.getSize());
		canvas.getContext('2d').drawImage(this.getCanvas(), rect.x, rect.y,
				canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
		return canvas;
	},

	drawImage: function(image, point) {
		point = Point.read(arguments, 1);
		this.getContext(true).drawImage(image, point.x, point.y);
	},

	getAverageColor: function(object) {
		if (!object)
			object = this.getBounds();
		var bounds, path;
		if (object instanceof PathItem) {
			path = object;
			bounds = object.getBounds();
		} else if (object.width) {
			bounds = new Rectangle(object);
		} else if (object.x) {
			bounds = Rectangle.create(object.x - 0.5, object.y - 0.5, 1, 1);
		}
		var sampleSize = 32,
			width = Math.min(bounds.width, sampleSize),
			height = Math.min(bounds.height, sampleSize);
		var ctx = Raster._sampleContext;
		if (!ctx) {
			ctx = Raster._sampleContext = CanvasProvider.getCanvas(
					new Size(sampleSize)).getContext('2d');
		} else {
			ctx.clearRect(0, 0, sampleSize, sampleSize);
		}
		ctx.save();
		ctx.scale(width / bounds.width, height / bounds.height);
		ctx.translate(-bounds.x, -bounds.y);
		if (path)
			path.draw(ctx, { clip: true });
		this._matrix.applyToContext(ctx);
		ctx.drawImage(this._canvas || this._image,
				-this._size.width / 2, -this._size.height / 2);
		ctx.restore();
		var pixels = ctx.getImageData(0.5, 0.5, Math.ceil(width),
				Math.ceil(height)).data,
			channels = [0, 0, 0],
			total = 0;
		for (var i = 0, l = pixels.length; i < l; i += 4) {
			var alpha = pixels[i + 3];
			total += alpha;
			alpha /= 255;
			channels[0] += pixels[i] * alpha;
			channels[1] += pixels[i + 1] * alpha;
			channels[2] += pixels[i + 2] * alpha;
		}
		for (var i = 0; i < 3; i++)
			channels[i] /= total;
		return total ? Color.read(channels) : null;
	},

	getPixel: function(point) {
		point = Point.read(arguments);
		var pixels = this.getContext().getImageData(point.x, point.y, 1, 1).data,
			channels = new Array(4);
		for (var i = 0; i < 4; i++)
			channels[i] = pixels[i] / 255;
		return RgbColor.read(channels);
	},

	setPixel: function(point, color) {
		var hasPoint = arguments.length == 2;
		point = Point.read(arguments, 0, hasPoint ? 1 : 2);
		color = Color.read(arguments, hasPoint ? 1 : 2);
		var ctx = this.getContext(true),
			imageData = ctx.createImageData(1, 1),
			alpha = color.getAlpha();
		imageData.data[0] = color.getRed() * 255;
		imageData.data[1] = color.getGreen() * 255;
		imageData.data[2] = color.getBlue() * 255;
		imageData.data[3] = alpha != null ? alpha * 255 : 255;
		ctx.putImageData(imageData, point.x, point.y);
	},

	createData: function(size) {
		size = Size.read(arguments);
		return this.getContext().createImageData(size.width, size.height);
	},

	getData: function(rect) {
		rect = Rectangle.read(arguments);
		if (rect.isEmpty())
			rect = new Rectangle(this.getSize());
		return this.getContext().getImageData(rect.x, rect.y,
				rect.width, rect.height);
	},

	setData: function(data, point) {
		point = Point.read(arguments, 1);
		this.getContext(true).putImageData(data, point.x, point.y);
	},

	_calculateBounds: function(getter, matrix) {
		return matrix._transformBounds(
				new Rectangle(this._size).setCenter(0, 0));
	},

	getHandleBounds: function() {
		return this.getStrokeBounds(arguments[0]);
	},

	getRoughBounds: function() {
		return this.getStrokeBounds(arguments[0]);
	},

	draw: function(ctx, param) {
		if (param.selection) {
			var bounds = new Rectangle(this._size).setCenter(0, 0);
			Item.drawSelectedBounds(bounds, ctx, this._matrix);
		} else {
			ctx.save();
			this._matrix.applyToContext(ctx);
			ctx.drawImage(this._canvas || this._image,
					-this._size.width / 2, -this._size.height / 2);
			ctx.restore();
		}
	}
});

var PlacedSymbol = this.PlacedSymbol = PlacedItem.extend({
	initialize: function(symbol, matrixOrOffset) {
		this.base();
		this.setSymbol(symbol instanceof Symbol ? symbol : new Symbol(symbol));
		this._matrix = matrixOrOffset !== undefined
			? matrixOrOffset instanceof Matrix
				? matrixOrOffset
				: new Matrix().translate(Point.read(arguments, 1))
			: new Matrix();
	},

	getSymbol: function() {
		return this._symbol;
	},

	setSymbol: function(symbol) {
		if (this._symbol)
			delete this._symbol._instances[this._id];
		this._symbol = symbol;
		symbol._instances[this._id] = this;
	},

	clone: function() {
		return this._clone(new PlacedSymbol(this.symbol, this._matrix.clone()));
	},

	_calculateBounds: function(getter, matrix) {
		return this.symbol._definition[getter](matrix);
	},

	draw: function(ctx, param) {
		if (param.selection) {
			Item.drawSelectedBounds(this.symbol._definition.getStrokeBounds(),
					ctx, this._matrix);
		} else {
			ctx.save();
			this._matrix.applyToContext(ctx);
			Item.draw(this.symbol.getDefinition(), ctx, param);
			ctx.restore();
		}
	}

});

HitResult = Base.extend({
	initialize: function(type, item, values) {
		this.type = type;
		this.item = item;
		if (values) {
			Base.each(values, function(value, key) {
				this[key] = value;
			}, this);
		}
	},

	statics: {
		getOptions: function(point, options) {
			return options && options._merged ? options : Base.merge({
				point: Point.read(arguments, 0, 1),
				type: null,
				tolerance: 2,
				fill: !options,
				stroke: !options,
				segments: !options,
				handles: false,
				ends: false,
				center: false,
				bounds: false,
				guides: false,
				selected: false,
				_merged: true
			}, options);
		}
	}
});

var Segment = this.Segment = Base.extend({
	initialize: function(arg0, arg1, arg2, arg3, arg4, arg5) {
		var count = arguments.length,
			createPoint = SegmentPoint.create,
			point, handleIn, handleOut;
		if (count == 0) {
		} else if (count == 1) {
			if (arg0.point) {
				point = arg0.point;
				handleIn = arg0.handleIn;
				handleOut = arg0.handleOut;
			} else {
				point = arg0;
			}
		} else if (count < 6) {
			if (count == 2 && arg1.x === undefined) {
				point = [ arg0, arg1 ];
			} else {
				point = arg0;
				handleIn = arg1;
				handleOut = arg2;
			}
		} else if (count == 6) {
			point = [ arg0, arg1 ];
			handleIn = [ arg2, arg3 ];
			handleOut = [ arg4, arg5 ];
		}
		createPoint(this, '_point', point);
		createPoint(this, '_handleIn', handleIn);
		createPoint(this, '_handleOut', handleOut);
	},

	_changed: function(point) {
		if (!this._path)
			return;
		var curve = this._path._curves && this.getCurve(), other;
		if (curve) {
			curve._changed();
			if (other = (curve[point == this._point
					|| point == this._handleIn && curve._segment1 == this
					? 'getPrevious' : 'getNext']())) {
				other._changed();
			}
		}
		this._path._changed(Change.GEOMETRY);
	},

	getPoint: function() {
		return this._point;
	},

	setPoint: function(point) {
		point = Point.read(arguments);
		this._point.set(point.x, point.y);
	},

	getHandleIn: function() {
		return this._handleIn;
	},

	setHandleIn: function(point) {
		point = Point.read(arguments);
		this._handleIn.set(point.x, point.y);
	},

	getHandleOut: function() {
		return this._handleOut;
	},

	setHandleOut: function(point) {
		point = Point.read(arguments);
		this._handleOut.set(point.x, point.y);
	},

	_isSelected: function(point) {
		var state = this._selectionState;
		return point == this._point ? !!(state & SelectionState.POINT)
			: point == this._handleIn ? !!(state & SelectionState.HANDLE_IN)
			: point == this._handleOut ? !!(state & SelectionState.HANDLE_OUT)
			: false;
	},

	_setSelected: function(point, selected) {
		var path = this._path,
			selected = !!selected, 
			state = this._selectionState || 0,
			selection = [
				!!(state & SelectionState.POINT),
				!!(state & SelectionState.HANDLE_IN),
				!!(state & SelectionState.HANDLE_OUT)
			];
		if (point == this._point) {
			if (selected) {
				selection[1] = selection[2] = false;
			} else {
				var previous = this.getPrevious(),
					next = this.getNext();
				selection[1] = previous && (previous._point.isSelected()
						|| previous._handleOut.isSelected());
				selection[2] = next && (next._point.isSelected()
						|| next._handleIn.isSelected());
			}
			selection[0] = selected;
		} else {
			var index = point == this._handleIn ? 1 : 2;
			if (selection[index] != selected) {
				if (selected)
					selection[0] = false;
				selection[index] = selected;
				path._changed(Change.ATTRIBUTE);
			}
		}
		this._selectionState = (selection[0] ? SelectionState.POINT : 0)
				| (selection[1] ? SelectionState.HANDLE_IN : 0)
				| (selection[2] ? SelectionState.HANDLE_OUT : 0);
		if (path && state != this._selectionState)
			path._updateSelection(this, state, this._selectionState);
	},

	isSelected: function() {
		return this._isSelected(this._point);
	},

	setSelected: function(selected) {
		this._setSelected(this._point, selected);
	},

	getIndex: function() {
		return this._index !== undefined ? this._index : null;
	},

	getPath: function() {
		return this._path || null;
	},

	getCurve: function() {
		if (this._path) {
			var index = this._index;
			if (!this._path._closed && index == this._path._segments.length - 1)
				index--;
			return this._path.getCurves()[index] || null;
		}
		return null;
	},

	getNext: function() {
		var segments = this._path && this._path._segments;
		return segments && (segments[this._index + 1]
				|| this._path._closed && segments[0]) || null;
	},

	getPrevious: function() {
		var segments = this._path && this._path._segments;
		return segments && (segments[this._index - 1]
				|| this._path._closed && segments[segments.length - 1]) || null;
	},

	reverse: function() {
		return new Segment(this._point, this._handleOut, this._handleIn);
	},

	remove: function() {
		return this._path ? !!this._path.removeSegment(this._index) : false;
	},

	toString: function() {
		var parts = [ 'point: ' + this._point ];
		if (!this._handleIn.isZero())
			parts.push('handleIn: ' + this._handleIn);
		if (!this._handleOut.isZero())
			parts.push('handleOut: ' + this._handleOut);
		return '{ ' + parts.join(', ') + ' }';
	},

	_transformCoordinates: function(matrix, coords, change) {
		var point = this._point,
			handleIn =  !change || !this._handleIn.isZero()
					? this._handleIn : null,
			handleOut = !change || !this._handleOut.isZero()
					? this._handleOut : null,
			x = point._x,
			y = point._y,
			i = 2;
		coords[0] = x;
		coords[1] = y;
		if (handleIn) {
			coords[i++] = handleIn._x + x;
			coords[i++] = handleIn._y + y;
		}
		if (handleOut) {
			coords[i++] = handleOut._x + x;
			coords[i++] = handleOut._y + y;
		}
		if (!matrix)
			return;
		matrix._transformCoordinates(coords, 0, coords, 0, i / 2);
		x = coords[0];
		y = coords[1];
		if (change) {
			point._x = x;
			point._y = y;
			i  = 2;
			if (handleIn) {
				handleIn._x = coords[i++] - x;
				handleIn._y = coords[i++] - y;
			}
			if (handleOut) {
				handleOut._x = coords[i++] - x;
				handleOut._y = coords[i++] - y;
			}
		} else {
			if (!handleIn) {
				coords[i++] = x;
				coords[i++] = y;
			}
			if (!handleOut) {
				coords[i++] = x;
				coords[i++] = y;
			}
		}
	}
});

var SegmentPoint = Point.extend({
	set: function(x, y) {
		this._x = x;
		this._y = y;
		this._owner._changed(this);
		return this;
	},

	getX: function() {
		return this._x;
	},

	setX: function(x) {
		this._x = x;
		this._owner._changed(this);
	},

	getY: function() {
		return this._y;
	},

	setY: function(y) {
		this._y = y;
		this._owner._changed(this);
	},

	isZero: function() {
		return this._x == 0 && this._y == 0;
	},

	setSelected: function(selected) {
		this._owner._setSelected(this, selected);
	},

	isSelected: function() {
		return this._owner._isSelected(this);
	},

	statics: {
		create: function(segment, key, pt) {
			var point = new SegmentPoint(SegmentPoint.dont),
				x, y, selected;
			if (!pt) {
				x = y = 0;
			} else if ((x = pt[0]) !== undefined) { 
				y = pt[1];
			} else {
				if ((x = pt.x) === undefined) {
					pt = Point.read(arguments, 2, 1);
					x = pt.x;
				}
				y = pt.y;
				selected = pt.selected;
			}
			point._x = x;
			point._y = y;
			point._owner = segment;
			segment[key] = point;
			if (selected)
				point.setSelected(true);
			return point;
		}
	}
});

var SelectionState = {
	HANDLE_IN: 1,
	HANDLE_OUT: 2,
	POINT: 4
};

var Curve = this.Curve = Base.extend({
	initialize: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
		var count = arguments.length;
		if (count == 0) {
			this._segment1 = new Segment();
			this._segment2 = new Segment();
		} else if (count == 1) {
			this._segment1 = new Segment(arg0.segment1);
			this._segment2 = new Segment(arg0.segment2);
		} else if (count == 2) {
			this._segment1 = new Segment(arg0);
			this._segment2 = new Segment(arg1);
		} else if (count == 4) {
			this._segment1 = new Segment(arg0, null, arg1);
			this._segment2 = new Segment(arg3, arg2, null);
		} else if (count == 8) {
			var p1 = Point.create(arg0, arg1),
				p2 = Point.create(arg6, arg7);
			this._segment1 = new Segment(p1, null,
					Point.create(arg2, arg3).subtract(p1));
			this._segment2 = new Segment(p2,
					Point.create(arg4, arg5).subtract(p2), null);
		}
	},

	_changed: function() {
		delete this._length;
	},

	getPoint1: function() {
		return this._segment1._point;
	},

	setPoint1: function(point) {
		point = Point.read(arguments);
		this._segment1._point.set(point.x, point.y);
	},

	getPoint2: function() {
		return this._segment2._point;
	},

	setPoint2: function(point) {
		point = Point.read(arguments);
		this._segment2._point.set(point.x, point.y);
	},

	getHandle1: function() {
		return this._segment1._handleOut;
	},

	setHandle1: function(point) {
		point = Point.read(arguments);
		this._segment1._handleOut.set(point.x, point.y);
	},

	getHandle2: function() {
		return this._segment2._handleIn;
	},

	setHandle2: function(point) {
		point = Point.read(arguments);
		this._segment2._handleIn.set(point.x, point.y);
	},

	getSegment1: function() {
		return this._segment1;
	},

	getSegment2: function() {
		return this._segment2;
	},

	getPath: function() {
		return this._path;
	},

	getIndex: function() {
		return this._segment1._index;
	},

	getNext: function() {
		var curves = this._path && this._path._curves;
		return curves && (curves[this._segment1._index + 1]
				|| this._path._closed && curves[0]) || null;
	},

	getPrevious: function() {
		var curves = this._path && this._path._curves;
		return curves && (curves[this._segment1._index - 1]
				|| this._path._closed && curves[curves.length - 1]) || null;
	},

	isSelected: function() {
		return this.getHandle1().isSelected() && this.getHandle2().isSelected();
	},

	setSelected: function(selected) {
		this.getHandle1().setSelected(selected);
		this.getHandle2().setSelected(selected);
	},

	getValues: function(matrix) {
		return Curve.getValues(this._segment1, this._segment2, matrix);
	},

	getPoints: function(matrix) {
		var coords = this.getValues(matrix),
			points = [];
		for (var i = 0; i < 8; i += 2)
			points.push(Point.create(coords[i], coords[i + 1]));
		return points;
	},

	getLength: function() {
		var from = arguments[0],
			to = arguments[1];
			fullLength = arguments.length == 0 || from == 0 && to == 1;
		if (fullLength && this._length != null)
			return this._length;
		var length = Curve.getLength(this.getValues(), from, to);
		if (fullLength)
			this._length = length;
		return length;
	},

	getPart: function(from, to) {
		return new Curve(Curve.getPart(this.getValues(), from, to));
	},

	isLinear: function() {
		return this._segment1._handleOut.isZero()
				&& this._segment2._handleIn.isZero();
	},

	getParameterAt: function(offset, start) {
		return Curve.getParameterAt(this.getValues(), offset,
				start !== undefined ? start : offset < 0 ? 1 : 0);
	},

	getPoint: function(parameter) {
		return Curve.evaluate(this.getValues(), parameter, 0);
	},

	getTangent: function(parameter) {
		return Curve.evaluate(this.getValues(), parameter, 1);
	},

	getNormal: function(parameter) {
		return Curve.evaluate(this.getValues(), parameter, 2);
	},

	getParameter: function(point) {
		point = Point.read(point);
		return Curve.getParameter(this.getValues(), point.x, point.y);
	},

	getCrossings: function(point, matrix, roots) {
		var vals = this.getValues(matrix),
			num = Curve.solveCubic(vals, 1, point.y, roots),
			crossings = 0;
		for (var i = 0; i < num; i++) {
			var t = roots[i];
			if (t >= 0 && t < 1 && Curve.evaluate(vals, t, 0).x > point.x) {
				if (t < Numerical.TOLERANCE && Curve.evaluate(
							this.getPrevious().getValues(matrix), 1, 1).y
						* Curve.evaluate(vals, t, 1).y >= 0)
					continue;
				crossings++;
			}
		}
		return crossings;
	},

	reverse: function() {
		return new Curve(this._segment2.reverse(), this._segment1.reverse());
	},

	clone: function() {
		return new Curve(this._segment1, this._segment2);
	},

	toString: function() {
		var parts = [ 'point1: ' + this._segment1._point ];
		if (!this._segment1._handleOut.isZero())
			parts.push('handle1: ' + this._segment1._handleOut);
		if (!this._segment2._handleIn.isZero())
			parts.push('handle2: ' + this._segment2._handleIn);
		parts.push('point2: ' + this._segment2._point);
		return '{ ' + parts.join(', ') + ' }';
	},

	statics: {
		create: function(path, segment1, segment2) {
			var curve = new Curve(Curve.dont);
			curve._path = path;
			curve._segment1 = segment1;
			curve._segment2 = segment2;
			return curve;
		},

		getValues: function(segment1, segment2, matrix) {
			var p1 = segment1._point,
				h1 = segment1._handleOut,
				h2 = segment2._handleIn,
				p2 = segment2._point,
				coords = [
					p1._x, p1._y,
					p1._x + h1._x, p1._y + h1._y,
					p2._x + h2._x, p2._y + h2._y,
					p2._x, p2._y
				];
			return matrix
					? matrix._transformCoordinates(coords, 0, coords, 0, 4)
					: coords;
		},

		evaluate: function(v, t, type) {
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7],
				x, y;

			if (type == 0 && (t == 0 || t == 1)) {
				x = t == 0 ? p1x : p2x;
				y = t == 0 ? p1y : p2y;
			} else {
				var tMin = Numerical.TOLERANCE;
				if (t < tMin && c1x == p1x && c1y == p1y)
					t = tMin;
				else if (t > 1 - tMin && c2x == p2x && c2y == p2y)
					t = 1 - tMin;
				var cx = 3 * (c1x - p1x),
					bx = 3 * (c2x - c1x) - cx,
					ax = p2x - p1x - cx - bx,

					cy = 3 * (c1y - p1y),
					by = 3 * (c2y - c1y) - cy,
					ay = p2y - p1y - cy - by;

				switch (type) {
				case 0: 
					x = ((ax * t + bx) * t + cx) * t + p1x;
					y = ((ay * t + by) * t + cy) * t + p1y;
					break;
				case 1: 
				case 2: 
					x = (3 * ax * t + 2 * bx) * t + cx;
					y = (3 * ay * t + 2 * by) * t + cy;
					break;
				}
			}
			return type == 2 ? new Point(y, -x) : new Point(x, y);
		},

		subdivide: function(v, t) {
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7];
			if (t === undefined)
				t = 0.5;
			var u = 1 - t,
				p3x = u * p1x + t * c1x, p3y = u * p1y + t * c1y,
				p4x = u * c1x + t * c2x, p4y = u * c1y + t * c2y,
				p5x = u * c2x + t * p2x, p5y = u * c2y + t * p2y,
				p6x = u * p3x + t * p4x, p6y = u * p3y + t * p4y,
				p7x = u * p4x + t * p5x, p7y = u * p4y + t * p5y,
				p8x = u * p6x + t * p7x, p8y = u * p6y + t * p7y;
			return [
				[p1x, p1y, p3x, p3y, p6x, p6y, p8x, p8y], 
				[p8x, p8y, p7x, p7y, p5x, p5y, p2x, p2y] 
			];
		},

		solveCubic: function (v, coord, val, roots) {
			var p1 = v[coord],
				c1 = v[coord + 2],
				c2 = v[coord + 4],
				p2 = v[coord + 6],
				c = 3 * (c1 - p1),
				b = 3 * (c2 - c1) - c,
				a = p2 - p1 - c - b;
			return Numerical.solveCubic(a, b, c, p1 - val, roots,
					Numerical.TOLERANCE);
		},

		getParameter: function(v, x, y) {
			var txs = [],
				tys = [],
				sx = Curve.solveCubic(v, 0, x, txs),
				sy = Curve.solveCubic(v, 1, y, tys),
				tx, ty;
			for (var cx = 0;  sx == -1 || cx < sx;) {
				if (sx == -1 || (tx = txs[cx++]) >= 0 && tx <= 1) {
					for (var cy = 0; sy == -1 || cy < sy;) {
						if (sy == -1 || (ty = tys[cy++]) >= 0 && ty <= 1) {
							if (sx == -1) tx = ty;
							else if (sy == -1) ty = tx;
							if (Math.abs(tx - ty) < Numerical.TOLERANCE)
								return (tx + ty) * 0.5;
						}
					}
					if (sx == -1)
						break;
				}
			}
			return null;
		},

		getPart: function(v, from, to) {
			if (from > 0)
				v = Curve.subdivide(v, from)[1]; 
			if (to < 1)
				v = Curve.subdivide(v, (to - from) / (1 - from))[0]; 
			return v;
		},

		isFlatEnough: function(v) {
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7],

				a = p1y - p2y,
				b = p2x - p1x,
				c = p1x * p2y - p2x * p1y,
				v1 = a * c1x + b * c1y + c,
				v2 = a * c2x + b * c2y + c;
			return Math.abs((v1 * v1 + v2 * v2) / (a * (a * a + b * b))) < 0.005;
		}
	}
}, new function() { 

	function getLengthIntegrand(v) {
		var p1x = v[0], p1y = v[1],
			c1x = v[2], c1y = v[3],
			c2x = v[4], c2y = v[5],
			p2x = v[6], p2y = v[7],

			ax = 9 * (c1x - c2x) + 3 * (p2x - p1x),
			bx = 6 * (p1x + c2x) - 12 * c1x,
			cx = 3 * (c1x - p1x),

			ay = 9 * (c1y - c2y) + 3 * (p2y - p1y),
			by = 6 * (p1y + c2y) - 12 * c1y,
			cy = 3 * (c1y - p1y);

		return function(t) {
			var dx = (ax * t + bx) * t + cx,
				dy = (ay * t + by) * t + cy;
			return Math.sqrt(dx * dx + dy * dy);
		};
	}

	function getIterations(a, b) {
		return Math.max(2, Math.min(16, Math.ceil(Math.abs(b - a) * 32)));
	}

	return {
		statics: true,

		getLength: function(v, a, b) {
			if (a === undefined)
				a = 0;
			if (b === undefined)
				b = 1;
			if (v[0] == v[2] && v[1] == v[3] && v[6] == v[4] && v[7] == v[5]) {
				var dx = v[6] - v[0], 
					dy = v[7] - v[1]; 
				return (b - a) * Math.sqrt(dx * dx + dy * dy);
			}
			var ds = getLengthIntegrand(v);
			return Numerical.integrate(ds, a, b, getIterations(a, b));
		},

		getParameterAt: function(v, offset, start) {
			if (offset == 0)
				return start;
			var forward = offset > 0,
				a = forward ? start : 0,
				b = forward ? 1 : start,
				offset = Math.abs(offset),
				ds = getLengthIntegrand(v),
				rangeLength = Numerical.integrate(ds, a, b,
						getIterations(a, b));
			if (offset >= rangeLength)
				return forward ? b : a;
			var guess = offset / rangeLength,
				length = 0;
			function f(t) {
				var count = getIterations(start, t);
				length += start < t
						? Numerical.integrate(ds, start, t, count)
						: -Numerical.integrate(ds, t, start, count);
				start = t;
				return length - offset;
			}
			return Numerical.findRoot(f, ds,
					forward ? a + guess : b - guess, 
					a, b, 16, Numerical.TOLERANCE);
		}
	};
}, new function() { 

	var maxDepth = 32,
		epsilon = Math.pow(2, -maxDepth - 1);

	var zCubic = [
		[1.0, 0.6, 0.3, 0.1],
		[0.4, 0.6, 0.6, 0.4],
		[0.1, 0.3, 0.6, 1.0]
	];

	var xAxis = new Line(new Point(0, 0), new Point(1, 0));

	function toBezierForm(v, point) {
		var n = 3, 
	 		degree = 5, 
			c = [],
			d = [],
			cd = [],
			w = [];
		for(var i = 0; i <= n; i++) {
			c[i] = v[i].subtract(point);
			if (i < n)
				d[i] = v[i + 1].subtract(v[i]).multiply(n);
		}

		for (var row = 0; row < n; row++) {
			cd[row] = [];
			for (var column = 0; column <= n; column++)
				cd[row][column] = d[row].dot(c[column]);
		}

		for (var i = 0; i <= degree; i++)
			w[i] = new Point(i / degree, 0);

		for (k = 0; k <= degree; k++) {
			var lb = Math.max(0, k - n + 1),
				ub = Math.min(k, n);
			for (var i = lb; i <= ub; i++) {
				var j = k - i;
				w[k].y += cd[j][i] * zCubic[j][i];
			}
		}

		return w;
	}

	function findRoots(w, depth) {
		switch (countCrossings(w)) {
		case 0:
			return [];
		case 1:
			if (depth >= maxDepth)
				return [0.5 * (w[0].x + w[5].x)];
			if (isFlatEnough(w)) {
				var line = new Line(w[0], w[5], true);
				return [ line.vector.getLength(true) <= Numerical.EPSILON
						? line.point.x
						: xAxis.intersect(line).x ];
			}
		}

		var p = [[]],
			left = [],
			right = [];
		for (var j = 0; j <= 5; j++)
		 	p[0][j] = new Point(w[j]);

		for (var i = 1; i <= 5; i++) {
			p[i] = [];
			for (var j = 0 ; j <= 5 - i; j++)
				p[i][j] = p[i - 1][j].add(p[i - 1][j + 1]).multiply(0.5);
		}
		for (var j = 0; j <= 5; j++) {
			left[j]  = p[j][0];
			right[j] = p[5 - j][j];
		}

		return findRoots(left, depth + 1).concat(findRoots(right, depth + 1));
	}

	function countCrossings(v) {
		var crossings = 0,
			prevSign = null;
		for (var i = 0, l = v.length; i < l; i++)  {
			var sign = v[i].y < 0 ? -1 : 1;
			if (prevSign != null && sign != prevSign)
				crossings++;
			prevSign = sign;
		}
		return crossings;
	}

	function isFlatEnough(v) {

		var n = v.length - 1,
			a = v[0].y - v[n].y,
			b = v[n].x - v[0].x,
			c = v[0].x * v[n].y - v[n].x * v[0].y,
			maxAbove = 0,
			maxBelow = 0;
		for (var i = 1; i < n; i++) {
			var val = a * v[i].x + b * v[i].y + c,
				dist = val * val;
			if (val < 0 && dist > maxBelow) {
				maxBelow = dist;
			} else if (dist > maxAbove) {
				maxAbove = dist;
			}
		}
		return Math.abs((maxAbove + maxBelow) / (2 * a * (a * a + b * b)))
				< epsilon;
	}

	return {
		getNearestLocation: function(point, matrix) {
			var w = toBezierForm(this.getPoints(matrix), point);
			var roots = findRoots(w, 0).concat([0, 1]);
			var minDist = Infinity,
				minT,
				minPoint;
			for (var i = 0; i < roots.length; i++) {
				var pt = this.getPoint(roots[i]),
					dist = point.getDistance(pt, true);
				if (dist < minDist) {
					minDist = dist;
					minT = roots[i];
					minPoint = pt;
				}
			}
			return new CurveLocation(this, minT, minPoint, Math.sqrt(minDist));
		},

		getNearestPoint: function(point, matrix) {
			return this.getNearestLocation(point, matrix).getPoint();
		}
	};
});

CurveLocation = Base.extend({
	initialize: function(curve, parameter, point, distance) {
		this._curve = curve;
		this._parameter = parameter;
		this._point = point;
		this._distance = distance;
	},

	getSegment: function() {
		if (!this._segment) {
			var curve = this._curve,
				parameter = this.getParameter();
			if (parameter == 0) {
				this._segment = curve._segment1;
			} else if (parameter == 1) {
				this._segment = curve._segment2;
			} else if (parameter == null) {
				return null;
			} else {
				this._segment = curve.getLength(0, parameter)
					< curve.getLength(parameter, 1)
						? curve._segment1
						: curve._segment2;
			}
		}
		return this._segment;
	},

	getCurve: function() {
		return this._curve;
	},

	getPath: function() {
		return this._curve && this._curve._path;
	},

	getIndex: function() {
		return this._curve && this._curve.getIndex();
	},

	getOffset: function() {
		var path = this._curve && this._curve._path;
		return path && path._getOffset(this);
	},

	getCurveOffset: function() {
		var parameter = this.getParameter();
		return parameter != null && this._curve
				&& this._curve.getLength(0, parameter);
	},

	getParameter: function() {
		if (this._parameter == null && this._curve && this._point)
			this._parameter = this._curve.getParameterAt(this._point);
		return this._parameter;
	},

	getPoint: function() {
		if (!this._point && this._curve && this._parameter != null)
			this._point = this._curve.getPoint(this._parameter);
		return this._point;
	},

	getTangent: function() {
		var parameter = this.getParameter();
		return parameter != null && this._curve
				&& this._curve.getTangent(parameter);
	},

	getNormal: function() {
		var parameter = this.getParameter();
		return parameter != null && this._curve
				&& this._curve.getNormal(parameter);
	},

	getDistance: function() {
		return this._distance;
	},

	toString: function() {
		var parts = [],
			point = this.getPoint();
		if (point)
			parts.push('point: ' + point);
		var index = this.getIndex();
		if (index != null)
			parts.push('index: ' + index);
		var parameter = this.getParameter();
		if (parameter != null)
			parts.push('parameter: ' + Base.formatNumber(parameter));
		if (this._distance != null)
			parts.push('distance: ' + Base.formatNumber(this._distance));
		return '{ ' + parts.join(', ') + ' }';
	}
});

var PathItem = this.PathItem = PlacedItem.extend({

});

var Path = this.Path = PathItem.extend({
	initialize: function(segments) {
		this.base();
		this._closed = false;
		this._selectedSegmentState = 0;
		this.setSegments(!segments || !Array.isArray(segments)
				|| typeof segments[0] !== 'object' ? arguments : segments);
		this._matrix = new Matrix();
	},

	clone: function() {
		var copy = this._clone(new Path(this._segments));
		copy._closed = this._closed;
		if (this._clockwise !== undefined)
			copy._clockwise = this._clockwise;
		return copy;
	},

	_changed: function(flags) {
		Item.prototype._changed.call(this, flags);
		if (flags & ChangeFlag.GEOMETRY) {
			delete this._strokeBounds;
			delete this._handleBounds;
			delete this._roughBounds;
			delete this._length;
			delete this._clockwise;
		} else if (flags & ChangeFlag.STROKE) {
			delete this._strokeBounds;
		}
	},

	getSegments: function() {
		return this._segments;
	},

	setSegments: function(segments) {
		if (!this._segments) {
			this._segments = [];
		} else {
			this._selectedSegmentState = 0;
			this._segments.length = 0;
			if (this._curves)
				delete this._curves;
		}
		this._add(Segment.readAll(segments));
	},

	getFirstSegment: function() {
		return this._segments[0];
	},

	getLastSegment: function() {
		return this._segments[this._segments.length - 1];
	},

	getCurves: function() {
		if (!this._curves) {
			var segments = this._segments,
				length = segments.length;
			if (!this._closed && length > 0)
				length--;
			this._curves = new Array(length);
			for (var i = 0; i < length; i++)
				this._curves[i] = Curve.create(this, segments[i],
					segments[i + 1] || segments[0]);
		}
		return this._curves;
	},

	getFirstCurve: function() {
		return this.getCurves()[0];
	},

	getLastCurve: function() {
		var curves = this.getCurves();
		return curves[curves.length - 1];
	},

	getClosed: function() {
		return this._closed;
	},

	setClosed: function(closed) {
		if (this._closed != (closed = !!closed)) {
			this._closed = closed;
			if (this._curves) {
				var length = this._segments.length,
					i;
				if (!closed && length > 0)
					length--;
				this._curves.length = length;
				if (closed)
					this._curves[i = length - 1] = Curve.create(this,
						this._segments[i], this._segments[0]);
			}
			this._changed(Change.GEOMETRY);
		}
	},

	_transform: function(matrix, flags) {
		if (!matrix.isIdentity()) {
			var coords = new Array(6);
			for (var i = 0, l = this._segments.length; i < l; i++) {
				this._segments[i]._transformCoordinates(matrix, coords, true);
			}
			var fillColor = this.getFillColor(),
				strokeColor = this.getStrokeColor();
			if (fillColor && fillColor.transform)
				fillColor.transform(matrix);
			if (strokeColor && strokeColor.transform)
				strokeColor.transform(matrix);
		}
	},

	_add: function(segs, index) {
		var segments = this._segments,
			curves = this._curves,
			amount = segs.length,
			append = index == null,
			index = append ? segments.length : index,
			fullySelected = this.isFullySelected();
		for (var i = 0; i < amount; i++) {
			var segment = segs[i];
			if (segment._path) {
				segment = segs[i] = new Segment(segment);
			}
			segment._path = this;
			segment._index = index + i;
			if (fullySelected)
				segment._selectionState = SelectionState.POINT;
			if (segment._selectionState)
				this._updateSelection(segment, 0, segment._selectionState);
		}
		if (append) {
			segments.push.apply(segments, segs);
		} else {
			segments.splice.apply(segments, [index, 0].concat(segs));
			for (var i = index + amount, l = segments.length; i < l; i++) {
				segments[i]._index = i;
			}
		}
		if (curves && --index >= 0) {
			curves.splice(index, 0, Curve.create(this, segments[index],
				segments[index + 1]));
			var curve = curves[index + amount];
			if (curve) {
				curve._segment1 = segments[index + amount];
			}
		}
		this._changed(Change.GEOMETRY);
		return segs;
	},

	add: function(segment1 ) {
		return arguments.length > 1 && typeof segment1 !== 'number'
			? this._add(Segment.readAll(arguments))
			: this._add([ Segment.read(arguments) ])[0];
	},

	insert: function(index, segment1 ) {
		return arguments.length > 2 && typeof segment1 !== 'number'
			? this._add(Segment.readAll(arguments, 1), index)
			: this._add([ Segment.read(arguments, 1) ], index)[0];
	},

	addSegment: function(segment) {
		return this._add([ Segment.read(arguments) ])[0];
	},

	insertSegment: function(index, segment) {
		return this._add([ Segment.read(arguments, 1) ], index)[0];
	},

	addSegments: function(segments) {
		return this._add(Segment.readAll(segments));
	},

	insertSegments: function(index, segments) {
		return this._add(Segment.readAll(segments), index);
	},

	removeSegment: function(index) {
		var segments = this.removeSegments(index, index + 1);
		return segments[0] || null;
	},

	removeSegments: function(from, to) {
		from = from || 0;
	 	to = Base.pick(to, this._segments.length);
		var segments = this._segments,
			curves = this._curves,
			last = to >= segments.length,
			removed = segments.splice(from, to - from),
			amount = removed.length;
		if (!amount)
			return removed;
		for (var i = 0; i < amount; i++) {
			var segment = removed[i];
			if (segment._selectionState)
				this._updateSelection(segment, segment._selectionState, 0);
			removed._index = removed._path = undefined;
		}
		for (var i = from, l = segments.length; i < l; i++)
			segments[i]._index = i;
		if (curves) {
			curves.splice(from, amount);
			var curve;
			if (curve = curves[from - 1])
				curve._segment2 = segments[from];
			if (curve = curves[from])
				curve._segment1 = segments[from];
			if (last && this._closed && (curve = curves[curves.length - 1]))
				curve._segment2 = segments[0];
		}
		this._changed(Change.GEOMETRY);
		return removed;
	},

	isFullySelected: function() {
		return this._selected && this._selectedSegmentState
				== this._segments.length * SelectionState.POINT;
	},

	setFullySelected: function(selected) {
		var length = this._segments.length;
		this._selectedSegmentState = selected
				? length * SelectionState.POINT : 0;
		for (var i = 0; i < length; i++)
			this._segments[i]._selectionState = selected
					? SelectionState.POINT : 0;
		this.setSelected(selected);
	},

	_updateSelection: function(segment, oldState, newState) {
		segment._selectionState = newState;
		var total = this._selectedSegmentState += newState - oldState;
		if (total > 0)
			this.setSelected(true);
	},

	flatten: function(maxDistance) {
		var flattener = new PathFlattener(this),
			pos = 0,
			step = flattener.length / Math.ceil(flattener.length / maxDistance),
			end = flattener.length + (this._closed ? -step : step) / 2;
		var segments = [];
		while (pos <= end) {
			segments.push(new Segment(flattener.evaluate(pos, 0)));
			pos += step;
		}
		this.setSegments(segments);
	},

	simplify: function(tolerance) {
		if (this._segments.length > 2) {
			var fitter = new PathFitter(this, tolerance || 2.5);
			this.setSegments(fitter.fit());
		}
	},

	isClockwise: function() {
		if (this._clockwise !== undefined)
			return this._clockwise;
		var sum = 0,
			xPre, yPre;
		function edge(x, y) {
			if (xPre !== undefined)
				sum += (xPre - x) * (y + yPre);
			xPre = x;
			yPre = y;
		}
		for (var i = 0, l = this._segments.length; i < l; i++) {
			var seg1 = this._segments[i],
				seg2 = this._segments[i + 1 < l ? i + 1 : 0],
				point1 = seg1._point,
				handle1 = seg1._handleOut,
				handle2 = seg2._handleIn,
				point2 = seg2._point;
			edge(point1._x, point1._y);
			edge(point1._x + handle1._x, point1._y + handle1._y);
			edge(point2._x + handle2._x, point2._y + handle2._y);
			edge(point2._x, point2._y);
		}
		return sum > 0;
	},

	setClockwise: function(clockwise) {
		if (this.isClockwise() != (clockwise = !!clockwise)) {
			this.reverse();
			this._clockwise = clockwise;
		}
	},

	reverse: function() {
		this._segments.reverse();
		for (var i = 0, l = this._segments.length; i < l; i++) {
			var segment = this._segments[i];
			var handleIn = segment._handleIn;
			segment._handleIn = segment._handleOut;
			segment._handleOut = handleIn;
		}
		if (this._clockwise !== undefined)
			this._clockwise = !this._clockwise;
	},

	join: function(path) {
		if (path) {
			var segments = path._segments,
				last1 = this.getLastSegment(),
				last2 = path.getLastSegment();
			if (last1._point.equals(last2._point))
				path.reverse();
			var first2 = path.getFirstSegment();
			if (last1._point.equals(first2._point)) {
				last1.setHandleOut(first2._handleOut);
				this._add(segments.slice(1));
			} else {
				var first1 = this.getFirstSegment();
				if (first1._point.equals(first2._point))
					path.reverse();
				last2 = path.getLastSegment();
				if (first1._point.equals(last2._point)) {
					first1.setHandleIn(last2._handleIn);
					this._add(segments.slice(0, segments.length - 1), 0);
				} else {
					this._add(segments.slice(0));
				}
			}
			path.remove();
			var first1 = this.getFirstSegment();
			last1 = this.getLastSegment();
			if (last1._point.equals(first1._point)) {
				first1.setHandleIn(last1._handleIn);
				last1.remove();
				this.setClosed(true);
			}
			this._changed(Change.GEOMETRY);
			return true;
		}
		return false;
	},

	getLength: function() {
		if (this._length == null) {
			var curves = this.getCurves();
			this._length = 0;
			for (var i = 0, l = curves.length; i < l; i++)
				this._length += curves[i].getLength();
		}
		return this._length;
	},

	_getOffset: function(location) {
		var index = location && location.getIndex();
		if (index != null) {
			var curves = this.getCurves(),
				offset = 0;
			for (var i = 0; i < index; i++)
				offset += curves[i].getLength();
			var curve = curves[index];
			return offset + curve.getLength(0, location.getParameter());
		}
		return null;
	},

	getLocation: function(point) {
		var curves = this.getCurves();
		for (var i = 0, l = curves.length; i < l; i++) {
			var curve = curves[i];
			var t = curve.getParameter(point);
			if (t != null)
				return new CurveLocation(curve, t);
		}
		return null;
	},

	getLocationAt: function(offset, isParameter) {
		var curves = this.getCurves(),
			length = 0;
		if (isParameter) {
			var index = ~~offset; 
			return new CurveLocation(curves[index], offset - index);
		}
		for (var i = 0, l = curves.length; i < l; i++) {
			var start = length,
				curve = curves[i];
			length += curve.getLength();
			if (length >= offset) {
				return new CurveLocation(curve,
						curve.getParameterAt(offset - start));
			}
		}
		if (offset <= this.getLength())
			return new CurveLocation(curves[curves.length - 1], 1);
		return null;
	},

	getPointAt: function(offset, isParameter) {
		var loc = this.getLocationAt(offset, isParameter);
		return loc && loc.getPoint();
	},

	getTangentAt: function(offset, isParameter) {
		var loc = this.getLocationAt(offset, isParameter);
		return loc && loc.getTangent();
	},

	getNormalAt: function(offset, isParameter) {
		var loc = this.getLocationAt(offset, isParameter);
		return loc && loc.getNormal();
	},

	getNearestLocation: function(point, matrix) {
		var curves = this.getCurves(),
			minDist = Infinity,
			minLoc = null;
		for (var i = 0, l = curves.length; i < l; i++) {
			var loc = curves[i].getNearestLocation(point, matrix);
			if (loc._distance < minDist) {
				minDist = loc._distance;
				minLoc = loc;
			}
		}
		return minLoc;
	},

	getNearestPoint: function(point, matrix) {
		return this.getNearestLocation(point, matrix).getPoint();
	},

	contains: function(point, matrix) {
		point = Point.read(arguments);
		if (!this._closed || !this.getRoughBounds(matrix)._containsPoint(point))
			return false;
		var curves = this.getCurves(),
			crossings = 0,
			roots = [];
		for (var i = 0, l = curves.length; i < l; i++)
			crossings += curves[i].getCrossings(point, matrix, roots);
		return (crossings & 1) == 1;
	},

	_hitTest: function(point, options, matrix) {
		/* modified_code start*/
		if(options.class && options.class != this.class){
			return null;
		}
		/* modified_code end*/
		var tolerance = options.tolerance || 0,
			radius = (options.stroke ? this.getStrokeWidth() / 2 : 0) + tolerance,
			loc,
			res;
		var coords = [],
			that = this;
		function checkSegment(segment, ends) {
			segment._transformCoordinates(matrix, coords);
			for (var j = ends || options.segments ? 0 : 2,
					m = !ends && options.handles ? 6 : 2; j < m; j += 2) {
				if (point.getDistance(coords[j], coords[j + 1]) < tolerance)
					return new HitResult(j == 0 ? 'segment'
							: 'handle-' + (j == 2 ? 'in' : 'out'),
							that, { segment: segment });
			}
		}
		
		if (options.ends && !options.segments && !this._closed) {
			if (res = checkSegment(this.getFirstSegment(), true)
					|| checkSegment(this.getLastSegment(), true))
				return res;
		} else if (options.segments || options.handles) {
			for (var i = 0, l = this._segments.length; i < l; i++) {
				if (res = checkSegment(this._segments[i]))
					return res;
			}
		}
		if (options.stroke && radius > 0)
			loc = this.getNearestLocation(point, matrix);
		if (!(loc && loc._distance <= radius) && options.fill
				&& this.getFillColor() && this.contains(point, matrix))
			return new HitResult('fill', this);
		if (!loc && options.stroke && radius > 0)
			loc = this.getNearestLocation(point, matrix);
		if (loc && loc._distance <= radius)
			return options.stroke
					? new HitResult('stroke', this, { location: loc })
					: new HitResult('fill', this);
	}

}, new function() { 

	function drawHandles(ctx, segments) {
		for (var i = 0, l = segments.length; i < l; i++) {
			var segment = segments[i],
				point = segment._point,
				state = segment._selectionState,
				selected = state & SelectionState.POINT;
			if (selected || (state & SelectionState.HANDLE_IN))
				drawHandle(ctx, point, segment._handleIn);
			if (selected || (state & SelectionState.HANDLE_OUT))
				drawHandle(ctx, point, segment._handleOut);
			ctx.save();
			ctx.beginPath();
			ctx.rect(point._x - 2, point._y - 2, 4, 4);
			ctx.fill();
			if (!selected) {
				ctx.beginPath();
				ctx.rect(point._x - 1, point._y - 1, 2, 2);
				ctx.fillStyle = '#ffffff';
				ctx.fill();
			}
			ctx.restore();
		}
	}

	function drawHandle(ctx, point, handle) {
		if (!handle.isZero()) {
			var handleX = point._x + handle._x,
				handleY = point._y + handle._y;
			ctx.beginPath();
			ctx.moveTo(point._x, point._y);
			ctx.lineTo(handleX, handleY);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(handleX, handleY, 1.75, 0, Math.PI * 2, true);
			ctx.fill();
		}
	}

	function drawSegments(ctx, path) {
		var segments = path._segments,
			length = segments.length,
			handleOut, outX, outY;

		function drawSegment(i) {
			var segment = segments[i],
				point = segment._point,
				x = point._x,
				y = point._y,
				handleIn = segment._handleIn;
			if (!handleOut) {
				ctx.moveTo(x, y);
			} else {
				if (handleIn.isZero() && handleOut.isZero()) {
					ctx.lineTo(x, y);
				} else {
					ctx.bezierCurveTo(outX, outY,
							handleIn._x + x, handleIn._y + y, x, y);
				}
			}
			handleOut = segment._handleOut;
			outX = handleOut._x + x;
			outY = handleOut._y + y;
		}

		for (var i = 0; i < length; i++)
			drawSegment(i);
		if (path._closed && length > 1)
			drawSegment(0);
	}

	function drawDashes(ctx, path, dashArray, dashOffset) {
		var flattener = new PathFlattener(path),
			from = dashOffset, to,
			i = 0;
		while (from < flattener.length) {
			to = from + dashArray[(i++) % dashArray.length];
			flattener.drawPart(ctx, from, to);
			from = to + dashArray[(i++) % dashArray.length];
		}
	}

	return {
		draw: function(ctx, param) {
			ctx.save();
			this._matrix.applyToContext(ctx);
			
			if (!param.compound)
				ctx.beginPath();

			var fillColor = this.getFillColor(),
				strokeColor = this.getStrokeColor(),
				dashArray = this.getDashArray() || [], 
				hasDash = !!dashArray.length;

			if (param.compound || param.selection || this._clipMask || fillColor
					|| strokeColor && !hasDash) {
				drawSegments(ctx, this);
			}

			if (param.selection) {
				ctx.stroke();
				drawHandles(ctx, this._segments);
			} else if (this._clipMask) {
				ctx.clip();
			} else if (!param.compound && (fillColor || strokeColor)) {
				ctx.save();
				this._setStyles(ctx);
				if (!fillColor || !strokeColor)
					ctx.globalAlpha = this._opacity;
				if (fillColor) {
					ctx.fillStyle = fillColor.getCanvasStyle(ctx);
					ctx.fill();
				}
				if (strokeColor) {
					ctx.strokeStyle = strokeColor.getCanvasStyle(ctx);
					if (hasDash) {
						ctx.beginPath();
						drawDashes(ctx, this, dashArray, this.getDashOffset());
					}
					ctx.stroke();
				}
				ctx.restore();
			}
			ctx.restore();
		}
	};
}, new function() { 

	function getFirstControlPoints(rhs) {
		var n = rhs.length,
			x = [], 
			tmp = [], 
			b = 2;
		x[0] = rhs[0] / b;
		for (var i = 1; i < n; i++) {
			tmp[i] = 1 / b;
			b = (i < n - 1 ? 4 : 2) - tmp[i];
			x[i] = (rhs[i] - x[i - 1]) / b;
		}
		for (var i = 1; i < n; i++) {
			x[n - i - 1] -= tmp[n - i] * x[n - i];
		}
		return x;
	};

	var styles = {
		getStrokeWidth: 'lineWidth',
		getStrokeJoin: 'lineJoin',
		getStrokeCap: 'lineCap',
		getMiterLimit: 'miterLimit'
	};

	return {
		_setStyles: function(ctx) {
			for (var i in styles) {
				var style = this._style[i]();
				if (style)
					ctx[styles[i]] = style;
			}
		},

		smooth: function() {
			var segments = this._segments,
				size = segments.length,
				n = size,
				overlap;

			if (size <= 2)
				return;

			if (this._closed) {
				overlap = Math.min(size, 4);
				n += Math.min(size, overlap) * 2;
			} else {
				overlap = 0;
			}
			var knots = [];
			for (var i = 0; i < size; i++)
				knots[i + overlap] = segments[i]._point;
			if (this._closed) {
				for (var i = 0; i < overlap; i++) {
					knots[i] = segments[i + size - overlap]._point;
					knots[i + size + overlap] = segments[i]._point;
				}
			} else {
				n--;
			}
			var rhs = [];

			for (var i = 1; i < n - 1; i++)
				rhs[i] = 4 * knots[i]._x + 2 * knots[i + 1]._x;
			rhs[0] = knots[0]._x + 2 * knots[1]._x;
			rhs[n - 1] = 3 * knots[n - 1]._x;
			var x = getFirstControlPoints(rhs);

			for (var i = 1; i < n - 1; i++)
				rhs[i] = 4 * knots[i]._y + 2 * knots[i + 1]._y;
			rhs[0] = knots[0]._y + 2 * knots[1]._y;
			rhs[n - 1] = 3 * knots[n - 1]._y;
			var y = getFirstControlPoints(rhs);

			if (this._closed) {
				for (var i = 0, j = size; i < overlap; i++, j++) {
					var f1 = (i / overlap);
					var f2 = 1 - f1;
					x[j] = x[i] * f1 + x[j] * f2;
					y[j] = y[i] * f1 + y[j] * f2;
					var ie = i + overlap, je = j + overlap;
					x[je] = x[ie] * f2 + x[je] * f1;
					y[je] = y[ie] * f2 + y[je] * f1;
				}
				n--;
			}
			var handleIn = null;
			for (var i = overlap; i <= n - overlap; i++) {
				var segment = segments[i - overlap];
				if (handleIn)
					segment.setHandleIn(handleIn.subtract(segment._point));
				if (i < n) {
					segment.setHandleOut(
							new Point(x[i], y[i]).subtract(segment._point));
					if (i < n - 1)
						handleIn = new Point(
								2 * knots[i + 1]._x - x[i + 1],
								2 * knots[i + 1]._y - y[i + 1]);
					else
						handleIn = new Point(
								(knots[n]._x + x[n - 1]) / 2,
								(knots[n]._y + y[n - 1]) / 2);
				}
			}
			if (this._closed && handleIn) {
				var segment = this._segments[0];
				segment.setHandleIn(handleIn.subtract(segment._point));
			}
		}
	};
}, new function() { 
	function getCurrentSegment(that) {
		var segments = that._segments;
		if (segments.length == 0)
			throw new Error('Use a moveTo() command first');
		return segments[segments.length - 1];
	}

	return {
		moveTo: function(point) {
			if (!this._segments.length)
				this._add([ new Segment(Point.read(arguments)) ]);
		},

		moveBy: function(point) {
			throw new Error('moveBy() is unsupported on Path items.');
		},

		lineTo: function(point) {
			this._add([ new Segment(Point.read(arguments)) ]);
		},

		cubicCurveTo: function(handle1, handle2, to) {
			handle1 = Point.read(arguments, 0, 1);
			handle2 = Point.read(arguments, 1, 1);
			to = Point.read(arguments, 2, 1);
			var current = getCurrentSegment(this);
			current.setHandleOut(handle1.subtract(current._point));
			this._add([ new Segment(to, handle2.subtract(to)) ]);
		},

		quadraticCurveTo: function(handle, to) {
			handle = Point.read(arguments, 0, 1);
			to = Point.read(arguments, 1, 1);
			var current = getCurrentSegment(this)._point;
			this.cubicCurveTo(
				handle.add(current.subtract(handle).multiply(1/3)),
				handle.add(to.subtract(handle).multiply(1/3)),
				to
			);
		},

		curveTo: function(through, to, parameter) {
			through = Point.read(arguments, 0, 1);
			to = Point.read(arguments, 1, 1);
			var t = Base.pick(parameter, 0.5),
				t1 = 1 - t,
				current = getCurrentSegment(this)._point,
				handle = through.subtract(current.multiply(t1 * t1))
					.subtract(to.multiply(t * t)).divide(2 * t * t1);
			if (handle.isNaN())
				throw new Error(
					'Cannot put a curve through points with parameter = ' + t);
			this.quadraticCurveTo(handle, to);
		},

		arcTo: function(to, clockwise ) {
			var current = getCurrentSegment(this),
				from = current._point,
				through;
			if (clockwise === undefined)
				clockwise = true;
			if (typeof clockwise === 'boolean') {
				to = Point.read(arguments, 0, 1);
				var middle = from.add(to).divide(2),
				through = middle.add(middle.subtract(from).rotate(
						clockwise ? -90 : 90));
			} else {
				through = Point.read(arguments, 0, 1);
				to = Point.read(arguments, 1, 1);
			}
			var l1 = new Line(from.add(through).divide(2),
					through.subtract(from).rotate(90)),
			 	l2 = new Line(through.add(to).divide(2),
					to.subtract(through).rotate(90)),
				center = l1.intersect(l2),
				line = new Line(from, to, true),
				throughSide = line.getSide(through);
			if (!center) {
				if (!throughSide)
					return this.lineTo(to);
				throw new Error("Cannot put an arc through the given points: "
					+ [from, through, to]);
			}
			var vector = from.subtract(center),
				radius = vector.getLength(),
				extent = vector.getDirectedAngle(to.subtract(center)),
				centerSide = line.getSide(center);
			if (centerSide == 0) {
				extent = throughSide * Math.abs(extent);
			} else if (throughSide == centerSide) {
				extent -= 360 * (extent < 0 ? -1 : 1);
			}
			var ext = Math.abs(extent),
				count =  ext >= 360 ? 4 : Math.ceil(ext / 90),
				inc = extent / count,
				half = inc * Math.PI / 360,
				z = 4 / 3 * Math.sin(half) / (1 + Math.cos(half)),
				segments = [];
			for (var i = 0; i <= count; i++) {
				var pt = i < count ? center.add(vector) : to;
				var out = i < count ? vector.rotate(90).multiply(z) : null;
				if (i == 0) {
					current.setHandleOut(out);
				} else {
					segments.push(
						new Segment(pt, vector.rotate(-90).multiply(z), out));
				}
				vector = vector.rotate(inc);
			}
			this._add(segments);
		},

		lineBy: function(vector) {
			vector = Point.read(arguments);
			var current = getCurrentSegment(this);
			this.lineTo(current._point.add(vector));
		},

		curveBy: function(throughVector, toVector, parameter) {
			throughVector = Point.read(throughVector);
			toVector = Point.read(toVector);
			var current = getCurrentSegment(this)._point;
			this.curveTo(current.add(throughVector), current.add(toVector),
					parameter);
		},

		arcBy: function(throughVector, toVector) {
			throughVector = Point.read(throughVector);
			toVector = Point.read(toVector);
			var current = getCurrentSegment(this)._point;
			this.arcBy(current.add(throughVector), current.add(toVector));
		},

		closePath: function() {
			this.setClosed(true);
		}
	};
}, new function() { 

	function getBounds(that, matrix, strokePadding) {
		var segments = that._segments,
			first = segments[0];
		if (!first)
			return null;
		var coords = new Array(6),
			prevCoords = new Array(6);
		if (matrix && matrix.isIdentity())
			matrix = null;
		first._transformCoordinates(matrix, prevCoords, false);
		var min = prevCoords.slice(0, 2),
			max = min.slice(0), 
			tMin = Numerical.TOLERANCE,
			tMax = 1 - tMin;
		function processSegment(segment) {
			segment._transformCoordinates(matrix, coords, false);

			for (var i = 0; i < 2; i++) {
				var v0 = prevCoords[i], 
					v1 = prevCoords[i + 4], 
					v2 = coords[i + 2], 
					v3 = coords[i]; 

				function add(value, t) {
					var padding = 0;
					if (value == null) {
						var u = 1 - t;
						value = u * u * u * v0
								+ 3 * u * u * t * v1
								+ 3 * u * t * t * v2
								+ t * t * t * v3;
						padding = strokePadding ? strokePadding[i] : 0;
					}
					var left = value - padding,
						right = value + padding;
					if (left < min[i])
						min[i] = left;
					if (right > max[i])
						max[i] = right;

				}
				add(v3, null);

				var a = 3 * (v1 - v2) - v0 + v3,
					b = 2 * (v0 + v2) - 4 * v1,
					c = v1 - v0;

				if (a == 0) {
					if (b == 0)
					    continue;
					var t = -c / b;
					if (tMin < t && t < tMax)
						add(null, t);
					continue;
				}

				var q = b * b - 4 * a * c;
				if (q < 0)
					continue;
				var sqrt = Math.sqrt(q),
					f = -0.5 / a,
				 	t1 = (b - sqrt) * f,
					t2 = (b + sqrt) * f;
				if (tMin < t1 && t1 < tMax)
					add(null, t1);
				if (tMin < t2 && t2 < tMax)
					add(null, t2);
			}
			var tmp = prevCoords;
			prevCoords = coords;
			coords = tmp;
		}
		for (var i = 1, l = segments.length; i < l; i++)
			processSegment(segments[i]);
		if (that._closed)
			processSegment(first);
		return Rectangle.create(min[0], min[1],
					max[0] - min[0], max[1] - min[1]);
	}

	function getPenPadding(radius, matrix) {
		if (!matrix)
			return [radius, radius];
		var mx = matrix.createShiftless(),
			hor = mx.transform(new Point(radius, 0)),
			ver = mx.transform(new Point(0, radius)),
			phi = hor.getAngleInRadians(),
			a = hor.getLength(),
			b = ver.getLength();
		var tx = - Math.atan(b * Math.tan(phi)),
			ty = + Math.atan(b / Math.tan(phi)),
			x = a * Math.cos(tx) * Math.cos(phi)
				- b * Math.sin(tx) * Math.sin(phi),
			y = b * Math.sin(ty) * Math.cos(phi)
				+ a * Math.cos(ty) * Math.sin(phi);
		return [Math.abs(x), Math.abs(y)];
	}

	return {
		getBounds: function() {
			var useCache = arguments[0] === undefined;
			if (useCache && this._bounds)
				return this._bounds;
			var bounds = this._createBounds(getBounds(this, arguments[0]));
			if (useCache)
				this._bounds = bounds;
			return bounds;
		},

		getStrokeBounds: function() {
			if (!this._style._strokeColor || !this._style._strokeWidth)
				return this.getBounds.apply(this, arguments);
			var useCache = arguments[0] === undefined;
			if (useCache && this._strokeBounds)
				return this._strokeBounds;
			var matrix = arguments[0], 
				width = this.getStrokeWidth(),
				radius = width / 2,
				padding = getPenPadding(radius, matrix),
				join = this.getStrokeJoin(),
				cap = this.getStrokeCap(),
				miter = this.getMiterLimit() * width / 2,
				segments = this._segments,
				length = segments.length,
				bounds = getBounds(this, matrix, getPenPadding(radius));
			var joinBounds = new Rectangle(new Size(padding).multiply(2));

			function add(point) {
				bounds = bounds.include(matrix
					? matrix.transform(point) : point);
			}

			function addBevelJoin(curve, t) {
				var point = curve.getPoint(t),
					normal = curve.getNormal(t).normalize(radius);
				add(point.add(normal));
				add(point.subtract(normal));
			}

			function addJoin(segment, join) {
				if (join === 'round' || !segment._handleIn.isZero()
						&& !segment._handleOut.isZero()) {
					bounds = bounds.unite(joinBounds.setCenter(matrix
						? matrix.transform(segment._point) : segment._point));
				} else if (join == 'bevel') {
					var curve = segment.getCurve();
					addBevelJoin(curve, 0);
					addBevelJoin(curve.getPrevious(), 1);
				} else if (join == 'miter') {
					var curve2 = segment.getCurve(),
						curve1 = curve2.getPrevious(),
						point = curve2.getPoint(0),
						normal1 = curve1.getNormal(1).normalize(radius),
						normal2 = curve2.getNormal(0).normalize(radius),
						line1 = new Line(point.subtract(normal1),
								new Point(-normal1.y, normal1.x)),
						line2 = new Line(point.subtract(normal2),
								new Point(-normal2.y, normal2.x)),
						corner = line1.intersect(line2);
					if (!corner || point.getDistance(corner) > miter) {
						addJoin(segment, 'bevel');
					} else {
						add(corner);
					}
				}
			}

			function addCap(segment, cap, t) {
				switch (cap) {
				case 'round':
					return addJoin(segment, cap);
				case 'butt':
				case 'square':
					var curve = segment.getCurve(),
						point = curve.getPoint(t),
						normal = curve.getNormal(t).normalize(radius);
					if (cap === 'square')
						point = point.add(normal.y, -normal.x);
					add(point.add(normal));
					add(point.subtract(normal));
					break;
				}
			}

			for (var i = 1, l = length - (this._closed ? 0 : 1); i < l; i++) {
				addJoin(segments[i], join);
			}
			if (this._closed) {
				addJoin(segments[0], join);
			} else {
				addCap(segments[0], cap, 0);
				addCap(segments[length - 1], cap, 1);
			}
			if (useCache)
				this._strokeBounds = bounds;
			return bounds;
		},

		getHandleBounds: function() {
			var matrix = arguments[0],
				useCache = matrix === undefined;
			if (useCache && this._handleBounds)
				return this._handleBounds;
			var coords = new Array(6),
				stroke = arguments[1] / 2 || 0, 
				join = arguments[2] / 2 || 0, 
				open = !this._closed,
				x1 = Infinity,
				x2 = -x1,
				y1 = x1,
				y2 = x2;
			for (var i = 0, l = this._segments.length; i < l; i++) {
				var segment = this._segments[i];
				segment._transformCoordinates(matrix, coords, false);
				for (var j = 0; j < 6; j += 2) {
					var padding = j == 0 ? join : stroke,
						x = coords[j],
						y = coords[j + 1],
						xn = x - padding,
						xx = x + padding,
						yn = y - padding,
						yx = y + padding;
					if (xn < x1) x1 = xn;
					if (xx > x2) x2 = xx;
					if (yn < y1) y1 = yn;
					if (yx > y2) y2 = yx;
				}
			}
			var bounds = Rectangle.create(x1, y1, x2 - x1, y2 - y1);
			if (useCache)
				this._handleBounds = bounds;
			return bounds;
		},

		getRoughBounds: function() {
			var useCache = arguments[0] === undefined;
			if (useCache && this._roughBounds)
				return this._roughBounds;
			var bounds = this.getHandleBounds(arguments[0], this.strokeWidth,
					this.getStrokeJoin() == 'miter'
						? this.strokeWidth * this.getMiterLimit()
						: this.strokeWidth);
			if (useCache)
				this._roughBounds = bounds;
			return bounds;
		}
	};
});

Path.inject({ statics: new function() {
	var kappa = 2 / 3 * (Math.sqrt(2) - 1);

	var ovalSegments = [
		new Segment([0, 0.5], [0, kappa ], [0, -kappa]),
		new Segment([0.5, 0], [-kappa, 0], [kappa, 0 ]),
		new Segment([1, 0.5], [0, -kappa], [0, kappa ]),
		new Segment([0.5, 1], [kappa, 0 ], [-kappa, 0])
	];

	return {
		Line: function() {
			var step = Math.floor(arguments.length / 2);
			return new Path(
				Segment.read(arguments, 0, step),
				Segment.read(arguments, step, step)
			);
		},

		Rectangle: function(rect) {
			rect = Rectangle.read(arguments);
			var left = rect.x,
				top = rect.y
				right = left + rect.width,
				bottom = top + rect.height,
				path = new Path();
			path._add([
				new Segment(Point.create(left, top)),
				new Segment(Point.create(left, bottom)),
				new Segment(Point.create(right, bottom)),
				new Segment(Point.create(right, top))
			]);
			path._closed = true;
			return path;
		},

		RoundRectangle: function(rect, size) {
			if (arguments.length == 2) {
				rect = Rectangle.read(arguments, 0, 1);
				size = Size.read(arguments, 1, 1);
			} else if (arguments.length == 6) {
				rect = Rectangle.read(arguments, 0, 4);
				size = Size.read(arguments, 4, 2);
			}
			size = Size.min(size, rect.getSize(true).divide(2));
			var path = new Path(),
				uSize = size.multiply(kappa * 2),
				bl = rect.getBottomLeft(true),
				tl = rect.getTopLeft(true),
				tr = rect.getTopRight(true),
				br = rect.getBottomRight(true);
			path._add([
				new Segment(bl.add(size.width, 0), null, [-uSize.width, 0]),
				new Segment(bl.subtract(0, size.height), [0, uSize.height], null),

				new Segment(tl.add(0, size.height), null, [0, -uSize.height]),
				new Segment(tl.add(size.width, 0), [-uSize.width, 0], null),

				new Segment(tr.subtract(size.width, 0), null, [uSize.width, 0]),
				new Segment(tr.add(0, size.height), [0, -uSize.height], null),

				new Segment(br.subtract(0, size.height), null, [0, uSize.height]),
				new Segment(br.subtract(size.width, 0), [uSize.width, 0], null)
			]);
			path._closed = true;
			return path;
		},

		Oval: function(rect) {
			rect = Rectangle.read(arguments);
			var path = new Path(),
				point = rect.getPoint(true),
				size = rect.getSize(true),
				segments = new Array(4);
			for (var i = 0; i < 4; i++) {
				var segment = ovalSegments[i];
				segments[i] = new Segment(
					segment._point.multiply(size).add(point),
					segment._handleIn.multiply(size),
					segment._handleOut.multiply(size)
				);
			}
			path._add(segments);
			path._closed = true;
			return path;
		},

		Circle: function(center, radius) {
			if (arguments.length == 3) {
				center = Point.read(arguments, 0, 2);
				radius = arguments[2];
			} else {
				center = Point.read(arguments, 0, 1);
			}
			return Path.Oval(new Rectangle(center.subtract(radius),
					Size.create(radius * 2, radius * 2)));
		},

		Arc: function(from, through, to) {
			var path = new Path();
			path.moveTo(from);
			path.arcTo(through, to);
			return path;
		},

		RegularPolygon: function(center, numSides, radius) {
			center = Point.read(arguments, 0, 1);
			var path = new Path(),
				step = 360 / numSides,
				three = !(numSides % 3),
				vector = new Point(0, three ? -radius : radius),
				offset = three ? -1 : 0.5,
				segments = new Array(numSides);
			for (var i = 0; i < numSides; i++) {
				segments[i] = new Segment(center.add(
					vector.rotate((i + offset) * step)));
			}
			path._add(segments);
			path._closed = true;
			return path;
		},

		Star: function(center, numPoints, radius1, radius2) {
			center = Point.read(arguments, 0, 1);
			numPoints *= 2;
			var path = new Path(),
				step = 360 / numPoints,
				vector = new Point(0, -1),
				segments = new Array(numPoints);
			for (var i = 0; i < numPoints; i++) {
				segments[i] = new Segment(center.add(
					vector.rotate(step * i).multiply(i % 2 ? radius2 : radius1)));
			}
			path._add(segments);
			path._closed = true;
			return path;
		}
	};
}});

var CompoundPath = this.CompoundPath = PathItem.extend({
	initialize: function(paths) {
		this.base();
		this._children = [];
		this._namedChildren = {};
		var items = !paths || !Array.isArray(paths)
				|| typeof paths[0] !== 'object' ? arguments : paths;
		this.addChildren(items);
	},

	insertChild: function(index, item) {
		this.base(index, item);
		if (item._clockwise === undefined)
			item.setClockwise(item._index == 0);
	},

	simplify: function() {
		if (this._children.length == 1) {
			var child = this._children[0];
			child.insertAbove(this);
			this.remove();
			return child;
		}
		return this;
	},

	smooth: function() {
		for (var i = 0, l = this._children.length; i < l; i++)
			this._children[i].smooth();
	},

	draw: function(ctx, param) {
		var l = this._children.length;
		if (l == 0) {
			return;
		}
		var firstChild = this._children[0];
		ctx.beginPath();
		param.compound = true;
		for (var i = 0; i < l; i++)
			Item.draw(this._children[i], ctx, param);
		firstChild._setStyles(ctx);
		var fillColor = firstChild.getFillColor(),
			strokeColor = firstChild.getStrokeColor();
		if (fillColor) {
			ctx.fillStyle = fillColor.getCanvasStyle(ctx);
			ctx.fill();
		}
		if (strokeColor) {
			ctx.strokeStyle = strokeColor.getCanvasStyle(ctx);
			ctx.stroke();
		}
		param.compound = false;
	}
}, new function() { 
	function getCurrentPath(that) {
		if (!that._children.length)
			throw new Error('Use a moveTo() command first');
		return that._children[that._children.length - 1];
	}

	var fields = {
		moveTo: function(point) {
			var path = new Path();
			this.addChild(path);
			path.moveTo.apply(path, arguments);
		},

		moveBy: function(point) {
			this.moveTo(getCurrentPath(this).getLastSegment()._point.add(
					Point.read(arguments)));
		},

		closePath: function() {
			getCurrentPath(this).setClosed(true);
		}
	};

	Base.each(['lineTo', 'cubicCurveTo', 'quadraticCurveTo', 'curveTo',
			'arcTo', 'lineBy', 'curveBy', 'arcBy'], function(key) {
		fields[key] = function() {
			var path = getCurrentPath(this);
			path[key].apply(path, arguments);
		};
	});

	return fields;
});

var PathFlattener = Base.extend({
	initialize: function(path) {
		this.curves = []; 
		this.parts = []; 
		this.length = 0; 
		this.index = 0;

		var segments = path._segments,
			segment1 = segments[0],
			segment2,
			that = this;

		function addCurve(segment1, segment2) {
			var curve = Curve.getValues(segment1, segment2);
			that.curves.push(curve);
			that._computeParts(curve, segment1._index, 0, 1);
		}

		for (var i = 1, l = segments.length; i < l; i++) {
			segment2 = segments[i];
			addCurve(segment1, segment2);
			segment1 = segment2;
		}
		if (path._closed)
			addCurve(segment2, segments[0]);
	},

	_computeParts: function(curve, index, minT, maxT) {
		if ((maxT - minT) > 1 / 32 && !Curve.isFlatEnough(curve)) {
			var curves = Curve.subdivide(curve);
			var halfT = (minT + maxT) / 2;
			this._computeParts(curves[0], index, minT, halfT);
			this._computeParts(curves[1], index, halfT, maxT);
		} else {
			var x = curve[6] - curve[0],
				y = curve[7] - curve[1],
				dist = Math.sqrt(x * x + y * y);
			if (dist > Numerical.TOLERANCE) {
				this.length += dist;
				this.parts.push({
					offset: this.length,
					value: maxT,
					index: index
				});
			}
		}
	},

	getParameterAt: function(offset) {
		var i, j = this.index;
		for (;;) {
			i = j;
			if (j == 0 || this.parts[--j].offset < offset)
				break;
		}
		for (var l = this.parts.length; i < l; i++) {
			var part = this.parts[i];
			if (part.offset >= offset) {
				this.index = i;
				var prev = this.parts[i - 1];
				var prevVal = prev && prev.index == part.index ? prev.value : 0,
					prevLen = prev ? prev.offset : 0;
				return {
					value: prevVal + (part.value - prevVal)
						* (offset - prevLen) /  (part.offset - prevLen),
					index: part.index
				};
			}
		}
		var part = this.parts[this.parts.length - 1];
		return {
			value: 1,
			index: part.index
		};
	},

	evaluate: function(offset, type) {
		var param = this.getParameterAt(offset);
		return Curve.evaluate(this.curves[param.index], param.value, type);
	},

	drawPart: function(ctx, from, to) {
		from = this.getParameterAt(from);
		to = this.getParameterAt(to);
		for (var i = from.index; i <= to.index; i++) {
			var curve = Curve.getPart(this.curves[i],
					i == from.index ? from.value : 0,
					i == to.index ? to.value : 1);
			if (i == from.index)
				ctx.moveTo(curve[0], curve[1]);
			ctx.bezierCurveTo.apply(ctx, curve.slice(2));
		}
	}
});

var PathFitter = Base.extend({
	initialize: function(path, error) {
		this.points = [];
		var segments = path._segments,
			prev;
		for (var i = 0, l = segments.length; i < l; i++) {
			var point = segments[i].point.clone();
			if (!prev || !prev.equals(point)) {
				this.points.push(point);
				prev = point;
			}
		}
		this.error = error;
	},

	fit: function() {
		this.segments = [new Segment(this.points[0])];
		this.fitCubic(0, this.points.length - 1,
				this.points[1].subtract(this.points[0]).normalize(),
				this.points[this.points.length - 2].subtract(
					this.points[this.points.length - 1]).normalize());
		return this.segments;
	},

	fitCubic: function(first, last, tan1, tan2) {
		if (last - first == 1) {
			var pt1 = this.points[first],
				pt2 = this.points[last],
				dist = pt1.getDistance(pt2) / 3;
			this.addCurve([pt1, pt1.add(tan1.normalize(dist)),
					pt2.add(tan2.normalize(dist)), pt2]);
			return;
		}
		var uPrime = this.chordLengthParameterize(first, last),
			maxError = Math.max(this.error, this.error * this.error),
			error,
			split;
		for (var i = 0; i <= 4; i++) {
			var curve = this.generateBezier(first, last, uPrime, tan1, tan2);
			var max = this.findMaxError(first, last, curve, uPrime);
			if (max.error < this.error) {
				this.addCurve(curve);
				return;
			}
			split = max.index;
			if (max.error >= maxError)
				break;
			this.reparameterize(first, last, uPrime, curve);
			maxError = max.error;
		}
		var V1 = this.points[split - 1].subtract(this.points[split]),
			V2 = this.points[split].subtract(this.points[split + 1]),
			tanCenter = V1.add(V2).divide(2).normalize();
		this.fitCubic(first, split, tan1, tanCenter);
		this.fitCubic(split, last, tanCenter.negate(), tan2);
	},

	addCurve: function(curve) {
		var prev = this.segments[this.segments.length - 1];
		prev.setHandleOut(curve[1].subtract(curve[0]));
		this.segments.push(
				new Segment(curve[3], curve[2].subtract(curve[3])));
	},

	generateBezier: function(first, last, uPrime, tan1, tan2) {
		var epsilon = Numerical.EPSILON,
			pt1 = this.points[first],
			pt2 = this.points[last],
		 	C = [[0, 0], [0, 0]],
			X = [0, 0];

		for (var i = 0, l = last - first + 1; i < l; i++) {
			var u = uPrime[i],
				t = 1 - u,
				b = 3 * u * t,
				b0 = t * t * t,
				b1 = b * t,
				b2 = b * u,
				b3 = u * u * u,
				a1 = tan1.normalize(b1),
				a2 = tan2.normalize(b2),
				tmp = this.points[first + i]
					.subtract(pt1.multiply(b0 + b1))
					.subtract(pt2.multiply(b2 + b3));
			C[0][0] += a1.dot(a1);
			C[0][1] += a1.dot(a2);
			C[1][0] = C[0][1];
			C[1][1] += a2.dot(a2);
			X[0] += a1.dot(tmp);
			X[1] += a2.dot(tmp);
		}

		var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1],
			alpha1, alpha2;
		if (Math.abs(detC0C1) > epsilon) {
			var detC0X  = C[0][0] * X[1]    - C[1][0] * X[0],
				detXC1  = X[0]    * C[1][1] - X[1]    * C[0][1];
			alpha1 = detXC1 / detC0C1;
			alpha2 = detC0X / detC0C1;
		} else {
			var c0 = C[0][0] + C[0][1],
				c1 = C[1][0] + C[1][1];
			if (Math.abs(c0) > epsilon) {
				alpha1 = alpha2 = X[0] / c0;
			} else if (Math.abs(c0) > epsilon) {
				alpha1 = alpha2 = X[1] / c1;
			} else {
				alpha1 = alpha2 = 0.;
			}
		}

		var segLength = pt2.getDistance(pt1);
		epsilon *= segLength;
		if (alpha1 < epsilon || alpha2 < epsilon) {
			alpha1 = alpha2 = segLength / 3;
		}

		return [pt1, pt1.add(tan1.normalize(alpha1)),
				pt2.add(tan2.normalize(alpha2)), pt2];
	},

	reparameterize: function(first, last, u, curve) {
		for (var i = first; i <= last; i++) {
			u[i - first] = this.findRoot(curve, this.points[i], u[i - first]);
		}
	},

	findRoot: function(curve, point, u) {
		var curve1 = [],
			curve2 = [];
		for (var i = 0; i <= 2; i++) {
			curve1[i] = curve[i + 1].subtract(curve[i]).multiply(3);
		}
		for (var i = 0; i <= 1; i++) {
			curve2[i] = curve1[i + 1].subtract(curve1[i]).multiply(2);
		}
		var pt = this.evaluate(3, curve, u),
		 	pt1 = this.evaluate(2, curve1, u),
		 	pt2 = this.evaluate(1, curve2, u),
		 	diff = pt.subtract(point),
			df = pt1.dot(pt1) + diff.dot(pt2);
		if (Math.abs(df) < Numerical.TOLERANCE)
			return u;
		return u - diff.dot(pt1) / df;
	},

	evaluate: function(degree, curve, t) {
		var tmp = curve.slice();
		for (var i = 1; i <= degree; i++) {
			for (var j = 0; j <= degree - i; j++) {
				tmp[j] = tmp[j].multiply(1 - t).add(tmp[j + 1].multiply(t));
			}
		}
		return tmp[0];
	},

	chordLengthParameterize: function(first, last) {
		var u = [0];
		for (var i = first + 1; i <= last; i++) {
			u[i - first] = u[i - first - 1]
					+ this.points[i].getDistance(this.points[i - 1]);
		}
		for (var i = 1, m = last - first; i <= m; i++) {
			u[i] /= u[m];
		}
		return u;
	},

	findMaxError: function(first, last, curve, u) {
		var index = Math.floor((last - first + 1) / 2),
			maxDist = 0;
		for (var i = first + 1; i < last; i++) {
			var P = this.evaluate(3, curve, u[i - first]);
			var v = P.subtract(this.points[i]);
			var dist = v.x * v.x + v.y * v.y; 
			if (dist >= maxDist) {
				maxDist = dist;
				index = i;
			}
		}
		return {
			error: maxDist,
			index: index
		};
	}
});

var TextItem = this.TextItem = Item.extend({
	initialize: function() {
		this.base();
		this._content = '';
		this._characterStyle = CharacterStyle.create(this);
		this.setCharacterStyle(this._project.getCurrentStyle());
		this._paragraphStyle = ParagraphStyle.create(this);
		this.setParagraphStyle();
	},

	_clone: function(copy) {
		copy._content = this._content;
		copy.setCharacterStyle(this._characterStyle);
		copy.setParagraphStyle(this._paragraphStyle);
		return this.base(copy);
	},

	getContent: function() {
		return this._content;
	},

	setContent: function(content) {
		this._changed(Change.CONTENT);
		this._content = '' + content;
	},

	getCharacterStyle: function() {
		return this._characterStyle;
	},

	setCharacterStyle: function(style) {
		this._characterStyle.initialize(style);
	},

	getParagraphStyle: function() {
		return this._paragraphStyle;
	},

	setParagraphStyle: function(style) {
		this._paragraphStyle.initialize(style);
	}
});

var PointText = this.PointText = TextItem.extend({
	initialize: function(point) {
		this.base();
		this._point = Point.read(arguments).clone();
		this._matrix = new Matrix().translate(this._point);
	},

	clone: function() {
		var copy = this._clone(new PointText(this._point));
		copy._matrix.initialize(this._matrix);
		return copy;
	},

	getPoint: function() {
		return LinkedPoint.create(this, 'setPoint',
				this._point.x, this._point.y);
	},

	setPoint: function(point) {
		this.translate(Point.read(arguments).subtract(this._point));
	},

	getPosition: function() {
		return this.getPoint();
	},

	setPosition: function(point) {
		this.setPoint.apply(this, arguments);
	},

	_transform: function(matrix, flags) {
		this._matrix.preConcatenate(matrix);
		matrix._transformPoint(this._point, this._point);
	},
	
	/*User defined function*/
	getWidth : function(){
		if (!this._content)
			return 0;
		var canvas = document.createElement('canvas');
		ctx = canvas.getContext('2d');
		ctx.save();
		ctx.font = this.getFontSize() + 'pt ' + this.getFont();
		textDimensions = ctx.measureText(this.content);
		ctx.restore();
		return textDimensions.width;
	},
	draw: function(ctx) {
		if (!this._content)
			return;
		ctx.save();
		ctx.font = this.getFontSize() + 'pt ' + this.getFont();
		ctx.textAlign = this.getJustification();
		this._matrix.applyToContext(ctx);
		var fillColor = this.getFillColor();
		var strokeColor = this.getStrokeColor();
		if (!fillColor || !strokeColor)
			ctx.globalAlpha = this._opacity;
		if (fillColor) {
			ctx.fillStyle = fillColor.getCanvasStyle(ctx);
			ctx.fillText(this._content, 0, 0);
		}
		if (strokeColor) {
			ctx.strokeStyle = strokeColor.getCanvasStyle(ctx);
			ctx.strokeText(this._content, 0, 0);
		}
		ctx.restore();
	}
}, new function() {
    var context = null;

    return {
        _getBounds: function(type, type2, args) {
            var matrix = args[0];
            if (!context)
                context = CanvasProvider.getCanvas(
                    Size.create(1, 1)).getContext('2d');
            var justification = this.getJustification(),
                x = 0;
            context.font = this.characterStyle.fontSize + 'px ' + this.characterStyle.font;
            var width = context.measureText(this.content).width;
            if (justification !== 'left')
                x -= width / (justification === 'center' ? 2: 1);
            var leading = this.characterStyle.fontSize * 1.2;

            var count = 1,
                bounds = Rectangle.create(x,
                    count ? leading / 4 + (count - 1) * leading : 0,
                    width, -count * leading);

            matrix = matrix ? matrix.clone().concatenate(this._matrix)
                : this._matrix;

            var b = matrix._transformBounds(bounds, bounds);

            b.x = b.x - b.width*0.4;
            b.width = b.width*1.8;
            b.y = b.y - b.height*0.4;
            b.height = b.height * 1.8;

            return b;
        }
    };
});

var Style = Item.extend({
	initialize: function(style) {
		var clone = style instanceof Style;
		return Base.each(this._defaults, function(value, key) {
			value = style && style[key] || value;
			this[key] = value && clone && value.clone
					? value.clone() : value;
		}, this);
	},

	statics: {
		create: function(item) {
			var style = new this(this.dont);
			style._item = item;
			return style;
		},

		extend: function(src) {
			var styleKey = src._style,
				flags = src._flags || {};
			src._owner.inject(Base.each(src._defaults, function(value, key) {
				var isColor = !!key.match(/Color$/),
					part = Base.capitalize(key),
					set = 'set' + part,
					get = 'get' + part;
				src[set] = function(value) {
					var children = this._item && this._item._children;
					value = isColor ? Color.read(arguments) : value;
					if (children) {
						for (var i = 0, l = children.length; i < l; i++)
							children[i][styleKey][set](value);
					} else {
						var old = this['_' + key];
						if (old != value && !(old && old.equals
									&& old.equals(value))) {
							this['_' + key] = value;
							if (isColor) {
								if (old)
									old._removeOwner(this._item);
								if (value)
									value._addOwner(this._item);
							}
							if (this._item)
								this._item._changed(flags[key] || Change.STYLE);
						}
					}
					return this;
				};
				src[get] = function() {
					var children = this._item && this._item._children,
						style;
					if (!children)
						return this['_' + key];
					for (var i = 0, l = children.length; i < l; i++) {
						var childStyle = children[i][styleKey][get]();
						if (!style) {
							style = childStyle;
						} else if (style != childStyle && !(style
								&& style.equals && style.equals(childStyle))) {
							return undefined;
						}
					}
					return style;
				};
				this[set] = function(value) {
					this[styleKey][set](value);
					return this;
				};
				this[get] = function() {
					return this[styleKey][get]();
				};
			}, {}));
			return this.base(src);
		}
	}
});

var PathStyle = this.PathStyle = Style.extend({
	_defaults: {
		fillColor: undefined,
		strokeColor: undefined,
		strokeWidth: 1,
		strokeCap: 'butt',
		strokeJoin: 'miter',
		miterLimit: 10,
		dashOffset: 0,
		dashArray: []
	},
	_flags: {
		strokeWidth: Change.STROKE,
		strokeCap: Change.STROKE,
		strokeJoin: Change.STROKE,
		miterLimit: Change.STROKE
	},
	_owner: Item,
	_style: '_style'

});

var ParagraphStyle = this.ParagraphStyle = Style.extend({
	_defaults: {
		justification: 'left'
	},
	_owner: TextItem,
	_style: '_paragraphStyle'

});

var CharacterStyle = this.CharacterStyle = PathStyle.extend({
	_defaults: Base.merge(PathStyle.prototype._defaults, {
		fillColor: 'black',
		fontSize: 10,
		font: 'sans-serif'
	}),
	_owner: TextItem,
	_style: '_characterStyle'

});

var Color = this.Color = Base.extend(new function() {

	var components = {
		gray: ['gray'],
		rgb: ['red', 'green', 'blue'],
		hsb: ['hue', 'saturation', 'brightness'],
		hsl: ['hue', 'saturation', 'lightness']
	};

	var colorCache = {},
		colorContext;

	function nameToRgbColor(name) {
		var color = colorCache[name];
		if (color)
			return color.clone();
		if (!colorContext) {
			var canvas = CanvasProvider.getCanvas(Size.create(1, 1));
			colorContext = canvas.getContext('2d');
			colorContext.globalCompositeOperation = 'copy';
		}
		colorContext.fillStyle = 'rgba(0,0,0,0)';
		colorContext.fillStyle = name;
		colorContext.fillRect(0, 0, 1, 1);
		var data = colorContext.getImageData(0, 0, 1, 1).data,
			rgb = [data[0] / 255, data[1] / 255, data[2] / 255];
		return (colorCache[name] = RgbColor.read(rgb)).clone();
	}

	function hexToRgbColor(string) {
		var hex = string.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
		if (hex.length >= 4) {
			var rgb = new Array(3);
			for (var i = 0; i < 3; i++) {
				var channel = hex[i + 1];
				rgb[i] = parseInt(channel.length == 1
						? channel + channel : channel, 16) / 255;
			}
			return RgbColor.read(rgb);
		}
	}

	var hsbIndices = [
		[0, 3, 1], 
		[2, 0, 1], 
		[1, 0, 3], 
		[1, 2, 0], 
		[3, 1, 0], 
		[0, 1, 2]  
	];

	var converters = {
		'rgb-hsb': function(color) {
			var r = color._red,
				g = color._green,
				b = color._blue,
				max = Math.max(r, g, b),
				min = Math.min(r, g, b),
				delta = max - min,
				h = delta == 0 ? 0
					:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
						: max == g ? (b - r) / delta + 2
						:            (r - g) / delta + 4) * 60, 
				s = max == 0 ? 0 : delta / max,
				v = max; 
			return new HsbColor(h, s, v, color._alpha);
		},

		'hsb-rgb': function(color) {
			var h = (color._hue / 60) % 6, 
				s = color._saturation,
				b = color._brightness,
				i = Math.floor(h), 
				f = h - i,
				i = hsbIndices[i],
				v = [
					b,						
					b * (1 - s),			
					b * (1 - s * f),		
					b * (1 - s * (1 - f))	
				];
			return new RgbColor(v[i[0]], v[i[1]], v[i[2]], color._alpha);
		},

		'rgb-hsl': function(color) {
			var r = color._red,
				g = color._green,
				b = color._blue,
				max = Math.max(r, g, b),
				min = Math.min(r, g, b),
				delta = max - min,
				achromatic = delta == 0,
				h = achromatic ? 0
					:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
						: max == g ? (b - r) / delta + 2
						:            (r - g) / delta + 4) * 60, 
				l = (max + min) / 2,
				s = achromatic ? 0 : l < 0.5
						? delta / (max + min)
						: delta / (2 - max - min);
			return new HslColor(h, s, l, color._alpha);
		},

		'hsl-rgb': function(color) {
			var s = color._saturation,
				h = color._hue / 360,
				l = color._lightness,
				t1, t2, c;
			if (s == 0)
				return new RgbColor(l, l, l, color._alpha);
			var t3s = [ h + 1 / 3, h, h - 1 / 3 ],
				t2 = l < 0.5 ? l * (1 + s) : l + s - l * s,
				t1 = 2 * l - t2,
				c = [];
			for (var i = 0; i < 3; i++) {
				var t3 = t3s[i];
				if (t3 < 0) t3 += 1;
				if (t3 > 1) t3 -= 1;
				c[i] = 6 * t3 < 1
					? t1 + (t2 - t1) * 6 * t3
					: 2 * t3 < 1
						? t2
						: 3 * t3 < 2
							? t1 + (t2 - t1) * ((2 / 3) - t3) * 6
							: t1;
			}
			return new RgbColor(c[0], c[1], c[2], color._alpha);
		},

		'rgb-gray': function(color) {
			return new GrayColor(1 - (color._red * 0.2989 + color._green * 0.587
					+ color._blue * 0.114), color._alpha);
		},

		'gray-rgb': function(color) {
			var comp = 1 - color._gray;
			return new RgbColor(comp, comp, comp, color._alpha);
		},

		'gray-hsb': function(color) {
			return new HsbColor(0, 0, 1 - color._gray, color._alpha);
		},

		'gray-hsl': function(color) {
			return new HslColor(0, 0, 1 - color._gray, color._alpha);
		}
	};

	var fields = {
		_readNull: true,

		initialize: function(arg) {
			var isArray = Array.isArray(arg),
				type = this._colorType;
			if (typeof arg === 'object' && !isArray) {
				if (!type) {
					return arg.red !== undefined
						? new RgbColor(arg.red, arg.green, arg.blue, arg.alpha)
						: arg.gray !== undefined
						? new GrayColor(arg.gray, arg.alpha)
						: arg.lightness !== undefined
						? new HslColor(arg.hue, arg.saturation, arg.lightness,
								arg.alpha)
						: arg.hue !== undefined
						? new HsbColor(arg.hue, arg.saturation, arg.brightness,
								arg.alpha)
						: new RgbColor(); 
				} else {
					return Color.read(arguments).convert(type);
				}
			} else if (typeof arg === 'string') {
				var rgbColor = arg.match(/^#[0-9a-f]{3,6}$/i)
						? hexToRgbColor(arg)
						: nameToRgbColor(arg);
				return type
						? rgbColor.convert(type)
						: rgbColor;
			} else {
				var components = isArray ? arg
						: Array.prototype.slice.call(arguments);
				if (!type) {
					if (components.length >= 3)
						return new RgbColor(components);
					return new GrayColor(components);
				} else {
					Base.each(this._components,
						function(name, i) {
							var value = components[i];
							this['_' + name] = value !== undefined
									? value : null;
						},
					this);
				}
			}
		},

		clone: function() {
			var ctor = this.constructor,
				copy = new ctor(ctor.dont),
				components = this._components;
			for (var i = 0, l = components.length; i < l; i++) {
				var key = '_' + components[i];
				copy[key] = this[key];
			}
			return copy;
		},

		convert: function(type) {
			var converter;
			return this._colorType == type
					? this.clone()
					: (converter = converters[this._colorType + '-' + type])
						? converter(this)
						: converters['rgb-' + type](
								converters[this._colorType + '-rgb'](this));
		},

		statics: {
			extend: function(src) {
				src.beans = true;
				if (src._colorType) {
					var comps = components[src._colorType];
					src._components = comps.concat(['alpha']);
					Base.each(comps, function(name) {
						var isHue = name === 'hue',
							part = Base.capitalize(name),
							name = '_' + name;
						this['get' + part] = function() {
							return this[name];
						};
						this['set' + part] = function(value) {
							this[name] = isHue
								? ((value % 360) + 360) % 360
								: Math.min(Math.max(value, 0), 1);
							this._changed();
							return this;
						};
					}, src);
				}
				return this.base(src);
			}
		}
	};

	Base.each(components, function(comps, type) {
		Base.each(comps, function(component) {
			var part = Base.capitalize(component);
			fields['get' + part] = function() {
				return this.convert(type)[component];
			};
			fields['set' + part] = function(value) {
				var color = this.convert(type);
				color[component] = value;
				color = color.convert(this._colorType);
				for (var i = 0, l = this._components.length; i < l; i++) {
					var key = this._components[i];
					this[key] = color[key];
				}
			};
		});
	});

	return fields;
}, {

	_changed: function() {
		this._cssString = null;
		for (var i = 0, l = this._owners && this._owners.length; i < l; i++)
			this._owners[i]._changed(Change.STYLE);
	},

	_addOwner: function(item) {
		if (!this._owners)
			this._owners = [];
		this._owners.push(item);
	},

	_removeOwner: function(item) {
		var index = this._owners ? this._owners.indexOf(item) : -1;
		if (index != -1) {
			this._owners.splice(index, 1);
			if (this._owners.length == 0)
				delete this._owners;
		}
	},

	getType: function() {
		return this._colorType;
	},

	getComponents: function() {
		var length = this._components.length;
		var comps = new Array(length);
		for (var i = 0; i < length; i++)
			comps[i] = this['_' + this._components[i]];
		return comps;
	},

	getAlpha: function() {
		return this._alpha != null ? this._alpha : 1;
	},

	setAlpha: function(alpha) {
		this._alpha = alpha == null ? null : Math.min(Math.max(alpha, 0), 1);
		this._changed();
		return this;
	},

	hasAlpha: function() {
		return this._alpha != null;
	},

	equals: function(color) {
		if (color && color._colorType === this._colorType) {
			for (var i = 0, l = this._components.length; i < l; i++) {
				var component = '_' + this._components[i];
				if (this[component] !== color[component])
					return false;
			}
			return true;
		}
		return false;
	},

	toString: function() {
		var parts = [],
			format = Base.formatNumber;
		for (var i = 0, l = this._components.length; i < l; i++) {
			var component = this._components[i],
				value = this['_' + component];
			if (component === 'alpha' && value == null)
				value = 1;
			parts.push(component + ': ' + format(value));
		}
		return '{ ' + parts.join(', ') + ' }';
	},

	toCssString: function() {
		if (!this._cssString) {
			var color = this.convert('rgb'),
				alpha = color.getAlpha(),
				components = [
					Math.round(color._red * 255),
					Math.round(color._green * 255),
					Math.round(color._blue * 255),
					alpha != null ? alpha : 1
				];
			this._cssString = 'rgba(' + components.join(', ') + ')';
		}
		return this._cssString;
	},

	getCanvasStyle: function() {
		return this.toCssString();
	}

});

var GrayColor = this.GrayColor = Color.extend({

	_colorType: 'gray'
});

var RgbColor = this.RgbColor = this.RGBColor = Color.extend({

	_colorType: 'rgb'
});

var HsbColor = this.HsbColor = this.HSBColor = Color.extend({

	_colorType: 'hsb'
});

var HslColor = this.HslColor = this.HSLColor = Color.extend({

	_colorType: 'hsl'
});

var GradientColor = this.GradientColor = Color.extend({

	initialize: function(gradient, origin, destination, hilite) {
		this.gradient = gradient || new Gradient();
		this.setOrigin(origin);
		this.setDestination(destination);
		if (hilite)
			this.setHilite(hilite);
	},

	clone: function() {
		return new GradientColor(this.gradient, this._origin, this._destination,
				this._hilite);
	},

	getOrigin: function() {
		return this._origin;
	},

	setOrigin: function(origin) {
		origin = Point.read(arguments).clone();
		this._origin = origin;
		if (this._destination)
			this._radius = this._destination.getDistance(this._origin);
		this._changed();
		return this;
	},

	getDestination: function() {
		return this._destination;
	},

	setDestination: function(destination) {
		destination = Point.read(arguments).clone();
		this._destination = destination;
		this._radius = this._destination.getDistance(this._origin);
		this._changed();
		return this;
	},

	getHilite: function() {
		return this._hilite;
	},

	setHilite: function(hilite) {
		hilite = Point.read(arguments).clone();
		var vector = hilite.subtract(this._origin);
		if (vector.getLength() > this._radius) {
			this._hilite = this._origin.add(
					vector.normalize(this._radius - 0.1));
		} else {
			this._hilite = hilite;
		}
		this._changed();
		return this;
	},

	getCanvasStyle: function(ctx) {
		var gradient;
		if (this.gradient.type === 'linear') {
			gradient = ctx.createLinearGradient(this._origin.x, this._origin.y,
					this._destination.x, this._destination.y);
		} else {
			var origin = this._hilite || this._origin;
			gradient = ctx.createRadialGradient(origin.x, origin.y,
					0, this._origin.x, this._origin.y, this._radius);
		}
		for (var i = 0, l = this.gradient._stops.length; i < l; i++) {
			var stop = this.gradient._stops[i];
			gradient.addColorStop(stop._rampPoint, stop._color.toCssString());
		}
		return gradient;
	},

	equals: function(color) {
		return color == this || color && color._colorType === this._colorType
				&& this.gradient.equals(color.gradient)
				&& this._origin.equals(color._origin)
				&& this._destination.equals(color._destination);
	},

	transform: function(matrix) {
		matrix._transformPoint(this._origin, this._origin, true);
		matrix._transformPoint(this._destination, this._destination, true);
		if (this._hilite)
			matrix._transformPoint(this._hilite, this._hilite, true);
		this._radius = this._destination.getDistance(this._origin);
	}
});

var Gradient = this.Gradient = Base.extend({
	initialize: function(stops, type) {
		this.setStops(stops || ['white', 'black']);
		this.type = type || 'linear';
	},

	clone: function() {
		var stops = [];
		for (var i = 0, l = this._stops.length; i < l; i++)
			stops[i] = this._stops[i].clone();
		return new Gradient(stops, this.type);
	},

	getStops: function() {
		return this._stops;
	},

	setStops: function(stops) {
		if (stops.length < 2)
			throw new Error(
					'Gradient stop list needs to contain at least two stops.');
		this._stops = GradientStop.readAll(stops);
		for (var i = 0, l = this._stops.length; i < l; i++) {
			var stop = this._stops[i];
			if (stop._defaultRamp)
				stop.setRampPoint(i / (l - 1));
		}
	},

	equals: function(gradient) {
		if (gradient.type != this.type)
			return false;
		if (this._stops.length == gradient._stops.length) {
			for (var i = 0, l = this._stops.length; i < l; i++) {
				if (!this._stops[i].equals(gradient._stops[i]))
					return false;
			}
			return true;
		}
		return false;
	}
});

var GradientStop = this.GradientStop = Base.extend({
	initialize: function(arg0, arg1) {
		if (arg1 === undefined && Array.isArray(arg0)) {
			this.setColor(arg0[0]);
			this.setRampPoint(arg0[1]);
		} else if (arg0.color) {
			this.setColor(arg0.color);
			this.setRampPoint(arg0.rampPoint);
		} else {
			this.setColor(arg0);
			this.setRampPoint(arg1);
		}
	},

	clone: function() {
		return new GradientStop(this._color.clone(), this._rampPoint);
	},

	getRampPoint: function() {
		return this._rampPoint;
	},

	setRampPoint: function(rampPoint) {
		this._defaultRamp = rampPoint == null;
		this._rampPoint = rampPoint || 0;
	},

	getColor: function() {
		return this._color;
	},

	setColor: function(color) {
		this._color = Color.read(arguments);
	},

	equals: function(stop) {
		return stop == this || stop instanceof GradientStop
				&& this._color.equals(stop._color)
				&& this._rampPoint == stop._rampPoint;
	}
});

var DomElement = {
	getBounds: function(el, viewport) {
		var rect = el.getBoundingClientRect(),
			doc = el.ownerDocument,
			body = doc.body,
			docEl = doc.documentElement,
			x = rect.left - (docEl.clientLeft || body.clientLeft || 0),
			y = rect.top - (docEl.clientTop  || body.clientTop  || 0);
		if (!viewport) {
			var win = DomElement.getViewport(doc);
			x += win.pageXOffset || docEl.scrollLeft || body.scrollLeft;
			y += win.pageYOffset || docEl.scrollTop || body.scrollTop;
		}
		return new Rectangle(x, y, rect.width, rect.height);
	},

	getOffset: function(el, viewport) {
		return this.getBounds(el, viewport).getPoint();
	},

	getSize: function(el) {
		return this.getBounds(el, true).getSize();
	},

	isInvisible: function(el) {
		return this.getSize(el).equals([0, 0]);
	},

	isVisible: function(el) {
		return !this.isInvisible(el) && this.getViewportBounds(el).intersects(
				this.getBounds(el, true));
	},

	getViewport: function(doc) {
		return doc.defaultView || doc.parentWindow;
	},

	getViewportBounds: function(el) {
		var doc = el.ownerDocument,
			view = this.getViewport(doc),
			body = doc.getElementsByTagName(
				doc.compatMode === 'CSS1Compat' ? 'html' : 'body')[0];
		return Rectangle.create(0, 0, 
			view.innerWidth || body.clientWidth,
			view.innerHeight || body.clientHeight
		);
	},

	getComputedStyle: function(el, name) {
		if (el.currentStyle)
			return el.currentStyle[Base.camelize(name)];
		var style = this.getViewport(el.ownerDocument)
				.getComputedStyle(el, null);
		return style ? style.getPropertyValue(Base.hyphenate(name)) : null;
	}
};

var DomEvent = {
	add: function(el, events) {
		for (var type in events) {
			var func = events[type];
			if (el.addEventListener) {
				el.addEventListener(type, func, false);
			} else if (el.attachEvent) {
				el.attachEvent('on' + type, func.bound = function() {
					func.call(el, window.event);
				});
			}
		}
	},

	remove: function(el, events) {
		for (var type in events) {
			var func = events[type];
			if (el.removeEventListener) {
				el.removeEventListener(type, func, false);
			} else if (el.detachEvent) {
				el.detachEvent('on' + type, func.bound);
			}
		}
	},

	getPoint: function(event) {
		var pos = event.targetTouches
				? event.targetTouches.length
					? event.targetTouches[0]
					: event.changedTouches[0]
				: event;
		return Point.create(
			pos.pageX || pos.clientX + document.documentElement.scrollLeft,
			pos.pageY || pos.clientY + document.documentElement.scrollTop
		);
	},

	getTarget: function(event) {
		return event.target || event.srcElement;
	},

	getOffset: function(event, target) {
		return DomEvent.getPoint(event).subtract(DomElement.getOffset(
				target || DomEvent.getTarget(event)));
	},

	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},

	stop: function(event) {
		DomEvent.stopPropagation(event);
		DomEvent.preventDefault(event);
	}
};

DomEvent.requestAnimationFrame = new function() {
	var part = 'equestAnimationFrame',
		request = window['r' + part] || window['webkitR' + part]
			|| window['mozR' + part] || window['oR' + part]
			|| window['msR' + part];
	if (request) {
		request(function(time) {
			if (time == undefined)
				request = null;
		});
	}

	var callbacks = [],
		focused = true,
		timer;

	DomEvent.add(window, {
		focus: function() {
			focused = true;
		},
		blur: function() {
			focused = false;
		}
	});

	return function(callback, element) {
		if (request)
			return request(callback, element);
		callbacks.push([callback, element]);
		if (timer)
			return;
		timer = window.setInterval(function() {
			for (var i = callbacks.length - 1; i >= 0; i--) {
				var entry = callbacks[i],
					func = entry[0],
					el = entry[1];
				if (!el || (PaperScript.getAttribute(el, 'keepalive') == 'true'
						|| focused) && DomElement.isVisible(el)) {
					callbacks.splice(i, 1);
					func(Date.now());
				}
			}
		}, 1000 / 60);
	};
};

var View = this.View = PaperScopeItem.extend({
	_list: 'views',
	_reference: 'view',

	initialize: function(canvas) {
		this.base();
		var size;

		if (typeof canvas === 'string')
			canvas = document.getElementById(canvas);
		if (canvas instanceof HTMLCanvasElement) {
			this._canvas = canvas;
			if (PaperScript.hasAttribute(canvas, 'resize')) {
				var offset = DomElement.getOffset(canvas, true),
					that = this;
				size = DomElement.getViewportBounds(canvas)
						.getSize().subtract(offset);
				canvas.width = size.width;
				canvas.height = size.height;
				DomEvent.add(window, {
					resize: function(event) {
						if (!DomElement.isInvisible(canvas))
							offset = DomElement.getOffset(canvas, true);
						that.setViewSize(DomElement.getViewportBounds(canvas)
								.getSize().subtract(offset));
					}
				});
			} else {
				size = DomElement.isInvisible(canvas)
					? Size.create(parseInt(canvas.getAttribute('width')),
							parseInt(canvas.getAttribute('height')))
					: DomElement.getSize(canvas);
			}
			if (PaperScript.hasAttribute(canvas, 'stats')) {
				this._stats = new Stats();
				var element = this._stats.domElement,
					style = element.style,
					offset = DomElement.getOffset(canvas);
				style.position = 'absolute';
				style.left = offset.x + 'px';
				style.top = offset.y + 'px';
				document.body.appendChild(element);
			}
		} else {
			size = Size.read(arguments, 1);
			if (size.isZero())
				size = new Size(1024, 768);
			this._canvas = CanvasProvider.getCanvas(size);
		}
		this._id = this._canvas.getAttribute('id');
		if (this._id == null)
			this._canvas.setAttribute('id', this._id = 'canvas-' + View._id++);

		View._views[this._id] = this;
		this._viewSize = LinkedSize.create(this, 'setViewSize',
				size.width, size.height);
		this._context = this._canvas.getContext('2d');
		this._matrix = new Matrix();
		this._zoom = 1;

		this._events = this._createEvents();
		DomEvent.add(this._canvas, this._events);
		if (!View._focused)
			View._focused = this;

		this._scope._redrawNotified = false;
	},

	remove: function() {
		if (!this.base())
			return false;
		if (View._focused == this)
			View._focused = null;
		delete View._views[this._id];
		DomEvent.remove(this._canvas, this._events);
		this._canvas = this._events = this._onFrame = null;
		return true;
	},

	_redraw: function() {
		this._redrawNeeded = true;
		if (this._onFrameCallback) {
			this._onFrameCallback(0, true);
		} else {
			this.draw();
		}
	},

	_transform: function(matrix, flags) {
		this._matrix.preConcatenate(matrix);
		this._bounds = null;
		this._inverse = null;
		this._redraw();
	},

	getCanvas: function() {
		return this._canvas;
	},

	getViewSize: function() {
		return this._viewSize;
	},

	setViewSize: function(size) {
		size = Size.read(arguments);
		var delta = size.subtract(this._viewSize);
		if (delta.isZero())
			return;
		this._canvas.width = size.width;
		this._canvas.height = size.height;
		this._viewSize.set(size.width, size.height, true);
		this._bounds = null;
		this._redrawNeeded = true;
		if (this.onResize) {
			this.onResize({
				size: size,
				delta: delta
			});
		}
		this._redraw();
	},

	getBounds: function() {
		if (!this._bounds)
			this._bounds = this._getInverse()._transformBounds(
					new Rectangle(new Point(), this._viewSize));
		return this._bounds;
	},

	getSize: function() {
		return this.getBounds().getSize();
	},

	getCenter: function() {
		return this.getBounds().getCenter();
	},

	setCenter: function(center) {
		this.scrollBy(Point.read(arguments).subtract(this.getCenter()));
	},

	getZoom: function() {
		return this._zoom;
	},

	setZoom: function(zoom) {
		this._transform(new Matrix().scale(zoom / this._zoom, this.getCenter()));
		this._zoom = zoom;
	},

	isVisible: function() {
		return DomElement.isVisible(this._canvas);
	},

	scrollBy: function(point) {
		this._transform(new Matrix().translate(Point.read(arguments).negate()));
	},

	draw: function(checkRedraw) {
		if (checkRedraw && !this._redrawNeeded)
			return false;
		if (this._stats)
			this._stats.update();
		var ctx = this._context,
			size = this._viewSize;
		ctx.clearRect(0, 0, size._width + 1, size._height + 1);

		ctx.save();
		this._matrix.applyToContext(ctx);
		this._scope.project.draw(ctx);
		ctx.restore();
		if (this._redrawNeeded) {
			this._redrawNeeded = false;
			this._scope._redrawNotified = false;
		}
		return true;
	},

	projectToView: function(point) {
		return this._matrix._transformPoint(Point.read(arguments));
	},

	viewToProject: function(point) {
		return this._getInverse()._transformPoint(Point.read(arguments));
	},

	_getInverse: function() {
		if (!this._inverse)
			this._inverse = this._matrix.createInverse();
		return this._inverse;
	},

	getOnFrame: function() {
		return this._onFrame;
	},

	setOnFrame: function(onFrame) {
		this._onFrame = onFrame;
		if (!onFrame) {
			delete this._onFrameCallback;
			return;
		}
		var that = this,
			requested = false,
			before,
			time = 0,
			count = 0;
		this._onFrameCallback = function(param, dontRequest) {
			requested = false;
			if (!that._onFrame)
				return;
			paper = that._scope;
			requested = true;
			if (!dontRequest) {
				DomEvent.requestAnimationFrame(that._onFrameCallback,
						that._canvas);
			}
			var now = Date.now() / 1000,
			 	delta = before ? now - before : 0;
			that._onFrame(Base.merge({
				delta: delta, 
				time: time += delta, 
				count: count++
			}));
			before = now;
			that.draw(true);
			if (paper.defaultProject) {
				paper.defaultProject.activate();
			}
		};
		if (!requested)
			this._onFrameCallback();
	},

	onResize: null
}, {
	statics: {
		_views: {},
		_id: 0
	}
}, new function() {
	var tool,
		timer,
		curPoint,
		tempFocus,
		dragging = false;

	function viewToProject(view, event) {
		return view.viewToProject(DomEvent.getOffset(event, view._canvas));
	}

	function updateFocus() {
		if (!View._focused || !View._focused.isVisible()) {
			PaperScope.each(function(scope) {
				for (var i = 0, l = scope.views.length; i < l; i++) {
					var view = scope.views[i];
					if (view.isVisible()) {
						View._focused = tempFocus = view;
						// throw Base.stop;
					}
				}
			});
		}
	}

	function mousemove(event) {
		var view;
		if (!dragging) {
		 	view = View._views[DomEvent.getTarget(event).getAttribute('id')];
			if (view) {
				View._focused = tempFocus = view;
			} else if (tempFocus && tempFocus == View._focused) {
				View._focused = null;
				updateFocus();
			}
		}
		if (!(view = view || View._focused) || !(tool = view._scope.tool))
			return;
		var point = event && viewToProject(view, event);
		var onlyMove = !!(!tool.onMouseDrag && tool.onMouseMove);
		if (dragging && !onlyMove) {
			curPoint = point || curPoint;
			if (curPoint && tool.onHandleEvent('mousedrag', curPoint, event)) {
				view.draw(true);
				DomEvent.stop(event);
			}
		} else if ((!dragging || onlyMove)
				&& tool.onHandleEvent('mousemove', point, event)) {
			view.draw(true);
			DomEvent.stop(event);
		}
	}

	function mouseup(event) {
		var view = View._focused;
		if (!view || !dragging)
			return;
		dragging = false;
		curPoint = null;
		if (tool) {
			if (timer != null)
				timer = clearInterval(timer);
			if (tool.onHandleEvent('mouseup', viewToProject(view, event), event)) {
				view.draw(true);
				DomEvent.stop(event);
			}
		}
	}

	function selectstart(event) {
		if (dragging)
			DomEvent.stop(event);
	}

	DomEvent.add(document, {
		mousemove: mousemove,
		mouseup: mouseup,
		touchmove: mousemove,
		touchend: mouseup,
		selectstart: selectstart,
		scroll: updateFocus
	});

	DomEvent.add(window, {
		load: updateFocus
	});

	return {
		_createEvents: function() {
			var view = this;

			function mousedown(event) {
				View._focused = view;
				if (!(tool = view._scope.tool))
					return;
				curPoint = viewToProject(view, event);
				if (tool.onHandleEvent('mousedown', curPoint, event))
					view.draw(true);
				if (tool.eventInterval != null)
					timer = setInterval(mousemove, tool.eventInterval);
				dragging = true;
			}

			return {
				mousedown: mousedown,
				touchstart: mousedown,
				selectstart: selectstart
			};
		},

		statics: {

			updateFocus: updateFocus
		}
	};
});

var Event = this.Event = Base.extend({
	initialize: function(event) {
		this.event = event;
	},

	preventDefault: function() {
		DomEvent.preventDefault(this.event);
	},

	stopPropagation: function() {
		DomEvent.stopPropagation(this.event);
	},

	stop: function() {
		DomEvent.stop(this.event);
	},

	getModifiers: function() {
		return Key.modifiers;
	}
});

var KeyEvent = this.KeyEvent = Event.extend(new function() {
	return {
		initialize: function(down, key, character, event) {
			this.base(event);
			this.type = down ? 'keydown' : 'keyup';
			this.key = key;
			this.character = character;
		},

		toString: function() {
			return '{ type: ' + this.type
					+ ', key: ' + this.key
					+ ', character: ' + this.character
					+ ', modifiers: ' + this.getModifiers()
					+ ' }';
		}
	};
});

var Key = this.Key = new function() {

	var keys = {
		 8: 'backspace',
		13: 'enter',
		16: 'shift',
		17: 'control',
		18: 'option',
		19: 'pause',
		20: 'caps-lock',
		27: 'escape',
		32: 'space',
		35: 'end',
		36: 'home',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		46: 'delete',
		91: 'command',
		93: 'command', 
		224: 'command'  
	},

	modifiers = Base.merge({
		shift: false,
		control: false,
		option: false,
		command: false,
		capsLock: false
	}),

	charCodeMap = {}, 
	keyMap = {}, 
	downCode; 

	function handleKey(down, keyCode, charCode, event) {
		var character = String.fromCharCode(charCode),
			key = keys[keyCode] || character.toLowerCase(),
			handler = down ? 'onKeyDown' : 'onKeyUp',
			view = View._focused,
			scope = view && view.isVisible() && view._scope,
			tool = scope && scope.tool;
		keyMap[key] = down;
		if (tool && tool[handler]) {
			var keyEvent = new KeyEvent(down, key, character, event);
			if (tool[handler](keyEvent) === false)
				keyEvent.preventDefault();
			if (view)
				view.draw(true);
		}
	}

	DomEvent.add(document, {
		keydown: function(event) {
			var code = event.which || event.keyCode;
			var key = keys[code], name;
			if (key) {
				if ((name = Base.camelize(key)) in modifiers)
					modifiers[name] = true;
				charCodeMap[code] = 0;
				handleKey(true, code, null, event);
			} else {
				downCode = code;
			}
		},

		keypress: function(event) {
			if (downCode != null) {
				var code = event.which || event.keyCode;
				charCodeMap[downCode] = code;
				handleKey(true, downCode, code, event);
				downCode = null;
			}
		},

		keyup: function(event) {
			var code = event.which || event.keyCode,
				key = keys[code], name;
			if (key && (name = Base.camelize(key)) in modifiers)
				modifiers[name] = false;
			if (charCodeMap[code] != null) {
				handleKey(false, code, charCodeMap[code], event);
				delete charCodeMap[code];
			}
		}
	});

	return {
		modifiers: modifiers,

		isDown: function(key) {
			return !!keyMap[key];
		}
	};
};

var ToolEvent = this.ToolEvent = Event.extend({
	initialize: function(tool, type, event, hitTestOptions) {
		this.tool = tool;
		this.type = type;
		this.event = event;
		this.hitTestOptions = hitTestOptions;
	},

	_choosePoint: function(point, toolPoint) {
		return point ? point : toolPoint ? toolPoint.clone() : null;
	},

	getPoint: function() {
		return this._choosePoint(this._point, this.tool._point);
	},

	setPoint: function(point) {
		this._point = point;
	},

	getLastPoint: function() {
		return this._choosePoint(this._lastPoint, this.tool._lastPoint);
	},

	setLastPoint: function(lastPoint) {
		this._lastPoint = lastPoint;
	},

	getDownPoint: function() {
		return this._choosePoint(this._downPoint, this.tool._downPoint);
	},

	setDownPoint: function(downPoint) {
		this._downPoint = downPoint;
	},

	getMiddlePoint: function() {
		if (!this._middlePoint && this.tool._lastPoint) {
			return this.tool._point.add(this.tool._lastPoint).divide(2);
		}
		return this.middlePoint;
	},

	setMiddlePoint: function(middlePoint) {
		this._middlePoint = middlePoint;
	},

	getDelta: function() {
		return !this._delta && this.tool._lastPoint
		 		? this.tool._point.subtract(this.tool._lastPoint)
				: this._delta;
	},

	setDelta: function(delta) {
		this._delta = delta;
	},

	getCount: function() {
		return /^mouse(down|up)$/.test(this.type)
				? this.tool._downCount
				: this.tool._count;
	},

	setCount: function(count) {
		this.tool[/^mouse(down|up)$/.test(this.type) ? 'downCount' : 'count']
			= count;
	},

	getItem: function() {
		if (!this._item) {
			var result = this.tool._scope.project.hitTest(this.getPoint(),this.hitTestOptions);
			if (result) {
				var item = result.item,
					parent = item._parent;
				while ((parent instanceof Group && !(parent instanceof Layer))
						|| parent instanceof CompoundPath) {
					item = parent;
					parent = parent._parent;
				}
				this._item = item;
			}
		}
		return this._item;
	},
	setItem: function(item) {
		this._item = item;
	},

	toString: function() {
		return '{ type: ' + this.type
				+ ', point: ' + this.getPoint()
				+ ', count: ' + this.getCount()
				+ ', modifiers: ' + this.getModifiers()
				+ ' }';
	}
});

var Tool = this.Tool = PaperScopeItem.extend({
	_list: 'tools',
	_reference: 'tool',

	initialize: function() {
		this.view = View._focused;
		this.base();
		this._firstMove = true;
		this._count = 0;
		this._downCount = 0;
	},
	setHitTestOptions: function(hitTestOptions){
		this.hitTestOptions = hitTestOptions;
	},
	
	eventInterval: null,

	getMinDistance: function() {
		return this._minDistance;
	},

	setMinDistance: function(minDistance) {
		this._minDistance = minDistance;
		if (this._minDistance != null && this._maxDistance != null
				&& this._minDistance > this._maxDistance) {
			this._maxDistance = this._minDistance;
		}
	},

	getMaxDistance: function() {
		return this._maxDistance;
	},

	setMaxDistance: function(maxDistance) {
		this._maxDistance = maxDistance;
		if (this._minDistance != null && this._maxDistance != null
				&& this._maxDistance < this._minDistance) {
			this._minDistance = maxDistance;
		}
	},

	getFixedDistance: function() {
		return this._minDistance == this._maxDistance
			? this._minDistance : null;
	},

	setFixedDistance: function(distance) {
		this._minDistance = distance;
		this._maxDistance = distance;
	},

	updateEvent: function(type, pt, minDistance, maxDistance, start,
			needsChange, matchMaxDistance) {
		if (!start) {
			if (minDistance != null || maxDistance != null) {
				var minDist = minDistance != null ? minDistance : 0;
				var vector = pt.subtract(this._point);
				var distance = vector.getLength();
				if (distance < minDist)
					return false;
				var maxDist = maxDistance != null ? maxDistance : 0;
				if (maxDist != 0) {
					if (distance > maxDist) {
						pt = this._point.add(vector.normalize(maxDist));
					} else if (matchMaxDistance) {
						return false;
					}
				}
			}
			if (needsChange && pt.equals(this._point))
				return false;
		}
		this._lastPoint = start && type == 'mousemove' ? pt : this._point;
		this._point = pt;
		switch (type) {
		case 'mousedown':
			this._lastPoint = this._downPoint;
			this._downPoint = this._point;
			this._downCount++;
			break;
		case 'mouseup':
			this._lastPoint = this._downPoint;
			break;
		}
		this._count = start ? 0 : this._count + 1;
		return true;
	},

	onHandleEvent: function(type, pt, event) {
		if (this.view != View._focused) {
			return;
		}
		paper = this._scope;
		var called = false;
		switch (type) {
		case 'mousedown':
			this.updateEvent(type, pt, null, null, true, false, false);
			if (this.onMouseDown) {
				this.onMouseDown(new ToolEvent(this, type, event,this.hitTestOptions));
				called = true;
			}
			break;
		case 'mousedrag':
			var needsChange = false,
				matchMaxDistance = false;
			while (this.updateEvent(type, pt, this.minDistance,
					this.maxDistance, false, needsChange, matchMaxDistance)) {
				if (this.onMouseDrag) {
					this.onMouseDrag(new ToolEvent(this, type, event,this.hitTestOptions));
					called = true;
				}
				needsChange = true;
				matchMaxDistance = true;
			}
			break;
		case 'mouseup':
			if ((this._point.x != pt.x || this._point.y != pt.y)
					&& this.updateEvent('mousedrag', pt, this.minDistance,
							this.maxDistance, false, false, false)) {
				if (this.onMouseDrag) {
					this.onMouseDrag(new ToolEvent(this, type, event,this.hitTestOptions));
					called = true;
				}
			}
			this.updateEvent(type, pt, null, this.maxDistance, false,
					false, false);
			if (this.onMouseUp) {
				this.onMouseUp(new ToolEvent(this, type, event,this.hitTestOptions));
				called = true;
			}
			this.updateEvent(type, pt, null, null, true, false, false);
			this._firstMove = true;
			break;
		case 'mousemove':
			while (this.updateEvent(type, pt, this.minDistance,
					this.maxDistance, this._firstMove, true, false)) {
				if (this.onMouseMove) {
					this.onMouseMove(new ToolEvent(this, type, event,this.hitTestOptions));
					called = true;
				}
				this._firstMove = false;
			}
			break;
		}
		return called;
	}
});

var CanvasProvider = {
	canvases: [],
	getCanvas: function(size) {
		if (this.canvases.length) {
			var canvas = this.canvases.pop();
			if ((canvas.width != size.width)
					|| (canvas.height != size.height)) {
				canvas.width = size.width;
				canvas.height = size.height;
			} else {
				canvas.getContext('2d').clearRect(0, 0,
						size.width + 1, size.height + 1);
			}
			return canvas;
		} else {
			var canvas = document.createElement('canvas');
			canvas.width = size.width;
			canvas.height = size.height;
			return canvas;
		}
	},

	returnCanvas: function(canvas) {
		this.canvases.push(canvas);
	}
};

var Numerical = new function() {

	var abscissas = [
		[  0.5773502691896257645091488],
		[0,0.7745966692414833770358531],
		[  0.3399810435848562648026658,0.8611363115940525752239465],
		[0,0.5384693101056830910363144,0.9061798459386639927976269],
		[  0.2386191860831969086305017,0.6612093864662645136613996,0.9324695142031520278123016],
		[0,0.4058451513773971669066064,0.7415311855993944398638648,0.9491079123427585245261897],
		[  0.1834346424956498049394761,0.5255324099163289858177390,0.7966664774136267395915539,0.9602898564975362316835609],
		[0,0.3242534234038089290385380,0.6133714327005903973087020,0.8360311073266357942994298,0.9681602395076260898355762],
		[  0.1488743389816312108848260,0.4333953941292471907992659,0.6794095682990244062343274,0.8650633666889845107320967,0.9739065285171717200779640],
		[0,0.2695431559523449723315320,0.5190961292068118159257257,0.7301520055740493240934163,0.8870625997680952990751578,0.9782286581460569928039380],
		[  0.1252334085114689154724414,0.3678314989981801937526915,0.5873179542866174472967024,0.7699026741943046870368938,0.9041172563704748566784659,0.9815606342467192506905491],
		[0,0.2304583159551347940655281,0.4484927510364468528779129,0.6423493394403402206439846,0.8015780907333099127942065,0.9175983992229779652065478,0.9841830547185881494728294],
		[  0.1080549487073436620662447,0.3191123689278897604356718,0.5152486363581540919652907,0.6872929048116854701480198,0.8272013150697649931897947,0.9284348836635735173363911,0.9862838086968123388415973],
		[0,0.2011940939974345223006283,0.3941513470775633698972074,0.5709721726085388475372267,0.7244177313601700474161861,0.8482065834104272162006483,0.9372733924007059043077589,0.9879925180204854284895657],
		[  0.0950125098376374401853193,0.2816035507792589132304605,0.4580167776572273863424194,0.6178762444026437484466718,0.7554044083550030338951012,0.8656312023878317438804679,0.9445750230732325760779884,0.9894009349916499325961542]
	];

	var weights = [
		[1],
		[0.8888888888888888888888889,0.5555555555555555555555556],
		[0.6521451548625461426269361,0.3478548451374538573730639],
		[0.5688888888888888888888889,0.4786286704993664680412915,0.2369268850561890875142640],
		[0.4679139345726910473898703,0.3607615730481386075698335,0.1713244923791703450402961],
		[0.4179591836734693877551020,0.3818300505051189449503698,0.2797053914892766679014678,0.1294849661688696932706114],
		[0.3626837833783619829651504,0.3137066458778872873379622,0.2223810344533744705443560,0.1012285362903762591525314],
		[0.3302393550012597631645251,0.3123470770400028400686304,0.2606106964029354623187429,0.1806481606948574040584720,0.0812743883615744119718922],
		[0.2955242247147528701738930,0.2692667193099963550912269,0.2190863625159820439955349,0.1494513491505805931457763,0.0666713443086881375935688],
		[0.2729250867779006307144835,0.2628045445102466621806889,0.2331937645919904799185237,0.1862902109277342514260976,0.1255803694649046246346943,0.0556685671161736664827537],
		[0.2491470458134027850005624,0.2334925365383548087608499,0.2031674267230659217490645,0.1600783285433462263346525,0.1069393259953184309602547,0.0471753363865118271946160],
		[0.2325515532308739101945895,0.2262831802628972384120902,0.2078160475368885023125232,0.1781459807619457382800467,0.1388735102197872384636018,0.0921214998377284479144218,0.0404840047653158795200216],
		[0.2152638534631577901958764,0.2051984637212956039659241,0.1855383974779378137417166,0.1572031671581935345696019,0.1215185706879031846894148,0.0801580871597602098056333,0.0351194603317518630318329],
		[0.2025782419255612728806202,0.1984314853271115764561183,0.1861610000155622110268006,0.1662692058169939335532009,0.1395706779261543144478048,0.1071592204671719350118695,0.0703660474881081247092674,0.0307532419961172683546284],
		[0.1894506104550684962853967,0.1826034150449235888667637,0.1691565193950025381893121,0.1495959888165767320815017,0.1246289712555338720524763,0.0951585116824927848099251,0.0622535239386478928628438,0.0271524594117540948517806]
	];

	var abs = Math.abs,
		sqrt = Math.sqrt,
		cos = Math.cos,
		PI = Math.PI;

	return {
		TOLERANCE: 10e-6,
		EPSILON: 10e-12,

		integrate: function(f, a, b, n) {
			var x = abscissas[n - 2],
				w = weights[n - 2],
				A = 0.5 * (b - a),
				B = A + a,
				i = 0,
				m = (n + 1) >> 1,
				sum = n & 1 ? w[i++] * f(B) : 0; 
			while (i < m) {
				var Ax = A * x[i];
				sum += w[i++] * (f(B + Ax) + f(B - Ax));
			}
			return A * sum;
		},

		findRoot: function(f, df, x, a, b, n, tolerance) {
			for (var i = 0; i < n; i++) {
				var fx = f(x),
					dx = fx / df(x);
				if (abs(dx) < tolerance)
					return x;
				var nx = x - dx;
				if (fx > 0) {
					b = x;
					x = nx <= a ? 0.5 * (a + b) : nx;
				} else {
					a = x;
					x = nx >= b ? 0.5 * (a + b) : nx;
				}
			}
		},

		solveQuadratic: function(a, b, c, roots, tolerance) {
			if (abs(a) < tolerance) {
				if (abs(b) >= tolerance) {
					roots[0] = -c / b;
					return 1;
				}
				if (abs(c) < tolerance)
					return -1; 
				return 0; 
			}
			var q = b * b - 4 * a * c;
			if (q < 0)
				return 0; 
			q = sqrt(q);
			if (b < 0)
				q = -q;
			q = (b + q) * -0.5;
			var n = 0;
			if (abs(q) >= tolerance)
				roots[n++] = c / q;
			if (abs(a) >= tolerance)
				roots[n++] = q / a;
			return n; 
		},

		solveCubic: function(a, b, c, d, roots, tolerance) {
			if (abs(a) < tolerance)
				return Numerical.solveQuadratic(b, c, d, roots, tolerance);
			b /= a;
			c /= a;
			d /= a;
			var Q = (b * b - 3 * c) / 9,
				R = (2 * b * b * b - 9 * b * c + 27 * d) / 54,
				Q3 = Q * Q * Q,
				R2 = R * R;
			b /= 3; 
			if (R2 < Q3) { 
				var theta = Math.acos(R / sqrt(Q3)),
					q = -2 * sqrt(Q);
				roots[0] = q * cos(theta / 3) - b;
				roots[1] = q * cos((theta + 2 * PI) / 3) - b;
				roots[2] = q * cos((theta - 2 * PI) / 3) - b;
				return 3;
			} else { 
				var A = -Math.pow(abs(R) + sqrt(R2 - Q3), 1 / 3);
				if (R < 0) A = -A;
				var B = (abs(A) < tolerance) ? 0 : Q / A;
				roots[0] = (A + B) - b;
				return 1;
			}
			return 0;
		}
	};
};

var BlendMode = {
	process: function(blendMode, srcContext, dstContext, alpha, offset) {
		var srcCanvas = srcContext.canvas,
			dstData = dstContext.getImageData(offset.x, offset.y,
					srcCanvas.width, srcCanvas.height),
			dst  = dstData.data,
			src  = srcContext.getImageData(0, 0,
					srcCanvas.width, srcCanvas.height).data,
			min = Math.min,
			max = Math.max,
			abs = Math.abs,
			sr, sg, sb, sa, 
			br, bg, bb, ba, 
			dr, dg, db;     

		function getLum(r, g, b) {
			return 0.2989 * r + 0.587 * g + 0.114 * b;
		}

		function setLum(r, g, b, l) {
			var d = l - getLum(r, g, b);
			dr = r + d;
			dg = g + d;
			db = b + d;
			var l = getLum(dr, dg, db),
				mn = min(dr, dg, db),
				mx = max(dr, dg, db);
			if (mn < 0) {
				var lmn = l - mn;
				dr = l + (dr - l) * l / lmn;
				dg = l + (dg - l) * l / lmn;
				db = l + (db - l) * l / lmn;
			}
			if (mx > 255) {
				var ln = 255 - l, mxl = mx - l;
				dr = l + (dr - l) * ln / mxl;
				dg = l + (dg - l) * ln / mxl;
				db = l + (db - l) * ln / mxl;
			}
		}

		function getSat(r, g, b) {
			return max(r, g, b) - min(r, g, b);
		}

		function setSat(r, g, b, s) {
			var col = [r, g, b],
				mx = max(r, g, b), 
				mn = min(r, g, b), 
				md; 
			mn = mn == r ? 0 : mn == g ? 1 : 2;
			mx = mx == r ? 0 : mx == g ? 1 : 2;
			md = min(mn, mx) == 0 ? max(mn, mx) == 1 ? 2 : 1 : 0;
			if (col[mx] > col[mn]) {
				col[md] = (col[md] - col[mn]) * s / (col[mx] - col[mn]);
				col[mx] = s;
			} else {
				col[md] = col[mx] = 0;
			}
			col[mn] = 0;
			dr = col[0];
			dg = col[1];
			db = col[2];
		}

		var modes = {
			multiply: function() {
				dr = br * sr / 255;
				dg = bg * sg / 255;
				db = bb * sb / 255;
			},

			screen: function() {
				dr = 255 - (255 - br) * (255 - sr) / 255;
				dg = 255 - (255 - bg) * (255 - sg) / 255;
				db = 255 - (255 - bb) * (255 - sb) / 255;
			},

			overlay: function() {
				dr = br < 128 ? 2 * br * sr / 255 : 255 - 2 * (255 - br) * (255 - sr) / 255;
				dg = bg < 128 ? 2 * bg * sg / 255 : 255 - 2 * (255 - bg) * (255 - sg) / 255;
				db = bb < 128 ? 2 * bb * sb / 255 : 255 - 2 * (255 - bb) * (255 - sb) / 255;
			},

			'soft-light': function() {
				var t = sr * br / 255;
				dr = t + br * (255 - (255 - br) * (255 - sr) / 255 - t) / 255;
				t = sg * bg / 255;
				dg = t + bg * (255 - (255 - bg) * (255 - sg) / 255 - t) / 255;
				t = sb * bb / 255;
				db = t + bb * (255 - (255 - bb) * (255 - sb) / 255 - t) / 255;
			},

			'hard-light': function() {
				dr = sr < 128 ? 2 * sr * br / 255 : 255 - 2 * (255 - sr) * (255 - br) / 255;
				dg = sg < 128 ? 2 * sg * bg / 255 : 255 - 2 * (255 - sg) * (255 - bg) / 255;
				db = sb < 128 ? 2 * sb * bb / 255 : 255 - 2 * (255 - sb) * (255 - bb) / 255;
			},

			'color-dodge': function() {
				dr = sr == 255 ? sr : min(255, br * 255 / (255 - sr));
				dg = sg == 255 ? sg : min(255, bg * 255 / (255 - sg));
				db = sb == 255 ? sb : min(255, bb * 255 / (255 - sb));
			},

			'color-burn': function() {
				dr = sr == 0 ? 0 : max(255 - ((255 - br) * 255) / sr, 0);
				dg = sg == 0 ? 0 : max(255 - ((255 - bg) * 255) / sg, 0);
				db = sb == 0 ? 0 : max(255 - ((255 - bb) * 255) / sb, 0);
			},

			darken: function() {
				dr = br < sr ? br : sr;
				dg = bg < sg ? bg : sg;
				db = bb < sb ? bb : sb;
			},

			lighten: function() {
				dr = br > sr ? br : sr;
				dg = bg > sg ? bg : sg;
				db = bb > sb ? bb : sb;
			},

			difference: function() {
				dr = br - sr;
				if (dr < 0)
					dr = -dr;
				dg = bg - sg;
				if (dg < 0)
					dg = -dg;
				db = bb - sb;
				if (db < 0)
					db = -db;
			},

			exclusion: function() {
				dr = br + sr * (255 - br - br) / 255;
				dg = bg + sg * (255 - bg - bg) / 255;
				db = bb + sb * (255 - bb - bb) / 255;
			},

			hue: function() {
				setSat(sr, sg, sb, getSat(br, bg, bb));
				setLum(dr, dg, db, getLum(br, bg, bb));
			},

			saturation: function() {
				setSat(br, bg, bb, getSat(sr, sg, sb));
				setLum(dr, dg, db, getLum(br, bg, bb));
			},

			luminosity: function() {
				setLum(br, bg, bb, getLum(sr, sg, sb));
			},

			color: function() {
				setLum(sr, sg, sb, getLum(br, bg, bb));
			},

			add: function() {
				dr = min(br + sr, 255);
				dg = min(bg + sg, 255);
				db = min(bb + sb, 255);
			},

			subtract: function() {
				dr = max(br - sr, 0);
				dg = max(bg - sg, 0);
				db = max(bb - sb, 0);
			},

			average: function() {
				dr = (br + sr) / 2;
				dg = (bg + sg) / 2;
				db = (bb + sb) / 2;
			},

			negation: function() {
				dr = 255 - abs(255 - sr - br);
				dg = 255 - abs(255 - sg - bg);
				db = 255 - abs(255 - sb - bb);
			}
		};

		var process = modes[blendMode];
		if (!process)
			return;

		for (var i = 0, l = dst.length; i < l; i += 4) {
			sr = src[i];
			br = dst[i];
			sg = src[i + 1];
			bg = dst[i + 1];
			sb = src[i + 2];
			bb = dst[i + 2];
			sa = src[i + 3];
			ba = dst[i + 3];
			process();
			var a1 = sa * alpha / 255,
				a2 = 1 - a1;
			dst[i] = a1 * dr + a2 * br;
			dst[i + 1] = a1 * dg + a2 * bg;
			dst[i + 2] = a1 * db + a2 * bb;
			dst[i + 3] = sa * alpha + a2 * ba;
		}
		dstContext.putImageData(dstData, offset.x, offset.y);
	}
};

var PaperScript = this.PaperScript = new function() {
var parse_js=new function(){function W(a,b,c){var d=[];for(var e=0;e<a.length;++e)d.push(b.call(c,a[e],e));return d}function V(c){return/^[a-z_$][a-z0-9_$]*$/i.test(c)&&c!="this"&&!M(d,c)&&!M(b,c)&&!M(a,c)}function U(a,b){var c={};a===!0&&(a={});for(var d in b)M(b,d)&&(c[d]=a&&M(a,d)?a[d]:b[d]);return c}function T(a,b){return b<1?"":Array(b+1).join(a)}function S(a,b){function z(a){var b=a[0],c=r[b];if(!c)throw new Error("Can't find generator for \""+b+'"');y.push(a);var d=c.apply(b,a.slice(1));y.pop();return d}function x(a){var b=a[0],c=a[1];c!=null&&(b=k([g(b),"=",m(c,"seq")]));return b}function w(a){return a?a.length==0?"{}":"{"+e+j(function(){return u(a).join(e)})+e+h("}"):";"}function v(a){var b=a.length;return b==0?"{}":"{"+e+W(a,function(a,d){var f=a[1].length>0,g=j(function(){return h(a[0]?k(["case",z(a[0])+":"]):"default:")},.5)+(f?e+j(function(){return u(a[1]).join(e)}):"");!c&&f&&d<b-1&&(g+=";");return g}).join(e)+e+h("}")}function u(a,b){for(var d=[],e=a.length-1,f=0;f<=e;++f){var g=a[f],i=z(g);i!=";"&&(!c&&f==e&&(g[0]=="while"&&O(g[2])||L(g[0],["for","for-in"])&&O(g[4])||g[0]=="if"&&O(g[2])&&!g[3]||g[0]=="if"&&g[3]&&O(g[3])?i=i.replace(/;*\s*$/,";"):i=i.replace(/;+\s*$/,"")),d.push(i))}return b?d:W(d,h)}function t(a,b,c,d){var e=d||"function";a&&(e+=" "+g(a)),e+="("+l(W(b,g))+")";return k([e,w(c)])}function s(a){if(a[0]=="do")return z(["block",[a]]);var b=a;for(;;){var c=b[0];if(c=="if"){if(!b[3])return z(["block",[a]]);b=b[3]}else if(c=="while"||c=="do")b=b[2];else if(c=="for"||c=="for-in")b=b[4];else break}return z(a)}function q(a){var b=a.toString(10),c=[b.replace(/^0\./,".")],d;Math.floor(a)===a?(c.push("0x"+a.toString(16).toLowerCase(),"0"+a.toString(8)),(d=/^(.*?)(0+)$/.exec(a))&&c.push(d[1]+"e"+d[2].length)):(d=/^0?\.(0+)(.*)$/.exec(a))&&c.push(d[2]+"e-"+(d[1].length+d[2].length),b.substr(b.indexOf(".")));return n(c)}function o(a){if(a[0]=="function"||a[0]=="object"){var b=J(y),c=b.pop(),d=b.pop();while(d){if(d[0]=="stat")return!0;if((d[0]=="seq"||d[0]=="call"||d[0]=="dot"||d[0]=="sub"||d[0]=="conditional")&&d[1]===c||(d[0]=="binary"||d[0]=="assign"||d[0]=="unary-postfix")&&d[2]===c)c=d,d=b.pop();else return!1}}return!M(P,a[0])}function n(a){if(a.length==1)return a[0];if(a.length==2){var b=a[1];a=a[0];return a.length<=b.length?a:b}return n([a[0],n(a.slice(1))])}function m(a){var b=z(a);for(var c=1;c<arguments.length;++c){var d=arguments[c];if(d instanceof Function&&d(a)||a[0]==d)return"("+b+")"}return b}function l(a){return a.join(","+f)}function k(a){if(c)return a.join(" ");var b=[];for(var d=0;d<a.length;++d){var e=a[d+1];b.push(a[d]),e&&(/[a-z0-9_\x24]$/i.test(a[d].toString())&&/^[a-z0-9_\x24]/i.test(e.toString())||/[\+\-]$/.test(a[d].toString())&&/^[\+\-]/.test(e.toString()))&&b.push(" ")}return b.join("")}function j(a,b){b==null&&(b=1),d+=b;try{return a.apply(null,J(arguments,1))}finally{d-=b}}function h(a){a==null&&(a=""),c&&(a=T(" ",b.indent_start+d*b.indent_level)+a);return a}function g(a){return a.toString()}b=U(b,{indent_start:0,indent_level:4,quote_keys:!1,space_colon:!1,beautify:!1});var c=!!b.beautify,d=0,e=c?"\n":"",f=c?" ":"",r={string:Q,num:q,name:g,toplevel:function(a){return u(a).join(e)},splice:function(a){var b=y[y.length-2][0];return M(R,b)?w.apply(this,arguments):W(u(a,!0),function(a,b){return b>0?h(a):a}).join(e)},block:w,"var":function(a){return"var "+l(W(a,x))+";"},"const":function(a){return"const "+l(W(a,x))+";"},"try":function(a,b,c){var d=["try",w(a)];b&&d.push("catch","("+b[0]+")",w(b[1])),c&&d.push("finally",w(c));return k(d)},"throw":function(a){return k(["throw",z(a)])+";"},"new":function(a,b){b=b.length>0?"("+l(W(b,z))+")":"";return k(["new",m(a,"seq","binary","conditional","assign",function(a){var b=N(),c={};try{b.with_walkers({call:function(){throw c},"function":function(){return this}},function(){b.walk(a)})}catch(d){if(d===c)return!0;throw d}})+b])},"switch":function(a,b){return k(["switch","("+z(a)+")",v(b)])},"break":function(a){var b="break";a!=null&&(b+=" "+g(a));return b+";"},"continue":function(a){var b="continue";a!=null&&(b+=" "+g(a));return b+";"},conditional:function(a,b,c){return k([m(a,"assign","seq","conditional"),"?",m(b,"seq"),":",m(c,"seq")])},assign:function(a,b,c){a&&a!==!0?a+="=":a="=";return k([z(b),a,m(c,"seq")])},dot:function(a){var b=z(a),c=1;a[0]=="num"?/\./.test(a[1])||(b+="."):o(a)&&(b="("+b+")");while(c<arguments.length)b+="."+g(arguments[c++]);return b},call:function(a,b){var c=z(a);o(a)&&(c="("+c+")");return c+"("+l(W(b,function(a){return m(a,"seq")}))+")"},"function":t,defun:t,"if":function(a,b,c){var d=["if","("+z(a)+")",c?s(b):z(b)];c&&d.push("else",z(c));return k(d)},"for":function(a,b,c,d){var e=["for"];a=(a!=null?z(a):"").replace(/;*\s*$/,";"+f),b=(b!=null?z(b):"").replace(/;*\s*$/,";"+f),c=(c!=null?z(c):"").replace(/;*\s*$/,"");var g=a+b+c;g=="; ; "&&(g=";;"),e.push("("+g+")",z(d));return k(e)},"for-in":function(a,b,c,d){return k(["for","("+(a?z(a).replace(/;+$/,""):z(b)),"in",z(c)+")",z(d)])},"while":function(a,b){return k(["while","("+z(a)+")",z(b)])},"do":function(a,b){return k(["do",z(b),"while","("+z(a)+")"])+";"},"return":function(a){var b=["return"];a!=null&&b.push(z(a));return k(b)+";"},binary:function(a,b,c){var d=z(b),e=z(c);if(L(b[0],["assign","conditional","seq"])||b[0]=="binary"&&B[a]>B[b[1]])d="("+d+")";if(L(c[0],["assign","conditional","seq"])||c[0]=="binary"&&B[a]>=B[c[1]]&&(c[1]!=a||!L(a,["&&","||","*"])))e="("+e+")";return k([d,a,e])},"unary-prefix":function(a,b){var c=z(b);b[0]=="num"||b[0]=="unary-prefix"&&!M(i,a+b[1])||!o(b)||(c="("+c+")");return a+(p(a.charAt(0))?" ":"")+c},"unary-postfix":function(a,b){var c=z(b);b[0]=="num"||b[0]=="unary-postfix"&&!M(i,a+b[1])||!o(b)||(c="("+c+")");return c+a},sub:function(a,b){var c=z(a);o(a)&&(c="("+c+")");return c+"["+z(b)+"]"},object:function(a){return a.length==0?"{}":"{"+e+j(function(){return W(a,function(a){if(a.length==3)return h(t(a[0],a[1][2],a[1][3],a[2]));var d=a[0],e=z(a[1]);b.quote_keys?d=Q(d):(typeof d=="number"||!c&&+d+""==d)&&parseFloat(d)>=0?d=q(+d):V(d)||(d=Q(d));return h(k(c&&b.space_colon?[d,":",e]:[d+":",e]))}).join(","+e)})+e+h("}")},regexp:function(a,b){return"/"+a+"/"+b},array:function(a){return a.length==0?"[]":k(["[",l(W(a,function(a){return!c&&a[0]=="atom"&&a[1]=="undefined"?"":m(a,"seq")})),"]"])},stat:function(a){return z(a).replace(/;*\s*$/,";")},seq:function(){return l(W(J(arguments),z))},label:function(a,b){return k([g(a),":",z(b)])},"with":function(a,b){return k(["with","("+z(a)+")",z(b)])},atom:function(a){return g(a)}},y=[];return z(a)}function Q(a){var b=0,c=0;a=a.replace(/[\\\b\f\n\r\t\x22\x27]/g,function(a){switch(a){case"\\":return"\\\\";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case'"':++b;return'"';case"'":++c;return"'"}return a});return b>c?"'"+a.replace(/\x27/g,"\\'")+"'":'"'+a.replace(/\x22/g,'\\"')+'"'}function O(a){return!a||a[0]=="block"&&(!a[1]||a[1].length==0)}function N(){function g(a,b){var c={},e;for(e in a)M(a,e)&&(c[e]=d[e],d[e]=a[e]);var f=b();for(e in c)M(c,e)&&(c[e]?d[e]=c[e]:delete d[e]);return f}function f(a){if(a==null)return null;try{e.push(a);var b=a[0],f=d[b];if(f){var g=f.apply(a,a.slice(1));if(g!=null)return g}f=c[b];return f.apply(a,a.slice(1))}finally{e.pop()}}function b(a){var b=[this[0]];a!=null&&b.push(W(a,f));return b}function a(a){return[this[0],W(a,function(a){var b=[a[0]];a.length>1&&(b[1]=f(a[1]));return b})]}var c={string:function(a){return[this[0],a]},num:function(a){return[this[0],a]},name:function(a){return[this[0],a]},toplevel:function(a){return[this[0],W(a,f)]},block:b,splice:b,"var":a,"const":a,"try":function(a,b,c){return[this[0],W(a,f),b!=null?[b[0],W(b[1],f)]:null,c!=null?W(c,f):null]},"throw":function(a){return[this[0],f(a)]},"new":function(a,b){return[this[0],f(a),W(b,f)]},"switch":function(a,b){return[this[0],f(a),W(b,function(a){return[a[0]?f(a[0]):null,W(a[1],f)]})]},"break":function(a){return[this[0],a]},"continue":function(a){return[this[0],a]},conditional:function(a,b,c){return[this[0],f(a),f(b),f(c)]},assign:function(a,b,c){return[this[0],a,f(b),f(c)]},dot:function(a){return[this[0],f(a)].concat(J(arguments,1))},call:function(a,b){return[this[0],f(a),W(b,f)]},"function":function(a,b,c){return[this[0],a,b.slice(),W(c,f)]},defun:function(a,b,c){return[this[0],a,b.slice(),W(c,f)]},"if":function(a,b,c){return[this[0],f(a),f(b),f(c)]},"for":function(a,b,c,d){return[this[0],f(a),f(b),f(c),f(d)]},"for-in":function(a,b,c,d){return[this[0],f(a),f(b),f(c),f(d)]},"while":function(a,b){return[this[0],f(a),f(b)]},"do":function(a,b){return[this[0],f(a),f(b)]},"return":function(a){return[this[0],f(a)]},binary:function(a,b,c){return[this[0],a,f(b),f(c)]},"unary-prefix":function(a,b){return[this[0],a,f(b)]},"unary-postfix":function(a,b){return[this[0],a,f(b)]},sub:function(a,b){return[this[0],f(a),f(b)]},object:function(a){return[this[0],W(a,function(a){return a.length==2?[a[0],f(a[1])]:[a[0],f(a[1]),a[2]]})]},regexp:function(a,b){return[this[0],a,b]},array:function(a){return[this[0],W(a,f)]},stat:function(a){return[this[0],f(a)]},seq:function(){return[this[0]].concat(W(J(arguments),f))},label:function(a,b){return[this[0],a,f(b)]},"with":function(a,b){return[this[0],f(a),f(b)]},atom:function(a){return[this[0],a]}},d={},e=[];return{walk:f,with_walkers:g,parent:function(){return e[e.length-2]},stack:function(){return e}}}function M(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function L(a,b){for(var c=b.length;--c>=0;)if(b[c]===a)return!0;return!1}function K(a){return a.split("")}function J(a,b){return Array.prototype.slice.call(a,b||0)}function I(a){var b={};for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}function H(a){a instanceof Function&&(a=a());for(var b=1,c=arguments.length;--c>0;++b)arguments[b]();return a}function G(a){var b=J(arguments,1);return function(){return a.apply(this,b.concat(J(arguments)))}}function F(a,b,c){function bk(a){try{++d.in_loop;return a()}finally{--d.in_loop}}function bi(a){var b=bg(a),c=d.token.value;if(e("operator")&&M(A,c)){if(bh(b)){g();return p("assign",A[c],b,bi(a))}i("Invalid assignment")}return b}function bh(a){if(!b)return!0;switch(a[0]){case"dot":case"sub":case"new":case"call":return!0;case"name":return a[1]!="this"}}function bg(a){var b=bf(a);if(e("operator","?")){g();var c=bj(!1);m(":");return p("conditional",b,c,bj(!1,a))}return b}function bf(a){return be(Y(!0),0,a)}function be(a,b,c){var f=e("operator")?d.token.value:null;f&&f=="in"&&c&&(f=null);var h=f!=null?B[f]:null;if(h!=null&&h>b){g();var i=be(Y(!0),h,c);return be(p("binary",f,a,i),b,c)}return a}function bd(a,b,c){(b=="++"||b=="--")&&!bh(c)&&i("Invalid use of "+b+" operator");return p(a,b,c)}function bc(a,b){if(e("punc",".")){g();return bc(p("dot",a,bb()),b)}if(e("punc","[")){g();return bc(p("sub",a,H(bj,G(m,"]"))),b)}if(b&&e("punc","(")){g();return bc(p("call",a,Z(")")),!0)}return b&&e("operator")&&M(z,d.token.value)?H(G(bd,"unary-postfix",d.token.value,a),g):a}function bb(){switch(d.token.type){case"name":case"operator":case"keyword":case"atom":return H(d.token.value,g);default:k()}}function ba(){switch(d.token.type){case"num":case"string":return H(d.token.value,g)}return bb()}function _(){var a=!0,c=[];while(!e("punc","}")){a?a=!1:m(",");if(!b&&e("punc","}"))break;var f=d.token.type,h=ba();f!="name"||h!="get"&&h!="set"||!!e("punc",":")?(m(":"),c.push([h,bj(!1)])):c.push([bb(),P(!1),h])}g();return p("object",c)}function $(){return p("array",Z("]",!b,!0))}function Z(a,b,c){var d=!0,f=[];while(!e("punc",a)){d?d=!1:m(",");if(b&&e("punc",a))break;e("punc",",")&&c?f.push(["atom","undefined"]):f.push(bj(!1))}g();return f}function X(){var a=Y(!1),b;e("punc","(")?(g(),b=Z(")")):b=[];return bc(p("new",a,b),!0)}function W(){return p("const",U())}function V(a){return p("var",U(a))}function U(a){var b=[];for(;;){e("name")||k();var c=d.token.value;g(),e("operator","=")?(g(),b.push([c,bj(!1,a)])):b.push([c]);if(!e("punc",","))break;g()}return b}function T(){var a=R(),b,c;if(e("keyword","catch")){g(),m("("),e("name")||i("Name expected");var f=d.token.value;g(),m(")"),b=[f,R()]}e("keyword","finally")&&(g(),c=R()),!b&&!c&&i("Missing catch/finally blocks");return p("try",a,b,c)}function R(){m("{");var a=[];while(!e("punc","}"))e("eof")&&k(),a.push(t());g();return a}function Q(){var a=q(),b=t(),c;e("keyword","else")&&(g(),c=t());return p("if",a,b,c)}function O(a){var b=a[0]=="var"?p("name",a[1][0]):a;g();var c=bj();m(")");return p("for-in",a,b,c,bk(t))}function N(a){m(";");var b=e("punc",";")?null:bj();m(";");var c=e("punc",")")?null:bj();m(")");return p("for",a,b,c,bk(t))}function K(){m("(");var a=null;if(!e("punc",";")){a=e("keyword","var")?(g(),V(!0)):bj(!0,!0);if(e("operator","in"))return O(a)}return N(a)}function I(a){var b;n()||(b=e("name")?d.token.value:null),b!=null?(g(),L(b,d.labels)||i("Label "+b+" without matching loop or statement")):d.in_loop==0&&i(a+" not inside a loop or switch"),o();return p(a,b)}function F(){return p("stat",H(bj,o))}function w(a){d.labels.push(a);var c=d.token,e=t();b&&!M(C,e[0])&&k(c),d.labels.pop();return p("label",a,e)}function s(a){return c?function(){var b=d.token,c=a.apply(this,arguments);c[0]=r(c[0],b,h());return c}:a}function r(a,b,c){return a instanceof E?a:new E(a,b,c)}function q(){m("(");var a=bj();m(")");return a}function p(){return J(arguments)}function o(){e("punc",";")?g():n()||k()}function n(){return!b&&(d.token.nlb||e("eof")||e("punc","}"))}function m(a){return l("punc",a)}function l(a,b){if(e(a,b))return g();j(d.token,"Unexpected token "+d.token.type+", expected "+a)}function k(a){a==null&&(a=d.token),j(a,"Unexpected token: "+a.type+" ("+a.value+")")}function j(a,b){i(b,a.line,a.col)}function i(a,b,c,e){var f=d.input.context();u(a,b!=null?b:f.tokline,c!=null?c:f.tokcol,e!=null?e:f.tokpos)}function h(){return d.prev}function g(){d.prev=d.token,d.peeked?(d.token=d.peeked,d.peeked=null):d.token=d.input();return d.token}function f(){return d.peeked||(d.peeked=d.input())}function e(a,b){return v(d.token,a,b)}var d={input:typeof a=="string"?x(a,!0):a,token:null,prev:null,peeked:null,in_function:0,in_loop:0,labels:[]};d.token=g();var t=s(function(){e("operator","/")&&(d.peeked=null,d.token=d.input(!0));switch(d.token.type){case"num":case"string":case"regexp":case"operator":case"atom":return F();case"name":return v(f(),"punc",":")?w(H(d.token.value,g,g)):F();case"punc":switch(d.token.value){case"{":return p("block",R());case"[":case"(":return F();case";":g();return p("block");default:k()};case"keyword":switch(H(d.token.value,g)){case"break":return I("break");case"continue":return I("continue");case"debugger":o();return p("debugger");case"do":return function(a){l("keyword","while");return p("do",H(q,o),a)}(bk(t));case"for":return K();case"function":return P(!0);case"if":return Q();case"return":d.in_function==0&&i("'return' outside of function");return p("return",e("punc",";")?(g(),null):n()?null:H(bj,o));case"switch":return p("switch",q(),S());case"throw":return p("throw",H(bj,o));case"try":return T();case"var":return H(V,o);case"const":return H(W,o);case"while":return p("while",q(),bk(t));case"with":return p("with",q(),t());default:k()}}}),P=s(function(a){var b=e("name")?H(d.token.value,g):null;a&&!b&&k(),m("(");return p(a?"defun":"function",b,function(a,b){while(!e("punc",")"))a?a=!1:m(","),e("name")||k(),b.push(d.token.value),g();g();return b}(!0,[]),function(){++d.in_function;var a=d.in_loop;d.in_loop=0;var b=R();--d.in_function,d.in_loop=a;return b}())}),S=G(bk,function(){m("{");var a=[],b=null;while(!e("punc","}"))e("eof")&&k(),e("keyword","case")?(g(),b=[],a.push([bj(),b]),m(":")):e("keyword","default")?(g(),m(":"),b=[],a.push([null,b])):(b||k(),b.push(t()));g();return a}),Y=s(function(a){if(e("operator","new")){g();return X()}if(e("operator")&&M(y,d.token.value))return bd("unary-prefix",H(d.token.value,g),Y(a));if(e("punc")){switch(d.token.value){case"(":g();return bc(H(bj,G(m,")")),a);case"[":g();return bc($(),a);case"{":g();return bc(_(),a)}k()}if(e("keyword","function")){g();return bc(P(!1),a)}if(M(D,d.token.type)){var b=d.token.type=="regexp"?p("regexp",d.token.value[0],d.token.value[1]):p(d.token.type,d.token.value);return bc(H(b,g),a)}k()}),bj=s(function(a,b){arguments.length==0&&(a=!0);var c=bi(b);if(a&&e("punc",",")){g();return p("seq",c,bj(!0,b))}return c});return p("toplevel",function(a){while(!e("eof"))a.push(t());return a}([]))}function E(a,b,c){this.name=a,this.start=b,this.end=c}function x(b){function P(a){if(a)return I();y(),v();var b=g();if(!b)return x("eof");if(o(b))return C();if(b=='"'||b=="'")return F();if(M(l,b))return x("punc",h());if(b==".")return L();if(b=="/")return K();if(M(e,b))return J();if(b=="\\"||q(b))return N();B("Unexpected character '"+b+"'")}function O(a,b){try{return b()}catch(c){if(c===w)B(a);else throw c}}function N(){var b=A(r);return M(a,b)?M(i,b)?x("operator",b):M(d,b)?x("atom",b):x("keyword",b):x("name",b)}function L(){h();return o(g())?C("."):x("punc",".")}function K(){h();var a=f.regex_allowed;switch(g()){case"/":f.comments_before.push(G()),f.regex_allowed=a;return P();case"*":f.comments_before.push(H()),f.regex_allowed=a;return P()}return f.regex_allowed?I():J("/")}function J(a){function b(a){if(!g())return a;var c=a+g();if(M(i,c)){h();return b(c)}return a}return x("operator",b(a||h()))}function I(){return O("Unterminated regular expression",function(){var a=!1,b="",c,d=!1;while(c=h(!0))if(a)b+="\\"+c,a=!1;else if(c=="[")d=!0,b+=c;else if(c=="]"&&d)d=!1,b+=c;else{if(c=="/"&&!d)break;c=="\\"?a=!0:b+=c}var e=A(function(a){return M(m,a)});return x("regexp",[b,e])})}function H(){h();return O("Unterminated multiline comment",function(){var a=t("*/",!0),b=f.text.substring(f.pos,a),c=x("comment2",b,!0);f.pos=a+2,f.line+=b.split("\n").length-1,f.newline_before=b.indexOf("\n")>=0;return c})}function G(){h();var a=t("\n"),b;a==-1?(b=f.text.substr(f.pos),f.pos=f.text.length):(b=f.text.substring(f.pos,a),f.pos=a);return x("comment1",b,!0)}function F(){return O("Unterminated string constant",function(){var a=h(),b="";for(;;){var c=h(!0);if(c=="\\")c=D();else if(c==a)break;b+=c}return x("string",b)})}function E(a){var b=0;for(;a>0;--a){var c=parseInt(h(!0),16);isNaN(c)&&B("Invalid hex-character pattern in string"),b=b<<4|c}return b}function D(){var a=h(!0);switch(a){case"n":return"\n";case"r":return"\r";case"t":return"\t";case"b":return"\b";case"v":return"";case"f":return"\f";case"0":return"";case"x":return String.fromCharCode(E(2));case"u":return String.fromCharCode(E(4));case"\n":return"";default:return a}}function C(a){var b=!1,c=!1,d=!1,e=a==".",f=A(function(f,g){if(f=="x"||f=="X")return d?!1:d=!0;if(!d&&(f=="E"||f=="e"))return b?!1:b=c=!0;if(f=="-")return c||g==0&&!a?!0:!1;if(f=="+")return c;c=!1;if(f==".")return!e&&!d?e=!0:!1;return p(f)});a&&(f=a+f);var g=s(f);if(!isNaN(g))return x("num",g);B("Invalid syntax: "+f)}function B(a){u(a,f.tokline,f.tokcol,f.tokpos)}function A(a){var b="",c=g(),d=0;while(c&&a(c,d++))b+=h(),c=g();return b}function y(){while(M(j,g()))h()}function x(a,b,d){f.regex_allowed=a=="operator"&&!M(z,b)||a=="keyword"&&M(c,b)||a=="punc"&&M(k,b);var e={type:a,value:b,line:f.tokline,col:f.tokcol,pos:f.tokpos,nlb:f.newline_before};d||(e.comments_before=f.comments_before,f.comments_before=[]),f.newline_before=!1;return e}function v(){f.tokline=f.line,f.tokcol=f.col,f.tokpos=f.pos}function t(a,b){var c=f.text.indexOf(a,f.pos);if(b&&c==-1)throw w;return c}function n(){return!f.peek()}function h(a){var b=f.text.charAt(f.pos++);if(a&&!b)throw w;b=="\n"?(f.newline_before=!0,++f.line,f.col=0):++f.col;return b}function g(){return f.text.charAt(f.pos)}var f={text:b.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,""),pos:0,tokpos:0,line:0,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,comments_before:[]};P.context=function(a){a&&(f=a);return f};return P}function v(a,b,c){return a.type==b&&(c==null||a.value==c)}function u(a,b,c,d){throw new t(a,b,c,d)}function t(a,b,c,d){this.message=a,this.line=b,this.col=c,this.pos=d}function s(a){if(f.test(a))return parseInt(a.substr(2),16);if(g.test(a))return parseInt(a.substr(1),8);if(h.test(a))return parseFloat(a)}function r(a){return q(a)||o(a)}function q(a){return a=="$"||a=="_"||n(a)}function p(a){return o(a)||n(a)}function o(a){a=a.charCodeAt(0);return a>=48&&a<=57}function n(a){a=a.charCodeAt(0);return a>=65&&a<=90||a>=97&&a<=122}var a=I(["break","case","catch","const","continue","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","throw","try","typeof","var","void","while","with"]),b=I(["abstract","boolean","byte","char","class","debugger","double","enum","export","extends","final","float","goto","implements","import","int","interface","long","native","package","private","protected","public","short","static","super","synchronized","throws","transient","volatile"]),c=I(["return","new","delete","throw","else","case"]),d=I(["false","null","true","undefined"]),e=I(K("+-*&%=<>!?|~^")),f=/^0x[0-9a-f]+$/i,g=/^0[0-7]+$/,h=/^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i,i=I(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),j=I(K(" \n\r\t")),k=I(K("[{}(,.;:")),l=I(K("[]{}(),;:")),m=I(K("gmsiy"));t.prototype.toString=function(){return this.message+" (line: "+this.line+", col: "+this.col+", pos: "+this.pos+")"};var w={},y=I(["typeof","void","delete","--","++","!","~","-","+"]),z=I(["--","++"]),A=function(a,b,c){while(c<a.length)b[a[c]]=a[c].substr(0,a[c].length-1),c++;return b}(["+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="],{"=":!0},0),B=function(a,b){for(var c=0,d=1;c<a.length;++c,++d){var e=a[c];for(var f=0;f<e.length;++f)b[e[f]]=d}return b}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{}),C=I(["for","do","while","switch"]),D=I(["atom","num","string","regexp","name"]);E.prototype.toString=function(){return this.name};var P=I(["name","array","object","string","dot","sub","call","regexp"]),R=I(["if","while","do","for","for-in","with"]);return{parse:F,gen_code:S,tokenizer:x,ast_walker:N}}

	// Math Operators

	var operators = {
		'+': 'add',
		'-': 'subtract',
		'*': 'multiply',
		'/': 'divide',
		'%': 'modulo',
		'==': 'equals',
		'!=': 'equals'
	};

	function $eval(left, operator, right) {
		var handler = operators[operator];
		if (left && left[handler]) {
			var res = left[handler](right);
			return operator == '!=' ? !res : res;
		}
		switch (operator) {
		case '+': return left + right;
		case '-': return left - right;
		case '*': return left * right;
		case '/': return left / right;
		case '%': return left % right;
		case '==': return left == right;
		case '!=': return left != right;
		default:
			throw new Error('Implement Operator: ' + operator);
		}
	};

	// Sign Operators

	var signOperators = {
		'-': 'negate'
	};

	function $sign(operator, value) {
		var handler = signOperators[operator];
		if (value && value[handler]) {
			return value[handler]();
		}
		switch (operator) {
		case '+': return +value;
		case '-': return -value;
		default:
			throw new Error('Implement Sign Operator: ' + operator);
		}
	}

	// AST Helpers

	function isDynamic(exp) {
		var type = exp[0];
		return type != 'num' && type != 'string';
	}

	function handleOperator(operator, left, right) {
		// Only replace operators with calls to $operator if the left hand side
		// is potentially an object.
		if (operators[operator] && isDynamic(left)) {
			// Replace with call to $operator(left, operator, right):
			return ['call', ['name', '$eval'],
					[left, ['string', operator], right]];
		}
	}

	/**
	 * Compiles PaperScript code into JavaScript code.
	 *
	 * @name PaperScript.compile
	 * @function
	 * @param {String} code The PaperScript code.
	 * @return {String} The compiled PaperScript as JavaScript code.
	 */
	function compile(code) {
		// Use parse-js to translate the code into a AST structure which is then
		// walked and parsed for operators to overload. The resulting AST is
		// translated back to code and evaluated.
		var ast = parse_js.parse(code),
			walker = parse_js.ast_walker(),
			walk = walker.walk;

		ast = walker.with_walkers({
			'binary': function(operator, left, right) {
				// Handle simple mathematical operators here:
				return handleOperator(operator, left = walk(left),
						right = walk(right))
						// Always return something since we're walking left and
						|| [this[0], operator, left, right];
			},

			'assign': function(operator, left, right) {
				var res = handleOperator(operator, left = walk(left),
						right = walk(right));
				if (res)
					return [this[0], true, left, res];
				return [this[0], operator, left, right];
			},

			'unary-prefix': function(operator, exp) {
				if (signOperators[operator] && isDynamic(exp)) {
					return ['call', ['name', '$sign'],
							[['string', operator], walk(exp)]];
				}
			}
		}, function() {
			return walk(ast);
		});

		return parse_js.gen_code(ast, {
			beautify: true
		});
	}

	function evaluate(code, scope) {
		paper = scope;
		var view = scope.view,
			tool = /on(?:Key|Mouse)(?:Up|Down|Move|Drag)/.test(code)
					&& new Tool(),
			res;
		with (scope) {
			(function() {
				var onEditOptions, onSelect, onDeselect, onReselect, onMouseDown,
					onMouseUp, onMouseDrag, onMouseMove, onKeyDown, onKeyUp,
					onFrame, onResize,
					handlers = [ 'onEditOptions', 'onSelect', 'onDeselect',
						'onReselect', 'onMouseDown', 'onMouseUp', 'onMouseDrag',
						'onMouseMove', 'onKeyDown', 'onKeyUp'];
				res = eval(compile(code));
				if (tool) {
					Base.each(handlers, function(key) {
						tool[key] = eval(key);
					});
				}
				if (view) {
					view.onResize = onResize;
					view.setOnFrame(onFrame);
					view.draw();
				}
			}).call(scope);
		}
		return res;
	}

	function request(url, scope) {
		var xhr = new (window.ActiveXObject || XMLHttpRequest)(
				'Microsoft.XMLHTTP');
		xhr.open('GET', url, true);
		if (xhr.overrideMimeType) {
			xhr.overrideMimeType('text/plain');
		}
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				return evaluate(xhr.responseText, scope);
			}
		};
		return xhr.send(null);
	}

	function load() {
		var scripts = document.getElementsByTagName('script');
		for (var i = 0, l = scripts.length; i < l; i++) {
			var script = scripts[i];
			if (/^text\/(?:x-|)paperscript$/.test(script.type)
					&& !script.getAttribute('data-paper-loaded')) {
				var scope = new PaperScope(script);
				scope.setup(PaperScript.getAttribute(script, 'canvas'));
				if (script.src) {
					request(script.src, scope);
				} else {
					evaluate(script.innerHTML, scope);
				}
				script.setAttribute('data-paper-loaded', true);
			}
		}
	}

	DomEvent.add(window, { load: load });

	function handleAttribute(name) {
		name += 'Attribute';
		return function(el, attr) {
			return el[name](attr) || el[name]('data-paper-' + attr);
		};
	}

	return {
		compile: compile,
		evaluate: evaluate,
		load: load,
		getAttribute: handleAttribute('get'),
		hasAttribute: handleAttribute('has')
	};

};

this.load = PaperScript.load;

Base.each(this, function(val, key) {
	if (val && val.prototype instanceof Base) {
		val._name = key;
	}
});

this.enumerable = true;
return new (PaperScope.inject(this));
};
/*
 * permute.js 1.0 - Permutation calculator
 * Copyright 2007 Scriptar.com, All Rights Reserved.
 * Author: Scriptar (scriptar@gmail.com)
 * Date: 2007-07-19 11:00:00 -0800 (Thu, 19 Jul 2007)
 * Description: The intent of this permutation generator is to
 * describe in simple terms how to change the order or arrangment of
 * the characters in a string... in other words, it's a teaching tool.
 * It employs a "hold-one-character-constant-while-rearranging-the-remaining-characters-using-a-recursive-function"
 * technique. This is by no means the "best" or "fastest" way of calculating
 * permutations (*is* there a best way?). It's sorta fast, but JavaScript
 * code is not well known for setting speed records. To understand the algorithm,
 * one should be familiar with looping, arrays, pushing, popping, and recursion.
 * If you can say, "I haven't had 'arrays' yet", well -- I haven't had a raise in
 * a while either... so go pick up a book or take a Computer Science class
 * (like CS161) and when you're done this'll all make more sense.
 */

//permArr: Global array which holds the list of permutations
//usedChars: Global utility array which holds a list of "currently-in-use" characters



function permute(input){
	var permArr = [], usedChars = [];
	function __permute(input) {
		//convert input into a char array (one element for each character)
		var i, ch, chars = input.split("");
		for (i = 0; i < chars.length; i++) {
			//get and remove character at index "i" from char array
			ch = chars.splice(i, 1);
			//add removed character to the end of used characters
			usedChars.push(ch);
			//when there are no more characters left in char array to add, add used chars to list of permutations
			if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
			//send characters (minus the removed one from above) from char array to be permuted
			__permute(chars.join(""));
			//add removed character back into char array in original position
			chars.splice(i, 0, ch);
			//remove the last character used off the end of used characters array
			usedChars.pop();
		}
	}
	__permute(input);
	return permArr;
}
;
/**
 * A 3d coordinate
 */

function Point3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;

	// Relative to camera coordinates
	this.tx;
	this.ty;
	this.tz;

	// Flattened coordinates
	this.fx;
	this.fy;
}

Point3.prototype.subtract = function(other) {
	return new Point3(
		this.x - other.x,
		this.y - other.y,		
		this.z - other.z
	);
}

Point3.prototype.add = function(other) {
	return new Point3(
		this.x + other.x,
		this.y + other.y,		
		this.z + other.z
	);
}

Point3.prototype.swapXZ = function() {
	return new Point3(
		this.z,
		this.y,
		this.x
	);
}
Point3.prototype.multiply = function(point){
    if(point instanceof Point3){
        return new Point3(
            this.x*point.x,
            this.y*point.y,
            this.z*point.z
        );
    }
    else if(!isNaN(point)){
        return this.multiply(new Point3(point,point,point));
    }
    else{
        throw "wrong argument! must be a Point3 or number";
    }
}
Point3.prototype.normalize = function(){
	return this.setLength(1);
}

Point3.prototype.norm = function(){
	return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

Point3.prototype.length = function(){
	return this.norm();
}

Point3.prototype.setLength = function(length){
	var factor = length/this.norm();
		
	return this.scale(factor);
}

Point3.prototype.scale = function(scale) {
	this.x = this.x*scale;
	this.y = this.y*scale;
	this.z = this.z*scale;
	
	return this;
}
Point3.prototype.clone = function(){
    return new Point3(this.x,this.y,this.z);
}
Point3.prototype.cross = function(other){
	return new Point3(
		this.y*other.z - this.z*other.y,
		this.z*other.x - this.x*other.z,
		this.x*other.y - this.y*other.x 
	);
}

Point3.prototype.dot = function(other) {
	return this.x * other.x + this.y * other.y + this.z * other.z;
}

Point3.prototype.getRotatedPointByX = function(angle, center) {
	if (angle == 0) {
		return this;
	}

	var cos = Math.cos(angle);
	var sin = Math.sin(angle);

	if (center == undefined) {
		var y = this.y * cos - this.z * sin;
		var z = this.y * sin + this.z * cos;

		return new Point3(this.x, y, z);
	} else {
		var p = new Point3(0, this.y - center.y, this.z - center.z);
		var y = p.y * cos - p.z * sin;
		var z = p.y * sin + p.z * cos;

		return new Point3(this.x, y + center.y, z + center.z);
	}
};


Point3.prototype.getRotatedPointByY = function(angle, center) {
	if (angle == 0) {
		return this;
	}

	var cos = Math.cos(angle);
	var sin = Math.sin(angle);

	if (center == undefined) {
		var x =   this.x * cos + this.z * sin;
		var z = - this.x * sin + this.z * cos;

		return new Point3(x, this.y, z);
	} else {
		var p = new Point3(this.x - center.x,0, this.z - center.z);
		var x =   p.x * cos + p.z * sin;
		var z = - p.x * sin + p.z * cos;

		return new Point3(x + center.x, this.y, z + center.z);
	}
};
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cF(a){for(var b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.splice(b--,1)}function cE(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cy.length;y<z;y++){var x=cy[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cy.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bR(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new cb,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.f-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cC(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cy.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cy.length==1)return cA()}l&&(x.start=new Date-x.ms*f),cy.length==1&&cz(cA)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("raphael.anim.start."+d.id,d,b)}}function cD(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cC(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cq(){return this.x+q+this.y+q+this.width+" × "+this.height}function cp(){return this.x+q+this.y}function cb(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bH(b,c,d){b=a._path2curve(b),c=a._path2curve(c);var e,f,g,h,i,j,k,l,m,n,o=d?0:[];for(var p=0,q=b.length;p<q;p++){var r=b[p];if(r[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?(m=[e,f].concat(r.slice(1)),e=m[6],f=m[7]):(m=[e,f,e,f,i,j,i,j],e=i,f=j);for(var s=0,t=c.length;s<t;s++){var u=c[s];if(u[0]=="M")g=k=u[1],h=l=u[2];else{u[0]=="C"?(n=[g,h].concat(u.slice(1)),g=n[6],h=n[7]):(n=[g,h,g,h,k,l,k,l],g=k,h=l);var v=bG(m,n,d);if(d)o+=v;else{for(var w=0,x=v.length;w<x;w++)v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concat(v)}}}}}return o}function bG(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];var g=bB.apply(0,b),h=bB.apply(0,c),i=~~(g/5),j=~~(h/5),k=[],l=[],m={},n=d?0:[];for(var o=0;o<i+1;o++){var p=a.findDotsAtSegment.apply(a,b.concat(o/i));k.push({x:p.x,y:p.y,t:o/i})}for(o=0;o<j+1;o++)p=a.findDotsAtSegment.apply(a,c.concat(o/j)),l.push({x:p.x,y:p.y,t:o/j});for(o=0;o<i;o++)for(var q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=z(s.x-r.x)<.001?"y":"x",w=z(u.x-t.x)<.001?"y":"x",x=bD(r.x,r.y,s.x,s.y,t.x,t.y,u.x,u.y);if(x){if(m[x.x.toFixed(4)]==x.y.toFixed(4))continue;m[x.x.toFixed(4)]=x.y.toFixed(4);var y=r.t+z((x[v]-r[v])/(s[v]-r[v]))*(s.t-r.t),A=t.t+z((x[w]-t[w])/(u[w]-t[w]))*(u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&(d?n++:n.push({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bF(a,b){return bG(a,b,1)}function bE(a,b){return bG(a,b)}function bD(a,b,c,d,e,f,g,h){if(!(x(a,c)<y(e,g)||y(a,c)>x(e,g)||x(b,d)<y(f,h)||y(b,d)>x(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(!k)return;var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(n<+y(a,c).toFixed(2)||n>+x(a,c).toFixed(2)||n<+y(e,g).toFixed(2)||n>+x(e,g).toFixed(2)||o<+y(b,d).toFixed(2)||o>+x(b,d).toFixed(2)||o<+y(f,h).toFixed(2)||o>+x(f,h).toFixed(2))return;return{x:l,y:m}}}function bC(a,b,c,d,e,f,g,h,i){if(!(i<0||bB(a,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j-k,m,n=.01;m=bB(a,b,c,d,e,f,g,h,l);while(z(m-i)>n)k/=2,l+=(m<i?1:-1)*k,m=bB(a,b,c,d,e,f,g,h,l);return l}}function bB(a,b,c,d,e,f,g,h,i){i==null&&(i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0;for(var o=0;o<k;o++){var p=j*l[o]+j,q=bA(p,a,c,e,g),r=bA(p,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrt(s)}return j*n}function bA(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function by(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bx(){return this.hex}function bv(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bu(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bu(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function bm(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[g](c)&&(b[c]=bm(a[c]));return b}function a(c){if(a.is(c,"function"))return b?c():eve.on("raphael.DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("raphael.DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.1.0",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bR(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bn=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bo=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bo=bv(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bo=bv(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bo(b)},bp=function(){return"hsb("+[this.h,this.s,this.b]+")"},bq=function(){return"hsl("+[this.h,this.s,this.l]+")"},br=function(){return this.hex},bs=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bt=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:br};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=br;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bp}},a.rgb2hsl=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bw=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bv(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bo(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bv(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bv(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bv(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=function(b){if(!b)return null;var c=bz(b);if(c.arr)return bJ(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];a.is(b,E)&&a.is(b[0],E)&&(e=bJ(b)),e.length||r(b).replace(Z,function(a,b,c){var f=[],g=b.toLowerCase();c.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(e.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")e.push([b][n](f));else while(f.length>=d[g]){e.push([b][n](f.splice(0,d[g])));if(!d[g])break}}),e.toString=a._path2string,c.arr=bJ(e);return e},a.parseTransformString=bv(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bJ(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d});var bz=function(a){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[g](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])});return b[a]};a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezierBBox=function(b,c,d,e,f,g,h,i){a.is(b,"array")||(b=[b,c,d,e,f,g,h,i]);var j=bQ.apply(null,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=function(b,c){var d=a.isPointInsideBBox;return d(c,b.x,b.y)||d(c,b.x2,b.y)||d(c,b.x,b.y2)||d(c,b.x2,b.y2)||d(b,c.x,c.y)||d(b,c.x2,c.y)||d(b,c.x,c.y2)||d(b,c.x2,c.y2)||(b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&(b.y<c.y2&&b.y>c.y||c.y<b.y2&&c.y>b.y)},a.pathIntersection=function(a,b){return bH(a,b)},a.pathIntersectionNumber=function(a,b){return bH(a,b,1)},a.isPointInsidePath=function(b,c,d){var e=a.pathBBox(b);return a.isPointInsideBBox(e,c,d)&&bH(b,[["M",c,d],["H",e.x2+10]],1)%2==1},a._removedFactory=function(a){return function(){eve("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var bI=a.pathBBox=function(a){var b=bz(a);if(b.bbox)return b.bbox;if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bR(a);var c=0,d=0,e=[],f=[],g;for(var h=0,i=a.length;h<i;h++){g=a[h];if(g[0]=="M")c=g[1],d=g[2],e.push(c),f.push(d);else{var j=bQ(c,d,g[1],g[2],g[3],g[4],g[5],g[6]);e=e[n](j.min.x,j.max.x),f=f[n](j.min.y,j.max.y),c=g[5],d=g[6]}}var k=y[m](0,e),l=y[m](0,f),o=x[m](0,e),p=x[m](0,f),q={x:k,y:l,x2:o,y2:p,width:o-k,height:p-l};b.bbox=bm(q);return q},bJ=function(b){var c=bm(b);c.toString=a._path2string;return c},bK=a._pathToRelative=function(b){var c=bz(b);if(c.rel)return bJ(c.rel);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=b[0][1],f=b[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if(m[0]!=v.call(m[0])){l[0]=v.call(m[0]);switch(l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;n<o;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}}else{l=d[j]=[],m[0]=="m"&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2string,c.rel=bJ(d);return d},bL=a._pathToAbsolute=function(b){var c=bz(b);if(c.abs)return bJ(c.abs);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]);var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var k,l,m=i,o=b.length;m<o;m++){d.push(k=[]),l=b[m];if(l[0]!=S.call(l[0])){k[0]=S.call(l[0]);switch(k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":var p=[e,f][n](l.slice(1));for(var q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[n](by(p,j));break;case"M":g=+l[1]+e,h=+l[2]+f;default:for(q=1,r=l.length;q<r;q++)k[q]=+l[q]+(q%2?e:f)}}else if(l[0]=="R")p=[e,f][n](l.slice(1)),d.pop(),d=d[n](by(p,j)),k=["R"][n](l.slice(-2));else for(var s=0,t=l.length;s<t;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toString=a._path2string,c.abs=bJ(d);return d},bM=function(a,b,c,d){return[a,b,c,d,c,d]},bN=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bv(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bO(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bP=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bQ=bv(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bR=a._path2curve=bv(function(a,b){var c=!b&&bz(a);if(!b&&c.curve)return bJ(c.curve);var d=bL(a),e=b&&bL(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bO[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bN(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bN(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bM(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bM(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bM(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bM(b.x,b.y,b.X,b.Y))}return a},i=function(a,b){if(a[b].length>7){a[b].shift();var c=a[b];while(c.length)a.splice(b++,0,["C"][n](c.splice(0,6)));a.splice(b,1),l=x(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=x(d.length,e&&e.length||0))};for(var k=0,l=x(d.length,e&&e.length||0);k<l;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o[q-1],f.bx=Q(o[q-4])||f.x,f.by=Q(o[q-3])||f.y,g.bx=e&&(Q(p[r-4])||g.x),g.by=e&&(Q(p[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||(c.curve=bJ(d));return e?[d,e]:d},null,bJ),bS=a._parseDots=bv(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bU=a._tofront=function(a,b){b.top!==a&&(bT(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bV=a._toback=function(a,b){b.bottom!==a&&(bT(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=function(a,b,c){bT(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bX=a._insertbefore=function(a,b,c){bT(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bY=a.toMatrix=function(a,b){var c=bI(a),d={_:{transform:p},getBBox:function(){return c}};b$(d,b);return d.matrix},bZ=a.transformPath=function(a,b){return bj(a,bY(a,b))},b$=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new cb;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||b_(c[g]),k=c[g]||b_(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engine={},a.path2curve=bR,a.matrix=function(a,b,c,d,e,f){return new cb(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new cb(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new cb(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(cb.prototype);var cc=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(cc&&cc[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&cc&&cc[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var cd=function(){this.returnValue=!1},ce=function(){return this.originalEvent.preventDefault()},cf=function(){this.cancelBubble=!0},cg=function(){return this.originalEvent.stopPropagation()},ch=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=ce,e.stopPropagation=cg;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),ci=[],cj=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=ci.length;while(g--){f=ci[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("raphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("raphael.drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=function(b){a.unmousemove(cj).unmouseup(ck);var c=ci.length,d;while(c--)d=ci[c],d.el._drag={},eve("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};for(var cm=t.length;cm--;)(function(b){a[b]=cl[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:ch(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=cl["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[cm]);cl.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("raphael.data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("raphael.data.set."+this.id,this,c,b);return this},cl.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},cl.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},cl.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cn=[];cl.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!ci.length&&a.mousemove(cj).mouseup(ck),ci.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("raphael.drag.start."+this.id,c),b&&eve.on("raphael.drag.move."+this.id,b),d&&eve.on("raphael.drag.end."+this.id,d),eve("raphael.drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push({el:this,start:i}),this.mousedown(i);return this},cl.onDragOver=function(a){a?eve.on("raphael.drag.over."+this.id,a):eve.unbind("raphael.drag.over."+this.id)},cl.undrag=function(){var b=cn.length;while(b--)cn[b].el==this&&(this.unmousedown(cn[b].start),cn.splice(b,1),eve.unbind("raphael.drag.*."+this.id));!cn.length&&a.unmousemove(cj).unmouseup(ck)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cG(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=co(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},k.getElementsByPoint=function(a,b){var c=this.set();this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)});return c},cl.isPointInside=function(b,c){var d=this.realPath=this.realPath||bi[this.type](this);return a.isPointInsidePath(d,b,c)},cl.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=bI(this.realPath),b.bboxwt.toString=cq,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=bI(bj(this.realPath,this.matrix)),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return b.bbox},cl.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},cl.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cr={},cs=function(b,c,d,e,f,g,h,i,j){return j==null?bB(b,c,d,e,f,g,h,i):a.findDotsAtSegment(b,c,d,e,f,g,h,i,bC(b,c,d,e,f,g,h,i,j))},ct=function(b,c){return function(d,e,f){d=bR(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cu=ct(1),cv=ct(),cw=ct(0,1);a.getTotalLength=cu,a.getPointAtLength=cv,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cw(a,b).end;var d=cw(a,c,1);return b?cw(d,b).end:d},cl.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return cu(this.attrs.path)}},cl.getPointAtLength=function(a){if(this.type=="path")return cv(this.attrs.path,a)},cl.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cx=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cA=function(){var b=+(new Date),c=0;for(;c<cy.length;c++){var d=cy[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cy.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cB(O(i[u].r+t*f*j[u].r)),cB(O(i[u].g+t*f*j[u].g)),cB(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("raphael.anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("raphael.anim.frame."+c.id,c,d),eve("raphael.anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cy.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cE(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cE(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cy.length&&cz(cA)},cB=function(a){return a>255?255:a<0?0:a};cl.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cD?d:a.animation(d,e,f,g),j,k;cE(i,h,i.percents[0],null,h.attr());for(var l=0,m=cy.length;l<m;l++)if(cy[l].anim==c&&cy[l].el==b){cy[m-1].start=cy[l].start;break}return h},cl.onAnimation=function(a){a?eve.on("raphael.anim.frame."+this.id,a):eve.unbind("raphael.anim.frame."+this.id);return this},cD.prototype.delay=function(a){var b=new cD(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cD.prototype.repeat=function(a){var b=new cD(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cD)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cD(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cD({100:f},c)},cl.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cD?b:a.animation(b,c,d,e);cE(g,f,g.percents[0],null,f.attr());return f},cl.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},cl.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cE(a,this,-1,y(b,1));return this}e=cy.length;for(;d<e;d++){f=cy[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},cl.pause=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.pause."+this.id,this,cy[b].anim)!==!1&&(cy[b].paused=!0);return this},cl.resume=function(a){for(var b=0;b<cy.length;b++)if(cy[b].el.id==this.id&&(!a||cy[b].anim==a)){var c=cy[b];eve("raphael.anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},cl.stop=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.stop."+this.id,this,cy[b].anim)!==!1&&cy.splice(b--,1);return this},eve.on("raphael.remove",cF),eve.on("raphael.clear",cF),cl.toString=function(){return"Raphaël’s object"};var cG=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==cl.constructor||a[b].constructor==cG)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cH=cG.prototype;cH.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==cl.constructor||a.constructor==cG)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cH.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cH.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cI in cl)cl[g](cI)&&(cH[cI]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cI));cH.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cH.clear=function(){while(this.length)this.pop()},cH.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cG(e)},cH.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cH.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cH.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cH.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b),c=x[m](0,c),d=x[m](0,d);return{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},cH.clone=function(a){a=new cG;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cH.toString=function(){return"Raphaël‘s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=r(e)[s](p),k=0,l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+(h=="baseline"?t+ +f.face.descent:t/2);for(var w=0,z=j.length;w<z;w++){if(j[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?(A.w||f.w)+(A.k&&A.k[j[w]]||0)+f.w*i:0,l=1}B&&B.d&&(m+=a.transformPath(B.d,["t",k*n,u*n,"s",n,n,q,v,"t",(b-q)/n,(d-v)/n]))}}return this.path(m).attr({fill:"#000",stroke:"none"})},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cH,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed&&!!this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("raphael.clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael)
;

var Util = {

    isInteger: function (value) {
        var intRegex = /^\s*-?\s*\d+\s*(.0+)?$/;
        return intRegex.test(value);
        //	return value == Math.floor(value)
    },

    isNumber: function (n) {
        return !isNaN(parseFloat(n,10)) && isFinite(n);
    },

    isPrimeNumber: function(checkedId){
        var a = [];
        a = Util.getFactors(checkedId);

        if(a.length == 2)
            return true;
        else
            return false;
    },

    getFactors: function(number){
        var factorsArr = [];
        var currentUpperLimit = number;

        if(number == 1){
            factorsArr.push(1);
            return factorsArr;
        }
        else{
            for(var i = 0; i < currentUpperLimit; i++){
                if(number % i == 0){
                    currentUpperLimit = number/i;
                    factorsArr.push(i);
                    if(currentUpperLimit != i)
                        factorsArr.push(currentUpperLimit);
                }
            }

            factorsArr.sort(function(a,b){return a-b});
            return factorsArr;
        }
    },

    getPrimeFactors: function(number){
        var factorsArray = [];
        var returnedArray = [];

        factorsArray = Util.getFactors(number);

        for(var i = 0; i < factorsArray.length; i++){
            if(Util.isPrimeNumber(factorsArray[i]))
                returnedArray.push(factorsArray[i]);
        }

        return returnedArray;
    },

    getWholePrimeFactors: function(number){
        var primeFactors = [];
        var wholePrimeFactors = [];

        primeFactors = Util.getPrimeFactors(number);

        for(var i = 0; i < primeFactors.length; i++){
            for(var j = primeFactors[i]; j <= number; j *= primeFactors[i]){
                if(number % j == 0){
                    wholePrimeFactors.push(primeFactors[i]);
                }
            }
        }
        return wholePrimeFactors;
    },

    findDistance:function (x1,y1,x2,y2){
        var _i = x1-x2;
        var _j = y1-y2;
        return Math.sqrt(_i*_i + _j*_j);
    },

    findAngle:function (x1, y1, x2, y2) {
        if (y1 == y2) {
            if (x1 > x2) {
                return Math.PI;
            } else {
                return 0;
            }
        }
        if (x1 == x2) {
            if (y1 > y2) {
                return Math.PI/2;
            } else {
                return 3*Math.PI/2;
            }
        }
        angle = -Math.atan((y2 - y1) / (x2 - x1));
        if (x2 < x1) {
            angle += Math.PI;
        } else if (y2 > y1) {
            angle += 2 * Math.PI;
        }
        return angle;

    },
    radianToDegree: function(a){
        return Math.round(a * (180/Math.PI));
    },

    //keep these two functions
    degreeToRadian : function (angle){
        return angle * (Math.PI / 180);
    },
    degreeToRadians: function (angle){
        return angle * (Math.PI / 180);
    },


    formatNumber: function(number,decimal){
        return Math.floor(number * decimal * 10) / (decimal * 10);
    },
    numberTurkishFloating: function(number,decimal){
        if(decimal==null || decimal==undefined)
            decimal = 1;

        if (decimal < 1) {
            return ""+Math.floor(number+0.5);
        }
        var decimalDividend = Math.pow(10,decimal);

        number += 1;

        number = number * decimalDividend;
        number+=0.5;
        number = Math.floor(number);

        var base = Math.floor(number/decimalDividend);
        var float = "" + (number % decimalDividend + decimalDividend);
        float = float.substring(1,float.length);

        if(float == 0){
            float = "";
            for(var i=0;i<decimal;i++)
                float += "0";
        }
        return (base-1) + ","+float;
    },
    rand01: function(){
        return Math.floor(Math.random()*2);
    },

    randomInteger: function(start, end, excluding, preprocessed) {
        var excludingArray = [];
        if (excluding != undefined && excluding != null) {
			if (preprocessed === true) {
				excludingArray = excluding;
			} else {
	            excluding.sort(function(a,b){return a-b});
	
				var index = 0;
				
	            for (var i = 0; i < excluding.length; i++) {
	                var num = excluding[i];
					
					if (Util.isInteger(num) && num < end && num >= start) {
	                    if (excludingArray[index-1] != num) {
	                        excludingArray.push(num);
							index++;
	                    }
	                }
	            }
			}

            end -= excludingArray.length;
        }
		
		if (end <= start) {
			throw "Impossible random number";
		}
		
        var randNum = Math.floor(Math.random()*(end-start)+start)

        for (var i = 0; i < excludingArray.length; i++) {
            if (excludingArray[i] <= randNum) {
                randNum++;
            } else {
				return randNum;
			}
        }

        return randNum;
    },
    randomDigit : function(){
        return Util.randomInteger(0,10);
    },

    gcd: function(a,b,c){
        if(c == undefined)
            return b ? Util.gcd(b, a%b) : a;
        else
            return Util.gcd(a,Util.gcd(b,c));
    },
    lcm: function(num1, num2, num3, num4){
        if(num3 == null || num3 == undefined)
            return (num1*num2)/Util.gcd(num1,num2);
        else if(num4 == null || num4 == undefined)
            return Util.lcm(num1, Util.lcm(num2,num3));
        else
            return Util.lcm(Util.lcm(num1,num2), Util.lcm(num3,num4));
    },

    reduceFractions: function(nom,denom){
        var gcd = Util.gcd(nom,denom);
        return [nom/gcd, denom/gcd];
    },

    loadImages: function(imageArray, callback) {
        var totalNoOfImages = imageArray.length;
        for (var key in imageArray) {
            image = imageArray[key];
            var img = $("<img id='"+image.id+"' />").attr('src', image.src).load(function() {
                if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0 || this.naturalWidth == null) {
                    throw "Broken Image: " + image;
                    totalNoOfImages--;
                } else {
                    totalNoOfImages--;
                    if (totalNoOfImages == 0) {
                        callback();
                    }
                }
            });
            $("head").append(img);
        }
        if(imageArray.length == 0)
            callback();
    },
    getShuffledArray : function(to,from){
        if(from == null || from == undefined )
            from = 0;
        var a = [];
        for(var i=from,index=0; i<to ;i++,index++){
            a[index] = i;
        }
        var len = Math.floor(to - from);

        for(var i = len-1; i>=0 ; i--) {
            var p = parseInt(Math.random()*len,10);
            var t = a[i];
            a[i] = a[p];
            a[p] = t;
        }
        return a;
    },
    centerOfPoints:function(points){
        var total_x = 0;
        var total_y = 0;
        for(var i=0;i<points.length;i++){
            total_x += points[i].x;
            total_y += points[i].y;
        }
        var x = total_x / points.length;
        var y = total_y / points.length;
        return new Point(x,y);
    },

    rotateX: function(angle, point, center) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];

            var returnPoint3 = true;
        }

        if (center instanceof Point3) {
            center = [center.x, center.y, center.z];
        }

        if (angle == 0) {
            return [point[0], point[1], point[2]];
        }

        var cos = Math.cos(angle);
        var sin = Math.sin(angle);

        if (center == undefined) {
            var y = point[1] * cos - point[2] * sin;
            var z = point[1] * sin + point[2] * cos;

            return new Point3(point[0], y, z);
        } else {
            var p = [point[1] - center[1], point[2] - center[2]];
            var y = p[0] * cos - p[1] * sin;
            var z = p[0] * sin + p[1] * cos;

            if (returnPoint3) {
                return new Point3(point[0], y + center[1], z + center[2]);
            } else {
                return [point[0], y + center[1], z + center[2]];
            }
        }
    },

    rotateY: function(angle, point, center) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];

            var returnPoint3 = true;
        }

        if (center instanceof Point3) {
            center = [center.x, center.y, center.z];
        }

        if (angle == 0) {
            return [point[0], point[1], point[2]];
        }

        var cos = Math.cos(angle);
        var sin = Math.sin(angle);

        if (center == undefined) {
            var x =   point[0] * cos + point[2] * sin;
            var z = - point[0] * sin + point[2] * cos;

            return new Point3(x, point[1], z);
        } else {
            var p = [point[0] - center[0], point[2] - center[2]];
            var x =   p[0] * cos + p[1] * sin;
            var z = - p[0] * sin + p[1] * cos;

            if (returnPoint3) {
                return new Point3(x + center[0], point[1], z + center[2]);
            } else {
                return [x + center[0], point[1], z + center[2]];
            }
        }
    },


    rotateZ: function(angle, point, center) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];

            var returnPoint3 = true;
        }

        if (center instanceof Point3) {
            center = [center.x, center.y, center.z];
        }

        if (angle == 0) {
            return [point[0], point[1], point[2]];
        }

        var cos = Math.cos(angle);
        var sin = Math.sin(angle);

        if (center == undefined) {
            var x = point[0] * cos - point[1] * sin;
            var y = point[0] * sin + point[1] * cos;

            return new Point3(x, y, point[2]);
        } else {
            var p = [point[0] - center[0], point[1] - center[1]];
            var x = p[0] * cos - p[1] * sin;
            var y = p[0] * sin + p[1] * cos;

            if (returnPoint3) {
                return new Point3(x + center[0], y + center[1], point[2]);
            } else {
                return [x + center[0], y + center[1], point[2]];
            }
        }
    },


    createProjectionMatrixForObjectAt: function(x, y, fov) {

        if (fov == undefined) {
            fov = 1024;
        }

        var zFactor = 3;

        return [
            1,	0,	128*zFactor/fov + x/fov, 	x,
            0,  1,   -128*zFactor/fov + y/fov, 	y,
            0,	0,			1/fov, 	1,
            0,	0,				0, 	1
        ];
    },

    createProjectionMatrix: function (nearPlaneWidth, nearPlaneHeight, nearPlaneZ, viewportLeft, viewportTop, viewportWidth, viewportHeight) {
        if (viewportLeft === undefined) {
            viewportLeft = -0.5;
            viewportRight = 0.5;
            viewportWidth = 1;
            viewportHeight = 1;
        } else if (viewportWidth === undefined) {
            viewportWidth = viewportLeft;
            viewportHeight = viewportTop;
            viewportLeft = 0;
            viewportTop = 0;
        }

        return [
            viewportWidth/nearPlaneWidth,				   				 0, 	-1/nearPlaneZ*(viewportLeft + viewportWidth/2), 	0,
            0,  -viewportHeight/nearPlaneHeight,	 	-1/nearPlaneZ*(viewportTop + viewportHeight/2), 	0,
            0,  								 0, 									 -1/nearPlaneZ, 	0,
            0,  								 0, 						   						 0, 	1
        ];
    },

    project: function(point, matrix) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];
        }

        if (!point[3]) {
            point[3] = 1;
        }

        var x = matrix[0] * point[0] + matrix[1] * point[1] + matrix[2] * point[2] + matrix[3] * point[3];
        var y = matrix[4] * point[0] + matrix[5] * point[1] + matrix[6] * point[2] + matrix[7] * point[3];
        var z = matrix[8] * point[0] + matrix[9] * point[1] + matrix[10] * point[2] + matrix[11] * point[3];

        x = x/z;
        y = y/z;

        return new Point(x, y);
    },

    centerOfPoint3s:function(points){
        var total_x = 0;
        var total_y = 0;
        var total_z = 0;
        for(var i=0;i<points.length;i++){
            total_x += points[i].x;
            total_y += points[i].y;
            total_z += points[i].z;
        }
        var x = total_x / points.length;
        var y = total_y / points.length;
        var z = total_z / points.length;
        return new Point3(x,y,z);
    },

    dom:function(opt){
        var node = document.createElement(opt.tag);
        if(opt.parent){
            $(opt.parent).append(node);
        }
        node.id = opt.id;
        node.className = opt.class;
        if(opt.css)
            $(node).css(opt.css);
        if(opt.html)
            $(node).html(opt.html);
        if(opt.value)
            $(node).val(opt.val);
        return node;
    },

    groupNumber: function(number,groupCharacter) {
        if(groupCharacter == undefined)
            groupCharacter = ' ';
        var strNumber = (""+number);
        regex =  /(\d+)(\d{3})/;
        do
            strNumber = strNumber.replace(regex, '$1'+groupCharacter+'$2');
        while(regex.test(strNumber))
        return strNumber;
    },

    format : function(num, options) {
        if(!options)
            options = {};
        options.point=options.point ||',';
        options.group=options.group ||' ';
        options.places=options.places||0;
        options.suffix=options.suffix||'';
        options.prefix=options.prefix||'';

        regex = /(\d+)(\d{3})/;
        result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';

        for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
        return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
    },

    round: function(number, interval){
        if(interval <= 0)
            throw "interval must be a positive number";
        if(interval == undefined)
            interval = 1;
        var sign = number >= 0 ? 1 : -1;
        number = Math.abs(number);
        if(number % interval >= interval/2)
            return sign * Math.ceil(number/interval)*interval;
        else
            return sign * Math.floor(number/interval)*interval;
    },
    floor: function(number,interval){
        if(interval <= 0)
            throw "interval must be a positive number";
        if(interval == undefined)
            interval = 1;
        var sign = number >= 0 ? 1 : -1;
        number = Math.abs(number);
        return sign * Math.floor(number/interval)*interval;
    },

    numberToString:function(number){
        switch(number){
            case 0:
                return 'sıfır';
            case 1:
                return 'bir';
            case 2:
                return 'iki';
            case 3:
                return 'üç';
            case 4:
                return 'dört';
            case 5:
                return 'beş';
            case 6:
                return 'altı';
            case 7:
                return 'yedi';
            case 8:
                return 'sekiz';
            case 9:
                return 'dokuz';
        }
    }

};

String.prototype.reverse = function() {
    var s = "";
    var i = this.length;
    while (i>0) {
        s += this.substring(i-1,i);
        i--;
    }
    return s;
}

;
/* Turkish initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */

jQuery(function($){
	$.datepicker.regional['tr'] = {
		closeText: 'kapat',
		prevText: '&#x3c;geri',
		nextText: 'ileri&#x3e',
		currentText: 'bugün',
		monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
		'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
		monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz',
		'Tem','Ağu','Eyl','Eki','Kas','Ara'],
		dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
		dayNamesShort: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
		dayNamesMin: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
		weekHeader: 'Hf',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['tr']);
});
/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */

(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element
      .bind('touchstart', $.proxy(self, '_touchStart'))
      .bind('touchmove', $.proxy(self, '_touchMove'))
      .bind('touchend', $.proxy(self, '_touchEnd'));

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

})(jQuery);

(function($){
  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children();
      return (items.length)
        ? $(this).html($.shuffle(items))
        : this;
    });
  }
 
  $.shuffle = function(arr) {
    for(
      var j, x, i = arr.length; i;
      j = parseInt(Math.random() * i),
      x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }
})(jQuery);
/**!
 * @preserve Color animation jQuery-plugin
 * http://www.bitstorm.org/jquery/color-animation/
 * Copyright 2011 Edwin Martin <edwin@bitstorm.org>
 * Released under the MIT and GPL licenses.
 */


(function($) {
	/**
	 * Check whether the browser supports RGBA color mode.
	 *
	 * Author Mehdi Kabab <http://pioupioum.fr>
	 * @return {boolean} True if the browser support RGBA. False otherwise.
	 */
	function isRGBACapable() {
		var $script = $('script:first'),
				color = $script.css('color'),
				result = false;
		if (/^rgba/.test(color)) {
			result = true;
		} else {
			try {
				result = ( color != $script.css('color', 'rgba(0, 0, 0, 0.5)').css('color') );
				$script.css('color', color);
			} catch (e) {
			}
		}

		return result;
	}

	$.extend(true, $, {
		support: {
			'rgba': isRGBACapable()
		}
	});

	var properties = ['color', 'backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'outlineColor'];
	$.each(properties, function(i, property) {
		$.fx.step[property] = function(fx) {
			if (!fx.init) {
				fx.begin = parseColor($(fx.elem).css(property));
				fx.end = parseColor(fx.end);
				fx.init = true;
			}

			fx.elem.style[property] = calculateColor(fx.begin, fx.end, fx.pos);
		}
	});

	// borderColor doesn't fit in standard fx.step above.
	$.fx.step.borderColor = function(fx) {
		if (!fx.init) {
			fx.end = parseColor(fx.end);
		}
		var borders = properties.slice(2, 6); // All four border properties
		$.each(borders, function(i, property) {
			if (!fx.init) {
				fx[property] = {begin: parseColor($(fx.elem).css(property))};
			}

			fx.elem.style[property] = calculateColor(fx[property].begin, fx.end, fx.pos);
		});
		fx.init = true;
	}

	// Calculate an in-between color. Returns "#aabbcc"-like string.
	function calculateColor(begin, end, pos) {
		var color = 'rgb' + ($.support['rgba'] ? 'a' : '') + '('
				+ parseInt((begin[0] + pos * (end[0] - begin[0])), 10) + ','
				+ parseInt((begin[1] + pos * (end[1] - begin[1])), 10) + ','
				+ parseInt((begin[2] + pos * (end[2] - begin[2])), 10);
		if ($.support['rgba']) {
			color += ',' + (begin && end ? parseFloat(begin[3] + pos * (end[3] - begin[3])) : 1);
		}
		color += ')';
		return color;
	}

	// Parse an CSS-syntax color. Outputs an array [r, g, b]
	function parseColor(color) {
		var match, triplet;

		// Match #aabbcc
		if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
			triplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1];

			// Match #abc
		} else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
			triplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17, 1];

			// Match rgb(n, n, n)
		} else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
			triplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), 1];

		} else if (match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color)) {
			triplet = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10),parseFloat(match[4])];

			// No browser returns rgb(n%, n%, n%), so little reason to support this format.
		}
		return triplet;
	}
})(jQuery);
// JavaScript Document

Main.paperInit = function() {
	Main.paperInit.Path();
	Main.paperInit.Point();
	Main.paperInit.Item();
    Main.paperInit.Text();
};
// JavaScript Document
Main.raphaelInit = function(){
	Raphael.fn.triangle = function(x1,y1,x2,y2,x3,y3){
		var pathstring ='';
		pathstring += 'M'+x1+','+y1+'L'+x2+','+y2;
		pathstring += 'L'+x3+','+y3+' z';
		var triangle = this.path(pathstring);
		triangle.attr({x:x1,y:y3});
		return triangle;
	};
	
	Raphael.fn.line = function(x1,y1,x2,y2){
		var line = this.path('M'+x1+','+y1+'L'+x2+','+y2);
		line.attr('x',x1);
		line.attr('y',y1);
		line.data('isPath',true);
		return line;
	};
	
	Raphael.fn.bowl = function(x,y,w,h){
		var bowl = this.path('M'+x+','+y+'L'+(x+w)+','+y+'L'+(x+w*0.8)+','+(y+h)+'L'+(x+0.2*w)+','+(y+h)+' z');
		bowl.attr('x',x);
		bowl.attr('y',y);
		bowl.attr('width',w);
		bowl.attr('height',h);
		return bowl;
	};
	
	Raphael.fn.rhomboid = function(x,y,_w,w,h){
		var pathstring = '';
		pathstring += 'M'+(x+_w)+','+y+'L'+(x+_w+w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += 'L'+x+','+(y+h)+' z';
		var rhomboid = this.path(pathstring);
		rhomboid.attr({'x':x,'y':y});
		return rhomboid;
	};
	
	Raphael.fn.cube = function(x,y,a){
		var _x=x+a*0.4,_y=y+a*0.2;	
		var cube = this.path('M'+x+','+_y+'L'+x+','+(_y+a)+'L'+(x+a)+','+(_y+a)+'L'+(x+a)+','+_y+'L'+x+','+_y+'L'+_x+','+y+'L'+(_x+a)+','+y+'L'+(x+a)+','+_y+'L'+(x+a)+','+(_y+a)+'L'+(_x+a)+','+(y+a)+'L'+
		(_x+a)+','+y);
		cube.data('isPath',true);
		cube.attr('x',x);
		cube.attr('y',y);
		return cube;
	};
	Raphael.fn.rhombus = function(x,y,w,h){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y);
		pathstring += 'L'+(x+w)+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y+h);
		pathstring += 'z';
		var rhombus = this.path(pathstring);
		rhombus.data({'x':x,'y':y,'w':w,'h':h});
		return rhombus;
	}
	Raphael.fn.trapezoid = function(x,y,w,h,_w){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h);
		pathstring += 'L'+(x+(w-_w)*0.5)+','+y;
		pathstring += 'L'+(x+(w-_w)*0.5+_w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += ' z';
		var trapezoid = this.path(pathstring);
		trapezoid.data({'x':x,'y':y,'w':w,'h':h});
		return trapezoid;
	}
	Raphael.fn.sphere = function(x,y,r,fill){
		var sphere = this.ellipse(x, y, r, r).attr({
			fill: "r(.3,.25) white-" + fill,
			stroke: "none"
		});
		sphere.data('isEllipse',true);
		sphere.attr('x',x);
		sphere.attr('y',y);
		return sphere;
	};
	Raphael.fn.sline = function(x,y,l){
		var pathstring='';
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y-10);
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y+10);
		pathstring += 'M'+x+','+y+'L'+(x+l)+','+y;
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y-10);
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y+10);
		var sline = this.path(pathstring);
		sline.attr('x',x);
		sline.attr('y',y);
		return sline;
	}
	Raphael.fn.cylinder = function(x,y,w,h){
		var x1,y1,x2,y2;
		var pathstring='';
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y-h*0.2;
		y2 = y-h*0.2;
		pathstring += 'M'+x+','+y+'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		pathstring += 'L'+x+','+(y+h);
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h+h*0.2;
		y2 = y+h+h*0.2;
		pathstring += 'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+(y+h);
		pathstring += 'L'+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		var cylinder = this.path(pathstring);
		cylinder.data('isPath',true);
		cylinder.attr('x',x);
		cylinder.attr('y',y);
		cylinder.attr('fill','#fff');
		return cylinder;
	};
	
	Raphael.fn.fraction = function(top_x, top_y, nom, denom,scale) {
		var st = this.set();
		c2=top_y+scale;
		c3=top_x+scale*1.5;
		if (nom) {
			pay=this.text(top_x+scale*5/7, top_y, nom);
			pay.attr({"font-size" :scale});
			st.push(pay);	
		}
		if (denom) {
			payda=this.text(top_x+scale*5/7, c2+scale, denom);
			payda.attr({"font-size" :scale});
			st.push(payda);			

		}
		var kesirCizgi="M"+top_x+" "+c2+"L"+c3+" "+c2;
		st.push(this.path(kesirCizgi));
		return st;
	};
	
	Raphael.fn.segmentedUmbrella = function (cx, cy, r, numberOfSegments) {
		var st = this.set();
		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(-i)/numberOfSegments - 90, 360*(-i-1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	};
	
	Raphael.fn.segmentedCircle = function (cx, cy, r, numberOfSegments) {
		var st = this.set();
		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(i)/numberOfSegments - 90, 360*(i+1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	};
	
	Raphael.fn.segmentedRectangle = function (x, y, width, height, horizontalSegments, verticalSegments) {
		var st = this.set();
		for (i = 0; i < horizontalSegments; i++) {
			for (j = 0; j < verticalSegments; j++) {
				st.push(
					this.rect(x + i * width/horizontalSegments, y + j * height/verticalSegments, width/horizontalSegments, height/verticalSegments)
				);
			}
		}
		return st;
	};
	
	Raphael.fn.regularPolygon = function(x,y,w,h,k,o){
		var angles = [];
		for(var i=0; i<k ;i++){
			angles[i] = 360/k*i;
		}
		return this.equiradialPolygon(x,y,w,h,angles,o)
	};
	Raphael.fn.equiradialPolygon = function(x,y,w,h,angles,o){
		var _o=Math.random()*60;
		if(o != null)
			_o=o;
		var a = Math.min(w,h)*0.5;
		var mx = x + w*0.5;
		var my = y + h*0.5;
		var pathstring = '';
		for(var i=0; i<angles.length ;i++){
			pathstring += (i==0?'M':'L');
			var _angle = Util.degreeToRadians(_o+angles[i]);
			var _x = mx + a*Math.cos(_angle);
			var _y = my + a*Math.sin(_angle);
			pathstring += _x + ',' + _y;
		}
		pathstring += 'z';
		return this.path(pathstring);
	}
	
};
// JavaScript Document
Main.paperInit.Item = function(){
	Item.prototype.animate = function (animation) {
		if ((typeof(animation) != typeof({})) || (animation instanceof Array)) {
			throw "The argument to Item.animate needs be a Hash";
		}
		
		AnimationManager.animate(new AnimationManager.Animation(this, animation));
	}
	Item.prototype.set_style = function (style) {
		if ((typeof(style) != typeof({})) || (style instanceof Array)) {
			throw "The argument to Item.setStyle needs be a Hash";
		}
		for (var key in style) {
			if (style.hasOwnProperty(key)) {
				this[key] = style[key];
			}
		}
		
		return this;
	}
	Item.prototype.getItemsByClass = function(className){
		var resultArray = [];
		function _recursive(node){
			if(node.class == className)
				resultArray.push(node);
			else
				$(node.children).each(function(index, element) {
					_recursive(this);   
				});
		}
		_recursive(this);
		return resultArray;
	}
}
;
Main.paperInit.Path = function() {
	// Custom Paths
	Path.Point = function(p){
		var circle = new Path.Circle(p,2);
		circle.setStyle({fillColor:'#000'});
		return circle;
	}
	Path.ArcByAngle = function(p,r,angle,startAngle){
		if(startAngle == null || startAngle == undefined)
			startAngle = 0;
		var p1 = new Point(p.x + Math.cos(Util.degreeToRadians(startAngle)) * r,
							   p.y + Math.sin(Util.degreeToRadians(startAngle)) * r);
		var p2 = new Point(p.x + Math.cos(Util.degreeToRadians(startAngle+angle)/2) * r,
							   p.y + Math.sin(Util.degreeToRadians(startAngle+angle)/2) * r);
		var p3 = new Point(p.x + Math.cos(Util.degreeToRadians(angle)) * r,
							   p.y + Math.sin(Util.degreeToRadians(angle)) * r);
		return new Path.Arc(p1, p2, p3);
	}
	Path.Triangle = function(p1,p2,p3){
		var triangle = new Path();
		triangle.add(p3);
		triangle.add(p1);
		triangle.add(p2);
		triangle.closed = true;
		return triangle;
	}
	Path.Bowl = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var bowl = new Path();
		var vertexArray = [];
		vertexArray.push(new Point(x,y));
		vertexArray.push(new Point(x+w,y));
		vertexArray.push(new Point(x+w*0.8,y+h));
		vertexArray.push(new Point(x+w*0.2,y+h));
		for(var i=0;i<vertexArray.length;i++)
			bowl.add(vertexArray[i]);
		bowl.closed = true;
		bowl.vertexArray = vertexArray;
		return bowl;
	};
	Path.Rhomboid = function(p,s,_w,phase){
		if(phase == undefined || phase == null)
			phase = 0;
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var rhomboid = new Path();
		var vertexArray = [];
		vertexArray.push(new Point(x+_w,y));
		vertexArray.push(new Point(x+_w+w,y));
		vertexArray.push(new Point(x+w,y+h));
		vertexArray.push(new Point(x,y+h));
		
		var centerPoint = Util.centerOfPoints(vertexArray);
		for(var i=0;i<vertexArray.length;i++){
			if(phase != 0)
				vertexArray[i] = vertexArray[i].getRotatedPoint(phase,centerPoint);
			rhomboid.add(vertexArray[i]);
		}
		//for(var i=0;i<vertexArray.length;i++)
		//	rhomboid.add(vertexArray[i]);
			
		rhomboid.centerPoint = centerPoint;
		rhomboid.closed = true;
		rhomboid.vertexArray = vertexArray;
		return rhomboid;
	}
	Path.Cube = function(p,a,_s){
		var xK,yK;
		if(_s){
			xK = _s.x;
			yK = _s.y;
		}else{
			xK = 0.3;
			yK = 0.5;
		}
		var x=p.x,y=p.y;
		var _x=x+a*xK,_y=y+a*yK;
		var group = new Group();
		
		var p1 = new Point(x	,_y);
		var p2 = new Point(x	,_y+a);
		var p3 = new Point(x+a  ,_y+a);
		var p4 = new Point(_x+a ,y+a);
		var p5 = new Point(_x+a ,y);
		var p6 = new Point(_x   ,y);
		var p7 = new Point(x+a  ,_y);
		
		var cube = new Path();
		cube.add(p1);
		cube.add(p2);
		cube.add(p3);
		cube.add(p4);
		cube.add(p5);
		cube.add(p6);
		cube.closed = true;
		
		group.addChild(cube);
		group.addChild(new Path.Line(p1,p7));
		group.addChild(new Path.Line(p3,p7));
		group.addChild(new Path.Line(p5,p7));
		
		return group;
	}
	Path.Rhombus = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var rhombus = new Path();
		rhombus.add([x,y+h*0.5]);
		rhombus.add([x+w*0.5,y]);
		rhombus.add([x+w,y+h*0.5]);
		rhombus.add([x+w*0.5,y+h]);
		rhombus.closed = true;
		return rhombus;
	}
	Path.Trapezoid = function(p,s,_w1,_w2,phase){
		if(_w2 == undefined || _w2 == null)
			return new Path.IsoscelesTrapezoid(p,s,_w1);
		if(phase == undefined || phase == null)
			phase = 0;
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var trapezoid = new Path();
		var vertexArray = [];
		vertexArray.push(new Point(x,y+h));
		vertexArray.push(new Point(x+_w1,y));
		vertexArray.push(new Point(x+w-_w2,y));
		vertexArray.push(new Point(x+w,y+h));
		
		var centerPoint = Util.centerOfPoints(vertexArray);
		for(var i=0;i<vertexArray.length;i++){
			if(phase != 0)
				vertexArray[i] = vertexArray[i].getRotatedPoint(phase,centerPoint);
			trapezoid.add(vertexArray[i]);
		}
		trapezoid.centerPoint = centerPoint;
		trapezoid.closed = true;
		trapezoid.vertexArray = vertexArray;
		return trapezoid;
	
	}
	
	Path.IsoscelesTrapezoid = function(p,s,_w,phase){
		return new Path.Trapezoid(p,s,_w,_w,phase);
	}
	
	
	Path.RegularPolygon = function(p,s,k,o){
		var angles = [];
		for(var i=0; i<k ;i++){
			angles[i] = 360/k*i;
		}
		return new Path.EquiradialPolygon(p,s,angles,o);
	};
	Path.EquiradialPolygon = function(p,s,angles,o){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var _o=Math.random()*60;
		if(o != null)
			_o=o;
		var a = Math.min(w,h)*0.5;
		var mx = x + w*0.5;
		var my = y + h*0.5;
		var points = [];
		var polygon = new Path();
		for(var i=0; i<angles.length ;i++){
			var _angle = Util.degreeToRadians(-_o-angles[i]);
			var _x = mx + a*Math.cos(_angle);
			var _y = my + a*Math.sin(_angle);
			var p = new Point(_x,_y);
			polygon.add([_x,_y]);
			points.push(p);
		};
		polygon.vertexArray = points;
		polygon.centerPoint = new Point(mx,my);
		polygon.closed=true;
		return polygon;
	}

    Path.TwoSidedArrow = function(point1, point2, arrowHeadSize, angle) {
        var group = new Group();
        var arrow1 = new Path.OneSidedArrow(Util.centerOfPoints([point1,point2]),point1,arrowHeadSize,angle);
        var arrow2 = new Path.OneSidedArrow(Util.centerOfPoints([point1,point2]),point2,arrowHeadSize,angle);
        group.addChild(arrow1);
        group.addChild(arrow2);
        return group;
    }

	Path.OneSidedArrow = function(point1, point2, arrowHeadSize, angle) {
		if (arrowHeadSize == null) {
			arrowHeadSize = 3;
		}
		if(angle == null && angle == undefined)
			angle = 30;
		var group = new Group();
		var path = new Path.Line(point1, point2);
		
		var _a = Util.radianToDegree(
							Math.asin( 
								(point1.y-point2.y) / 
								point1.getDistance(point2) 
								) 
							);
		var a1 = Util.degreeToRadians(180 + _a + angle);
		var a2 = Util.degreeToRadians(180 + _a - angle);
		var path2 = new Path.Line(
							point2,
							new Point( 
									point2.x + arrowHeadSize*Math.cos(a1),
									point2.y - arrowHeadSize*Math.sin(a1)
								) 
							);
//        console.log(
//            point2.x + arrowHeadSize*Math.cos(a1),
//            point2.y - arrowHeadSize*Math.sin(a1)
//        );
//        console.log(
//            point2.x + arrowHeadSize*Math.cos(a2) ,
//            point2.y - arrowHeadSize*Math.sin(a2)
//        );
        var path3 = new Path.Line(
                    point2,
                    new Point(
                            point2.x + arrowHeadSize*Math.cos(a2) ,
                            point2.y - arrowHeadSize*Math.sin(a2)
                        )
                    );
//		var pt = new Path();
//		pt.add(point2);
//		pt.add(new Point(
//						point2.x + arrowHeadSize*Math.cos(a1),
//						point2.y - arrowHeadSize*Math.sin(a1)
//					));
//		pt.add(new Point(
//						point2.x + arrowHeadSize*Math.cos(a2) ,
//						point2.y - arrowHeadSize*Math.sin(a2)
//					) );

        var head = new Path();
        var headRefPoint = point2.findPointTo(point1,arrowHeadSize);
        head.add(point2);
        head.add(headRefPoint.getRotatedPoint(angle,point2));
        head.add(headRefPoint.getRotatedPoint(-angle,point2));
        head.closed = true;
//		pt.closed = true;
		path.strokeColor = '#000';
        head.style = {
            strokeColor: '#000',
            fillColor : '#000'
        };

		group.addChild(path);
		group.addChild(head);
		group.strokeWidth = 2;
		return group;
	}
	
	
	Path.Cylinder = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var x1,y1,x2,y2;		
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y-h*0.2;
		y2 = y-h*0.2;
		var group = new Group();
		var cylinder = new Path();
		cylinder.add(new Point(x,y) );
		cylinder.cubicCurveTo( 
			new Point(x1,y1), 
			new Point(x2,y2), 
			new Point(x+w,y)
		);
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		cylinder.cubicCurveTo(
			new Point(x2,y2), 
			new Point(x1,y1), 
			new Point(x,y)
		);
		cylinder.lineTo( new Point(x,y+h) );
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h+h*0.2;
		y2 = y+h+h*0.2;
		cylinder.cubicCurveTo(
			new Point(x1,y1), 
			new Point(x2,y2),
			new Point(x+w,y+h)
		);
		cylinder.lineTo(new Point(x+w,y) );
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		cylinder.cubicCurveTo(
			new Point(x2,y2),
			new Point(x1,y1),	
			new Point(x,y) 
		);
		
		cylinder.closed = true;
		var dline = new Path();
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h-h*0.2;
		y2 = y+h-h*0.2;
		
		dline.add(new Point(x,y+h));
		dline.cubicCurveTo(
			new Point(x1,y1), 
			new Point(x2,y2),
			new Point(x+w,y+h)
		);
		dline.style = {dashArray: [3.2]};
		group.addChild(dline);
		group.addChild(cylinder);
		return group;
	}
	Path.Pyramid = function(p,s){
		var pyramid = new Group();
		var path = new Path();
		var p1 = new Point(p.x+s.width*0,p.y+s.height*0.8);
		var p2 = new Point(p.x+s.width*0.45,p.y+s.height);
		var p3 = new Point(p.x+s.width,p.y+s.height*0.8);
		var p4 = new Point(p.x+s.width*0.5,p.y);
		var px = new Point(p.x+s.width*0.55,p.y+s.height*0.6);
		path.add(p1);
		path.add(p2);
		path.add(p3);
		path.add(p4);
		path.closed = true;
		var dline1 = new Path.Line(p1,px);
		var dline2 = new Path.Line(p3,px);
		var dline3 = new Path.Line(p4,px);

		dline1.style = {dashArray:[3,2]};
		dline2.style = {dashArray:[3,2]};
		dline3.style = {dashArray:[3,2]};
		pyramid.addChild(dline1);
		pyramid.addChild(dline2);
		pyramid.addChild(dline3);
		pyramid.addChild(path);
		pyramid.addChild( new Path.Line(p2,p4) );
		return pyramid;
	}
	Path.Cone = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var p1 = new Point(x,y+h*0.9),
		p2 = new Point(x+w*0.5,y+h*1.1),
		p3 = new Point(x+w,y+h*0.9),
		p4 = new Point(x+w*0.5,y),
		px = new Point(x+w*0.5,y+h*0.7);
		var cone = new Group();
		var path = new Path();
		path.add(p1);
		path.arcTo(p2,p3);
		path.add(p4);
		path.closed = true;
		var path2 = new Path();
		path2.add(p1);
		path2.arcTo(px,p3);
		path2.class = "dashed";
		path2.style = {dashArray:[3,2]};
		cone.addChild(path);
		cone.addChild(path2);
		return cone;
		
	};
	Path.Sphere  = function(p,a){
		var x=p.x,y=p.y;
		
		var p1 = new Point(x-a,y),
		p2 = new Point(x+a,y);
		px1 = new Point(x,y+a*0.2);
		px2 = new Point(x,y-a*0.2);
		
		var sphere = new Group();
		var circle = new Path.Circle(p,a);
		var curve1 = new Path();
		var curve2 = new Path();
		
		curve1.add(p1);
		curve1.arcTo(px1,p2);
		
		curve2.add(p1);
		curve2.arcTo(px2,p2);
		curve2.style = {dashArray:[3,2]};
		
		sphere.addChild(curve2);
		sphere.addChild(circle);
		sphere.addChild(curve1);
		return sphere;
	}
	Path.SquarePrisim = function(p,a,d){
		return new Path.RectanglePrisim(p,new Size(a,a),new Size(d,d));
	}
	
	Path.RectanglePrisim = function(p,s,_s){
		var x=p.x,y=p.y;
		var p1 = new Point(x,y+_s.height),
		p2 = new Point(x,y+s.height+_s.height),
		p3 = new Point(x+s.width,y+_s.height),
		p4 = new Point(x+_s.width,y),
		p5 = new Point(x+s.width+_s.width,y),
		p6 = new Point(x+_s.width+s.width,y+s.height)
		p7 = new Point(x+_s.width,y+s.height);
		p8 = new Point(x+s.width,y+s.height+_s.height);
				
		var squarePrisim = new Group();
		var side = new Path();
		side.add(p1);
		side.add(p4);
		side.add(p5);
		side.add(p6);
		side.add(p8);
		side.add(p2);
		side.add(p1);
		side.add(p3);
		side.add(p8);
		var line1 = new Path.Line(p3,p5);
		var dline1 = new Path.Line(p2,p7);
		var dline2 = new Path.Line(p7,p4);
		var dline3 = new Path.Line(p7,p6);
		//var square = new Path.Rectangle(p1,new Size(a,a));
		
		dline1.style = {dashArray:[3,2]};
		dline3.style = {dashArray:[3,2]};
		dline2.style = {dashArray:[3,2]};
		
		dline1.class = "dashed";
		dline3.class = "dashed";
		dline2.class = "dashed";
		
		dline1.insertBelow(side);
		dline2.insertBelow(side);
		dline3.insertBelow(side);
		
		//squarePrisim.addChild(square);
		squarePrisim.addChild(dline1);
		squarePrisim.addChild(dline2);
		squarePrisim.addChild(dline3);
		squarePrisim.addChild(side);
		squarePrisim.addChild(line1);
		
		return squarePrisim;
		
	}
	
	Path.TrianglePrisim = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var i = 0.5;
		var j = 0.3;	
		var trianglePrisim = new Group();
		var p1 = new Point(x,y+h),
		p2 = new Point(x+w*(1-i),y+h),
		p3 = new Point(x+w*(1-i)*0.5,y+h*j),
		p4 = new Point(x+w,y+h*(1-j)),
		p5 = new Point(x+w*(1-i)*0.5+w*i,y),
		p6 = new Point(x+w*i,y+h*(1-j));
		var triangle = new Path();
		triangle.add(p2);
		triangle.add(p1);
		triangle.add(p3);
		triangle.add(p2);
		triangle.add(p4);
		triangle.add(p5);
		triangle.add(p3);
		
		var dline1 = new Path.Line(p1,p6);
		var dline2 = new Path.Line(p5,p6);
		var dline3 = new Path.Line(p4,p6);
		dline1.style = {dashArray:[3,2]};
		dline3.style = {dashArray:[3,2]};
		dline2.style = {dashArray:[3,2]};
		
		trianglePrisim.addChild(dline1);
		trianglePrisim.addChild(dline2);
		trianglePrisim.addChild(dline3);
		trianglePrisim.addChild(triangle);
		
		return trianglePrisim;
	}
	
	Path.SegmentedRectangle = function (x, y, width, height, horizontalSegments, verticalSegments, paintedSegments, fillColor, fillOrder) {
		if (fillOrder == null || fillOrder == undefined) {
			fillOrder = false;
		}
		
		var segRec = new Group();
		var Rec = new Path();
		var paint = 0;
		
		if (fillOrder) {
			for(var i = 0; i < horizontalSegments; i++)
			{
				for(var j = 0; j < verticalSegments; j++)
				{
					Rec = Path.Rectangle(new Point(x + i * width/horizontalSegments, y + j * height/verticalSegments), new Size(width/horizontalSegments, height/verticalSegments));
					Rec.strokeColor = '#000';
					Rec.strokeWidth = 1;
					segRec.addChild(Rec);
					if(paint < paintedSegments)
					{
						Rec.fillColor = fillColor;
						paint += 1;
					}
				}
			}
		} else {		
			for(var j = 0; j < verticalSegments; j++)
			{
				for(var i = 0; i < horizontalSegments; i++)
				{
					Rec = Path.Rectangle(new Point(x + i * width/horizontalSegments, y + j * height/verticalSegments), new Size(width/horizontalSegments, height/verticalSegments));
					Rec.strokeColor = '#000';
					Rec.strokeWidth = 1;
					segRec.addChild(Rec);
					if(paint < paintedSegments)
					{
						Rec.fillColor = fillColor;
						paint += 1;
					}
				}
			}
		}
		return segRec;
		
	};
	
	Path.SegmentedCircle = function (center, radius, paintedPieces, totalPieces, fillColor, fillOrder) {
		if (fillOrder == null || fillOrder == undefined) {
			fillOrder = false;
		}
		
		var segCirc = new Group();
		var i;
		var angle =  2 * Math.PI / totalPieces;
		var startAngle = -Math.PI/2;
		var endAngle = startAngle + angle;
		
		var paint;
		if (fillOrder) {
			paint = totalPieces;
		} else {
			paint = 0;
		}

		for(var i=0; i < totalPieces; i++)
		{
			var Circ = new Path();
			var point1 = new Point(center.x + Math.cos(startAngle) * radius,
							   center.y + Math.sin(startAngle) * radius);
							
			var point2 = new Point(center.x + Math.cos((startAngle+endAngle)/2) * radius,
							   center.y + Math.sin((startAngle+endAngle)/2) * radius);
							
			var point3 = new Point(center.x + Math.cos(endAngle) * radius,
							   center.y + Math.sin(endAngle) * radius);
						   
			Circ.moveTo(center);
			Circ.lineTo(point1);
			Circ.arcTo(point2, point3);
			Circ.lineTo(center);
			Circ.closePath();
			startAngle += angle;
			endAngle += angle;
			Circ.strokeColor = '#000';
			Circ.strokeWidth = 1;
			segCirc.addChild(Circ);
			
			if (!fillOrder) {
				if(paint < paintedPieces)
				{
					Circ.fillColor = fillColor;
					paint += 1;
				}
			} else {
				if(paint <= paintedPieces)
				{
					Circ.fillColor = fillColor;
				}
				
				paint -= 1;
			}

		}
		
		return segCirc;
	};
	
	Path.Fraction = function(top_x, top_y, nom, denom,scale, length)
	{
		var frag = new Group();
		var cizgi = new Path();
		c2=top_y+scale;
		c3=top_x+scale*1.5;
		if (nom) {
			pay=new PointText(top_x+scale*5/7, top_y);
			pay.content = nom;
			pay.style = textStyle;
			frag.addChild(pay);	
		}
		if (denom) {
			payda=new PointText(top_x+scale*5/7, c2+scale);
			payda.content = denom;
			payda.style = textStyle;
			frag.addChild(payda);			
		}
		cizgi.strokeColor = '#000' ;
		cizgi.add(new Point(top_x, Math.floor(top_y+scale)+0.5));
		cizgi.add(new Point(top_x+scale*length, Math.floor(top_y+scale)+0.5));
		frag.addChild(cizgi);
		return frag;

	}

    Path.TwoPointRectangle = function(point1,point2,height,margin){
        if(height == undefined)
            height = 6;
        if(margin == undefined)
            margin = height*0.5;
        point1 = point1.findPointTo(point2,-margin);
        point2 = point2.findPointTo(point1,-margin);
        var points = [];
        points.push(point1.findPointTo(point2,height*0.5).getRotatedPoint(-90,point1));
        points.push(point2.findPointTo(point1,height*0.5).getRotatedPoint( 90,point2));
        points.push(point2.findPointTo(point1,height*0.5).getRotatedPoint(-90,point2));
        points.push(point1.findPointTo(point2,height*0.5).getRotatedPoint( 90,point1));

        return Path.DrawPoints(points);
    }

    Path.DrawPoints = function(points,isClosed){
        if(isClosed == undefined)
            isClosed = true;
        var path = new Path();
        for(var i=0;i < points.length; i++)
            path.add(points[i]);
        path.closed = isClosed;
        return path;
    }
}
;
// JavaScript Document
Main.paperInit.Point = function(){
	Point.prototype.getRotatedPoint = function(angle,oP){
			return new Point(
				Math.cos(Util.degreeToRadian(angle))*(this.x - oP.x) - Math.sin(Util.degreeToRadian(angle))*(this.y - oP.y) + oP.x,
				Math.sin(Util.degreeToRadian(angle))*(this.x - oP.x) + Math.cos(Util.degreeToRadian(angle))*(this.y - oP.y) + oP.y
			);
	};
	
	Point.prototype.showOnCanvas = function(radius){
        if(radius == undefined)
            radius = 3;
		var p = new Path.Circle(this,radius);
		p.setStyle({fillColor:'#000',strokeWidth:2,strokeColor:'#fff'});
		this.canvasPoint = p;
		return p;
	};
	
	Point.prototype.projectToLine = function(p1,p2){
		var p_ = this.subtract(p2);
		var p1_ = p1.subtract(p2);
		var dot = p_.dot(p1_);
		return p1_.multiply( dot /  p1_.dot(p1_)).add(p2);
	};
	
	Point.prototype.isBetweenTwoLinePoints = function(p1,p2){
		var s1 = this.getDistance(p1,true);
		var s2 = this.getDistance(p2,true);
		var s  = p1.getDistance(p2,true);
		if(s1 + s2 > s)
			return false;
		else
			return true;
	}
	
	Point.prototype.findPointTo = function(p,distance,isPercent){
		var x,y,a;
		a = Util.findAngle(this.x,this.y,p.x,p.y);
		if(isPercent){
			x = this.x + Math.cos(a) * this.getDistance(p) * distance / 100 ;
			y = this.y - Math.sin(a) * this.getDistance(p) * distance / 100 ;
		}else{
			x = this.x + Math.cos(a) * distance ;
			y = this.y - Math.sin(a) * distance ;
		}
		return new Point(x,y);
	}
	Point.prototype.symmetricTo = function(p){
		var _p = this.subtract(p);
		_p = new Point(-_p.x,-_p.y);
		_p = _p.add(p);
		return _p;		
	}
    Point.prototype.scale = function(ratio,center){
        if(center == undefined)
            center = this;
        var point = this.subtract(center);
        point = point.multiply(ratio,ratio);
        point = point.add(center);
        return point;
    }
}
;
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
;

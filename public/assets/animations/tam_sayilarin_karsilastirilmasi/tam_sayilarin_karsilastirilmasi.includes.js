function __Styles(){
    izmirColor ="#ff4a03";
    vanColor = "#4885ff";
}
;
var getNumericalAxis = function(startPoint, endPoint, piece){

    Interaction.numericalAxis = new Group();

    // numericalAxis
    var arr = new Group();
    var arrow = new Path.OneSidedArrow(new Point(10, 180), new Point(570, 180), 10, 30);
    var arrow2 = new Path.OneSidedArrow(new Point(570, 180), new Point(571, 180), 10, 30);
    arrow.rotate(180);
    arr.addChild(arrow);
    arr.addChild(arrow2);

    var iter = endPoint - startPoint;
    var pieceLength = 500/iter;

    // bigDots
    var bigDots = new Group();
    for(i = 0; i < iter + 1; i++){
        var dot = new Path.Circle(new Point(40+(pieceLength*i), 180), 3);
        dot.fillColor = "black";
        bigDots.addChild(dot);
    }

    Interaction.numericalAxis.addChild(arr);
    Interaction.numericalAxis.addChild(bigDots);

    var pointDiv = document.createElement('div');
    pointDiv.id = 'pointDiv'
    $(Interaction.container).append(pointDiv);
//    $(pointDiv).html('<span id="s0">-12</span> <span id="s1">-11</span> <span id="s2">-10</span>&nbsp; <span id="s3">-9 </span>&nbsp; <span id="s4">-8 </span>&nbsp;&nbsp;' +
//        '<span id="s5">-7</span>&nbsp;&nbsp; <span id="s6">-6 </span>&nbsp;&nbsp; <span id="s7">-5</span>&nbsp;&nbsp; <span id="s8">-4 </span> &nbsp;&nbsp;<span id="s9">-3 </span>&nbsp;&nbsp;&nbsp;' +
//        '<span id="s10">-2</span>&nbsp;&nbsp; <span id="s11">-1 </span>&nbsp;&nbsp;&nbsp; <span id="s12">0</span> &nbsp;&nbsp;&nbsp;<span id="s13">1</span> &nbsp;&nbsp;&nbsp;&nbsp;<span id="s14">2 </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
//        '<span id="s15">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="s16">4</span>&nbsp;&nbsp;&nbsp;&nbsp; <span id="s17">5</span>&nbsp;&nbsp;&nbsp;&nbsp; <span id="s18">6</span>&nbsp;&nbsp;&nbsp; <span id="s19">7</span>&nbsp;&nbsp;&nbsp;&nbsp;' +
//        '<span id="s20">8</span> &nbsp;&nbsp;&nbsp;&nbsp;<span id="s21">9</span> &nbsp;&nbsp;<span id="s22">10</span> &nbsp;&nbsp;<span id="s23">11</span> &nbsp;&nbsp;<span id="s24">12</span>');
    $(pointDiv).css({
        position:'absolute',
        top:'190px',
        left:'28px',
        width:'530px',
        height:'30px',
//        border:'1px solid',
        fontSize:'12px',
        padding:'0px',
        margin:'0px',
        textAlign:'center'
    });
    for(var i = -12; i < 13; i++){
        $(pointDiv).append("<div style='float:left;width:21px;padding:0px;margin:0px;'>"+i+"</div>");

    }
    var d = Interaction.wh1+12;
    var e = Interaction.wh2+12;


    bigDots.children[d].fillColor = "red";
    bigDots.children[e].fillColor = "red";
    $('#s'+d).css("color","red");
    $('#s'+e).css("color","red");
};
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        var animStart = 1000;

        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = "animDiv";
        $(Animation.container).append(Animation.animDiv);

        $(Animation.animDiv).css({
            position:'absolute',
            top:'30px',
            left:'250px',
            width:'500px',
            height:'150px',
            fontSize:'22px'
        });
        $(Animation.animDiv).html('<div id="firstDiv">İzmir\'in ocak ayı sıcaklık ortalaması 7 °C</div><div id="secondDiv">Van\'ın ocak ayı sıcaklık ortalaması -7 °C</div><div id="thirdDiv">7 > -7</div>');

        $('#firstDiv').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            color:izmirColor,
            opacity:0

        });
        $('#firstDiv').delay(animStart+2000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#secondDiv').css({
            position:'absolute',
            top:'130px',
            left:'0px',
            color:vanColor,
            opacity:0
        });
        $('#secondDiv').delay(animStart+3000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#thirdDiv').css({
            position:'absolute',
            top:'60px',
            left:'400px',
            fontWeight:'bold',
            opacity:0
        });
        $('#thirdDiv').delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1000)});

        $(Animation.container).append('<img id="thermometer1" src="/assets/animations/tam_sayilarin_karsilastirilmasi/termometre01.jpg"/>');
        $('#thermometer1').css({
            position:'absolute',
            top:'18px',
            left:'50px',
            opacity:0
        });
        $('#thermometer1').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');

        $(Animation.container).append('<img id="thermometer2" src="/assets/animations/tam_sayilarin_karsilastirilmasi/termometre02.png"/>');
        $('#thermometer2').css({
            position:'absolute',
            top:'18px',
            left:'50px',
            opacity:0
        });
        $('#thermometer2').delay(animStart+1000).animate({opacity:1}, 1000, 'easeInOutQuad');
    }
}
;
var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen tam sayıları, aralarına küçük "<" ya da büyük ">" işaretlerini sürükleyerek karşılaştırınız.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.sortingDiv = document.createElement('div');
        Interaction.sortingDiv.id = 'sortingDiv';
        $(container).append(Interaction.sortingDiv);
        $(Interaction.sortingDiv).css({
            width: '150px',
            height: '50px',
            position: 'absolute',
            left: '240px',
            top: '10px',
            padding: 0,
            margin:0
        });
        $(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_hover.png" /></div>');

        $('#lessThanDiv').css("position", "relative")
            .css("height", "40px")
            .css("width", "40px")
            .css("float", "left")
            .css("line-height", "32px")
            .css("cursor","pointer");

        $('#lessThan').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")

        $('#lessThanHover').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")
            .css("opacity", 0);

        $(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_hover.png" /></div>');

        $('#greaterThanDiv').css("position", "relative")
            .css("height", "40px")
            .css("width", "40px")
            .css("float", "left")
            .css("line-height", "32px")
            .css("cursor","pointer");

        $('#greaterThan').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")

        $('#greaterThanHover').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")
            .css("opacity", 0)

        $('#sortingDiv .drg').draggable({
            revert: "invalid",
            helper: "clone",
            cursor: "pointer",
            stack: "#sortingDiv .drg",
            disabled: "false",
            start: function(event, ui){
                Interaction.setStatus('');
                $($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 0)
                $(ui.helper.get(0)).css("opacity", 1)
            },
            stop: function(event, ui){
                $(ui.helper.get(0)).css("opacity", 0)
                if(this.id != Interaction.oldStr+"Hover"){
                    $($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 1)
                }
            }
        });

        Interaction.questionDiv = document.createElement('div');
        Interaction.questionDiv.id = 'questionDiv'
        $(container).append(Interaction.questionDiv);
        $(Interaction.questionDiv)
            .css({
                position:'absolute',
                left:'180px',
                top:'70px',
                width:'200px',
                height:'90px',
                //           border:'1px solid'
            });
        Interaction.firstFracDiv = document.createElement('div');
        Interaction.firstFracDiv.id = 'firstFracDiv';
        $(Interaction.questionDiv).append(Interaction.firstFracDiv);
        $(Interaction.firstFracDiv).css({
            position:'absolute',
            top:'14px',
            left:'26px',
            width:'30px',
            height:'30px',
            fontSize:'24px',
            //        border: '1px solid',
            textAlign:'right',
        });
        Interaction.secondFracDiv = document.createElement('div');
        Interaction.secondFracDiv.id = 'secondFracDiv';
        $(Interaction.questionDiv).append(Interaction.secondFracDiv);
        $(Interaction.secondFracDiv).css({
            position:'absolute',
            top:'14px',
            left:'134px',
            width:'30px',
            height:'30px',
            fontSize:'24px',
            //         border: '1px solid',
            textAlign:'left',
        });

        Interaction.dropDiv = document.createElement('div');
        Interaction.dropDiv.id = 'dropDiv';
        $(container).append(Interaction.dropDiv);
        $(Interaction.dropDiv).css({
            width: '54px',
            height: '54px',
            position: 'absolute',
            left: '250px',
            top: '68px',
            padding: 0,
            margin: 0,
        });
        $(Interaction.dropDiv).append('<div id="targetContainer"><img src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_hedef.png" id="target" /></div>')

        $('#targetContainer').css("position", "relative")
            .css("height", "54px")
            .css("width", "54px")
            .css("float", "left")
        $('#target').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")
        $(Interaction.dropDiv).droppable({
            accept: '.drg',
            tolerance: 'pointer',
            drop: function(event, ui){
                if(Interaction.oldActiveStr){
                    $("#"+Interaction.oldActiveStr).css("opacity", 0)
                    $("#"+Interaction.oldActiveStr.replace("Active", "Hover")).draggable({disabled: false})
                    $("#"+Interaction.oldStr).css("opacity", 1)

                }
                Interaction.activeStr = $(ui.draggable).get(0).id;
                $("#"+Interaction.activeStr).draggable({disabled: true});
                var oldStr = Interaction.activeStr.replace("Hover", "");
                Interaction.activeStr = Interaction.activeStr.replace("Hover", "Active");
                $("#"+Interaction.activeStr).css("opacity", 1);
                Interaction.oldActiveStr = Interaction.activeStr;
                Interaction.oldStr = oldStr;

            }
        });

        $(Interaction.dropDiv).append('<img id="lessThanActive" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_active.png" /><img id="greaterThanActive" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_active.png" />')

        $('#lessThanActive').css("position", "absolute")
            .css("top", "11px")
            .css("left", "11px")
            .css("opacity", 0);

        $('#greaterThanActive').css("position", "absolute")
            .css("top", "11px")
            .css("left", "11px")
            .css("opacity", 0);

        Interaction.appendStatus({
            bottom:'26px',
            right:'160px',
            height:'40px',
            width:'300px',
            textAlign:'center',
        });
        Interaction.appendButton({
            bottom:'30px',
            right:'40px'
        })

        Interaction.firstFracD = $(Interaction.firstFracDiv).get(0);
        Interaction.secondFracD = $(Interaction.secondFracDiv).get(0);
        Interaction.answerD = $(Interaction.answerDiv).get(0);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.trial += 1;
        if(Interaction.numericalAxis)
            Interaction.numericalAxis.remove();
        if($('#pointDiv'))
            $('#pointDiv').remove();

        if($(Interaction.clone2)){
            $(Interaction.clone2).remove();
            Interaction.clone2 = null;
        }
        if($(Interaction.dropped)){
            $(Interaction.dropped).remove();
            Interaction.dropped = null;
        }
        $('#sortingDiv img').draggable("enable");
        if(Interaction.oldActiveStr){
            $("#"+Interaction.oldActiveStr).css("opacity" , 0)
        }

        if(Interaction.oldStr)
            $("#"+Interaction.oldStr).css("opacity", 1)

        if(Interaction.answerId)
            $("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1);

        $(Interaction.firstFracDiv).html('');
        $(Interaction.secondFracDiv).html('');

        Interaction.activeStr = null;
        Interaction.randomNumber = randomNumber;

        Interaction.wh1 = Util.randomInteger(-12, 13);
        Interaction.wh2 = Util.randomInteger(-12, 13, [Interaction.wh1]);

        Interaction.whD = $(Interaction.secondFracDiv).get(0);
        Interaction.wh2D = $(Interaction.firstFracDiv).get(0);

        $(Interaction.whD).html(Interaction.wh1);
        $(Interaction.wh2D).html(Interaction.wh2);

    },
    preCheck : function(){
        Interaction.dropped = Interaction.activeStr;
        if(Interaction.dropped == null || Interaction.dropped == undefined){
            Interaction.setStatus('Lütfen işaretlerden birini kutucuğa sürükleyiniz.', 'alert')
            return false;
        }
    },
    isAnswerCorrect : function(value){

        if(Interaction.wh1 < Interaction.wh2){
            Interaction.answerIdStr = "greaterThanActive";
        }
        else{
            Interaction.answerIdStr = "lessThanActive";
        }

        if(Interaction.dropped == Interaction.answerIdStr){
            $('#sortingDiv img').draggable("disable");
            return true;
        }
        else{
            return false;
        }
    },
    onCorrectAnswer : function(){
        getNumericalAxis(-12, 12, 25);
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.pause = 1;
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        $("#"+Interaction.oldActiveStr).css("opacity", 0);
        Interaction.answerId = Interaction.answerIdStr.replace("Active", "Hover");
        $("#"+Interaction.oldActiveStr.replace("Active", "")).css("opacity", 1)
        $("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 0)
        Interaction.clone2 = $("#"+Interaction.answerId).clone();
        Interaction.clone2.attr('id', 'flying');

        $(Interaction.container).append(Interaction.clone2);
        $(Interaction.clone2).insertAfter($(Interaction.dropDiv));

        //var ansTop = $("#"+Interaction.answerId).offset().top - 417;
//			var ansLeft = $("#"+Interaction.answerId).offset().left - 950;
        var ansTop = $(Interaction.sortingDiv).position().top;
        var ansLeft = $(Interaction.sortingDiv).position().left;

        if(Interaction.answerId == "greaterThanHover")
            ansLeft += 40;
        var flyTop = $(Interaction.dropDiv).position().top + 11;
        var flyLeft = $(Interaction.dropDiv).position().left + 11;

        $(Interaction.clone2).css("position", "absolute")
            .css("top",ansTop)
            .css("left", ansLeft)
            .css("opacity", 0)

        $(Interaction.clone2).delay(0).animate(
            {opacity:2, top: flyTop, left:flyLeft},
            1000,
            'easeInOutQuad',
            function(){
                $(Interaction.clone2).css("opacity", 0);
                $("#"+Interaction.answerIdStr).css("opacity", 1);

            }
        );
        $('#sortingDiv img').draggable("disable");
        Interaction.oldActiveStr = Interaction.answerIdStr;
        getNumericalAxis(-12, 12, 25);
        setTimeout('Interaction.pause = 0;',2000);
    },
}
;





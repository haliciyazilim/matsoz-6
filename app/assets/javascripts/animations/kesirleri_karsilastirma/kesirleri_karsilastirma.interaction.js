var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.sortingDiv = document.createElement('div');
        Interaction.sortingDiv.id = 'sortingDiv';
        $(Interaction.container).append(Interaction.sortingDiv);
        $(Interaction.sortingDiv).css({
            width: '80px',
            height: '40px',
            position: 'absolute',
            left: '240px',
            top: '10px',
            padding: 0,
            margin:0
        });
        $(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_hover.png" /></div>');

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
            .css("opacity", 0)

        $(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_hover.png" /></div>');

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
            start: function(event, ui){
                Interaction.setStatus('');
                $($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 0);
                $(ui.helper.get(0)).css("opacity", 1);
            },
            stop: function(event, ui){
                $(ui.helper.get(0)).css("opacity", 0);
                if(this.id != Interaction.oldStr+"Hover"){
                    $($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 1);
                }
            }
        });

        Interaction.appendStatus({
            bottom:'26px',
            right:'160px',
            height:'40px',
            width:'300px',
            textAlign:'center'
        });

        Interaction.appendButton({
            bottom:'30px',
            right:'40px'
        });

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){

        if(Interaction.dropped)
            $(Interaction.dropped).remove();

        if(Interaction.activeStr)
            Interaction.activeStr = null;

        if($(Interaction.clone2)){
            $(Interaction.clone2).remove();
            Interaction.clone2 = null;

            $('#sortingDiv img').draggable("enable");
            if(Interaction.oldActiveStr){
                $("."+Interaction.oldActiveStr).css("opacity" , 0)
            }

            if(Interaction.oldStr)
                $("#"+Interaction.oldStr).css("opacity", 1)

            if(Interaction.answerId)
                $("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1)

            if(Interaction.sortingUl)
                $(Interaction.sortingUl).sortable({disabled: false});

            if(Interaction.pointDiv)
                $(Interaction.pointDiv).remove();

            if(Interaction.ansF){
                for(i = 0; i < Interaction.ansF.length; i++){
                    $(Interaction.ansF[i]).remove();
                }
            }

            if(Interaction.lline){
                Interaction.lline.remove();
            }

            if(Interaction.numericalAxis)
                Interaction.numericalAxis.remove();

            if(Interaction.questionDiv)
                $(Interaction.questionDiv).remove();


            Interaction.qType = Math.floor(Math.random() * 2);

            Interaction.numOfFracs = 3;
            // creating question divs and fractions to be sorted in it
            Interaction.questionDiv = document.createElement('div');
            Interaction.questionDiv.id = 'questionDiv';
            $(Interaction.container).append(Interaction.questionDiv);
            $(Interaction.questionDiv).css({
                position: 'absolute',
                top: '65px',
                left: '84px',
                width: '400px',
                height: '100px',
                listStyleType: 'none'
            });

            Interaction.sortingUl = document.createElement('ul');
            Interaction.sortingUl.id = 'sortingUl';
            $(Interaction.questionDiv).append(Interaction.sortingUl);
            $(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1"  class="dropDivs"/><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li>');
            $(Interaction.sortingUl).css({
                width: '400px',
                height: '100px'
            });

            $(Interaction.sortingUl).sortable({
                items: 'li:not(div)',
                placeholder: 'placeHolder',
                tolerance: 'pointer',
                cursor: sortableCursorType,
                axis: 'x'
            });

            $('#dropDiv1').css({
                width: '54px',
                height: '54px',
                position:'absolute',
                left: '114px',
                top: '0px',
                padding: 0,
                margin: 0
            });



            $('#dropDiv2').css({
                width: '54px',
                height: '54px',
                position:'absolute',
                left: '220px',
                top: '0px',
                padding: 0,
                margin: 0
            });

            $(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>");
            $(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");

            $('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
            $('#firstFracDiv').css("width", "36px")
                .css("height", "51px")
                .css("padding", 0)
                .css("margin", 0)
                .css("line-height","25px");

            $('#line1').css("height", "1px")
                .css("width", "32px")
                .css("border-top", "2px solid")
                .css("padding", 0)

            $('#nom1').css("text-align", "center")
                .css("width", "30px")
                .css("height", "25px")

            $('#denom1').css("text-align", "center")
                .css("width", "30px")
                .css("height", "25px")

            $('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
            $('#secondFracDiv').css("width", "36px")
                .css("height", "51px")
                .css("padding", 0)
                .css("margin", 0)
                .css("line-height","25px");

            $('#line2').css("height", "1px")
                .css("width", "32px")
                .css("border-top", "2px solid")
                .css("padding", 0)

            $('#nom2').css("text-align", "center")
                .css("width", "30px")
                .css("height", "25px")

            $('#denom2').css("text-align", "center")
                .css("width", "30px")
                .css("height", "25px")

            $('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
            $('#thirdFracDiv').css("width", "36px")
                .css("height", "51px")
                .css("padding", 0)
                .css("margin", 0)
                .css("line-height","25px");

            $('#line3').css("height", "1px")
                .css("width", "32px")
                .css("border-top", "2px solid")
                .css("padding", 0)

            $('#nom3').css("text-align", "center")
                .css("width", "30px")
                .css("height", "25px")

            $('#denom3').css("text-align", "center")
                .css("width", "30px")
                .css("height", "25px")



            Interaction.getFractionsToBeSorted(Interaction.numOfFracs);
            Interaction.nomD = $('#nom1').get(0);
            Interaction.denomD = $('#denom1').get(0);
            Interaction.nom2D = $('#nom2').get(0);
            Interaction.denom2D = $('#denom2').get(0);
            Interaction.nom3D = $('#nom3').get(0);
            Interaction.denom3D = $('#denom3').get(0);

            $(Interaction.nomD).html(Interaction.nom[0]);
            $(Interaction.denomD).html(Interaction.denom[0]);
            $(Interaction.nom2D).html(Interaction.nom[1]);
            $(Interaction.denom2D).html(Interaction.denom[1]);
            $(Interaction.nom3D).html(Interaction.nom[2]);
            $(Interaction.denom3D).html(Interaction.denom[2]);
            if(Interaction.numOfFracs == 4){
                Interaction.nom4D = $('#nom4').get(0);
                Interaction.denom4D = $('#denom4').get(0);
                $(Interaction.nom4D).html(Interaction.nom[3]);
                $(Interaction.denom4D).html(Interaction.denom[3]);
            }
            else if(Interaction.numOfFracs == 5){
                Interaction.nom4D = $('#nom4').get(0);
                Interaction.denom4D = $('#denom4').get(0);
                Interaction.nom5D = $('#nom5').get(0);
                Interaction.denom5D = $('#denom5').get(0);
                $(Interaction.nom4D).html(Interaction.nom[3]);
                $(Interaction.denom4D).html(Interaction.denom[3]);
                $(Interaction.nom5D).html(Interaction.nom[4]);
                $(Interaction.denom5D).html(Interaction.denom[4]);
            }

            Interaction.fracIds = [];
            Interaction.fracIds[0] = "firstFrac";
            Interaction.fracIds[1] = "secondFrac";
            Interaction.fracIds[2] = "thirdFrac";
            if(Interaction.numOfFracs == 4){
                Interaction.fracIds[3] = "fourthFrac";
            }
            else if(Interaction.numOfFracs == 5){
                Interaction.fracIds[3] = "fourthFrac";
                Interaction.fracIds[4] = "fifthFrac";
            }

            $('.dropDivs').droppable({
                accept: '.drg',
                tolerance: 'pointer',
                drop: function(event, ui){
                    if(Interaction.oldActiveStr){
                        $("."+Interaction.oldActiveStr).css("opacity", 0)
                        $("#"+Interaction.oldActiveStr.replace("Active", "Hover")).draggable({disabled: false})
                        $("#"+Interaction.oldStr).css("opacity", 1)

                    }
                    Interaction.activeStr = $(ui.draggable).get(0).id;
                    $("#"+Interaction.activeStr).draggable({disabled: true});
                    var oldStr = Interaction.activeStr.replace("Hover", "");
                    Interaction.activeStr = Interaction.activeStr.replace("Hover", "Active");
                    $("."+Interaction.activeStr).css("opacity", 1);
                    Interaction.oldActiveStr = Interaction.activeStr;
                    Interaction.oldStr = oldStr;

                }
            });

            $('.dropDivs').append('<div class="targetContainer"><img src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png" class="target" /></div>')

            $('.targetContainer').css("position", "relative")
                .css("height", "54px")
                .css("width", "54px")
                .css("float", "left")
            $('.target').css("position", "absolute")
                .css("top", "0px")
                .css("left", "0px")

            $('.dropDivs').append('<img class="lessThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><img class="greaterThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" />')

            $('.lessThanActive').css("position", "absolute")
                .css("top", "11px")
                .css("left", "11px")
                .css("opacity", 0)

            $('.greaterThanActive').css("position", "absolute")
                .css("top", "11px")
                .css("left", "11px")
                .css("opacity", 0)

            if(Interaction.qType == 0){
                Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">büyükten küçüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.');
            }
            else{
                Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">küçükten büyüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.');
            }
        }

    },


    /*	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled */

    preCheck : function(){
        Interaction.dropped = Interaction.activeStr;
        if(Interaction.dropped == null || Interaction.dropped == undefined){
            Interaction.setStatus('Lütfen işaretlerden birini kutucuğa sürükleyiniz.', 'alert')
            return false;
        }

    },
    isAnswerCorrect : function(value){

        Interaction.userAnswerArr = [];
        if(Interaction.qType == 1){
            Interaction.frac = [];
            Interaction.sortedFrac = [];
            Interaction.answerIdStr = "lessThanActive";


            Interaction.answerIdsArray = [];
            for(var i = 0; i < Interaction.numOfFracs; i++){
                Interaction.frac[i] = Interaction.nom[i]/Interaction.denom[i];
            }
            for(var i = 0; i < Interaction.numOfFracs; i++){
                Interaction.sortedFrac[i] = Interaction.frac[i];
            }
            Interaction.sortedFrac.sort(function(a,b){return a-b});
            for(var i = 0; i < Interaction.numOfFracs; i++){
                Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[i])] = Interaction.fracIds[i];
            }

        }
        else{
            Interaction.frac = [];
            Interaction.sortedFrac = [];
            Interaction.answerIdStr = "greaterThanActive";

            Interaction.answerIdsArray = [];
            for(var i = 0; i < Interaction.numOfFracs; i++){
                Interaction.frac[i] = Interaction.nom[i]/Interaction.denom[i];
            }
            for(var i = 0; i < Interaction.numOfFracs; i++){
                Interaction.sortedFrac[i] = Interaction.frac[i];
            }
            Interaction.sortedFrac.sort(function(a,b){return b-a});
            for(var i = 0; i < Interaction.numOfFracs; i++){
                Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[i])] = Interaction.fracIds[i];
            }
        }

        for(i = 0; i < Interaction.numOfFracs; i++){
            Interaction.userAnswerArr[i] = $(Interaction.sortingUl).find('li')[i].id;
        }
        var trueNum;
        for(i = 0, trueNum = 0; i < Interaction.numOfFracs; i++){
            if(Interaction.userAnswerArr[i] == Interaction.answerIdsArray[i])
                trueNum += 1;
        }
        if(trueNum == Interaction.numOfFracs && Interaction.dropped == Interaction.answerIdStr){
            $('#sortingDiv img').draggable("disable");
            return true;
        }
        else{
            return false;
        }

    },
    onCorrectAnswer : function(){
        for(var i = 0; i < Interaction.numOfFracs; i++){
            if(Interaction.userAnswerArr[i] == Interaction.answerIdsArray[i])
                $("#"+Interaction.userAnswerArr[i]).css("color", "green");
            else
                $("#"+Interaction.userAnswerArr[i]).css("color", "red");
        }
        Interaction.nom2 = [];
        Interaction.denom2 = [];
        $(Interaction.sortingUl).sortable({disabled: true});

        if(Interaction.numOfFracs == 5)
            Interaction.lcm = Util.lcm(Interaction.denom[0], Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4]));
        else
            Interaction.lcm = Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3])

        for(var i = 0; i < Interaction.numOfFracs; i++){
            Interaction.nom2[i] = Interaction.nom[i]*(Interaction.lcm/Interaction.denom[i]);
            Interaction.denom2[i] = Interaction.lcm;
        }
        Interaction.GetNumericalAxis(Interaction.lcm);
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);

        Interaction.pause();
        var firstLeftStr = "";
        var secondLeftStr = "";
        var thirdLeftStr = "";

        switch (Interaction.userAnswerArr[0]){
            case Interaction.answerIdsArray[0]:
                firstLeftStr = "0px";
                break;
            case Interaction.answerIdsArray[1]:
                firstLeftStr = "106px";
                break;
            case Interaction.answerIdsArray[2]:
                firstLeftStr = "212px";
                break;
        }

        switch (Interaction.userAnswerArr[1]){
            case Interaction.answerIdsArray[0]:
                secondLeftStr = "-106px";
                break;
            case Interaction.answerIdsArray[1]:
                secondLeftStr = "0px";
                break;
            case Interaction.answerIdsArray[2]:
                secondLeftStr = "106px";
                break;
        }

        switch (Interaction.userAnswerArr[2]){
            case Interaction.answerIdsArray[0]:
                thirdLeftStr = "-212px";
                break;
            case Interaction.answerIdsArray[1]:
                thirdLeftStr = "-106px";
                break;
            case Interaction.answerIdsArray[2]:
                thirdLeftStr = "0px";
                break;
        }

        $('#'+Interaction.userAnswerArr[0]).css("position","relative");
        $('#'+Interaction.userAnswerArr[1]).css("position","relative");
        $('#'+Interaction.userAnswerArr[2]).css("position","relative");

        $('#'+Interaction.userAnswerArr[0]).delay(1000).animate({left:firstLeftStr},2000,'easeInOutQuad');
        $('#'+Interaction.userAnswerArr[1]).delay(1250).animate({left:secondLeftStr},2000,'easeInOutQuad');
        $('#'+Interaction.userAnswerArr[2]).delay(1500).animate({left:thirdLeftStr},2000,'easeInOutQuad');

        if(Interaction.dropped != Interaction.answerIdStr){
            Interaction.clone2 = [];
            $("."+Interaction.oldActiveStr).css("opacity", 0);
            Interaction.answerId = Interaction.answerIdStr.replace("Active", "Hover");
            $("#"+Interaction.oldActiveStr.replace("Active", "")).css("opacity", 1);


            setTimeout('$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 0);',3500);

            for(var i = 0; i < Interaction.numOfFracs - 1; i++){
                Interaction.clone2[i] = $("#"+Interaction.answerId).clone();
                Interaction.clone2[i].attr('class', 'flying');
                Interaction.clone2[i].attr('id', i);

                var ansTop = $(Interaction.sortingDiv).position().top;
                var ansLeft = $(Interaction.sortingDiv).position().left;
                if(Interaction.qType == 0)
                    ansLeft += 40;


                var c = $(Interaction.questionDiv).position().top;
                var d = $(Interaction.questionDiv).position().left;
                var flyTop = parseInt($('.dropDivs')[i].style.top) + 11 + c;
                var flyLeft = parseInt($('.dropDivs')[i].style.left) + 11 + d;

                $(Interaction.clone2[i]).css("position", "absolute")
                    .css("top", ansTop)
                    .css("left", ansLeft)
                    .css("opacity", 0);

                $(Interaction.container).append(Interaction.clone2[i]);
                $(Interaction.clone2[i]).delay(3500).animate(
                    {opacity:200, top:flyTop, left:flyLeft},
                    1500,
                    'easeInOutQuad',
                    function(){
                        $(this).remove();
                        $("."+Interaction.answerIdStr).css("opacity", 1);
                    }
                );
            }

            $('#sortingDiv img').draggable("disable");

            Interaction.oldActiveStr = Interaction.answerIdStr;

        }

        for(var i = 0; i < Interaction.numOfFracs; i++){
            if(Interaction.userAnswerArr[i] == Interaction.answerIdsArray[i])
                $("#"+Interaction.userAnswerArr[i]).css("color", "green");
            else
                $("#"+Interaction.userAnswerArr[i]).css("color", "red");
        }
        Interaction.nom2 = [];
        Interaction.denom2 = [];
        $(Interaction.sortingUl).sortable({disabled: true});

        if(Interaction.numOfFracs == 5)
            Interaction.lcm = Util.lcm(Interaction.denom[0], Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4]));
        else
            Interaction.lcm = Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3]);

        for(var i = 0; i < Interaction.numOfFracs; i++){
            Interaction.nom2[i] = Interaction.nom[i]*(Interaction.lcm/Interaction.denom[i]);
            Interaction.denom2[i] = Interaction.lcm;
        }

        Interaction.GetNumericalAxis(Interaction.lcm);

        Interaction.resume(4000);
    },

    GetNumericalAxis : function(piece){
        Interaction.numericalAxis = new Group();
        var arr = new Group();
        var arrow = new Path.OneSidedArrow(new Point(20, 170), new Point(560, 170), 10, 30)
        var arrow2 = new Path.OneSidedArrow(new Point(560, 170), new Point(561, 170), 10, 30);
        arrow.rotate(180);
        arr.addChild(arrow);
        arr.addChild(arrow2);

        var bigDots = new Group();
        var bigDot1 = new Path.Circle(new Point(50, 170), 5);
        bigDot1.fillColor = "black";
        var bigDot2 = new Path.Circle(new Point(530, 170), 5);
        bigDot2.fillColor = "black";
        bigDots.addChild(bigDot1);
        bigDots.addChild(bigDot2);

        var pieceLength = 480/piece;

        Interaction.smallDots = new Group();
        for(var i = 0; i < piece-1; i++){
            var smallDot = new Path.Circle(new Point(50+pieceLength*(i+1), 170), 3)
            smallDot.fillColor = "black";
            Interaction.smallDots.addChild(smallDot);
        }

        Interaction.numericalAxis.addChild(arr);
        Interaction.numericalAxis.addChild(bigDots);
        Interaction.numericalAxis.addChild(Interaction.smallDots);

        var posX, posY;
        Interaction.index = [];
        Interaction.index2 = [];
        Interaction.lline = new Group();
        Interaction.nom22 = [];
        Interaction.posX2 = [];
        Interaction.posY2 = [];
        for(var i = 0; i < Interaction.numOfFracs; i++)
            Interaction.nom22[i] = Interaction.nom2[i];
        Interaction.nom22.sort(function(a,b){return a-b});
        Interaction.ansF = [];
        for(var i = 0; i < Interaction.numOfFracs; i++){
            Interaction.index[i] = Interaction.nom22[i] - 1;
            Interaction.index2[i] = Interaction.nom2[i] - 1;
            posX = Interaction.smallDots.children[Interaction.index[i]].position.x;
            posY = Interaction.smallDots.children[Interaction.index[i]].position.y;
            Interaction.posX2[i] = Interaction.smallDots.children[Interaction.index2[i]].position.x-8;
            Interaction.posY2[i] = Interaction.smallDots.children[Interaction.index2[i]].position.y+8;

            Interaction.smallDots.children[Interaction.index[i]].opacity = 0;

            var lline = new Path.Line(new Point(posX, posY-6), new Point(posX, posY+6))

            lline.strokeColor = "#0066FF";
            lline.strokeWidth = 2;
            Interaction.lline.addChild(lline);

            Interaction.ansF[i] = document.createElement('div');
            Interaction.ansF[i].id = 'ansF'+i
            $(Interaction.container).append(Interaction.ansF[i]);
            $(Interaction.ansF[i]).html('<div id="nomm'+i+'"></div><div id="linee'+i+'"></div><div id="denomm'+i+'"></div>');
            $(Interaction.ansF[i]).css("position","absolute")
                .css("top", Interaction.posY2[i])
                .css("left", Interaction.posX2[i])
                .css("width", "16px")
                .css("height", "33px")
                .css("padding", 0)
                .css("margin", 0)
                .css("color", "#0066FF")
                .css("font-size", "12px")
                .css("font-weight", "bold")
                .css("line-height", "16px")

            $('#linee'+i).css("height", "1px")
                .css("border-top", "1px solid")
                .css("padding", 0)

            $('#nomm'+i).css("text-align", "center")
                .css("height", "16px")
                .html(Interaction.nom[i])

            $('#denomm'+i).css("text-align", "center")
                .css("height", "16px")
                .html(Interaction.denom[i])
        }
        Interaction.ansF.sort(function(a,b){
            if($(a).offset().left < $(b).offset().left)
                return -1;
            else if($(a).offset().left > $(b).offset().left)
                return 1;
            else
                return 0;
        })
        for(var i = 0; i < Interaction.ansF.length; i++){
            if(i % 2 == 1){
                var newTop = $(Interaction.ansF[i]).position().top -50;
                $(Interaction.ansF[i]).css("top", newTop);
            }
        }

        Interaction.pointDiv = document.createElement('div');
        Interaction.pointDiv.id = 'pointDiv'
        $(Interaction.container).append(Interaction.pointDiv)
        $(Interaction.pointDiv).html('<div id="fp"></div> <div id="sp"></div>')
        $(Interaction.pointDiv).css("position", "absolute")
            .css("top", "130px")
            .css("left", "30px")
            .css("width", "480px")
            .css("height", "20px")
            .css("font-size", 22)

        $('#fp').css("position", "absolute")
            .css("top", "0px")
            .css("left", "14px")
            .css("width", "20px")
            .css("height", "20px")
            .html(0);
        $('#sp').css("position", "absolute")
            .css("top", "0px")
            .css("left", "492px")
            .css("width", "20px")
            .css("height", "20px")
            .html(1);
    },

    getFractionsToBeSorted: function(numOfFracs){
        Interaction.nom = [];
        Interaction.denom = [];
        Interaction.vals = [];
        do{
            for(var i = 0; i < numOfFracs; i++){

                Interaction.denom[i] = Util.randomInteger(2,8);
                Interaction.nom[i] = Util.randomInteger(1,Interaction.denom[i]);
                Interaction.vals[i] = Interaction.nom[i]/Interaction.denom[i];
            }
        }
        while(Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2]) > 25 || Interaction.vals[0] == Interaction.vals[1] || Interaction.vals[0] == Interaction.vals[2] || Interaction.vals[1] == Interaction.vals[2])
    }
}
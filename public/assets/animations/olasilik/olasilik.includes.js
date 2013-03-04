function __Styles(){
    ballColors = [];
    ballColors[0] = "#ff0000";      // kırmızı
    ballColors[1] = "#0096ff";      // mavi
    ballColors[2] = "#ff9900";      // turuncu
    ballColors[3] = "#00c800";      // yeşil

    questionDivStyle = {
        position:'absolute',
        top:'100px',
        left:'260px',
        height:'100px',
        width:'320px'
    };

    questionTextStyle = {
        position:'absolute',
        top:'30px',
        left:'-10px',
        width:'250px',
        height:'20px',
        fontSize:'18px',
        textAlign:'right'
    };

    lineStyle = {
        position:'absolute',
        height:'1px',
        width:'38px',
        padding:0,
        borderTop:'1px solid',
        top:'38px',
        left:'248px'
    };

    animationDivStyle = {
        position:'absolute',
        top:'30px',
        left:'30px',
        height:'160px',
        width:'700px',
        verticalAlign:'middle'
    };

    firstDivStyle = {
        position:'absolute',
        top:'10px',
        left:'100px',
        height:'60px',
        width:'500px',
        fontSize:'18px'
    };

    secondDivStyle = {
        position:'absolute',
        top:'80px',
        left:'160px',
        height:'60px',
        width:'410px',
        fontSize:'18px'
    };
};
var generateBalls = function(){
    try{
        var numOfColors = Util.randomInteger(2,5);
        Interaction.ballsGroup = new Group();

        Interaction.myColors = [];
        var c = [];
        c = Util.getShuffledArray(4);
        Interaction.myColors[0] = ballColors[c[0]];
        Interaction.myColors[1] = ballColors[c[1]];
        Interaction.myColors[2] = ballColors[c[2]];
        Interaction.myColors[3] = ballColors[c[3]];

        Interaction.questionArr = [];

        for(var i = 0; i < numOfColors; i++){
            if(Interaction.myColors[i] == "#ff0000"){
                Interaction.questionArr[i] = "Kırmızı";
            }
            else if(Interaction.myColors[i] == "#0096ff"){
                Interaction.questionArr[i] = "Mavi";
            }
            else if(Interaction.myColors[i] == "#ff9900"){
                Interaction.questionArr[i] = "Turuncu";
            }
            else if(Interaction.myColors[i] == "#00c800"){
                Interaction.questionArr[i] = "Yeşil";
            }
        }

        Interaction.ballArr = [];
        var ballsSoFar = 0;
        var a;
        var b = new Group();
        var pp;
        for(var i = 0; i < numOfColors; i++){
            var numOfBalls = Util.randomInteger(1,4);
            Interaction.ballArr.push(numOfBalls);

            for(var j = 0; j < numOfBalls; j++){

                a = new Path.Circle(new Point(50+j*42+ballsSoFar*42,40), 18);
                a.fillColor = Interaction.myColors[i];

                pp = new Raster('shadow');
                pp.position = new Point(50+j*42+ballsSoFar*42,40);

                b.addChild(a);
                b.addChild(pp);

                Interaction.ballsGroup.addChild(b);
            }
            ballsSoFar += numOfBalls;
        }
        Interaction.totalBall = ballsSoFar;
        Interaction.ballsGroup.position = new Point(Interaction.ballsGroup.position.x+((12-ballsSoFar)*20),Interaction.ballsGroup.position.y);

        for(var i = 0; i < Interaction.ballsGroup.children[0].children.length; i++){
            Interaction.ballsGroup.children[0].children[i].position.y -= 100;
        }

        for(var j = 0; j < Interaction.ballsGroup.children[0].children.length; j+=2){
            Interaction.ballsGroup.children[0].children[j].animate({
                style:{
                    position:Interaction.ballsGroup.children[0].children[j].position.add(new Point(0,100))
                },
                duration:1000,
                delay:j*200,
                animationType:'easeOutBounce'
            });
            Interaction.ballsGroup.children[0].children[j+1].animate({
                style:{
                    position:Interaction.ballsGroup.children[0].children[j+1].position.add(new Point(0,100))
                },
                duration:1000,
                delay:j*200,
                animationType:'easeOutBounce'
            });
        }

        Interaction.myIndex = 0;
    }
    catch(err){
        return false;
    }
    return true;
};

var Animation = {
    images:[
        {
            id:'dicee',
            src:'/assets/animations/olasilik/olasilik_zar.png'
        }
    ],
	init:function(container){
        Animation.container = container;

        var firstDivStart = 1000;
        var diceStart = firstDivStart+6000;
        var secondDivStart = diceStart + 2000;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animationDivStyle});

        Animation.firstDiv = Util.dom({parent:Animation.animDiv, tag:'div', css:firstDivStyle,
            html:'<div id="textt" style="opacity:0;position:absolute;top:18px;left:2px;padding:0;margin:0;">Bir olayın olma olasılığı =</div>' +
                '<div id="fract" style="position:absolute;left:210px;height:52px;width:280px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nomt" style="opacity:0;"></div><div id="linet" style="opacity:0;"></div><div id="denomt" style="opacity:0;"></div></div>'
        });

        $('#linet').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nomt').css("text-align", "center")
            .css("height", "25px");
        $('#nomt').html("İstenen olayın çıktı sayısı");

        $('#denomt').css("text-align", "center")
            .css("height", "25px");
        $('#denomt').html("Mümkün olan tüm çıktıların sayısı");

        Animation.secondDiv = Util.dom({parent:Animation.animDiv, tag:'div', css:secondDivStyle,
            html:'<div id="textt2" style=opacity:0;position:absolute;top:20px;left:140px;">2 gelme olasılığı = </div>' +
                '<div id="fracs" style="position:absolute;top:3px;left:296px;height:51px;width:30px;padding:0;margin:0;line-height:25px;">' +
                '<div id="noms" style="opacity:0;"></div><div id="lines" style="opacity:0;"></div><div id="denoms" style="opacity:0;"></div></div>'
        });

        $('#lines').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#noms').css("text-align", "center")
            .css("height", "25px");
        $('#noms').html(1);

        $('#denoms').css("text-align", "center")
            .css("height", "25px");
        $('#denoms').html(6);

        $('#textt').delay(firstDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#linet').delay(firstDivStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#nomt').delay(firstDivStart+3000).animate({opacity:1},1000,'easeInOutQuad');
        $('#denomt').delay(firstDivStart+4500).animate({opacity:1},1000,'easeInOutQuad');

        pp = new Raster('dicee');
        pp.position = new Point(260,-30);

        pp.animate({
            style:{
                position:pp.position.add(0,150)
            },
            duration:1500,
            delay:diceStart,
            animationType:'easeOutBounce'
        });

        $('#textt2').delay(secondDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#lines').delay(secondDivStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#noms').delay(secondDivStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#denoms').delay(secondDivStart+1500).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});

    }
}
;
var Interaction = {
    
	getFramework:function(){
			return 'paper';
    },
	images:[
        {
            id:'shadow',
            src:'/assets/animations/olasilik/top_golge.png'
        },
        {
            id:'pouch1',
            src:'/assets/animations/olasilik/olasilik_torba_01.png'
        },
        {
            id:'pouch2',
            src:'/assets/animations/olasilik/olasilik_torba_02.png'
        }
    ],
    init:function(container){
        Interaction.container = container;

        Main.setObjective('Yandaki toplar bir torbanın içindedir. İstenen topun torbadan rastgele çekilme olasılığını bulunuz ve kontrol ediniz.');

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});
        Interaction.questionText = Util.dom({parent:Interaction.questionDiv, tag:'div', css:questionTextStyle});
        Interaction.line = Util.dom({parent:Interaction.questionDiv, tag:'div', css:lineStyle});
        Interaction.appendStatus({
            bottom:'10px',
            right:'170px',
            //    border:'1px solid',
            width:'400px',
            height:'26px',
            textAlign:'center'
        });
        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'2px',
            left:'250px',
            width:'32px',
            height:'30px',
            fontSize:'24px'
        });
        Interaction.appendInput({
            position:'absolute',
            top:'42px',
            left:'250px',
            width:'32px',
            height:'30px',
            fontSize:'24px'
        });
        $(Interaction.questionDiv).append(Interaction.inputs[0]);
        $(Interaction.questionDiv).append(Interaction.inputs[1]);
        Interaction.myIndex = 0;

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if(Interaction.ansGroup){
            Interaction.ansGroup.remove();
        }
        if(Interaction.pouch1){
            Interaction.pouch1.remove();
        }
        if(Interaction.pouch2){
            Interaction.pouch2.remove();
        }

        $(Interaction.inputs[0]).css("color","black");
        $(Interaction.inputs[1]).css("color","black");

        if(Interaction.questionArr){
            if(Interaction.myIndex == Interaction.questionArr.length-1){
                $(Interaction.questionDiv).css("opacity",0);
                if(Interaction.ballsGroup){
                    Interaction.ballsGroup.remove();
                }
                generateBalls();
                Interaction.shuffledIndex = Util.getShuffledArray(Interaction.questionArr.length);

                Interaction.ballDropTime = (Interaction.totalBall * 400) + 1000;
                Interaction.qIndex = Interaction.shuffledIndex[Interaction.myIndex];
                Interaction.question = ""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =";
                $(Interaction.questionText).html(Interaction.question);
                Interaction.answer = Interaction.ballArr[Interaction.qIndex] / Interaction.totalBall;

                setTimeout('$(Interaction.questionDiv).css("opacity",1)', Interaction.ballDropTime);

            }
            else{
                Interaction.myIndex += 1;
                Interaction.qIndex = Interaction.shuffledIndex[Interaction.myIndex];
                Interaction.question = ""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =";
                $(Interaction.questionText).html(Interaction.question);
                Interaction.answer = Interaction.ballArr[Interaction.qIndex] / Interaction.totalBall;
            }
        }
        else{
            $(Interaction.questionDiv).css("opacity",0);
            generateBalls();
            Interaction.shuffledIndex = Util.getShuffledArray(Interaction.questionArr.length);
            Interaction.ballDropTime = (Interaction.totalBall * 400) + 1000;

            Interaction.qIndex = Interaction.shuffledIndex[Interaction.myIndex];
            Interaction.question = ""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =";
            $(Interaction.questionText).html(Interaction.question);
            Interaction.answer = Interaction.ballArr[Interaction.qIndex] / Interaction.totalBall;

            setTimeout('$(Interaction.questionDiv).css("opacity",1)', Interaction.ballDropTime);
        }
    },
		

	preCheck : function(){

    },
	isAnswerCorrect : function(value){

        if(value[0]/value[1] == Interaction.answer){
            return true;
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
        Interaction.pause();
        $(Interaction.inputs[0]).css("color","green");
        $(Interaction.inputs[1]).css("color","green");
        var answerFillColor = Interaction.myColors[Interaction.qIndex];
        Interaction.pouch2 = new Raster('pouch2');
        Interaction.pouch2.position = new Point(92.5,184.5);
        var answerCirc = new Path.Circle(new Point(115,196),18);
        answerCirc.fillColor = answerFillColor;
        var shadow = new Raster('shadow');
        shadow.position = new Point(115,196);
        Interaction.ansGroup = new Group();
        Interaction.ansGroup.addChild(answerCirc);
        Interaction.ansGroup.addChild(shadow);
        Interaction.pouch1 = new Raster('pouch1');
        Interaction.pouch1.position = new Point(92.5,184.5);

        Interaction.ansGroup.animate({
            style:{
                position:new Point(Interaction.ansGroup.position.x,Interaction.ansGroup.position.y-110)
            },
            duration:1000,
            delay:1000,
            animationType:'easeInOutQuad',
            callback:function(){
                Interaction.ansGroup.firstPosition = Interaction.ansGroup.position;
            }
        });
        Interaction.ansGroup.X = 0;
        Interaction.ansGroup.animate({
            style:{
                X:36
            },
            duration:1000,
            delay:2500,
            animationType:'easeInOutQuad',
            update:function(){
                this.position = this.firstPosition.add(2.51*this.X,0.04*this.X*this.X);
            },
            callback:function(){
                Interaction.ansGroup.firstPosition = Interaction.ansGroup.position;
            }
        });
        setTimeout('Interaction.resume();',3500)
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir!', false);
        Interaction.inputs[0].value = Interaction.ballArr[Interaction.qIndex];
        Interaction.inputs[1].value = Interaction.totalBall;
        $(Interaction.inputs[0]).css("color","green");
        $(Interaction.inputs[1]).css("color","green");
		
    }
}
;





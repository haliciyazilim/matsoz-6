var animateNumber = function(isOdd){

    var lastIndex, total;
    if(isOdd == undefined || isNaN(isOdd)){
        isOdd = 0;
    }
    if(isOdd){
        lastIndex = 5;
        total = 0;
    }
    else{
        lastIndex = 4;
        total = 1;
    }

    for(var i = 0; i < lastIndex; i++){
        var pos = Animation.balls.children[2*i+total].position;
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y-40),
            },
            duration:500,
            delay:0,
            animationType:'easeOut',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y),
            },
            duration:400,
            delay:500,
            animationType:'easeIn',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y-25),
            },
            duration:400,
            delay:900,
            animationType:'easeOut',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y),
            },
            duration:300,
            delay:1300,
            animationType:'easeIn',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y-15),
            },
            duration:300,
            delay:1600,
            animationType:'easeOut',
        });
        Animation.balls.children[2*i+total].animate({
            style: {
                position: new Point(pos.x, pos.y),
            },
            duration:200,
            delay:1900,
            animationType:'easeIn',
        });
    }
};

var Question = Class.extend({
    init:function(type,qIndex){
        switch(type){
            case Question.DICE:
                this.question = Question.diceArray[qIndex];
                break;
            case Question.COIN:
                this.question = Question.coinArray[qIndex];
                break;
            case Question.WHEEL:
                this.question = Question.wheelArray[qIndex];
                break;
            case Question.POUCH:
                this.question = Question.pouchArray[qIndex];
                break;
        }
    }
});

Question.DICE = 0;
Question.COIN = 1;
Question.WHEEL = 2;
Question.POUCH = 3;

Question.diceArray = [];
Question.diceArray[0] = "7 gelme olasılığı";
Question.diceArray[1] = "0\'dan büyük 7\'den küçük sayı gelme olasılığı";
Question.diceArray[2] = "\"Tek sayı gelme olasılığı\" ve \"Çift sayı gelme olasılığı\"";
Question.diceArray[3] = "\"4 gelme olasılığı\" ve \"Tek sayı gelme olasılığı\"";

Question.coinArray = [];
Question.coinArray[0] = "Yazı ya da tura gelmeme olasılığı";
Question.coinArray[1] = "Yazı ya da tura gelme olasılığı";
Question.coinArray[2] = "\"Yazı gelme olasılığı\" ve \"Tura gelme olasılığı\"";
Question.coinArray[3] = "\"Yazı gelme olasılığı\" ve \"Yazı ya da tura gelme olasılığı\"";

Question.wheelArray = [];
Question.wheelArray[0] = "Yeşil gelme olasılığı";
Question.wheelArray[1] = "Turuncu, mavi, mor renklerden birinin gelme olasılığı";
Question.wheelArray[2] = "\"Turuncu gelme olasılığı\" ve \"Mavi ya da mor gelme olasılığı\"";
Question.wheelArray[3] = "\"Sarı gelme olasılığı\" ve \"Turuncu gelme olasılığı\"";

Question.pouchArray = [];
Question.pouchArray[0] = "Kırmızı top çekme olasılığı";
Question.pouchArray[1] = "Mor, pembe, yeşil renk toplardan birini çekme olasılığı";
Question.pouchArray[2] = "\"Pembe top çekme olasılığı\" ve \"Mor ya da yeşil top çekme olasılığı\"";
Question.pouchArray[3] = "\"Mor top çekme olasılığı\" ve \"Mor ya da yeşil top çekme olasılığı\"";
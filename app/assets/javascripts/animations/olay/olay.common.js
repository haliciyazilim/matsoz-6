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
            case Question.WHEEL2:
                this.question = Question.wheel2Array[qIndex];
                break;
            case Question.WHEEL3:
                this.question = Question.wheel3Array[qIndex];
                break;
            case Question.POUCH:
                this.question = Question.pouchArray[qIndex];
                break;
            case Question.POUCH2:
                this.question = Question.pouch2Array[qIndex];
                break;
            case Question.POUCH3:
                this.question = Question.pouch3Array[qIndex];
                break;
        }
    }
});

Question.DICE = 0;
Question.COIN = 1;
Question.WHEEL = 2;
Question.WHEEL2 = 3;
Question.WHEEL3 = 4;
Question.POUCH = 5;
Question.POUCH2 = 6;
Question.POUCH3 = 7;

Question.diceArray = [];
Question.diceArray[0] = "7 gelme olasılığı";    // impossible event
Question.diceArray[1] = "0\'dan büyük 7\'den küçük sayı gelme olasılığı";   // certain event
Question.diceArray[2] = "\"Tek sayı gelme olasılığı\" ve \"Çift sayı gelme olasılığı\"";    // complement event
Question.diceArray[3] = "\"4 gelme olasılığı\" ve \"Tek sayı gelme olasılığı\"";    // not complement event

Question.coinArray = [];
Question.coinArray[0] = "Yazı ya da tura gelmeme olasılığı";    // impossible event
Question.coinArray[1] = "Yazı ya da tura gelme olasılığı";      // certain event
Question.coinArray[2] = "\"Yazı gelme olasılığı\" ve \"Tura gelme olasılığı\"";     // complement event
Question.coinArray[3] = "\"Yazı gelme olasılığı\" ve \"Tura gelmeme olasılığı\"";  // not complement event

Question.wheelArray = [];
Question.wheelArray[0] = "Yeşil gelme olasılığı";   // impossible event
Question.wheelArray[1] = "Kırmızı, mavi, sarı renklerden birinin gelme olasılığı";  // certain event
Question.wheelArray[2] = "\"Kırmızı gelme olasılığı\" ve \"Mavi gelme olasılığı\" ve \"Sarı gelme olasılığı\"";     // complement event
Question.wheelArray[3] = "\"Kırmızı gelme olasılığı\" ve \"Mavi gelme olasılığı\"";     // not complement event

Question.wheel2Array = [];
Question.wheel2Array[0] = "Kırmızı gelme olasılığı";    // impossible event
Question.wheel2Array[1] = "Yeşil, mor, turuncu renklerden birinin gelme olasılığı";  // certain event
Question.wheel2Array[2] = "\"Yeşil gelme olasılığı\" ve \"Mor gelme olasılığı\" ve \"Turuncu gelme olasılığı\"";   // complement event
Question.wheel2Array[3] = "\"Yeşil gelme olasılığı\" ve \"Mor gelme olasılığı\"";

Question.wheel3Array = [];
Question.wheel3Array[0] = "Sarı gelme olasılığı";       // impossible event
Question.wheel3Array[1] = "Pembe, beyaz, gri renklerden birinin gelme olasılığı";  // certain event
Question.wheel3Array[2] = "\"Pembe gelme olasılığı\" ve \"Beyaz gelme olasılığı\" ve \"Gri gelme olasılığı\"";  // complement event
Question.wheel3Array[3] = "\"Pembe gelme olasılığı\" ve \"Beyaz gelme olasılığı\"";  // not complement event

Question.pouchArray = [];
Question.pouchArray[0] = "Kırmızı top çekme olasılığı";     // impossible event
Question.pouchArray[1] = "Mor, pembe, yeşil renk toplardan birini çekme olasılığı";     // certain event
Question.pouchArray[2] = "\"Mor top çekme olasılığı\" ve \"Pembe top çekme olasılığı\" ve \"Yeşil top çekme olasılığı\"";    // complement event
Question.pouchArray[3] = "\"Mor top çekme olasılığı\" ve \"Pembe top çekme olasılığı\"";      // not complement event

Question.pouch2Array = [];
Question.pouch2Array[0] = "Yeşil top çekme olasılığı";      // impossible event
Question.pouch2Array[1] = "Mavi, kahverengi, turuncu renk toplardan birini çekme olasılığı";    // certain event
Question.pouch2Array[2] = "\"Mavi top çekme olasılığı\" ve \"Kahverengi top çekme olasılığı\" ve \"Turuncu top çekme olasılığı";    // complement event
Question.pouch2Array[3] = "\"Mavi top çekme olasılığı\" ve \"Kahverengi top çekme olasılığı\"";     // not complement event

Question.pouch3Array = [];
Question.pouch3Array[0] = "Sarı top çekme olasılığı";       // impossible event
Question.pouch3Array[1] = "Kırmızı, gri, beyaz renk toplardan birini çekme olasılığı";      // certain event
Question.pouch3Array[2] = "\"Kırmızı top çekme olasılığı\" ve \"Gri top çekme olasılığı\" ve \"Beyaz top çekme olasılığı\"";    // complement event
Question.pouch3Array[3] = "\"Kırmızı top çekme olasılığı\" ve \"Gri top çekme olasılığı\"";     // not complement event
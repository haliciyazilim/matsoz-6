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

                a = new Path.Circle(new Point(50+j*42+ballsSoFar*42,30), 18);
                a.fillColor = Interaction.myColors[i];

                pp = new Raster('shadow');
                pp.position = new Point(50+j*42+ballsSoFar*42,30);

                b.addChild(a);
                b.addChild(pp);

                Interaction.ballsGroup.addChild(b);
            }
            ballsSoFar += numOfBalls;
        }
        Interaction.totalBall = ballsSoFar;
        Interaction.ballsGroup.position = new Point(Interaction.ballsGroup.position.x+((12-ballsSoFar)*20),Interaction.ballsGroup.position.y);
    }
    catch(err){
        return false;
    }
    return true;
};


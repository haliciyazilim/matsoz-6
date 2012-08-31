var generateBalls = function(){
    try{
        var numOfColors = Util.randomInteger(2,5);
        Interaction.ballsGroup = new Group();

        Interaction.questionArr = ["Kırmızı","Mavi"];
        if(numOfColors > 2){
            Interaction.questionArr.push("Sarı");
        }
        if(numOfColors > 3){
            Interaction.questionArr.push("Yeşil");
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
                a.fillColor = ballColors[i];

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


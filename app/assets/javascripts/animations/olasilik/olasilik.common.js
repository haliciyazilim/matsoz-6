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


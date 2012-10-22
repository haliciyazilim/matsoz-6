var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var daysArray = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        var datasArray = ["27","23","31","19","24","29"];

        var animTable = new Group();
        for(var i = 0; i < 2; i++){
            for(var j = 0; j < 7; j++){
                var a = new Path.Rectangle(new Point(80.5+100*i,20.5+20*j), new Size(100,20));
                a.strokeColor = '#aaaaaa';
                if(j == 0){
                    a.fillColor = '#d9d9d9';
                }
                animTable.addChild(a);
            }
        }
        var tableTitle = new PointText(new Point(45,10));
        tableTitle.justification = 'left';
        tableTitle.content = 'Tablo: Bir haftada satılan cep telefonu sayısı';

        var tableTextsGroup = new Group();
        var firstText = new PointText(new Point(86.5,36.5));
        firstText.justification = 'left';
        firstText.content = 'Günler';

        var secondText = new PointText(new Point(192.5,36.5));
        secondText.justification = 'left';
        secondText.content = 'Satış Miktarı';

        tableTextsGroup.addChild(firstText);
        tableTextsGroup.addChild(secondText);

        for(var i = 0; i < 6; i++){
            var myText = new PointText(new Point(86.5,56.5+i*20));
            myText.justification = 'left';
            myText.content = daysArray[i];

            var myText2 = new PointText(new Point(222.5,56.5+i*20));
            myText2.justification = 'left';
            myText2.content = datasArray[i];
            tableTextsGroup.addChild(myText);
            tableTextsGroup.addChild(myText2);
        }
        for(var i = 1; i < 7; i++){
            animTable.children[i].fillColor = colors[i-1];
        }
        for(var i = 8; i < 14; i++){
            animTable.children[i].fillColor = colors[i-8];
        }
    }
}
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animTable = new Group();
        for(var i = 0; i < 2; i++){
            for(var j = 0; j < 7; j++){
                var a = new Path.Rectangle(new Point(100.5+80*i,20.5+20*j), new Size(80,20));
                a.strokeColor = 'black';
                if(j == 0){
                    a.fillColor = 'grey';
                }
                animTable.addChild(a);
            }
        }
    }
}
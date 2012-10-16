var Animation = {
    images:[
        {
            id:'animPaper',
            src:'/assets/animations/mavi_cizgili_kagit.jpg'
        }
    ],
	init:function(container){
        Animation.container = container;
        var animPaper = new Raster('animPaper');
        animPaper.position = new Point(200.5,100.5);
    }
}
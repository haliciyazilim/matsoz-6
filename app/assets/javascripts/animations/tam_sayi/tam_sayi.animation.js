var Animation = {
    images:[
        {id:"zemin", src:'/assets/animations/tam_sayi/zemin.jpg'},
        {id:"cerceve", src:'/assets/animations/tam_sayi/cerceve.png'},
        {id:"baslik", src:'/assets/animations/tam_sayi/balik.png'},
        {id:"kus", src:'/assets/animations/tam_sayi/kus.png'},
        {id:"asagi_ok", src:'/assets/animations/tam_sayi/asagi_ok.png'},
        {id:"yukari_ok", src:'/assets/animations/tam_sayi/yukari_ok.png'}
    ],
    init:function(container){
	Animation.container = container;
        
        resim=new images();
        resim.src=images[0][1];
        
        alert(resim.src);
       
    }
}
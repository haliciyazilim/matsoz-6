var Animation = {
    images:[
        {
            id:'1kg',
            src:'/assets/animations/esitlik/1kg.png'
        },{
            id:'2kg',
            src:'/assets/animations/esitlik/2kg.png'
        },{
            id:'elma',
            src:'/assets/animations/esitlik/elma.png'
        },{
            id:'elma_sepet',
            src:'/assets/animations/esitlik/elma_sepet.png'
        },{
            id:'terazi_k_01',
            src:'/assets/animations/esitlik/terazi_k_01.png'
        },{
            id:'terazi_k_02',
            src:'/assets/animations/esitlik/terazi_k_02.png'
        },{
            id:'terazi_k_03',
            src:'/assets/animations/esitlik/terazi_k_03.png'
        },{
            id:'terazi_k_04',
            src:'/assets/animations/esitlik/terazi_k_04.png'
        }
    ],
	init:function(container){
        Animation.container = container;
        Animation.placeItems();
        Animation.moveAnApple(1000);
        Animation.moveAnApple(2500);
        Animation.moveAnApple(4000);
    },
    placeItems:function(){
        new Raster('elma_sepet').position = new Point(100.5,100);
        Animation.scales = new Scales2({
            position:new Point(400.5,75)
        });
    },
    moveAnApple:function(delay){
        var weight = new Weight({type:'elma'});
        weight.raster.position = new Point(100,100);
        Animation.scales.calculateWeights();
        weight.raster.opacity = 0;
        weight.raster.animate({
            style:{
                opacity:4,
                position:new Point(350,120)
            },
            duration:1000,
            delay:delay,
            callback:function(){
                Animation.scales.addWeightToLeft(weight);
                Animation.scales.calculateWeights();
            },
            animationType:'easeInEaseQuad'
        });
    }
}
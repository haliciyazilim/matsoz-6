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
        Animation.putWeight1kg(4000);
        Animation.moveAnApple(7000);
        var weight = Animation.putWeight1kg(11000);
        Animation.moveAnApple(13000);
        Animation.moveAnApple(16000);
        Animation.putWeight2kg(19000);
        weight.raster.animate({
            style:{
                position:weight.raster.position.subtract(0,30),
                opacity:0.5
            },
            duration:500,
            delay:23000,
            callback:function(){
                Animation.scales.removeWeight(weight);
                Animation.scales.calculateWeights();
                }
        })

//        Animation.moveAnApple(4000);
//        Animation.putWeight1kg(5500);
    },
    placeItems:function(){
        new Raster('elma_sepet').position = new Point(100.5,100);
        Animation.scales = new Scales2({
            position:new Point(375.5,75)
        });
    },
    moveAnApple:function(delay){
        var weight = new Weight({type:'elma'});
        weight.raster.position = new Point(100,100);
        weight.raster.opacity = 0;
        weight.raster.animate({
            style:{
                opacity:4,
                position:new Point(325,100)
            },
            duration:1000,
            delay:delay,
            callback:function(){
                Animation.scales.addWeightToLeft(weight);
                Animation.scales.calculateWeights();
            },
            animationType:'easeInEaseQuad'
        });
    },
    putWeight1kg: function(delay){
        var weight = new Weight({type:'1kg'});
        weight.raster.position = new Point(425,50.5);
        weight.raster.opacity = 0;
        weight.raster.animate({
            style:{
                opacity:4,
                position: weight.raster.position.add(0,30)
            },
            duration:500,
            delay:delay,
            callback:function(){
                Animation.scales.addWeightToRight(weight);
                Animation.scales.calculateWeights();
            },
            animationType:'easeIn'
        });
        return weight;
    },
    putWeight2kg: function(delay){
        var weight = new Weight({type:'2kg'});
        weight.raster.position = new Point(425.5,50.5);
        weight.raster.opacity = 0;
        weight.raster.animate({
            style:{
                opacity:4,
                position: weight.raster.position.add(0,30)
            },
            duration:500,
            delay:delay,
            callback:function(){
                Animation.scales.addWeightToRight(weight);
                Animation.scales.calculateWeights();
            },
            animationType:'easeIn'
        });
    }
}
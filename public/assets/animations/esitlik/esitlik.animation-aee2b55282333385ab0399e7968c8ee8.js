var Animation={images:[{id:"1kg",src:"/assets/animations/esitlik/1kg.png"},{id:"2kg",src:"/assets/animations/esitlik/2kg.png"},{id:"elma",src:"/assets/animations/esitlik/elma.png"},{id:"elma_sepet",src:"/assets/animations/esitlik/elma_sepet.png"},{id:"terazi_k_01",src:"/assets/animations/esitlik/terazi_k_01.png"},{id:"terazi_k_02",src:"/assets/animations/esitlik/terazi_k_02.png"},{id:"terazi_k_03",src:"/assets/animations/esitlik/terazi_k_03.png"},{id:"terazi_k_04",src:"/assets/animations/esitlik/terazi_k_04.png"}],init:function(e){Animation.container=e,Animation.placeItems(),Animation.moveAnApple(1e3),Animation.putWeight1kg(4e3),Animation.moveAnApple(7e3);var t=Animation.putWeight1kg(11e3);Animation.moveAnApple(13e3),Animation.moveAnApple(16e3),Animation.putWeight2kg(19e3),t.raster.animate({style:{position:t.raster.position.subtract(0,30),opacity:.5},duration:500,delay:23e3,callback:function(){Animation.scales.removeWeight(t),Animation.scales.calculateWeights(),Main.animationFinished(2e3)}})},placeItems:function(){(new Raster("elma_sepet")).position=new Point(100.5,100),Animation.scales=new Scales2({position:new Point(375.5,75)})},moveAnApple:function(e){var t=new Weight({type:"elma"});t.raster.position=new Point(100,100),t.raster.opacity=0,t.raster.animate({style:{opacity:4,position:new Point(325,100)},duration:1e3,delay:e,callback:function(){Animation.scales.addWeightToLeft(t),Animation.scales.calculateWeights()},animationType:"easeInEaseQuad"})},putWeight1kg:function(e){var t=new Weight({type:"1kg"});return t.raster.position=new Point(425,50.5),t.raster.opacity=0,t.raster.animate({style:{opacity:4,position:t.raster.position.add(0,30)},duration:500,delay:e,callback:function(){Animation.scales.addWeightToRight(t),Animation.scales.calculateWeights()},animationType:"easeIn"}),t},putWeight2kg:function(e){var t=new Weight({type:"2kg"});t.raster.position=new Point(425.5,50.5),t.raster.opacity=0,t.raster.animate({style:{opacity:4,position:t.raster.position.add(0,30)},duration:500,delay:e,callback:function(){Animation.scales.addWeightToRight(t),Animation.scales.calculateWeights()},animationType:"easeIn"})}};
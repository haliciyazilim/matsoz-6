function __Styles(){}var Scales2=function(e){this.animate=Item.prototype.animate,this.position=e.position,this.angle=0,this.bar=new Raster("terazi_k_02"),this.knuckle=new Raster("terazi_k_01"),this.left=new Raster("terazi_k_03"),this.right=new Raster("terazi_k_04"),this.pieces=[],this.pieces.push(this.bar),this.pieces.push(this.knuckle),this.pieces.push(this.left),this.pieces.push(this.right);for(var t=0;t<this.pieces.length;t++)this.pieces[t].position=this.position,this.pieces[t].lastTransformation=this.pieces[t].matrix;this.knucklePoint=this.position.add(0,-37),this.leftKnucklePoint=this.knucklePoint.subtract(54,0),this.rightKnucklePoint=this.knucklePoint.add(54,0),this.leftWeights=[],this.rightWeights=[],this.animationType="easeOutBounce"};Scales2.prototype.setAngle=function(e){this.angle=e;var t=new Matrix;t.rotate(this.angle,this.knucklePoint.x,this.knucklePoint.y),t.concatenate(this.bar.lastTransformation),this.bar.setMatrix(t),this.left.position=this.position.add(this.leftKnucklePoint.getRotatedPoint(e,this.knucklePoint).subtract(this.leftKnucklePoint)),this.right.position=this.position.add(this.rightKnucklePoint.getRotatedPoint(e,this.knucklePoint).subtract(this.rightKnucklePoint)),this.calculateLeftWeightPositions(),this.calculateRightWeightPositions()},Scales2.prototype.insideLeft=function(e){return e.x<this.left.position.x&&e.x>this.left.position.x-this.left.width*.5&&e.y<this.left.position.y+this.left.height*.5&&e.y>this.left.position.y},Scales2.prototype.insideRight=function(e){return e.x>this.right.position.x&&e.x<this.right.position.x+this.right.width*.5&&e.y<this.right.position.y+this.right.height*.5&&e.y>this.right.position.y},Scales2.prototype.calculateLeftWeightPositions=function(){var e=0,t=0;for(var n=0;n<this.leftWeights.length;n++)e+=this.leftWeights[n].raster.width;var r=this.left.position.add(-54,60).subtract(e/2,0);for(n=0;n<this.leftWeights.length;n++)this.leftWeights[n].raster.position=r.add(t,0).add(this.leftWeights[n].raster.width*.5,-this.leftWeights[n].raster.height*.5),t+=this.leftWeights[n].raster.width},Scales2.prototype.calculateRightWeightPositions=function(){var e=0,t=0;for(var n=0;n<this.rightWeights.length;n++)e+=this.rightWeights[n].raster.width;var r=this.right.position.add(54,60).subtract(e/2,0);for(n=0;n<this.rightWeights.length;n++)this.rightWeights[n].raster.position=r.add(t,0).add(this.rightWeights[n].raster.width*.5,-this.rightWeights[n].raster.height*.5),t+=this.rightWeights[n].raster.width},Scales2.prototype.addWeightToLeft=function(e,t){if(this.leftWeights.length>=4)return!1;e.owner=this,this.leftWeights.push(e),t==1&&this.calculateWeights(),this.calculateLeftWeightPositions()},Scales2.prototype.addWeightToRight=function(e,t){if(this.rightWeights.length>=4)return!1;e.owner=this,this.rightWeights.push(e),t==1&&this.calculateWeights(),this.calculateRightWeightPositions()},Scales2.prototype.calculateWeights=function(){var e=0,t=0;for(var n=0;n<this.leftWeights.length;n++)e+=this.leftWeights[n].value;for(var n=0;n<this.rightWeights.length;n++)t+=this.rightWeights[n].value;var r=7e3/(Math.abs(e-t)+1);e+=2,t+=2;var i=30;this.animationType="easeOutBounce",e<t?(r*=e/t,i*=1):e>t?(r*=t/e,i*=-1):(i=0,r=4e3,this.animationType="easeOutElastic"),this.angle!=i&&this.animateToAngle(i,r)},Scales2.prototype.animateToAngle=function(e,t){t==undefined&&(t=1e3),this._angle=this.angle,this.animate({style:{_angle:e},duration:t,delay:100,animationType:this.animationType,init:this.beforeAnimate,update:function(){this.setAngle(this._angle)},callback:function(){this.angle==0&&this.onEqual?this.onEqual():Interaction.resume()}})},Scales2.prototype.callOnEqual=function(e){this.onEqual=e},Scales2.prototype.callBeforeAnimate=function(e){this.beforeAnimate=e},Scales2.prototype.emptyScales=function(){$(this.leftWeights).each(function(){this.remove()}),$(this.rightWeights).each(function(){this.remove()}),this.leftWeights=[],this.rightWeights=[],this.calculateWeights()},Scales2.prototype.removeWeight=function(e,t){t==undefined&&(t=!1);var n=!1,r=this.leftWeights.indexOf(e);if(r>=0)this.leftWeights[r].remove(),this.leftWeights.splice(r,1),n=!0;else{var i=this.rightWeights.indexOf(e);i>=0&&(this.rightWeights[i].remove(),this.rightWeights.splice(i,1),n=!0)}return n&&t&&this.calculateWeights(),n};var Animation={images:[{id:"1kg",src:"/assets/animations/esitlik/1kg.png"},{id:"2kg",src:"/assets/animations/esitlik/2kg.png"},{id:"elma",src:"/assets/animations/esitlik/elma.png"},{id:"elma_sepet",src:"/assets/animations/esitlik/elma_sepet.png"},{id:"terazi_k_01",src:"/assets/animations/esitlik/terazi_k_01.png"},{id:"terazi_k_02",src:"/assets/animations/esitlik/terazi_k_02.png"},{id:"terazi_k_03",src:"/assets/animations/esitlik/terazi_k_03.png"},{id:"terazi_k_04",src:"/assets/animations/esitlik/terazi_k_04.png"}],init:function(e){Animation.container=e,Animation.placeItems(),Animation.moveAnApple(1e3),Animation.putWeight1kg(4e3),Animation.moveAnApple(7e3);var t=Animation.putWeight1kg(11e3);Animation.moveAnApple(13e3),Animation.moveAnApple(16e3),Animation.putWeight2kg(19e3),t.raster.animate({style:{position:t.raster.position.subtract(0,30),opacity:.5},duration:500,delay:23e3,callback:function(){Animation.scales.removeWeight(t),Animation.scales.calculateWeights(),Main.animationFinished(2e3)}})},placeItems:function(){(new Raster("elma_sepet")).position=new Point(100.5,100),Animation.scales=new Scales2({position:new Point(375.5,75)})},moveAnApple:function(e){var t=new Weight({type:"elma"});t.raster.position=new Point(100,100),t.raster.opacity=0,t.raster.animate({style:{opacity:4,position:new Point(325,100)},duration:1e3,delay:e,callback:function(){Animation.scales.addWeightToLeft(t),Animation.scales.calculateWeights()},animationType:"easeInEaseQuad"})},putWeight1kg:function(e){var t=new Weight({type:"1kg"});return t.raster.position=new Point(425,50.5),t.raster.opacity=0,t.raster.animate({style:{opacity:4,position:t.raster.position.add(0,30)},duration:500,delay:e,callback:function(){Animation.scales.addWeightToRight(t),Animation.scales.calculateWeights()},animationType:"easeIn"}),t},putWeight2kg:function(e){var t=new Weight({type:"2kg"});t.raster.position=new Point(425.5,50.5),t.raster.opacity=0,t.raster.animate({style:{opacity:4,position:t.raster.position.add(0,30)},duration:500,delay:e,callback:function(){Animation.scales.addWeightToRight(t),Animation.scales.calculateWeights()},animationType:"easeIn"})}},Interaction={getFramework:function(){return"paper"},images:[{id:"scales_knuckle",src:"/assets/animations/denklem/scales_knuckle.png"},{id:"scales_bar",src:"/assets/animations/denklem/scales_bar.png"},{id:"scales_left",src:"/assets/animations/denklem/scales_left.png"},{id:"scales_right",src:"/assets/animations/denklem/scales_right.png"},{id:"weight_1",src:"/assets/animations/denklem/weight_1.png"},{id:"weight_2",src:"/assets/animations/denklem/weight_2.png"},{id:"weight_3",src:"/assets/animations/denklem/weight_3.png"},{id:"weight_4",src:"/assets/animations/denklem/weight_4.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki terazide sağdaki birim kütleleri sürükleyip sağ kefeye yerleştirerek eşitlik oluşturunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"0px",width:"420px",textAlign:"center",left:"35px",lineHeight:"27px"}),Interaction.createTool(),Interaction.prepareNextQuestion()},nextQuestion:function(e){Main.interactionProject.activeLayer.removeChildren(),Interaction.scales=new Scales({position:new Point(250,115)});var t=Util.randomInteger(1,5);Interaction.scales.callOnEqual(Interaction.onEqual),Interaction.scales.callBeforeAnimate(function(){Interaction.setStatus("")}),Interaction.generateWeights();for(var n=0;n<t;n++){var r=new Weight({type:Util.randomInteger(1,5)});Interaction.scales.addWeightToLeft(r)}AnimationManager.delay(function(){Interaction.scales.calculateWeights()},1e3)},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){},onEqual:function(){Interaction.pause();if(Interaction.scales.leftWeights.length==0)return;var e='<span style="color:green">Tebrikler!</span><br/>',t=0,n=0;for(var r=0;r<Interaction.scales.leftWeights.length;r++)e+='<span id="'+r+'">'+(r>0?" + ":"")+Interaction.scales.leftWeights[r].value+"</span>",t+=Interaction.scales.leftWeights[r].value;e+='<span id="'+r++ +'"> = </span>';for(var i=0;i<Interaction.scales.rightWeights.length;i++,r++)e+='<span id="'+r+'">'+(i>0?" + ":"")+Interaction.scales.rightWeights[i].value+"</span>",n+=Interaction.scales.rightWeights[i].value;e+='<br/><span id="'+r+'">'+t+" = "+n+"</span>";var s=Interaction.scales.leftWeights.length+Interaction.scales.rightWeights.length;Interaction.setStatus(e);for(var r=0;r<s+2;r++)$("span#"+r,Interaction.status).css({opacity:0}).delay(1e3*r).animate({opacity:1},1e3);AnimationManager.delay(function(){Interaction.resume(),Main.interactionProject.activeLayer.animate({style:{opacity:0},duration:500,callback:function(){Main.interactionProject.activeLayer.removeChildren(),Interaction.setStatus(""),Interaction.prepareNextQuestion(),Main.interactionProject.activeLayer.set_style({opacity:1})}})},(s+5)*1e3)},generateWeights:function(){Interaction.weightsReferencePoint=new Point(550,45.5),Interaction.weights=[];for(var e=0;e<4;e++){var t=new Weight({type:e+1});t.raster.class="static_weight",t.raster.position=Interaction.weightsReferencePoint.add(0,60*e),Interaction.weights.push(t)}},createTool:function(){var e=new Tool;e.onMouseDown=function(e){if(Interaction.isPaused())return;for(var t=0;t<Interaction.weights.length;t++){var n=Interaction.weights[t].raster;if(n.bounds.contains(e.point)){n.class=="static_weight"?(this.item=n.weight.clone().raster,this.item.class="draggable_weight",Interaction.weights.push(this.item.weight)):this.item=n,this.item.opacity=.8,this.drag=!0,this.firstPosition=this.item.position,this.totalDelta=new Point(0,0);return}}},e.onMouseDrag=function(e){if(Interaction.isPaused())return;this.drag==1&&(console.log(this.item),this.totalDelta=this.totalDelta.add(e.delta),this.item.position=this.firstPosition.add(this.totalDelta))},e.onMouseUp=function(e){Interaction.isPaused()||this.drag==1&&(Interaction.scales.insideRight(e.point)?this.item.weight.owner==null?Interaction.scales.addWeightToRight(this.item.weight,!0)===!1&&(Interaction.weights.splice(Interaction.weights.indexOf(this.item.weight),1),this.item.remove()):(Interaction.pause(),this.item.animate({style:{position:this.firstPosition},duration:this.item.position.getDistance(this.firstPosition)*2,callback:Interaction.resume})):(Interaction.weights.splice(Interaction.weights.indexOf(this.item.weight),1),Interaction.scales.removeWeight(this.item.weight,!0),this.item.remove()),this.item.opacity=1),this.item=null,this.drag=!1,this.firstPosition=null,this.totalDelta=null},e.activate()}},Scales=function(e){this.animate=Item.prototype.animate,this.position=e.position,this.angle=0,this.bar=new Raster("scales_bar"),this.knuckle=new Raster("scales_knuckle"),this.left=new Raster("scales_left"),this.right=new Raster("scales_right"),this.pieces=[],this.pieces.push(this.bar),this.pieces.push(this.knuckle),this.pieces.push(this.left),this.pieces.push(this.right);for(var t=0;t<this.pieces.length;t++)this.pieces[t].position=this.position,this.pieces[t].lastTransformation=this.pieces[t].matrix;this.knucklePoint=this.position.add(-1,-56),this.leftKnucklePoint=this.knucklePoint.subtract(83,0),this.rightKnucklePoint=this.knucklePoint.add(83,0),this.leftWeights=[],this.rightWeights=[],this.animationType="easeOutBounce"};Scales.prototype.setAngle=function(e){this.angle=e;var t=new Matrix;t.rotate(this.angle,this.knucklePoint.x,this.knucklePoint.y),t.concatenate(this.bar.lastTransformation),this.bar.setMatrix(t),this.left.position=this.position.add(this.leftKnucklePoint.getRotatedPoint(e,this.knucklePoint).subtract(this.leftKnucklePoint)),this.right.position=this.position.add(this.rightKnucklePoint.getRotatedPoint(e,this.knucklePoint).subtract(this.rightKnucklePoint)),this.calculateLeftWeightPositions(),this.calculateRightWeightPositions()},Scales.prototype.insideLeft=function(e){return e.x<this.left.position.x&&e.x>this.left.position.x-this.left.width*.5&&e.y<this.left.position.y+this.left.height*.5&&e.y>this.left.position.y},Scales.prototype.insideRight=function(e){return e.x>this.right.position.x&&e.x<this.right.position.x+this.right.width*.5&&e.y<this.right.position.y+this.right.height*.5&&e.y>this.right.position.y},Scales.prototype.calculateLeftWeightPositions=function(){var e=0,t=0;for(var n=0;n<this.leftWeights.length;n++)e+=this.leftWeights[n].raster.width;var r=this.left.position.add(-83,92).subtract(e/2,0);for(n=0;n<this.leftWeights.length;n++)this.leftWeights[n].raster.position=r.add(t,0).add(this.leftWeights[n].raster.width*.5,-this.leftWeights[n].raster.height*.5),t+=this.leftWeights[n].raster.width},Scales.prototype.calculateRightWeightPositions=function(){var e=0,t=0;for(var n=0;n<this.rightWeights.length;n++)e+=this.rightWeights[n].raster.width;var r=this.right.position.add(83,92).subtract(e/2,0);for(n=0;n<this.rightWeights.length;n++)this.rightWeights[n].raster.position=r.add(t,0).add(this.rightWeights[n].raster.width*.5,-this.rightWeights[n].raster.height*.5),t+=this.rightWeights[n].raster.width},Scales.prototype.addWeightToLeft=function(e,t){if(this.leftWeights.length>=4)return!1;e.owner=this,this.leftWeights.push(e),t==1&&this.calculateWeights(),this.calculateLeftWeightPositions()},Scales.prototype.addWeightToRight=function(e,t){if(this.rightWeights.length>=4)return!1;e.owner=this,this.rightWeights.push(e),t==1&&this.calculateWeights(),this.calculateRightWeightPositions()},Scales.prototype.calculateWeights=function(){var e=0,t=0;for(var n=0;n<this.leftWeights.length;n++)e+=this.leftWeights[n].value;for(var n=0;n<this.rightWeights.length;n++)t+=this.rightWeights[n].value;var r=7e3/(Math.abs(e-t)+1);e+=.3,t+=.3;var i=30;this.animationType="easeOutBounce",e<t?(r*=e/t,i*=1):e>t?(r*=t/e,i*=-1):(i=0,r=4e3,this.animationType="easeOutElastic"),this.angle!=i&&this.animateToAngle(i,r)},Scales.prototype.animateToAngle=function(e,t){if(Interaction.isPaused())return;Interaction.pause(),t==undefined&&(t=1e3),this._angle=this.angle,this.animate({style:{_angle:e},duration:t,delay:100,animationType:this.animationType,init:this.beforeAnimate,update:function(){this.setAngle(this._angle)},callback:function(){Interaction.resume(),this.angle==0&&this.onEqual&&this.onEqual()}})},Scales.prototype.callOnEqual=function(e){this.onEqual=e},Scales.prototype.callBeforeAnimate=function(e){this.beforeAnimate=e},Scales.prototype.emptyScales=function(){$(this.leftWeights).each(function(){this.remove()}),$(this.rightWeights).each(function(){this.remove()}),this.leftWeights=[],this.rightWeights=[],this.calculateWeights()},Scales.prototype.removeWeight=function(e,t){t==undefined&&(t=!1);var n=!1,r=this.leftWeights.indexOf(e);if(r>=0)this.leftWeights[r].remove(),this.leftWeights.splice(r,1),n=!0;else{var i=this.rightWeights.indexOf(e);i>=0&&(this.rightWeights[i].remove(),this.rightWeights.splice(i,1),n=!0)}return n&&t&&this.calculateWeights(),n};var Weight=function(e){if(!e.type)throw"Please indicate the type of weight";this.type=e.type,this.owner=null;var t;switch(this.type){case 1:t=new Raster("weight_1"),this.value=1;break;case 2:t=new Raster("weight_2"),this.value=2;break;case 3:t=new Raster("weight_3"),this.value=3;break;case 4:t=new Raster("weight_4"),this.value=4;break;case"a":t=new Raster("weight_a"),this.value=e.value;break;case"m":t=new Raster("weight_m"),this.value=e.value;break;case"x":t=new Raster("weight_x"),this.value=e.value;break;case"1kg":t=new Raster("1kg"),this.value=1;break;case"2kg":t=new Raster("2kg"),this.value=2;break;case"elma":t=new Raster("elma"),this.value=.75}this.raster=t,this.raster.weight=this};Weight.prototype.remove=function(){this.raster.remove()},Weight.prototype.clone=function(){var e=new Weight({type:this.type});return e.raster.position=this.raster.position,e};
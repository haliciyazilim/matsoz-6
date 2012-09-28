var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki uzay modelinde nokta doğru ve düzlem modellerini “sonraki” düğmesine basarak izleyebilirsiniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"40px",right:"40px"}),Interaction.appendStatus({bottom:"50px",right:"150px"}),Interaction.shapeIndex=0,Interaction.generateScenarios(),Interaction.matrix=Util.createProjectionMatrixForObjectAt(250,150),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.pause(),Interaction.resume(3e3),Interaction.button.className="next_button",Interaction.button.onclick=Interaction.prepareNextQuestion,Main.interactionProject.activeLayer.removeChildren(),Interaction.createRectanglePrisim(),Interaction.playScenerio(Interaction.Scenarios[9]),Interaction.shapeIndex=++Interaction.shapeIndex%Interaction.Scenarios.length},createRectanglePrisim:function(){var e=new ExpandablePrism(350,225,100,Interaction.matrix);e.fillColor=new RgbColor(1,1,1,.5),e.project()},playScenerio:function(e){for(var t=0;t<e.length;t++){switch(e[t].type){case"point":n(e[t]);break;case"line":i(e[t]);break;case"surface":r(e[t]);break;case"dashedLine":s(e[t])}function n(e){var t=Util.project(e.from,Interaction.matrix).showOnCanvas(5);if(e.to)for(var n=0;n<e.to.length;n++)t.animate({style:{position:Util.project(e.to[n],Interaction.matrix)},duration:1e3,delay:1e3*(n+1)})}function r(e){var t=new Surface(e.points);t.shape={strokeColor:new RgbColor(65/255,129/255,138/255,.5),fillColor:new RgbColor(168/255,219/255,227/255,.5)},t.project(Interaction.matrix);var n=new AnimationHelper({angle:0});(e.rotateX||e.rotateY||e.rotateZ)&&n.animate({style:{angle:Math.PI*2},duration:2e3,delay:1500,init:function(){e.rotateX?t.pivotsX[0]=e.rotateX:e.rotateY?t.pivotsY[0]=e.rotateY:t.pivotsZ[0]=e.rotateZ},update:function(){e.rotateX?t.rotationsX[0]=this.angle:e.rotateY?t.rotationsY[0]=this.angle:t.rotationsZ[0]=this.angle,t.project(Interaction.matrix)}})}function i(e){var t=Util.centerOfPoints([Util.project(e.point1,Interaction.matrix),Util.project(e.point2,Interaction.matrix)]),n=t.showOnCanvas(5);n.animate({style:{position:Util.project(e.point1,Interaction.matrix)},duration:1e3,delay:100}),n.set_style({fillColor:"#41818"});var r=t.showOnCanvas(5);r.animate({style:{position:Util.project(e.point2,Interaction.matrix)},duration:1e3,delay:100}),r.set_style({fillColor:"#41818"});var i=new AnimationHelper({line:null,point1:t,point2:t});i.animate({style:{point1:Util.project(e.point1,Interaction.matrix),point2:Util.project(e.point2,Interaction.matrix)},duration:1e3,delay:100,update:function(){this.line&&this.line.remove(),this.line=new Path.Line(this.point1,this.point2),this.line.set_style({strokeColor:"#41818A",strokeWidth:2})}});if(e.rotateX||e.rotateY||e.rotateZ){var s=new AnimationHelper({angle:0});s.animate({style:{angle:Math.PI*2},duration:2e3,delay:1500,update:function(){if(e.rotateX)var t=Util.project(e.point1.getRotatedPointByX(this.angle),Interaction.matrix),s=Util.project(e.point2.getRotatedPointByX(this.angle),Interaction.matrix);else if(e.rotateY)var t=Util.project(e.point1.getRotatedPointByY(this.angle),Interaction.matrix),s=Util.project(e.point2.getRotatedPointByY(this.angle),Interaction.matrix);else var t=Util.project(e.point1.getRotatedPointByY(this.angle),Interaction.matrix),s=Util.project(e.point2.getRotatedPointByY(this.angle),Interaction.matrix);i.line&&i.line.remove(),i.line=new Path.Line(t,s),i.line.set_style({strokeColor:"#41818A",strokeWidth:2}),n.position=t,r.position=s}})}}function s(e){this.line=new Path.Line(Util.project(e.point1,Interaction.matrix),Util.project(e.point2,Interaction.matrix)),this.line.set_style({strokeColor:new RgbColor(65/255,129/255,138/255,1),dashArray:[3,2]})}}},generateScenarios:function(){Interaction.Scenarios=[[{type:"point",from:new Point3(-70,0,20),to:[new Point3(70,75,20),new Point3(140,-70,50)]}],[{type:"point",from:new Point3(-110,45,20),to:[new Point3(100,10,20)]},{type:"point",from:new Point3(150,75,35),to:[new Point3(-50,-70,45)]}],[{type:"line",point1:new Point3(-50,95,45),point2:new Point3(125,-45,36)}],[{type:"line",point1:new Point3(-125,95,45),point2:new Point3(125,-45,36)},{type:"line",point1:new Point3(-125,125,100),point2:new Point3(125,-15,100)}],[{type:"line",point1:new Point3(-120,50,30),point2:new Point3(120,-50,65)},{type:"line",point1:new Point3(-120,-50,30),point2:new Point3(120,50,65)}],[{type:"surface",points:[new Point3(-100,-50,-20),new Point3(-100,50,-20),new Point3(100,50,20),new Point3(100,-50,20)]}],[{type:"surface",points:[new Point3(-120,-50,0),new Point3(-120,50,0),new Point3(80,50,40),new Point3(80,-50,40)],rotateY:new Point3(0,0,0)},{type:"surface",points:[new Point3(-100,-50,-20),new Point3(-100,50,-20),new Point3(100,50,20),new Point3(100,-50,20)],rotateY:new Point3(0,0,0)}],[{type:"dashedLine",point1:new Point3(100,0,0),point2:new Point3(-100,0,0),rotateX:new Point3(0,0,0)},{type:"surface",points:[new Point3(-100,0,-50),new Point3(100,0,-50),new Point3(100,0,50),new Point3(-100,0,50)],rotateX:new Point3(0,0,0)},{type:"surface",points:[new Point3(-100,-50,0),new Point3(-100,50,0),new Point3(100,50,0),new Point3(100,-50,0)],rotateX:new Point3(0,0,0)}],[{type:"surface",points:[new Point3(-100,0,-50),new Point3(100,0,-50),new Point3(100,0,50),new Point3(-100,0,50)],rotateX:new Point3(0,0,0)},{type:"line",point1:new Point3(-80,-50,-30),point2:new Point3(80,-50,65),rotateX:new Point3(0,0,0)}],[{type:"line",point1:new Point3(-80,-70,-30),point2:new Point3(80,70,30),rotateX:new Point3(0,0,0)},{type:"point",from:new Point3(0,0,0)},{type:"surface",points:[new Point3(-100,0,-50),new Point3(100,0,-50),new Point3(100,0,50),new Point3(-100,0,50)],rotateX:new Point3(0,0,0)}]]},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
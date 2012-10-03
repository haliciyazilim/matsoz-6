var Interaction={getFramework:function(){return"paper"},images:[],PARALLEL:"paralel olan",ORTHOGONAL:"dik kesişen",init:function(e){Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"0px",right:"10px"}),Interaction.appendStatus({bottom:"10px",right:"150px",lineHeight:"30px",backgroundColor:"rgba(255,255,255,0.7)"}),Interaction.createTool(),Interaction.prepareNextQuestion()},nextQuestion:function(){Interaction.button.style.display="none",Main.interactionProject.activeLayer.removeChildren(),Interaction.selectedLine1=null,Interaction.selectedLine2=null,Interaction.questionType=Util.rand01()==1?Interaction.PARALLEL:Interaction.ORTHOGONAL,Main.setObjective("Yandaki düzlemde yer alan doğrulardan<br/> <strong>"+Interaction.questionType+"</strong> <br/> iki doğruyu belirleyiniz."),Interaction.generateLines()},generateLines:function(){var e=new Point(0,0),t=new Point(590,300);Interaction.rectangle&&Interaction.rectangle.remove(),Interaction.rectangle=new Path.Rectangle(e,t),Interaction.rectangle.set_style(interactionRectangleStyle);var n=0,r=[];do{var i=Util.randomInteger(0,5);i=Util.randomInteger(0,3);var s=e.add(new Point(Util.randomInteger(1,15)*40,Util.randomInteger(1,10)*30)),o=(new Point(Util.randomInteger(20,40)*10,Util.randomInteger(-30,30)*10)).add(s.x,0);if(!Interaction.rectangle.contains(s)||!Interaction.rectangle.contains(o))continue;switch(n%4){case 0:var u=Util.randomInteger(20,100);if(!Interaction.rectangle.bounds.contains(s.add(0,u))||!Interaction.rectangle.bounds.contains(o.add(0,u)))continue;r.push([s.add(0,u),o.add(0,u)]),n+=2,r.push([s,o]);break;case 1:r.push([s,o]),n++;break;case 2:var a=Util.centerOfPoints([s,o]);if(!Interaction.rectangle.bounds.contains(s.getRotatedPoint(90,a))||!Interaction.rectangle.bounds.contains(o.getRotatedPoint(90,a)))continue;r.push([s.getRotatedPoint(90,a),o.getRotatedPoint(90,a)]),r.push([s,o]),n+=2;break;case 3:default:n++}}while(n<10);var f=Util.getShuffledArray(r.length);Interaction.lines=[];for(var l=0;l<f.length;l++){var s=r[f[l]][0],o=r[f[l]][1],c=(new Path.Line(s,o)).set_style(interactionLineStyle).set_style({className:"line"});Interaction.lines.push(c),c.p1=s,c.p2=o;switch(l%3){case 0:c.strokeColor=new RgbColor(1,.56,Math.random());break;case 1:c.strokeColor=new RgbColor(Math.random(),1,.56);break;case 2:c.strokeColor=new RgbColor(.56,Math.random(),1)}c.strokeColor=new RgbColor(.3,.3,.3,.8),c.isParallelTo=function(e){return Math.abs(Math.round(this.getDotProductWith(e)*1e6))==1e6},c.isOrthogonalTo=function(e){return Math.abs(Math.round(this.getDotProductWith(e)*1e6))==0},c.getDotProductWith=function(e){var t=this.p1.subtract(this.p2).normalize(),n=e.p1.subtract(e.p2).normalize();return t.dot(n)},c.highlight=function(){var e=this.clone();e.set_style({strokeWidth:this.strokeWidth*2,strokeColor:"#fff"}),this.originalStrokeColor=this.strokeColor,this.insertAbove(e)}}},createTool:function(){var e=new Tool;e.setHitTestOptions({fill:!0,stroke:!0,segments:!0,tolerance:6}),e.onMouseDown=function(e){if(e.item&&e.item.className=="line"){var t=!1;if(Interaction.selectedLine1==null)Interaction.selectedLine1=e.item;else{if(Interaction.selectedLine2!=null||Interaction.selectedLine1.id==e.item.id)return;Interaction.selectedLine2=e.item,t=!0}e.item.highlight(),e.item.set_style(interactionLineSelectedStyle),t&&Interaction.button.click()}}},preCheck:function(){},isAnswerCorrect:function(e){if(Interaction.questionType==Interaction.PARALLEL)return Interaction.selectedLine1.isParallelTo(Interaction.selectedLine2);if(Interaction.questionType==Interaction.ORTHOGONAL)return Interaction.selectedLine1.isOrthogonalTo(Interaction.selectedLine2)},onCorrectAnswer:function(){Interaction.selectedLine1.set_style(interactionLineCorrectStyle),Interaction.selectedLine2.set_style(interactionLineCorrectStyle),Interaction.button.style.display="block"},onWrongAnswer:function(){var e=Interaction.selectedLine1.strokeColor,t=Interaction.selectedLine2.strokeColor;Interaction.selectedLine1.set_style(interactionLineWrongStyle),Interaction.selectedLine2.set_style(interactionLineWrongStyle),console.log(e),Interaction.selectedLine1.animate({style:{strokeColor:Interaction.selectedLine1.originalStrokeColor},duration:1e3,delay:1e3,callback:function(){Interaction.selectedLine1=null}}),Interaction.selectedLine2.animate({style:{strokeColor:Interaction.selectedLine2.originalStrokeColor},duration:1e3,delay:1e3,callback:function(){Interaction.resume(),Interaction.selectedLine2=null}})},onFail:function(){Interaction.setStatus("Yanlış cevap doğrusu yeşil renk ile gösterilmiştir.",!1),Interaction.selectedLine1.set_style(interactionLineWrongStyle),Interaction.selectedLine2.set_style(interactionLineWrongStyle),Interaction.pause();for(var e=0;e<Interaction.lines.length;e++)for(var t=0;t<Interaction.lines.length;t++){if(e==t)continue;Interaction.questionType==Interaction.PARALLEL?Interaction.lines[t].isParallelTo(Interaction.lines[e])&&(Interaction.selectedLine1=Interaction.lines[t],Interaction.selectedLine2=Interaction.lines[e]):Interaction.lines[t].isOrthogonalTo(Interaction.lines[e])&&(Interaction.selectedLine1=Interaction.lines[t],Interaction.selectedLine2=Interaction.lines[e])}Interaction.selectedLine1.animate({style:{strokeColor:interactionLineCorrectStyle.strokeColor,strokeWidth:interactionLineStyle.strokeWidth*2},duration:1e3,delay:1e3,update:function(){Interaction.selectedLine2.set_style({strokeWidth:this.strokeWidth,strokeColor:this.strokeColor})},callback:function(){Interaction.selectedLine1.highlight(),Interaction.selectedLine2.highlight(),Interaction.resume()}}),Interaction.button.style.display="block"}};
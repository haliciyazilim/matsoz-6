var Interaction={getFramework:function(){return"paper"},images:[{id:"dropable_default",src:"/assets/animations/cokgenler/dropable_default.png"},{id:"dropable_hover",src:"/assets/animations/cokgenler/dropable_hover.png"},{id:"dropable_false",src:"/assets/animations/cokgenler/dropable_false.png"},{id:"dropable_true",src:"/assets/animations/cokgenler/dropable_true.png"}],init:function(e){Main.setObjective("Yandaki çokgenleri sınıflandırınız."),Interaction.container=e,Interaction.container.top=$(e).offset().top,Interaction.container.left=$(e).offset().left;var t=$(Interaction.container).width(),n=$(Interaction.container).height();project.activeLayer.removeChildren(),Interaction.dropableShapes={setImage:function(e){Interaction.dropableShapes.triangle.setImage($("#"+e).get(0)),Interaction.dropableShapes.rectangle.setImage($("#"+e).get(0)),Interaction.dropableShapes.pentagon.setImage($("#"+e).get(0)),Interaction.dropableShapes.hexagon.setImage($("#"+e).get(0))},hitTest:function(e){if(Interaction.dropableShapes.triangle.bounds.contains(e))return Interaction.dropableShapes.triangle;if(Interaction.dropableShapes.rectangle.bounds.contains(e))return Interaction.dropableShapes.rectangle;if(Interaction.dropableShapes.pentagon.bounds.contains(e))return Interaction.dropableShapes.pentagon;if(Interaction.dropableShapes.hexagon.bounds.contains(e))return Interaction.dropableShapes.hexagon}},Interaction.shuffledArray=null,createDropableShapesLeft(10,0,t*.2,n*.8),createDropableShapesRight(t*.8-10,0,t*.2,n*.8),generateRandomShapes(t*.25,10,t*.55,n),Interaction.paper={width:500,height:300},Interaction.preventDrag=!1,Interaction.status==null||Interaction.status=="undefined"?(Interaction.status=document.createElement("div"),Interaction.status.className="status_true",$(Interaction.status).css({position:"absolute",bottom:"10px",left:"0px",paddingLeft:"20px",width:"100%"}),Interaction.container.appendChild(Interaction.status)):Interaction.setStatus("");var r=new Tool;r.setHitTestOptions({fill:!0,stroke:!0,segments:!0,tolerance:2,"class":"draggable"}),r.onMouseDown=function(e){e.item&&(r.shape=e.item,e.item.start())},r.onMouseDrag=function(e){r.shape&&r.shape.move(e.delta.x,e.delta.y,e.point.x,e.point.y)},r.onMouseUp=function(e){r.shape&&r.shape.up(),r.shape=null},r.activate()},nextQuestion:function(e){},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
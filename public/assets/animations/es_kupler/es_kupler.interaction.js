var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki eş küplerle oluşturulmuş şeklin istenen yönde görünümünü kareli bölgeye çiziniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"15px",right:"40px"}),Interaction.appendStatus({bottom:"25px",right:"150px"}),Interaction.grids=new InteractiveGrids({position:new Point(332.5,15.5),size:27,style:{strokeColor:"#AAA"},pieceType:2,pieceStyle:{strokeWidth:2,strokeColor:"#000"}}),Interaction.grids.createTool("ShapePattern"),Interaction.prepareNextQuestion()},nextQuestion:function(e){},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
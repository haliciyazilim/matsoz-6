var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective('Yandaki tablonun başlığını yazınız. Tablodaki bölümlerden en az ilk üçünü doldurunuz. Tabloyu 0 ile 10 arasındaki değerlerle doldurup "Oluştur" düğmesine basınız ve grafiği oluşturunuz.'),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"30px",right:"150px",width:"350px",height:"30px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective('Yandaki tablonun başlığını yazınız. Tablodaki bölümlerden en az ilk üçünü doldurunuz. Tabloyu 0 ile 10 arasındaki değerlerle doldurup "Oluştur" düğmesine basınız ve grafiği oluşturunuz.'),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"30px",right:"150px",width:"350px",height:"30px"}),Interaction.appendInput({position:"absolute",top:"20px",left:"400px",width:"150px",height:"30px",fontSize:"12px",color:"#757575"},!1,!1),$(Interaction.container).append(Interaction.input),Interaction.input.onfocus=function(){this.value=="Tablo basligini giriniz."&&(this.value="",$(Interaction.input).css({color:"#000000",fontSize:"12px"}))},Interaction.input.onblur=function(){this.value==""&&(this.value="Tablo basligini giriniz.",$(Interaction.input).css({color:"#757575",fontSize:"12px"}))},$(Interaction.input).attr("maxLength",30);var t=["Pazartesi","Sali","Carsamba","Persembe"],n=["10","8","6","4","2","0"],r=[9,3,7,8],i={justification:"right",rotation:-90},s={xAxisName:"Zaman",yAxisName:"Satis fiyati",xGridLabelStyle:i,xLabels:t,yLabels:n,data:r};columnGraph(new Point(40,50),s.xLabels.length*50,120,s,undefined,1e3,1e3),Interaction.disableAutoFocus(),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.input.focus(),Interaction.input.blur()},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
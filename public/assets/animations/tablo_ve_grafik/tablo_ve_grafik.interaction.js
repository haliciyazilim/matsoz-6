var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective('Yandaki tablonun başlığını yazınız. Tablodaki bölümlerden en az ilk üçünü doldurunuz. Tabloyu 0 ile 10 arasındaki değerlerle doldurup "Oluştur" düğmesine basınız ve grafiği oluşturunuz.'),Interaction.paper={width:$(e).width(),height:$(e).height()},$(Interaction.container).append('<span id="table" style="position:absolute;top:31px;left:10px;font-size:12px;">Tablo:</span><span id="graph" style="position:absolute;top:14px;left:270px;opacity:0;">Grafik:</span> <button id="graphBtn" class="chart_button"></button><button id="repeatBtn" class="repeat_button_small"></button>'),$("#graphBtn").css({position:"absolute",top:"210px",left:"20px",opacity:1}),$("#repeatBtn").css({position:"absolute",top:"210px",left:"130px",opacity:1}),Interaction.appendStatus({bottom:"10px",left:"10px",width:"220px",height:"40px",textAlign:"center"}),Interaction.appendInput({position:"absolute",top:"20px",left:"47px",width:"183px",height:"30px",fontSize:"12px",color:"#757575"},!1,!1);var t=new PointText(new Point(30,65));t.justification="left",t.content="x ekseni";var n=new PointText(new Point(145,65));n.justification="left",n.content="y ekseni",$(Interaction.container).append(Interaction.input),Interaction.input.onfocus=function(){this.value=="Tablo başlığını giriniz"&&(this.value="",$(Interaction.input).css({color:"#000000",fontSize:"12px"}))},Interaction.input.onblur=function(){this.value==""&&(this.value="Tablo başlığını giriniz",$(Interaction.input).css({color:"#757575",fontSize:"12px"}))},$(Interaction.input).attr("maxLength",28);var r="",i="",s;for(var o=0;o<5;o++){var u=70+o*26;i=""+u+"px";for(var a=0;a<2;a++){s=o*2+a;var f=10+a*110;r=""+f+"px",o==0?Interaction.appendInput({position:"absolute",top:i,left:r,width:"110px",height:"26px",fontSize:"12px",backgroundColor:"#d9d9d9",fontWeight:"normal"},!1,!1):Interaction.appendInput({position:"absolute",top:i,left:r,width:"110px",height:"26px",fontSize:"12px",fontWeight:"normal"},!1,!1),s==0||s==1?$(Interaction.inputs[s+1]).attr("maxLength",10):$(Interaction.inputs[s+1]).attr("maxLength",20)}}for(var l=1;l<Interaction.inputs.length;l++)Interaction.inputs[l].onfocus=function(){$(this).css("z-index","100")},Interaction.inputs[l].onblur=function(){$(this).css("z-index","0")};Interaction.disableAutoFocus(),Interaction.prepareNextQuestion()},nextQuestion:function(e){for(var t=0;t<Interaction.inputs.length;t++)Interaction.inputs[t].value="";Interaction.titleText&&Interaction.titleText.remove(),Interaction.graphGroup&&Interaction.graphGroup.remove(),Interaction.emptyGroup&&Interaction.emptyGroup.remove(),$("#graph").css("opacity",0);var n=["","","",""],r=["","","","","","0"],i=[],s={justification:"right",rotation:-90},o={xAxisName:"x ekseni",yAxisName:"y ekseni",xGridLabelStyle:s,xLabels:n,yLabels:r,data:i};Interaction.emptyGroup=columnGraph(new Point(270,90),o.xLabels.length*50,120,o),enableInputsBox(),Interaction.inputs[0].focus(),Interaction.inputs[0].blur(),$("#repeatBtn").css("opacity",.4),$("#repeatBtn").get(0).onclick=null,$("#graphBtn").css("opacity",1),$("#graphBtn").get(0).onclick=Interaction.preCheck},preCheck:function(){return Interaction.inputs[0].value=="Tablo başlığını giriniz"?Interaction.setStatus("Lütfen tablo başlığını giriniz.",!1):Interaction.inputs[1].value==""||Interaction.inputs[2].value==""?Interaction.setStatus("Lütfen eksen başlıklarını doldurunuz.",!1):Interaction.inputs[3].value==""||Interaction.inputs[5].value==""?Interaction.setStatus("Lütfen en az iki sütunu doldurunuz.",!1):!Util.isInteger(Interaction.inputs[4].value)||!Util.isInteger(Interaction.inputs[6].value)?Interaction.setStatus("Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.",!1):Interaction.inputs[4].value<0||Interaction.inputs[4].value>10?Interaction.setStatus("Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.",!1):Interaction.inputs[6].value<0||Interaction.inputs[6].value>10?Interaction.setStatus("Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.",!1):Interaction.inputs[7].value==""&&Interaction.inputs[8].value!=""?Interaction.setStatus("Lütfen x eksenini eksiksiz doldurunuz.",!1):Interaction.inputs[9].value==""&&Interaction.inputs[10].value!=""?Interaction.setStatus("Lütfen x eksenini eksiksiz doldurunuz.",!1):Interaction.inputs[7].value!=""?!Util.isInteger(Interaction.inputs[8].value)||Interaction.inputs[8].value<0||Interaction.inputs[8].value>10?Interaction.setStatus("Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.",!1):Interaction.inputs[9].value!=""?!Util.isInteger(Interaction.inputs[10].value)||Interaction.inputs[10].value<0||Interaction.inputs[10].value>10?Interaction.setStatus("Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.",!1):(Interaction.setStatus(""),drawColumnGraph()):(Interaction.setStatus(""),drawColumnGraph()):(Interaction.setStatus(""),drawColumnGraph()),!1},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};
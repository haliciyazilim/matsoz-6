var Animation = {
	init:function(container){
		
			// Örnek Divi
		$(container).append("<div id='ornek'>");
			$("#ornek").css("width","100px")
			.css("height","130px")
			.css("margin","auto")
			.css("position","absolute")
			.css("left","200px")
			.css("top","30px")
			.css("font-size","18px");
			
		$(container).append("<div id='bolunen'>");
			$("#bolunen").css("width","55px")
			.css("position","absolute")
			.css("left","140px")
			.css("top","30px")
			.css("font-size","12px")
			.html("bölünen");
		
		$(container).append("<div id='bolen'>");
			$("#bolen").css("width","55px")
			.css("position","absolute")
			.css("left","290px")
			.css("top","30px")
			.css("font-size","12px")
			.html("bölen");
			
		$(container).append("<div id='bolum'>");
			$("#bolum").css("width","55px")
			.css("position","absolute")
			.css("left","290px")
			.css("top","56px")
			.css("font-size","12px")
			.html("bölüm");
		
		$(container).append("<div id='kalan'>");
			$("#kalan").css("width","55px")
			.css("position","absolute")
			.css("left","260px")
			.css("top","161px")
			.css("font-size","12px")
			.html("kalan").css("opacity","0");
		
		$(container).append("<div id='islemKontrolu'>");
			$("#islemKontrolu").css("width","90px")
			.css("position","absolute")
			.css("left","500px")
			.css("top","30px")
			.css("font-size","12px")
			.html("İşlem Kontrolü").css("opacity","0");
			
			
		
						
		
			
		$(container).append("<div id='saglama'>");
		$("#saglama").css("width","60px")
		.css("height","130px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		.css("left","450px")
		//.css("right","0")
		.css("top","50px");
	
	
	
	// saglama2	
	$(container).append("<div id='saglama2'>");
		$("#saglama2").css("width","80px")
		.css("height","130px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		.css("left","550px")
		//.css("right","0")
		.css("top","50px").css("opacity","0");
	
	
        
        Animation.islem=new LongMultiplication(261,32,"saglama",20);
        //var islem=new LongMultiplication(178,172,"ornek");
        //Animation.islem.doldur()
        //islem.basla(1000,1000);
	
        Animation.toplamaIslemi=new LongAddition(8352,5,"saglama2",20);
        //Animation.toplamaIslemi.doldur();
	//Animation.toplamaIslemi.basla(1000,800);
        
        
	Animation.ornekIslem = new LongDivision(8357,32,"#ornek");
			setTimeout('Animation.ornekIslem.nextStep(1000);',1000);
			setTimeout('Animation.ornekIslem.nextStep(1000);',3000);
			setTimeout('Animation.ornekIslem.nextStep(1000);',5000);
			setTimeout('Animation.ornekIslem.nextStep(1000);',7000);
			$("#kalan").delay(7000).animate({opacity:"1"},1000);
                        setTimeout('Animation.islem.doldur()',8000);
                        setTimeout('Animation.islem.basla(1000,1000);',8000);
                        setTimeout('Animation.toplamaIslemi.doldur();',40000);
                        setTimeout('Animation.toplamaIslemi.basla(1000,1000);',40000);
			$("#saglama, #saglama2, #islemKontrolu").delay(7500).animate({opacity:"1"},1000);
	
	
	Main.animationFinished(49000);
	
	}
	
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective(' Yandaki bölme işlemini yapınız ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.soruSirasi=0;
			Interaction.dogruCevapRengi="green";
			
			// Ana Div
		$(Interaction.container).append("<div id='soru'>");
			$("#soru").css("width","120px")
			.css("height","130px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","0")
			.css("right","0")
			.css("top","10px")
			.css("font-size","20px");
			//.css("border","solid 1px black");
			
			
			// Cevap Divi
		$(Interaction.container).append("<div id='cevap'>");
			$("#cevap").css("width","120px")
			.css("height","130px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","370px")
//			.css("right","0")
			.css("top","10px")
			.css("font-size","20px").css("opacity","0");
			//.css("border","solid 1px black");
			
			Interaction.appendButton({bottom:"40px", right:"40px"});
			Interaction.appendStatus({bottom:"50px", right:"200px"});
			
			NormalBolmeIslemi=function(bolen, bolunen, div){
					this.bolen=bolen;
					this.bolunen=bolunen;
					
					//this.bolen=493;
					//this.bolunen=6141;
					this.sonuc=Math.floor(this.bolunen/this.bolen);
					this.div="#"+div
					this.yap=function(){
					var bolmeIslemi= new LongDivision(this.bolunen,this.bolen,this.div);
					
					
					
					asamalarArray=new Array();
					asamaSonuclari=new Array();
					asamaUp= new Array();
					asamaDown=new Array();
			i=0;
			while(true){
				
				asama=bolmeIslemi.nextStep();
				if(asama == null)
					break;
					
				asamalarArray[i]=asama;
				
				i++;
					
			}
			
			if(this.div=="#soru"){
				//$("#soru #answer").html("<input class='input' isNumber='true' type='text' maxlength=4></input>");
				//Interaction.inputs.push($("#soru #answer input", asamalarArray[0]).get(0));
				
				var girdi=Interaction.appendInput({
					left:"62px",
					//width:"80px",
					fontSize:"20px",
					},true,true);
				$(Interaction.inputs[0]).attr('maxlength', '5')
				$("#soru #answer",Interaction.container).append(girdi);
			}
			
			//console.log(asamalarArray[2]);
			for(var i=0; i < asamalarArray.length;i++){
				
				var sonuc=$(".up", asamalarArray[i]).html();
				asamaUp[i]=sonuc;
				console.log("icerik"+sonuc);
				//$(".up", asama).html("<input></input>");
				
				
				var kalan=$(".down", asamalarArray[i]).html();
				asamaDown[i]=kalan;
				console.log("icerik"+kalan);
				//$(".down", asama).html("<input></input>");
				if(this.div=="#soru"){
				console.log($(".down", asamalarArray[i]).html());
				$(".up", asamalarArray[i]).html("<input class='input' isNumber='true' type='text' maxlength=4></input>");
				Interaction.inputs.push($(".up input", asamalarArray[i]).get(0));
				
				$(".down", asamalarArray[i]).html("<input class='input' isNumber='true' type='text' maxlength=4></input>");
				Interaction.inputs.push($(".down input", asamalarArray[i]).get(0));
				}
				else
					$("#cevap .up, #cevap .down").css("color",Interaction.dogruCevapRengi);

			}
			$("#soru .input")
				.css("width","50px")
				.css("font-size","20px")
				.css("text-align","left")
				.css("z-index","5");
				
			$("#soru .up")
				.css("margin-bottom","12px")
				//.css("margin-top","28px");
				
			$("#soru .step")
				.css("height","68px");
				
				
			$("#soru .step:first").css("width","60px")
				//.css("margin-top","28px");
				
				
						};
			};
			
			
			BolensizBolmeIslemi=function(bolen, bolunen, div){
				this.bolunen=bolunen;
				this.bolen=bolen;
				this.div="#"+div;
				this.yap=function(){
					bolmeIslemi= new LongDivision(this.bolunen,this.bolen,this.div);
					console.log(bolmeIslemi.nodes.dividend);
					
					console.log("bolen: "+this.bolen+" bölünen: "+this.bolunen);
					
					
					asamalarArray=new Array();
					asamaSonuclari=new Array();
					asamaUp= new Array();
					asamaDown=new Array();
					i=0;
					while(true){
						
						asama=bolmeIslemi.nextStep();
						if(asama == null)
							break;
							
						asamalarArray[i]=asama;
						
						i++;
							
					}
					//console.log(asamalarArray[2]);
					for(var i=0; i < asamalarArray.length;i++){
						
						var sonuc=$(".up", asamalarArray[i]).html();
						asamaUp[i]=sonuc;
						console.log("icerik"+sonuc);
						//$(".up", asama).html("<input></input>");
						
						
						var kalan=$(".down", asamalarArray[i]).html();
						asamaDown[i]=kalan;
						console.log("icerik"+kalan);
						//$(".down", asama).html("<input></input>");
						
						console.log($(".down", asamalarArray[i]).html());
						$(".up", asamalarArray[i]).html(" ");
						//Interaction.inputs.push($(".up input", asamalarArray[i]).get(0));
						
						if(asamalarArray.length-1==i)
							$(".down", asamalarArray[i]).html();
						else
							$(".down", asamalarArray[i]).html(" ");
						//Interaction.inputs.push($(".down input", asamalarArray[i]).get(0));
		
					}
					if(this.div=="#soru"){
					var input=Interaction.appendInput({
							width: '50px',
							fontSize: '20px', 
						});
					$(Interaction.inputs[0]).attr('maxlength', '3')
					$("#soru #divisor").html(input).css("height","35px");
					$("#soru #divisor input").css("margin-left","3px");
					}
					else
						$("#cevap #divisor").css("color",Interaction.dogruCevapRengi);
					};
						
			};
			
			BolunensizBolmeIslemi=function(bolen, bolunen, div){
				this.bolunen=bolunen;
				this.bolen=bolen;
				this.div="#"+div;
				this.yap=function(){
					bolmeIslemi= new LongDivision(this.bolunen,this.bolen,this.div);
					console.log(bolmeIslemi.nodes.dividend);
					
					console.log("bolen: "+this.bolen+" bölünen: "+this.bolunen);
					
					
					asamalarArray=new Array();
					asamaSonuclari=new Array();
					asamaUp= new Array();
					asamaDown=new Array();
					i=0;
					while(true){
						
						asama=bolmeIslemi.nextStep();
						if(asama == null)
							break;
							
						asamalarArray[i]=asama;
						
						i++;
							
					}
					//console.log(asamalarArray[2]);
					for(var i=0; i < asamalarArray.length;i++){
						
						var sonuc=$(".up", asamalarArray[i]).html();
						asamaUp[i]=sonuc;
						console.log("icerik"+sonuc);
						//$(".up", asama).html("<input></input>");
						
						
						var kalan=$(".down", asamalarArray[i]).html();
						asamaDown[i]=kalan;
						console.log("icerik"+kalan);
						//$(".down", asama).html("<input></input>");
						
						console.log($(".down", asamalarArray[i]).html());
						$(".up", asamalarArray[i]).html(" ");
						//Interaction.inputs.push($(".up input", asamalarArray[i]).get(0));
						
						if(asamalarArray.length-1==i)
							$(".down", asamalarArray[i]).html();
						else
							$(".down", asamalarArray[i]).html(" ");
						//Interaction.inputs.push($(".down input", asamalarArray[i]).get(0));
		
					}
					if(this.div=="#soru"){
						var input=Interaction.appendInput({
								width: '50px',
								fontSize: '20px', 
							});
						$(Interaction.inputs[0]).attr('maxlength', '4')
						$("#soru #dividend").html(input);
					}
					else
						$("#cevap #dividend").css("color",Interaction.dogruCevapRengi);

						
					$("#soru .up")
						.css("margin-bottom","12px")
						//.css("margin-top","28px");
						
					$("#soru .step")
						.css("height","68px")
						//.css("margin-top","28px");
				
					};
						
			};
						
			
			
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
		
		soruId=0;
			function yeniSoru(){
				if(Interaction.soruSirasi<9){
					soruId++;
					soruGetir(soruId);
				}
				else
					randomSoruGetir();	
			}
			$("#cevap").animate({opacity:"0"},1000);
			$("#soru").delay(800).animate({right:"0px"},1000);
			
			function randomSoruGetir(){
				console.log("random moddayim");
				var randomSayi=Math.floor(Math.random()*9);
				
				
				soruId=randomSayi;
				console.log("soru id: "+soruId);
				soruGetir(soruId);
			}
			
			function soruGetir(soruId){
				$("#soru",Interaction.container).html("");
				bolunen= Math.floor(Math.random()*9000+999);
				bolen=Math.floor(Math.random()*990+9);
				Interaction.inputs=new Array();
				console.log(Interaction.soruSirasi+". soru");
					switch(soruId){
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							normalIslem= new NormalBolmeIslemi(bolen,bolunen, "soru");
							normalIslem.yap();
							break;
						case 6:
						case 7:
							console.log("7 bolen: "+bolen+" bölünen: "+bolunen);
							bolunensizIslem=new BolunensizBolmeIslemi(bolen,bolunen, "soru");
							bolunensizIslem.yap();
							console.log("bolunen"+ bolunensizIslem.bolunen);
							break;
							
						case 8:
						case 9:
							console.log("9bolen: "+bolen+" bölünen: "+bolunen);
							bolensizIslem=new BolensizBolmeIslemi(bolen,bolunen,"soru");
							bolensizIslem.yap();
							console.log("bolunen"+ bolensizIslem.bolunen);
							break;
					}	
			}
		
		Interaction.soruSirasi++;
		yeniSoru();
				
		},
	isAnswerCorrect : function(values){
		var denetim=true;
		//console.log("valu: "+values+" bolunen: "+bolensizIslem.bolunen);
		switch(soruId){
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				
				for(var i=0; i<asamaUp.length; i++){
					console.log(i+") sonuc val "+values[0]);
					console.log("sonuc"+normalIslem.sonuc);
					console.log(i+") up val "+values[i+1]);
					console.log(i+") up "+asamaUp[i]);
					console.log(i+") down val "+values[2*i+1]);
					console.log(i+") down "+parseInt(asamaDown[i],10));
					
					
					console.log(i+") val"+values[1]);
					console.log(i+") val"+values[2]);
					console.log(i+") val"+values[3]);
					console.log(i+") val"+values[4]);
					//if(parseInt(values[0],10)===parseInt(normalIslem.sonuc,10) && parseInt(values[i+1],10)===parseInt(asamaUp[i],10) && parseInt(values[i+2],10)===parseInt(asamaDown[i]),10){
					if((parseInt(values[0],10)==parseInt(normalIslem.sonuc,10)) && (parseInt(values[2*i+1],10)==parseInt(asamaUp[i],10)) && (parseInt(values[2*i+2],10)==parseInt(asamaDown[i],10))){
						console.log("denetim true");
						denetim=true;
					}
					else{
						console.log("denetim false");
						denetim=false;
						break;
					}
				}
				if (denetim==false)
						return false;
				else
					return true;
				break;
			case 6:
			case 7:
				if(parseInt(values,10)==parseInt(bolunensizIslem.bolunen,10)){
				console.log("valu: "+values+" bolunen: "+bolunensizIslem.bolunen);
				return true;
				}
				break;
			case 8:
			case 9:
				if(parseInt(values,10)==parseInt(bolunensizIslem.bolen,10)){
				console.log("valu: "+values+" bolunen: "+bolensizIslem.bolen);
				return true;
				}
				break;
		}
					
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		
		},
	onFail : function(){
            
            function callNextStep(){
                                        var div = Interaction.cevap1.nextStep(1000);
                                        if(div!=null)
                                                setTimeout(callNextStep,1500);
                                        else{
                                                Interaction.pause = false;
                                                
                                        }
                                }
                                
		switch(soruId){
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				
				
				var cBolunen=normalIslem.bolunen;
				var cBolen=normalIslem.bolen;
//				cevapIslem= new NormalBolmeIslemi(cBolen,cBolunen, "cevap");
//				cevapIslem.yap();

                                Interaction.cevap1 = new LongDivision(cBolunen,cBolen,"#cevap");
                                
                                
                                //Interaction.cevap1.nextStep(1000);
                                
                                
                                setTimeout(function(){callNextStep()},500);
				
				break;
			case 6:
			case 7:
				var cBolunen=bolunensizIslem.bolunen;
				var cBolen=bolunensizIslem.bolen;
				
//                                cevapIslem= new BolunensizBolmeIslemi(cBolen,cBolunen, "cevap");
//				cevapIslem.yap();
				
                                Interaction.cevap1 = new LongDivision(cBolunen,cBolen,"#cevap");
                                
				break;
			case 8:
			case 9:
				var cBolunen=bolensizIslem.bolunen;
				var cBolen=bolensizIslem.bolen;
//				cevapIslem= new BolensizBolmeIslemi(cBolen,cBolunen, "cevap");
//				cevapIslem.yap();
				
                                Interaction.cevap1 = new LongDivision(cBolunen,cBolen,"#cevap");
                                
				break;
		}
		$("#soru").animate({right:"250px"},1000);
		$("#cevap").delay(500).animate({opacity:"1",},1000);
		Interaction.setStatus('Yanlış cevap, doğrusu sağ tarafta.',false);
		
		},
}

// Interaction Constants
var NUMBER_OF_INTERACTION_TYPES = 7;
var PATTERN_SIZE = 7;

var showAnswer = function (container, totalDelay, numbers, operations, patternDivs, isPower) {
	
	if (isPower != true) isPower = false;
	
	$("#"+container).append("<div class=mult1></div>");
	$("#"+container+" .mult1").css({
		position: 'absolute',
		left: '0px',
		top: '0px',
	})
	
	$("#"+container+" .mult1").append("<span class=mult1_1>"+numbers[0]+"</span>")
	$("#"+container+" .mult1").append("<span class=mult1_2><span class='constMult'> "+operations[0]+" </span>= </span>")
	
	if (!isPower) {
		$("#"+container+" .mult1").append("<span class=mult1_3>"+numbers[1]+"</span>")
	} else {
		$("#"+container+" .mult1").append("<span class=mult1_3>"+numbers[0]*numbers[0]+"</span>")
	}

	$("#"+container+" .mult1_2 .constMult").css({
		color: '#f00'
	});

	$("#"+container+" .mult1_1").css('opacity', 0);
	$("#"+container+" .mult1_2").css('opacity', 0);
	$("#"+container+" .mult1_3").css('opacity', 0);

	
	$("#"+container).append("<div class=mult2></div>");
	$("#"+container+" .mult2").css({
		position: 'absolute',
		left: $("#"+container+" .mult1_3").offset().left - $("#"+container).offset().left,
		top: '32px',
	})
	
	if (isPower) $("#"+container+" .mult1_1").css("color", "red");
	
	
	$("#"+container+" .mult2").append("<span class=mult2_1>"+numbers[1]+"</span>")
	$("#"+container+" .mult2").append("<span class=mult2_2><span class='constMult'> "+operations[1]+" </span>= </span>")
	
	if (!isPower) {
		$("#"+container+" .mult2").append("<span class=mult2_3>"+numbers[2]+"</span>")
	} else {
		$("#"+container+" .mult2").append("<span class=mult2_3>"+numbers[1]*numbers[1]+"</span>")
	}

	$("#"+container+" .mult2_1").css({
		position: "relative",
		top: isPower ? "0px" : "-32px"
	});
	
	if (isPower) $("#"+container+" .mult2_1").css("color", "red");
	
	$("#"+container+" .mult2_2 .constMult").css({
		color: '#f00'
	});

	$("#"+container+" .mult2_1").css('opacity', 0);
	$("#"+container+" .mult2_2").css('opacity', 0);
	$("#"+container+" .mult2_3").css('opacity', 0);
	
	
	$("#"+container).append("<div class=mult3></div>");
	$("#"+container+" .mult3").css({
		position: 'absolute',
		left: $("#"+container+" .mult2_3").offset().left - $("#"+container).offset().left,
		top: '64px',
	})
	
	$("#"+container+" .mult3").append("<span class=mult3_1>"+numbers[2]+"</span>")
	$("#"+container+" .mult3").append("<span class=mult3_2><span class='constMult'> "+operations[2]+" </span>= </span>")

	if (!isPower) {
		$("#"+container+" .mult3").append("<span class=mult3_3>"+numbers[3]+"</span>")
	} else {
		$("#"+container+" .mult3").append("<span class=mult3_3>"+numbers[2]*numbers[2]+"</span>")
	}
	
	$("#"+container+" .mult3_1").css({
		position: "relative",
		top: isPower ? "0px" : "-32px"
	});
	
	if (isPower) $("#"+container+" .mult3_1").css("color", "red");
	
	$("#"+container+" .mult3_2 .constMult").css({
		color: '#f00'
	});

	$("#"+container+" .mult3_1").css('opacity', 0);
	$("#"+container+" .mult3_2").css('opacity', 0);
	$("#"+container+" .mult3_3").css('opacity', 0);
	
	
	delay = 200;
	duration = 1000;
	
	$("#" + patternDivs[0] + " .num").delay((totalDelay += duration + delay) + (isPower ? 1000 : 0)).animate({
		color: '#f00'
	}, duration);
	$("#"+container+" .mult1_1").delay(totalDelay+100).animate({
		opacity: 1
	}, duration+200);
	
	$("#" + patternDivs[1] + " .num").delay((totalDelay += duration + delay) + (isPower ? 4000 : 0)).animate({
		color: '#f00'
	}, duration);
	$("#"+container+" .mult1_3").delay(totalDelay+100).animate({
		opacity: 1
	}, duration + 200);
	
	$("#"+container+" .mult1_2").delay(totalDelay += duration + delay).animate({
		opacity: 1
	}, duration+200);
	
	
	$("#"+container+" .mult2_1").delay(totalDelay += duration + delay - 200).animate({
		opacity: 1
	}, 200);
	
	$("#" + patternDivs[0] + " .num").delay((duration + delay)*2).animate({
		color: "#000"
	}, duration);
	
	$("#"+container+" .mult2_1").delay(duration + delay).animate({
		top: "0px"
	}, duration);
	
	
	$("#" + patternDivs[2] + " .num").delay((totalDelay += duration + duration + delay) + (isPower ? 4000 : 0)).animate({
		color: '#f00'
	}, duration);
	
	$("#"+container+" .mult2_3").delay(totalDelay+100).animate({
		opacity: 1
	}, duration + 200);
	
	$("#"+container+" .mult2_2").delay(totalDelay += duration + delay).animate({
		opacity: 1
	}, duration);
	
	
	$("#"+container+" .mult3_1").delay(totalDelay += duration + delay - 200).animate({
		opacity: 1
	}, 200);
	
	$("#" + patternDivs[1] + " .num").delay((duration + delay)*5).animate({
		color: "#000"
	}, duration);
	
	$("#"+container+" .mult3_1").delay(duration + delay).animate({
		top: "0px"
	}, duration);
	
	if (!isPower) {
		$("#" + patternDivs[3] + " .num").delay(totalDelay += duration + duration + delay).animate({
			color: '#f00'
		}, duration);
	}
	
	$("#"+container+" .mult3_3").delay(totalDelay+100).animate({
		opacity: 1
	}, duration + 200);
	
	$("#"+container+" .mult3_2").delay(totalDelay += duration + delay).animate({
		opacity: 1
	}, duration);
	
	$("#" + patternDivs[2] + " .num").delay((duration + delay) * 6 - delay * 2).animate({
		color: "#000"
	}, duration);
	
	if (!isPower) {
		$("#" + patternDivs[3] + " .num").delay((duration + delay) * 2).animate({
			color: "#000"
		}, duration);
	}
	
	return totalDelay;
}


var Animation = {
	
	images: [{
		id: "gradientLoader",
		src: '/assets/animations/oruntu/gradient.png'
	}],
	
	init:function(container){
			$(container).append('<img src="/assets/animations/oruntu/gradient.png" id="gradient" />');
			$("#gradient").css("position", "absolute")
						   //.css("left", "436px")
						   .css("left", "478px")
						   .css("top", "0px")
						   .css("z-index", "1");

			$(container).append("<div id='patternArea'></div>");
			$("#patternArea").css({
				position: 'absolute',
				left: '100px',
				top: '20px',
				//width: '587px',
				width: '677px',
				'text-align': 'center',
				'font-size': '32px'
			});
			
			$("#patternArea").append("<span id=number1><span class='num'>3</span></span>");
			$("#patternArea").append("<span id=number2>, <span class='num'>6</span></span>");
			$("#patternArea").append("<span id=number3>, <span class='num'>12</span></span>");
			$("#patternArea").append("<span id=number4>, <span class='num'>24</span></span>");
			$("#patternArea").append("<span id=number5>, <span class='num'>48</span></span>");
			$("#patternArea").append("<span id=number6>, <span class='num'>96</span></span>");
			$("#patternArea").append("<span id=number7>, <span class='num'>192</span></span>");
			$("#patternArea").append("<span id=number8>, <span class='num'>384</span></span>");
			$("#patternArea").append("<span id=number9>, <span class='num'>768</span></span>");	
			$("#patternArea").append("<span id=number10>, <span class='num'>1536</span></span>");
			$("#patternArea").append("<span id=number11>, <span class='num'>3072</span></span>");
					
		
			$("#number1").css({opacity: 0});
			$("#number2").css({opacity: 0});
			$("#number3").css({opacity: 0});
			$("#number4").css({opacity: 0});
			$("#number5").css({opacity: 0});
			$("#number6").css({opacity: 0});
			$("#number7").css({opacity: 0});
			$("#number8").css({opacity: 0});
			$("#number9").css({opacity: 0});
			$("#number10").css({opacity: 0});
			$("#number11").css({opacity: 0});
			
		
			var duration = 700;
			var delay = 0;
			var totalDelay = 0;
			
			$("#number1").delay(totalDelay += duration + delay).animate({
				opacity: 1
			}, duration);
			$("#number2").delay(totalDelay += duration + delay).animate({
				opacity: 1
			}, duration);
			$("#number3").delay(totalDelay += duration + delay).animate({
				opacity: 1
			}, duration);
			$("#number4").delay(totalDelay += duration + delay).animate({
				opacity: 1
			}, duration);
			
			
			$(container).append("<div id='multiplicationArea'></div>");
			$("#multiplicationArea").css({
				position: 'absolute',
				left: '40px',
				top: '80px',
				//width: '587px',
				width: '677px',
				'text-align': 'center',
				'font-size': '24px'
			});
			
			totalDelay = showAnswer("multiplicationArea", totalDelay, [3, 6, 12, 24], ["x 2", "x 2", "x 2"], ["number1", "number2", "number3", "number4"]);
			
			
			totalDelay += 3000;
			duration = 1000;
			
			$("#number5").delay(totalDelay += (duration-=100) + delay).animate({
				opacity: 1
			}, duration);
			$("#number6").delay(totalDelay += (duration-=100) + delay).animate({
				opacity: 1
			}, duration);
			$("#number7").delay(totalDelay += (duration-=100) + delay).animate({
				opacity: 1
			}, duration);
			$("#number8").delay(totalDelay += (duration-=100) + delay).animate({
				opacity: 1
			}, duration);
			$("#number9").delay(totalDelay += (duration-=100) + delay).animate({
				opacity: 1
			}, duration);
			$("#number10").delay(totalDelay += (duration-=100) + delay).animate({
				opacity: 1
			}, duration);
			$("#number11").delay(totalDelay += (duration-=100) + delay).animate({
				opacity: 1
			}, duration);
			
			Main.animationFinished(totalDelay+1000);
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki sayı örüntüsünü tamamlayınız.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			/*
				Initialize your interaction here
			*/
			
			Interaction.count = 0;
			Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_INTERACTION_TYPES);
			
			$(container).append("<div id='answerArea'></div>");
			$("#answerArea").css({
				position: 'absolute',
				left: '60px',
				top: '150px',
				//width: '587px',
				width: '677px',
				'text-align': 'center',
				'font-size': '24px'
			});
			
			$(container).append('<div id="patternContainer"></div>');
			$("#patternContainer").css({
				position: "absolute",
				left: "50px",
				top: "100px",
				width: "490px",
				"line-height": "42px",
				'font-size': "32px",
				'text-align': 'center'
			})
			
			$(container).append('<div id="answerEntry"></div>');
			$("#answerEntry").css({
				position: "absolute",
				top: "170px",
				left: "130px",
				width:"300px",
				"text-align": "center"
			})
			
			Interaction.appendButton({
				bottom: '10px',
				right: '10px'
			})
			
			Interaction.appendStatus({
				top: '260px',
				left: '114px',
				width: '327px',
				'text-align': 'center'
			})
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){		
			Interaction.pattern = [];
			Interaction.operations = [];
			Interaction.isPower = false;
			var count = (Interaction.count++)%Interaction.shuffledArray.length;
			// 
			// if (Interaction.count < 6) {
			// 	$("#answerEntry").html("Yukarıdaki boşluğu doldurunuz.");
			// } else {
			// 	$("#answerEntry").html("Yukarıdaki boşlukları doldurunuz.");
			// }
			// 
			
			$("#answerArea").html("");
			
			switch (Interaction.shuffledArray[count]) {
				case 0: 			// Addition
					var startNumber = Util.randomInteger(1, 10);
					var increment = Util.randomInteger(1, 10);
					
					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber+=increment);
						Interaction.operations.push("+ "+increment);
					}
					
					break;
					
				case 1: 			// Subtraction
					var startNumber = Util.randomInteger(1, 10);
					var increment = Util.randomInteger(1, 10);
					
					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber+=increment);
						Interaction.operations.push("- "+increment);
					}
					
					Interaction.pattern.reverse();
					
					break;
					
				case 2: 			// Multiplication
					var startNumber = Util.randomInteger(1, 5);
					var multiplier = Util.randomInteger(2, 4);

					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber*=multiplier);
						Interaction.operations.push("x "+multiplier);
					}

					break;
					
				case 3:	 			// Division
					var startNumber = Util.randomInteger(1, 5);
					var multiplier = Util.randomInteger(2, 4);

					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber*=multiplier);
						Interaction.operations.push("/ "+multiplier);
					}

					Interaction.pattern.reverse();
					
					break;
					
				case 4: 			// Power
					var startNumber = Util.randomInteger(1, 5);

					Interaction.pattern.push(startNumber*startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push((++startNumber)*startNumber);
						Interaction.operations.push("x "+(startNumber-1));
					}
					
					Interaction.isPower = true;
					
					break;
					
				case 5: 			// Reverse Power
					var startNumber = Util.randomInteger(1, 5);

					Interaction.pattern.push(startNumber*startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push((++startNumber)*startNumber);
						Interaction.operations.push("x "+startNumber);
					}
					
					Interaction.isPower = true;
										
					Interaction.pattern.reverse();
					Interaction.operations.reverse();

					break;
					
				case 6: 			// Recursive
					var startNumber = Util.randomInteger(1, 10);
					
					var recursiveStartNumber = Util.randomInteger(1, 10);
					var increment = Util.randomInteger(1, 10);
					
					recursivePattern = [];
					recursivePattern.push(recursiveStartNumber);
					for (i = 1; i < PATTERN_SIZE - 1; i++) {
						recursivePattern.push(recursiveStartNumber+=increment);
					}
					
					if (Util.rand01()) {
						recursivePattern.reverse();
					}
					
					var reversed = Util.rand01();
					
					Interaction.pattern.push(startNumber)
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber+=recursivePattern[i-1]);
						Interaction.operations.push((reversed ? "- " : "+ ")+recursivePattern[i-1]);
					}
					
					if (reversed) {
						Interaction.pattern.reverse();
						Interaction.operations.reverse();
					}
					
					break;
					
			}
			
			if (Interaction.count < 6) {
				if (Interaction.count < 3) {
					Interaction.questionIndex = PATTERN_SIZE - 1;
				} else {
					Interaction.questionIndex = Util.randomInteger(0, PATTERN_SIZE);
				}
			
				Interaction.pattern[Interaction.questionIndex] = Interaction.addInput({
					isNumber:true,
					maxLength: (""+Interaction.pattern[Interaction.questionIndex]).length,
					css: {
						position: "relative",
						"font-size": "32px"
					},
					correctAnswer: Interaction.pattern[Interaction.questionIndex]
				});			
			} else {
				Interaction.questionIndex1 = Util.randomInteger(0, PATTERN_SIZE - 1);
				
				do {
					Interaction.questionIndex2 = Util.randomInteger(Interaction.questionIndex1 + 1, PATTERN_SIZE);					
				} while (Interaction.questionIndex2 == Interaction.questionIndex1);
				
				Interaction.pattern[Interaction.questionIndex1] = Interaction.addInput({
					isNumber:true,
					maxLength: (""+Interaction.pattern[Interaction.questionIndex1]).length,
					css: {
						position: "relative",
						"font-size": "32px"
					},
					correctAnswer: Interaction.pattern[Interaction.questionIndex1]
				});
				
				Interaction.pattern[Interaction.questionIndex2] = Interaction.addInput({
					isNumber:true,
					maxLength: (""+Interaction.pattern[Interaction.questionIndex2]).length,
					css: {
						position: "relative",
						"font-size": "32px"
					},
					correctAnswer: Interaction.pattern[Interaction.questionIndex2]
				});
			}
			
			$("#patternContainer").html("");			

			if (typeof Interaction.pattern[0] == "number" || typeof Interaction.pattern[0] == "string") {
				$("#patternContainer").append("<span id = 'num1'><span class='num'>" + Interaction.pattern[0] + "</span></span>");				
			} else {
				$("#patternContainer").append(Interaction.pattern[0]);	
			}
			
			
			for (i = 1; i < Interaction.pattern.length; i++) {
				$("#patternContainer").append(", ");
				if (typeof Interaction.pattern[i] == "number" || typeof Interaction.pattern[i] == "string") {
					$("#patternContainer").append("<span id = 'num"+(i+1)+"'><span class = 'num'>" + Interaction.pattern[i] + "</span></span>");				
				} else {
					$("#patternContainer").append(Interaction.pattern[i]);	
				}
			}
		},
	isAnswerCorrect : function(value){
		
		},
	onCorrectAnswer : function(){
			$("#patternContainer").html("");
			
			if (typeof Interaction.pattern[0] == "number" || typeof Interaction.pattern[0] == "string") {
				$("#patternContainer").append(Interaction.pattern[0]);
			} else {
				$("#patternContainer").append("<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[0].correctAnswer + "</span>");
			}
			
			for (i = 1; i < Interaction.pattern.length; i++) {
				$("#patternContainer").append(", ");
				
				if (typeof Interaction.pattern[i] == "number" || typeof Interaction.pattern[i] == "string") {
					$("#patternContainer").append(Interaction.pattern[i]);
				} else {
					$("#patternContainer").append("<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[i].correctAnswer + "</span>");
				}	
			}
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			if (Interaction.count < 6) {
				Interaction.setStatus('Olmadı! Doğru cevap ' + Interaction.pattern[Interaction.questionIndex].correctAnswer + ' olacaktı.', false);
			} else {
				if (Interaction.questionIndex1 < Interaction.questionIndex2) {
					Interaction.setStatus('Olmadı! Doğru cevaplar '
					 						+ Interaction.pattern[Interaction.questionIndex1].correctAnswer
					 						+ ' ve '
					 						+ Interaction.pattern[Interaction.questionIndex2].correctAnswer
					 						+ ' olacaktı.', false);
				} else {
					Interaction.setStatus('Olmadı! Doğru cevaplar '
					 						+ Interaction.pattern[Interaction.questionIndex2].correctAnswer
					 						+ ' ve '
					 						+ Interaction.pattern[Interaction.questionIndex1].correctAnswer
					 						+ ' olacaktı.', false);
				}
			}
			
			
			var numbers = [];
			
			for (i = 0; i < 4; i++) {
				if (typeof Interaction.pattern[i] == "number" || typeof Interaction.pattern[i] == "string") {
					numbers.push(Interaction.pattern[i]);
				} else {
					numbers.push(Interaction.pattern[i].correctAnswer);
				}	
			}
		
			
			if (Interaction.isPower) {
				for (i = 0; i < 4; i++) {
					numbers[i] = Math.sqrt(numbers[i]);
				}
			}
			
			var patternDivs = ["num1", "num2", "num3", "num4"];
			
			showAnswer("answerArea", 0, numbers, Interaction.operations, ["foo", "foo", "foo", "foo"], Interaction.isPower);
			
			
			
			
			// $("#patternContainer").html("");
			// 		
			// 		if (typeof Interaction.pattern[0] == "number" || typeof Interaction.pattern[0] == "string") {
			// 			$("#patternContainer").append(Interaction.pattern[0]);
			// 		} else {
			// 			$("#patternContainer").append("<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[0].correctAnswer + "</span>");
			// 		}
			// 		
			// 		for (i = 1; i < Interaction.pattern.length; i++) {
			// 			$("#patternContainer").append(", ");
			// 			
			// 			if (typeof Interaction.pattern[i] == "number" || typeof Interaction.pattern[i] == "string") {
			// 				$("#patternContainer").append(Interaction.pattern[i]);
			// 			} else {
			// 				$("#patternContainer").append( "<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[i].correctAnswer + "</span>");
			// 			}	
			// 		}
		},
}

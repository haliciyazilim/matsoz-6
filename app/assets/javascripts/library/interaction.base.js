function InteractionBase(){
	if(window['__Styles'] !== undefined){
		__Styles();
	}
	Interaction.inputs = [];
	Interaction.__isPaused = false;
	Interaction.__inputVersion = 0;
	Interaction.__status = function(e){
		switch(e){
			case Interaction.__status.WRONG:
					Interaction.setStatus('Yanlış cevap, tekrar deneyiniz.',false);
				break;
				
			case Interaction.__status.FAIL:
				break;
				
			case Interaction.__status.CORRECT:
				Interaction.setStatus('Tebrikler!',true);
				break;
				
			case Interaction.__status.FLOATING:
				Interaction.setStatus('Lütfen ondalıklı sayıları virgülle yazınız.',false);
				break;
				
			case Interaction.__status.EMPTY:
				if(Interaction.inputs.length > 1)
					Interaction.setStatus('Lütfen tüm kutucukları doldurunuz', "alert");
				else
					Interaction.setStatus('Lütfen kutucuğu doldurunuz', "alert");
				break;
				
			case Interaction.__status.NUMBER:
				if(Interaction.inputs.length > 1)
					Interaction.setStatus('Lütfen kutucuklara sayı giriniz',false);
				else
					Interaction.setStatus('Lütfen bir sayı giriniz.',false);
				break;
		}
	}
	Interaction.__status.WRONG 	= 1;
	Interaction.__status.FAIL 	 = 2;
	Interaction.__status.CORRECT  = 3;
	Interaction.__status.FLOATING = 4;
	Interaction.__status.EMPTY 	= 5;
	Interaction.__status.NUMBER   = 6;
	
	Interaction.setStatus = function(str,cls){
		$(Interaction.status ).html(str);
		if(cls === true)
			$(Interaction.status ).get(0).className = 'status_true';
		else if(cls === false)
			$(Interaction.status ).get(0).className = 'status_false';
		else if (cls == 'alert') {
			$(Interaction.status ).get(0).className = 'status_alert';
		}
		else
			$(Interaction.status ).get(0).className = 'status';
	};
	
	Interaction.appendStatus = function(css){
		Interaction.status = document.createElement('div');
		$(Interaction.container).append(Interaction.status);
		$(Interaction.status)
			.attr({
				class:'status'
			})
			.css({
				position:'absolute',
			});
		$(Interaction.status).css(css);
	};
	
	Interaction.appendInput = function(css,isNumber,isEmpty){
		if(Interaction.__inputVersion == 2){
			throw 'You cannot use Interaction.appendInput after Interaction.addInput ';
		}
		if(isEmpty == undefined)
			isEmpty = false;
		Interaction.__inputVersion = 1;
		if(isNumber == undefined || isNumber == null)
			isNumber = true;
		var input = Interaction.createInput(isNumber,3);
		input.isEmpty = isEmpty;
		$(input)
			.css({
				position:'absolute'
			})
		if(Interaction.inputs.length == 0)
			Interaction.input = input;
		Interaction.inputs.push(input);
		$(Interaction.container).append(input);
		$(input).css(css);
		return input;
	};
	
	/*
	*	example call
	*	Interaction.addInput({
	*		isNumber:true,
	*		maxLength:5,
	*		reverseText:false,
	*		css:{
	*			width:35px,
	*			fontSize:22px
	*		},
	*		correctAnswer:15,
	*		or
	*		correctAnswer:function(){
	*				return Interaction.value1 / Interaction.value2;
	*		},
	*	})
	*/

	Interaction.addInput = function(opt){
		if(Interaction.__inputVersion == 1){
			throw 'You cannot use Interaction.addInput after Interaction.appendInput';
		}
		Interaction.__inputVersion = 2;
		if(opt.correctAnswer == undefined){
			throw 'You have to define a correctAnswer object or value';
		}
		var input = Interaction.createInput(opt.isNumber,opt.maxLength, opt.css);		
		input.correctAnswer = opt.correctAnswer;
		Interaction.inputs.push(input);
		return input;
	}
	
	Interaction.appendQuestion = function(html,css){
		Interaction.questionDiv = document.createElement('div');
		$(Interaction.container).append(Interaction.questionDiv);
		$(Interaction.questionDiv).html(html).css(css);
		return Interaction.questionDiv;
	}
	//sets the question's parameters
	Interaction.setQuestionParams = function(params){
		Interaction.__questionParams = params;
		$(params).each(function(index, element) {
            if(this.html)
				$('#'+this.id,Interaction.questionDiv).html(this.html);
			if(this.value)
				$('#'+this.id,Interaction.questionDiv).val(this.value);
        });
	}
	//gets the questions's parameters
	Interaction.getQuestionParams = function(){
		return Interaction.__questionParams;
	}
	Interaction.createInput = function(isNumber,maxLength,css){
		var input = document.createElement('input');
		if(isNumber==true){
			input.setAttribute('onkeypress','return Interaction.__inputFilter__onlyNumbers(event)');
			input.setAttribute('isNumber','true');
		}
		else 	
			input.setAttribute('isNumber','false');
		input.setAttribute('type','text');
		$(input)
			.attr({
				'class':'input',
				'maxLength':maxLength
			})
			.keyup(function(event){
				if(event.keyCode == 13)
					Interaction.button.click();
			})
			.css({
				width:(parseInt($(".input").css('font-size'),10)*(maxLength*0.5+0.5))+"px",
				height:(parseInt($(".input").css('font-size'),10)*1.2)+"px"
			});
			
		if (css) {
			$(input).css(css)
			.css({
				width:(parseInt($(input).css('font-size'),10)*(maxLength*0.5+0.5))+"px",
				height:(parseInt($(input).css('font-size'),10)*1.2)+"px"
			});
		}
			
		return input;
	};
	
	Interaction.flushInputs = function(){
		$(Interaction.inputs).each(function(index, element) {
            $(this).remove();
        });
		Interaction.inputs = [];
	};
	
	Interaction.appendButton = function(css){
		Interaction.button = document.createElement('input');
		Interaction.button.setAttribute('type','button');
		$(Interaction.container).append(Interaction.button);
		$(Interaction.button)
			.attr({
				'class':'control_button',					
			})
			.css({
				position:'absolute',
				
			});
		$(Interaction.button).css(css);
	};
	
	
	Interaction.setRandomGenerator = function(to,from){
		var NUMBER_OF_SHAPES;
		if(isNaN(from))
			from=0;
		NUMBER_OF_SHAPES = to - from;
		
		Interaction.__randomGenerator = {
			NUMBER_OF_SHAPES : NUMBER_OF_SHAPES,
			index : from,
			shuffledArray : Util.getShuffledArray(NUMBER_OF_SHAPES),
			nextNumber:function(){
				Interaction.__randomGenerator.index = Interaction.__randomGenerator.index%Interaction.__randomGenerator.NUMBER_OF_SHAPES;
				var number = Interaction.__randomGenerator.shuffledArray[Interaction.__randomGenerator.index];
				Interaction.__randomGenerator.index ++;
				return number;
			}
		}
	}
	
	Interaction.prepareNextQuestion = function(){
		if(typeof Interaction.pause == 'function' && Interaction.isPaused() || Interaction.pause == true)
			return;
		if(Interaction.status)
			Interaction.setStatus('');
		if(Interaction.__inputVersion == 2)
			Interaction.flushInputs();
		for(i = 0; i < Interaction.inputs.length; i++){
			if(Interaction.inputs[i]){
				$(Interaction.inputs[i]).get(0).onkeydown = null;
				Interaction.inputs[i].value = '';
				$(Interaction.inputs[i]).removeClass('input_user_answer_correct');
				$(Interaction.inputs[i]).removeClass('input_user_answer_wrong');
				$(Interaction.inputs[i]).removeClass('input_correct_answer');
			}
		}
		if(Interaction.button){
			Interaction.button.className = 'control_button';
			Interaction.button.onclick = Interaction.__checkAnswer;
		}
		Interaction.trial = 0;
		
		if(Interaction.__randomGenerator)
			Interaction.nextQuestion(Interaction.__randomGenerator.nextNumber());	
		else
			Interaction.nextQuestion();
		
		try{
			Interaction.inputs[0].focus();
		}
		catch(e){}
	};
	Interaction.__checkAnswer = function(){
		if(typeof Interaction.pause == 'function' && Interaction.isPaused() || Interaction.pause == true)
			return;
		if(Interaction.preCheck && Interaction.preCheck() === false)
			return;
		var isCorrect;
		if(Interaction.__inputVersion == 2){	// addInput()
			isCorrect = true;
			for(var i=0; i<Interaction.inputs.length;i++){
				var value = Interaction.inputs[i].value;
				if($(Interaction.inputs[i]).val() == ""){
					Interaction.__status(Interaction.__status.EMPTY);
					return;
				}
				if(value == "" ||isNaN(value) && value.indexOf(',') < 0) {
					Interaction.__status(Interaction.__status.NUMBER);
					return;
				}
				if(value.indexOf('.') > 0){
					Interaction.__status(Interaction.__status.FLOATING);
					return;
				}
				
				var isInputCorrect;
				if(typeof Interaction.inputs[i].correctAnswer == 'function')
					isInputCorrect = (value == Interaction.inputs[i].correctAnswer(value));
				else
					isInputCorrect = (value == Interaction.inputs[i].correctAnswer);
				
				$(Interaction.inputs[i]).get(0).onfocus = function () {
					$(this).removeClass('input_user_answer_correct');
					$(this).removeClass('input_user_answer_wrong');
					$(this).removeClass('input_correct_answer');
				}
				
				if(isInputCorrect === true){
					$(Interaction.inputs[i]).addClass('input_user_answer_correct');
				}
				else{
					$(Interaction.inputs[i]).addClass('input_user_answer_wrong');
					isCorrect = false;
				}
			}
		}
		else{
			if(Interaction.inputs.length >= 1){
				var values = [];
				for(var i=0; i<Interaction.inputs.length;i++){
					values[i] = Interaction.inputs[i].value;
					if(Interaction.inputs[i].getAttribute('isNumber') == 'true'){			
						if(!Interaction.inputs[i].isEmpty && $(Interaction.inputs[i]).val() == ""){
							Interaction.__status(Interaction.__status.EMPTY);
							return;
						}
						if(isNaN(values[i]) && values[i].indexOf(',') < 0) {
							Interaction.__status(Interaction.__status.NUMBER);
							return;
						}
						if(values[i].indexOf('.') > 0){
							Interaction.__status(Interaction.__status.FLOATING);
							return;
						}
					}
				}
				if(Interaction.inputs.length == 1){
					isCorrect = Interaction.isAnswerCorrect(values[0]);
				}
				else{
					isCorrect = Interaction.isAnswerCorrect(values);
				}
			}
			else
				isCorrect = Interaction.isAnswerCorrect();
		}
		
		//call user-defined functions
		if(isCorrect){
			Interaction.__status(Interaction.__status.CORRECT);
			$(Interaction.inputs).each(function(index, element) {
            	$(this).get(0).onkeydown = function(event){
					if(event.keyCode != 13)
						return false;
				}   
            });
			
			if(Interaction.onCorrectAnswer)
				Interaction.onCorrectAnswer();
		}
		else if(Interaction.trial == 0){
			Interaction.__status(Interaction.__status.WRONG);
			if(Interaction.onWrongAnswer)
				Interaction.onWrongAnswer();
		}
		else{
			$(Interaction.inputs).each(function(index, element) {
				$(this).get(0).onfocus = null;
            	$(this).get(0).onkeydown = function(event){
					if(event.keyCode != 13)
						return false;
				}   
            });

			if(Interaction.onFail)
				Interaction.onFail();
		}
		if(isCorrect || Interaction.trial > 0){
			Interaction.button.onclick = Interaction.prepareNextQuestion;
			Interaction.button.className = 'next_button';
		}
		Interaction.trial++;
	};
	
	Interaction.__inputFilter__onlyNumbers = function (e,allowedchars){
		var isPassKey =function (key,allowedchars){
			if(allowedchars!=null){
				for(var i=0;i<allowedchars.length;i++){
					if(allowedchars[i]==String.fromCharCode(key))
						return true;
					}
				}
			return false;		
		};
		var key=e.charCode==undefined?e.keyCode:e.charCode;
		if((/^[0-9]+|,$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){
			return true;
		}
		else{
			return false;
		}
	};
	Interaction.pause = function(delay){
		if(delay == undefined || isNaN(delay))
			delay = 0;
		if(delay == 0)
			Interaction.__isPaused = true;
		else
			setTimeout('Interaction.__isPaused = true',delay);
	}
	Interaction.resume = function(delay){
		if(delay == undefined || isNaN(delay))
			delay = 0;
		if(delay == 0)
			Interaction.__isPaused = false;
		else
			setTimeout('Interaction.__isPaused = false',delay)
		
	}
	Interaction.isPaused = function(){
		return Interaction.__isPaused;
	}
}
function LongDivision(n,d,container){
    this.num = n + "",
    this.numLength = this.num.length;
    this.remainder = 0;
    this.answer = '';
    this.i = 0;
	this.n = n;
	this.d = d;
	this.lastIndent = 0;
	this.container = container;
	$(container).html('<div id="dividend"></div><div id="divisor"></div><div id="answer"></div>');
	$(container).css({
		textAlign:'left'
	});
	this.nodes = {};
	this.fontSize = parseInt($(container).css('font-size'),10)+2;

	this.nodes.dividend = $('#dividend',container).html(this.num).css({
		width:'50%',
		borderRight:'1px solid #000',
		borderColor:$(container).css('color'),
		float:'left',
		textAlign:'left',
		height:this.fontSize*2
	}).get(0);
	this.nodes.divisor = $('#divisor',container).html(this.d).css({
		width:'40%',
		borderBottom:'1px solid #000',
		borderColor:$(container).css('color'),
		float:'left',
		paddingLeft:this.fontSize*0.5,
		boxSizing:'border-box',
		textAlign:'left',
		height:this.fontSize
	}).get(0);
	this.nodes.answer = $('#answer',container).css({
		width:'40%',
		float:'left',
		paddingLeft:this.fontSize*0.5,
		boxSizing:'border-box',
		textAlign:'left',
		height:this.fontSize
	}).get(0);
	$(this.nodes.dividend).height($(this.nodes.divisor).height()+$(this.nodes.answer).height());
	
	$(this.nodes.answer).html(this.answer);
	this.nodes.steps = [];	
    
}

LongDivision.prototype.nextStep = function(duration){
		if(this.i >= this.numLength)
			return null;
		var digit = this.i < this.numLength ? parseInt(this.num[this.i],10) : 0;
		var lastStepDown = ""+this.remainder+digit;
		var stepDividend = digit + (this.remainder * 10);
		var stepAnswer = Math.floor(stepDividend/this.d);
		this.answer = this.answer + stepAnswer;
		if(this.nodes.steps.length > 0){
			$('.down',this.nodes.steps[this.nodes.steps.length-1]).append(digit);
		}
		if(stepDividend < this.d){
			this.i++;
			if(this.answer > 0)
				$(this.nodes.answer).append(parseInt(stepAnswer,10));	
			this.remainder = stepDividend;
			return this.nextStep(duration);
			
		}
		this.remainder = stepDividend%this.d;
		//var minus  = Math.floor((digit + (this.remainder * 10)));
		
		this.i++;
		var div = document.createElement('div');
		
		$(div)
			.html('<div class="up"></div><div class="line"><span style="position:relative;top:-20px">-</span></div><div class="down"></div>')
			.css({
				position:'relative',
				top:-this.fontSize,
				height:this.fontSize*2+2,
				float:'left',
				width:$(this.container).width()
			}).addClass("step");
		$('.up',div)
			.html(''+stepAnswer*this.d)
			.css({
				height:this.fontSize,
				textAlign:'left',
				width:this.fontSize*0.5*this.num.length + 1
								
			})
		var pLeft=0;
		if(this.nodes.steps.length > 0){
			pLeft = $('.down',this.nodes.steps[this.nodes.steps.length - 1]).html().length 
						  - $('.up',div).html().length 
						  + parseInt($(this.nodes.steps[this.nodes.steps.length - 1]).attr('pLeft'),10);
		}
		$(div).attr('pLeft',pLeft);
		
		//$('.up',div).css({paddingLeft:this.fontSize*0.5*paddingLeft});
		
		$('.line',div)
			.css({
				position:'relative',
				height:1,
				borderTop:'1px solid #000',
				borderColor:$(this.container).css('color'),
				width:this.fontSize*0.5*(this.num.length+2),
				left:-this.fontSize
			});
		
		$('.line img',div)
			.css({
				position:'relative',
				top:'-15px',	
				left:'0px',
				zIndex:2
			});
		var remainderString = "";
		for(var i=0;i<(""+stepDividend).length - (""+this.remainder).length;i++)
			remainderString += "0";
		remainderString += this.remainder;
		$('.down',div)
			.html(remainderString)
			.css({
				height:this.fontSize,
				paddingLeft:this.fontSize*0.5*($('.up',div).html().length - $('.down',div).html().length)
			});
		
		$(div).css({left:this.fontSize*0.5*(pLeft)});
		
		$(this.container).append(div);
		if(stepAnswer != undefined)
			$(this.nodes.answer).append('<span id="'+this.i+'">'+stepAnswer+'</span>');
		if(!isNaN(duration)){
			$(div)
				.delay(duration*0.5)
				.css({opacity:0})
				.animate({opacity:1},duration*0.5);
			$('span#'+this.i,this.nodes.answer)
				.css({opacity:0})
				.delay(1)
				.animate({opacity:1},1);
		}
		this.nodes.steps.push(div);
		return div;
	}
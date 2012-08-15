// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {strokeColor:'#255b63',strokeWidth:2,fillColor:'#fff',cursor:'move'};
var rectangularShapeStyle = {'shape-rendering':'crispEdges'}
var angleStyle = {'fill':'#DDD'};
var animationEdgeStyle = {strokeColor:'#000',strokeWidth:2}
/*Styles*/

var Animation = {
	
	init:function(container){
		
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var size = new Size(100,100);
		var _h = 30;
		var p1 = new Point(
			20,
			25+_h
		);
		
		var triangle = new Path.EquiradialPolygon(
			p1,
			size,
			[120,210,330],
			0
		);
		
		triangle.set_style(animationEdgeStyle);
		triangle.angle = 0;
		triangle.lastTransformation = triangle.matrix;
		triangle.texts = [];
		triangle.texts[0] = new PointText(new Point(triangle.vertexArray[0].x,triangle.vertexArray[0].y-10));
		triangle.texts[0].content = 'C';
		triangle.texts[0].firstPosition = triangle.texts[0].position;
		triangle.texts[1] = new PointText(new Point(triangle.vertexArray[1].x-10,triangle.vertexArray[1].y+10));
		triangle.texts[1].content = 'A';
		triangle.texts[1].firstPosition = triangle.texts[1].position;
		triangle.texts[2] = new PointText(new Point(triangle.vertexArray[2].x,triangle.vertexArray[2].y+10));
		triangle.texts[2].content = 'B';
		triangle.texts[2].firstPosition = triangle.texts[2].position;
		
		triangle.texts[3] = new PointText(
			new Point(
				(triangle.vertexArray[0].x+triangle.vertexArray[1].x)*0.5-10,
				(triangle.vertexArray[0].y+triangle.vertexArray[1].y)*0.5
			)
		);
		triangle.texts[3].content = 'b';
		triangle.texts[3].firstPosition = triangle.texts[3].position;
		
		triangle.texts[4] = new PointText(
			new Point(
				(triangle.vertexArray[1].x+triangle.vertexArray[2].x)*0.5,
				(triangle.vertexArray[2].y+triangle.vertexArray[2].y)*0.5+10
			)
		);
		triangle.texts[4].content = 'c';
		triangle.texts[4].firstPosition = triangle.texts[4].position;
		
		triangle.texts[5] = new PointText(
			new Point(
				(triangle.vertexArray[0].x+triangle.vertexArray[2].x)*0.5+10,
				(triangle.vertexArray[0].y+triangle.vertexArray[2].y)*0.5
			)
		);
		triangle.texts[5].content = 'a';
		triangle.texts[5].firstPosition = triangle.texts[5].position;
		
		triangle.animate({
			style:{
				angle:135	
			},
			duration:1000,
			delay:500,
			update:function(){
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[2]);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,this.vertexArray[2]);
			},
			callback:function(){
				new Path.Circle(this.vertexArray[2],2).set_style({fillColor:"#000"});
				
				for(var i=0; i<this.vertexArray.length ; i++)
					this.vertexArray[i] = this.vertexArray[i].getRotatedPoint(this.angle,this.vertexArray[2]);
				var text = new PointText(
					new Point(
						(triangle.vertexArray[0].x+triangle.vertexArray[2].x)*0.5,
						(triangle.vertexArray[0].y+triangle.vertexArray[2].y)*0.5+10
					)
				);
				text.content = 'a';
				this.lastTransformation = this.matrix;
				new Path.Line(
					this.vertexArray[0],
					this.vertexArray[2]
				).set_style({strokeColor:'#f00',strokeWidth:2});
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].firstPosition = this.texts[i].position;
				//console.log(this.vertexArray[1])
				triangle.angle = 0;
				
			}
		});
		triangle.animate({
			style:{
				angle:120
			},
			duration:1000,
			delay:1600,
			update:function(){
				//console.log(this.firstPosition.x,this.firstPosition.y);
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[0]);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,this.vertexArray[0]);
			
			},
			callback:function(){
				new Path.Circle(this.vertexArray[0],2).set_style({fillColor:"#000"});
				for(var i=0; i<this.vertexArray.length ; i++)
					this.vertexArray[i] = this.vertexArray[i].getRotatedPoint(this.angle,this.vertexArray[0]);
				
				var text = new PointText(
					new Point(
						(triangle.vertexArray[0].x+triangle.vertexArray[1].x)*0.5,
						(triangle.vertexArray[0].y+triangle.vertexArray[1].y)*0.5+10
					)
				);
				text.content = 'b';
				this.lastTransformation = this.matrix;
				new Path.Line(
					this.vertexArray[1],
					this.vertexArray[0]
				).set_style({strokeColor:'#f00',strokeWidth:2});
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].firstPosition = this.texts[i].position;
				triangle.angle = 0;
			}
		});
		triangle.animate({
			style:{
				angle:105
			},
			duration:1000,
			delay:2700,
			update:function(){
				//console.log(this.firstPosition.x,this.firstPosition.y);
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[1]);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,this.vertexArray[1]);
			},
			callback:function(){
				new Path.Circle(this.vertexArray[1],2).set_style({fillColor:"#000"})
				for(var i=0; i<this.vertexArray.length ; i++)
					this.vertexArray[i] = this.vertexArray[i].getRotatedPoint(this.angle,this.vertexArray[1])
				
				var text = new PointText(
					new Point(
						(triangle.vertexArray[1].x+triangle.vertexArray[2].x)*0.5,
						(triangle.vertexArray[1].y+triangle.vertexArray[2].y)*0.5+10
					)
				);
				text.content = 'c';
				this.lastTransformation = this.matrix;;
				new Path.Line(
					this.vertexArray[1],
					this.vertexArray[2]
				).set_style({strokeColor:'#f00',strokeWidth:2});
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].firstPosition = this.texts[i].position;
				this.angle = 0;
			}
		});
		triangle.animate({
			style:{
				angle:135
			},
			duration:1000,
			delay:3800,
			update:function(){
				//console.log(this.firstPosition.x,this.firstPosition.y);
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[2].x+20,this.vertexArray[2].y+10);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,new Point(this.vertexArray[2].x+20,this.vertexArray[2].y+10));
			},
			callback:function(){
				new Path.Circle(this.vertexArray[2],2).set_style({fillColor:"#000"});
				for(var i=0; i<this.vertexArray.length ; i++)
					this.vertexArray[i] = this.vertexArray[i].getRotatedPoint(this.angle,this.vertexArray[2])
				this.lastTransformation = this.matrix;
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].firstPosition = this.texts[i].position;
				this.angle = 0;
				
				var text = new PointText(
					new Point(
						(triangle.vertexArray[0].x+triangle.vertexArray[2].x)*0.5,
						(triangle.vertexArray[0].y+triangle.vertexArray[2].y)*0.5+30
					)
				);
				text.content = "Ç = a + b + c";
			}
		});
		
		triangle.animate({
			style:{
				angle:-135
			},
			duration:1000,
			delay:5800,
			update:function(){
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[2].x+20,this.vertexArray[2].y+10);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,new Point(this.vertexArray[2].x+20,this.vertexArray[2].y+10));
			},
			callback:function(){
				for(var i=0; i<this.vertexArray.length ; i++)
					this.vertexArray[i] = this.vertexArray[i].getRotatedPoint(this.angle,this.vertexArray[2])
				this.lastTransformation = this.matrix;
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].firstPosition = this.texts[i].position;
				this.angle = 0;
				
			}
		});
		
		triangle.animate({
			style:{
				angle:-105
			},
			duration:1000,
			delay:7000,
			update:function(){
				//console.log(this.firstPosition.x,this.firstPosition.y);
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[1]);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,this.vertexArray[1]);
			},
			callback:function(){
				
				for(var i=0; i<this.vertexArray.length ; i++)
					this.vertexArray[i] = this.vertexArray[i].getRotatedPoint(this.angle,this.vertexArray[1])
				
				this.lastTransformation = this.matrix;;
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].firstPosition = this.texts[i].position;
				this.angle = 0;
			}
		});
		
		triangle.animate({
			style:{
				angle:-120
			},
			duration:1000,
			delay:8100,
			update:function(){
				//console.log(this.firstPosition.x,this.firstPosition.y);
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[0]);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,this.vertexArray[0]);
			
			},
			callback:function(){
				for(var i=0; i<this.vertexArray.length ; i++)
					this.vertexArray[i] = this.vertexArray[i].getRotatedPoint(this.angle,this.vertexArray[0])
				
				this.lastTransformation = this.matrix;
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].firstPosition = this.texts[i].position;
				triangle.angle = 0;
			}
		});
		
		triangle.animate({
			style:{
				angle:-135	
			},
			duration:1000,
			delay:9200,
			update:function(){
				var matrix = new Matrix();
				matrix.rotate(this.angle, this.vertexArray[2]);
				matrix.concatenate(this.lastTransformation);
				this.setMatrix(matrix);
				for(var i=0;i<this.texts.length;i++)
					this.texts[i].position = this.texts[i].firstPosition.getRotatedPoint(this.angle,this.vertexArray[2]);
			},
			callback:function(){
				triangle.angle = 0;
				for(var i=0;i<Main.animationProject.activeLayer.children.length;i++)
					Main.animationProject.activeLayer.children[i].animate({
						style:{opacity:0},
						duration:1000
					});
				
				$(Animation.container)
					.append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_01.png" />')
					.append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_02.png" />')
					.append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_03.png" />')
					.append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_04.png" />')
					.append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_05.png" />')
					.append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_06.png" />')
				$(".sekiller_cevre",Animation.container).each(function(index, element) {
                   $(this).css({
						position:'absolute',
						top:'10px',
						left:'10px',
						opacity:0
					})
					.delay(1000*(index+1))
					.animate({opacity:1},2000);
                });
                Main.animationFinished(7000)
			}
		});
	}
	
};
var Interaction = {};
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Yandaki çokgenin çevre uzunluğunu bulunuz.');
	Interaction.container = container;
	$(Interaction.container).append('<div id="B"></div>');
	$(Interaction.container).append('<style>div#L,div#R{float:left;}</style>');
	$(Interaction.container).append('<style>div#B{position:absolute;top:30%;left:50%;height:30%;width:40%;text-align:center;padding-top:20px;}</style>');
	$(Interaction.container).append('<style>div#L{width:60%;height:100%;text-align:center;}</style>');
	$(Interaction.container).append('<style>div#R{width:40%;height:100%;}</style>');
	Interaction.T = $('div#T',Interaction.container).get(0);
	Interaction.input = document.createElement('input');
	Interaction.input.className = 'number_input_field';
	Interaction.input.setAttribute('type','text');
	Interaction.input.setAttribute('maxlength','3');
	$('div#B',Interaction.container).html('<div id="L"></div><div id="R"></div>');
	$('div#B > div#L',Interaction.container).append('Ç =&nbsp;');
	$('div#B > div#L',Interaction.container).append(Interaction.input);
	$('div#B > div#L',Interaction.container).append('&nbsp;<span id="input_measure"></span>');
	Interaction.button = document.createElement('input');
	Interaction.button.setAttribute('type','button');
	Interaction.button.onclick = TestGenerator.checkAnswer;
	Interaction.button.className = 'control_button';
	$('div#B > div#R',Interaction.container).append(Interaction.button);
	$('div#B > div#R',Interaction.container).append('<div id="status"></div>');
	
	Interaction.status = $('div#B > div#R > div#status',Interaction.R).get(0);
	$(Interaction.status ).css({
		position:'relative',
		width:'220px',
		left:'-94px',
		fontSize:'16px',
		fontWeight: 'bold',
		paddingTop:'10px' ,
		textAlign:'center'
	});
	Interaction.preventNextQuestion = false;
	var NUMBER_OF_SHAPES  = 7;
	Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
	Interaction.count = 0;
	TestGenerator.nextQuestion();
	
}

Interaction.setStatus = function(msg,isCorrect){
	if(isCorrect === null || isCorrect === undefined){
		Interaction.status.innerHTML = msg;
		Interaction.status.className = '';
	}
	else if(isCorrect === true){
		Interaction.status.innerHTML = msg;
		Interaction.status.className = 'status_true';		
	}
	else if(isCorrect === false){
		Interaction.status.innerHTML = msg;
		Interaction.status.className = 'status_false';
	
	}
		
}

var TestGenerator = {};

TestGenerator.nextQuestion = function(){
	Main.interactionProject.activeLayer.removeChildren();
	//project.activeLayer.removeChildren();
	TestGenerator.shape = null;
	TestGenerator.trial = 0;
	TestGenerator.values = null;
	Interaction.setStatus('');
	Interaction.button.className = 'control_button';
	Interaction.input.value = '';
	Interaction.input.onkeyup = function(e){
		if(e.keyCode == 13)
			TestGenerator.checkAnswer();		
	}
	Interaction.input.style.color = '';
	Interaction.button.onclick = TestGenerator.checkAnswer;
	TestGenerator.shape = Math.floor(Math.random()*4);
	TestGenerator.paper = {width:$(Interaction.container).width()*0.4 , height:$(Interaction.container).height()}
	var m = Math.floor(Math.random()*2);
	TestGenerator.setMeasure(m);
	TestGenerator.letters = (Math.random()>0.5 ? ["A","B","C","D","E"]:["K","L","M","N","P"]);
	var count = (Interaction.count++)%Interaction.shuffledArray.length;
	TestGenerator.shape = Interaction.shuffledArray[count];
	///*TEST*/TestGenerator.shape = 6;/*TEST*/
	switch(TestGenerator.shape){
		case 0:
			var a = Math.floor(Math.random()*10)+5;
			var cevre = 4*a;
			TestGenerator.values = {a:a,cevre:cevre};
			rectangle(a,a,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 1:
			var a,b;
			a = Math.floor(Math.random()*10)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*10)+5;
			TestGenerator.values = {a:a,b:b,cevre:2*(a+b)};
			rectangle(a,b,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 2:
			var a,b,_a;
			a = Math.floor(Math.random()*5)+5;
			_a = a;
			while(a==_a)
				_a = Math.floor(Math.random()*5)+5;
			b = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,cevre:2*(a+_a+b)};
			rhomboid(a,_a,b,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 3:
			var a,b,c;
			a = Math.floor(Math.random()*3)+5;
			b = Math.floor(Math.random()*4)+4;
			c = a+b;
			while(a+b <= c || Math.abs(a-b) >= c)
				c = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,c:c,cevre:(a+b+c)};
			new Triangle(a,b,c,TestGenerator.getMeasure(),TestGenerator.paper).showEdge('a').showEdge('b').showEdge('c');
			break;
		
		case 4:
			var a,b,c;
			a = 6,b = 8,c = 6;
			TestGenerator.values = {a:a,b:b,c:c,cevre:(a+b+c)} ;
			new Triangle(a,b,c,TestGenerator.getMeasure(),TestGenerator.paper).showEdge('a').showEdge('b').showAngle('A').showAngle('B');
			break;
		case 5:
			var a,b,_a,c;
			a = Math.floor(Math.random()*5)+5;
			_a = a
			while(_a >= a)
				_a = Math.floor(Math.random()*5)+4;
			b = Math.floor(Math.random()*5)+5;
			c = Math.floor(Math.random()*3+b-1)
			TestGenerator.values = {a:a,b:b,c:c,cevre:(a+_a+b+c)};
			trapezoid(a,_a,b,c,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 6:
			var a,W;
			a = Math.floor(Math.random()*6)+6;
			W = 2*a;
			while(W >= 2*a)
				W = Math.floor(Math.random()*2)+6;
			TestGenerator.values = {a:a,cevre:4*a};
			rhombus(a,W,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		//case 4:
//			var a,b,c;
//			a = 3,
//			b = 4,
//			c = 5,
//			TestGenerator.values = {a:a,b:b,c:c,cevre:(a+b+c)} ;
//			new Triangle(a,b,c,TestGenerator.getMeasure(),TestGenerator.paper).showEdge('a').showEdge('b').showAngle('B');
//			break;
	}
}
TestGenerator.setMeasure = function(m){ 
	TestGenerator.measure = m;
	$('#input_measure').html(TestGenerator.getMeasure());
}
TestGenerator.getMeasure = function(){
	if(TestGenerator.measure == null || TestGenerator.measure == 'undefined')
		throw 'TestGenerator.values.m is not defined';
	if(TestGenerator.measure == 0)
		return 'cm';
	else
		return 'm';
};
TestGenerator.printVertexLetters = function(p){
	for(var i=0; i<p.length;i++){
		var text = new PointText(p[i]);
		text.content = ""+TestGenerator.letters.shift();
		text.style = textStyle;
		text=null;
	}
}
TestGenerator.checkAnswer = function(){
	var value = Interaction.input.value;
	var isWrong = false;
	if(value == "" || isNaN(value)){
		isWrong = true;
		Interaction.setStatus('Lütfen bir sayı giriniz.');
		return ;
	}
	else if(value == TestGenerator.values.cevre){
		Interaction.setStatus('Tebrikler !',true);
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.button.className = 'next_button';
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
	}
	else{
		Interaction.setStatus('Tekrar deneyiniz. ',false);
		isWrong = true;
	}
	if(isWrong && TestGenerator.trial > 0){
		Interaction.input.style.color = 'red';
		Interaction.input.value = TestGenerator.values.cevre;
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
		Interaction.setStatus('Yanlış. Doğru cevap: '+TestGenerator.values.cevre+' '+TestGenerator.getMeasure(),false);
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.button.className = 'next_button';
	}	
	else{
		Interaction.button.onlick = TestGenerator.nextQuestion;
		TestGenerator.trial++;
		TestGenerator.trial++;
	}
}


function rectangle(a,b,measure,paper){
	var x,y,w,h,_t;
	_t = Math.min(paper.width,paper.height) * (Math.max(a,b) / 17);
	if(a > b){
		w = _t;
		h = _t * (b / a);
	}
	else{
		w = _t * (a / b);
		h = _t;	
	}
	x = paper.width* 0.5 - w * 0.5 ;
	y = (paper.height - h) * 0.5;
	//console.log([x,y,w,h,_t]);
	var rect = new Path.Rectangle(new Point(x,y),new Size(w,h));
	rect.style = edgeStyle;

	var t1 = new PointText(new Point(x+w*0.5-10,y+h+15));
	t1.content = ""+a+" "+measure;
	var t2 = new PointText(new Point(x+w+5,y+h*0.5));
	t2.content = ""+b+" "+measure;
	
	//letters
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+w+10,y-10),
				new Point(x-10,y-10)
			]
		);
}

function rhomboid(a,b,H,measure,paper){
	var x,y,w,_w,h,_t;
	_t = Math.min(paper.width,paper.height) * (Math.max(a+b,H) / 20);
	if(2*a+b > H){
		w = _t * ((a+b)/(2*a+b));
		_w= _t * a / (2*a+b); 
		h = _t * (H/(2*a+b));	
	}else{
		
		w = _t * ((a+b)/H);
		_w= _t * a / H; 
		h = _t;
	}
	x = (paper.width - (w+_w)) * 0.5;
	y = (paper.height - h) * 0.5;


	var rhomboid = new Path.Rhomboid(new Point(x,y), new Size(w,h), _w );
	rhomboid.style = edgeStyle;
	
	var t1 = new PointText(new Point(x+w*0.5-10,y+h+15));
	t1.content = ""+(a+b)+" "+measure;
	var t2 = new PointText(new Point(x+w+_w-20,y+h*0.5+10));
	t2.content = ""+H+" "+measure;
	
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+_w+w+10,y-10),
				new Point(x+_w-10,y-10)
			]
		);
}

function rhombus(a,W,measure,paper){
	var x,y,w,h;
	H = Math.sqrt(a*a-Math.pow(W*0.5,2));
	var length = Math.min(paper.width,paper.height)* (Math.max(W,H) / 15) ;
	if(W > H){
		w = length;
		h = length * H / W;
	}else{
		w = length * W / H;
		h = length;
	}
	x = (paper.width - w) * 0.5;
	y = (paper.height - h) * 0.5;
	
	var rhombus = new Path.Rhombus(new Point(x,y),new Size(w,h));
	rhombus.style = edgeStyle;
	var t1 = new PointText(new Point(x-20,y+h*0.30));
	t1.content = ""+(a)+" "+measure;
	var t2 = new PointText(new Point(x-20,y+h*0.80));
	t2.content = ""+a+" "+measure;
	var t3 = new PointText(new Point(x+w*0.9,y+h*0.30));
	t3.content = ""+(a)+" "+measure;
	var t4 = new PointText(new Point(x+w*0.9,y+h*0.80));
	t4.content = ""+(a)+" "+measure;
	t1.characterStyle.justification = 'center'
	t2.characterStyle.justification = 'center'
	t3.characterStyle.justification = 'center'
	
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h*0.5),
				new Point(x+w*0.5,y-10),
				new Point(x+w+10,y+h*0.5),
				new Point(x+w*0.5-5,y+h+15)
			]
		);
}
function trapezoid(a,_a,b,c,measure,paper){
	var x,y,w,_w,h,H,_t;
	H = Math.sqrt( b*b - Math.pow((a-_a)*0.5,2)  );
	
	_t = Math.min(paper.width,paper.height) * (Math.max(a,b) / 15);
	if(a > H){
		w = _t;
		_w= _t * _a / a; 
		h = _t * H / a;	
	}else{
		w = _t * a / H;
		_w= _t * _a / H; 
		h = _t;
	}
	_w *= 0.3; 
	x = (paper.width - w) * 0.5;
	y = (paper.height - h) * 0.5;
	var trapezoid = new Path.Trapezoid( new Point(x,y) , new Size(w,h), _w*b/(c+b), _w*c/(c+b));
	trapezoid.style = edgeStyle;
	var t1 = new PointText(new Point(x+w*0.5-10,y+15+h));
	t1.content = ""+(a)+" "+measure;
	var t2 = new PointText(new Point(x+w,y+h*0.5));
	t2.content = ""+c+" "+measure;
	var t3 = new PointText(new Point(x-25,y+h*0.5));
	t3.content = ""+(b)+" "+measure;
	var t3 = new PointText(new Point(x+w*0.5-10,y-5));
	t3.content = ""+_a+" "+measure;
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+10,y-10),
				new Point(x+w-10,y-10)
			]
		);
}

function Triangle(i,j,k,measure,paper){
	var _x=0,_y=20;
	this.i=i,this.j=j,this.k=k;
	this.p1={x:10,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0};
	this.a1=null,this.a2=null,this.a3=null;
	var a = Math.min(paper.width,paper.height)*0.8;
	var _c = (a-40)/Math.max(i,j,k);
	this.p1.x = 60;
	this.p1.y = a-20;
	this.p2.x = this.p1.x + this.i*_c;
	this.p2.y = this.p1.y;
	var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
	this.p3.x = this.p1.x + Math.cos(a)*k*_c;
	this.p3.y = this.p1.y - Math.sin(a)*k*_c;
	this.p1.x += _x;
	this.p2.x += _x;
	this.p3.x += _x;
	this.p1.y += _y;
	this.p2.y += _y;
	this.p3.y += _y;
	var triangle = new Path.Triangle( 
					this.p1,
					this.p2,
					this.p3);
	triangle.style = edgeStyle;
	
	TestGenerator.printVertexLetters(
			[
				new Point(this.p1.x-10,this.p1.y+10),
				new Point(this.p2.x+10,this.p2.y+10),
				new Point(this.p3.x+10,this.p3.y-10)
			]
		);

	this.drawEdgeText = function(p,a,k,L){
		var _x,_y;
		_x = p.x + k * Math.sin(a);
		_y = p.y + k * Math.cos(a);
		var t1 = new PointText(new Point(_x,_y));
		t1.content = L;
	
	
	}
	this.calculateAngles = function(){
		this.a1 = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
		this.a2 = Math.acos((this.i*this.i + this.j*this.j - this.k*this.k)/(2*this.i*this.j));
		this.a3 = Math.acos((this.k*this.k + this.j*this.j - this.i*this.i)/(2*this.k*this.j));			
		this._a1 = Math.floor(Util.radianToDegree(this.a1));
		this._a2 = Math.round(Util.radianToDegree(this.a2));
		this._a3 = Math.floor(Util.radianToDegree(this.a3));
	}
	this.drawAngle = function(p1,p2,p3,A,_A){
		function findAPointOn(p1,p2,k){
			var x,y,a;
			a = Util.findAngle(p1.x,p1.y,p2.x,p2.y);
			x = p1.x + Math.cos(a)*k ;
			y = p1.y - Math.sin(a)*k ;
			return {x:x,y:y}
		}
		var x1,y1,x2,y2,r,k;
		k = 20;
		var _p1,_p2;
		_p1 = findAPointOn(p1,p2,k);
		x1=_p1.x;y1=_p1.y;
		_p2 = findAPointOn(p1,p3,k);
		x2=_p2.x;y2=_p2.y;
		var fa = A > Math.PI ?1 : 0;
		var fs = A > 0 ? 0: 1;
		var _a = Util.findAngle(p1.x,p1.y,p2.x,p2.y);
		var _b = Util.findAngle(p1.x,p1.y,p3.x,p3.y);
		var _t = Math.abs(_a-_b)*0.5 + (Math.abs(_a) > Math.abs(_b) ? _b : _a);
		if(_A==90){
			var x,y;
			_p1 = findAPointOn(p1,p2,k/2);
			x1=_p1.x;y1=_p1.y;
			_p2 = findAPointOn(p1,p3,k/2);
			x2=_p2.x;y2=_p2.y;
			x = p1.x + Math.sqrt(2) * k/2 * Math.cos(_t);
			y = p1.y - Math.sqrt(2) * k/2 * Math.sin(_t);
			var line1 = new Path.Line(new Point(x1,y1), new Point(x,y));
			line1.set_style(edgeStyle);
			var line2 = new Path.Line(new Point(x2,y2), new Point(x,y));
			line2.set_style(edgeStyle)
			var circle= new Path.Circle(new Point((p1.x+x)*0.5,(p1.y+y)*0.5),1);
			circle.set_style({fillColor:'#000'});
			k = k/1.5;
		}
		else{
			x = p1.x + Math.sqrt(2) * k*0.7 * Math.cos(_t);
			y = p1.y - Math.sqrt(2) * k*0.7 * Math.sin(_t);
			r = Util.findDistance(p1.x, p1.y, x1, y1);
			var path = new Path();
			path.add(_p1);
			path.arcTo([x,y],_p2);
			path.set_style(edgeStyle);
		}
		var _x,_y;//for the text
		_x = p1.x + Math.sqrt(2) * k* Math.cos(_t);
		_y = p1.y - Math.sqrt(2) * k * Math.sin(_t);
		if(_x < p1.x)
			_x -= 15;
		if(_y > p1.y)
			_y += 10;
		//var circle = new Path.Circle([_x,_y],2);
		//circle.set_style({fillColor:'#000'});
		var text = new PointText(_x,_y);
		text.content = ""+_A+"°";
		text.set_style(textStyle);
	}
	this.showAngle = function(angle){
		switch(angle){
			case 'A':
				this.drawAngle(this.p1,this.p2,this.p3,this.a1,this._a1);
				break;
			case 'B':
				this.drawAngle(this.p2,this.p3,this.p1,this.a2,this._a2);
				break;
			case 'C':
				this.drawAngle(this.p3,this.p1,this.p2,this.a3,this._a3);
				break;
			default:
				throw 'invalid argument. valid arguments: [ A , B , C ]';
		}
		return this;
	}
	
	this.showEdge = function(edge){
		var k = 10;
		switch(edge){
			case 'a':
				var a = Util.findAngle(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
				this.drawEdgeText({x:(this.p1.x+this.p2.x)*0.5,y:(this.p1.y+this.p2.y)*0.5+5},a,k,this.i+" "+measure);
				break;
			case 'b':
				var a = Util.findAngle(this.p2.x,this.p2.y,this.p3.x,this.p3.y);
				this.drawEdgeText({x:(this.p2.x+this.p3.x)*0.5-5,y:(this.p2.y+this.p3.y)*0.5},a,k,this.j+" "+measure);
				break;
			case 'c':
				var a = Util.findAngle(this.p3.x,this.p3.y,this.p1.x,this.p1.y);
				this.drawEdgeText({x:(this.p3.x+this.p1.x)*0.5-15,y:(this.p3.y+this.p1.y)*0.5},a,k,this.k+" "+measure);
				break;
			default:
				throw 'invalid argument. valid arguments: [ a , b , c ]';
		}
		return this;
	}
	this.calculateAngles();
	this.paper = paper;
}

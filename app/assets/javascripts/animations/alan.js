// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {
	strokeColor:'#255b63',
	fillColor:'#bfe8ef',
	strokeWidth:2,
	cursor:'move'
};
var angleStyle = {'fill':'#DDD'};
var gridLineStyle = {strokeColor:'#ccc',strokeWidth:1}
/*Styles*/

var Animation = {
	init: function(container){
		function ShapeShifter(staticPoints,relativePoints,style1,style2,duration,delay,textHTML){
			this.staticPoints = staticPoints;
			this.relativePoints = relativePoints;
			this.style1 = style1;
			this.style2 = style2;
			this.duration = duration;
			this.delay = delay;
			this.textHTML = textHTML
			this.shape = null;
			this.draw = function(){
				this.shape = new Path();
				for(var i=0; i < this.staticPoints.length; i++){
					this.shape.add(this.staticPoints[i]);
				}
				this.shape.add(this.staticPoints[0]);
				this.shape.set_style(style1);			
			}
			if(delay == null || delay == undefined)
				this.delay = 0;
			this.startAnimation = function(){
				var anim = new AnimationHelper({
					textHTML:this.textHTML,
					style1:style1,
					style2:style2,
					shape:this.shape,
					pointsLength:this.staticPoints.length,
				});
				for(var i=0; i<this.staticPoints.length; i++)
					anim["point"+i] = this.staticPoints[i];
				for(var key in style1)
					anim[key] = style1[key];
				var style = {};
				for(var i=0; i<this.relativePoints.length; i++)
					style["point"+i] = this.relativePoints[i];	
				for(var key in this.style2)
					style[key] = this.style2[key];
				anim.animate({
					style:style,
					duration:this.duration,
					delay:this.delay,
					animationType:'easeIn',
					update:function(){
						if(this.shape)
							this.shape.remove();
						this.shape = new Path();
						for(var i=0; i < this.pointsLength; i++){
							this.shape.add(this["point"+i]);
						}
						this.shape.add(this["point0"]);
						this.shape.set_style(this.style1);
						//console.log(this.fillColor);
						this.shape.fillColor = this.fillColor;
								
					},
					callback:function(){
						this.shape.set_style(this.style2);
						var div = document.createElement('div');
						$(Animation.container).append(div);
						$(div)
							.html(this.textHTML)
							.css({
								position:'absolute',
								top:this.point0.y+Animation.gridSize*3,
								left:(this.point3.x+this.point2.x)*0.5+10,
								backgroundColor:'#fff',
								marginLeft:'-55px',
								lineHeight:'20px',
								textAlign:'center',
								fontWeight:'bold'					
							});
							
						function flashLine(span,container,point,delay){
							this.point = point;
							this.span = span;
							this.container = container;
							this.getPoint = function(attr){
								return new Point(
									this.point.x+a*parseInt($(this.span,this.container).attr(attr).split(",")[0],10),
									this.point.y+a*parseInt($(this.span,this.container).attr(attr).split(",")[1],10)
								);
							}
							var p1 = this.getPoint("lineFrom");
							var p2 = this.getPoint("lineTo");

							var line = new Path.Line(p1,p2);
							line.set_style({strokeWidth:3,strokeColor:"#f00"});
							line.opacity = 0;
							line._this_span = this.span;
							line._this_container = this.container;
							line.spanColor = new RgbColor(0,0,0);
							line.animate({
								style:{opacity:1,spanColor:new RgbColor(1,0,0)},
								duration:500,
								delay:0+delay,
								callback:function(){
									this.animate({
										style:{opacity:0,spanColor:new RgbColor(0,0,0)},
										duration:500,
										delay:500,
										update:function(){
											$(this._this_span,this._this_container).css({color:this.spanColor.toCssString()})
											},
										callback:this.remove
									})
								},
								update:function(){
									$(this._this_span,this._this_container).css({color:this.spanColor.toCssString()})
								}
							});
						}
						new flashLine("span#1",div,this.point0,0);
						new flashLine("span#2",div,this.point0,1500);
					}
				});	
			};
		}
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var p = new Point(w*0.5-350+0.5,h*0.5-90)
		var a = 35;
		Animation.gridSize = a;
		
		//draw grids
		for(var i=1;i<4;i++)
			new Path.Line(
				new Point(p.x,p.y+a*i),
				new Point(p.x+700,p.y+a*i)
			).set_style(gridLineStyle);
		for(var i=1;i<20;i++)
			new Path.Line(
				new Point(p.x+a*i,p.y),
				new Point(p.x+a*i,p.y+140)
			).set_style(gridLineStyle);
		
		
		
		var square = new ShapeShifter(
			[
				new Point(p.x+a*1,p.y+a*1),
				new Point(p.x+a*1,p.y+a*1),
				new Point(p.x+a*1,p.y+a*1),
				new Point(p.x+a*1,p.y+a*1)
			],
			[
				new Point(p.x+a*1,p.y+a*1),
				new Point(p.x+a*3,p.y+a*1),
				new Point(p.x+a*3,p.y+a*3),
				new Point(p.x+a*1,p.y+a*3)
			],
			
			{strokeColor:"#000",strokeWidth:2,fillColor:new RgbColor(1,1,0,0.5)},
			{},
			1000,
			0,
			'Karesel Bölge<br/> A = <span id="1" lineFrom="0,0" lineTo="0,2" >2br</span> x <span id="2" lineFrom="0,2" lineTo="2,2" >2br</span> = 4br²'
			
		);
		square.startAnimation();
		
		var rectangle = new ShapeShifter(
			[
				new Point(p.x+a*5,p.y+a*1),
				new Point(p.x+a*7,p.y+a*1),
				new Point(p.x+a*7,p.y+a*3),
				new Point(p.x+a*5,p.y+a*3)
			],
			[
				new Point(p.x+a*5,p.y+a*1),
				new Point(p.x+a*8,p.y+a*1),
				new Point(p.x+a*8,p.y+a*3),
				new Point(p.x+a*5,p.y+a*3)
			
			],
			{strokeColor:"#000",strokeWidth:2,fillColor:new RgbColor(1,1,0,0.5)},
			{fillColor:new RgbColor(1,0.7,0.7,0.5)},
			1000,
			4000,
			'Dikdörtgensel Bölge<br/> A = <span id="1" lineFrom="0,0" lineTo="0,2" >2br</span> x <span id="2" lineFrom="0,2" lineTo="3,2" >3br</span> = 6br²'
		);
		rectangle.startAnimation();
		
		var rhomboid = new ShapeShifter(
			[
				new Point(p.x+a*10,p.y+a*1),
				new Point(p.x+a*13,p.y+a*1),
				new Point(p.x+a*13,p.y+a*3),
				new Point(p.x+a*10,p.y+a*3)
			],
			[
				new Point(p.x+a*11,p.y+a*1),
				new Point(p.x+a*14,p.y+a*1),
				new Point(p.x+a*13,p.y+a*3),
				new Point(p.x+a*10,p.y+a*3)
			
			],
			{strokeColor:"#000",strokeWidth:2,fillColor:new RgbColor(1,0.7,0.7,0.5)},
			{fillColor:new RgbColor(0.5,0.7,1,0.5)},
			1000,
			8000,
			'Paralelkenarsal Bölge<br/> A = <span id="1" lineFrom="0,0" lineTo="0,2" >2br</span> x <span id="2" lineFrom="-1,2" lineTo="2,2" >3br</span> = 6br²'
		);
		rhomboid.startAnimation();
		
		var triangle = new ShapeShifter(
			[
				new Point(p.x+a*17,p.y+a*1),
				new Point(p.x+a*20,p.y+a*1),
				new Point(p.x+a*19,p.y+a*3),
				new Point(p.x+a*17,p.y+a*1),
				new Point(p.x+a*19,p.y+a*3),
				new Point(p.x+a*16,p.y+a*3),
			],
			[
				new Point(p.x+a*17,p.y+a*1),
				new Point(p.x+a*18,p.y+a*2),
				new Point(p.x+a*19,p.y+a*3),
				new Point(p.x+a*17,p.y+a*1),
				new Point(p.x+a*19,p.y+a*3),
				new Point(p.x+a*16,p.y+a*3),
			
			],
			{strokeColor:"#000",strokeWidth:2,fillColor:new RgbColor(0.5,0.7,1,0.5)},
			{fillColor:new RgbColor(1,1,0.7,0.5)},
			1500,
			12000,
			'Üçgensel Bölge<br/><span style="position:relative;top:10px;"> A =</span><span id="2" lineFrom="-1,2" lineTo="2,2" >3br</span> x <span id="1" lineFrom="0,0" lineTo="0,2" >2br</span><span style="position:relative;top:10px;"> = 3br²</span><br/><div style="position:relative;height:20px;width:50px;border-top:1px solid #000;left:30px;text-align:center;">2</div>'
		);
		triangle.startAnimation();
        Main.animationFinished(17000);
		
	}
};
var Interaction =function(){};Interaction();
Interaction.images = [
	{
		id : 'curve',
		src : '/assets/animations/curve_thin.png'
	}
]
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Yandaki geometrik şekillerin alanlarını bulunuz ve “Kontrol” düğmesine basarak  ya da “Enter” tuşuna basarak kontrol ediniz.');
	Interaction.container = container;
	
	$(Interaction.container).append('<div id="L"></div><div id="R"></div>');
	Interaction.L = $('div#L',Interaction.container).get(0);
	Interaction.R = $('div#R',Interaction.container).get(0);
	$(Interaction.container).append('<style>div#L,div#R{float:left;}</style>');
	$(Interaction.container).append('<style>div#L{position:absolute;top:0px;left:0px;width:60%;height:100%;text-align:center;}</style>');
	$(Interaction.container).append('<style>div#R{position:absolute;top:0px;left:60%;width:40%;height:100%;}</style>');
	$(Interaction.container).append('<style>div#R > div#T{box-sizing:border-box;padding-top:40%;}</style>');
	$(Interaction.container).append('<style>div#R > div#B{box-sizing:border-box;text-align:right;padding-right:25%;padding-top:10%;}</style>');
	$(Interaction.R).append('<div id="T"></div><div id="B"></div>');
	Interaction.input = document.createElement('input');
	Interaction.input.className = 'number_input_field';
	Interaction.input.setAttribute('type','text');
	Interaction.input.setAttribute('maxlength','3');
	$('div#T',Interaction.R).append('A =&nbsp;');
	$('div#T',Interaction.R).append(Interaction.input);
	$('div#T',Interaction.R).append('&nbsp;<span id="input_measure"></span>²');
	Interaction.button = document.createElement('input');
	Interaction.button.setAttribute('type','button');
	Interaction.button.onclick = TestGenerator.checkAnswer;
	Interaction.button.className = 'control_button';
	$('div#B',Interaction.R).append(Interaction.button);
	$('div#B',Interaction.R).append('<div id="status"></div>');
	Interaction.status = $('div#B > div#status',Interaction.R).get(0);
	Interaction.status.style.fontWeight = 'bold';
	Interaction.status.style.paddingTop = '10px';
	TestGenerator.nextQuestion();
}

Interaction.setStatus = function(str,cls){
	$(Interaction.status ).html(str);
	if(cls === true)
		$(Interaction.status ).get(0).className = 'status_true';
	else if(cls === false)
		$(Interaction.status ).get(0).className = 'status_false';
	else
		$(Interaction.status ).get(0).className = 'status';
}

var TestGenerator = {};

TestGenerator.nextQuestion = function(){
	Interaction.input.onkeyup = function(e){
		//console.log(e.keyCode)
		if(e.keyCode == 13)
			TestGenerator.checkAnswer();		
	}
	TestGenerator.shape = null;
	TestGenerator.trial = 0;
	TestGenerator.values = null;
	Main.interactionProject.activeLayer.removeChildren();
	Interaction.setStatus('');
	Interaction.button.className = 'control_button';
	Interaction.input.value = '';
	Interaction.input.style.color = '';
	Interaction.button.onclick = TestGenerator.checkAnswer;
	TestGenerator.shape = Math.floor(Math.random()*4);
	TestGenerator.paper = {width:300 , height:300}
	
	var m = Math.floor(Math.random()*2);
	TestGenerator.setMeasure(m);
	TestGenerator.letters = (Math.random()>0.5 ? ["A","B","C","D","E"]:["K","L","M","N","P"]);
	//*TEST*/TestGenerator.shape = 3;/*TEST*/
	
	switch(TestGenerator.shape){
		case 0:
			var a = Math.floor(Math.random()*10)+5;
			var area = a*a;
			TestGenerator.values = {a:a,area:area};
			new rectangle(a,a,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 1:
			var a,b;
			a = Math.floor(Math.random()*10)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*10)+5;
			TestGenerator.values = {a:a,b:b,area:a*b};
			rectangle(a,b,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 2:
			var a,b,H;
			a = Math.floor(Math.random()*5)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*5)+5;
			H = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,H:H,area:(a+b)*H};
			rhomboid(a,b,H,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 3:
			var a,b,H;
			a = Math.floor(Math.random()*5)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*5)+5;
			H = 1;
			while(H%2==1)
				H = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,H:H,area:(a+b)*H*0.5};
			triangle(a,b,H,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
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

TestGenerator.checkAnswer = function(){
	//check the answer
	var value = Interaction.input.value;
	var isWrong = false;
	if(value == "" ||isNaN(value)){
		isWrong = true;
		Interaction.setStatus('Lütfen bir sayı giriniz.',false);
		return;
	}
	else if(value == TestGenerator.values.area){
		Interaction.setStatus('Tebrikler !',true);
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
		//Interaction.button.value = 'Sonraki';
		Interaction.button.className = 'next_button';
	}
	else{
		Interaction.setStatus('Tekrar deneyiniz. ',false);
		TestGenerator.trial++;
		isWrong = true;
	}
	if(isWrong && TestGenerator.trial > 1){
		Interaction.input.style.color = 'red';
		Interaction.input.value = TestGenerator.values.area;
		Interaction.setStatus('Yanlış. Doğru cevap: '+TestGenerator.values.area+' '+TestGenerator.getMeasure() + '²',false);
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
		//Interaction.button.value = 'Sonraki';
		Interaction.button.className = 'next_button';
	}	
	else{
		TestGenerator.trial++;
	}
}
TestGenerator.printVertexLetters = function(p){
	for(var i=0; i<p.length;i++){
		var text = new PointText(p[i]);
		text.content = ""+TestGenerator.letters.shift();
		text.style = textStyle;
		text=null;
	}
}

function rectangle(a,b,measure,paper){
	var x,y,w,h,_t;
	_t = Math.min(paper.width,paper.height) * (Math.max(a,b) / 20);
	if(a > b){
		w = _t;
		h = _t * (b / a);
	}
	else{
		w = _t * (a / b);
		h = _t;	
	}
	x = (paper.width - w) * 0.5;
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
	var line = new Path.Line(new Point(x+_w,y), new Point(x+_w,y+h));
	line.style = edgeStyle;
	
	var t1 = new PointText(new Point(x+w*0.5-10,y+h+45));
	t1.content = ""+(a+b)+" "+measure;
	var t2 = new PointText(new Point(x+_w+5,y+h*0.5));
	t2.content = ""+H+" "+measure;
	
	var rect = new Path.Rectangle( new Point(x+_w-10,y+h-10), new Size(10,10) );
	rect.style = edgeStyle;
	var circle = new Path.Circle(new Point(x+_w-5,y+h-5),1);
	circle.style = edgeStyle;
	
	//curve for bottom edges
	var curve = new Raster('curve');
	curve.position= new Point(x+w*0.5,y+h+20)
	curve.size = new Size(w,curve.height);
	
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+_w+w+10,y-10),
				new Point(x+_w-10,y-10),
				new Point(x+_w,y+h+12)
			]
		);
}

function triangle(a,b,H,measure,paper){
	var x,y,w,_w,h,_t;
	_t = Math.min(paper.width,paper.height) * (Math.max(a+b,H) / 20);
	if(a+b > H){
		w = _t;
		_w= _t * a / (a+b); 
		h = _t * (H/(a+b));
	}
	else{
		w = _t * ((a+b)/H);
		_w= _t * a / H; 
		h = _t;
	}
	x = (paper.width - (w)) * 0.5;
	y = (paper.height - h) * 0.5;
	//console.log([a,b,H]);
	//console.log([_w,w,h]);
	var triangle = new Path.Triangle( new Point(x,y+h), new Point(x+w,y+h), new Point(x+_w,y) );
	triangle.style = edgeStyle;
	var line = new Path.Line(new Point(x+_w,y), new Point(x+_w,y+h));
	line.style = edgeStyle;
	var t1 = new PointText(new Point(x+w*0.5-10,y+h+45));
	t1.content = ""+(a+b)+" "+measure;
	var t2 = new PointText(new Point(x+_w+5,y+h*0.5));
	t2.content = ""+H+" "+measure;
	var rect = new Path.Rectangle( new Point(x+_w-10,y+h-10), new Size(10,10) );
	rect.style = edgeStyle;
	var circle = new Path.Circle(new Point(x+_w-5,y+h-5),1);
	circle.style = edgeStyle;
	
	//curve for bottom edges
	var curve = new Raster('curve');
	curve.position= new Point(x+w*0.5,y+h+20)
	curve.size = new Size(w,curve.height);
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+_w-10,y-10),
				new Point(x+_w,y+h+12)
			]
		);
}


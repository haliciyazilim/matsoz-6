// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {strokeColor:'#000',strokeWidth:2,fillColor:'#ff0',cursor:'move'};
var angleStyle = {'fill':'#DDD'};
/*Styles*/

var Animation = {
	images:[
		{
			id:'piechart',
			src:'/assets/animations/olasilik/pie_chart.png'
		},
		{
			id:'point',
			src:'/assets/animations/olasilik/point.png'
		},
		{
			id:'arrow',
			src:'/assets/animations/olasilik/arrow.png'
		}
	],
	showResult:function(){
		$(Animation.container).append(
			'<div id="result">'+
				'<div style="width:150px;line-height:50px;">Yeşil Gelme Olasılığı = </div>'+
				'<div style="width:130px;line-height:25px;text-align:center;">'+
					'<div>Yeşil Gelme Sayısı</div>'+
					'<div style="height:1px;border-top:2px solid #000;"></div>'+
					'<div>Dönme Sayısı</div>'+
				'</div>'+
				'<div style="width:20px;line-height:50px;">&nbsp;=&nbsp;</div>'+
				'<div style="width:35px;line-height:25px;text-align:center;">'+
					'<div>186</div>'+
					'<div style="height:1px;border-top:2px solid #000;"></div>'+
					'<div>500</div>'+
				'</div>'+
				'<div style="width:40px;line-height:50px;text-align:left">&nbsp;=&nbsp;0,37&nbsp;</div>'+
				'<div style="width:40px;line-height:50px;text-align:left">&nbsp;=&nbsp;%37</div>'+
			'</div>'
		);	
		$('div#result',Animation.container).css({
			position:'absolute',
			overflow:'hidden',
			top:'70%',
			height:'50px',
			width:'420px',
			left:'40%',
			opacity:0
		});
		$('div#result > div',Animation.container).css({
			float:'left'
		});
		$('div#result',Animation.container).animate({opacity:1},1000);
		Animation.onFrame = undefined;
	},
	init:function(container){
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var x = w *0.5;
		var y = h*0.5;
		$(container).append(
			'<div id="olasilik_table_container">'+
				'<table id="olasilik_table">'+
					'<tr class="dark">'+
						'<th>Dönme Sayısı</th>'+
						'<th>Beyaz Gelme Sayısı</th>'+
						'<th>Yeşil Gelme Sayısı</th>'+
					'</tr>'+
					'<tr id="1">'+
						'<td id="1">&emsp;</td>'+
						'<td id="2">&emsp;</td>'+
						'<td id="3">&emsp;</td>'+
					'</tr>'+
					'<tr id="2" class="dark">'+
						'<td id="1">&emsp;</td>'+
						'<td id="2">&emsp;</td>'+
						'<td id="3">&emsp;</td>'+
					'</tr>'+
					'<tr id="3" >'+
						'<td id="1">&emsp;</td>'+
						'<td id="2">&emsp;</td>'+
						'<td id="3">&emsp;</td>'+
					'</tr>'+
				'</table>'+
			'</div>'
		);
		Animation.table = $('table#olasilik_table',container).get(0);
		$('div#olasilik_table_container',container).css({
			position:'absolute',
			width:'300px',
			height:'150px',
			top:'20px',
			left:'50%'
		});
		$('table#olasilik_table td,table#olasilik_table th',container).css({
			border:'1px solid #999',
			borderCollapse:'hidden',
			height:'23px',
			textAlign:'center',
			verticalAlign:'middle'
		});
		$('tr.dark').css({
			backgroundColor:'#ccc'
		});
		
		var p1 = new Point(x-150,y);
		var piechart = new Raster('piechart');
		
		piechart.position = p1;
		
		Animation.arrow = new Raster('arrow');
		Animation.arrow.position = p1.add(10,0);
		
		Animation.arrow.set_style({
			strokeWidth:6,
			strokeColor:'#f00',
			fillColor:'#f00'
		})
		Animation.arrowPoint = new Raster('point');
		Animation.arrowPoint.position = p1;
		Animation.arrowPoint.set_style({
			strokeColor:'#000',
			fillColor:'#000'
		});
		animationHelper = {
			angle:0,
			oldAngle:0,
			firstStop:0,
			secondStop:0,
			thirdStart:0,
			thirdStop:0,
			tr11:0,
			tr12:0,
			tr13:0,
			tr21:0,
			tr22:0,
			tr23:0,
			tr31:0,
			tr32:0,
			tr33:0
		}	
		
		Animation.onFrame = function(event){
			var dA = ( animationHelper.angle - animationHelper.oldAngle );
			Animation.arrow.rotate( - dA ,p1)
			//console.log(animationHelper.thirdStart);
			animationHelper.oldAngle = animationHelper.angle;	
			if(animationHelper.firstStop == 1){
				$('tr#1 td#1',Animation.table).html(animationHelper.tr11);
				$('tr#1 td#2',Animation.table).html(animationHelper.tr12);
				$('tr#1 td#3',Animation.table).html(animationHelper.tr13);
				animationHelper.firstStop = 0;
			}
			else if(animationHelper.secondStop == 1){
				$('tr#1 td#1',Animation.table).html(animationHelper.tr11);
				$('tr#1 td#2',Animation.table).html(animationHelper.tr12);
				$('tr#1 td#3',Animation.table).html(animationHelper.tr13);
				animationHelper.secondStop = 0;
			}
			else if(animationHelper.thirdStop == 1){
				animationHelper.thirdStart = 0;
				animationHelper.thirdStop = 0;
				Animation.showResult();
				
			}
			else if(animationHelper.thirdStart > 0){
				$('tr#1 td#1',Animation.table).html(Math.floor(animationHelper.tr11));
				$('tr#1 td#2',Animation.table).html(Math.floor(animationHelper.tr12));
				$('tr#1 td#3',Animation.table).html(Math.floor(animationHelper.tr13));
				if(animationHelper.tr21 > 0){
					$('tr#2 td#1',Animation.table).html(Math.floor(animationHelper.tr21));
					$('tr#2 td#2',Animation.table).html(Math.floor(animationHelper.tr22));
					$('tr#2 td#3',Animation.table).html(Math.floor(animationHelper.tr23));
				}
				if(animationHelper.tr31 > 0){
					$('tr#3 td#1',Animation.table).html(Math.floor(animationHelper.tr31));
					$('tr#3 td#2',Animation.table).html(Math.floor(animationHelper.tr32));
					$('tr#3 td#3',Animation.table).html(Math.floor(animationHelper.tr33));
				}
			}
		}
		
		animationHelper.animate = Item.prototype.animate;
		animationHelper.animate({
			style:{
				angle:6000,
				thirdStart:100,
				thirdStop:1
			},
			duration:4500,
			delay:4000,
			animationType: 'easeInEaseOut',
            callback:Main.animationFinished
		});
		animationHelper.animate({
			style:{
				tr31:500,
				tr32:314,
				tr33:186
			},
			duration:1500,
			delay:6500,
			animationType: 'easeInEaseOut'
		});
		animationHelper.animate({
			style:{
				tr21:100,
				tr22:63,
				tr23:37
			},
			duration:1500,
			delay:5000,
			animationType: 'easeInEaseOut'
		});
		animationHelper.animate({
			style:{
				tr11:50,
				tr12:36,
				tr13:14,
			animationType: 'easeInEaseOut'
			},
			duration:1000,
			delay:4000
		});
		animationHelper.animate({
			style:{
				angle:1030,
				tr11:2,
				tr12:1,
				tr13:1,
				secondStop:1
			},
			duration:1000,
			delay:2500,
			animationType: 'easeInEaseOut'
		});
		animationHelper.animate({
			style:{
				angle:480,
				tr11:1,
				tr12:0,
				tr13:1,
				firstStop:1
			},
			duration:1000,
			delay:500,
			animationType: 'easeInEaseOut'
		});
		
	}
};
var Interaction = {};

Interaction.images = [
	{
		id : 'tura',
		src : '/assets/animations/olasilik/tura.png'
	},
	{
		id : 'yazi',
		src : '/assets/animations/olasilik/yazi.png'
	},
	{
		id : 'hand',
		src : '/assets/animations/olasilik/hand.png'
	}
	
];
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Yandaki madeni parayı yandaki el resmine basarak istediğiniz kadar atarak tura geliş olasılığını izleyiniz.');
	Interaction.container = container;
	var w = $(container).width();
	var h = $(container).height();
	Interaction.position = [w*0.2,h*0.5]	
	
	Interaction.probability = {
		tura:0,
		total:0,
		div:document.createElement('div')
	};	
	Interaction.probability.div.innerHTML = 
		'<div id="numberoftura" style="width:50px;height:30px;padding:0;border:1px solid #000;margin:auto;"></div>'+
		'<div style="width:60px;height:1px;padding:0;border-top:2px solid #000;margin:auto;margin-top:5px;"></div>'+
		'<div id="total" style="width:50px;height:30px;padding:0;border:1px solid #000;margin:auto;margin-top:5px;"></div>';
	$(Interaction.probability.div).css({
		position:'absolute',
		top:h*0.5-105,
		right:'30px',
		textAlign:'center',
		lineHeight:'30px'
	});
	$(container).append(Interaction.probability.div);
	//
	$(container).append('<div style="position:absolute;right:95px;top:25%;">Tura gelme olasılığı = </div>')
	Interaction.side = new Raster(Util.rand01==1?'tura':'yazi')
	Interaction.side.position = Interaction.position;
	Interaction.hand = new Raster('hand');
	Interaction.hand.position = [w*0.6-20,h*0.6+10];
	Interaction.bindTool();
}

Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}


Interaction.nextQuestion = function(){
	Interaction.tool.remove();
	Interaction.side.remove();
	Interaction.probability.total++;
	if(Util.rand01() == 1){
		Interaction.sideName = "tura";
		Interaction.switchName = "yazi"
		Interaction.probability.tura++;
	}
	else{
		Interaction.sideName = "yazi";
		Interaction.switchName = "tura"
	}
	Interaction.angle = 0;
	Interaction.angle_old = 0;
	Interaction.startTime = new Date().getTime();
	
	var helper = {
		angle: 0
	}
	helper.animate = Item.prototype.animate;
	helper.animate({
		style:{angle:Math.PI*10},
		duration:3000,
		animationType: 'easeOut',
		callback:function() {
			Interaction.updateProbability();
		}
	});
	
	Interaction.onFrame = function(){

		if(Interaction.side)
			Interaction.side.remove();
		var angle = Math.floor(Util.radianToDegree(helper.angle)) % 360;
		
		if(angle < 90)
			Interaction.side = new Raster(Interaction.sideName);
		else if(angle <  270)
			Interaction.side = new Raster(Interaction.switchName);
		else
			Interaction.side = new Raster(Interaction.sideName);
			
		var h = Math.abs(Interaction.side.height * Math.cos(helper.angle));
		//w=0;
		if(h > 0 && h < 1)
			h=1;
		//console.log(Interaction.angle,w);
		var w = Interaction.side.width  //- Interaction.side.width*0.4 / z;
		Interaction.side.position = Interaction.position;
		Interaction.side.size = new Size(h,w );
		Interaction.angle_old = Interaction.angle;
	}

}

Interaction.updateProbability = function(){
	$('#numberoftura').html(Interaction.probability.tura);
	$('#total').html(Interaction.probability.total);
	Interaction.bindTool();
}

Interaction.bindTool = function(){
	var tool = new Tool();
	tool.onMouseDown = function(event){
		if(Interaction.hand.bounds.contains(event.point)){
			//Interaction.enterFullScreen();
			Interaction.nextQuestion();
		}
	}
	tool.activate();
	Interaction.tool = tool;
}

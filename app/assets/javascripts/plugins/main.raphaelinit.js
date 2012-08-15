// JavaScript Document
Main.raphaelInit = function(){
	Raphael.fn.triangle = function(x1,y1,x2,y2,x3,y3){
		var pathstring ='';
		pathstring += 'M'+x1+','+y1+'L'+x2+','+y2;
		pathstring += 'L'+x3+','+y3+' z';
		var triangle = this.path(pathstring);
		triangle.attr({x:x1,y:y3});
		return triangle;
	};
	
	Raphael.fn.line = function(x1,y1,x2,y2){
		var line = this.path('M'+x1+','+y1+'L'+x2+','+y2);
		line.attr('x',x1);
		line.attr('y',y1);
		line.data('isPath',true);
		return line;
	};
	
	Raphael.fn.bowl = function(x,y,w,h){
		var bowl = this.path('M'+x+','+y+'L'+(x+w)+','+y+'L'+(x+w*0.8)+','+(y+h)+'L'+(x+0.2*w)+','+(y+h)+' z');
		bowl.attr('x',x);
		bowl.attr('y',y);
		bowl.attr('width',w);
		bowl.attr('height',h);
		return bowl;
	};
	
	Raphael.fn.rhomboid = function(x,y,_w,w,h){
		var pathstring = '';
		pathstring += 'M'+(x+_w)+','+y+'L'+(x+_w+w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += 'L'+x+','+(y+h)+' z';
		var rhomboid = this.path(pathstring);
		rhomboid.attr({'x':x,'y':y});
		return rhomboid;
	};
	
	Raphael.fn.cube = function(x,y,a){
		var _x=x+a*0.4,_y=y+a*0.2;	
		var cube = this.path('M'+x+','+_y+'L'+x+','+(_y+a)+'L'+(x+a)+','+(_y+a)+'L'+(x+a)+','+_y+'L'+x+','+_y+'L'+_x+','+y+'L'+(_x+a)+','+y+'L'+(x+a)+','+_y+'L'+(x+a)+','+(_y+a)+'L'+(_x+a)+','+(y+a)+'L'+
		(_x+a)+','+y);
		cube.data('isPath',true);
		cube.attr('x',x);
		cube.attr('y',y);
		return cube;
	};
	Raphael.fn.rhombus = function(x,y,w,h){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y);
		pathstring += 'L'+(x+w)+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y+h);
		pathstring += 'z';
		var rhombus = this.path(pathstring);
		rhombus.data({'x':x,'y':y,'w':w,'h':h});
		return rhombus;
	}
	Raphael.fn.trapezoid = function(x,y,w,h,_w){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h);
		pathstring += 'L'+(x+(w-_w)*0.5)+','+y;
		pathstring += 'L'+(x+(w-_w)*0.5+_w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += ' z';
		var trapezoid = this.path(pathstring);
		trapezoid.data({'x':x,'y':y,'w':w,'h':h});
		return trapezoid;
	}
	Raphael.fn.sphere = function(x,y,r,fill){
		var sphere = this.ellipse(x, y, r, r).attr({
			fill: "r(.3,.25) white-" + fill,
			stroke: "none"
		});
		sphere.data('isEllipse',true);
		sphere.attr('x',x);
		sphere.attr('y',y);
		return sphere;
	};
	Raphael.fn.sline = function(x,y,l){
		var pathstring='';
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y-10);
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y+10);
		pathstring += 'M'+x+','+y+'L'+(x+l)+','+y;
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y-10);
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y+10);
		var sline = this.path(pathstring);
		sline.attr('x',x);
		sline.attr('y',y);
		return sline;
	}
	Raphael.fn.cylinder = function(x,y,w,h){
		var x1,y1,x2,y2;
		var pathstring='';
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y-h*0.2;
		y2 = y-h*0.2;
		pathstring += 'M'+x+','+y+'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		pathstring += 'L'+x+','+(y+h);
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h+h*0.2;
		y2 = y+h+h*0.2;
		pathstring += 'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+(y+h);
		pathstring += 'L'+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		var cylinder = this.path(pathstring);
		cylinder.data('isPath',true);
		cylinder.attr('x',x);
		cylinder.attr('y',y);
		cylinder.attr('fill','#fff');
		return cylinder;
	};
	
	Raphael.fn.fraction = function(top_x, top_y, nom, denom,scale) {
		var st = this.set();
		c2=top_y+scale;
		c3=top_x+scale*1.5;
		if (nom) {
			pay=this.text(top_x+scale*5/7, top_y, nom);
			pay.attr({"font-size" :scale});
			st.push(pay);	
		}
		if (denom) {
			payda=this.text(top_x+scale*5/7, c2+scale, denom);
			payda.attr({"font-size" :scale});
			st.push(payda);			

		}
		var kesirCizgi="M"+top_x+" "+c2+"L"+c3+" "+c2;
		st.push(this.path(kesirCizgi));
		return st;
	};
	
	Raphael.fn.segmentedUmbrella = function (cx, cy, r, numberOfSegments) {
		var st = this.set();
		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(-i)/numberOfSegments - 90, 360*(-i-1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	};
	
	Raphael.fn.segmentedCircle = function (cx, cy, r, numberOfSegments) {
		var st = this.set();
		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(i)/numberOfSegments - 90, 360*(i+1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	};
	
	Raphael.fn.segmentedRectangle = function (x, y, width, height, horizontalSegments, verticalSegments) {
		var st = this.set();
		for (i = 0; i < horizontalSegments; i++) {
			for (j = 0; j < verticalSegments; j++) {
				st.push(
					this.rect(x + i * width/horizontalSegments, y + j * height/verticalSegments, width/horizontalSegments, height/verticalSegments)
				);
			}
		}
		return st;
	};
	
	Raphael.fn.regularPolygon = function(x,y,w,h,k,o){
		var angles = [];
		for(var i=0; i<k ;i++){
			angles[i] = 360/k*i;
		}
		return this.equiradialPolygon(x,y,w,h,angles,o)
	};
	Raphael.fn.equiradialPolygon = function(x,y,w,h,angles,o){
		var _o=Math.random()*60;
		if(o != null)
			_o=o;
		var a = Math.min(w,h)*0.5;
		var mx = x + w*0.5;
		var my = y + h*0.5;
		var pathstring = '';
		for(var i=0; i<angles.length ;i++){
			pathstring += (i==0?'M':'L');
			var _angle = Util.degreeToRadians(_o+angles[i]);
			var _x = mx + a*Math.cos(_angle);
			var _y = my + a*Math.sin(_angle);
			pathstring += _x + ',' + _y;
		}
		pathstring += 'z';
		return this.path(pathstring);
	}
	
};
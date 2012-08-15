// JavaScript Document
function Compass(x,y){
	this.defaultX = x;
	this.defaultY = y;
	this.left = new Raster('compass_left_leg');
	this.right = new Raster('compass_right_leg');
	this.knuckle = new Raster('compass_knuckle');
	this.R = this.left.size.height;
	this.group = new Group();
	this.group.addChild(this.left);
	this.group.addChild(this.right);
	this.group.addChild(this.knuckle);
	this.left.position = [
		x,
		y-this.left.size.height*0.5
	]; 
	this.knuckle.position = [
		x+this.left.size.width*0.5,
		y-this.left.size.height-this.knuckle.size.height*0.5
	];
	this.right.position = [
		x+this.left.size.width,
		y-this.right.size.height*0.5
	];

	this.d = this.right.position.x -this.left.position.x;
	
	this.remove = function(){
		this.left.remove();
		this.right.remove();
		this.knuckle.remove();
	};
	this.changeDelta = function(dx){
		var _betha = Math.acos((this.d)/(2*this.R));
		var _alpha = Math.acos((this.d+dx)/(2*this.R));
		var _o = Util.radianToDegree(_betha ) - Util.radianToDegree(_alpha);
		var dy  = this.R*(Math.sin(_betha) - Math.sin(_alpha));
		this.left.rotate(
			_o,
			[
				this.defaultX,
				this.defaultY
			]
		);
		this.right.rotate(
			-_o,
			[
				this.defaultX+this.d,
				this.defaultY
			]
		);
		this.knuckle.position.y += dy;
		this.right.position.x += dx;
		this.knuckle.position.x += dx/2;
		this.d += dx;
	};
	this.rotate = function(angle,point){
		this.left.rotate(angle,point);
		this.right.rotate(angle,point);
		this.knuckle.rotate(angle,point);
	}
};
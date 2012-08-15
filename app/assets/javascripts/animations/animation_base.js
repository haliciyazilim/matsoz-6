var canvas;
var context;
var ipad;
var canvasWidth;
var canvasHeight;
var scene;

$(document).ready(function() {
	
	scene = Scene.create();
	
	ipad = (window.navigator.userAgent.match('iPad'))?true:false;
	
	canvas = $("#animation_canvas").get(0);
	context = canvas.getContext("2d");

	canvasWidth = canvas.width;
	canvasHeight = canvas.height;

	if(window.devicePixelRatio == 2) {
		canvas.setAttribute('width', canvasWidth * 2);
		canvas.setAttribute('height', canvasHeight * 2);
		context.scale(2,2);
	}
	
	window.requestAnimFrame = (function() {
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function(/* function */ callback, /* DOMElement */ element){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	
		if (ipad) {
			$("#animation_canvas").bind('touchstart', function(e) {
				var x = e.originalEvent.targetTouches[0].pageX - $(this).offset().left;
				var y = e.originalEvent.targetTouches[0].pageY - $(this).offset().top;
				scene.mouse_down(x, y);
			});	
		} else {
			$("#animation_canvas").mousedown(function(e) {
				var x = e.pageX - $(this).offset().left;
				var y = e.pageY - $(this).offset().top;
				scene.mouse_down(x, y);
		   	});
		}

		if (ipad) {
			$("#animation_canvas").bind('touchmove', function(e) {
				var x = e.originalEvent.targetTouches[0].pageX - $(this).offset().left;
				var y = e.originalEvent.targetTouches[0].pageY - $(this).offset().top;
				scene.smouse_move(x, y);
				e.originalEvent.preventDefault();
			});
		} else {
			$("#animation_canvas").mousemove(function(e) {
				var x = e.pageX - $(this).offset().left;
				var y = e.pageY - $(this).offset().top;
				scene.mouse_move(x, y);
		   	});
		}

	if (ipad) {
		$(document).bind('touchend', function(e) {
			scene.mouse_up();
		});		
	} else {
		$(document).mouseup(function(e) {
			scene.mouse_up();
		});
	}
	
	animationInit();
	mainLoop();
});

function mainLoop() {
	scene.draw();
	requestAnimFrame(mainLoop);
}

function clone(object) {
  function OneShotConstructor(){}
  OneShotConstructor.prototype = object;
  return new OneShotConstructor();
}

function forEachIn(object, action) {
  for (var property in object) {
    if (object.hasOwnProperty(property))
      action(property, object[property]);
  }
}

Object.prototype.create = function() {
  var object = clone(this);
  if (typeof object.construct == "function")
    object.construct.apply(object, arguments);
  return object;
};

Object.prototype.extend = function(properties) {
  var result = clone(this);

  forEachIn(properties, function(name, value) {
    result[name] = value;
  });
  return result;
};

var Scene = {
	construct: function () {
		this.drawables = [];
	},

	addDrawable: function(drawable) {
		this.drawables.push(drawable)
	},
	
	needsRedraw: true,
	redraw: function () {
		this.needsRedraw = true;
	},

	draw: function () {
		if (this.needsRedraw) {
			context.clearRect(0, 0, canvasWidth, canvasHeight);
			for (var i=0; i<this.drawables.length; i++) {
				if (this.drawables[i].visible) {
					context.save();
			    	this.drawables[i].drawObject();
					context.restore();
				}
			}
			
			this.needsRedraw = false;
		}
	},
	
	//Event Handling
	mouse_down: function (x, y) {
		for (var i=this.drawables.length; i>0; i--) {
			if (this.drawables[i-1].mouse_down(x, y)) {
				return true;
			}
		}
		
		if (typeof this.onMouseDown == "function") {
			return this.onMouseDown(x, y);
		}
		
		return false;
	},
	
	mouse_move: function (x, y) {
		for (var i=this.drawables.length; i>0; i--) {
			if (this.drawables[i-1].mouse_move(x, y)) {
				return true;
			}
		}
		
		if (typeof this.onMouseMove == "function") {
			return this.onMouseMove(x, y);
		}
		
		return false;
	},
	
	mouse_up: function () {
		for (var i=this.drawables.length; i>0; i--) {
			if (this.drawables[i-1].mouse_up()) {
				return true;
			}
		}
		
		if (typeof this.onMouseUp == "function") {
			return this.onMouseUp(x, y);
		}
		
		return false;
	},

	// Utility Functions
	drawLine: function (x1, y1, x2, y2) {
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
	},

	drawTriangle: function (x1, y1, x2, y2, x3, y3) {
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.lineTo(x3, y3);
		context.closePath();
		context.fill();

		this.drawLine(x1, y1, x2, y2);
		this.drawLine(x2, y2, x3, y3);
		this.drawLine(x3, y3, x1, y1);
	},

	drawRectangle: function (x, y, width, height) {
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + width, y);
		context.lineTo(x + width, y + height);
		context.lineTo(x, y + height);
		context.closePath();
		context.fill();
		context.stroke();
	},
	
	// Math Functions
	Math:{
		distance: function (x1, y1, x2, y2) {
			return Math.sqrt((x1-x2) * (x1-x2) + (y1-y2)*(y1-y2));
		}
	}
	
};

var Drawable = {
	construct: function (x, y, width, height) {
		this.setBoundingBox(x, y, width, height);
		this.setRotation(0);
		this.children = [];
	},
	
	contains: function (x, y) {
		x = x - this.centerX();
		y = y - this.centerY();
		local_x = x*Math.cos(-this.rotation()) + y*Math.sin(-this.rotation());
		local_y = y*Math.cos(-this.rotation()) - x*Math.sin(-this.rotation());
		local_x = local_x / this.scaleX();
		local_y = local_y / this.scaleY();
		x = local_x + this.centerX();
		y = local_y + this.centerY();
		
		return (x < (this.x() + this.width()) &&
		 		x > (this.x()) &&
		 		y < (this.y() + this.height()) &&
				y > (this.y()));
	},
	
	drawObject: function() {
		context.strokeStyle = this.strokeStyle;
		context.fillStyle = this.fillStyle;
		context.lineWidth = this.lineWidth;
		context.lineCap = this.lineCap;
		context.translate(this.centerX(), this.centerY());
		context.rotate(-this.rotation());
		context.scale(this.scaleX(), this.scaleY());
		context.translate(-this.centerX(), -this.centerY());
		
		this.draw();

		context.translate(this.x(), this.y());
		for (index = 0; index < this.children.length; index++) {
			this.children[index].drawObject();
		}
		context.translate(-this.x(), -this.y());
	},		
	
	// Getters
	x: function () {
		return this._x;
	},
	
	y: function () {
		return this._y;
	},
	
	width: function () {
		return this._width;
	},
	
	height: function () {
		return this._height;
	},
	
	centerX: function () {
		return this.x() + this.width()/2;
	},
	
	centerY: function () {
		return this.y() + this.height()/2;
	},
	
	rotation: function() {
		return this._rotation;
	},
	
	scaleX: function() {
		return this._scaleX;
	},
	
	scaleY: function() {
		return this._scaleY;
	},
	
	// Setters
	setBoundingBox: function (x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		
		scene.redraw();
	},
	
	setOrigin: function (x, y) {
		this._x = x;
		this._y = y;
		
		scene.redraw();
	},
	
	setX: function (x) {
		this._x = x;
		
		scene.redraw();
	},
	
	setY: function (y) {
		this._y = y;
		
		scene.redraw();
	},
	
	setCenter: function (centerX, centerY) {
		this._x = centerX - this.width()/2;
		this._y = centerY - this.height()/2;
	
		scene.redraw();
	},
	
	setRotation: function (angle) {
		while (angle < 0) {
			angle += 2*Math.PI;
		}
		
		while (angle > 2*Math.PI) {
			angle -= 2*Math.PI;
		}
		
		this._rotation = angle;
		
		scene.redraw();
	},
	
	setScale: function (scaleX, scaleY) {
		this._scaleX = scaleX;
		this._scaleY = scaleY;
		
		scene.redraw();
	},
	
	// Event Handling
	mouse_down: function (x, y) {
		local_x = x - this.centerX();
		local_y = y - this.centerY();
		child_x = local_x*Math.cos(-this.rotation()) + local_y*Math.sin(-this.rotation());
		child_y = local_y*Math.cos(-this.rotation()) - local_x*Math.sin(-this.rotation());
		child_x = child_x / this.scaleX();
		child_y = child_y / this.scaleY();
		child_x = child_x + this.centerX() - this.x();
		child_y = child_y + this.centerY() - this.y();
		
		for (index = 0; index < this.children.length; index++) {
			if (this.children[index].mouse_down(child_x, child_y)) {
				return true;
			}
		}
		
		if (typeof this.onMouseDown == "function") {
			return this.onMouseDown(x, y);
		}
		
		return false;
	},
	
	mouse_move: function (x, y) {
		local_x = x - this.centerX();
		local_y = y - this.centerY();
		child_x = local_x*Math.cos(-this.rotation()) + local_y*Math.sin(-this.rotation());
		child_y = local_y*Math.cos(-this.rotation()) - local_x*Math.sin(-this.rotation());
		child_x = child_x / this.scaleX();
		child_y = child_y / this.scaleY();
		child_x = child_x + this.centerX() - this.x();
		child_y = child_y + this.centerY() - this.y();
		
		for (index = 0; index < this.children.length; index++) {
			if (this.children[index].mouse_move(child_x, child_y)) {
				return true;
			}
		}
		
		if (typeof this.onMouseMove == "function") {
			return this.onMouseMove(x, y);
		}
		
		return false;
	},
	
	mouse_up: function () {
		for (index = 0; index < this.children.length; index++) {
			if (this.children[index].mouse_up()) {
				return true;
			}
		}
		
		if (typeof this.onMouseUp == "function") {
			return this.onMouseUp();
		}
		
		return false;
	},
		
	visible: true,
	
	// Hierarchy
	children: null,
	parent: null,
	
	addChild: function(child) {
		this.children.push(child);
		child.parent = this;
	},
		
	// Drawing Style		
	strokeStyle: 'black',
	fillStyle: 'white',
	lineWidth: 4,
	lineCap: 'round',
	
	// Transformations
	_rotation: 0,
	_scaleX: 1,
	_scaleY: 1
};

var Movable = Drawable.extend ({
	construct: function (x, y, width, height) {
		Drawable.construct.call(this, x, y, width, height);
	},
	
	draw: function() {
		if (this.rotatable()) {
			size = 5;
			context.fillStyle = 'red';
			context.strokeStyle = 'gray';
			context.lineWidth = 1;
			Scene.drawLine(this.x(), this.y(), this.x() + this.width(), this.y());
			Scene.drawLine(this.x() + this.width(), this.y(), this.x() + this.width(), this.y() + this.height());
			Scene.drawLine(this.x() + this.width(), this.y() + this.height(), this.x(), this.y() + this.height());
			Scene.drawLine(this.x(), this.y() + this.height(), this.x(), this.y());									
			
			context.strokeStyle = 'black';
			Scene.drawRectangle(this.x()-size, this.y()-size, 2*size, 2*size);
			Scene.drawRectangle(this.x()+this.width()-size, this.y()-size, 2*size, 2*size);
			Scene.drawRectangle(this.x()+this.width()-size, this.y()+this.height()-size, 2*size, 2*size);
			Scene.drawRectangle(this.x()-size, this.y()+this.height()-size, 2*size, 2*size);
		}
	},
	
	onMouseDown: function (x, y) {
		size = 5;
		
		rotation_x = x - this.centerX();
		rotation_y = y - this.centerY();
		local_x = rotation_x*Math.cos(-this.rotation()) + rotation_y*Math.sin(-this.rotation());
		local_y = rotation_y*Math.cos(-this.rotation()) - rotation_x*Math.sin(-this.rotation());
		// local_x = local_x / this.scaleX();
		// local_y = local_y / this.scaleY();
		rotation_x = local_x + this.centerX();
		rotation_y = local_y + this.centerY();
		
		if (	(  rotation_x > this.x()-size && rotation_x < this.x()+size
		 		&& rotation_y > this.y()-size && rotation_y < this.y()+size) ||
				(  rotation_x > this.x()+this.width()-size && rotation_x < this.x()+this.width()+size    
			    && rotation_y > this.y()-size && rotation_y < this.y()+size) ||
				(  rotation_x > this.x()+this.width()-size && rotation_x < this.x()+this.width()+size
				&& rotation_y > this.y()+this.height()-size && rotation_y < this.y()+this.height()+size) ||
				(  rotation_x > this.x()-size && rotation_x < this.x()+size
				&& rotation_y > this.y()+this.height()-size && rotation_y < this.y()+this.height()+size)) {
			this.rotating = true;
			this.rotationAngle = findAngle(this.centerX(), this.centerY(), rotation_x, rotation_y);
			return true;
		} else if (this.contains(x, y) && this.movable()) {
			this.moving = true;
			this.offset_x = x - this.x();
			this.offset_y = y - this.y();
			return true;
		} else {
			return false;
		}
	},
	
	onMouseMove: function (x, y) {
		if (this.rotating) {
			local_x = x;
			local_y = y;
			// local_x = x - this.centerX();
			// local_y = y - this.centerY();
			// local_x = local_x / this.scaleX();
			// local_y = local_y / this.scaleY();
			// local_x = local_x + this.centerX();
			// local_y = local_y + this.centerY();
			
			this.setRotation(findAngle(this.centerX(), this.centerY(), local_x, local_y) - this.rotationAngle);
			if (typeof this.onRotate == "function") {
				this.onRotate(this.rotation());
			}
			scene.redraw();
			return true;
		} else if (this.moving) {
			if (!this.lockMovementX) {
				this.setX(x - this.offset_x);
			}
			
			if (!this.lockMovementY) {
				this.setY(y - this.offset_y);
			}
			
			if (typeof this.onMove == "function") {
				this.onMove(this.x(), this.y());
			}
			scene.redraw();
			return true;
		} else {
			return false;
		}
	},
	
	onMouseUp: function () {
		if (this.rotating) {
			this.rotating = false;
			return true;
		} else if (this.moving) {
			this.moving = false;
			return true;
		} else {
			return false;
		}
	},
	
	// Getters
	movable: function() {
		return this._movable;
	},
	
	rotatable: function() {
		return this._rotatable;
	},
	
	// Setters
	setMovable: function(movable) {
		this._movable = movable;
	},
	
	setRotatable: function(rotatable) {
		this._rotatable = rotatable;
	},
	
	_movable: false,
	moving: false,
	lockMovementX: false,
	lockMovementY: false,
	
	_rotatable: false,
	rotating: false
});

var Line = Movable.extend ({
	construct: function (x1, y1, x2, y2) {
		this.setCorners(x1, y1, x2, y2);
		Movable.construct.call(this, this.x(), this.y(), this.width(), this.height());
	},
	
	draw: function () {
		Scene.drawLine(this.x1(), this.y1(), this.x2(), this.y2());
		Movable.draw.call(this);
	},
	
	// Getters
	x1: function () {
		return this.x() + this._x1;
	},
	
	y1: function () {
		return this.y() + this._y1;
	},
	
	x2: function () {
		return this.x() + this._x2;
	},
	
	y2: function () {
		return this.y() + this._y2;
	},
	
	// Setters
	setCorners: function (x1, y1, x2, y2) {
				this._width = Math.max(Math.abs(x1-x2), 20);
				this._height = Math.max(Math.abs(y1-y2), 20);
				this.setCenter((x1 + x2)/2, (y1 + y2)/2);
				this._x1 = x1 - this.x();
				this._y1 = y1 - this.y();
				this._x2 = x2 - this.x();
				this._y2 = y2 - this.y();
				
				scene.redraw();
	}
});


var Arc = Movable.extend ({
	construct: function (centerX, centerY, radius, startAngle, endAngle, isCounterClockwise) {
		this.setRadius(radius);
		this.setStartAngle(startAngle);
		this.setEndAngle(endAngle);
		this.setCenter(centerX, centerY);
		this.setDirection(isCounterClockwise);
		Movable.construct.call(this, this.x(), this.y(), this.width(), this.height());
		this.fillStyle = "rgba(0,0,0,0)";
	},
			
	draw: function () {
		context.beginPath();
		context.arc(this.centerX(), this.centerY(), this.radius(), -this.startAngle(), -this.endAngle(), this.direction());
		context.fill();
		context.stroke();
		Movable.draw.call(this);
	},
	
	// Getters
	radius: function () {
		return this._radius;
	},
	
	startAngle: function () {
		return this._startAngle;
	},
	
	endAngle: function () {
		return this._endAngle;
	},
	
	direction: function (){
		return this._isCounterClockwise;
	},
	
	// Setters
	setRadius: function (radius) {
		this._radius = radius;
		this._width = 2*radius;
		this._height = 2*radius;
		scene.redraw();
	},
	
	setStartAngle: function (startAngle) {
		while (startAngle < 0) {
			startAngle += 2*Math.PI;
		}
		
		while (startAngle > 2*Math.PI) {
			startAngle -= 2*Math.PI;
		}
		
		this._startAngle = startAngle;
		scene.redraw();
	},
	
	setEndAngle: function (endAngle) {
		while (endAngle < 0) {
			endAngle += 2*Math.PI;
		}
		
		while (endAngle > 2*Math.PI) {
			endAngle -= 2*Math.PI;
		}
		
		this._endAngle = endAngle;
		scene.redraw();
	},
	
	setDirection: function (bool){
		this._isCounterClockwise=bool;
		scene.redraw();
	}
});

var Circle = Arc.extend ({
	construct: function (centerX, centerY, radius) {
		Arc.construct.call(this, centerX, centerY, radius, 0, Math.PI * 2, true);
		this.fillStyle = 'white';
	}
});

var Sector = Arc.extend ({
	construct: function (centerX, centerY, radius, startAngle, endAngle) {
		Arc.construct.call(this, centerX, centerY, radius, startAngle, endAngle, true);
		this.fillStyle = 'white';
	},
			
	draw: function () {
		context.beginPath();
		context.moveTo(this.centerX(),this.centerY());
		context.arc(this.centerX(), this.centerY(), this.radius(), -this.startAngle(), -this.endAngle(), true);
		context.closePath();
		context.fill();
		context.stroke();
		Movable.draw.call(this);
	},
	
	contains: function (x,y) {
		x = x - this.centerX();
		y = y - this.centerY();
		local_x = x*Math.cos(-this.rotation()) + y*Math.sin(-this.rotation());
		local_y = y*Math.cos(-this.rotation()) - x*Math.sin(-this.rotation());
		x = local_x + this.centerX();
		y = local_y + this.centerY();
		
		var angle = findAngle(this.centerX(), this.centerY(), x, y);

		var dist=0;
		dist=Math.sqrt((x-this.centerX())*(x-this.centerX())+(y-this.centerY())*(y-this.centerY()));
		return angle > this.startAngle() && angle < this.endAngle() && dist <= this.radius();
	}
});

var Triangle = Movable.extend ({
	construct: function (x1, y1, x2, y2, x3, y3) {
		this.setCorners(x1, y1, x2, y2, x3, y3);
		Movable.construct.call(this, this.x(), this.y(), this.width(), this.height());
	},
			
	// Drawing
	draw: function () {
		Scene.drawTriangle(this.x1(), this.y1(), this.x2(), this.y2(), this.x3(), this.y3());
		Movable.draw.call(this);
	},
	
	// Getters
	x1: function () {
		return this.x() + this._x1;
	},
	
	y1: function () {
		return this.y() + this._y1;
	},
	
	x2: function () {
		return this.x() + this._x2;
	},
	
	y2: function () {
		return this.y() + this._y2;
	},
	
	x3: function () {
		return this.x() + this._x3;
	},

	y3: function () {
		return this.y() + this._y3;
	},
	
	// Setters
	setCorners: function (x1, y1, x2, y2, x3, y3) {
		_left = Math.min(x1,x2,x3);
		_right = Math.max(x1,x2,x3);
		_top = Math.min(y1,y2,y3);
		_bottom = Math.max(y1,y2,y3);
		
		this._x = _left;
		this._y = _top;
		this._width = _right-_left;
		this._height = _bottom-_top;
		
		this._x1 = x1 - this.x();
		this._y1 = y1 - this.y();
		this._x2 = x2 - this.x();
		this._y2 = y2 - this.y();
		this._x3 = x3 - this.x();
		this._y3 = y3 - this.y();
	
		scene.redraw();
	}
});

var Rectangle = Movable.extend({
	construct: function (x, y, width, height) {
		Movable.construct.call(this, x, y, width, height);
	},
	
	draw: function () {
		Scene.drawRectangle(this.x(), this.y(), this.width(), this.height());
		Movable.draw.call(this);
	},
	
	setCorners: function (x1, y1, x2, y2) {
		this._x = x1;
		this._y = y1;
		
		this._width = Math.abs(x1 - x2);
		this._height = Math.abs(y1 - y2);
		
		scene.redraw();
	}
});

var Label = Movable.extend({
	construct: function (x, y, text) {
		this.fillStyle = 'black';
		this.setText(text);
		Movable.construct.call(this, x, y, this.width(), this.height());
	},
	
	draw: function () {
		context.font = this._fontSize + "pt " + this._fontFamily;
		context.textBaseline="top";
		context.fillText(this.text(), this.x(), this.y());
		Movable.draw.call(this);
	},
	
	// Getters
	text: function () {
		return this._text;
	},
	
	fontSize: function() {
		return this._fontSize;
	},
	
	fontFamily: function () {
		return this._fontFamily;
	},
	
	// Setters
	setText: function (text) {
		this._text = text;
		this.measureSize();
				
		scene.redraw();
	},
	
	setFontSize: function (fontSize) {
		this._fontSize = fontSize;
		this.measureSize();
		scene.redraw();
	},
	
	setFontFamily: function (fontFamily) {
		this._fontFamily = fontFamily;
		this.measureSize();
		scene.redraw();
	},
	
	// Helpers
	measureSize: function () {
		this._height = this._fontSize * 1.5;
		context.font = this._fontSize + "pt " + this._fontFamily;
		this._width = context.measureText(this._text).width;
		
		scene.redraw();
	},
	
	// Members
	
	_fontSize: 16,
	_fontFamily: "Helvetica"
});

// Utility Functions

function findAngle(x1, y1, x2, y2) {
	if (y1 == y2) {
		if (x1 > x2) {
			return Math.PI;
		} else {
			return 0;
		}
	}
	
	if (x1 == x2) {
		if (y1 > y2) {
			return Math.PI/2;
		} else {
			return 3*Math.PI/2;
		}
		
	}
	
	angle = -Math.atan((y2 - y1) / (x2 - x1));
	
	if (x2 < x1) {
		angle += Math.PI;
	} else if (y2 > y1) {
		angle += 2 * Math.PI;
	}
	
	return angle;
}

// function setPixel(imageData, x, y, r, g, b, a) {
//     index = (x + y * imageData.width) * 4;
//     imageData.data[index+0] = r;
//     imageData.data[index+1] = g;
//     imageData.data[index+2] = b;
//     imageData.data[index+3] = a;
// }




// // create a new pixel array
// imageData = context.createImageData(canvas.width, canvas.height);
// 
// for (i = 0; i < imageData.width; i++) {
// 	for (j = 0; j < imageData.height; j++) {
// 		if ((i % 2) == (j % 2)) {
// 			setPixel(imageData, i, j, 255,255,255,255)
// 		} else {
// 			setPixel(imageData, i, j, 0,0,0,255)
// 		}
// 	}
// }
// 
// // copy the image data back onto the canvas
// context.putImageData(imageData, 0, 0); // at coords 0,0




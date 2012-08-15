/**
 * A 3d coordinate
 */
function Point3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;

	// Relative to camera coordinates
	this.tx;
	this.ty;
	this.tz;

	// Flattened coordinates
	this.fx;
	this.fy;
}

Point3.prototype.subtract = function(other) {
	return new Point3(
		this.x - other.x,
		this.y - other.y,		
		this.z - other.z
	);
}

Point3.prototype.add = function(other) {
	return new Point3(
		this.x + other.x,
		this.y + other.y,		
		this.z + other.z
	);
}

Point3.prototype.swapXZ = function() {
	return new Point3(
		this.z,
		this.y,
		this.x
	);
}

Point3.prototype.normalize = function(){
	return this.setLength(1);
}

Point3.prototype.norm = function(){
	return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

Point3.prototype.length = function(){
	return this.norm();
}

Point3.prototype.setLength = function(length){
	var factor = length/this.norm();
		
	return this.scale(factor);
}

Point3.prototype.scale = function(scale) {
	this.x = this.x*scale;
	this.y = this.y*scale;
	this.z = this.z*scale;
	
	return this;
}

Point3.prototype.cross = function(other){
	return new Point3(
		this.y*other.z - this.z*other.y,
		this.z*other.x - this.x*other.z,
		this.x*other.y - this.y*other.x 
	);
}

Point3.prototype.dot = function(other) {
	return this.x * other.x + this.y * other.y + this.z * other.z;
}

Point3.prototype.getRotatedPointByX = function(angle, center) {
	if (angle == 0) {
		return this;
	}

	var cos = Math.cos(angle);
	var sin = Math.sin(angle);

	if (center == undefined) {
		var y = this.y * cos - this.z * sin;
		var z = this.y * sin + this.z * cos;

		return new Point3(this.x, y, z);
	} else {
		var p = new Point3(0, this.y - center.y, this.z - center.z);
		var y = p.y * cos - p.z * sin;
		var z = p.y * sin + p.z * cos;

		return new Point3(this.x, y + center.y, z + center.z);
	}
};


Point3.prototype.getRotatedPointByY = function(angle, center) {
	if (angle == 0) {
		return this;
	}

	var cos = Math.cos(angle);
	var sin = Math.sin(angle);

	if (center == undefined) {
		var x =   this.x * cos + this.z * sin;
		var z = - this.x * sin + this.z * cos;

		return new Point3(x, this.y, z);
	} else {
		var p = new Point3(this.x - center.x,0, this.z - center.z);
		var x =   p.x * cos + p.z * sin;
		var z = - p.x * sin + p.z * cos;

		return new Point3(x + center.x, this.y, z + center.z);
	}
};
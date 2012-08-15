// JavaScript Document
Main.paperInit.Point = function(){
	Point.prototype.getRotatedPoint = function(angle,oP){
			return new Point(
				Math.cos(Util.degreeToRadian(angle))*(this.x - oP.x) - Math.sin(Util.degreeToRadian(angle))*(this.y - oP.y) + oP.x,
				Math.sin(Util.degreeToRadian(angle))*(this.x - oP.x) + Math.cos(Util.degreeToRadian(angle))*(this.y - oP.y) + oP.y
			);
	};
	
	Point.prototype.showOnCanvas = function(){
		var p = new Path.Circle(this,3);
		p.setStyle({fillColor:'#000',strokeWidth:2,strokeColor:'#fff'});
		this.canvasPoint = p;
		return p;
	};
	
	Point.prototype.projectToLine = function(p1,p2){
		var p_ = this.subtract(p2);
		var p1_ = p1.subtract(p2);
		var dot = p_.dot(p1_);;
		return p1_.multiply( dot /  p1_.dot(p1_)).add(p2);
	};
	
	Point.prototype.isBetweenTwoLinePoints = function(p1,p2){
		var s1 = this.getDistance(p1,true);
		var s2 = this.getDistance(p2,true);
		var s  = p1.getDistance(p2,true);
		if(s1 + s2 > s)
			return false;
		else
			return true;
	}
	
	Point.prototype.findPointTo = function(p,distance,isPercent){
		var x,y,a;
		a = Util.findAngle(this.x,this.y,p.x,p.y);
		if(isPercent){
			x = this.x + Math.cos(a) * this.getDistance(p) * distance / 100 ;
			y = this.y - Math.sin(a) * this.getDistance(p) * distance / 100 ;
		}else{
			x = this.x + Math.cos(a) * distance ;
			y = this.y - Math.sin(a) * distance ;
		}
		return new Point(x,y);
	}
	Point.prototype.symmetricTo = function(p){
		var _p = this.subtract(p);
		_p = new Point(-_p.x,-_p.y);
		_p = _p.add(p);
		return _p;		
	}
}
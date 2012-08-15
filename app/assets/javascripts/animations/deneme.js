
Animation = {init:function(){}}
Interaction = {}

Interaction.getFramework = function () {
	return 'paper';
}

Interaction.init = function (container) {
	
	var fillColor = "#bfe8ef";
	var fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
	var strokeColor = "#255b63";
	var strokeWidth = 1;
	
	var width = $(container).width();
	var height = $(container).height();	
	
	var viewportOffsetX = 300;
	var viewportOffsetY = 36;
	
	var fovFactor = 1.5;
	
	var matrix = Util.createProjectionMatrix(width, height, height * fovFactor, width/2 - viewportOffsetX, -height/2 + viewportOffsetY, width, height);
	
	var boxSize = 50;
	
	var boxCenterX = -100;
	var boxCenterY = -120;
	var boxCenterZ = -height * fovFactor;
	
	function createSurface(p1, p2, p3, p4, matrix) {
		var pp1 = Util.project(p1, matrix);
		var pp2 = Util.project(p2, matrix);
		var pp3 = Util.project(p3, matrix);
		var pp4 = Util.project(p4, matrix);

		var path = new Path();

		pp1.x = Math.floor(pp1.x) + 0.5;
		pp1.y = Math.floor(pp1.y) + 0.5;
		pp2.x = Math.floor(pp2.x) + 0.5;
		pp2.y = Math.floor(pp2.y) + 0.5;
		pp3.x = Math.floor(pp3.x) + 0.5;
		pp3.y = Math.floor(pp3.y) + 0.5;
		pp4.x = Math.floor(pp4.x) + 0.5;
		pp4.y = Math.floor(pp4.y) + 0.5;
		

		path.add(pp1);
		path.add(pp2);
		path.add(pp3);
		path.add(pp4);
		path.closed = true;
		
		return path;
	}
	
	var backSurface = {
		changed: true
	};
	
	var topSurface = {
		changed: true
	};
	
	var leftSurface = {
		changed: true
	};
	
	var frontSurface = {
		changed: true
	};
	
	var rightSurface = {
		changed: true
	};
	
	var bottomSurface = {
		changed: true
	};
	
	var animationHelper = new AnimationHelper({
		topAngle: 0,
		leftAngle: 0,
		rightAngle: 0,
		frontAngle: 0,
		bottomAngle: 0
	})
	
	animationHelper.animate({
		style: {
			topAngle: -Math.PI/2
		},
		duration: 1000,
		delay: 2000,
		animationType: 'easeInEaseOut',
		update: function() {
			topSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			rightAngle: Math.PI/2
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
		update: function() {
			rightSurface.changed = true;
			frontSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			frontAngle: Math.PI/2
		},
		duration: 1000,
		delay: 4000,
		animationType: 'easeInEaseOut',
		update: function() {
			frontSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			leftAngle: -Math.PI/2
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
		update: function() {
			leftSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			bottomAngle: Math.PI/2
		},
		duration: 1000,
		delay: 6000,
		animationType: 'easeInEaseOut',
		update: function() {
			bottomSurface.changed = true;
		}
	})
	
	
	Interaction.onFrame = function() {
		// bottom surface

		if (bottomSurface.changed) {
			if (bottomSurface.remove) {
				bottomSurface.remove();
			}
			
			var p1 = [-boxSize + boxCenterX, -boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p2 = [ boxSize + boxCenterX, -boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p3 = [ boxSize + boxCenterX, -boxSize + boxCenterY, -boxSize + boxCenterZ];
			var p4 = [-boxSize + boxCenterX, -boxSize + boxCenterY, -boxSize + boxCenterZ];
			
			p1 = Util.rotateX(animationHelper.bottomAngle, p1, p3);
			p2 = Util.rotateX(animationHelper.bottomAngle, p2, p4);
			
			bottomSurface = createSurface(p1, p2, p3, p4, matrix);
			
			bottomSurface.fillColor = fillColor;
			bottomSurface.strokeColor = strokeColor;
			bottomSurface.strokeWidth = strokeWidth;
		}

		// back surface
		
		if (backSurface.changed) {
			if (backSurface.remove) {
				backSurface.remove();
			}

			backSurface = createSurface(
				[ boxSize + boxCenterX, -boxSize + boxCenterY, -boxSize + boxCenterZ],
				[ boxSize + boxCenterX,  boxSize + boxCenterY, -boxSize + boxCenterZ],
				[-boxSize + boxCenterX,  boxSize + boxCenterY, -boxSize + boxCenterZ],
				[-boxSize + boxCenterX, -boxSize + boxCenterY, -boxSize + boxCenterZ],
				matrix
			)

			backSurface.fillColor = fillColor;
			backSurface.strokeColor = strokeColor;
			backSurface.strokeWidth = strokeWidth;
		}
		
		// left surface
		
		if (leftSurface.changed) {
			if (leftSurface.remove) {
				leftSurface.remove();
			}

			var p1 = [-boxSize + boxCenterX,  boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p2 = [-boxSize + boxCenterX, -boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p3 = [-boxSize + boxCenterX, -boxSize + boxCenterY, -boxSize + boxCenterZ];
			var p4 = [-boxSize + boxCenterX,  boxSize + boxCenterY, -boxSize + boxCenterZ];
			
			p1 = Util.rotateY(animationHelper.leftAngle, p1, p3);
			p2 = Util.rotateY(animationHelper.leftAngle, p2, p4);
			
			leftSurface = createSurface(p1, p2, p3, p4, matrix);

			leftSurface.fillColor = fillColor;
			leftSurface.strokeColor = strokeColor;
			leftSurface.strokeWidth = strokeWidth;
		}

		// top surface

		if (topSurface.changed) {
			if (topSurface.remove) {
				topSurface.remove();
			}

			var p1 = [-boxSize + boxCenterX, boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p2 = [ boxSize + boxCenterX, boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p3 = [ boxSize + boxCenterX, boxSize + boxCenterY, -boxSize + boxCenterZ];
			var p4 = [-boxSize + boxCenterX, boxSize + boxCenterY, -boxSize + boxCenterZ];
			
			p1 = Util.rotateX(animationHelper.topAngle, p1, p3);
			p2 = Util.rotateX(animationHelper.topAngle, p2, p4);
			
			topSurface = createSurface(p1, p2, p3, p4, matrix);

			topSurface.fillColor = fillColor;
			topSurface.strokeColor = strokeColor;
			topSurface.strokeWidth = strokeWidth;
		}
		
		// right surface
		
		if (rightSurface.changed) {
			if (rightSurface.remove) {
				rightSurface.remove();
			}

			var p1 = [boxSize + boxCenterX,  boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p2 = [boxSize + boxCenterX, -boxSize + boxCenterY,  boxSize + boxCenterZ];
			var p3 = [boxSize + boxCenterX, -boxSize + boxCenterY, -boxSize + boxCenterZ];
			var p4 = [boxSize + boxCenterX,  boxSize + boxCenterY, -boxSize + boxCenterZ];
			
			p1 = Util.rotateY(animationHelper.rightAngle, p1, p3);
			p2 = Util.rotateY(animationHelper.rightAngle, p2, p4);
			
			rightSurface = createSurface(p1, p2, p3, p4, matrix);

			rightSurface.fillColor = fillColor;
			rightSurface.strokeColor = strokeColor;
			rightSurface.strokeWidth = strokeWidth;
		}
		
		// front surface
		
		if (frontSurface.changed) {
			if (frontSurface.remove) {
				frontSurface.remove();
			}
			
			var rp3 = [boxSize + boxCenterX, -boxSize + boxCenterY, -boxSize + boxCenterZ];
			var rp4 = [boxSize + boxCenterX,  boxSize + boxCenterY, -boxSize + boxCenterZ];
			
			var oldp1 = [ boxSize + boxCenterX,  boxSize + boxCenterY, boxSize + boxCenterZ];
			var oldp2 = [ boxSize + boxCenterX, -boxSize + boxCenterY, boxSize + boxCenterZ];
			var p3 = [-boxSize + boxCenterX, -boxSize + boxCenterY, boxSize + boxCenterZ];
			var p4 = [-boxSize + boxCenterX,  boxSize + boxCenterY, boxSize + boxCenterZ];
			
			var p1 = Util.rotateY(animationHelper.rightAngle, oldp1, rp3);
			var p2 = Util.rotateY(animationHelper.rightAngle, oldp2, rp4);
			
			p3 = Util.rotateY(animationHelper.rightAngle, p3, oldp1);
			p4 = Util.rotateY(animationHelper.rightAngle, p4, oldp2);
			
			p3 = [
					p3[0] - oldp1[0] + p1[0],
					p3[1] - oldp1[1] + p1[1],
					p3[2] - oldp1[2] + p1[2],
				 ];
				
			p4 = [
					p4[0] - oldp2[0] + p2[0],
					p4[1] - oldp2[1] + p2[1],
					p4[2] - oldp2[2] + p2[2],
				 ];
				
			p3 = Util.rotateY(animationHelper.frontAngle, p3, p1);
			p4 = Util.rotateY(animationHelper.frontAngle, p4, p2);	
				
			 
			frontSurface = createSurface(p1, p2, p3, p4, matrix);

			frontSurface.fillColor = fillColor;
			frontSurface.strokeColor = strokeColor;
			frontSurface.strokeWidth = strokeWidth;
		}
	}
	
	console.log('ebik!');
	Main.setObjective("So far, so good!");
	
	
}
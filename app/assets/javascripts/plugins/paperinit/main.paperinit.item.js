// JavaScript Document
Main.paperInit.Item = function(){
	Item.prototype.animate = function (animation) {
		if ((typeof(animation) != typeof({})) || (animation instanceof Array)) {
			throw "The argument to Item.animate needs be a Hash";
		}
		
		AnimationManager.animate(new AnimationManager.Animation(this, animation));
	}
	Item.prototype.set_style = function (style) {
		if ((typeof(style) != typeof({})) || (style instanceof Array)) {
			throw "The argument to Item.setStyle needs be a Hash";
		}
		for (var key in style) {
			if (style.hasOwnProperty(key)) {
				this[key] = style[key];
			}
		}
		
		return this;
	}
	Item.prototype.getItemsByClass = function(className){
		var resultArray = [];
		function _recursive(node){
			if(node.class == className)
				resultArray.push(node);
			else
				$(node.children).each(function(index, element) {
					_recursive(this);   
				});
		}
		_recursive(this);
		return resultArray;
	}
}

Rectangle = Component.extend({

	draw: function() {
		if(!this.snap) {
			this.snap = Snap(this.getWidth(), this.getHeight());
			this.snap.attr({
				x: this.getX(),
				y: this.getY()
			});
			
			var r = this.snap.rect(0, 0, this.getWidth(), this.getHeight());
			r.attr(this.attributes);
		}
		
		return this.snap;
	},

	init: function(width, height, attributes) {
		this._super();
		
		this.getArrangement().width = width;
		this.getArrangement().height = height;
		
		this.attributes = attributes;
		
		this.setWidth(width);
		this.setHeight(height);
	}
});
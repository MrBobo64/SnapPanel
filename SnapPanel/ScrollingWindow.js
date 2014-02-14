
ScrollingWindow = Container.extend({

	adjustScrollbars: function() {
		this.hScrollbar.setY(this.getHeight() - this.hScrollbar.getHeight());
		this.vScrollbar.setX(this.getWidth() - this.vScrollbar.getWidth());
	},

	setWidth: function(width) {
		this._super(width);
		this.adjustScrollbars();
	},
	
	setHeight: function(height) {
		this._super(height);
		this.adjustScrollbars();
	},

	addComponent: function(component) {
		if(this.getComponents().length == 0) {
			this._super(component);
		}
		else {
			console.error("Only one element in scrolling window, bitch");
		}
	},
	
	removeComponent: function(component) {
	
	},
	
	removeComponentAtIndex: function(i) {
	
	},

	arrange: function() {
		//console.log("setting widht to " + this.getWidth());
		//this.getContent().setWidth(this.getWidth());
		//console.log("width is now " + this.getContent().getWidth());
		//return;
	
		var tiling = this.getTiling();
		console.log(tiling);
		if(tiling.fill == 'flex') {
			if(tiling.tiling == 'vertical') {
				this.getComponents()[0].setWidth(this.getWidth());
			}
			else if(tiling.tiling == 'horizontal') {
				this.getComponents()[0].setHeight(this.getHeight());
			}
		}
	},
	
	draw: function() {
		this.arrange();
	
		if(!this.snap || this.isDirty()) {
			if(this.snap) {
				this.snap.remove();
			}
			this.snap = Snap(this.getWidth(), this.getHeight());
			this.snap.attr({
				x: this.getX(),
				y: this.getY()
			});
			console.log(this.snap);
			
			var frame = this.getSnap().rect(0, 0, this.getWidth(), this.getHeight());
			frame.attr({
				fill: 'none',
				stroke: '#00FF00',
				strokeWidth: 2
			});
			
			/*var mask = this.snap.rect(0, 0, this.getWidth(), this.getHeight());
			mask.attr({
				fill: '#fff'
			});*/
			
			//this.getContent().setX(-this.scrollX);
			//this.getContent().setY(-this.scrollY);
			this.getContent().markDirty();
			var content = this.getContent().draw();
			/*content.attr({
				mask: mask
			});*/
			this.snap.add(content);
			
			var hSnap = this.hScrollbar.draw();
			var vSnap = this.vScrollbar.draw();
			
			this.snap.add(hSnap);
			this.snap.add(vSnap);
		}
		
		return this.snap;
	},
	
	getContent: function() {
		return this.getComponents()[0];
	},
	
	scrollVertical: function(y) {
		//this.getContent().removeWatcher(this);
	
		var fullHeight = this.getContent().getHeight();
		
		// Adjust actually scrolling distance by what is blocked off by scrollbar itself
		// accounting also for margins
		var adjust = this.vScrollbar.getHeight();
		var scrollHeight = this.getHeight() - adjust;
		
		if(fullHeight > this.getHeight()) {
			this.scrollY = Math.round(y / scrollHeight * (fullHeight-scrollHeight-adjust));
		}
		else {
			this.scrollY = 0;
			//this.verticalScrollbar.visible = false;
		}
		
		
		// SIGNIFICANT
		this.getContent().setY(this.getY() - this.scrollY);
		
		//TODO: don't do this
		//ArtSchool.canvas.redrawDirty(this.getRealBoundingBox());
		
		//this.getContent().addWatcher(this);
    },
	
	scrollHorizontal: function(x) {
		//this.getContent().removeWatcher(this);
	
		var fullWidth = this.getContent().getWidth();
		
		// Adjust actually scrolling distance by what is blocked off by scrollbar itself
		// accounting also for margins
		var adjust = this.hScrollbar.getWidth();
		var scrollWidth = this.getWidth() - adjust;
		
		if(fullWidth > this.getWidth()) {
			this.scrollX = Math.round(x / scrollWidth * (fullWidth-scrollWidth-adjust));
		}
		else {
			this.scrollX = 0;
			//this.horizontalScrollbar.visible = false;
		}
		
		this.getContent().setX(this.getX() - this.scrollX);
		
		//TODO: don't do this
		//ArtSchool.canvas.redrawDirty(this.getRealBoundingBox());
		
		//this.getContent().addWatcher(this);
	},
	
	init: function(content, attributes, config) {
		this._super(attributes, config);
		
		this.hScrollbar = new Scrollbar(this, false);
		this.vScrollbar = new Scrollbar(this, true);
		
		this.snap = null;
		
		this.scrollX = 0;
		this.scrollY = 0;
		
		this.addComponent(content);
	}
});
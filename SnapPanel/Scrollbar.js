var Scrollbar = Component.extend({
	
	draw: function() {
		if(!this.snap || this.isDirty()) {
			if(this.snap) {
				this.snap.remove();
			}
			this.snap = Snap(this.getWidth(), this.getHeight());
			this.snap.attr({
				x: this.getX(),
				y: this.getY()
			});
			
			var bar = this.snap.rect(0, 0, this.getWidth(), this.getHeight());
			bar.attr({
				fill: '#FFFFFF',
				stroke: 'black',
				strokeWidth: 1
			});
			
			bar.drag(this.drag, this.dragStart, this.dragEnd, this);
		}
		
		return this.snap;
	},
	
	dragStart: function(x, y, event) {
		this.ndx = x;
		this.ndy = y;
	},
	
	dragEnd: function(event) {
	
	},
	
	drag: function(dx, dy, ix, iy, ie) {
		dx = ix - this.ndx;
		dy = iy - this.ndy;
		this.ndx = ix;
		this.ndy = iy;
	
        if(this.vertical) {
            this.setY(this.getY() + dy);
            if(this.getY() < 0) {
                this.setY(0);
            }
            if(this.getY() > this.scrollingWindow.getHeight() - this.getHeight()) {
                this.setY(this.scrollingWindow.getHeight() - this.getHeight());
            }
            
            this.scrollingWindow.scrollVertical(this.getY());
        }
        else {
            this.setX(this.getX() + dx);
            if(this.getX() < 0) {
                this.setX(0);
            }
            if(this.getX() > this.scrollingWindow.getWidth() - this.getWidth()) {
                this.setX(this.scrollingWindow.getWidth() - this.getWidth());
            }
            
            this.scrollingWindow.scrollHorizontal(this.getX());
        }
    },
	
	// init
	init: function(scrollingWindow, vertical) {
		this._super();
		
		this.scrollingWindow = scrollingWindow;
		this.vertical = vertical;
		
		this.length = 30;
		this.fatness = 8;
		
		if(vertical) {
			this.setWidth(this.fatness);
			this.setHeight(this.length);
		}
		else {
			this.setWidth(this.length);
			this.setHeight(this.fatness);
		}
	}
});

Component = Class.extend({

    getX: function() {
        return this.x;
    },
    
    setX: function(x) {
        this.x = x;
		
		if(this.snap) {
			this.snap.attr({x:x});
		}
    },
    
    getY: function() {
        return this.y;
    },
    
    setY: function(y) {
        this.y = y;
		
		if(this.snap) {
			this.snap.attr({y:y});
		}
    },

    getWidth: function() {
        return this.width;
    },
    
    setWidth: function(width) {
		this.dirty = (this.width != width);
	
        this.width = width;
		
		if(this.snap) {
			this.snap.attr({width:width});
		}
    },
    
    getHeight: function() {
        return this.height;
    },
    
    setHeight: function(height) {
		this.dirty = (this.height != height);
	
        this.height = height;
		
		if(this.snap) {
			this.snap.attr({height:height});
		}
    },
    
    getSnap: function() {
        return this.snap;
    },
    
    setSnap: function(snap) {
        this.snap = snap;
    },
    
    getParent: function() {
        return this.parent;
    },
    
    setParent: function(parent) {
        this.parent = parent;
    },
    
    getArrangement: function() {
		return this.arrangement;
	},
	
	setArrangement: function(arrangement) {
		this.arrangement = arrangement;
	},
    
    draw: function() {
		if(!this.snap || this.isDirty()) {
			if(this.snap) {
				this.snap.remove();
			}
			this.snap = Snap(this.getWidth(), this.getHeight());
			this.snap.attr(this.getAttributes());
		}
		
		return this.snap;
    },
    
	isDirty: function() {
		return this.dirty;
	},
	
	getAttributes: function() {
		return this.attributes;
	},
	
	setAttributes: function(attributes) {
		this.attributes = attributes;
	},
	
    init: function(attributes, config) {
		this.attributes = attributes;
        this.parent = null;
		
		this.snap = null;
		this.dirty = false;
        
        this.arrangement = new Arrangement(config && config.arrangement || null);
		
		var dim = config && config.dimensions || null;
		this.x = dim && dim.x || 0;
		this.y = dim && dim.y || 0;
		this.width = dim && dim.width || 0;
		this.height = dim && dim.height || 0;
    }
});

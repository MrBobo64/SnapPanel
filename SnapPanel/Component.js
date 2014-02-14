
Component = Class.extend({

    getX: function() {
        return this.getSnap().getBBox().x;
    },
    
    setX: function(x) {
        this.getSnap().attr({
            x: x
        });
    },
    
    getY: function() {
        return this.getSnap().getBBox().y;
    },
    
    setY: function(y) {
        this.getSnap().attr({
            y: y
        });
    },

    getWidth: function() {
        return this.getSnap().getBBox().width;
    },
    
    setWidth: function(width) {
        this.getSnap().attr({
            width: width
        });
    },
    
    getHeight: function() {
        return this.getSnap().getBBox().height;
    },
    
    setHeight: function(height) {
        this.getSnap().attr({
            height: height
        });
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
    
    },
    
    init: function(snap, attributes, config) {
        snap.attr(attributes);
        snap.panel = this;
    
        this.snap = snap;
        this.parent = null;
        
        this.arrangement = new Arrangement(config && config.arrangement || null);
    }
});

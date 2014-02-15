
Border = Container.extend({

    addComponent: function(component) {
    
    },
    
    removeComponent: function(component) {
    
    },
    
    removeComponentAtIndex: function(i) {
    
    },
    
    arrange: function() {
    
    },
    
    draw: function() {
        if(!this.snap || this.isDirty()) {
            if(this.snap) {
                this.snap.remove()
            }
            
            this.snap = Snap(this.getWidth(), this.getHeight());
            this.snap.attr({
                x: this.getX(),
                y: this.getY()
            });
        }
        
        return this.snap;
    }

    init: function(attributes, config) {
        this._super(attributes, config);
        
        var border = config && config.border || null;
        this.north = border && border.north || null;
        this.west = border && border.west || null;
        this.south = border && border.south || null;
        this.east = border && border.east || null;
        this.center = border && border.center || null;
        
        
    }
});
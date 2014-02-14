
Container = Component.extend({
	
    getComponents: function() {
		return this.components;
	},
	
    addComponent: function(component) {
        this.components.push(component);
        component.setParent(this);
    },
    
    removeComponentAtIndex: function(i) {
        var component = this.components[i];
        this.components.splice(i, 1);
        return component;
    },

    removeComponent: function(component) {
        for(var i = 0; i < this.components.length; i++) {
            if(component == this.components[i]) {
                return this.removeComponentAtIndex(i);
            }
        }
        
        return null;
    },
    
    getTiling: function() {
		return this.tiling;
	},
	
	setTiling: function(tiling) {
		this.tiling = tiling;
	},
	
	getTotalFlex: function() {
		var vertical = this.getTiling().tiling == 'vertical';
		var totalFlex = 0;
		var components = this.getComponents();
		for(var i = 0; i < components.length; i++) {
			var c = components[i];
			var a = c.getArrangement();
			
			if((vertical && a.height < 0) || (!vertical && a.width < 0)) {
				totalFlex += a.flex;
			}
		}
		
		return totalFlex;
	},
	
	getTotalFlexRoom: function() {
		var vertical = this.getTiling().tiling == 'vertical';
		var room = vertical ? this.getHeight() : this.getWidth();
		var components = this.getComponents();
		for(var i = 0; i < components.length; i++) {
			var c = components[i];
			var a = c.getArrangement();
			
			if(vertical) {
				if(a.height > 0) {
					room -= a.height;
				}
			}
			else {
				if(a.width > 0) {
					room -= a.width;
				}
			}
		}
		
		return room;
	},
	
	positionVerticalFlex: function() {
		//console.log("### pos vert flex");
	
		var totalFlex = this.getTotalFlex();
		var totalFlexRoom = this.getTotalFlexRoom();
		var currentY = 0;
		
		var components = this.getComponents();
		for(var i = 0; i < components.length; i++) {
			var c = components[i];
			var a = c.getArrangement();
			
			if(a.height < 0) {
				var newHeight = Math.round((a.flex / totalFlex) * totalFlexRoom);
				if(a.minHeight > 0 && newHeight < a.minHeight) {
					totalFlexRoom -= a.minHeight;
					totalFlex -= a.flex;
				}
				else if(a.maxHeight > 0 && newHeight > a.maxHeight) {
					totalFlexRoom -= a.maxHeight;
					totalFlex -= a.flex;
				}
			}
		}
		
		for (var i = 0; i < components.length; i++) {
			var c = components[i];
			var a = c.getArrangement();
			
			if (a.height < 0) {
				var newHeight = Math.round((a.flex / totalFlex) * totalFlexRoom);
				if (a.minHeight > 0 && newHeight < a.minHeight) {
					newHeight = a.minHeight;
				}
				else if(a.maxHeight > 0 && newHeight > a.maxHeight) {
					newHeight = a.maxHeight;
				}
				
				c.setY(currentY);
				c.setWidth(this.getWidth()); //TODO: if stretch
				//console.log("stretched to " + this.getWidth());
				//console.log("but its " + c.getWidth());
				
				c.setHeight(newHeight);
				
				//console.log("just set height to " + newHeight);
				//console.log("but its currently " + c.getHeight());
				
				currentY += newHeight; //TODO: border, margin?
			}
			else {
				c.setY(currentY);
				c.setWidth(this.getWidth());
				c.setHeight(a.height);
				
				currentY += a.height;
			}
		}
	},
	
	positionHorizontalFlex: function() {
		//console.log("### pos horiz flex");
	
		var totalFlex = this.getTotalFlex();
		var totalFlexRoom = this.getTotalFlexRoom();
		var currentX = 0;
		
		var components = this.getComponents();
		for(var i = 0; i < components.length; i++) {
			var c = components[i];
			var a = c.getArrangement();
			
			if(a.width < 0) {
				var newWidth = Math.round((a.flex / totalFlex) * totalFlexRoom);
				if(a.minWidth > 0 && newWidth < a.minWidth) {
					totalFlexRoom -= a.minWidth;
					totalFlex -= a.flex;
				}
				else if(a.maxWidth > 0 && newWidth > a.maxWidth) {
					totalFlexRoom -= a.maxWidth;
					totalFlex -= a.flex;
				}
			}
		}
		
		for (var i = 0; i < components.length; i++) {
			var c = components[i];
			var a = c.getArrangement();
			
			if (a.width < 0) {
				var newWidth = Math.round((a.flex / totalFlex) * totalFlexRoom);
				if (a.minWidth > 0 && newWidth < a.minWidth) {
					newWidth = a.minWidth;
				}
				else if(a.maxWidth > 0 && newWidth > a.maxWidth) {
					newWidth = a.maxWidth;
				}
				
				c.setX(currentX);
				c.setHeight(this.getHeight()); //TODO: if stretch
				c.setWidth(newWidth);
				
				currentX += newWidth; //TODO: border, margin?
			}
			else {
				c.setX(currentX);
				c.setHeight(this.getHeight());
				c.setWidth(a.width);
				
				currentX += a.width;
			}
		}
	},
	
	positionVertical: function() {
		//console.log("### pos vert");
	
		var tiling = this.getTiling();
	
		var translation = {x: 0, y: 0};
	
		if(tiling.justify == 'left') {
			translation.x += tiling.margin;
		}
		else if(tiling.justify == 'right') {
			translation.x += this.getWidth() - tiling.margin;
		}
        
		var setWidth = -1;
		if(tiling.stretch == 'max') {
			var components = this.getComponents();
			for(var i = 0; i < components.length; i++) {
				var c = components[i];
				if(c.getWidth() > setWidth) {
					setWidth = c.getWidth();
				}
			}
		}
		else if(tiling.stretch == 'full') {
			setWidth = this.getWidth() - 2 * tiling.margin;
		}
		
		var components = this.getComponents();
		for(var i = 0; i < components.length; i++) {
			var c = this.components[i];
			
			translation.y += tiling.spacing;
			if(tiling.justify == 'right') {
				c.setX(translation.x - c.getWidth());
			}
			else {
				c.setX(translation.x);
			}
			c.setY(translation.y);
			
			if(setWidth > 0) {
				c.setWidth(setWidth);
			}
			
			translation.y += c.getHeight();
		}
		
		//TODO: yeah?
        //console.log("setting height to " + (translation.y + tiling.margin));
		this.setHeight(translation.y + tiling.margin);
	},
	
	positionHorizontal: function() {
		//console.log("### pos horiz");
	
		var tiling = this.getTiling();
	
		var translation = {x: 0, y: 0};
	
		if(tiling.justify == 'top') {
			translation.y += tiling.margin;
		}
		else if(tiling.justify == 'bottom') {
			translation.y += this.getHeight() - tiling.margin;
		}
		
		var setHeight = -1;
		if(tiling.stretch == 'max') {
			var components = this.getComponents();
			for(var i = 0; i < components.length; i++) {
				var c = components[i];
				if(c.getHeight() > setHeight) {
					setHeight = c.getHeight();
				}
			}
		}
		else if(tiling.stretch == 'full') {
			setHeight = this.getHeight() - 2 * tiling.margin;
		}
		
		var components = this.getComponents();
		for(var i = 0; i < components.length; i++) {
			var c = this.components[i];
			
			translation.x += tiling.spacing;
			if(tiling.justify == 'bottom') {
				c.setY(translation.y - c.getHeight());
			}
			else {
				c.setY(translation.y);
			}
			c.setX(translation.x);
			
			if(setHeight > 0) {
				c.setHeight(setHeight);
			}
			
			translation.x += c.getWidth();
		}
		
		// TODO: yeah?
		this.setWidth(translation.x + tiling.margin);
	},
	
	arrange: function() {
		var fill = this.getTiling().fill;
		var tiling = this.getTiling().tiling;
		
		if(fill == 'flex') {
			if(tiling == 'vertical') {
				this.positionVerticalFlex();
			}
			else if(tiling == 'horizontal') {
				this.positionHorizontalFlex();
			}
			else {
				console.error('Tiling flex only makes sense with horizontal or vertical');
			}
		}
		else {
			if(tiling == 'vertical') {
				this.positionVertical();
			}
			else if(tiling == 'horizontal') {
				this.positionHorizontal();
			}
			else {
				console.error('only doing horizontal and vertical');
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
			
			for(var i = 0; i < this.getComponents().length; i++) {
				var c = this.getComponents()[i];
				var s = c.draw();
				this.snap.add(s);
			}
		
			var frame = this.getSnap().rect(0, 0, this.getWidth(), this.getHeight());
			frame.attr({
				fill: 'none',
				stroke: 'blue',
				strokeWidth: 2
			});
		}
		
		return this.snap;
    },
    
    //////////////////////////////////////////////////////////////
    
    init: function(attributes, config) {
        this._super(attributes, config);
        
        this.components = [];
        this.tiling = new Tiling(config && config.tiling || null);
        
        if(config && config.components) {
            for(var i = 0; i < config.components.length; i++) {
                this.addComponent(config.components[i]);
            }
        }
    }
});
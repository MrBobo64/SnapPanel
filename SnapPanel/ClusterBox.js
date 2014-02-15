
// http://www.dafont.com/8bit-wonder.font

ClusterBox = Component.extend({

    draw: function() {
        if(!this.snap) {
            this.snap = Snap(this.getWidth(), this.getHeight());
            this.snap.attr({
                x: this.getX(),
                y: this.getY()
            });
            
            this.bg = this.snap.rect(0, 0, this.getWidth(), this.getHeight());
            this.bg.attr({
                fill: '#8080F0'
            });
            
            this.image = this.snap.image(this.source, 10, 10, 50, 50);
            this.text = this.snap.text(80, 40, this.name);
            this.text.attr({
                stroke: 'white',
                strokeWidth: 2,
                fill: 'black',
                "font-family": "Lucida Console",
                "font-size": 48
            });
        }
        
        return this.snap;
    },

    init: function(name, source) {
        this._super();
    
        this.name = name;
        this.source = source;
        this.bg = null;
        
        this.setWidth(40);
        this.setHeight(70);
    }
});
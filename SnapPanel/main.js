
var paper = Snap(document.getElementById('s'));

var clusterPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
        fill: 'flex',
        stretch: 'full'
	}
});
var hostPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
        fill: 'flex',
        stretch: 'full'
	}
});
var targetPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
        fill: 'flex',
        stretch: 'full'
	}
});

var topPanel = new Container(null, {
	tiling: {
		tiling: 'horizontal',
		fill: 'flex',
		stretch: 'full'
	},
	
	arrangement: {
		flex: 2
	},
	
	components: [
		new ScrollingWindow(clusterPanel, {tiling: {tiling: 'vertical', fill: 'flex'}}),
		/*new ScrollingWindow(*/hostPanel,/* {tiling: {tiling: 'vertical', fill: 'flex'}}),*/
		/*new ScrollingWindow(*/targetPanel/*, {tiling: {tiling: 'vertical', fill: 'flex'}})*/
	]
});

var previewPanel = new Container(null, {
	tiling: {
		tiling: 'horizontal',
		fill: 'flex',
		stretch: 'full'
	}
});

var messagePanel = new Container(null, {
	tiling: {
		tiling: 'horizontal',
		fill: 'flex',
		stretch: 'full'
	}
});

var bottomPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
		fill: 'flex',
		stretch: 'full'
	},
	
	arrangement: {
		flex: 1
	},
	
	components: [
		previewPanel,
		messagePanel
	]
});

var mainPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
		fill: 'flex',
		stretch: 'full'
	},
	
	components: [
		topPanel,
		bottomPanel
	],
	
	dimensions: {
		width: window.innerWidth,
		height: window.innerHeight
	}
});

mainPanel.draw();
paper.add(mainPanel.getSnap());

/*var rects = [];
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22FF22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22DD22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22BB22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22AA22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#229922'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#228822'}));*/


/*new Component(scratch.rect(0, 0, 100, 40), {fill: '#22FF22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#22DD22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#22BB22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#22AA22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#229922'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#228822'})*/


/*var panel = new Container(Snap(WIDTH, HEIGHT), null, {
    tiling: {
        tiling: 'vertical',
        fill: 'none',
        stretch: 'full'
    },
        
    components: rects
});

panel.draw();

paper.add(panel.getSnap());*/
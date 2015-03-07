
var paper = Snap(document.getElementById('s'));

var clusterPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
        fill: 'none',
        stretch: 'full',
		margin: 10,
		spacing: 10
	}
});
var hostPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
        fill: 'none',
        stretch: 'full',
		margin: 10,
		spacing: 10
	}
});
var targetPanel = new Container(null, {
	tiling: {
		tiling: 'vertical',
        fill: 'none',
        stretch: 'full',
		margin: 10,
		spacing: 10
	}
});

var topPanel = new Container(null, {
	tiling: {
		tiling: 'horizontal',
		fill: 'flex',
		stretch: 'full'
	},
	
	arrangement: {
		flex: 3
	},
	
	components: [
		new ScrollingWindow(clusterPanel, null, {tiling: {tiling: 'vertical', fill: 'flex'}}),
		new ScrollingWindow(hostPanel, null, {tiling: {tiling: 'vertical', fill: 'flex'}}),
		new ScrollingWindow(targetPanel, null, {tiling: {tiling: 'vertical', fill: 'flex'}})
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
		flex: 2
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

//colors = ['#22FF22', '#22DD22', '#22BB22', '#22AA22', '#229922', '#228822'];
//for(var i = 0; i < 12; i++) {
//	clusterPanel.addComponent(new Rectangle(100, 40, {fill: colors[i%6]}));
//}

var clusterBox = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
clusterPanel.addComponent(clusterBox);

var clusterBox1 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox2 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox3 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox4 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox5 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox6 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox7 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox8 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");
var clusterBox9 = new ClusterBox("one", "http://www.adiumxtras.com/images/thumbs/dango_status_icon_set_7_19047_6248_thumb.png");


clusterPanel.addComponent(clusterBox1);
clusterPanel.addComponent(clusterBox2);
clusterPanel.addComponent(clusterBox3);
clusterPanel.addComponent(clusterBox4);
clusterPanel.addComponent(clusterBox5);
clusterPanel.addComponent(clusterBox6);
clusterPanel.addComponent(clusterBox7);
clusterPanel.addComponent(clusterBox8);
clusterPanel.addComponent(clusterBox9);



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
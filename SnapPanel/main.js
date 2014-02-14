
var paper = Snap(document.getElementById('s'));

var scratch = Snap(paper.width, paper.height);

var rects = [];
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22FF22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22DD22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22BB22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#22AA22'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#229922'}));
rects.push(new Component(scratch.rect(0, 0, 100, 40), {fill: '#228822'}));


/*new Component(scratch.rect(0, 0, 100, 40), {fill: '#22FF22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#22DD22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#22BB22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#22AA22'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#229922'})
new Component(scratch.rect(0, 0, 100, 40), {fill: '#228822'})*/


var panel = new Container(Snap(paper.width, paper.height), null, {
    tiling: {
        tiling: 'vertical',
        fill: 'none',
        stretch: 'full'
    },
        
    components: rects
});



panel.draw();

r = rects[0];
console.log("huuray");
console.log(r);
console.log(r.getSnap().getBBox());
console.log("sshh");

paper.add(panel.getSnap());
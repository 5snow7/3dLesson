let img,rad;let r='80';
let ct=1;let b_array=[];
let imgc;let rX=r+"deg";
function preload() {
 // imgc = loadImage('cowpic2.jpg');
}

let p;
function extra(){
	p=createP(rX);p.position(700,20);
	img=createImg('cowpic2.jpg');
	img.position(900,200);img.class('parbdd');
	//img.style('transform','rotateY(60deg)');
	//img.style('transform','rotateZ(rX)');
	rad=createRadio('boxes','1');
	//rad.changed(moreBoxes);
	//imgc.crossOrigin = "";
	//image(imgc,30,30,50,50);
//b_array.push(new box(30,30,30));
}

function moreBoxes(){
	ct++;
	}
	
function tX(ang){
	push();
	rotateX(ang+20);
	fill(250,0,0);
	torus(30,10);
	pop();
}

function tY(ang){
	push();
	rotateY(ang-20);
	fill(0,250,0);
	torus(60,20);
	pop();
}

function tZ(ang){
	push();
	rotateZ(ang);rotateX(ang);
	rotateY(ang);
	fill(0,0,250);
	torus(90,20);
	pop();
}

function tor(ang){
	tX(ang);tY(ang);tZ(ang);
}
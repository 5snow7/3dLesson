let ang=0;let tlen=20;
let b1;let box1;let rowXarray=[];
function setup(){
	extra();box1=new boxes(200,200,10);
	angleMode(DEGREES);
	can=createCanvas(825,500,WEBGL);
	can.position(25,25);
	can.class("bdd");
	b1=new move(200,200,50,2,3,4);
	frameRate(15);
	for(let j=0;j<12;j++){rowXarray.push(new boxes(0,0,30));}
	}
	
	function draw(){
		//camera(100,100,0,mouseX,mouseY,0,0,0,0);
	translate(-150,0,0);
	background(200,200,200);
	//text(rX,40,20);
	b1.speed();b1.chbdd();b1.display();

	//push();translate(100,50,50);rotateY(ang);box1.rX(30);pop();
	
    //push();sqsX(ang);rotateX(30);pop();
	ang=ang+5;
	
	//push();rotateY(ang);box1.rX(20);pop();
	push();rotateY(ang);cyl_ofXBoxes(tlen);pop();
	if(frameCount%15==0){tlen+=10;}
	if(tlen>200){tlen=25;}
	}
	
function cyl_ofXBoxes(len){
	push();fill(100,250,50);
	for(let j=0;j<rowXarray.length;j++){
    push();rotateX(ang+30*j);translate(0,0,len);	
	rowXarray[j].rX(20);pop();
	}
	pop();
	}
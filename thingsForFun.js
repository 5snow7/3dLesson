function sqsX(ang1){
push();
	rotateY(ang1);
	translate(50,0,0);box(40,40,40);
	translate(50,0,0);box(40,40,40);
	translate(50,0,0);box(40,40,40);
    sqsY(ang1);
	pop();	
}

function sqsY(ang2){
    push();
	
	rotateX(ang2);fill(0,250,0);
	translate(0,50,0);box(40,40,40);
	translate(0,50,0);box(40,40,40);
	translate(0,50,0);box(40,40,40);
    sqsZ(ang2);  
   pop();	
}

function sqsZ(ang3){
    push();
	rotateY(ang3);
	rotateZ(ang3);fill(0,0,250);
	translate(0,0,50);box(40,40,40);
	translate(0,0,50);box(40,40,40);
	translate(0,0,50);box(40,40,40);
    tor(ang);
	pop();	
}
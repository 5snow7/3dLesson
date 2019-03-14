class boxes{

constructor(x,y,n){
this.x=x;this.y=y;this.n=n;
push();translate(this.x,this.y);pop();
}	

rX(len){push();
	for(let j=0;j<this.n;j++){
	translate(2*len,0,0);box(len,len,len);
}
pop();
}
	
rY(len){push();
	for(let j=0;j<this.n;j++){
	translate(0,2*len,0);box(len,len,len);
}
pop();
}

rZ(len){push();
	for(let j=0;j<this.n;j++){
	translate(0,0,2*len);box(len,len,len);
}
pop();
}

}
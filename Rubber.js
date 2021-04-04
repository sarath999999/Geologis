class Rubber{
    constructor(x,y,r){
	
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2)
		World.add(world, this.body);

	}
	display(){
		var rubberpos=this.body.position;		
		push()
		translate(rubberpos.x, rubberpos.y);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("black");
		fill("darkblue");
		//draw the ellipse here to display the rubber ball

		pop()
	}

}
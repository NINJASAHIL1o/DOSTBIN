


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinI=loadImage("dust.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(600,height,1200,30)

	left= new Dustbin(720,610,20,150) 
	right= new Dustbin(860,610,20,150)

	bottom= new Dustbin(800,675,150,20);


	paper= new Paper(200,400,40)

	Engine.run(engine)
  
}


function draw() {
	rectMode(CENTER);
	background(255);
	ground.display()
  
	left.display();
	right.display();
	bottom.display();

	


	image(dustbinI,695,510,190,180);

	paper.display();

}

function keyPressed(){
	if(keyCode=== 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:250 ,y:-300 })
	}
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var support , ball , chain1 , ball2 , chain2 , hang , ball3 , ball4 , chain3 , chain4 ;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	support = new String(400 , 200 , 400 , 20);
	ball = new Ball(450 , 400 );
	ball2 = new Ball(250 , 400);
	ball3 = new Ball(350 , 400 );
	ball4 = new Ball(550 , 400);
	chain1 = new Chain(ball.body ,  {x:445 , y:210});
	chain2 = new Chain(ball2.body , {x:250 , y:210 });
	chain3 = new Chain(ball3.body , {x:350 , y:210});
	chain4 = new Chain(ball4.body , {x:545 , y:210 });

ball2.gravity =0.5

	}
	//Create the Bodies Here.

	
  


function draw() {
  rectMode(CENTER);
  background("white");
  support.display();
  ball.display();
  chain1.display();
  ball2.display();
  chain2.display();
  ball3.display();
  chain3.display();
  ball4.display();
  chain4.display();
  drawSprites();
 
}

function keyPressed (){
	
	Matter.Body.setPosition(ball2.body , {x :150 , y : 300});
	Matter.Body.setPosition(ball3.body , {x:450  , y:400});
	//Matter.Body.setPosition(ball4.body , {x:550 
	}

	
/*function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  ballBodyPosition=constraint.bodyA.position
  supportBodyPosition=constraint.bodyB.position

 supportBodyOffset=constraint.pointB;
  
 supportBodyX=supportBodyPosition.x+supportBodyOffset.x
  supportBodyY=supportBodyPosition.y+supportBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, supportBodyX,supportfBodyY);
}*/

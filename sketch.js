const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine ;  
var world;
var ball, ground;



function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  box1=new Box(200,200, 50, 80)
  box2=new Box2(150, 300, 40, 40 )
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);
 box1.display()
 box2.display()
}


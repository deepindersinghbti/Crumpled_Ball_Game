const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var block1, block2, block3;
var paper;
var dustbin;
var slingshot;

function setup() {
  createCanvas(1500, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Block(980, 390, 1960, 20, "Brown");

  block1 = new Block(1060, 300, 10, 150, "Green");
  block2 = new Block(1140, 370, 150, 10, "Green");
  block3 = new Block(1220, 300, 10, 150, "Green");

  dustbin = new Dustbin(1140, 300, 200, 160);
  paper = new Paper(200, 200);
  slingshot = new SlingShot(paper.body, { x: 200, y: 100 });
}

function draw() {
  background(255);

  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();

  dustbin.display();

  slingshot.display();
  paper.display();
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}

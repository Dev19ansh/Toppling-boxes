const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var abengine,abworld;

function setup() {
  createCanvas(800,400);


abengine= Engine.create();  //abengine.world
abworld=abengine.world;


console.log(Ground);

//ground1= new Ground(400,300);
ground2= new Ground(400,380);
box1 = new Box(400,300,50,70);
box2 = new Box(430,200,50,70);


}

function draw() {
  background(255,255,255);
  rectMode(CENTER);
  Engine.update(abengine);

  //ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  
  drawSprites();
}
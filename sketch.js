const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10;
var bg; 
var boy,boyImg;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  bg = loadImage("snow2.jpg");
  snow1 = new SnowFlake(random(10,790),random(-50,0),40);
  snow2 = new SnowFlake(random(10,790),random(-50,0),random(25,60));
  snow3 = new SnowFlake(random(10,790),random(-50,0),random(25,100));
  snow4 = new SnowFlake(random(10,790),random(-50,0),random(25,60));
  snow5 = new SnowFlake(random(10,790),random(-50,0),random(25,78));
  snow6 = new SnowFlake(random(10,790),random(-50,0),random(25,49));
  snow7 = new SnowFlake(random(10,790),random(-50,0),random(25,127));
  snow8 = new SnowFlake(random(10,790),random(-50,0),random(25,63));
  snow9 = new SnowFlake(random(10,790),random(-50,0),random(25,82));
  snow10 = new SnowFlake(random(10,790),random(-50,0),random(25,60));

  boyImage = loadImage("boyImag.png");
  boy = createSprite(500,300,10,10);
  boy.addAnimation("boyStand", boyImage);
  World.add(world, boy);

}

function draw() {
  background(bg);
  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();

  if(keyDown("up") && boy.y > 100){
    boy.y = boy.y-10; 
  }

  if(keyDown("down") && boy.y < 300){
    boy.y = boy.y+10; 
  }

  if(keyDown("left") && boy.x > 50){
    boy.x = boy.x-10; 
  }

  if(keyDown("right") && boy.x < 760){
    boy.x = boy.x+10; 
  }

  console.log(boy.x);
  drawSprites();
}
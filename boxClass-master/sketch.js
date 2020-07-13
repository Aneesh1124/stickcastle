const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(50,0,50,200);
    box2 = new Box(100,0,50,150);
    box3 = new Box(150,0,50,100);
    box4 = new Box(200,200,50,275);
    box5 = new Box(250,0,50,100);
    box6 = new Box(300,0,50,150);
    box7 = new Box(350,0,50,200);
    box8 = new Box(400,0,50,200);
    flagstand = new Box(200,0,10,100)
    ground = new Ground(200,400,400,10)
    ground1 = new Ground(0,200,10,400)
    ground2= new Ground(400,200,10,400)
    
    
}

function draw(){
    background("black");
    Engine.update(engine); 
   box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
   box5.display();
   box6.display();
   box7.display();
    flagstand.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,ball1,ball3,ball4,ball5, slingShot1, slingShot2, slingShot3, slingShot4, slingShot5;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    

    
    ball1 = new Ball(220,100);
    slingshot1 = new SlingShot(ball1.body,{x:220, y:100});
    ball2 = new Ball(190,100);
    slingshot2 = new SlingShot(ball2.body,{x:190, y:100});
    ball3 = new Ball(160,100);
    slingshot3 = new SlingShot(ball3.body,{x:160, y:100});
    ball4 = new Ball(70,70);
    slingshot4 = new SlingShot(ball4.body,{x:100, y:100});
    ball5 = new Ball(130,100);
    slingshot5 = new SlingShot(ball5.body,{x:130, y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);


    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    slingshot1.display();    
    slingshot2.display();    
    slingshot3.display();    
    slingshot4.display();    
    slingshot5.display();    
}

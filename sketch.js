const Engine = Matter.Engine;

const World= Matter.World;

const Bodies = Matter.Bodies;

var engine, world;

var rubber,hammer;

function setup(){

    var canvas = createCanvas(1200,600);

    engine = Engine.create();

    world = engine.world;

    hammer = new Hammer(10,100);

    plane = new Plane(600,height,1200,20);

    rubber=new Rubber(900,450,70);


}

function draw(){

    background("lightBlue");

    Engine.update(engine);

    plane.display();   

    rubber.display();

    hammer.display();

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter=70;
	var startBobPositionX=width/2
	var startBobPositionY=height/4+500

    bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

    roofObject = new roof(width/2,height/4,width/7,20);
    
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });

    chain1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
    chain2 = new Rope(bobObject2.body,roofObject,-bobDiameter*1,0);
    chain3 = new Rope(bobObject3.body,roofObject.body,0,0);
    chain4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
    chain5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);

   
    Engine.run(engine);
    
  
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
 
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();

   roofObject.display();

   chain1.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();

}




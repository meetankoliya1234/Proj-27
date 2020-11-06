
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

    bobObject1 = new Bob(260,400,70);
	bobObject2 = new Bob(330,400,70);
	bobObject3 = new Bob(400,400,70);
	bobObject4 = new Bob(470,400,70);
	bobObject5 = new Bob(540,400,70);

    roofObject = new roof(400,100,350,50);
    
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });

    chain1 = new Chain(bobObject1.body,roofObject.body,-bobDiameter*2,0);
    chain2 = new Chain(bobObject2.body,roofObject,-bobDiameter*1,0);
    chain3 = new Chain(bobObject3.body,roofObject.body,0,0);
    chain4 = new Chain(bobObject4.body,roofObject.body,bobDiameter*1,0);
    chain5 = new Chain(bobObject5.body,roofObject.body,bobDiameter*2,0);

    /*constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}

	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}


	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	

	}

	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/

    Engine.run(engine);
    
    //Render.run(render);
  
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




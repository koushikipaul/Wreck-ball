const Engine = Matter.Engine,
World = Matter.World,
Body = Matter.Body,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;

var engine,world;
var boxes = [];
var ball,rope,ground;


function setup() {
   var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
   ground = new Ground(600,400,1200,20);
   ball = new Ball(200,200,80,80);
    for(var i = 0; i<6;i++){
      var box1 = new Box(900,100,70,70);
      boxes.push(box1);
      var box2 = new Box(800,100,70,70);
      boxes.push(box2);

    }

    for(var i = 0; i<8;i++){
      var box3 = new Box(700,100,70,70);
      boxes.push(box3);
      
      
    }

    rope = new Sling(ball.body,{x:400,y:50})



}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  rope.display();
  ball.display();
  for(var i = 0; i<boxes.length;i++){
    boxes[i].display();
  }
 
}

function mouseDragged(){
Body.setPosition(ball.body,{x:mouseX,y:mouseY});


}
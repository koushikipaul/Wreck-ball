class Ball{
    constructor(x,y,r){
         var options = {

             restitution: 0.1,
             frictionAir:0.005,
             density:1.0,
             isStatic: false
         }
         this.body = Bodies.circle(x,y,r,options);
         World.add(world,this.body);
         this.r = r;
        
    }
    display(){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         rotate(angle);
         translate(pos.x,pos.y);
         strokeWeight(4);
         stroke("yellow");
         fill("yellow");
         ellipseMode(RADIUS);
         ellipse(0,0,this.r,this.r);
         pop();
    }
}
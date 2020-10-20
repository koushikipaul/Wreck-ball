class Sling{
    constructor(bodyA,pointB){
         var options = {

            bodyA: bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
         }
         this.sling = Constraint.create(options);
         World.add(world,this.sling);
         this.pointB = pointB;
         
    }
    display(){
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
         
         push();
        
         strokeWeight(4);
         stroke("green");
         fill(0);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
         pop();
    }
}
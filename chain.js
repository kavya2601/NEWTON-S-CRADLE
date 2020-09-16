class Chain{
    constructor(A , B){
        var options={
            bodyA:A,
            pointB:B,
            length:20,
            stiffness:0.4
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);

    }
   // fly()
    //{
      //  this.chain.boyA = null;
   // }

    display()
    {
      //  if(this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.pointB;
        strokeWeight(1);
        line(posA.x , posA.y , posB.x , posB.y);
     //}
    }

}
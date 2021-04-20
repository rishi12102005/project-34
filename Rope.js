class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.3,
      length: 450,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  
  fly() {
    this.rope.bodyA = null;
  }
  attach(body) {
    this.rope.bodyA = body;
  }


  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke(48, 22, 8);
      strokeWeight(0);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}

class SlingShot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,

      stiffness: 0.04,
      length: 10,
    };
    this.slingshot = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.slingshot);
  }
  display() {
    if (this.slingshot.bodyA !== null) {
      var posA = this.slingshot.bodyA.position;
      var posB = this.pointB;

      push();
      strokeWeight(3);
      stroke("Black");
      line(posA.x, posA.y, posB.x, posB.y);
      pop();
    }
  }

  fly() {
    this.slingshot.bodyA = null;
  }
}

class Paper {
  constructor(x, y) {
    var options = {
      restitution: 0.5,
      density: 0.3,
      friction: 1.0,
    };

    this.body = Bodies.circle(x, y, 15, options);
    this.image = loadImage("Images/paper.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    imageMode(CENTER);
    //fill("Cyan");
    image(this.image, pos.x, pos.y, 40, 40);
  }
}

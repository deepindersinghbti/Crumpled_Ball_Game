class Block {
  constructor(x, y, w, h, color) {
    var options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    this.color = color;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
}

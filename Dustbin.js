class Dustbin {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h);
    this.image = loadImage("Images/dustbin.png");
    this.w = w;
    this.h = h;
  }
  display() {
    var pos = this.body.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.w, this.h);
  }
}

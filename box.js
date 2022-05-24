/* eslint-disable no-undef, no-unused-vars */

class Box {
  constructor(x, y, w, h, world, options) {
    this.width = w;
    this.height = h;
    this.posX = x;
    this.posY = y;
    this.options = options;
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.add(world);
  }

  add(world) {
    Composite.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(200, 0, 200);
    fill(0, 200, 200);
    rect(0, 0, this.width, this.height);
    pop();
  }
}

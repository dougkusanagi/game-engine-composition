import { Vec2 } from "./math";

export default class SquareSprite {
  constructor({ object, size = new Vec2(), color = "red" }) {
    this.object = object;
    this.size = size;
    this.color = color;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(
      this.object.position.x,
      this.object.position.y,
      this.size.x,
      this.size.y
    );
  }
}

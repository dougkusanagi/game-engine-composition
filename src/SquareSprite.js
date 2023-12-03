import { Vec2 } from "./math";

export default class SquareSprite {
  constructor({ entity, size = new Vec2(), color = "red" }) {
    this.entity = entity;
    this.size = size;
    this.color = color;
  }

  draw(canvas_context) {
    canvas_context.fillStyle = this.color;
    canvas_context.fillRect(
      this.entity.position.x,
      this.entity.position.y,
      this.size.x,
      this.size.y
    );
  }
}

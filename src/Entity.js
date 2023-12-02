export default class Entity {
  constructor({ position = new Vec2(), velocity = new Vec2() } = {}) {
    this.position = position;
    this.velocity = velocity;
  }

  move(deltaTime) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
  }
}

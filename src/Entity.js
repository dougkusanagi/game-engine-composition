export default class Entity {
  constructor({ position = new Vec2(), velocity = new Vec2() } = {}) {
    this.position = position;
    this.velocity = velocity;
  }

  update({ deltaTime, gravity }) {
    this.velocity.y += gravity.y;

    if (this.velocity.y > this.max_gravity) {
      this.velocity.y = this.max_gravity;
    }

    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
  }
}

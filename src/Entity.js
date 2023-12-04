export default class Entity {
  constructor({
    position = new Vec2(),
    velocity = new Vec2(),
    max_gravity = null,
  } = {}) {
    this.position = position;
    this.velocity = velocity;
    this.max_gravity = max_gravity;
  }

  update({ deltaTime, gravity }) {
    this.velocity.y += gravity;

    if (this.velocity.y > this.max_gravity) {
      this.velocity.y = this.max_gravity;
    }

    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
  }

  addSprite(sprite) {
    this.sprite = sprite;
  }
}

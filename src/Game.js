import Time from "./Time";
import { Vec2 } from "./math";

export default class Game {
  constructor(canvas_object) {
    this.canvas = canvas_object;
    this.entities = [];
    this.time = new Time(this);
    this.gravity = new Vec2(0, 2);
    this.max_gravity = 10;

    this.start();
  }

  start() {
    this.time.start(this);
  }

  update() {
    this.canvas.clear();
    this.updateEntities();
    this.drawEntities();
  }

  drawEntities() {
    this.entities.forEach((entity) => {
      entity.sprite.draw(this.canvas.context);
    });
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  updateEntities() {
    this.entities.map((entity) => {
      entity.update({
        deltaTime: this.time.delta_time,
        gravity: this.gravity,
      });
    });
  }
}

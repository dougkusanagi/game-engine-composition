import Time from "./Time";
import { Vec2 } from "./math";

export default class Game {
  constructor(canvas_object) {
    this.canvas = canvas_object;
    this.objects = [];
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
    this.objects.forEach((object) => {
      object.sprite.draw(this.canvas.context);
    });
  }

  addEntity(object) {
    this.objects.push(object);
  }

  updateEntities() {
    this.objects.map((object) => {
      object.entity.update({
        deltaTime: this.time.delta_time,
        gravity: this.gravity,
      });
    });
  }
}

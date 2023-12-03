import Time from "./Time";

export default class Game {
  constructor(canvas_object) {
    this.canvas = canvas_object;
    this.entities = [];
    this.delta_time = 0;

    this.time = new Time(this);
  }

  start() {
    this.time.start();
    this.update();
  }

  update() {
    this.canvas.clear();
    this.updateEntities();
    this.draw();
  }

  draw() {
    this.entities.forEach((entity) => {
      entity.sprite.draw(this.canvas.context);
    });
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  updateEntities() {
    this.entities.map((entity) => {
      entity.update(this.delta_time);
    });
  }
}

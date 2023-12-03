import Time from "./Time";

export default class Game {
  constructor(canvas_object) {
    this.canvas = canvas_object;
    this.entities = [];
    this.time = new Time(this);
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
      entity.update(this.time.delta_time);
    });
  }
}

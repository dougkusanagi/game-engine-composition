import { Vec2 } from "./math";
import Player from "./Player";

export default class Game {
  constructor() {
    this.canvas = document.getElementById("screen");
    this.context = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.entities = [];
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.entities.forEach((entity) => {
      entity.drawableSprite.drawSprite(this.context);
    });
  }

  update() {
    this.clear();

    this.draw();

    requestAnimationFrame(this.update.bind(this));
  }

  start() {
    const player = new Player({
      size: new Vec2(20, 40),
      position: new Vec2(100, 100),
      velocity: new Vec2(0, 0),
    });

    this.entities.push(player);

    this.update();
  }
}

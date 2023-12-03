import Entity from "./Entity";
import { Vec2 } from "./math";

export default class Player extends Entity {
  constructor({ position = new Vec2(), velocity = new Vec2() } = {}) {
    super({ position, velocity });
  }
}

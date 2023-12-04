import Entity from "./Entity";
import SquareSprite from "./SquareSprite";
import { Vec2 } from "./math";

export const createPlayer = function ({
  position = new Vec2(),
  velocity = new Vec2(),
} = {}) {
  const player = new Entity({
    position,
    velocity,
    max_gravity: 200,
  });

  player.addSprite(
    new SquareSprite({
      object: player,
      size: new Vec2(60, 40),
      color: "#443377",
    })
  );

  return player;
};

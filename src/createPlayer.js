import Entity from "./Entity";
import Player from "./Player";
import SquareSprite from "./SquareSprite";
import { Vec2 } from "./math";

export const createPlayer = function ({
  position = new Vec2(),
  velocity = new Vec2(),
} = {}) {
  const player = new Player({ position, velocity });

  player.entity = new Entity({
    position,
    velocity,
  });

  player.sprite = new SquareSprite({
    object: player,
    size: new Vec2(60, 40),
    color: "#443377",
  });

  return player;
};

import Player from "./Player";
import SquareSprite from "./SquareSprite";
import { Vec2 } from "./math";

export const createPlayer = function ({
  position = new Vec2(),
  velocity = new Vec2(),
} = {}) {
  const player = new Player({ position, velocity });

  player.sprite = new SquareSprite({
    entity: player,
    size: new Vec2(20, 40),
    color: "#443377",
  });

  return player;
};

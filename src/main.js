import "./style.css";

import Game from "./Game";
import Canvas from "./Canvas";
import { createPlayer } from "./createPlayer";
import { Vec2 } from "./math";

const game = new Game(
  new Canvas({
    canvas_element: document.getElementById("screen"),
  })
);

game.addEntity(
  createPlayer({
    position: new Vec2(100, 100),
    velocity: new Vec2(0, 0),
  })
);

game.start();

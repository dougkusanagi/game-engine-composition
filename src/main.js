import "./style.css";

import Game from "./Game";
import Player from "./Player";
import Canvas from "./Canvas";
import { Vec2 } from "./math";

const player = new Player({
  size: new Vec2(20, 40),
  position: new Vec2(100, 100),
  velocity: new Vec2(0, 0),
});

const game = new Game(
  new Canvas({
    canvas_element: document.getElementById("screen"),
  })
);

game.addEntity(player);

game.start();

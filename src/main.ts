// main.ts
import "./style.css";

import { UI } from "@peasy-lib/peasy-ui";
import { Engine, DisplayMode } from "excalibur";
import { model, template } from "./UI/UI";
import { Player } from "./Actors/player";
import { loader, Resources } from "./resources";
import { Noisemaker } from "./Actors/noisemaker";

await UI.create(document.body, model, template).attached;

const game = new Engine({
  width: 800, // the width of the canvas
  height: 600, // the height of the canvas
  canvasElementId: "cnv", // the DOM canvas element ID, if you are providing your own
  displayMode: DisplayMode.Fixed, // the display mode
  pixelArt: true,
});

await game.start(loader);

console.log(loader);

//@ts-ignore
const actx = loader.aCtx;
console.log(actx);

export const noisyActor = new Noisemaker(Resources.hbeat, actx);
game.add(noisyActor);

export const player = new Player(actx);
game.add(player);

game.currentScene.camera.strategy.lockToActor(player);

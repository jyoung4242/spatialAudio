// resources.ts
import { ImageSource, Loader, Sprite, SpriteSheet, Sound } from "excalibur";
import myImageResource from "./Assets/myImage.png"; // replace this
import heartbeat from "./Assets/heartbeat.wav";

export const Resources = {
  hbeat: new Sound(heartbeat),
};

export const loader = new Loader();

for (let res of Object.values(Resources)) {
  loader.addResource(res);
}

import { Actor, Color, Vector } from "excalibur";
import { SpatialAudioListenerComponent } from "../Components/SpatialAudio";

class Player extends Actor {
  spatialListener: SpatialAudioListenerComponent;
  constructor() {
    super({
      width: 25,
      height: 25,
      pos: new Vector(0, 0),
      color: Color.Red,
      anchor: Vector.Zero,
    });
    this.spatialListener = new SpatialAudioListenerComponent(this);
    this.addComponent(this.spatialListener);
  }
}

export const player = new Player();

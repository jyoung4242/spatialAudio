import { Actor, Color, Engine, Vector } from "excalibur";
import { SpatialAudioListenerComponent } from "../Components/SpatialAudio";

export class Player extends Actor {
  spatialListener: SpatialAudioListenerComponent | undefined;
  constructor(public audioContext: AudioContext) {
    super({
      width: 25,
      height: 25,
      pos: new Vector(0, 0),
      color: Color.Red,
      anchor: Vector.Zero,
    });
  }

  onInitialize(engine: Engine): void {
    this.spatialListener = new SpatialAudioListenerComponent(this, this.audioContext);
    this.addComponent(this.spatialListener);
  }
}

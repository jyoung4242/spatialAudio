import { Actor, Color, Engine, Vector } from "excalibur";
import { SpatialAudioComponent } from "../Components/SpatialAudio";

class Noisemaker extends Actor {
  spacialActor: SpatialAudioComponent;
  constructor() {
    super({
      width: 25,
      height: 25,
      pos: new Vector(200, 150),
      color: Color.Black,
      anchor: Vector.Zero,
    });
    this.spacialActor = new SpatialAudioComponent(this);
    this.addComponent(this.spacialActor);
  }

  onInitialize(engine: Engine): void {
    this.on("pointerdragstart", event => {
      console.log("start");
    });

    this.on("pointerdown", event => {
      console.log("down");
    });

    this.on("pointerdragmove", event => {
      console.log("move");
    });

    this.on("pointerdragend", event => {
      console.log("end");
    });

    this.on("pointerup", event => {
      console.log("up");
    });
  }
}

export const noisyActor = new Noisemaker();

import { Actor, Color, Engine, Vector, Sound } from "excalibur";
import { SpatialAudioComponent } from "../Components/SpatialAudio";
import { Resources } from "../resources";
import { ActorEvents } from "excalibur/build/dist/Actor";

export class Noisemaker extends Actor {
  isDragging: boolean = false;
  //spacialActor: SpatialAudioComponent;

  constructor(public sound: Sound, public audioContext: AudioContext) {
    super({
      width: 50,
      height: 50,
      pos: new Vector(200, 150),
      color: Color.Black,
      anchor: Vector.Zero,
    });
    this.pointer.useGraphicsBounds = true;
    /* this.spacialActor = new SpatialAudioComponent(this, this.audioContext);
    this.addComponent(this.spacialActor); */
  }

  onInitialize(engine: Engine): void {
    this.sound.loop = true;
    //@ts-ignore
    this.sound.setPosition(this.pos);
    this.sound.play();
    /*  this.on("pointerdragstart", event => {
      console.log("start");
    }); */

    this.on("pointerdown", event => {
      //console.log("down");
      this.isDragging = true;
    });

    this.on("pointerup", event => {
      //console.log("up");
      this.isDragging = false;
      //@ts-ignore
      this.sound.setPosition(this.pos);
      console.log(this.pos, this.sound);
    });
  }

  onPreUpdate(engine: Engine, delta: number) {
    //@ts-ignore
    if (this.isDragging) {
      this.pos.x = engine.input.pointers.primary.lastWorldPos.x - this.width / 2;
      this.pos.y = engine.input.pointers.primary.lastWorldPos.y - this.height / 2;
    }
    //@ts-ignore
    this.sound.update();
  }
}

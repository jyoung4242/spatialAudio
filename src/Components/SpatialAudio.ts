import { Actor, Component, Sound } from "excalibur";
import { ActorEvents } from "excalibur/build/dist/Actor";

export class SpatialAudioComponent extends Component {
  sounds: Record<string, { isPlaying: boolean; sound: Sound; pNode: PannerNode }> = {};

  constructor(public owner: Actor, public aCtx: AudioContext) {
    super();
  }

  onAdd(): void {
    this.owner.on("preupdate", this.onPreUpdate.bind(this));
  }

  registerSound(name: string, snd: Sound) {
    let pNode = this.aCtx.createPanner();
    pNode.panningModel = "HRTF";
    pNode.distanceModel = "inverse";
    pNode.refDistance = 1;
    pNode.maxDistance = 100;
    pNode.coneInnerAngle = 360;
    pNode.coneOuterAngle = 360;
    pNode.coneOuterGain = 0;

    this.sounds[name] = { sound: snd, pNode: pNode, isPlaying: false };
  }

  playSpatialSound(name: string) {
    if (this.sounds[name]) {
      this.sounds[name].isPlaying = true;
      this.sounds[name].sound.play();
    }
  }

  onPreUpdate(event: ActorEvents["preupdate"]): void {
    for (let sound of Object.values(this.sounds)) {
      if (sound.isPlaying) {
        sound.pNode.positionX.value = this.owner.pos.x;
        sound.pNode.positionY.value = this.owner.pos.y;
        sound.pNode.positionZ.value = 0;
      }
    }
  }
}

export class SpatialAudioListenerComponent extends Component {
  constructor(public owner: Actor, public aCtx: AudioContext) {
    super();
  }

  onAdd(): void {
    this.owner.on("preupdate", this.onPreUpdate.bind(this));
  }

  onPreUpdate(event: ActorEvents["preupdate"]): void {
    this.aCtx.listener.positionX.value = this.owner.pos.x;
    this.aCtx.listener.positionY.value = this.owner.pos.y;
    this.aCtx.listener.positionZ.value = 0;
  }
}

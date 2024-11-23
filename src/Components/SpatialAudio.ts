import { Actor, Component } from "excalibur";
import { ActorEvents } from "excalibur/build/dist/Actor";

export class SpatialAudioComponent extends Component {
  constructor(public owner: Actor) {
    super();
  }

  onAdd(): void {
    this.owner.on("preupdate", this.onPreUpdate.bind(this));
  }

  onPreUpdate(event: ActorEvents["preupdate"]): void {}
}

export class SpatialAudioListenerComponent extends Component {
  constructor(public owner: Actor) {
    super();
  }

  onAdd(): void {
    this.owner.on("preupdate", this.onPreUpdate.bind(this));
  }

  onPreUpdate(event: ActorEvents["preupdate"]): void {}
}

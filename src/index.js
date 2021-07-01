import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
    // TODO
  }

  preload() {
    // TODO
  }

  create() {
    // TODO
  }

  update() {
    // TODO
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "phaser3-codealong",
  width: 800,
  height: 600,
  scene: MyGame,
});

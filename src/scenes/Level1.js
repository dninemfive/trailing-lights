class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1");
    }

    preload() {
        this.load.image("background", "assets/TrailingLightsProtoBackground.png");
    }

    create() {
        this.background = this.add.sprite(0, 0,"background").setOrigin(0.5,0.5).setDepth(-2);

        this.player = new Player(this, playerStartPos.x, playerStartPos.y, "player").setOrigin(0.5, 0.5);

        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update() {
        this.player.update();
    }
}
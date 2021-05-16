class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1");
    }

    preload() {
        this.load.image("background", "assets/TrailingLightsProtoBackground.png");
        this.load.image("player", "assets/TrailingLightsProtoCharacter.png");
    }

    create() {
        this.background = this.add.sprite(0, 0,"background").setOrigin(0.5,0.5).setDepth(-2);

        this.player = new Player(this, game.config.width / 2, -100, "player").setOrigin(0.5, 0.5);
        this.player.setScale(playerScale);
        //this.player = new Player(this, playerStartPos.x, playerStartPos.y, "player").setOrigin(0.5, 0.5);

        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update() {
        this.player.update();
    }
}
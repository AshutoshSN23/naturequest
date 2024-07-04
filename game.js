function startGame() {
    alert("Starting the Trash Sorting Game!");

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    const game = new Phaser.Game(config);

    function preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('bin', 'assets/bin.png');
        this.load.image('trash', 'assets/trash.png');
    }

    function create() {
        this.add.image(400, 300, 'background');
        const bin = this.add.image(400, 500, 'bin');
        const trash = this.add.image(400, 100, 'trash');

        trash.setInteractive();
        this.input.setDraggable(trash);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', function (pointer, gameObject) {
            if (Phaser.Geom.Intersects.RectangleToRectangle(gameObject.getBounds(), bin.getBounds())) {
                gameObject.destroy();
                alert("Well done! You sorted the trash correctly.");
            } else {
                gameObject.x = 400;
                gameObject.y = 100;
            }
        });
    }

    function update() {}
}

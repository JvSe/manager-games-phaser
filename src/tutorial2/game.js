(function () {
    var config = {
        width: 640,
        height: 360,
        type: Phaser.AUTO,
        title: 'Crossy RPG',
        backgroundColor: 0x336699,
        input: {
            keyboard: true,
            mouse: true,
            touch: true,
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        scene: [
            mainScene,
            winScene
        ]
    };

    var game = new Phaser.Game(config);
    game.scene.start('main');
})();
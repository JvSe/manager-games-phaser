(function () {
    var config = {
        width: 1280,
        height: 720,
        type: Phaser.AUTO,
        title: 'Game Adventure',
        input: {
            keyboard: true,
            mouse: true,
            touch: true,
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 600 },
                debug: false
            }
        },
        scene: [
            mainScene,
            winScene,
            gameOverScene,
            menuScene
        ]
    };

    var game = new Phaser.Game(config);
    game.scene.start('main');
})();
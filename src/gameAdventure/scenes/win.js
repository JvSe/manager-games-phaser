var winScene = new Phaser.Scene('win');

winScene.init = function() {
    
};

winScene.preload = function() {

};

winScene.create = function() {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
    hero = this.add.sprite((this.sys.game.config.width/2) - 300, (this.sys.game.config.height/2), 'hero');

    this.anims.create({
        key: 'stop-right',
        frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 9 }),
        frameRate: 10,
        repeat: -1
    });


    this.add.text((this.sys.game.config.width/2) - 200, (this.sys.game.config.height/2) - 100, 'Parabéns', { fontSize: '100px', fontFamily: 'Arial', fill: '#fff' });
    this.add.text((this.sys.game.config.width/2) - 195, (this.sys.game.config.height/2), 'Você conseguiu chegar até aqui!', { fontSize: '33px', fill: '#fff', fontFamily: 'Arial' });
    this.add.text((this.sys.game.config.width/2) - 190, (this.sys.game.config.height/2) + 60, 'Pressione a barra de espaço para continuar', { fontSize: '18px', fill: '#fff', fontFamily: 'Arial' });
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};

winScene.update = function() {
    hero.anims.play('stop-right', true);

    if (this.spacebar.isDown) {
        this.time.delayedCall(250, function () {
            this.cameras.main.fade(250);
        }, [], this);
        this.scene.start('main');
    }
};
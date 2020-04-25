var mainScene = new Phaser.Scene('main');

mainScene.init = function() {
    this.heroVelocity = 2;
    this.direction = 'right';
    
};

mainScene.preload = function() {
    this.load.image('background', 'assets/SciFi/background.png');
    this.load.image('solo1', 'assets/SciFi/solo1.png');
    this.load.image('solo2', 'assets/SciFi/solo2-1.png');
    this.load.image('solo3', 'assets/SciFi/solo2-2.png');
    this.load.image('solo4', 'assets/SciFi/solo2-3.png');
    this.load.image('spike', 'assets/SciFi/spike.png');
    this.load.image('porta', 'assets/SciFi/porta.png')
    this.load.spritesheet('hero', 'assets/SciFi/hero.png', { frameWidth: 176.99, frameHeight: 173})
};

mainScene.create = function() {
    this.add.sprite(0,0, 'background').setOrigin(0,0);
    cursors = this.input.keyboard.createCursorKeys();

    plataforms = this.physics.add.staticGroup();
    plataforms.create(50,this.sys.game.config.height, 'solo1').setScale(0.5).setSize(195, 1, 0, 0).setOffset(94,33);
    plataforms.create(430,this.sys.game.config.height - 10, 'solo1').setScale(0.5).setSize(195, 1, 0, 0).setOffset(94,33);
    plataforms.create(630,this.sys.game.config.height - 80, 'solo4').setScale(0.5).setSize(65, 1, 0, 0).setOffset(30,15);
    plataforms.create(450,this.sys.game.config.height - 140, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(160,this.sys.game.config.height - 190, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(0,this.sys.game.config.height - 250, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(160,this.sys.game.config.height - 310, 'solo4').setScale(0.5).setSize(65, 1, 0, 0).setOffset(30,15);
    plataforms.create(0,this.sys.game.config.height - 370, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(275,this.sys.game.config.height - 420, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(400,this.sys.game.config.height - 420, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(525,this.sys.game.config.height - 420, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(650,this.sys.game.config.height - 420, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(650,this.sys.game.config.height - 420, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    plataforms.create(1030,this.sys.game.config.height - 10, 'solo1').setScale(0.5).setSize(195, 1, 0, 0).setOffset(94,33);
    plataforms.create(850,this.sys.game.config.height - 210, 'solo4').setScale(0.5).setSize(65, 1, 0, 0).setOffset(30,15);
    plataforms.create(1180,this.sys.game.config.height - 100, 'solo3').setScale(0.5).setSize(130, 1, 0, 0).setOffset(60,15);
    

    spikes = this.physics.add.staticGroup();

    spikes.create(1090, this.sys.game.config.height - 72, 'spike').setScale(0.25).setSize(65,50,0,0).setOffset(95,117)
    spikes.create(850, this.sys.game.config.height - 260, 'spike').setScale(0.25).setSize(65,50,0,0).setOffset(95,117)
    
    porta = this.physics.add.staticGroup();

    porta.create(1210,this.sys.game.config.height - 173, 'porta').setScale(0.25).setSize(70,120,0,0).setOffset(105,175)   
    
    // CONFIGURANDO O HERO //

    hero = this.physics.add.sprite(50,this.sys.game.config.height - 100, 'hero');
    hero.setBounce(0.1);
    //hero.setCollideWorldBounds(true);
    hero.setScale(0.5);

    //Mudar o hitbox do personagem
    //definir o tamanho
    hero.body.setSize(100,150, 0,0)
    
    //movimentar o hitbox
    hero.body.setOffset(35, 10);
    // ANIMAÇÕES DO HERO
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('hero', { start: 51, end: 57 }),
        frameRate: 20,
        repeat: -1
    });

    this.anims.create({
        key: 'stop-right',
        frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 9 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'stop-left',
        frames: this.anims.generateFrameNumbers('hero', { start: 30, end: 39 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('hero', { start: 21, end: 27 }),
        frameRate: 20,
        repeat: -1
    });

    this.anims.create({
        key: 'jump-right',
        frames: this.anims.generateFrameNumbers('hero', { start: 11, end: 19 }),
        frameRate: 20,
    });

    this.anims.create({
        key: 'jump-left',
        frames: this.anims.generateFrameNumbers('hero', { start: 41, end: 49 }),
        frameRate: 20,
    });

    // FINAL DAS ANIMAÇÕES //

    // AJUSTANDO A COLISÃO DO HERO COM AS PLATAFORMAS // 
    this.physics.add.collider(hero, plataforms);
    this.physics.add.collider(hero, spikes, death, null, this);
    this.physics.add.overlap(hero, porta, vitoria, null, this);
};

mainScene.update = function() {

    if (cursors.left.isDown) {
        hero.setVelocityX(-160);

        hero.anims.play('left', true);
        this.direction = 'left'
    }
    else if (cursors.right.isDown) {
        hero.setVelocityX(160);

        hero.anims.play('right', true);
        this.direction = 'right'

    } else {
        if (hero.body.touching.down){
            if(this.direction == 'right') {
                hero.setVelocityX(0);
    
                hero.anims.play('stop-right', true);
            } else {
                hero.setVelocityX(0);
    
                hero.anims.play('stop-left', true);
            }
        }
    }
    

    if (cursors.up.isDown && hero.body.touching.down) {
        if (this.direction == 'right') {
            hero.setVelocityY(-300);
            hero.anims.play('jump-right', true);
        } else {
            hero.setVelocityY(-300);
            hero.anims.play('jump-left', true);
        }
        
    }
    

    if (hero.body.y > this.sys.game.config.height) {
        this.gameOver();
    }
    
};

mainScene.gameOver = function() {
    this.cameras.main.shake(500);
    this.time.delayedCall(250, function () {
        this.cameras.main.fade(250);
    }, [], this);
    this.time.delayedCall(500, function () {
        this.scene.restart();
    }, [], this);
};

function death (){
    this.physics.pause();
    this.gameOver();
};

function vitoria() {
    this.scene.start('win')
}
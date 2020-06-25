class GameScene extends Phaser.Scene {
    constructor() {
        super({
            active: true,
            visible: true,
            key: 'Game'
        } as Phaser.Types.Scenes.SettingsConfig);
    }

    public preload() {
        this.load.image('phaser-logo', './public/assets/phaser.png');
        this.load.image('socket-io-logo', './public/assets/socket-io.png');
    }

    public create() {
        let text = this.add.text(window.innerWidth / 2 - 40, window.innerHeight / 2 + 100, 'Not connected', { align: 'center' });
        
        this.add.image(window.innerWidth / 2 - 100, window.innerHeight / 2, 'phaser-logo').setScale(0.05);
        this.add.image(window.innerWidth / 2 + 100, window.innerHeight / 2, 'socket-io-logo').setScale(0.1);

        socket.on('setText', t => text.text = t);

        socket.emit('setText');
    }
}
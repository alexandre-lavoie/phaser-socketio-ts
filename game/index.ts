/// <reference path="../node_modules/phaser/types/phaser.d.ts" />
/// <reference path="../node_modules/@types/socket.io-client/index.d.ts" />
/// <reference path="./scenes/GameScene.ts"/>

const socket = io();

(async () => {
    const config = await (await fetch('/public/config.json')).json();
    
    new Phaser.Game({
        title: config.gameName,
        type: Phaser.AUTO,
        scene: [GameScene],
        width: window.innerWidth,
        height: window.innerHeight,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        autoRound: false,
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        parent: 'alexandre-lavoie',
        backgroundColor: '#000'
    } as any);
})();


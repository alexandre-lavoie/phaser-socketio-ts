const fs = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

console.log("Phaser - SocketIO Builder\n");

(async () => {
    console.log('> Building Game');

    let output = await exec('npm run build-game');

    if(output.stderr) {
        console.log(output.stderr);
        return;
    }
    
    console.log('> Building Server');
    
    output = await exec('npm run build-server');

    if(output.stderr) {
        console.log(output.stderr);
        return;
    }
    
    console.log('> Copying Public Folder');
    
    await fs.copy('./public', './build/public');
    
    console.log('> Copying Views Folder');
    
    await fs.copy('./views', './build/views');
    
    console.log('> Done\n');
})();
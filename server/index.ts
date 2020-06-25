import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import fs from 'fs';
import Server from './components/Server';
import config from '../public/config.json';

const app = express() as any;
const server = http.createServer(app);
const io = socketio(server);
const port = 80;

console.log(`Game: ${config.gameName}`);
console.log(`Author: ${config.author}`);

server.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', (_, res) => {
    res.render('index', {'js': (process.env.NODE_ENV == `production`) ? fs.readFileSync('./game/index.min.js') : fs.readFileSync('./build/game/index.js'), 'title': config.gameName});
});

new Server(io);
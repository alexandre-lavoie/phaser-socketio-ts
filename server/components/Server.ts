export default class Server {

    private io: SocketIO.Server;

    constructor(io: SocketIO.Server) {
        this.io = io;
        
        this.io.on('connect', socket => {
            socket.on('setText', () => {
                socket.emit('setText', 'Connected');
            });
        });
    }
}
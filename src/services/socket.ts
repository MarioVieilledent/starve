import { map } from "./map";

// Socket server-side management
export default function socketServer(io: any) {
    io.on('connection', (socket: any) => {

        console.log(Object.keys(socket));
        console.log(Object.entries(socket.client));

        socket.emit('debug', socket.data);

        socket.on('getMap', () => {
            socket.emit('map', map);
        });
    });
}
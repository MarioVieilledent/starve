import { map } from "./map";

// Socket server-side management
export default function socketServer(io: any) {
    io.on('connection', (socket: any) => {
        console.log(`Connected: ${socket}`);

        socket.on('getMap', () => {
            socket.emit('map', map);
        });
    });
}
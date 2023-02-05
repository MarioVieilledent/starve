"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("./map");
// Socket server-side management
function socketServer(io) {
    io.on('connection', (socket) => {
        console.log(Object.keys(socket));
        console.log(Object.entries(socket.client));
        socket.emit('debug', socket.data);
        socket.on('getMap', () => {
            socket.emit('map', map_1.map);
        });
    });
}
exports.default = socketServer;

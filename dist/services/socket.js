"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("./map");
// Socket server-side management
function socketServer(io) {
    io.on('connection', (socket) => {
        console.log(`Connected: ${socket}`);
        socket.on('getMap', () => {
            socket.emit('map', map_1.map);
        });
    });
}
exports.default = socketServer;

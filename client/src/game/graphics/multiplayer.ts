import { socket } from "../../services/socket";

socket.on('', (data => {

}));

function sendPlayerInfo(info: string): void {
    socket.emit('playerInfo', info);
}
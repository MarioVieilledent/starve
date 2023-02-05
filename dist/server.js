"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = __importDefault(require("./services/socket"));
var express = require('express');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:5173']
    }
});
const port = process.env.PORT || 5000;
app.set(port, process.env.PORT);
app.use(express.static('./client/dist/'));
// Socket server-side management
(0, socket_1.default)(io);
http.listen(port, () => {
    console.log('App listening on port ' + port);
});

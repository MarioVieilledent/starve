import socketServer from "./services/socket";

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
socketServer(io);

http.listen(port, () => {
  console.log('App listening on port ' + port);
});

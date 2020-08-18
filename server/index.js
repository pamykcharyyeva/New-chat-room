const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// specify port that can be runned
const PORT = process.env.PORT || 5000;


// htto request is so slow so its better to use socket.io
// set up socket.io
// all info about socket.io is in https://socket.io/docs/

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => console.log(`Server has started on ${PORT}`));
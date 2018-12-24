var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var player = require('./src/player');

app.use('/', express.static(__dirname + '/web-client'));

io.on('connection', function(socket){
    console.log('a user connected. socket.id = ', socket.id);
    socket.broadcast.emit('broadcast: message to everyone except me.');  // broadcast to everyone except this socket owner
    io.emit('chat message', 'message for every sockets!'); // broadcast to everyone
    

    socket.on('chat message', (msg)=>{
        console.log('server received: ', msg);
        socket.emit('chat message', msg); //send to the socket client
        
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

var portNumber = 8080;
http.listen(portNumber, function () {
    console.log(`App with socket.io listening on port ${portNumber}!`);
});


// ========== game logic ============
const FPS = 30;
const MAX_PLAYER_NUMBER = 8;
var players = [];

console.log('player.createPlayer() = ', player.createPlayer(), ' player.getPlayers() = ', player.getPlayers());


setInterval(function() {
    let updateData;
    updateData = {
        'test': 'test'
    }
    io.emit("updates", updateData);
}, Math.floor(1000/FPS) );
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/web-client'));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

var portNumber = 8080;
http.listen(portNumber, function () {
    console.log(`App with socket.io listening on port ${portNumber}!`);
});
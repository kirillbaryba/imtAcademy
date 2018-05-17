var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var user = [];
io.on('connection', function(socket) {
    console.log('A user connected');
    socket.on('setUsername', function(data) {
        console.log(data);
        if (users.indexOf(data) > -1) {
            console.log(data);
            socket.emit('userExists', '<p class="bg-primary">Користувач ' + '<b>' + data + '<b/>' + ' вже існує, будь-ласка вибери інший нік</p>');
        } else {
            users.push(data);
            socket.emit('userSet', { userName: data });
        }
    });

    socket.on('message', function(data) {
        io.socket.emit('newMessage', data);
    });
});

http.listen(3000, function() {
    console.log('Go to localhost 3000');
});
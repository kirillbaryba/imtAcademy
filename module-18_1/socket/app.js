//1.0 Base connect Node.js
// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// http.listen(3000, function() {
//     console.log('Go to localHost:3000');
// });

//2.0 Hello World + Soket.io
// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });
// //выполнится при соединении пользователя
// io.on('connection', function(socket) {
//     console.log('A user connected');

//     //выполнится при отсоединения пользователя
//     socket.on('disconnect', function() {
//         console.log('A user disconnect');
//     });
// });

// http.listen(3000, function() {
//     console.log('Go to localHost:3000');
// });

//3.0 Обработка событий
// Родные события: connect, message, disconnect, reconnect, ping, join, leave
// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });
// //выполнится при соединении пользователя
// io.on('connection', function(socket) {
//     console.log('A user connected');

//     //Отправка сообщения чере промежуток времени
//     setTimeout(function() {
//         //генерирует внутренее (встроенное) событие message
//         socket.send('Sent a message 2 seconds after connection!');
//     }, 2000);

//     //выполнится при отсоединения пользователя
//     socket.on('disconnect', function() {
//         console.log('A user disconnect');
//     });
// });

// http.listen(3000, function() {
//     console.log('Go to localHost:3000');
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
//выполнится при соединении пользователя
io.on('connection', function(socket) {
    console.log('A user connected');

    //Отправка сообщения чере промежуток времени
    setTimeout(function() {
        //генерирует внутренее (встроенное) событие message
        socket.emit('myEvent', {
            description: 'User event from server'
        });
    }, 2000);

    //выполнится при отсоединения пользователя
    socket.on('disconnect', function() {
        console.log('A user disconnect');
    });
});

http.listen(3000, function() {
    console.log('Go to localHost:3000');
});
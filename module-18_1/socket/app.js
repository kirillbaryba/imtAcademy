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

//4.0
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
//         socket.emit('myEvent', {
//             description: 'User event from server'
//         });
//     }, 2000);

//     //выполнится при отсоединения пользователя
//     socket.on('disconnect', function() {
//         console.log('A user disconnect');
//     });
// });

// http.listen(3000, function() {
//     console.log('Go to localHost:3000');
// });

// //5.0 Получение событий от клиента
// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });
// //выполнится при соединении пользователя
// io.on('connection', function(socket) {

//     //выполнится при отсоединения пользователя
//     socket.on('clientevent', function(data) {
//         console.log(data);
//     });
// });

// http.listen(3000, function() {
//     console.log('Go to localHost:3000');
// });

//6.0 Широковещание, отправка сообщений всем подключенным клиентам
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var users = 0
    //На каждое соединение 
io.on('connection', function(socket) {
    users++;
    //Событие на колл. подключившихся users
    socket.broadcast.emit('broadcast', {
        description: users + 'user connected!'
    });

    socket.on('disconnect', function() {
        users--;

        socket.broadcast.emit('broadcast', {
            description: users + 'user disconnect!'
        });
    });
});

http.listen(3000, function() {
    console.log('Go to localHost:3000');
});
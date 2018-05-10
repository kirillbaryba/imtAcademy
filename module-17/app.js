//Подключили модуль express
var express = require('express');
//Инициализировали модуль для работы с формами
var bodyParser = require('body-parser');

//Инициализировали приложение app
var app = express();

//Метод use (использовать)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Массив обьектов тестовые данные
var courses = [{
        id: 1,
        name: 'JS'
    },
    {
        id: 2,
        name: 'PHP'
    },
    {
        id: 3,
        name: 'Java'
    }
];

app.get('/courses', function(req, res) {
    res.send(courses);
});


////////////////////////////////
//Метод get устанавливает маршрут (route)
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/contact', function(req, res) {
    res.send('<a href="/">Main page</a>');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})
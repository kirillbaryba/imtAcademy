//Events
/*
var count = 0;

var print = function() {
    count++;
    console.log('Click - ', count)
};

//Обьект событий
var Event = require('events');
//Создали екземпляр класса событий присвоили emt
var emt = new Event();
//Дает возможность создавать свои события
//emt.on('click', print);
//emt.on('do', print);
//emt.addListener('do');
emt.once('do', print);

//Имитируем и привязываем событие 
emt.emit('do');
emt.emit('do');
emt.emit('do');
//emt.emit('click');
*/

//////////////////////////////////
//Все события будут выполняться синхронно в порядке их обьявления
/*
var Event = require('events');
var emt = new Event();

emt.on('event', function() {
    setImmediate(function() {
        console.log('Do 1');
    });
});
emt.on('event', function() {
    console.log('Do 2');
});
emt.on('event', function() {
    console.log('Do 3');
});
emt.emit('event');
*/

/////////////////////////////
/*
var Event = require('events');
var emt = new Event();

//привящали кастомное событие
emt.on('myEvent', run);
//выполняем эмитируем событие
emt.emit('myEvent');

//Удалим слушатель
emt.removeListener('myEvent', run);
console.log('Listener removed');

emt.emit('myEvent');

function run() {
    console.log('Run test function, man');
}
*/

/////////////////////////////////
var Event = require('events');
var emt = new Event();

var obj = { id: 1, name: 'Adam', age: 28, class: 'Human' }

//Пример с передачей параметров в function (a, b)
emt.on('myEvent', function() {
    //console.log(a, b);
    console.log(arguments);
});
//emt.emit('myEvent', 2, 4);
emt.emit('myEvent', obj);

//////////////////////////////////
//Стандартный порог для максимального колл. событий 10
/*
emt.setMaxListeners(100);

emt.on('event', function() {
    console.log('Do 1');
});
emt.on('event', function() {
    console.log('Do 2');
});
emt.on('event', function() {
    console.log('Do 3');
});
*/
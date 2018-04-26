//Модуль для работы с файлами
/*
var fs = require('fs');
//console.log(fs);

var content = fs.readFileSync('demo.txt');
console.log(content);
console.log('Read done');
*/

//Модуль http
var http = require('http');

http.createServer(function(req, res) {
    res.write('Hello World');
    console.log(req.url);
    res.end();
}).listen(3000, function() {
    console.log('Server on localhost:3000')
});
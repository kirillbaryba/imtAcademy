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
var fs = require('fs');

http.createServer(function(req, res) {
    if (req.url === '/hello') {
        fs.readFile('index.html', function(err, data) {
            res.write(data);
            res.end();
        });
    }
}).listen(3000, function() {
    console.log('Server on localhost:3000')
});
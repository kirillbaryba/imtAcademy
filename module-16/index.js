var Converter = require('./converter');

var baseCurrencyUs = 26.6;
var converter = new Converter(baseCurrencyUs)

console.log(converter.convertToUa(100));
console.log(converter.convertToUs(100));
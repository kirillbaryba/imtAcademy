// var baseCurrencyUs = 26.6;

// function roundTwoDecimals(amount) {
//     return Math.round(amount * 100) / 100;
// }

// module.exports.convertToUa = function (currency) {
//     console.log(roundTwoDecimals(currency * baseCurrencyUS));
// };

// module.exports.convertToUs = function (currency) {
//     console.log(roundTwoDecimals(currency / baseCurrencyUS));
// }; 
/*
var Converter = function(baseCurrencyUs) {
    this.baseCurrencyUs = baseCurrencyUs;
};

Converter.prototype.roundTwoDecimals = function (amount) {
    return Math.round(amount * 100) / 100;
};

Converter.prototype.convertToUa = function (carrency) {
    return this.roundTwoDecimals(carrency * this.baseCurrencyUs)
};

 module.exports = Converter;
 */

// Пример ES6
class Converter {
    constructor(baseCurrencyUs) {
        this.baseCurrencyUs = baseCurrencyUs;
    };

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    };

    convertToUa(carrency) {
        return this.roundTwoDecimals(carrency * this.baseCurrencyUs)
    };
    convertToUs(carrency) {
        return this.roundTwoDecimals(carrency * this.baseCurrencyUs)
    };
}
module.exports = Converter;
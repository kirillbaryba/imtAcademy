// Класс (функция конструктор)
/*
var User = function(name) {
    this.name = name;
    // this.getName = function() {
    //     console.log(this.name);
    // }
};

//Обьект расширяем через прототип
User.prototype.getName = function() {
    console.log(this.name);
}
*/

//Пример ES6
// Класс (функция конструктор)
class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name)
    }
}

let user1 = new User(); //false
let user2 = new User(); //true

//обьекты не равны, разная область памяти
console.log(user1 === user2);
// свойства обьекта равны значения свойств не равны, так как свойства обьекта храняться в прототипе
console.log(user1.name === user2.name);
//Новый метод, новый обьект getName метод, функция (обьект)
console.log(user1.getName === user2.getName);
//console.log(typeof user);

//Наследуем свойства обьекта User
class superUser extends User {
    //создаем у родителя конструктор
    constructor(name) {
        super(name);
    }
}
//Наследловаться можно от одного обьекта, в javascript нет множественного наследования
//в ES6 есть обход осуществляется через миксины
let superUser1 = new superUser();
console.log(user1.name === superUser1.name);
console.log(user1.getName === superUser1.getName);
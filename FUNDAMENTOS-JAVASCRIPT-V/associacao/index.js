const Addres = require("./Addres");
const Person = require("./Person");

const addr = new Addres('Rua 1', 10, 'Centro', 'Sao Paulo', 'SP')
const john = new Person('John', addr)

console.log(john)
console.log(john.addres.fullAddress())
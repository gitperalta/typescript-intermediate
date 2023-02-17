"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = exports.EmployeeExport = exports.Person = void 0;
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    sayHi() {
        console.log(`Hello, my name is ${this.name} ${this.lastName} and I am ${this.age} years old.`);
    }
}
exports.Person = Person;
class EmployeeExport extends Person {
    constructor(name, lastName, age, salary) {
        super(name, lastName, age); //
        this.salary = salary;
    }
    sayHi() {
        super.sayHi();
        console.log(`My salary is ${this.salary} $`);
    }
}
exports.EmployeeExport = EmployeeExport;
class Boss extends Person {
    constructor(name, lastName, age) {
        super(name, lastName, age);
        this.employees = [];
    }
}
exports.Boss = Boss;
//# sourceMappingURL=Person.js.map
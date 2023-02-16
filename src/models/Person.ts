export class Person {
  name: string;
  lastName: string;
  age: number;
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  sayHi(): void {
    console.log(
      `Hello, my name is ${this.name} ${this.lastName} and I am ${this.age} years old.`
    );
  }
}

export class EmployeeExport extends Person {
  salary: number;
  constructor(name: string, lastName: string, age: number, salary: number) {
    super(name, lastName, age); //
    this.salary = salary;
  }

  sayHi(): void {
    super.sayHi();
    console.log(`My salary is ${this.salary} $`);
  }
}

export class Boss extends Person {
  employees: EmployeeExport[] = [];
  constructor(name: string, lastName: string, age: number) {
    super(name, lastName, age);
  }
}

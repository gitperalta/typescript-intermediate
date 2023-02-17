"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const cookies_utils_1 = require("cookies-utils");
const courses_mock_1 = require("./mock/courses.mock");
const Code_1 = require("./models/Code");
const Course_1 = require("./models/Course");
const ITodo_1 = require("./models/interfaces/ITodo");
const Person_1 = require("./models/Person");
const Student_1 = require("./models/Student");
console.log("Hi Sebas");
console.log("Bye Sebas");
// This is a comment in TS
/**
 * This is a multiline comment
 */
// Declaration of Variables
let name = "Sebastian";
console.log("Hi, " + name);
console.log("How you doing, ", name, "?");
console.log(`How vacations are going, ${name}?`);
let email = "sebastianpr99@hotmail.com"; //Local variable
console.log(`${name}'s email is ${email}`);
const PI = 3.1416;
let lastNames = "Peralta"; // Type ANY let variable change type
lastNames = 3;
let error;
error = false;
console.log(`Is there an error?: ${error}`);
//Multiple variable declaration
let a, b, c; // Declares 3 valueless variables
a = "TypeScript";
b = true;
c = 8.9;
// BuildIn Types: number, string, boolean, void, null & undefined
// **COMPLEX TYPES
//Text strings arrays
let todoList = ["Todo 1", "Todo 2"];
//Mixed types arrays
let values = [false, "Hola", true, 56];
//ENUM
var Statuses;
(function (Statuses) {
  Statuses["Completed"] = "C";
  Statuses["Uncompleted"] = "U";
  Statuses["Pending"] = "P";
})(Statuses || (Statuses = {}));
var PlaceRun;
(function (PlaceRun) {
  PlaceRun[(PlaceRun["First"] = 1)] = "First";
  PlaceRun[(PlaceRun["Second"] = 2)] = "Second";
  PlaceRun[(PlaceRun["Third"] = 3)] = "Third";
})(PlaceRun || (PlaceRun = {}));
let statusesTodo = Statuses.Completed;
let placeMarathon = PlaceRun.Second;
// we can declare variables with the Todo interface
let todo1 = {
  name: "Todo 1",
  status: Statuses.Pending,
  urgency: 10,
};
console.log(`Todo: ${todo1.name}`);
//Multiple declaration in variables
let myTodo = {
  title: "My Todo",
  status: Statuses.Completed,
  urgency: 1,
};
// 1 by 1 declaration
let myTitle = myTodo.title;
let myStatus = myTodo.status;
let myUrgency = myTodo.urgency;
// Destructuring Declaration
let { title, status, urgency } = myTodo;
// Spread Operator
let MondayBuyingList = ["milk", "potato"];
let TuesdayBuyingList = [...MondayBuyingList, "bred", "eggs"];
let WednesdayBuyingList = ["meat", "fish"];
let weekBuyingList = [...MondayBuyingList, ...WednesdayBuyingList];
let appStatus = {
  user: "admin",
  session: 3,
  jwt: "jcbiwncown",
};
let newStatus = Object.assign(Object.assign({}, appStatus), { session: 4 });
let age = 4;
let student = {
  name: "Sebastian",
  age, // age: age
};
let car = {
  year: 2010,
  name: "Audi",
  price: 45000,
};
// ** Conditionals:
//Ternary Operator
console.log(
  car.year < 2010 ? `Car: ${car.name} in old.` : `Car: ${car.name} is new.`
);
// If - else
if (error) {
  console.log("There is an error");
} else {
  console.log("There is no error ");
}
// If - else if - else
if (car.year < 2010) {
  console.log(`Car: ${car.name} is old.`);
} else if (car.year === 2010) {
  console.log(`Car: ${car.name} was made in 2010.`);
} else {
  console.log(`Car: ${car.name} is new.`);
}
// Switch
switch (todo1.status) {
  case Statuses.Completed:
    console.log("The Todo is completed.");
    break;
  case Statuses.Uncompleted:
    console.log("The Todo is uncompleted");
    break;
  case Statuses.Pending:
    console.log("The Todo is pending.");
    break;
  default:
    break;
}
// **Loop
let newTodoList = [
  {
    name: "Todo 1",
    status: Statuses.Completed,
    urgency: 2,
  },
  {
    name: "Todo 2",
    status: Statuses.Pending,
    urgency: 0,
  },
  {
    name: "Todo 3",
    status: Statuses.Uncompleted,
    urgency: 15,
  },
];
// Classic For
for (let index = 0; index < newTodoList.length; index++) {
  const todo = newTodoList[index];
  console.log(`${index} - ${todo.name}`);
}
// ForEach
newTodoList.forEach((todo, index) => console.log(`${index} - ${todo.name}`));
//While Loop
while (todo1.status !== Statuses.Completed) {
  if (todo1.urgency === 5) {
    todo1.status = Statuses.Completed;
    break;
  } else {
    todo1.urgency++;
  }
}
//Do While
do {
  todo1.urgency++;
  todo1.status = Statuses.Completed;
} while (todo1.status !== Statuses.Completed);
// **Functions
/**
 * This function shows a greeting in the console
 */
function sayHi() {
  let name = "Sebas";
  console.log(`¡Hello, ${name}!`);
}
// Function Invocation
sayHi();
/**
 * This functions shows a greeting to a person by the console
 * @param name Person's name
 */
function personSayHi(name) {
  console.log(`¡Hello, ${name}!`);
}
personSayHi("Sebas");
/**
 * This function shows a greeting by the console to a person
 * @param name Default person's name to say goodbye is Pepe
 */
function personSayBye(name = "Pepe") {
  console.log(`¡Good bye, ${name}!`);
}
personSayBye(); // ¡Good bye, Pepe!
personSayBye("Alba"); // ¡Good bye, Alba!
/**
 * This function shows a goodbye by the console to a person
 * @param name (Optional) Person's name to say goodbye
 */
function optionalBye(name) {
  name ? console.log(`¡Good bye, ${name}!`) : console.log(`¡Good bye!`);
}
optionalBye(); // "!Good bye¡"
optionalBye("Martinez"); // "!Good bye Martinez¡"
function someParams(name, lastName, age = 18) {
  if (lastName) {
    console.log(`${name} ${lastName} is ${age} years old.`);
  } else {
    console.log(`${name} is ${age} years old.`);
  }
}
someParams("Sebas"); // Sebas is 18 years old.
someParams("Sebas", "Peralta"); // Sebas Peralta is 18 years old.
someParams("Sebas", undefined, 23); // Sebas is 30 years old.
someParams("Sebas", "Peralta", 23); // Sebas is 30 years old.
someParams((name = "Sebas"), (lastNames = "Peralta"), (age = 23)); // Sebas Peralta is 23 years old.
function someTypes(a) {
  if (typeof a === "string") {
    console.log("A is a string");
  } else if (typeof a === "number") {
    console.log("A is a number");
  } else {
    console.log("A is not a string or a number");
    throw Error("A is not a string or a number");
  }
}
someTypes("Hola");
someTypes(3);
/**
 *
 * @param name Person's name
 * @param lastName Person's last name
 * @returns Person's full name
 */
function returnExample(name, lastName) {
  return `${name} ${lastName}`;
}
const fullName = returnExample("Sebas", "Peralta");
console.log(fullName); // Sebas Peralta
console.log(returnExample("Sebas", "Peralta")); //Sebas Peralta
/**
 *
 * @param names It is a list of string names
 */
function multiParamsExample(...names) {
  names.forEach((name) => {
    console.log(name);
  });
}
multiParamsExample("Sebas");
multiParamsExample("Sebas", "Pepe", "Juan", "Alba");
const list = ["Alberto", "Sandra"];
multiParamsExample(...list);
function arrayParamsExample(names) {
  names.forEach((name) => {
    console.log(name);
  });
}
arrayParamsExample(list);
let employeeSebas = {
  name: "Sebas",
  lastName: "Peralta",
  age: 23,
};
const showEmployee = (employee) =>
  `${employee.name} is ${employee.age} years old.`;
//Let's call the function
showEmployee(employeeSebas);
const employeeData = (employee) => {
  if (employee.age > 70) {
    return `Employee ${employee.name} is on to retire.`;
  } else {
    return `Employee ${employee.name} is on working age.`;
  }
};
employeeData(employeeSebas); // Employee Sebas is on working age.
const getSalary = (employee, collect) => {
  if (employee.age > 70) {
    return;
  } else {
    collect(); // Callback
  }
};
const collectEmployee = (employee) => {
  console.log(`${employee.name} collects salary.`);
};
getSalary(employeeSebas, () => "Collect Sebas");
// **Async Functions
function asyncExample() {
  return __awaiter(this, void 0, void 0, function* () {
    //Await
    yield console.log("This is a pause before the stack keeps the resolution.");
    console.log("Work Completed");
    return "Completed";
  });
}
asyncExample()
  .then((response) => console.log("Response", response))
  .catch((error) => console.error("There is an error."))
  .finally(() => console.log("Its all done"));
// Generators
function* generatorExample() {
  //yield -> emit values
  let index = 0;
  while (index < 5) {
    // emit increment
    yield index++;
  }
}
// Generator Function Variable
let generator = generatorExample();
// Lets use the values
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
// Worker
function* watcher(value) {
  yield value; // Emit the initial value
  yield* worker(value); // worker values
  yield value + 4; // We emit the final value + 10
}
function* worker(value) {
  yield value + 1;
  yield value + 2;
  yield value + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (watcher)
console.log(generatorSaga.next().value); // 1 (worker)
console.log(generatorSaga.next().value); // 2 (worker)
console.log(generatorSaga.next().value); // 3 (worker)
console.log(generatorSaga.next().value); // 4 (watcher)
// Functions Override
function showError(error) {
  console.error("There is an error", error);
}
// **Data Persistence
// 1. LocalStorage & SessionStorage
function save() {
  localStorage.set("name", "Sebas");
  sessionStorage.set("name", "Sebas");
}
function read() {
  let name = localStorage.get("name");
  let sessionName = sessionStorage.get("name");
}
function deleteItem(item) {
  localStorage.removeItem(item);
  sessionStorage.removeItem(item);
}
function deleteAll(item) {
  localStorage.removeItem(item);
  sessionStorage.removeItem(item);
}
// 2. Cookies
//There is an expiration date and data in the URL
const cookieOptions = {
  name: "user",
  value: "Sebas",
  maxAge: 10 * 60,
  expires: new Date(2099, 10, 1),
  path: "/", // optional string,
};
// Setting the Cookie
(0, cookies_utils_1.setCookie)(cookieOptions);
// Get Cookie Value
let readCookie = (0, cookies_utils_1.getCookieValue)("user");
// Delete
(0, cookies_utils_1.deleteCookie)("user");
// Delete All Cookies
(0, cookies_utils_1.deleteAllCookies)();
// **CLasses
// Let's create a course
// const courseTS: Course = new Course("TypeScript", 15);
// const courseJS: Course = new Course("JavaScript", 20);
// const coursesArray: Course[] = [];
// coursesArray.push(courseTS, courseJS); // [List of courses]
// We use MOCK
const coursesArray = courses_mock_1.COURSES_ARRAY;
// Let's create a Student
const sebastian = new Student_1.Student("Sebastian", coursesArray, "Peralta");
console.log(`${sebastian.name} studies:`);
// We iterate on each one of them
sebastian.courses.forEach((course) => {
  console.log(` - ${course.name} (${course.hours} hours)`); // - TypeScript (15 hours)
});
const courseAngular = new Course_1.Course("Angular", 40);
sebastian.courses.push(courseAngular); // We add a course
//Know the hours of studying
sebastian.studiedHours; // number
sebastian.studentId;
// Know the instance of an object/variable
// - typeof
// - instanceof
let birthDay = new Date(1999, 7, 10);
if (birthDay instanceof Date) console.log("It is an instance of Date");
if (sebastian instanceof Student_1.Student)
  console.log("Sebastian is an Student");
// Inheritance & Polymorphism
let employee1 = new Person_1.EmployeeExport("Sebas", "Peralta", 23, 3500);
let employee2 = new Person_1.EmployeeExport("Pepe", "Garcia", 21, 1500);
let employee3 = new Person_1.EmployeeExport("Juan", "Gonzales", 40, 2500);
// employee1.sayHi(); // Persona's Inheritance
let boss = new Person_1.Boss("Pablo", "Garcia", 50);
boss.employees.push(employee1, employee2, employee3);
boss.employees.forEach((employee) => {
  employee.sayHi();
});
employee1.sayHi(); // From Employee
boss.sayHi(); // From Boss
// **Interfaces
let code = {
  title: "Code in TypeScript",
  description: "Practice with Katas to learn how to develop with TypeScript",
  completed: true,
  urgency: ITodo_1.Level.Urgent,
  summary: function () {
    return `${this.title} - ${this.completed}`;
  },
};
console.log(code.summary());
// Programing Todo (implements ITodo)
let programingTS = new Code_1.Code(
  "TypeScript",
  "TS programing todo",
  false,
  ITodo_1.Level.Blocking
);
console.log(programingTS.summary());
// **Experimental Decorators --> @
// - Classes
// - Parameters
// - Methods
// - Properties
// function Override(label: string) {
//   return function (target: any, key: string) {
//     Object.defineProperty(target, key, {
//       configurable: false,
//       get: () => label,
//     });
//   };
// }
// class DecoratorTest {
//   @Override("Test") // Calling Override function
//   name: string = "Sebas";
// }
// let test = new DecoratorTest();
// console.log(test.name); // Test
// // Another decorator function
// function OnlyReading(target: any, key: string) {
//   Object.defineProperty(target, key, {
//     writable: false,
//   });
// }
// class OnlyReadingTest {
//   @OnlyReading
//   name: string = "";
// }
// let readingTest = new OnlyReadingTest();
// readingTest.name = "Sebas";
// console.log(readingTest.name); // ==> Undefined (only reading)
// // Decorator for a method parameter
// function showPosition(
//   target: any,
//   propertyKey: string,
//   parameterIndex: number
// ) {
//   console.log("Position", parameterIndex);
// }
// class MethodTest {
//   test(a: string, @showPosition b: boolean) {
//     console.log(b);
//   }
// }
// // We use the method with the parameter and the decorator
// new MethodTest().test("hello", false);
// * CREATION PATTERNS
// const myFirstSingleton = Singleton.getInstance();
// const mySecondSingleton = Singleton.getInstance();
// // Verify if both of them are equal
// if (myFirstSingleton === mySecondSingleton) {
//   console.log(
//     "Singleton works correctly, both variables contains the same instance."
//   );
//   myFirstSingleton.showByConsole();
//   mySecondSingleton.showByConsole();
// } else {
//   console.log("Singleton failed, variables contains different instances.");
// }
//# sourceMappingURL=index.js.map

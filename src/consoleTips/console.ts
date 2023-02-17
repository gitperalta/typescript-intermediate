// Console Log

console.log("Hello");

let list = ["One", "Two", "Three"];
list.forEach((_) => console.log);

let Name: string = "Sebas";

console.log(`Hello, ${Name}`);

// Console Clear
console.clear();

// Console Assert
let a: number = 100;
console.assert(a === 100, "Message", `Another Message: ${a}`);

// Console Count

function counter(text: string) {
  console.count(text);
}

counter("Hello"); // 1
counter("Good Bye"); // 1

counter("Hello"); // 2

console.countReset(); // Restart the counter

// Console Info, Warn o Error

console.info("Informative Text");
console.warn("Warning Text");
console.error("Error Text");

// Console Trace
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.trace(); // Trace the execution from the beginning
}

one(); // Initiate the tracing

// Console DIR --> Pretty object values

let car = {
  name: "Audi",
  registration: "123467",
  specifications: [
    {
      motor: "v12",
      power: "300CV",
    },
  ],
};

console.dir(car);

// Console Table --> Objects & Arrays to Tables

console.table(car);

// Console Time --> Measure the execution time

function wait() {
  for (let index = 0; index < 1_000; index++) {
    // ...
  }
}

console.time(); // Initiates the timer
wait();
console.timeEnd(); // finish and measure the time

// Console Group --> console grouping

console.group();
console.group("1");
console.group("2");
console.group("3");
console.group("4");
console.groupEnd();

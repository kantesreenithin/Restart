// "use strict";
//fun dec
function functionname() {
  //
}
//fun exp
const fun = function () {
  console.log("fun exp");
};
fun();

//fun constructor
const myFun = new Function("a", "b", "return a*b");
console.log(myFun(4, 5));
const myFun1 = function (a, b) {
  return a * b;
};
console.log(myFun1(2, 3));

//iife
(function () {
  console.log("Hello");
})();

console.log(myFun1);

//prop and method
function x(a, b) {
  return arguments.length;
}
console.log(x.length);
console.log(x.toString());

console.log(x(4, 2, 3, 4, 5));

(function fun2() {
  console.log(this);
})();
// const x = (x, y) => x * y;

// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this;
  },
};

// This will return [object Object] (the owner object)

console.log(myObject.fullName());

function fullname(city, country) {
  return `${this.firstName}  ${this.lastName} ${city} ${country}`;
}
const person = {
  firstName: "Sreenithin",
  lastName: "kante",
};

const person1 = {
  firstName: "shivachandra",
  lastName: "kante",
};
const Name = fullname.call(person);
console.log(Name);

const newName = fullname.call(person1, "karimnagar", "India");
console.log(newName);

const nam = fullname.apply(person1, ["knr", "ind"]);
console.log(nam);

console.log(person);
console.log(person1);

function show() {
  console.log(this);
}

show.apply(null);
show.apply(42);
// non strict mode
// Window {...} // or `global` in Node.js
// Number {42}

// strict mode
// null
// 42

const fullNameFun = fullname.bind(person1);
console.log(fullNameFun());
// console.log(fullNameFun("knr","ind"));

//polyfill for call apply bind
const car = {
  name: "swift",
  company: "maruti",
};
function displayCarDetails(price) {
  console.log(`Car:${this.name},Company:${this.company} and Price:${price}`);
}
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context.fun = this;
  context.fun(...args);
  delete context.fun;
};
displayCarDetails.myCall(car, 1000000);
// displayCarDetails.call(car, 1000000);
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("pass any array");
  }
  context.fun = this;
  context.fun(...args);
  delete context.fun;
};
displayCarDetails.myApply(car, [1000000]);
// displayCarDetails.apply(car, [1000000]);

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannaot bound as it is not callable");
  }
  context.fun = this;
  return function (...newArgs) {
    const result = context.fun(...args, ...newArgs);
    delete context.fun;
    return result;
  };
  // return (...newArgs) => this.apply(context, [...args, ...newArgs]);
};

const newFun = displayCarDetails.myBind(car, 1000000);
console.log(newFun);
newFun();

//closure - function along with its lexicalscope -
// fun access to parenst scope even after the parent fun closed

function myCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
let add = myCounter();
console.log(add());
console.log(add());
console.log(add());

// A closure is a function that has access to the parent scope, after the parent function has closed.

// Closures has historically been used to:

// Create private variables
// Preserve state between function calls
// Simulate block-scoping before let and const existed
// Implement certain design patterns like currying and memoization

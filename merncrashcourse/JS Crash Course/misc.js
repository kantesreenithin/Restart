//nested fun
// let a = 1;
// function outer() {
//   let b = 2;
//   function inner() {
//     let c = 3;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();
// console.log(c)

//closure - a function along with lexical scope
//the function has the ability to access the parent scpoe even after it has finished
//closure created every time a function is created

// function counter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }
// let add = counter();
// console.log(add);
// add();
// add();

// function loop() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// loop();

// function loop() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     },i*1000);
//   }
// }
// loop();

//using closures

//fix with iife

// function loop() {
//   for (var i = 1; i <= 5; i++) {
//     (function (i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     })(i);
//   }
// }
// loop();

//fix with close fun same like above
// function loop() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
// }
// loop();

// private counter
// function counter(){
//   var _counter=0;
//   function add(increment){
//     _counter+=increment;
//   }
//   function retrive(){
//     return "Counter: "+_counter;
//   }
//   return {
//     add,retrive,
//   };
// }
// const c=counter();
// c.add(5);
// c.add(10);
// console.log(c.retrive())

// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y; // Returning function 'y' instead of calling it
// }
// const cf = x();
// cf();

// function counter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }
// let add = counter();
// console.log(add);
// add();
// add();

//--------------------------------

// Currying transforms a function that takes
// multiple arguments into a series of nested functions,
// where each function takes one argument and returns another function.

function sum(a, b, c) {
  return a + b + c;
}
// console.log(sum(1, 2, 3));

function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const shortarrowsum = (a) => (b) => (c) => a + b + c;

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));

// function curry(a) {
//   return function (b) {
//     if (b) return curry(a + b);
//     return a;
//   };
// }
// console.log(curry(1)(2)());

//Logging, event handlers, array filtering,
// API calls, functional programming

const logger = (level) => (message) => `[${level.toUpperCase()}]: ${message}`;

const errorLog = logger("error");
const infoLog = logger("info");

// console.log(errorLog("Something went wrong!")); // [ERROR]: Something went wrong!
// console.log(infoLog("System running smoothly.")); // [INFO]: System running smoothly.

//this keyword

//implicit binding - obj.
//explicit binding - call methid
//new binding - new obj
//default binding - global scope , global obj-undefined

// order - new explicit implicit default

//prototype
// property

// the prototype is a container for methods and properties. (object)
// When methods or properties are added to the prototype of a
//  function,array, or string,
//  they become shared by all instances of that particular object type.

//each object has this prototype property,which point to another object
// this allows the obj to inherit properties and methods from its prototype

//prototypal inheritance
// function Person(fName, lName) {
//   this.fName = fName;
//   this.lName = lName;
// }
// Person.prototype.getFullName = function () {
//   return this.fName + " " + this.lName;
// };
// function SuperHero(fName, lName) {
//   //this={}
//   Person.call(this, fName, lName); //inherit parent class
//   this.isSuperHero = true;
// }
// SuperHero.prototype.fightCrime = function () {
//   console.log("Fighting Crime");
// };

// //inherit the prototype of parent fun
// //chaining the parent prototype
// SuperHero.prototype = Object.create(Person.prototype);
// //clear this that by default js take  p.construtor for child constructor
// SuperHero.prototype.constructor = SuperHero;

// const batman = new SuperHero("Sreenithin", "Kante");
// console.log(batman);
// console.log(batman.getFullName());

// class -- syntax better for prototype inheritance
class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  sayMyName() {
    return this.fName + " " + this.lName;
  }
}

const classP1 = new Person("Sreenithin", "Kante");
// console.log(classP1.sayMyName());
class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName); //call parent constructor
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fight Crime");
  }
}
const batman = new SuperHero("Sreenithin", "Kante");
// console.log(batman.sayMyName())

//iterable and iterators
//iterable-an object that implements iterator protocol
//that has method at key symbol.iterator that return iterator obj
//iterator -an object that has method at key next that return object having val and done
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// for (const word of obj) {
//   console.log(word);
// }

//generator fun - spl fun simple writing iterator
//simply creating iterator
//can stop midway and resume from there (pause) they use yeild keyword
function normalfun() {
  console.log("hello");
  console.log("world");
}
// normalfun();
// normalfun();

function* generatorFunction() {
  yield "Hello";
  yield "World";
}
//return iterator obj
const generatorObj = generatorFunction();
console.log(generatorObj);
console.log( generatorObj.next())
console.log( generatorObj.next())
console.log( generatorObj.next())
// for (const word of generatorObj) {
//   console.log(word);
// }

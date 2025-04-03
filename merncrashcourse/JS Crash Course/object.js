//deifne objects
const person = {};
person.name = "sreenithin";
person.age = 21;

console.log(person.name);

//new keyword
//obj constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const mySelf = new Person("sreenithin", 21);
console.log(mySelf.name);

//general methods

//Copies properties from a source object to a target object
//Object.assign(target, source)

// Creates an object from an existing object
// Object.create(object)
const Myself = Object.create(mySelf);
console.log(Myself.name);

// Creates an object from a list of keys/values
// Object.fromEntries()

// Returns an array of the key/value pairs of an object
// Object.entries(object)
// Returns an array of the keys of an object
// Object.keys(object)
// Returns an array of the property values of an object
// Object.values(object)

// Groups object elements according to a function
// Object.groupBy(object, callback)

//property management methods

// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing a Property
// Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
// Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
// Object.getOwnPropertyNames(object)

// Accessing the prototype
// Object.getPrototypeOf(object)

// obj protection methods
// Prevents re-assignment
// const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
// Object.preventExtensions(object)

// Returns true if properties can be added to an object
// Object.isExtensible(object)

// Prevents adding and deleting object properties
// Object.seal(object)

// Returns true if object is sealed
// Object.isSealed(object)

// Prevents any changes to an object
// Object.freeze(object)

// Returns true if object is frozen
// Object.isFrozen(object)

//prototype property
Person.prototype.nationality = "Hindu";

console.log(mySelf.nationality);

Person.prototype.fullname = function () {
  return this.name;
};

console.log(mySelf.fullname());
console.log(mySelf);

//general methods
const person1 = {
  firstname: "Jhon",
  lastname: "Doe",
  age: 50,
};

const person2 = { firstname: "anne", lastname: "smith" };

//assign
Object.assign(person1, person2);
console.log(person1);

//entries
console.log(Object.entries(person1));
//use obj in loop and can make maps
for (let [x, y] of Object.entries(person1)) {
  console.log(x + " " + y);
}
const myMap = new Map(Object.entries(person1));

//fromentries
const person3 = [
  ["name", "sreenithin"],
  ["age", 21],
];
const myObj = Object.fromEntries(person3);
console.log(myObj);

console.log(Object.values(mySelf));
console.log(Object.keys(mySelf));

const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];
// The Object.groupBy() method groups elements of an object
// according to string values returned from a callback function.

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result);

//porperty methods

Object.defineProperty(mySelf, "age", { value: "22" });
console.log(mySelf);
Object.defineProperty(mySelf, "language", { value: "EN" });
console.log(mySelf);
console.log(Object.getOwnPropertyNames(mySelf));
console.log(
  Object.defineProperty(mySelf, "fullname", {
    get: function () {
      return this.name;
    },
  })
);
console.log(mySelf.fullname);
console.log(Object.getPrototypeOf(mySelf));

const obj = { counter: 0 };

// Define setters
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (i) {
    this.counter -= i;
  },
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter);

console.log(Object.getOwnPropertyDescriptors(mySelf));
console.log(Object.getOwnPropertyDescriptor(mySelf, "name"));

//
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);

// Object.preventExtensions(car);
// console.log(Object.defineProperty(car, "speed", { value: 200 }));
// console.log(Object.isExtensible(car));

Object.seal(car);
// console.log(Object.defineProperty(car, "speed", { value: 200 }));
// console.log(delete car.type);

//can edit
// console.log(Object.defineProperty(car, "type", { value: "ferrari" }));
// console.log(car)

console.log(Object.isSealed(car));

Object.freeze(car);
// console.log(Object.defineProperty(car, "type", { value: "ferrari" }));
Object.isFrozen(car);

console.log(Object.getOwnPropertyNames(mySelf));
Object.defineProperty(mySelf, "name", { writable: false });

console.log(Object.getOwnPropertyDescriptor(mySelf, "name"));
// Object.defineProperty(mySelf, "name", { value: "snithin" });

mySelf.name = "snithin";
console.log(mySelf.name);

Object.defineProperty(mySelf, "name", { writable: false, configurable: false });
// Object.defineProperty(mySelf, "name", { writable: true});
// mySelf.name="snithin";
// Object.defineProperty(mySelf, "name", { value: "snithin" });

// Property	Meaning	Effect
// writable
// 	Controls if the value can be changed using obj.prop = newValue.
// - true: Can modify value ✅
// - false: Cannot modify value ❌ (unless configurable: true and defineProperty is used).
// enumerable
// Controls if the property appears in for...in loops and Object.keys().
// - true: Shows up in loops ✅
// - false: Hidden from loops ❌ (but still accessible directly).
// configurable
// Controls if the property can be redefined or deleted.
// - true: Can modify or delete the property ✅
// - false: Cannot change descriptors (writable, enumerable, configurable) or delete ❌.

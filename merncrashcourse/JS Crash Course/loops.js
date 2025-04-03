//for loop
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//Do not use for in over an Array if the index order is important.
//The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

//for in - loop on properties
const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
  console.log(x + "-" + person[x]);
}

const numbers = [45, 4, 9, 16, 25];
let txt = "";
// foreach
function fun(value) {
  txt += value;
}
numbers.forEach(fun);
console.log(txt);

// for of - loop on values
const cars = ["bmw", "volvo", "mini"];
for (let x of cars) {
  console.log(x);
}

let lan = "javascript";
for (let x of lan) {
  console.log(x);
}

// while
let text = "";
let i = 0;
while (i < 10) {
  text += " " + i;
  i++;
}
console.log(text);

// do {
//   text += " " + i;
//   i++;
// } while (i < 10);
// console.log(text)

//object destructing
const Person = {
  firstname: "Jhon",
  lastname: "doe",
  age: 10,
};
let { firstname, lastname } = Person;
console.log(firstname + " " + lastname);

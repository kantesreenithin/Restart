"use strict";

//global space
console.log(this); // global object - window(in browser) //global in node js

function x() {
  console.log(this); //undefined in strict mode
  //non-strict mode it will be window
}

// this substitution  (non-strict mode)
//if the value of this keyword is undefined or null - this will be replaced with global object only in non-strict mode

//this keyword depends on how the fun is called.
x(); //undefined
window.x(); //window

//this inside a object's method(function in object) method -x of  object obj
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x();
//value of this keyword will the object itself

//call apply bind  - modify the this

const obj2 = {
  a: 20,
};

const student = {
  name: "Sreenithin",
  printName: function () {
    console.log(this.name);
  },
};

student.printName();
//share method to student2 object
const student2 = {
  name: "kante",
};
// call will take value of this keyword
student.printName.call(student2); //value of this is student2

//this in arrow function
//don't have this binding but the value is [enclosing the lexical context]

const obj3 = {
  a: 10,
  x: () => {
    console.log(this); //global object because the lexical have global
  },
};
obj3.x();

const obj4 = {
  a: 10,
  x: function () {
    //enclosing the lexical context -(here the this keyword will have the object )
    const y = () => {
      console.log(this); //retains the lexical context it has obj2 in this (it behave as their no arrow fun)
    };
    y();
  },
};
obj4.x();
 
// this in DOM
// this reffers to the HTML element object

//this in JS class and constructor


// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run
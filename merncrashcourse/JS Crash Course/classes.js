class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  //   age() {
  //     let date = new Date();
  //     return date.getFullYear() - this.year;
  //   }
  age(x) {
    return x - this.year;
  }
  get carname() {
    return this.name;
  }
  set carname(x) {
    this.name = x;
  }
}
const myCar = new Car("swift", "2016");
console.log(myCar.name);
myCar.carname = "volvo";
console.log(myCar.carname);
// console.log(myCar.age());

const date = new Date();
let year = date.getFullYear();
console.log(myCar.age(year));

//inheritance
class Newcar {
  constructor(brand) {
    this.brand = brand;
  }
  getBrand() {
    return "I have a " + this.brand;
  }
}
class Model extends Newcar {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.getBrand() + ", it is a " + this.model;
  }
}
let myNewCar = new Model("skoda", "sedan");
console.log(myNewCar.show());

// The super() method refers to the parent class.
// By calling the super() method in the constructor method,
//  we call the parent's constructor method and
//  gets access to the parent's properties and methods.

//static
class staticCarClass {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "hello";
  }
  // static hello(x) {
  //   return "Hello " + x.name;
  // }
}
const mystaticCar = new staticCarClass("BMW");
// console.log(mystaticCar.hello());
console.log(staticCarClass.hello());
// console.log(staticCarClass.hello(mystaticCar));


// If you want to use the myCar object inside the static method, 
// you can send it as a parameter:
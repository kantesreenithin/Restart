class Person{
    constructor(first_name,last_name){
        this.first_name=first_name;
        this.last_name=last_name;
    }
    fullName(){
        return this.first_name+" "+this.last_name;
    }
}
const person1=new Person("sreenithin","kante");
console.log(person1.fullName());

//object traverse
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

const numbers = [45, 4, 9, 16, 25];

//do not use for in in arrays because the itreation will not be serial order
// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }
// console.log(txt);

const numbers1 = [45, 4, 9, 16, 25];
let txt1 = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt1 += value + "<br>";
}

//array traverse
const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text1 += x;
}
console.log(text1);
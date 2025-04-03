// let Name = {
//   firstname: "Sreenithin",
//   lastname: "kante",
//   printName: function () {
//     console.log(this.firstname + " " + this.lastname);
//   },
// };
// name.printName();

// let name2 = {
//   firstname: "Sree",
//   lastname: "Kante",
// };

// //function borrowing
// Name.printName.call(name2); //this points to name2

//call method
let name1 = {
  firstname: "Sreenithin",
  lastname: "kante",
};
let printName = function (hometown,state) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state);
};
// printName.call(name1,"karimnagar","TG");

let name2 = {
  firstname: "Sree",
  lastname: "Kante",
};
// printName.call(name2,"choppadandi","TG");


// apply()  method we have arrays [] we pass  arraylist of values. as second variable
printName.apply(name1,["karimnagar","TG"]);
printName.apply(name2,["CPD","TG"]);


//bind() method 
let printMyName=printName.bind(name1,"KNR","TG");
console.log(printMyName);//it is a function have copy and invoke later
printMyName();
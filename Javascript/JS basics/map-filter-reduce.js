//Map - transform,
const arr = [1, 2, 3, 4];

const double = function (x) {
  return x * 2;
};

const triple = function (x) {
  return x * 3;
};

const binary = function (x) {
  return x.toString(2);
};

const output = arr.map(binary);
// console.log(output);

//fun in map
// const output = arr.map(function (x) {
//   return x.toString(2);
// });
//arrow fun
// const output = arr.map((x) =>x.toString(2));
// console.log(output);

//filter in JS

// console.log(arr.filter((x)=> x>2));
// console.log(arr.filter((x)=> x%2));
// console.log(arr.filter((x)=> x%2==0));

//reduce in JS eg - sum,maximum  iterate over every value at find one value

const sumResult = arr.reduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 0);

const finMax = arr.reduce(function (acc, curr) {
  return Math.max(acc, curr);
}, 0);
// console.log(sumResult);
// console.log(finMax);

// real world examples

const users = [
  { firstName: "Sreenithin", lastName: "kante", age: 21 },
  { firstName: "Shivachandra", lastName: "kante", age: 24 },
  { firstName: "Shivasai", lastName: "Mudari", age: 22 },
  { firstName: "Siddaratha", lastName: "Mudari", age: 19 },
];

//list of full names
const fullNames = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullNames);

//find age [21:1 24:1 22:1 19:1]

const ageCount = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageCount);

const namesFilter = users.filter((x) => x.age > 20).map((x) => x.firstName);
console.log(namesFilter);
 
const fillFirstNames=users.reduce(function (acc, curr) {
    if(curr.age > 20){
        acc.push(curr.firstName); 
    }
    return acc;
}, []);
console.log(fillFirstNames);

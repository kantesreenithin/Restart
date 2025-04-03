const cars = ["swift", "skoda", "bmw"];
for (let x in cars) {
  console.log(x + "-" + cars[x]);
}
cars.forEach((x) => {
  console.log(x);
});
console.log(cars.toString());
console.log(cars);
console.log(typeof cars);
console.log(Array.isArray(cars));
console.log(cars instanceof Array);
//props and methods
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

//basic array methods
// length,toString,at,join,
// pop,push,shift,unshift,
// delete,concat,copyWithin,flat,
// splice,toSpliced,slice

console.log(cars.length);

console.log(cars.toString());

//used to acess the array element with neg numalso
console.log(cars.at(1));
console.log(cars.at(-1));
console.log(cars.at(-3));
console.log(cars[1]);

//join the array with specified char behave like tostring
console.log(cars.join(","));
console.log(cars.join(" "));

//pop -remove last ele and return poppped val
console.log(cars.pop());
console.log(cars.length);

//push - push new ele to end of array and return new array len
console.log(cars.push("bmw"));

//shift-  remove at beg and return popped val
console.log(cars.shift());
console.log(cars.length);

//unshift - add ele at beg and return len
console.log(cars.unshift("swift"));

//delete
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.
//delete cars[0]

//concat - merge arrays and return new array
const cars2 = ["polo", "audi", "rangerover"];
const cars3 = cars.concat(cars2);
console.log(cars3);
console.log(cars3.concat("defender"));

//copyWithin
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0));
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "grapes"];
console.log(fruits1.copyWithin(2, 0, 2));
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

//flat
// Flattening an array is the process of reducing the dimensionality of an array.
// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8, 9]],
];
console.log(myArr.flat());

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.map((x) => [x, x * 10]));
//flat map-first maps all the ele and then create a new array by flatening the array
console.log(arr.flatMap((x) => [x, x * 10]));

// splice - add new items to array and return array of deleted items
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// fruits3.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits3);

//return array of del items
console.log(fruits3.splice(2, 2, "Lemon", "Kiwi"));
console.log(fruits3);

//1st para - pos to add
//2nd para - items to del
//3rd para - items to add

//fruits.splice(0, 1); to remove ele without holes

//toSpliced - return new array deosn't change original arr
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
//create new array
console.log(fruits4.toSpliced(2, 1, "Lemon"));
console.log(fruits4);

//slice -sices out a piece of array and create a new array
const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//only 1 para - slices out the array from the given para
console.log(fruits5.slice(3));

//it two para - slices out the array from start to scd para (but not incl)the end and return the sliced part
console.log(fruits5.slice(1, 3));
console.log(fruits5.slice(2));

console.log(fruits5);

console.log("search on arrays");

//find and seacrh methods
// indexOf, lastIndexOf, includes,
// find, findIndex, findLast, findLastIndex;

//indexof - return index in array not found rtn -1
const Fruits = ["Apple", "Orange", "Apple", "Mango", NaN];
console.log(Fruits);
console.log(Fruits.indexOf("Apple") + 1);

console.log(Fruits.lastIndexOf("Apple") + 1);

// array.lastIndexOf(item, start);
// item	Required.- The item to search for
// start- Optional. Where to start the search.
//  Negative values will start at the given position counting from the end,
// and search to the beginning

//includes - used to check for the presence of item including NaN unlike indexOf
console.log(Fruits.includes("Orange"));
console.log(Fruits.includes("grapes"));
console.log(Fruits.includes(NaN));

//find - return first ele that passes a test function
const numbers = [4, 9, 16, 25, 29];
console.log(numbers.find((x) => x > 18));

//findIndex - rtn the index of first ele that passes a test
console.log(numbers.findIndex((x) => x > 18));

//findLast - find the last ele that passes a test function
//it starts from the end and return the first ele that passes a test fun
console.log(numbers.findLast((x) => x > 18));

//findLastIndex - return the index of last ele that passes the test fun
console.log(numbers.findLastIndex((x) => x > 18));

console.log("Array sort methods");
// alpabetic sort
// sort reverse toSorted toReversed
//numeric sort
// numeric sort, random sort, min, max,
//sorting objects

const Veges = ["Tomoto", "spinach", "potato", "brinjal"];
console.log(Veges);

// sort - sort in alphabetic order modify org array
console.log(Veges.sort());
// console.log(Veges);

//reverse - reverse the array modeify org array
console.log(Veges.reverse());
// console.log(Veges);

// By combining sort() and reverse(), you can sort an array in descending order:
// Veges.sort();
// Veges.reverse();
// console.log(Veges);

const months = ["jan", "feb", "mar", "apr"];
console.log("months: " + months);

//toSorted - sort and return new sorted array
console.log(months.toSorted());

//toReversed - reverse and return new rev array
console.log(months.toReversed());

// numeric sort
const points = [40, 100, 1, 5, 25, 10];
console.log(points);
//asc
console.log(points.sort((a, b) => a - b));
//desc
console.log(points.sort((a, b) => b - a));

// function(a, b){return a - b}
// When the sort() function compares two values,
// it sends the values to the compare function, and
// sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.

//in random order
console.log(
  points.sort(() => {
    return 0.5 - Math.random();
  })
);
// Fisher Yates shuffle

//min and max
// There are no built-in functions for finding the max or min value in an array.
// To find the lowest or highest value you have 3 options:
// Sort the array and read the first or last element
// Use Math.min() or Math.max()
// Write a home made function

//sorting - inefficient
//use math.min and math.max

console.log(Math.min.apply(null, points));
console.log(Math.max.apply(null, points));
// console.log(Math.max(...points));
// console.log(Math.min(...points));

const Cars = [
  {
    type: "suv",
    model: "fortuner",
    year: 2018,
  },
  {
    type: "sedan",
    model: "skoda",
    year: 2016,
  },
];
console.log(Cars);
//sortng array of objects based on number prop
console.log(Cars.toSorted((a, b) => a.year - b.year));
//sorting an aray of object based on string prop
console.log(
  Cars.toSorted((a, b) => {
    let x = a.model.toLowerCase();
    let y = b.model.toLowerCase();
    if (x < y) return -1;
    else if (x > y) return 1;
    else 0;
  })
);

//iteration methods
//forEach map flatMap filter reduce reduceRight
//every some from keys entries with
//spread
console.log("iteration methods");

const Numbers = [45, 4, 9, 25];

//forEach - calls a function once for each ele in array
Numbers.forEach((x) => console.log(x));

//map - creates a new arr by performing a fun on each arr ele
console.log(Numbers.map((x) => x * 2));

//flatMap - map all the ele and then flatten the arr
console.log(Numbers.flatMap((x) => x * 2));

//filter - creates a new array with array ele that paases a test fun
console.log(Numbers.filter((x) => x > 20));

//the three map filter reduce cb fun takes 3 args
//1.item val
//2.item index
//3.array

//reduce - runs a fun on each array ele to produce (to reduce it) a single val
console.log(Numbers.reduce((acc, x) => acc + x));

//reduceRight - runs a fun on each array ele to produce (to reduce it) a single val
console.log(Numbers.reduceRight((acc, x) => acc + x));
console.log(Numbers.reduceRight((acc, x) => Math.max(acc, x)));

//both reduce and reduceRight cb fun take 4 args
//1.the total
//2.the item val
//3.the item index
//4.array

//every - check if all array values pass a test
console.log(Numbers.every((x) => x > 18));

//some - check if some array values pass a test
console.log(Numbers.some((x) => x > 18));

//the three map filter reduce cb fun takes 3 args
//1.item val
//2.item index
//3.array

//from - method returns an array obj from any obj with a len prop or
// iterable obj
console.log(Array.from("ABCDEFG"));

//keys - return array iterable obj with keys of array
let keys = Numbers.keys();
for (let x of keys) {
  console.log(x, Numbers[x]);
}
console.log(Numbers.keys());

// entries - returns an array itertor obj with key/val pairs
let entry = Numbers.entries();
for (let x of entry) {
  console.log(x);
}
console.log(Numbers.entries());

//with - update the ele in an array w/o changing org array (new array)
console.log(Numbers.with(2, 36));
console.log(Numbers);

// spread - exapnds an iterable (array) into more ele
// ...arr
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

// Arrays are Not Constants
// The keyword const is a little misleading.

// It does NOT define a constant array. It defines a constant reference to an array.

// Because of this, we can still change the elements of a constant array.

//polyfill
console.log("polyfill for map filter reduce");
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
const Arr = [1, 2, 3, 4];
console.log(Arr.myMap((num, i, arr) => num * 2));

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
console.log(Arr.myFilter((num, i, arr) => num > 2));

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
console.log(
  Arr.myReduce((acc, cur, i, arr) => {
    return acc + cur;
  }, 0)
);

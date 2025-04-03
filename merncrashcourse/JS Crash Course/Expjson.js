// You can receive pure text from a server and use it as a JavaScript object.
// You can send a JavaScript object to a server in pure text format.
// You can work with data as JavaScript objects, with no complicated parsing and translations.

// JavaScript has a built in function for converting JSON strings into JavaScript objects:
// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:
// JSON.stringify()

//JSON.parse() - when receiving the data from server convert to obj - use parse
const jsonvar = '{ "name": "Sreenithin", "age": 21 }';
const obj = JSON.parse(jsonvar);
console.log(obj);
console.log(obj.name);
console.log(JSON.stringify(obj));

const text = '["ford","bmw","audi","fiat"]';
console.log(JSON.parse(text));

//JSON.stringify() - when sending data to server the data has to be string use stringify

const Obj = { name: "Sreeithin", age: 21 };
console.log(JSON.stringify(Obj));

//storing data
let myJson = JSON.stringify(Obj);
localStorage.setItem("mystorage", myJson);

//Retrieving data
let txt = localStorage.getItem("mystorage");
console.log(JSON.parse(txt));

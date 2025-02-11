// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value");
//   }, 20000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value");
//   }, 40000);
// });
// //await can only used in async fun
// async function handlePromise() {
//   //JS Engine will wait until promise gets resolve (acting to wait)
//   console.log("hello world");
//   const val = await p1; //gets resolved and value saves in variable
//   console.log("will wait for promise to be resolved");
//   console.log(val);

//   const val2 = await p2; //gets resolved and value saves in variable
//   console.log("will wait for promise to be resolved");
//   console.log(val2);
// }
// // handlePromise();

// real world examples
// const API_URL = "https://api.github.com/users/kantesreenithin";
// async function handlePromise() {
//   //fetch()=> returns response(promise object) then we need to convert to json object (ie promise) which gives the value
//   //   fetch(API_URL).then((res)=> res.json).then((res)=>console.log(res));

//   const data = await fetch(API_URL); //return promise object
//   const jsonValue = await data.json(); //return promise object
//   console.log(jsonValue);
// }
// handlePromise();

//error handling catch in promise
const API_URL = "https://api.github.com/users/kantesreenithin";
async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
  //   console.log(jsonValue);
}
handlePromise();

// handlePromise().catch((err) => {console.log(err)}); only catch


//interview

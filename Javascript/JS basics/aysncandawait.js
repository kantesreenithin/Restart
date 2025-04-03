//always returns a promise if it is value then wrap into a promise
// async function getData() {
//   return "value";
// }
// const dataPromise = getData();
// dataPromise.then((res)=>console.log(res));
// console.log(dataPromise);

//returning a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000);
});
// async function getData() {
//   return p;//it return as it is as p
// }
// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

// Async and Await
//used to handle promises

// before async and await
// function getData() {
    //JS engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("printed first");
// }
// getData();

const p1 = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});
//await can only used in async fun
async function handlePromise() {
    //JS Engine will wait until promise gets resolve
    console.log("hello world");
  const val = await p; //gets resolved and value saves in variable
  console.log("will wait for promise to be resolved");
  console.log(val);
}
handlePromise();
